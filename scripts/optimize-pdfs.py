#!/usr/bin/env python3
"""
Recompress the syllabus / brochure PDFs in `public/downloads`.

These files are Canva exports. Around 85-90% of their bytes are raster images
stored *losslessly* (Flate, 8-bit RGB plus an ICC profile), and most are held
at 2-4x the resolution their placed size can ever display. Text is vector and
costs almost nothing, so it is left completely alone.

This script sizes every image to the resolution its on-page rectangle actually
needs at the target DPI, then re-encodes it as JPEG. On the current set that
takes 444 MB down to ~108 MB (75.7%) with text, links, alt text and the tagged
structure tree all preserved.

    python scripts/optimize-pdfs.py --all --verify

Requires: PyMuPDF, Pillow, pypdf.

Three things here are load-bearing. Do not "simplify" them away:

1. `Page.replace_image()` is NOT used. It rewrites the image XObject dict and
   was observed to emit "no XObject subtype specified" on some pages, meaning
   that page could render incorrectly. Instead the stream is swapped with
   `Document.update_stream(..., compress=False)` and only the keys describing
   the new encoding are set, so the object structure is untouched.

2. `update_stream(compress=True)` (the default) deflates the JPEG we just wrote
   while the dict still says /DCTDecode, producing a corrupt image. It must be
   `compress=False`.

3. `save(deflate=True)` re-compresses those same streams for the same reason,
   and `clean=True` rewrites content streams that then stay uncompressed
   because deflate is off -- which made output 26% *larger*. Save with
   `clean=False, deflate=False`.

Images referenced as a soft mask are never re-encoded; they carry the
transparency for the image that points at them. Images that would grow are left
as they are. Files that would grow are skipped.
"""

import argparse
import io
import os
import sys

import fitz  # PyMuPDF
from PIL import Image, ImageChops

SUPPORTED_BPC = {8}
# 1 = grayscale, 3 = RGB. Indexed / CMYK / unknown colourspaces are left alone.
SUPPORTED_COLORSPACES = {1, 3}
MIN_BYTES_TO_BOTHER = 40000


def _colorspace_ok(info):
    return (info.get("colorspace") or 0) in SUPPORTED_COLORSPACES


def build_rect_map(doc):
    """Largest on-page placement rectangle per image xref."""
    rects = {}
    for pno in range(len(doc)):
        page = doc[pno]
        for img in page.get_images(full=True):
            xref = img[0]
            try:
                found = page.get_image_rects(xref)
            except Exception:
                continue
            for rect in found:
                current = rects.get(xref)
                if current is None or rect.width * rect.height > current.width * current.height:
                    rects[xref] = rect
    return rects


def mask_xrefs(doc):
    """Every xref used as a soft mask by another image."""
    masks = set()
    for pno in range(len(doc)):
        for img in doc[pno].get_images(full=True):
            if img[1]:
                masks.add(img[1])
    return masks


def optimize(src, dst, dpi=150, quality=72):
    """Write a recompressed copy of `src` to `dst`. Returns counters."""
    doc = fitz.open(src)
    rects = build_rect_map(doc)
    masks = mask_xrefs(doc)

    stats = {"jpeg": 0, "downscaled": 0, "kept": 0, "mask": 0, "format": 0}
    seen = set()

    for pno in range(len(doc)):
        page = doc[pno]
        for img in page.get_images(full=True):
            xref = img[0]
            if xref in seen:
                continue
            seen.add(xref)

            if xref in masks:
                stats["mask"] += 1
                continue

            rect = rects.get(xref)
            if not rect or rect.width <= 0 or rect.height <= 0:
                stats["kept"] += 1
                continue

            try:
                info = doc.extract_image(xref)
            except Exception:
                stats["kept"] += 1
                continue

            if info.get("bpc") not in SUPPORTED_BPC or not _colorspace_ok(info):
                stats["format"] += 1
                continue

            raw = info["image"]
            native_w, native_h = info["width"], info["height"]
            target_w = max(1, int(round(rect.width / 72.0 * dpi)))
            target_h = max(1, int(round(rect.height / 72.0 * dpi)))

            if (
                native_w <= target_w * 1.05
                and native_h <= target_h * 1.05
                and len(raw) < MIN_BYTES_TO_BOTHER
            ):
                stats["kept"] += 1
                continue

            # Never re-encode an image that is already JPEG unless it is still
            # larger than its placed size needs. Re-running the script on an
            # already-processed file must not compound lossy generation loss.
            needs_resize = native_w > target_w * 1.05 or native_h > target_h * 1.05
            if info.get("ext") == "jpeg" and not needs_resize:
                stats["kept"] += 1
                continue

            try:
                image = Image.open(io.BytesIO(raw))
                image.load()
            except Exception:
                stats["kept"] += 1
                continue

            if image.mode not in ("RGB", "L"):
                image = image.convert("RGB")

            if image.width > target_w * 1.05 or image.height > target_h * 1.05:
                image = image.resize(
                    (min(image.width, target_w), min(image.height, target_h)),
                    Image.LANCZOS,
                )
                stats["downscaled"] += 1

            buf = io.BytesIO()
            image.save(
                buf,
                format="JPEG",
                quality=quality,
                optimize=True,
                subsampling=2,
            )
            encoded = buf.getvalue()

            if len(encoded) >= len(raw):
                stats["kept"] += 1
                continue

            try:
                doc.update_stream(xref, encoded, compress=False)
                doc.xref_set_key(xref, "Filter", "/DCTDecode")
                doc.xref_set_key(xref, "Width", str(image.width))
                doc.xref_set_key(xref, "Height", str(image.height))
                doc.xref_set_key(xref, "BitsPerComponent", "8")
                doc.xref_set_key(
                    xref, "ColorSpace", "/DeviceGray" if image.mode == "L" else "/DeviceRGB"
                )
                doc.xref_set_key(xref, "DecodeParms", "null")
                stats["jpeg"] += 1
            except Exception:
                stats["kept"] += 1

    doc.save(
        dst,
        garbage=4,
        clean=False,
        deflate=False,
        deflate_images=False,
    )
    doc.close()
    return stats


def page_warnings(path):
    """Per-page MuPDF warnings that indicate a malformed object."""
    doc = fitz.open(path)
    hits = []
    for pno in range(len(doc)):
        try:
            fitz.TOOLS.mupdf_warnings(reset=True)
            doc[pno].get_pixmap(dpi=72)
            warning = fitz.TOOLS.mupdf_warnings() or ""
        except Exception as exc:
            hits.append((pno, "raise: %s" % str(exc)[:60]))
            continue
        if "XObject" in warning or "syntax error" in warning:
            hits.append((pno, warning.strip().replace("\n", " ")[:90]))
    doc.close()
    return hits


def verify(src, dst, render_dpi=110, threshold=1.5):
    """Compare a recompressed file against its source."""
    a = fitz.open(src)
    b = fitz.open(dst)
    result = {
        "pages_src": len(a),
        "pages_out": len(b),
        "text_identical": None,
        "links": None,
        "worst_diff_pct": None,
        "worst_page": None,
        "over_threshold": [],
        "warnings": [],
    }

    text_a = "\n".join(p.get_text() for p in a)
    text_b = "\n".join(p.get_text() for p in b)
    result["text_identical"] = text_a.strip() == text_b.strip()

    if len(a) == len(b):
        result["links"] = (
            sum(len(p.get_links()) for p in a),
            sum(len(p.get_links()) for p in b),
        )
        worst = (0.0, -1)
        for pno in range(len(a)):
            pix_a = a[pno].get_pixmap(dpi=render_dpi)
            pix_b = b[pno].get_pixmap(dpi=render_dpi)
            img_a = Image.frombytes("RGB", (pix_a.width, pix_a.height), pix_a.samples)
            img_b = Image.frombytes("RGB", (pix_b.width, pix_b.height), pix_b.samples)
            if img_a.size != img_b.size:
                img_b = img_b.resize(img_a.size)
            histogram = ImageChops.difference(img_a, img_b).convert("L").histogram()
            total = img_a.size[0] * img_a.size[1]
            pct = sum(histogram[17:]) / total * 100.0
            if pct > threshold:
                result["over_threshold"].append((pno, round(pct, 2)))
            if pct > worst[0]:
                worst = (pct, pno)
        result["worst_diff_pct"] = round(worst[0], 2)
        result["worst_page"] = worst[1]

    result["warnings"] = page_warnings(dst)
    a.close()
    b.close()
    return result


def process(src, dst, dpi, quality, do_verify, quiet=False):
    before = os.path.getsize(src)
    stats = optimize(src, dst, dpi=dpi, quality=quality)
    after = os.path.getsize(dst)

    if after >= before:
        if os.path.abspath(src) != os.path.abspath(dst):
            os.remove(dst)
        print("skip   %-62s already smaller" % os.path.basename(src)[:62])
        return True

    saved = 100 - after / before * 100
    if quiet:
        print("ok     %-62s %.1f -> %.1f MB (%.1f%%)" % (
            os.path.basename(src)[:62], before / 1048576, after / 1048576, saved))
        return True

    print("%-62s %6.1f -> %5.1f MB  %5.1f%%" % (
        os.path.basename(src)[:62], before / 1048576, after / 1048576, saved))
    print("       %s" % stats)

    if not do_verify:
        return True

    result = verify(src, dst)
    ok = (
        not result["warnings"]
        and result["text_identical"]
        and result["pages_src"] == result["pages_out"]
        and result["links"][0] == result["links"][1]
    )
    print("       pages=%d/%d text=%s links=%s/%s worst=%.2f%% warnings=%s" % (
        result["pages_src"], result["pages_out"], result["text_identical"],
        result["links"][0], result["links"][1], result["worst_diff_pct"],
        result["warnings"] or "none"))
    if result["over_threshold"]:
        print("       pages over %.1f%%: %s" % (1.5, result["over_threshold"]))
    if not ok:
        print("       !! FAILED verification")
    return ok


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("paths", nargs="*", help="PDF files to process")
    parser.add_argument("--all", action="store_true", help="process every PDF in public/downloads")
    parser.add_argument("--dir", default=os.path.join("public", "downloads"), help="directory for --all")
    parser.add_argument("--out-dir", help="write here instead of in place")
    parser.add_argument("--dpi", type=int, default=150, help="target resolution for placed images")
    parser.add_argument("--quality", type=int, default=72, help="JPEG quality")
    parser.add_argument("--verify", action="store_true", help="compare output against source")
    args = parser.parse_args()

    targets = list(args.paths)
    if args.all:
        targets += [
            os.path.join(args.dir, name)
            for name in sorted(os.listdir(args.dir))
            if name.lower().endswith(".pdf")
        ]
    if not targets:
        parser.error("give one or more PDF paths, or --all")

    if args.out_dir:
        os.makedirs(args.out_dir, exist_ok=True)

    failures = []
    before_total = after_total = 0
    for src in targets:
        dst = os.path.join(args.out_dir, os.path.basename(src)) if args.out_dir else src
        # optimize() needs a distinct temp file when overwriting in place.
        work = dst
        if os.path.abspath(src) == os.path.abspath(dst):
            work = dst + ".optimized.tmp"
        try:
            before_total += os.path.getsize(src)
            ok = process(src, work, args.dpi, args.quality, args.verify)
            if os.path.abspath(work) != os.path.abspath(dst) and os.path.exists(work):
                os.replace(work, dst)
            after_total += os.path.getsize(dst)
            if not ok:
                failures.append(os.path.basename(src))
        except Exception as exc:
            print("error  %-62s %s" % (os.path.basename(src)[:62], exc))
            failures.append(os.path.basename(src))
            before_total += os.path.getsize(src)
            after_total += os.path.getsize(src)

    print("\ntotal  %.1f MB -> %.1f MB  (%.1f%% smaller, %.1f MB saved)" % (
        before_total / 1048576, after_total / 1048576,
        100 - after_total / before_total * 100,
        (before_total - after_total) / 1048576))
    if failures:
        print("FAILED: %s" % failures)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Link as LinkIcon, Copy, ArrowLeft, ArrowRight, Search, ShieldCheck, X } from "lucide-react";
import dynamic from "next/dynamic";
import { AAAVerificationChoiceModal } from "../ui/AAAVerificationChoiceModal";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";

// Define local type for component state, matching Sanity schema
type SanityCertificate = {
  certificateId: string;
  holderName: string;
  program: "AAA" | "CDPL";
  status: "Valid" | "Revoked" | "Expired";
  certificateImage: any; // Image object
};

// Adapter type to match existing component expectations if needed
// Or we just update usages. Let's update usages to use Sanity fields directly.
// Existing usage: result.id, result.holder, result.program, result.status.
// Sanity fields: certificateId, holderName, program, status.
// We can just map them or update UI to use new names. 
// Let's Map them to existing 'Certificate' interface to minimize UI churn.

import { Certificate } from "@/types/certificate";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
    </div>
  );
}

/* Dynamic import of the named export */
const CertificationPreviewSection = dynamic(
  () => import("./CertificationPreviewSection").then((m) => m.CertificationPreviewSection),
  { ssr: false, loading: () => <SectionLoader label="Loading preview..." /> }
);

// ============================================================================
// INNER COMPONENT - Uses useSearchParams
// ============================================================================
function CertificationValidatorContent() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // AAA Choice State
  const [showAAAChoice, setShowAAAChoice] = useState(false);
  const [pendingCertificate, setPendingCertificate] = useState<Certificate | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Accept generic alphanumeric IDs with dashes/underscores
  const pattern = useMemo(() => /^[A-Z0-9-_]+$/i, []);

  const setUrlId = (id?: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (!id) params.delete("id");
    else params.set("id", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const validateAndShow = async (raw: string) => {
    const id = raw.trim().toUpperCase();
    setError("");
    setResult(null);
    setCopied(false);
    setShowAAAChoice(false);
    setPendingCertificate(null);

    if (!pattern.test(id)) {
      setError(
        "Invalid format. Please enter a valid Certificate ID (A–Z, 0–9)."
      );
      setUrlId(undefined);
      return;
    }

    setLoading(true);
    try {
      // Fetch from Sanity
      const sanityQuery = `*[_type == "certificate" && certificateId == $id][0]`;
      const sanityDoc = await client.fetch<SanityCertificate>(sanityQuery, { id });

      if (!sanityDoc) {
        setError("No certificate found for this ID.");
        setUrlId(undefined);
        return;
      }

      // Map Sanity Doc to Component State
      const imageUrl = sanityDoc.certificateImage ? urlFor(sanityDoc.certificateImage).url() : "";

      const mappedCert: Certificate = {
        id: sanityDoc.certificateId,
        holder: sanityDoc.holderName,
        program: sanityDoc.program,
        status: sanityDoc.status,
        imageUrl: imageUrl
      };

      const hit = mappedCert;

      // Intercept AAA certificates
      if (hit.program === "AAA") {
        setPendingCertificate(hit);
        setShowAAAChoice(true);
        return;
      }

      setResult(hit);
      setUrlId(hit.id); // show in URL for sharing

    } catch (err) {
      console.error("Validation error:", err);
      setError("An error occurred while verifying. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAAAChoice = (type: "official" | "cdpl") => {
    if (type === "official") {
      window.open("https://aaa-accreditation.org/adcp/", "_blank");
      // Optional: Close the choice if they go to official site?
      // Or keep it open. Let's keep it open so they see what happened or can choose the other.
      // Actually, user said "choose... to validate it either from official site or cdpl".
      // If they go official, they leave (new tab).
    } else {
      // CDPL
      if (pendingCertificate) {
        setResult(pendingCertificate);
        setUrlId(pendingCertificate.id);
      }
      setShowAAAChoice(false);
      setPendingCertificate(null);
    }
  };

  const resetValidator = () => {
    setQuery("");
    setResult(null);
    setUrlId(undefined);
    setError("");
    setCopied(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateAndShow(query);
  };

  // Auto-load from ?id=...
  useEffect(() => {
    const id = searchParams?.get("id");
    if (id) {
      setQuery(id);
      validateAndShow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- Lightbox State ---------- */
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setShowAAAChoice(false); // Also close AAA choice on Esc
      }
    };
    if (isLightboxOpen || showAAAChoice) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    }
  }, [isLightboxOpen, showAAAChoice]);

  // Hydration-safe links
  const absoluteShareUrl =
    result
      ? `https://www.cinutedigital.com${pathname}?id=${encodeURIComponent(result.id)}`
      : null;

  const relativeShareUrl =
    result
      ? `${pathname}?id=${encodeURIComponent(result.id)}`
      : "#";

  const copyShare = async () => {
    if (!absoluteShareUrl) return;
    try {
      await navigator.clipboard.writeText(absoluteShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };


  const status = result?.status?.toLowerCase();
  const STATUS_BADGE =
    status === "valid" || status === "verified"
      ? { label: "Verified", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200", Icon: CheckCircle2 }
      : status === "revoked"
        ? { label: "Revoked", cls: "bg-red-50 text-red-700 ring-red-200", Icon: AlertCircle }
        : status === "expired"
          ? { label: "Expired", cls: "bg-amber-50 text-amber-700 ring-amber-200", Icon: AlertCircle }
          : null;

  return (
    <section id="validator-section" aria-label="Validate a certificate" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">

        {/* AAA Choice Modal */}
        <AAAVerificationChoiceModal
          isOpen={showAAAChoice}
          onClose={() => setShowAAAChoice(false)}
          certificate={pendingCertificate}
          onOfficialVerify={() => handleAAAChoice("official")}
          onCdplVerify={() => handleAAAChoice("cdpl")}
        />

        {/* Lightbox Overlay */}
        {isLightboxOpen && result && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-h-full max-w-5xl rounded-lg bg-white p-1">
              <button
                type="button"
                aria-label="Close preview"
                className="absolute -right-3 -top-3 rounded-full bg-white p-1 shadow-md hover:bg-slate-100"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X className="h-5 w-5 text-slate-700" aria-hidden="true" />
              </button>
              <div
                className="overflow-auto"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
              >
                <CertificationPreviewSection cert={result} isLightbox={true} />
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* ===== Result ===== */}
        {result && (
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8" aria-live="polite">
            <div className="grid gap-8 sm:grid-cols-5">
              {/* Info */}
              <div className="order-2 sm:order-1 sm:col-span-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">Course Completion Certificate</h2>
                  {STATUS_BADGE && (
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_BADGE.cls}`}>
                      <STATUS_BADGE.Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {STATUS_BADGE.label}
                    </span>
                  )}
                </div>

                <dl className="mt-5 grid grid-cols-1 gap-4 text-sm text-slate-900 sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">Certificate ID</dt>
                    <dd className="break-all font-mono font-medium">{result.id}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Holder</dt>
                    <dd className="font-medium">{result.holder}</dd>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1 sm:col-span-2">
                    <dt className="font-semibold text-slate-500">Shareable link</dt>
                    <dd className="flex items-center gap-2">
                      <Link
                        href={relativeShareUrl}
                        className="inline-flex min-w-0 items-center gap-1 font-medium text-slate-800 underline-offset-4 transition-colors hover:text-brand hover:underline"
                      >
                        <LinkIcon className="h-3.5 w-3.5 flex-shrink-0 text-brand" aria-hidden="true" />
                        <span className="truncate">{absoluteShareUrl}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={copyShare}
                        className="flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand hover:text-brand"
                        aria-label="Copy shareable link"
                      >
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={resetValidator}
                  className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-brand hover:text-brand"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Check another certificate
                </button>

                <p className="mt-6 text-xs text-slate-500">
                  This verification is provided by CDPL (Cinute Digital Private Limited). If you suspect misuse,{" "}
                  <Link href="/contact-us" className="underline underline-offset-2 hover:text-brand">
                    contact CDPL support
                  </Link>
                  .
                </p>
              </div>

              {/* Image */}
              <div className="order-1 sm:order-2 sm:col-span-2">
                <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                  <CertificationPreviewSection cert={result} onClick={() => setIsLightboxOpen(true)} />
                </div>
                <p className="mt-2 text-center text-xs text-slate-500">Click the image to enlarge</p>
              </div>
            </div>
          </div>
        )}

        {/* ===== Form ===== */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-brand">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Enter a certificate ID</h2>
              <p id="certHelp" className="mt-1 text-sm text-slate-600">
                Use the exact ID printed on the certificate (e.g. CDPLXYXDVE).
              </p>
            </div>
          </div>

          {error && (
            <div role="alert" className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="certId" className="sr-only">
              Certificate ID
            </label>
            <div className="relative">
              <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="certId"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: CDPLXYXDVE or CD402 (AAA)"
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-16 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-orange-200 [color-scheme:light]"
                aria-describedby="certHelp"
                autoComplete="off"
                spellCheck={false}
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                  aria-label="Clear"
                >
                  Clear
                </button>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                  Verifying...
                </>
              ) : (
                <>
                  Validate
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>

            <div className="col-span-full flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium text-slate-500">Try an example:</span>
              <button
                type="button"
                onClick={() => setQuery("CDPLXYXDVE")}
                className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-brand hover:text-brand"
                aria-label="Use example CDPLXYXDVE"
              >
                CDPL
              </button>
              <button
                type="button"
                onClick={() => setQuery("CD402")}
                className="flex cursor-pointer items-center gap-1 rounded-full border border-slate-200 bg-white py-1 pl-2 pr-3 text-xs font-semibold text-slate-700 hover:border-brand hover:text-brand"
                aria-label="Use example CD402"
              >
                <Image
                  src="/certifications_images/logos/logo_aaa.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-3 w-4 object-contain"
                />
                AAA
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SKELETON - same shape as the form card, so nothing shifts on hydration
// ============================================================================
function ValidatorSkeleton() {
  return (
    <section id="validator-section" aria-label="Validate a certificate" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="animate-pulse">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-100" />
              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-6 w-56 rounded bg-slate-100" />
                <div className="h-5 w-80 max-w-full rounded bg-slate-100" />
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="h-[50px] rounded-xl bg-slate-100" />
              <div className="h-[50px] w-36 rounded-xl bg-slate-100" />
              <div className="col-span-full flex gap-2 pt-1">
                <div className="h-6 w-24 rounded bg-slate-100" />
                <div className="h-6 w-16 rounded-full bg-slate-100" />
                <div className="h-6 w-16 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// OUTER COMPONENT - Wraps with Suspense
// ============================================================================
export default function CertificationValidatorSection() {
  return (
    <Suspense fallback={<ValidatorSkeleton />}>
      <CertificationValidatorContent />
    </Suspense>
  );
}

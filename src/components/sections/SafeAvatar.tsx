// /src/components/sections/SafeAvatar.tsx
"use client";
import Image from "next/image";
// NOTE: keeping only the constants you actually use right now.
import { /* avatarFor, */ AVATAR_FALLBACK } from "@/data/reviews";

export default function SafeAvatar({
  name,
  className,
  sizes = "36px",
  alt,
  ring = true,
}: {
  name: string;          // kept for future; not used now
  className?: string;
  sizes?: string;
  alt?: string;
  ring?: boolean;
}) {
  // ---- Previous logic kept for future reference ----
  // const candidates = [avatarFor(name, "jpg"), avatarFor(name, "jpeg"), avatarFor(name, "png"), AVATAR_FALLBACK];
  // const [idx, setIdx] = useState(0);
  // const src = candidates[idx];
  // const handleError = () => setIdx(i => (i < candidates.length - 1 ? i + 1 : i));
  // ---------------------------------------------------

  // For performance now: always use fallback
  const src = AVATAR_FALLBACK;

  return (
    <span
      className={[
        "relative inline-block overflow-hidden rounded-full",
        ring ? "ring-2 ring-white" : "",
        className ?? "",
      ].join(" ")}
      style={{ width: 36, height: 36 }}
      aria-hidden={alt ? undefined : true}
    >
      <Image
        src={src}
        alt={alt || `${name} avatar`}
        title={alt || `${name} avatar`}
        fill
        sizes={sizes}
        className="object-cover"
        // With a guaranteed local asset, onError + optimizer tweaks aren’t needed,
        // but leaving unoptimized keeps consistency with your usage elsewhere.
        unoptimized
        loading="lazy"
      />
    </span>
  );
}

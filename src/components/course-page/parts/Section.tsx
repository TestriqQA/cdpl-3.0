import type { ReactNode } from "react";
import { Heading, Rich } from "@/components/ui/Rich";

/*
 * Spacing and surface tokens for every course-page section, so gaps are the
 * same everywhere:
 *   section padding  py-8 sm:py-12 md:py-16 (site scale, same as ui/FAQSection),
 *                    backgrounds alternate white / slate-50
 *   header → body    mt-10 (40px)   SPACE.body
 *   body → note      mt-4  (16px)   SPACE.note   one-line footnotes under a grid
 *   body → outro/CTA mt-10 (40px)  SPACE.block  closing paragraph, button row
 *   grid gap         gap-4 sm:gap-5 (16 / 20px)
 */
export const SPACE = {
  section: "py-8 sm:py-12 md:py-16",
  body: "mt-10",
  note: "mt-4",
  block: "mt-10",
} as const;

export const GRID_GAP = "gap-4 sm:gap-5";

/** White card on any section background. Add p-6 (regular) or p-5 (compact). */
export const CARD = "rounded-2xl border border-slate-200 bg-white shadow-sm";

export type Tone = "white" | "muted";
export const TONE_BG: Record<Tone, string> = { white: "bg-white", muted: "bg-slate-50" };

/** Outer wrapper for every course-page body section: anchor, spacing, background. */
export function CourseSection({ id, tone = "white", children }: { id: string; tone?: Tone; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`scroll-mt-32 ${TONE_BG[tone]}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${SPACE.section}`}>{children}</div>
    </section>
  );
}

/** Optional label pill, dark h2 with the [[key phrase]] in brand orange, optional intro. */
export function SectionHeader({
  id,
  eyebrow,
  heading,
  intro,
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          {eyebrow}
        </span>
      )}
      <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        <Heading text={heading} />
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          <Rich text={intro} />
        </p>
      )}
    </header>
  );
}

/** One-line note under a grid (applies to every item). */
export function SectionNote({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className={`${SPACE.note} text-center text-sm text-slate-500`}>
      <Rich text={text} />
    </p>
  );
}

/** Closing paragraph under a section body. */
export function SectionOutro({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className={`mx-auto ${SPACE.block} max-w-4xl text-center text-base leading-7 text-slate-600`}>
      <Rich text={text} />
    </p>
  );
}

/** Small dot used for bullet lists; orange only where a list needs emphasis. */
export function Dot({ accent = false }: { accent?: boolean }) {
  return (
    <span
      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-brand" : "bg-slate-400"}`}
      aria-hidden="true"
    />
  );
}

/** Solid-tint icon tile used in every card. */
export function IconTile({ className, children, size = "md" }: { className: string; children: ReactNode; size?: "md" | "lg" }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl ${size === "lg" ? "h-12 w-12" : "h-11 w-11"} ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

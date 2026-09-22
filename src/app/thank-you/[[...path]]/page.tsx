/**
 * ============================================================================
 * THANK-YOU PAGE — one route, every form on the site
 * ============================================================================
 *
 * Reached ONLY through the rewrite in `next.config.ts`:
 *
 *     public   /<page path>/thank-you        ← what the visitor sees
 *     internal /thank-you/<page path>        ← this route
 *
 * ⚠️  DO NOT "TIDY" THIS INTO `src/app/[...path]/thank-you/page.tsx`
 * -------------------------------------------------------------------
 * That folder shape is rejected by Next.js — a catch-all must be the final
 * segment ("catch all segment must be the last segment modifying the path").
 * Turning the path around and rewriting is what makes an arbitrary-depth
 * prefix expressible at all. See the header of `src/lib/thank-you.ts`.
 *
 * `params.path` is therefore the ORIGINAL page path, already split into
 * segments: `/courses/bi-courses/power-bi-course/thank-you` arrives here as
 * `['courses', 'bi-courses', 'power-bi-course']`.
 *
 * NO JSON-LD HERE, DELIBERATELY
 * -----------------------------
 * The page is noindex,nofollow and absent from `sitemap.ts`. Per BLG-016,
 * structured data on a noindex route is dead weight — search engines discard
 * it. Conversion pages want to be reachable and measurable, not ranked.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ThankYouPanel from "@/components/thank-you/ThankYouPanel";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import {
  THANK_YOU_INTENTS,
  THANK_YOU_INTENT_PARAM,
  THANK_YOU_SEGMENT,
  labelForSourcePath,
  resolveThankYouIntent,
} from "@/lib/thank-you";

interface PageProps {
  // OPTIONAL catch-all (`[[...path]]`), so the segments may be absent: the home
  // page has no path to prefix, so its forms land on the bare `/thank-you`.
  params: Promise<{ path?: string[] }>;
  // `?for=` says what the visitor asked for — a syllabus, an enrolment, a demo.
  // The path alone cannot: one course page hosts four different forms.
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * A segment that is empty once decoded — `/%20/thank-you` and friends. Route
 * params arrive still percent-encoded, so a raw `.trim()` would miss these.
 * `decodeURIComponent` throws on malformed escapes, which is itself a reason to
 * reject the segment.
 */
function isBlankSegment(segment: string): boolean {
  try {
    return decodeURIComponent(segment).trim() === "";
  } catch {
    return true;
  }
}

/** Rebuilds the public URL this request actually arrived on. */
function publicUrl(segments: string[]): string {
  return segments.length === 0
    ? `/${THANK_YOU_SEGMENT}`
    : `/${segments.join("/")}/${THANK_YOU_SEGMENT}`;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const [{ path = [] }, query] = await Promise.all([params, searchParams]);
  const label = labelForSourcePath(path);
  const intent = THANK_YOU_INTENTS[resolveThankYouIntent(query[THANK_YOU_INTENT_PARAM])];

  // Called directly rather than through `generateStaticPageMetadata`, which
  // does not forward `noindex`/`nofollow`. A thank-you page must never be
  // indexed: it is thin, near-identical across funnels, and reaching it from
  // search would register a conversion nobody made.
  return generateSEOMetadata({
    title: {
      absolute: label
        ? `${intent.heading} — ${label} | CDPL`
        : `${intent.heading} | CDPL - Cinute Digital`,
    },
    description: intent.metaDescription,
    // Self-referencing canonical on the PUBLIC path — deliberately without the
    // `?for=` parameter, which selects copy rather than identifying a page.
    url: publicUrl(path),
    noindex: true,
    nofollow: true,
  });
}

export default async function ThankYouPage({ params, searchParams }: PageProps) {
  const [{ path = [] }, query] = await Promise.all([params, searchParams]);

  // No segments is legitimate — that is the home page's thank-you. Blank
  // segments are not: they mean a malformed URL, so 404 rather than render a
  // thank-you for a submission that never happened.
  if (path.some(isBlankSegment)) {
    notFound();
  }

  // Empty label renders the panel without its eyebrow. An unrecognised `?for=`
  // falls back to the default enquiry copy rather than 404ing — the visitor
  // did submit something, so a thank-you is still the right response.
  return (
    <ThankYouPanel
      label={labelForSourcePath(path)}
      intent={THANK_YOU_INTENTS[resolveThankYouIntent(query[THANK_YOU_INTENT_PARAM])]}
    />
  );
}

/**
 * City-page tiering — the single source of truth for which of the 765
 * programmatic city pages Google is allowed to index.
 *
 * WHY THIS EXISTS
 * ---------------
 * The city course data (then one file, now src/data/cities) defined 765 city
 * pages across 260 localities, six course families each - 655 since the
 * web-development family was removed. 476 of them are Maharashtra, and after Mumbai, Pune and
 * Nagpur every remaining Maharashtra entry is a Mumbai local-train station
 * (CSMT, Dadar, Byculla, Masjid, Grant Road, Charni Road, Matunga, Sion …).
 * A further 22 target UAE desert towns (Liwa Oasis, Ghayathi, Masafi) while no
 * Dubai / Abu Dhabi / Sharjah page exists at all.
 *
 * The cost is measurable. For "data science course in mumbai" — 1,212
 * impressions and ZERO clicks over six months — 96 URLs on this site carry both
 * "Data Science" and "Mumbai" in their <title>, all self-canonical and all
 * indexed. Google has to pick one, link equity splits 96 ways, and none of them
 * accumulates enough to reach page one. Every extra city page makes the Mumbai
 * page weaker, not stronger.
 *
 * WHAT THIS DOES
 * --------------
 * Tier 1 cities stay indexable. Everything else is served with `noindex`,
 * which removes it from search results and stops the cannibalisation, while
 * leaving the page reachable for anyone with a direct link.
 *
 * NOTE ON CRAWLING: `noindex` does NOT stop Googlebot crawling — it must fetch
 * the page to see the directive. Crawl frequency decays over time but never
 * reaches zero. Do NOT also disallow these paths in robots.txt: a blocked page
 * cannot be re-crawled, so Google would never see the noindex and pages already
 * in the index would stay there. Phase 2 (301 redirects) is what actually
 * reclaims crawl budget and transfers link equity into the surviving pages.
 */

/**
 * Cities whose pages remain indexable.
 *
 * Chosen from measured GSC demand, not intuition. Six-month impressions on
 * city-qualified course queries: Mumbai 1,212 + 552 + 348 …, Pune 706 + 424,
 * Chennai 559 + 348 + 259, Kolkata 239 + 218 + 206, Hyderabad 257 + 253.
 *
 * Each of these must earn its place with genuinely city-specific content —
 * `localJobMarketInsight`, `localSalaryInsight` and `localizedFaqs` on the
 * corresponding `courseData` records. A Tier 1 page without those is simply a
 * better-targeted thin page and will not rank either.
 *
 * IMPORTANT — only Mira Road (Mumbai) is a physical CDPL campus. Pages for the
 * other cities describe online / live-online delivery and must NOT imply a
 * local centre, carry a local street address, or emit `LocalBusiness` schema.
 */
/**
 * The one city with a physical CDPL campus (Mira Road East, Thane district).
 *
 * Everything else is online / live-online delivery, so only this city may
 * carry `LocalBusiness` schema - see the rule in the block comment above.
 */
export const CAMPUS_CITY = 'mira-road';

export const TIER_1_CITIES = [
    'mumbai',
    'pune',
    'chennai',
    'kolkata',
    'hyderabad',
] as const;

export type Tier1City = (typeof TIER_1_CITIES)[number];

/**
 * City pages that may be indexed on their own, without promoting their whole
 * city to Tier 1.
 *
 * Mira Road is the campus city, so its pages are the ones worth ranking. It is
 * listed slug-by-slug rather than added to TIER_1_CITIES because Tier 1 is a
 * statement about measured city-level search demand, which Mira Road does not
 * have - its pages earn the index on the strength of the campus being real,
 * not on query volume. Per-slug entries also keep each page a separate
 * decision, so one is only opened when its content is ready for it.
 *
 * All five delivered course families are listed. They were checked against one
 * another first: 8-26% pairwise overlap on 5-word shingles, 56-81% unique copy
 * each, and the ~16% they share is CTA and course-card chrome - so they do not
 * cannibalise each other. Each one does still overlap heavily with its /mumbai
 * twin (the data-science page is 83% contained in it), which is the conflict to
 * watch if Mumbai rankings move.
 *
 * An excluded family is still excluded: listing such a slug here has no
 * effect, because a course CDPL does not deliver must never rank.
 */
export const INDEXABLE_SLUG_OVERRIDES: readonly string[] = [
    'data-science-course-in-mira-road',
    'software-testing-course-in-mira-road',
    'artificial-intelligence-course-in-mira-road',
    'business-intelligence-course-in-mira-road',
    'digital-marketing-course-in-mira-road',
];

/** Course-family prefixes used by the city slugs, e.g. `data-science-course-in-pune`. */
const SLUG_SUFFIX_RE = /-courses?-in-(.+)$/;
const SLUG_FAMILY_RE = /^(.+?)-courses?-in-/;

/**
 * Course families that stay OUT of the index regardless of city.
 *
 * `web-development`: CDPL does not currently run this course. There is no page
 * for it under /courses/, it is absent from the course menu, and across 260
 * enquiries between December 2025 and September 2026 not one person asked about
 * web development, full-stack, MERN or React — despite the Mumbai and Pune
 * pages being indexed and reachable that whole time.
 *
 * Advertising a course that cannot be delivered is the problem here, not the
 * SEO. A visitor who enquires and is told the course does not exist is a worse
 * outcome than never ranking at all. If the course is genuinely launched later,
 * remove it from this list and build a real page under /courses/ first.
 */
const EXCLUDED_FAMILIES = ['web-development'] as const;

/**
 * True when the slug belongs to a course family CDPL does not actually run.
 *
 * T-15 (local-SEO audit, Oct 2026): these pages were noindex but still served
 * 200, so Googlebot re-crawled them forever and they sat permanently in the
 * Pages report. Dec 2025 - Sep 2026 produced 260 enquiries and not one asked
 * about web development, while the Mumbai and Pune pages were indexed and
 * reachable throughout - zero demand, zero content, nothing to preserve. They
 * now 404. If the course ever launches, build /courses/web-development-course
 * first, then take the family out of EXCLUDED_FAMILIES.
 */
export function isExcludedFamilySlug(slug: string): boolean {
    const family = getFamilyFromSlug(slug);
    return !!family && (EXCLUDED_FAMILIES as readonly string[]).includes(family);
}

/**
 * The locality token from a city-page slug, or undefined if the slug is not a
 * city page. Handles both the `-course-in-` and legacy `-courses-in-` forms.
 */
export function getCityFromSlug(slug: string): string | undefined {
    const match = slug.toLowerCase().match(SLUG_SUFFIX_RE);
    return match?.[1] || undefined;
}

/** The course-family token from a city-page slug, e.g. `data-science`. */
export function getFamilyFromSlug(slug: string): string | undefined {
    const match = slug.toLowerCase().match(SLUG_FAMILY_RE);
    return match?.[1] || undefined;
}

/** Is this city page allowed in Google's index? */
export function isTier1Slug(slug: string): boolean {
    const normalised = slug.toLowerCase();

    const city = getCityFromSlug(normalised);
    if (!city) return false;

    // Checked before the override so an explicitly listed slug can never
    // resurrect a retired course family.
    const family = getFamilyFromSlug(normalised);
    if (family && (EXCLUDED_FAMILIES as readonly string[]).includes(family)) return false;

    if (INDEXABLE_SLUG_OVERRIDES.includes(normalised)) return true;

    return (TIER_1_CITIES as readonly string[]).includes(city);
}

import { client } from '@/sanity/client';
import { LIVE_JOBS_QUERY, LIVE_JOB_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { generateJobPostingSchema } from '@/lib/schema-generators';
import type { SanityLiveJob } from '@/sanity/types';
import { JOBS } from '@/lib/jobsData';
import type { Job } from '@/lib/jobsData';

// Non-CDN client for live-jobs reads. The Sanity CDN can lag ~60s behind a
// publish; useCdn:false hits the live API so ISR + the revalidate webhook
// reflect newly published/edited jobs promptly (see sanity/client.ts note).
const liveClient = client.withConfig({ useCdn: false });

// Short revalidate so newly published jobs surface within ~a minute even when
// the Sanity → /api/revalidate webhook is not configured (the webhook makes it
// instant when it is).
const LIVE_JOBS_REVALIDATE = 60;

/**
 * Live-jobs data access — Sanity-first, static fallback.
 *
 * WHY THIS SHAPE (SEO safety)
 * ---------------------------
 * The live-jobs pages (/jobs/live-jobs and /jobs/live-jobs/[jobId]) render the
 * static `Job` shape from src/lib/jobsData.ts. This helper returns that SAME
 * `Job` shape whether the data comes from Sanity or the local array, so every
 * downstream consumer — generateMetadata, generateJobPostingSchema, the card /
 * grid / hero UI — is byte-for-byte unchanged.
 *
 *   - Sanity has liveJob docs  → map them onto `Job` and use them.
 *   - Sanity is empty OR errors → fall back to the hard-coded `JOBS` array.
 *
 * Consequence: until the seed script runs (and after, since seeded slugs equal
 * the old ids), the rendered pages, metadata, canonical URLs and JSON-LD are
 * identical to the pre-migration output. The fallback also means no existing
 * detail URL can ever 404 because of a CMS hiccup or a not-yet-seeded job.
 *
 * `bannerImage` is a plain string on both sides (no Sanity image asset), so the
 * exact /live-jobs_images/... OG-image URLs are preserved.
 */

function nonEmpty<T>(arr: T[] | undefined | null): T[] | undefined {
    return arr && arr.length ? arr : undefined;
}

/** Map a Sanity `liveJob` document onto the static `Job` shape. */
function sanityToJob(sj: SanityLiveJob): Job {
    return {
        id: sj.slug || sj._id,
        title: sj.title,
        company: sj.company,
        companySite: sj.companySite || undefined,
        type: sj.type,
        mode: sj.mode || undefined,
        location: sj.location,
        postedOn: sj.postedOn,
        eventDate: sj.eventDate || undefined,
        timeWindow: sj.timeWindow || undefined,
        venue: sj.venue || undefined,
        exp: sj.exp || undefined,
        salary: sj.salary || undefined,
        salaryMin: typeof sj.salaryMin === 'number' ? sj.salaryMin : undefined,
        salaryMax: typeof sj.salaryMax === 'number' ? sj.salaryMax : undefined,
        salaryCurrency: sj.salaryCurrency || undefined,
        salaryUnit: sj.salaryUnit || undefined,
        validThrough: sj.validThrough || undefined,
        highlights: nonEmpty(sj.highlights),
        responsibilities: nonEmpty(sj.responsibilities),
        applyEmail: sj.applyEmail || undefined,
        applyLink: sj.applyLink || undefined,
        contacts: nonEmpty(sj.contacts),
        bannerImage: sj.bannerImage || undefined,
        bannerImageAlt: sj.bannerImageAlt || undefined,
        tags: nonEmpty(sj.tags),
        // shareKey is only used to build share text; the slug/id is the stable key.
        shareKey: sj.slug || sj._id,
    };
}

/** Today as YYYY-MM-DD, comparable to the ISO date strings on `Job`. */
function today(): string {
    return new Date().toISOString().slice(0, 10);
}

/**
 * The date after which a posting must no longer be presented as open.
 *
 * Explicit apply-by date first, then the walk-in / deadline date. There is
 * deliberately NO fallback: a posting with neither date has no knowable expiry,
 * and inventing one is what caused the Google-for-Jobs violation this function
 * replaces (a hard-coded `"2026-12-31"` was asserted for ~90 of 98 postings,
 * some of them 23 months old).
 */
export function getJobExpiry(job: Job): string | undefined {
    return job.validThrough || job.eventDate || undefined;
}

/**
 * Is this posting still open?
 *
 * A job with no expiry date is treated as CLOSED, not open. That is the safe
 * direction: showing a stale vacancy as live misleads applicants and breaches
 * Google's job-posting policy, whereas hiding one that is genuinely open only
 * costs us a listing until an editor sets its "Valid Through" date in Sanity.
 */
export function isJobOpen(job: Job, asOf: string = today()): boolean {
    const expiry = getJobExpiry(job);
    return Boolean(expiry && expiry >= asOf);
}

/**
 * All active live jobs, sourced from Sanity.
 *
 * Every job has been seeded into Sanity (slug = old id), so Sanity is the single
 * source of truth: the result is exactly what the Studio holds, and a job
 * deleted/deactivated there disappears from the site. A normal empty result
 * (all jobs removed) returns [] and is respected. The static `JOBS` array is
 * retained ONLY as an outage snapshot — used if the Sanity request THROWS — so
 * the listing never goes blank during a CMS hiccup (mirrors src/lib/services.ts).
 *
 * Expired postings are filtered out here as well as in the GROQ query: the
 * query cannot cover the static outage snapshot, and `isActive` in Sanity is a
 * manual boolean an editor has to remember to clear. Date-based expiry needs no
 * one to remember anything.
 */
export async function getLiveJobs(): Promise<Job[]> {
    try {
        const docs = await liveClient.fetch<SanityLiveJob[]>(
            LIVE_JOBS_QUERY,
            { today: today() },
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob'] } },
        );
        return Array.isArray(docs) ? docs.map(sanityToJob).filter((j) => isJobOpen(j)) : [];
    } catch (err) {
        console.error('[getLiveJobs] Sanity fetch failed, using static JOBS snapshot:', err);
        return JOBS.filter((j) => isJobOpen(j));
    }
}

/**
 * A single live job by its slug/id, plus whether that answer can be trusted.
 *
 * `authoritative` is true when Sanity itself answered. It is false when the
 * request THREW and the static `JOBS` snapshot was consulted instead — in that
 * case a missing job may simply be one the snapshot predates (anything added in
 * the Studio since the seed was written), not one that has closed.
 *
 * The distinction exists for the detail page, which permanently redirects a
 * closed job to the listing. A permanent redirect is cached by browsers, so it
 * must never be issued on the strength of an outage: one Sanity blip during an
 * ISR revalidation would otherwise send every visitor in that window a 308
 * their browser keeps honouring after Sanity recovers. See
 * src/app/jobs/live-jobs/[jobId]/page.tsx.
 */
export async function lookupLiveJob(
    slug: string,
): Promise<{ job: Job | undefined; authoritative: boolean }> {
    try {
        const doc = await liveClient.fetch<SanityLiveJob | null>(
            LIVE_JOB_BY_SLUG_QUERY,
            { slug, today: today() },
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob', `liveJob:${slug}`] } },
        );
        if (!doc) return { job: undefined, authoritative: true };
        const job = sanityToJob(doc);
        // An expired posting is treated as absent rather than rendered as an
        // open vacancy.
        return { job: isJobOpen(job) ? job : undefined, authoritative: true };
    } catch (err) {
        console.error('[lookupLiveJob] Sanity fetch failed, using static JOBS snapshot:', err);
        return {
            job: JOBS.filter((j) => isJobOpen(j)).find((j) => j.id === slug),
            authoritative: false,
        };
    }
}

/**
 * A single live job by its slug/id, sourced from Sanity. A slug Sanity does not
 * have (never existed, or deleted/deactivated in the Studio) returns undefined.
 * The static `JOBS` array is used ONLY if the Sanity request THROWS (outage
 * snapshot) — never to resurrect a job that was removed.
 *
 * Use `lookupLiveJob` instead wherever it matters whether "undefined" means
 * "closed" or "could not check".
 */
export async function getLiveJobBySlug(slug: string): Promise<Job | undefined> {
    return (await lookupLiveJob(slug)).job;
}

/**
 * Build the Google JobPosting JSON-LD for a live job.
 *
 * SINGLE SOURCE OF TRUTH shared by /jobs/live-jobs (listing) and
 * /jobs/live-jobs/[jobId] (detail) — this logic was previously duplicated
 * inline in both routes, so a fix applied to one could miss the other.
 *
 * baseSalary best practice (Google): emit it whenever the employer actually
 * disclosed pay — the structured salaryMin/Max/Unit/Currency fields take
 * priority, else a conservative parse of the display string. NEVER invent a
 * figure: fabricated salary data violates Google's structured-data policy.
 * Jobs with no disclosed salary simply omit the field; Search Console then
 * shows a harmless "missing optional field" notice for them, which is the
 * correct and expected outcome.
 *
 * validThrough: explicit apply-by date first, then the walk-in/deadline date.
 * There is NO fallback — see `getJobExpiry`. A posting with no expiry, or one
 * whose expiry has passed, emits NO JobPosting markup at all: this function
 * returns null and the caller renders nothing. Asserting a fabricated
 * `validThrough` on a stale vacancy is precisely the policy breach that got
 * these listings dropped from Google for Jobs.
 *
 * @returns the JobPosting JSON-LD, or `null` if the posting is not open.
 */
export function buildLiveJobPostingSchema(job: Job) {
    // Never emit job markup for a posting we cannot honestly present as open.
    if (!isJobOpen(job)) return null;

    // Resolve addressRegion/postalCode from the job's location string — but ONLY
    // on a confident match. There is deliberately no default.
    //
    // The previous version defaulted every unrecognised location to
    // Maharashtra / "400001" (Mumbai GPO), which stamped a Mumbai postcode onto
    // Hyderabad, Kozhikode ("Govt Cyberpark", Kerala), "Panchkula, Haryana",
    // "India (TBA)" and even "Midrand & Pretoria" (South Africa). Remote roles
    // got the invalid postcode "000000". Publishing an address the employer
    // never gave is the same class of fabrication as the invented validThrough,
    // so an unresolved location now simply omits both fields — a JobPosting
    // without addressRegion/postalCode is valid; one with a wrong address is not.
    const locationLower = job.location.toLowerCase();
    const has = (...needles: string[]) => needles.some((n) => locationLower.includes(n));

    let region: string | undefined;
    let postal: string | undefined;
    if (has("mumbai", "thane", "airoli", "goregaon", "navi mumbai")) {
        region = "Maharashtra";
        postal = "400001";
    } else if (has("pune", "hinjewadi")) {
        region = "Maharashtra";
        postal = "411001";
    } else if (has("nagpur")) {
        region = "Maharashtra";
        postal = "440001";
    } else if (has("ahmedabad")) {
        region = "Gujarat";
        postal = "380001";
    } else if (has("bengaluru", "bangalore")) {
        region = "Karnataka";
        postal = "560001";
    } else if (has("chennai")) {
        region = "Tamil Nadu";
        postal = "600001";
    } else if (has("hyderabad")) {
        region = "Telangana";
        postal = "500001";
    } else if (has("kozhikode")) {
        region = "Kerala";
        postal = "673001";
    } else if (has("panchkula", "haryana")) {
        region = "Haryana";
        postal = "134109";
    } else if (has("indore")) {
        region = "Madhya Pradesh";
        postal = "452001";
    } else if (has("delhi", "noida", "gurgaon", "gurugram")) {
        region = "Delhi NCR";
        postal = "110001";
    }
    // Anything else — "India (TBA)", "Remote", a foreign city — leaves both
    // undefined and they are omitted from the markup below.

    // baseSalary: structured, editor-entered fields take priority…
    let baseSalary;
    if (typeof job.salaryMin === "number" || typeof job.salaryMax === "number") {
        const min = typeof job.salaryMin === "number" ? job.salaryMin : (job.salaryMax as number);
        const max = typeof job.salaryMax === "number" ? job.salaryMax : min;
        baseSalary = {
            currency: job.salaryCurrency || "INR",
            value: {
                minValue: Math.min(min, max),
                maxValue: Math.max(min, max),
                unitText: job.salaryUnit || "YEAR",
            },
        };
    } else if (job.salary) {
        // …else parse the display text: "X–Y LPA" range first, then single "X LPA".
        // Number groups REQUIRE a leading digit so strings like "Rs. 6 LPA" can't
        // yield NaN→null markup (the old [0-9.]+ pattern matched the bare dot in
        // "Rs."). Min/max are ordered defensively for odd strings like
        // "10 LPA + 2 LPA bonus" that would otherwise parse as an inverted range.
        const lpaRange = job.salary.match(/([0-9]+(?:\.[0-9]+)?)[^\d.]+([0-9]+(?:\.[0-9]+)?)\s*LPA/i);
        const lpaSingle = job.salary.match(/([0-9]+(?:\.[0-9]+)?)\s*LPA/i);
        if (lpaRange) {
            const a = parseFloat(lpaRange[1]) * 100000;
            const b = parseFloat(lpaRange[2]) * 100000;
            baseSalary = {
                currency: "INR",
                value: {
                    minValue: Math.min(a, b),
                    maxValue: Math.max(a, b),
                    unitText: "YEAR",
                },
            };
        } else if (lpaSingle) {
            const single = parseFloat(lpaSingle[1]) * 100000;
            baseSalary = {
                currency: "INR",
                value: { minValue: single, maxValue: single, unitText: "YEAR" },
            };
        }
    }

    return generateJobPostingSchema({
        title: job.title,
        description: job.highlights?.join(". ") || `${job.title} at ${job.company}`,
        datePosted: job.postedOn,
        validThrough: getJobExpiry(job),
        employmentType:
            job.type === "Full-time"
                ? "FULL_TIME"
                : job.type === "Internship"
                    ? "INTERN"
                    : job.type === "Contract"
                        ? "CONTRACTOR"
                        : "OTHER",
        hiringOrganization: {
            name: job.company,
            sameAs: job.companySite,
        },
        jobLocation: {
            addressLocality: job.location,
            streetAddress: job.venue || job.location,
            // Omitted entirely when the location did not resolve — never guessed.
            ...(region ? { addressRegion: region } : {}),
            ...(postal ? { postalCode: postal } : {}),
            addressCountry: "IN",
        },
        baseSalary,
        url: `/jobs/live-jobs/${job.id}`,
    });
}

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

/**
 * All active live jobs, sourced from Sanity.
 *
 * Every job has been seeded into Sanity (slug = old id), so Sanity is the single
 * source of truth: the result is exactly what the Studio holds, and a job
 * deleted/deactivated there disappears from the site. A normal empty result
 * (all jobs removed) returns [] and is respected. The static `JOBS` array is
 * retained ONLY as an outage snapshot — used if the Sanity request THROWS — so
 * the listing never goes blank during a CMS hiccup (mirrors src/lib/services.ts).
 */
export async function getLiveJobs(): Promise<Job[]> {
    try {
        const docs = await liveClient.fetch<SanityLiveJob[]>(
            LIVE_JOBS_QUERY,
            {},
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob'] } },
        );
        return Array.isArray(docs) ? docs.map(sanityToJob) : [];
    } catch (err) {
        console.error('[getLiveJobs] Sanity fetch failed, using static JOBS snapshot:', err);
        return JOBS;
    }
}

/**
 * A single live job by its slug/id, sourced from Sanity. A slug Sanity does not
 * have (never existed, or deleted/deactivated in the Studio) returns undefined
 * so the page 404s. The static `JOBS` array is used ONLY if the Sanity request
 * THROWS (outage snapshot) — never to resurrect a job that was removed.
 */
export async function getLiveJobBySlug(slug: string): Promise<Job | undefined> {
    try {
        const doc = await liveClient.fetch<SanityLiveJob | null>(
            LIVE_JOB_BY_SLUG_QUERY,
            { slug },
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob', `liveJob:${slug}`] } },
        );
        return doc ? sanityToJob(doc) : undefined;
    } catch (err) {
        console.error('[getLiveJobBySlug] Sanity fetch failed, using static JOBS snapshot:', err);
        return JOBS.find((j) => j.id === slug);
    }
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
 * validThrough: explicit apply-by date first, then the walk-in/deadline date,
 * then the legacy far-future default (kept for output-compat with the seeded
 * jobs). Editors should keep it in the future while a job is open — once it
 * passes, Google treats the posting as expired.
 */
export function buildLiveJobPostingSchema(job: Job) {
    // Synthesize address details from the job's location string.
    const locationLower = job.location.toLowerCase();
    let region = "Maharashtra";
    let postal = "400001";
    if (locationLower.includes("pune") || locationLower.includes("hinjewadi")) {
        region = "Maharashtra";
        postal = "411001";
    } else if (locationLower.includes("ahmedabad")) {
        region = "Gujarat";
        postal = "380001";
    } else if (locationLower.includes("bengaluru") || locationLower.includes("bangalore")) {
        region = "Karnataka";
        postal = "560001";
    } else if (locationLower.includes("chennai")) {
        region = "Tamil Nadu";
        postal = "600001";
    } else if (locationLower.includes("indore")) {
        region = "Madhya Pradesh";
        postal = "452001";
    } else if (locationLower.includes("delhi") || locationLower.includes("noida") || locationLower.includes("gurgaon")) {
        region = "Delhi NCR";
        postal = "110001";
    } else if (locationLower.includes("remote")) {
        region = "India";
        postal = "000000";
    }

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
        validThrough: job.validThrough || job.eventDate || "2026-12-31",
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
            addressRegion: region,
            postalCode: postal,
            addressCountry: "IN",
        },
        baseSalary,
        url: `/jobs/live-jobs/${job.id}`,
    });
}

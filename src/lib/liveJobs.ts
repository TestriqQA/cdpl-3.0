import { client } from '@/sanity/client';
import { LIVE_JOBS_QUERY, LIVE_JOB_BY_SLUG_QUERY } from '@/sanity/lib/queries';
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
 * All active live jobs: Sanity docs MERGED with the static `JOBS` seed, deduped
 * by id (Sanity wins on conflict).
 *
 * Merging — rather than all-or-nothing — means a job added in Sanity shows up
 * ALONGSIDE the built-in list without having to seed all of them first, and
 * once a static job is seeded into Sanity the duplicate collapses to the Sanity
 * version. When Sanity is empty the result is exactly the static `JOBS` array,
 * in its original order — identical to the pre-migration output.
 */
export async function getLiveJobs(): Promise<Job[]> {
    try {
        const docs = await liveClient.fetch<SanityLiveJob[]>(
            LIVE_JOBS_QUERY,
            {},
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob'] } },
        );
        const sanityJobs = Array.isArray(docs) ? docs.map(sanityToJob) : [];
        if (sanityJobs.length === 0) return JOBS;
        const sanityIds = new Set(sanityJobs.map((j) => j.id));
        // Sanity jobs first (freshest editorial content), then any static jobs
        // not yet migrated. The listing grid re-sorts by date for display.
        return [...sanityJobs, ...JOBS.filter((j) => !sanityIds.has(j.id))];
    } catch (err) {
        console.error('[getLiveJobs] Sanity fetch failed, using static JOBS only:', err);
        return JOBS;
    }
}

/** A single live job by its slug/id (Sanity-first, static fallback). */
export async function getLiveJobBySlug(slug: string): Promise<Job | undefined> {
    try {
        const doc = await liveClient.fetch<SanityLiveJob | null>(
            LIVE_JOB_BY_SLUG_QUERY,
            { slug },
            { next: { revalidate: LIVE_JOBS_REVALIDATE, tags: ['liveJob', `liveJob:${slug}`] } },
        );
        if (doc) return sanityToJob(doc);
    } catch (err) {
        console.error('[getLiveJobBySlug] Sanity fetch failed, falling back to static JOBS:', err);
    }
    // Fallback: never drop an existing URL just because Sanity lacks the doc.
    return JOBS.find((j) => j.id === slug);
}

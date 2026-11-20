/**
 * One-time seed — import the static JOBS array (src/data/jobs.ts) into Sanity
 * as `liveJob` documents.
 *
 * SEO-SAFE: each doc's `slug.current` === the old `id` (so every existing
 * /jobs/live-jobs/<id> URL is preserved) and `bannerImage` keeps the same
 * string path (so OG images are identical). After this runs, the live-jobs
 * pages start reading from Sanity automatically — with byte-identical output.
 *
 * HOW TO RUN (manual — NOT in CI; needs a scoped write token):
 *   1. Create a Sanity token with Editor (write) access:
 *        sanity.io/manage → your project → API → Tokens → Add token.
 *   2. Add it to .env.local (gitignored), next to the existing Sanity vars:
 *        SANITY_API_WRITE_TOKEN=sk_...
 *      (NEXT_PUBLIC_SANITY_PROJECT_ID / _DATASET are already there for the app.)
 *   3. From the repo root:
 *        npx tsx scripts/seed-live-jobs.ts
 *      (auto-loads .env.local / .env via dotenv)
 *
 * Idempotent and non-clobbering: uses a deterministic _id (`liveJob.<id>`), so
 * re-running updates existing docs instead of creating duplicates. Content
 * fields are overwritten from this array, but `validThrough` and `isActive` are
 * only set when MISSING — those two decide whether a posting is visible at all
 * and are maintained by editors in Studio, so a re-run must never reset them.
 * Review the results in /cms before relying on them in production.
 *
 * NOTE: undefined fields are stripped so Sanity does not persist empty keys.
 */
// Staging build trigger (no-op change #2) — safe to delete.
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';
import { JOBS } from '../src/data/jobs';

// Load Sanity env from .env.local / .env (Next.js convention) so this script
// runs directly with `npx tsx scripts/seed-live-jobs.ts`.
loadEnv({ path: '.env.local' });
loadEnv({ path: '.env' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-23';

if (!projectId || !dataset || !token) {
    console.error(
        'Missing env. Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN.',
    );
    process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

/** A posting is only seeded as active if it has a real, still-future expiry. */
function isStillOpen(expiry: string | undefined): boolean {
    return Boolean(expiry && expiry >= new Date().toISOString().slice(0, 10));
}

async function main() {
    console.log(`Seeding ${JOBS.length} live jobs into Sanity (${projectId}/${dataset})…`);
    let ok = 0;

    for (const j of JOBS) {
        const doc: Record<string, unknown> = {
            _id: `liveJob.${j.id}`,
            _type: 'liveJob',
            title: j.title,
            slug: { _type: 'slug', current: j.id }, // preserves the existing URL
            company: j.company,
            companySite: j.companySite,
            type: j.type,
            mode: j.mode,
            location: j.location,
            postedOn: j.postedOn,
            eventDate: j.eventDate,
            timeWindow: j.timeWindow,
            venue: j.venue,
            exp: j.exp,
            salary: j.salary,
            salaryMin: j.salaryMin,
            salaryMax: j.salaryMax,
            salaryCurrency: j.salaryCurrency,
            salaryUnit: j.salaryUnit,
            validThrough: j.validThrough ?? j.eventDate,
            highlights: j.highlights,
            responsibilities: j.responsibilities,
            applyEmail: j.applyEmail,
            applyLink: j.applyLink,
            contacts: j.contacts,
            bannerImage: j.bannerImage,
            bannerImageAlt: j.bannerImageAlt,
            tags: j.tags,
            // A seeded job is active only if it has a real, still-future
            // apply-by date. The Sanity schema's +30-day `initialValue` on
            // validThrough is a Studio-form affordance and does NOT apply to
            // createOrReplace API writes, so without this every seeded doc
            // arrives with no expiry and `isActive: true` — which is how 98
            // postings up to 23 months old ended up advertised as open.
            isActive: isStillOpen(j.validThrough ?? j.eventDate),
        };

        // Strip undefined so Sanity doesn't store empty keys.
        for (const k of Object.keys(doc)) {
            if (doc[k] === undefined) delete doc[k];
        }

        // NOT createOrReplace. `validThrough` and `isActive` now decide whether
        // a posting is visible at all, and editors maintain them in Studio — a
        // whole-document replace would silently reset an editor's apply-by date
        // to whatever this static array implies (absent, for 90 of 98 rows),
        // taking the posting dark. So: create the doc if it is missing, then
        // patch only the content fields, and set the two visibility fields ONLY
        // when they are not already present.
        const { _id, _type, validThrough, isActive, ...contentFields } = doc as Record<string, unknown> & {
            _id: string;
            _type: string;
        };

        // One transaction so a mid-run network failure cannot leave a bare
        // {_id, _type} document behind with no content.
        await client
            .transaction()
            .createIfNotExists({ _id, _type } as never)
            .patch(_id, (p) =>
                p.set(contentFields).setIfMissing({
                    ...(validThrough !== undefined ? { validThrough } : {}),
                    isActive,
                }),
            )
            .commit();
        ok += 1;
        console.log(`  ✓ ${j.id}`);
    }

    console.log(`Done. ${ok}/${JOBS.length} live jobs upserted.`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

/**
 * One-time seed — import the static JOBS array (src/lib/jobsData.ts) into Sanity
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
 * Idempotent: uses createOrReplace with a deterministic _id (`liveJob.<id>`),
 * so re-running updates existing docs instead of creating duplicates. Review
 * the results in /cms before relying on them in production.
 *
 * NOTE: undefined fields are stripped so Sanity does not persist empty keys.
 */
// Staging build trigger (no-op change) — safe to delete.
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';
import { JOBS } from '../src/lib/jobsData';

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
            validThrough: j.validThrough,
            highlights: j.highlights,
            responsibilities: j.responsibilities,
            applyEmail: j.applyEmail,
            applyLink: j.applyLink,
            contacts: j.contacts,
            bannerImage: j.bannerImage,
            bannerImageAlt: j.bannerImageAlt,
            tags: j.tags,
            isActive: true,
        };

        // Strip undefined so Sanity doesn't store empty keys.
        for (const k of Object.keys(doc)) {
            if (doc[k] === undefined) delete doc[k];
        }

        await client.createOrReplace(doc as never);
        ok += 1;
        console.log(`  ✓ ${j.id}`);
    }

    console.log(`Done. ${ok}/${JOBS.length} live jobs upserted.`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});

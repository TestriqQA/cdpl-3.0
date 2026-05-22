import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, assertValue } from './env'

export const client = createClient({
    projectId: assertValue(projectId, 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'),
    dataset: assertValue(dataset, 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'),
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

/**
 * BLG-140 — Sanity API read token for draft / preview fetches.
 *
 * A token with **Viewer** (read-only) permission. It lets the preview client
 * see unpublished draft documents. It is only ever read on the server (Server
 * Components and Route Handlers) — never shipped to the browser.
 */
export const readToken = process.env.SANITY_API_READ_TOKEN ?? ''

/**
 * BLG-140 — preview client.
 *
 * Same project/dataset as `client`, but tuned for previewing in-progress
 * content rather than serving the public site:
 *   - `useCdn: false`        — the CDN only ever serves published documents,
 *                              so drafts must come straight from the API.
 *   - `token`                — authenticates the request so drafts are visible.
 *   - `perspective: 'drafts'` — overlays each draft on top of its published
 *                              version, so a query returns the in-progress edit.
 *   - `stega: false`         — no content-source overlay encoding; keeps the
 *                              previewed markup byte-identical to production.
 *
 * Only used when Next.js draft mode is enabled — see `sanity/lib/fetch.ts`.
 */
export const previewClient = client.withConfig({
    useCdn: false,
    token: readToken,
    perspective: 'drafts',
    stega: false,
})

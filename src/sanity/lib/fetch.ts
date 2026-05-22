import 'server-only'

import { draftMode } from 'next/headers'
import type { QueryParams } from 'next-sanity'

import { client, previewClient, readToken } from '../client'

/**
 * BLG-139 / BLG-146 — draft-aware Sanity fetch helper.
 *
 * Use this instead of a bare `client.fetch` for any page content an editor
 * should be able to preview before it is published.
 *
 *   - Draft mode OFF (every normal visitor): published content, served via
 *     the CDN, cached by Next.js for `revalidate` seconds and labelled with
 *     `tags` so an on-demand `revalidateTag()` can refresh just those pages.
 *   - Draft mode ON  (an editor inside the Sanity Presentation tool):
 *     unpublished drafts, fetched live (no CDN, no cache) so each edit shows
 *     up immediately.
 *
 * `tags` is wired through to the Next.js fetch cache (BLG-146) so tag-based
 * revalidation has something to target — previously no `client.fetch` call
 * passed tags, which made `revalidateTag` a no-op.
 */
export async function sanityFetch<T>({
    query,
    params = {},
    tags = [],
    revalidate = 3600,
}: {
    query: string
    params?: QueryParams
    tags?: string[]
    revalidate?: number | false
}): Promise<T> {
    const isDraftMode = (await draftMode()).isEnabled

    if (isDraftMode) {
        if (!readToken) {
            throw new Error(
                'Draft mode is enabled but SANITY_API_READ_TOKEN is not set — ' +
                    'cannot fetch draft content.',
            )
        }
        // Drafts must never be cached: always reflect the latest edit.
        return previewClient.fetch<T>(query, params, {
            next: { revalidate: 0 },
        })
    }

    return client.fetch<T>(query, params, {
        next: { revalidate, tags },
    })
}

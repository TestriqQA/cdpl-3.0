import { client } from '@/sanity/client'
import { HIRING_PARTNERS_QUERY } from '@/sanity/lib/queries'
import type { SanityHiringPartner } from '@/sanity/types'

/**
 * BLG-133 follow-up — fetch the editor-managed hiring partners list from
 * Sanity. Returns `[]` on any failure so the consumer can fall back to its
 * hard-coded list and the page never errors out because of a CMS hiccup.
 *
 * Cached for an hour and tagged with `hiringPartner` so the BLG-006
 * revalidate webhook refreshes the rail when a partner is added/edited.
 */
export async function getHiringPartners(): Promise<SanityHiringPartner[]> {
    try {
        const partners = await client.fetch<SanityHiringPartner[]>(
            HIRING_PARTNERS_QUERY,
            {},
            { next: { revalidate: 3600, tags: ['hiringPartner'] } },
        )
        return Array.isArray(partners) ? partners : []
    } catch (err) {
        console.error('[getHiringPartners] Sanity fetch failed:', err)
        return []
    }
}

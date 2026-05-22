import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import { client } from '@/sanity/client'

/**
 * BLG-139 — enables Next.js draft mode so editors can preview unpublished
 * Sanity content.
 *
 * This route is called by the Sanity Presentation tool (configured in
 * `sanity.config.ts`). `defineEnableDraftMode` validates a single-use,
 * dataset-stored preview secret before turning draft mode on, so the
 * endpoint cannot be triggered by anyone without Studio access.
 *
 * To leave preview mode again, visit `/api/disable-draft`.
 */
export const { GET } = defineEnableDraftMode({
    client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
})

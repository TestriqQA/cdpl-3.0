import { client } from '@/sanity/client'
import {
    EVENTS_QUERY,
    EVENT_BY_SLUG_QUERY,
} from '@/sanity/lib/queries'
import type { SanityEvent } from '@/sanity/types'
import type { PastEvent } from '@/data/eventsData'
import { CDPL_ORG, pastEvents } from '@/data/eventsData'

/**
 * BLG-133 follow-up — fetch editor-managed events from Sanity and map
 * them onto the legacy `PastEvent` shape (eventsData.ts). When Sanity has
 * no event docs the helper falls back to the hard-coded `pastEvents`
 * array so the /events listing, /events/[slug] detail, JSON-LD generators,
 * and `generateStaticParams` keep working with zero regression during the
 * migration.
 */

function formatEventDate(start?: string, end?: string): string {
    if (!start) return ''
    const startISO = start.slice(0, 10)
    if (!end) return startISO
    const endISO = end.slice(0, 10)
    return endISO === startISO ? startISO : `${startISO} to ${endISO}`
}

function sanityToPastEvent(se: SanityEvent): PastEvent {
    const id = se.slug || se._id
    const heroImageUrl = se.coverImageUrl
    const date = formatEventDate(se.startDate, se.endDate)
    const purpose = se.purpose || se.summary || ''

    // organizerInfo defaults to CDPL when blank — the legacy data spreads
    // `CDPL_BASE` into every event, so preserving that default keeps the
    // detail page's "Organized by" block populated without forcing editors
    // to re-enter CDPL details for every event.
    const organization = se.organizerInfo?.name || CDPL_ORG.name
    const organizationImage = se.organizerInfo?.imageUrl || CDPL_ORG.logo
    const organizerDetails = se.organizerInfo?.details || CDPL_ORG.description

    const sessionHighlights = (se.sessionHighlights ?? []).map((h) => ({
        title: h.title,
        points: h.points ?? [],
    }))

    const specialSession = se.specialSession?.speaker && se.specialSession?.topic
        ? {
              speaker: se.specialSession.speaker,
              topic: se.specialSession.topic,
              highlights: se.specialSession.highlights ?? [],
          }
        : undefined

    return {
        id,
        slug: se.slug || se._id,
        title: se.title,
        subtitle: se.subtitle,
        date,
        location: se.location || '',
        organization,
        attendees: se.attendees ?? 0,
        // Editorial category; `categoryColor` is widened from the v1 styled
        // chips to a neutral slate so we don't have to keep the listing's
        // colour map in sync with arbitrary editor-supplied strings. The
        // listing's existing CATEGORY_STYLES lookup already falls back to
        // slate-700 for anything it doesn't recognise.
        category: se.category || 'Event',
        categoryColor: 'bg-slate-700',
        serviceType: se.serviceType || '',
        purpose,
        trainingDuration: se.trainingDuration || '',
        sessionHighlights,
        specialSession,
        keyTakeaways: se.keyTakeaways ?? [],
        highlights: se.highlights ?? [],
        imageUrl: heroImageUrl,
        heroImageUrl,
        success: se.success,
        featured: se.featured,
        galleryCount: se.galleryUrls?.length,
        videoUrl: se.videoUrl,
        organizationImage,
        organizationWebsite: se.organizerInfo?.website,
        organizationFacebook: se.organizerInfo?.facebook,
        organizationInstagram: se.organizerInfo?.instagram,
        organizationTwitter: se.organizerInfo?.twitter,
        organizationYoutube: se.organizerInfo?.youtube,
        gallery: se.galleryUrls?.filter((u): u is string => Boolean(u)),
        organizerDetails,
        organizationAbout: se.organizerInfo?.about,
        venueTitle: se.venueInfo?.title,
        venueImageUrl: se.venueInfo?.imageUrl,
        venueDescription: se.venueInfo?.description,
        venueFallbackImageUrl: se.venueInfo?.fallbackImageUrl,
        venueAddress: se.venueInfo?.address,
    }
}

export async function getEvents(): Promise<PastEvent[]> {
    try {
        const sanityEvents = await client.fetch<SanityEvent[]>(
            EVENTS_QUERY,
            {},
            { next: { revalidate: 3600, tags: ['event'] } },
        )
        if (!Array.isArray(sanityEvents) || sanityEvents.length === 0) {
            return pastEvents
        }
        return sanityEvents.map(sanityToPastEvent)
    } catch (err) {
        console.error('[getEvents] Sanity fetch failed, falling back to local pastEvents:', err)
        return pastEvents
    }
}

export async function getEventBySlug(slug: string): Promise<PastEvent | undefined> {
    try {
        const event = await client.fetch<SanityEvent | null>(
            EVENT_BY_SLUG_QUERY,
            { slug },
            { next: { revalidate: 3600, tags: ['event', `event:${slug}`] } },
        )
        if (event) return sanityToPastEvent(event)
    } catch (err) {
        console.error('[getEventBySlug] Sanity fetch failed, falling back to local pastEvents:', err)
    }
    return pastEvents.find((e) => e.slug === slug)
}

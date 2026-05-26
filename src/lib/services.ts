import {
    Presentation,
    Wrench,
    Briefcase,
    GraduationCap,
    Users,
    BookOpen,
    Factory,
    Settings,
    Rocket,
    TrendingUp,
    Building2,
} from 'lucide-react'
import { client } from '@/sanity/client'
import {
    SERVICES_QUERY,
    SERVICE_BY_SLUG_QUERY,
} from '@/sanity/lib/queries'
import type { SanityService } from '@/sanity/types'
import type { ServiceClient } from '@/types/service'
import type { TrainingService } from '@/data/servicesData'
import { trainingServices } from '@/data/servicesData'

/**
 * BLG-133 follow-up — fetch editor-managed services from Sanity and map
 * them onto the shared `ServiceClient` shape (src/types/service.ts) used
 * by both the listing grid and the detail page. When Sanity has no
 * service docs the helper falls back to the hard-coded `trainingServices`
 * array — the page never errors out because of a CMS hiccup, and the
 * sitemap keeps enumerating every slug.
 *
 * The shared shape is serializable (no React component refs), so server
 * pages can prop-drill it into client components without RSC boundary
 * errors. The icon is carried as a *string name* and resolved to a
 * lucide-react component at render time via `getIcon(name)` in the
 * consumer (already used by ServiceDetailHeroSection / CTASection;
 * ServicesGridSection now does the same).
 */

// Lucide component → string name. Used only for the local-fallback path
// (mapping the legacy `TrainingService.icon: ComponentType` back to the
// string name the consumers expect). Sanity already stores the string.
//
// Editors are limited to this set via the schema's `iconName` option
// list — keep this map in sync when you add a new icon there.
const ICON_NAME_BY_COMPONENT = new Map<unknown, string>([
    [Presentation, 'Presentation'],
    [Wrench, 'Wrench'],
    [Briefcase, 'Briefcase'],
    [GraduationCap, 'GraduationCap'],
    [Users, 'Users'],
    [BookOpen, 'BookOpen'],
    [Factory, 'Factory'],
    [Settings, 'Settings'],
    [Rocket, 'Rocket'],
    [TrendingUp, 'TrendingUp'],
    [Building2, 'Building2'],
])

function sanityToServiceClient(ss: SanityService): ServiceClient {
    return {
        id: ss._id,
        slug: ss.slug || ss._id,
        iconName: ss.iconName || 'GraduationCap',
        title: ss.title,
        tagline: ss.tagline || '',
        shortDescription: ss.shortDescription || '',
        fullDescription: ss.fullDescription || ss.shortDescription || '',
        color: ss.color,
        features: ss.features ?? [],
        benefits: ss.benefits ?? [],
        whoShouldAttend: ss.whoShouldAttend ?? [],
        deliveryFormats: (ss.deliveryFormats ?? []).map((d) => ({
            format: d.format,
            duration: d.duration,
            description: d.description ?? '',
        })),
        outcomes: ss.outcomes ?? [],
        methodology: ss.methodology ?? [],
        stats: ss.stats,
        keywords: ss.keywords,
    }
}

function legacyToServiceClient(s: TrainingService): ServiceClient {
    // Extras the legacy interface doesn't declare but the page's
    // `toClientService` helper read off via a cast — kept here for parity
    // so a future legacy entry that adds `iconName`/`stats`/`keywords`
    // flows through without code changes.
    const extras = s as unknown as {
        iconName?: string
        stats?: ServiceClient['stats']
        keywords?: ServiceClient['keywords']
    }
    return {
        id: s.id,
        slug: s.slug,
        iconName:
            extras.iconName ||
            ICON_NAME_BY_COMPONENT.get(s.icon) ||
            'GraduationCap',
        title: s.title,
        tagline: s.tagline,
        shortDescription: s.shortDescription,
        fullDescription: s.fullDescription,
        color: s.color,
        features: s.features,
        benefits: s.benefits,
        whoShouldAttend: s.whoShouldAttend,
        deliveryFormats: s.deliveryFormats,
        outcomes: s.outcomes,
        methodology: s.methodology,
        stats: extras.stats,
        keywords: extras.keywords,
    }
}

function localFallback(): ServiceClient[] {
    return trainingServices.map(legacyToServiceClient)
}

export async function getServices(): Promise<ServiceClient[]> {
    try {
        const sanityServices = await client.fetch<SanityService[]>(
            SERVICES_QUERY,
            {},
            { next: { revalidate: 3600, tags: ['service'] } },
        )
        if (!Array.isArray(sanityServices) || sanityServices.length === 0) {
            return localFallback()
        }
        return sanityServices.map(sanityToServiceClient)
    } catch (err) {
        console.error('[getServices] Sanity fetch failed, falling back to local trainingServices:', err)
        return localFallback()
    }
}

export async function getServiceBySlug(slug: string): Promise<ServiceClient | undefined> {
    try {
        const service = await client.fetch<SanityService | null>(
            SERVICE_BY_SLUG_QUERY,
            { slug },
            { next: { revalidate: 3600, tags: ['service', `service:${slug}`] } },
        )
        if (service) return sanityToServiceClient(service)
    } catch (err) {
        console.error('[getServiceBySlug] Sanity fetch failed, falling back to local trainingServices:', err)
    }
    const fallback = trainingServices.find((s) => s.slug === slug)
    return fallback ? legacyToServiceClient(fallback) : undefined
}

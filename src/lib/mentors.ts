import { client } from '@/sanity/client'
import { MENTORS_QUERY } from '@/sanity/lib/queries'
import type { SanityMentor } from '@/sanity/types'
import type { Mentor, Social } from '@/lib/mentorShared'
import { MENTORS } from '@/lib/mentorShared'

/**
 * BLG-133 follow-up — fetch editor-managed mentors from Sanity and map
 * them onto the legacy `Mentor` shape (mentorShared.ts). When Sanity has
 * no mentor docs the function returns the hard-coded `MENTORS` array, so
 * the /mentors page (and its JSON-LD) keeps working with zero regression
 * during the migration.
 */

function mapSocial(social: SanityMentor['social']): Social[] | undefined {
    if (!social) return undefined
    const out: Social[] = []
    if (social.linkedin) out.push({ platform: 'linkedin', url: social.linkedin })
    if (social.twitter) out.push({ platform: 'x', url: social.twitter })
    if (social.github) out.push({ platform: 'github', url: social.github })
    if (social.website) out.push({ platform: 'website', url: social.website })
    return out.length > 0 ? out : undefined
}

function sanityToMentor(sm: SanityMentor): Mentor {
    return {
        id: sm.slug || sm._id,
        name: sm.name,
        title: sm.role,
        company: sm.currentCompany,
        // `domain` widens to string in Sanity — narrow back to the
        // discriminated union, falling back to 'Other' for unknown values.
        domain: (sm.domain as Mentor['domain']) || 'Other',
        location: sm.location,
        experience: sm.yearsOfExperience
            ? `${sm.yearsOfExperience}+ years`
            : undefined,
        avatar: sm.photoUrl,
        // `expertise` (Sanity) maps to `highlights` (legacy Mentor shape).
        highlights: sm.expertise,
        bio: sm.shortBio,
        socials: mapSocial(sm.social),
    }
}

export async function getMentors(): Promise<Mentor[]> {
    try {
        const sanityMentors = await client.fetch<SanityMentor[]>(
            MENTORS_QUERY,
            {},
            { next: { revalidate: 3600, tags: ['mentor'] } },
        )
        if (!Array.isArray(sanityMentors) || sanityMentors.length === 0) {
            return MENTORS
        }
        return sanityMentors.map(sanityToMentor)
    } catch (err) {
        console.error('[getMentors] Sanity fetch failed, falling back to local MENTORS:', err)
        return MENTORS
    }
}

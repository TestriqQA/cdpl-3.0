import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed city pages. Today the 765 city course pages are
// driven by TS data files; this schema lets the SEO/content team CMS-manage
// each city's hero/meta/local-business copy without an engineering change
// — directly unblocks BLG-187 (city-page meta description rewrite at scale).
export default defineType({
    name: 'city',
    title: 'City',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'City Name',
            type: 'string',
            description: 'e.g. "Pune", "Bengaluru", "Thane"',
            validation: (Rule) => Rule.required().min(2).max(80),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            description: 'Used in URLs like /software-testing-course-in-{slug}.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'state',
            title: 'State',
            type: 'string',
            description: 'e.g. "Maharashtra", "Karnataka"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'region',
            title: 'Region',
            type: 'string',
            options: {
                list: [
                    { title: 'North India', value: 'north' },
                    { title: 'South India', value: 'south' },
                    { title: 'East India', value: 'east' },
                    { title: 'West India', value: 'west' },
                    { title: 'Central India', value: 'central' },
                    { title: 'Northeast India', value: 'northeast' },
                ],
            },
        }),
        defineField({
            name: 'tier',
            title: 'City Tier',
            type: 'string',
            options: {
                list: [
                    { title: 'Tier 1', value: 'tier-1' },
                    { title: 'Tier 2', value: 'tier-2' },
                    { title: 'Tier 3', value: 'tier-3' },
                ],
            },
            description: 'For prioritising content depth and link-building effort.',
        }),
        defineField({
            name: 'description',
            title: 'About this City (for the LocalBusiness page copy)',
            type: 'text',
            rows: 4,
            description: 'Used as the hero blurb and JSON-LD description on city pages.',
        }),
        defineField({
            name: 'nearbyLandmarks',
            title: 'Nearby Landmarks / Areas',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Used for local SEO body copy. e.g. ["Hinjewadi IT Park", "Baner", "Kothrud"]',
        }),
        defineField({
            name: 'coursesOffered',
            title: 'Courses Offered (slugs)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Slugs of CDPL courses available in this city. e.g. ["manual-testing-course", "data-science-course"]',
        }),
        defineField({
            name: 'isActive',
            title: 'Show city pages for this city',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            fields: [
                defineField({
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    validation: (Rule) => Rule.max(60).warning('Keep meta titles under 60 characters.'),
                }),
                defineField({
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    description:
                        'Used per city to lift CTR from the 0.36% baseline (BLG-187). Aim for distinct, search-intent-aligned copy per city.',
                    validation: (Rule) => Rule.max(160).warning('Keep meta descriptions under 160 characters.'),
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'state' },
    },
})

import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed services (corporate training, STTP, faculty
// development, internships, custom training). Replaces the hard-coded
// /services page data so business-development can publish or retire
// offerings without an engineering change.
export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Service Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(120),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'One-line punchy summary shown on the services hub.',
            validation: (Rule) => Rule.max(140),
        }),
        defineField({
            name: 'summary',
            title: 'Short Summary',
            type: 'text',
            rows: 3,
            description: 'Listing card body — 1-2 sentences.',
        }),
        defineField({
            name: 'description',
            title: 'Full Description',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'icon',
            title: 'Icon / Cover Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    validation: (Rule) => Rule.required().min(3).max(160),
                }),
            ],
        }),
        defineField({
            name: 'features',
            title: 'Key Features / Benefits',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Short bullet-style benefits shown as a list.',
        }),
        defineField({
            name: 'targetAudience',
            title: 'Target Audience',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Colleges", "Corporate L&D", "Working Professionals"]',
        }),
        defineField({
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
            description: 'e.g. "Request Proposal"',
            initialValue: 'Get in Touch',
        }),
        defineField({
            name: 'ctaUrl',
            title: 'CTA Link',
            type: 'string',
            description: 'Internal path (e.g. "/contact-us") or external URL.',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first.',
        }),
        defineField({
            name: 'isActive',
            title: 'Show on the live site',
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
                    validation: (Rule) => Rule.max(160).warning('Keep meta descriptions under 160 characters.'),
                }),
                defineField({ name: 'ogImage', title: 'Social Share Image (Open Graph)', type: 'image' }),
            ],
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'tagline', media: 'icon' },
    },
})

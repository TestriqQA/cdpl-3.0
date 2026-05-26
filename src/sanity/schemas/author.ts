import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        // BLG-134: required validation on the author's critical fields.
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        // BLG-039 (extended): when an author is renamed, list any retired
        // slugs here. /blog/author/{old-slug} requests will be 308-redirected
        // to the current slug instead of 404-ing, preserving any external
        // links and accumulated SEO authority.
        defineField({
            name: 'previousSlugs',
            title: 'Previous Slugs (for 301 redirects)',
            description:
                'Old slugs this author used to have. Visitors hitting /blog/author/{old-slug} will be permanently redirected to the current slug. Add the slug-string only (no leading slash).',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description: 'Describe the author photo for screen readers and image SEO. Required.',
                    validation: (Rule) => Rule.required().min(5).max(160),
                }),
            ],
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            name: 'social',
            title: 'Social Links',
            type: 'object',
            fields: [
                defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
                defineField({ name: 'twitter', title: 'Twitter', type: 'url' }),
                defineField({ name: 'github', title: 'GitHub', type: 'url' }),
                defineField({ name: 'website', title: 'Website', type: 'url' }),
            ],
        }),
        // BLG-108/147: E-E-A-T fields — areas of expertise and credentials.
        defineField({
            name: 'expertise',
            title: 'Areas of Expertise',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. "Software Testing", "Test Automation", "Data Science".',
        }),
        defineField({
            name: 'credentials',
            title: 'Credentials & Certifications',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. "ISTQB Certified Tester", "10+ years in QA".',
        }),
        // BLG-136: per-author SEO metadata for author archive pages.
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
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'avatar',
        },
    },
})

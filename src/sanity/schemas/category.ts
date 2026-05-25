import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        // BLG-134: required validation on the category's critical fields.
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
        // BLG-039: when a category is renamed, list its old slugs here.
        // `/blog/category/{old-slug}` requests will be 308-redirected to the
        // current slug instead of 404-ing, preserving any external links and
        // accumulated SEO authority.
        defineField({
            name: 'previousSlugs',
            title: 'Previous Slugs (for 301 redirects)',
            description:
                'Old slugs this category used to have. Visitors hitting /blog/category/{old-slug} will be permanently redirected to the current slug. Add the slug-string only (no leading slash).',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        // BLG-137: featured image for category archive pages (with alt text).
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description: 'Describe the image for screen readers and image SEO. Required.',
                    validation: (Rule) => Rule.required().min(5).max(160),
                }),
            ],
        }),
        defineField({
            name: 'color',
            title: 'Color Theme',
            type: 'object',
            fields: [
                defineField({ name: 'bg', title: 'Background Class (e.g. bg-blue-100)', type: 'string' }),
                defineField({ name: 'text', title: 'Text Class (e.g. text-blue-700)', type: 'string' }),
            ]
        }),
        // BLG-137: per-category SEO metadata for category archive pages.
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
})

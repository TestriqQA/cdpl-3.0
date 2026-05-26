import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        // BLG-134: required validation on the post's critical fields.
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(120),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            // BLG-134/144: slug must exist; the slug type enforces uniqueness.
            validation: (Rule) => Rule.required(),
        }),
        // BLG-039 (extended): when a post's slug changes, list any retired
        // slugs here. /blog/{old-slug} requests will be 308-redirected to
        // the current slug instead of 404-ing, preserving any external
        // links and accumulated SEO authority.
        defineField({
            name: 'previousSlugs',
            title: 'Previous Slugs (for 301 redirects)',
            description:
                'Old slugs this post used to have. Visitors hitting /blog/{old-slug} will be permanently redirected to the current slug. Add the slug-string only (no leading slash).',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
            // BLG-151: required so post ordering (by publishDate) is stable.
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Short description shown in the hero section.'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                // BLG-141: restrict block styles — H1 is reserved for the
                // page title, so the body offers H2-H4, quote and normal only.
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                },
                {
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
                },
                {
                    type: 'code',
                    name: 'code',
                    title: 'Code Block',
                    options: {
                        withFilename: true
                    }
                },
                { type: 'table' }
            ],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            fields: [
                // BLG-143: length guidance so titles/descriptions don't get
                // truncated in search results.
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
                defineField({ name: 'canonical', title: 'Canonical URL', type: 'string' }), // Optional overrides
                defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }),
                // BLG-135: per-post Open Graph image + indexing overrides.
                defineField({
                    name: 'ogImage',
                    title: 'Social Share Image (Open Graph)',
                    type: 'image',
                    description: 'Optional override for the social-share image. Falls back to the featured image.',
                }),
                defineField({
                    name: 'noindex',
                    title: 'Hide from search engines (noindex)',
                    type: 'boolean',
                    initialValue: false,
                }),
                defineField({
                    name: 'nofollow',
                    title: 'Do not follow links on this page (nofollow)',
                    type: 'boolean',
                    initialValue: false,
                }),
            ]
        })
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'featuredImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})

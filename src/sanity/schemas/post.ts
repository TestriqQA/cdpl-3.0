import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    type: 'code',
                    name: 'code',
                    title: 'Code Block',
                    options: {
                        withFilename: true
                    }
                }
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
                defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
                defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
                defineField({ name: 'canonical', title: 'Canonical URL', type: 'string' }), // Optional overrides
                defineField({ name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] }),
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

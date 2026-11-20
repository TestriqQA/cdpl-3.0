import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed hiring partners (logos shown on the placements
// rail / homepage). Currently hard-coded in `HIRING_PARTNERS` in
// src/lib/seo-config.ts — this schema lets the placements team add or
// retire partners without an engineering change.
export default defineType({
    name: 'hiringPartner',
    title: 'Hiring Partner',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(80),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description:
                        'Describe the logo for screen readers and image SEO. Usually "<Company> logo".',
                    validation: (Rule) => Rule.required().min(3).max(160),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'website',
            title: 'Website URL',
            type: 'url',
            description: 'Public homepage of the partner company.',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            description: 'Optional one-line about the partner.',
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
    ],
    preview: {
        select: { title: 'name', media: 'logo' },
    },
})

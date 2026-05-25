import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed events (webinars, seminars, workshops, industrial
// visits). Replaces the hard-coded events page data so the marketing team
// can publish new events without an engineering change.
export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(5).max(150),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            options: {
                list: [
                    { title: 'Webinar', value: 'webinar' },
                    { title: 'Seminar', value: 'seminar' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Industrial Visit', value: 'industrial-visit' },
                    { title: 'Bootcamp', value: 'bootcamp' },
                    { title: 'Hackathon', value: 'hackathon' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date & Time',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date & Time',
            type: 'datetime',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g. "Online (Zoom)", "CDPL HQ Mira Road", "Pune".',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'summary',
            title: 'Short Summary',
            type: 'text',
            rows: 3,
            description: 'One-paragraph teaser shown on the events listing.',
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
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string',
                    description: 'Describe the image. Required.',
                    validation: (Rule) => Rule.required().min(5).max(160),
                }),
            ],
        }),
        defineField({
            name: 'speakers',
            title: 'Speakers',
            type: 'array',
            of: [
                defineField({
                    name: 'speaker',
                    title: 'Speaker',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({ name: 'role', title: 'Role / Designation', type: 'string' }),
                        defineField({ name: 'company', title: 'Company', type: 'string' }),
                        defineField({
                            name: 'photo',
                            title: 'Photo',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    title: 'Alt text',
                                    type: 'string',
                                    validation: (Rule) => Rule.required(),
                                }),
                            ],
                        }),
                        defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'registrationUrl',
            title: 'Registration / RSVP URL',
            type: 'url',
        }),
        defineField({
            name: 'isPublished',
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
        select: { title: 'title', subtitle: 'startDate', media: 'coverImage' },
    },
})

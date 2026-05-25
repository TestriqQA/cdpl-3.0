import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed student testimonials. v1 — fields kept self-
// contained (no references to course/mentor docs yet); cross-refs can
// be promoted once those docs are also populated.
export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Student Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(80),
        }),
        defineField({
            name: 'role',
            title: 'Current Role / Designation',
            type: 'string',
            description: 'e.g. "QA Engineer", "Data Analyst"',
        }),
        defineField({
            name: 'company',
            title: 'Current Company',
            type: 'string',
            description: 'Where the student works today (the placement story).',
        }),
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
                    description: 'Describe the photo for screen readers. Required.',
                    validation: (Rule) => Rule.required().min(5).max(160),
                }),
            ],
        }),
        defineField({
            name: 'quote',
            title: 'Testimonial Quote',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().min(40).max(600),
        }),
        defineField({
            name: 'courseSlug',
            title: 'Course Slug',
            type: 'string',
            description:
                'Slug of the CDPL course the student took. Used to display this testimonial on the matching course page. e.g. "manual-testing-course"',
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
            initialValue: 5,
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn Profile URL',
            type: 'url',
            description:
                'The student\'s public LinkedIn profile — closes Scaler\'s verified-alumni moat and gives the testimonial a verifiable source (BLG-179 / E-E-A-T).',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first. Leave blank to sort by _createdAt.',
        }),
        defineField({
            name: 'isActive',
            title: 'Show on the live site',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'role', media: 'photo' },
    },
})

import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed mentor profiles. Currently hard-coded on the
// /mentors page — moving them into Sanity unblocks BLG-101 (per-mentor
// profile pages with verifiable LinkedIn URLs, closing Scaler's alumni
// moat) without further engineering.
export default defineType({
    name: 'mentor',
    title: 'Mentor',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(120),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Designation',
            type: 'string',
            description: 'e.g. "Senior Software Test Engineer", "Lead Data Scientist"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'currentCompany',
            title: 'Current Company',
            type: 'string',
            description: 'Where the mentor works today (drives credibility).',
        }),
        // BLG-133 follow-up: matches the `Mentor.domain` discriminated union
        // in src/lib/mentorShared.ts so the filter chips and domain colours
        // on the /mentors page work for Sanity-managed mentors too.
        defineField({
            name: 'domain',
            title: 'Primary Domain',
            type: 'string',
            options: {
                list: [
                    { title: 'QA', value: 'QA' },
                    { title: 'Data Science', value: 'Data Science' },
                    { title: 'Data Analytics', value: 'Data Analytics' },
                    { title: 'Data Engineering', value: 'Data Engineering' },
                    { title: 'Marketing', value: 'Marketing' },
                    { title: 'Product', value: 'Product' },
                    { title: 'Engineering', value: 'Engineering' },
                    { title: 'Cloud', value: 'Cloud' },
                    { title: 'Security', value: 'Security' },
                    { title: 'Full-Stack', value: 'Full-Stack' },
                    { title: 'Other', value: 'Other' },
                ],
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'City / region the mentor is based in. Shown on the mentor card.',
        }),
        defineField({
            name: 'photo',
            title: 'Profile Photo',
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
            description: 'One-paragraph summary shown on the mentor card.',
        }),
        defineField({
            name: 'longBio',
            title: 'Long Bio',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                    ],
                },
            ],
            description: 'Detailed bio shown on the individual mentor page.',
        }),
        defineField({
            name: 'expertise',
            title: 'Areas of Expertise',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Selenium", "Test Automation", "CI/CD"]',
        }),
        defineField({
            name: 'yearsOfExperience',
            title: 'Years of Industry Experience',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(60),
        }),
        defineField({
            name: 'coursesTaught',
            title: 'Courses Taught (slugs)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Slugs of CDPL courses this mentor leads. Used to surface the mentor on matching course pages.',
        }),
        defineField({
            name: 'social',
            title: 'Social Profiles',
            type: 'object',
            fields: [
                defineField({
                    name: 'linkedin',
                    title: 'LinkedIn URL',
                    type: 'url',
                    description: 'Public LinkedIn — strongly recommended for E-E-A-T (BLG-066/179).',
                }),
                defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
                defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
                defineField({ name: 'website', title: 'Personal Website', type: 'url' }),
            ],
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
            ],
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'role', media: 'photo' },
    },
})

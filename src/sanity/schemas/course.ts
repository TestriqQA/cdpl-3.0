import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed courses. The most consequential of the 7 new
// doc types — today 30+ courses live as TS files in src/data/, which is
// why hard-coded course descriptions / curriculum / price drift between
// the navigation, the home ItemList, JSON-LD and the live page (BLG-095).
// Once content team populates this doc type, future work can migrate the
// course-detail components off the TS files and onto the CMS.
export default defineType({
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Course Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(5).max(150),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            description: 'Final URL segment, e.g. "manual-testing-course".',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categorySlug',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Software Testing', value: 'software-testing-course' },
                    { title: 'Data Science & ML', value: 'ds-ml-courses' },
                    { title: 'Business Intelligence', value: 'bi-courses' },
                    { title: 'Artificial Intelligence', value: 'artificial-intelligence-courses' },
                    { title: 'Digital Marketing', value: 'digital-marketing-courses' },
                ],
                layout: 'radio',
            },
            description: 'The category hub this course nests under in /courses/{category}/{slug}.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'One-line hook shown under the title.',
            validation: (Rule) => Rule.max(180),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description:
                'Used in MegaMenu, footer, home ItemList and JSON-LD. Must accurately summarise the course (BLG-095 — boilerplate descriptions previously caused entity confusion).',
            validation: (Rule) => Rule.required().min(60).max(280),
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
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
                    validation: (Rule) => Rule.required().min(5).max(160),
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'Human-readable, e.g. "3 months", "60 hours".',
        }),
        defineField({
            name: 'level',
            title: 'Level',
            type: 'string',
            options: {
                list: [
                    { title: 'Beginner', value: 'Beginner' },
                    { title: 'Intermediate', value: 'Intermediate' },
                    { title: 'Advanced', value: 'Advanced' },
                    { title: 'All Levels', value: 'All Levels' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'mode',
            title: 'Delivery Mode',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Online (Live)', value: 'online' },
                    { title: 'Offline (Classroom)', value: 'offline' },
                    { title: 'Hybrid', value: 'hybrid' },
                    { title: 'Self-Paced', value: 'self-paced' },
                ],
            },
        }),
        defineField({
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Maps to Course.coursePrerequisites in JSON-LD (BLG-075).',
        }),
        defineField({
            name: 'learningOutcomes',
            title: 'Learning Outcomes',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Maps to Course.teaches in JSON-LD (BLG-063).',
        }),
        defineField({
            name: 'curriculum',
            title: 'Curriculum',
            type: 'array',
            of: [
                defineField({
                    name: 'module',
                    title: 'Module',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Module Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'summary',
                            title: 'Summary',
                            type: 'text',
                            rows: 2,
                        }),
                        defineField({
                            name: 'topics',
                            title: 'Topics',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'toolsCovered',
            title: 'Tools / Frameworks Covered',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. ["Selenium", "Jenkins", "Postman", "Jira"]',
        }),
        defineField({
            name: 'certifications',
            title: 'Certifications Awarded',
            type: 'array',
            of: [{ type: 'string' }],
            description:
                'e.g. ["CDPL Course Completion", "ISTQB Foundation prep"]. Maps to Course.educationalCredentialAwarded (BLG-074).',
        }),
        defineField({
            name: 'targetAudience',
            title: 'Target Audience',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Who is this course for? Maps to Course.audience.',
        }),
        defineField({
            name: 'price',
            title: 'Price (INR)',
            type: 'number',
            description: 'Real selling price. Used in Course.offers.price JSON-LD (BLG-058).',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'originalPrice',
            title: 'Original Price (INR)',
            type: 'number',
            description: 'Strike-through price for discount display.',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'mentorSlugs',
            title: 'Mentor(s) (slugs)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Slugs of mentor docs leading this course.',
        }),
        defineField({
            name: 'enrollmentUrl',
            title: 'Enrollment / Apply URL',
            type: 'string',
            description: 'Internal route (e.g. "/contact-us") or external checkout URL.',
        }),
        defineField({
            name: 'brochureUrl',
            title: 'Brochure (PDF) URL',
            type: 'string',
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                defineField({
                    name: 'faq',
                    title: 'FAQ',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'answer',
                            title: 'Answer',
                            type: 'text',
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ],
            description: 'Powers FAQPage JSON-LD on the course detail page.',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first within a category.',
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
                defineField({
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'categorySlug', media: 'coverImage' },
    },
})

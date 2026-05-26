import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed services (corporate training, STTP, faculty
// development, internships, custom training, government training).
// Replaces the hard-coded `trainingServices` array in src/data/servicesData.ts
// so business-development can publish or retire offerings without an
// engineering change.
//
// Field names are intentionally aligned with the legacy `TrainingService`
// interface and the shared `ServiceClient` shape (src/types/service.ts) so
// the mapper in src/lib/services.ts is a one-to-one projection — no
// rename gymnastics.
//
// The `icon` field is a *lucide-react icon name* (string), not an image.
// The detail page already uses a string-keyed `getIcon(name)` lookup
// against `lucide-react`'s namespace export — the listing now does the
// same. Editors pick an icon from the option list.
export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        { name: 'core', title: 'Core', default: true },
        { name: 'content', title: 'Content' },
        { name: 'meta', title: 'Visual & SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            group: 'core',
            validation: (Rule) => Rule.required().min(3).max(150),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'core',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            group: 'core',
            description: 'One-line punchy summary shown under the title.',
            validation: (Rule) => Rule.max(180),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            group: 'core',
            rows: 3,
            description: 'Listing card body — 1-2 sentences. Also feeds the meta description fallback.',
            validation: (Rule) => Rule.required().min(20).max(400),
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'text',
            group: 'content',
            rows: 10,
            description: 'Long-form paragraph shown on the detail page (single paragraph; not Portable Text).',
        }),
        defineField({
            name: 'iconName',
            title: 'Icon',
            type: 'string',
            group: 'meta',
            description: 'Picks a lucide-react icon. Default falls back to GraduationCap if blank.',
            initialValue: 'GraduationCap',
            options: {
                list: [
                    { title: 'Presentation', value: 'Presentation' },
                    { title: 'Wrench', value: 'Wrench' },
                    { title: 'Briefcase', value: 'Briefcase' },
                    { title: 'Graduation Cap', value: 'GraduationCap' },
                    { title: 'Users', value: 'Users' },
                    { title: 'Book Open', value: 'BookOpen' },
                    { title: 'Factory', value: 'Factory' },
                    { title: 'Settings', value: 'Settings' },
                    { title: 'Rocket', value: 'Rocket' },
                    { title: 'Trending Up', value: 'TrendingUp' },
                    { title: 'Building 2', value: 'Building2' },
                ],
            },
        }),
        defineField({
            name: 'color',
            title: 'Card Gradient',
            type: 'string',
            group: 'meta',
            description: 'Tailwind gradient utilities for the listing card header, e.g. "from-purple-500 to-blue-600".',
        }),
        defineField({
            name: 'features',
            title: 'Key Features',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'whoShouldAttend',
            title: 'Who Should Attend',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'deliveryFormats',
            title: 'Delivery Formats',
            type: 'array',
            group: 'content',
            of: [
                defineField({
                    name: 'deliveryFormat',
                    title: 'Delivery Format',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'format',
                            title: 'Format Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        }),
                    ],
                    preview: { select: { title: 'format', subtitle: 'duration' } },
                }),
            ],
        }),
        defineField({
            name: 'curriculum',
            title: 'Curriculum Modules',
            type: 'array',
            group: 'content',
            description: 'Optional — leave blank if the service is not curriculum-shaped.',
            of: [
                defineField({
                    name: 'module',
                    title: 'Module',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'module',
                            title: 'Module Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'topics',
                            title: 'Topics',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                    preview: { select: { title: 'module' } },
                }),
            ],
        }),
        defineField({
            name: 'outcomes',
            title: 'Outcomes',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'methodology',
            title: 'Methodology',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'stats',
            title: 'Stats Counters',
            type: 'array',
            group: 'content',
            description: 'Optional — shown in the "Stats" band on the detail page.',
            of: [
                defineField({
                    name: 'stat',
                    title: 'Stat',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'value',
                            title: 'Value (numeric)',
                            type: 'number',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'suffix',
                            title: 'Suffix',
                            type: 'string',
                            description: 'e.g. "%", "+", "/5".',
                        }),
                    ],
                    preview: { select: { title: 'label', subtitle: 'value' } },
                }),
            ],
        }),
        defineField({
            name: 'keywords',
            title: 'SEO Keywords (extra)',
            type: 'array',
            group: 'meta',
            of: [{ type: 'string' }],
            description: 'Extra keywords folded into the per-service Metadata keywords list.',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            group: 'core',
            description: 'Lower numbers appear first on the listing.',
        }),
        defineField({
            name: 'isActive',
            title: 'Show on the live site',
            type: 'boolean',
            group: 'core',
            initialValue: true,
        }),
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            group: 'meta',
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
        select: { title: 'title', subtitle: 'tagline' },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})

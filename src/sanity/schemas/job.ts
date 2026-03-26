import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'team',
            title: 'Team',
            type: 'string',
            options: {
                list: [
                    { title: 'Engineering', value: 'Engineering' },
                    { title: 'Data', value: 'Data' },
                    { title: 'Product', value: 'Product' },
                    { title: 'Growth', value: 'Growth' },
                    { title: 'Student Success', value: 'Student Success' },
                    { title: 'Operations', value: 'Operations' },
                    { title: 'Sales', value: 'Sales' },
                    { title: 'Training', value: 'Training' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            options: {
                list: [
                    { title: 'Bengaluru', value: 'Bengaluru' },
                    { title: 'Pune', value: 'Pune' },
                    { title: 'Mumbai', value: 'Mumbai' },
                    { title: 'Remote (India)', value: 'Remote (India)' },
                    { title: 'Hybrid (Bengaluru)', value: 'Hybrid (Bengaluru)' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Contract', value: 'Contract' },
                    { title: 'Internship', value: 'Internship' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'experience',
            title: 'Experience',
            type: 'string',
            options: {
                list: [
                    { title: '0–1 yrs', value: '0–1 yrs' },
                    { title: '1–3 yrs', value: '1–3 yrs' },
                    { title: '3–5 yrs', value: '3–5 yrs' },
                    { title: '5–8 yrs', value: '5–8 yrs' },
                    { title: '8+ yrs', value: '8+ yrs' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
            description: 'Short summary shown in the job card.',
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'applyEmail',
            title: 'Apply Email',
            type: 'string',
            initialValue: 'careers@cinutedigital.com',
        }),
        defineField({
            name: 'applyLink',
            title: 'Apply Link',
            type: 'url',
            description: 'Optional external application link.',
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description: 'Toggle off to hide this job without deleting it.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            team: 'team',
            location: 'location',
            isActive: 'isActive',
        },
        prepare({ title, team, location, isActive }) {
            return {
                title: `${isActive === false ? '🚫 ' : ''}${title}`,
                subtitle: `${team} · ${location}`,
            }
        },
    },
})

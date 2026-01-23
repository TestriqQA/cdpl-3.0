import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'color',
            title: 'Color Theme',
            type: 'object',
            fields: [
                defineField({ name: 'bg', title: 'Background Class (e.g. bg-blue-100)', type: 'string' }),
                defineField({ name: 'text', title: 'Text Class (e.g. text-blue-700)', type: 'string' }),
            ]
        })
    ],
})

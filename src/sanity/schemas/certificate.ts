import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'certificate',
    title: 'Certificate',
    type: 'document',
    fields: [
        defineField({
            name: 'certificateId',
            title: 'Certificate ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'holderName',
            title: 'Holder Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'program',
            title: 'Program',
            type: 'string',
            options: {
                list: [
                    { title: 'CDPL', value: 'CDPL' },
                    { title: 'AAA', value: 'AAA' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Valid', value: 'Valid' },
                    { title: 'Revoked', value: 'Revoked' },
                    { title: 'Expired', value: 'Expired' },
                ],
            },
            initialValue: 'Valid',
        }),
        defineField({
            name: 'certificateImage',
            title: 'Certificate Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'certificateId',
            subtitle: 'holderName',
            media: 'certificateImage',
        },
    },
})

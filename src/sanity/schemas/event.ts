import { defineField, defineType } from 'sanity'

// BLG-133: Sanity-managed events (webinars, seminars, workshops, industrial
// visits, MoU signings, faculty development programs). Replaces the
// hard-coded `pastEvents` array in src/data/eventsData.ts so the marketing
// team can publish new events without an engineering change.
//
// The v1 scaffold covered registration-style "future" events (format,
// startDate, speakers, registrationUrl). The follow-up migration extends
// the schema with the editorial fields the existing /events listing +
// /events/[slug] detail page consume (category, attendees, purpose,
// sessionHighlights, keyTakeaways, highlights, organizer/venue blocks,
// gallery) so the past-event story content can live in the CMS too.
export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    groups: [
        { name: 'core', title: 'Core', default: true },
        { name: 'editorial', title: 'Editorial Content' },
        { name: 'organizer', title: 'Organizer' },
        { name: 'venue', title: 'Venue' },
        { name: 'media', title: 'Media & Gallery' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            group: 'core',
            validation: (Rule) => Rule.required().min(5).max(200),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            group: 'core',
            description: 'Shown under the title on the detail page (e.g. "by Cinute Digital Pvt. Ltd").',
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
            name: 'format',
            title: 'Format',
            type: 'string',
            group: 'core',
            description: 'Structural type — drives Schema.org Event subtype and AEO surfaces. Use Category for the editorial label shown to readers.',
            options: {
                list: [
                    { title: 'Webinar', value: 'webinar' },
                    { title: 'Seminar', value: 'seminar' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Industrial Visit', value: 'industrial-visit' },
                    { title: 'Bootcamp', value: 'bootcamp' },
                    { title: 'Hackathon', value: 'hackathon' },
                    { title: 'MoU Signing', value: 'mou-signing' },
                    { title: 'Faculty Development Program', value: 'fdp' },
                    { title: 'Course / Lecture Series', value: 'course' },
                    { title: 'Conference', value: 'conference' },
                ],
            },
        }),
        defineField({
            name: 'category',
            title: 'Editorial Category',
            type: 'string',
            group: 'core',
            description: 'Freeform editorial label shown on the card (e.g. "Course Conducted", "MoU Signing", "Career Guidance Seminar").',
        }),
        defineField({
            name: 'serviceType',
            title: 'Service Type',
            type: 'string',
            group: 'core',
            description: 'Optional sub-label — e.g. "Lecture Series", "Partnership", "Business Intelligence".',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date & Time',
            type: 'datetime',
            group: 'core',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date & Time',
            type: 'datetime',
            group: 'core',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            group: 'core',
            description: 'e.g. "Online (Zoom)", "CDPL HQ Mira Road", "Aldel Institute of Management, Palghar".',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'attendees',
            title: 'Attendee Count',
            type: 'number',
            group: 'core',
            description: 'Approximate number of attendees, shown as "65+ Attendees" on the card.',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'featured',
            title: 'Show in Featured Slider',
            type: 'boolean',
            group: 'core',
            initialValue: false,
            description: 'Featured events appear in the hero slider on /events and as "You might also like" suggestions.',
        }),
        defineField({
            name: 'isPublished',
            title: 'Show on the live site',
            type: 'boolean',
            group: 'core',
            initialValue: true,
        }),
        defineField({
            name: 'registrationUrl',
            title: 'Registration / RSVP URL',
            type: 'url',
            group: 'core',
            description: 'Only for upcoming events with an open registration.',
        }),

        // Editorial Content
        defineField({
            name: 'summary',
            title: 'Short Summary',
            type: 'text',
            group: 'editorial',
            rows: 3,
            description: 'One-paragraph teaser. Used in the listing card when no Purpose is set, and as a fallback for SEO description.',
        }),
        defineField({
            name: 'purpose',
            title: 'Purpose / Long Description',
            type: 'text',
            group: 'editorial',
            rows: 8,
            description: 'The main editorial paragraph shown at the top of the event detail page.',
        }),
        defineField({
            name: 'trainingDuration',
            title: 'Session Intro Line',
            type: 'string',
            group: 'editorial',
            description: 'Lead-in sentence before Session Highlights, e.g. "The 30-hour intensive training program covered".',
        }),
        defineField({
            name: 'sessionHighlights',
            title: 'Session Highlights',
            type: 'array',
            group: 'editorial',
            of: [
                defineField({
                    name: 'highlight',
                    title: 'Highlight',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'points',
                            title: 'Bullet Points',
                            type: 'array',
                            of: [{ type: 'string' }],
                        }),
                    ],
                    preview: { select: { title: 'title' } },
                }),
            ],
        }),
        defineField({
            name: 'keyTakeaways',
            title: 'Key Takeaways',
            type: 'array',
            group: 'editorial',
            of: [
                defineField({
                    name: 'takeaway',
                    title: 'Takeaway',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 2,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: { select: { title: 'title' } },
                }),
            ],
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights (One-liners)',
            type: 'array',
            group: 'editorial',
            of: [{ type: 'string' }],
            description: 'Short bullet list shown alongside Session Highlights.',
        }),
        defineField({
            name: 'specialSession',
            title: 'Special Session',
            type: 'object',
            group: 'editorial',
            description: 'Optional — a single named guest speaker session.',
            fields: [
                defineField({ name: 'speaker', title: 'Speaker Name', type: 'string' }),
                defineField({ name: 'topic', title: 'Topic', type: 'string' }),
                defineField({
                    name: 'highlights',
                    title: 'Talk Highlights',
                    type: 'array',
                    of: [{ type: 'string' }],
                }),
            ],
        }),
        defineField({
            name: 'success',
            title: 'Closing / Success Line',
            type: 'text',
            group: 'editorial',
            rows: 3,
            description: 'The wrap-up paragraph shown after Key Takeaways.',
        }),

        // Organizer
        defineField({
            name: 'organizerInfo',
            title: 'Organizer Info',
            type: 'object',
            group: 'organizer',
            description: 'Leave blank for events organized by CDPL — the default CDPL details will be used.',
            fields: [
                defineField({ name: 'name', title: 'Organization Name', type: 'string' }),
                defineField({
                    name: 'image',
                    title: 'Logo',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                    ],
                }),
                defineField({ name: 'website', title: 'Website', type: 'url' }),
                defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
                defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
                defineField({ name: 'twitter', title: 'Twitter / X URL', type: 'url' }),
                defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
                defineField({ name: 'about', title: '"About" Page URL', type: 'url' }),
                defineField({
                    name: 'details',
                    title: 'About / Details',
                    type: 'text',
                    rows: 4,
                    description: 'Short organizer bio shown on the detail page.',
                }),
            ],
        }),

        // Venue
        defineField({
            name: 'venueInfo',
            title: 'Venue',
            type: 'object',
            group: 'venue',
            fields: [
                defineField({ name: 'title', title: 'Venue Name', type: 'string' }),
                defineField({ name: 'address', title: 'Address', type: 'string' }),
                defineField({
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    rows: 4,
                }),
                defineField({
                    name: 'image',
                    title: 'Primary Image',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                    ],
                }),
                defineField({
                    name: 'fallbackImage',
                    title: 'Fallback Image',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                    ],
                }),
            ],
        }),

        // Media
        defineField({
            name: 'coverImage',
            title: 'Cover / Hero Image',
            type: 'image',
            group: 'media',
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
            name: 'gallery',
            title: 'Photo Gallery',
            type: 'array',
            group: 'media',
            of: [
                defineField({
                    name: 'galleryImage',
                    title: 'Gallery Image',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
                    ],
                }),
            ],
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            group: 'media',
            description: 'Optional — YouTube/Vimeo URL embedded on the detail page.',
        }),
        defineField({
            name: 'speakers',
            title: 'Speakers',
            type: 'array',
            group: 'media',
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

        // SEO
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            group: 'seo',
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
    orderings: [
        {
            title: 'Start Date, Newest First',
            name: 'startDateDesc',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
    ],
})

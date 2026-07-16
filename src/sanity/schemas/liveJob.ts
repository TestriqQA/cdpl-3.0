import { defineField, defineType } from 'sanity'

/**
 * liveJob — external, CDPL-curated job openings shown on /jobs/live-jobs and
 * /jobs/live-jobs/[jobId]. Distinct from the internal-hiring `job` type used by
 * /jobs/careers (different domain: external companies, walk-in drives, etc.).
 *
 * SEO-SAFE MIGRATION NOTES
 * ------------------------
 * 1. This document type mirrors, field-for-field, the static `Job` shape in
 *    src/lib/jobsData.ts that the live-jobs pages already render. The mapper in
 *    src/lib/liveJobs.ts converts a `liveJob` doc back into that exact `Job`
 *    shape, so the page metadata, JobPosting JSON-LD and card UI are produced
 *    by the UNCHANGED existing code — output stays byte-identical.
 * 2. To preserve every existing URL, a migrated job's `slug` MUST equal its old
 *    `id` (e.g. "deloitte-data-analyst-intern-mumbai"). The seed script does this.
 * 3. `bannerImage` is intentionally a plain string (path or URL), NOT a Sanity
 *    image asset, so migrated jobs keep their exact current
 *    /live-jobs_images/... OG-image URLs — guaranteeing identical Open Graph
 *    output. (Can be upgraded to a Sanity image asset later if desired.)
 */
export default defineType({
    name: 'liveJob',
    title: 'Live Job',
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
            description:
                'URL segment: /jobs/live-jobs/<slug>. For migrated jobs this MUST match the old id to preserve the existing URL and its SEO.',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'companySite',
            title: 'Company Website',
            type: 'url',
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Walk-in', value: 'Walk-in' },
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Internship', value: 'Internship' },
                    { title: 'Contract', value: 'Contract' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mode',
            title: 'Work Mode',
            type: 'string',
            options: {
                list: [
                    { title: 'Onsite', value: 'Onsite' },
                    { title: 'Hybrid', value: 'Hybrid' },
                    { title: 'Remote', value: 'Remote' },
                ],
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Free text, e.g. "Mumbai – I-Think" or "Pune – Hinjewadi Phase 3".',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'postedOn',
            title: 'Posted On',
            type: 'date',
            options: { dateFormat: 'YYYY-MM-DD' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Event / Deadline Date',
            type: 'date',
            options: { dateFormat: 'YYYY-MM-DD' },
            description:
                'Walk-in date or application deadline (optional). Also used as the posting expiry (validThrough) in Google markup when "Valid Through" below is empty — do NOT set this to the posting date itself.',
        }),
        defineField({
            name: 'validThrough',
            title: 'Valid Through (apply-by date)',
            type: 'date',
            options: { dateFormat: 'YYYY-MM-DD' },
            description:
                'Application deadline → JobPosting.validThrough in Google markup. After this date Google treats the posting as EXPIRED, so keep it in the future while the job is open. If empty, falls back to Event/Deadline Date, then 2026-12-31.',
            validation: (Rule) =>
                Rule.custom((date) => {
                    if (
                        typeof date === 'string' &&
                        date <= new Date().toISOString().slice(0, 10)
                    ) {
                        return 'This date is not in the future — Google will treat the posting as EXPIRED.';
                    }
                    return true;
                }).warning(),
        }),
        defineField({
            name: 'timeWindow',
            title: 'Time Window',
            type: 'string',
            description: 'e.g. "10:00 AM – 2:00 PM".',
        }),
        defineField({
            name: 'venue',
            title: 'Venue',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'exp',
            title: 'Experience',
            type: 'string',
            description: 'Free text, e.g. "0–1 yr", "2–5 yrs".',
        }),
        defineField({
            name: 'salary',
            title: 'Salary (display text)',
            type: 'string',
            description:
                'Shown on the job card, e.g. "₹6–10 LPA". For Google rich results, ALSO fill the structured salary fields below whenever the employer disclosed pay.',
        }),
        defineField({
            name: 'salaryMin',
            title: 'Salary Min (number)',
            type: 'number',
            description:
                'Structured salary for Google JobPosting rich results (fixes the "Missing field baseSalary" notice). Numeric amount per the period below, e.g. 600000 for ₹6 LPA, or 15000 for a ₹15k monthly stipend. Fill ONLY if the employer disclosed it — never estimate.',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'salaryMax',
            title: 'Salary Max (number)',
            type: 'number',
            description: 'Upper bound of the range. Leave empty for a single fixed amount.',
            validation: (Rule) =>
                Rule.min(0).custom((max, context) => {
                    const min = (context.document as { salaryMin?: number } | undefined)?.salaryMin;
                    if (typeof max === 'number' && typeof min === 'number' && max < min) {
                        return 'Salary Max must be greater than or equal to Salary Min.';
                    }
                    return true;
                }),
        }),
        defineField({
            name: 'salaryUnit',
            title: 'Salary Period',
            type: 'string',
            initialValue: 'YEAR',
            options: {
                list: [
                    { title: 'Per year', value: 'YEAR' },
                    { title: 'Per month', value: 'MONTH' },
                    { title: 'Per week', value: 'WEEK' },
                    { title: 'Per day', value: 'DAY' },
                    { title: 'Per hour', value: 'HOUR' },
                ],
            },
        }),
        defineField({
            name: 'salaryCurrency',
            title: 'Salary Currency',
            type: 'string',
            initialValue: 'INR',
            description: 'ISO 4217 code, e.g. INR.',
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            description:
                "Shown as \"What we're looking for\". The first item also seeds the meta description.",
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'applyEmail',
            title: 'Apply Email',
            type: 'string',
        }),
        defineField({
            name: 'applyLink',
            title: 'Apply Link',
            type: 'url',
        }),
        defineField({
            name: 'contacts',
            title: 'Contacts',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Phone numbers / contact strings.',
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image (path or URL)',
            type: 'string',
            description:
                'Path under /public (e.g. /live-jobs_images/jobs_image/xyz.jpg) or a full URL. Kept as a string to preserve exact OG-image URLs.',
        }),
        defineField({
            name: 'bannerImageAlt',
            title: 'Banner Image Alt',
            type: 'string',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g. "Job Alert", "Walk-In Drive".',
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
            description:
                'Toggle off to hide this job (drops it from the listing and 404s its detail page for Sanity-sourced jobs).',
        }),
    ],
    orderings: [
        {
            title: 'Posted date, new → old',
            name: 'postedDesc',
            by: [{ field: 'postedOn', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            company: 'company',
            location: 'location',
            isActive: 'isActive',
        },
        prepare({ title, company, location, isActive }) {
            return {
                title: `${isActive === false ? '🚫 ' : ''}${title}`,
                subtitle: `${company} · ${location}`,
            }
        },
    },
})

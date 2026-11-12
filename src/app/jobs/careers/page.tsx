import JobsCareersHeroSection from "@/components/sections/JobsCareersHeroSection";
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import JobsCareersOpenRolesSection from "@/components/sections/JobsCareersOpenRolesSection";
import JobsCareersProcessSection from "@/components/sections/JobsCareersProcessSection";
import JobsCareersExpectationsSection from "@/components/sections/JobsCareersExpectationsSection";
import JobsCareersBenefitsSection from "@/components/sections/JobsCareersBenefitsSection";
import JobsCareersCultureSection from "@/components/sections/JobsCareersCultureSection";
import JobsCareersFAQSection from "@/components/sections/JobsCareersFAQSection";
import JobsCareersCTASection from "@/components/sections/JobsCareersCTASection";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCareersPageAllSchemas, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/fetch";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import { SanityJob } from "@/sanity/types";
import { BUSINESS_INFO } from "@/lib/seo-config";


// SEO METADATA - Enhanced for Careers Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
    title: {
        absolute: "Careers at CDPL - Join Our Team | CDPL",
    },
    description: "Explore career opportunities at Cinute Digital (CDPL) across Engineering, Data Science, Product Management, Growth, and Student Success. Work on high-impact EdTech products, ship fast, learn faster. Join our product-led team building the future of tech education.",
    keywords: [
        "CDPL careers",
        "Cinute Digital jobs",
        "EdTech jobs",
        "software engineer jobs",
        "data scientist jobs",
        "product manager jobs",
        "growth marketing jobs",
        "student success jobs",
        "tech jobs India",
        "startup jobs",
        "work at CDPL",
    ],
    url: "/jobs/careers",
    image: "/og-images/careers-og.webp",
});


// ====== Revalidation (ISR) ======
export const revalidate = 60;

/** How long a CDPL career posting stays assertable as open, from its last edit. */
const CAREER_OPEN_DAYS = 90;

/**
 * `JobPosting.validThrough` for a CDPL career posting.
 *
 * A fixed far-future date (the previous `"2026-12-31"`) tells Google a vacancy
 * is open forever, which is the breach that got CDPL's postings dropped from
 * Google for Jobs. Instead the window rolls forward from the document's last
 * edit, so a posting expires by itself unless someone is still maintaining it.
 */
function careerValidThrough(job: { _updatedAt?: string; _createdAt?: string }): string {
    const base = new Date(job._updatedAt || job._createdAt || Date.now());
    return new Date(base.getTime() + CAREER_OPEN_DAYS * 86_400_000)
        .toISOString()
        .slice(0, 10);
}

/** Is this posting still inside its rolling window? */
function isCareerOpen(job: { _updatedAt?: string; _createdAt?: string }): boolean {
    return careerValidThrough(job) >= new Date().toISOString().slice(0, 10);
}


// ====== Page =====
export default async function Page() {

    // Fetch jobs from Sanity CMS — draft-aware + cache-tagged (BLG-139/146).
    const jobs: SanityJob[] = await sanityFetch<SanityJob[]>({
        query: JOBS_QUERY,
        tags: ['job'],
        revalidate: 60,
    });

    // 1. Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs" },
        { name: "Careers", url: "/jobs/careers" },
    ]);

    // Generate 8-point Schemas dynamically
    const schemas = generateCareersPageAllSchemas(jobs);

    // 3. JobPosting Schemas — only for roles still inside their rolling window;
    //    a posting nobody has touched in CAREER_OPEN_DAYS emits no job markup.
    const jobSchemas = jobs.filter(isCareerOpen).map((job) => {
        // Synthesize address details from job.location. Default to the
        // CDPL HQ NAP (Mira Road) — these are CDPL's own careers, so
        // anything not explicitly tagged to another city resolves to
        // headquarters. NAP values come from BUSINESS_INFO to stay in
        // sync with the rest of the schema layer.
        const locationLower = job.location.toLowerCase();
        // `: string` widens the literal types from `BUSINESS_INFO` so the
        // city-specific branches below can reassign Karnataka / Tamil Nadu etc.
        let region: string = BUSINESS_INFO.address.addressRegion;
        let postal: string = BUSINESS_INFO.address.postalCode;

        if (locationLower.includes("pune")) {
            region = "Maharashtra";
            postal = "411001";
        } else if (locationLower.includes("bangalore") || locationLower.includes("bengaluru")) {
            region = "Karnataka";
            postal = "560001";
        } else if (locationLower.includes("chennai")) {
            region = "Tamil Nadu";
            postal = "600001";
        } else if (locationLower.includes("remote")) {
            region = "India";
            postal = "000000";
        }

        return generateJobPostingSchema({
            title: job.title,
            description: `${job.summary} \n\nResponsibilities:\n${job.responsibilities.join('\n')}\n\nRequirements:\n${job.requirements.join('\n')}`,
            datePosted: new Date(job._createdAt || Date.now()).toISOString().split('T')[0],
            // Rolling 90-day window from the last edit, NOT a fixed far-future
            // date. These are CDPL's own roles with no fixed deadline, but a
            // posting must still expire on its own: editing the job in Studio
            // refreshes _updatedAt and so extends the window, while a role
            // nobody has touched in 90 days stops being asserted as open.
            validThrough: careerValidThrough(job),
            employmentType:
                job.type === "Full-time"
                    ? "FULL_TIME"
                    : job.type === "Internship"
                        ? "INTERN"
                        : job.type === "Contract"
                            ? "CONTRACTOR"
                            : "OTHER",
            hiringOrganization: {
                name: "Cinute Digital",
                // BLG-138: was a non-www URL + a 404 logo path (/logo.png).
                sameAs: "https://www.cinutedigital.com",
                logo: "https://www.cinutedigital.com/cdpl-logo.png",
            },
            jobLocation: {
                addressLocality: job.location,
                // NAP fix: previously hard-coded to "Vikhroli, Mumbai",
                // which is not a CDPL office. CDPL HQ is Mira Road —
                // the single source of truth is BUSINESS_INFO.address.
                streetAddress: job.location.includes("Remote")
                    ? "Remote"
                    : BUSINESS_INFO.address.streetAddress,
                addressRegion: region,
                postalCode: postal,
                addressCountry: "IN",
            },
            url: `/jobs/careers#${job.id}`,
        });
    });

    return (
        <>
            {/* Structured Data */}
            <JsonLd id="careers-breadcrumb" schema={breadcrumbSchema} />
            {schemas.map((schema: any, index: number) => (
                <JsonLd key={`careers-schema-${index}`} id={`careers-schema-${index}`} schema={schema} />
            ))}
            {jobSchemas.map((schema, index) => (
                <JsonLd key={`job-posting-schema-${index}`} id={`job-posting-schema-${index}`} schema={schema} />
            ))}

            <div className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
                {/* Sections now manage their own inner container (max-w-7xl px-4 py-12 sm:px-6 lg:px-8) */}
                <JobsCareersHeroSection />
                <JobsCareersOpenRolesSection jobs={jobs} />
                <JobsCareersExpectationsSection />
                <JobsCareersProcessSection />
                <JobsCareersBenefitsSection />
                <JobsCareersCultureSection />
                <JobsCareersFAQSection />
                <JobsCareersCTASection />
            </div>
        </>
    );
}


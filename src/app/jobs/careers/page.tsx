import dynamic from "next/dynamic";
import JobsCareersHeroSection from "@/components/sections/JobsCareersHeroSection";
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


// ====== Section Loader ======
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500 dark:text-gray-500">{label}</p>
        </div>
    );
}

// ====== Dynamic Section Imports (typed) ======
// JobsCareersHeroSection is now static


const JobsCareersOpenRolesSection = dynamic<{ jobs: SanityJob[] }>(
    () => import("@/components/sections/JobsCareersOpenRolesSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading roles..." /> }
);

const JobsCareersProcessSection = dynamic(
    () => import("@/components/sections/JobsCareersProcessSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading process..." /> }
);

const JobsCareersBenefitsSection = dynamic(
    () => import("@/components/sections/JobsCareersBenefitsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const JobsCareersCultureSection = dynamic(
    () => import("@/components/sections/JobsCareersCultureSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading culture..." /> }
);

const JobsCareersFAQSection = dynamic(
    () => import("@/components/sections/JobsCareersFAQSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> }
);

const JobsCareersCTASection = dynamic(
    () => import("@/components/sections/JobsCareersCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

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

    // 3. JobPosting Schemas
    const jobSchemas = jobs.map((job) => {
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
            validThrough: "2026-12-31", // Careers are typically long-term
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
                <JobsCareersProcessSection />
                <JobsCareersBenefitsSection />
                <JobsCareersCultureSection />
                <JobsCareersFAQSection />
                <JobsCareersCTASection />
            </div>
        </>
    );
}


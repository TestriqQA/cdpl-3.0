import dynamic from "next/dynamic";
import JobsCareersHeroSection from "@/components/sections/JobsCareersHeroSection";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCareersPageAllSchemas, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { client } from "@/sanity/client";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import { SanityJob } from "@/sanity/types";


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
    image: "/og-images/cdpl-careers-images.webp",
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

    // Fetch jobs from Sanity CMS
    const jobs: SanityJob[] = await client.fetch(JOBS_QUERY, {}, {
        next: { revalidate: 60 }
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
    const jobSchemas = jobs.map((job) => generateJobPostingSchema({
        title: job.title,
        description: `${job.summary} \n\nResponsibilities:\n${job.responsibilities.join('\n')}\n\nRequirements:\n${job.requirements.join('\n')}`,
        datePosted: new Date().toISOString().split('T')[0],
        employmentType: job.type === "Full-time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : job.type === "Contract" ? "CONTRACTOR" : "OTHER",
        hiringOrganization: {
            name: "Cinute Digital",
            sameAs: "https://cinutedigital.com",
            logo: "https://cinutedigital.com/logo.png"
        },
        jobLocation: {
            addressLocality: job.location,
            addressCountry: "IN",
        },
        url: `/jobs/careers#${job.id}`,
    }));

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

            <main className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
                {/* Sections now manage their own inner container (max-w-7xl px-4 py-12 sm:px-6 lg:px-8) */}
                <JobsCareersHeroSection />
                <JobsCareersOpenRolesSection jobs={jobs} />
                <JobsCareersProcessSection />
                <JobsCareersBenefitsSection />
                <JobsCareersCultureSection />
                <JobsCareersFAQSection />
                <JobsCareersCTASection />
            </main>
        </>
    );
}


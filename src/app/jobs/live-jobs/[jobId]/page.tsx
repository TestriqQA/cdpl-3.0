// SERVER COMPONENT — Live Jobs detail page (BLG-035)
// Companion to /jobs/live-jobs (the listing). This route renders a single
// curated job opening with its own canonical URL, generated statically for
// every live job (Sanity-first via getLiveJobs(), static `JOBS` fallback).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Job } from "@/lib/jobsData";
import { getLiveJobs, getLiveJobBySlug } from "@/lib/liveJobs";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
    generateJobPostingSchema,
    generateBreadcrumbSchema,
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// CRITICAL: static imports for above-the-fold content to eliminate LCP/FCP delay
import JobsLiveJobsJobsHeroSection from "@/components/sections/JobsLiveJobsJobsHeroSection";
import { JobsLiveJobsListingSection } from "@/components/sections/JobsLiveJobsListingSection";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

const JobsLiveJobsWhyWePostJobsSection = dynamic(
    () =>
        import(
            "@/components/sections/LiveJobsLiveJobsWhyWePostJobsSection"
        ).then((m) => m.default),
    { ssr: true, loading: () => <SectionLoader label="Loading details..." /> },
);

const JobsLiveJobsTestimonialSection = dynamic(
    () =>
        import("@/components/sections/JobsLiveJobsTestimonialSection").then(
            (m) => m.default,
        ),
    { ssr: true, loading: () => <SectionLoader /> },
);

const JobsLiveJobsReviewSection = dynamic(
    () =>
        import("@/components/sections/JobsLiveJobsReviewSection").then(
            (m) => m.default,
        ),
    { ssr: true, loading: () => <SectionLoader /> },
);

const JobsLiveJobsSubscribeCTASection = dynamic(
    () =>
        import(
            "@/components/sections/JobsLiveJobsSubscribeCTASection"
        ).then((m) => m.JobsLiveJobsSubscribeCTASection),
    { ssr: true, loading: () => <SectionLoader /> },
);

const DEFAULT_BANNER = "/og-images/jobs-live-jobs-og.webp";

const BASE_KEYWORDS = [
    "live jobs",
    "placement alerts",
    "walk-in drives",
    "freshers jobs",
    "QA jobs",
    "automation testing jobs",
    "data science jobs",
    "CDPL jobs",
];

type Props = {
    params: Promise<{ jobId: string }>;
};

// ISR: re-fetch live jobs from Sanity at most hourly (the /api/revalidate
// webhook triggers instant revalidation on publish). Until Sanity is seeded,
// getLiveJobs() falls back to the static JOBS array, so output is identical to
// the previous static build — see src/lib/liveJobs.ts.
export const revalidate = 3600;

// SSG: every job gets its own canonical URL. Params come from Sanity (with a
// static JOBS fallback), so no existing URL is ever dropped.
export async function generateStaticParams() {
    const jobs = await getLiveJobs();
    return jobs.map((j) => ({ jobId: j.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { jobId } = await params;
    const job = await getLiveJobBySlug(jobId);

    if (!job) {
        return {
            title: "Job Not Found | CDPL",
            description: "The requested job listing could not be found.",
            robots: { index: false, follow: true },
        };
    }

    return generateStaticPageMetadata({
        title: { absolute: `${job.title} | ${job.company} - CDPL Jobs` },
        description: `Apply for ${job.title} at ${job.company} in ${job.location}. ${job.highlights?.[0] || "Verified job opening"} - CDPL Placement Alerts.`,
        url: `/jobs/live-jobs/${job.id}`,
        keywords: [...BASE_KEYWORDS, job.title, job.company, job.location],
        image: job.bannerImage || DEFAULT_BANNER,
    });
}

export default async function Page({ params }: Props) {
    const { jobId } = await params;
    const job = await getLiveJobBySlug(jobId);
    if (!job) notFound();

    const jobWithBanner: Job = {
        ...job,
        bannerImage: job.bannerImage ?? DEFAULT_BANNER,
    };

    // Synthesize address details from the job's location string. Mirrors the
    // logic in /jobs/live-jobs (the listing); kept inline to keep this route
    // self-contained.
    const locationLower = job.location.toLowerCase();
    let region = "Maharashtra";
    let postal = "400001";
    if (locationLower.includes("pune") || locationLower.includes("hinjewadi")) {
        region = "Maharashtra";
        postal = "411001";
    } else if (locationLower.includes("ahmedabad")) {
        region = "Gujarat";
        postal = "380001";
    } else if (
        locationLower.includes("bengaluru") ||
        locationLower.includes("bangalore")
    ) {
        region = "Karnataka";
        postal = "560001";
    } else if (locationLower.includes("chennai")) {
        region = "Tamil Nadu";
        postal = "600001";
    } else if (locationLower.includes("indore")) {
        region = "Madhya Pradesh";
        postal = "452001";
    } else if (
        locationLower.includes("delhi") ||
        locationLower.includes("noida") ||
        locationLower.includes("gurgaon")
    ) {
        region = "Delhi NCR";
        postal = "110001";
    } else if (locationLower.includes("remote")) {
        region = "India";
        postal = "000000";
    }

    // Parse "X-Y LPA" salary strings into baseSalary schema.
    let baseSalary;
    if (job.salary) {
        const lpaMatch = job.salary.match(
            /([0-9.]+)[^\d.]+([0-9.]+)\s*LPA/i,
        );
        if (lpaMatch) {
            baseSalary = {
                currency: "INR",
                value: {
                    minValue: parseFloat(lpaMatch[1]) * 100000,
                    maxValue: parseFloat(lpaMatch[2]) * 100000,
                    unitText: "YEAR",
                },
            };
        }
    }

    const jobPostingSchema = generateJobPostingSchema({
        title: job.title,
        description:
            job.highlights?.join(". ") || `${job.title} at ${job.company}`,
        datePosted: job.postedOn,
        validThrough: job.eventDate || "2026-12-31",
        employmentType:
            job.type === "Full-time"
                ? "FULL_TIME"
                : job.type === "Internship"
                    ? "INTERN"
                    : job.type === "Contract"
                        ? "CONTRACTOR"
                        : "OTHER",
        hiringOrganization: {
            name: job.company,
            sameAs: job.companySite,
        },
        jobLocation: {
            addressLocality: job.location,
            streetAddress: job.venue || job.location,
            addressRegion: region,
            postalCode: postal,
            addressCountry: "IN",
        },
        baseSalary,
        url: `/jobs/live-jobs/${job.id}`,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs" },
        { name: "Live Jobs", url: "/jobs/live-jobs" },
        { name: job.title, url: `/jobs/live-jobs/${job.id}` },
    ]);

    const heroTitle = (
        <>
            <span style={{ color: "rgb(0, 105, 168)" }}>{job.title}</span>{" "}
            <span className="text-slate-900">at</span>{" "}
            <span style={{ color: "#ff8c00" }}>{job.company}</span>
        </>
    );

    const heroDescription = `Apply now for the ${job.title} position at ${job.company} in ${job.location}. Verified opportunity curated by CDPL.`;

    return (
        <div className="bg-white text-slate-900 relative">
            <JsonLd id="live-job-detail-breadcrumb" schema={breadcrumbSchema} />
            <JsonLd id="live-job-detail-posting" schema={jobPostingSchema} />

            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, #f8fafc, #ffffff 30%)",
                    }}
                />
            </div>

            <JobsLiveJobsJobsHeroSection
                customTitle={heroTitle}
                customDescription={heroDescription}
            />

            {/* Single-job listing — same component as the index, filtered to one. */}
            <JobsLiveJobsListingSection jobs={[jobWithBanner]} />

            {/* Below-the-fold sections kept for consistent UX with the listing. */}
            <JobsLiveJobsWhyWePostJobsSection />
            <JobsLiveJobsTestimonialSection />
            <JobsLiveJobsReviewSection />
            <JobsLiveJobsSubscribeCTASection />
        </div>
    );
}

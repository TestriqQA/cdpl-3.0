// SERVER COMPONENT — Live Jobs detail page (BLG-035)
// Companion to /jobs/live-jobs (the listing). This route renders a single
// curated job opening with its own canonical URL, generated statically for
// every live job (Sanity-first via getLiveJobs(), static `JOBS` fallback).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Job } from "@/lib/jobsData";
import { getLiveJobs, getLiveJobBySlug, buildLiveJobPostingSchema } from "@/lib/liveJobs";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";
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

// ISR: re-fetch from Sanity every 60s (the /api/revalidate webhook triggers
// instant revalidation on publish). getLiveJobs()/getLiveJobBySlug() merge
// Sanity with the static JOBS seed — see src/lib/liveJobs.ts.
export const revalidate = 60;

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

    // JobPosting JSON-LD via the shared builder in src/lib/liveJobs.ts — the
    // same logic the listing route uses, so schema fixes apply to both.
    const jobPostingSchema = buildLiveJobPostingSchema(job);

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

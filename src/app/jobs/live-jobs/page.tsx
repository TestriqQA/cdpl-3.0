// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JOBS } from "@/lib/jobsData";
import type { Job } from "@/lib/jobsData";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateLiveJobsPageAllSchemas, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// CRITICAL: Static imports for above-the-fold content to eliminate LCP/FCP delay
import JobsLiveJobsJobsHeroSection from "@/components/sections/JobsLiveJobsJobsHeroSection";
import { JobsLiveJobsJobsTickerSection } from "@/components/sections/JobsLiveJobsJobsTickerSection";
import { JobsLiveJobsListingSection } from "@/components/sections/JobsLiveJobsListingSection";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const jobId = resolvedSearchParams?.jobId as string | undefined;

  // Default metadata
  const baseTitle = {
    absolute: "Live Jobs & Placement Alerts | CDPL",
  };
  const baseDesc = "Verified live jobs and walk-in drives curated by CDPL. QA, Automation, Data, and Engineering roles across India with internships, fresher support, and interview prep guidance";
  const baseKeywords = [
    "live jobs",
    "placement alerts",
    "walk-in drives",
    "freshers jobs",
    "QA jobs",
    "automation testing jobs",
    "data science jobs",
    "CDPL jobs",
  ];

  if (jobId) {
    const job = JOBS.find((j) => j.id === jobId);
    if (job) {
      return generateStaticPageMetadata({
        title: {
          absolute: `${job.title} | ${job.company} - CDPL Jobs`,
        },
        description: `Apply for ${job.title} at ${job.company} in ${job.location}. ${job.highlights?.[0] || 'Verified job opening'} - CDPL Placement Alerts.`,
        url: `/jobs/live-jobs?jobId=${job.id}`,
        keywords: [...baseKeywords, job.title, job.company, job.location],
        image: job.bannerImage || "/og-images/jobs-live-jobs-og.webp",
      });
    }
  }

  return generateStaticPageMetadata({
    title: baseTitle,
    description: baseDesc,
    url: "/jobs/live-jobs",
    keywords: baseKeywords,
    image: "/og-images/jobs-live-jobs-og.webp",
  });
}

// Dynamic sections for below-the-fold content
const JobsLiveJobsWhyWePostJobsSection = dynamic(
  () => import("@/components/sections/LiveJobsLiveJobsWhyWePostJobsSection").then(m => m.default),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

const JobsLiveJobsTestimonialSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsTestimonialSection").then(m => m.default),
  { ssr: true, loading: () => <SectionLoader /> }
);

const JobsLiveJobsReviewSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsReviewSection").then(m => m.default),
  { ssr: true, loading: () => <SectionLoader /> }
);

const JobsLiveJobsSubscribeCTASection = dynamic(
  () => import("@/components/sections/JobsLiveJobsSubscribeCTASection").then(m => m.JobsLiveJobsSubscribeCTASection),
  { ssr: true, loading: () => <SectionLoader /> }
);

// Constant data
const DEFAULT_BANNER = "/og-images/jobs-live-jobs-og.webp";
const JOBS_WITH_BANNER: Job[] = JOBS.map((j) => ({
  ...j,
  bannerImage: j.bannerImage ?? DEFAULT_BANNER,
}));

export default async function Page({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const jobId = resolvedSearchParams?.jobId as string | undefined;

  let selectedJob: Job | undefined;
  if (jobId) {
    selectedJob = JOBS.find((j) => j.id === jobId);
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Live Jobs", url: "/jobs/live-jobs" },
    ...(selectedJob ? [{ name: selectedJob.title, url: `/jobs/live-jobs?jobId=${selectedJob.id}` }] : []),
  ]);

  // Generate 8-point Schemas dynamically
  const schemas = generateLiveJobsPageAllSchemas(JOBS);

  const jobSchemas = JOBS.map((job) => generateJobPostingSchema({
    title: job.title,
    description: job.highlights?.join('. ') || `${job.title} at ${job.company}`,
    datePosted: job.postedOn,
    validThrough: job.eventDate,
    employmentType: job.type === "Full-time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : job.type === "Contract" ? "CONTRACTOR" : "OTHER",
    hiringOrganization: {
      name: job.company,
      sameAs: job.companySite,
    },
    jobLocation: {
      addressLocality: job.location,
      streetAddress: job.venue,
      addressCountry: "IN",
    },
    url: `/jobs/live-jobs?jobId=${job.id}`,
  }));

  // Logic for rendered content
  const displayedJobs = selectedJob ? [{ ...selectedJob, bannerImage: selectedJob.bannerImage ?? DEFAULT_BANNER }] : JOBS_WITH_BANNER;

  const heroTitle = selectedJob ? (
    <>
      <span style={{ color: "rgb(0, 105, 168)" }}>{selectedJob.title}</span>
      {" "}
      <span className="text-slate-900">at</span>
      {" "}
      <span style={{ color: "#ff8c00" }}>{selectedJob.company}</span>
    </>
  ) : undefined;

  const heroDescription = selectedJob
    ? `Apply now for the ${selectedJob.title} position at ${selectedJob.company} in ${selectedJob.location}. Verified opportunity curated by CDPL.`
    : undefined;

  return (
    <main className="bg-white text-slate-900 relative">
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`jobs-schema-${index}`} id={`jobs-schema-${index}`} schema={schema} />
      ))}
      <JsonLd id="live-jobs-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="job-postings-list" schema={jobSchemas} />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff 30%)" }}
        />
      </div>

      <JobsLiveJobsJobsHeroSection customTitle={heroTitle} customDescription={heroDescription} />

      {/* Hide ticker on detail view to reduce noise */}
      {!selectedJob && <JobsLiveJobsJobsTickerSection jobs={JOBS_WITH_BANNER.slice(0, 12)} />}

      <JobsLiveJobsListingSection jobs={displayedJobs} />

      {/* Below the fold sections load dynamically */}
      <JobsLiveJobsWhyWePostJobsSection />
      <JobsLiveJobsTestimonialSection />
      <JobsLiveJobsReviewSection />
      <JobsLiveJobsSubscribeCTASection />
    </main>
  );
}

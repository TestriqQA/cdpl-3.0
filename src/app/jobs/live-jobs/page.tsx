// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JOBS } from "@/lib/jobsData";
import type { Job } from "@/lib/jobsData";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCollectionPageSchema, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
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
        image: job.bannerImage || "/testimonial_images/job_image.jpg",
      });
    }
  }

  return generateStaticPageMetadata({
    title: baseTitle,
    description: baseDesc,
    url: "/jobs/live-jobs",
    keywords: baseKeywords,
    image: "/testimonial_images/job_image.jpg",
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
const DEFAULT_BANNER = "/testimonial_images/job_image.jpg";
const JOBS_WITH_BANNER: Job[] = JOBS.map((j) => ({
  ...j,
  bannerImage: j.bannerImage ?? DEFAULT_BANNER,
}));

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Live Jobs", url: "/jobs/live-jobs" },
  ]);

  const collectionPageSchema = generateCollectionPageSchema({
    name: "Live Jobs & Placement Alerts | CDPL",
    description: "Verified live jobs and walk-in drives curated by CDPL.",
    url: "/jobs/live-jobs",
  });

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

  return (
    <main className="bg-white text-slate-900 relative">
      <JsonLd id="live-jobs-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="live-jobs-collection" schema={collectionPageSchema} />
      <JsonLd id="job-postings-list" schema={jobSchemas} />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff 30%)" }}
        />
      </div>

      <JobsLiveJobsJobsHeroSection />
      <JobsLiveJobsJobsTickerSection jobs={JOBS_WITH_BANNER.slice(0, 12)} />
      <JobsLiveJobsListingSection jobs={JOBS_WITH_BANNER} />

      {/* Below the fold sections load dynamically */}
      <JobsLiveJobsWhyWePostJobsSection />
      <JobsLiveJobsTestimonialSection />
      <JobsLiveJobsReviewSection />
      <JobsLiveJobsSubscribeCTASection />
    </main>
  );
}

// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import type { Job } from "@/lib/jobsData";
import { getLiveJobs, buildLiveJobPostingSchema } from "@/lib/liveJobs";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateLiveJobsPageAllSchemas, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// CRITICAL: Static imports for above-the-fold content to eliminate LCP/FCP delay
import JobsLiveJobsJobsHeroSection from "@/components/sections/JobsLiveJobsJobsHeroSection";
import { JobsLiveJobsJobsTickerSection } from "@/components/sections/JobsLiveJobsJobsTickerSection";
import { JobsLiveJobsListingSection } from "@/components/sections/JobsLiveJobsListingSection";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import JobsLiveJobsWhyWePostJobsSection from "@/components/sections/LiveJobsLiveJobsWhyWePostJobsSection";
import JobsLiveJobsTestimonialSection from "@/components/sections/JobsLiveJobsTestimonialSection";
import JobsLiveJobsReviewSection from "@/components/sections/JobsLiveJobsReviewSection";
import { JobsLiveJobsSubscribeCTASection } from "@/components/sections/JobsLiveJobsSubscribeCTASection";

// BLG-035: per-job detail view moved to /jobs/live-jobs/[jobId]. This route
// is now strictly the listing — no more searchParams branching.
export const metadata: Metadata = generateStaticPageMetadata({
  title: {
    absolute: "Live Jobs & Placement Alerts | CDPL",
  },
  description:
    "Verified live jobs and walk-in drives curated by CDPL. QA, Automation, Data, and Engineering roles across India with internships, fresher support, and interview prep guidance",
  url: "/jobs/live-jobs",
  keywords: [
    "live jobs",
    "placement alerts",
    "walk-in drives",
    "freshers jobs",
    "QA jobs",
    "automation testing jobs",
    "data science jobs",
    "CDPL jobs",
  ],
  image: "/og-images/jobs-live-jobs-og.webp",
});

// Constant data
const DEFAULT_BANNER = "/og-images/jobs-live-jobs-og.webp";

// ISR: keep the listing fresh from Sanity (revalidate every 60s); the
// /api/revalidate webhook refreshes it instantly on publish. Sanity jobs are
// merged with the static JOBS seed — see src/lib/liveJobs.ts.
export const revalidate = 60;

export default async function Page() {
  const jobs = await getLiveJobs();
  const JOBS_WITH_BANNER: Job[] = jobs.map((j) => ({
    ...j,
    bannerImage: j.bannerImage ?? DEFAULT_BANNER,
  }));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Live Jobs", url: "/jobs/live-jobs" },
  ]);

  // Generate 8-point Schemas dynamically
  const schemas = generateLiveJobsPageAllSchemas(jobs);

  // JobPosting JSON-LD via the shared builder in src/lib/liveJobs.ts — the
  // same logic the detail route uses, so schema fixes apply to both.
  // BLG-035: each JobPosting points to its own canonical detail URL.
  const jobSchemas = jobs.map((job) => buildLiveJobPostingSchema(job));

  return (
    <div className="bg-white text-slate-900 relative">
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`jobs-schema-${index}`} id={`jobs-schema-${index}`} schema={schema} />
      ))}
      <JsonLd id="live-jobs-breadcrumb" schema={breadcrumbSchema} />
      {/* Render each JobPosting in its own script for better search engine discovery */}
      {jobSchemas.map((jobSchema: any, index: number) => (
        <JsonLd key={`job-posting-${index}`} id={`job-posting-${index}`} schema={jobSchema} />
      ))}

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
    </div>
  );
}

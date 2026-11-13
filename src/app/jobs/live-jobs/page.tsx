// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import type { Job } from "@/lib/jobsData";
import { getLiveJobs } from "@/lib/liveJobs";
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

  // NO per-job JobPosting markup on this listing page — deliberate.
  //
  // This route previously emitted one complete JobPosting block per job (~98 of
  // them in a single document), each with a `url` pointing at a different page.
  // Google's guidance is that JobPosting belongs on the page carrying the full
  // job description — here, /jobs/live-jobs/[jobId], which already emits the
  // canonical posting. A listing page signals its jobs through ItemList links
  // to those detail pages instead, which `generateLiveJobsPageAllSchemas` does.
  //
  // Duplicating every posting here also multiplied the blast radius of any bad
  // field (the fabricated validThrough, the guessed postcodes) across two URLs.

  return (
    <div className="bg-white text-slate-900">
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`jobs-schema-${index}`} id={`jobs-schema-${index}`} schema={schema} />
      ))}
      <JsonLd id="live-jobs-breadcrumb" schema={breadcrumbSchema} />

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

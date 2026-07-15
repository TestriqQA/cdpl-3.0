// SERVER COMPONENT — Live Jobs (CDPL)
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { Job } from "@/lib/jobsData";
import { getLiveJobs } from "@/lib/liveJobs";
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

// ISR: keep the listing fresh from Sanity at most hourly; the /api/revalidate
// webhook refreshes it instantly on publish. Falls back to static JOBS when
// Sanity is empty, so output is identical to the previous build.
export const revalidate = 3600;

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

  const jobSchemas = jobs.map((job) => {
    // Attempt to synthesize missing address fields from location
    const locationLower = job.location.toLowerCase();
    let region = "Maharashtra";
    let postal = "400001";

    if (locationLower.includes("pune") || locationLower.includes("hinjewadi")) {
      region = "Maharashtra";
      postal = "411001";
    } else if (locationLower.includes("ahmedabad")) {
      region = "Gujarat";
      postal = "380001";
    } else if (locationLower.includes("bengaluru") || locationLower.includes("bangalore")) {
      region = "Karnataka";
      postal = "560001";
    } else if (locationLower.includes("chennai")) {
      region = "Tamil Nadu";
      postal = "600001";
    } else if (locationLower.includes("indore")) {
      region = "Madhya Pradesh";
      postal = "452001";
    } else if (locationLower.includes("delhi") || locationLower.includes("noida") || locationLower.includes("gurgaon")) {
      region = "Delhi NCR";
      postal = "110001";
    } else if (locationLower.includes("remote")) {
      region = "India";
      postal = "000000";
    }

    // Attempt to parse salary into baseSalary schema
    let baseSalary;
    if (job.salary) {
      // Handle "X-Y LPA" format
      const lpaMatch = job.salary.match(/([0-9.]+)[^\d.]+([0-9.]+)\s*LPA/i);
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

    return generateJobPostingSchema({
      title: job.title,
      description: job.highlights?.join(". ") || `${job.title} at ${job.company}`,
      datePosted: job.postedOn,
      validThrough: job.eventDate || "2026-12-31", // Default if missing
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
      // BLG-035: each JobPosting now points to its own canonical detail URL.
      url: `/jobs/live-jobs/${job.id}`,
    });
  });

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

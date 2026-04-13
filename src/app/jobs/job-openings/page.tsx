import type { Metadata } from "next";
import JobOpeningsHeroSection from "@/components/sections/JobOpeningsHeroSection";
import JobOpeningsJobBrowser from "@/components/sections/JobOpeningsJobBrowser";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateJobOpeningsPageAllSchemas, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ---- Types ---------------------------------------------------------------
export type Skill = { skill_name: string; years?: string | number | null; level?: string | null };
export type Position = { position_name: string };

export type JobSummary = {
  job_id: string;
  job_title: string;
  description: string;
  location: string | null | "";
  location_type: "remote" | "onsite" | "hybrid" | string;
  job_type: string;
  min_charge: number | string;
  max_charge: number | string;
  min_experience: string | number;
  max_experience: string | number;
  job_created_at?: string;
  job_referral_url: string;
  skills: Skill[];
  positions: Position[];
  currencySymbol?: string;
  currency?: string;
};

export type JobListResponse = { status: number; data: { job: JobSummary[]; total_count: number } };

export type JobDetail = {
  job_id: string;
  job_title: string;
  description: string;
  location: string | null | "";
  location_type: string;
  job_type: string;
  min_charge: string | number;
  max_charge: string | number;
  min_experience: string | number;
  max_experience: string | number;
  job_referral_url: string;
  skills: Skill[];
  positions: Position[];
};

export type JobDetailResponse = { status: number; data: JobDetail };

export type CandidatePayload = {
  first_name?: string;
  last_name?: string;
  resume: string;
  mobile: string;
  mobile_country_code: number | string;
  email: string;
  email_verified?: boolean;
};

export type VerifyPayload = { email: string; mobile: string; mobile_country_code: number | string };

// ---- Helpers -------------------------------------------------------------
const API_BASE =
  process.env.OPTIMHIRE_API_BASE ?? "https://partnerapi.optimhire.com/v1/partner";
const AUTH_HEADER = process.env.OPTIMHIRE_API_KEY
  ? { Authorization: `Bearer ${process.env.OPTIMHIRE_API_KEY}` }
  : { Authorization: "Auth Token" };

async function ohFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    next: {
      revalidate: 3600, // Cache for 1 hour
      tags: ['optimhire-jobs'] // For on-demand revalidation
    },
    ...init,
    headers: { "Content-Type": "application/json", ...AUTH_HEADER, ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`OptimHire API ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

/** Clean/sanitize OptimHire HTML-ish descriptions into plain text */
function cleanHTML(raw?: string): string {
  if (!raw) return "";

  // 1) Decode common named entities (incl. &middot;) + extras
  const named: Record<string, string> = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: "\"",
    apos: "'",
    rsquo: "\u2019",
    lsquo: "\u2018",
    ldquo: "\u201C",
    rdquo: "\u201D",
    ndash: "\u2013",
    mdash: "\u2014",
    hellip: "\u2026",
    middot: "\u00B7",
    bull: "\u2022",
    copy: "\u00A9",
    reg: "\u00AE",
    trade: "\u2122",
    euro: "\u20AC",
  };

  let s = raw.replace(/&([a-zA-Z]+);/g, function (_m, name) {
    return name in named ? named[name] : _m;
  });

  // 2) Decode numeric entities: decimal and hex
  s = s
    .replace(/&#(\d+);/g, function (_m, d) {
      const n = parseInt(d, 10);
      return isFinite(n) ? String.fromCodePoint(n) : _m;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, function (_m, h) {
      const n = parseInt(h, 16);
      return isFinite(n) ? String.fromCodePoint(n) : _m;
    });

  // 3) Convert structural tags to line breaks before stripping tags
  s = s
    .replace(/<\/(p|div|section|article|h[1-6])>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/(ul|ol|table|tr)>/gi, "\n");

  // 4) Strip all remaining tags
  s = s.replace(/<[^>]+>/g, "");

  // 5) Strip Markdown-ish formatting
  s = s
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, (_m, alt) => (alt || "").trim())
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text) => (text || "").trim())
    .replace(/`([^`]+)`/g, (_m, code) => code)
    .replace(/(\*\*|__)([\s\S]*?)\1/g, (_m, _d, txt) => txt)
    .replace(/(\*|_)([\s\S]*?)\1/g, (_m, _d, txt) => txt)
    .replace(/~~([\\s\S]*?)~~/g, (_m, txt) => txt)
    .replace(/^[ \t]{0,3}#{1,6}[ \t]*/gm, "")
    .replace(/^[ \t]*>[ \t]?/gm, "")
    .replace(/^[ \t]*([-*_]){3,}[ \t]*$/gm, "");

  // 6) Remove leftover markdown tokens
  s = s.replace(/(^|\s)#{2,}(\s|$)/g, " ").replace(/\*{2,}/g, "").replace(/_{2,}/g, "");

  // 7) Tidy repeated punctuation
  s = s.replace(/\?{2,}/g, "?").replace(/!{2,}/g, "!");

  // 8) Normalize whitespace
  s = s.replace(/\u00A0/g, " ").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();

  return s;
}

// ---- Server Actions ------------------------------------------------------
export type FetchJobsArgs = { page?: number; size?: number; q?: string };

async function getJobsServer(args: FetchJobsArgs = { page: 1, size: 10 }) {
  "use server";
  const { page = 1, size = 10, q } = args;
  const params = new URLSearchParams({ page: String(page), size: String(size) });
  if (q) params.set("q", q);
  const query = params.toString();

  const res = await ohFetch<JobListResponse>(`/job-list/?${query}`, { next: { revalidate: 3600 } });

  const cleaned = {
    ...res,
    data: {
      ...res.data,
      job: (res.data?.job ?? []).map((j) => ({
        ...j,
        description: cleanHTML(j.description).slice(0, 500),
      })),
    },
  };

  return cleaned;
}

async function getJobByIdServer(job_id: string) {
  "use server";
  if (!job_id) throw new Error("job_id is required");
  const res = await ohFetch<JobDetailResponse>(
    `/job-description/?job_id=${encodeURIComponent(job_id)}`
  );

  const cleaned = {
    ...res,
    data: {
      ...res.data,
      description: cleanHTML(res.data?.description),
    },
  };

  return cleaned;
}

async function createCandidateServer(payload: CandidatePayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function verifyCandidateServer(payload: VerifyPayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

// ============================================================================
// SEO METADATA - Enhanced for Job Openings Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: {
    absolute: "Job Openings - Apply to Latest Tech Jobs | CDPL",
  },
  description: "Browse and apply to latest job openings curated by CDPL through OptimHire. QA, Automation, Data Science, Full-Stack, and DevOps roles from top companies. Filter by skills and experience, then apply directly with resume upload.",
  keywords: [
    "job openings",
    "apply jobs",
    "tech jobs India",
    "QA jobs",
    "automation jobs",
    "data science jobs",
    "software developer jobs",
    "job applications",
    "career opportunities",
    "OptimHire jobs",
    "partner jobs",
    "CDPL job portal",
    "remote tech jobs",
    "IT jobs India",
    "software testing jobs",
  ],
  url: "/jobs/job-openings",
  image: "/og-image-job-openings.jpg",
});

// ---- Page ----------------------------------------------------------------
// Enable ISR: Regenerate page every hour
export const revalidate = 3600;

export default async function JobSharePage() {
  // Reduce initial fetch to 10 jobs for faster server response
  const initial = await getJobsServer({ page: 1, size: 10 });
  const jobs = initial?.data?.job ?? [];

  // 1. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
    { name: "Job Openings", url: "/jobs/job-openings" },
  ]);

  // Generate 8-point Schemas dynamically
  const schemas = generateJobOpeningsPageAllSchemas(jobs);

  // 3. JobPosting Schemas
  const jobSchemas = jobs.map((job) => {
    // Attempt to synthesize missing address fields from location
    const locationLower = (job.location || "").toLowerCase();
    let region = "Maharashtra";
    let postal = "400001";

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
      title: job.job_title,
      description: job.description || job.job_title,
      datePosted: job.job_created_at || new Date().toISOString().split('T')[0],
      validThrough: "2026-12-31", // Default validity for partner jobs
      employmentType: job.job_type === "Full Time" ? "FULL_TIME" : job.job_type === "Contract" ? "CONTRACTOR" : "OTHER",
      hiringOrganization: {
        name: "Hiring Partner",
        sameAs: "https://optimhire.com",
      },
      jobLocation: {
        addressLocality: job.location || "Mumbai",
        addressRegion: region,
        postalCode: postal,
        addressCountry: "IN",
        streetAddress: job.location_type === "remote" ? "Remote" : (job.location || "Mumbai Office"),
      },
      baseSalary: (job.min_charge && job.max_charge) ? {
        currency: job.currency || "INR",
        value: {
          minValue: Number(job.min_charge),
          maxValue: Number(job.max_charge),
          unitText: "YEAR"
        }
      } : undefined,
      url: `/jobs/job-openings?jobId=${job.job_id}`,
    });
  });

  return (
    <>
      {/* Preload critical font for LCP optimization */}
      <link
        rel="preload"
        href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Structured Data */}
      <JsonLd id="job-openings-breadcrumb" schema={breadcrumbSchema} />
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`job-openings-schema-${index}`} id={`job-openings-schema-${index}`} schema={schema} />
      ))}
      {jobSchemas.map((schema, index) => (
        <JsonLd key={`job-posting-schema-${index}`} id={`job-posting-schema-${index}`} schema={schema} />
      ))}

      {/* Main Content - Semantic HTML Structure */}
      <main
        className="min-h-screen bg-slate-50 text-slate-800"
      >
        {/* Keep hero as-is; it can manage its own inner width */}
        <section className="w-full">
          <JobOpeningsHeroSection
            title="Discover roles. Share opportunities."
            subtitle="As part of our commitment to expanding career opportunities for our learners, Cinute Digital Pvt. Ltd. has partnered with OptimHire Software Solutions Pvt. Ltd., a third-party recruitment platform."
            ctaLabel="Explore jobs"
            scrollToId="job-browser"
          />
        </section>

        {/* 100% width section; inner component handles max-w-7xl + padding */}
        <section id="job-browser" className="w-full">
          <JobOpeningsJobBrowser
            initialJobs={jobs}
            totalCount={initial?.data?.total_count ?? 0}
            pageSize={10}
            getJobsAction={getJobsServer}
            getJobByIdAction={getJobByIdServer}
            verifyCandidateAction={verifyCandidateServer}
            createCandidateAction={createCandidateServer}
            emptyState={{
              title: "No results",
              body: "Try adjusting filters like skills, experience, or location.",
            }}
            className=""
          />
        </section>
      </main>
    </>
  );
}

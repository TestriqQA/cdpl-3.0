export type Job = {
  id: string;
  title: string;
  company: string;
  companySite?: string;

  type: "Walk-in" | "Full-time" | "Internship" | "Contract";
  mode?: "Onsite" | "Hybrid" | "Remote";

  location: string;
  postedOn: string;        // ISO: YYYY-MM-DD
  eventDate?: string;      // ISO: YYYY-MM-DD (walk-ins/deadlines)
  timeWindow?: string;     // e.g., "10:00 AM – 2:00 PM"
  venue?: string;

  exp?: string;
  salary?: string;

  // Structured salary for Google JobPosting rich results (fill ONLY when the
  // employer disclosed pay — never estimate). Preferred over parsing `salary`.
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string; // ISO 4217, defaults to "INR"
  salaryUnit?: "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"; // defaults to "YEAR"

  // Explicit application deadline → JobPosting.validThrough.
  // Falls back to eventDate. If BOTH are absent the posting is treated as
  // closed: it is filtered out of the listing and emits no JobPosting markup.
  // There is no far-future default — see isJobOpen() in src/lib/live-jobs.ts.
  validThrough?: string;   // ISO: YYYY-MM-DD

  highlights?: string[];
  responsibilities?: string[];

  applyEmail?: string;
  applyLink?: string;
  contacts?: string[];

  // Optional visuals/meta
  bannerImage?: string;    // e.g., "/images/jobs/qk-walkin.png"
  bannerImageAlt?: string;
  imageFallback?: string;  // used when primary image fails to load

  tags?: string[];

  // combined job title + unique id (human-readable, shareable)
  shareKey: string;
};

/**
 * Curated live-job listings.
 *
 * EMPTY BY DESIGN — do not repopulate from the old data.
 *
 * This array previously held 98 postings covering ~90 employers: Deloitte,
 * Wipro, Capgemini, Accenture, Cognizant, P&G, BNP Paribas, IDFC FIRST Bank,
 * General Mills, Jio, L&T and dozens of smaller firms. CDPL recruits for none
 * of them, and had no written authorisation to syndicate their vacancies. Every
 * one of those postings emitted JobPosting structured data naming the employer,
 * which is both a Google job-posting policy breach and a brand exposure — see
 * the fix in `buildLiveJobPostingSchema` (src/lib/live-jobs.ts).
 *
 * Removing them changes nothing at runtime. The newest expiry in the old data
 * was 2025-12-17, so `isJobOpen()` already filtered all 98 out; the array had
 * been dead weight since that filter shipped. Live jobs now come from Sanity,
 * where every one of these postings has also been deactivated.
 *
 * WHAT THIS ARRAY IS FOR: an outage snapshot. `getLiveJobs()` falls back to it
 * only when the Sanity request THROWS, so the listing does not go blank during
 * a CMS hiccup. An empty snapshot is the honest state while there are no open
 * postings.
 *
 * IF YOU ADD ENTRIES BACK, each one must satisfy all three:
 *   1. CDPL is the employer, OR holds written authorisation from the named
 *      employer to publish their vacancy.
 *   2. `validThrough` (or `eventDate`) is a real, future apply-by date. There
 *      is no default — a posting without one is treated as closed.
 *   3. `company` is the ACTUAL hiring organisation, never a placeholder.
 */
export const JOBS: Job[] = [];

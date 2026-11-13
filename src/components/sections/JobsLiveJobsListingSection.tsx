// CLIENT COMPONENT — Live Jobs (CDPL)
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Job } from "@/lib/jobsData";
import { JobsLiveJobsFilterBarSection } from "./JobsLiveJobsFilterBarSection";
import { JobsLiveJobsJobsGridSection } from "./JobsLiveJobsJobsGridSection";
import { FROM_LISTING_KEY } from "./JobsLiveJobsJobCardSection";

export type JobsFilters = { q: string; loc: string; type: string };

/**
 * "Back to all jobs". When the job was opened from the listing, go back in
 * history so the visitor returns to the same scroll position and filters;
 * otherwise (a shared link, search) it is a plain link to the listing.
 * (document.referrer can't tell: it does not change on in-app navigation.)
 */
function BackToJobs() {
  const router = useRouter();
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (sessionStorage.getItem(FROM_LISTING_KEY) && window.history.length > 1) {
        sessionStorage.removeItem(FROM_LISTING_KEY);
        e.preventDefault();
        router.back();
      }
    } catch { }
  };
  return (
    <Link
      href="/jobs/live-jobs#openings"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-brand hover:text-brand"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Back to all jobs
    </Link>
  );
}

/**
 * The openings. `mode="list"` (the /jobs/live-jobs page): heading, filters and
 * compact cards that link to each job's page. `mode="detail"` (the
 * /jobs/live-jobs/[jobId] page): the single job as a full card, no filters.
 */
export function JobsLiveJobsListingSection({ jobs, mode = "list" }: { jobs: Job[]; mode?: "list" | "detail" }) {
  const [filters, setFilters] = useState<JobsFilters>({ q: "", loc: "", type: "" });

  const locations = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach((j) => {
      if (j.location) {
        set.add(j.location);
        j.location
          .split("/")
          .map((s) => s.trim())
          .forEach((c) => set.add(c));
      }
    });
    const arr = Array.from(set).filter(Boolean);
    const prio = ["Mumbai", "Navi Mumbai", "Pune", "Chennai", "Bengaluru", "Hyderabad", "Gurugram", "Remote"];
    return [...prio.filter((p) => arr.includes(p)), ...arr.filter((a) => !prio.includes(a))];
  }, [jobs]);

  const isList = mode === "list";

  return (
    <section id="openings" aria-labelledby="jobs-listing" className="scroll-mt-24 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!isList && (
          <div className="mb-6">
            <BackToJobs />
          </div>
        )}
        {isList && (
          <div className="mb-8 max-w-3xl">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              Live Openings
            </span>
            <h2 id="jobs-listing" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Latest <span className="text-brand">openings</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We verify authenticity before posting. Check venue and timing for walk-ins; carry updated CV and ID.
            </p>
          </div>
        )}

        {isList && jobs.length > 0 && (
          <div className="mb-6">
            <JobsLiveJobsFilterBarSection value={filters} onChange={setFilters} locations={locations} />
          </div>
        )}

        <JobsLiveJobsJobsGridSection jobs={jobs} filters={isList ? filters : { q: "", loc: "", type: "" }} mode={mode} />
      </div>
    </section>
  );
}

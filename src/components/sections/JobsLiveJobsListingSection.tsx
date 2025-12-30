// CLIENT COMPONENT — Live Jobs (CDPL)
"use client";

import { useMemo, useState } from "react";
import type { Job } from "@/lib/jobsData";

// CRITICAL: Static imports for critical content to eliminate loaders
import { JobsLiveJobsFilterBarSection } from "./JobsLiveJobsFilterBarSection";
import { JobsLiveJobsJobsGridSection } from "./JobsLiveJobsJobsGridSection";

export type JobsFilters = { q: string; loc: string; type: string };

export function JobsLiveJobsListingSection({ jobs }: { jobs: Job[] }) {
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
    const prio = [
      "Mumbai",
      "Navi Mumbai",
      "Pune",
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Gurugram",
      "Remote",
    ];
    const sorted = [
      ...prio.filter((p) => arr.includes(p)),
      ...arr.filter((a) => !prio.includes(a)),
    ];
    return sorted;
  }, [jobs]);

  return (
    <section aria-labelledby="jobs-listing" className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 font-sans">
        <div className="mb-4">
          <JobsLiveJobsFilterBarSection value={filters} onChange={setFilters} locations={locations} />
        </div>

        {/* Non-hero H2: "Latest" black, "openings" brand color (no gradient) */}
        <h2 id="jobs-listing" className="text-4xl font-bold tracking-tight">
          <span className="text-slate-900">Latest</span>{" "}
          <span className="text-[#ff8c00]">openings</span>
        </h2>

        {/* Body text (match AboutStatsSection paragraph scale & color) */}
        <p className="mt-1 max-w-3xl sm:text-base md:text-lg leading-6 text-slate-600">
          We verify authenticity before posting. Check venue and timing for walk-ins; carry updated CV and ID.
        </p>

        <JobsLiveJobsJobsGridSection jobs={jobs} filters={filters} />
      </div>
    </section>
  );
}

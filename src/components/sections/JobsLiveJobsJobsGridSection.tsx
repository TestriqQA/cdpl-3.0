// CLIENT COMPONENT — Live Jobs (CDPL)
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

// CRITICAL: Static import for JobCard to eliminate client-side render delay
import { JobsLiveJobsJobCardSection } from "./JobsLiveJobsJobCardSection";
import type { JobsFilters } from "./JobsLiveJobsListingSection";
import type { Job } from "@/lib/jobsData";

function norm(s: string) {
  return (s || "").toLowerCase();
}

function matchesFilters(job: Job, f: JobsFilters) {
  const q = norm(f.q || "");
  const hay =
    norm(job.title) +
    " " +
    norm(job.company) +
    " " +
    norm(job.location) +
    " " +
    norm((job.highlights || []).join(" "));
  const qOk = q ? hay.includes(q) : true;
  const locOk = f.loc ? norm(job.location).includes(norm(f.loc)) : true;
  const typeOk = f.type ? job.type === f.type : true;
  return qOk && locOk && typeOk;
}

const CHUNK_SIZE = 6;

export function JobsLiveJobsJobsGridSection({
  jobs,
  filters,
}: {
  jobs: Job[];
  filters: JobsFilters;
}) {
  const buildShareUrl = (id: string) => {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.pathname, window.location.origin);
    // Ensure we strip existing search params to avoid duplicates, but keep path
    // If we want to be strict about /jobs/live-jobs, we could force it, 
    // but using current pathname is safer if this component is used elsewhere.
    // However, the user specifically asked for "detail page url".
    // Since this section is likely only on live-jobs, current path is fine.
    url.searchParams.set("jobId", id);
    return url.toString();
  };

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = async (job: Job) => {
    const url = buildShareUrl(job.id);
    try {
      if (navigator.share && typeof navigator.share === "function") {
        await navigator.share({ title: job.title, text: `${job.title} @ ${job.company}`, url });
        return;
      }
    } catch { }
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(job.id);
      setTimeout(() => setCopiedId((prev) => (prev === job.id ? null : prev)), 1500);
    } catch {
      const tmp = document.createElement("input");
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      setCopiedId(job.id);
      setTimeout(() => setCopiedId((prev) => (prev === job.id ? null : prev)), 1500);
    }
  };

  const sorted = useMemo(() => {
    return [...jobs].sort((a, b) => {
      const da = new Date(a.eventDate || a.postedOn).getTime();
      const db = new Date(b.eventDate || b.postedOn).getTime();
      return db - da;
    });
  }, [jobs]);

  const filtered = useMemo(
    () => sorted.filter((j) => matchesFilters(j, filters)),
    [sorted, filters]
  );

  const [visibleCount, setVisibleCount] = useState<number>(CHUNK_SIZE);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTargetId = () => {
      const { hash, search } = window.location;
      let targetId = hash?.replace(/^#/, "") || "";
      if (!targetId) {
        const params = new URLSearchParams(search);
        const qId = params.get("id") || params.get("jobId");
        if (qId) targetId = qId;
      }
      try {
        targetId = decodeURIComponent(targetId);
      } catch { }
      return targetId;
    };

    const targetId = getTargetId();
    if (targetId) {
      const idx = filtered.findIndex((j) => j.id === targetId);
      if (idx >= 0) {
        const needed = Math.ceil((idx + 1) / CHUNK_SIZE) * CHUNK_SIZE;
        setVisibleCount(Math.max(CHUNK_SIZE, Math.min(needed, filtered.length)));
        return;
      }
    }
    setVisibleCount(Math.min(CHUNK_SIZE, filtered.length));
  }, [filters, filtered.length, filtered]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTargetId = () => {
      const { hash, search } = window.location;
      let targetId = hash?.replace(/^#/, "") || "";
      if (!targetId) {
        const params = new URLSearchParams(search);
        const qId = params.get("id") || params.get("jobId");
        if (qId) targetId = qId;
      }
      try {
        targetId = decodeURIComponent(targetId);
      } catch { }
      return targetId;
    };

    const desiredId = getTargetId();
    if (!desiredId) return;

    const index = filtered.findIndex((j) => j.id === desiredId);
    if (index >= 0 && index < visibleCount) {
      const el = document.getElementById(desiredId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visibleCount, filtered]);

  const visibleItems = useMemo(
    () => filtered.slice(0, Math.min(visibleCount, filtered.length)),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  return (
    <LazyMotion features={domAnimation}>
      <div className="mb-3 mt-2 flex items-center justify-between text-sm text-slate-600 font-sans">
        <span>
          Showing{" "}
          <span className="font-semibold">
            {Math.min(visibleCount, filtered.length)}
          </span>{" "}
          of <span className="font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "role" : "roles"}
        </span>
        {filters.q || filters.loc || filters.type ? (
          <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs text-brand">
            Filters active
          </span>
        ) : null}
      </div>

      <section aria-label="Job details" className="font-sans">
        <ul className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((job) => (
              <m.li
                key={job.id}
                id={job.id}
                className="scroll-mt-24"
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <JobsLiveJobsJobCardSection
                    job={job}
                    onShare={handleShare}
                    isCopied={copiedId === job.id}
                  />
                </div>
              </m.li>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <li className="text-sm text-slate-600">
              No matching roles right now. Try clearing filters or broadening your search.
            </li>
          )}
        </ul>

        {canLoadMore ? (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount((v) => Math.min(v + CHUNK_SIZE, filtered.length))
              }
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        ) : (
          filtered.length > 0 && (
            <div className="mt-6 text-center text-xs text-slate-400">
              You’re all caught up.
            </div>
          )
        )}
      </section>

      <style jsx global>{`
        :target { scroll-margin-top: 96px; }
      `}</style>
    </LazyMotion>
  );
}

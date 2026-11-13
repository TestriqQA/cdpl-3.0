// CLIENT COMPONENT — Live Jobs (CDPL)
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BellRing, BriefcaseBusiness, SearchX } from "lucide-react";
import { JobsLiveJobsJobCardSection } from "./JobsLiveJobsJobCardSection";
import type { JobsFilters } from "./JobsLiveJobsListingSection";
import type { Job } from "@/lib/jobsData";

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VadXpsi3gvWWrDLReF3N";

function norm(s: string) {
  return (s || "").toLowerCase();
}

function matchesFilters(job: Job, f: JobsFilters) {
  const q = norm(f.q || "");
  const hay = [job.title, job.company, job.location, ...(job.highlights || [])].map(norm).join(" ");
  const qOk = q ? hay.includes(q) : true;
  const locOk = f.loc ? norm(job.location).includes(norm(f.loc)) : true;
  const typeOk = f.type ? job.type === f.type : true;
  return qOk && locOk && typeOk;
}

const CHUNK_SIZE = 6;

const getTargetId = () => {
  const { hash, search } = window.location;
  let targetId = hash?.replace(/^#/, "") || "";
  if (!targetId) {
    const params = new URLSearchParams(search);
    targetId = params.get("id") || params.get("jobId") || "";
  }
  try {
    targetId = decodeURIComponent(targetId);
  } catch { }
  return targetId;
};

export function JobsLiveJobsJobsGridSection({
  jobs,
  filters,
  mode = "list",
}: {
  jobs: Job[];
  filters: JobsFilters;
  mode?: "list" | "detail";
}) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = async (job: Job) => {
    // BLG-035: every job has its own canonical URL at /jobs/live-jobs/{id}.
    const url = `${window.location.origin}/jobs/live-jobs/${job.id}`;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: job.title, text: `${job.title} @ ${job.company}`, url });
        return;
      }
    } catch { }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const tmp = document.createElement("input");
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
    }
    setCopiedId(job.id);
    setTimeout(() => setCopiedId((prev) => (prev === job.id ? null : prev)), 1500);
  };

  const sorted = useMemo(
    () =>
      [...jobs].sort(
        (a, b) => new Date(b.eventDate || b.postedOn).getTime() - new Date(a.eventDate || a.postedOn).getTime()
      ),
    [jobs]
  );
  const filtered = useMemo(() => sorted.filter((j) => matchesFilters(j, filters)), [sorted, filters]);

  const [visibleCount, setVisibleCount] = useState<number>(CHUNK_SIZE);

  // Show enough rows to include a job targeted by #id / ?jobId=, else the first chunk.
  useEffect(() => {
    const targetId = getTargetId();
    const idx = targetId ? filtered.findIndex((j) => j.id === targetId) : -1;
    if (idx >= 0) {
      const needed = Math.ceil((idx + 1) / CHUNK_SIZE) * CHUNK_SIZE;
      setVisibleCount(Math.max(CHUNK_SIZE, Math.min(needed, filtered.length)));
    } else {
      setVisibleCount(Math.min(CHUNK_SIZE, filtered.length));
    }
  }, [filters, filtered]);

  useEffect(() => {
    const desiredId = getTargetId();
    if (!desiredId) return;
    const index = filtered.findIndex((j) => j.id === desiredId);
    if (index >= 0 && index < visibleCount) {
      document.getElementById(desiredId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visibleCount, filtered]);

  const visibleItems = useMemo(() => filtered.slice(0, Math.min(visibleCount, filtered.length)), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  // No postings at all: point people to alerts and placements instead of a bare line of text.
  if (jobs.length === 0) {
    return (
      <div className="rounded-3xl border border-orange-200 bg-orange-50 px-6 py-12 text-center sm:px-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-md" aria-hidden="true">
          <BriefcaseBusiness className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-gray-900">No open roles right now</h3>
        <p className="mx-auto mt-2 max-w-xl leading-relaxed text-slate-600">
          Postings are removed automatically once their apply-by date passes. New drives are added every week, so
          get them as they go live.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <BellRing className="h-5 w-5" aria-hidden="true" />
            Get job alerts on WhatsApp
          </a>
          <Link
            href="/jobs/placements"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            See student placements
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {mode === "list" && (
        <p className="mb-4 text-sm text-slate-500" aria-live="polite">
          Showing <strong className="text-slate-900">{Math.min(visibleCount, filtered.length)}</strong> of{" "}
          <strong className="text-slate-900">{filtered.length}</strong> {filtered.length === 1 ? "role" : "roles"}
        </p>
      )}

      <section aria-label="Job details">
        <ul className={mode === "list" ? "grid gap-5 lg:grid-cols-2" : "grid gap-6"}>
          {visibleItems.map((job) => (
            <li key={job.id} id={job.id} className="scroll-mt-24">
              <JobsLiveJobsJobCardSection
                job={job}
                onShare={handleShare}
                isCopied={copiedId === job.id}
                variant={mode === "list" ? "compact" : "full"}
              />
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <SearchX className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" />
            <p className="mt-3 text-lg font-semibold text-gray-900">No matching roles</p>
            <p className="mt-1 text-slate-600">Try another skill or location, or clear the filters.</p>
          </div>
        )}

        {canLoadMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((v) => Math.min(v + CHUNK_SIZE, filtered.length))}
              className="inline-flex cursor-pointer items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>
    </>
  );
}

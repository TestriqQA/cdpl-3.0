"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { JobsCareersJobCardSection } from "./JobsCareersJobCardSection";
import { SanityJob } from "@/sanity/types";

// List + detail. On lg both panes show; the list scrolls with the page and the
// detail pane stays pinned. Below lg the list shows until a role is opened.
// Layout is CSS-driven so the server render matches the first client render.
export default function JobsCareersJobsGridSection({ jobs }: { jobs: SanityJob[] }) {
  const sorted = useMemo(
    () => [...jobs].sort((a, b) => a.team.localeCompare(b.team) || a.title.localeCompare(b.title)),
    [jobs]
  );
  const [visible, setVisible] = useState(12);
  const list = sorted.slice(0, visible);

  const [selectedId, setSelectedId] = useState<string | null>(sorted[0]?.id ?? null);
  const [mobileDetail, setMobileDetail] = useState(false);
  const selectedJob = sorted.find((j) => j.id === selectedId) ?? sorted[0] ?? null;

  // Keep a valid selection when filters change.
  useEffect(() => {
    if (!sorted.some((j) => j.id === selectedId)) {
      setSelectedId(sorted[0]?.id ?? null);
      setMobileDetail(false);
    }
  }, [sorted, selectedId]);

  // Deep link: /jobs/careers#<job id> (the JobPosting URL) selects that role.
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const idx = sorted.findIndex((j) => j.id === id);
      if (idx < 0) return;
      setVisible((v) => Math.max(v, idx + 1));
      setSelectedId(id);
      setMobileDetail(true);
      requestAnimationFrame(() => document.getElementById("open-roles")?.scrollIntoView({ block: "start" }));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [sorted]);

  const open = (id: string) => {
    setSelectedId(id);
    setMobileDetail(true);
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      requestAnimationFrame(() => document.getElementById("open-roles")?.scrollIntoView({ block: "start" }));
    }
  };

  if (!sorted.length) return null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
      {/* LEFT: list (scrolls with the page) */}
      <div className={mobileDetail ? "hidden lg:block" : ""}>
        <ul className="space-y-3" aria-label="Open roles list">
          {list.map((job) => {
            const active = job.id === selectedJob?.id;
            return (
              <li key={job.id} id={job.id} className="scroll-mt-28">
                <button
                  type="button"
                  onClick={() => open(job.id)}
                  aria-current={active ? "true" : undefined}
                  className={`group relative flex w-full cursor-pointer gap-4 rounded-2xl border bg-white p-4 text-left transition sm:p-5 ${active
                    ? "border-orange-300 bg-orange-50/40 shadow-sm ring-1 ring-orange-200"
                    : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
                    }`}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ${active ? "bg-brand text-white ring-orange-300" : "bg-orange-50 text-brand ring-orange-100"}`}>
                    <Briefcase className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold leading-snug text-slate-900">{job.title}</span>
                    <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-600">
                      <span className="inline-flex items-center gap-1"><Building2 className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />{job.team}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />{job.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />{job.type} · {job.experience}</span>
                    </span>
                    {job.summary && <span className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{job.summary}</span>}
                  </span>
                  <ArrowRight className={`mt-1 h-4 w-4 shrink-0 transition ${active ? "text-brand" : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-slate-400"}`} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>

        {visible < sorted.length && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + 12)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Show more roles ({sorted.length - visible})
            </button>
          </div>
        )}
      </div>

      {/* RIGHT: detail (pinned on lg, own scroll only if the role is long) */}
      {selectedJob && (
        <section
          aria-label="Role details"
          className={`rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto nice-scroll ${mobileDetail ? "" : "hidden lg:block"}`}
        >
          <div className="border-b border-slate-100 px-4 py-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileDetail(false)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All roles
            </button>
          </div>
          <JobsCareersJobCardSection key={selectedJob.id} job={selectedJob} />
        </section>
      )}

      <style>{`
        .nice-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,140,0,0.45) transparent; }
        .nice-scroll::-webkit-scrollbar { width: 8px; }
        .nice-scroll::-webkit-scrollbar-thumb { background: rgba(255,140,0,0.45); border-radius: 9999px; }
      `}</style>
    </div>
  );
}

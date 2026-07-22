"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { JobsCareersJobCardSection } from "./JobsCareersJobCardSection";
import { SanityJob } from "@/sanity/types";




export default function JobsCareersJobsGridSection({ jobs }: { jobs: SanityJob[] }) {
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    setIsLg(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const sorted = useMemo(() => [...jobs].sort((a, b) => a.team.localeCompare(b.team)), [jobs]);
  const [visible, setVisible] = useState<number>(Math.min(12, sorted.length));
  const canLoad = visible < sorted.length;
  const list = sorted.slice(0, visible);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedJob = useMemo(
    () => (selectedId ? sorted.find((j) => j.id === selectedId) ?? null : null),
    [selectedId, sorted]
  );

  useEffect(() => {
    if (isLg) {
      if (!selectedId && list.length) setSelectedId(list[0].id);
      if (selectedId && !sorted.some((j) => j.id === selectedId)) setSelectedId(list[0]?.id ?? null);
    } else {
      if (selectedId && !sorted.some((j) => j.id === selectedId)) setSelectedId(null);
    }
  }, [isLg, sorted, list, selectedId]);

  const showList = isLg || !selectedId;
  const showDetail = isLg || !!selectedId;

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* LEFT: list */}
        {showList && (
          <section
            className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto nice-scroll"
            aria-label="Open roles list"
          >
            <ul className="divide-y divide-slate-100">
                {list.map((job) => {
                  const active = job.id === selectedId;
                  return (
                    <li key={job.id}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedId(job.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedId(job.id);
                          }
                        }}
                        className={`group grid w-full grid-cols-[auto,1fr] gap-3 p-4 text-left transition cursor-pointer ${active ? "bg-orange-50/40" : "hover:bg-slate-50 focus:bg-slate-50"}`}
                      >
                        <div
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                          style={{ background: "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))", boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)" }}
                        >
                          <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="truncate text-[15px] font-extrabold leading-tight text-slate-900">{job.title}</h3>
                            {active && (
                              <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-brand">
                                Selected
                              </span>
                            )}
                          </div>

                          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-slate-600">
                            <span className="inline-flex items-center"><Building2 className="mr-1 h-3.5 w-3.5" />{job.team}</span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center"><MapPin className="mr-1 h-3.5 w-3.5" />{job.location}</span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center"><Calendar className="mr-1 h-3.5 w-3.5" />{job.type} • {job.experience}</span>
                          </p>

                          {job.summary ? (
                            <div className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-slate-700">{job.summary}</div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>

            <div className="flex items-center justify-center border-t border-slate-100 p-3">
              {sorted.length === 0 ? (
                <span className="text-sm text-slate-500">No roles right now.</span>
              ) : canLoad ? (
                <button
                  onClick={() => setVisible((v) => Math.min(v + 12, sorted.length))}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
                  style={{ backgroundColor: "#ff8c00" }}
                >
                  Load more <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <span className="text-sm text-slate-500">All caught up.</span>
              )}
            </div>
          </section>
        )}

        {/* RIGHT: detail (padding removed; handle inside) */}
        {showDetail && (
          <section
            className="relative rounded-2xl border border-slate-200 bg-white p-0 shadow-sm overflow-visible lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-auto nice-scroll"
            aria-label="Role details"
          >
            {/* Mobile sticky back header */}
            {!isLg && (
              <div className="sticky top-0 z-20 mb-3 flex items-center gap-2 border-b border-slate-100 bg-white px-4 py-2 shadow-sm">
                <button
                  onClick={() => setSelectedId(null)}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to listings
                </button>
                <div className="ml-auto text-xs text-slate-500">{sorted.length} roles</div>
              </div>
            )}

            {!selectedJob ? (
              <div className="grid min-h-[240px] place-items-center p-8 text-center">
                <p className="text-sm text-slate-600">Select a role from the list to see details.</p>
              </div>
            ) : (
              // inner padding only for the scrollable content under the sticky header
              <div className="px-4 pb-4 pt-0">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full opacity-30 blur-2xl"
                  style={{ background: "radial-gradient(closest-side, rgba(255,140,0,.25), rgba(255,140,0,0))" }}
                />
                <JobsCareersJobCardSection job={selectedJob} />
              </div>
            )}
          </section>
        )}
      </div>

      <style jsx global>{`
        .nice-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,140,0,0.45) transparent; }
        .nice-scroll::-webkit-scrollbar { width: 10px; }
        .nice-scroll::-webkit-scrollbar-track { background: transparent; }
        .nice-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255,140,0,0.55), rgba(255,184,77,0.55));
          border-radius: 9999px; border: 3px solid transparent; background-clip: padding-box;
        }
        .nice-scroll:hover::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255,140,0,0.75), rgba(255,184,77,0.75));
        }
        .nice-scroll::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, rgba(255,140,0,0.95), rgba(255,184,77,0.95));
        }
        .nice-scroll::-webkit-scrollbar-button { display: none !important; width:0 !important; height:0 !important; }
        .nice-scroll::-webkit-scrollbar-corner { background: transparent; }
      `}</style>
    </div>
  );
}

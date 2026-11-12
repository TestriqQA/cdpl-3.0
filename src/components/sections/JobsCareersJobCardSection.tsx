"use client";

import { useState } from "react";
import { Briefcase, Building2, Calendar, CheckCircle2, Info, MapPin } from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";
import { SanityJob } from "@/sanity/types";

function List({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900">
        <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((r, i) => (
          <li key={`${r}-${i}`} className="flex gap-2 text-sm leading-6 text-slate-700">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Role detail for the right-hand pane. The header (title + Apply) stays pinned
// while the pane scrolls on lg.
export function JobsCareersJobCardSection({ job }: { job: SanityJob }) {
  const [openForm, setOpenForm] = useState(false);

  const applyButton = (label: string) => (
    <button
      type="button"
      onClick={() => setOpenForm(true)}
      aria-haspopup="dialog"
      className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md"
    >
      {label}
    </button>
  );

  return (
    <article>
      <header className="z-10 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-6 lg:sticky lg:top-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 gap-3">
            <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-brand ring-1 ring-orange-100 sm:grid">
              <Briefcase className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-snug text-slate-900">{job.title}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4 text-slate-400" aria-hidden="true" />{job.team}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />{job.location}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-slate-400" aria-hidden="true" />{job.type} · {job.experience}</span>
              </p>
            </div>
          </div>
          {applyButton("Apply")}
        </div>
      </header>

      <div className="px-5 pb-6 pt-5 sm:px-6">
        {job.summary && <p className="text-base leading-7 text-slate-700">{job.summary}</p>}

        <div className="mt-6 grid gap-8 xl:grid-cols-2">
          <List title="Responsibilities" items={job.responsibilities} />
          <List title="Requirements" items={job.requirements} />
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="flex gap-2 text-sm leading-6 text-slate-700">
            <Info className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            <span>
              <span className="font-semibold text-slate-900">Tip:</span> add a short note on why CDPL and 2 links that show
              your work. Strong writing and outcomes beat long resumes.
            </span>
          </p>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          We&apos;re an equal-opportunity employer. We value diversity and are committed to an inclusive, respectful workplace.
        </p>
      </div>

      <JobApplicationModal isOpen={openForm} onClose={() => setOpenForm(false)} jobTitle={job.title} jobId={job.id} />
    </article>
  );
}

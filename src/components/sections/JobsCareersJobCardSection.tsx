"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Info,
  Star,
  Tag,
} from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";

// Define Job type locally to avoid import issues
type Job = {
  id: string;
  title: string;
  team:
  | "Engineering"
  | "Data"
  | "Product"
  | "Growth"
  | "Student Success"
  | "Operations"
  | "Sales"
  | "Training";
  location: "Bengaluru" | "Pune" | "Remote (India)" | "Hybrid (Bengaluru)" | "Mumbai";
  type: "Full-time" | "Contract" | "Internship";
  experience: "0–1 yrs" | "1–3 yrs" | "3–5 yrs" | "5–8 yrs" | "8+ yrs";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  applyEmail?: string;
  applyLink?: string;
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const el = document.documentElement; // safer than body for some UAs
    const prev = el.style.overflow;
    if (locked) el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [locked]);
}

export function JobsCareersJobCardSection({ job }: { job: Job }) {
  const [openForm, setOpenForm] = useState(false);

  useBodyScrollLock(openForm);

  return (
    <article className="relative flex h-full flex-col lg:sticky lg:top-4">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 h-16 w-16 rounded-full blur-xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(125,211,252,.45), rgba(255,140,0,.0))",
        }}
      />

      {/* Sticky Header — stays visible while scrolling */}
      <div className="sticky z-30 top-0">
        <div className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-slate-100 pt-4">
          <div className="py-2">
            <div className="flex items-start gap-3">
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                  boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-xl font-extrabold leading-tight text-slate-900">
                  {job.title}
                </h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-2 text-[13px] text-slate-600">
                  <span className="inline-flex items-center">
                    <Building2 className="mr-1 h-3.5 w-3.5" />
                    Cinute Digital Pvt Ltd (CDPL) • {job.team}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    {job.type} • {job.experience}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          CDPL
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          {job.team}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          {job.type}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
          Exp: {job.experience}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
          {job.location}
        </span>
      </div>

      {/* Summary */}
      {job.summary ? (
        <div className="mt-3 text-[13.5px] leading-relaxed text-slate-700">
          {job.summary}
        </div>
      ) : null}

      {/* Responsibilities / Requirements */}
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        {job.responsibilities?.length ? (
          <div>
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-slate-500" />
              <h4 className="text-sm font-semibold text-slate-900">
                Responsibilities
              </h4>
            </div>
            <ul className="grid gap-1.5">
              {job.responsibilities.slice(0, 8).map((r: string, i: number) => (
                <li
                  key={`${r}-${i}`}
                  className="text-[13.5px] leading-relaxed text-slate-700"
                >
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {job.requirements?.length ? (
          <div>
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-slate-500" />
              <h4 className="text-sm font-semibold text-slate-900">
                Requirements
              </h4>
            </div>
            <ul className="grid gap-1.5">
              {job.requirements.slice(0, 8).map((r: string, i: number) => (
                <li
                  key={`${r}-${i}`}
                  className="text-[13.5px] leading-relaxed text-slate-700"
                >
                  • {r}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Success + Nice-to-haves */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div
          className="rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50 to-white p-3"
          style={{ boxShadow: "inset 0 0 0 1px rgba(245, 158, 11, 0.08)" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-600" />
            <h4 className="text-sm font-semibold text-slate-900">
              What success looks like (first 90 days)
            </h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Ship 1–2 meaningful improvements in your area.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Create solid docs and crisp decision records.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Raise quality bars in reviews and demos.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <Tag className="h-4 w-4 text-slate-500" />
            <h4 className="text-sm font-semibold text-slate-900">Nice-to-haves</h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Portfolio/PRs showing thoughtful craft.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Experience in small, product-led teams.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Comfort writing clear docs/PRDs.
            </li>
          </ul>
        </div>
      </div>

      {/* Perks & benefits */}
      <div className="mt-6">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">Perks & benefits</h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            "Hybrid flexibility; remote-friendly sprints",
            "Learning budget (courses/books/confs)",
            "Mentor ecosystem & hiring-partner access",
            "Outcome-focused culture, low-meeting bias",
            "Competitive comp; ESOPs for key roles",
            "Quality gear & modern tooling",
          ].map((p) => (
            <li key={p} className="text-[13.5px] leading-relaxed text-slate-700">
              • {p}
            </li>
          ))}
        </ul>
      </div>

      {/* How we work / Process snapshot */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-100 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <Info className="h-4 w-4 text-slate-500" />
            <h4 className="text-sm font-semibold text-slate-900">How we work</h4>
          </div>
          <ul className="grid gap-1.5">
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Outcomes over vanity; small, fast teams.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Written culture, clear docs beat meetings.
            </li>
            <li className="text-[13.5px] leading-relaxed text-slate-700">
              • Accessibility, stability & quality first.
            </li>
          </ul>
        </div>

        <div
          className="rounded-2xl border border-sky-100 bg-gradient-to-b from-sky-50 to-white p-3"
          style={{ boxShadow: "inset 0 0 0 1px rgba(14, 165, 233, 0.06)" }}
        >
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-600" />
            <h4 className="text-sm font-semibold text-slate-900">Hiring process (quick)</h4>
          </div>
          <ol className="grid gap-1.5 text-[13.5px] leading-relaxed text-slate-700 list-decimal list-inside">
            <li>Apply with links (portfolio/GitHub/LinkedIn).</li>
            <li>Intro call (30 mins): expectations &amp; fit.</li>
            <li>Craft exercise aligned to real CDPL work.</li>
            <li>Panel deep-dive; async doc review.</li>
            <li>Offer, we move fast.</li>
          </ol>
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => setOpenForm(true)}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
          style={{ backgroundColor: "#ff8c00" }}
          aria-haspopup="dialog"
          aria-expanded={openForm}
        >
          Apply
        </button>

        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
          <Clock className="h-3.5 w-3.5" />
          CDPL hiring • 1–2 weeks
        </span>
      </div>

      {/* Application tip + EEO note */}
      <div
        className="mt-4 rounded-2xl border border-slate-100 bg-white p-3"
        style={{ boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.04)" }}
      >
        <div className="mb-2 flex items-start gap-2">
          <Info className="mt-0.5 h-4 w-4 text-slate-500" />
          <div className="text-[13.5px] leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Tip:</span> Keep a
            short note on why CDPL + 2 links that show your craft (PRs, case
            studies, dashboards, demos). Strong writing and outcomes beat long
            resumes.
          </div>
        </div>
        <div className="text-[12.5px] text-slate-500">
          We&apos;re an equal-opportunity employer. We value diversity and are
          committed to an inclusive, respectful workplace.
        </div>
      </div>

      {/* New Job Application Modal */}
      <JobApplicationModal
        isOpen={openForm}
        onClose={() => setOpenForm(false)}
        jobTitle={job.title}
        jobId={job.id}
      />
    </article>
  );
}

"use client";

import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

type Persona = {
  title: string;
  blurb: string;
  bullets: string[];
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // accent text
    ring: string;    // focus ring
    chip: string;    // chip bg
  };
};

const PERSONAS: Persona[] = [
  {
    title: "Students & Fresh Graduates",
    blurb:
      "Start your analytics journey from zero—learn Python/SQL, BI dashboards, and decision-making with real datasets.",
    bullets: ["No prior experience required", "Guided projects + mentor feedback"],
    accent: {
      bar: "bg-orange-500",
      border: "border-orange-200",
      text: "text-brand",
      ring: "focus:ring-orange-300",
      chip: "bg-orange-50",
    },
  },
  {
    title: "Working Professionals",
    blurb:
      "Upskill to data-driven roles in product, finance, marketing, or operations using BI, analytics, and automation.",
    bullets: ["Industry case studies", "Pandas • Power BI • SQL"],
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      ring: "focus:ring-emerald-300",
      chip: "bg-emerald-50",
    },
  },
  {
    title: "Business Analysts",
    blurb:
      "Level up from reports to insights—model KPIs, build interactive dashboards, and run experiments that move metrics.",
    bullets: ["Storytelling with data", "A/B testing & forecasting basics"],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      ring: "focus:ring-sky-300",
      chip: "bg-sky-50",
    },
  },
  {
    title: "Career Switchers",
    blurb:
      "Transition into high-demand analytics roles with a portfolio that proves hands-on skills and business impact.",
    bullets: ["Interview prep + ATS resume", "Placement assistance"],
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      ring: "focus:ring-rose-300",
      chip: "bg-rose-50",
    },
  },
];

export default function WhoShouldEnroll() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const seoKeywords =
    "who should enroll advanced data analytics course, analytics for students, working professionals upskill, business analyst training, career switch to data analytics, python sql power bi course, job ready analytics program";


  return (
    <section
      id="who-should-enroll"
      aria-labelledby="wse-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft top glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="wse-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Is This Data Analyst Full Course Right for You?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Whether you’re starting out or leveling up, this{" "}
            <strong>Advanced Data Analytics</strong> program turns{" "}
            <strong>Python</strong>, <strong>SQL</strong>, <strong>BI</strong>, and{" "}
            <strong>ML fundamentals</strong> into measurable career outcomes-portfolio projects,
            practical tooling, and interview-ready confidence.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Who should enroll list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {PERSONAS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <div
                key={p.title}
                role="listitem"
                aria-labelledby={id}
                tabIndex={0}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  "focus:outline-none focus:ring-2",
                  p.accent.ring,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")} aria-hidden />

                <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-slate-700">{p.blurb}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")} aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>


                {/* micro-interaction underline */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      p.accent.bar,
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Ideal for <strong>students</strong>, <strong>working professionals</strong>,{" "}
            <strong>business analysts</strong>, and <strong>career switchers</strong> targeting{" "}
            <strong>Data Analyst</strong>, <strong>Analytics Engineer</strong>, and{" "}
            <strong>BI Developer</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Learning paths adapt by background and pace.</p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Enroll Now
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Download Syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Analytics Course Page - Who Should Enroll Section - Enroll Now"
        courseName="Advanced Data Analytics Hero Program"
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Analytics Course Page - Who Should Enroll Section - Syllabus Download"
        courseName="Advanced Data Analytics Hero Program"
      />
    </section>
  );
}

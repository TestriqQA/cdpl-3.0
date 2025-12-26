"use client";
import { useState } from "react";
import { Download } from "lucide-react";
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
      "Start strong with Python, statistics, ML/DL foundations, and portfolio projects to stand out in interviews.",
    bullets: ["Zero-to-job-ready path", "Mentor feedback & reviews"],
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", ring: "focus:ring-indigo-300", chip: "bg-indigo-50" },
  },
  {
    title: "Working Professionals",
    blurb:
      "Upskill to lead AI/ML initiatives—learn experimentation, MLOps, and stakeholder storytelling.",
    bullets: ["Impact metrics & dashboards", "Deployment checklists"],
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", ring: "focus:ring-emerald-300", chip: "bg-emerald-50" },
  },
  {
    title: "Data Analysts",
    blurb:
      "Move beyond BI into predictive modeling, feature engineering, and production pipelines.",
    bullets: ["SQL → ML pipelines", "Model evaluation & drift"],
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", ring: "focus:ring-amber-300", chip: "bg-amber-50" },
  },
  {
    title: "Career Switchers",
    blurb:
      "Enter the AI industry with curated projects, interview prep, and ATS-optimized resumes.",
    bullets: ["Portfolio review", "Mock interviews & guidance"],
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", ring: "focus:ring-rose-300", chip: "bg-rose-50" },
  },
];

export default function WhoShouldEnroll() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";

  const seoKeywords =
    "who should enroll data science course, ai ml audience, career switch to data science, working professional upskilling, data analyst to data scientist, mlops deployment skills";

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="wse-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft indigo glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(79,70,229,0.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="wse-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who Is This <span className="text-DS">Course For</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Whether you’re a <strong>beginner</strong>, <strong>analyst</strong>, or an experienced{" "}
            <strong>professional</strong>, this program helps you build a recruiter-ready portfolio in{" "}
            <strong>Data Science</strong> & <strong>AI</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Who should enroll list"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 max-w-5xl mx-auto"
        >
          {PERSONAS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <article
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

                {/* micro underline */}
                <div className="mt-5 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      p.accent.bar,
                      "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Ideal for <strong>students</strong>, <strong>working professionals</strong>,{" "}
            <strong>data analysts</strong>, and <strong>career switchers</strong> targeting roles like{" "}
            <strong>Data Scientist</strong>, <strong>ML Engineer</strong>, and <strong>Applied AI</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-blue-600 bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Check Eligibility & Apply
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Detailed Syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science & AI - Who Should Enroll - Check Eligibility"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science & AI - Who Should Enroll - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

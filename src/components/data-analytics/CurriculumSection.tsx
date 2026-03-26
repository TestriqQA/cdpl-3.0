"use client";

import { CheckCircle } from 'lucide-react';
import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import EnrollModal from "../EnrollModal";
import CareerSessionModal from "../CareerSessionModal";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: {
    bg: string;
    text: string;
    border: string;
    ring: string;
    bar: string; // top accent bar color
  };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Data Preparation & Cleaning",
    outcome:
      "Master data wrangling, profiling, missing-value strategy, outlier treatment, text/date handling, and reproducible ETL.",
    accent: {
      bg: "bg-orange-50",
      text: "text-brand",
      border: "border-orange-200",
      ring: "focus:ring-orange-300",
      bar: "bg-brand",
    },
  },
  {
    num: "02",
    title: "Statistical Analysis & Modeling",
    outcome:
      "Apply descriptive & inferential statistics, hypothesis testing, confidence intervals, and regression for trustworthy insights.",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      bar: "bg-emerald-600",
    },
  },
  {
    num: "03",
    title: "Data Visualization & Storytelling",
    outcome:
      "Design compelling dashboards (Power BI / Tableau), choose the right chart, add interaction, and craft business narratives.",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      bar: "bg-sky-600",
    },
  },
  {
    num: "04",
    title: "Predictive Analytics & Forecasting",
    outcome:
      "Build & validate predictive models (classification, regression, time series), evaluate with the right metrics and guard against leakage.",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
      bar: "bg-rose-600",
    },
  },
  {
    num: "05",
    title: "Business Intelligence & Decision Making",
    outcome:
      "Translate insights into action: KPIs, experiment design, executive-ready decks, and data products that drive decisions.",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
      bar: "bg-indigo-600",
    },
  },
];

export default function CurriculumSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

  const subtitle =
    "An industry-aligned data analytics pathway from clean data and statistics to dashboards, predictive modeling, and BI decisioning.";
  const keywords =
    "advanced data analytics curriculum, business intelligence syllabus, data visualization storytelling, predictive analytics forecasting, statistics for data analysts, Power BI Tableau SQL";

  const accents = [
    { cardBg: 'bg-orange-50', cardBorder: 'border-orange-200', badgeBg: 'bg-brand', badgeText: 'text-white', ink: 'text-brand', icon: 'text-brand' },
    { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-[#047857]', badgeText: 'text-white', ink: 'text-emerald-800', icon: 'text-emerald-700' },
    { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-600', badgeText: 'text-white', ink: 'text-sky-800', icon: 'text-sky-700' },
    { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-600', badgeText: 'text-white', ink: 'text-rose-800', icon: 'text-rose-700' },
    { cardBg: 'bg-indigo-50', cardBorder: 'border-indigo-200', badgeBg: 'bg-indigo-600', badgeText: 'text-white', ink: 'text-indigo-800', icon: 'text-indigo-700' },
  ];

  return (
    <section id="curriculum" className="relative py-10 bg-white">
      {/* subtle separators */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          5-Core Curriculum Modules: Your Data Analytics Roadmap
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          {subtitle}
        </p>
        {/* Hidden SEO keywords */}
        <p className="sr-only">{keywords}</p>

        {/* Cards */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {MODULES.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  'md:pt-12',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index badge */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold shadow-sm',
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                    a.badgeText,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {mod.num}
                </div>

                <h3 className={['mb-4 text-xl font-semibold leading-snug break-words', a.ink, 'pr-14 sm:pr-0'].join(' ')}>
                  {mod.title}
                </h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  <li key={mod.outcome} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                    <span className="text-sm">{mod.outcome}</span>
                  </li>
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.
                </p>
              </li>
            );
          })}
        </ol>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-green-700 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-purple-700 bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm transition hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Book a Career Session
          </button>
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Apply Now
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Analytics Course Page - Curriculum Section - Syllabus Download"
        courseName="Advanced Data Analytics Hero Program"
      />
      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Analytics Course Page - Curriculum Section - Career Session"
        courseName="Advanced Data Analytics Hero Program"
      />
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Analytics Course Page - Curriculum Section - Apply Now"
        courseName="Advanced Data Analytics Hero Program"
      />
    </section>
  );
}

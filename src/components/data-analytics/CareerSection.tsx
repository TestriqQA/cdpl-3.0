"use client";

import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

type Company = {
  name: string;
  logo: string;
  alt: string;
  href?: string;
  accent: { bg: string; text: string; border: string; ring: string };
};

const COMPANIES: Company[] = [
  {
    name: "TCS",
    logo: "/tcs-logo.png",
    alt: "TCS logo",
    href: "https://www.tcs.com/",
    accent: { bg: "bg-orange-50", text: "text-brand", border: "border-orange-200", ring: "focus:ring-orange-300" },
  },
  {
    name: "Infosys",
    logo: "/infosys-logo.png",
    alt: "Infosys logo",
    href: "https://www.infosys.com/",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300" },
  },
  {
    name: "Wipro",
    logo: "/wipro-logo.png",
    alt: "Wipro logo",
    href: "https://www.wipro.com/",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300" },
  },
  {
    name: "Cognizant",
    logo: "/cognizant-logo.png",
    alt: "Cognizant logo",
    href: "https://www.cognizant.com/",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300" },
  },
  {
    name: "Accenture",
    logo: "/accenture-logo.png",
    alt: "Accenture logo",
    href: "https://www.accenture.com/",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300" },
  },
  {
    name: "Capgemini",
    logo: "/capgemini-logo.png",
    alt: "Capgemini logo",
    href: "https://www.capgemini.com/",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300" },
  },
  {
    name: "HCLTech",
    logo: "/hcl-logo.png",
    alt: "HCLTech logo",
    href: "https://www.hcltech.com/",
    accent: { bg: "bg-lime-50", text: "text-lime-900", border: "border-lime-200", ring: "focus:ring-lime-300" },
  },
  {
    name: "IBM",
    logo: "/ibm-logo.png",
    alt: "IBM logo",
    href: "https://www.ibm.com/",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300" },
  },
];

export default function CareerSection() {
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const subKpi = "101,000+ Job Vacancies in India";
  const subtext =
    "Careers across data analytics, business intelligence, data engineering lite, and strategic decision-making.";
  const keywords =
    "data analytics jobs India, business intelligence hiring companies, data analyst roles, SQL Python Power BI recruitment, analytics careers Mumbai";

  return (
    <section id="careers" aria-labelledby="careers-heading" className="relative overflow-hidden py-10 bg-white">
      {/* Subtle futuristic grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 id="careers-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Placement Partners & Career Opportunities in Mumbai
        </h2>

        {/* KPI / subtitle strip */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
          <span className="text-brand">•</span>
          <span className="text-slate-900">{subKpi}</span>
          <span className="text-indigo-700">•</span>
          <span>Pan-India • Product & Services • Startup & Enterprise</span>
        </div>

        <p className="mt-3 text-base md:text-lg text-slate-700">{subtext}</p>
        {/* SEO assist for crawlers */}
        <p className="sr-only">{keywords}</p>

        {/* Logos grid — responsive, distinct accents, hover/focus lift */}
        <ul
          role="list"
          aria-label="Companies hiring data analytics professionals"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {COMPANIES.map((c) => (
            <li key={c.name} className="min-w-0">
              <button
                aria-label={c.name}
                className={[
                  "cursor-pointer group block w-full rounded-2xl border p-4 shadow-sm transition-all duration-200 backdrop-blur",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  c.accent.bg,
                  c.accent.border,
                  c.accent.ring,
                ].join(" ")}
              >
                <p className={["mt-3 text-xs font-semibold", c.accent.text].join(" ")}>{c.name}</p>
              </button>
            </li>
          ))}
        </ul>

        {/* Role chips (distinct colors, no repeats) */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-700">
          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-brand">Data Analyst</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">BI Analyst</span>
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Analytics Engineer</span>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">Product Analyst</span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Business Analyst</span>
        </div>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => setIsSessionOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Apply for placement assistance in analytics roles"
          >
            Apply for Placement Assistance
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
            aria-label="Download the job-ready analytics syllabus"
          >
            Download Job-Ready Syllabus (PDF)
          </button>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-[11px] text-slate-500">
          *Logos are for illustration of hiring potential. Openings vary by location, skills, and experience.
        </p>
      </div>

      <CareerSessionModal
        isOpen={isSessionOpen}
        onClose={() => setIsSessionOpen(false)}
        source="Data Analytics Course Page - Career Section - Placement Assistance"
        courseName="Advanced Data Analytics Hero Program"
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Analytics Course Page - Career Section - Syllabus Download"
        courseName="Advanced Data Analytics Hero Program"
      />
    </section >
  );
}

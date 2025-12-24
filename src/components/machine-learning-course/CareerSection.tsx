"use client";
import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

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
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300" },
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
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300" },
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
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const subtitle = "101,000+ Job Vacancies in India";
  const context =
    "Join the ranks of Data Scientists, ML Engineers, and Analytics Professionals at India’s leading product and services companies.";
  const keywords =
    "data science jobs India, machine learning hiring companies, analytics careers, Python ML roles, fresher data scientist openings, placement assistance";

  return (
    <section id="careers" aria-labelledby="career-heading" className="relative overflow-hidden py-10 bg-white">
      {/* Subtle futuristic grid line */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 id="career-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Top Companies Hiring <span className="text-DS">Data Science Professionals</span>
        </h2>

        {/* KPI / subtitle strip */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
          <span className="text-emerald-700">•</span>
          <span className="text-slate-900">{subtitle}</span>
          <span className="text-indigo-700">•</span>
          <span>Pan-India • Product & Services • Startup & Enterprise</span>
        </div>

        <p className="mt-4 text-base md:text-lg text-slate-700">{context}</p>
        {/* SEO assist */}
        <p className="sr-only">{keywords}</p>

        {/* Logos grid (auto-fit, distinct accents, no repeats) */}
        <ul
          role="list"
          aria-label="Companies hiring data science professionals"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {COMPANIES.map((c) => (
            <li key={c.name} className="min-w-0">
              <div
                aria-label={c.name}
                className={[
                  "group block rounded-2xl border p-4 shadow-sm transition-all duration-200 backdrop-blur",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  c.accent.bg,
                  c.accent.border,
                  c.accent.ring,
                ].join(" ")}
              >
                {/* label */}
                <p className={["mt-3 text-md font-semibold", c.accent.text].join(" ")}>{c.name}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Role chips */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-700">
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Data Scientist</span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">ML Engineer</span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Data Analyst</span>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">MLOps Engineer</span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">BI Analyst</span>
        </div>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Apply for data science roles via our placement cell"
          >
            Apply for Placement Assistance
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Download the syllabus to see job-ready skills"
          >
            Download Job-Ready Syllabus (PDF)
          </button>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-[11px] text-slate-500">
          *Logos are for illustration of hiring potential. Roles and openings vary by location, skills, and experience.
        </p>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Machine Learning Course Page - Career Section - Placement Assistance"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - Career Section - Download Syllabus"
      />

    </section>
  );
}

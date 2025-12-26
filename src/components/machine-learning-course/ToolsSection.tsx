"use client";

import Link from "next/link";
import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

type Tool = {
  name: string;
  desc: string;
  accent: { bg: string; text: string; border: string; ring: string; dot: string };
};

const TOOLS: Tool[] = [
  {
    name: "Python",
    desc: "Primary language for ML & data workflows",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      dot: "bg-sky-500",
    },
  },
  {
    name: "Pandas",
    desc: "Data wrangling, cleaning & feature prep",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      dot: "bg-emerald-500",
    },
  },
  {
    name: "NumPy",
    desc: "Fast arrays, math & vectorized operations",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      dot: "bg-amber-500",
    },
  },
  {
    name: "Scikit-Learn",
    desc: "Core ML algorithms, pipelines & metrics",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
      dot: "bg-rose-500",
    },
  },
  {
    name: "Matplotlib",
    desc: "Publication-ready charts & plots",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
      dot: "bg-indigo-500",
    },
  },
  {
    name: "Seaborn",
    desc: "Statistical visuals & quick EDA",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      border: "border-violet-200",
      ring: "focus:ring-violet-300",
      dot: "bg-violet-500",
    },
  },
  {
    name: "Jupyter Notebook",
    desc: "Interactive notebooks for experiments",
    accent: {
      bg: "bg-lime-50",
      text: "text-lime-900",
      border: "border-lime-200",
      ring: "focus:ring-lime-300",
      dot: "bg-lime-500",
    },
  },
  {
    name: "SQL",
    desc: "Query, join & aggregate data at source",
    accent: {
      bg: "bg-cyan-50",
      text: "text-cyan-900",
      border: "border-cyan-200",
      ring: "focus:ring-cyan-300",
      dot: "bg-cyan-500",
    },
  },
];

export default function ToolsSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  const subtitle =
    "Master the essential Python data stack for analytics and machine learning — from data wrangling to model training and visualization.";
  const keywords =
    "python pandas numpy scikit-learn matplotlib seaborn jupyter sql, data science tools, machine learning stack, analytics technologies";


  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative overflow-hidden py-10 bg-white">
      {/* Subtle futuristic backdrop (thin grid + mask; no heavy gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className="text-DS">Tools & Technologies</span> You&apos;ll Master
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* Assist crawlers */}
          <p className="sr-only">{keywords}</p>

          {/* Micro-badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-700">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Python Data Stack</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">EDA & Visualization</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">Modeling & Metrics</span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-900">Notebook-first Workflow</span>
          </div>
        </header>

        {/* Tools grid — responsive, unique accents, hover/focus lift */}
        <ul
          role="list"
          aria-label="Core tools and technologies"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TOOLS.map((t) => (
            <li key={t.name} className="min-w-0">
              <article
                tabIndex={0}
                className={[
                  "group relative h-full rounded-2xl border p-4 shadow-sm transition-all duration-200 backdrop-blur",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  t.accent.bg,
                  t.accent.border,
                  t.accent.ring,
                ].join(" ")}
                aria-label={`${t.name} — ${t.desc}`}
                title={t.name}
              >
                {/* top accent line */}
                <div className={`absolute left-0 top-0 h-1 w-2/3 rounded-br-2xl ${t.accent.dot}`} aria-hidden />
                {/* name + dot */}
                <div className="flex items-center gap-2">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${t.accent.dot}`} aria-hidden />
                  <h3 className={`truncate text-sm md:text-base font-bold ${t.accent.text}`}>{t.name}</h3>
                </div>
                <p className="mt-1 line-clamp-2 text-xs md:text-sm text-slate-700">{t.desc}</p>

                {/* bottom track to hint interactivity (subtle, not a gradient) */}
                <div className="mt-3 h-1 w-full rounded-full bg-white/70" aria-hidden>
                  <div className={`h-1 w-0 rounded-full transition-[width] duration-500 ease-out ${t.accent.dot} group-hover:w-4/5 group-focus:w-4/5`} />
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#curriculum"
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Explore curriculum modules mapped to these tools"
          >
            See Modules Using These Tools
          </Link>
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Book a free demo to experience the toolchain"
          >
            Book a Free Demo
          </button>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Tooling may be extended with Plotly, FastAPI, Docker, or cloud notebooks based on cohort needs.
        </p>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Machine Learning Course Page - Tools Section - Book Free Demo"
      />

    </section>
  );
}

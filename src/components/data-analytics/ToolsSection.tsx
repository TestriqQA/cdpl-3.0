// components/sections/ToolsSection.tsx
"use client";

import {

  Database,
  BarChart3,
  Presentation,
  Sheet,
  Blocks,
  Sigma,
  Braces,
  Cpu,
  Rocket,
} from "lucide-react"; // note: Python isn't in lucide; we’ll reuse icons meaningfully

import { useState } from "react";
import EnrollModal from "../EnrollModal";

type Tool = {
  name: string;
  badge: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;
  text: string;
  border: string;
};

const TOOLS: Tool[] = [
  { name: "Python", badge: "Scripting", icon: Braces, bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200" },
  { name: "SQL", badge: "Queries", icon: Database, bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200" },
  { name: "Power BI", badge: "Dashboards", icon: BarChart3, bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200" },
  { name: "Tableau", badge: "Visual Analytics", icon: Presentation, bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200" },
  { name: "Excel (Advanced)", badge: "Analysis", icon: Sheet, bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200" },
  { name: "pandas", badge: "DataFrames", icon: Blocks, bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200" },
  { name: "NumPy", badge: "Numerics", icon: Sigma, bg: "bg-lime-50", text: "text-lime-900", border: "border-lime-200" },
  { name: "R", badge: "Stats", icon: Cpu, bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200" },
];

export default function ToolsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);


  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="tools-heading"
    >
      {/* subtle futuristic accent (sleek line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Build real, job-ready skills across{" "}
            <strong>data wrangling</strong>, <strong>SQL modeling</strong>,{" "}
            <strong>dashboard design</strong>, and <strong>predictive analytics</strong>.
            Curated stack recruiters recognize and teams rely on.
          </p>

          {/* quick highlights / KPIs */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <KPI label="Hands-On Stack" value="8+ Core Tools" note="From raw data → insights" />
            <KPI label="Portfolio Output" value="Dashboards & Notebooks" note="Power BI • Tableau • Python" />
            <KPI label="Hiring Fit" value="Analyst • BI • DS" note="Skills mapped to roles" />
          </div>
        </header>

        {/* Tools grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {TOOLS.map((t) => (
            <li key={t.name}>
              <ToolCard tool={t} onEnroll={() => setIsEnrollOpen(true)} />
            </li>
          ))}
        </ul>

        {/* subtle helper text for SEO (screen readers) */}
        <p className="sr-only">
          Learn data analytics with Python, SQL, Power BI, Tableau, Excel, pandas, NumPy, and R to
          create dashboards, reports, and predictive models for business intelligence.
        </p>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Analytics Course Page - Tools Section - Learn with Projects"
        courseName="Advanced Data Analytics Hero Program"
      />
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function KPI({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}


function ToolCard({ tool, onEnroll }: { tool: Tool; onEnroll: () => void }) {
  const Icon = tool.icon;
  return (
    <article
      className={[
        "group rounded-2xl border p-2 md:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:shadow-md",
        tool.bg,
        tool.text,
        tool.border,
      ].join(" ")}
      tabIndex={0}
      aria-label={`${tool.name} tool`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className="p-2 rounded-xl bg-white/70 ring-1 ring-black/5">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          {tool.name}
        </span>
        <span
          className={[
            "text-[11px] hidden md:block rounded-full border px-2 py-0.5 font-semibold",
            tool.border,
            "bg-white/70 text-slate-700",
          ].join(" ")}
        >
          {tool.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-700">
        Master {tool.name} to build production-grade analytics: clean data, model KPIs, visualize
        trends, and present insights stakeholders can act on.
      </p>

      <div className="mt-3">
        <button
          onClick={onEnroll}
          className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label={`Learn ${tool.name} in the Advanced Data Analytics program`}
        >
          Learn with Projects
          <Rocket className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

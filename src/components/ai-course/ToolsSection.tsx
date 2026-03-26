// components/sections/ToolsSection.tsx
"use client";

import {
  Code2,        // Python
  Braces,       // R
  Database,     // SQL
  PieChart,     // Tableau
  BarChart3,    // Power BI
  Cpu,          // TensorFlow
  Flame,        // PyTorch
  CloudCog,     // AWS SageMaker
  Rocket,
} from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import CareerSessionModal from "../CareerSessionModal";

type Tool = {
  name: string;
  badge: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;        // card bg
  text: string;      // body text color
  border: string;    // card border
  iconBg: string;    // icon chip bg
  iconColor: string; // icon color
  desc: string;
};

const TOOLS: Tool[] = [
  {
    name: "Python",
    badge: "Core Language",
    icon: Code2,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    iconBg: "bg-white",
    iconColor: "text-indigo-700",
    desc: "EDA, feature engineering, notebooks, data apps, and production APIs.",
  },
  {
    name: "R",
    badge: "Analytics",
    icon: Braces,
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-200",
    iconBg: "bg-white",
    iconColor: "text-rose-700",
    desc: "Statistics, visualization, and reporting with tidyverse workflows.",
  },
  {
    name: "SQL",
    badge: "Data Backbone",
    icon: Database,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    iconBg: "bg-white",
    iconColor: "text-emerald-700",
    desc: "Model reliable queries, windows, CTEs, and performance tuning.",
  },
  {
    name: "Tableau",
    badge: "BI & Viz",
    icon: PieChart,
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    iconBg: "bg-white",
    iconColor: "text-amber-700",
    desc: "Interactive dashboards, storytelling, and KPI drill-downs.",
  },
  {
    name: "Power BI",
    badge: "Dashboards",
    icon: BarChart3,
    bg: "bg-sky-50",
    text: "text-sky-900",
    border: "border-sky-200",
    iconBg: "bg-white",
    iconColor: "text-sky-700",
    desc: "Data models, DAX measures, and enterprise-ready reports.",
  },
  {
    name: "TensorFlow",
    badge: "Deep Learning",
    icon: Cpu,
    bg: "bg-violet-50",
    text: "text-violet-900",
    border: "border-violet-200",
    iconBg: "bg-white",
    iconColor: "text-violet-700",
    desc: "NNs, CNNs, transfer learning, and efficient TF/Keras pipelines.",
  },
  {
    name: "PyTorch",
    badge: "Research → Prod",
    icon: Flame,
    bg: "bg-lime-50",
    text: "text-lime-900",
    border: "border-lime-200",
    iconBg: "bg-white",
    iconColor: "text-lime-700",
    desc: "Flexible modeling, training loops, and deployment patterns.",
  },
  {
    name: "AWS SageMaker",
    badge: "MLOps",
    icon: CloudCog,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    border: "border-cyan-200",
    iconBg: "bg-white",
    iconColor: "text-cyan-700",
    desc: "Training jobs, endpoints, monitoring, and CI/CD integrations.",
  },
];

export default function ToolsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";


  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="tools-heading"
    >
      {/* Sleek futuristic accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Build <strong>production-grade pipelines</strong>, dashboards, and{" "}
            <strong>deployed ML systems</strong> with industry-standard tools—from{" "}
            <strong>Python/R/SQL</strong> to <strong>TensorFlow/PyTorch</strong> and{" "}
            <strong>AWS SageMaker</strong>.
          </p>

          {/* Quick highlights / KPIs */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
            <KPI label="Hands-On Stack" value="8 Core Tools" note="EDA • BI • DL • MLOps" />
            <KPI label="Deploy Anywhere" value="Cloud & On-Prem" note="AWS • GCP • Azure patterns" />
            <KPI label="Outcome" value="Job-Ready Portfolio" note="APIs • Dashboards • Models" />
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

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-900 bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:translate-y-[-2px] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Book a Free Demo
            <Rocket className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* sr-only helper for SEO */}
        <p className="sr-only">
          Master Python, R, SQL, Tableau, Power BI, TensorFlow, PyTorch, and AWS SageMaker to build
          scalable data science and AI solutions.
        </p>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Comprehensive Data Science & AI - Tools Section - Learn with Projects"
        courseName={courseName}
      />
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Comprehensive Data Science & AI - Tools Section - Book Demo"
        courseName={courseName}
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
          <span className={`p-2 rounded-xl ${tool.iconBg} ring-1 ring-black/5`}>
            <Icon className={`h-5 w-5 ${tool.iconColor}`} strokeWidth={2.2} />
          </span>
          {tool.name}
        </span>
        <span
          className={[
            "text-[11px] hidden lg:block rounded-full border px-2.5 py-0.5 font-semibold",
            tool.border,
            "bg-white/70 text-slate-700",
          ].join(" ")}
        >
          {tool.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-700">{tool.desc}</p>

      <div className="mt-3">
        <button
          onClick={onEnroll}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
          aria-label={`Learn ${tool.name} in the DS & AI Master Program`}
        >
          Learn with Projects
          <Rocket className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

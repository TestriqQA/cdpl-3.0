"use client";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

type Step = {
  n: number;
  title: string;
  desc: string;
  badge: string;
  accent: { bg: string; text: string; border: string; ring: string; dot: string; bar: string };
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Complete the 255-Hour DS & AI Master Program",
    desc:
      "Python, Statistics, EDA, supervised & unsupervised ML, Deep Learning, NLP, Time Series, Big Data (Spark) foundations.",
    badge: "Job-Ready Foundations",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
      dot: "bg-indigo-500",
      bar: "bg-indigo-600",
    },
  },
  {
    n: 2,
    title: "Build & Ship an Advanced Portfolio",
    desc:
      "End-to-end projects (APIs, dashboards, notebooks) deployed to cloud with READMEs, metrics, and reproducible pipelines.",
    badge: "Portfolio & GitHub",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      dot: "bg-emerald-500",
      bar: "bg-emerald-600",
    },
  },
  {
    n: 3,
    title: "Career Prep, Mock Interviews & MLOps Basics",
    desc:
      "ATS resume, behavioral & technical mocks, packaging models, simple monitoring, CI/CD & deployment checklists.",
    badge: "Interview Readiness",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      dot: "bg-amber-500",
      bar: "bg-amber-600",
    },
  },
  {
    n: 4,
    title: "Apply & Land a DS/AI Role",
    desc:
      "Target Data Scientist, ML Engineer, Applied AI Specialist, or MLOps roles (₹9–18 LPA based on city & stack).",
    badge: "Offer & Onboarding",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      border: "border-violet-200",
      ring: "focus:ring-violet-300",
      dot: "bg-violet-500",
      bar: "bg-violet-600",
    },
  },
];

export default function CareerRoadmapSection() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";

  const subtitle =
    "Follow these 4 proven steps to move from learner to job-ready DS & AI professional with a portfolio recruiters trust.";

  return (
    <section
      id="career-roadmap"
      aria-labelledby="career-roadmap-heading"
      className="relative overflow-hidden py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (thin grid + soft radial glow; minimal, non-distracting) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[140px] bg-[radial-gradient(700px_160px_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="career-roadmap-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Your{" "}
            <span className="text-DS">
              DS &amp; AI Career Roadmap
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>

          {/* KPI strip (distinct pills) */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <KPI label="Program Duration" value="~ 12–16 Weeks" note="255 hours guided learning" />
            <KPI label="Portfolio Projects" value="3–5" note="Deployed & documented" />
            <KPI label="Target CTC" value="₹9–18 LPA" note="Role & location vary" />
          </div>
        </header>

        {/* Timeline */}
        <ol className="relative mx-auto mt-10 max-w-4xl">
          {/* Center spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2"
          />

          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative grid grid-cols-[28px_1fr] items-start gap-4 sm:grid-cols-[1fr_28px_1fr] mb-6 last:mb-0"
            >
              {/* Dot on spine */}
              <span
                aria-hidden
                className={[
                  "absolute left-[14px] top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow",
                  "sm:left-1/2 sm:-translate-x-1/2",
                  s.accent.dot,
                ].join(" ")}
              />

              {/* Step number badge */}
              <div
                className={[
                  "row-span-2 mt-1 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold shadow-sm bg-white",
                  s.accent.text,
                  s.accent.border,
                ].join(" ")}
                aria-label={`Step ${s.n}`}
                title={`Step ${s.n}`}
              >
                {s.n}
              </div>

              {/* Card (zig-zag on desktop) */}
              <article
                tabIndex={0}
                className={[
                  "relative col-start-2 rounded-2xl border p-4 sm:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur transition",
                  "hover:shadow-md focus:outline-none",
                  s.accent.bg,
                  s.accent.text,
                  s.accent.border,
                  s.accent.ring,
                  i % 2 === 0 ? "sm:col-start-3" : "sm:col-start-1 sm:row-start-1",
                ].join(" ")}
              >
                {/* Top accent bar */}
                <div className={["absolute left-0 top-0 h-1.5 w-full", s.accent.bar].join(" ")} aria-hidden />

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                  <span
                    className={[
                      "inline-flex items-center rounded-full border px-2.5 py-1 bg-white/70 text-slate-700",
                      s.accent.border,
                    ].join(" ")}
                  >
                    {s.badge}
                  </span>
                </div>

                <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{s.desc}</p>

                {/* Bottom progress bar */}
                <div className="mt-4 h-1 w-full rounded-full bg-white/80" aria-hidden>
                  <div className={["h-1 w-4/5 rounded-full", s.accent.bar].join(" ")} />
                </div>
              </article>
            </li>
          ))}

        </ol>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Get personalized DS & AI roadmap guidance"
            title="Get Personalized Roadmap"
          >
            Get Personalized Roadmap
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere. <span className="font-semibold text-slate-800">Your journey to a DS & AI career starts here.</span>
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Data Science & AI - Career Roadmap - Get Personalized Roadmap"
        courseName={courseName}
      />
    </section>
  );
}

/* ---------- Subcomponent ---------- */
function KPI({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}

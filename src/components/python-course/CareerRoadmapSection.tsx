// components/sections/CareerRoadmapSection.tsx
// Client component — sleek, slightly futuristic, responsive, and SEO-friendly.

'use client';

import dynamic from "next/dynamic";
import { useState } from "react";
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false, loading: () => <SectionLoader label="Loading career session modal..." /> });

const SectionLoader = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">{label}</span>
    </div>
  );
};

type Step = {
  n: number;
  title: string;
  desc: string;
  badge: string;
  accent: { bg: string; text: string; border: string; ring: string };
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Complete the 80-Hour Python Master Program",
    desc: "Master Python syntax, OOP, data structures, web (Django), data analysis, ML basics, automation, APIs, and deployments.",
    badge: "Job-Ready Foundations",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-500",
    },
  },
  {
    n: 2,
    title: "Build 3 Portfolio Projects",
    desc: "Ship an e-commerce app, a data dashboard, and an automation/ML project. Host on GitHub + cloud with readme docs.",
    badge: "Portfolio & GitHub",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-500",
    },
  },
  {
    n: 3,
    title: "Career Prep & Mock Interviews",
    desc: "Resume revamp, ATS keywords, DSA warm-ups, system design for backend, and domain interview drills.",
    badge: "Interview Readiness",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-500",
    },
  },
  {
    n: 4,
    title: "Apply & Land a Python Role",
    desc: "Target roles like Python Developer, Data Analyst, ML Engineer, Backend Developer, or Automation Engineer (₹6–15 LPA).",
    badge: "Offer & Onboarding",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      border: "border-violet-200",
      ring: "focus:ring-violet-500",
    },
  },
];

export default function CareerRoadmapSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="career-roadmap"
      aria-labelledby="career-roadmap-heading"
      className="relative py-10 bg-white"
    >
      {/* Futuristic, subtle backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="career-roadmap-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Your <span className="text-FS">Python Career Roadmap</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow these <strong>4 proven steps</strong> to move from learner to
            <strong> job-ready Python professional</strong> with a portfolio recruiters trust.
          </p>

          {/* KPI strip */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <KPI label="Program Duration" value="~ 10 Weeks" note="80 hours guided learning" />
            <KPI label="Portfolio Projects" value="3+" note="Deployed & documented" />
            <KPI label="Target CTC" value="₹6–15 LPA" note="Role & location vary" />
          </div>
        </header>

        {/* Timeline */}
        {/* Timeline */}
        <div className="relative mx-auto mt-10 max-w-4xl">
          {/* Center spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2"
          />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className={[
                  "relative grid grid-cols-[28px_1fr] items-start gap-4 sm:grid-cols-[1fr_28px_1fr]",
                ].join(" ")}
              >
                {/* Left card on even, right card on odd (desktop) for zig-zag */}
                {/* Dot */}
                <span
                  aria-hidden
                  className={[
                    "absolute left-[14px] top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow",
                    i % 2 === 0 ? "sm:left-1/2 sm:-translate-x-1/2" : "sm:left-1/2 sm:-translate-x-1/2",
                    s.accent.border.replace("border-", "bg-").replace("200", "400"),
                  ].join(" ")}
                />

                {/* Number badge (mobile/desktop aligned with side) */}
                <div
                  className={[
                    "row-span-2 mt-1 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold shadow-sm",
                    s.accent.bg,
                    s.accent.text,
                    s.accent.border,
                  ].join(" ")}
                  aria-label={`Step ${s.n}`}
                  title={`Step ${s.n}`}
                >
                  {s.n}
                </div>

                {/* Card */}
                <article
                  tabIndex={0}
                  className={[
                    "col-start-2 rounded-2xl border p-4 sm:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur transition hover:shadow-md",
                    s.accent.bg,
                    s.accent.text,
                    s.accent.border,
                    s.accent.ring,
                    // Zig-zag layout on desktop
                    i % 2 === 0 ? "sm:col-start-3" : "sm:col-start-1 sm:row-start-1",
                    "relative overflow-hidden" // Ensure relative positioning for absolute child
                  ].join(" ")}
                >
                  {/* Subtle Watermark Number */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-1 right-3 text-6xl font-extrabold text-slate-100 select-none pointer-events-none"
                  >
                    {s.n.toString().padStart(2, '0')}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                    <span
                      className={[
                        "inline-flex items-center rounded-full border px-2.5 py-1",
                        s.accent.border,
                        "bg-white/70 text-slate-700",
                      ].join(" ")}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Get personalized roadmap guidance"
          >
            Get Personalized Roadmap
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere. <span className="font-semibold text-slate-800">Your journey to a Python career starts here.</span>
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Python Programming"
        source="Python Course Page - Career Roadmap Section"
        title="Get Your Personalized Roadmap"
        subtitle="Speak with our career mentors to build your custom Python learning path."
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

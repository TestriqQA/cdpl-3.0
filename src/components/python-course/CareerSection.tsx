// components/sections/CareerSection.tsx
// Sleek, slightly futuristic, fully responsive careers section with distinct color chips and SEO JSON-LD.
// No client-only libs needed.

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

type Job = string;

const JOBS: Job[] = [
  "Python Developer",
  "Data Scientist",
  "ML Engineer",
  "Backend Developer",
  "Automation Engineer",
  "Django Developer",
  "Data Analyst",
  "DevOps Engineer",
];

// Soft-accent chip palette (cycled; avoids repeating the same color back-to-back)
const ACCENTS = [
  { bg: "bg-sky-50", text: "text-sky-800", border: "border-sky-200", ring: "focus:ring-sky-300" },
  { bg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-200", ring: "focus:ring-emerald-300" },
  { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300" },
  { bg: "bg-violet-50", text: "text-violet-800", border: "border-violet-200", ring: "focus:ring-violet-300" },
  { bg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200", ring: "focus:ring-rose-300" },
  { bg: "bg-indigo-50", text: "text-indigo-800", border: "border-indigo-200", ring: "focus:ring-indigo-300" },
  { bg: "bg-teal-50", text: "text-teal-800", border: "border-teal-200", ring: "focus:ring-teal-300" },
];

export default function CareerSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (no harsh gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.10),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        {/* Heading + subcopy */}
        <header className="text-center max-w-4xl mx-auto">
          <h2
            id="careers-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            1.8M+ <span className="text-FS">Python Jobs</span> Worldwide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Roles you can land across <strong>Data Science</strong>,{" "}
            <strong>Machine Learning</strong>, <strong>Backend</strong>,{" "}
            <strong>Automation</strong>, and <strong>DevOps</strong>. Build an ATS-friendly
            portfolio recruiters love.
          </p>

          {/* KPI band */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <KPI label="Avg. Salary (IN)" value="₹6–20 LPA" note="Role & location dependent" />
            <KPI label="Remote Friendly" value="65%+" note="Hybrid/remote roles" />
            <KPI label="Top Domains" value="FinTech, SaaS, E-com" note="Hiring at scale" />
          </div>
        </header>

        {/* Chips grid */}
        <div
          role="list"
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {JOBS.map((job, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <span
                key={job}
                role="listitem"
                tabIndex={0}
                title={job}
                className={[
                  "inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold",
                  "shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  a.bg,
                  a.text,
                  a.border,
                  a.ring,
                ].join(" ")}
                aria-label={job}
              >
                {job}
              </span>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 text-left">
          <TrustCard
            title="Skills Recruiters Want"
            points={["Python + SQL", "APIs & Django", "Pandas / scikit-learn"]}
            color="border-sky-200 bg-sky-50"
          />
          <TrustCard
            title="Placement Support"
            points={["Resume polish", "Mock interviews", "Job alerts"]}
            color="border-emerald-200 bg-emerald-50"
          />
          <TrustCard
            title="Build Portfolio"
            points={["Deployed apps", "Clean code & tests", "README + docs"]}
            color="border-amber-200 bg-amber-50"
          />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Talk to a program advisor"
          >
            Talk to a Program Advisor
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4c.39.39.39 1.024 0 1.414l-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H4a1 1 0 110-2h10.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere. <span className="font-semibold text-slate-800">If you want to be the best, CDPL is your place.</span>
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Python Course Page - Career Section - Talk to Advisor"
      />

    </section>
  );
}

/* ---------- subcomponents ---------- */

function KPI({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}

function TrustCard({
  title,
  points,
  color,
}: {
  title: string;
  points: string[];
  color: string;
}) {
  return (
    <article
      className={[
        "rounded-xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]",
        color,
      ].join(" ")}
      aria-label={title}
    >
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-[13px] text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

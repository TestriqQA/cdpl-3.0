"use client";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function WhyMLProgram() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const subtitle =
    "A mentor-led, job-ready journey through Python, Data Visualization, Statistics & Probability, and Machine Learning — built around hands-on labs and real portfolio projects.";
  const keywords =
    "machine learning course, data science with Python, statistics and probability, data visualization, ML algorithms, portfolio projects, placement assistance, Mumbai";

  const CHIPS: { label: string; cls: string }[] = [
    { label: "95 Hours", cls: "bg-sky-50 text-sky-900 border-sky-200" },
    { label: "4 Certificates", cls: "bg-emerald-50 text-emerald-900 border-emerald-200" },
    { label: "Hands-on Projects", cls: "bg-amber-50 text-amber-900 border-amber-200" },
    { label: "No Prerequisites", cls: "bg-rose-50 text-rose-900 border-rose-200" },
    { label: "Job-Ready", cls: "bg-violet-50 text-violet-900 border-violet-200" },
  ];

  const BULLETS: string[] = [
    "Python foundations → EDA → feature engineering",
    "Visualizations with Matplotlib & Plotly",
    "Statistics & Probability for inference and A/B testing",
    "ML with scikit-learn: supervised & unsupervised",
    "Model evaluation, metrics, and fair comparison",
    "Lightweight MLOps: environments, reproducibility, deploy",
  ];

  const OUTCOMES: { k: string; v: string; cls: string }[] = [
    { k: "Career Paths", v: "Data Analyst • ML Engineer • Data Scientist", cls: "bg-lime-50 text-lime-900 border-lime-200" },
    { k: "Toolchain", v: "Python • NumPy • Pandas • scikit-learn", cls: "bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200" },
    { k: "Deliverables", v: "3+ portfolio projects with docs & demos", cls: "bg-cyan-50 text-cyan-900 border-cyan-200" },
  ];

  return (
    <section id="why-ml" aria-labelledby="why-ml-heading" className="relative overflow-hidden py-10 bg-white">
      {/* Subtle futuristic frame (thin grid + soft mask; not a heavy gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 id="why-ml-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Advanced Data Science: <span className="text-DS">A Complete Overview</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-slate-700 mx-auto max-w-4xl">
          {subtitle}
        </p>
        {/* Assist crawlers */}
        <p className="sr-only">{keywords}</p>

        {/* Program highlights chips (unique colors, no repeats) */}
        <div className="mt-8 grid max-w-4xl mx-auto grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {CHIPS.map((c) => (
            <span
              key={c.label}
              className={[
                "rounded-xl border px-3 py-2 text-xs font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
                c.cls,
              ].join(" ")}
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* Main description (SEO-friendly, concise, readable) */}
        <p className="mt-8 text-sm md:text-base text-slate-700 mx-auto max-w-5xl leading-relaxed">
          This <strong>Hero Program</strong> blends theory with practice so you can confidently analyze data, build models, and
          ship real demos. You’ll learn to structure datasets, visualize insights, apply <strong>statistical reasoning</strong>,
          and implement <strong>machine learning algorithms</strong> in <strong>Python</strong>. Each module ends with a guided
          mini-project and code review to ensure you’re <strong>job-ready</strong> for data-driven roles.
        </p>

        {/* Two-column content: Curriculum bullets + Outcomes tiles */}
        <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
          {/* Left: bullets */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-slate-900">What You’ll Learn</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm md:text-base text-slate-700">
              {BULLETS.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-slate-900" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: outcomes tiles (unique accents) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <div
                key={o.k}
                className={[
                  "rounded-2xl border p-5 shadow-sm",
                  o.cls,
                ].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-wide">{o.k}</p>
                <p className="mt-1 text-base md:text-lg font-bold">{o.v}</p>
              </div>
            ))}
            {/* Wide card spanning full width for reassurance */}
            <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-700">
                Includes mentor guidance, interview prep, resume & LinkedIn polishing, and{" "}
                <strong>placement assistance</strong> for relevant roles.
              </p>
              <div className="mt-3 h-1 w-full rounded-full bg-slate-100">
                <div className="h-1 w-3/4 rounded-full bg-slate-900" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
            aria-label="Apply to the Machine Learning & Data Science program"
          >
            Apply Now
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Download the full program syllabus"
          >
            Download Syllabus (PDF)
          </button>
        </div>

        {/* Footnote for expectations */}
        <p className="mt-4 text-[11px] text-slate-500">
          *Outcomes depend on practice, project quality, and interview performance.
        </p>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - Why ML Section - Apply Now"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - Why ML Section - Machine Learning and Data Science with Python - Download Syllabus"
      />

    </section>
  );
}

// components/sections/StatsSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

type Stat = {
  // ... (keep Stat type)
  valueLabel: string;
  label: string;
  hint?: string;
  target: number;
  suffix?: string;
  format?: "comma" | "plain";
  accent: {
    bar: string;
    border: string;
    text: string;
    chip: string;
    ring: string;
  };
};

// ... (keep STATS array)
const STATS: Stat[] = [
  {
    valueLabel: "25%",
    label: "Market Growth (2020–2030)",
    hint: "AI adoption accelerating",
    target: 25,
    suffix: "%",
    format: "plain",
    accent: {
      bar: "bg-purple-500",
      border: "border-purple-200",
      text: "text-purple-700",
      chip: "bg-purple-50",
      ring: "focus:ring-purple-300",
    },
  },
  {
    valueLabel: "101,000+",
    label: "Job Vacancies in India",
    hint: "Across DA • DS • ML",
    target: 101_000,
    suffix: "+",
    format: "comma",
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      chip: "bg-amber-50",
      ring: "focus:ring-amber-300",
    },
  },
  {
    valueLabel: "9 LPA",
    label: "Data Science Freshers’ Average Salary",
    hint: "City & role dependent",
    target: 9,
    suffix: " LPA",
    format: "plain",
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      chip: "bg-emerald-50",
      ring: "focus:ring-emerald-300",
    },
  },
  {
    valueLabel: "75%",
    label: "Job Satisfaction",
    hint: "Impactful problem-solving",
    target: 75,
    suffix: "%",
    format: "plain",
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      chip: "bg-rose-50",
      ring: "focus:ring-rose-300",
    },
  },
  {
    valueLabel: "32%",
    label: "India’s Global Market Share",
    hint: "Services • Product • Startups",
    target: 32,
    suffix: "%",
    format: "plain",
    accent: {
      bar: "bg-indigo-500",
      border: "border-indigo-200",
      text: "text-indigo-700",
      chip: "bg-indigo-50",
      ring: "focus:ring-indigo-300",
    },
  },
];

// ... (keep useInView, formatNumber, CountUpValue)
/** ---------- FIXED: accept nullable, generic Element refs ---------- */
function useInView<T extends Element>(
  ref: React.RefObject<T | null>,
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.35, ...(options || {}) }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);

  return inView;
}

function formatNumber(n: number, format: Stat["format"]) {
  return format === "comma" ? n.toLocaleString() : String(n);
}

const CountUpValue: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  format?: Stat["format"];
  start?: boolean;
}> = ({ target, duration = 1300, suffix = "", format = "plain", start = false }) => {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setVal(0);
    startTimeRef.current = null;

    const step = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = Math.round(target * eased);
      setVal(current);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return (
    <span>
      {formatNumber(val, format)}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  /** ---------- FIXED: ref typed as HTMLElement | null ---------- */
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const seoKeywords =
    "advanced data science course, machine learning training, data analyst salary India, data science jobs, python ml program, ai career growth, ml engineer placement assistance";


  return (
    <section
      ref={sectionRef}
      id="dsml-stats"
      aria-labelledby="dsml-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* ... (keep background) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(147,51,234,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep header and grid) */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="dsml-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why <span className="text-DS">Advanced Data Science & ML</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Data Science fuels <strong>products, operations, and strategy</strong>. Build
            <strong> Python</strong>/<strong>SQL</strong>/<strong>ML</strong> skills with mentor-led projects and
            recruiter-ready outcomes.
          </p>
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Stats grid */}
        <div
          role="list"
          aria-label="Program highlights statistics"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STATS.map((s) => (
            <article
              key={s.label}
              role="listitem"
              tabIndex={0}
              className={[
                "group relative rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                s.accent.border,
                s.accent.ring,
                "focus:outline-none focus:ring-2",
              ].join(" ")}
            >
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", s.accent.bar].join(" ")} aria-hidden />

              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
              <div className={["mt-3 text-4xl font-extrabold tracking-tight", s.accent.text].join(" ")}>
                <CountUpValue
                  target={s.target}
                  suffix={s.suffix}
                  format={s.format}
                  start={inView}
                  duration={1200}
                />
              </div>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-800">{s.label}</p>

              {s.hint && (
                <div
                  className={[
                    "mx-auto mt-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border",
                    s.accent.border,
                    s.accent.chip,
                    "text-slate-800",
                  ].join(" ")}
                >
                  {s.hint}
                </div>
              )}

              <div className="mt-5 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                <div
                  className={[
                    "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                    s.accent.bar,
                    "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  ].join(" ")}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-left">
            <p className="text-sm text-slate-700">
              Master <strong>dashboards</strong>, <strong>experimentation</strong>, and{" "}
              <strong>ML pipelines</strong>-target roles like <strong>Data Analyst</strong>,{" "}
              <strong>Data Scientist</strong>, and <strong>ML Engineer</strong>.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">
              *Figures are indicative and vary by location, skills, and industry.
            </p>
          </div>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-200 whitespace-nowrap"
          >
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - Stats Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

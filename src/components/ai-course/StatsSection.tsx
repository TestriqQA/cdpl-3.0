"use client";

import React, { useEffect, useRef, useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import { Download } from "lucide-react";

/** ---------- Types ---------- */
type Stat = {
  // Display/UX
  label: string;
  hint?: string;
  accent: {
    bar: string;     // top bar color
    border: string;  // card border
    text: string;    // value color
    chip: string;    // hint chip bg
    ring: string;    // focus ring
  };
  // Count-up number pieces
  end: number;           // numeric target used for counting
  prefix?: string;       // optional prefix like "₹"
  suffix?: string;       // optional suffix like "%" or " LPA" or "+"
  // Accessibility
  aria?: string;
};

/** ---------- Stats extracted from the PDF ---------- */
/*
  Page 5:
    - 25% Market growth (2020–2030)
    - 101,000+ Job Vacancies in India
    - 9 LPA Data Scientist freshers’ average salary
    - 75% Job Satisfaction
    - 32% India’s share in the global market
  Page 1 & 9:
    - 255+ Hours / 9 Months (Program Duration)
*/
const STATS: Stat[] = [
  {
    label: "Market Growth (2020–2030)",
    hint: "AI adoption accelerating",
    end: 25,
    suffix: "%",
    aria: "Twenty five percent market growth from 2020 to 2030",
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
  {
    label: "Job Vacancies in India",
    hint: "DA • DS • ML roles",
    end: 101000,
    suffix: "+",
    aria: "One hundred one thousand plus job vacancies in India",
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },
  {
    label: "Average Fresher Salary",
    hint: "City & role dependent",
    prefix: "₹",
    end: 9,
    suffix: " LPA",
    aria: "Average fresher salary is nine LPA",
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    label: "Job Satisfaction",
    hint: "Impactful problem-solving",
    end: 75,
    suffix: "%",
    aria: "Seventy five percent job satisfaction",
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    label: "India’s Global Market Share",
    hint: "Services • Product • Startups",
    end: 32,
    suffix: "%",
    aria: "India's share in the global market is thirty two percent",
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
  },
  {
    label: "Program Duration",
    hint: "Projects + mentorship",
    end: 255,
    suffix: "+ Hours",
    aria: "Program duration is two hundred fifty five plus hours",
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
];

/** ---------- Helpers ---------- */
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}

function formatValue(value: number, s: Stat): string {
  // Special case: keep integers for LPA/hours; whole numbers for percentages.
  const display = Number.isInteger(s.end) ? Math.round(value) : value;
  const base = s.end >= 1000 ? formatNumber(display) : String(display);
  return `${s.prefix ?? ""}${base}${s.suffix ?? ""}`;
}

/** ---------- Component ---------- */
export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [values, setValues] = useState<number[]>(() => STATS.map(() => 0));
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";

  const seoKeywords =
    "comprehensive data science and ai course, machine learning training india, data science jobs, fresher salary ds ml, ai market growth, 255 hour data science program, mentor led projects";


  // Observe section once; animate all stats together on first reveal
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasRevealed) {
          setHasRevealed(true);
        }
      },
      { root: null, threshold: 0.25 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [hasRevealed]);

  // Animate values when revealed
  useEffect(() => {
    if (!hasRevealed) return;

    const duration = 1200; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = easeOutCubic(t);

      setValues(
        STATS.map((s) => {
          const next = s.end * eased;
          return next;
        })
      );

      if (t < 1) requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasRevealed]);

  return (
    <section
      ref={sectionRef}
      id="comprehensive-dsai-stats"
      aria-labelledby="dsai-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (fine grid + soft indigo glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(79,70,229,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="dsai-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why <span className="text-DS">Comprehensive Data Science & AI</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Equip yourself for tomorrow’s roles with <strong>Python</strong>, <strong>ML</strong>,{" "}
            <strong>DL</strong>, and <strong>data engineering</strong> foundations-delivered via mentor-led,
            project-first learning.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Stats grid */}
        <div
          role="list"
          aria-label="Program highlights statistics"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              role="listitem"
              tabIndex={0}
              aria-label={s.aria ?? `${s.label} ${s.end}`}
              className={[
                "group relative rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                s.accent.border,
                s.accent.ring,
                "focus:outline-none focus:ring-2",
              ].join(" ")}
            >
              {/* top accent bar */}
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", s.accent.bar].join(" ")} aria-hidden />

              {/* value + label */}
              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
              <div className={["mt-3 text-4xl font-extrabold tracking-tight", s.accent.text].join(" ")}>
                {formatValue(values[idx], s)}
              </div>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-800">{s.label}</p>

              {/* hint chip (optional) */}
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

              {/* micro-interaction underline */}
              <div className="mt-5 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                <div
                  className={[
                    "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                    s.accent.bar,
                    "group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  ].join(" ")}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Build a <strong>recruiter-ready portfolio</strong> with dashboards, models, and pipelines-imed at{" "}
            <strong>Data Analyst</strong>, <strong>Data Scientist</strong>, and <strong>ML Engineer</strong> roles.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Syllabus (PDF)
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">
            *Figures are indicative and vary by location, skills, and industry.
          </p>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Comprehensive Data Science & AI - Stats Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

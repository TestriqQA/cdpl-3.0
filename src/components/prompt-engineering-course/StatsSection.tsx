// components/sections/StatsSection.tsx
// Client component — clean, modern, responsive stats with subtle futuristic accents (Prompt Engineering edition).
// Animates numbers from 0 when this section scrolls into view (first time only).

"use client";

import React, { useEffect, useRef, useState } from "react";

/** ---------- Types ---------- */
type NumericStat = {
  kind: "number";
  value: number;
  suffix?: string; // e.g., "%", "+", " Hours", " LPA", " Years", etc.
};

type RatioStat = {
  kind: "ratio";
  left: number;
  right: number;
  separator?: string; // default " : "
};

type Stat = {
  data: NumericStat | RatioStat;
  label: string;
  hint?: string;
  accent: {
    bar: string; // top bar
    border: string; // card border
    text: string; // value color
    chip: string; // hint chip bg
    ring: string; // focus ring
  };
};

/** ---------- Stats from the PDF ----------
 * Sources:
 * - Page 1: Duration "20 Hours"
 * - Page 3: "80:20 Approach", "1:1 Doubt Solving", "Global Certification (AAA)", "Job Assistance", "14+ Years of Expertise"
 * - Page 6: "25% Market growth (2020–2030)", "101,000+ Job Vacancies in India", "4 LPA Freshers’ average salary", "75% Job Satisfaction", "32% India’s share in the global market"
 */
const STATS: Stat[] = [
  {
    data: { kind: "number", value: 20, suffix: " Hours" },
    label: "Program Duration",
    hint: "From brochure — Page 1",
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      chip: "bg-emerald-50",
      ring: "focus:ring-emerald-300",
    },
  },
  {
    data: { kind: "ratio", left: 80, right: 20, separator: " : " },
    label: "Practical : Theory",
    hint: "80:20 approach — Page 3",
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      chip: "bg-amber-50",
      ring: "focus:ring-amber-300",
    },
  },
  {
    data: { kind: "number", value: 1, suffix: " : 1" },
    label: "Doubt Solving",
    hint: "Personalised support — Page 3",
    accent: {
      bar: "bg-indigo-500",
      border: "border-indigo-200",
      text: "text-indigo-700",
      chip: "bg-indigo-50",
      ring: "focus:ring-indigo-300",
    },
  },
  {
    data: { kind: "number", value: 100, suffix: "%" },
    label: "Job Assistance",
    hint: "Placement support — Page 3",
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      chip: "bg-rose-50",
      ring: "focus:ring-rose-300",
    },
  },
  {
    data: { kind: "number", value: 14, suffix: "+ Years" },
    label: "Mentor Expertise",
    hint: "Experience — Page 3",
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      chip: "bg-violet-50",
      ring: "focus:ring-violet-300",
    },
  },
  {
    data: { kind: "number", value: 0, suffix: " AAA" },
    label: "Global Certification",
    hint: "AAA certificates — Page 3",
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      chip: "bg-sky-50",
      ring: "focus:ring-sky-300",
    },
  },
  {
    data: { kind: "number", value: 25, suffix: "%" },
    label: "Market Growth (2020–2030)",
    hint: "Industry outlook — Page 6",
    accent: {
      bar: "bg-purple-500",
      border: "border-purple-200",
      text: "text-purple-700",
      chip: "bg-purple-50",
      ring: "focus:ring-purple-300",
    },
  },
  {
    data: { kind: "number", value: 101000, suffix: "+" },
    label: "Job Vacancies in India",
    hint: "Open roles — Page 6",
    accent: {
      bar: "bg-emerald-600",
      border: "border-emerald-200",
      text: "text-emerald-700",
      chip: "bg-emerald-50",
      ring: "focus:ring-emerald-300",
    },
  },
  {
    data: { kind: "number", value: 4, suffix: " LPA" },
    label: "Freshers’ Avg Salary",
    hint: "Salary indicator — Page 6",
    accent: {
      bar: "bg-amber-600",
      border: "border-amber-200",
      text: "text-amber-700",
      chip: "bg-amber-50",
      ring: "focus:ring-amber-300",
    },
  },
];

/** ---------- Utilities ---------- */
function formatNumber(n: number): string {
  // Human-friendly formatting (e.g., 101000 -> 101,000)
  return new Intl.NumberFormat().format(n);
}

/** Count-up hook */
function useCountUp(shouldStart: boolean, target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!shouldStart) return;
    // reset then animate
    setValue(0);
    startRef.current = null;

    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldStart, target, duration]);

  return value;
}

/** Intersection observer to start animation when section becomes visible */
function useSectionInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.15, ...(options || {}) }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

/** ---------- UI ---------- */
export default function StatsSection() {
  const { ref: sectionRef, inView } = useSectionInView<HTMLElement>();

  const seoKeywords =
    "prompt engineering course, gen ai training, llm prompting patterns, guardrails and safety, chatgpt enterprise skills, ai automation workflows, llm evaluation, job assistance ai roles";

  return (
    <section
      id="pe-stats"
      aria-labelledby="pe-stats-heading"
      className="relative py-10 bg-white"
      ref={sectionRef}
    >
      {/* Subtle futuristic backdrop (fine grid + soft top glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(34,197,94,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="pe-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why <span className="text-DS">Prompt Engineering with Gen AI</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            These highlights are extracted from your official brochure (see pages 1, 3 and 6) and presented with
            live counters for quick scanning.
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
              {/* top accent bar */}
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", s.accent.bar].join(" ")} aria-hidden />

              {/* micro halo */}
              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
              <div className={["mt-3 text-4xl font-extrabold tracking-tight", s.accent.text].join(" ")}>
                {s.data.kind === "ratio" ? (
                  <RatioValue left={s.data.left} right={s.data.right} separator={s.data.separator} start={inView} />
                ) : (
                  <CountValue target={s.data.value} suffix={s.data.suffix} start={inView} />
                )}
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

              {/* underline progress */}
              <div className="mt-5 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                <div
                  className={[
                    "h-1 w-1/2 origin-left rounded-full transition-transform duration-500 ease-out",
                    inView ? "scale-x-100" : "scale-x-0",
                    s.accent.bar,
                  ].join(" ")}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Learn <strong>prompt design</strong> for <strong>chat, tools, RAG</strong>, and{" "}
            <strong>workflow automation</strong> with <strong>LLM evaluation</strong> and{" "}
            <strong>safety-by-design</strong>. Target roles: <strong>Prompt Engineer</strong>,{" "}
            <strong>AI Automations Specialist</strong>, <strong>Applied AI</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Outcomes vary by prior experience, pace, and project depth.</p>
        </div>
      </div>

    </section>
  );
}

/** ---------- Value renderers ---------- */
function CountValue({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) {
  const display = useCountUp(start, target, 1200);
  // Special-case: "AAA" uses 0 + " AAA" to show label as text while still animating (0..0)
  const isAAA = suffix.trim().toUpperCase() === "AAA";
  if (isAAA) return <span>{suffix.trim()}</span>;
  return (
    <span>
      {formatNumber(display)}
      {suffix}
    </span>
  );
}

function RatioValue({
  left,
  right,
  separator = " : ",
  start,
}: {
  left: number;
  right: number;
  separator?: string;
  start: boolean;
}) {
  const l = useCountUp(start, left, 1200);
  const r = useCountUp(start, right, 1200);
  return (
    <span>
      {formatNumber(l)}
      {separator}
      {formatNumber(r)}
    </span>
  );
}

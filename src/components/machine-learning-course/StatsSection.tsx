// components/sections/StatsSection.tsx
// Updated with stats extracted from the PDF (pg 6) and scroll-triggered animations.
// - Numbers count up from 0 on first reveal
// - Progress bars animate from 0% to their target on reveal (no dynamic Tailwind class generation)

"use client";

import React, { useEffect, useRef, useState } from "react";

type Stat = {
  // Display/UX
  label: string;
  aria: string;
  bg: string;
  text: string;
  border: string;
  ring: string;
  // Count-up number pieces
  end: number;           // numeric target used for counting
  prefix?: string;       // optional prefix like "₹"
  suffix?: string;       // optional suffix like "%" or " LPA" or "+"
  // Progress fill
  targetPct: string;     // e.g., "80%" — visual only
  fill: string;          // explicit bg-* utility for the progress fill (no JIT issues)
};

const STATS: Stat[] = [
  {
    // 25% Market growth (2020–2030)
    label: "Market growth (2020–2030)",
    aria: "Twenty five percent market growth from 2020 to 2030",
    bg: "bg-purple-50",
    text: "text-purple-900",
    border: "border-purple-200",
    ring: "focus:ring-purple-300",
    end: 25,
    suffix: "%",
    targetPct: "80%",
    fill: "bg-purple-600",
  },
  {
    // 101,000+ Job Vacancies in India
    label: "Job Vacancies in India",
    aria: "Over one hundred one thousand job vacancies in India",
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    ring: "focus:ring-amber-300",
    end: 101000,
    suffix: "+",
    targetPct: "76%",
    fill: "bg-amber-600",
  },
  {
    // 9 LPA Data Science freshers’ average salary
    label: "Data Science freshers’ average salary",
    aria: "Nine L P A average fresher salary in data science",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    ring: "focus:ring-emerald-300",
    end: 9,
    suffix: " LPA",
    targetPct: "72%",
    fill: "bg-emerald-600",
  },
  {
    // 75% Job Satisfaction
    label: "Job Satisfaction",
    aria: "Seventy five percent job satisfaction",
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-200",
    ring: "focus:ring-rose-300",
    end: 75,
    suffix: "%",
    targetPct: "78%",
    fill: "bg-rose-600",
  },
  {
    // 32% India’s share in the global market
    label: "India’s share in the global market",
    aria: "Thirty two percent India share in the global market",
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    ring: "focus:ring-indigo-300",
    end: 32,
    suffix: "%",
    targetPct: "74%",
    fill: "bg-indigo-600",
  },
];

// ---- helpers ----
function formatNumber(n: number) {
  return n.toLocaleString("en-IN");
}

function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealed]);

  return { ref, revealed };
}

function useCountUp(target: number, run: boolean, durationMs = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, run, durationMs]);
  return val;
}

// Child component so hooks aren't called inside a loop/callback
function StatCard({ stat, revealed }: { stat: Stat; revealed: boolean }) {
  const counted = useCountUp(stat.end, revealed, 1200);
  const display =
    stat.suffix === "+"
      ? `${formatNumber(counted)}+`
      : `${stat.prefix ?? ""}${formatNumber(counted)}${stat.suffix ?? ""}`;

  return (
    <div
      role="listitem"
      aria-label={stat.aria}
      tabIndex={0}
      className={[
        "group rounded-2xl border p-6 text-center shadow-sm backdrop-blur transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
        stat.bg,
        stat.border,
        stat.ring,
      ].join(" ")}
    >
      {/* top accent */}
      <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />
      <p className={["mt-3 text-4xl font-extrabold tabular-nums", stat.text].join(" ")}>
        {display}
      </p>
      <p className="mt-1 text-sm md:text-base font-medium text-slate-700">{stat.label}</p>

      {/* Progress track */}
      <div className="mt-4 relative h-1 w-full rounded-full bg-slate-100" aria-hidden>
        <div
          className="absolute left-0 top-0 h-1 overflow-hidden rounded-full transition-all duration-700 ease-out"
          style={{ width: revealed ? stat.targetPct : "0%" }}
        >
          <div className={["h-1 w-full", stat.fill].join(" ")} />
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const subtitle =
    "Data is the new oil-and Python is the engine powering AI, analytics, and automation across industries.";
  const keywords =
    "machine learning market growth, data science jobs India, data analyst salary, ML career trends, Python analytics demand";

  const { ref: sectionRef, revealed } = useRevealOnce<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="ml-stats"
      aria-labelledby="ml-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-60">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#eeeeee_0_14px,transparent_14px_28px)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="ml-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Invest in <span className="text-DS">Machine Learning</span> &{" "}
            <span className="text-DS">Data Science</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Stats grid */}
        <div
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Key industry statistics"
        >
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} revealed={revealed} />
          ))}
        </div>

        {/* Trust & context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Growing adoption across <strong>FinTech, Healthcare, Retail, and SaaS</strong> is accelerating demand for{" "}
            <strong>Python-first ML engineers, data analysts, and MLOps practitioners</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">
            *Figures are sourced from the program brochure and are indicative; they may vary by role, skills, and location.
          </p>
        </div>
      </div>

    </section>
  );
}

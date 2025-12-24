// components/sections/StatsSection.tsx
// Client component — clean, modern, responsive stats with scroll-triggered count-up.

"use client";

import React from "react";

/* -------------------- Helpers -------------------- */
function useInViewOnce(ref: React.RefObject<HTMLElement>, rootMargin = "0px") {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, ref, rootMargin]);
  return inView;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function useCountUp(target: number, start: boolean, durationMs = 1400) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - t0) / durationMs);
      setVal(Math.round(target * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs]);
  return val;
}

function formatNumber(n: number, opts?: { withPlus?: boolean }) {
  const s = n.toLocaleString();
  return opts?.withPlus ? `${s}+` : s;
}

/* -------------------- Types & Data -------------------- */
type Accent = {
  bar: string;
  border: string;
  text: string;
  chip: string;
  ring: string;
};

type StatBase = {
  label: string;
  hint?: string;
  accent: Accent;
};

type SingleNumber = StatBase & {
  kind: "single";
  target: number;
  suffix?: string; // "%", " Hours", "+"
};

type RatioNumber = StatBase & {
  kind: "ratio";
  leftTarget: number;
  rightTarget: number;
};

type NonNumeric = StatBase & {
  kind: "text";
  value: string;
};

type Stat = SingleNumber | RatioNumber | NonNumeric;

// NOTE: these values are the PDF-extracted stats you requested.
const STATS: Stat[] = [
  {
    kind: "single",
    target: 110,
    suffix: " Hours",
    label: "Program Duration",
    hint: "4 Months • Hybrid",
    accent: {
      bar: "bg-orange-500",
      border: "border-orange-200",
      text: "text-orange-700",
      chip: "bg-orange-50",
      ring: "focus:ring-orange-300",
    },
  },
  {
    kind: "ratio",
    leftTarget: 80,
    rightTarget: 20,
    label: "Practical : Theory",
    hint: "Industry-Rich Experience",
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      chip: "bg-amber-50",
      ring: "focus:ring-amber-300",
    },
  },
  {
    kind: "single",
    target: 14,
    suffix: "+ Years",
    label: "Team Expertise",
    hint: "Mentor-led • Industry Aligned",
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      chip: "bg-emerald-50",
      ring: "focus:ring-emerald-300",
    },
  },
  {
    kind: "single",
    target: 100,
    suffix: "%",
    label: "Job Assistance",
    hint: "Resume • Mock Interviews • Referrals",
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      chip: "bg-rose-50",
      ring: "focus:ring-rose-300",
    },
  },
  {
    kind: "single",
    target: 101000,
    suffix: "+",
    label: "Data Analyst Jobs (India)",
    hint: "Open Roles Across Sectors",
    accent: {
      bar: "bg-indigo-500",
      border: "border-indigo-200",
      text: "text-indigo-700",
      chip: "bg-indigo-50",
      ring: "focus:ring-indigo-300",
    },
  },
  {
    kind: "single",
    target: 25,
    suffix: "% CAGR",
    label: "Market Growth (2020–2030)",
    hint: "Data/Analytics Industry",
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      chip: "bg-violet-50",
      ring: "focus:ring-violet-300",
    },
  },
];

/* -------------------- Component -------------------- */
export default function StatsSection() {
  const sectionRef = React.useRef<HTMLElement>(null!); // non-null assertion to match hook signature
  const inView = useInViewOnce(sectionRef, "120px");

  const seoKeywords =
    "advanced data analytics course, business analytics training, python sql bi ml, job assistance data analyst, hands-on analytics program, dashboard reporting, power bi tableau excel";

  return (
    <section
      ref={sectionRef}
      id="ada-stats"
      aria-labelledby="ada-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="ada-stats-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Why <span className="text-DS">Advanced Data Analytics</span>?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Data analytics drives <strong>profitability, forecasting, and decisions</strong> in 2025. Join our mentor-led{" "}
            <strong>Advanced Data Analytics</strong> program to build <strong>Python, SQL, BI, and ML</strong> skills with
            <strong> real projects</strong> and placement support.
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
              {/* top accent bar */}
              <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", s.accent.bar].join(" ")} aria-hidden />

              {/* capsule behind number */}
              <div className="mx-auto h-1 w-14 rounded-full bg-white/80" aria-hidden />

              {/* value */}
              <div className={["mt-3 text-4xl font-extrabold tracking-tight", s.accent.text].join(" ")}>
                {s.kind === "single" && <AnimatedNumber target={s.target} inView={inView} suffix={s.suffix} />}
                {s.kind === "ratio" && (
                  <span className="inline-flex items-baseline gap-1">
                    <AnimatedNumber target={s.leftTarget} inView={inView} />
                    <span className="mx-0.5 text-slate-400">:</span>
                    <AnimatedNumber target={s.rightTarget} inView={inView} />
                  </span>
                )}
                {s.kind === "text" && s.value}
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

        {/* Context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Master <strong>dashboards & reporting</strong> (Power BI/Tableau), <strong>SQL for analytics</strong>,{" "}
            <strong>feature engineering</strong>, and <strong>ML for business</strong> with <strong>career support</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Outcomes vary by prior experience, pace, and project depth.</p>
        </div>
      </div>

    </section>
  );
}

/* -------------------- UI bits -------------------- */
function AnimatedNumber({
  target,
  inView,
  suffix,
}: {
  target: number;
  inView: boolean;
  suffix?: string;
}) {
  const val = useCountUp(target, inView);
  // Place a space before suffix only when it's a word (not "%" or "+")
  const needsSpace = !!suffix && !["%", "+"].includes(suffix.trim());
  const display =
    (suffix?.trim() === "+"
      ? formatNumber(val, { withPlus: true })
      : formatNumber(val)) + (suffix ? (needsSpace ? ` ${suffix}` : suffix) : "");
  return <>{display}</>;
}

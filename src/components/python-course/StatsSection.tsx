// components/sections/StatsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

/** ---------- Types ---------- */
type Stat = {
  value: string;     // formatted display (e.g., "101,000+")
  numeric: number;   // target number for animation (e.g., 101000)
  suffix?: string;   // optional suffix to append (e.g., "+", " LPA", "%")
  label: string;
  caption: string;
  bg: string;    // soft background
  text: string;  // strong text color for contrast
  ring: string;  // focus ring color
  bar: string;   // thin accent bar color
  aria?: string; // screen-reader label
};

/** ---------- Stats from PDF (pg 7) ---------- */
const STATS: Stat[] = [
  {
    value: "25%",
    numeric: 25,
    suffix: "%",
    label: "Market Growth (2020–2030)",
    caption: "Expanding opportunities over the decade",
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "focus:ring-sky-300",
    bar: "bg-sky-300",
    aria: "Market growth from 2020 to 2030 is 25 percent",
  },
  {
    value: "101,000+",
    numeric: 101000,
    suffix: "+",
    label: "Job Vacancies in India",
    caption: "Open roles across industries and regions",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "focus:ring-emerald-300",
    bar: "bg-emerald-300",
    aria: "Over 101,000 Python job vacancies in India",
  },
  {
    value: "6 LPA",
    numeric: 6,
    suffix: " LPA",
    label: "Fresher Average Salary",
    caption: "Typical entry-level compensation",
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "focus:ring-amber-300",
    bar: "bg-amber-300",
    aria: "Average fresher salary is six lakhs per annum",
  },
  {
    value: "75%",
    numeric: 75,
    suffix: "%",
    label: "Job Satisfaction",
    caption: "Strong satisfaction among professionals",
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "focus:ring-violet-300",
    bar: "bg-violet-300",
    aria: "Job satisfaction is seventy five percent",
  },
  {
    value: "32%",
    numeric: 32,
    suffix: "%",
    label: "India’s Global Share",
    caption: "Share in the global market",
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "focus:ring-rose-300",
    bar: "bg-rose-300",
    aria: "India's share in the global market is thirty two percent",
  },
];

/** ---------- CountUp (scroll-activated) ---------- */
function useInViewOnce(ref: React.RefObject<Element | null>, rootMargin = "0px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.2 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, inView, rootMargin]); // <-- include ref to satisfy react-hooks/exhaustive-deps

  return inView;
}

function formatNumber(n: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);
}

function CountUp({
  to,
  duration = 1400,
  suffix = "",
  prefix = "",
  startWhenVisibleRef,
  format = "int", // "int" | "float"
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  startWhenVisibleRef: React.RefObject<Element | null>;
  format?: "int" | "float";
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const inView = useInViewOnce(startWhenVisibleRef, "0px");

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = to * eased;
      setVal(current);
      if (t < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const display =
    format === "float"
      ? `${prefix}${val.toFixed(1)}${suffix}`
      : `${prefix}${formatNumber(Math.round(val))}${suffix}`;

  return <span aria-hidden="true">{display}</span>;
}

/** ---------- Component ---------- */
export default function StatsSection() {


  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="python-stats"
      aria-labelledby="python-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2
            id="python-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Python Stats – <span className="text-teal-600">Clear & Impactful</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Snapshot of the market and careers pulled from the program brochure.
          </p>
        </header>

        {/* Stat cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
          {STATS.map((s) => (
            <div
              key={s.label}
              role="group"
              aria-label={s.aria ?? s.label}
              className={[
                "rounded-2xl border border-slate-200 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
                "transition hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                s.ring,
                s.bg,
              ].join(" ")}
            >
              {/* top accent bar */}
              <div className={["h-1.5 w-full rounded-t-2xl", s.bar].join(" ")} aria-hidden />

              <div className="p-6">
                <div className={["text-xl md:text-4xl font-extrabold tracking-tight", s.text].join(" ")}>
                  {/* Animated number */}
                  <CountUp
                    to={s.numeric}
                    suffix={s.suffix}
                    startWhenVisibleRef={sectionRef as React.RefObject<Element | null>}
                  />
                </div>
                <div className="mt-2 text-base sm:text-lg font-semibold text-slate-800">
                  {s.label}
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">{s.caption}</p>
                {/* Visually hidden final value for screen readers */}
                <span className="sr-only">{s.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting line */}
        <p className="mt-8 max-w-4xl mx-auto text-center text-sm sm:text-base text-slate-600">
          From <strong>automation & APIs</strong> to <strong>data science & AI</strong>, Python’s
          ecosystem unlocks multiple high-growth career paths with strong hiring demand.
        </p>
      </div>

    </section>
  );
}

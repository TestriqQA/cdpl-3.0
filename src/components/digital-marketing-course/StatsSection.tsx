// components/sections/StatsSection.tsx
// Client component with scroll-triggered count-up animation.

"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number; // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  ariaLabel?: string;
  formatter?: (n: number) => string;
  startOnVisible?: boolean;
};

function useVisibleOnce<T extends Element>(rootMargin = "0px 0px -20% 0px") {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible, rootMargin]);

  return { ref, visible };
}

function CountUp({
  end,
  duration = 1500,
  decimals = 0,
  prefix = "",
  suffix = "",
  ariaLabel,
  formatter,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const startTs = useRef<number | null>(null);
  const { ref, visible } = useVisibleOnce<HTMLSpanElement>();

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const animate = (ts: number) => {
      if (startTs.current === null) startTs.current = ts;
      const elapsed = ts - startTs.current;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(end * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [visible, duration, end]);

  const display =
    formatter?.(value) ??
    `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} aria-label={ariaLabel}>
      {display}
    </span>
  );
}

export default function StatsSection() {
  // PDF sources:
  // - Market size: “$ 671.86 Billion — Global digital marketing market by 2028” (page 4)
  // - High-income skill rank: “4th Most High Income Skill to learn in 2024 (Forbes)” (page 4)
  // - In-demand rank: “#3 Most In Demand Skill (Michael Page Salary Guide 2023)” (page 4)
  // - Global jobs: “141,000+ Digital marketing jobs are available worldwide” (page 6)
  // :contentReference[oaicite:1]{index=1}



  // Helpers for nice formatting
  const formatBillion = (n: number) =>
    `$${n.toFixed(2)} B`;

  return (
    <section
      id="dm-stats"
      aria-labelledby="dm-stats-heading"
      className="relative py-10 bg-gradient-to-b from-white to-blue-50"
    >
      {/* Subtle futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="dm-stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Is <span className="text-green-700">Digital Marketing</span> a Smart Career Choice?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            The field evolves fast—<strong>grow with the latest AI, analytics, and performance skills</strong>.
          </p>
        </header>

        {/* Cards */}
        <dl
          className="
            mt-10 grid gap-5 sm:gap-6
            grid-cols-1 md:grid-cols-3
            max-w-5xl mx-auto
          "
        >
          {/* Card 1 — $671.86B by 2028 (PDF p.4) */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-orange-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-orange-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-orange-300
              "
            />
            <dt className="sr-only">Market Size</dt>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-orange-600">
              <CountUp
                end={671.86}
                decimals={2}
                prefix="$"
                suffix=" B"
                ariaLabel="Six hundred seventy one point eight six billion dollars"
                formatter={formatBillion}
              />
            </div>
            <dd className="mt-2 text-slate-700">
              Global digital marketing market by <span className="font-medium">2028</span>
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Source highlighted in the program brochure
            </p>
          </div>

          {/* Card 2 — 4th Most High-Income Skill (PDF p.4) */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-yellow-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-yellow-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-yellow-300
              "
            />
            <dt className="sr-only">High-Income Skill Rank</dt>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-yellow-600">
              {/* animate number then append ordinal text */}
              <CountUp end={4} ariaLabel="Fourth" />th Most High-Income Skill
            </div>
            <dd className="mt-2 text-slate-700">
              Recommended to learn in <span className="font-medium">2024</span> (Forbes)
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Recognition for lucrative, future-proof upskilling
            </p>
          </div>

          {/* Card 3 — #3 Most In-Demand Skill (PDF p.4) */}
          <div
            role="listitem"
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-emerald-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-emerald-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-emerald-300
              "
            />
            <dt className="sr-only">Demand Ranking</dt>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-600">
              #<CountUp end={3} ariaLabel="Three" /> Most In-Demand Skill
            </div>
            <dd className="mt-2 text-slate-700">
              Cited in <span className="font-medium">Michael Page Salary Guide 2023</span>
            </dd>
            <p className="mt-3 text-xs text-slate-500">
              Consistent hiring demand across industries
            </p>
          </div>
        </dl>

        {/* Optional: add a 4th card row for jobs (PDF p.6) */}
        <div className="mt-5 sm:mt-6 max-w-5xl mx-auto">
          <div
            className="
              group relative rounded-2xl border p-7 sm:p-8 text-center shadow-sm
              bg-white border-sky-100
              transition
              hover:shadow-md
              focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-300
            "
          >
            <span
              aria-hidden
              className="
                absolute left-6 right-6 top-0 h-1.5 rounded-b-full
                bg-sky-200
                transition-all duration-300
                group-hover:left-4 group-hover:right-4 group-hover:bg-sky-300
              "
            />
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-sky-700">
              <CountUp end={141000} ariaLabel="One hundred forty one thousand" />+
            </div>
            <p className="mt-2 text-slate-700">
              Digital marketing jobs available worldwide
            </p>
            <p className="mt-3 text-xs text-slate-500">Figure shown in the brochure</p>
          </div>
        </div>

        {/* SEO-supportive copy */}
        <p className="mt-8 md:mt-10 text-center text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
          Build a career in <strong>AI-driven digital marketing, SEO, performance ads, GA4 analytics</strong>, and{" "}
          <strong>automation</strong>. Our master program is designed to be <em>job-ready, portfolio-first, and
            placement-focused</em>.
        </p>
      </div>

    </section>
  );
}

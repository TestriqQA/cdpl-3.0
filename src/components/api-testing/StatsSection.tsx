'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/** Updated Stat type to support count-up + formatting */
type Stat = {
  valueNumber: number;          // numeric target to animate to
  label: string;                // label text
  prefix?: string;              // optional prefix (₹ etc.)
  suffix?: string;              // optional suffix (% , + , LPA)
  delay?: number;               // framer delay
  color: string;                // tailwind bg
  border: string;               // tailwind border
  text: string;                 // tailwind text color
  decimals?: number;            // decimals during count
};

/** Brochure stats (extracted) */
const stats: Stat[] = [
  { valueNumber: 25, label: 'Market growth from 2020 to 2030', suffix: '%', delay: 0.10, color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  { valueNumber: 101000, label: 'Job Vacancies in India', suffix: '+', delay: 0.15, color: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800' },
  { valueNumber: 4, label: "API Testing freshers’ average salary", suffix: ' LPA', delay: 0.20, color: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  { valueNumber: 75, label: 'Job Satisfaction', suffix: '%', delay: 0.25, color: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800' },
  { valueNumber: 32, label: 'India’s share in the global market', suffix: '%', delay: 0.30, color: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800' },
];

/** Count-up hook */
function useCountUp(target: number, inView: boolean, durationMs = 1200, decimals = 0) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setVal(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [target, inView, durationMs]);

  const fmt = (n: number) => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(n * factor) / factor;
    if (decimals === 0 && Math.abs(target) >= 1000) {
      return new Intl.NumberFormat('en-IN').format(Math.floor(rounded));
    }
    return rounded.toFixed(decimals);
  };

  return fmt(val);
}

export default function StatsSection() {


  return (
    <section
      id="api-testing-stats"
      aria-labelledby="stats-heading"
      className="relative py-10"
    >
      {/* Subtle backdrop: light, clean, no heavy gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        {/* ultra-faint grid using borders for a futuristic feel */}
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading (unchanged) */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="stats-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Real-World Outcomes: <span className='text-ST'>API Testing</span> Careers & Training Impact
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Discover key metrics that matter for <strong>API Testing</strong> careers in India—job openings, fresher salary ranges,
            market growth, and our concise <strong>15-hour</strong> intensive program designed to make you <strong>job-ready</strong> quickly.
          </p>
        </header>

        {/* Stats Grid (5 items on large screens) */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>

        {/* SEO supportive copy (unchanged) */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            With strong <strong>demand for API automation</strong>, <strong>Postman</strong> proficiency, and <strong>REST/GraphQL</strong> best practices,
            candidates gain an edge in <strong>QA Engineer</strong>, <strong>API Tester</strong>, and <strong>Automation Tester</strong> roles.
            Our hands-on approach focuses on <em>test design, schema validation, CI/CD integration, and API security</em> to accelerate hiring readiness.
          </p>
        </div>
      </div>

    </section>
  );
}

/** Single stat card with in-view trigger + count-up */
function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect(); // animate once
        }
      },
      { rootMargin: '-20% 0px -10% 0px', threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const value = useCountUp(stat.valueNumber, inView, 1200, stat.decimals ?? 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: stat.delay ?? index * 0.05, ease: 'easeOut' }}
      className={[
        'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
        stat.color,
        stat.border,
        'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
        'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
      ].join(' ')}
      aria-label={`${stat.valueNumber} — ${stat.label}`}
    >
      <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
      <div className={`text-xl font-extrabold sm:text-4xl ${stat.text}`}>
        {(stat.prefix ?? '')}{value}{stat.suffix ?? ''}
      </div>
      <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</div>
      <div className="mt-3 text-[11px] leading-5 text-slate-500">
        Verified metrics from the program brochure.
      </div>
    </motion.div>
  );
}

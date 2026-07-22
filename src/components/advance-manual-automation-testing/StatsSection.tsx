'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

/** Count-up that starts from 0 when parent section scrolls into view */
function Counter({
  target,
  started,
  duration = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  trailPlus = false,
}: {
  target: number;
  started: boolean;
  duration?: number; // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  trailPlus?: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return;

    let raf = 0;
    const t0 = performance.now();

    // easeOutCubic for a satisfying finish
    const ease = (x: number) => 1 - Math.pow(1 - x, 3);

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = ease(p);
      const current = target * eased;
      setVal(current);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  const formatted = useMemo(() => {
    const n = Number(val.toFixed(decimals));
    const num = n.toLocaleString('en-IN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return `${prefix}${num}${trailPlus ? '+' : ''}${suffix}`;
  }, [val, decimals, prefix, suffix, trailPlus]);

  return <span>{formatted}</span>;
}

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trailPlus?: boolean;
  decimals?: number;
  delay?: number;
  color: string;   // card bg
  border: string;  // card border
  text: string;    // value text color
  badge: string;   // tiny dot color
};

/** ---- Stats extracted from PDF ----
 * Page 7: 25% market growth (2020–2030), 101,000+ job vacancies,
 *         Software Testing freshers’ average salary 6 LPA
 * Page 11: 180 hours / 6.5 months program duration
 */
const stats: Stat[] = [
  {
    label: 'Job Vacancies in India',
    value: 101000,
    trailPlus: true,
    delay: 0.1,
    color: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-900',
    badge: 'bg-sky-500',
  },
  {
    label: 'Freshers’ Avg Salary',
    value: 6,
    prefix: '₹',
    suffix: ' LPA',
    delay: 0.2,
    color: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-900',
    badge: 'bg-amber-500',
  },
  {
    label: 'Market Growth (2020–30)',
    value: 25,
    suffix: '%',
    delay: 0.3,
    color: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-900',
    badge: 'bg-emerald-500',
  },
  {
    label: 'Total Training',
    value: 180,
    suffix: ' Hours',
    delay: 0.4,
    color: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-900',
    badge: 'bg-violet-500',
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect(); // animate once
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.2 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="program-stats"
      aria-labelledby="stats-heading"
      className="relative py-10"
    >
      {/* Subtle frame + lines (clean, slightly futuristic) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + SEO-friendly copy */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Real-World <span className="text-ST">QA</span> & <span className="text-ST">SDET</span> Metrics
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Up-to-date insights on <strong>QA jobs in India</strong>, typical <strong>SDET salaries</strong>,{' '}
            <strong>market growth</strong>, and our <strong>industry-focused training duration</strong>-everything you
            need to plan a high-paying QA career.
          </p>
        </header>

        {/* Stat cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={[
                'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                s.color,
                s.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
              aria-label={`${s.label}`}
            >
              {/* tiny accent dot */}
              <span
                aria-hidden
                className={`pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full ${s.badge} transition-transform group-hover:scale-125`}
              />
              {/* animated value */}
              <div className={`text-lg md:text-xl xl:text-4xl font-extrabold ${s.text}`}>
                <Counter
                  target={s.value}
                  started={inView}
                  prefix={s.prefix}
                  suffix={s.suffix ?? ''}
                  trailPlus={!!s.trailPlus}
                  decimals={s.decimals ?? 0}
                />
              </div>
              {/* label */}
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</div>
              {/* micro caption for accessibility & SEO */}
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified metrics for <em>QA</em>, <em>Automation Testing</em>, and <em>SDET</em> roles across India.
              </div>
            </div>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          With rising demand for <strong>test automation</strong>, <strong>API testing</strong>,{' '}
          <strong>mobile testing</strong>, and <strong>CI/CD</strong> skills, candidates trained on{' '}
          <em>Selenium, Cypress, Playwright, REST Assured</em> and robust <em>framework design</em> consistently
          land interviews faster and negotiate higher packages.
        </p>
      </div>
    </section>
  );
}

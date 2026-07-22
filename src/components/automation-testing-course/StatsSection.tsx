'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

/** ---------- Types ---------- */
type Stat = {
  label: string;
  value: number;     // numeric target for animation
  prefix?: string;   // e.g., "₹"
  suffix?: string;   // e.g., "%", " LPA", "+"
  color: string;     // card background
  border: string;    // card border
  text: string;      // primary text color
  dot: string;       // tiny accent dot color
  delay?: number;    // stagger
};

/** ---------- Source: PDF ---------- 
 * Page 7 stats:
 *  - 25% Market growth from 2020 to 2030
 *  - 101,000+ Job Vacancies in India
 *  - 6 LPA Automation Tester freshers’ average salary
 *  - 75% Job Satisfaction
 *  - 32% India’s share in the global market
 * Page 1:
 *  - Duration 85 Hours
 */
const stats: Stat[] = [
  { label: 'Market Growth (2020–2030)', value: 25, suffix: '%', color: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', dot: 'bg-sky-400', delay: 0.08 },
  { label: 'Job Vacancies in India', value: 101000, suffix: '+', color: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', dot: 'bg-amber-400', delay: 0.12 },
  { label: 'Fresher Avg Salary', value: 6, suffix: ' LPA', color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', dot: 'bg-emerald-400', delay: 0.16 },
  { label: 'Job Satisfaction', value: 75, suffix: '%', color: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', dot: 'bg-violet-400', delay: 0.20 },
  { label: 'India’s Share of Global Market', value: 32, suffix: '%', color: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', dot: 'bg-rose-400', delay: 0.24 },
  { label: 'Program Duration', value: 85, suffix: ' Hours', color: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', dot: 'bg-indigo-400', delay: 0.28 },
];

/** ---------- Helpers ---------- */
function formatNumber(n: number) {
  // Regular international grouping (e.g., 101,000). 
  // If you prefer Indian grouping (1,01,000), swap to 'en-IN'.
  return new Intl.NumberFormat('en-US').format(n);
}

/** Count-up hook that starts when container enters viewport */
function useCountUp(target: number, start: boolean, durationMs = 1600) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTs = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - startTs) / durationMs);
      // easeOutCubic for a nicer finish
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, start, durationMs]);

  return val;
}

/** ---------- Stat Card ---------- */
function StatCard({ s }: { s: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

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

  const animatedVal = useCountUp(s.value, inView);
  const display = useMemo(() => {
    const base = formatNumber(animatedVal);
    return `${s.prefix ?? ''}${base}${s.suffix ?? ''}`;
  }, [animatedVal, s.prefix, s.suffix]);

  return (
    <div
      ref={ref}
      className={[
        'group relative overflow-hidden rounded-2xl border p-4 sm:p-5',
        s.color,
        s.border,
        'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
        'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
      ].join(' ')}
      aria-label={`${display} — ${s.label}`}
    >
      {/* Tiny accent dot */}
      <span className={`pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full ${s.dot} transition-transform group-hover:scale-125`} />

      <div className={`text-xl lg:text-3xl font-extrabold ${s.text}`}>
        {display}
      </div>
      <div className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
        {s.label}
      </div>

      <div className="mt-3 text-[11px] leading-5 text-slate-500">
        Benchmarks for <em>Automation Testing</em> / <em>SDET</em> opportunities and training.
      </div>
    </div>
  );
}

export default function StatsSection() {


  return (
    <section id="automation-stats" aria-labelledby="automation-stats-heading" className="relative py-10">
      {/* Subtle frame lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + supporting copy */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="automation-stats-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Outcomes that Matter for <span className="text-ST">SDET</span> Careers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            The figures below come from the program brochure: market growth, open roles, fresher pay, job satisfaction, India’s global share, and program duration.
          </p>
        </header>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => <StatCard key={s.label} s={s} />)}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Upskill with <strong>framework design</strong>, <strong>CI/CD pipelines</strong>, and
            <strong> AI-assisted testing</strong> to stand out for roles like <strong>SDET</strong>,
            <strong> Automation Engineer</strong>, and <strong>QA Lead</strong>. Master popular tools
            such as <strong>Selenium</strong>, <strong>Cypress</strong>, <strong>Playwright</strong>,
            <strong> REST Assured</strong>, and <strong>Jenkins</strong>.
          </p>
        </div>
      </div>

    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type Stat = {
  value: string;
  label: string;
  delay?: number;
  cardBg: string;
  cardBorder: string;
  text: string;
  caption?: string;
};

/**
 * Stats sourced from the PDF:
 * - Page 7: 25% growth (2020–2030), 101,000+ jobs in India, 4 LPA fresher avg salary,
 *           75% job satisfaction, 32% India's global market share
 * - Page 11: 95 hours (program duration)
 */
const stats: Stat[] = [
  {
    value: '25%',
    label: 'Market Growth (2020–2030)',
    delay: 0.1,
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
    text: 'text-emerald-900',
    caption: 'Growth outlook for software testing in the decade',
  },
  {
    value: '101,000+',
    label: 'Job Vacancies in India',
    delay: 0.15,
    cardBg: 'bg-sky-50',
    cardBorder: 'border-sky-200',
    text: 'text-sky-900',
    caption: 'Open roles across product and services companies',
  },
  {
    value: '4 LPA',
    label: 'Fresher Average Salary',
    delay: 0.2,
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    text: 'text-amber-900',
    caption: 'Typical starting CTC for software testing freshers',
  },
  {
    value: '75%',
    label: 'Job Satisfaction',
    delay: 0.25,
    cardBg: 'bg-violet-50',
    cardBorder: 'border-violet-200',
    text: 'text-violet-900',
    caption: 'Satisfaction level reported for QA/testing careers',
  },
  {
    value: '32%',
    label: "India's Share in Global Market",
    delay: 0.3,
    cardBg: 'bg-rose-50',
    cardBorder: 'border-rose-200',
    text: 'text-rose-900',
    caption: 'Share of the global software testing market',
  },
  {
    value: '95 Hours',
    label: 'Total Training Duration',
    delay: 0.35,
    cardBg: 'bg-slate-50',
    cardBorder: 'border-slate-200',
    text: 'text-slate-900',
    caption: 'End-to-end contact hours for the program',
  },
];

/** ---------------- Count-up on view ---------------- */
function useInViewOnce<T extends HTMLElement>(margin = '-20% 0px -10% 0px') {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
          }
        });
      },
      { root: null, rootMargin: margin, threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen, margin]);

  return { ref, seen };
}

function splitValue(raw: string) {
  // Captures optional currency/char prefix, number (with commas/decimal), and trailing text/symbols.
  const m = raw.trim().match(/^([^0-9₹$+-]*)?([\d,]*\.?\d+)(.*)$/);
  if (!m) {
    return { prefix: '', num: NaN, suffix: raw, formatter: (x: number) => String(x) };
  }
  const [, prefix = '', numStr, tail = ''] = m;
  const clean = numStr.replace(/,/g, '');
  const isInt = !numStr.includes('.');
  const suffix = tail;
  const plus = /\+$/.test(suffix) ? '+' : '';
  const formatter = (x: number) => {
    const base = isInt ? Math.round(x).toLocaleString('en-IN') : x.toFixed(1);
    return `${prefix ?? ''}${base}${plus}`;
  };
  // Special-case percent or units like " LPA", " Hours"
  return { prefix, num: parseFloat(clean), suffix, formatter };
}

function Counter({ value, className, duration = 1200 }: { value: string; className?: string; duration?: number }) {
  const { ref, seen } = useInViewOnce<HTMLSpanElement>();
  const { num, suffix, formatter } = useMemo(() => splitValue(value), [value]);
  const [display, setDisplay] = useState(() => (isNaN(num) ? value : formatter(0)));

  useEffect(() => {
    if (!seen || isNaN(num)) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // cubic easeOut
      const current = num * eased;
      setDisplay(`${formatter(current)}${suffix && !/\+$/.test(suffix) ? suffix : ''}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, num, suffix, formatter, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {!isNaN(num) && suffix && /\+$/.test(suffix) && suffix} {/* keep trailing + if it wasn’t appended already */}
    </span>
  );
}

export default function StatsSection() {


  return (
    <section id="qa-stats" aria-labelledby="qa-stats-heading" className="relative py-10 bg-white">
      {/* subtle top/bottom separators */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="qa-stats-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Real-World <span className="text-ST">QA & Automation</span> Career Metrics
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            Figures below are sourced from our program brochure and industry snapshot-market demand, salary benchmarks,
            satisfaction, and duration.
          </p>
        </header>

        {/* stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: s.delay ?? i * 0.05, ease: 'easeOut' }}
              aria-label={`${s.value} — ${s.label}`}
              className={[
                'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                s.cardBg,
                s.cardBorder,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.05)]',
                'focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
            >
              {/* corner accent dot */}
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              <Counter value={s.value} className={`text-xl lg:text-4xl font-extrabold ${s.text}`} />
              <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600">{s.label}</div>
              {s.caption && <p className="mt-3 text-[11px] leading-5 text-slate-500">{s.caption}</p>}
            </motion.article>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Build strength in <strong>Manual Testing</strong>, <strong>API Testing (Postman)</strong>, and{' '}
            <strong>DBMS (MySQL)</strong>, with test management and defect tracking tools to accelerate hiring
            readiness.
          </p>
        </div>
      </div>

    </section>
  );
}

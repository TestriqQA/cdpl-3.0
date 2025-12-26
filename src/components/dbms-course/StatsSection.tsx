'use client';
import { useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

type Stat = {
  value: string;      // e.g. "101,000+"
  label: string;      // e.g. "Job Vacancies in India"
  delay?: number;
  bg: string;
  border: string;
  ink: string;
};

// ✅ Stats extracted from the PDF (pp. 1 & 6)
const stats: Stat[] = [
  { value: '1,01,000+', label: 'Job Vacancies in India', delay: 0.1, bg: 'bg-sky-50', border: 'border-sky-200', ink: 'text-sky-900' }, // 101,000+
  { value: '4 LPA', label: 'Freshers’ Average Salary', delay: 0.2, bg: 'bg-amber-50', border: 'border-amber-200', ink: 'text-amber-900' },
  { value: '25%', label: 'Market Growth (2020–2030)', delay: 0.3, bg: 'bg-emerald-50', border: 'border-emerald-200', ink: 'text-emerald-900' },
  { value: '30 Hours', label: 'Program Duration', delay: 0.4, bg: 'bg-violet-50', border: 'border-violet-200', ink: 'text-violet-900' },
];

/** CountUp: animates the numeric portion of a value string (e.g. "101,000+", "4 LPA", "25%", "30 Hours") */
function CountUp({ value, className }: { value: string; className?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: '-20% 0px -10% 0px' });

  // Parse leading number + suffix (keeps things like "+", "%", " LPA", " Hours")
  const parseValue = (s: string) => {
    const m = s.trim().match(/^(\d[\d,]*)(.*)$/); // leading integer (with commas) + rest
    if (!m) return { num: 0, suffix: s };
    return { num: Number(m[1].replace(/,/g, '')), suffix: m[2] ?? '' };
  };

  useEffect(() => {
    if (!nodeRef.current) return;
    const { num, suffix } = parseValue(value);

    // Start at 0 only when scrolled into view
    if (inView) {
      const control = animate(0, num, {
        duration: 1.2,
        ease: 'easeOut',
        onUpdate(v) {
          const formatted = new Intl.NumberFormat('en-IN').format(Math.round(v));
          nodeRef.current!.textContent = `${formatted}${suffix}`;
        },
      });
      return () => control.stop();
    } else {
      // Pre-hydration fallback: render 0 + suffix to avoid mismatch
      nodeRef.current.textContent = `0${parseValue(value).suffix}`;
    }
  }, [inView, value]);

  return <span ref={nodeRef} className={className} />;
}

export default function StatsSection() {


  return (
    <section
      id="mysql-stats"
      aria-labelledby="stats-heading"
      className="relative py-10 bg-white"
    >
      {/* subtle top/bottom separators */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + intro */}
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2 id="stats-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Real-World <span className="text-ST">MySQL</span> Metrics for <span className="text-ST">Careers & Training</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Verified indicators for <strong>job demand</strong>, <strong>freshers’ salary</strong>,{' '}
            <strong>market growth</strong>, and our concise <strong>30-hour</strong> program to get you job-ready.
          </p>
        </header>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
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
                s.bg,
                s.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] focus-within:outline-none focus-within:ring-4 focus-within:ring-slate-200',
              ].join(' ')}
            >
              <span className="pointer-events-none animate-pulse absolute right-4 top-4 h-2 w-2 rounded-full bg-slate-400/30 transition-transform group-hover:scale-125" />
              <div className={['font-extrabold', s.ink, 'text-xl lg:text-4xl'].join(' ')}>
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{s.label}</div>
              <p className="mt-3 text-[11px] leading-5 text-slate-500">
                Data sourced from the program brochure (see PDF).
              </p>
            </motion.article>
          ))}
        </div>

        {/* supporting SEO line */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Build expertise in <strong>SQL querying</strong>, <strong>schema design</strong>,{' '}
            <strong>indexing & optimization</strong>, and <strong>transaction management</strong> for{' '}
            <strong>Database Developer</strong>, <strong>Data Analyst</strong>, and <strong>Backend Engineer</strong> roles.
          </p>
        </div>
      </div>

    </section>
  );
}

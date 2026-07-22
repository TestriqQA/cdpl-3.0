'use client';
import { useEffect, useRef, useState } from 'react';

// ---- Animated counter that starts when in-view ----
function Counter({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // simple IntersectionObserver so we only animate once when visible
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const startVal = 0;
          const endVal = to;
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

          const step = (now: number) => {
            const t = Math.min(1, (now - start) / (duration * 1000));
            setValue(Math.round(startVal + (endVal - startVal) * easeOut(t)));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { rootMargin: '-20% 0px -10% 0px', threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [duration, hasAnimated, to]);

  return <span ref={ref}>{value}</span>;
}

type Stat = {
  label: string;
  delay?: number;
  color: string;   // bg color
  border: string;  // border color
  text: string;    // text color
  target: number;  // numeric target for animation
  suffix?: string; // e.g., " Hours"
};

const stats: Stat[] = [
  { label: 'Total Training', delay: 0.10, color: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', target: 100, suffix: ' Hours' },
  { label: 'Structured Curriculum', delay: 0.20, color: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', target: 10, suffix: ' Modules' },
  { label: 'Hands-on Learning', delay: 0.30, color: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', target: 2, suffix: ' Capstone Projects' },
  { label: 'Career Pathways', delay: 0.40, color: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', target: 5, suffix: ' Job Roles' },
];

export default function StatsSection() {


  return (
    <section
      id="etl-stats"
      aria-labelledby="etl-stats-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle top/bottom separators */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="etl-stats-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Real-World Outcomes: <span className="text-ST">ETL Testing</span> Program Snapshot
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Figures sourced from the official ETL Testing &amp; Development brochure: total training time,
            curriculum depth, hands-on capstones, and mapped job roles-so you know exactly what you’ll get.
          </p>
        </header>

        {/* Stats Grid */}
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
              aria-label={`${s.target}${s.suffix ?? ''} — ${s.label}`}
            >
              {/* Decorative corner dot */}
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              <div className={`text-xl lg:text-4xl font-extrabold ${s.text}`}>
                <Counter to={s.target} />{s.suffix}
              </div>
              <div className="mt-1 text-[11px] sm:text-sm font-medium text-slate-600">{s.label}</div>
              <div className="mt-3 text-[11px] leading-5 text-slate-500">
                Verified from the official program: duration, curriculum items, capstone projects, and job-role mapping.
              </div>
            </div>
          ))}
        </div>

        {/* SEO supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            The program blends <strong>ETL/ELT fundamentals</strong>, <strong>SQL validation</strong>,{' '}
            <strong>automation</strong> (Python/Selenium), and modern platforms (Talend, Informatica, Snowflake, Power BI)
            with <strong>capstone delivery</strong> aligned to real job roles.
          </p>
        </div>
      </div>

    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import type { ServiceClient, StatItem } from '@/types/service';
import { useSiteStats } from '@/components/stats/SiteStatsProvider';

/** ---------- Utilities ---------- */
function useOnScreen<T extends Element>(
  options: IntersectionObserverInit = { root: null, threshold: 0.25 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, visible } as const;
}

function useCountUp(active: boolean, to: number, duration = 1000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return val;
}

/** ---------- Palette (per-card color) ---------- */
const PALETTE = [
  { accent: '#0ea5e9', text: '#075985', tile: '#eff6ff' }, // sky
  { accent: '#14b8a6', text: '#0f766e', tile: '#ecfeff' }, // teal/cyan
  { accent: '#6366f1', text: '#3730a3', tile: '#eef2ff' }, // indigo
  { accent: '#f59e0b', text: '#92400e', tile: '#fffbeb' }, // amber
] as const;

/** ---------- Square-grid pattern (same everywhere), tinted per card ---------- */
function squareGridStyle(i: number): React.CSSProperties {
  const p = PALETTE[i % PALETTE.length];
  // Subtle grid color (alpha ~12–16%)
  const grid = p.accent + '24'; // hex alpha
  return {
    backgroundColor: p.tile,
    backgroundImage: `
      linear-gradient(${grid} 1px, transparent 1px),
      linear-gradient(90deg, ${grid} 1px, transparent 1px)
    `,
    backgroundSize: '18px 18px, 18px 18px',
    backgroundPosition: 'center center',
    backgroundClip: 'padding-box',
  };
}

/** ---------- Presentational ---------- */
function StatNumber({
  item,
  active,
  colorIndex,
}: {
  item: StatItem;
  active: boolean;
  colorIndex: number;
}) {
  const isFloat = Number.isFinite(item.value) && !Number.isInteger(item.value);
  const end = isFloat ? Math.round((item.value as number) * 10) : (item.value as number);
  const val = useCountUp(active, end);
  const display = isFloat ? (val / 10).toFixed(1) : String(val);

  const palette = PALETTE[colorIndex % PALETTE.length];

  return (
    <div className="flex flex-col items-center text-center">
      {/* accent tick */}
      <span
        aria-hidden="true"
        className="mb-3 block h-0.5 w-10 rounded-full"
        style={{ backgroundColor: palette.accent }}
      />
      <div className="flex items-baseline gap-1 tabular-nums">
        <span
          className="text-4xl md:text-5xl font-semibold tracking-tight"
          style={{ color: palette.accent }}
        >
          {display}
        </span>
        {item.suffix ? (
          <span className="text-base md:text-lg font-medium" style={{ color: palette.text }}>
            {item.suffix}
          </span>
        ) : null}
      </div>
      <div className="mt-2 text-sm md:text-base text-slate-700">{item.label}</div>
    </div>
  );
}

/** ---------- Section ---------- */
export default function ServiceDetailStatsSection({ service }: { service: ServiceClient }) {
  const { ref, visible } = useOnScreen<HTMLDivElement>();
  const siteStats = useSiteStats();

  const stats: StatItem[] = service.stats ?? [
    { label: 'Learners Trained', value: 5000 },
    { label: 'Average Rating', value: siteStats.rating, suffix: '/5' },
    { label: 'Placement Success', value: 92, suffix: '%' },
    { label: 'Hiring Partners', value: 50 },
  ];

  return (
    <section ref={ref} className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {/* section cue */}
        <div aria-hidden="true" className="mb-6 h-1 w-24 rounded-full bg-[#0ea5e9]" />

        <div
          className={[
            'grid grid-cols-2 md:grid-cols-4',
            'gap-4 md:gap-6',
            visible
              ? 'opacity-100 translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
              : 'opacity-0 translate-y-2',
          ].join(' ')}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative rounded-2xl p-5 md:p-6 ring-1 ring-slate-200/70 hover:ring-slate-300 transition-colors"
              style={squareGridStyle(i)}
            >
              <StatNumber item={s} active={visible} colorIndex={i} />
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="mt-10 h-px w-full bg-slate-200/80" />
      </div>
    </section>
  );
}

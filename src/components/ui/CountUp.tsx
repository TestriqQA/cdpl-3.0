'use client';

import { useEffect, useRef } from 'react';

/**
 * CountUp - counts a figure like "500+" or "1.5×" up from 0 when it scrolls
 * into view.
 *
 * The server HTML always holds the real value, so crawlers, no-JS visitors and
 * screen readers get "500+", never "0". The count only starts once the element
 * is on screen, and is skipped for visitors who prefer reduced motion.
 */
const DURATION_MS = 1400;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
    if (!el || !match) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const decimals = match[1].split('.')[1]?.length ?? 0;
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        el.textContent = (target * easeOutCubic(t)).toFixed(decimals) + suffix;
        if (t < 1) frame = requestAnimationFrame(tick);
        else el.textContent = value;
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

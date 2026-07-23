'use client';

import { CircuitBoard, Check } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import React, { useMemo } from 'react';

export default function ServiceDetailOutcomesSection({ service }: { service: ServiceClient }) {
  const unsafe = String(service.color || '').toLowerCase().match(/sky|cyan|blue/);
  const safeGradient = 'from-emerald-500 to-violet-600';
  const headerGradient = unsafe ? safeGradient : (service.color || safeGradient);

  const TOKENS = useMemo(
    () => ({
      text: '#0f172a',
      sub: 'rgba(15,23,42,0.62)',
      hairline: 'rgba(15,23,42,0.10)',
      titleSkill: '#111827',
      titleTrajectory: '#16a34a',
      panelFill: 'rgba(255,255,255,0.06)',
    }),
    []
  );

  const outcomes = (service.outcomes ?? []).filter(Boolean);

  // Accent ribbons
  const SKINS = useMemo(
    () =>
      [
        { from: '#10b981', to: '#34d399' },  // emerald
        { from: '#a78bfa', to: '#7c3aed' },  // violet
        { from: '#f59e0b', to: '#fbbf24' },  // amber
        { from: '#f43f5e', to: '#fb7185' },  // rose
        { from: '#22c55e', to: '#84cc16' },  // green→lime
        { from: '#d946ef', to: '#a21caf' },  // fuchsia→purple
        { from: '#f97316', to: '#f59e0b' },  // orange→amber
        { from: '#14b8a6', to: '#22c55e' },  // teal→green
      ] as const,
    []
  );

  // Distinct, dark, high-contrast inks for titles (not the same as ribbons)
  const TITLE_INKS = [
    '#064e3b', // emerald-900
    '#4c1d95', // violet-900
    '#78350f', // amber-900
    '#881337', // rose-900
    '#14532d', // green-900
    '#701a75', // fuchsia-900
    '#ff8c00', // brand
    '#134e4a', // teal-900
  ] as const;

  return (
    <section className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70rem 40rem at 120% -10%, rgba(34,197,94,0.10), transparent 60%), radial-gradient(50rem 35rem at -20% 10%, rgba(51,65,85,0.08), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="relative mb-8 md:mb-12 flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            <CircuitBoard className="h-6 w-6 text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            <span style={{ color: TOKENS.titleSkill }}>Skill</span>{' '}
            <span style={{ color: TOKENS.titleTrajectory }}>Trajectory</span>
          </h2>
        </div>

        {/* SPINE */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
            <div className="absolute inset-0 rounded-full" style={{ background: TOKENS.hairline }} />
            <div className={`absolute inset-y-10 left-1/2 w-[2.5px] -translate-x-1/2 rounded-full bg-gradient-to-b ${unsafe ? safeGradient : headerGradient}`} />
          </div>

          {outcomes.length === 0 ? (
            <p className="text-sm text-slate-600">Outcomes will be published soon. Stay tuned!</p>
          ) : (
            <ul className="relative z-10 grid gap-10 md:gap-12">
              {outcomes.map((outcome, i) => {
                const n = i + 1;
                const isLeft = i % 2 === 0;
                const skin = SKINS[i % SKINS.length];
                const titleInk = TITLE_INKS[i % TITLE_INKS.length];

                const cardStyle: React.CSSProperties = {
                  border: '1px solid transparent',
                  background:
                    `linear-gradient(${TOKENS.panelFill}, ${TOKENS.panelFill}) padding-box, ` +
                    `linear-gradient(90deg, ${skin.from}, ${skin.to}) border-box`,
                  backdropFilter: 'blur(10px) saturate(115%)',
                  WebkitBackdropFilter: 'blur(10px) saturate(115%)',
                };

                const pathD = isLeft ? 'M 0 0 C 28 0, 56 10, 90 20' : 'M 90 20 C 56 10, 28 0, 0 0';

                return (
                  <li key={`outcome-${i}`} className="relative">
                    {/* node */}
                    <div className="absolute left-1/2 -top-1 -translate-x-1/2 md:top-0">
                      <div className="relative h-6 w-6">
                        <span className="absolute inset-0 rounded-full bg-white" />
                        <span
                          className="absolute inset-1 rounded-full"
                          style={{ background: `linear-gradient(90deg, ${skin.from}, ${skin.to})` }}
                        />
                      </div>
                    </div>

                    {/* curved elbow */}
                    <svg
                      className={[
                        'pointer-events-none absolute hidden md:block',
                        isLeft ? 'right-1/2 translate-x-6' : 'left-1/2 -translate-x-6',
                      ].join(' ')}
                      width="96"
                      height="28"
                      viewBox="0 0 96 28"
                      fill="none"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id={`g-${i}`} x1="0" y1="0" x2="96" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor={skin.from} />
                          <stop offset="1" stopColor={skin.to} />
                        </linearGradient>
                      </defs>
                      <path d={pathD} stroke={`url(#g-${i})`} strokeWidth="1.5" fill="none" />
                    </svg>

                    {/* index chip */}
                    <div className={['absolute -top-5', isLeft ? 'md:right-[calc(50%+10px)]' : 'md:left-[calc(50%+10px)]'].join(' ')}>
                      <span
                        className="inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-semibold"
                        style={{ color: TOKENS.text, border: `1px solid ${TOKENS.hairline}`, background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(3px)' }}
                        aria-label={`Outcome ${n}`}
                      >
                        {n}
                      </span>
                    </div>

                    {/* PANEL */}
                    <div className={['relative mx-auto mt-8 md:mt-2', 'md:max-w-[680px]', isLeft ? 'md:mr-[calc(50%+36px)]' : 'md:ml-[calc(50%+36px)]'].join(' ')}>
                      <div className={['group relative rounded-2xl px-5 py-4 md:px-6 md:py-5', 'transition-transform duration-300 will-change-transform hover:-translate-y-0.5'].join(' ')} style={cardStyle}>
                        {/* leading icon */}
                        <span
                          className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-full align-top"
                          style={{ border: `1px solid ${TOKENS.hairline}`, background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(2px)' }}
                          aria-hidden
                        >
                          <Check className="h-4 w-4" style={{ color: skin.from }} />
                        </span>

                        {/* TITLE — distinct, dark, high-contrast per card */}
                        <div className="inline-block align-top min-w-0">
                          <p
                            className="font-semibold leading-relaxed relative inline-block pr-1"
                            style={{
                              color: titleInk,
                              textShadow: '0 1px 0 rgba(255,255,255,0.25)', // subtle lift on glossy bg
                            }}
                          >
                            {Array.isArray(outcome) ? outcome.join(', ') : outcome}
                          </p>

                          <p className="mt-1 text-xs" style={{ color: TOKENS.sub }}>
                            Milestone • Skill unlock • Portfolio-ready
                          </p>
                        </div>

                        {/* hover underline */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute left-4 right-4 bottom-[6px] block h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: `linear-gradient(90deg, ${skin.from}, ${skin.to})` }}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

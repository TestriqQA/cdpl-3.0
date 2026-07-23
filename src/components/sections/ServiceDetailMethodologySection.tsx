'use client';

import { ScrollText, CheckCircle2 } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import { useMemo, type CSSProperties } from 'react';

type WithOptionalColors = { accentHex?: string; colorHex?: string };

export default function ServiceDetailMethodologySection({ service }: { service: ServiceClient }) {
  const methods = (service.methodology ?? []).filter(Boolean);

  // Primary accent (fallback to emerald) — without `any`
  const { accentHex, colorHex } = service as ServiceClient & WithOptionalColors;
  const accent = accentHex ?? colorHex ?? '#16a34a';

  // Soft token palette
  const TOKENS = useMemo(
    () => ({
      ink: '#0f172a',
      sub: 'rgba(15,23,42,0.62)',
      hair: 'rgba(2,6,23,0.12)',
    }),
    []
  );

  // Friendly colorways (pastel-ish with good legibility)
  const PALETTES = useMemo(
    () => [
      { from: '#fdf2f8', to: '#fee2e2', accent: '#f43f5e' }, // pink/red
      { from: '#ecfeff', to: '#dbeafe', accent: '#0ea5e9' }, // sky/blue
      { from: '#ecfdf5', to: '#dcfce7', accent: '#10b981' }, // green
      { from: '#fefce8', to: '#ffedd5', accent: '#f59e0b' }, // amber
      { from: '#f5f3ff', to: '#e9d5ff', accent: '#8b5cf6' }, // violet
      { from: '#fff7ed', to: '#ffe4e6', accent: '#fb7185' }, // rose
      { from: '#eff6ff', to: '#d1fae5', accent: '#22c55e' }, // blue/emerald
      { from: '#faf5ff', to: '#e0e7ff', accent: '#6366f1' }, // indigo
      { from: '#f0f9ff', to: '#ecfeff', accent: '#06b6d4' }, // cyan
    ],
    []
  );

  // Light pattern factory: layered gradients with gentle highlights
  const patternFor = (i: number): CSSProperties => {
    const p = PALETTES[i % PALETTES.length];
    // tiny SVG grain (very subtle)
    const grain =
      "url(\"data:image/svg+xml;utf8,\
      <svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'>\
        <filter id='n'>\
          <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>\
          <feColorMatrix type='saturate' values='0'/>\
          <feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0.08'/></feComponentTransfer>\
        </filter>\
        <rect width='100%' height='100%' filter='url(%23n)' />\
      </svg>\")";

    // multiple backgrounds for depth
    return {
      backgroundImage: [
        // soft base vertical blend
        `linear-gradient(180deg, ${p.from}, ${p.to})`,
        // conic ribbons
        `conic-gradient(from 0deg at 80% 20%, ${p.to}00, ${p.to}88 20%, ${p.to}00 40%)`,
        `conic-gradient(from 180deg at 20% 80%, ${p.from}00, ${p.from}99 25%, ${p.from}00 45%)`,
        // spotlight highlights
        `radial-gradient(60% 90% at 110% -10%, #ffffffb3, #ffffff00 60%)`,
        `radial-gradient(70% 80% at -10% 110%, #ffffff99, #ffffff00 55%)`,
        // faint accent sweep
        `linear-gradient(135deg, ${p.accent}14, ${p.accent}00 40%, ${p.accent}10 80%)`,
        // subtle grain
        grain,
      ].join(', '),
      backgroundBlendMode: 'soft-light, screen, screen, normal, normal, soft-light, multiply',
    };
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10 flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
          >
            <ScrollText className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Our Methodology
          </h2>
        </div>

        {/* Colorful patterned cards in a tidy grid */}
        {methods.length === 0 ? (
          <p className="text-sm text-slate-600">Methodology will be published soon.</p>
        ) : (
          <ol className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {methods.map((m, i) => {
              const palette = PALETTES[i % PALETTES.length];
              const stepAccent = accent || palette.accent;

              return (
                <li key={`method-${i}`} className="group">
                  <div
                    className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                    style={{
                      ...patternFor(i),
                      // uniform compact size
                      minHeight: 120,
                    }}
                  >
                    {/* soft inner mask to keep edges calm */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        maskImage:
                          'radial-gradient(120% 120% at 50% 50%, black 60%, transparent 100%)',
                        WebkitMaskImage:
                          'radial-gradient(120% 120% at 50% 50%, black 60%, transparent 100%)',
                        backdropFilter: 'blur(0px)',
                      }}
                    />

                    <div className="relative z-10 p-4 md:p-5">
                      <div className="flex items-start gap-3">
                        {/* Number / marker */}
                        <span
                          className="relative mt-0.5 inline-grid h-8 w-8 place-items-center rounded-full bg-white text-[12px] font-semibold text-slate-700 shadow-sm"
                          style={{ boxShadow: `inset 0 0 0 1px ${TOKENS.hair}` }}
                          aria-label={`Step ${i + 1}`}
                        >
                          {i + 1}
                          <i
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-full"
                            style={{ boxShadow: `0 0 0 2px ${stepAccent}1A` }}
                          />
                        </span>

                        {/* Title */}
                        <div className="min-w-0 flex-1">
                          <div className="relative">
                            <h3 className="pr-1 text-[15px] font-medium leading-6 text-slate-900">
                              {m}
                            </h3>
                            <span
                              aria-hidden
                              className="absolute left-0 right-0 -bottom-1 block h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                              style={{ backgroundColor: stepAccent }}
                            />
                          </div>

                          <p className="mt-1 text-xs" style={{ color: TOKENS.sub }}>
                            Step • Process • Best practice
                          </p>
                        </div>

                        {/* Affirmation */}
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 opacity-80"
                          style={{ color: stepAccent }}
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}

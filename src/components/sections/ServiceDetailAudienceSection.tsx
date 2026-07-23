'use client';

import { UserCheck, Check } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import { useMemo } from 'react';

type WithOptionalColors = { accentHex?: string; colorHex?: string };

export default function ServiceDetailAudienceSection({ service }: { service: ServiceClient }) {
  // Safely read optional color props without using `any`
  const { accentHex, colorHex } = service as ServiceClient & WithOptionalColors;
  const accent = accentHex ?? colorHex ?? '#0ea5e9';

  const TOKENS = useMemo(() => ({
    ringNeutral: 'rgba(15,23,42,0.06)',
    text: '#0f172a',
    sub: 'rgba(15,23,42,0.62)',
    backdrop: `radial-gradient(120% 80% at 50% -10%, rgba(2,6,23,0.04) 0%, rgba(2,6,23,0) 60%)`,
    accent, // header icon

    // Title colors
    titleYouShould: '#0ea5e9', // ONE color for the whole "Who Should"
    titleAttend: '#16a34a',    // green-600 for "Attend?" (success vibe)
  }), [accent]);

  const audience = service.whoShouldAttend ?? [];

  // Solid, lighter pastel tints (no gradients). Hover slightly increases alpha.
  const CARD_SKINS = useMemo(() => ([
    { name: 'sky',     bg: 'rgba(14,165,233,0.10)',  hover: 'rgba(14,165,233,0.14)',  ring: 'rgba(14,165,233,0.26)',  badge: 'rgba(14,165,233,0.16)' },
    { name: 'cyan',    bg: 'rgba(34,211,238,0.10)',  hover: 'rgba(34,211,238,0.14)',  ring: 'rgba(34,211,238,0.24)',  badge: 'rgba(34,211,238,0.16)' },
    { name: 'teal',    bg: 'rgba(20,184,166,0.10)',  hover: 'rgba(20,184,166,0.14)',  ring: 'rgba(20,184,166,0.24)',  badge: 'rgba(20,184,166,0.16)' },
    { name: 'indigo',  bg: 'rgba(99,102,241,0.10)',  hover: 'rgba(99,102,241,0.14)',  ring: 'rgba(99,102,241,0.24)',  badge: 'rgba(99,102,241,0.16)' },
    { name: 'violet',  bg: 'rgba(139,92,246,0.10)',  hover: 'rgba(139,92,246,0.14)',  ring: 'rgba(139,92,246,0.24)',  badge: 'rgba(139,92,246,0.16)' },
    { name: 'rose',    bg: 'rgba(244,63,94,0.09)',   hover: 'rgba(244,63,94,0.13)',   ring: 'rgba(244,63,94,0.22)',   badge: 'rgba(244,63,94,0.14)' },
    { name: 'amber',   bg: 'rgba(245,158,11,0.09)',  hover: 'rgba(245,158,11,0.13)',  ring: 'rgba(245,158,11,0.22)',  badge: 'rgba(245,158,11,0.14)' },
    { name: 'emerald', bg: 'rgba(16,185,129,0.10)',  hover: 'rgba(16,185,129,0.14)',  ring: 'rgba(16,185,129,0.24)',  badge: 'rgba(16,185,129,0.16)' },
  ] as const), []);

  // subtle section grain
  const noiseUrl = useMemo(() => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>
        <filter id='n'>
          <feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/>
          <feColorMatrix type='saturate' values='0'/>
          <feComponentTransfer>
            <feFuncA type='table' tableValues='0 0 .015 .03 .05 .07 .09 .11 .12 .12'/>
          </feComponentTransfer>
        </filter>
        <rect width='100%' height='100%' filter='url(#n)' opacity='.75'/>
      </svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  }, []);

  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="audience-heading">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: TOKENS.backdrop }} />
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{ backgroundImage: noiseUrl, backgroundRepeat: 'repeat' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="size-11 rounded-xl flex items-center justify-center bg-white/80 backdrop-blur-sm"
            style={{ border: `1px solid ${TOKENS.ringNeutral}`, color: TOKENS.accent }}
          >
            <UserCheck className="size-5" />
          </div>

          {/* Title: "Who Should" in one color, "Attend?" in green */}
          <h2 id="audience-heading" className="text-[1.35rem] md:text-[1.6rem] font-semibold tracking-tight">
            <span style={{ color: TOKENS.titleYouShould }}>Who&nbsp;Should</span>
            <span> </span>
            <span style={{ color: TOKENS.titleAttend }}>Attend?</span>
          </h2>
        </div>

        {/* Divider */}
        <div aria-hidden className="mb-7 h-px w-full" style={{ backgroundColor: TOKENS.ringNeutral }} />

        {/* Cards */}
        <ul
          className="grid gap-4 md:gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {audience.map((aud, i) => {
            const skin = CARD_SKINS[i % CARD_SKINS.length];
            return (
              <li key={`${aud}-${i}`}>
                <div
                  className="relative rounded-2xl px-4 py-3.5 md:px-5 md:py-4 transition-all duration-200"
                  style={{
                    backgroundColor: skin.bg,
                    border: `1px solid ${skin.ring}`,
                    boxShadow: '0 8px 24px -16px rgba(2,6,23,0.18)',
                    backdropFilter: 'blur(2px)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = skin.hover; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = skin.bg; }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-lg shrink-0 size-8"
                      style={{
                        backgroundColor: skin.badge,
                        border: `1px solid ${skin.ring}`,
                        color: TOKENS.text,
                      }}
                      aria-hidden
                    >
                      <Check className="size-4" />
                    </span>

                    <div className="flex-1">
                      <p className="text-[0.98rem] leading-relaxed font-medium" style={{ color: TOKENS.text }}>
                        {aud}
                      </p>
                      <p className="mt-1 text-xs" style={{ color: TOKENS.sub }}>
                        Mentor-led • Outcome-focused • Portfolio-first
                      </p>
                    </div>
                  </div>

                  {/* left hairline accent */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 bottom-2 rounded-full"
                    style={{
                      width: 2,
                      background: `linear-gradient(180deg, transparent, ${skin.ring}, transparent)`,
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom spacer line */}
        <div aria-hidden className="mt-9 h-px w-full" style={{ backgroundColor: TOKENS.ringNeutral }} />
      </div>
    </section>
  );
}

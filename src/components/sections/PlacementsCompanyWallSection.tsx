"use client";

import { useMemo } from "react";
import type React from "react";
import Image from "next/image";
import type { SanityHiringPartner } from "@/sanity/types";

/**
 * CDPL — Hiring Partners Ticker (Logos Only)
 * Seamless continuous marquee (no gap at start or loop).
 *
 * BLG-133 follow-up — accepts an optional `sanityPartners` prop. When the
 * parent passes a non-empty list, the rail renders Sanity-managed partners;
 * otherwise it falls back to the curated local list below. This lets
 * server pages migrate the data source one consumer at a time without
 * breaking client-component callers (e.g. MentorOutcomesSection) that
 * still rely on the hard-coded list.
 */

type Partner = {
  name: string;
  logoUrl: string;
  logoAlt?: string;
};

// ---------------------------------------------------------------------------
// Curated local list — the fallback when no Sanity-managed partners come in.
// Per-logo visual tweaks (LOGO_TWEAKS below) are matched against these names.
// ---------------------------------------------------------------------------
const COMPANIES: string[] = [
  "Tech Mahindra",
  "Accenture",
  "eClerx",
  "JM Financial",
  "Testriq",
  "i-XL Technologies",
  "Aryan Technologies",
  "Maxwell Energy Systems",
  "IDfy",
  "Vistaar",
  "Rendered Ideas",
  "Reeble",
  "Axiom Technologies",
  "Punon Technologies",
  "Raw Engineering",
  "Tech Cryptors",
  "Codex Lancers",
  "Alif Management Services",
];

const COMPANY_LOGOS: Record<string, string> = {
  "tech mahindra": "tech_mahindra.png",
  "accenture": "accenture.png",
  "eclerx": "eclerx.png",
  "jm financial": "jm_financial.png",
  "testriq": "testriq.png",
  "i-xl technologies": "i-xl_technologies.png",
  "aryan technologies": "aryan_technologies.png",
  "maxwell energy systems": "maxwell.png",
  "idfy": "idfy.png",
  "vistaar": "vistaar.png",
  "rendered ideas": "rendered_ideas.png",
  "reeble": "reeble.png",
  "axiom technologies": "axiom_technologies.png",
  "punon technologies": "punon.png",
  "raw engineering": "raw_engineering.png",
  "tech cryptors": "tech_cryptors.png",
  "codex lancers": "codex_lancers.png",
  "alif management services": "alif_management_services2.png",
};

/** Global downscale (don’t change card box size) */
const BASE_SCALE = 0.7;

/**
 * Per-logo visual tweaks:
 *  - mult: scale multiplier (1 = no change)
 *  - tx/ty: pixel nudges to compensate transparent padding inside PNGs
 *
 * Keyed by lowercased name. Sanity-managed partners that don’t match a
 * key here simply use the defaults (no tweak) — acceptable for now;
 * future enhancement can promote these tweaks into the schema.
 */
const LOGO_TWEAKS: Record<
  string,
  { mult?: number; tx?: number; ty?: number }
> = {
  // slight size tweaks from before
  "tech mahindra": { mult: 0.95, tx: 1 },
  "accenture": { mult: 0.98, tx: 0 },
  "jm financial": { mult: 0.95, tx: 2 },
  "testriq": { mult: 0.92, tx: 0 },
  "eclerx": { mult: 0.92, tx: 0 },

  // baseline logos
  "i-xl technologies": { mult: 1.0, tx: 0 },
  "aryan technologies": { mult: 1.0, tx: 0 },
  "maxwell energy systems": { mult: 1.0, tx: 0 },
  "idfy": { mult: 1.0, tx: 0 },
  "vistaar": { mult: 1.03, tx: -4 },
  "rendered ideas": { mult: 1.05, tx: 0, ty: 0 },
  "reeble": { mult: 1.0, tx: 0 },
  "axiom technologies": { mult: 1.0, tx: 0 },
  "punon technologies": { mult: 1.0, tx: 0 },
  "raw engineering": { mult: 1.0, tx: 0 },
  "tech cryptors": { mult: 1.0, tx: 0 },
  "codex lancers": { mult: 1.0, tx: 0 },
  "alif management services": { mult: 1.0, tx: 0 },
};

function getLocalLogoPath(name: string): string | undefined {
  const key = name.trim().toLowerCase();
  const file = COMPANY_LOGOS[key];
  return file ? `/placements/companies/${file}` : undefined;
}

function getTransform(name: string) {
  const key = name.trim().toLowerCase();
  const { mult = 1, tx = 0, ty = 0 } = LOGO_TWEAKS[key] ?? {};
  const scale = BASE_SCALE * mult;
  return { scale, tx, ty };
}

/** Typed CSSProperties with CSS custom properties support */
type CSSVar = React.CSSProperties & Record<`--${string}`, string | number>;

type TickerRowProps = {
  items: Partner[];
  direction: "ltr" | "rtl"; // ltr = right→left, rtl = left→right
  speedSec?: number;
};

function TickerRow({
  items,
  direction,
  speedSec = 10,
}: TickerRowProps) {
  // Duplicate items exactly twice; track animates -50% (or +50%) for a perfect loop.
  const loopItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="group relative isolate overflow-hidden rounded-2xl bg-transparent">
      <div
        className={`marquee-track ${direction === "ltr" ? "marquee-ltr" : "marquee-rtl"
          } flex w-max py-3 md:py-2.5 sm:py-2 will-change-transform`}
        style={{ "--dur": `${speedSec}s` } as CSSVar}
      >
        {loopItems.map((partner, i) => {
          const { scale, tx, ty } = getTransform(partner.name);
          const alt = partner.logoAlt || `${partner.name} logo`;

          return (
            <div
              key={`${partner.name}-${i}`}
              className={`
                shrink-0
                w-[220px] md:w-[180px] sm:w-[150px] max-[425px]:w-[140px]
                rounded-2xl border border-black/10 bg-white
                shadow-sm transition-shadow hover:shadow-md
                p-3 md:p-2.5 sm:p-2 max-[425px]:p-2
                mr-4 md:mr-3 sm:mr-2
              `}
              title={partner.name}
            >
              <div
                className={`
                  mx-auto overflow-hidden rounded-xl
                  w-full
                  h-20 md:h-16 sm:h-14 max-[425px]:h-12
                  relative
                `}
              >
                <div
                  className="absolute inset-0 grid place-items-center"
                  style={{
                    transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
                    transformOrigin: "center",
                  }}
                >
                  <Image
                    src={partner.logoUrl}
                    alt={alt}
                    title={alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 220px, 256px"
                    priority={false}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* Pause on hover */
        .group:hover .marquee-track,
        .group .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track {
          animation-duration: var(--dur, 20s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(0, 0, 0);
          /* Prevent line wrapping and shrink issues at the seam */
          white-space: nowrap;
        }
        .marquee-ltr {
          animation-name: cdpl-marquee-ltr;
        }
        .marquee-rtl {
          animation-name: cdpl-marquee-rtl;
        }
      `}</style>
    </div>
  );
}

type Props = {
  contained?: boolean;
  /**
   * Optional list of partners fetched from Sanity by the parent server
   * component. When provided and non-empty, the rail renders these instead
   * of the curated local list. Entries without a `logoUrl` are skipped.
   */
  sanityPartners?: SanityHiringPartner[];
};

export default function PlacementsCompanyWallSection({
  contained = false,
  sanityPartners,
}: Props) {
  const partners = useMemo<Partner[]>(() => {
    // Prefer the Sanity-managed list when it has usable entries.
    if (sanityPartners && sanityPartners.length > 0) {
      const fromSanity = sanityPartners
        .filter((p): p is SanityHiringPartner & { logoUrl: string } =>
          Boolean(p.name && p.logoUrl),
        )
        .map(
          (p): Partner => ({
            name: p.name,
            logoUrl: p.logoUrl,
            logoAlt: p.logoAlt,
          }),
        );
      if (fromSanity.length > 0) return fromSanity;
    }

    // Fallback: the curated local list (kept verbatim from the original).
    return COMPANIES.flatMap((name) => {
      const logoUrl = getLocalLogoPath(name);
      return logoUrl ? [{ name, logoUrl }] : [];
    });
  }, [sanityPartners]);

  const rows = useMemo(() => {
    const r1: Partner[] = [];
    const r2: Partner[] = [];
    const r3: Partner[] = [];
    partners.forEach((p, i) => {
      if (i % 3 === 0) r1.push(p);
      else if (i % 3 === 1) r2.push(p);
      else r3.push(p);
    });
    return [r1, r2, r3];
  }, [partners]);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <section className="w-full py-10 sm:py-12" aria-label="CDPL hiring partners">
      <Wrapper>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Hiring Partners</h3>
          <div
            aria-hidden
            className="hidden sm:block h-[3px] w-40 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)",
            }}
          />
        </div>

        <div className="mt-5 space-y-4">
          {/* Row 1: right → left */}
          <TickerRow items={rows[0]} direction="ltr" speedSec={40} />
          {/* Row 2: left → right */}
          <TickerRow items={rows[1]} direction="rtl" speedSec={40} />
          {/* Row 3: right → left */}
          <TickerRow items={rows[2]} direction="ltr" speedSec={40} />
        </div>
      </Wrapper>

      <style jsx global>{`
        /* Move exactly one "list width" (50% of the doubled track) for a perfect loop */
        @keyframes cdpl-marquee-ltr {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes cdpl-marquee-rtl {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

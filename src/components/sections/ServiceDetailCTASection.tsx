import dynamic from 'next/dynamic';
import * as Icons from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import type { ServiceClient } from '@/types/service';

// Lazy button (unchanged)
const RequestButton = dynamic(() => import('@/app/services/[slug]/RequestButton'), {
  loading: () => (
    <div className="inline-flex items-center px-8 py-4 bg-gray-200 rounded-xl animate-pulse">
      <div className="h-4 w-32 bg-gray-300 rounded" />
    </div>
  ),
});

// Strongly-typed icon resolver
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;
function getIcon(name: string): LucideIcon {
  const key = name as keyof typeof Icons;
  const Icon = Icons[key];
  return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

// Safe gradients only (no purple/indigo)
const SAFE_GRADIENTS = [
  'from-sky-500 to-cyan-600',
  'from-cyan-500 to-teal-600',
  'from-blue-500 to-sky-600',
] as const;

function sanitizeGradient(input?: string): string {
  const banned = /(purple|violet|fuchsia|indigo)/i;
  if (!input || banned.test(input)) return SAFE_GRADIENTS[0];
  return input;
}

export default function ServiceDetailCTASection({ service }: { service: ServiceClient }) {
  const IconComponent = getIcon(service.iconName);
  const color = sanitizeGradient(service.color);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Subtle gradient frame */}
        <div className="relative rounded-3xl">
          <div
            className={[
              'absolute -inset-[1.5px] rounded-[1.6rem]',
              'bg-gradient-to-r',
              color,
              'opacity-50',
              'blur-[2px]',
            ].join(' ')}
            aria-hidden
          />

          {/* Card with blended patterns */}
          <div className="relative overflow-hidden rounded-[1.55rem] bg-white shadow-xl ring-1 ring-black/5">
            {/* Pattern 1: dotted grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.26]"
              style={{
                backgroundImage: 'radial-gradient(rgba(15,23,42,0.33) 1.2px, transparent 1.4px)',
                backgroundSize: '16px 16px',
                maskImage: 'radial-gradient(85% 85% at 50% 42%, #000 70%, transparent 100%)',
              }}
            />
            {/* Pattern 2: diagonal scanlines */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgba(15,23,42,0.22) 0 1px, transparent 1px 7px)',
              }}
            />
            {/* Pattern 3: soft color blobs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full blur-3xl opacity-45"
              style={{
                background:
                  'radial-gradient(circle at 30% 30%, rgba(2,132,199,0.18), rgba(2,132,199,0))',
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -right-16 h-96 w-96 rounded-full blur-3xl opacity-45"
              style={{
                background:
                  'radial-gradient(circle at 70% 70%, rgba(6,182,212,0.18), rgba(6,182,212,0))',
              }}
            />
            {/* Edge highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-50"
              style={{
                background: 'linear-gradient(180deg, rgba(2,6,23,0.08), rgba(2,6,23,0))',
              }}
            />

            {/* Split layout */}
            <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-14 lg:py-16">
              {/* Left: text + chips + CTA */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Ready to get started?
                </h2>

                <p className="mt-3 max-w-2xl text-base/7 text-slate-700 sm:text-lg/8">
                  Let’s discuss how <span className="font-semibold text-slate-900">{service.title}</span> can
                  move your team from <span className="text-sky-700">idea → impact</span>.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
                  <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200 text-slate-700">
                    Fast kickoff
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200 text-slate-700">
                    Expert guidance
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200 text-slate-700">
                    Clear outcomes
                  </span>
                </div>

                {/* Button — RequestButton unstyled */}
                <div className="mt-8">
                  <RequestButton serviceTitle={service.title} />
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  No hard sell—just a quick fit check and next steps.
                </p>
              </div>

              {/* Right: holographic rail */}
              <div className="relative">
                <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-md">
                  <div
                    className={['absolute -inset-[1px] bg-gradient-to-br', color, 'opacity-30'].join(' ')}
                    aria-hidden
                    style={{
                      clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)',
                      filter: 'blur(10px)',
                    }}
                  />
                  <div className="relative z-10 flex h-full items-center justify-center p-8">
                    <div className="relative">
                      <div className="absolute inset-[-22px] rounded-full border border-slate-200" />
                      <div className="absolute inset-[-40px] rounded-full border border-slate-200/70" />
                      <div
                        className="absolute -inset-10 rounded-full blur-2xl opacity-80"
                        style={{ background: 'radial-gradient(closest-side, rgba(2,6,23,0.08), rgba(2,6,23,0))' }}
                      />
                      <div
                        className={[
                          'relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br',
                          color,
                          'shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_30px_rgba(2,6,23,0.08)]',
                        ].join(' ')}
                      >
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Soft sheen */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-25"
                    aria-hidden
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.07) 50%, rgba(2,6,23,0) 100%)',
                      backgroundSize: '100% 200%',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Light HUD corner brackets */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-slate-300/80" />
              <div className="absolute right-4 top-4 h-7 w-7 border-r border-t border-slate-300/80" />
              <div className="absolute left-4 bottom-4 h-7 w-7 border-l border-b border-slate-300/80" />
              <div className="absolute right-4 bottom-4 h-7 w-7 border-r border-b border-slate-300/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Home, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMemo, type ComponentType, type SVGProps } from 'react';
import type { ServiceClient, DeliveryFormat } from '@/types/service';

const RequestButton = dynamic(() => import('@/app/services/[slug]/RequestButton'), {
  loading: () => (
    <div className="inline-flex items-center px-8 py-4 bg-gray-200 rounded-xl animate-pulse">
      <div className="h-4 w-32 bg-gray-300 rounded" />
    </div>
  ),
});

// Strongly-typed icon resolver (no `any`)
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;
function getIcon(name: string): LucideIcon {
  const key = name as keyof typeof Icons;
  const Icon = Icons[key];
  return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

export default function ServiceDetailHeroSection({ service }: { service: ServiceClient }) {
  const IconComponent = getIcon(service.iconName);

  const breadcrumbs = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: service.title, href: `/services/${service.slug}` },
    ],
    [service.slug, service.title]
  );

  return (
    <section className="relative isolate overflow-hidden">
      {/* --- Soft mesh background (sky/cyan only, super subtle) --- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 10% 10%, rgba(14,165,233,0.10), transparent 60%), radial-gradient(55% 45% at 90% 15%, rgba(8,145,178,0.10), transparent 60%), radial-gradient(70% 60% at 50% 110%, rgba(14,165,233,0.10), transparent 70%)',
        }}
      />

      {/* --- Minimal background pattern (CSS optimization) --- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,118,110,0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* --- Fine “glass” lines for depth (very faint) --- */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#0ea5e930 1px, transparent 1px), linear-gradient(90deg, #0ea5e930 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5 md:mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Link
                  href={c.href}
                  className={i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : 'hover:text-cyan-700'}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Title + copy */}
          <div className="md:col-span-7 lg:col-span-7">
            {/* compact chip */}
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/90 px-3 py-1 text-[11px] font-medium text-cyan-700 shadow-sm">
              🚀 Mentor-led • 🎯 Job-ready curriculum
            </span>

            {/* Clean gradient title color */}
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-700">
              {service.title}
            </h1>

            <p className="mt-3 text-lg text-slate-700 max-w-prose">{service.tagline}</p>
            <p className="mt-2 text-[15px] text-slate-700/90 max-w-2xl">{service.shortDescription}</p>

            {/* Keywords as soft badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              {(service.keywords ?? [
                'industry-relevant projects',
                'placement assistance',
                'certification',
                'hands-on labs',
              ]).map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-slate-200 text-slate-700 shadow-sm"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
                  {k}
                </span>
              ))}
            </div>

            {/* CTA — RequestButton unstyled */}
            <div className="mt-7">
              <RequestButton serviceTitle={service.title} />
            </div>
          </div>

          {/* Right: Overview card – blended with section */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/80 via-cyan-100/70 to-sky-100/80 shadow-2xl">
              <div className="relative rounded-[calc(1.5rem-1px)] bg-white/95 p-8 ring-1 ring-white/60">
                {/* interior subtle pattern */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(#0ea5e930 1px, transparent 1px), linear-gradient(90deg, #0ea5e930 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    maskImage: 'radial-gradient(120% 90% at 50% 20%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(120% 90% at 50% 20%, black 40%, transparent 100%)',
                  }}
                />
                <div className="w-20 h-20 rounded-2xl bg-cyan-600/10 flex items-center justify-center ring-1 ring-cyan-600/10">
                  <IconComponent className="w-12 h-12 text-cyan-700" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-cyan-700">
                    Program Overview
                  </span>
                </h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {(service.deliveryFormats ?? []).map((f: DeliveryFormat, idx: number) => (
                    <li key={String(idx)} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
                      <div>
                        <div className="font-semibold">{f.format}</div>
                        <div className="text-sm opacity-80">
                          {f.duration} • {f.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* soft outer glow to blend with section */}
              <div className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-gradient-to-b from-sky-400/10 to-cyan-400/0 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

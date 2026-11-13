// Server Component. Only RequestButton (and the modal it loads on click) ships JS.
import Link from 'next/link';
import { Home, ChevronRight, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import RequestButton from '@/app/services/[slug]/RequestButton';
import { getServiceIcon } from './serviceDetailShared';

const DEFAULT_KEYWORDS = [
  'industry-relevant projects',
  'placement assistance',
  'certification',
  'hands-on labs',
];

/**
 * Service hero, in the homepage hero's language: light wash, dark h1, brand
 * accents, solid buttons. Left: chip, title, tagline, description, keyword
 * chips and CTAs. Right: the delivery formats as the "Program Overview" card.
 */
export default function ServiceDetailHeroSection({ service }: { service: ServiceClient }) {
  const Icon = getServiceIcon(service.iconName);
  const keywords = service.keywords?.length ? service.keywords : DEFAULT_KEYWORDS;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
      aria-labelledby="service-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 lg:mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  <Link
                    href={c.href}
                    aria-current={isLast ? 'page' : undefined}
                    className={isLast ? 'font-semibold text-slate-900' : 'transition-colors hover:text-brand'}
                  >
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left: title + copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-brand sm:text-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Mentor-led · Job-ready curriculum
            </span>

            <h1
              id="service-heading"
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              {service.title}
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-800 sm:text-xl">{service.tagline}</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{service.shortDescription}</p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {keywords.map((k) => (
                <li
                  key={k}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {k}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <RequestButton serviceTitle={service.title} />
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Explore All Services
              </Link>
            </div>
          </div>

          {/* Right: delivery formats */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-md" aria-hidden="true">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Program Overview</h2>
                  <p className="text-sm text-slate-500">Formats you can choose from</p>
                </div>
              </div>

              <ul className="mt-6 divide-y divide-slate-100">
                {(service.deliveryFormats ?? []).map((f) => (
                  <li key={f.format} className="flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">{f.format}</p>
                      {f.description && <p className="mt-0.5 text-sm text-slate-600">{f.description}</p>}
                    </div>
                    {f.duration && (
                      <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-brand">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {f.duration}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

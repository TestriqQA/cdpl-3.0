import { CheckCircle2, Target, Award } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import { ServiceSectionHeader } from './serviceDetailShared';

/**
 * Key Features and Benefits as two matching cards. Colours are literal class
 * names: the old version built them at runtime (`bg-${accent}-50`), which
 * Tailwind cannot see, so its tiles and ticks never got their colours.
 */
const COLUMNS = [
  { key: 'features', title: 'Key Features', Icon: Target, strip: 'bg-brand', tile: 'bg-brand', tick: 'text-brand' },
  { key: 'benefits', title: 'Benefits', Icon: Award, strip: 'bg-emerald-600', tile: 'bg-emerald-600', tick: 'text-emerald-600' },
] as const;

export default function ServiceDetailFeaturesBenefitsSection({ service }: { service: ServiceClient }) {
  return (
    <section className="bg-gray-50 py-12 lg:py-16" aria-labelledby="features-benefits-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          id="features-benefits-heading"
          pill="What You Get"
          title={<>Features &amp; <span className="text-brand">Benefits</span></>}
          intro="Everything included in the program, and what your team gains from it."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {COLUMNS.map(({ key, title, Icon, strip, tile, tick }) => (
            <article
              key={key}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${strip}`} />
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile} text-white shadow-md`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h3>
              </div>

              <ul className="mt-6 space-y-3.5">
                {service[key].map((item, i) => (
                  <li key={`${item}-${i}`} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${tick}`} aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

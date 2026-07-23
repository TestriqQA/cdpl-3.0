import { CheckCircle, Target, Award } from 'lucide-react';
import type { ServiceClient } from '@/types/service';

export default function ServiceDetailFeaturesBenefitsSection({ service }: { service: ServiceClient }) {
  // Calm brand accents (feel free to tweak)
  const FEATURE_ACCENT = 'sky';     // tailwind color name
  const BENEFIT_ACCENT = 'indigo';  // tailwind color name

  return (
    <section className="w-full" aria-labelledby="features-benefits">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Section cue: single hairline, no gradient */}
        <div aria-hidden className="mb-8 h-[3px] w-28 rounded-full bg-slate-900/10" />

        <div id="features-benefits" className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* ---------- FEATURES ---------- */}
          <article
            className="rounded-2xl bg-white ring-1 ring-slate-200 p-7 md:p-8"
            aria-label="Key Features"
          >
            <header className="flex items-center gap-3 mb-6">
              <div
                className={[
                  'size-12 rounded-xl flex items-center justify-center',
                  `bg-${FEATURE_ACCENT}-50 ring-1 ring-${FEATURE_ACCENT}-200`,
                ].join(' ')}
              >
                <Target className={`size-6 text-${FEATURE_ACCENT}-700`} />
              </div>
              {/* Title colored to FEATURES accent */}
              <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight text-${FEATURE_ACCENT}-800`}>
                Key Features
              </h2>
            </header>

            <ul className="divide-y divide-slate-100">
              {service.features.map((feature, index) => (
                <li key={`${feature}-${index}`} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={[
                        'mt-0.5 inline-flex items-center justify-center rounded-full',
                        'ring-1',
                        `bg-${FEATURE_ACCENT}-50 ring-${FEATURE_ACCENT}-200 text-${FEATURE_ACCENT}-700`,
                        'size-6',
                      ].join(' ')}
                    >
                      <CheckCircle className="size-3.5" />
                    </span>
                    <span className="text-slate-700 leading-relaxed">{feature}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* ---------- BENEFITS ---------- */}
          <article
            className="rounded-2xl bg-white ring-1 ring-slate-200 p-7 md:p-8"
            aria-label="Benefits"
          >
            <header className="flex items-center gap-3 mb-6">
              <div
                className={[
                  'size-12 rounded-xl flex items-center justify-center',
                  `bg-${BENEFIT_ACCENT}-50 ring-1 ring-${BENEFIT_ACCENT}-200`,
                ].join(' ')}
              >
                <Award className={`size-6 text-${BENEFIT_ACCENT}-700`} />
              </div>
              {/* Title colored to BENEFITS accent */}
              <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight text-${BENEFIT_ACCENT}-800`}>
                Benefits
              </h2>
            </header>

            <ul className="divide-y divide-slate-100">
              {service.benefits.map((benefit, index) => (
                <li key={`${benefit}-${index}`} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={[
                        'mt-0.5 inline-flex items-center justify-center rounded-full',
                        'ring-1',
                        `bg-${BENEFIT_ACCENT}-50 ring-${BENEFIT_ACCENT}-200 text-${BENEFIT_ACCENT}-700`,
                        'size-6',
                      ].join(' ')}
                    >
                      <CheckCircle className="size-3.5" />
                    </span>
                    <span className="text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

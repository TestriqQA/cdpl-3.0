import type { ServiceClient } from '@/types/service';
import RequestButton from '@/app/services/[slug]/RequestButton';
import { tileColour } from './serviceDetailShared';

/**
 * Our Methodology as a numbered timeline, laid out like the homepage's "How
 * We Make You Job-Ready": intro on the left (sticky from `lg` up), steps on
 * the right. Replaces the seven-layer gradient cards and the repeated
 * "Step • Process • Best practice" line.
 */
export default function ServiceDetailMethodologySection({ service }: { service: ServiceClient }) {
  const methods = (service.methodology ?? []).filter(Boolean);
  if (methods.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="methodology-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              How We Deliver
            </span>
            <h2
              id="methodology-heading"
              className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Our <span className="text-brand">Methodology</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              A clear, step-by-step process, from the first conversation to the follow-up after delivery.
            </p>
            <div className="mt-8 hidden lg:block">
              <RequestButton serviceTitle={service.title} />
            </div>
          </div>
        </div>

        <ol className="relative space-y-4 lg:col-span-7 lg:space-y-5">
          <span aria-hidden="true" className="absolute bottom-8 left-6 top-8 w-0.5 bg-slate-200" />
          {methods.map((step, i) => (
            <li key={`method-${i}`} className="relative flex gap-4 sm:gap-5">
              <span
                className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tileColour(i)} text-lg font-bold text-white shadow-lg ring-4 ring-white`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-lg font-bold leading-snug text-gray-900">{step}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

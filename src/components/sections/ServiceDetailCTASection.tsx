import Link from 'next/link';
import { CircleCheck } from 'lucide-react';
import type { ServiceClient } from '@/types/service';
import RequestButton from '@/app/services/[slug]/RequestButton';

const POINTS = ['Fast kickoff', 'Expert guidance', 'Clear outcomes'];

/**
 * Closing CTA, in the style of the Our Team page's consultation band: an
 * orange band with the heading, copy and a tick list on the left and white
 * buttons on the right (stacked and centred on phones). The heading and copy
 * are unchanged.
 */
export default function ServiceDetailCTASection({ service }: { service: ServiceClient }) {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="service-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 id="service-cta-heading" className="text-2xl font-bold sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-3 text-white/90">
                Let&apos;s discuss how <span className="font-semibold text-white">{service.title}</span> can move your
                team from idea to impact.
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                {POINTS.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <CircleCheck className="h-4 w-4" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <RequestButton serviceTitle={service.title} variant="white" />
                <Link
                  href="/contact-us"
                  className="inline-flex items-center rounded-xl border-2 border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <p className="text-sm text-white/80">No hard sell, just a quick fit check and next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

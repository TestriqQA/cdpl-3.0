import type { ServiceClient } from '@/types/service';

/**
 * About This Service: heading on the left, the full description on the right
 * with a brand rule. The old background (four always-animating SVG layers and
 * a light cone) is gone; the heading and copy are unchanged.
 */
export default function ServiceDetailAboutSection({ service }: { service: ServiceClient }) {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="about-service-heading">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-4">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Overview
          </span>
          <h2
            id="about-service-heading"
            className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            About This <span className="text-brand">Service</span>
          </h2>
        </div>

        <p className="border-l-4 border-brand pl-5 text-lg leading-8 text-slate-700 sm:pl-6 lg:col-span-8 lg:self-center">
          {service.fullDescription}
        </p>
      </div>
    </section>
  );
}

// src/components/sections/LocationsCTASection.tsx
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

const POINTS = ["Placement assistance", "No-cost EMI available", "Hybrid & weekend batches"];

/**
 * Closing CTA in the Our Team footer style: an orange gradient band with the
 * pitch and a checklist on the left, a white primary and an outlined
 * secondary button on the right. Server component.
 */
export default function LocationsCTASection() {
  return (
    <section aria-labelledby="locations-cta-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 id="locations-cta-heading" className="text-2xl font-bold sm:text-3xl">
                Ready to start learning near you?
              </h2>
              <p className="mt-3 text-white/90">
                Join learners transforming their careers in their hometowns. Flexible modes, mentor support, and
                placement guidance included.
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

            <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
              >
                Contact Us — 20% off <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#locations-directory"
                className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
              >
                View all locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

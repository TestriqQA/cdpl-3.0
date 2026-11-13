// Server Component: no client JS.
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/**
 * HomePlacementResultsBand - placement numbers + "View All Success Stories".
 *
 * Sits right after the Hiring Partners wall on the homepage, so the numbers
 * (including "50+ Hiring Partners") sum up the logos just shown. It used to
 * be the last block of HomePlacementSupportSection.
 */

// Hard-coded figures; the stats branch swaps "Learners Placed" for <SiteStat>.
const STATS = [
  { number: '500+', label: 'Learners Placed' },
  { number: '1.5×', label: 'Avg Package Growth' },
  { number: '50+', label: 'Cities Covered' },
  { number: '50+', label: 'Hiring Partners' },
];

export default function HomePlacementResultsBand() {
  return (
    <section aria-label="Placement results" className="bg-white pb-10 pt-2 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#c96400] via-[#e67a00] to-brand p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-300 opacity-30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold tracking-tight md:text-4xl">{stat.number}</p>
                  <p className="mt-1 text-sm font-medium text-orange-50 md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/jobs/placements"
              className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-7 py-4 font-bold text-orange-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:self-center"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Server Component. Figures are in the server HTML (no count-up from 0).
import type { ReactNode } from 'react';
import type { ServiceClient } from '@/types/service';
import { SiteStat } from '@/components/stats/SiteStatsProvider';

/**
 * Stats band in the homepage results-band style. A service's own stats (from
 * Sanity) are shown when present. Otherwise the band uses the site-wide
 * figures: students placed and rating come from the central (live) site
 * stats; partners and years match the rest of the site. This replaces the old
 * unsourced fallback of "5000 learners" and "92% placement".
 */
export default function ServiceDetailStatsSection({ service }: { service: ServiceClient }) {
  const stats: { value: ReactNode; label: string }[] = service.stats?.length
    ? service.stats.map((s) => ({ value: `${s.value}${s.suffix ?? ''}`, label: s.label }))
    : [
        { value: <SiteStat k="studentsPlaced" />, label: 'Students Placed' },
        { value: <SiteStat k="rating" />, label: 'Average Rating' },
        { value: '50+', label: 'Hiring Partners' },
        { value: '14+', label: 'Years of Training' },
      ];

  return (
    <section aria-label={`${service.title} in numbers`} className="bg-white pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#c96400] via-[#e67a00] to-brand p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-300 opacity-30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="md:border-l md:border-white/25 md:pl-6 md:first:border-l-0 md:first:pl-0">
                <p className="text-3xl font-extrabold tracking-tight md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-orange-50 md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { FileCheck, Users2, Briefcase, TrendingUp, ChevronRight } from 'lucide-react';

/**
 * HomePlacementSupportSection - We Don't Stop at Training
 *
 * Reads as what we do -> how we do it: four service cards and the 5-step
 * process. The results band (stats + "View All Success Stories") now sits
 * after the Hiring Partners wall as HomePlacementResultsBand. Headings and copy are
 * unchanged (apart from fixing an "our our" typo).
 */

const SERVICES = [
  {
    icon: FileCheck,
    title: 'Resume Building',
    description: 'Get your resume reviewed and optimized by industry experts to stand out to recruiters.',
  },
  {
    icon: Users2,
    title: 'Mock Interviews',
    description: 'Practice with real interview scenarios and get feedback to improve your performance.',
  },
  {
    icon: Briefcase,
    title: 'Job Referrals',
    description: 'Direct referrals to our hiring partner network across India for interviews.',
  },
  {
    icon: TrendingUp,
    title: 'Career Guidance',
    description: 'One-on-one career counseling to help you choose the right path and companies.',
  },
];


const PROCESS = [
  { title: 'Profile Building', desc: 'Resume, LinkedIn, Portfolio' },
  { title: 'Skill Assessment', desc: 'Mock tests & evaluations' },
  { title: 'Interview Prep', desc: 'Mock interviews & feedback' },
  { title: 'Job Matching', desc: 'Match with hiring partners' },
  { title: 'Offer Support', desc: 'Salary negotiation help' },
];

export default function HomePlacementSupportSection() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="placement-support-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Placement Support
          </span>
          <h2 id="placement-support-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We Don&apos;t Stop at <span className="text-brand">Training</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our dedicated placement cell works tirelessly to ensure you land your dream job with comprehensive support at every step.
          </p>
        </div>

        {/* What we do */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
              {/* Icon and title side by side */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold leading-snug text-gray-900">{s.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>

        {/* How: 5 steps as connected cards, in the same card language as the
            services above and the band below. */}
        <div className="mt-12 lg:mt-14">
          <h3 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Our 5-Step Placement Process</h3>

          <ol className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-5 md:gap-5">
            {PROCESS.map((step, i) => (
              <li
                key={step.title}
                className="relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md md:flex-col md:items-start md:gap-3"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-gray-900">{step.title}</h4>
                  <p className="mt-0.5 text-sm text-gray-600">{step.desc}</p>
                </div>
                {/* Chevron to the next step (md and up) */}
                {i < PROCESS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow ring-1 ring-orange-100 md:grid"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

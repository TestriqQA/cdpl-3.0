"use client";

import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

type Job = string;

const jobs: Job[] = [
  'Digital Marketing Manager',
  'Social Media Manager',
  'SEO Specialist',
  'Content Marketing Manager',
  'Email Marketing Specialist',
  'Web Analyst',
  'PPC Specialist',
  'Inbound Marketing Manager',
  'Digital Analytics Manager',
  'Influencer Marketer',
  'Brand Manager',
  'Digital Marketing Strategist',
  'Conversion Rate Optimizer',
  'E-commerce Marketing Specialist',
  'Online Reputation Manager',
  'CRO Specialist',
  'CRM Manager',
];

// Distinct soft-accent chips (no repeated color back-to-back)
const ACCENTS = [
  { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200', ring: 'focus:ring-sky-300' },
  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', ring: 'focus:ring-emerald-300' },
  { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', ring: 'focus:ring-amber-300' },
  { bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200', ring: 'focus:ring-violet-300' },
  { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200', ring: 'focus:ring-rose-300' },
  { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200', ring: 'focus:ring-indigo-300' },
  { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', ring: 'focus:ring-teal-300' },
];

export default function CareerSection() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Digital Marketing & Analytics Master Program";


  return (
    <section id="careers" aria-labelledby="careers-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-10">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 id="careers-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Know Your Future as a{' '}
            <span className="text-green-700">Digital Marketing & Analytics Professional</span>
          </h2>

          {/* KPI band */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Stat badge="Global Openings" value="141,000+" note="LinkedIn & job boards worldwide" />
            <Stat badge="Avg Salary (IN)" value="₹6–18 LPA" note="Role & location dependent" />
            <Stat badge="Remote Friendly" value="70%+" note="Hybrid/remote opportunities" />
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-600">
            High-growth roles across <strong>SEO</strong>, <strong>Performance Marketing (PPC)</strong>,{' '}
            <strong>Social Media</strong>, <strong>Content</strong>, <strong>Analytics/Attribution</strong> and{' '}
            <strong>CRM/Lifecycle</strong>. Build a portfolio recruiters love.
          </p>
        </header>

        {/* Chips grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobs.map((job, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <span
                key={job}
                role="listitem"
                tabIndex={0}
                className={[
                  'inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.05)]',
                  'transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2',
                  a.bg,
                  a.text,
                  a.border,
                  a.ring,
                ].join(' ')}
                aria-label={job}
                title={job}
              >
                {job}
              </span>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 text-left">
          <TrustCard
            title="Placement Support"
            points={['Resume & portfolio review', 'Mock interviews', 'Job alerts & referrals']}
            color="border-sky-200 bg-sky-50"
          />
          <TrustCard
            title="Skills Recruiters Seek"
            points={['GA4 + GTM', 'Meta & Google Ads', 'Data Studio/Looker, CRM']}
            color="border-emerald-200 bg-emerald-50"
          />
          <TrustCard
            title="Domains Hiring Fast"
            points={['E-commerce', 'EdTech & SaaS', 'Finance & D2C']}
            color="border-amber-200 bg-amber-50"
          />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Talk to a program advisor"
          >
            Talk to a Program Advisor
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere. <span className="font-semibold text-slate-800">If you want to be the best, CDPL is your place.</span>
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Digital Marketing Course Page - Career Section - Talk to Advisor"
        courseName={courseName}
      />

    </section>
  );
}

/* --- Small subcomponents --- */

function Stat({ badge, value, note }: { badge: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{badge}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}

function TrustCard({
  title,
  points,
  color,
}: {
  title: string;
  points: string[];
  color: string;
}) {
  return (
    <article
      className={[
        'rounded-xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
        color,
      ].join(' ')}
      aria-label={title}
    >
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-[13px] text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

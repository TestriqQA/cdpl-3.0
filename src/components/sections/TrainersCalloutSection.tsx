"use client";

import Link from "next/link";
import { CheckCircle2, Clock3, UserCheck, Sparkles, ShieldCheck, GraduationCap } from "lucide-react";

/**
 * TrainersCalloutSection — light, sleek, slightly futuristic
 * - SEO-focused copy for mentor-led, job-ready training
 * - Accessible markup with ARIA labels + schema.org ItemList
 * - Subtle brand accents (#ff8c00) and motion-ready classes
 * - Fully responsive with hover & focus states
 */

type Callout = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  bullets?: string[];
};

const items: Callout[] = [
  {
    icon: CheckCircle2,
    title: "Industry Projects",
    text:
      "Work on real-world capstones mapped to hiring partner rubrics—portfolio-first learning that proves skills on day one.",
    bullets: ["SDET-ready scenarios", "API & E2E automation suites", "CI/CD pipelines"],
  },
  {
    icon: UserCheck,
    title: "Career Services",
    text:
      "Placement assistance with resume sprints, mock interviews, and direct referrals to hiring partners across QA & Data roles.",
    bullets: ["ATS-optimized profiles", "Interview prep & feedback", "Referral network access"],
  },
  {
    icon: Clock3,
    title: "Flexible Schedules",
    text:
      "Weekend and evening batches for working learners—live mentor-led classes with lifetime access to recordings.",
    bullets: ["Hybrid cohorts", "Doubt-clearing pods", "Lifetime community"],
  },
];

export default function TrainersCalloutSection() {
  return (
    <section
      aria-labelledby="trainers-callouts-heading"
      className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-[radial-gradient(600px_80px_at_50%_0,#ff8c00_10%,transparent_60%)] opacity-20"
      />

      {/* Header */}
      <div className="mb-6 flex flex-col items-start gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Mentor-Led, Job-Ready Training
          </span>
          <h2
            id="trainers-callouts-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Why learn with{" "}
            <span className="bg-gradient-to-r from-[#ff8c00] via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Cinute Digital mentors
            </span>
            ?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-700 sm:text-base">
            Accelerate your career with <strong>mentor-led courses</strong>, <strong>hands-on automation projects</strong>,
            and <strong>placement assistance</strong> designed to meet real employer expectations in{" "}
            <em>Manual & Automation Testing, API Testing, and Data Science</em>.
          </p>
        </div>

        {/* Trust chips */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-inset ring-orange-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            Outcomes First
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
            <GraduationCap className="h-3.5 w-3.5" />
            Job-Ready Skills
          </span>
        </div>
      </div>

      {/* ItemList for SEO */}
      <div
        className="grid items-stretch gap-6 md:grid-cols-3"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-label="Program advantages"
      >
        {items.map((it, idx) => (
          <article
            key={it.title}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md"
          >
            <meta itemProp="position" content={String(idx + 1)} />
            <div className="flex items-center gap-3">
              <it.icon className="h-5 w-5 text-slate-800" aria-hidden="true" />
              <h3 itemProp="name" className="text-base font-semibold text-slate-900">
                {it.title}
              </h3>
            </div>

            <p itemProp="description" className="mt-2 text-sm text-slate-700">
              {it.text}
            </p>

            {it.bullets && (
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Subtle gradient border accent */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-orange-200" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-orange-200/70 to-transparent" />
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/apply"
          className="inline-flex items-center justify-center rounded-2xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          Apply for Mentor-Led Programs
        </Link>
        <Link
          href="/curriculum"
          className="inline-flex items-center justify-center rounded-2xl border border-brand bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-200"
        >
          View Curriculum & Syllabus
        </Link>
      </div>

      {/* JSON-LD: rich snippet for ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: items.map((it, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: it.title,
              description: it.text,
            })),
          }),
        }}
      />
    </section>
  );
}

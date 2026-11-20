// Server Component: no client JS. Hover effects are pure CSS.
import React from 'react';
import { Video, FileText, Code, Users, Award, Headphones, CheckCircle2, Target } from 'lucide-react';

/**
 * HomeLearningExperienceSection - How We Make You Job-Ready
 *
 * Laid out as a numbered path rather than a grid of equal cards: an intro and
 * an outcome card on the left (sticky from `lg` up), and the six steps as a
 * timeline on the right. The step titles and descriptions, the h2 and the
 * intro paragraph are unchanged; the steps are ordered as a learner meets them.
 */

const STEPS = [
  {
    icon: Video,
    title: 'Live Interactive Classes',
    description: 'Attend live sessions with industry experts, ask questions in real-time, and collaborate with peers.',
    tile: 'bg-blue-600',
    text: 'text-blue-600',
    hover: 'hover:border-blue-200',
  },
  {
    icon: FileText,
    title: 'Comprehensive Materials',
    description: 'Access to detailed study materials, recorded sessions, and lifetime learning resources.',
    tile: 'bg-purple-600',
    text: 'text-purple-600',
    hover: 'hover:border-purple-200',
  },
  {
    icon: Code,
    title: 'Hands-On Projects',
    description: '90+ real-world projects across different domains to build your portfolio and gain practical experience.',
    tile: 'bg-brand',
    text: 'text-brand',
    hover: 'hover:border-orange-200',
  },
  {
    icon: Users,
    title: '1:1 Mentorship',
    description: 'Personal guidance from mentors with extensive industry experience at top companies.',
    tile: 'bg-green-600',
    text: 'text-green-600',
    hover: 'hover:border-green-200',
  },
  {
    icon: Award,
    title: 'Industry Certifications',
    description: 'Prepare for globally recognized certifications like ISTQB, AWS, and more with expert guidance.',
    tile: 'bg-red-600',
    text: 'text-red-600',
    hover: 'hover:border-red-200',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description: '24/7 doubt resolution, career guidance, and placement assistance even after course completion.',
    tile: 'bg-indigo-600',
    text: 'text-indigo-600',
    hover: 'hover:border-indigo-200',
  },
];

const OUTCOMES = [
  'Job-ready skills from live, expert-led training',
  'A portfolio built on real-world projects',
  'Certification prep for ISTQB and more',
  'Mentors and support even after you finish',
];

export default function HomeLearningExperienceSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-12 lg:py-16"
      aria-labelledby="learning-experience-heading"
    >
      {/* Soft colour wash behind the timeline */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-gradient-to-br from-purple-200 to-blue-100 opacity-30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Intro + outcome (sticky on desktop) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              Learning Experience
            </span>
            <h2
              id="learning-experience-heading"
              className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl lg:leading-tight"
            >
              How We Make You <span className="text-brand">Job-Ready</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our proven methodology combines live training, hands-on projects, and expert mentorship to ensure you&apos;re ready for the industry from day one.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 text-white shadow-xl">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand opacity-20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand shadow-lg" aria-hidden="true">
                  <Target className="h-5 w-5" />
                </span>
                <p className="text-lg font-bold">What you walk away with</p>
              </div>
              <ul className="relative mt-5 space-y-3">
                {OUTCOMES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* The path: numbered timeline */}
        <ol className="relative space-y-4 lg:col-span-7 lg:space-y-5">
          {/* Connecting line through the icon tiles */}
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-0.5 bg-slate-200"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex gap-4 sm:gap-5">
              <span
                className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl ${step.tile} text-white shadow-lg ring-4 ring-white`}
                aria-hidden="true"
              >
                <step.icon className="h-6 w-6" />
              </span>
              <div
                className={`group flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${step.hover}`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider ${step.text}`}>
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

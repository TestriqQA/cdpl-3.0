'use client';
import { Users, GraduationCap, Briefcase, Target, ArrowRight } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { motion } from 'framer-motion';
import type { JSX } from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const EnrollModal = dynamic(() => import('@/components/EnrollModal'), { ssr: false, loading: () => <SectionLoader label="Loading enroll modal..." /> });

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}
type Audience = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const audience: Audience[] = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Career Switchers',
    description: 'Transition from non-tech roles to QA with mentor-led projects. Learn what is selenium testing from basics.',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-700',
    border: 'border-sky-200',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Fresh Graduates',
    description: 'BTech • BCA • BCom — get job-ready skills fast. Perfect for tester fresher candidates.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Manual Testers',
    description: 'Level up to automation (ui testing • API • Mobile • CI/CD). Master selenium methods.',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    border: 'border-amber-200',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Developers',
    description: 'Add reliable testing to your stack. Use selenium practice sites and jest testing knowledge.',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-700',
    border: 'border-violet-200',
  },
];

export default function WhoShouldEnroll() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="who-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic frame + dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute left-1/2 top-6 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-slate-200 md:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + SEO copy */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="who-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who Should <span className="text-ST">Enroll</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
            No prior experience required. Ideal for <strong>tester fresher</strong> candidates, <strong>career switchers</strong>,{' '}
            <strong>fresh graduates</strong>, <strong>manual testers</strong>, and{' '}
            <strong>developers</strong> seeking <em>job-ready QA & SDET skills</em>—framework
            design, <strong>ci testing</strong>, and real <strong>automation testing projects with selenium</strong>.
          </p>

          {/* Micro-badges with distinct colors */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
              Beginner Friendly
            </span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700">
              Mentor-Led Cohort
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">
              Portfolio Projects
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-700">
              Interview Prep
            </span>
          </div>
        </motion.header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <IconCard
                {...a}
                className={[
                  'h-full transition',
                  'hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                ].join(' ')}
              />
            </motion.div>
          ))}
        </div>

        {/* SEO supportive copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Gain hands-on experience with <strong>Selenium/Appium</strong>,{' '}
          <strong>REST Assured</strong>, <strong>Cypress/Playwright</strong>, Git, and{' '}
          <strong>CI/CD pipelines</strong>. Graduate with a portfolio that showcases
          <strong> real-world QA impact</strong>.
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Advanced Manual and Automation Testing Master Program"
        source="Master Program Course Page - Who Should Enroll Section - Enroll Now"
      />

    </section>
  );
}

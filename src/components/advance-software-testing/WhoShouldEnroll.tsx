'use client';
import { Users, GraduationCap, Briefcase, Target, ArrowRight } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import EnrollModal from '@/components/EnrollModal';

type Audience = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const audience: Audience[] = [
  { icon: <Users className="w-6 h-6" />, title: 'Manual Testers', description: 'Upgrade to automation (UI + API + Mobile)', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200' },
  { icon: <GraduationCap className="w-6 h-6" />, title: 'Fresh Graduates', description: 'BTech • BCA • MCA — job-ready in weeks', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Briefcase className="w-6 h-6" />, title: 'Career Switchers', description: 'Non-tech to SDET with mentor-led projects', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
  { icon: <Target className="w-6 h-6" />, title: 'Developers', description: 'Add reliable testing to your skillset', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
];

export default function WhoShouldEnroll() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="enroll-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle frame for a sleek, slightly futuristic feel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading & SEO-supportive copy */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="enroll-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Who Should <span className="text-ST">Join</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Perfect for <strong>manual testers</strong>, <strong>fresh graduates</strong>,{' '}
            <strong>career switchers</strong>, and <strong>developers</strong> who want industry-ready
            <em> Automation Testing</em> & <em> SDET</em> skills-framework design, CI/CD, and real projects.
          </p>
          {/* micro badges row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Beginner Friendly
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Mentor-Led Cohort
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Portfolio Projects
            </span>
          </div>
        </motion.header>

        {/* Cards Grid */}
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
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Whether you’re transitioning from manual QA or enhancing your dev toolkit, this program
          covers <strong>Selenium/Appium</strong>, <strong>REST Assured</strong>, <strong>Playwright/Cypress</strong>,
          version control, and <strong>CI/CD</strong>-everything required to stand out as an industry-ready{' '}
          <strong>SDET</strong>.
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
        courseName="Advanced Software Testing"
        source="Advanced Software Testing Course Page - Who Should Enroll Section - Enroll Now"
      />

    </section>
  );
}

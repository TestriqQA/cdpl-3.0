'use client';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Cpu,
  Bug,
  BadgeCheck,
} from 'lucide-react';
import IconCard from '../ui/IconCard';
import { JSX } from 'react';

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const benefits: Benefit[] = [
  { icon: <Zap />, title: '90% Faster Testing', description: 'Automate UI, API, and mobile flows with reliable assertions. Master selenium automation testing for speed.', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Shield />, title: 'Zero Critical Bugs', description: 'Shift-left with CI/CD gates, flaky test control, & quality bars. Learn selenium best practices.', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
  { icon: <Globe />, title: 'Test on Real Devices', description: 'Cloud device farms + local emulators for true user coverage. Appium selenium integration.', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
  { icon: <TrendingUp />, title: 'Higher QA Salaries', description: 'SDETs command 30–40% more with automation & DevOps skills. SDET training pays off.', bg: 'bg-blue-50', iconColor: 'text-blue-700', border: 'border-blue-200' },
  { icon: <Cpu />, title: 'AI-Powered Testing', description: 'Self-healing locators, smart retries, & insights from reports. Modern selenium online course approach.', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
  { icon: <Bug />, title: 'Full-Stack QA', description: 'UI + API + DB + Mobile, performance & security touchpoints. Complete automation training.', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
];

export default function WhyAdvancedTesting() {


  return (
    <section
      id="why-advanced-testing"
      aria-labelledby="why-advanced-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle separators for a sleek, light, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 shadow-md rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Industry-ready • CI/CD-first • Automation-focused
          </p>

          <h2
            id="why-advanced-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Master <span className="text-ST">Selenium Automation Training</span> in 2026?
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl mx-auto">
            <strong>Selenium training</strong> is now a core engineering skill. Build expertise across <strong>UI, API, Mobile</strong>, and
            <strong> DevOps</strong> workflows to become a <strong>job-ready SDET</strong> with measurable quality impact. This <strong>selenium full course</strong> covers everything from basics to advanced automation frameworks.
          </p>
        </motion.header>

        {/* Benefits grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <IconCard
                {...b}
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* SEO supportive microcopy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Learn <strong>framework design</strong>, <strong>self-healing tests</strong>, <strong>parallel execution</strong>,{' '}
          <strong>reporting & metrics</strong>, and <strong>release quality gates</strong>—skills hiring managers expect
          in modern <strong>SDET</strong> roles. This <strong>selenium training near me</strong> prepares you for top companies.
        </p>
      </div>

    </section>
  );
}

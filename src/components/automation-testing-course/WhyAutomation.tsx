'use client';
import { Zap, Cpu, Shield, Globe, TrendingUp, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
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
  { icon: <Zap className="w-6 h-6" />, title: '95% Faster Releases', description: 'CI/CD pipelines, parallel test execution, rapid feedback loops.', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200' },
  { icon: <Cpu className="w-6 h-6" />, title: 'AI Self-Healing Tests', description: 'Reduce flakiness with locator healing & smart retries.', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
  { icon: <Shield className="w-6 h-6" />, title: 'Zero Regression Bugs', description: 'Automated smoke, sanity, and nightly suites with reports.', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Globe className="w-6 h-6" />, title: 'Cross-Platform Mastery', description: 'Web, Mobile, API & Desktop testing in one skillset.', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
  { icon: <Bot className="w-6 h-6" />, title: 'Future-Proof SDET', description: 'Blend AI, DevOps, and QA to lead quality engineering.', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Top-Tier Salaries', description: 'SDETs command premium pay with in-demand automation skills.', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
];

export default function WhyAutomation() {


  return (
    <section
      id="why-automation"
      aria-labelledby="why-automation-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle separators for a clean, slightly futuristic frame */}
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
          <h2
            id="why-automation-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why Master <span className="text-ST">Automation</span> in 2025?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Automation Testing and <strong>SDET</strong> skills accelerate delivery, improve reliability,
            and unlock higher salaries. Learn modern tooling, <em>AI-assisted testing</em>, and CI/CD to
            become <strong>industry-ready</strong>.
          </p>

          {/* concise badges with distinct colors (no repeats) */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">CI/CD Ready</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">AI-Assisted</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">Stable Suites</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-800">Cross-Platform</span>
          </div>
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
                className="h-full hover:shadow-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Master tools like <strong>Selenium</strong>, <strong>Playwright</strong>, <strong>Cypress</strong>,
          <strong> REST Assured</strong>, and <strong>Jenkins</strong> while learning <em>test strategy, reporting,
            observability,</em> and <em>scalable frameworks</em> that hiring managers value.
        </p>
      </div>
    </section>
  );
}

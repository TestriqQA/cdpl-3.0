'use client';
import { motion } from 'framer-motion';
import { Briefcase, Building2, ArrowRight, BadgeCheck, TrendingUp } from 'lucide-react';

import { useState } from 'react';
import CareerSessionModal from '@/components/CareerSessionModal';

const roles = [
  'ETL Tester',
  'Data QA Engineer',
  'DWH Tester',
  'BI Tester',
  'Data Validation Analyst',
  'SQL Tester',
  'Informatica Tester',
  'Talend Tester',
];

const companies = ['TCS', 'Infosys', 'Cognizant', 'Accenture', 'Capgemini', 'Wipro', 'HCL', 'IBM'];

// Distinct, non-repeating accents (no heavy gradients)
const roleAccents = [
  'bg-sky-50 border-sky-200 text-sky-900',
  'bg-emerald-50 border-emerald-200 text-emerald-900',
  'bg-amber-50 border-amber-200 text-amber-900',
  'bg-violet-50 border-violet-200 text-violet-900',
  'bg-rose-50 border-rose-200 text-rose-900',
  'bg-indigo-50 border-indigo-200 text-indigo-900',
  'bg-teal-50 border-teal-200 text-teal-900',
  'bg-orange-50 border-orange-200 text-orange-900',
];

const companyAccents = [
  'bg-slate-50 border-slate-200',
  'bg-lime-50 border-lime-200',
  'bg-fuchsia-50 border-fuchsia-200',
  'bg-cyan-50 border-cyan-200',
  'bg-stone-50 border-stone-200',
  'bg-yellow-50 border-yellow-200',
  'bg-blue-50 border-blue-200',
  'bg-pink-50 border-pink-200',
];

export default function CareerSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="relative py-10 bg-white"
    >
      {/* subtle top/bottom separators for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-6 inline-flex items-center gap-2 shadow-md rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            85,000+ openings • Avg salary ₹6–14 LPA
          </p>
          <h2
            id="career-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            High-Paying <span className="text-ST">ETL Testing</span> Careers
          </h2>
          <p className="mt-8 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Break into <strong>Data QA</strong>, <strong>DWH Testing</strong>, and <strong>BI Quality</strong> roles with
            hands-on projects, interview prep, and portfolio-driven learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Roles */}
          <motion.section
            aria-labelledby="roles-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3
              id="roles-heading"
              className="mb-5 flex items-center gap-3 text-2xl font-semibold text-slate-900"
            >
              <Briefcase className="h-7 w-7 text-sky-700" />
              Job Roles
            </h3>

            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {roles.map((r, i) => (
                <li
                  key={r}
                  className={[
                    'rounded-xl border px-4 py-3 text-center text-sm font-medium transition',
                    'hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                    roleAccents[i % roleAccents.length],
                  ].join(' ')}
                >
                  <span className="inline-block leading-snug">{r}</span>
                </li>
              ))}
            </ul>

            {/* Micro benefit line */}
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-600">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
              Growth tracks: Senior ETL Tester → Test Lead → Data Quality Manager
            </p>
          </motion.section>

          {/* Companies */}
          <motion.section
            aria-labelledby="companies-heading"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3
              id="companies-heading"
              className="mb-5 flex items-center gap-3 text-2xl font-semibold text-slate-900"
            >
              <Building2 className="h-7 w-7 text-violet-700" />
              Top Hiring Companies
            </h3>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {companies.map((c, i) => (
                <li
                  key={c}
                  className={[
                    'rounded-xl border px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition',
                    'hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                    companyAccents[i % companyAccents.length],
                  ].join(' ')}
                >
                  {c}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-center md:text-left text-xs text-slate-600">
              Plus 500+ startups & MNCs across fintech, retail, healthcare, and SaaS.
            </p>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 text-center"
        >
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            aria-label="Get placed in 30 days"
          >
            Get Placement Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="ETL Testing Course Page - Career Section - Get Placement Support"
      />

    </section>
  );
}

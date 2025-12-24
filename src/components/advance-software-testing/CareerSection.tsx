'use client';
import { Briefcase, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CareerSessionModal from '@/components/CareerSessionModal';

const ROLES = [
  'SDET',
  'Automation Engineer',
  'QA Lead',
  'Test Architect',
  'Performance Tester',
  'Mobile Tester',
  'API Tester',
  'DevOps QA',
];

const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini', 'IBM', 'Google'];

// Distinct, non-repeating light accents (no heavy gradients)
const roleAccents = [
  'bg-sky-50 border-sky-200 text-sky-900',
  'bg-emerald-50 border-emerald-200 text-emerald-900',
  'bg-amber-50 border-amber-200 text-amber-900',
  'bg-violet-50 border-violet-200 text-violet-900',
  'bg-rose-50 border-rose-200 text-rose-900',
  'bg-indigo-50 border-indigo-200 text-indigo-900',
  'bg-orange-50 border-orange-200 text-orange-900',
  'bg-teal-50 border-teal-200 text-teal-900',
];

const companyAccents = [
  'bg-slate-50 border-slate-200',
  'bg-blue-50 border-blue-200',
  'bg-fuchsia-50 border-fuchsia-200',
  'bg-green-50 border-green-200',
  'bg-cyan-50 border-cyan-200',
  'bg-lime-50 border-lime-200',
  'bg-pink-50 border-pink-200',
  'bg-purple-50 border-purple-200',
];

export default function CareerSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section id="career" aria-labelledby="career-heading" className="relative py-10 bg-white">
      {/* Subtle separators for a sleek, slightly futuristic frame */}
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
          className="text-center mb-10 sm:mb-12"
        >
          <h2 id="career-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            High-Paying <span className="text-ST">SDET</span> Careers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            <strong>2,50,000+ QA openings</strong> across India with fast-growing demand for{' '}
            <strong>Automation Engineers</strong> and <strong>SDETs</strong>. Average fresher salary:{' '}
            <strong>₹6–18 LPA</strong> depending on stack, location, and interview performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Roles */}
          <motion.section
            aria-labelledby="career-roles"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <h3 id="career-roles" className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <Briefcase className="h-7 w-7 text-sky-700" />
              Job Roles
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {ROLES.map((role, i) => (
                <div
                  key={role}
                  className={[
                    'rounded-xl border px-4 py-3 text-center text-sm font-medium',
                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                    'hover:translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300',
                    roleAccents[i % roleAccents.length],
                  ].join(' ')}
                >
                  {role}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Popular stacks: <em>Selenium/Appium, Playwright/Cypress, REST Assured, JMeter, GitHub Actions/Jenkins</em>.
            </p>
          </motion.section>

          {/* Companies */}
          <motion.section
            aria-labelledby="career-companies"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <h3 id="career-companies" className="mb-5 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <Building2 className="h-7 w-7 text-violet-700" />
              Top Hiring Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {COMPANIES.map((c, i) => (
                <div
                  key={c}
                  className={[
                    'rounded-xl border px-3 py-3 text-center text-sm font-semibold text-slate-800',
                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                    'hover:translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300',
                    companyAccents[i % companyAccents.length],
                  ].join(' ')}
                  aria-label={`Hiring: ${c}`}
                >
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500 text-center md:text-left">
              + Startups & product companies hiring for <strong>SDET</strong>, <strong>Automation</strong>, and{' '}
              <strong>Performance</strong> roles.
            </p>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-[#00758F] bg-[#00758F] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#016a82] focus:outline-none focus:ring-4 focus:ring-cyan-200"
            aria-label="Become SDET"
          >
            Become SDET
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Mentor-led, project-based training with resume building and mock interviews.
          </p>
        </motion.div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Advanced Software Testing Course Page - Career Section - Become SDET"
      />

    </section>
  );
}

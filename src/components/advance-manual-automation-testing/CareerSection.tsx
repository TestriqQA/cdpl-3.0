'use client';

import { Briefcase, Building2, ArrowRight, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import type { JSX } from 'react';
import CareerSessionModal from '@/components/CareerSessionModal';

/* ---------- Motion typing & lazy loader (safe fallback) ---------- */
type MotionOnlyProps = {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  exit?: unknown;
  transition?: unknown;
  variants?: Record<string, unknown>;
  viewport?: boolean | { once?: boolean; amount?: number };
};

type MotionDivProps = JSX.IntrinsicElements['div'] & MotionOnlyProps;
type MotionDivLike = React.ComponentType<MotionDivProps>;

function useMotionDiv(): MotionDivLike {
  // Fallback strips motion props and tolerates undefined props
  const Fallback: MotionDivLike = (props: MotionDivProps) => {
    const safe = (props ?? {}) as MotionDivProps;
    const {
      ...rest
    } = safe;
    return <div {...rest} />;
  };

  const [Comp, setComp] = React.useState<MotionDivLike>(() => Fallback);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      const m = await import('framer-motion');
      if (mounted) {
        // cast to our compatible type
        setComp(() => (m.motion.div as unknown as MotionDivLike));
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return Comp;
}


/* ---------- Data (typed) ---------- */
const ROLES = [
  { label: 'QA Engineer', accent: 'bg-sky-50 text-sky-800 border-sky-200' },
  { label: 'SDET', accent: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { label: 'Test Lead', accent: 'bg-amber-50 text-amber-800 border-amber-200' },
  { label: 'Manual Tester', accent: 'bg-violet-50 text-violet-800 border-violet-200' },
  { label: 'Automation Tester', accent: 'bg-rose-50 text-rose-800 border-rose-200' },
  { label: 'API Tester', accent: 'bg-indigo-50 text-indigo-800 border-indigo-200' },
  { label: 'Mobile Tester', accent: 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200' },
  { label: 'QA Manager', accent: 'bg-teal-50 text-teal-800 border-teal-200' },
] as const;

type RoleItem = (typeof ROLES)[number];

const COMPANIES = [
  { name: 'TCS', base: 'bg-sky-50 text-sky-900 border-sky-200', hover: 'hover:bg-sky-100 hover:border-sky-300' },
  { name: 'Infosys', base: 'bg-emerald-50 text-emerald-900 border-emerald-200', hover: 'hover:bg-emerald-100 hover:border-emerald-300' },
  { name: 'Wipro', base: 'bg-amber-50 text-amber-900 border-amber-200', hover: 'hover:bg-amber-100 hover:border-amber-300' },
  { name: 'Accenture', base: 'bg-violet-50 text-violet-900 border-violet-200', hover: 'hover:bg-violet-100 hover:border-violet-300' },
  { name: 'Cognizant', base: 'bg-rose-50 text-rose-900 border-rose-200', hover: 'hover:bg-rose-100 hover:border-rose-300' },
  { name: 'Capgemini', base: 'bg-indigo-50 text-indigo-900 border-indigo-200', hover: 'hover:bg-indigo-100 hover:border-indigo-300' },
  { name: 'HCL', base: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200', hover: 'hover:bg-fuchsia-100 hover:border-fuchsia-300' },
  { name: 'IBM', base: 'bg-teal-50 text-teal-900 border-teal-200', hover: 'hover:bg-teal-100 hover:border-teal-300' },
] as const;

type CompanyItem = (typeof COMPANIES)[number];

/* ---------- Component ---------- */
export default function CareerSection(): JSX.Element {
  const MotionDiv = useMotionDiv();
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);


  return (
    <section id="career" className="relative py-10 bg-white">
      {/* subtle rails */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            High-Paying <span className='text-ST'>QA Careers</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            <strong>4,00,000+ open roles</strong> across India • Typical salary band <strong>₹5–20 LPA</strong>.
          </p>
        </MotionDiv>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Roles */}
          <MotionDiv
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
                <Briefcase className="h-5 w-5" />
              </span>
              In-Demand Job Roles
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ROLES.map((r: RoleItem) => (
                <li key={r.label}>
                  <span
                    className={[
                      'block w-full rounded-xl border px-3.5 py-3 text-center text-sm font-medium shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                      'hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300',
                      r.accent,
                    ].join(' ')}
                  >
                    {r.label}
                  </span>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Companies */}
          <MotionDiv
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Building2 className="h-5 w-5" />
              </span>
              Top Hiring Companies
            </h3>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COMPANIES.map((c: CompanyItem) => (
                <li key={c.name}>
                  <div
                    className={[
                      'rounded-xl border px-4 py-5 text-center font-semibold',
                      'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition',
                      c.base,
                      c.hover,
                      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300',
                    ].join(' ')}
                    tabIndex={0}
                    role="img"
                    aria-label={`${c.name} hiring for QA`}
                  >
                    {c.name}
                  </div>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>

        {/* CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            <Sparkles className="h-5 w-5" />
            Start Your QA Career
            <ArrowRight className="h-5 w-5" />
          </button>
        </MotionDiv>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Master Program Course Page - Career Section - Start Your QA Career"
      />

    </section>
  );
}

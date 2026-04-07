'use client';
import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { ADVANCE_MANUAL_AUTOMATION_FAQS } from '@/data/advanceManualAutomationData';

const accentRing = [
  'ring-blue-200 border-blue-200',
  'ring-emerald-200 border-emerald-200',
  'ring-amber-200 border-amber-200',
  'ring-violet-200 border-violet-200',
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section id="faqs" className="relative py-10 bg-white">
      {/* subtle frame lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl text-center text-ST font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className='text-slate-600 text-center text-lg'>Everything you need to know about the program, certification, and job support</p>

          {/* SEO-supportive badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">ISTQB Prep</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Job Assistance</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Beginner Friendly</span>
          </div>
        </motion.div>

        {/* FAQ list */}
        <div className="mt-8 space-y-4">
          {ADVANCE_MANUAL_AUTOMATION_FAQS.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-faq-panel-${i}`;
            const btnId = `${baseId}-faq-button-${i}`;
            const ring = accentRing[i % accentRing.length];

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.04 }}
                className={`rounded-xl border bg-white ${ring} hover:shadow-sm transition-shadow`}
              >
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300"
                >
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300 group-hover:text-slate-700 ${isOpen ? 'rotate-180' : ''
                      }`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden border-t border-slate-100"
                >
                  <div className="px-5 py-4 text-sm sm:text-base leading-relaxed text-slate-700">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* soft CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Didn’t find what you’re looking for?{' '}
            <a
              href="contact-us"
              title="Contact Us"
              className="font-semibold text-indigo-700 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-800 hover:decoration-indigo-300"
            >
              Talk to an advisor
            </a>
            .
          </p>
        </div>
      </div>

    </section>
  );
}

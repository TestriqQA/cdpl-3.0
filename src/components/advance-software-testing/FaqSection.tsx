'use client';
import { useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ADVANCED_TESTING_FAQS } from '@/data/advancedTestingData';

const accents = [
  { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', title: 'text-sky-800', bullet: 'bg-sky-300' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', title: 'text-emerald-800', bullet: 'bg-emerald-300' },
  { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', title: 'text-amber-800', bullet: 'bg-amber-300' },
  { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', title: 'text-violet-800', bullet: 'bg-violet-300' },
];

import CareerSessionModal from '@/components/CareerSessionModal';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0); // open the first by default for engagement
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const onKeyToggle = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(open === idx ? null : idx);
    }
  };


  return (
    <section id="faq" className="relative py-10 bg-white">
      {/* Subtle rails for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-4xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-ST text-center font-bold mb-4">
          Frequently Asked Questions
        </h2>

        {/* Accessibility hint for screen readers */}
        <p className="sr-only">
          Use Enter or Space to expand and collapse answers. Only one question is expanded at a time.
        </p>

        <ul role="list" className="mt-10 space-y-4">
          {ADVANCED_TESTING_FAQS.map((faq, i) => {
            const accent = accents[i % accents.length];
            return (
              <li
                key={faq.question}
                className={[
                  'rounded-2xl border transition',
                  accent.cardBg,
                  accent.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                ].join(' ')}
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  onKeyDown={(e) => onKeyToggle(e, i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 rounded-2xl"
                >
                  <span className={['font-semibold', 'text-sm sm:text-base md:text-lg', accent.title].join(' ')}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={[
                      'h-5 w-5 shrink-0 transition-transform duration-300',
                      open === i ? 'rotate-180' : 'rotate-0',
                    ].join(' ')}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="flex gap-3 text-slate-600">
                          <span className={['mt-2 h-2 w-2 rounded-full', accent.bullet].join(' ')} />
                          <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                        </div>
                        {/* micro copy for SEO */}
                        <p className="mt-3 pl-5 sm:pl-6 text-xs sm:text-sm text-slate-500">
                          Still curious? Explore details on <em>course curriculum</em>, <em>live projects</em>,{' '}
                          <em>ISTQB prep</em>, and <em>job assistance</em> in our program brochure.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Supportive CTA row (optional anchors) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Talk to a Mentor
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Download Syllabus
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Advanced Software Testing Course Page - FAQ Section - Talk to a Mentor"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Advanced Software Testing"
        source="Advanced Software Testing Course Page - FAQ Section - Syllabus Download"
      />

    </section>
  );
}

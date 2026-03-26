'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { DBMS_FAQS } from '@/data/dbmsData';

// Distinct, non-repeating accent rails (no heavy gradients)
const accents = ['border-sky-300', 'border-emerald-300', 'border-amber-300', 'border-violet-300'];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);


  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-10 bg-white">
      {/* subtle frame lines for a clean, slightly futuristic look */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-4xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-ST text-center font-bold mb-4">
          Frequently Asked Questions
        </h2>

        {/* small SEO/supportive line */}
        <p className="mx-auto -mt-2 mb-6 max-w-2xl text-center text-sm sm:text-base text-slate-600">
          Can’t find an answer? <Link href="contact-us" className="font-medium text-sky-700 hover:underline">Contact our team</Link> for personalized guidance.
        </p>

        <div className="space-y-3 sm:space-y-4" role="list">
          {DBMS_FAQS.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-trigger-${i}`;
            const rail = accents[i % accents.length];

            return (
              <div
                key={faq.question}
                role="listitem"
                className={[
                  'rounded-2xl border bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                  'hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                  'border-slate-200',
                ].join(' ')}
              >
                {/* colored rail (non-repeating accents) */}
                <div className={['absolute ml-[-1px] h-full w-1.5 rounded-l-2xl', rail].join(' ')} aria-hidden />

                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 hidden sm:grid h-6 w-6 place-items-center rounded-md border border-slate-200 text-slate-500">
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={[
                      'h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    'px-5 sm:px-6 pb-5 text-slate-600',
                    'transition-[grid-template-rows,opacity] duration-300 ease-out',
                    isOpen ? 'block opacity-100' : 'hidden opacity-0',
                  ].join(' ')}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* tiny footer hint */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Last updated for the <strong>2025</strong> intake. Policies and details may evolve with curriculum improvements.
        </div>
      </div>


    </section>
  );
}

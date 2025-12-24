'use client';
import { useState, useId } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { API_TESTING_FAQS } from '@/data/apiTestingData';

// Distinct, non-repeating accent tokens

// Distinct, non-repeating accent tokens
const accents = [
    { ring: 'ring-sky-200', left: 'border-l-sky-400', chip: 'bg-sky-50 text-sky-800 border-sky-200' },
    { ring: 'ring-emerald-200', left: 'border-l-emerald-400', chip: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { ring: 'ring-amber-200', left: 'border-l-amber-400', chip: 'bg-amber-50 text-amber-900 border-amber-200' },
    { ring: 'ring-violet-200', left: 'border-l-violet-400', chip: 'bg-violet-50 text-violet-900 border-violet-200' },
];

export default function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);
    const sectionId = useId();

    const onToggle = (i: number) => setOpen(open === i ? null : i);

    return (
        <section
            id="faq"
            aria-labelledby={`${sectionId}-heading`}
            className="relative py-10 bg-white"
        >
            {/* subtle frame lines for a clean, slightly futuristic feel */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-ST text-center font-bold mb-4">
                    Frequently Asked Questions
                </h2>

                {/* SEO-supportive intro line */}
                <p className="mx-auto mb-8 max-w-2xl text-center text-sm sm:text-base text-slate-600">
                    Learn about <strong>beginner eligibility</strong>, <strong>certificate verification</strong>,{' '}
                    <strong>live class hours</strong>, and <strong>job assistance</strong> for API Testing with Postman, REST/GraphQL, and CI/CD.
                </p>

                <ul className="space-y-4">
                    {API_TESTING_FAQS.map((faq, i) => {
                        const isOpen = open === i;
                        const a = accents[i % accents.length];
                        const buttonId = `${sectionId}-q-${i}`;
                        const panelId = `${sectionId}-a-${i}`;

                        return (
                            <li key={faq.question}>
                                <div
                                    className={[
                                        'rounded-2xl border border-slate-200 bg-white transition shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                                        'focus-within:ring-4',
                                        a.ring,
                                        'border-l-4',
                                        a.left,
                                    ].join(' ')}
                                >
                                    <button
                                        id={buttonId}
                                        aria-controls={panelId}
                                        aria-expanded={isOpen}
                                        onClick={() => onToggle(i)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                onToggle(i);
                                            }
                                        }}
                                        className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                                    >
                                        <span className="flex items-center gap-2 text-slate-900 font-semibold">
                                            <HelpCircle className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                            {faq.question}
                                        </span>

                                        <span className="inline-flex items-center gap-2">
                                            <span
                                                className={[
                                                    'hidden sm:inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium',
                                                    a.chip,
                                                ].join(' ')}
                                            >
                                                Answer
                                            </span>
                                            <ChevronDown
                                                className={[
                                                    'h-5 w-5 text-slate-500 transition-transform',
                                                    isOpen ? 'rotate-180' : '',
                                                ].join(' ')}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </button>

                                    {/* Collapsible panel with smooth height transition */}
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className={[
                                            'grid transition-all duration-300 ease-out',
                                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                                        ].join(' ')}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base leading-relaxed text-slate-700">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                {/* tiny helper line */}
                <p className="mt-8 text-center text-sm text-slate-500">
                    Can’t find your answer? <Link href="contact-us" className="underline decoration-slate-300 hover:decoration-slate-400">Contact us</Link> and we’ll help.
                </p>
            </div>


        </section>
    );
}

"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import AdvisorModal from "@/components/ui/AdvisorModal";

/**
 * AboutFAQSection — sleek, light-themed, and slightly futuristic FAQ
 * - SEO-ready copy for an EdTech institute (Cinute Digital)
 * - Accessible accordion with keyboard and ARIA support
 * - Lightweight client-side search/filter
 * - Subtle gradients using brand #ff8c00
 */

export type FAQItem = {
    question: string;
    answer: string;
    tags?: string[];
};

interface AboutFAQSectionProps {
    faqs: FAQItem[];
}

export default function AboutFAQSection({ faqs }: AboutFAQSectionProps) {
    const [open, setOpen] = useState<number | null>(0);
    const [query] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredFaqs = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return faqs;
        return faqs.filter(
            (f) =>
                f.question.toLowerCase().includes(q) ||
                f.answer.toLowerCase().includes(q) ||
                (f.tags ?? []).some((t) => t.toLowerCase().includes(q))
        );
    }, [query, faqs]);

    return (
        <section
            className="mx-auto max-w-7xl px-4 py-6 md:py-14 sm:px-6 lg:px-8"
            aria-labelledby="faq-heading"
        >
            {/* JSON-LD script removed to avoid duplication */}

            <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
                {/* Header */}
                <div className="flex flex-col items-start justify-between gap-4 rounded-t-[28px] border-b border-slate-200 px-6 py-6 sm:flex-row sm:items-center">
                    <div>
                        <h2
                            id="faq-heading"
                            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-1 text-sm text-slate-600">
                            Everything you need to know about our{" "}
                            <span className="font-medium">industry-aligned, job-ready</span>{" "}
                            programs, designed to help you{" "}
                            <span className="font-medium">launch or upskill</span> your tech
                            career.
                        </p>
                    </div>
                </div>

                {/* Accordion */}
                <div className="divide-y divide-slate-200">
                    {filteredFaqs.length === 0 ? (
                        <div className="px-6 py-10 text-sm text-slate-600">
                            No results. Try different keywords like{" "}
                            <span className="rounded-md bg-slate-100 px-1.5 py-0.5">
                                placements
                            </span>
                            ,{" "}
                            <span className="rounded-md bg-slate-100 px-1.5 py-0.5">
                                EMI
                            </span>{" "}
                            or{" "}
                            <span className="rounded-md bg-slate-100 px-1.5 py-0.5">
                                projects
                            </span>
                            .
                        </div>
                    ) : (
                        filteredFaqs.map((f, idx) => {
                            const isOpen = open === idx;
                            const contentId = `faq-panel-${idx}`;
                            const buttonId = `faq-button-${idx}`;

                            return (
                                <div
                                    key={f.question}
                                    className={`relative transition ${isOpen ? "bg-white" : "bg-white"
                                        }`}
                                    style={{
                                        // left glow bar on open (slightly futuristic)
                                        boxShadow: isOpen
                                            ? "inset 0 0 0 1px rgba(15,23,42,0.06)"
                                            : "none",
                                    }}
                                >
                                    {/* Accent glow when open */}
                                    <span
                                        className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] rounded-l-[28px] transition ${isOpen ? "bg-brand" : "bg-transparent"
                                            }`}
                                        aria-hidden="true"
                                    />
                                    <button
                                        id={buttonId}
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                        onClick={() => setOpen(isOpen ? null : idx)}
                                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left outline-none transition hover:bg-slate-50 focus:bg-slate-50"
                                    >
                                        <span className="flex-1 text-base font-medium leading-6 text-slate-900">
                                            {f.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <div
                                        id={contentId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className={`grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="min-h-0">
                                            <p className="pb-5 text-sm leading-6 text-slate-700">
                                                {f.answer}
                                            </p>

                                            {/* Tags */}
                                            {f.tags && f.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pb-5">
                                                    {f.tags.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* CTA Footer */}
                <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 px-6 py-6 sm:flex-row sm:items-center">
                    <p className="text-sm text-slate-600">
                        Still have questions? Talk to our{" "}
                        <span className="font-medium">Admissions & Career</span> team for a
                        personalized roadmap.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/40 cursor-pointer"
                    >
                        Get Counseling
                    </button>
                </div>
            </div>

            <AdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="About Us - FAQ Section"
            />
        </section>
    );
}

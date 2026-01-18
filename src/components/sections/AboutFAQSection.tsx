"use client";

import { useMemo, useState } from "react";

import { ChevronDown } from "lucide-react";
import AdvisorModal from "@/components/ui/AdvisorModal";

/**
 * AboutFAQSection — sleek, light-themed, and slightly futuristic FAQ
 * - SEO-ready copy for an EdTech institute (Cinute Digital)
 * - Accessible accordion with keyboard and ARIA support
 * - JSON-LD (FAQPage) for rich results
 * - Lightweight client-side search/filter
 * - Subtle gradients using brand #c2410c
 */

type FAQ = {
    q: string;
    a: string;
    tags?: string[];
};

const faqs: FAQ[] = [
    {
        q: "Do you provide placement assistance?",
        a: "Yes. Our dedicated Career Services team offers resume reviews, portfolio polishing, mock interviews, and direct referrals through hiring partners. Many learners secure interviews within 2–6 weeks of completing capstone projects.",
        tags: ["career services", "placements", "jobs"],
    },
    {
        q: "Are the programs beginner friendly?",
        a: "Absolutely. Each program starts with fundamentals and hands-on guided labs. No prior coding experience is required for our beginner tracks.",
        tags: ["beginners", "foundations", "non-tech"],
    },
    {
        q: "Will I work on live projects?",
        a: "Yes. You’ll build job-ready skills through live or sandbox projects mirroring real business scenarios, version control, code reviews, and CI/CD workflows.",
        tags: ["projects", "real-world", "portfolio"],
    },
    {
        q: "What makes your curriculum industry-aligned?",
        a: "Our modules are co-designed with practitioners from QA, Data, and DevOps. Tooling includes Git, GitHub Actions, Postman, REST APIs, Selenium, Playwright, SQL, and cloud fundamentals so your skills map directly to hiring needs.",
        tags: ["industry", "tools", "curriculum"],
    },
    {
        q: "How are classes delivered—online or in-person?",
        a: "We run live online cohorts with recordings and Q&A, plus weekend doubt-clearing sessions. Select cities also host optional in-person meetups and hiring drives.",
        tags: ["online", "hybrid", "recordings"],
    },
    {
        q: "Do you offer certifications?",
        a: "Yes. You’ll receive a Cinute Digital certificate on completion. We also guide you for global certifications like ISTQB (for Software Testing) and provide exam preparation resources.",
        tags: ["certificate", "ISTQB", "credentials"],
    },
    {
        q: "What is the typical program duration?",
        a: "Most job-ready tracks span 10–24 weeks, with flexible schedules for working professionals. Accelerated bootcamps are available for focused upskilling.",
        tags: ["duration", "schedule", "bootcamp"],
    },
    {
        q: "Is there doubt support and mentorship?",
        a: "Every learner gets mentor hours, Discord/Slack community access, and daily doubt support. Premium tracks include 1-on-1 career mentorship and mock interviews.",
        tags: ["mentor", "support", "community"],
    },
    {
        q: "Do you provide EMI or flexible payment plans?",
        a: "Yes. We offer EMI options and milestone-based payment plans for most programs. Speak with our admissions team for the best fit.",
        tags: ["EMI", "payment", "fees"],
    },
    {
        q: "Can I switch tracks if my interests change?",
        a: "Within the first 2 weeks, you can switch to another eligible cohort based on seat availability and prerequisites.",
        tags: ["track switch", "flexibility"],
    },
    {
        q: "What outcomes can I expect after completion?",
        a: "Graduates showcase a portfolio of real projects, pass structured assessments, and get interview referrals. Many transition into roles such as QA Engineer, Automation Tester, Data Analyst, or Junior ML Engineer.",
        tags: ["outcomes", "roles", "career"],
    },
    {
        q: "Where can I view the full syllabus and upcoming cohorts?",
        a: "Visit the program pages for detailed syllabus, start dates, and application steps. You can also request a personalized counseling call.",
        tags: ["syllabus", "cohorts", "apply"],
    },
];

export default function AboutFAQSection() {
    const [open, setOpen] = useState<number | null>(0);
    const [query] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredFaqs = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return faqs;
        return faqs.filter(
            (f) =>
                f.q.toLowerCase().includes(q) ||
                f.a.toLowerCase().includes(q) ||
                (f.tags ?? []).some((t) => t.toLowerCase().includes(q))
        );
    }, [query]);

    // JSON-LD for FAQ rich results (SEO)
    const jsonLd = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                },
            })),
        }),
        []
    );

    return (
        <section
            className="mx-auto max-w-7xl px-4 py-6 md:py-14 sm:px-6 lg:px-8"
            aria-labelledby="faq-heading"
        >
            {/* JSON-LD script for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                                    key={f.q}
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
                                        className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] rounded-l-[28px] transition ${isOpen ? "bg-[#c2410c]" : "bg-transparent"
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
                                            {f.q}
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
                                                {f.a}
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
                        className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/40 cursor-pointer"
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
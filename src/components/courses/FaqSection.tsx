"use client";
import { useState } from "react";
import { ChevronRight, HelpCircle, ShieldCheck, FileCheck } from "lucide-react";

export default function FaqSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Rotating accent colors per item (no repetition)
    const ACCENTS = [
        { ring: "ring-rose-200", dot: "bg-rose-500", chip: "bg-rose-700", text: "text-rose-700" },
        { ring: "ring-amber-200", dot: "bg-amber-500", chip: "bg-amber-700", text: "text-amber-700" },
        { ring: "ring-emerald-200", dot: "bg-emerald-500", chip: "bg-emerald-700", text: "text-emerald-700" },
        { ring: "ring-sky-200", dot: "bg-sky-500", chip: "bg-sky-700", text: "text-sky-700" },
        { ring: "ring-violet-200", dot: "bg-violet-500", chip: "bg-violet-700", text: "text-violet-700" },
        { ring: "ring-fuchsia-200", dot: "bg-fuchsia-500", chip: "bg-fuchsia-700", text: "text-fuchsia-700" },
    ];

    const faqs = [
        {
            q: "What makes your courses different from other platforms?",
            a: "Our programs are designed by industry experts and emphasize practical, project-based learning with mentor support. You’ll work on real scenarios, follow an updated syllabus, earn certifications, and get career services for job-readiness.",
            icon: <HelpCircle className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            q: "Do I need prior experience to enroll?",
            a: "No. We offer beginner, intermediate, and advanced tracks. Each course clearly lists prerequisites so you can choose the right difficulty and learn at your own pace.",
            icon: <HelpCircle className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            q: "Will I receive a certificate upon completion?",
            a: "Yes. You’ll get an industry-recognized certificate you can add to your résumé and LinkedIn profile. Certificates highlight your skills and verified project work.",
            icon: <FileCheck className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            q: "What kind of career support do you provide?",
            a: "We offer résumé reviews, portfolio building, mock interviews, referral guidance, and job alerts. The goal is to translate your learning into interviews and offers.",
            icon: <ShieldCheck className="h-5 w-5 text-white" aria-hidden />,
        },
        // Added FAQs
        {
            q: "How long do I retain access to course content?",
            a: "You receive long-term access to recorded lessons, notes, and project resources. Live sessions and mentorship schedules are announced inside your dashboard.",
            icon: <HelpCircle className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            q: "Is there a refund policy?",
            a: "Yes. We provide a transparent, time-bound refund window. Please review the refund policy on the course page for exact timelines and eligibility.",
            icon: <ShieldCheck className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            q: "What is the learning format?",
            a: "A blended format: live mentor sessions, self-paced videos, hands-on labs, and graded projects. Doubt-clearing and community forums ensure fast feedback.",
            icon: <HelpCircle className="h-5 w-5 text-white" aria-hidden />,
        },
    ];

    return (
        <section
            className="py-20 px-4 bg-white"
            aria-label="Frequently Asked Questions"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-lg text-slate-600">
                        Everything you need to know about our online courses, certifications, mentorship, and career support.
                    </p>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        const accent = ACCENTS[idx % ACCENTS.length];
                        const answerId = `faq-panel-${idx}`;
                        const buttonId = `faq-button-${idx}`;

                        return (
                            <div
                                key={idx}
                                className={[
                                    "rounded-xl border border-slate-200 bg-white",
                                    "transition-all duration-300",
                                    isOpen ? `ring-2 ${accent.ring}` : "hover:shadow-md",
                                ].join(" ")}
                                itemProp="mainEntity"
                            >
                                <h3 className="sr-only" itemProp="name">{faq.q}</h3>

                                <button
                                    id={buttonId}
                                    aria-controls={answerId}
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                                    className="w-full px-5 py-4 text-left flex items-start gap-4"
                                >
                                    {/* Icon chip with unique dark color */}
                                    <span
                                        aria-hidden
                                        className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg ${accent.chip} border border-black/10 shadow-sm`}
                                    >
                                        {faq.icon}
                                    </span>

                                    <span className="flex-1">
                                        <span className="flex items-center justify-between gap-3">
                                            <span className="font-semibold text-slate-900 leading-6">
                                                {faq.q}
                                            </span>
                                            <ChevronRight
                                                className={[
                                                    "h-5 w-5 text-slate-400 transition-transform",
                                                    isOpen ? "rotate-90" : "",
                                                ].join(" ")}
                                                aria-hidden
                                            />
                                        </span>

                                        {/* subtle subline for SEO keywords without stuffing */}
                                        <span className={`mt-1 block text-xs font-semibold ${accent.text}`}>
                                            Certification • Mentorship • Projects • Job-ready Skills
                                        </span>
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    id={answerId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    hidden={!isOpen}
                                    className="px-5 pb-4"
                                    itemProp="acceptedAnswer"
                                >
                                    <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                                        <p className="text-slate-700" itemProp="text">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SR-only helper line for context */}
                <p className="sr-only">
                    Online learning platform with certification, mentor guidance, hands-on projects, flexible schedules,
                    community support, and placement assistance.
                </p>
            </div>
        </section>
    );
}

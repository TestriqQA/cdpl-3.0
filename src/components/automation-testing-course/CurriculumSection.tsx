'use client';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';
import CareerSessionModal from '@/components/CareerSessionModal';

type Module = { title: string; topics: string[] };

/**
 * Source (PDF):
 * - Contents overview (Programming, Web Automation Testing, version control, process model)
 * - Course Curriculum pages (Programming topics + Selenium WebDriver topics + Framework/Hybrid E2E)
 */
const curriculum: Module[] = [
    {
        title: 'Programming Foundations (Java / Python)',
        topics: [
            'Installation & Environment Setup',
            'Language Basics & Syntax',
            'Ranges, Arrays / ArrayList & Collections',
            'Conditions & Looping',
            'Functions / Methods',
            'Object-Oriented Programming (Classes & Objects)',
            'Sorting & Data Conversion',
        ],
    },
    {
        title: 'Selenium WebDriver Essentials',
        topics: [
            'Setting up the Environment',
            'Browser Operations & Navigation',
            'HTML Basics for Testers',
            'Locators (By id, name, CSS, XPath)',
            'Finding Single & Multiple Elements',
            'Select Class & Dropdowns',
        ],
    },
    {
        title: 'Synchronization & User Interactions',
        topics: [
            'Selenium Synchronization / Waits',
            'Handling Windows / Tabs',
            'Action Class (Mouse & Keyboard)',
            'Screenshots & Evidence',
            'Common Selenium Exceptions',
        ],
    },
    {
        title: 'Test Frameworks: TestNG / PyTest',
        topics: [
            'Framework Structure & Test Organization',
            'Annotations / Fixtures',
            'Parameterization & Data-Driven Tests',
            'Parallel Execution',
            'HTML Reports & Test Logs',
        ],
    },
    {
        title: 'Hybrid Framework Design (End-to-End Project)',
        topics: [
            'Page Object Model (POM) Architecture',
            'Folder Structure & Reusable Utilities',
            'Data-Driven from Excel',
            'Generating Reports & Keeping Failed-Task Records',
            'Hybrid Framework (E2E) Implementation',
        ],
    },
    {
        title: 'Version Control & Process Model',
        topics: [
            'Learn Version Control (Git) Basics',
            'Branching & Pull Requests',
            'Code Reviews & Logs',
            'Web Automation Process Model',
            'Best Practices & Team Workflow',
        ],
    },
];

// Distinct, non-repeating accent palette (light theme, sleek; no heavy gradients)
const accents = [
    { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-700', badgeText: 'text-white', ink: 'text-sky-900', icon: 'text-sky-700' },
    { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-700', badgeText: 'text-white', ink: 'text-emerald-900', icon: 'text-emerald-700' },
    { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', badgeBg: 'bg-amber-700', badgeText: 'text-white', ink: 'text-amber-900', icon: 'text-amber-700' },
    { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', badgeBg: 'bg-violet-700', badgeText: 'text-white', ink: 'text-violet-900', icon: 'text-violet-700' },
    { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-700', badgeText: 'text-white', ink: 'text-rose-900', icon: 'text-rose-700' },
    { cardBg: 'bg-indigo-50', cardBorder: 'border-indigo-200', badgeBg: 'bg-indigo-700', badgeText: 'text-white', ink: 'text-indigo-900', icon: 'text-indigo-700' },
];

export default function CurriculumSection() {
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
    const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

    return (
        <section id="curriculum" className="relative py-10 bg-white">
            {/* Subtle top/bottom separators for a futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
                    Advanced <span className="text-ST">Automation Testing</span> Curriculum
                </h2>

                {/* Intro copy for SEO */}
                <p className="mx-auto mt-2 mb-8 max-w-3xl text-center text-sm sm:text-base text-slate-600">
                    Master <strong>Java/Python</strong>, <strong>Selenium WebDriver</strong>, synchronization & interactions,
                    <strong> TestNG/PyTest</strong>, and build a production-ready <em>Hybrid Framework (E2E)</em> with reporting,
                    logging, and data-driven tests-plus <strong>Git</strong> and the web automation process model.
                </p>

                {/* Responsive grid */}
                <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {curriculum.map((mod, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <motion.li
                                key={mod.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                                className={[
                                    'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                                    a.cardBg,
                                    a.cardBorder,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* Left index badge */}
                                <div
                                    className={[
                                        'absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-xl text-sm font-bold shadow-sm',
                                        a.badgeBg,
                                        a.badgeText,
                                    ].join(' ')}
                                    aria-hidden="true"
                                >
                                    {i + 1}
                                </div>

                                {/* Title & topics */}
                                <div className="pl-14">
                                    <h3 className={['mb-3 text-lg sm:text-xl font-semibold leading-tight', a.ink].join(' ')}>
                                        {mod.title}
                                    </h3>

                                    <ul className="grid gap-2.5 sm:grid-cols-2">
                                        {mod.topics.map((t) => (
                                            <li key={t} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                                                <span className="text-sm">{t}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-4 text-xs text-slate-500">
                                        Outcome: hands-on labs, code reviews, and an end-to-end project to validate real-world skills.
                                    </p>
                                </div>
                            </motion.li>
                        );
                    })}
                </ol>

                {/* Bottom mini-CTAs */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setIsCareerModalOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-200"
                    >
                        Book a Free Demo
                    </button>
                    <button
                        onClick={() => setIsSyllabusModalOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        Get Syllabus PDF
                    </button>
                </div>
            </div>

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Advanced Automation Testing"
                source="Advanced Automation Testing Course Page - Curriculum Section - Syllabus Download"
            />

            <CareerSessionModal
                isOpen={isCareerModalOpen}
                onClose={() => setIsCareerModalOpen(false)}
                source="Advanced Automation Testing Course Page - Curriculum Section - Book Free Demo"
            />

        </section>
    );
}

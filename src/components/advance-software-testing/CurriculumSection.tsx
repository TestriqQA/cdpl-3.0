'use client';
import { CheckCircle, Clock, Award, Layers } from 'lucide-react';
import { useState } from 'react';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';
import CareerSessionModal from '@/components/CareerSessionModal';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
    // From “Course Curriculum – Manual Software Testing” spread
    {
        title: 'Manual Software Testing',
        topics: [
            'SDLC & STLC fundamentals',
            'Black/White/Grey Box testing',
            'Functional, Integration, System, Acceptance',
            'Regression, Smoke & Sanity suites',
        ],
    },
    // From Test Management / Agile / Defect Tracking pages
    {
        title: 'Test Management & Agile',
        topics: [
            'Test Plans, Test Cases & RTM',
            'Agile process & ceremonies',
            'Jira, TestRail, Mantis BT usage',
            'DTLC with Severity/Priority & Reporting',
        ],
    },
    // From API Testing using POSTMAN & RestAPIs pages
    {
        title: 'API Testing using POSTMAN & RestAPIs',
        topics: [
            'GET/POST/PUT/PATCH/DELETE requests',
            'Status, headers, cookies, response time',
            'JSON Schema & response body validation',
            'Collections, Workspaces, Environments & Auth',
        ],
    },
    // From DBMS using MySQL pages
    {
        title: 'DBMS using MySQL',
        topics: [
            'SELECT/WHERE/GROUP BY/HAVING clauses',
            'INNER/OUTER/SELF/NATURAL/CROSS joins',
            'DDL, DML, TCL, DCL',
            'Views, Procedures, Functions, Triggers',
        ],
    },
    // From Real-Time Projects / Domain Knowledge pages
    {
        title: 'Real-Time Projects & Domains',
        topics: [
            'E-commerce testing scenarios',
            'CRM workflows & validations',
            'Gaming: UX, performance & stability',
            'Phone Book app: data integrity & security',
        ],
    },
    // From Course Highlights + Certification pages
    {
        title: 'Course Highlights & Certification',
        topics: [
            '95 hours • 3.5 months',
            '6+ assignments • 5 projects',
            'AAA-validated certification',
            'Hybrid: Classroom + Online',
        ],
    },
];

// Distinct light accents (no heavy gradients, no color repetition)
const accents = [
    { card: 'bg-sky-50 border-sky-200', ink: 'text-sky-900', badge: 'bg-sky-600 text-white', icon: 'text-sky-700' },
    { card: 'bg-amber-50 border-amber-200', ink: 'text-amber-900', badge: 'bg-amber-600 text-white', icon: 'text-amber-700' },
    { card: 'bg-emerald-50 border-emerald-200', ink: 'text-emerald-900', badge: 'bg-emerald-600 text-white', icon: 'text-emerald-700' },
    { card: 'bg-violet-50 border-violet-200', ink: 'text-violet-900', badge: 'bg-violet-600 text-white', icon: 'text-violet-700' },
    { card: 'bg-rose-50 border-rose-200', ink: 'text-rose-900', badge: 'bg-rose-600 text-white', icon: 'text-rose-700' },
    { card: 'bg-indigo-50 border-indigo-200', ink: 'text-indigo-900', badge: 'bg-indigo-600 text-white', icon: 'text-indigo-700' },
];

export default function CurriculumSection() {
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
    const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

    return (
        <section id="curriculum" className="relative py-10 bg-white">
            {/* Subtle frame for futuristic feel */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
                    Industry-Ready <span className="text-ST">Advanced Software Testing</span> Curriculum
                </h2>

                {/* SEO-supportive intro row (updated to match brochure) */}
                <div className="mx-auto mt-6 mb-8 grid max-w-4xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                    <p className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-slate-500" /> Framework design & best practices
                    </p>
                    <p className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-slate-500" /> Portfolio-ready real-time projects
                    </p>
                    <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" /> 95 hours • 3.5 months • mentor-led
                    </p>
                </div>

                {/* Modules grid */}
                <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                    {curriculum.map((mod, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <li
                                key={mod.title}
                                className={[
                                    'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                                    a.card,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* Number badge */}
                                <div
                                    className={[
                                        'absolute right-3 top-3 h-8 w-8 rounded-lg text-sm font-bold grid place-items-center shadow-sm',
                                        a.badge,
                                    ].join(' ')}
                                    aria-hidden="true"
                                >
                                    {i + 1}
                                </div>

                                <h3 className={['pr-12 text-lg sm:text-xl font-semibold leading-tight', a.ink].join(' ')}>
                                    {mod.title}
                                </h3>

                                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                                    {mod.topics.map((t) => (
                                        <li key={t} className="flex items-start gap-2 text-slate-700">
                                            <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                                            <span className="text-sm">{t}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-4 text-xs text-slate-500">
                                    Outcomes: hands-on labs, assessment checklists, CI/CD integration, and evidence-based reporting.
                                </p>
                            </li>
                        );
                    })}
                </ol>

                {/* Inline CTA */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setIsCareerModalOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    >
                        Book a Free Demo
                    </button>
                    <button
                        onClick={() => setIsSyllabusModalOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        Download Syllabus PDF
                    </button>
                </div>
            </div>

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Advanced Software Testing"
                source="Advanced Software Testing Course Page - Curriculum Section - Syllabus Download"
            />

            <CareerSessionModal
                isOpen={isCareerModalOpen}
                onClose={() => setIsCareerModalOpen(false)}
                source="Advanced Software Testing Course Page - Curriculum Section - Book Free Demo"
            />

        </section>
    );
}

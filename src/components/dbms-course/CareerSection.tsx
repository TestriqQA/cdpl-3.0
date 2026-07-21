'use client';
import { Briefcase, Building2, ArrowRight, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const CareerSessionModal = dynamic(() => import('../CareerSessionModal'), { ssr: false, loading: () => <SectionLoader label="Loading career session modal..." /> });

const SectionLoader = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-gray-900">{label}</span>
        </div>
    );
};

const roles = [
    'Database Administrator',
    'SQL Developer',
    'Data Analyst',
    'Backend Developer',
    'BI Developer',
    'ETL Developer',
    'Data Engineer',
    'DB Architect',
];

const companies = ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Capgemini', 'IBM', 'Oracle'];

// Distinct, non-repeating accent tokens
const roleAccents = [
    { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-900' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900' },
    { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-900' },
    { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-900' },
];

const companyAccents = [
    { ring: 'ring-sky-200', chip: 'bg-sky-50 text-sky-800 border-sky-200' },
    { ring: 'ring-rose-200', chip: 'bg-rose-50 text-rose-800 border-rose-200' },
    { ring: 'ring-emerald-200', chip: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { ring: 'ring-amber-200', chip: 'bg-amber-50 text-amber-900 border-amber-200' },
];

export default function CareerSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="career" aria-labelledby="career-heading" className="relative py-10 bg-white">
            {/* subtle frame lines */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header
                    className="text-center mb-10 sm:mb-14"
                >
                    <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        1,50,000+ openings • ₹5–12 LPA (India)
                    </p>
                    <h2 id="career-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        High-Paying <span className="text-ST">MySQL</span> Careers
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Target roles across <strong>Data</strong>, <strong>Backend</strong>, and <strong>BI</strong> tracks.
                        Build in-demand skills—schema design, indexing, SQL optimization, transactions, and analytics.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* Roles */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <Briefcase className="h-7 w-7 text-sky-600" />
                            Job Roles
                        </h3>

                        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                            {roles.map((role, i) => {
                                const a = roleAccents[i % roleAccents.length];
                                return (
                                    <li
                                        key={role}
                                        className={[
                                            'rounded-xl border px-4 py-3 text-center text-sm font-medium shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition',
                                            a.bg,
                                            a.border,
                                            a.text,
                                            'hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                        ].join(' ')}
                                    >
                                        {role}
                                    </li>
                                );
                            })}
                        </ul>

                        {/* SEO supportive line */}
                        <p className="mt-4 text-xs text-slate-600">
                            Stand out with <strong>EXPLAIN plan analysis</strong>, <strong>index strategies</strong>,{' '}
                            <strong>ETL pipelines</strong>, and <strong>reporting models</strong>.
                        </p>
                    </div>

                    {/* Companies */}
                    <div>
                        <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <Building2 className="h-7 w-7 text-violet-600" />
                            Top Companies Hiring
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                            {companies.map((c, i) => {
                                const a = companyAccents[i % companyAccents.length];
                                return (
                                    <div
                                        key={c}
                                        className={[
                                            'rounded-xl border bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition',
                                            'ring-1',
                                            a.ring,
                                            'hover:shadow-md',
                                        ].join(' ')}
                                    >
                                        {c}
                                    </div>
                                );
                            })}
                        </div>

                        <p className="mt-4 text-center text-xs text-slate-600">
                            Plus fast-growing startups and global enterprises across fintech, e-commerce, SaaS, and consulting.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div
                    className="mt-10 sm:mt-12 text-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                        aria-label="Get placed with MySQL skills"
                    >
                        Get Placement Support
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <CareerSessionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="DBMS Course Page - Career Section - Get Placement Support"
            />
        </section>
    );
}

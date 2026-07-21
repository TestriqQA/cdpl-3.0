'use client';
import { Briefcase, ArrowRight, Building2, TrendingUp, BadgeCheck } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const CareerSessionModal = dynamic(() => import('@/components/CareerSessionModal'), { ssr: false, loading: () => <SectionLoader label="Loading career session modal..." /> });

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

const roles = [
    'API Tester', 'QA Engineer', 'Automation Tester', 'Security Tester',
    'DevOps Engineer', 'Performance Engineer', 'Integration Specialist', 'SDET',
];

const companies = ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Capgemini', 'Tech Mahindra', 'HCL', 'IBM', 'Deloitte'];

// Distinct, non-repeating color accents
const roleAccents = ['sky', 'amber', 'emerald', 'violet', 'rose', 'cyan', 'lime', 'indigo'] as const;
const companyAccents = ['slate', 'sky', 'amber', 'emerald', 'violet', 'rose', 'cyan', 'lime', 'indigo', 'orange'] as const;

export default function CareerSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="career" aria-labelledby="career-heading" className="relative py-10 bg-white">
            {/* subtle separators for a clean, futuristic frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header
                    className="text-center mb-10 sm:mb-14"
                >
                    <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        25% CAGR • 1,01,000+ Openings • India
                    </p>
                    <h2 id="career-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        Launch Your <span className="text-ST">API Testing</span> Career
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Average salary: <strong>₹4–8 LPA</strong>. With skills in <strong>API automation testing</strong> and <strong>Postman</strong>, you become eligible for roles like <strong>API Tester</strong> and <strong>SDET</strong>. Companies need experts who know <strong>how to test api</strong> thoroughly.
                    </p>
                </header>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Roles */}
                    <section
                        aria-labelledby="roles-heading"
                    >
                        <h3 id="roles-heading" className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <Briefcase className="h-7 w-7 text-indigo-600" />
                            High-Paying Job Roles
                        </h3>

                        <ul role="list" className="grid grid-cols-2 gap-3 sm:gap-4">
                            {roles.map((role, i) => {
                                const hue = roleAccents[i % roleAccents.length];
                                const colorClasses: Record<string, string> = {
                                    slate: 'border-slate-200 hover:bg-slate-50 text-slate-800',
                                    sky: 'border-sky-200 hover:bg-sky-50 text-sky-800',
                                    amber: 'border-amber-200 hover:bg-amber-50 text-amber-800',
                                    emerald: 'border-emerald-200 hover:bg-emerald-50 text-emerald-800',
                                    violet: 'border-violet-200 hover:bg-violet-50 text-violet-800',
                                    rose: 'border-rose-200 hover:bg-rose-50 text-rose-800',
                                    cyan: 'border-cyan-200 hover:bg-cyan-50 text-cyan-800',
                                    lime: 'border-lime-200 hover:bg-lime-50 text-lime-800',
                                    indigo: 'border-indigo-200 hover:bg-indigo-50 text-indigo-800',
                                    orange: 'border-orange-200 hover:bg-orange-50 text-brand',
                                };
                                return (
                                    <li key={role} role="listitem">
                                        <div
                                            className={[
                                                'rounded-xl border bg-white px-4 py-3 text-center text-sm font-medium shadow-sm transition',
                                                colorClasses[hue] || colorClasses.sky,
                                            ].join(' ')}
                                        >
                                            {role}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* trust strip */}
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                                <BadgeCheck className="h-4 w-4 text-emerald-700" /> Job-ready skills
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1">
                                <Briefcase className="h-4 w-4 text-sky-700" /> Placement support
                            </span>
                        </div>
                    </section>

                    {/* Companies */}
                    <section
                        aria-labelledby="companies-heading"
                    >
                        <h3 id="companies-heading" className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <Building2 className="h-7 w-7 text-emerald-600" />
                            Top Hiring Companies
                        </h3>

                        <ul role="list" className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                            {companies.map((c, i) => {
                                const hue = companyAccents[i % companyAccents.length];
                                const colorClasses: Record<string, string> = {
                                    slate: 'border-slate-200 hover:bg-slate-50 text-slate-800',
                                    sky: 'border-sky-200 hover:bg-sky-50 text-sky-800',
                                    amber: 'border-amber-200 hover:bg-amber-50 text-amber-800',
                                    emerald: 'border-emerald-200 hover:bg-emerald-50 text-emerald-800',
                                    violet: 'border-violet-200 hover:bg-violet-50 text-violet-800',
                                    rose: 'border-rose-200 hover:bg-rose-50 text-rose-800',
                                    cyan: 'border-cyan-200 hover:bg-cyan-50 text-cyan-800',
                                    lime: 'border-lime-200 hover:bg-lime-50 text-lime-800',
                                    indigo: 'border-indigo-200 hover:bg-indigo-50 text-indigo-800',
                                    orange: 'border-orange-200 hover:bg-orange-50 text-brand',
                                };
                                return (
                                    <li key={c} role="listitem">
                                        <div
                                            className={[
                                                'rounded-xl border bg-white px-4 py-3 text-center text-sm font-semibold shadow-sm transition',
                                                colorClasses[hue] || colorClasses.slate,
                                            ].join(' ')}
                                        >
                                            {c}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <p className="text-center mt-6 text-slate-600 text-sm italic">+ 500+ startups & MNCs actively hiring</p>
                    </section>
                </div>

                {/* CTA */}
                <div
                    className="mt-12 text-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                        aria-label="Start Your QA Journey"
                    >
                        Start Your QA Journey <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <CareerSessionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="API Testing Course Page - Career Section - Start Your QA Journey"
            />
        </section>
    );
}

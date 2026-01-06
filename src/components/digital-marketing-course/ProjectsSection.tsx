"use client";


import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import EnrollModal from "../EnrollModal";

type Project = { title: string; blurb?: string };

const projects: Project[] = [
    { title: 'Create a content calendar for a real business and produce social media content using AI Tools', blurb: 'Research → plan → generate posts with clear brand voice.' },
    { title: 'Create social media progress report to senior marketing management', blurb: 'Monthly KPI deck with insights and next actions.' },
    { title: 'Keyword mapping audit of a website', blurb: 'Fix cannibalization and build topic clusters.' },
    { title: 'Set up a Facebook Ads account for a company and create campaigns', blurb: 'From pixels & CAPI to full-funnel structure.' },
    { title: 'Prepare a LinkedIn marketing plan for an Edtech company', blurb: 'Persona-led messaging and content lanes.' },
    { title: 'Set up GA4 and create various useful reports for your business', blurb: 'Meaningful events, funnels, and explorations.' },
    { title: 'List down 10 hypotheses based on observations and run 3 CRO tests', blurb: 'Prioritize with ICE and ship A/B tests.' },
    { title: 'Build a dashboard on Data Studio', blurb: 'Stakeholder-friendly KPIs with drill-downs.' },
    { title: 'Create a custom attribution model', blurb: 'Understand incrementality across channels.' },
    { title: 'Build an email and WhatsApp marketing campaign and automate using Zapier', blurb: 'Lifecycle flows with triggers & webhooks.' },
    { title: 'Apply learnings and build an end-to-end digital marketing strategy for a brand', blurb: 'Full GTM: channels, budgets, and roadmap.' },
];

// Distinct, simple accent styles (no repeated colors, no heavy gradients)
const ACCENTS = [
    { edge: 'bg-sky-500', chip: 'bg-sky-50 text-sky-800 border-sky-200', glow: 'shadow-sky-100' },
    { edge: 'bg-emerald-500', chip: 'bg-emerald-50 text-emerald-800 border-emerald-200', glow: 'shadow-emerald-100' },
    { edge: 'bg-amber-500', chip: 'bg-amber-50 text-amber-800 border-amber-200', glow: 'shadow-amber-100' },
    { edge: 'bg-violet-500', chip: 'bg-violet-50 text-violet-800 border-violet-200', glow: 'shadow-violet-100' },
    { edge: 'bg-rose-500', chip: 'bg-rose-50 text-rose-800 border-rose-200', glow: 'shadow-rose-100' },
    { edge: 'bg-indigo-500', chip: 'bg-indigo-50 text-indigo-800 border-indigo-200', glow: 'shadow-indigo-100' },
    { edge: 'bg-teal-500', chip: 'bg-teal-50 text-teal-800 border-teal-200', glow: 'shadow-teal-100' },
    { edge: 'bg-fuchsia-500', chip: 'bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200', glow: 'shadow-fuchsia-100' },
    { edge: 'bg-lime-500', chip: 'bg-lime-50 text-lime-800 border-lime-200', glow: 'shadow-lime-100' },
    { edge: 'bg-cyan-500', chip: 'bg-cyan-50 text-cyan-800 border-cyan-200', glow: 'shadow-cyan-100' },
    { edge: 'bg-orange-500', chip: 'bg-orange-50 text-orange-800 border-orange-200', glow: 'shadow-orange-100' },
];

export default function ProjectsSection() {
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Digital Marketing & Analytics Master Program";
    return (
        <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
            {/* subtle futuristic scaffold */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />
                <div className="absolute inset-0 [background:radial-gradient(600px_240px_at_50%_0%,rgba(15,23,42,0.04),transparent_60%)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 xl:px-10">
                <header className="text-center">
                    <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Hands-On <span className="text-green-700">Projects</span> You’ll Work On
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Real briefs. Real deliverables. <strong>Portfolio-ready work</strong> that proves your skills to hiring managers.
                    </p>
                </header>

                {/* Cards grid */}
                <ol className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => {
                        const a = ACCENTS[i % ACCENTS.length];
                        return (
                            <li key={i} className="group list-none">
                                <article
                                    className={[
                                        'relative h-full rounded-2xl border border-slate-200 bg-white/95 backdrop-blur',
                                        'shadow-sm transition will-change-transform',
                                        'hover:translate-y-[-2px] hover:shadow-md',
                                        a.glow,
                                    ].join(' ')}
                                >
                                    {/* top accent edge */}
                                    <span aria-hidden className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${a.edge}`} />
                                    {/* index badge */}
                                    <span
                                        className={[
                                            'absolute -top-3 left-4 inline-flex h-7 min-w-[28px] items-center justify-center rounded-full',
                                            'border px-2 text-xs font-bold shadow-sm bg-white text-slate-900 border-slate-200',
                                        ].join(' ')}
                                        aria-label={`Project ${i + 1}`}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="p-5 sm:p-6">
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                                            {p.title}
                                        </h3>
                                        {p.blurb && (
                                            <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-slate-700">
                                                {p.blurb}
                                            </p>
                                        )}

                                        {/* micro chips (distinct colors rotate per card) */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${a.chip}`}>
                                                Portfolio
                                            </span>
                                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                                                Industry Task
                                            </span>
                                            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-semibold text-stone-800">
                                                Job-Ready
                                            </span>
                                        </div>

                                        {/* footer row */}
                                        <div className="mt-5 flex items-center justify-between">
                                            <span className="text-xs font-medium text-slate-500">~5–8 hrs</span>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ol>

                {/* CTA row */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="cursor-pointer rounded-xl border border-orange-500 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
                    >
                        See Sample Portfolios
                    </button>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                    >
                        Book a Free Demo
                    </button>
                </div>
            </div>

            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Digital Marketing Course Page - Projects Section - Digital Marketing - Sample Portfolios"
                courseName={courseName}
            />
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Digital Marketing Course Page - Projects Section - Book Demo"
                courseName={courseName}
            />

        </section>
    );
}

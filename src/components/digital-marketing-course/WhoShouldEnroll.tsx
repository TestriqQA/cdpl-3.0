"use client";

import {
    Users,
    GraduationCap,
    Briefcase,
    Target,
    Wrench,
    Cpu,
    Sparkles,
    LineChart,
} from 'lucide-react';

import { useState } from 'react';
import EnrollModal from '../EnrollModal';

type Audience = {
    title: string;
    description: string;
    icon: React.ReactNode;
    accent: {
        bg: string;
        text: string;
        border: string;
        ring: string;
        dot: string;
    };
};

const ACCENTS = [
    { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200', ring: 'focus:ring-sky-300', dot: 'bg-sky-400' },
    { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', ring: 'focus:ring-emerald-300', dot: 'bg-emerald-400' },
    { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', ring: 'focus:ring-amber-300', dot: 'bg-amber-400' },
    { bg: 'bg-violet-50', text: 'text-violet-800', border: 'border-violet-200', ring: 'focus:ring-violet-300', dot: 'bg-violet-400' },
    { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200', ring: 'focus:ring-rose-300', dot: 'bg-rose-400' },
    { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200', ring: 'focus:ring-indigo-300', dot: 'bg-indigo-400' },
    { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', ring: 'focus:ring-teal-300', dot: 'bg-teal-400' },
];

const AUDIENCE: Audience[] = [
    {
        title: 'Career Switchers',
        description: 'Move from non-tech or sales roles into high-growth digital marketing & analytics.',
        icon: <Users className="h-6 w-6" />,
        accent: ACCENTS[0],
    },
    {
        title: 'Fresh Graduates',
        description: 'BCom • BBA • BSc • BE/ BTech — get job-ready with projects and certification.',
        icon: <GraduationCap className="h-6 w-6" />,
        accent: ACCENTS[1],
    },
    {
        title: 'Working Professionals',
        description: 'Upskill from content/social/PR to performance marketing, GA4 & attribution.',
        icon: <Briefcase className="h-6 w-6" />,
        accent: ACCENTS[2],
    },
    {
        title: 'Entrepreneurs & Founders',
        description: 'Grow your brand with ROI-driven ads, CRO and data-backed decisions.',
        icon: <Target className="h-6 w-6" />,
        accent: ACCENTS[3],
    },
    {
        title: 'Product & Growth Teams',
        description: 'Layer analytics, funnels, LTV and experimentation into your roadmap.',
        icon: <LineChart className="h-6 w-6" />,
        accent: ACCENTS[4],
    },
    {
        title: 'Developers & Designers',
        description: 'Add marketing analytics, GTM, SEO-tech and CRO to your toolkit.',
        icon: <Wrench className="h-6 w-6" />,
        accent: ACCENTS[5],
    },
    {
        title: 'Automation Curious',
        description: 'Use AI tools to ideate content, scale creatives and automate workflows.',
        icon: <Sparkles className="h-6 w-6" />,
        accent: ACCENTS[6],
    },
    {
        title: 'Data-Driven Learners',
        description: 'Master GA4, Looker Studio dashboards, cohorts and attribution models.',
        icon: <Cpu className="h-6 w-6" />,
        accent: ACCENTS[0],
    },
];

export default function WhoShouldEnrollSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Digital Marketing & Analytics Master Program";


    return (
        <section
            id="who-should-enroll"
            aria-labelledby="who-heading"
            className="relative py-10 bg-white"
        >
            {/* Subtle futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px)] bg-[size:26px_26px]" />
                <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(59,130,246,0.10),transparent_60%)]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 xl:px-10">
                {/* Heading and micro-badges */}
                <header className="text-center max-w-4xl mx-auto">
                    <h2
                        id="who-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
                    >
                        Who Should <span className="text-green-700">Enroll</span>?
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-slate-600">
                        Beginner-friendly yet <strong>career-accelerating</strong>. Ideal for{' '}
                        <strong>switchers, students, professionals</strong> and <strong>founders</strong> who want
                        practical <em>Digital Marketing</em> & <em>Analytics</em> skills - SEO, PPC, Social, GA4, CRO and Automation.
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
                        <Badge label="Portfolio Projects" />
                        <Badge label="Verified Certificate" />
                        <Badge label="Placement Support" />
                    </div>
                </header>

                {/* Personas grid */}
                <ul className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {AUDIENCE.map((a, i) => (
                        <li key={a.title}>
                            <PersonaCard {...a} index={i} onEnroll={() => setIsEnrollOpen(true)} />
                        </li>
                    ))}
                </ul>

                {/* SEO footer copy */}
                <p className="mx-auto mt-10 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Whether you’re launching a new career or scaling an existing one, you’ll build hands-on
                    experience with <strong>GA4 & GTM</strong>, <strong>Meta/Google Ads</strong>,{' '}
                    <strong>SEO & Content</strong>, <strong>Looker Studio</strong> dashboards and{' '}
                    <strong>conversion rate optimization</strong> - the exact stack employers hire for.
                </p>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Digital Marketing Course Page - Who Should Enroll - I fit this profile"
                courseName={courseName}
            />
        </section>
    );
}

/* ---------- Subcomponents ---------- */

function Badge({ label }: { label: string }) {
    return (
        <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur">
            {label}
        </span>
    );
}

function PersonaCard({
    title,
    description,
    icon,
    accent,
    index,
    onEnroll,
}: Audience & { index: number; onEnroll: () => void }) {
    // alternate border animation classes for a subtle futuristic feel
    const edge = index % 2 === 0 ? 'before:left-0 after:right-0' : 'before:right-0 after:left-0';

    void edge;

    return (
        <article
            className={[
                'relative overflow-hidden rounded-2xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                'hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2',
                accent.bg,
                accent.border,
                accent.ring,
            ].join(' ')}
            tabIndex={0}
            aria-label={title}
        >
            {/* top and bottom animated edges */}
            <div
                className={[
                    'pointer-events-none absolute inset-x-0 top-0 h-[2px]',
                    'bg-gradient-to-r from-transparent via-slate-300/50 to-transparent',
                    'opacity-60',
                ].join(' ')}
                aria-hidden
            />
            <div
                className={[
                    'pointer-events-none absolute inset-x-0 bottom-0 h-[2px]',
                    'bg-gradient-to-r from-transparent via-slate-300/40 to-transparent',
                    'opacity-40',
                ].join(' ')}
                aria-hidden
            />

            {/* icon + title */}
            <div className="flex items-center gap-3">
                <span
                    className={[
                        'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm',
                        accent.text,
                        'border border-current/10',
                    ].join(' ')}
                >
                    {icon}
                </span>
                <h3 className={['text-base font-bold', accent.text].join(' ')}>{title}</h3>
            </div>

            {/* description */}
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{description}</p>

            {/* micro highlights */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <Dot label="Beginner Friendly" colorClass={accent.dot} />
                <Dot label="Mentor-Led" colorClass="bg-slate-400" />
                <Dot label="Job-Ready Skills" colorClass="bg-slate-500" />
            </div>

            {/* CTA */}
            <button
                onClick={onEnroll}
                className={[
                    'mt-5 inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-semibold transition',
                    'border-slate-900 bg-slate-900 text-white hover:translate-y-[-1px] hover:shadow cursor-pointer',
                ].join(' ')}
                aria-label={`Talk to advisor about ${title}`}
            >
                I fit this profile
            </button>
        </article>
    );
}

function Dot({ label, colorClass }: { label: string; colorClass: string }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]">
            <span className={`h-1.5 w-1.5 rounded-full ${colorClass}`} aria-hidden />
            {label}
        </span>
    );
}

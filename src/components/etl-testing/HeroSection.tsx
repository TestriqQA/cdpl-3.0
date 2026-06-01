'use client';


import {
    Shuffle,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Home,
    ChevronRight,
    CloudDownload,
    ArrowDownNarrowWide,
} from 'lucide-react';
import IconCard from '../ui/IconCard';
import LeadForm from '../forms/ApiCourseLeadForm';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const SectionLoader = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-gray-900">{label}</span>
        </div>
    );
};

const EnrollModal = dynamic(() => import('@/components/EnrollModal'), { ssr: false, loading: () => <SectionLoader label="Loading enroll modal..." /> });
const SyllabusDownloadModal = dynamic(() => import('@/components/SyllabusDownloadModal'), { ssr: false, loading: () => <SectionLoader label="Loading syllabus modal..." /> });


/* -----------------------------
 * Feature cards
 * ----------------------------- */
const features = [
    {
        icon: <Shuffle />,
        title: '80% Hands-On',
        description: 'Test real ETL/ELT data pipelines end-to-end',
        bg: 'bg-emerald-50',
        iconColor: 'text-emerald-700',
        border: 'border-emerald-200',
    },
    {
        icon: <Users />,
        title: 'Expert Mentors',
        description: '15+ yrs in Data Warehousing & BI',
        bg: 'bg-violet-50',
        iconColor: 'text-violet-700',
        border: 'border-violet-200',
    },
    {
        icon: <Award />,
        title: 'Global Certification',
        description: 'ETL + SQL certificate with QR verification',
        bg: 'bg-amber-50',
        iconColor: 'text-amber-700',
        border: 'border-amber-200',
    },
    {
        icon: <Briefcase />,
        title: 'Placement',
        description: 'Resume, mock interviews & referrals',
        bg: 'bg-sky-50',
        iconColor: 'text-sky-700',
        border: 'border-sky-200',
    },
];

/* -----------------------------
 * Hero Section
 * ----------------------------- */
export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: "/courses" },
        { label: 'Software Testing', href: '/courses/software-testing-course' },
        { label: 'ETL Testing' },
    ];

    return (
        <section id="hero" aria-labelledby="etl-hero" className="relative overflow-hidden">
            {/* Light, subtle background (sleek, non-distracting) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1100px_520px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            title={c.label}
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left copy */}
                    <div
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Badge */}
                        <div className="mb-4 hidden lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                            18-Hour Master Program • Weekend & Evening Slots
                        </div>

                        {/* H1 */}
                        <h1
                            id="etl-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master <span className='text-ST'>ETL Testing</span> with SQL & Enterprise Tools – Placement Support
                        </h1>

                        {/* Mobile form under H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="ETL Testing Course Page - Hero Section" />
                        </div>

                        {/* Sub copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Understand <strong>what is ETL testing</strong> and validate data at every stage—<strong>extract</strong>,{' '}
                            <strong>transform</strong>, and <strong>load</strong>. Learn practical skills in{' '}
                            <em>dataset profiling, schema checks, reconciliation, and automation</em> to ensure accurate BI & analytics. This <strong>ETL testing course</strong> is your gateway to becoming an <strong>ETL developer</strong>.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics: <strong>ETL vs ELT</strong>, <strong>what is ETL in data warehouse</strong>, SQL data quality rules, SCD types,
                            partitioning, orchestration basics, CI/CD integration, and audit-ready reporting. Master <strong>ETL testing tools</strong> like Informatica and Talend.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in ETL Testing program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download ETL Testing Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById('curriculum');
                                    if (el) {
                                        window.scrollTo({ top: el.offsetTop - 150, behavior: 'smooth' });
                                    }
                                }}
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full ETL curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Quick highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with real <strong>ETL pipeline</strong> datasets
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                Data quality rules & <strong>SQL reconciliation</strong> tests
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                                Interview prep & <strong>ETL testing interview questions</strong> portfolio
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                                QR-verified global certification
                            </li>
                        </ul>

                        <div className="mt-6 md:hidden grid lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={`desk-${i}`}
                                    {...f}
                                    className="hover:shadow-md p-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Desktop Form + Feature cards */}
                    <aside
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="ETL Testing Course Page - Hero Section" />
                    </aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="ETL Testing"
                source="ETL Testing Course Page - Enroll Now- Hero Section"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="ETL Testing"
                source="ETL Testing Course Page - Hero Section - ETL Testing - Download Syllabus"
            />

        </section>
    );
}

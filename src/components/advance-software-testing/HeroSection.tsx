'use client';
import {
    Bug,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Star,
    CheckCircle2,
    Globe2,
    Home,
    ChevronRight,
    CloudDownload,
    ArrowDownNarrowWide,
} from 'lucide-react';
import IconCard from '../ui/IconCard';
import LeadForm from '../forms/ApiCourseLeadForm';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const EnrollModal = dynamic(() => import('@/components/EnrollModal'), { ssr: false, loading: () => <SectionLoader label="Loading enroll modal..." /> });
const SyllabusDownloadModal = dynamic(() => import('@/components/SyllabusDownloadModal'), { ssr: false, loading: () => <SectionLoader label="Loading syllabus download modal..." /> });

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

/** -----------------------------
 *  Feature Cards
 *  ----------------------------- */
const features = [
    {
        icon: <Bug />,
        title: '80% Hands-On',
        description: 'Real test automation projects',
        bg: 'bg-emerald-50',
        iconColor: 'text-emerald-700',
        border: 'border-emerald-200',
    },
    {
        icon: <Users />,
        title: 'Expert Instructors',
        description: 'ISTQB & Selenium certified',
        bg: 'bg-indigo-50',
        iconColor: 'text-indigo-700',
        border: 'border-indigo-200',
    },
    {
        icon: <Award />,
        title: 'Global Certification',
        description: 'ISTQB + Automation Cert',
        bg: 'bg-amber-50',
        iconColor: 'text-amber-700',
        border: 'border-amber-200',
    },
    {
        icon: <Briefcase />,
        title: '100% Placement',
        description: 'Resume + Interview Prep',
        bg: 'bg-rose-50',
        iconColor: 'text-rose-700',
        border: 'border-rose-200',
    },
];

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: 'Software Testing', href: '/courses/software-testing-course' },
        { label: "Advanced Software Testing" },
    ];

    return (
        <section id="hero-software-testing" aria-labelledby="software-testing-hero" className="relative overflow-hidden">
            {/* Subtle light theme background (no heavy gradients) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

                {/* Breadcrumbs for SEO & UX */}
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
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
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
                    {/* LEFT: Copy */}
                    <div
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Top trust strip */}
                        <div className="hidden mb-5 lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                            <span className="inline-flex items-center gap-1">
                                <Star className="h-4 w-4 fill-current text-yellow-500" />
                                4.9/5 Rated
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Users className="h-4 w-4 text-indigo-600" />
                                5,000+ Placed
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Globe2 className="h-4 w-4 text-emerald-700" />
                                Live Online & Classroom
                            </span>
                        </div>

                        {/* H1 */}
                        <h1
                            id="software-testing-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master <span className='text-ST'>Advanced Software Testing & SDET</span> with Selenium, Cypress & Appium
                        </h1>

                        {/* FORM on mobile: directly below title */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="Advanced Software Testing Course Page - Hero Section" />
                        </div>

                        {/* Supporting copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Looking for the best <strong>selenium certification course</strong>? Join India's top-rated <strong>SDET training</strong> program. Learn <strong>Selenium Java course</strong> concepts, <strong>API testing</strong>, <strong>Mobile App testing (Appium)</strong>, and <strong>Cypress</strong>. Get <strong>100% placement support</strong> and become a complete <strong>Automation Test Engineer</strong>.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics: <strong>Selenium online courses</strong>, Page Objects, <strong>Appium testing course</strong>, <strong>API testing</strong>, <strong>Cypress testing course</strong>, Jenkins/GitHub Actions. Better than any <strong>free selenium course</strong> with dedicated mentorship.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Advanced Software Testing"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download Advanced Software Testing Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Advanced Software Testing curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Quick highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with real <strong>selenium automation testing</strong> projects
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                CI/CD integration using Jenkins & GitHub Actions
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                                Interview prep & portfolio for high-paying <strong>SDET</strong> roles
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                                QR-verified <strong>ISTQB</strong> + <strong>Selenium Certification Course</strong>
                            </li>
                        </ul>

                        <div className="mt-6 grid md:hidden lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md p-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Desktop Form + Feature grid */}
                    <aside
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="Advanced Software Testing Course Page - Hero Section" />
                    </aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="Advanced Software Testing"
                source="Advanced Software Testing Course Page - Hero Section - Enroll Now"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Advanced Software Testing"
                source="Advanced Software Testing Course Page - Hero Section - Syllabus Download"
            />

        </section>
    );
}

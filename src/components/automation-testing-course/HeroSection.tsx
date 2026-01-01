'use client';
import {
    FaRobot,
    FaUsers,
    FaAward,
    FaBriefcase,
    FaArrowRight,
    FaHome,
    FaChevronRight,
    FaCloudDownloadAlt,
    FaSortAmountDown,
} from 'react-icons/fa';
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


/* ---------------------------------------
   Feature cards (distinct, light accents)
---------------------------------------- */
const features = [
    { icon: <FaRobot />, title: '85% Hands-On', description: 'AI-powered test scripts & self-healing locators', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
    { icon: <FaUsers />, title: 'SDET Mentors', description: '10+ years, FAANG & product-based guidance', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
    { icon: <FaAward />, title: 'Global Cert', description: 'ISTQB Foundation + Advanced automation prep', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
    { icon: <FaBriefcase />, title: '100% Placement', description: 'Resume clinic, mock interviews, referrals', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
];

/* ---------------------------------------
   HERO
---------------------------------------- */
export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Advanced Automation Testing" },
    ]

    return (
        <section id="hero-automation" aria-labelledby="automation-hero" className="relative overflow-hidden">
            {/* Subtle, light background (no heavy gradients; sleek + clean) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(40rem_20rem_at_20%_10%,rgba(59,130,246,0.07),transparent_60%),radial-gradient(35rem_18rem_at_85%_0%,rgba(99,102,241,0.06),transparent_55%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(80%_55%_at_50%_-4%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

                {/* Breadcrumbs for SEO & UX */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <FaHome className="h-4 w-4" /> : <FaChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
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
                        {/* badges — each chip has its own color */}
                        <div className="mb-4 hidden md:inline-flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
                                30-Hour Elite Program
                            </span>
                            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                                Live Online & Classroom
                            </span>
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                                Mentor-Led SDET Coaches
                            </span>
                            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                                Placement Assistance
                            </span>
                        </div>


                        <h1
                            id="automation-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Advanced <span className="text-ST">Automation Testing</span>{' '}
                            for <span className="text-ST">Future-Ready SDETs</span>
                        </h1>

                        {/* FORM — mobile: directly under H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="Advanced Automation Testing Course Page - Hero Section" />
                        </div>

                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Master end-to-end QA with <strong>Selenium</strong>, <strong>Cypress</strong>, <strong>Playwright</strong>,
                            API automation, and <strong>AI-assisted testing</strong>. Build CI/CD pipelines (Jenkins/GitHub Actions),
                            write self-healing tests, and ship reliable releases faster.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Learn framework design (POM, fixtures, reporting), parallel & cross-browser strategies, contract testing,
                            and performance/security basics. Graduate with a job-ready portfolio and interview prep.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Advanced Automation Testing"
                            >
                                Enroll Now
                                <FaArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download Advanced Automation Testing Syllabus"
                            >
                                Download Syllabus
                                <FaCloudDownloadAlt className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById('curriculum');
                                    if (el) {
                                        window.scrollTo({ top: el.offsetTop - 150, behavior: 'smooth' });
                                    }
                                }}
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Advanced Automation Testing curriculum"
                            >
                                View Curriculum
                                <FaSortAmountDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Quick highlights — unique color markers per line */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-800 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                AI-powered locators & self-healing scripts
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                CI/CD integration (Jenkins / GitHub Actions)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
                                Interview prep, mock interviews & portfolio review
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
                                QR-verified global certification
                            </li>
                        </ul>

                        {/* Feature tiles below the form on desktop */}
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

                    {/* RIGHT: Desktop Form + Feature cards (if desired) */}
                    <aside
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="Advanced Automation Testing Course Page - Hero Section" />

                    </aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="Advanced Automation Testing"
                source="Advanced Automation Testing Course Page - Hero Section - Enroll Now"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Advanced Automation Testing"
                source="Advanced Automation Testing Course Page - Hero Section - Syllabus Download"
            />

        </section>
    );
}

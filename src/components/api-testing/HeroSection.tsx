'use client';

import {
    Code,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Star,
    ShieldCheck,
    Clock,
    CheckCircle2,
    Globe2,
    Home,
    ChevronRight,
    CloudDownload,
    ArrowDownNarrowWide,
} from 'lucide-react';
import { motion } from 'framer-motion';
import IconCard from '@/components/ui/IconCard';
// import LeadForm from '../CourseLeadForm';
import LeadForm from '../forms/ApiCourseLeadForm';
import Link from 'next/link';
import { useState } from 'react';
import EnrollModal from '@/components/EnrollModal';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';

/** -----------------------------
 *  Feature cards (unchanged data)
 *  -----------------------------
 */
const features = [
    { icon: <Code />, title: 'Hands-On API Labs', description: 'Postman, REST, GraphQL & auth flows', bg: 'bg-cyan-50', iconColor: 'text-cyan-700', border: 'border-cyan-200' },
    { icon: <Users />, title: 'Mentor-Led Cohort', description: '13+ yrs industry veterans', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
    { icon: <Award />, title: 'Verified Certificate', description: 'QR-secured, globally recognizable', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
    { icon: <Briefcase />, title: 'Placement Support', description: 'Resume, mock interviews, referrals', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
    { icon: <ShieldCheck />, title: 'API Security', description: 'OWASP API Top-10, OAuth2, JWT', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
    { icon: <Clock />, title: 'Fast-Track', description: '15 hours | weekend & evening slots', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200' },
];

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "API Testing with Postman, REST & GraphQL" },
    ]

    return (
        <section id="hero" aria-labelledby="api-testing-hero" className="relative overflow-hidden">
            {/* Background */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
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
                    {/* Left: copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* badges */}
                        <div className="hidden mb-5 lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                            <span className="inline-flex items-center gap-1">
                                <Star className="h-4 w-4 fill-current text-yellow-500" />
                                4.9/5 Rated
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Users className="h-4 w-4 text-indigo-600" />
                                3,000+ Learners
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Globe2 className="h-4 w-4 text-emerald-600" />
                                Live Online & Classroom
                            </span>
                        </div>

                        {/* H1 */}
                        <h1
                            id="api-testing-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master <span className='text-ST'>API Testing with Postman, REST & GraphQL</span>

                        </h1>


                        {/* FORM — mobile : shown right below H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="API Testing Course Page - Hero Section" />
                        </div>

                        {/* Supporting copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Build job-ready skills in <strong>API testing, automation frameworks</strong>, <strong>CI/CD</strong>, and <strong>API security</strong>. Practice with real-world
                            projects, learn best practices for <em>contract testing, schema validation, mocking, and performance checks</em>, and earn a verified certificate.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics include Postman Collections & Newman, REST principles, GraphQL queries & mutations, Swagger/OpenAPI, OAuth2 & JWT, data-driven tests, Jenkins/GitHub Actions,
                            and reporting with evidence for enterprise-grade QA.
                        </p>

                        {/* CTAs */}

                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in API Testing program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download API Testing Syllabus"
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
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="View full API testing curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                        </div>


                        {/* Quick highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with project reviews
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                CI/CD integration (Jenkins, GitHub Actions)
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                                Interview prep & portfolio guidance
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                                QR-verified global certification
                            </li>
                        </ul>



                        {/* Optional: feature cards can remain below on mobile/tablet */}
                        <div className="mt-8 md:hidden grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Desktop Form */}
                    <motion.aside
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="API Testing Course Page - Hero Section" />

                    </motion.aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="API Testing"
                source="API Testing Course Page - Enroll Now- Hero Section"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="API Testing"
                source="API Testing Course Page - Hero Section - Syllabus Download"
            />
        </section>
    );
}

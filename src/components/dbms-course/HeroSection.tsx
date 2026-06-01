"use client";

import {
    Database,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Star,
    Globe2,
    Home,
    ChevronRight,
    CloudDownload,
    ArrowDownNarrowWide,
    CheckCircle2,
} from 'lucide-react';
import IconCard from '@/components/ui/IconCard';
import LeadForm from '@/components/forms/ApiCourseLeadForm';
import Link from 'next/link';
import { useState } from 'react';

/** -----------------------------
 * Feature tiles
 * ----------------------------- */
const features = [
    { icon: <Database />, title: '80% Hands-On', description: 'Build real databases from scratch', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
    { icon: <Users />, title: 'Expert Faculty', description: '15+ yrs MySQL & Oracle certified', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
    { icon: <Award />, title: 'Global Certification', description: 'MySQL + SQL Certification', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
    { icon: <Briefcase />, title: 'Placement', description: 'Resume + Interview Prep', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
];

import EnrollModal from '@/components/EnrollModal';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Software Testing', href: '/courses/software-testing-course' },
        { label: 'MySQL Course' },
    ];

    return (
        <section id="hero" aria-labelledby="mysql-hero" className="relative overflow-hidden">
            {/* Light, subtle frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
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
                    {/* Left column: copy */}
                    <div
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
                                Mentor-Led Cohorts
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Globe2 className="h-4 w-4 text-emerald-600" />
                                Live Online & Classroom
                            </span>
                        </div>

                        {/* H1 */}
                        <h1
                            id="mysql-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Database Management System using <span className="text-ST">MySQL</span>
                        </h1>

                        {/* Mobile form just below H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="DBMS Course Page - Hero Section" />
                        </div>

                        {/* Supporting copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Master <strong>SQL queries</strong>, <strong>database design</strong>, <strong>normalization</strong>,{' '}
                            <strong>indexing</strong>, <strong>transactions</strong>, and <strong>performance tuning</strong>. Build scalable databases for
                            web apps, analytics, and enterprise systems. Earn a verified certificate and portfolio-ready projects.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics include ER modeling, stored procedures, joins, query optimization, backup & recovery, and deployment best practices.
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
                                Production-grade schema & indexing
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
                        {/* Desktop feature grid under the form */}
                        <div className="mt-6 md:hidden lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md p-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right column: Desktop Form */}
                    <aside
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="DBMS Course Page - Hero Section" />

                    </aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="MySQL DBMS"
                source="DBMS Course Page - Hero Section - Enroll Now"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="MySQL DBMS"
                source="DBMS Course Page - Hero Section - MySQL DBMS - Download Syllabus"
            />
        </section>
    );
}

"use client";

import {
    ArrowRight,
    ChevronRight,
    Clock,
    Home,
    CloudDownload,
    ArrowDownNarrowWide
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Business Intelligence", href: null },
        { label: "Advanced Data Analytics with Python", href: "/data-analytics-python" },
    ];

    const courseName = "Advanced Data Analytics with Python";

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            {/* Decorative background */}
            <div className="absolute overflow-hidden">
                <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-5">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                {c.href ? (
                                    <Link
                                        href={c.href}
                                        className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                    >
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span className="text-slate-700 font-medium cursor-default">
                                        {c.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                {/* Main grid (form aligned to top on the right) */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-7 lg:col-span-8">
                        {/* Duration Badge */}
                        <div className="mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                            <Clock className="h-4 w-4 text-brand" />
                            <span className="text-sm font-semibold text-slate-700">
                                Duration: <span className="text-brand">20 Hours</span>
                            </span>
                        </div>

                        {/* H1 */}
                        <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            <span className="bg-gradient-to-r from-orange-500 via-brand to-red-500 bg-clip-text text-transparent">
                                Best Data Analytics Course
                            </span>
                            <span> with </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Python
                            </span>
                            <span> – 20 Hours to a Data Analyst Career</span>
                        </h1>

                        {/* Mobile form (under H1) */}
                        <div className="mt-6 md:hidden">
                            <ApiCourseLeadForm source="Data Analytics Python Course Page - Hero Section (Mobile)" />
                        </div>

                        {/* Subheading */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            Wondering <strong>what is data analytics course</strong> and <strong>how to become a data analyst</strong>? Our <strong>python data analysis course</strong> in Mumbai/Thane transforms beginners into job-ready professionals. Learn <strong>how to analyse data using python</strong> with Pandas, NumPy, Matplotlib, Seaborn, and Plotly—all in just 20 intensive hours with <strong>100% placement support</strong>.
                        </p>

                        {/* SEO keywords line */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            Topics: <strong>what is data analysis in python</strong>, <strong>data analytics subjects</strong>, EDA & visualization, dashboard design, real-world projects, business intelligence, KPI tracking, reporting automation. Ideal for those asking <strong>how to use python in data analysis</strong>.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#ff8c00] bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                                aria-label="Enroll now in Data Analytics program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#ff8c00] bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                                aria-label="Download Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <Link
                                href="#curriculum"
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                                aria-label="View Curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⭐</span>
                                <span>
                                    <strong className="text-slate-900">4.8/5</strong> Average Rating
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">👥</span>
                                <span>
                                    <strong className="text-slate-900">500+</strong> Successful Graduates
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span>
                                    <strong className="text-slate-900">15+ Years</strong> Industry Experience
                                </span>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                            {[
                                { icon: "📊", label: "Real Projects" },
                                { icon: "👨‍🏫", label: "Expert Trainers" },
                                { icon: "🎓", label: "Certification" },
                                { icon: "💼", label: "Job Ready" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-orange-300"
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Extra SEO copy */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This <strong>data analytics course</strong> is designed for students and working professionals seeking a <strong>career in data analytics</strong>. Build a job-ready portfolio, learn <strong>what skills are required for data analyst</strong> roles, and get <strong>best data analytics courses</strong> experience with hands-on projects.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned & sticky) */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8 sticky">
                        <ApiCourseLeadForm source="Data Analytics Python Course Page - Hero Section (Desktop)" />
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics Python Course Page - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics Python Course Page - Hero Section - Download Syllabus"
                courseName={courseName}
            />
        </section >
    );
}

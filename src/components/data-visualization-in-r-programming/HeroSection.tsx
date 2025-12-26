"use client";

import React, { useState } from "react";
import Link from "next/link";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import { ArrowRight, ChevronRight, Clock, Home, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";
import MachineLearningCourseLeadForm from "../forms/MachineLearningCourseLeadForm";

export const HeroSection: React.FC = () => {
    const { hero_section, course_title } = content;
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerOpen, setIsCareerOpen] = useState(false);
    const courseName = "Machine Learning and Data Visualization using R Programming";

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        {
            label: course_title || "Advanced Data Analytics with R",
        },
    ];



    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
            {/* Decorative background blobs (same style as reference) */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 relative z-10">
                {/* Breadcrumbs (same layout as reference) */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-orange-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-orange-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                {/* Main grid (form right, top-aligned) */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-7 lg:col-span-8">
                        {/* Duration Badge (using hero_section.duration) */}
                        <div className="mb-4 w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-semibold text-slate-700">
                                Duration: <span className="text-orange-600">{hero_section.duration}</span>
                            </span>
                        </div>

                        {/* H1 — same style as reference, R-specific text */}
                        <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            <span>Master </span>
                            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                                Machine Learning
                            </span>
                            <span> and </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Data Visualization using R
                            </span>
                        </h1>

                        {/* Mobile form under H1 */}
                        <div className="mt-3 md:hidden">
                            <MachineLearningCourseLeadForm source="R Programming Course Page - Hero Section (Mobile)" />
                        </div>

                        {/* Subheading (uses hero_section.description) */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            {hero_section.description}
                        </p>

                        {/* Optional SEO-ish line (can tweak or remove if not needed) */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            Learn R for data visualization, statistics, predictive modeling, dashboards, and real-world analytics projects tailored for business decision-making.
                        </p>



                        {/* CTAs (same style as reference) */}
                        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                                aria-label="Enroll now in R Programming Course"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                                aria-label="Download R Programming Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full R Programming curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Trust indicators (optional but keep layout parity) */}
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
                                    <strong className="text-slate-900">500+</strong> Successful Learners
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🏆</span>
                                <span>
                                    <strong className="text-slate-900">5+ Years</strong> Industry Experience
                                </span>
                            </div>
                        </div>

                        {/* Highlights – same layout style as reference */}
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

                        {/* Extra copy for SEO / depth */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This R programming course for data visualization & machine learning is designed
                            for students and working professionals who want to move into analytics and data
                            science roles. Build a job-ready portfolio with real datasets, learn R for EDA,
                            visualization, statistical modeling, and communicate insights that drive business impact.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned) */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8">
                        <MachineLearningCourseLeadForm source="R Programming Course Page - Hero Section (Desktop)" />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="R Programming Course Page - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="R Programming Course Page - Hero Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerOpen}
                onClose={() => setIsCareerOpen(false)}
                source="R Programming Course Page - Hero Section - Career Session"
                courseName={courseName}
            />
        </section>
    );
};


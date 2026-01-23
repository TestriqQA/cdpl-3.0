"use client";

import { ArrowRight, ChevronRight, Home, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("../EnrollModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("../SyllabusDownloadModal"), { ssr: false });

/** --- Updated SEO-optimized Hero --- */
export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Advanced Excel for Data Analytics & Visualization";

    const courseInfo = {
        title: "Advanced Excel for Data Analytics & Visualization",
        duration: "20 Hours",
        institute: "Cinute Digital Pvt. Ltd.",
        description:
            "Transform raw business data into decision-ready dashboards with Excel’s advanced formulas, PivotTables, Power Query, and Power Pivot. Learn KPI tracking, interactive charts, reporting automation, and best practices for analytics in just 20 hours.",
        tagline: "#1 MUMBAI's PREMIUM TRAINING INSTITUTE",
    };


    /** ---- Optional: visible breadcrumb for internal linking (kept minimal) ---- */
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Advanced Excel for Data Analytics & Visualization", href: "/data-analytics-and-visualization" },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-10">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>


            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <Link
                                    href={c.href}
                                    className={`hover:text-brand ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Top-aligned columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Left content */}
                    <div className="flex flex-col md:col-span-7 lg:col-span-8 justify-start space-y-8">
                        <div className="space-y-4">
                            {/* Badge / tagline */}
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                {courseInfo.tagline}
                            </div>

                            {/* Heading styled like the second hero */}
                            <h1 className="mt-1 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                                <span>Master </span>
                                <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">
                                    Advanced Excel
                                </span>
                                <span> for </span>
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Data Analytics & Visualization
                                </span>
                            </h1>

                            <div className="md:hidden min-h-[500px]">
                                <ApiCourseLeadForm source="Data Analytics & Visualization Course Page - Hero Section (Mobile)" courseName={courseName} />
                            </div>

                            {/* SEO-optimized description */}
                            <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                                {courseInfo.description} Build job-ready dashboards, streamline weekly and monthly reports,
                                and apply proven frameworks for <strong>Excel data analysis</strong>, <strong>business intelligence</strong>,
                                and <strong>interactive visualization</strong>. Ideal for learners in{" "}
                                <strong>Mumbai, Maharashtra (India)</strong> seeking a career upgrade in analytics, MIS, or reporting.
                            </p>

                            {/* CTAs */}
                            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                                <button
                                    onClick={() => setIsEnrollOpen(true)}
                                    className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#ff8c00] bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-300"
                                    aria-label="Enroll now in Data Analytics program"
                                >
                                    Enroll Now
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <button
                                    onClick={() => setIsSyllabusOpen(true)}
                                    className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#ff8c00] bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-300"
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

                            {/* Topics/keywords (scan-friendly) */}
                            <div className="mt-2 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3">
                                {[
                                    "Advanced formulas & functions",
                                    "PivotTables & PivotCharts",
                                    "Power Query (ETL)",
                                    "Power Pivot & Data Model",
                                    "DAX (intro) for KPIs",
                                    "Interactive dashboards",
                                    "Data cleaning & shaping",
                                    "Automation & reporting",
                                    "Business analytics use-cases",
                                ].map((t, i) => (
                                    <span
                                        key={i}
                                        className="rounded-md border border-slate-200 bg-white/70 px-2 py-1 text-xs font-medium text-slate-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Local SEO helper (subtle, human-readable) */}
                            <p className="mt-3 max-w-3xl text-sm text-slate-600">
                                Looking for the <strong>best Advanced Excel course in Mumbai</strong>? Join our{" "}
                                <strong>Excel data analytics training</strong> to learn <strong>dashboard design</strong>,
                                <strong> KPI tracking</strong>, and <strong>Power Query</strong> workflows used by modern
                                analytics teams across India.
                            </p>
                        </div>



                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900">5,000+ Students Trained</p>
                                <p className="text-xs text-slate-600">Trusted by professionals worldwide</p>
                            </div>
                        </div>

                        {/* Extra SEO copy (concise & useful) */}
                        <div className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
                            This <strong>Advanced Excel training</strong> focuses on real datasets, corporate reporting needs,
                            and job-aligned projects. You’ll practice <strong>ETL with Power Query</strong>, build a
                            <strong> data model with Power Pivot</strong>, create <strong>interactive dashboards</strong> with slicers,
                            and apply <strong>best practices for BI and storytelling</strong>. Perfect for analysts, freshers,
                            and working pros targeting roles in <strong>Data Analytics</strong>, <strong>MIS</strong>, and
                            <strong> Business Intelligence</strong>.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned & sticky) */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8 sticky min-h-[600px]">
                        <ApiCourseLeadForm source="Data Analytics & Visualization Course Page - Hero Section (Desktop)" courseName={courseName} />
                    </div>
                    {/* /Right section */}
                </div>
            </div>

            {/* Modals */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics & Visualization Course Page - Hero Section - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

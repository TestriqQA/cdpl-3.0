"use client";
import { ArrowRight, ChevronRight, Home, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("../EnrollModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("../SyllabusDownloadModal"), { ssr: false });
const CareerSessionModal = dynamic(() => import("../CareerSessionModal"), { ssr: false });

const heroData = {
    title: "Master Data Analytics & Visualization with Tableau",
    subtitle:
        "Transform raw data into powerful, insight-driven visualizations. Learn from industry experts and master Tableau for data science, analytics, and interactive dashboards in just 20 hours.",
    duration: "20 Hours",
    highlights: [
        { icon: "📊", label: "Real Projects" },
        { icon: "👨‍🏫", label: "Expert Trainers" },
        { icon: "🎓", label: "Certification" },
        { icon: "💼", label: "Job Ready" },
    ],
    stats: [
        { value: "4.8/5", label: "Average Rating", icon: "⭐" },
        { value: "500+", label: "Successful Graduates", icon: "👥" },
        { value: "14+", label: "Years Experience", icon: "🏆" },
    ],
    cta: {
        primary: "Enroll Now",
        secondary: "Download Syllabus",
    },
};

/** ---- Optional: visible breadcrumb for internal linking ---- */
const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Data Analytics & Visualization with Tableau" },
];

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-10 overflow-hidden">
            <Head>
                <title>Tableau Course | Data Analytics & BI Dashboard Training (20 Hours)</title>
                <meta
                    name="description"
                    content="Tableau course with real projects: learn dashboards, data visualization, BI reporting, data blending, joins, calculations, parameters, LOD, maps & storytelling. 20 hours, expert trainers, certification, job-ready skills."
                />
                <meta
                    name="keywords"
                    content="Tableau course, Tableau training in Mumbai, Tableau certification, business intelligence, data analytics, data visualization, dashboards, Power BI vs Tableau, LOD expressions, parameters, Tableau maps, data storytelling, analytics course, BI developer training, Tableau Desktop course, Tableau interview preparation, KPI dashboards, ETL and data prep"
                />

            </Head>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                {/* --- HERO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-4 md:col-span-7 lg:col-span-8">
                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-orange-100 rounded-full">
                            <span className="text-2xl">⏱️</span>
                            <span className="text-sm font-semibold text-brand">
                                Duration: {heroData.duration}
                            </span>
                        </div>

                        {/* Main Title */}
                        <div className="space-y-4">
                            <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                                Master {" "}
                                <span className="text-brand">Data Analytics &</span>{" "}
                                <span className="text-[#1d4ed8]">Visualization</span>{" "}
                                <span className="text-[#7e22ce]">with Tableau</span>
                            </h1>

                            {/* Mobile form (under H1) */}
                            <div className="mt-3 md:hidden min-h-[500px]">
                                <ApiCourseLeadForm source="Tableau Course Page - Hero Section (Mobile)" courseName={courseName} />
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                                {heroData.subtitle}
                            </p>
                        </div>



                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#ff8c00] bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-300"
                                aria-label="Enroll now in Tableau program"
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
                        {/* Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {heroData.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
                                >
                                    <span className="text-3xl">{highlight.icon}</span>
                                    <span className="text-xs sm:text-sm font-semibold text-center text-gray-700">
                                        {highlight.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* SEO-rich supporting copy */}
                        <div className="text-sm text-slate-700 max-w-2xl">
                            <p>
                                Learn industry-standard <strong>Tableau Desktop</strong> skills for
                                <strong> Business Intelligence (BI)</strong>, <strong>self-service analytics</strong>, and
                                <strong> interactive dashboards</strong>. Build portfolio projects with real datasets; master
                                <strong> data cleaning</strong>, <strong>data blending</strong>, <strong>joins</strong>,
                                <strong> calculations</strong>, <strong>parameters</strong>, <strong>LOD expressions</strong>,
                                <strong> mapping & geospatial analysis</strong>, <strong>table calculations</strong>, and
                                <strong> dashboard performance optimization</strong>.
                            </p>
                            <ul className="mt-3 list-disc pl-5 grid gap-1">
                                <li>Career-focused Tableau training in Mumbai with <em>job assistance</em></li>
                                <li>Hands-on BI dashboards for finance, marketing, operations, and sales analytics</li>
                                <li>Clear path to roles like <em>Tableau Developer</em>, <em>Data Analyst</em>, and <em>BI Analyst</em></li>
                            </ul>
                        </div>

                        {/* Stats moved BELOW buttons as requested */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {heroData.stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <div>
                                        <div className="font-bold text-lg text-gray-900">{stat.value}</div>
                                        <div className="text-xs text-gray-600">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hidden keyword cluster for SEO (non-intrusive) */}
                        <p className="sr-only">
                            Tableau course Mumbai, Tableau training, Tableau certification, Tableau Desktop training, business
                            intelligence dashboards, data visualization course, KPI dashboard design, table calculations, LOD
                            expressions, parameters, maps, geospatial analytics, joins, blending, data storytelling, BI developer
                            course, analytics training, Power BI vs Tableau, ETL data prep, interview questions, job assistance.
                        </p>
                    </div>

                    {/* Right spacer to balance grid (form moved to top) */}
                    <div className="md:col-span-5 lg:col-span-4 hidden md:block min-h-[600px]">
                        <ApiCourseLeadForm source="Tableau Course Page - Hero Section (Desktop)" courseName={courseName} />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Tableau Course Page - Hero Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerSessionOpen}
                onClose={() => setIsCareerSessionOpen(false)}
                source="Tableau Course Page - Hero Section - Career Session"
                courseName={courseName}
            />
        </section>
    );
}

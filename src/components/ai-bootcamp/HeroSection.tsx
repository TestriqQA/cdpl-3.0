"use client";

import {
    ArrowRight,
    ChevronRight,
    Clock,
    Home,
    Award,
    Users,
    TrendingUp,
    CloudDownload,
    ArrowDownNarrowWide,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ApiCourseLeadForm from "@/components/forms/ApiCourseLeadForm";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: null },
        { label: "AI Bootcamp", href: "/ai-bootcamp" },
    ];

    const scrollToCurriculum = () => {
        const element = document.getElementById("curriculum");
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 py-10">
            {/* Decorative background */}
            <div className="absolute overflow-hidden inset-0 pointer-events-none">
                <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-200 opacity-20 mix-blend-multiply blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-4">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                {c.href ? (
                                    <Link
                                        href={c.href}
                                        className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""
                                            }`}
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

                {/* Main grid */}
                <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
                    {/* Left: Content */}
                    <div className="flex flex-col md:col-span-8">
                        {/* Duration Badge */}
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                            <div className="w-fit inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
                                <Clock className="h-4 w-4 text-orange-500" />
                                <span className="text-sm font-semibold text-slate-700">
                                    Duration: <span className="text-orange-600">30 Hours</span>
                                </span>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                                #1 Mumbai&apos;s Premium Training Institute
                            </span>
                        </div>

                        {/* H1 */}
                        <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                            <span>Future-Proof Your Career with </span>
                            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                                AI-Powered
                            </span>
                            <span> </span>
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                        </h1>

                        {/* Mobile form */}
                        <div className="mt-6 block md:hidden">
                            <ApiCourseLeadForm source="AI Bootcamp - Hero Section (Mobile)" />
                        </div>

                        {/* Subheading */}
                        <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
                            Master the fusion of <strong>Digital Marketing</strong> and{" "}
                            <strong>Artificial Intelligence</strong> to drive unprecedented growth.
                            Launch your high-income career in a global market projected to reach{" "}
                            <strong>$671 Billion by 2028</strong>.
                        </p>

                        {/* Topics */}
                        <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
                            Topics: SEO, SEM, Social Media Marketing, Performance Marketing, Email & Automation,
                            AI tools for ads & content, funnel strategy, analytics, brand building, and growth hacking.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start items-center">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={scrollToCurriculum}
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                            {[
                                { label: "Hours Training", value: "30" },
                                { label: "Student Rating", value: "9.6/10" },
                                { label: "Job Assistance", value: "100%" },
                                { label: "High-Income Skill Rank", value: "#4" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-orange-300"
                                >
                                    <span className="text-2xl font-bold text-slate-900">{item.value}</span>
                                    <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-orange-500" />
                                <span>
                                    <strong className="text-slate-900">AAA Certified</strong> International Recognition
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-500" />
                                <span>
                                    <strong className="text-slate-900">14+ Years</strong> Industry Expertise
                                </span>
                            </div>
                            <div className="hidden h-6 w-px bg-slate-300 sm:block" />
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-emerald-500" />
                                <span>
                                    <strong className="text-slate-900">141,000+</strong> Jobs Worldwide
                                </span>
                            </div>
                        </div>

                        {/* Extra SEO copy */}
                        <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
                            This Digital Marketing with AI bootcamp is designed for students, freshers, and
                            working professionals who want to build a high-demand career in performance marketing,
                            social media, and AI-powered campaign optimization. Learn hands-on with real ad accounts,
                            dashboards, and growth campaigns tailored for Indian and international markets.
                        </div>
                    </div>

                    {/* Right: Desktop form (top-aligned) */}
                    <div className="hidden md:block md:col-span-4 lg:col-span-4 md:top-8 sticky">
                        <ApiCourseLeadForm source="AI Bootcamp - Hero Section (Desktop)" />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="AI Bootcamp - Hero Section - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}
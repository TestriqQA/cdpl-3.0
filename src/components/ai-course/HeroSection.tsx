"use client";

import { useState } from "react";
import Link from "next/link";
import AiCourseLeadForm from "../forms/AiCourseLeadForm";
import { ChevronRight, Home, ArrowRight, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Comprehensive Data Science and AI - Master Program";

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Comprehensive DS & AI" },
    ];

    return (
        <section id="hero" aria-labelledby="Data Science & AI - hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(900px_260px_at_18%_0%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(1000px_300px_at_92%_0%,rgba(79,70,229,0.10),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-12%,black,transparent)]" />
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
                    {/* Left column: Copy */}
                    <div className="md:col-span-7 lg:col-span-8">
                        {/* Micro-badges (distinct colors, no repeats) */}
                        <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700 border border-indigo-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">255 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
                        </div>

                        <h1
                            id="dsai-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            <span className="text-DS">Masters in AI and ML</span> –{" "}
                            Data Science Master Program Mumbai with 100% Placement
                        </h1>

                        {/* Mobile form directly under headline (FORM 1) */}
                        <div className="mt-5 block md:hidden">
                            <AiCourseLeadForm variant="elevated" source="Comprehensive Data Science & AI - Hero Section (Mobile)" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Pursuing a <strong>masters in ai and ml</strong> in India? Our <strong>ai master program mumbai</strong> makes you industry-ready with <strong>Python</strong>, <strong>Statistics</strong>,{" "}
                            <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, <strong>NLP</strong>,{" "}
                            <strong>Time Series</strong>, <strong>Big Data (Spark)</strong>, and <strong>MLOps</strong>. Build portfolio
                            projects and earn a <strong>QR-verified certificate</strong>. Ideal for those seeking <strong>ms in artificial intelligence in india</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            This <strong>post graduate program in ai and machine learning</strong> covers Pandas/NumPy, EDA & visualization, model evaluation, feature engineering, pipelines, basic
                            Transformers, cloud deployments, and CI/CD best practices. Perfect for <strong>masters in data science and artificial intelligence in india</strong>.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                                aria-label="Enroll now in Comprehensive Data Science & AI master program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                                aria-label="Download the full Data Science & AI syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <Link
                                href="#curriculum"
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="View full DS & AI curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </div>

                        {/* Quick highlights (distinct accent bullets; no repeats) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                                80% practical labs with mentor feedback for <strong>masters in ai in india</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                                ML & DL projects with reproducible pipelines
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                                Model evaluation, tracking for <strong>data science master program mumbai</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                CI/CD & basic MLOps: containers and deployment
                            </li>
                        </ul>

                        {/* Trust strip + contact */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                            <span className="text-yellow-600">★★★★★</span>
                            <span>#1 Mumbai’s Premium Training Institute</span>
                        </div>
                    </div>

                    {/* Right column: Desktop form */}
                    <div className="relative lg:col-span-4 hidden md:block">
                        <AiCourseLeadForm variant="elevated" className="hidden lg:block" source="Comprehensive Data Science & AI - Hero Section" />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Comprehensive Data Science & AI - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Comprehensive Data Science & AI - Hero Section - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

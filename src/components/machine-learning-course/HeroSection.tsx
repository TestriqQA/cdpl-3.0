// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm"

"use client";

import Link from "next/link";
import LeadForm from "@/components/forms/MachineLearningCourseLeadForm";
import { ChevronRight, Home, ArrowRight, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false });

export default function HeroSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: 'Data Science & ML', href: '/courses/ds-ml-courses' },
        { label: "ML & DS with Python" },
    ];

    return (
        <section id="hero" aria-labelledby="ml-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_200px_at_20%_0%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(800px_240px_at_90%_0%,rgba(37,99,235,0.08),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
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
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700 border border-indigo-200">
                                Live Online + Classroom
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">95 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
                        </div>

                        <h1
                            id="ml-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-DS">Machine Learning</span> & <span className="text-DS">Data Science</span> with <span className="text-DS">Python</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <LeadForm variant="elevated" source="Machine Learning Course Page - Hero Section (Mobile)" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Become industry-ready with <strong>Python</strong>, <strong>NumPy</strong>, <strong>Pandas</strong>,{" "}
                            <strong>Data Visualization</strong>, <strong>scikit-learn</strong>, model building, API integration, and cloud
                            deployments. Build portfolio projects and earn a{" "}
                            <strong>QR-verified certificate</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Curriculum includes EDA best practices, train/validation workflows, metrics, feature engineering, lightweight
                            MLOps (environments, reproducibility), and deployment patterns.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                                aria-label="Enroll now in ML & DS course"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <Link
                                href="#curriculum"
                                title="View the core modules and curriculum of the ML & DS program"
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </div>

                        {/* Quick highlights (distinct accent colors) */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                                80% practical labs with mentor feedback
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                                Supervised/unsupervised ML with scikit-learn
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                                Portfolio projects with docs & GitHub
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                Deployments on cloud + basic MLOps
                            </li>
                        </ul>

                        {/* Desktop feature tiles under copy (no repeated colors) */}
                        <div className="mt-6 hidden lg:grid lg:grid-cols-4 gap-3">
                            {[
                                { k: "Hands-On", c: "border-emerald-200 bg-emerald-50 text-emerald-900" },
                                { k: "Expert Faculty", c: "border-indigo-200 bg-indigo-50 text-indigo-900" },
                                { k: "Verified Cert", c: "border-amber-200 bg-amber-50 text-amber-900" },
                                { k: "Placement Help", c: "border-rose-200 bg-rose-50 text-rose-900" },
                            ].map((f) => (
                                <div
                                    key={f.k}
                                    className={[
                                        "rounded-xl border p-4 text-center text-sm font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
                                        f.c,
                                    ].join(" ")}
                                >
                                    {f.k}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: Desktop form */}
                    <div className="relative lg:col-span-4 hidden md:block">
                        <LeadForm variant="elevated" className="hidden lg:block" source="Machine Learning Course Page - Hero Section" />
                    </div>
                </div>

                {/* Trust strip under the grid */}
                <div className="mt-8 text-center">
                    <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                        <span className="text-yellow-600">★★★★★</span>
                        <span>Mumbai’s Premium Training Institute</span>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                courseName="Machine Learning and Data Science with Python"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Machine Learning and Data Science with Python"
                source="Machine Learning and Data Science Course Page - Hero Section - Machine Learning - Download Syllabus"
            />

        </section>
    );
}

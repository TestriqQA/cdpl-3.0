"use client";

import { ArrowRight, ChevronRight, Clock, Home, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const highlights = [
  { icon: "⏱️", label: "155 Hours of Structured Training" },
  { icon: "🎖️", label: "8 Industry-Recognized Certifications" },
  { icon: "📂", label: "10+ Real-World BI & Big Data Projects" },
  { icon: "💼", label: "Guaranteed Job Assistance & Placement Support" },
];

export default function HeroSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Business Intelligence", href: null }, // non-clickable middle breadcrumb
    { label: "Data Analytics with BI & Big Data Engineering", href: "/masters-in-data-engineering" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      {/* Decorative background */}
      <div className="absolute overflow-hidden">
        <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-teal-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-sky-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={`hover:text-orange-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
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
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
              <Clock className="h-4 w-4 text-teal-500" />
              <span className="text-sm font-semibold text-slate-700">
                Duration: <span className="text-teal-600">155 Hours · 5.5 Months</span>
              </span>
            </div>

            {/* H1 (same style as reference, updated text) */}
            <h1 className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              <span>Master </span>
              <span className="bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Data Analytics & Business Intelligence
              </span>
              <span> with </span>
              <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
                Big Data Engineering
              </span>
              <span> Master Program</span>
            </h1>

            {/* Mobile form (under H1) */}
            <div className="mt-3 md:hidden">
              <ApiCourseLeadForm source="Data Engineering Course Page - Hero Section (Mobile)" />
            </div>

            {/* Subheading */}
            <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
              Master the complete data lifecycle from enterprise BI reporting and dashboards
              to designing robust Big Data pipelines, ETL workflows, and cloud-based data
              platforms. Build dual expertise in analytics and engineering to future-proof your
              career.
            </p>

            {/* SEO keywords line */}
            <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
              Topics: Power BI, Tableau, SQL, Python, data warehousing, ETL, Hadoop, Spark,
              data lakes, cloud data engineering, data modeling, reporting automation, and
              real-world BI & Big Data projects.
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

              <Link
                href="#curriculum"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                View Curriculum
                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </div>

            {/* Highlights (using your program stats) */}
            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-colors hover:border-teal-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-center text-xs font-semibold text-slate-700 md:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
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
                  <strong className="text-slate-900">500+</strong> Successful Learners
                </span>
              </div>
              <div className="hidden h-6 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>
                  <strong className="text-slate-900">14+ Years</strong> Industry Experience
                </span>
              </div>
            </div>

            {/* Extra SEO copy */}
            <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
              This BI and Big Data engineering master program is designed for students and
              working professionals who want to transition into high-growth roles such as Data
              Analyst, BI Developer, or Data Engineer. Build a job-ready portfolio using
              end-to-end projects that cover data ingestion, modeling, visualization, and
              performance optimization for real business use cases.
            </div>
          </div>

          {/* Right: Desktop form (top-aligned & sticky) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8 sticky">
            <ApiCourseLeadForm source="Data Engineering Course Page - Hero Section (Desktop)" />
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - Hero Section - Enroll Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Engineering Course Page - Hero Section - View Curriculum"
        courseName={courseName}
      />
    </section>
  );
}
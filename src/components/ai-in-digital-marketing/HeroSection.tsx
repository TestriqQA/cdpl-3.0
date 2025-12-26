"use client";

import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { ArrowRight, ChevronRight, Clock, Home, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ApiCourseLeadForm from "@/components/forms/ApiCourseLeadForm";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function HeroSection() {
  const { basic } = courseData;
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "AI in Digital Marketing" },
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-indigo-50 py-10">
      {/* Decorative background (same style as reference) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob animation-delay-0 absolute right-10 top-20 h-72 w-72 rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute left-10 top-40 h-72 w-72 rounded-full bg-indigo-200 opacity-20 mix-blend-multiply blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={`hover:text-orange-700 ${isLast
                        ? "font-semibold text-slate-900"
                        : ""
                        }`}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      className={`hover:text-orange-700 ${isLast
                        ? "font-semibold text-slate-900"
                        : ""
                        }`}
                    >
                      {c.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Main grid: left content, right sticky form */}
        <div className="grid min-h-[70vh] grid-cols-1 gap-10 sm:py-2 md:grid-cols-12 md:items-start">
          {/* Left: Content */}
          <div className="flex flex-col md:col-span-8">
            {/* Duration Badge (using basic.duration) */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-slate-700">
                Duration:{" "}
                <span className="text-orange-600">{basic.duration}</span>
              </span>
            </div>

            {/* H1 styled same as reference */}
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:mt-0 md:text-4xl xl:text-5xl">
              <span>Master </span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>
              <span> & </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            {/* Mobile form under H1 */}
            <div className="mt-6 block md:hidden">
              <ApiCourseLeadForm source="AI Digital Marketing - Hero Section (Mobile)" />
            </div>

            {/* Subheading – using basic.subtitle */}
            <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600 md:text-left md:text-lg">
              {basic.subtitle}
            </p>

            {/* Description – using basic.description */}
            <p className="mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-left">
              {basic.description}
            </p>

            {/* Key SEO topics line */}
            <p className="mt-3 max-w-3xl text-center text-xs text-slate-600 md:text-left">
              Topics: AI content creation, performance marketing with AI, Meta & Google Ads,
              AI-powered SEO, marketing automation, funnels, lead generation, marketing
              analytics, chatbot automation, email workflows, and more.
            </p>

            {/* CTAs (Standardized) */}
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

            {/* Highlights (similar layout to reference) */}
            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {[
                { icon: "📊", label: "Real Projects" },
                { icon: "🤖", label: "AI Tools Training" },
                { icon: "🎓", label: "Industry Certification" },
                { icon: "💼", label: "Job & Business Ready" },
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

            {/* Trust Indicators using your stats */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 text-sm text-slate-600 sm:flex-row md:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>
                  <strong className="text-slate-900">9.6/10</strong> Program Rating
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
                  <strong className="text-slate-900">14+ Years</strong> Expertise
                </span>
              </div>
            </div>

            {/* Extra SEO copy */}
            <div className="mt-8 max-w-3xl text-center text-xs leading-relaxed text-slate-500 md:text-left">
              This AI-powered digital marketing course is built for students, entrepreneurs,
              freelancers, and working professionals who want to dominate social media, ads,
              and organic marketing using modern AI tools. Learn how to plan campaigns, create
              high-converting content, optimize ads, and automate your marketing to grow
              revenue faster.
            </div>
          </div>

          {/* Right: Desktop form (top-aligned) */}
          <div className="hidden md:block md:col-span-4 lg:col-span-4 md:top-8 sticky">
            <ApiCourseLeadForm source="AI Digital Marketing - Hero Section (Desktop)" />
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Hero Section - Enroll Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="AI Digital Marketing - Hero Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

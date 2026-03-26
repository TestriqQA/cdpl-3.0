// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
"use client";

import Link from "next/link";
import { ChevronRight, Home, CheckCircle2, Star, Users, Globe2, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import ApiCourseLeadForm from "@/components/forms/ApiCourseLeadForm";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function HeroSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Prompt Engineering Course";
  const source = "Prompt Engineering Course Page - Hero Section";

  const handleScrollToCurriculum = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const curriculumSection = document.getElementById("curriculum");
    if (curriculumSection) {
      curriculumSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: 'Courses', href: '/courses' },
    { label: 'Artificial Intelligence', href: '/courses/artificial-intelligence-courses' },
    { label: "Prompt Engineering with Generative AI", href: "/prompt-engineering-course" },
  ];

  return (
    <section id="hero" aria-labelledby="pe-hero" className="relative overflow-hidden bg-white">
      {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:radial-gradient(700px_220px_at_18%_0%,rgba(22,163,74,0.10),transparent_60%),radial-gradient(800px_260px_at_92%_0%,rgba(34,197,94,0.10),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-12%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className={`hover:text-green-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
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

        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Left column: Copy */}
          <div className="md:col-span-7 lg:col-span-8">
            {/* Micro-badges (distinct colors, no repeats) */}
            <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-green-800 border border-green-200">Live Online + Classroom</span>
              <span className="rounded-full bg-sky-50 px-2 py-0.5 text-sky-800 border border-sky-200">20 Hours</span>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-violet-800 border border-violet-200">Placement Support</span>
            </div>

            <h1
              id="pe-hero"
              className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Master Program in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Prompt Engineering</span> with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Generative AI</span>
            </h1>

            {/* Mobile form directly under headline */}
            <div className="mt-8 block md:hidden">
              <ApiCourseLeadForm source={source} courseName={courseName} />
            </div>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Learn <strong>prompt patterns</strong> (rewrite, critique, tree-of-thought), build <strong>RAG pipelines</strong>, leverage{" "}
              <strong>function/tool calling & agents</strong>, add <strong>guardrails & evaluation</strong>, and deploy real apps. Earn a{" "}
              <strong>QR-verified certificate</strong> and a recruiter-proof portfolio.
            </p>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Includes prompt optimization, embeddings, vector DBs, safety best practices, latency/cost tuning, and CI/CD for LLM apps.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-800 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-green-100"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-white border-2 border-slate-200 px-8 py-3.5 text-base font-semibold text-slate-700 hover:border-green-200 hover:bg-green-50/50 transition-all active:scale-[0.98]"
              >
                Download Syllabus
              </button>
              <Link
                href="#curriculum"
                onClick={handleScrollToCurriculum}
                className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-white border-2 border-slate-200 px-8 py-3.5 text-base font-semibold text-slate-700 hover:border-green-200 hover:bg-green-50/50 transition-all active:scale-[0.98]"
              >
                View Curriculum
              </Link>
            </div>

            {/* Quick highlights (distinct accent colors, no repeats) */}
            <ul className="mt-8 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
                Prompt patterns, structure & guardrails (safety-first design)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" />
                RAG with embeddings & vector DBs (Faiss/PGVector)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                Tool/function calling, agents & workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-600" />
                Eval & monitoring • latency/cost optimization • CI/CD
              </li>
            </ul>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>User-friendly No-Code AI tools</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-600" />
                <span>200+ Learners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-purple-600" />
                <span>Online/Offline Classes</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-medium text-slate-900">4.8/5</span>
                <span className="text-slate-500">(120+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Right column: Desktop form & visual */}
          <aside className="md:col-span-5 lg:col-span-4 hidden md:block relative z-10">
            <div className="sticky top-24">
              <ApiCourseLeadForm source={source} courseName={courseName} />
            </div>
          </aside>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source={`${source} - Enroll Now`}
        courseName={courseName}
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Prompt Engineering Course Page - Hero Section - Prompt Engineering - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

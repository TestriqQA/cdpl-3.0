'use client';

import {
  Bot,
  BarChart3,
  Megaphone,
  Award,
  Users,
  ArrowRight,
  Star,
  Globe2,
  Home,
  ChevronRight,
  CheckCircle2,
  CloudDownload,
  ArrowDownNarrowWide
} from 'lucide-react';
import IconCard from '@/components/ui/IconCard';
import ApiCourseLeadForm from '../forms/ApiCourseLeadForm';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const EnrollModal = dynamic(() => import('../EnrollModal'), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import('../SyllabusDownloadModal'), { ssr: false });

/** -----------------------------
 * Feature tiles (distinct colors, no repeats)
 * ----------------------------- */
const features = [
  {
    icon: <Megaphone />,
    title: 'Real Campaigns',
    description: 'Run ads & SEO on live sandboxes',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    border: 'border-amber-200',
  },
  {
    icon: <Bot />,
    title: 'AI-Driven Workflows',
    description: 'ChatGPT, GA4 Insights, Bard/Gemini',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  {
    icon: <BarChart3 />,
    title: 'Analytics First',
    description: 'GA4, Tag Manager, Looker Studio',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-700',
    border: 'border-sky-200',
  },
  {
    icon: <Award />,
    title: 'Global Certificate',
    description: 'QR-verified course completion',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-700',
    border: 'border-violet-200',
  },
];

export default function HeroSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Digital Marketing & Analytics Master Program";


  const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Digital Marketing', href: '/courses/digital-marketing-courses' },
    { label: 'Digital Marketing Course', href: null },
    { label: 'Digital Marketing Course in Mumbai', href: '/digital-marketing-course' },
    ];

  return (
    <section id="hero" aria-labelledby="dm-hero" className="relative overflow-hidden">
      {/* Light, subtle frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
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
                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : ''}`}
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
          {/* Left column: copy */}
          <div
            className="md:col-span-7 lg:col-span-8"
          >
            {/* badges */}
            <div className="hidden mb-5 lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                4.9/5 Rating (Top Rated)
              </span>
              <span className="h-3 w-px bg-slate-300" />
              <span className="inline-flex items-center gap-1">
                <Users className="h-4 w-4 text-rose-600" />
                5,000+ Careers Launched
              </span>
              <span className="h-3 w-px bg-slate-300" />
              <span className="inline-flex items-center gap-1">
                <Globe2 className="h-4 w-4 text-emerald-600" />
                #1 Training in Mumbai & Thane
              </span>
            </div>

            {/* H1 */}
            <h1
              id="dm-hero"
              className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Best <span className="text-green-700">Digital Marketing Course</span> in Mumbai with{' '}
              <span className="text-green-700">100% Placement</span>
            </h1>

            {/* Mobile form just below H1 */}
            <div className="mt-6 block md:hidden min-h-[500px]">
              <ApiCourseLeadForm source="Digital Marketing Course Page - Hero Section (Mobile)" />
            </div>

            {/* Supporting copy */}
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Master <strong>AI-Driven SEO</strong>, <strong>Performance Marketing (Google Ads)</strong>, <strong>SMM</strong>, and <strong>GA4 Analytics</strong>. Launch your career with the most practical Digital Marketing training in Mumbai designed for 2025-2026 job market growth.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-slate-600">
              Get hands-on experience with real budgets, live audits, and 15+ industry tools. 100% Job Assistance for freshers, professionals, and entrepreneurs seeking digital growth.
            </p>

            {/* CTAs */}
            {/* CTAs */}
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start items-center">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-brand bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Enroll & Get Placement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-brand bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                Download Course Modules
                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </button>

              <Link
                href="#curriculum"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Course Syllabus
                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Link>
            </div>

            {/* Quick highlights */}
            <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                Guaranteed Placement Assistance & Interview Prep
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                Hands-on Training with GA4 & Meta Ads Sandbox
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                Live Case Studies & AI-Driven Marketing Workflows
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                Industry-Recognized Certification & Global Credibility
              </li>
            </ul>

            {/* Desktop feature grid under the form */}
            <div className="mt-6 grid md:hidden lg:grid lg:grid-cols-4 gap-3">
              {features.map((f, i) => (
                <IconCard
                  key={i}
                  {...f}
                  className="hover:shadow-md p-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                />
              ))}
            </div>
          </div>

          {/* Right column: Desktop Form (Sticky) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8 sticky min-h-[600px]">
            <ApiCourseLeadForm source="Digital Marketing Course Page - Hero Section (Desktop)" />
          </div>
        </div>

      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Digital Marketing Course Page - Hero Section - Enroll Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Digital Marketing Course Page - Hero Section - Digital Marketing - Download Syllabus"
        courseName={courseName}
      />

    </section>
  );
}

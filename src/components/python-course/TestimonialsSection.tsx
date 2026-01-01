"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const ReviewsMarquee = dynamic(() => import("../sections/ReviewMarque"), { ssr: false, loading: () => <SectionLoader label="Loading reviews marquee..." /> });
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false, loading: () => <SectionLoader label="Loading enroll modal..." /> });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false, loading: () => <SectionLoader label="Loading syllabus download modal..." /> });

const SectionLoader = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">{label}</span>
    </div>
  );
};

// ---------- Types ----------
type Testimonial = {
  name: string;
  text: string;
  role?: string;
  rating?: number;
};

type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

type Props = {
  /** Page or product title for SEO copy (e.g., "Python Programming") */
  title?: string;
  /** Testimonials to render */
  items?: Testimonial[];
  /** Optional CTA buttons */
  ctas?: CTA[];
  /** Optional id for anchor link */
  id?: string;
};

// ---------- Default Content (Python Programming page) ----------
const DEFAULT_TITLE = "Python Programming";

// ---------- Component ----------
export default function TestimonialsSection({
  id = "testimonials",
  title = DEFAULT_TITLE,
}: Props) {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="relative py-10">
      {/* Subtle grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-10">
        {/* Header */}
        <header className="text-center">
          <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title} <span className="text-emerald-700">Course Reviews</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Read verified <strong>student testimonials</strong> from our industry-aligned <strong>{title}</strong> program.
            Projects cover <strong>NumPy</strong>, <strong>Pandas</strong>, <strong>APIs (FastAPI)</strong>, <strong>testing</strong>, and
            <strong> deployment</strong> - everything you need to become <strong>job-ready</strong>.
          </p>
          <div className="mt-5 mb-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">4.9★ Avg Rating</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Placement Support</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Real Projects</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Beginner → Advanced</span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Enroll now
          </button>

          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="rounded-xl bg-white cursor-pointer border-2 border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Download syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        courseName="Python Programming"
        source="Python Course Page - Testimonials Section - Enroll Now"
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        courseName="Python Programming"
        source="Python Course Page - Testimonials Section - Syllabus Download"
      />
    </section>
  );
}



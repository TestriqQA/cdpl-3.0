// components/sections/JavaTestimonialsSection.tsx
// Client component (no client-side JS) – sleek, simple, and unique

'use client';


const ReviewsMarquee = dynamic(() => import("../sections/ReviewMarque"), { ssr: false, loading: () => <div>Loading...</div> });
import { useState } from "react";
import dynamic from "next/dynamic";
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false, loading: () => <div>Loading...</div> });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false, loading: () => <div>Loading...</div> });

// ---------- Types ----------
type Testimonial = {
  name: string;
  text: string;
  role?: string;
  rating?: number;
};


type Props = {
  /** Page or product title for SEO copy (e.g., "Java Programming") */
  title?: string;
  /** Testimonials to render */
  items?: Testimonial[];
  /** Optional id for anchor link */
  id?: string;
};

// ---------- Default Content (Java Programming page) ----------
const DEFAULT_TITLE = "Java Programming";

// ---------- Component ----------
export default function TestimonialsSection({
  id = "testimonials",
  title = DEFAULT_TITLE,
}: Props) {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="relative py-10">
      {/* Subtle grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-10">
        {/* Header */}
        <header className="text-center">
          <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {title} <span className="text-indigo-700">Course Reviews</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Read verified <strong>student testimonials</strong> from our industry-aligned <strong>{title}</strong> program.
            We cover <strong>OOP</strong>, <strong>Collections</strong>, <strong>JVM & GC</strong>, <strong>Spring Boot</strong>,
            <strong> Hibernate/JPA</strong>, <strong>microservices</strong>, <strong>testing</strong>, and <strong>deployment</strong>.
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
            onClick={() => setIsEnrollModalOpen(true)}
            className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Enroll now
          </button>

          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer rounded-xl border border-slate-300 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Download Syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Java Programming"
        source="Java Course Page - Testimonials Section - Enroll Now"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Java Programming"
        source="Java Course Page - Testimonials Section - Java - Download Syllabus"
      />

    </section>
  );
}

"use client";


import ReviewsMarquee from "../sections/ReviewMarque";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import CareerSessionModal from "../CareerSessionModal";

export default function TestimonialsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Digital Marketing & Analytics Master Program";

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-10"
    >
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-10">
        <header className="text-center">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What Our <span className="text-green-700">Students Say</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Real experiences from learners who leveled up their careers with <strong>job-ready marketing skills</strong>,
            analytics, and <strong>AI-driven execution</strong>.
          </p>
          {/* micro badges */}
          <div className="mt-5 mb-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">4.9★ Avg Rating</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Placement Support</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">Project-Based Learning</span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer rounded-xl border border-orange-500 bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Join the next cohort
          </button>
          <button
            onClick={() => setIsCareerOpen(true)}
            className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Book a free demo
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Digital Marketing Course Page - Testimonials Section - Join Cohort"
        courseName={courseName}
      />
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Digital Marketing Course Page - Testimonials Section - Book Demo"
        courseName={courseName}
      />
    </section>
  );
}

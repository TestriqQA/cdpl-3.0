// components/sections/TestimonialsSection.tsx

import { Quote, ShieldCheck, Sparkles } from "lucide-react";
import ReviewsMarquee from "../sections/ReviewMarque";



export default function TestimonialsSection() {


  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* sleek accent line (subtle gradient allowed) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Student Success <span className="text-DS">Stories</span> &amp; <span className="text-DS">Reviews</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Real feedback from graduates who advanced their careers in{" "}
            <strong>Deep Learning</strong>, <strong>NLP</strong>, and{" "}
            <strong>Generative AI</strong>. Verified, job-focused, and packed with{" "}
            <strong>Python + Transformer</strong> projects recruiters recognize.
          </p>

          {/* trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Quote className="w-4 h-4 text-rose-600" />
              Industry-Relevant Curriculum
            </span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* SEO helper text (keyword-rich, subtle) */}
        <p className="sr-only">
          Read independent reviews and ratings for our Python-based Deep Learning, NLP,
          and Generative AI training program. Alumni highlight real-world projects,
          interview preparation, and production deployment skills.
        </p>
      </div>

    </section>
  );
}

"use client";

import { useState } from "react";
import { ShieldCheck, Sparkles, Trophy, Rocket } from "lucide-react";
import ReviewsMarquee from "../sections/ReviewMarque";
import EnrollModal from "../EnrollModal";

export default function TestimonialsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* ... (keep background) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep header) */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            What Our <span className="text-DS">Students Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Authentic reviews from our{" "}
            <strong>Advanced Data Science & Machine Learning</strong> cohort—highlighting{" "}
            <strong>MLOps</strong>, <strong>model deployment</strong>,{" "}
            <strong>drift monitoring</strong>, and <strong>job outcomes</strong>.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-purple-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Trophy className="w-4 h-4 text-amber-600" />
              Portfolio & Offers
            </span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Ready to join them?</p>
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer px-8 py-3 text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
          >
            Apply Now
            <Rocket className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Screen-reader SEO hint */}
        <p className="sr-only">
          Read independent reviews of our Data Science and ML masterclass. Alumni highlight MLOps,
          deployment, monitoring, and job placements.
        </p>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - Testimonials Section - Apply Now"
        courseName={courseName}
      />
    </section>
  );
}


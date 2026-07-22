// components/sections/TestimonialsSection.tsx

import { Quote, ShieldCheck, Sparkles } from "lucide-react";
import ReviewsMarquee from "../sections/ReviewMarque";


export default function TestimonialsSection() {


  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="testimonials-heading"
    >
      {/* Sleek top accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            What Our <span className="text-DS">Students Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Real feedback from graduates of our{" "}
            <strong>Prompt Engineering with Gen&nbsp;AI</strong> program-covering{" "}
            <strong>prompt frameworks</strong>, <strong>evaluation</strong>,{" "}
            <strong>guardrails</strong>, and <strong>automation</strong>. Portfolio-first and
            job-focused outcomes.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              4.9/5 Average Rating
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Verified Alumni
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
              <Quote className="w-4 h-4 text-rose-600" />
              Industry-Relevant Projects
            </span>
          </div>
        </header>

        <ReviewsMarquee />

        {/* Screen-reader SEO hint */}
        <p className="sr-only">
          Read independent reviews of our Prompt Engineering course. Alumni highlight frameworks,
          evaluation methods, guardrails, automation, and job placements.
        </p>
      </div>

    </section>
  );
}



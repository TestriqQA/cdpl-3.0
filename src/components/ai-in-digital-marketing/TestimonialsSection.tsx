"use client";

import ReviewsMarquee from "../sections/ReviewMarque";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import CareerSessionModal from "@/components/CareerSessionModal";

interface TestimonialsSectionProps {
  initialReviews?: any[];
  initialTotal?: string;
  initialRating?: string;
}

export default function TestimonialsSection({ initialReviews, initialTotal, initialRating }: TestimonialsSectionProps) {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-brand">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real students who have transformed their
            businesses
          </p>
        </div>

        <ReviewsMarquee initialReviews={initialReviews} initialTotal={initialTotal} initialRating={initialRating} />

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-indigo-100 rounded-2xl border-2 border-orange-300">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Ready to become our next success story?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3
    text-sm sm:text-base md:text-lg
    bg-brand hover:bg-brand
    text-white font-bold
    rounded-xl
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    cursor-pointer
  "
              >
                Start Your Success Journey
              </button>
              <button
                onClick={() => setIsCareerOpen(true)}
                className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3
    text-sm sm:text-base md:text-lg
    bg-white hover:bg-slate-50
    text-slate-900 font-bold
    rounded-xl border-2 border-slate-300
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    cursor-pointer
  "
              >
                Book Free Demo
              </button>
            </div>

          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Testimonials Section - Start Journey"
        courseName={courseName}
      />
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="AI Digital Marketing - Testimonials Section - Book Demo"
        courseName={courseName}
      />
    </section>
  );
}

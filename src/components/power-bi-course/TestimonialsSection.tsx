"use client";
// components/powerbi/TestimonialsSection.tsx
import React, { useState } from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';
import EnrollModal from "../EnrollModal";


const TestimonialsSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Student Success Stories
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Graduates Say About the Program
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Join a community of successful data professionals who have transformed their careers with our expert training.
          </p>
        </div>

        <ReviewsMarquee />

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="w-full sm:w-auto bg-brand hover:bg-brand text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Join Our Success Story
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - Testimonials Section - Join Success Story"
        courseName={courseName}
      />
    </section>
  );
};

export default TestimonialsSection;

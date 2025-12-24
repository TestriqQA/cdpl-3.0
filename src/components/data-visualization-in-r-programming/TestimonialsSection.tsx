"use client";

// src/components/TestimonialsSection.tsx
import React, { useState } from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';
import { CloudDownload } from 'lucide-react';
import SyllabusDownloadModal from '../SyllabusDownloadModal';


export const TestimonialsSection: React.FC = () => {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
            Hear From Our Successful Graduates
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            Our students are achieving their career goals in Data Science and Machine Learning.
          </p>
        </div>

        <ReviewsMarquee />

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-orange-400 hover:text-orange-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <CloudDownload className="mr-2 h-5 w-5" />
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Testimonials Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

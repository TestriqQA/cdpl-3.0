"use client";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";


export default function CareerRoadmapSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";
  return (
    <section
      id="career-roadmap"
      aria-labelledby="career-roadmap-heading"
      className="relative overflow-hidden py-10 bg-white"
    >
      {/* ... (keep background) */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Your Roadmap to Becoming a Data Scientist in 4 Steps
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Our <strong>data science full course</strong> follows a proven 4-stage journey to transform you from a beginner to a job-ready professional in Mumbai.
          </p>
        </header>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Get personalized Data Science roadmap guidance"
          >
            Get Personalized Roadmap
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere. <span className="font-semibold text-slate-800">Your journey to a Data Science career starts here.</span>
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Data Science Course Page - Career Roadmap - Get Personalized Roadmap"
        courseName={courseName}
      />
    </section>
  );
}


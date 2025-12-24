"use client";
import type React from "react";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

export default function ToolsSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
      {/* ... (keep background) */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep header and grid) */}

        {/* Reassurance strip */}
        <aside className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-700 max-w-2xl text-left">
            Practice with <strong>real datasets</strong>, version control, reviews, and deploy checklists -
            the exact toolchain hiring managers expect.
          </p>
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-200 whitespace-nowrap"
          >
            Book a Free Demo
          </button>
        </aside>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Data Science Course Page - Tools Section - Book Free Demo"
        courseName={courseName}
      />
    </section>
  );
}

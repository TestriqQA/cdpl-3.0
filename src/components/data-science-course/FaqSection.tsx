"use client";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

import { DATA_SCIENCE_FAQS } from "@/data/dataScienceData";

export default function FaqSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-10 bg-white"
    >
      {/* ... (keep background elements) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(124,58,237,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Frequently Asked Questions About the Data Science Course
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
            Everything you need to know about our{" "}
            <strong>Advanced Data Science & Machine Learning Masterclass</strong>—admissions,
            curriculum, schedule, portfolio, and placement support.
          </p>
        </header>

        {/* Accordions (native, accessible, responsive) */}
        <div className="mx-auto max-w-3xl space-y-3">
          {DATA_SCIENCE_FAQS.map((f, i) => {
            // Distinct accent per item (no repetition)
            const accents = [
              { ring: "focus:ring-indigo-300", border: "border-indigo-200" },
              { ring: "focus:ring-emerald-300", border: "border-emerald-200" },
              { ring: "focus:ring-amber-300", border: "border-amber-200" },
              { ring: "focus:ring-sky-300", border: "border-sky-200" },
              { ring: "focus:ring-rose-300", border: "border-rose-200" },
              { ring: "focus:ring-violet-300", border: "border-violet-200" },
            ][i % 6];

            return (
              <details
                key={f.question}
                className={[
                  "group rounded-xl border bg-white p-4 sm:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] open:shadow-md transition",
                  accents.border,
                ].join(" ")}
              >
                <summary
                  className={[
                    "flex cursor-pointer list-none items-center justify-between gap-3 text-left select-none",
                    "font-semibold text-gray-900 focus:outline-none rounded-lg",
                    accents.ring,
                  ].join(" ")}
                >
                  <span className="text-base sm:text-lg">{f.question}</span>
                  <span className="shrink-0 text-gray-500 transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-gray-700">{f.answer}</p>
              </details>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer px-8 py-3 text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
            >
              Contact Us
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer px-8 py-3 text-base font-semibold rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
            >
              Download Detailed Syllabus (PDF)
            </button>
          </div>
        </div>

        {/* SEO helper for screen readers */}
        <p className="sr-only">
          Find answers about prerequisites, duration, job assistance, tools covered, portfolio
          outcomes, and flexible schedules for the Data Science & Machine Learning program.
        </p>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - FAQ Section - Contact Us"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - FAQ Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

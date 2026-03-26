"use client";
import { useState } from "react";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";
import EnrollModal from "@/components/EnrollModal";

import { MACHINE_LEARNING_FAQS } from "@/data/machineLearningData";

const ACCENT_STYLES = [
  { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", dot: "bg-sky-500" },
  { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", dot: "bg-emerald-500" },
  { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", dot: "bg-amber-500" },
  { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", dot: "bg-rose-500" },
  { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300", dot: "bg-indigo-500" },
];

export default function FaqSection() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const keywords =
    "machine learning course faq, data science training questions, placement assistance, ML certificate, Python beginner friendly";

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden py-10 bg-white">
      {/* Subtle futuristic backdrop (thin grid + mask; not a heavy gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            <span className="text-DS">Frequently Asked Questions</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">
            Everything you need to know about our mentor-led Machine Learning & Data Science program.
          </p>
          {/* SEO assist */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Accordion list */}
        <ul
          role="list"
          aria-label="Program FAQs"
          className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3"
        >
          {MACHINE_LEARNING_FAQS.map((f, i) => {
            const accent = ACCENT_STYLES[i % ACCENT_STYLES.length];
            return (
              <li key={f.question} className="min-w-0">
                <details
                  className={[
                    "group rounded-2xl border p-4 sm:p-5 shadow-sm transition-all duration-200 backdrop-blur",
                    "open:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5",
                    accent.bg,
                    accent.border,
                    accent.ring,
                  ].join(" ")}
                >
                  <summary
                    className={[
                      "flex cursor-pointer list-none items-center gap-3 text-left select-none",
                      accent.text,
                    ].join(" ")}
                  >
                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${accent.dot}`} aria-hidden />
                    <span className="flex-1 text-sm sm:text-base font-bold">
                      {f.question}
                    </span>
                    {/* caret icon (pure CSS rotate) */}
                    <span
                      aria-hidden
                      className="ml-2 inline-block h-5 w-5 rotate-0 transition-transform duration-200 group-open:rotate-90 text-slate-700"
                    >
                      ▸
                    </span>
                  </summary>

                  <div className="mt-3 pl-6 sm:pl-7 text-sm sm:text-base leading-relaxed text-slate-700">
                    {f.answer}
                  </div>

                  {/* subtle bottom progress hint */}
                  <div className="mt-4 h-1 w-full rounded-full bg-white/80" aria-hidden>
                    <div
                      className={`h-1 w-0 rounded-full ${accent.dot} transition-[width] duration-500 ease-out group-open:w-4/5`}
                    />
                  </div>
                </details>
              </li>
            );
          })}
        </ul>

        {/* CTA below FAQs */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
            aria-label="Still have questions? Contact admissions"
          >
            Still have questions? Contact us
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Download detailed syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - FAQ Section - Download Syllabus"
      />

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - FAQ Section - Contact Us"
      />

    </section>
  );
}

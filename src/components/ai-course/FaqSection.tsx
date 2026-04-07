// components/sections/FaqSection.tsx
// Server component — modern, accessible FAQ with subtle futuristic accents + SEO (DS & AI edition).

"use client";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import { Download } from "lucide-react";

import { AI_FAQS } from "@/data/aiData";

const ACCENT_STYLES = [
  { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", ring: "focus:ring-indigo-300", chip: "bg-indigo-50" },
  { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", ring: "focus:ring-amber-300", chip: "bg-amber-50" },
  { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", ring: "focus:ring-emerald-300", chip: "bg-emerald-50" },
  { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", ring: "focus:ring-rose-300", chip: "bg-rose-50" },
  { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", ring: "focus:ring-sky-300", chip: "bg-sky-50" },
];

export default function FaqSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";

  const seoKeywords =
    "data science faq, ai course questions, machine learning program india, job assistance data science, ds ai certification, ml projects tools duration";


  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop: fine grid + soft indigo glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(79,70,229,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-DS">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Everything about our <strong>Comprehensive Data Science & AI</strong> program—curriculum, tools, projects,
            timelines, certification, and <strong>career support</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* FAQ list */}
        <div role="list" aria-label="Program frequently asked questions" className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:gap-5">
          {AI_FAQS.map((f, i) => {
            const accent = ACCENT_STYLES[i % ACCENT_STYLES.length];
            return (
              <details
                key={f.question}
                role="listitem"
                className={[
                  "group relative rounded-2xl border bg-white p-4 sm:p-5 shadow-sm transition-all duration-200",
                  "open:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5",
                  accent.border,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", accent.bar].join(" ")} aria-hidden />

                <summary
                  className={[
                    "flex cursor-pointer list-none items-start justify-between gap-3",
                    "focus:outline-none focus-visible:ring-2",
                    accent.ring,
                  ].join(" ")}
                >
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    <span className={accent.text}>Q. </span>
                    {f.question}
                  </h3>
                  {/* chevron */}
                  <span
                    aria-hidden
                    className={[
                      "mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold transition",
                      accent.border,
                      accent.chip,
                      accent.text,
                      "group-open:rotate-180",
                    ].join(" ")}
                  >
                    ▾
                  </span>
                </summary>

                <div className="mt-3 text-sm md:text-base text-slate-700">{f.answer}</div>

                {/* micro underline */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100" aria-hidden>
                  <div
                    className={[
                      "h-1 w-1/2 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out",
                      accent.bar,
                      "group-open:scale-x-100 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </div>
              </details>
            );
          })}
        </div>

        {/* Small reassurance strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Still have questions?{" "}
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="font-semibold text-sky-700 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300 rounded cursor-pointer"
              title="Talk to an Advisor"
            >
              Talk to an advisor
            </button>{" "}
            for a personalized walkthrough of outcomes and placement support.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              title="Download Syllabus"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Syllabus (PDF)
            </button>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Comprehensive Data Science & AI - FAQ Section - Talk to Advisor"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Comprehensive Data Science & AI - FAQ Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

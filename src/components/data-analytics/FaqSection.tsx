// components/sections/FaqSection.tsx
"use client";
// Server component — clean, modern, responsive FAQ with subtle futuristic accents + SEO.


import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

import { DATA_ANALYTICS_FAQS } from "@/data/dataAnalyticsData";

const ACCENT_STYLES = [
  {
    bar: "bg-orange-500",
    border: "border-orange-200",
    text: "text-brand",
    ring: "focus:ring-orange-300",
    chip: "bg-orange-50",
  },
  {
    bar: "bg-emerald-500",
    border: "border-emerald-200",
    text: "text-emerald-700",
    ring: "focus:ring-emerald-300",
    chip: "bg-emerald-50",
  },
  {
    bar: "bg-sky-500",
    border: "border-sky-200",
    text: "text-sky-700",
    ring: "focus:ring-sky-300",
    chip: "bg-sky-50",
  },
  {
    bar: "bg-rose-500",
    border: "border-rose-200",
    text: "text-rose-700",
    ring: "focus:ring-rose-300",
    chip: "bg-rose-50",
  },
  {
    bar: "bg-violet-500",
    border: "border-violet-200",
    text: "text-violet-700",
    ring: "focus:ring-violet-300",
    chip: "bg-violet-50",
  },
];

export default function FaqSection() {
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const seoKeywords =
    "advanced data analytics faq, data analytics course questions, job assistance analytics India, python sql bi course details, data science placement support, analytics projects portfolio";


  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft top glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Frequently Asked Questions About the Data Analytics Course
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Everything you need to know about our{" "}
            <strong>Advanced Data Analytics</strong> program—curriculum, tools, projects, and{" "}
            <strong>career support</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* FAQ list */}
        <div
          role="list"
          aria-label="Program frequently asked questions"
          className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:gap-5 max-w-4xl"
        >
          {DATA_ANALYTICS_FAQS.map((f, i) => {
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
                    className={[
                      "mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold transition",
                      accent.border,
                      accent.chip,
                      accent.text,
                      "group-open:rotate-180",
                    ].join(" ")}
                    aria-hidden
                  >
                    ▾
                  </span>
                </summary>

                <div className="mt-3 text-sm md:text-base text-slate-700">
                  {f.answer}
                </div>

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
              onClick={() => setIsSessionOpen(true)}
              className="cursor-pointer font-semibold text-sky-700 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300 rounded bg-transparent border-none p-0 inline"
            >
              Talk to an advisor
            </button>{" "}
            for a personalized walkthrough of the curriculum and outcomes.
          </p>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isSessionOpen}
        onClose={() => setIsSessionOpen(false)}
        source="Data Analytics Course Page - FAQ Section - Talk to Advisor"
        courseName="Advanced Data Analytics Hero Program"
      />
    </section>
  );
}

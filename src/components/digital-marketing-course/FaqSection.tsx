"use client";

import Link from "next/link";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

import { DIGITAL_MARKETING_FAQS } from "@/data/digitalMarketingData";

export default function FaqSection() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Digital Marketing & Analytics Master Program";


  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-10 bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(720px_140px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        {/* Heading */}
        <header className="text-center">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-green-700">
            Digital Marketing Course Mumbai - FAQs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about the program - certifications, placements, projects, and schedules.
          </p>
        </header>

        {/* FAQ list */}
        <ul className="mt-10 space-y-4">
          {DIGITAL_MARKETING_FAQS.map((item) => (
            <li key={item.question}>
              <details
                className={[
                  'group relative rounded-2xl border bg-white p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                  'open:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2',
                  item.accent.border,
                  item.accent.ring,
                ].join(' ')}
              >
                {/* top accent line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/60 to-transparent"
                />
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>
                  {/* plus/minus icon built with CSS */}
                  <span
                    className="relative mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition group-open:rotate-180"
                    aria-hidden
                  >
                    <span className="absolute h-3 w-0.5 bg-slate-700"></span>
                    <span className="absolute h-0.5 w-3 bg-slate-700"></span>
                  </span>
                </summary>

                <div className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  {item.answer}
                </div>

                {/* meta chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.accent.chip} border border-black/5`}>
                    Student-first
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Job-ready
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Portfolio-driven
                  </span>
                </div>
              </details>
            </li>
          ))}
        </ul>

        {/* Soft CTA */}
        <div className="flex flex-col mt-10 justify-center items-center text-center">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="cursor-pointer inline-flex w-fit items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Still have questions? Talk to an advisor"
          >
            Still have questions? Talk to an advisor
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
          <Link href="mailto:contact@cinutedigital.com" className="mt-3 text-xs sm:text-sm text-slate-600">
            Or write to us at <span className="font-medium text-slate-800">contact@cinutedigital.com</span>
          </Link>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Digital Marketing Course Page - FAQ Section - Talk to Advisor"
        courseName={courseName}
      />

    </section>
  );
}

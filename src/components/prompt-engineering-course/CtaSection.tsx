// components/sections/CtaSection.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";
import EnrollModal from "@/components/EnrollModal";

export default function CtaSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Prompt Engineering Course";
  const source = "Prompt Engineering Course Page - CTA Section";


  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* sleek accent (thin gradient line only; no heavy fills) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 opacity-80" />

      {/* subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[140px] bg-[radial-gradient(620px_120px_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mx-auto max-w-3xl">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Ready to Master{" "}
            <span className="text-DS">
              Prompt Engineering &amp; GenAI
            </span>
            ?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700">
            Join a project-first program with <strong>global certification</strong>,{" "}
            <strong>20+ guided hours</strong>, and <strong>100% job assistance</strong>-covering
            frameworks, evaluation, guardrails, and automation with leading LLMs.
          </p>
        </header>

        {/* trust mini-KPIs — distinct colors, no repetition */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
          <KPI label="Certification" value="International" note="QR-verifiable" accent="text-violet-700 bg-violet-50" />
          <KPI label="Portfolio Output" value="Prompt Packs & Demos" note="Eval reports included" accent="text-sky-700 bg-sky-50" />
          <KPI label="Placement Support" value="End-to-End" note="Resume • Mock interviews" accent="text-rose-700 bg-rose-50" />
        </div>

        {/* CTAs — varied button colors */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="tel:+917888383788"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(16,185,129,0.5)] transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            aria-label="Call admissions at +91 7888383788"
          >
            Call: +91 788-83-83-788
          </Link>

          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(79,70,229,0.45)] transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Email admissions at contact@cinutedigital.com"
          >
            Enroll Now
          </button>

          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download the Prompt Engineering syllabus"
          >
            Download Syllabus
          </button>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600">
          Flexible schedules • Mentor support •{" "}
          <span className="font-semibold text-slate-800">Seats are limited-secure yours today.</span>
        </p>

        <SyllabusDownloadModal
          isOpen={isSyllabusOpen}
          onClose={() => setIsSyllabusOpen(false)}
          source={`${source} - Syllabus Download`}
          courseName={courseName}
        />

        <EnrollModal
          isOpen={isEnrollOpen}
          onClose={() => setIsEnrollOpen(false)}
          source={`${source} - Enroll Now`}
          courseName={courseName}
        />
      </div>

    </section>
  );
}

/* ---------- Subcomponent ---------- */

function KPI({
  label,
  value,
  note,
  accent,
}: {
  label: string;
  value: string;
  note: string;
  accent: string; // e.g., "text-violet-700 bg-violet-50"
}) {
  return (
    <div className={`rounded-xl border border-slate-200 ${accent} p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]`}>
      <div className="text-[11px] font-semibold">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-600">{note}</div>
    </div>
  );
}

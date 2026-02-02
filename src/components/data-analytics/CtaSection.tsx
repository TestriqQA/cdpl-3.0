// components/sections/CtaSection.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function CtaSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);


  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* sleek, subtle accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 opacity-80" />

      {/* soft futuristic backdrop (no heavy gradient fill) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[140px] bg-[radial-gradient(600px_120px_at_50%_0%,rgba(251,146,60,0.10),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mx-auto max-w-3xl">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold leading-tight text-slate-900"
          >
            Ready to Master <span className="text-DS">Advanced Data Analytics?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700">
            Don't get left behind in the data revolution. Join the <strong>Hero Program</strong> today and secure your future with <strong>100% placement assistance</strong> and hands-on tool mastery covering <strong>Power BI</strong>, <strong>Tableau</strong>, <strong>SQL</strong>, and <strong>Python</strong>.
          </p>
        </header>

        {/* quick trust highlights (distinct colors) */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
          <KPI label="Certification" value="International" note="QR-verifiable" accent="text-indigo-700 bg-indigo-50" />
          <KPI label="Placement Support" value="End-to-End" note="Resume • Mock Interviews" accent="text-emerald-700 bg-emerald-50" />
          <KPI label="Outcome" value="Job-Ready Portfolio" note="Dashboards & Notebooks" accent="text-rose-700 bg-rose-50" />
        </div>


        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="tel:+917888383788"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-[#047857] px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(16,185,129,0.5)] transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            aria-label="Call admissions at +91 7888383788"
          >
            Call: +91 788-83-83-788
          </Link>

          <Link
            href="mailto:contact@cinutedigital.com"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(79,70,229,0.45)] transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Email admissions at contact@cinutedigital.com"
          >
            Email Us
          </Link>

          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download the Advanced Data Analytics syllabus"
          >
            Download Syllabus
          </button>
        </div>

        {/* reassurance */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600">
          No prerequisites required. Flexible batches.{" "}
          <span className="font-semibold text-slate-800">Seats fill fast-secure yours today.</span>
        </p>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Analytics Course Page - CTA Section - Download Syllabus"
        courseName="Advanced Data Analytics Hero Program"
      />
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
  accent: string; // e.g., "text-indigo-700 bg-indigo-50"
}) {
  return (
    <div className={`rounded-xl border border-slate-200 ${accent} p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]`}>
      <div className="text-[11px] font-semibold">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-600">{note}</div>
    </div>
  );
}

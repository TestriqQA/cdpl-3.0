"use client";

import Link from "next/link";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function CtaSection() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const seoKeywords =
    "enroll deep learning course, generative ai certification, nlp training india, machine learning jobs assistance, python ai program, data science placement support, llm course with projects";

  return (
    <section
      id="enroll-ai"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Ready to Master{" "}
            <span className="text-DS">
              Deep Learning
            </span> &{" "}
            <span className="text-DS">AI</span>
            ?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Enroll now to get <strong>job assistance</strong>, mentor-led guidance, and a
            <strong> portfolio of real AI projects</strong> using <strong>Python, PyTorch, LLMs</strong>, and{" "}
            <strong>Transformers</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Quick highlights (distinct accents, no repeats) */}
        <ul
          aria-label="Program highlights"
          className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <li className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-700">
              Mentor-Led
            </span>
            <div className="mt-1 text-sm text-slate-800">Live support & feedback</div>
          </li>
          <li className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Real Projects
            </span>
            <div className="mt-1 text-sm text-slate-800">CV, NLP, GenAI demos</div>
          </li>
          <li className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Job Assistance
            </span>
            <div className="mt-1 text-sm text-slate-800">Resume & mock interviews</div>
          </li>
        </ul>

        {/* Primary CTAs (unique colors, accessible focus states) */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="tel:+917888383788"
            title="Call Admissions for Deep Learning & AI Program"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-700 bg-indigo-700 px-5 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:w-auto"
            aria-label="Call to enroll in the Deep Learning & AI course"
          >
            {/* Phone icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.2 2 2 0 0 1 4.86 2h2a2 2 0 0 1 2 1.72c.12.9.31 1.77.57 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.61.57A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Call: +91 788-83-83-788
          </Link>

          <Link
            href="mailto:contact@cinutedigital.com"
            title="Email us for course details and syllabus"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-900 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_2px_0_0_rgba(15,23,42,0.15)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
            aria-label="Email to request the Deep Learning & AI brochure"
          >
            {/* Mail icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
              <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" />
            </svg>
            Email Us
          </Link>

          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-5 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 sm:w-auto"
            aria-label="Apply now for the Deep Learning & AI program"
          >
            {/* Rocket icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 15a7 7 0 0 0 4 4l1.5-1.5a2 2 0 0 1 1.4-.6h1.2a2 2 0 0 0 1.4-.6l4-4a2 2 0 0 0 .6-1.4V9a2 2 0 0 0-.6-1.4l-2-2A2 2 0 0 0 15 5h-1.5a2 2 0 0 0-1.4.6l-4 4a2 2 0 0 0-.6 1.4v1.2a2 2 0 0 1-.6 1.4L5 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            Apply Now
          </button>
        </div>

        {/* Micro trust note + WhatsApp */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs sm:text-sm text-slate-600">
          Limited seats • Flexible schedules • Mentor feedback on every project
        </p>
        <address className="mx-auto mt-6 max-w-3xl not-italic text-center text-xs text-slate-500">
          Prefer WhatsApp? Message{" "}
          <Link
            href="https://wa.me/917888383788"
            title="Message us on WhatsApp for quick guidance"
            className="font-medium text-sky-700 underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300 rounded"
          >
            +91 788-83-83-788
          </Link>
        </address>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Master Program in Deep Learning, NLP & Generative AI"
        source="Generative AI Course Page - CTA Section - Apply Now"
      />

    </section>
  );
}

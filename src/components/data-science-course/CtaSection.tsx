"use client";
// components/sections/CtaSection.tsx
// Client component — clean, modern CTA with subtle futuristic accents + SEO.

import { useState } from "react";
import { Phone, FileText, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import EnrollModal from "../EnrollModal";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

function ActionButton({
  href,
  label,
  sublabel,
  icon: Icon,
  className,
  ring,
  aria,
  title,
  onClick,
}: {
  href?: string;
  label: string;
  sublabel?: string;
  icon: IconType;
  className: string;
  ring: string;
  aria: string;
  title: string;
  onClick?: () => void;
}) {
  const commonClasses = [
    "group inline-flex items-center justify-center gap-3 rounded-xl px-5 py-3 md:px-6 md:py-4 font-semibold shadow-sm transition-all cursor-pointer",
    "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5 focus:outline-none focus:ring-2",
    className,
    ring,
  ].join(" ");

  const content = (
    <>
      <span className="rounded-lg border border-white/20 bg-white/10 p-1.5">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-sm md:text-base">
        {label}
        {sublabel ? (
          <span className="block text-xs font-normal opacity-90">{sublabel}</span>
        ) : null}
      </span>
      {/* chevron micro-cue */}
      <span
        className="ml-1 inline-block translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden
      >
        →
      </span>
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} aria-label={aria} title={title} className={commonClasses}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href || "#"} aria-label={aria} title={title} className={commonClasses}>
      {content}
    </Link>
  );
}

export default function CtaSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const seoKeywords =
    "enroll data science machine learning course india, ds ml certification, job assistance placement support, contact training institute, download syllabus brochure";


  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* ... (keep background) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[130px] bg-[radial-gradient(700px_150px_at_50%_0%,rgba(124,58,237,0.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Ready to Master <span className="text-DS">Advanced Data Science?</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Enroll today and get <strong>100% job assistance</strong>,{" "}
            <strong>mentor-led projects</strong>, and a <strong>verifiable global certificate</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </div>

        {/* CTA panel */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
          {/* Quick value bullets */}
          <ul className="mx-auto mb-5 grid max-w-3xl grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              Job Assistance
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
              Mentor-Led Projects
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden />
              Global Certification
            </li>
          </ul>

          {/* Buttons: unique accent colors per action (no repeats) */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ActionButton
              href="tel:+917888383788"
              label="Call Admissions"
              sublabel="+91 788-83-83-788"
              icon={Phone}
              className="bg-slate-900 text-white"
              ring="focus:ring-slate-300"
              aria="Call admissions at +91 788-83-83-788"
              title="Call Us"
            />
            <ActionButton
              onClick={() => setIsEnrollOpen(true)}
              label="Apply Now"
              sublabel="Start your journey"
              icon={CheckCircle}
              className="bg-indigo-600 text-white"
              ring="focus:ring-indigo-300"
              aria="Apply for the Data Science course"
              title="Apply Now"
            />
            <ActionButton
              onClick={() => setIsSyllabusOpen(true)}
              label="Download Syllabus"
              sublabel="PDF • Curriculum"
              icon={FileText}
              className="bg-white text-slate-900 border border-slate-200"
              ring="focus:ring-purple-300"
              aria="Download the course syllabus"
              title="Download Syllabus"
            />
            <ActionButton
              href="https://wa.me/917888383788"
              label="Chat on WhatsApp"
              sublabel="Quick questions answered"
              icon={MessageCircle}
              className="bg-emerald-700 text-white"
              ring="focus:ring-emerald-300"
              aria="Open WhatsApp chat with admissions"
              title="Chat on WhatsApp"
            />
          </div>

          {/* Compliance & reassurance */}
          <p className="mt-5 text-center text-xs text-slate-500">
            *By contacting us, you agree to receive course updates. No spam-unsubscribe anytime.
          </p>
        </div>

        {/* Tiny trust row */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600">
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5">Live Doubt Solving</span>
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5">Portfolio-Ready Projects</span>
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5">Placement Support</span>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - CTA Section - Download Syllabus"
        courseName={courseName}
      />
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - CTA Section - Apply Now"
        courseName={courseName}
      />
    </section>
  );
}

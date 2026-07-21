// components/sections/WhoShouldEnroll.tsx
// Sleek, responsive, SEO-friendly "Who Should Enroll" section with subtle futuristic accents.
// Unique card colors (no repeats), minimal/no gradients, fully self-contained.

"use client";

import {
  GraduationCap,
  Repeat,
  Building2,
  BadgeCheck,
  Rocket,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false, loading: () => <div>Loading...</div> });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false, loading: () => <div>Loading...</div> });

type Audience = {
  title: string;
  subtitle: string;
  points: string[];
  icon: React.ComponentType<{ className?: string }>;
  bg: string;   // unique background per card
  text: string; // matching text color
  ring: string; // matching ring color
  aria: string;
};

const AUDIENCES: Audience[] = [
  {
    title: "Students & Freshers",
    subtitle: "Start from zero—no prior coding required",
    points: ["Core Java fundamentals", "Hands-on projects", "Interview prep"],
    icon: GraduationCap,
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
    aria: "Students and freshers audience",
  },
  {
    title: "Career Switchers",
    subtitle: "Move into high-paying backend roles",
    points: ["Spring Boot APIs", "Microservices basics", "Portfolio building"],
    icon: Repeat,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
    aria: "Career switchers audience",
  },
  {
    title: "Entrepreneurs",
    subtitle: "Build and scale SaaS products fast",
    points: ["MVP to production", "Cloud deployment", "Secure payments & auth"],
    icon: Rocket,
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
    aria: "Entrepreneurs audience",
  },
  {
    title: "IT Professionals",
    subtitle: "Upgrade to Spring Boot & Microservices",
    points: ["JPA/Hibernate", "Docker & K8s basics", "CI/CD pipelines"],
    icon: Building2,
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
    aria: "IT professionals audience",
  },
];

export default function WhoShouldEnroll() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const title = "Who is this Java course for?";
  const subtitle =
    "Beginner-friendly yet industry-focused: whether you’re starting out or upskilling, our Java program gets you job-ready with Spring Boot, REST APIs, Microservices, and Cloud fundamentals.";
  const keywords =
    "Who should enroll Java course, Java for beginners, Spring Boot for professionals, microservices training, backend developer course, Java career switch, SaaS founder Java";

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="enroll-heading"
      className="relative py-10 bg-gray-50"
    >
      {/* Subtle futuristic accent (sleek, non-intrusive) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#e9e9e9_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="enroll-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Who is this <span className="text-FS">Java course</span> for?
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* Human-readable SEO keywords for crawlers (kept visually hidden) */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Audience Cards */}
        <div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2"
          role="list"
          aria-label="Who should enroll audience groups"
        >
          {AUDIENCES.map((a, i) => (
            <div
              key={a.title}
              role="listitem"
              aria-label={a.aria}
              className={[
                "group relative overflow-hidden rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "border border-white/70 backdrop-blur-sm ring-1",
                a.bg,
                a.ring,
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                  <a.icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{a.subtitle}</p>
                </div>
              </div>

              <ul className="mt-4 grid list-disc grid-cols-1 gap-1 pl-5 text-sm text-gray-700 md:text-base">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              {/* subtle accent bar (non-gradient) */}
              <div className="mt-4 h-1 w-full rounded-full bg-white/70" aria-hidden="true">
                <div
                  className={["h-1 rounded-full", a.text.replace("text-", "bg-")].join(" ")}
                  style={{ width: ["82%", "74%", "78%", "70%"][i] }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Micro validation row (adds trust and scannability) */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <BadgeCheck className="mx-auto h-5 w-5 text-gray-900" />
            <p className="mt-1 text-xs font-semibold text-gray-700">Beginner Friendly</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <Users className="mx-auto h-5 w-5 text-gray-900" />
            <p className="mt-1 text-xs font-semibold text-gray-700">Mentor-Led</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <BadgeCheck className="mx-auto h-5 w-5 text-gray-900" />
            <p className="mt-1 text-xs font-semibold text-gray-700">Portfolio Projects</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <BadgeCheck className="mx-auto h-5 w-5 text-gray-900" />
            <p className="mt-1 text-xs font-semibold text-gray-700">Placement Support</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Check Your Eligibility
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Java Programming"
        source="Java Programming Course Page - Who Should Enroll Section - Check Eligibility"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Java Programming"
        source="Java Programming Course Page - Who Should Enroll Section - Download Syllabus"
      />

      {/* Accessible helpers */}
      <p className="sr-only">{title}</p>
      <p className="sr-only">{subtitle}. Keywords: {keywords}.</p>
    </section>
  );
}

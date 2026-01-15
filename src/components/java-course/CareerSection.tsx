// components/sections/CareerSection.tsx
// Sleek, responsive, SEO-friendly career section with subtle futuristic accents.
// Unique colors per pill (no repeats), minimal/no gradients, fully self-contained.

"use client";

import {
  Briefcase,
  Cog,
  Layers3,
  CircuitBoard,
  Code2,
  Boxes,
  Cloud,
  Settings2,
  ChevronRight,
} from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false, loading: () => <div>Loading...</div> });
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false, loading: () => <div>Loading...</div> });

type Role = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  aria: string;
  bg: string;   // unique bg color
  text: string; // matching text color
  ring: string; // matching ring color
};

const ROLES: Role[] = [
  {
    title: "Java Developer",
    icon: Code2,
    aria: "Java Developer role",
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
  },
  {
    title: "Spring Boot Developer",
    icon: Settings2,
    aria: "Spring Boot Developer role",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
  },
  {
    title: "Backend Engineer",
    icon: Layers3,
    aria: "Backend Engineer role",
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
  },
  {
    title: "Full Stack Java Developer",
    icon: CircuitBoard,
    aria: "Full Stack Java Developer role",
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
  },
  {
    title: "Microservices Architect",
    icon: Boxes,
    aria: "Microservices Architect role",
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
  },
  {
    title: "Software Engineer",
    icon: Briefcase,
    aria: "Software Engineer role",
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
  },
  {
    title: "DevOps Engineer",
    icon: Cog,
    aria: "DevOps Engineer role",
    bg: "bg-lime-50",
    text: "text-lime-900",
    ring: "ring-lime-200",
  },
  {
    title: "Cloud Java Developer",
    icon: Cloud,
    aria: "Cloud Java Developer role",
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    ring: "ring-fuchsia-200",
  },
];

export default function CareerSection() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [enrollSource, setEnrollSource] = useState("Java Programming Course Page - Career Section");

  const handleApplyClick = (roleTitle: string) => {
    setEnrollSource(`Java Programming Course Page - Career Section - Apply for ${roleTitle}`);
    setIsEnrollModalOpen(true);
  };

  const title = "500K+ Java Jobs in India";
  const subtitle =
    "High-demand Java careers across startups and enterprises. Become job-ready for roles in Spring Boot, Microservices, Cloud, DevOps, and scalable backend engineering.";
  const keywords =
    "Java jobs India, Spring Boot jobs, backend engineer roles, microservices architect, cloud Java developer, DevOps engineer Java, full stack Java, software engineer careers";

  return (
    <section
      id="java-careers"
      aria-labelledby="career-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic grid accent (sleek, non-intrusive) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#ededed_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="career-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            500K+ <span className="text-FS">Java Jobs</span> in India
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* SEO keywords for crawlers that read visible content */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Metric strip (compact, eye-catching, no gradients) */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
            <p className="text-2xl font-extrabold text-gray-900">500K+</p>
            <p className="text-xs font-medium text-gray-600">Open Java Roles</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
            <p className="text-2xl font-extrabold text-gray-900">Top</p>
            <p className="text-xs font-medium text-gray-600">Fortune 500 Adoption</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
            <p className="text-2xl font-extrabold text-gray-900">Pan-India</p>
            <p className="text-xs font-medium text-gray-600">Remote & Onsite</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center">
            <p className="text-2xl font-extrabold text-gray-900">Growth</p>
            <p className="text-xs font-medium text-gray-600">Backend • Cloud • DevOps</p>
          </div>
        </div>

        {/* Role pills (unique colors, fully responsive) */}
        <div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Popular Java career roles"
        >
          {ROLES.map((r, i) => (
            <article
              key={i}
              role="listitem"
              aria-label={r.aria}
              className={[
                "group flex items-center gap-3 rounded-2xl p-4 shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "border border-white/70 backdrop-blur-sm ring-1",
                r.bg,
                r.ring,
              ].join(" ")}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                <r.icon className="h-5 w-5 text-gray-900" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">{r.title}</p>
                <p className={["text-[11px] font-semibold", r.text].join(" ")}>
                  Hire-ready skills
                </p>
              </div>
              <button
                onClick={() => handleApplyClick(r.title)}
                className={[
                  "cursor-pointer ml-auto hidden rounded-md bg-white px-2 py-1 text-[10px] text-slate-900 font-semibold ring-1 ring-black/5 sm:inline-flex hover:bg-gray-50",
                  r.text.replace("text-", ""),
                ].join(" ")}
                aria-label={`Apply for ${r.title}`}
              >
                Apply
              </button>
            </article>
          ))}
        </div>

        {/* SEO-rich bullets (concise, scannable) */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">Skills that get interviews</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Core Java, OOP, Collections, Streams, Error Handling</li>
            <li>Spring Boot, REST API design, validation & OpenAPI</li>
            <li>Microservices patterns: config, discovery, gateways, resilience</li>
            <li>JPA/Hibernate, SQL schema design, performance tuning</li>
            <li>DevOps basics: Git, CI/CD, Docker & Kubernetes fundamentals</li>
            <li>Cloud readiness: logging, monitoring, security best practices</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Browse Open Roles
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
          <button
            onClick={() => {
              setEnrollSource("Java Programming Course Page - Career Section - Download Resume Template");
              setIsEnrollModalOpen(true);
            }}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Download Resume Template
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Java Programming"
        source={enrollSource}
      />

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Java Programming Course Page - Career Section - Browse Open Roles"
      />

      {/* Accessible helpers for crawlers & screen readers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{subtitle}</p>
    </section>
  );
}

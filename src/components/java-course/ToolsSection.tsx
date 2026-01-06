// components/sections/ToolsSection.tsx
// Sleek, responsive, SEO-friendly "Tools You’ll Master" section.
// Unique colors per badge (no repeats), subtle futuristic accents, fully self-contained.

"use client";

import React, { useState } from "react";
import {
  Code2,
  Sparkles,
  Sprout,
  Layers3,
  Hammer,
  Ship,
  Cloud,
  GitBranch,
  Send,
  ChevronRight,
} from "lucide-react";

import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";
import CareerSessionModal from "@/components/CareerSessionModal";

type Tool = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  note: string;
  bg: string;   // unique background
  text: string; // matching text color
  ring: string; // matching ring color
  aria: string;
};

const TOOLS: Tool[] = [
  {
    name: "Java",
    icon: Code2,
    note: "JDK • JVM • Collections • Streams",
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
    aria: "Java language and platform",
  },
  {
    name: "IntelliJ IDEA",
    icon: Sparkles,
    note: "Productivity • Inspections • Refactors",
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
    aria: "IntelliJ IDEA IDE",
  },
  {
    name: "Spring Boot",
    icon: Sprout,
    note: "REST APIs • Auto-config • Actuator",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
    aria: "Spring Boot framework",
  },
  {
    name: "Hibernate (JPA)",
    icon: Layers3,
    note: "ORM • Mappings • JPQL • Caching",
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
    aria: "Hibernate and JPA",
  },
  {
    name: "Maven",
    icon: Hammer,
    note: "Build • Dependencies • Profiles",
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
    aria: "Apache Maven build tool",
  },
  {
    name: "Docker",
    icon: Ship,
    note: "Images • Containers • Compose",
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
    aria: "Docker containerization",
  },
  {
    name: "AWS",
    icon: Cloud,
    note: "EC2 • RDS • ECS • S3",
    bg: "bg-lime-50",
    text: "text-lime-900",
    ring: "ring-lime-200",
    aria: "Amazon Web Services",
  },
  {
    name: "Git",
    icon: GitBranch,
    note: "Branching • PRs • Workflows",
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    ring: "ring-fuchsia-200",
    aria: "Git version control",
  },
  {
    name: "Postman",
    icon: Send,
    note: "Collections • Tests • Environments",
    bg: "bg-teal-50",
    text: "text-teal-900",
    ring: "ring-teal-200",
    aria: "Postman API platform",
  },
];

export default function ToolsSection() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  const title = "Tools You’ll Master";
  const subtitle =
    "Engineer with an industry-standard Java toolchain: build, test, containerize and deploy cloud-ready applications using Spring Boot, Hibernate, Docker, AWS, Git and more.";
  const keywords =
    "Java tools, Spring Boot tools, IntelliJ IDEA, Hibernate JPA, Maven build, Docker containers, AWS cloud, Git workflows, Postman API testing, Java developer toolkit";

  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic accent (sleek, non-intrusive; not a color gradient fill) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#ededed_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            <span className="text-FS">Tools</span> You’ll Master
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* Human-readable SEO keywords for crawlers (kept visually hidden) */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Pill legend (quick scan value) */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-gray-700">
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">IDE</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Frameworks</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Build & CI</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Containers & Cloud</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">APIs & Testing</span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold">Version Control</span>
        </div>

        {/* Tools Grid (unique colors, fully responsive) */}
        <div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Developer tools covered in this program"
        >
          {TOOLS.map((t) => (
            <article
              key={t.name}
              role="listitem"
              aria-label={t.aria}
              className={[
                "group flex items-start gap-4 rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "border border-white/70 backdrop-blur-sm ring-1",
                t.bg,
                t.ring,
              ].join(" ")}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                <t.icon className="h-6 w-6 text-gray-900" />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-lg md:text-xl font-bold text-gray-900">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">{t.note}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={["rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold ring-1 ring-black/5", t.text].join(" ")}>
                    Hands-on Labs
                  </span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-800 ring-1 ring-black/5">
                    Best Practices
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting bullets (SEO-rich, scannable) */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">What you’ll master with these tools</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>End-to-end Java development with Spring Boot & Hibernate (JPA)</li>
            <li>API design, documentation & testing workflows using Postman</li>
            <li>Build automation with Maven and Git-based CI strategies</li>
            <li>Containerization with Docker and cloud deployments on AWS</li>
            <li>Version control best practices: branching, PRs & code reviews</li>
            <li>Monitoring, logging & production-ready configurations</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Download Setup Guide
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            Explore Tool Labs
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Java Programming"
        source="Java Course Page - Tools Section - Java - Download Setup Guide"
      />

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        courseName="Java Programming"
        source="Java Course Page - Tools Section - Explore Tool Labs"
        title="Explore Tool Labs"
        subtitle="Get hands-on access to our Java development environment."
      />

      {/* Accessible helpers for crawlers & screen readers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{subtitle}. Keywords: {keywords}.</p>
    </section>
  );
}

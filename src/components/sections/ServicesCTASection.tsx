// src/components/sections/ServicesCTASection.tsx
"use client";

import { useCallback, useState } from "react";

import { Sparkles, ArrowRight, CalendarCheck2, Building2, Star } from "lucide-react";
import WorkshopRequestModal from "../WorkshopRequestModal";

export default function ServicesCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollToGrid = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="relative w-full">
      {/* Soft page background (kept) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(60% 60% at 8% 12%, rgba(16,185,129,0.10), transparent 60%),
            radial-gradient(50% 50% at 92% 18%, rgba(45,212,191,0.10), transparent 60%),
            radial-gradient(55% 55% at 50% 88%, rgba(5,150,105,0.10), transparent 62%)
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* CLEAN CARD — no ring, no gradient border, no blur, no shadows */}
        <div className="relative rounded-3xl bg-white">
          <div className="px-6 py-8 sm:px-10 sm:py-12 lg:px-16">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-medium text-emerald-700">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              Corporate & Campus Training
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-[conic-gradient(at_30%_50%,#06b6d4,#22c55e,#06b6d4)]">
                transform your teams
              </span>{" "}
              with job-ready skills?
            </h2>

            {/* Subheading */}
            <p className="mt-3 max-w-3xl text-lg text-slate-700">
              Tailored programs in Software Testing, Automation, Data Science, and AI/ML. We handle content, labs,
              assessments, and outcomes—so you get measurable impact.
            </p>

            {/* THREE CARDS — solid fills, light borders, no shadows */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* 150+ Partner Events */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-inset ring-emerald-200/60">
                    <Building2 className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">150+ Partner Events</p>
                    <p className="text-slate-700/90">Corporates & Universities</p>
                  </div>
                </div>
              </div>

              {/* Agile Schedules */}
              <div className="rounded-2xl border border-teal-200 bg-teal-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-inset ring-teal-200/60">
                    <CalendarCheck2 className="h-5 w-5 text-teal-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">Agile Schedules</p>
                    <p className="text-slate-700/90">On-site / Remote / Hybrid</p>
                  </div>
                </div>
              </div>

              {/* 4.8/5 Avg Rating */}
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white ring-1 ring-inset ring-cyan-200/60">
                    <Star className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">4.8/5 Avg Rating</p>
                    <p className="text-slate-700/90">Learner Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <button
                onClick={scrollToGrid}
                className="cursor-pointer inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-slate-300/50"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>
      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Services Page - CTA Section"
        title="Schedule a Consultation"
        subtitle="Tailored guidance for your organization"
      />
    </section>
  );
}

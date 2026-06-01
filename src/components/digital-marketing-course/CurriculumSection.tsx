"use client";
import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import EnrollModal from "../EnrollModal";

type Module = {
  num: string;
  title: string;
  outcome: string;
};

// Curriculum extracted from the PDF (Modules 1–14, pp. 16–29)
const modules: Module[] = [
  {
    num: "01",
    title: "Fundamentals of Digital Marketing",
    outcome:
      "Define objectives, research market & competitors, map funnel & journeys, segment audiences, build buyer personas and value propositions, understand Paid/Owned/Earned media, compare organic vs inorganic channels, and choose the right channel mix.",
  },
  {
    num: "02",
    title: "SEO Fundamentals",
    outcome:
      "Grasp Google updates and ranking analysis; apply content/on-page & off-page tactics; plan link-building and internal linking; avoid common SEO mistakes & penalties; practice AI-assisted keyword research, meta, and content structure; get introduced to technical SEO.",
  },
  {
    num: "03",
    title: "Social Media Marketing",
    outcome:
      "Select platforms by audience & goals; design B2B/B2C content strategies; create AI-assisted content systems; work with formats (feeds, Stories, Reels); understand algorithms & core metrics; execute on YouTube, LinkedIn, Instagram, and Twitter/X with personal branding.",
  },
  {
    num: "04",
    title: "Persuasive Copywriting",
    outcome:
      "Write high-converting headlines, hooks, and body copy using storytelling & value propositions; A/B test creative & copy; define landing-page goals and structure; brief designers/freelancers; establish brand guidelines for consistent creative.",
  },
  {
    num: "05",
    title: "Marketing on Google",
    outcome:
      "Build Search, Display, YouTube, Discovery & UAC campaigns from scratch; master account/campaign structure, match types, ad crafting, audiences, and bidding strategies; track performance and optimize to ROI with data-driven decisions.",
  },
  {
    num: "06",
    title: "Marketing on Facebook",
    outcome:
      "Plan objectives and buying types; design audiences (core, custom, lookalike); use CBO vs ABO and funnel strategies; select placements (static, carousel, video); structure accounts for scale; measure dashboard vs realized ROAS; apply rules/creative/email automation.",
  },
  {
    num: "07",
    title: "Marketing on LinkedIn & Other Platforms",
    outcome:
      "Run LinkedIn campaigns (formats, targeting, Lead Gen Forms); build insights & tracking; retarget & create lookalikes; explore programmatic/alt networks (Quora, Buysell, Carbon, Hyper, Omni); optimize Apple Search Ads, Amazon Ads; use native ads (Taboola/Outbrain/Yahoo).",
  },
  {
    num: "08",
    title: "Conversion Tracking",
    outcome:
      "Implement event-based conversion tracking; understand cookies & FLoC; migrate to and report with GA4 (funnels, paths, cohorts, attribution); track web/app with GA/Mixpanel/Matomo; deploy heatmaps & session recordings (Clarity/Hotjar); configure GTM & e-commerce tracking.",
  },
  {
    num: "09",
    title: "CRO (Basic → Advanced)",
    outcome:
      "Run the CRO loop—Observe, Ideate, Test, Deploy; perform heuristic, quantitative & qualitative analysis; craft hypotheses and prioritize (e.g., ICE); execute tests and measure; make ship/no-ship decisions; follow best practices with a practical CRO checklist.",
  },
  {
    num: "10",
    title: "Media Planning",
    outcome:
      "Set media objectives and strategy; decide media mix (traditional vs digital) and budget split; buy media (direct, programmatic, RTB); schedule effectively; monitor KPIs; address ad fraud & brand safety; review case studies to sharpen planning.",
  },
  {
    num: "11",
    title: "Dashboards & Reporting",
    outcome:
      "Apply data-viz principles and chart selection; connect multiple sources; build real-time reports in Looker Studio (Data Studio) with filters and custom views; translate campaign data into actionable optimization insights.",
  },
  {
    num: "12",
    title: "Attribution",
    outcome:
      "Understand why attribution matters; compare view-through vs click-through; evaluate models (last, first, linear, time-decay, position-based, U-/V-shaped); build a GA attribution project; interpret data; design custom B2B/B2C models; learn algorithmic essentials.",
  },
  {
    num: "13",
    title: "Email/WhatsApp + Automation",
    outcome:
      "Adopt email best practices and key metrics; navigate WhatsApp’s pros/cons & compliance; blend email+WA journeys; automate with tools (e.g., Zapier); practice on a live case study with dashboard walkthrough.",
  },
  {
    num: "14",
    title: "Capstone & Job Preparation",
    outcome:
      "Ship an end-to-end brand strategy; craft targeted resumes & portfolios; practice mock interviews; use job-search tooling and LinkedIn outreach; understand recruiter perspective, salary expectations/negotiation, and long-term career growth paths.",
  },
];

// Distinct color accents (no repeats, no heavy gradients)
const ACCENTS = [
  { ring: "ring-sky-300", soft: "bg-sky-50", badge: "text-sky-800 bg-sky-100", text: "text-sky-900" },
  { ring: "ring-emerald-300", soft: "bg-emerald-50", badge: "text-emerald-800 bg-emerald-100", text: "text-emerald-900" },
  { ring: "ring-amber-300", soft: "bg-amber-50", badge: "text-amber-800 bg-amber-100", text: "text-amber-900" },
  { ring: "ring-violet-300", soft: "bg-violet-50", badge: "text-violet-800 bg-violet-100", text: "text-violet-900" },
  { ring: "ring-rose-300", soft: "bg-rose-50", badge: "text-rose-800 bg-rose-100", text: "text-rose-900" },
  { ring: "ring-indigo-300", soft: "bg-indigo-50", badge: "text-indigo-800 bg-indigo-100", text: "text-indigo-900" },
  { ring: "ring-teal-300", soft: "bg-teal-50", badge: "text-teal-800 bg-teal-100", text: "text-teal-900" },
  { ring: "ring-fuchsia-300", soft: "bg-fuchsia-50", badge: "text-fuchsia-800 bg-fuchsia-100", text: "text-fuchsia-900" },
  { ring: "ring-lime-300", soft: "bg-lime-50", badge: "text-lime-800 bg-lime-100", text: "text-lime-900" },
  { ring: "ring-cyan-300", soft: "bg-cyan-50", badge: "text-cyan-800 bg-cyan-100", text: "text-cyan-900" },
  { ring: "ring-orange-300", soft: "bg-orange-50", badge: "text-brand bg-orange-100", text: "text-brand" },
  { ring: "ring-stone-300", soft: "bg-stone-50", badge: "text-stone-800 bg-stone-100", text: "text-stone-900" },
  { ring: "ring-blue-300", soft: "bg-blue-50", badge: "text-blue-800 bg-blue-100", text: "text-blue-900" },
  { ring: "ring-purple-300", soft: "bg-purple-50", badge: "text-purple-800 bg-purple-100", text: "text-purple-900" },
];

export default function CurriculumSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Digital Marketing & Analytics Master Program";


  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-10 bg-white">
      {/* Scaffold */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(600px_240px_at_50%_0%,rgba(2,132,199,0.06),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200" />
      </div>

      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <header className="text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Advanced <span className="text-green-700">Digital Marketing Course</span> Modules
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Our comprehensive <strong>14-module curriculum</strong> is designed for the 2025-2026 job market. Learn from the comprehensive Digital Marketing institute in Mumbai with placement focus on SEO, SEM, SMM, and Analytics.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* center rail */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block" />
          <ol className="space-y-6">
            {modules.map((m, i) => {
              const sideLeft = i % 2 === 0;
              const accent = ACCENTS[i % ACCENTS.length];

              return (
                <li key={m.num} className="relative">
                  <div className={["md:flex md:items-stretch", sideLeft ? "md:justify-start" : "md:justify-end"].join(" ")}>
                    {/* connector dot */}
                    <span
                      aria-hidden
                      className={[
                        "hidden md:block absolute top-6 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full shadow",
                        "ring-4 bg-white",
                        accent.ring,
                      ].join(" ")}
                    />
                    {/* card */}
                    <article
                      className={[
                        "relative w-full md:w-[calc(50%-1.25rem)] rounded-2xl border bg-white/90 backdrop-blur",
                        "shadow-sm hover:shadow-md transition",
                        "ring-1 ring-transparent hover:translate-y-[-2px]",
                        accent.ring,
                      ].join(" ")}
                    >
                      {/* subtle top bar */}
                      <div aria-hidden className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-black/5" />
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3">
                          {/* number badge */}
                          <span
                            className={["inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold shadow-sm", accent.badge].join(" ")}
                            aria-label={`Module ${m.num}`}
                          >
                            {m.num}
                          </span>
                          <div className="min-w-0">
                            <h3 className={["text-base sm:text-lg font-semibold", accent.text].join(" ")}>{m.title}</h3>
                            <p className="mt-1 text-[13px] sm:text-sm leading-relaxed text-slate-700">
                              <span className="font-semibold">Outcome:</span> {m.outcome}
                            </p>
                            {/* engagement chips */}
                            <ul className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
                              <li className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-700">Practice Brief</li>
                              <li className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">Checklist</li>
                              <li className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-indigo-700">Template</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer rounded-xl border border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Get Full Syllabus PDF
          </button>
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Book a Free Demo
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Digital Marketing Course Page - Curriculum Section - Digital Marketing - Download Syllabus"
        courseName={courseName}
      />
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Digital Marketing Course Page - Curriculum Section - Book Demo"
        courseName={courseName}
      />

    </section>
  );
}

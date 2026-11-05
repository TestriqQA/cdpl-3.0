// =============================
// components/our-team/CultureValuesBand.tsx
// Futuristic, mentor-forward band for the Our Team page
// Light theme • Brand color: #ff8c00 • Next.js + Tailwind + TypeScript
// =============================
"use client";

import { useState } from "react";
import type { ElementType } from "react";
import {
  ShieldCheck,
  Database,
  Brain,
  BarChart3,
  Megaphone,
  ArrowRight,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import AdvisorModal from "@/components/ui/AdvisorModal";

// ---------------------------------------------
// Domains the team teaches (static Tailwind classes per tone)
// ---------------------------------------------
type Tone = "orange" | "blue" | "purple" | "green" | "rose";

const TONE: Record<Tone, { icon: string; bar: string; cta: string }> = {
  orange: { icon: "bg-orange-100 text-orange-600", bar: "from-orange-400 to-amber-400", cta: "bg-orange-500 hover:bg-orange-600" },
  blue: { icon: "bg-sky-100 text-sky-600", bar: "from-sky-400 to-blue-500", cta: "bg-sky-600 hover:bg-sky-700" },
  purple: { icon: "bg-violet-100 text-violet-600", bar: "from-violet-400 to-fuchsia-500", cta: "bg-violet-600 hover:bg-violet-700" },
  green: { icon: "bg-emerald-100 text-emerald-600", bar: "from-emerald-400 to-teal-500", cta: "bg-emerald-600 hover:bg-emerald-700" },
  rose: { icon: "bg-rose-100 text-rose-600", bar: "from-rose-400 to-pink-500", cta: "bg-rose-600 hover:bg-rose-700" },
};

const domains: Array<{
  title: string;
  desc: string;
  icon: ElementType;
  tags: string[];
  tone: Tone;
  href: string;
  cta: string;
}> = [
    {
      title: "Software Testing",
      desc: "Manual, automation and API testing on real QA workflows, from test design to CI pipelines.",
      icon: ShieldCheck,
      tags: ["Selenium", "Playwright", "Postman", "JMeter"],
      tone: "orange",
      href: "/courses/software-testing-course",
      cta: "Explore testing courses",
    },
    {
      title: "Data Science & ML",
      desc: "Python, statistics and machine learning on real datasets, from analysis to working models.",
      icon: Database,
      tags: ["Python", "Pandas", "Scikit-learn", "SQL"],
      tone: "blue",
      href: "/courses/ds-ml-courses",
      cta: "Explore data science courses",
    },
    {
      title: "Artificial Intelligence",
      desc: "Generative AI, prompt engineering and building with LLMs for real business use cases.",
      icon: Brain,
      tags: ["GenAI", "Prompting", "LLMs", "RAG"],
      tone: "purple",
      href: "/courses/artificial-intelligence-courses",
      cta: "Explore AI courses",
    },
    {
      title: "Business Intelligence",
      desc: "Dashboards and reporting that turn raw data into decisions teams can act on.",
      icon: BarChart3,
      tags: ["Power BI", "Tableau", "Excel", "SQL"],
      tone: "green",
      href: "/courses/bi-courses",
      cta: "Explore BI courses",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, paid ads and AI-assisted campaigns, measured with analytics from day one.",
      icon: Megaphone,
      tags: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
      tone: "rose",
      href: "/courses/digital-marketing-courses",
      cta: "Explore marketing courses",
    },
  ];

// =============================
// Component
// =============================
export default function TeamCultureSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="our-team-mentors"
      aria-labelledby="our-team-mentors-heading"
      className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated mesh / beam background */}
      <BeamBg />

      {/* Domains the team teaches, each linking to its courses */}
      <div className="relative z-10">
        <div className="text-center">
          <h2 id="our-team-mentors-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our <span className="text-brand">Team</span> Teaches
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Learn from <strong className="font-semibold text-slate-800">industry-certified QA mentors</strong>,{" "}
            <strong className="font-semibold text-slate-800">automation testing trainers</strong>,{" "}
            <strong className="font-semibold text-slate-800">API testing experts</strong> and{" "}
            <strong className="font-semibold text-slate-800">performance engineering specialists</strong> who ship
            real products, with human feedback, portfolio-first projects and recruiter-ready skills.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {domains.map((d, idx) => {
            const c = TONE[d.tone];
            return (
              <article
                key={d.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:col-span-2 ${idx === 3 ? "lg:col-start-2" : ""} ${idx === 4 ? "sm:col-span-2" : ""}`}
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.bar}`} />
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${c.icon}`} aria-hidden="true">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{d.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <Link
                    href={d.href}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition ${c.cta}`}
                  >
                    {d.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold sm:text-3xl">Not sure where to start?</h3>
            <p className="mt-3 text-white/90">
              Book a free career consultation and talk one-on-one with a mentor about the right learning path,
              real projects and <span className="font-semibold text-white">placement support</span>.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
              {["Free session", "1:1 with a mentor", "Personalised learning path"].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <CircleCheck className="h-4 w-4" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Talk to a mentor <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link
              href="/courses"
              className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </div>

      <AdvisorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Team Page - Mentor Section"
      />
    </section>
  );
}

// Animated beam / gradient mesh background
function BeamBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% -10%, rgba(255,140,0,0.06) 0%, rgba(255,140,0,0) 60%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[-40px] h-40 w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(255,140,0,0.18)", animation: "cdpl-beam-pulse 6s ease-in-out infinite" }}
      />
      <div
        className="absolute right-8 top-24 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(255,179,106,0.35)", animation: "cdpl-beam-float 5s ease-in-out infinite" }}
      />
    </div>
  );
}

"use client";

import {
  BadgeCheck,
  Briefcase,
  Layers,
  Rocket,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";
import SectionHeader from "@/components/ui/SectionHeader";

/** Eight reasons, each with its own solid icon tile (literal classes so Tailwind sees them). */
const FEATURES = [
  { title: "Training", desc: "Live projects run parallel to classes. Get hands-on with planning, test design, execution, and reporting.", icon: Layers, seo: ["industry-ready training", "hands-on QA projects"], tile: "bg-blue-600" },
  { title: "Professional Exposure", desc: "Work with experienced mentors and QA leads. Build confidence to meet corporate standards and ace interviews.", icon: Briefcase, seo: ["mentor-led learning", "interview preparation"], tile: "bg-emerald-600" },
  { title: "Practical Application", desc: "Practice web, mobile, and API testing on real devices. Apply concepts from manual to automation testing.", icon: BadgeCheck, seo: ["manual testing", "automation testing", "API testing"], tile: "bg-purple-600" },
  { title: "Our Experience", desc: "A decade of building QA teams. Learn in-demand tools, frameworks, and best practices used by top companies.", icon: Rocket, seo: ["QA best practices", "modern test frameworks"], tile: "bg-brand" },
  { title: "Career Services", desc: "Placement assistance, portfolio reviews, mock interviews, and referrals to hiring partners and startups.", icon: Target, seo: ["placement assistance", "portfolio-first approach"], tile: "bg-teal-600" },
  { title: "Certifications & Tools", desc: "Get guidance on certifications and hands-on with Jira, Postman, Selenium, Playwright, and CI/CD basics.", icon: ShieldCheck, seo: ["software testing certifications", "Selenium", "Playwright"], tile: "bg-amber-500" },
  { title: "Collaborative Community", desc: "Join a 10k+ learner network, peer reviews, and alumni support for continuous growth and opportunities.", icon: Users, seo: ["peer learning", "alumni network"], tile: "bg-rose-600" },
  { title: "Flexible Learning", desc: "Weekend/weekday cohorts, recorded sessions, and structured roadmaps tailored for job-ready outcomes.", icon: GraduationCap, seo: ["flexible cohorts", "job-ready outcomes"], tile: "bg-indigo-600" },
] as const;

export default function AboutWhyJoinUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-12 lg:py-16" aria-labelledby="why-join-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="why-join-heading"
          pill={<><Sparkles className="h-4 w-4" aria-hidden="true" />Future-Ready EdTech • Job-Oriented</>}
          title={<>Why join <span className="text-brand">Cinute Digital</span>?</>}
          intro={
            <>
              Industry-aligned curriculum, <strong>mentor-led learning</strong>,{" "}
              <strong>live projects</strong>, and <strong>placement assistance</strong>—everything
              designed to make you <strong>job-ready</strong> for{" "}
              <strong>Software Testing</strong>, <strong>Automation</strong>,{" "}
              <strong>Data Science</strong>, and <strong>AI/ML</strong>.
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="region" aria-label="Key benefits and outcomes at Cinute Digital">
          {FEATURES.map(({ title, desc, icon: Icon, seo, tile }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile} text-white shadow-md`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold leading-snug text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-gray-600">{desc}</p>
              <p className="mt-auto flex flex-wrap gap-1.5 pt-4 text-xs">
                {seo.map((s) => (
                  <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-slate-600">
                    {s}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            Talk to an Advisor
          </button>
        </div>
      </div>

      <span className="sr-only">
        Why join Cinute Digital: mentor-led training, live projects, certifications, and placement
        assistance for career-ready skills in software testing, automation, data science, and AI/ML.
      </span>

      <AdvisorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

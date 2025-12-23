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

/** Palette keys supported by your data */
type Tone =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "teal"
  | "yellow"
  | "pink"
  | "indigo";

/** Static Tailwind class sets (kept literal so Tailwind includes them at build) */
export const PALETTE: Record<
  Tone,
  {
    cardBg: string;       // e.g., bg-blue-50
    cardBorder: string;   // e.g., border-blue-200
    iconWrap: string;     // e.g., bg-blue-100 ring-blue-200
    iconColor: string;    // e.g., text-blue-600
    hoverShadow: string;  // e.g., hover:shadow-blue-200
  }
> = {
  blue: { cardBg: "bg-blue-50", cardBorder: "border-blue-300", iconWrap: "bg-blue-500", iconColor: "text-blue-600", hoverShadow: "hover:shadow-blue-200" },
  green: { cardBg: "bg-green-50", cardBorder: "border-green-300", iconWrap: "bg-green-500", iconColor: "text-green-600", hoverShadow: "hover:shadow-green-200" },
  purple: { cardBg: "bg-purple-50", cardBorder: "border-purple-300", iconWrap: "bg-purple-500", iconColor: "text-purple-600", hoverShadow: "hover:shadow-purple-200" },
  orange: { cardBg: "bg-orange-50", cardBorder: "border-orange-300", iconWrap: "bg-orange-500", iconColor: "text-orange-600", hoverShadow: "hover:shadow-orange-200" },
  teal: { cardBg: "bg-teal-50", cardBorder: "border-teal-300", iconWrap: "bg-teal-500", iconColor: "text-teal-600", hoverShadow: "hover:shadow-teal-200" },
  yellow: { cardBg: "bg-yellow-50", cardBorder: "border-yellow-300", iconWrap: "bg-yellow-500", iconColor: "text-yellow-600", hoverShadow: "hover:shadow-yellow-200" },
  pink: { cardBg: "bg-pink-50", cardBorder: "border-pink-300", iconWrap: "bg-pink-500", iconColor: "text-pink-600", hoverShadow: "hover:shadow-pink-200" },
  indigo: { cardBg: "bg-indigo-50", cardBorder: "border-indigo-300", iconWrap: "bg-indigo-500", iconColor: "text-indigo-600", hoverShadow: "hover:shadow-indigo-200" },
};

/** Helper: get tone like "blue" from tokens like "blue-50" / "blue-600" */
function toneFrom(token?: string): Tone {
  const base = (token?.split("-")[0] || "blue") as Tone;
  return (PALETTE[base] ? base : "blue") as Tone;
}

export default function AboutWhyJoinUs() {
  const features = [
    {
      title: "Training",
      desc:
        "Live projects run parallel to classes. Get hands-on with planning, test design, execution, and reporting.",
      icon: Layers,
      seo: ["industry-ready training", "hands-on QA projects"],
      bgIcon: "blue-600",
      bgColor: "blue-50",
    },
    {
      title: "Professional Exposure",
      desc:
        "Work with experienced mentors and QA leads. Build confidence to meet corporate standards and ace interviews.",
      icon: Briefcase,
      seo: ["mentor-led learning", "interview preparation"],
      bgIcon: "green-600",
      bgColor: "green-50",
    },
    {
      title: "Practical Application",
      desc:
        "Practice web, mobile, and API testing on real devices. Apply concepts from manual to automation testing.",
      icon: BadgeCheck,
      seo: ["manual testing", "automation testing", "API testing"],
      bgIcon: "purple-600",
      bgColor: "purple-50",
    },
    {
      title: "Our Experience",
      desc:
        "A decade of building QA teams. Learn in-demand tools, frameworks, and best practices used by top companies.",
      icon: Rocket,
      seo: ["QA best practices", "modern test frameworks"],
      bgIcon: "orange-600",
      bgColor: "orange-50",
    },
    {
      title: "Career Services",
      desc:
        "Placement assistance, portfolio reviews, mock interviews, and referrals to hiring partners and startups.",
      icon: Target,
      seo: ["placement assistance", "portfolio-first approach"],
      bgIcon: "teal-600",
      bgColor: "teal-50",
    },
    {
      title: "Certifications & Tools",
      desc:
        "Get guidance on certifications and hands-on with Jira, Postman, Selenium, Playwright, and CI/CD basics.",
      icon: ShieldCheck,
      seo: ["software testing certifications", "Selenium", "Playwright"],
      bgIcon: "yellow-600",
      bgColor: "yellow-50",
    },
    {
      title: "Collaborative Community",
      desc:
        "Join a 10k+ learner network, peer reviews, and alumni support for continuous growth and opportunities.",
      icon: Users,
      seo: ["peer learning", "alumni network"],
      bgIcon: "pink-600",
      bgColor: "pink-50",
    },
    {
      title: "Flexible Learning",
      desc:
        "Weekend/weekday cohorts, recorded sessions, and structured roadmaps tailored for job-ready outcomes.",
      icon: GraduationCap,
      seo: ["flexible cohorts", "job-ready outcomes"],
      bgIcon: "indigo-600",
      bgColor: "indigo-50",
    },
  ] as const;

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      aria-labelledby="why-join-heading"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[12px] font-medium text-slate-700 shadow-sm">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Future-Ready EdTech • Job-Oriented
        </p>
        <h2 id="why-join-heading" className="mt-3 text-4xl font-bold tracking-tight">
          Why join{" "}
          <span className="bg-clip-text text-transparent bg-brand">
            Cinute Digital
          </span>
          {'\u00A0'}?
        </h2>
        <p className="mx-auto mt-6 max-w-5xl leading-6 text-slate-600 md:text-lg sm:text-base">
          Industry-aligned curriculum, <strong>mentor-led learning</strong>,{" "}
          <strong>live projects</strong>, and <strong>placement assistance</strong>—everything
          designed to make you <strong>job-ready</strong> for{" "}
          <strong>Software Testing</strong>, <strong>Automation</strong>,{" "}
          <strong>Data Science</strong>, and <strong>AI/ML</strong>.
        </p>
      </div>

      {/* Feature Grid */}
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-5 shadow-sm backdrop-blur sm:p-7"
        role="region"
        aria-label="Key benefits and outcomes at Cinute Digital"
      >
        {/* Soft aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(500px 180px at 85% 10%, rgba(255,122,24,0.12), transparent 60%), radial-gradient(450px 160px at 10% 100%, rgba(37,99,235,0.10), transparent 60%)",
            maskImage:
              "radial-gradient(55% 60% at 85% 10%, black 0%, transparent 60%), radial-gradient(45% 55% at 10% 100%, black 0%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(55% 60% at 85% 10%, black 0%, transparent 60%), radial-gradient(45% 55% at 10% 100%, black 0%, transparent 60%)",
          }}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, seo, bgColor, bgIcon }) => {
            const tone = toneFrom(bgColor || bgIcon);
            const p = PALETTE[tone];

            return (
              <article
                key={title}
                className={[
                  "group relative h-auto rounded-2xl leading-relaxed border-2 p-6 shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg",
                  p.cardBg,
                  p.cardBorder,
                  p.hoverShadow,
                ].join(" ")}
              >
                {/* Icon */}
                <div
                  className={[
                    "mb-3 inline-flex h-15 w-15 items-center justify-center rounded-2xl",
                    p.iconWrap,
                  ].join(" ")}
                >
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>

                {/* Description */}
                <p className="mt-2 text-md text-slate-600">{desc}</p>

                {/* SEO micro-tags */}
                <p className="mt-6 flex flex-wrap gap-2 text-xs leading-4 text-slate-500">
                  {seo.map((s) => (
                    <span key={s} className="w-fit rounded-md bg-green-100 p-0.5 px-1.5">
                      {s}
                    </span>
                  ))}
                </p>

                {/* Hover accent line */}
                <span className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="courses"
            className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-px hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Explore Courses
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="contact-us"
            className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-brand transition hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            Talk to an Advisor
          </Link>
        </div>
      </div>

      <span className="sr-only">
        Why join Cinute Digital: mentor-led training, live projects, certifications, and placement
        assistance for career-ready skills in software testing, automation, data science, and AI/ML.
      </span>
    </section>
  );
}

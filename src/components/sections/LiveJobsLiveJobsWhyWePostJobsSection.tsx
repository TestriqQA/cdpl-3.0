"use client";

import { useState } from "react";
import { ShieldCheck, Users2, Rocket, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

/**
 * Non-hero typography aligned (no arbitrary px):
 * - Section H2 (non-hero): text-3xl sm:text-4xl font-extrabold text-slate-900
 * - Lead paragraph: text-lg (18px) text-slate-700
 * - KPI numbers: text-xl font-extrabold text-slate-900
 * - Card title: text-base (16px) font-extrabold text-slate-900
 * - Card body/points: text-sm (14px) text-slate-700
 * - Eyebrow/badges: text-xs
 */

type Pillar = {
  key: "verified" | "mentor" | "faster";
  title: string;
  desc: string;
  points: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const PILLARS: Pillar[] = [
  {
    key: "verified",
    title: "Verified Listings",
    desc:
      "We publish only curated, verified job openings so students don’t waste time on stale or ambiguous posts.",
    points: [
      "Human-verified company details & role expectations",
      "Clear application links and walk-in timing windows",
      "Locality tags so you can filter by nearby roles",
    ],
    Icon: ShieldCheck,
  },
  {
    key: "mentor",
    title: "Mentor Help",
    desc:
      "Mentors help you tailor resumes, align projects to job JD, and prep with the right problem-sets.",
    points: [
      "Resume + LinkedIn review for role keywords",
      "Portfolio/project mapping to JD requirements",
      "Mock interviews: QA automation, Data, Full-Stack, DevOps",
    ],
    Icon: Users2,
  },
  {
    key: "faster",
    title: "Faster Referrals",
    desc:
      "CDPL partners with hiring teams; qualified learners get faster callbacks and interview slots.",
    points: [
      "Partner-driven hotlists for urgent roles",
      "Shortlist nudges after assignment reviews",
      "Interview readiness checklist before you apply",
    ],
    Icon: Rocket,
  },
];

const THEMES: Record<
  Pillar["key"],
  {
    cardBg: string;
    border: string;
    iconWrapBg: string;
    iconColor: string;
    titleColor: string;
    bodyColor: string;
    listBulletColor: string;
    focusRing: string;
    detailsBtnBorder: string;
  }
> = {
  verified: {
    cardBg: "bg-orange-50",
    border: "border-orange-200",
    iconWrapBg: "bg-orange-100",
    iconColor: "text-brand",
    titleColor: "text-slate-900",
    bodyColor: "text-slate-800",
    listBulletColor: "text-slate-800",
    focusRing: "focus:ring-orange-400",
    detailsBtnBorder: "border-orange-200",
  },
  mentor: {
    cardBg: "bg-indigo-50",
    border: "border-indigo-200",
    iconWrapBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    titleColor: "text-slate-900",
    bodyColor: "text-slate-800",
    listBulletColor: "text-slate-800",
    focusRing: "focus:ring-indigo-300",
    detailsBtnBorder: "border-indigo-200",
  },
  faster: {
    cardBg: "bg-emerald-50",
    border: "border-emerald-200",
    iconWrapBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    titleColor: "text-slate-900",
    bodyColor: "text-slate-800",
    listBulletColor: "text-slate-800",
    focusRing: "focus:ring-emerald-300",
    detailsBtnBorder: "border-emerald-200",
  },
};

export default function JobsLiveJobsWhyWePostJobsSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <section aria-labelledby="why-cdpl-posts-jobs" className="relative overflow-hidden bg-white font-sans">
      {/* page backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, rgba(125,211,252,.12), rgba(157,123,255,.10))",
          }}
        />
        <div
          className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{ background: "rgba(234,88,12,.12)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Eyebrow */}
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          Why we post nearby jobs for CDPL students
        </p>

        {/* H2 + intro */}
        <div className="max-w-3xl">
          <h2
            id="why-cdpl-posts-jobs"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
          >
            Why CDPL posts <span className="text-brand">verified nearby jobs</span> for students
          </h2>
          <p className="mt-3 text-lg text-slate-700">
            We make job search simpler: CDPL curates active roles across{" "}
            <strong className="text-slate-900">QA Automation</strong>,{" "}
            <strong className="text-slate-900">Data Science</strong>,{" "}
            <strong className="text-slate-900">Full-Stack</strong> and{" "}
            <strong className="text-slate-900">DevOps</strong>, and pairs them with mentor guidance
            and hiring-partner referrals, so you can apply confidently and get to interview faster.
          </p>
        </div>

        {/* KPIs (numbers have different colors per card) */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: "60+", l: "Expert mentors", cls: "text-brand" },
            { v: "5000+", l: "Learners guided", cls: "text-indigo-600" },
            { v: "50+", l: "Hiring partners", cls: "text-emerald-600" },
            { v: "4.9/5", l: "Avg. mentor rating", cls: "text-sky-600" },
          ].map(({ v, l, cls }) => (
            <div
              key={l}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="mx-auto h-1 w-16 rounded-full bg-brand" />
              <p className={`mt-3 text-xl font-extrabold ${cls}`}>{v}</p>
              <p className="text-sm text-slate-600">{l}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {PILLARS.map(({ key, title, desc, points, Icon }) => {
            const isOpen = !!open[key];
            const t = THEMES[key];

            return (
              <div
                key={key}
                className={`relative overflow-hidden rounded-2xl border ${t.border} ${t.cardBg} p-5 shadow-sm transition hover:-translate-y-0.5`}
              >
                <div className="flex items-start gap-3">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ring-black/5 ${t.iconWrapBg}`}>
                    <Icon className={`h-5 w-5 ${t.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-base font-extrabold leading-snug ${t.titleColor}`}>{title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${t.bodyColor}`}>{desc}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className={`mt-3 inline-flex items-center gap-1 rounded-full border ${t.detailsBtnBorder} bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 transition hover:shadow-sm`}
                >
                  Details
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="mt-3 border-t border-black/5 pt-3">
                    {points.map((p) => (
                      <p key={p} className={`text-sm leading-relaxed ${t.listBulletColor}`}>
                        • {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/jobs/live-jobs"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ backgroundColor: "#ff8c00" }}
          >
            Explore nearby jobs <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm"
          >
            Get mentor help
          </Link>
        </div>
      </div>

    </section>
  );
}

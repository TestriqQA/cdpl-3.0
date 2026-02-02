"use client";

import React, { useState } from "react";
import { WhyEnrollItem } from "./types";
import { Zap, Code, Users, TrendingUp, ArrowRight } from "lucide-react";
import EnrollModal from "../EnrollModal";

const whyEnrollData: WhyEnrollItem[] = [
  {
    id: 1,
    title: "Dual Expertise: BI + Big Data",
    description:
      "Gain a rare and highly sought-after skill set, mastering both front-end data visualization (BI) and back-end data infrastructure (Big Data Engineering).",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Industry-Relevant Curriculum",
    description:
      "Designed by industry veterans, our curriculum focuses on the tools and techniques actively used by top tech companies today, ensuring job readiness.",
    icon: "Code",
  },
  {
    id: 3,
    title: "Hands-On Project Portfolio",
    description:
      "Build a robust portfolio of 10+ projects, including an end-to-end data pipeline, to showcase your capabilities to potential employers.",
    icon: "Users",
  },
  {
    id: 4,
    title: "Accelerated Career Growth",
    description:
      "Position yourself for high-paying roles like BI Analyst, Data Analyst, and Data Engineer, accelerating your career trajectory significantly.",
    icon: "TrendingUp",
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  Zap,
  Code,
  Users,
  TrendingUp,
};

interface EnrichedWhy extends WhyEnrollItem {
  highlight: string;
  bgColor: string;
  borderColor: string;
}

const enrichedWhy: EnrichedWhy[] = whyEnrollData.map((item) => {
  switch (item.id) {
    case 1:
      return {
        ...item,
        highlight: "Full-Stack Data Skills",
        bgColor: "from-teal-50 to-teal-100",
        borderColor: "border-teal-300",
      };
    case 2:
      return {
        ...item,
        highlight: "Job-Ready Curriculum",
        bgColor: "from-blue-50 to-blue-100",
        borderColor: "border-blue-300",
      };
    case 3:
      return {
        ...item,
        highlight: "Portfolio Building",
        bgColor: "from-emerald-50 to-emerald-100",
        borderColor: "border-emerald-300",
      };
    case 4:
      return {
        ...item,
        highlight: "High-Growth Careers",
        bgColor: "from-amber-50 to-amber-100",
        borderColor: "border-amber-300",
      };
    default:
      return {
        ...item,
        highlight: "Career Advantage",
        bgColor: "from-slate-50 to-slate-100",
        borderColor: "border-slate-300",
      };
  }
});

const WhyEngineerProgram: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-10 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header – content kept same, layout styled like reference */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-[#0f766e] uppercase">
            The Competitive Edge
          </h2>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            BI & Big Data Engineering: Build a Future-Proof Career
          </h3>
          <p className="mx-auto mt-4 max-w-4xl text-lg text-slate-600">
            In 2026, the distinction between a <strong>bi data analyst</strong> and a <strong>data engineer</strong> is blurring. Companies like Amazon and Google seek &quot;Full-Stack&quot; professionals.
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-sm text-slate-500">
            Whether you&apos;re looking for <strong>data analytics iit</strong>-level depth or <strong>iim business analytics</strong> business logic, our <strong>Data Analytics with BI and Big Data Engineering Master Program</strong> delivers it right here in Mumbai for <strong>bi data analyst</strong> and <strong>certified data engineer</strong> aspirants.
          </p>
        </div>

        {/* Cards Grid – same layout & design pattern as reference section */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {enrichedWhy.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`group rounded-xl border-2 ${item.borderColor} bg-gradient-to-br ${item.bgColor} p-6 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Icon Container */}
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white/60 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <div className="text-[#0f766e]">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>

                {/* Title (unchanged content) */}
                <h4 className="mb-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h4>

                {/* Highlight Badge (new SEO-friendly micro-copy) */}
                <div className="mb-3 inline-block">
                  <span className="rounded-full bg-teal-100/70 px-3 py-1 text-xs font-semibold text-[#0f766e]">
                    {item.highlight}
                  </span>
                </div>

                {/* Description (unchanged content) */}
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SEO-Rich “Why This Matters” Block */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white md:p-12">
          <div className="max-w-3xl">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Become a Full-Stack Data Professional in BI & Big Data
            </h3>
            <p className="mb-6 leading-relaxed text-slate-200">
              Most courses focus only on{" "}
              <strong>data analytics</strong> or only on{" "}
              <strong>data engineering</strong>. This{" "}
              <strong>Data Analytics with BI and Big Data Engineering Master Program</strong>{" "}
              uniquely combines <strong>Business Intelligence dashboards, reporting, and data
                visualization</strong> with <strong>Big Data infrastructure, ETL workflows, and
                  scalable data pipelines</strong>. You don&apos;t just learn tools—you learn how to
              design complete, end-to-end <strong>analytics solutions</strong> that employers need
              today.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-teal-400">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Full Career Stack: Analyst to Engineer
                  </p>
                  <p className="text-sm text-slate-300">
                    Build capabilities for <strong>BI Analyst</strong>,{" "}
                    <strong>Data Analyst</strong>, and <strong>Data Engineer</strong> roles with
                    one integrated master program.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-teal-400">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Real Projects & Hiring-Focused Training
                  </p>
                  <p className="text-sm text-slate-300">
                    Work on <strong>10+ hands-on projects</strong>, including end-to-end{" "}
                    <strong>data pipelines, BI dashboards, and Big Data use cases</strong>, and
                    showcase them in your portfolio for interviews.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-300 sm:text-sm">
              Keywords: Data Analytics with BI and Big Data Engineering • Business Intelligence
              and Data Engineering Master Program • BI Analyst and Data Engineer Course • End-to-End
              Data Pipeline Training • Job-Oriented BI and Big Data Course • High-Paying Analytics
              and Data Engineering Careers • Placement Support for BI & Big Data Roles.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - Why Section - Start Journey"
        courseName={courseName}
      />
    </section>
  );
};

export default WhyEngineerProgram;

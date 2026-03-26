"use client";

import React, { useState } from "react";
import { StatItem } from "./types";
import { Clock, DollarSign, TrendingUp, Award } from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";

const statsData: StatItem[] = [
  { id: 1, value: "5.5", label: "Months Duration", icon: "Clock" },
  { id: 2, value: "155", label: "Hours of Intensive Training", icon: "Award" },
  {
    id: 3,
    value: "40%+",
    label: "Projected Job Growth in Data Engineering",
    icon: "TrendingUp",
  },
  {
    id: 4,
    value: "₹ 12 LPA",
    label: "Average Salary Hike for Certified Engineers",
    icon: "DollarSign",
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  Clock,
  Award,
  TrendingUp,
  DollarSign,
};

interface EnrichedStat extends StatItem {
  description: string;
  bgGradient: string;
  iconBg: string;
  ariaLabel: string;
}

const enrichedStats: EnrichedStat[] = statsData.map((stat) => {
  switch (stat.id) {
    case 1:
      return {
        ...stat,
        description:
          "5.5-month structured Data Analytics Program Mumbai designed for working professionals seeking Data Engineering Certifications.",
        bgGradient: "from-teal-50 to-teal-100",
        iconBg: "bg-teal-500",
        ariaLabel: "Program duration 5.5 months",
      };
    case 2:
      return {
        ...stat,
        description:
          "155 hours of intensive, mentor-led training. Master SQL in data analytics, Python, and Big Data Engineering concepts.",
        bgGradient: "from-emerald-50 to-emerald-100",
        iconBg: "bg-emerald-500",
        ariaLabel: "155 hours of training",
      };
    case 3:
      return {
        ...stat,
        description:
          "40%+ projected growth for SQL Data Analyst and Big Data Engineer roles in India's top tech hubs.",
        bgGradient: "from-sky-50 to-sky-100",
        iconBg: "bg-sky-500",
        ariaLabel: "40% job growth",
      };
    case 4:
      return {
        ...stat,
        description:
          "Average salary hike of up to ₹12 LPA. Top option for Software Engineer Jobs in Mumbai aspirants.",
        bgGradient: "from-yellow-50 to-amber-100",
        iconBg: "bg-amber-500",
        ariaLabel: "12 LPA salary hike",
      };
    default:
      return {
        ...stat,
        description: "",
        bgGradient: "from-slate-50 to-slate-100",
        iconBg: "bg-slate-500",
        ariaLabel: stat.label,
      };
  }
});


const StatsSection: React.FC = () => {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section
      className="py-10 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="stats-heading"
    >


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center md:mb-16">
          <h2
            id="stats-heading"
            className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            Program Highlights &{" "}
            <span className="text-[#0f766e]">
              Data Engineering Certifications
            </span>
          </h2>

          <p className="mx-auto max-w-4xl text-base text-slate-600 sm:text-lg">
            Why settle for less? Join the best institute for data analytics. Our Data Analytics Program Mumbai delivers in-demand skills in SQL analytics, BI and Big Data Engineering, preparing you for top Software Engineer Jobs in Mumbai.
          </p>
        </header>

        {/* Stats Grid – same layout style as reference section */}
        <ul
          className="mb-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:mb-14"
          aria-label="Program statistics"
        >
          {enrichedStats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <li key={stat.id} className="h-full">
                <article
                  tabIndex={0}
                  aria-label={stat.ariaLabel}
                  className={`h-full rounded-2xl border border-slate-200 bg-gradient-to-br ${stat.bgGradient} p-5 shadow-sm outline-none transition-all duration-300 hover:border-teal-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-teal-300 sm:p-6`}
                >
                  {/* Icon */}
                  <div
                    className={`${stat.iconBg} mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {/* Value */}
                  <div className="mb-1">
                    <p className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                      {stat.value}
                    </p>
                  </div>

                  {/* Label */}
                  <h3 className="mb-1 text-base font-semibold text-slate-800 sm:text-lg">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {stat.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Extra SEO line */}
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-slate-600 sm:text-base">
          <em>Business Intelligence course in India</em>,{" "}
          <em>Big Data Engineering training</em>,{" "}
          <em>Data Analytics with BI master program</em>,{" "}
          <em>Data Engineer and BI Developer jobs</em>,{" "}
          <em>high-paying analytics careers</em>,{" "}
          <em>job-oriented data engineering certification with placement
            assistance</em>.
        </p>

        {/* SEO-Rich Key Insight Block */}
        <div className="mt-10 rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-teal-50 via-white to-sky-50 p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500 text-white"
                aria-hidden="true"
              >
                <span className="text-xl">💡</span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                BI & Big Data Engineering: Build a Future-Proof Career in the
                Data Economy
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Modern enterprises in banking, healthcare, and e-commerce rely on Data Engineers and SQL Data Analysts to design scalable data pipelines. This BI and Big Data Engineering master program bridges the skills gap with real-world projects—so you can confidently target Data Engineer, BI Developer, and Analytics Engineer roles.
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    End-to-end stack: BI tools, SQL, data
                    warehousing, ETL, Big Data technologies, and cloud data
                    engineering basics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    Industry projects: build dashboards, data
                    pipelines, and reporting solutions using real business
                    scenarios
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    Career support: resume optimization, mock
                    interviews, LinkedIn profile review, and job assistance for
                    BI & Data Engineering roles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    Flexible learning: weekend / evening
                    batches, online and classroom options for working
                    professionals and students
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-xs text-slate-600 sm:text-sm">
                Keywords: Best Institute for Data Analytics, SQL Data Analyst, Bi and Big Data Engineering, IIM Business Analytics, Data Analytics Program Mumbai, Data Engineering Certifications, How to Become Data Analyst in India.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
          >
            Book a Free Career Session
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Engineering Course Page - Stats Section - Career Session"
        courseName={courseName}
      />
    </section>
  );
};

export default StatsSection;

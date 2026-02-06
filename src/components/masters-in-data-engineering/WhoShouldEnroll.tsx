"use client";

import React, { useState } from "react";
import { WhoShouldEnrollItem } from "./types";
import { User, GraduationCap, RefreshCw, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import EnrollModal from "../EnrollModal";

const enrollmentCriteria: WhoShouldEnrollItem[] = [
  {
    id: 1,
    title: "IT Professionals",
    description:
      "Transition from support to Software Engineer Jobs in Mumbai. Master BI and Big Data Engineering.",
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Recent Graduates",
    description:
      "Kickstart your career as a SQL Data Analyst. Learn SQL for Data Analytics from scratch.",
    icon: "GraduationCap",
  },
  {
    id: 3,
    title: "BI Analysts & Data Analysts",
    description:
      "Upgrade to Big Data. Move beyond basic reporting to Data Engineering Certifications roles.",
    icon: "RefreshCw",
  },
  {
    id: 4,
    title: "Career Changers",
    description:
      "Non-tech background? Our Data Analytics Program Mumbai makes you a Certified Data Engineer.",
    icon: "User",
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  RefreshCw: RefreshCw,
  User: User,
};

// Extra "requirements" for each audience segment (for layout like reference)
const audienceRequirements: Record<number, string[]> = {
  1: [
    "Basic understanding of software development or IT workflows",
    "Interest in Data Analytics, BI, or Big Data Engineering roles",
    "Willingness to learn tools like SQL, Python, Power BI, and Spark",
  ],
  2: [
    "Strong desire to build a job-ready, practical skill set",
    "Comfort with basic logic, math, or programming concepts",
    "Commitment to hands-on labs, capstone projects, and mock interviews",
  ],
  3: [
    "Existing experience in BI or data analysis (reports/dashboards)",
    "Curiosity about Big Data tools like Hadoop, Spark, and Databricks",
    "Goal to move into senior BI Engineer or Data Engineer positions",
  ],
  4: [
    "Basic knowledge of programming or databases (any language/SQL)",
    "Open mindset to switch into the data analytics & engineering domain",
    "Motivation to follow a structured Data Analytics with BI & Big Data roadmap",
  ],
};

const prerequisites = [
  {
    category: "Essential",
    items: [
      "Comfort using a computer and web-based tools",
      "Interest in working with numbers, reports, and business data",
      "Laptop/PC with stable internet connection",
    ],
  },
  {
    category: "Recommended",
    items: [
      "Basic SQL or spreadsheet (Excel/Google Sheets) knowledge",
      "Familiarity with any programming language (Python preferred)",
      "Understanding of basic statistics and business metrics",
    ],
  },
  {
    category: "Nice to Have",
    items: [
      "Prior exposure to BI tools like Excel, Tableau, or Power BI",
      "Awareness of cloud platforms such as AWS, Azure, or GCP",
      "Experience with any analytics or reporting projects in your domain",
    ],
  },
];

const successFactors = [
  {
    title: "Regular Practice",
    description:
      "Allocate consistent time for SQL Analytics and Big Data Engineering labs.",
    icon: "⏰",
  },
  {
    title: "Active Participation",
    description:
      "Engage in discussions for Data Analytics Program Mumbai topics.",
    icon: "🤝",
  },
  {
    title: "Project-First Mindset",
    description:
      "Complete all real-world projects to build a strong portfolio in BI and Big Data Engineering.",
    icon: "🎯",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay updated with new tools and Certifications for Data Engineers.",
    icon: "📚",
  },
];

const WhoShouldEnroll: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header – text kept same, styling upgraded */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-[#0f766e] uppercase">
            Eligibility & Prerequisites
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Who Needs This <span className="text-[#0f766e]">Data Engineer Certification</span>?
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Wondering how to become a data analyst in India or transition to Big Data? This is your path.
          </p>
          <p className="mt-3 text-sm text-slate-700 max-w-3xl mx-auto">
            Whether you&apos;re an IT professional,{" "}
            recent graduate,{" "}
            BI / Data Analyst, or{" "}
            career changer, this{" "}
            Data Analytics with BI and Big Data Engineering Master Program{" "}
            gives you a structured path toward{" "}
            <em>high-paying data analytics, BI, and data engineering jobs</em>.
          </p>
        </div>

        {/* Audience Segments – layout inspired by reference section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {enrollmentCriteria.map((item) => {
            const Icon = iconMap[item.icon];
            const requirements = audienceRequirements[item.id] || [];
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-teal-50 border border-teal-200 p-4 text-[#0f766e]">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>

                {/* Title (unchanged) */}
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>

                {/* Description (unchanged) */}
                <p className="text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Requirements list (new, SEO friendly) */}
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-3">
                    What You Need:
                  </p>
                  <ul className="space-y-2">
                    {requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prerequisites Section – dark band like reference */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Prerequisites & Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prerequisites.map((prereq, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-teal-300 mb-4">
                  {prereq.category}
                </h4>
                <ul className="space-y-3">
                  {prereq.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3">
                      <span className="text-teal-300 mt-1">✓</span>
                      <span className="text-slate-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-300 sm:text-sm">
            Ideal for learners aiming for{" "}
            Business Intelligence, Data Analytics, and Big Data Engineering{" "}
            careers with technologies like <em>SQL, Python, Power BI, Tableau,
              Hadoop, Spark, Databricks, and cloud platforms</em>.
          </p>
        </div>

        {/* Success Factors */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Keys to Success in This Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successFactors.map((factor, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{factor.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {factor.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600 sm:text-sm">
            Keywords: Who should enroll in Data Analytics with BI and Big Data Engineering •
            IT professionals transitioning to data engineering • recent graduates looking
            for data analytics jobs • BI analysts upskilling to Big Data roles • career
            changers entering the data field.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer"
          >
            Check Your Eligibility
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - Who Should Enroll - Check Eligibility"
        courseName={courseName}
      />
    </section>
  );
};

export default WhoShouldEnroll;

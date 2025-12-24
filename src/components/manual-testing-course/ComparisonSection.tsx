"use client";

// components/ComparisonSection.tsx
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

type Badge = { label: string; colorClasses: string };

interface ComparisonRow {
  feature: string;
  oursNote: string;
  otherNote: string;
}

export interface ComparisonSectionProps {
  enrollHref?: string;
  curriculumHref?: string;
  providerName?: string;
  showSchema?: boolean;
  className?: string;
}

const badges: Badge[] = [
  {
    label: "Industry Mentors (FAANG & Fortune 500)",
    colorClasses: "bg-indigo-50 text-indigo-800 border-indigo-200",
  },
  {
    label: "Capstone Projects & Real Defect Reports",
    colorClasses: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  {
    label: "Interview Prep & Mock HR/Tech Rounds",
    colorClasses: "bg-cyan-50 text-cyan-800 border-cyan-200",
  },
  {
    label: "Hiring Partners & Referral Network",
    colorClasses: "bg-amber-50 text-amber-900 border-amber-200",
  },
];

const rows: ComparisonRow[] = [
  {
    feature: "Curriculum Depth (ISTQB, STLC, Test Design, RTM, Jira, TestRail)",
    oursNote: "End-to-end, industry-mapped",
    otherNote: "Surface-level modules",
  },
  {
    feature: "Live Projects & Defect Lifecycle (E-commerce, Banking, Healthcare)",
    oursNote: "Portfolio-grade artifacts",
    otherNote: "Simulated only",
  },
  {
    feature: "Mentorship & Doubt Clearing",
    oursNote: "1:1 + group clinics",
    otherNote: "Forum-only support",
  },
  {
    feature: "Placement Support & Referrals",
    oursNote: "Resume, ATS, referrals, mock rounds",
    otherNote: "Generic tips",
  },
  {
    feature: "Interview Prep (Manual + Agile + Bug Reporting)",
    oursNote: "Question bank + mock panel",
    otherNote: "Limited set",
  },
  {
    feature: "Tools Mastery (Jira, TestRail, Postman basics, Confluence)",
    oursNote: "Hands-on workflows",
    otherNote: "Slides/overviews",
  },
  {
    feature: "Career Services (LinkedIn Optimization, GitHub Portfolio, HR Pitch)",
    oursNote: "Personalized coaching",
    otherNote: "Self-serve",
  },
  {
    feature: "Schedule & Flexibility",
    oursNote: "Live + recordings + weekend sprints",
    otherNote: "Fixed pace",
  },
  {
    feature: "ROI & Outcomes",
    oursNote: "Job-ready in ~12 weeks",
    otherNote: "Unclear outcomes",
  },
];

const CheckIcon = () => (
  <span
    aria-hidden="true"
    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100"
  >
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-emerald-600">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.793-6.793a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const DashIcon = () => (
  <span
    aria-hidden="true"
    className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-100"
  >
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-rose-600">
      <path fillRule="evenodd" d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  </span>
);

const Dot = ({ className = "bg-indigo-600" }: { className?: string }) => (
  <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${className}`} />
);

export default function ComparisonSection({
  className = "",
}: ComparisonSectionProps) {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <section className={`py-10 bg-white ${className}`} id="comparison" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 id="comparison-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Compare Our Job-Ready <span className="text-blue-700">Manual Testing Course vs. Typical Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Transparent comparison to help you choose the best <strong>QA training with placement support</strong>, live
            projects, and <strong>ISTQB-aligned curriculum</strong>.
          </p>
        </div>

        {/* Top Key Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {badges.map((b) => (
            <div
              key={b.label}
              className={`border ${b.colorClasses} rounded-xl px-4 py-3 text-sm md:text-base font-medium text-center shadow-sm`}
            >
              {b.label}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="px-6 pt-6 pb-2 flex flex-col lg:flex-row lg:items-end gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900">Side-by-Side Feature Comparison</h3>
              <p className="text-gray-600 mt-1">
                What you actually get with our <strong>job-ready QA course</strong> vs. a typical online class.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-700">
                <span className="inline-block animate-pulse h-2.5 w-2.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-t border-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Our Program
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Typical Course
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50/60">
                    <th scope="row" className="px-6 py-5 align-top text-gray-900 font-medium">
                      {row.feature}
                    </th>
                    <td className="px-6 py-5 align-top">
                      <div className="flex items-start gap-2">
                        <CheckIcon />
                        <span className="text-gray-800">{row.oursNote}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="flex items-start gap-2">
                        <DashIcon />
                        <span className="text-gray-700">{row.otherNote}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Our Program */}
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 md:p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-gray-900">Our Job-Ready QA Program</h4>
                <span className="text-xs font-semibold px-2.5 py-1 animate-pulse rounded-full bg-indigo-600 text-white shadow-sm">
                  Best Value
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-gray-800">
                {[
                  "Complete Manual Testing curriculum aligned with ISTQB",
                  "Live mentorship, doubt clearing, and project reviews",
                  "Real-world case studies (E-commerce, Banking, Healthcare)",
                  "Placement assistance, ATS-optimized resume & LinkedIn",
                  "Mock interviews (HR + Technical) with feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot className="bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="cursor-pointer inline-flex justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                >
                  Enroll Now — Become a QA Tester
                </button>
                <Link
                  href="#curriculum"
                  className="inline-flex justify-center rounded-xl border border-indigo-200 px-5 py-3 text-indigo-700 font-semibold hover:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100"
                >
                  View Curriculum
                </Link>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Keywords:{" "}
                <em>manual testing course, QA training with placement, software testing institute, ISTQB coaching</em>
              </p>
            </div>

            {/* Typical Course */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-xl font-semibold text-gray-900">Typical Online Course</h4>
              <ul className="mt-4 space-y-3 text-gray-700">
                {[
                  "Recorded-only lectures, minimal hands-on",
                  "Little or no mentorship / feedback",
                  "Limited project scope and artifacts",
                  "No dedicated placement assistance",
                  "Generic interview preparation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot className="bg-gray-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs strip for extra SEO */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Is this manual testing course good for freshers?",
              a: "Yes. No coding required. We start from foundations and build up to job-ready skills in 12 weeks.",
            },
            {
              q: "Do you provide placement support?",
              a: "Yes. Resume, ATS optimization, LinkedIn, referrals, and mock interviews with feedback.",
            },
            {
              q: "Is the curriculum aligned to ISTQB?",
              a: "Yes. We cover STLC, test design techniques, documentation, and real bug reporting workflows.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h5 className="font-semibold text-gray-900">{item.q}</h5>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Structured Data for SEO */}

      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Manual Testing"
      />
    </section>
  );
}

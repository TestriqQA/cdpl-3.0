"use client";

// src/components/WhoShouldEnroll.tsx
import React, { useState } from 'react';
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import { CheckCircle, CloudDownload } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface AudienceSegment {
  title: string;
  description: string;
  icon: string;
  requirements: string[];
}

interface PrerequisiteGroup {
  category: string;
  items: string[];
}

interface SuccessFactor {
  title: string;
  description: string;
  icon: string;
}

export const WhoShouldEnroll: React.FC = () => {
  const { who_should_enroll_section } = content;
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  const audiences: AudienceSegment[] = [
    {
      title: "Students & Fresh Graduates in Data and Analytics",
      description: who_should_enroll_section.target_audience[0],
      icon: "🎓",
      requirements: [
        "Interest in data analytics, R programming, and business intelligence",
        "Basic understanding of maths or statistics (helpful but not mandatory)",
        "Willingness to build a strong portfolio with hands-on R projects",
      ],
    },
    {
      title: "Working Professionals & Upskilling Analysts",
      description: who_should_enroll_section.target_audience[1],
      icon: "📈",
      requirements: [
        "Motivation to switch or grow into data analyst / data scientist roles",
        "Basic familiarity with spreadsheets, dashboards, or reporting tools",
        "Readiness to learn R for data visualization, forecasting, and BI",
      ],
    },
    {
      title: "Career Changers from Non-Technical Backgrounds",
      description: who_should_enroll_section.target_audience[2],
      icon: "💼",
      requirements: [
        "Domain expertise in fields like finance, marketing, HR, operations, or healthcare",
        "Curiosity about data-driven decision making and analytics",
        "Commitment to learning R, data visualization, and statistical modeling step-by-step",
      ],
    },
    {
      title: "Engineers, Programmers & Tech Enthusiasts",
      // ✅ Fixed typo here
      description: who_should_enroll_section.target_audience[3],
      icon: "🤖",
      requirements: [
        "Interest in machine learning, AI, and advanced analytics using R",
        "Comfort with basic programming concepts (variables, loops, logic)",
        "Desire to build end-to-end data science and visualization solutions in R",
      ],
    },
  ];

  const prerequisites: PrerequisiteGroup[] = [
    {
      category: "Essential",
      items: [
        "Basic comfort with working on a computer and the internet",
        "Interest in data analytics, data visualization, and problem solving",
        "Laptop or desktop with R and RStudio (or ability to install them)",
      ],
    },
    {
      category: "Recommended",
      items: [
        "Basic statistics knowledge (mean, median, variance, correlation)",
        "Familiarity with Excel, Google Sheets, or any spreadsheet tool",
        "Understanding of business metrics, KPIs, or reporting basics",
      ],
    },
    {
      category: "Nice to Have",
      items: [
        "Prior exposure to any programming language (R, Python, SQL, etc.)",
        "Awareness of BI tools, dashboards, or data storytelling concepts",
        "Curiosity to explore machine learning, forecasting, and predictive models",
      ],
    },
  ];

  const successFactors: SuccessFactor[] = [
    {
      title: "Consistent Hands-On Practice",
      description:
        "Dedicate regular time to coding in R, working with datasets, and building visualizations and dashboards.",
      icon: "⏰",
    },
    {
      title: "Active Doubt-Solving & Participation",
      description:
        "Engage in live sessions, ask questions, participate in discussions, and clarify every R and data concept.",
      icon: "🤝",
    },
    {
      title: "Real-World Project Focus",
      description:
        "Complete all capstone and case-study projects to build a strong data analytics and visualization portfolio in R.",
      icon: "🎯",
    },
    {
      title: "Continuous Learning & Industry Awareness",
      description:
        "Stay updated with the latest trends in data science, BI, and machine learning, and keep refining your R skills.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {who_should_enroll_section.title}{" "}
            <span className="text-brand">for R Data Visualization</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {/* original line preserved */}
            This program is tailored for individuals ready to specialize in Machine Learning and Data Visualization using R.{" "}
            <span className="font-medium">
              Ideal for students, fresh graduates, working professionals, and career switchers who want to build
              job-ready skills in{" "}
              <strong>R programming</strong>,{" "}
              <strong>data analytics</strong>,{" "}
              <strong>business intelligence (BI)</strong>, and{" "}
              <strong>data science</strong>.
            </span>
          </p>
        </div>

        {/* Audience Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {audiences.map((audience, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{audience.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>

              {/* Description (from content.target_audience) */}
              <p className="text-slate-600 leading-relaxed mb-5">
                {audience.description}
              </p>

              {/* Requirements */}
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-3">
                  What You Need:
                </p>
                <ul className="space-y-2">
                  {audience.requirements.map((req, ridx) => (
                    <li
                      key={ridx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Prerequisites Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Prerequisites & Requirements for R Data Visualization & Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prerequisites.map((prereq, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-orange-400 mb-4">
                  {prereq.category}
                </h4>
                <ul className="space-y-3">
                  {prereq.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">✓</span>
                      <span className="text-slate-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-300">
            With these fundamentals in place, you&apos;ll be fully prepared to
            learn <strong>R for data science</strong>, build{" "}
            <strong>interactive dashboards</strong>, and create{" "}
            <strong>insightful data visualizations</strong> that drive
            business decisions.
          </p>
        </div>

        {/* Success Factors + Program Outcome */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Keys to Success & Program Outcome
          </h3>

          {/* Success Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {successFactors.map((factor, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">
                  {factor.icon}
                </div>
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

          {/* Program Outcome (from content.outcome) */}
          <div className="mt-4 p-5 bg-white rounded-xl border border-orange-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="text-orange-500">🎓</span>
              <span>Your Program Outcome</span>
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {who_should_enroll_section.outcome}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Check Eligibility & Apply
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-orange-400 hover:text-brand hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <CloudDownload className="mr-2 h-5 w-5" />
            Download Detailed Syllabus (PDF)
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - Who Should Enroll Section - Check Eligibility"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Who Should Enroll Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

"use client";

// src/components/CurriculumSection.tsx
import React, { useState } from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import {
  ChevronDown,
  BookOpen,
  CloudDownload,
  ArrowRight,
} from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface CurriculumModule {
  title: string;
  topics: string[];
  duration?: string;
  projects?: string[];
}

export const CurriculumSection: React.FC = () => {
  const { curriculum_section } = content;
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  const modules = curriculum_section.modules as CurriculumModule[];

  // Soft gradient colors per module (like your reference section)
  const moduleColors = [
    "from-blue-50 to-blue-100",
    "from-purple-50 to-purple-100",
    "from-green-50 to-green-100",
    "from-orange-50 to-orange-100",
    "from-red-50 to-red-100",
    "from-cyan-50 to-cyan-100",
    "from-indigo-50 to-indigo-100",
  ];

  // Emoji icons per module (for visual appeal + consistent with reference)
  const moduleEmojis = ["📊", "📈", "📉", "📑", "📚", "🧮", "🧠", "📌"];

  const handleToggle = (idx: number) => {
    setExpandedModule(expandedModule === idx ? null : idx);
  };

  return (
    <section
      id="curriculum"
      className="py-10 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {curriculum_section.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-brand">
              {curriculum_section.title.split(" ").slice(-1)}
            </span>
          </h2>

          {/* Original description */}
          <p className="text-lg text-slate-600 max-w-6xl mx-auto">
            {curriculum_section.description}
          </p>

          {/* Extra SEO-optimized copy */}
          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-5xl mx-auto">
            This{" "}
            <strong>Data Visualization in R Programming course</strong> is
            carefully structured to help you{" "}
            <strong>
              master R for data analysis, statistical modeling, and
              business-ready dashboards
            </strong>
            . You’ll learn how to work with real-world datasets, build
            <strong> publication-ready charts, graphs, and reports in R</strong>
            , and apply{" "}
            <strong>R data science techniques for analytics, BI, and decision-making</strong>.
          </p>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-4xl mx-auto">
            Ideal for{" "}
            <strong>
              data analysts, aspiring data scientists, business analysts, and
              working professionals
            </strong>{" "}
            who want to upskill with{" "}
            <strong>R programming, data visualization, and analytics tools</strong>{" "}
            used in modern <strong>data science and BI projects</strong>.
          </p>
        </div>

        {/* Modules List – layout + design like your reference section */}
        <div className="space-y-4 mb-12">
          {modules.map((module, index) => {
            const color =
              moduleColors[index % moduleColors.length] ||
              "from-blue-50 to-blue-100";
            const iconEmoji =
              moduleEmojis[index % moduleEmojis.length] || "📊";
            const isExpanded = expandedModule === index;

            return (
              <div
                key={index}
                className={`bg-gradient-to-r ${color} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
              >
                {/* Module Header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-3xl">{iconEmoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Module {index + 1}: {module.title}
                      </h3>
                      {module.duration && (
                        <p className="text-sm text-slate-600 mt-1">
                          {module.duration}
                        </p>
                      )}
                      {!module.duration && (
                        <p className="text-sm text-slate-600 mt-1">
                          Structured, instructor-led{" "}
                          <strong>R programming & data visualization</strong>{" "}
                          session
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-brand transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Module Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 bg-white/60">
                    {/* Topics Covered */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-brand" />
                        Topics Covered in this R Module
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <span className="text-orange-500 font-bold mt-0.5">
                              •
                            </span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional projects if they exist in content */}
                    {module.projects && module.projects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🚀</span>
                          Hands-On Projects in R
                        </h4>
                        <ul className="space-y-2">
                          {module.projects.map((project, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200"
                            >
                              <span className="text-brand font-bold">
                                →
                              </span>
                              <span className="text-slate-700">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Small SEO line inside expanded content */}
                    <p className="mt-4 text-xs text-slate-500">
                      This module strengthens your{" "}
                      <strong>R data visualization skills</strong> with
                      practical, industry-relevant examples and{" "}
                      <strong>hands-on coding in R Studio</strong>.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Learning Outcomes – SEO-focused block */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            What You&apos;ll Master in This R Data Visualization Course
          </h3>
          <p className="text-sm md:text-base text-slate-700 mb-6 max-w-4xl">
            By the end of this{" "}
            <strong>Data Visualization in R Programming masterclass</strong>, you
            will be able to confidently analyze data, build{" "}
            <strong>R visualizations, dashboards, and reports</strong>, and
            apply <strong>R for real-world data science projects</strong> in
            analytics, business intelligence, and decision-making roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "R for Data Analysis",
                description:
                  "Use R programming to import, clean, transform, and analyze structured datasets for business and research use cases.",
              },
              {
                title: "Statistical & Visual Insights",
                description:
                  "Apply statistical techniques and create clear, insight-driven charts, graphs, and plots to communicate findings.",
              },
              {
                title: "Industry-Ready Dashboards",
                description:
                  "Design professional, presentation-ready visualizations and dashboards in R that recruiters and stakeholders love.",
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border border-orange-200 shadow-sm"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  {outcome.title}
                </h4>
                <p className="text-sm text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>

          {/* Extra keyword-rich line for SEO */}
          <p className="mt-6 text-xs md:text-sm text-slate-600 max-w-4xl">
            Perfect for learners searching for a{" "}
            <strong>“Data Visualization in R course”</strong>,{" "}
            <strong>“R programming for data analysis”</strong>, or{" "}
            <strong>“R data science training with projects”</strong>, this
            curriculum is crafted to be both{" "}
            <strong>job-ready and industry-aligned</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-orange-400 hover:text-brand hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <CloudDownload className="mr-2 h-5 w-5" />
            Download Syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - Curriculum Section - Apply Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Curriculum Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

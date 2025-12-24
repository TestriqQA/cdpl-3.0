"use client";

// src/components/WhyEnrollSection.tsx
import React, { useState } from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import {
  Code,
  Rocket,
  UserCheck,
  Globe,
  Briefcase,
  MessageSquare,
  ArrowRight,
  CloudDownload,
} from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const iconMap = {
  Code,
  Rocket,
  UserCheck,
  Globe,
  Briefcase,
  MessageSquare,
};

type IconKey = keyof typeof iconMap;

interface HighlightPoint {
  icon: IconKey | string; // flexible if content uses raw strings
  title: string;
  description: string;
}

interface HighlightCardProps {
  point: HighlightPoint;
  index: number;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ point, index }) => {
  const IconComponent = iconMap[point.icon as IconKey] || iconMap.Code;

  // Color palettes similar to the reference "WhyAnalyticsPythonProgram" section
  const bgGradients = [
    "from-amber-50 to-amber-100",
    "from-blue-50 to-blue-100",
    "from-green-50 to-green-100",
    "from-purple-50 to-purple-100",
    "from-red-50 to-red-100",
    "from-cyan-50 to-cyan-100",
    "from-orange-50 to-orange-100",
    "from-indigo-50 to-indigo-100",
  ];

  const borderColors = [
    "border-amber-300",
    "border-blue-300",
    "border-green-300",
    "border-purple-300",
    "border-red-300",
    "border-cyan-300",
    "border-orange-300",
    "border-indigo-300",
  ];

  const bgColor = bgGradients[index % bgGradients.length];
  const borderColor = borderColors[index % borderColors.length];

  return (
    <div
      className={`bg-gradient-to-br ${bgColor} rounded-xl p-6 border-2 ${borderColor} hover:shadow-xl transition-all duration-300 group`}
    >
      {/* Icon Container */}
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 backdrop-blur-sm group-hover:scale-110 transition-transform">
        <IconComponent className="w-8 h-8 text-orange-600" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {point.title}
      </h3>

      {/* Highlight Badge – generic, does not alter original content */}
      <div className="inline-block mb-3">
        <span className="text-xs font-semibold text-orange-600 bg-orange-100/60 px-3 py-1 rounded-full">
          R Data Visualization Advantage
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed">
        {point.description}
      </p>
    </div>
  );
};

export const WhyRSection: React.FC = () => {
  const { why_enroll_section } = content;
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {why_enroll_section.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Invest in your future with a program designed by industry leaders to
            ensure you are job-ready.
          </p>
          {/* Extra SEO copy (adds keywords without changing original line) */}
          <p className="mt-3 text-base text-slate-600 max-w-4xl mx-auto">
            This R programming course for data visualization and analytics helps
            you master <strong>R, ggplot2, dplyr, tidyverse, and advanced data storytelling</strong>.
            Whether you are a student, data analyst, business analyst, or aspiring
            data scientist, you&apos;ll learn how to convert complex datasets into
            clear, interactive charts, dashboards, and business-ready reports using R.
          </p>
          <p className="mt-2 text-sm text-slate-500 max-w-4xl mx-auto">
            Keywords: R programming course, data visualization in R, R for data science,
            ggplot2 training, tidyverse analytics, R programming classes in Mumbai,
            job-oriented R course, business analytics with R, statistics with R, R
            course for beginners and professionals.
          </p>
        </div>

        {/* Highlights Grid – design/layout matches reference section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {why_enroll_section.points.map(
            (point: HighlightPoint, index: number) => (
              <HighlightCard key={index} point={point} index={index} />
            )
          )}
        </div>

        {/* Why This Matters Section – SEO rich block like reference */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Build a High-Demand Career with R Programming &amp; Data Visualization
            </h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              Our R data visualization and analytics program is crafted to help you
              become a <strong>job-ready data professional</strong>. You&apos;ll learn how to
              clean, analyze, and visualize data using R, <strong>ggplot2, dplyr, tidyverse</strong>,
              and other industry-standard libraries. From exploratory data analysis to
              building insightful dashboards and BI-style reports, you&apos;ll gain
              practical skills that employers look for in <strong>data analyst, business analyst,
                and data science roles</strong>. The curriculum is aligned with real-world
              business use cases so you can confidently work on marketing, finance,
              operations, and product datasets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Industry-Focused R Curriculum
                  </p>
                  <p className="text-sm text-slate-300">
                    Covers core topics like data wrangling, statistical analysis, ggplot2
                    dashboards, and report automation using R for real business scenarios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    High-Demand, Global R Skills
                  </p>
                  <p className="text-sm text-slate-300">
                    R programming and visualization skills are in demand across
                    <strong> data science, analytics, research, and consulting roles</strong> in
                    India and abroad, giving you a strong competitive edge in the job market.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Ideal for: students, freshers, working professionals, and non-programmers
              who want to upskill in <strong>R, data visualization, and analytics</strong> to
              transition into high-growth data careers.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-orange-400 hover:text-orange-600 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <CloudDownload className="mr-2 h-5 w-5" />
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - Why R Section - Apply Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Why R Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

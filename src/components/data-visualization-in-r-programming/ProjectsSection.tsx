"use client";

// src/components/ProjectsSection.tsx
import React, { useState } from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import {
  Briefcase,
  FlaskConical,
  Heart,
  ShoppingCart,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  CloudDownload,
} from "lucide-react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface Project {
  title: string;
  description: string;
  skills: string[];
}

const domainIconMap: { [key: string]: React.FC<{ className: string }> } = {
  Healthcare: Heart,
  "E-commerce & Retail": ShoppingCart,
  Aviation: FlaskConical,
  BFSI: TrendingUp,
  default: Briefcase,
};

export const ProjectsSection: React.FC = () => {
  const { projects_section } = content;
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  const projectCards = projects_section.project_examples as Project[];

  // Helper: choose icon + gradient based on index for visual variety
  const cardStyles = [
    {
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
    },
    {
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-300",
    },
    {
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-300",
    },
    {
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-300",
    },
  ];

  const getDomainIcon = (title: string): React.ReactNode => {
    const key =
      title.includes("Healthcare")
        ? "Healthcare"
        : title.includes("E-commerce") || title.includes("Retail")
          ? "E-commerce & Retail"
          : title.includes("Aviation")
            ? "Aviation"
            : title.includes("BFSI") || title.includes("Bank") || title.includes("Finance")
              ? "BFSI"
              : "default";

    const IconComponent = domainIconMap[key] || domainIconMap.default;
    return <IconComponent className="w-8 h-8" />;
  };

  const getDomainLabel = (title: string): string => {
    if (title.includes("Healthcare")) return "Healthcare & Medical Analytics";
    if (title.includes("E-commerce") || title.includes("Retail"))
      return "E-commerce & Retail Analytics";
    if (title.includes("Aviation")) return "Aviation & Airline Analytics";
    if (title.includes("BFSI") || title.includes("Bank") || title.includes("Finance"))
      return "BFSI & Financial Risk Analytics";
    return "Real-World Business Analytics";
  };

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {projects_section.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Apply your{" "}
            <span className="font-semibold">
              R programming, data visualization, and machine learning
            </span>{" "}
            skills to solve real-world{" "}
            <span className="font-semibold">
              analytics and business intelligence
            </span>{" "}
            problems across diverse industries. Work on end-to-end{" "}
            <span className="font-semibold">
              data science projects in R, predictive modeling, and dashboard
              development
            </span>{" "}
            using industry datasets.
          </p>
        </div>

        {/* Featured Projects – layout inspired by the reference section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectCards.map((project, idx) => {
            const style = cardStyles[idx % cardStyles.length];

            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${style.bgColor} rounded-xl p-8 border-2 ${style.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/70 text-brand">
                  {getDomainIcon(project.title)}
                </div>

                {/* Domain Badge (derived from project title, no change in original content) */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-brand bg-orange-100/70 px-3 py-1 rounded-full">
                    Domain: {getDomainLabel(project.title)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                {/* Description – existing content, wrapped with SEO-friendly context */}
                <p className="text-slate-700 leading-relaxed mb-5">
                  {project.description}{" "}
                  <span className="block mt-2 text-slate-600 text-sm">
                    In this hands-on R project, you will go from{" "}
                    <strong>data cleaning and preprocessing</strong> to{" "}
                    <strong>exploratory data analysis (EDA)</strong>, advanced{" "}
                    <strong>visualization in R (ggplot2, plotly)</strong>, and{" "}
                    <strong>machine learning model building</strong> for
                    real-world decision making.
                  </span>
                </p>

                {/* Skills */}
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    Skills & Tools Applied:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="text-xs bg-white/80 text-slate-800 px-3 py-1 rounded-full border border-orange-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {/* Extra SEO keywords as subtle tags */}
                    <span className="text-xs bg-white/80 text-slate-800 px-3 py-1 rounded-full border border-orange-200">
                      R Data Visualization
                    </span>
                    <span className="text-xs bg-white/80 text-slate-800 px-3 py-1 rounded-full border border-orange-200">
                      Business Analytics
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download Project List Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-orange-400 hover:text-brand hover:shadow-md focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <CloudDownload className="mr-2 h-5 w-5" />
            Download Full Project List
          </button>
        </div>

        {/* Domain Knowledge Section – adapted from reference layout, using projects_section.domains */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Domain Knowledge Coverage in R Projects
          </h3>
          <p className="text-slate-200 mb-8 leading-relaxed">
            Our <strong>R programming and data visualization projects</strong>{" "}
            cover multiple business domains so you can confidently work with{" "}
            <strong>real-world datasets</strong>, understand{" "}
            <strong>domain-specific KPIs</strong>, and build{" "}
            <strong>insightful dashboards and predictive models</strong>. This
            prepares you for roles in{" "}
            <strong>
              Data Analyst, Business Analyst, BI Developer, and ML Engineer
            </strong>{" "}
            across industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projects_section.domains.map((domain: string, idx: number) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-orange-400 transition-colors text-center"
              >
                <div className="mx-auto mb-2 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-xs md:text-sm font-bold">
                  {domain.charAt(0).toUpperCase()}
                </div>
                <p className="text-xs md:text-sm font-semibold text-white">{domain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Benefits – same layout idea as reference, SEO-optimized copy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Build a Strong Data Science Portfolio",
              description:
                "Create real-world R projects, dashboards, and case studies that you can showcase on LinkedIn, GitHub, and in data analyst interviews.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Real-World, Industry-Focused Experience",
              description:
                "Work with realistic datasets from healthcare, BFSI, e-commerce, and more to solve business problems using R, statistics, and machine learning.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Master Data Visualization & ML in R",
              description:
                "Apply concepts like EDA, feature engineering, model evaluation, and storytelling dashboards to become job-ready in data analytics and BI roles.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200"
            >
              <div className="text-brand mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Projects Section - Download Project List"
        courseName={courseName}
      />
    </section>
  );
};

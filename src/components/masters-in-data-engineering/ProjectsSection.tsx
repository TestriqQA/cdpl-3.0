"use client";

import React, { useState } from "react";
import { ProjectItem } from "./types";
import {
  Database,
  TrendingUp,
  Cloud,
  BarChart3,
  Zap,
  Users,
  Download,
} from "lucide-react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "E-commerce Sales & Inventory Dashboard",
    description:
      "Design a BI Data Analyst dashboard. Visualize KPIs using Power BI and SQL Analytics.",
    tools: ["Power BI", "Tableau", "MySQL", "SQL"],
  },
  {
    id: 2,
    title: "Social Media Sentiment Analysis Pipeline",
    description:
      "A complete Big Data Engineering pipeline. Ingest real-time data with Apache Spark (PySpark).",
    tools: ["Apache Spark", "PySpark", "Hadoop (HDFS)", "Python"],
  },
  {
    id: 3,
    title: "Financial Data ETL and Data Warehouse",
    description:
      "Build a secure ETL process on Databricks. Applies IIM Business Analytics case study logic.",
    tools: ["Databricks", "Apache Spark", "ETL/ELT", "Data Modeling"],
  },
  {
    id: 4,
    title: "Advanced Predictive Analytics with Python",
    description:
      "Use Python for advanced modeling. Essential for top-tier Data Analytics Program Mumbai roles.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
  },
];

const iconMap: { [key: number]: React.ElementType } = {
  1: Database,
  2: TrendingUp,
  3: Cloud,
  4: BarChart3,
};

// Extra metadata for gradient styling + domain labels (added, not changing existing content)
const projectMeta: Record<
  number,
  { domain: string; bgColor: string; borderColor: string }
> = {
  1: {
    domain: "E-commerce & Retail",
    bgColor: "from-blue-50 to-blue-100",
    borderColor: "border-blue-300",
  },
  2: {
    domain: "Social Media & Digital Marketing",
    bgColor: "from-purple-50 to-purple-100",
    borderColor: "border-purple-300",
  },
  3: {
    domain: "Banking, Finance & Regulatory",
    bgColor: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-300",
  },
  4: {
    domain: "Customer Analytics & Predictive Modelling",
    bgColor: "from-amber-50 to-amber-100",
    borderColor: "border-amber-300",
  },
};

const domains = [
  { name: "E-commerce & Retail", icon: "🛒" },
  { name: "Banking & Finance (BFSI)", icon: "🏦" },
  { name: "Social Media & Marketing", icon: "📱" },
  { name: "Cloud & SaaS Products", icon: "☁️" },
  { name: "Telecom & Customer Analytics", icon: "📡" },
  { name: "Healthcare & Insurance", icon: "🏥" },
  { name: "Regulatory & Compliance", icon: "📑" },
  { name: "Supply Chain & Operations", icon: "📦" },
  { name: "Executive BI Reporting", icon: "📊" },
];

const ProjectsSection: React.FC = () => {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-10 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (content preserved, styling aligned to reference) */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-[#0f766e] uppercase">
            Hands-on Experience
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Build a <span className="text-[#0f766e]">Data Engineer Certification</span> Portfolio
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
            Don&apos;t just watch. Build. Our 10+ projects rival data analytics iit casework.
          </p>
          <p className="mt-3 text-sm text-slate-700 max-w-4xl mx-auto">
            Solve real problems in BI Data Analyst dashboards and SQL Analytics. Perfect for demonstrating skills for Software Engineer Jobs in Mumbai.
          </p>
        </div>

        {/* Featured Projects – gradient cards like the reference section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projectsData.map((project) => {
            const Icon = iconMap[project.id];
            const meta = projectMeta[project.id];
            return (
              <div
                key={project.id}
                className={`bg-gradient-to-br ${meta.bgColor} rounded-xl p-8 border-2 ${meta.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/70 text-[#0f766e]">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Domain Badge */}
                <div className="mb-3">
                  <span className="rounded-full bg-teal-100/70 px-3 py-1 text-xs font-bold text-teal-700">
                    Domain: {meta.domain}
                  </span>
                </div>

                {/* Title (unchanged) */}
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h4>

                {/* Description (unchanged) */}
                <p className="text-slate-700 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tools (using your existing tools array) */}
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    Tools & Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain Knowledge Section – like reference domain grid */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Domain Knowledge Coverage
          </h3>
          <p className="text-slate-200 mb-8 leading-relaxed">
            Our projects span domains like Software Engineer Jobs in Mumbai sectors so you gain exposure to real-world challenges. From e-commerce dashboards to financial data warehouses, you build the domain understanding recruiters look for in BI and Big Data Engineering roles.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domains.map((domain, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-teal-300 transition-colors text-center"
              >
                <div className="text-3xl mb-2">{domain.icon}</div>
                <p className="text-sm font-semibold text-white">{domain.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-300 sm:text-sm">
            Keywords: Real-world BI projects • Big Data pipeline projects •
            E-commerce analytics • Financial data warehousing • Social media
            sentiment analysis • Cloud data engineering projects • Portfolio
            projects for BI Analyst and Data Engineer roles.
          </p>
        </div>

        {/* Project Benefits – like reference Project Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Portfolio Building",
              description:
                "Create impressive projects that you can showcase for Certifications for Data Engineers.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Real-World Experience",
              description:
                "Work with realistic datasets used by SQL Data Analyst teams.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Skill Mastery",
              description:
                "Apply skills end-to-end and master Data Analytics Program Mumbai concepts.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-2 border-teal-200"
            >
              <div className="text-[#0f766e] mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600 sm:text-sm">
          This project-driven master program helps you build a
          strong, proof-based portfolio for{" "}
          Data Analytics, Business Intelligence, and Big Data
          Engineering careers with job-oriented, real-time
          projects.
        </p>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <Download className="h-5 w-5" />
            Download Project Syllabus
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Engineering Course Page - Projects Section - Data Engineering - Download Project Syllabus"
        courseName={courseName}
      />
    </section >
  );
};

export default ProjectsSection;

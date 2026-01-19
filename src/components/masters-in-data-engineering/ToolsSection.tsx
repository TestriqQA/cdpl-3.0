"use client";

import React, { useState } from "react";
import { ToolItem } from "./types";
import { Database, Code, BarChart, Server, ArrowRight } from "lucide-react";
import EnrollModal from "../EnrollModal";

const toolsData: ToolItem[] = [
  { id: 1, name: "Tableau", icon: "Tableau", category: "BI & Visualization" },
  { id: 2, name: "Power BI", icon: "PowerBI", category: "BI & Visualization" },
  {
    id: 3,
    name: "Microsoft Excel",
    icon: "Excel",
    category: "BI & Visualization",
  },
  { id: 4, name: "MySQL", icon: "MySQL", category: "Databases" },
  { id: 5, name: "Python", icon: "Python", category: "Programming" },
  { id: 6, name: "Apache Spark", icon: "Spark", category: "Big Data" },
  { id: 7, name: "Databricks", icon: "Databricks", category: "Big Data" },
  { id: 8, name: "Apache Hadoop", icon: "Hadoop", category: "Big Data" },
];

const categoryIcons: { [key: string]: React.ElementType } = {
  "BI & Visualization": BarChart,
  Databases: Database,
  Programming: Code,
  "Big Data": Server,
};

interface EnrichedTool extends ToolItem {
  description: string;
  color: string;
}

// Enrich tools with gradient colors + short descriptions (content: names/categories remain same)
const enrichedTools: EnrichedTool[] = toolsData.map((tool) => {
  switch (tool.name) {
    case "Tableau":
      return {
        ...tool,
        color: "from-blue-50 to-blue-100",
        description:
          "Enterprise-grade BI platform for interactive dashboards, visual analytics, and business storytelling.",
      };
    case "Power BI":
      return {
        ...tool,
        color: "from-yellow-50 to-amber-100",
        description:
          "Microsoft’s flagship Business Intelligence tool for self-service analytics, KPI dashboards, and reporting.",
      };
    case "Microsoft Excel":
      return {
        ...tool,
        color: "from-green-50 to-emerald-100",
        description:
          "The most widely used spreadsheet tool for data analysis, reporting, and quick visualization.",
      };
    case "MySQL":
      return {
        ...tool,
        color: "from-sky-50 to-sky-100",
        description:
          "Relational database engine used to store, manage, and query structured data for analytics workloads.",
      };
    case "Python":
      return {
        ...tool,
        color: "from-indigo-50 to-indigo-100",
        description:
          "Versatile programming language for data engineering, automation, analytics, and scripting.",
      };
    case "Apache Spark":
      return {
        ...tool,
        color: "from-orange-50 to-orange-100",
        description:
          "Distributed Big Data processing engine optimized for large-scale data pipelines and real-time analytics.",
      };
    case "Databricks":
      return {
        ...tool,
        color: "from-rose-50 to-rose-100",
        description:
          "Unified analytics and lakehouse platform for collaborative data engineering and machine learning.",
      };
    case "Apache Hadoop":
      return {
        ...tool,
        color: "from-slate-50 to-slate-100",
        description:
          "Big Data framework for distributed storage and batch processing across large clusters.",
      };
    default:
      return {
        ...tool,
        color: "from-slate-50 to-slate-100",
        description: "",
      };
  }
});

// Build categories for the “Technology Stack Overview” block using existing categories
const stackCategories = [
  {
    name: "BI & Visualization Tools",
    iconKey: "BI & Visualization",
    tools: ["Tableau", "Power BI", "Microsoft Excel"],
  },
  {
    name: "Databases & Core Programming",
    iconKey: "Databases",
    tools: ["MySQL", "Python"],
  },
  {
    name: "Big Data & Distributed Computing",
    iconKey: "Big Data",
    tools: ["Apache Spark", "Databricks", "Apache Hadoop"],
  },
];

const ToolsSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="bg-white py-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header (content preserved, layout updated) */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-[#0f766e] uppercase">
            Technology Stack
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Master the Industry&apos;s Leading Data Stack
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Our program covers the essential tools required for both Business
            Intelligence and Big Data Engineering roles.
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-sm text-slate-700">
            Learn how to combine <strong>Tableau</strong>,{" "}
            <strong>Power BI</strong>, <strong>Excel</strong>,{" "}
            <strong>MySQL</strong>, <strong>Python</strong>,{" "}
            <strong>Apache Spark</strong>, <strong>Databricks</strong>, and{" "}
            <strong>Hadoop</strong> to build end-to-end{" "}
            <strong>data pipelines, BI dashboards, and scalable Big Data
              solutions</strong>-skills that are highly demanded for{" "}
            <strong>BI Analyst, Data Engineer, and Analytics Engineer</strong>{" "}
            roles.
          </p>
        </div>

        {/* Tools Grid – layout & design like reference ToolsSection */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {enrichedTools.map((tool) => (
            <div
              key={tool.id}
              className={`group rounded-xl border-2 border-slate-200 bg-gradient-to-br ${tool.color} p-6 transition-all duration-300 hover:border-teal-300 hover:shadow-lg`}
            >
              {/* Icon (using first letter as placeholder logo) */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/70 text-2xl font-bold text-[#0f766e] shadow-sm group-hover:scale-110 transition-transform">
                {tool.name.charAt(0)}
              </div>

              {/* Name (unchanged content) */}
              <h3 className="mb-1 text-lg font-bold text-slate-900">
                {tool.name}
              </h3>

              {/* Category (unchanged content) */}
              <p className="mb-3 text-xs font-semibold text-teal-700">
                {tool.category}
              </p>

              {/* Description (SEO-ish, added) */}
              <p className="text-sm leading-relaxed text-slate-600">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Stack Overview – grouped by existing categories */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white md:p-12">
          <h3 className="mb-8 text-2xl font-bold md:text-3xl">
            Technology Stack Overview
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stackCategories.map((category) => {
              const IconComp = categoryIcons[category.iconKey];
              return (
                <div key={category.name}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-teal-300">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold">{category.name}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.tools.map((toolName) => (
                      <li
                        key={toolName}
                        className="flex items-center gap-2 text-slate-200"
                      >
                        <span className="text-teal-300">→</span>
                        {toolName}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-slate-300 sm:text-sm">
            Keywords: Data Analytics with BI and Big Data Engineering • Tableau
            and Power BI Training • MySQL and Python for Data Engineering •
            Apache Spark Databricks and Hadoop Course • Business Intelligence
            and Big Data Technology Stack • Job-Oriented BI and Data
            Engineering Program.
          </p>
        </div>

        {/* Learning Path – adapted to BI + Big Data journey */}
        <div className="rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-sky-50 p-8 md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Your Learning Journey with the Data Stack
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "BI & Analytics Foundations",
                description:
                  "Start with Excel, Tableau, and Power BI to build dashboards and business reports.",
              },
              {
                step: "2",
                title: "Databases & SQL",
                description:
                  "Use MySQL to design schemas, write queries, and prepare data for analytics.",
              },
              {
                step: "3",
                title: "Python for Data Engineering",
                description:
                  "Leverage Python for automation, ETL scripts, data transformation, and integration.",
              },
              {
                step: "4",
                title: "Big Data & Cloud Workloads",
                description:
                  "Work with Apache Spark, Hadoop, and Databricks to handle large-scale Big Data pipelines.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="border-2 border-teal-200 bg-white p-6 text-center rounded-lg">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                    {phase.step}
                  </div>
                  <h4 className="mb-2 font-bold text-slate-900">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </div>
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-2 hidden h-0.5 w-4 -translate-y-1/2 bg-teal-400 md:block"></div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-600 sm:text-sm">
            This structured learning roadmap ensures you grow from{" "}
            <strong>BI fundamentals</strong> to{" "}
            <strong>full-fledged Big Data Engineering</strong>, making you
            highly competitive for <strong>data analytics</strong>,{" "}
            <strong>BI developer</strong>, and{" "}
            <strong>data engineer</strong> job roles.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer"
          >
            Start Learning These Tools
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - Tools Section - Start Learning"
        courseName={courseName}
      />
    </section>
  );
};

export default ToolsSection;

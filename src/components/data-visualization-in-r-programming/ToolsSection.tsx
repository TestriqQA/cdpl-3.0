"use client";

// src/components/ToolsSection.tsx
import React, { JSX, useState } from 'react';
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import {
  Rss,
  Code,
  BarChart3,
  Database,
  Cpu,
  Package,
  Terminal,
  Code2,
} from 'lucide-react';
import CareerSessionModal from "../CareerSessionModal";

interface Tool {
  name: string;
  category: string;
  description: string;
}

interface Category {
  name: string;
  icon: JSX.Element;
  tools: string[];
}

interface LearningPhase {
  step: string;
  title: string;
  description: string;
}

const iconMap: { [key: string]: React.FC<{ className: string }> } = {
  'Core Language': Code,
  'IDE': Terminal,
  'Visualization': BarChart3,
  'Machine Learning': Cpu,
  'Database': Database,
  'Algorithms': Package,
};

const getCardGradient = (idx: number): string => {
  const gradients = [
    "from-blue-50 to-blue-100",
    "from-orange-50 to-orange-100",
    "from-green-50 to-green-100",
    "from-red-50 to-red-100",
    "from-purple-50 to-purple-100",
    "from-cyan-50 to-cyan-100",
    "from-indigo-50 to-indigo-100",
    "from-pink-50 to-pink-100",
  ];
  return gradients[idx % gradients.length];
};

const ToolCard: React.FC<{ tool: Tool; index: number }> = ({ tool, index }) => {
  const IconComponent = iconMap[tool.category] || Rss;

  return (
    <div
      className={`bg-gradient-to-br ${getCardGradient(
        index
      )} rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group`}
    >
      {/* Icon */}
      <div className="mb-4 group-hover:scale-110 transition-transform">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md">
          <IconComponent className="w-6 h-6 text-indigo-600" />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-slate-900 mb-1">
        {tool.name}
      </h3>

      {/* Category */}
      <p className="text-xs font-semibold text-orange-600 mb-3 uppercase tracking-wide">
        {tool.category}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-700 leading-relaxed">
        {tool.description}
      </p>
    </div>
  );
};

export const ToolsSection: React.FC = () => {
  const { tools_section } = content;
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  // SEO-friendly technology categories (static, R-focused)
  const categories: Category[] = [
    {
      name: "R Programming & Scripting for Data Science",
      icon: <Code2 className="w-6 h-6" />,
      tools: ["Base R", "RStudio IDE", "tidyverse"],
    },
    {
      name: "Data Wrangling, Cleaning & Business Analytics",
      icon: <Database className="w-6 h-6" />,
      tools: ["dplyr", "readr", "data.table"],
    },
    {
      name: "Data Visualization, Dashboards & BI Reporting",
      icon: <BarChart3 className="w-6 h-6" />,
      tools: ["ggplot2", "Shiny", "plotly"],
    },
  ];

  // SEO-friendly learning phases (static, journey-style)
  const learningPhases: LearningPhase[] = [
    {
      step: "1",
      title: "R Programming Foundations",
      description:
        "Learn R syntax, data types, control structures and best practices for data science and analytics.",
    },
    {
      step: "2",
      title: "Data Cleaning & Transformation",
      description:
        "Master data wrangling, preprocessing, and feature engineering using tidyverse, dplyr and powerful R packages.",
    },
    {
      step: "3",
      title: "Data Visualization & Storytelling",
      description:
        "Build publication-ready charts, dashboards and reports with ggplot2, Shiny and interactive data visualization in R.",
    },
    {
      step: "4",
      title: "Advanced Analytics & Business Insights",
      description:
        "Apply statistical analysis, forecasting and machine learning in R to solve real-world business and BI problems.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {tools_section.title}{" "}
            <span className="text-orange-600">in R Programming</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Become job-ready in{" "}
            <strong>R programming, data visualization, business analytics</strong> and{" "}
            <strong>data science</strong> by mastering industry-standard tools, IDEs,
            and libraries used by top <strong>Data Analysts</strong>,{" "}
            <strong>Data Scientists</strong> and <strong>BI professionals</strong>{" "}
            across the world.
          </p>
        </div>

        {/* Tools Grid (uses your existing tools_section.tools content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tools_section.tools.map((tool: Tool, index: number) => (
            <ToolCard key={index} tool={tool} index={index} />
          ))}
        </div>

        {/* Technology Stack Overview (SEO-optimized content) */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            R Technology Stack Overview for Data Visualization & Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-400">{category.icon}</div>
                  <h4 className="text-lg font-bold">{category.name}</h4>
                </div>
                <ul className="space-y-2">
                  {category.tools.map((tool, tidx) => (
                    <li
                      key={tidx}
                      className="flex items-center gap-2 text-slate-200 text-sm"
                    >
                      <span className="text-orange-400">→</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-300">
            This <strong>R data visualization course</strong> equips you with a
            complete analytics stack-from <strong>RStudio</strong> and{" "}
            <strong>tidyverse</strong> to <strong>ggplot2</strong>,{" "}
            <strong>Shiny dashboards</strong> and interactive{" "}
            <strong>business intelligence reporting</strong>.
          </p>
        </div>

        {/* Learning Path (SEO-optimized journey section) */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Your Learning Journey with R for Data Visualization & BI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {learningPhases.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 md:p-3 lg:p-6 border-2 border-orange-200 text-center h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {phase.description}
                  </p>
                </div>
                {idx < learningPhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-700">
            By the end of this program, you&apos;ll be able to{" "}
            <strong>analyze data in R</strong>, build{" "}
            <strong>insightful dashboards</strong>, create{" "}
            <strong>compelling visual stories</strong>, and present{" "}
            <strong>data-driven business recommendations</strong> with confidence.
          </p>
        </div>

        {/* Book a Free Demo Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Book a Free Demo
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="R Programming Course Page - Tools Section - Book Demo"
        courseName={courseName}
      />
    </section>
  );
};

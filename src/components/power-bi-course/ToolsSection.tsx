"use client";
// components/powerbi/ToolsSection.tsx
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

type ColorVariant = "blue" | "orange" | "green" | "purple" | "pink" | "indigo";

interface ToolCardProps {
  title: string;
  description: string;
  emoji: string;
  color: ColorVariant;
}

const colorClasses: Record<ColorVariant, { bg: string; text: string; ring: string; grad: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-700", ring: "ring-blue-200", grad: "from-blue-500/20 to-cyan-500/20" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", ring: "ring-orange-200", grad: "from-orange-500/20 to-amber-500/20" },
  green: { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200", grad: "from-emerald-500/20 to-lime-500/20" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", ring: "ring-purple-200", grad: "from-purple-500/20 to-fuchsia-500/20" },
  pink: { bg: "bg-pink-100", text: "text-pink-700", ring: "ring-pink-200", grad: "from-pink-500/20 to-rose-500/20" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-700", ring: "ring-indigo-200", grad: "from-indigo-500/20 to-violet-500/20" },
};

const ToolCard: React.FC<ToolCardProps> = ({ title, description, emoji, color }) => {
  const palette = colorClasses[color];

  return (
    <article
      className={[
        "group relative rounded-2xl transition-all duration-300",
        "p-[1px] bg-gradient-to-br", palette.grad,
        "hover:-translate-y-1",
      ].join(" ")}
      aria-labelledby={`tool-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className={[
          "flex h-full flex-col p-6 bg-white rounded-2xl shadow-sm border border-gray-100",
          "hover:shadow-lg focus-within:ring-2", palette.ring, "transition-all duration-300",
        ].join(" ")}
      >
        <div className={`p-3 w-fit rounded-full ${palette.bg} ${palette.text} mb-4 text-2xl`} aria-hidden="true">
          {emoji}
        </div>

        <h3 id={`tool-${title.replace(/\s+/g, "-").toLowerCase()}`} className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>

        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-gray-200 to-transparent group-hover:from-gray-300 transition-colors" />
      </div>
    </article>
  );
};

const ToolsSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const tools: ToolCardProps[] = [
    {
      title: "Power BI Desktop",
      description:
        "Master the primary development tool for connecting, transforming, and modeling data on your local machine.",
      emoji: "🖥️",
      color: "blue",
    },
    {
      title: "Power BI Service",
      description:
        "Learn to publish, share, and collaborate on reports and dashboards in the cloud-based Power BI environment.",
      emoji: "☁️",
      color: "orange",
    },
    {
      title: "DAX (Data Analysis Expressions)",
      description:
        "Deep dive into the formula language used to create custom calculations, measures, and columns for advanced analysis.",
      emoji: "🧮",
      color: "green",
    },
    {
      title: "Power Query (M Language)",
      description:
        "Expertly use the data connection and transformation engine to clean, shape, and prepare data from various sources.",
      emoji: "🧹",
      color: "purple",
    },
    {
      title: "Data Modeling",
      description:
        "Understand Star/Snowflake schemas, relationships, and cardinality to build robust and efficient data models.",
      emoji: "🧩",
      color: "pink",
    },
    {
      title: "Advanced Visuals",
      description:
        "Utilize custom visuals, KPI indicators, and advanced interactivity features like Drill-Through and Tooltips.",
      emoji: "📈",
      color: "indigo",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Tools & Technologies
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            The Power BI Ecosystem You Will Master
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Our course provides hands-on mastery of the entire Microsoft Power BI suite and its core languages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="w-full sm:w-auto bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Master These Tools
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - Tools Section - Master Tools"
        courseName={courseName}
      />
    </section>
  );
};

export default ToolsSection;

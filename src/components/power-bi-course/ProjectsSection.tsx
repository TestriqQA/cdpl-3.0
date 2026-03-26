"use client";
// components/powerbi/ProjectsSection.tsx
import React, { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import { Download } from "lucide-react";

type ColorVariant = "blue" | "orange" | "green";

interface ProjectCardProps {
  domain: string;
  title: string;
  description: string;
  skills: string[];
  emoji: string;
  color: ColorVariant;
}

const palette: Record<
  ColorVariant,
  { bg: string; text: string; borderTop: string; ring: string; grad: string }
> = {
  blue: { bg: "bg-blue-100", text: "text-blue-700", borderTop: "border-blue-500", ring: "ring-blue-200", grad: "from-blue-500/20 to-cyan-500/20" },
  orange: { bg: "bg-orange-100", text: "text-brand", borderTop: "border-orange-500", ring: "ring-orange-200", grad: "from-orange-500/20 to-amber-500/20" },
  green: { bg: "bg-green-100", text: "text-green-700", borderTop: "border-green-500", ring: "ring-green-200", grad: "from-emerald-500/20 to-lime-500/20" },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  domain,
  title,
  description,
  skills,
  emoji,
  color,
}) => {
  const c = palette[color];

  return (
    <article
      className={[
        "group relative rounded-2xl transition-all duration-300",
        "p-[1px] bg-gradient-to-br", c.grad,
        "hover:-translate-y-1",
      ].join(" ")}
      aria-labelledby={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className={[
          "flex h-full flex-col p-8 bg-white rounded-2xl shadow-sm border border-gray-100",
          "hover:shadow-lg focus-within:ring-2", c.ring, "transition-all duration-300",
          "border-t-4", c.borderTop,
        ].join(" ")}
      >
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${c.bg} ${c.text} text-2xl`} aria-hidden="true">
            {emoji}
          </div>
          <span className="ml-3 text-lg font-semibold text-gray-700">{domain} Domain</span>
        </div>

        <h3
          id={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-2xl font-bold text-gray-900 mb-3"
        >
          {title}
        </h3>

        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2" aria-hidden="true">🛠️</span> Key Skills Applied:
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection: React.FC = () => {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const projects: ProjectCardProps[] = [
    {
      domain: "Healthcare",
      title: "Patient Care Analytics for a Hospital Network",
      description:
        "Analyze patient data (admission rates, treatment outcomes, wait times) to improve operational efficiency. Create dashboards to highlight care bottlenecks and guide resource allocation.",
      skills: ["Data Analytics", "Power BI", "DAX", "Data Visualization", "Healthcare Domain"],
      emoji: "🏥",
      color: "blue", // unique
    },
    {
      domain: "E-Commerce",
      title: "Customer Purchase Behavior Analysis",
      description:
        "Analyze customer purchase data to understand buying patterns, product preferences, and seasonal trends for an online store. Create interactive reports for marketing and inventory decisions.",
      skills: ["Data Analytics", "Power BI", "Power Query", "Data Visualization", "E-Commerce Domain"],
      emoji: "🛒",
      color: "orange", // unique
    },
    {
      domain: "Finance",
      title: "Financial Data Visualization Report",
      description:
        "Develop a comprehensive financial dashboard to track key performance indicators (KPIs) like revenue, profit margins, and budget variance. Essential for strategic financial planning.",
      skills: ["Financial Analysis", "Power BI", "DAX Measures", "Time Intelligence", "Finance Domain"],
      emoji: "💹",
      color: "green", // unique
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-brand uppercase">
            Hands-On Experience
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Real-World Power BI Report Examples & Capstone Projects
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Learn <strong>how to create dashboards in Power BI</strong> by working on industry-specific datasets. Build a portfolio of <strong>Power BI report examples</strong> that prove your expertise to top recruiters in Mumbai.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="w-full sm:w-auto flex sm:inline-flex min-h-[60px] items-center justify-center gap-2 rounded-xl bg-brand px-8 py-5 my-4 text-lg font-semibold text-white shadow-none transition-all hover:bg-brand focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <Download className="h-5 w-5" />
            Download Project Syllabus
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Power BI Course Page - Projects Section - Power BI - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

export default ProjectsSection;

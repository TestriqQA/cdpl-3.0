"use client";

import React, { useState } from "react";
import { CareerPathStep } from "./types";
import { TrendingUp, User, Server, Zap, Globe, ArrowRight } from "lucide-react";
import EnrollModal from "../EnrollModal";

const roadmapData: CareerPathStep[] = [
  {
    id: 1,
    title: "Step 1: Foundation & Analysis",
    description:
      "Master SQL in data analytics and Excel. Start your journey as a SQL Data Analyst.",
    role: "Data Analyst / Junior BI Analyst",
  },
  {
    id: 2,
    title: "Step 2: BI Specialization",
    description:
      "Deep dive into Tableau and Power BI for advanced reporting, dashboard creation, and strategic data storytelling.",
    role: "Business Intelligence Specialist",
  },
  {
    id: 3,
    title: "Step 3: Data Engineering Associate",
    description:
      "Learn Hadoop and Certifications for Data Engineers concepts.",
    role: "Junior Data Engineer",
  },
  {
    id: 4,
    title: "Step 4: Big Data Engineer Mastery",
    description:
      "Master Apache Spark and BI and Big Data Engineering pipelines.",
    role: "Big Data Engineer",
  },
  {
    id: 5,
    title: "Step 5: Architect & Leadership",
    description:
      "Focus on system design, cloud integration (AWS/Azure/GCP), data governance, and leading data teams.",
    role: "Data Architect / Data Lead",
  },
];

const iconMap: { [key: number]: React.ElementType } = {
  1: User,
  2: Globe,
  3: Server,
  4: Zap,
  5: TrendingUp,
};

// distinct colors for each card + icon
const colorConfigs = [
  {
    cardBg: "bg-teal-50",
    border: "border-teal-200",
    title: "text-teal-700",
    iconBg: "bg-teal-500",
  },
  {
    cardBg: "bg-sky-50",
    border: "border-sky-200",
    title: "text-sky-700",
    iconBg: "bg-sky-500",
  },
  {
    cardBg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "text-emerald-700",
    iconBg: "bg-emerald-500",
  },
  {
    cardBg: "bg-amber-50",
    border: "border-amber-200",
    title: "text-amber-700",
    iconBg: "bg-amber-500",
  },
  {
    cardBg: "bg-purple-50",
    border: "border-purple-200",
    title: "text-purple-700",
    iconBg: "bg-purple-500",
  },
];

const CareerRoadmapSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#0f766e] uppercase">
            SEO Boost: Long-Term Vision
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your 5-Step Career Roadmap to Becoming a Big Data Engineer
          </h3>
          <p className="mt-4 text-xl text-gray-500">
            This master program is the launchpad for a decade-long career progression in the
            high-growth data domain.
          </p>
          {/* extra SEO-rich line */}
          <p className="mt-3 text-sm text-gray-500">
            Follow a proven path from{" "}
            <strong>Data Analyst</strong> roles into{" "}
            <strong>Big Data Engineer</strong>. This roadmap is tailored for a{" "}
            high-demand <strong>Data Analytics Program Mumbai</strong>.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Vertical Line for Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200 hidden md:block"></div>

          <div className="space-y-16">
            {roadmapData.map((step, index) => {
              const Icon = iconMap[step.id];
              const isEven = index % 2 === 0;
              const colors = colorConfigs[index]; // unique colors per card

              return (
                <div
                  key={step.id}
                  className="relative flex items-center justify-between md:justify-center md:odd:flex-row-reverse"
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 p-6 rounded-xl shadow-xl border bg-gray-50 ${colors.border
                      } ${colors.cardBg} ${isEven
                        ? "md:text-right md:mr-10" // add margin from center line
                        : "md:text-left md:ml-10"
                      }`}
                  >
                    <h4 className={`text-xl font-bold mb-2 ${colors.title}`}>
                      {step.title}
                    </h4>
                    <p className="text-lg font-semibold text-gray-900 mb-3">
                      {step.role}
                    </p>
                    <p className="text-gray-900">{step.description}</p>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white shadow-lg ${colors.iconBg}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Spacer for mobile view */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEO footer copy */}
        <div className="mt-12 max-w-4xl mx-auto text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
          This <strong>Big Data Engineer career roadmap</strong> is ideal for graduates,
          working professionals, and career switchers who want a clear{" "}
          <strong>end-to-end path in Data Analytics, Business Intelligence, and Data Engineering</strong>.
          From mastering <em>SQL, Excel, Python, Tableau, Power BI, Hadoop, Spark, Databricks</em>
          to leading <em>data teams on AWS, Azure, and GCP</em>, this roadmap helps you plan your
          journey toward <strong>high-paying Big Data Engineer and Data Architect roles</strong> in
          India and global markets.
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            Start Your Roadmap
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - Career Roadmap - Start Roadmap"
        courseName={courseName}
      />
    </section>
  );
};

export default CareerRoadmapSection;

"use client";

// src/components/CareerRoadmapSection.tsx
import React, { useState } from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import {
  ChevronRight,
  CheckCircle,
  Briefcase,
  GraduationCap,
  User,
  Zap,
} from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";

interface Step {
  step: number;
  title: string;
  description: string;
}

type IconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const iconMap: { [key: number]: IconComponentType } = {
  1: User,
  2: GraduationCap,
  3: Zap,
  4: Briefcase,
  5: CheckCircle,
  6: ChevronRight,
};

const phaseColors: string[] = [
  "from-blue-50 to-blue-100",
  "from-green-50 to-green-100",
  "from-orange-50 to-orange-100",
  "from-purple-50 to-purple-100",
  "from-cyan-50 to-cyan-100",
  "from-indigo-50 to-indigo-100",
];

export const CareerRoadmapSection: React.FC = () => {
  const { career_roadmap_section } = content;
  const steps = career_roadmap_section.steps as Step[];
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {/* Split last word in accent color like other sections */}
            {career_roadmap_section.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-orange-600">
              {career_roadmap_section.title.split(" ").slice(-1)}
            </span>
          </h2>

          {/* Original short description (kept) */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, structured path from enrollment to becoming a certified,
            job-ready Machine Learning Engineer.
          </p>

          {/* Extra SEO-optimized copy */}
          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-4xl mx-auto">
            This <strong>career roadmap in Data Visualization with R</strong>{" "}
            walks you step-by-step from{" "}
            <strong>beginner in R programming and statistics</strong> to{" "}
            <strong>job-ready data analyst, data scientist, or ML engineer</strong>.
            You’ll see exactly how this{" "}
            <strong>R data science course</strong> helps you land{" "}
            high-growth roles in <strong>analytics, BI, and AI-powered careers</strong>.
          </p>
        </div>

        {/* Career Progression Timeline */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 transform -translate-y-1/2"></div>

              {/* Timeline Cards */}
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                {steps.map((step, idx) => {
                  const IconComponent = iconMap[step.step] || ChevronRight;
                  const colorClass =
                    phaseColors[idx % phaseColors.length] ||
                    "from-blue-50 to-blue-100";

                  return (
                    <div key={idx} className="flex flex-col items-center">
                      {/* Card */}
                      <div
                        className={`bg-gradient-to-br ${colorClass} rounded-xl p-6 border-2 border-slate-200 w-full mb-8 hover:shadow-lg transition-shadow`}
                      >
                        {/* Icon */}
                        <div className="text-orange-600 mb-3">
                          <IconComponent className="w-8 h-8" />
                        </div>

                        {/* Phase / Step label */}
                        <p className="text-xs font-bold text-orange-600 mb-2">
                          Step {step.step}
                        </p>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>

                        {/* Short description snippet */}
                        <p className="text-sm text-slate-600 line-clamp-4">
                          {step.description}
                        </p>

                        {/* Highlight box (using generic career-focused copy) */}
                        <div className="bg-white/60 rounded-lg p-2 mt-3 text-center">
                          <p className="text-xs text-slate-600">
                            Focus in this stage
                          </p>
                          <p className="font-bold text-orange-600 text-xs">
                            Build strong skills in R, data visualization & ML
                            fundamentals
                          </p>
                        </div>
                      </div>

                      {/* Connector Circle */}
                      <div className="w-6 h-6 rounded-full bg-white border-4 border-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, idx) => {
              const IconComponent = iconMap[step.step] || ChevronRight;
              const colorClass =
                phaseColors[idx % phaseColors.length] ||
                "from-blue-50 to-blue-100";

              return (
                <div key={idx} className="relative pl-8">
                  {/* Timeline Line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-2 top-12 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-slate-300"></div>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></div>

                  {/* Card */}
                  <div
                    className={`bg-gradient-to-br ${colorClass} rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-shadow`}
                  >
                    {/* Step label */}
                    <p className="text-xs font-bold text-orange-600 mb-2">
                      Step {step.step}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>

                    {/* Icon & short summary row */}
                    <div className="flex items-start gap-3 mb-3">
                      <IconComponent className="w-5 h-5 text-orange-600 mt-0.5" />
                      <p className="text-sm text-slate-600">
                        {step.description}
                      </p>
                    </div>

                    {/* Focus areas (generic, SEO-enhanced) */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-slate-600 font-semibold mb-1">
                          Key Focus
                        </p>
                        <p className="text-slate-700">
                          R programming, data visualization, ML basics
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-600 font-semibold mb-1">
                          Career Outcome
                        </p>
                        <p className="text-slate-700">
                          Strong portfolio & job-ready analytics skills
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Breakdown (like second example, but using dynamic content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step, idx) => {
            const IconComponent = iconMap[step.step] || ChevronRight;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-orange-600">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-600">
                      Step {step.step}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Use description as main detailed content */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    What happens in this stage:
                  </p>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>

                {/* SEO-friendly bullets about skills / roles (generic, not replacing content) */}
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">
                      Skills you strengthen:
                    </p>
                    <ul className="space-y-1 text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">→</span>
                        R programming & data manipulation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">→</span>
                        Data visualization & dashboard building
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-orange-500">→</span>
                        Applied statistics & ML foundations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">
                      Career impact:
                    </p>
                    <p className="text-slate-600">
                      Every step moves you closer to{" "}
                      <strong>
                        high-demand roles like Data Analyst, ML Engineer, and
                        Data Scientist
                      </strong>{" "}
                      in modern, analytics-driven companies.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Factors (kept same layout, tuned for this program + SEO) */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Keys to Rapid Growth in R, Data Visualization & ML
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "1",
                title: "Continuous Learning in R & ML",
                description:
                  "Stay updated with the latest R packages, visualization libraries, and machine learning techniques used in real projects.",
              },
              {
                number: "2",
                title: "Real-World Data Projects",
                description:
                  "Build an impressive portfolio with end-to-end dashboards, EDA, and ML models using real business datasets.",
              },
              {
                number: "3",
                title: "Networking & Mentorship",
                description:
                  "Engage with trainers, peers, and industry experts to access hidden job opportunities in analytics and data science.",
              },
              {
                number: "4",
                title: "Domain Specialization",
                description:
                  "Develop expertise in domains like finance, healthcare, marketing, or operations using R-based analytics.",
              },
              {
                number: "5",
                title: "Soft Skills & Storytelling",
                description:
                  "Learn to present insights, tell compelling data stories, and influence business decisions with your visualizations.",
              },
              {
                number: "6",
                title: "Certifications & Proof of Work",
                description:
                  "Use your course certificate, GitHub projects, and dashboards to showcase your skills to recruiters and hiring managers.",
              },
            ].map((factor, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                  {factor.number}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{factor.title}</h4>
                  <p className="text-slate-300 text-sm">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs md:text-sm text-slate-300 max-w-3xl mx-auto">
            This <strong>Data Visualization in R Programming career roadmap</strong>{" "}
            is ideal if you’re searching for{" "}
            <strong>“R data analyst jobs”</strong>,{" "}
            <strong>“data science career path with R”</strong>, or{" "}
            <strong>“ML engineer roadmap for beginners”</strong>. Follow each
            step, complete the projects, and you&apos;ll be ready for{" "}
            <strong>high-paying, future-proof data careers</strong>.
          </p>
        </div>

        {/* Get Personalized Roadmap Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsCareerOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Get Personalized Roadmap
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="R Programming Course Page - Career Roadmap Section - Get Roadmap"
        courseName={courseName}
      />
    </section>
  );
};

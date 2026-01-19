"use client";

// src/components/CareerSection.tsx
import React, { useState } from "react";
import { content } from "@/components/data-visualization-in-r-programming/data/content";
import { Briefcase, Zap, CheckCircle, TrendingUp, Users, CloudDownload } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export const CareerSection: React.FC = () => {
  const { career_section } = content;
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  // Helper: derive simple SEO-friendly description + salary band per role
  const getRoleMeta = (role: string) => {
    const lower = role.toLowerCase();
    let icon = "📊";
    let salary = "4–10 LPA+";
    let description =
      "Leverage R programming, data visualization, and analytics to solve real business problems and support data-driven decision-making.";

    if (lower.includes("data scientist")) {
      icon = "🤖";
      salary = "8–18 LPA*";
      description =
        "Build machine learning models, predictive analytics solutions, and advanced statistical models using R, Python, and modern data science tools.";
    } else if (lower.includes("analyst") && lower.includes("business")) {
      icon = "📈";
      salary = "6–12 LPA*";
      description =
        "Translate complex data into actionable business insights, KPIs, and dashboards for leadership teams using R and BI tools.";
    } else if (lower.includes("data analyst")) {
      icon = "📊";
      salary = "5–10 LPA*";
      description =
        "Clean, visualize, and analyze large datasets using R, SQL, and Excel to uncover trends and drive strategic business decisions.";
    } else if (lower.includes("ml engineer") || lower.includes("machine learning")) {
      icon = "🧠";
      salary = "8–16 LPA*";
      description =
        "Deploy scalable machine learning pipelines, optimize models, and work closely with data science teams to productionize R and Python solutions.";
    } else if (lower.includes("research")) {
      icon = "🔍";
      salary = "4–9 LPA*";
      description =
        "Use quantitative methods, R-based statistical analysis, and experimentation to generate research-driven insights for products or markets.";
    }

    return { icon, salary, description };
  };

  // Sample high-visibility company names – SEO focused (doesn't alter content object)
  const topHiringCompanies = [
    "TCS",
    "Infosys",
    "Accenture",
    "Deloitte",
    "KPMG",
    "EY",
    "Cognizant",
    "Capgemini",
  ];

  return (
    <section id="career" className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {career_section.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Unlock{" "}
            <strong>high-demand data science, analytics, and machine learning careers</strong> with
            industry-focused{" "}
            <strong>R programming, statistics, and data visualization skills</strong>. Prepare for
            job-ready roles such as Data Analyst, Business Analyst, and ML Engineer in top
            companies across India and abroad.
          </p>
        </div>

        {/* Job Roles Grid – built from career_section.job_roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {career_section.job_roles.map((role: string, idx: number) => {
            const meta = getRoleMeta(role);
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {meta.icon}
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{role}</h3>

                {/* Description (SEO enhanced) */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {meta.description} This role is ideal for professionals who want to build a{" "}
                  <strong>career in data analytics, data science, and R programming</strong> with
                  hands-on experience in{" "}
                  <strong>real-world datasets, dashboards, and ML models</strong>.
                </p>

                {/* Salary Band */}
                <div className="pt-4 border-t border-slate-300">
                  <p className="text-xs text-slate-600 mb-1">Typical Salary Range (India)*</p>
                  <p className="text-lg font-bold text-orange-600">{meta.salary}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Career Growth & Placement – dark gradient band */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Career Growth, R Data Science Opportunities & Job Assistance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Rapid Growth in Data Careers",
                description:
                  "Data Science, Machine Learning, and Analytics roles using R and Python are among the fastest-growing tech careers, with strong salary hikes within 2–3 years of experience.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Multiple Career Tracks",
                description:
                  "Move into specialized profiles like Data Scientist, ML Engineer, Business Intelligence Analyst, or Analytics Consultant in domains such as BFSI, Healthcare, Retail, and more.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global & Remote Opportunities",
                description:
                  "Work with global product companies, startups, consulting firms, and analytics service providers offering hybrid and remote roles in R-based analytics and data science.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-orange-400">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Placement Support – use existing placement_support content */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-400" />
                100% Job Assistance & Placement Support
              </h4>
              <ul className="space-y-3">
                {career_section.placement_support.map((support: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-emerald-400 mt-1" />
                    <p className="text-sm text-slate-100 leading-relaxed">{support}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-slate-200 mt-4 md:mt-0">
              <p className="mb-3">
                Our dedicated{" "}
                <strong>career services and R data science placement team</strong> work closely
                with you from{" "}
                <strong>
                  resume building, profile optimization, mock interviews, to final HR and technical
                  rounds
                </strong>
                . You are guided to crack{" "}
                <strong>Data Analyst, Data Scientist, and ML roles</strong> in top organizations.
              </p>
              <p className="italic text-slate-300 text-xs">
                *Salary ranges are indicative and vary based on skills, experience, location, and
                company.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsEnrollOpen(true)}
                  className="px-6 py-3 bg-orange-700 hover:bg-orange-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Apply for Placement Assistance
                </button>
                <button
                  onClick={() => setIsSyllabusOpen(true)}
                  className="px-6 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                >
                  <CloudDownload className="w-5 h-5 mr-2" />
                  Download Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Top Hiring Companies – uses placeholder + SEO text */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Top Companies Hiring R Data Analysts & Data Scientists
          </h3>
          <p className="text-sm text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            {career_section.hiring_companies_placeholder} This{" "}
            <strong>R Data Science & Machine Learning program</strong> prepares you for interviews
            at leading{" "}
            <strong>
              IT services, product companies, consulting firms, fintechs, and analytics startups
            </strong>
            .
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topHiringCompanies.map((company, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-2 md:p-6 border border-orange-200 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-slate-900">{company}</p>
                <p className="text-xs text-slate-600 mt-2">Active Hiring for Data Roles</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - Career Section - Placement Assistance"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - Career Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { CareerRole, HiringCompany } from "./types";
import { Briefcase, Target, TrendingUp, Users } from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";

const careerRoles: CareerRole[] = [
  {
    id: 1,
    title: "Business Intelligence Analyst",
    description: "Build dashboards and strategic reports. Use SQL Analytics and Power BI.",
    salaryRange: "₹6 L - ₹15 L",
  },
  {
    id: 2,
    title: "Data Analyst",
    description:
      "Analyze trends with Python and SQL. A perfect entry point for Software Engineer Jobs in Mumbai.",
    salaryRange: "₹5 L - ₹12 L",
  },
  {
    id: 3,
    title: "Big Data Engineer",
    description:
      "Design scalable pipelines using Spark/Hadoop. The peak of BI and Big Data Engineering.",
    salaryRange: "₹8 L - ₹25 L+",
  },
];

const hiringCompanies: HiringCompany[] = [
  { id: 1, name: "Amazon", logo: "/logos/amazon.svg" },
  { id: 2, name: "Accenture", logo: "/logos/accenture.svg" },
  { id: 3, name: "TCS", logo: "/logos/tcs.svg" },
  { id: 4, name: "Wipro", logo: "/logos/wipro.svg" },
  { id: 5, name: "Google", logo: "/logos/google.svg" },
  { id: 6, name: "Microsoft", logo: "/logos/microsoft.svg" },
];

const CareerSection: React.FC = () => {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-10 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-[#0f766e] uppercase">
            Career Advancement
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Land High-Paying <span className="text-[#0f766e]">Software Engineer Jobs in Mumbai</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Master SQL Analytics and BI Data Analyst skills to command top salaries.
          </p>
          <p className="mt-3 text-sm text-slate-700 max-w-3xl mx-auto">
            This Masters in Data Engineering opens doors to roles like BI Data Analyst, SQL Data Analyst, and Big Data Engineer. Better placement outcomes than many IIT data analytics short courses.
          </p>
        </div>

        {/* Target Roles / Job Roles Grid */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center">
            <Target className="h-6 w-6 text-[#0f766e] mr-2" /> Target Roles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoles.map((role) => (
              <div
                key={role.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group text-left"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-[#0f766e] group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8" />
                </div>

                {/* Title */}
                <h5 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  {role.title}
                </h5>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 text-center">
                  {role.description}
                </p>

                {/* Salary */}
                <div className="pt-4 border-t border-slate-300 text-center">
                  <p className="text-xs text-slate-600 mb-1">
                    Expected Salary Range (India)
                  </p>
                  <p className="text-lg font-bold text-[#0f766e] inline-flex items-center justify-center gap-1">
                    {role.salaryRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Growth Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Career Growth & Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Rapid Career Growth",
                description:
                  "Data Engineers see 40–50% salary growth within 2–3 years.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Multiple Career Paths",
                description:
                  "Start as a SQL Data Analyst and move into specialized roles suck as Big Data Engineer.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Opportunities",
                description:
                  "Work in Software Engineer Jobs in Mumbai and global markets.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-orange-400">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-300 sm:text-sm text-center">
            Keywords: Data Analytics Career Path • Business Intelligence Analyst Salary •
            Big Data Engineer Jobs in India • Analytics Career Growth • Job-Oriented BI and
            Big Data Course • High-Paying Data Roles.
          </p>
        </div>

        {/* Top Hiring Companies */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-teal-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Our Graduates Work At
          </h3>
          <p className="text-sm text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            Alumni from this Data Analytics with BI and Big Data Engineering{" "}
            program have the skills to apply for roles at leading{" "}
            <em>product companies, IT service firms, consulting giants, and cloud providers</em>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hiringCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-6 border border-teal-200 text-center hover:shadow-lg transition-shadow flex items-center justify-center h-24"
              >
                {/* Placeholder for Company Logo (using name for now) */}
                <div>
                  <p className="font-bold text-slate-900">{company.name}</p>
                  {/* <p className="text-xs text-slate-500 mt-1">Active Hiring</p> */}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600 sm:text-sm text-center">
            Top recruiters include{" "}
            Amazon, Accenture, TCS, Wipro, Google, Microsoft and many more
            organizations building data platforms, BI dashboards, and Big Data
            solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
          >
            Book a Free Career Session
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Engineering Course Page - Career Section - Career Session"
        courseName={courseName}
      />
    </section >
  );
};

export default CareerSection;

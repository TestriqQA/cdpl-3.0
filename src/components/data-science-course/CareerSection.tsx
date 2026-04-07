"use client";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import EnrollModal from "../EnrollModal";

export default function CareerSection() {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const companies = [
    { name: "Google", logo: "/images/logos/google.svg" },
    { name: "Microsoft", logo: "/images/logos/microsoft.svg" },
    { name: "Amazon", logo: "/images/logos/amazon.svg" },
    { name: "IBM", logo: "/images/logos/ibm.svg" },
    { name: "Accenture", logo: "/images/logos/accenture.svg" },
    { name: "Deloitte", logo: "/images/logos/deloitte.svg" },
    { name: "TCS", logo: "/images/logos/tcs.svg" },
    { name: "Infosys", logo: "/images/logos/infosys.svg" },
    { name: "Wipro", logo: "/images/logos/wipro.svg" },
    { name: "Capgemini", logo: "/images/logos/capgemini.svg" },
    { name: "Cognizant", logo: "/images/logos/cognizant.svg" },
    { name: "HCLTech", logo: "/images/logos/hcltech.svg" },
  ];

  const roles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Data Analyst",
    "Business Intelligence Analyst",
    "AI Research Scientist",
    "Data Engineer",
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Placement Partners & Career Opportunities in Mumbai
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The demand for skilled data professionals is skyrocketing. Our program prepares you for high-impact roles with top-tier companies, offering comprehensive placement support and portfolio building.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                <TrendingUp className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">High Growth</h3>
                <p className="text-sm text-slate-600">
                  Data Science roles are among the fastest-growing globally with competitive salaries.
                </p>
              </div>
              <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                <Briefcase className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Diverse Roles</h3>
                <p className="text-sm text-slate-600">
                  From Analyst to ML Engineer, unlock a wide range of career paths.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
                title="Apply for Placement Assistance"
              >
                Apply for Placement Assistance
              </button>
              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer px-6 py-3 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all"
                title="Download Syllabus"
              >
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Roles */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl transform rotate-3 -z-10 opacity-60" />
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Top Job Roles You Can Target
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div>
                    <p className="text-sm text-emerald-800 font-medium">Average Salary Hike</p>
                    <p className="text-2xl font-bold text-emerald-700">55%</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-emerald-500 opacity-50" />
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div>
                    <p className="text-sm text-amber-800 font-medium">Placement Success</p>
                    <p className="text-2xl font-bold text-amber-700">92%</p>
                  </div>
                  <Award className="w-8 h-8 text-amber-500 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hiring Partners Ticker */}
        <div className="border-t border-slate-200 pt-12">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Our Graduates Work At Leading Companies
          </p>
          <div className="relative overflow-hidden group">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center min-w-[120px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    title={`${company.name} logo`}
                    className="h-8 md:h-10 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center min-w-[120px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    title={`${company.name} logo`}
                    className="h-8 md:h-10 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Gradient masks for smooth fade */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Science Course Page - Career Section - Placement Assistance"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - Career Section - Download Syllabus"
        courseName={courseName}
      />
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - Career Section - Apply for Placement"
        courseName={courseName}
      />
    </section>
  );
}

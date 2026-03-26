"use client";

import { Briefcase, TrendingUp, Users } from "lucide-react";

import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

export default function CareerSection() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Master Digital Marketing & AI for Business Owners";
  const careerPaths = [
    {
      title: "Digital Marketing Manager",
      salary: "₹5-10 LPA",
      description:
        "Lead marketing strategies and manage campaigns across multiple channels",
      skills: [
        "Campaign Management",
        "Analytics",
        "Team Leadership",
        "Budget Planning",
      ],
    },
    {
      title: "SEO Specialist",
      salary: "₹4-8 LPA",
      description:
        "Optimize websites for search engines and drive organic traffic",
      skills: [
        "Technical SEO",
        "Keyword Research",
        "Link Building",
        "Analytics",
      ],
    },
    {
      title: "Performance Marketing Expert",
      salary: "₹6-12 LPA",
      description:
        "Manage paid advertising campaigns for maximum ROI and conversions",
      skills: ["Google Ads", "Facebook Ads", "Analytics", "A/B Testing"],
    },
    {
      title: "Content Marketing Strategist",
      salary: "₹4-9 LPA",
      description:
        "Create and manage content strategies across all digital channels",
      skills: ["Content Creation", "SEO", "Analytics", "Copywriting"],
    },
    {
      title: "Marketing Automation Specialist",
      salary: "₹5-10 LPA",
      description:
        "Implement and manage marketing automation tools and workflows",
      skills: ["Marketing Automation", "CRM", "Analytics", "Integration"],
    },
    {
      title: "Freelance Digital Marketer",
      salary: "₹50K-2L+ per project",
      description:
        "Build your own agency and work with multiple clients globally",
      skills: [
        "All Skills",
        "Client Management",
        "Project Management",
        "Business Acumen",
      ],
    },
  ];

  const hiringCompanies = [
    "Google",
    "Meta (Facebook)",
    "Amazon",
    "Adobe",
    "TCS",
    "Infosys",
    "Accenture",
    "Dentsu / GroupM",
  ];

  const getRoleIcon = (title: string) => {
    if (title.toLowerCase().includes("seo")) return "🔍";
    if (title.toLowerCase().includes("performance")) return "📈";
    if (title.toLowerCase().includes("content")) return "✍️";
    if (title.toLowerCase().includes("automation")) return "⚙️";
    if (title.toLowerCase().includes("freelance")) return "🌍";
    return "💼";
  };

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – reference layout + SEO-rich copy */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Career Highs & <span className="text-brand">Business Growth Opportunities</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Multiple career paths and growth opportunities after completing the
            program. Step into{" "}
            <strong>
              high-demand digital marketing, performance marketing, and AI-driven
              marketing roles
            </strong>{" "}
            or launch your own <strong>online marketing business</strong>.
          </p>
        </div>

        {/* Career Paths Grid – styled like reference job roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {careerPaths.map((path, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon derived from role */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {getRoleIcon(path.title)}
              </div>

              {/* Title (unchanged content) */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {path.title}
              </h3>

              {/* Description (unchanged content) */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {path.description}
              </p>

              {/* Skills (unchanged content, shown compact) */}
              <div className="mb-4">
                <p className="text-xs text-slate-600 mb-1 font-semibold">
                  Key Skills Required:
                </p>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-white text-slate-700 rounded-full text-xs border border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Salary – styled like reference “Expected Salary” */}
              <div className="pt-4 border-t border-slate-300">
                <p className="text-xs text-slate-600 mb-1">Expected Salary</p>
                <p className="text-lg font-bold text-brand">
                  {path.salary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Growth Section – dark gradient like reference, using your growth-path content */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Career Growth & Opportunities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "High-Growth Digital Careers",
                description:
                  "Digital marketing, SEO, and performance marketing professionals see strong salary hikes as brands shift budgets online.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Multiple Career Paths",
                description:
                  "Grow into roles like Digital Marketing Manager, Growth Lead, Head of Performance, Agency Owner, or Marketing Consultant.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global & Remote Opportunities",
                description:
                  "Work with top companies, agencies, and global clients in remote, hybrid, or on-site roles across industries. Or start your freelance consulting.",
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

          {/* Your original "Career Growth Path" content preserved inside this block */}
          <h4 className="text-xl font-bold mb-4">
            Your Career Growth Path
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h5 className="font-bold text-white mb-2">Learn Skills</h5>
              <p className="text-sm text-slate-200">
                Master digital marketing and AI tools
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h5 className="font-bold text-white mb-2">Build Portfolio</h5>
              <p className="text-sm text-slate-200">
                Complete real-world projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h5 className="font-bold text-white mb-2">Get Certified</h5>
              <p className="text-sm text-slate-200">
                Earn industry-recognized certifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h5 className="font-bold text-white mb-2">Land Jobs</h5>
              <p className="text-sm text-slate-200">
                Get hired or start your own agency
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-300 max-w-4xl">
            Keywords:{" "}
            <em>digital marketing career opportunities</em>,{" "}
            <em>performance marketing jobs</em>,{" "}
            <em>start digital marketing agency</em>,{" "}
            <em>freelance digital marketer income</em>,{" "}
            <em>AI in digital marketing careers</em>.
          </p>
        </div>

        {/* Top Hiring Companies – adapted to digital marketing */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Top Companies Hiring Digital Marketing & AI Professionals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hiringCompanies.map((company, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-1 md:p-6 border border-orange-200 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-slate-900">{company}</p>
                <p className="text-xs text-slate-600 mt-2">Active Hiring</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA – original content kept, just follows new layout */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-indigo-100 rounded-2xl border-2 border-orange-300">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Ready to launch your digital marketing career or business?
            </p>
            <button
              onClick={() => setIsCareerOpen(true)}
              className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3
    text-sm sm:text-base md:text-lg
    bg-brand hover:bg-brand
    text-white font-bold
    rounded-xl
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    cursor-pointer
    break-words
  "
            >
              Start Your Career Transformation
            </button>

          </div>
        </div>
      </div>
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="AI Digital Marketing - Career Section - Start Transformation"
        courseName={courseName}
      />
    </section>
  );
}

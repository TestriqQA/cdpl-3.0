"use client";

import React, { useState } from "react";
import { TrendingUp, Briefcase, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import EnrollModal from "@/components/EnrollModal"; // Fix import if it's named export, or default.
// Checking previous file view of EnrollModal.tsx: export default EnrollModal;
// So import should be default.

// Mock data for demonstration
const mockData = {
  courseName: "Tech Course",
  careerPathContent: {
    title: "Transform Your Future with In-Demand Skills",
    description: "Unlock lucrative career opportunities in the fastest-growing tech sectors",
    subtitle: "Join successful graduates building careers they love",
    paths: [
      {
        role: "Full Stack Developer",
        description: "Build scalable web applications from frontend to backend, mastering modern frameworks and cloud technologies.",
        trending: true,
        salaryRange: "$85k - $150k/year",
        skills: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
        opportunities: [
          "Remote positions at Fortune 500 companies",
          "Startup founding opportunities",
          "Freelance consulting at $100+/hour",
          "Tech lead roles within 3-5 years"
        ]
      },
      {
        role: "AI/ML Engineer",
        description: "Design intelligent systems using machine learning, neural networks, and cutting-edge AI technologies.",
        trending: true,
        salaryRange: "$120k - $200k/year",
        skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
        opportunities: [
          "Research positions at top AI labs",
          "Product innovation at tech giants",
          "AI startup founding roles",
          "Consulting for enterprise AI adoption"
        ]
      },
      {
        role: "DevOps Engineer",
        description: "Streamline software delivery with automation, containerization, and cloud infrastructure management.",
        trending: false,
        salaryRange: "$95k - $160k/year",
        skills: ["Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
        opportunities: [
          "Cloud architect positions",
          "Infrastructure leadership roles",
          "SRE positions at scale-ups",
          "Platform engineering teams"
        ]
      },
      {
        role: "UI/UX Designer",
        description: "Create beautiful, intuitive user experiences that delight customers and drive business growth.",
        trending: false,
        salaryRange: "$75k - $130k/year",
        skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Interaction Design"],
        opportunities: [
          "Design lead at product companies",
          "Freelance design consulting",
          "Product design at startups",
          "Creative director positions"
        ]
      }
    ]
  }
};

const CareerPathSection = ({ data = mockData }) => {
  const { careerPathContent } = data;
  const [hoveredPath, setHoveredPath] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("");

  const handleOpenModal = (source: string) => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  // Marked as intentionally used without altering behavior:
  void hoveredPath;

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12 md:mb-20"
        >
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-2 py-1 mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-[13px] tracking-wider">
              Your Future Awaits
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            {careerPathContent.title}
          </h2>

          <p
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-3 px-4"
          >
            {careerPathContent.description}
          </p>

          <div
            className="flex items-center justify-center gap-2 text-cyan-400"
          >
            <Target className="w-5 h-5" />
            <p className="text-base md:text-lg font-medium">
              {careerPathContent.subtitle}
            </p>
          </div>
        </div>

        {/* Career Paths Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {careerPathContent.paths.map((path, index) => (
            <div
              key={index}
              className="group relative hover:-translate-y-2 transition-transform duration-300"
              onMouseEnter={() => setHoveredPath(index)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-teal-500/5 transition-all duration-500"></div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Content */}
                <div className="relative z-10 space-y-5 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white break-words">
                          {path.role}
                        </h3>
                        {path.trending && (
                          <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                            <TrendingUp className="w-3 h-3" />
                            Hot
                          </div>
                        )}
                      </div>
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {path.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Salary Range
                      </p>
                    </div>
                    <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {path.salaryRange}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Core Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center gap-1.5 bg-slate-700/50 border border-slate-600/50 text-slate-200 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div className="space-y-3 pt-4 md:pt-5 border-t border-slate-700/50">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Career Opportunities
                    </p>
                    <ul className="space-y-2">
                      {path.opportunities.map((opportunity, oppIndex) => (
                        <li
                          key={oppIndex}
                          className="flex items-start gap-2 text-slate-300 text-sm"
                        >
                          <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">→</span>
                          <span className="leading-relaxed">{opportunity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleOpenModal(`(${(data as any).location || 'City'} ${(data as any).courseName || 'Course'}) - Career Path Section - Explore Career Path`)}
                    className="w-full mt-4 md:mt-6 px-4 py-3 md:py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm md:text-base cursor-pointer"
                  >
                    Explore Career Path
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="bg-gradient-to-r from-slate-800/80 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-10 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-full filter blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                Start Today
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Dream Career?
            </h3>

            <p className="text-slate-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Join our comprehensive program with expert mentorship, real-world projects, and dedicated job placement support. Your future starts now.
            </p>

            <button
              onClick={() => handleOpenModal(`(${(data as any).location || 'City'} ${(data as any).courseName || 'Course'}) - Career Path Section - Enroll Now`)}
              className="px-6 md:px-10 py-3 md:py-4 cursor-pointer bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base group hover:scale-105"
            >
              Enroll Now & Transform Your Future
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <EnrollModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          source={modalSource}
          courseName={(data as any).courseName || "Course"}
        />
      </div>
    </section>
  );
};

export default CareerPathSection;

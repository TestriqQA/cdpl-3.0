"use client";

import React from "react";
import { Zap, Users, BarChart3, TrendingUp } from "lucide-react";
import { courseData } from "@/components/ai-in-digital-marketing/courseData";

export default function ProjectsSection() {
  const { projects } = courseData;

  const iconByIndex = (idx: number) => {
    const icons = [Zap, TrendingUp, BarChart3, Users];
    const Icon = icons[idx % icons.length];
    return <Icon className="w-8 h-8" />;
  };

  const bgColorByIndex = (idx: number) => {
    const colors = [
      "from-blue-50 to-blue-100",
      "from-green-50 to-green-100",
      "from-amber-50 to-amber-100",
      "from-pink-50 to-pink-100",
    ];
    return colors[idx % colors.length];
  };

  const borderColorByIndex = (idx: number) => {
    const borders = [
      "border-blue-300",
      "border-green-300",
      "border-amber-300",
      "border-pink-300",
    ];
    return borders[idx % borders.length];
  };

  const domains = [
    { name: "E-commerce & D2C Brands", icon: "🛒" },
    { name: "Local & Service Businesses", icon: "📍" },
    { name: "Education & EdTech", icon: "🎓" },
    { name: "Healthcare & Clinics", icon: "🏥" },
    { name: "Real Estate & Property", icon: "🏠" },
    { name: "SaaS & Tech Startups", icon: "💻" },
    { name: "Agencies & Freelancers", icon: "🤝" },
    { name: "Personal Brands & Creators", icon: "👤" },
    { name: "B2B & Enterprise", icon: "🏢" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – layout like reference, SEO boosted */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Real-Time <span className="text-brand">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Work on{" "}
            <strong>industry-relevant AI in Digital Marketing projects</strong>{" "}
            that build your portfolio and practical skills. Implement{" "}
            <strong>
              SEO, Google Ads, Meta Ads, content marketing, automation
            </strong>{" "}
            and <strong>AI tools like ChatGPT &amp; DeepSeek</strong> in
            real-world scenarios so you can confidently apply for{" "}
            <em>
              digital marketing, performance marketing, and growth marketing
              jobs
            </em>
            .
          </p>
        </div>

        {/* Featured Projects – layout like reference, using your courseData content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-gradient-to-br ${bgColorByIndex(
                idx
              )} rounded-xl p-8 border-2 ${borderColorByIndex(
                idx
              )} hover:shadow-xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 text-brand">
                {iconByIndex(idx)}
              </div>

              {/* Difficulty Badge */}
              <div className="mb-3 flex flex-wrap gap-2 justify-between items-center">
                <span className="text-xs font-bold text-brand bg-orange-100/60 px-3 py-1 rounded-full">
                  Difficulty: {project.difficulty}
                </span>
                <span className="text-xs font-semibold text-slate-700 bg-white/60 px-3 py-1 rounded-full border border-slate-200">
                  Project #{String(project.id).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Modules / Skills Included */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">
                  Modules / Skills Included:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.modules.map((module: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/70 text-slate-700 px-3 py-1 rounded-full border border-orange-200"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                <span className="text-2xl">⏱️</span>
                <span className="text-slate-700 font-semibold">
                  {project.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Domain Knowledge Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Domain Knowledge Coverage for Digital Marketing
          </h3>
          <p className="text-slate-200 mb-8 leading-relaxed">
            Our <strong>AI in Digital Marketing projects</strong> cover multiple
            high-growth business verticals so you can learn how to plan and
            execute <strong>campaigns that actually convert</strong>. From{" "}
            <strong>e-commerce funnels</strong> and{" "}
            <strong>local lead generation</strong> to{" "}
            <strong>personal brand growth, SaaS, and B2B marketing</strong>,
            you&apos;ll get exposure to the real challenges agencies and brands
            face every day.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domains.map((domain, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-orange-400 transition-colors text-center"
              >
                <div className="text-3xl mb-2">{domain.icon}</div>
                <p className="text-sm font-semibold text-white">
                  {domain.name}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs sm:text-sm text-slate-300 max-w-4xl">
            Keywords: <em>digital marketing live projects</em>,{" "}
            <em>AI digital marketing projects</em>,{" "}
            <em>Google Ads &amp; Meta Ads practical training</em>,{" "}
            <em>SEO and content marketing portfolio</em>,{" "}
            <em>job-ready digital marketing course with projects</em>.
          </p>
        </div>

        {/* Project Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Portfolio Building",
              description:
                "Turn every project into a strong portfolio asset you can share with recruiters, clients, and agencies.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Real-World Experience",
              description:
                "Simulate agency-style work: briefs, strategy, execution, reporting and optimization for real niches.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Skill Mastery",
              description:
                "Apply AI tools, analytics, and performance marketing concepts to real campaigns—not just theory.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200"
            >
              <div className="text-brand mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-indigo-50 rounded-2xl border-2 border-orange-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-brand mb-2">
                {projects.length}+
              </p>
              <p className="text-gray-700 font-semibold">Real Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-700 mb-2">100%</p>
              <p className="text-gray-700 font-semibold">Hands-On Learning</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand mb-2">
                Portfolio
              </p>
              <p className="text-gray-700 font-semibold">Ready for Jobs</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-3xl">
            Your <strong>AI in Digital Marketing portfolio</strong> will
            showcase end-to-end projects that hiring managers love to
            see—strategy, execution, tracking, and results. Perfect for{" "}
            <em>freshers, working professionals, and freelancers</em> who want
            to stand out in competitive{" "}
            <strong>digital marketing job roles</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

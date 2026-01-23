"use client";

import { Code2, Database, BarChart3 } from "lucide-react";
import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

interface ToolCategory {
  category: string;
  items: ToolItem[];
}

export default function ToolsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";
  const { tools } = courseData as { tools: ToolCategory[] };

  // Flatten tools
  const flatTools = tools?.flatMap((category) =>
    category.items.map((tool) => ({
      ...tool,
      category: category.category,
    }))
  ) || [];

  const colorClasses = [
    "from-orange-50 to-orange-100",
    "from-blue-50 to-blue-100",
    "from-purple-50 to-purple-100",
    "from-green-50 to-green-100",
    "from-indigo-50 to-indigo-100",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Tools & <span className="text-brand">Technologies</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Master industry-standard tools used by top digital marketers and
            businesses worldwide. From <strong>AI tools</strong> to{" "}
            <strong>analytics, automation, SEO, social media, and CRM
              platforms</strong>, you&apos;ll work hands-on with the exact
            marketing stack used in high-performing{" "}
            <em>agencies, brands, and performance marketing teams</em>.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {flatTools.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className={`bg-gradient-to-br ${colorClasses[idx % colorClasses.length]
                } rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {tool.name}
              </h3>

              {/* Category */}
              <p className="text-xs font-semibold text-brand mb-3">
                {tool.category}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how to use <strong>{tool.name}</strong> as part of a
                complete AI-powered digital marketing stack for{" "}
                <strong>campaign optimization, reporting, and growth</strong>.
              </p>
            </div>
          ))}
        </div>

        {/* Technology Stack Overview */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Technology Stack Overview
          </h3>
          <p className="text-slate-200 mb-8 leading-relaxed">
            You&apos;ll work with a practical{" "}
            <strong>AI + Digital Marketing tool stack</strong> that covers{" "}
            <strong>SEO, performance marketing, email automation, analytics,
              social media, and AI content generation</strong>. This ensures you
            are job-ready for roles like{" "}
            <em>Digital Marketing Specialist, Performance Marketer, SEO
              Executive, Social Media Manager, Growth Marketer</em>, and{" "}
            <em>Freelance Digital Marketer</em>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((category, idx) => {
              const icon =
                idx % 3 === 0 ? (
                  <Code2 className="w-6 h-6" />
                ) : idx % 3 === 1 ? (
                  <Database className="w-6 h-6" />
                ) : (
                  <BarChart3 className="w-6 h-6" />
                );

              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-orange-400">{icon}</div>
                    <h4 className="text-lg font-bold">{category.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((tool, tidx) => (
                      <li
                        key={`${tool.name}-${tidx}`}
                        className="flex items-center gap-2 text-slate-200 text-sm"
                      >
                        <span className="text-orange-400">→</span>
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-300 max-w-4xl">
            Keywords: <em>digital marketing tools</em>,{" "}
            <em>AI marketing tools</em>,{" "}
            <em>Google Ads, Meta Ads, GA4, SEO tools</em>,{" "}
            <em>email marketing &amp; automation platforms</em>,{" "}
            <em>social media management tools</em>,{" "}
            <em>best tools for digital marketing career</em>.
          </p>
        </div>

        {/* Learning Path + Why These Tools */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Your Learning Journey with These Tools
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {[
              {
                step: "1",
                title: "Tool Orientation",
                description:
                  "Get familiar with the full AI + Digital Marketing toolstack and understand where each platform fits in your strategy.",
              },
              {
                step: "2",
                title: "Hands-On Practice",
                description:
                  "Apply tools in live campaigns, tracking, reporting, and optimization—no theory-only sessions.",
              },
              {
                step: "3",
                title: "Integrated Workflows",
                description:
                  "Combine multiple tools (AI, ads, analytics, CRM, email) to build real multi-channel funnels.",
              },
              {
                step: "4",
                title: "Portfolio & Implementation",
                description:
                  "Use these tools to complete real projects, build case studies, and create a portfolio that employers trust.",
              },
            ].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 border-2 border-orange-200 text-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why These Tools?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">
                Industry Standard
              </h4>
              <p className="text-gray-700 text-sm">
                All tools are used by top companies and marketing agencies
                worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-700 text-sm">
                These tools have helped thousands of businesses achieve
                measurable growth
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2">Future Ready</h4>
              <p className="text-gray-700 text-sm">
                We continuously update our curriculum with the latest tools and
                technologies
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Master all these tools and become a digital marketing expert
            </p>
            <button
              onClick={() => setIsEnrollOpen(true)}
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
              Start Learning Today
            </button>

            <p className="mt-5 text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
              Perfect for anyone looking for a{" "}
              <em>job-oriented digital marketing course with tools</em>,{" "}
              <em>AI marketing training</em>, or{" "}
              <em>hands-on performance marketing program</em> that mirrors real
              agency workflows.
            </p>
          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Tools Section - Start Learning"
        courseName={courseName}
      />
    </section>
  );
}

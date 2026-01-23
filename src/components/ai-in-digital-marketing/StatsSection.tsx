"use client";

import React from "react";
import { courseData } from "@/components/ai-in-digital-marketing/courseData";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export default function StatsSection() {
  const { stats } = courseData as { stats: Stat[] };


  return (
    <section
      className="py-10 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="stats-heading"
    >


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2
            id="stats-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
          >
            Why Choose <span className="text-brand">Our Program?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Proven results from thousands of successful students who have
            transformed their businesses.
          </p>
          {/* Extra SEO line */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
            Our AI-powered digital marketing course helps{" "}
            <strong>students, entrepreneurs, freelancers, and working professionals</strong>{" "}
            master performance marketing, social media marketing, SEO, content
            marketing, and marketing automation. Learn to use{" "}
            <strong>AI tools for ads, funnels, copywriting, and analytics</strong> so you
            can increase ROI, generate high-quality leads, and scale online
            visibility across Google, Meta, Instagram, and YouTube.
          </p>
        </header>

        {/* Stats Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-14"
          aria-label="Program statistics"
        >
          {stats.map((stat, index) => {
            const bgGradient =
              index === 0
                ? "from-orange-50 to-orange-100"
                : index === 1
                  ? "from-blue-50 to-blue-100"
                  : "from-indigo-50 to-indigo-100";

            const iconBg =
              index === 0
                ? "bg-orange-500"
                : index === 1
                  ? "bg-blue-500"
                  : "bg-indigo-600";

            const ariaLabel = `${stat.value} ${stat.label} - ${stat.description}`;

            return (
              <li key={index} className="h-full">
                <article
                  tabIndex={0}
                  aria-label={ariaLabel}
                  className={`h-full bg-gradient-to-br ${bgGradient} rounded-2xl p-5 sm:p-6 border-2 border-slate-200 outline-none transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-orange-300`}
                >
                  {/* Icon */}
                  <div
                    className={`${iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 text-2xl`}
                    aria-hidden="true"
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="mb-1">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                      {stat.value}
                    </p>
                  </div>

                  {/* Label */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Short keyword-rich line under stats */}
        <p className="mt-4 text-sm text-center sm:text-base text-slate-600 max-w-4xl mx-auto">
          <em>AI in Digital Marketing Course</em>,{" "}
          <em>Performance Marketing Training</em>,{" "}
          <em>Social Media Marketing with AI</em>,{" "}
          <em>Lead Generation Funnels</em>,{" "}
          <em>Marketing Automation</em>,{" "}
          <em>Job-Oriented Digital Marketing Program</em>,{" "}
          <em>Mumbai Digital Marketing Institute</em>.
        </p>

        {/* Bottom Insight */}
        <div className="mt-10 bg-gradient-to-r from-orange-50 via-white to-indigo-50 rounded-2xl border-2 border-orange-200 p-6 sm:p-8 md:p-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div
                className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500 text-white"
                aria-hidden="true"
              >
                <span className="text-xl">💡</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Build an Industry-Recognized, Career-Ready Digital Marketing Profile
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
                This program is structured to help you earn{" "}
                <strong>globally recognized digital marketing credentials</strong> while
                becoming truly <strong>job and business ready</strong>. Combine AI tools,
                strategy, and implementation to design campaigns that deliver
                measurable results for brands and businesses in any niche.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800 text-sm sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1">
                    🎓
                  </span>
                  <div>
                    <p className="text-base font-bold text-gray-900 mb-1">
                      Industry Recognized
                    </p>
                    <p className="text-gray-700">
                      Receive internationally recognized certifications in Digital
                      Marketing, Digital Analytics, and Social Media Specialist upon
                      completion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1">
                    💼
                  </span>
                  <div>
                    <p className="text-base font-bold text-gray-900 mb-1">
                      Career Ready
                    </p>
                    <p className="text-gray-700">
                      Become job-ready with hands-on experience, real-world projects,
                      and the latest tools used by top companies in the industry.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                Keywords: AI digital marketing certification • Social media marketing
                course with AI • Performance marketing and analytics • Google Ads & Meta
                Ads training • Digital marketing course in Mumbai with placement
                support • Business growth using AI tools and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

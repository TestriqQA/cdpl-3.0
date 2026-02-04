"use client";

import React from "react";

export default function StatsSection() {
  interface Stat {
    icon: React.ReactNode;
    value: string;
    label: string;
    description: string;
  }

  const stats: Stat[] = [
    {
      icon: "📈",
      value: "10X",
      label: "Revenue Growth Potential",
      description: "Learn strategies to scale your business revenue.",
    },
    {
      icon: "💼",
      value: "100%",
      label: "Practical Business Application",
      description: "Apply concepts directly to your business model.",
    },
    {
      icon: "⏳",
      value: "3 Months",
      label: "Intensive Cohort",
      description: "Comprehensive fast-track learning program.",
    },
  ];


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
            Unlock the power of <strong>Digital Marketing with AI</strong> to scale smarter, not harder.
          </p>
          {/* Extra SEO line */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
            Our AI-powered digital marketing course helps{" "}
            <strong>business owners, entrepreneurs, freelancers, and students</strong>{" "}
            master <strong>business marketing strategies</strong>, <strong>local business SEO</strong>, and
            <strong> marketing automation</strong>. Learn to use{" "}
            <strong>AI tools for business</strong> to increase ROI, generate high-quality leads, and scale your
            <strong> online marketing business</strong>.
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
          <em>Business Marketing Strategies</em>,{" "}
          <em>Local Business SEO</em>,{" "}
          <em>Marketing Automation for Business Owners</em>,{" "}
          <em>AI for Business Owners</em>,{" "}
          <em>Small Business SEO</em>,{" "}
          <em>Grow Your Business with Digital Marketing</em>.
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
                Lifetime Access to AI Tools Library
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
                This program is structured to help you earn{" "}
                <strong>globally recognized digital marketing credentials</strong> while
                transforming your business. Combine <strong>AI tools</strong>,
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
                      Marketing, Digital Analytics, and Social Media Specialist.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1">
                    💼
                  </span>
                  <div>
                    <p className="text-base font-bold text-gray-900 mb-1">
                      Business Ready
                    </p>
                    <p className="text-gray-700">
                      Become business-ready with hands-on experience, real-world projects,
                      and the latest tools used by successful entrepreneurs.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                Keywords: Digital marketing application • Social media marketing business
                • AI digital marketing • How to start digital marketing business
                • Digital marketing course for business owners • Business automation software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

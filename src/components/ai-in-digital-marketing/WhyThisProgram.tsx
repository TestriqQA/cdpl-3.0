"use client";

import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

interface Advantage {
  id: number | string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  highlight?: string;
}

export default function WhyThisProgram() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Master Digital Marketing & AI for Business Owners";
  const { advantages } = courseData as { advantages: Advantage[] };

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Why Digital Marketing is Important for <span className="text-brand">Business Growth in 2026?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Unlock the power of <strong>Digital Marketing with AI</strong> to scale smarter, not harder.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
            Focus on the 20% of <strong>digital marketing sales</strong> strategies that bring 80% of the results.
            No fluff, just actionable <strong>business and marketing strategy</strong>.
            Whether you want to learn <strong>how to start digital marketing business</strong> services or scale your existing company,
            this course bridges the gap between traditional methods and future-tech efficiency.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`bg-gradient-to-br ${advantage.bgColor} rounded-xl p-6 border-2 ${advantage.borderColor} hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <div className="text-brand text-4xl">
                  {advantage.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {advantage.title}
              </h3>

              {/* Optional highlight badge if present in data */}
              {advantage.highlight && (
                <div className="inline-block mb-3">
                  <span className="text-xs font-semibold text-brand bg-orange-100/60 px-3 py-1 rounded-full">
                    {advantage.highlight}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why This Matters Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Transform Your Business & Career with AI-Driven Digital Marketing
            </h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              This program blends cutting-edge{" "}
              <strong>AI marketing tools</strong>, strategic digital marketing
              frameworks, and real-world implementation. You don&apos;t just
              learn theory—you actively apply AI to plan campaigns, create
              content, optimize ads, analyze data, and build high-performing
              funnels that generate consistent leads and sales for any business
              or personal brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Secret Strategies
                  </p>
                  <p className="text-sm text-slate-300">
                    Access proprietary <strong>digital marketing applications</strong> and <strong>business automation software</strong> workflows that top agencies charge retained fees for.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Expert Instructors
                  </p>
                  <p className="text-sm text-slate-300">
                    Learn from successful entrepreneurs and <strong>AI for business owners</strong> experts who have scaled multiple 7-figure businesses using these exact methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-lg text-slate-100 mb-4">
                Ready to transform your business with digital marketing and AI?
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
                Start Your Journey Today
              </button>

            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-400">
              Keywords: Business Marketing Strategies • AI in Digital Marketing •
              Local Business SEO • Digital Marketing for Business Owners •
              Grow Your Business with Digital Marketing.
            </p>
          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Why This Program - Start Journey"
        courseName={courseName}
      />
    </section>
  );
}

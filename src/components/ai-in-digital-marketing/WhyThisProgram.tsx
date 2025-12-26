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
  const courseName = "AI in Digital Marketing Course";
  const { advantages } = courseData as { advantages: Advantage[] };

  return (
    <section className="py-10 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Why <span className="text-orange-600">This Program?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Unique advantages that set us apart from other digital marketing
            courses.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
            Our AI-powered digital marketing program is designed for{" "}
            <strong>students, working professionals, business owners, freelancers, and agency founders</strong>{" "}
            who want to master performance marketing, social media marketing, SEO, content marketing, and
            <strong> AI marketing automation</strong>. Learn how to use AI tools for{" "}
            <strong>Google Ads, Meta Ads, Instagram Reels, YouTube marketing, sales funnels, lead generation, and marketing analytics</strong>,
            so you can scale your brand and career in India and globally.
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
                <div className="text-orange-600 text-4xl">
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
                  <span className="text-xs font-semibold text-orange-600 bg-orange-100/60 px-3 py-1 rounded-full">
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
                    AI-First Digital Marketing Skills
                  </p>
                  <p className="text-sm text-slate-300">
                    Learn how to use AI for keyword research, ad copy, social
                    media content, email campaigns, automation workflows, and
                    marketing analytics across Google, Meta, Instagram, and
                    YouTube.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-white">
                    Business & Career Growth Focused
                  </p>
                  <p className="text-sm text-slate-300">
                    Perfect for business owners, freelancers, and job seekers
                    aiming to become <strong>AI-powered digital marketers</strong>, growth
                    marketers, social media strategists, and performance
                    marketers with in-demand skills.
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
    bg-orange-600 hover:bg-orange-700
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
              Keywords: AI in digital marketing course • digital marketing course with
              AI tools • performance marketing and automation • social media marketing training
              in Mumbai • Google Ads & Meta Ads course • lead generation & sales funnel strategy •
              job-oriented digital marketing certification with AI.
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
"use client";

import { CheckCircle } from "lucide-react";
import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function WhoShouldEnroll() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";
  const { targetAudience, industryApplications } = courseData;

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – layout like reference, SEO boosted */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Who Should <span className="text-orange-600">Enroll</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            This AI-powered digital marketing program is designed for{" "}
            <strong>students, working professionals, entrepreneurs, freelancers, and career switchers</strong>{" "}
            across multiple industries who want to master{" "}
            <strong>SEO, performance marketing, social media marketing, automation, and AI tools</strong>{" "}
            to accelerate their growth.
          </p>
        </div>

        {/* Audience Segments – using targetAudience content, layout like reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {targetAudience.map((audience) => (
            <div
              key={audience.id}
              className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{audience.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>

              {/* Description (unchanged content) */}
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                {audience.description}
              </p>

              {/* Requirements-like section using industries (unchanged content) */}
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-3">
                  Best Suited For:
                </p>
                <ul className="space-y-2">
                  {audience.industries.map((industry: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Applications – styled like “Prerequisites” block in reference */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Industry-Specific Applications
          </h3>
          <p className="text-slate-200 mb-8 leading-relaxed">
            The curriculum is mapped to real{" "}
            <strong>industry-specific digital marketing use cases</strong>. You&apos;ll see how{" "}
            <strong>AI in digital marketing</strong> drives impact in{" "}
            <strong>e-commerce, education, healthcare, real estate, SaaS, B2B, local businesses</strong>{" "}
            and more—so your skills translate directly into{" "}
            <strong>job-ready, practical outcomes</strong>.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {industryApplications.map((app) => (
              <div
                key={app.id}
                className="bg-white/5 rounded-xl p-5 md:p-6 border border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Industry */}
                  <div>
                    <h4 className="text-lg font-bold text-orange-300 mb-2">
                      {app.industry}
                    </h4>
                  </div>

                  {/* Application (unchanged content) */}
                  <div>
                    <p className="text-sm text-slate-300 font-semibold mb-1">
                      Application
                    </p>
                    <p className="text-sm text-slate-100">
                      {app.application}
                    </p>
                  </div>

                  {/* Benefit (unchanged content) */}
                  <div>
                    <p className="text-sm text-slate-300 font-semibold mb-1">
                      Benefit
                    </p>
                    <p className="text-sm text-slate-100">
                      {app.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-300 max-w-4xl">
            Keywords: <em>AI in digital marketing course</em>,{" "}
            <em>digital marketing for e-commerce</em>,{" "}
            <em>performance marketing for startups</em>,{" "}
            <em>social media marketing for brands</em>,{" "}
            <em>marketing automation and AI tools</em>,{" "}
            <em>job-oriented digital marketing program</em>.
          </p>
        </div>

        {/* Success Factors + original CTA blended, like reference “Keys to Success” */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Keys to Success in This Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Regular Practice",
                description:
                  "Dedicate consistent time each week to campaigns, assignments, and AI tool experimentation to build real confidence.",
                icon: "⏰",
              },
              {
                title: "Active Participation",
                description:
                  "Engage in live sessions, ask questions, and leverage doubt-solving support to clarify concepts faster.",
                icon: "🤝",
              },
              {
                title: "Project Focus",
                description:
                  "Complete all real-world projects so your portfolio reflects SEO, ads, funnels, automation, and analytics skills.",
                icon: "🎯",
              },
              {
                title: "Continuous Learning",
                description:
                  "Stay updated with the latest AI tools, ad platform changes, and algorithm updates to remain competitive.",
                icon: "📚",
              },
            ].map((factor, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{factor.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {factor.title}
                  </h4>
                  <p className="text-sm text-slate-600">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Original Bottom CTA content preserved */}
          <div className="mt-4 text-center">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              No matter your industry, this program can help you grow!
            </p>
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Check Your Fit
            </button>
          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Who Should Enroll - Check Fit"
        courseName={courseName}
      />
    </section>
  );
}

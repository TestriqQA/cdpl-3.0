"use client";

import { useState } from "react";
import { courseData } from "@/components/ai-in-digital-marketing/courseData";
import { ChevronDown, BookOpen } from "lucide-react";

import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function CurriculumSection() {
  const { curriculum } = courseData;
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";

  // Reusable gradient colors for modules (cycled through)
  const colorClasses = [
    "from-orange-50 to-orange-100",
    "from-indigo-50 to-indigo-100",
    "from-blue-50 to-blue-100",
    "from-pink-50 to-pink-100",
    "from-emerald-50 to-emerald-100",
    "from-cyan-50 to-cyan-100",
    "from-purple-50 to-purple-100",
  ];

  return (
    <section id="curriculum" className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Comprehensive{" "}
            <span className="text-orange-600">AI Marketing Curriculum</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            Master <strong>AI in Digital Marketing</strong> with{" "}
            <strong>13 in-depth modules</strong> covering{" "}
            performance marketing, social media advertising, marketing
            automation, AI tools, analytics, and ROI-driven growth strategies.
            This <strong>job-ready AI digital marketing course</strong> is
            designed for students, professionals, entrepreneurs, and business
            owners who want to build <strong>high-converting campaigns</strong>{" "}
            and <strong>scale revenue using AI</strong>.
          </p>
          <p className="mt-4 text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
            Learn how to apply <strong>ChatGPT, automation, data-driven
              decision-making, performance tracking, and conversion optimization</strong>{" "}
            to real-world marketing funnels, lead generation systems, and
            eCommerce or service-based businesses.
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-4 mb-12">
          {curriculum.map((module, index) => {
            const gradientClass =
              colorClasses[index % colorClasses.length] || colorClasses[0];

            return (
              <div
                key={module.id}
                className={`bg-gradient-to-r ${gradientClass} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
              >
                {/* Module Header */}
                <button
                  onClick={() =>
                    setExpandedModule(
                      expandedModule === module.id ? null : module.id
                    )
                  }
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/30 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-3xl">{module.icon}</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">
                        Module {module.id}: {module.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        {module.topics?.length || 0} key topics • Practical,
                        industry-focused AI-powered digital marketing training
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${expandedModule === module.id ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Module Content */}
                {expandedModule === module.id && (
                  <div className="px-6 pb-6 border-top border-slate-200/50 bg-white/60">
                    {/* Topics */}
                    <div className="mb-6 pt-4 border-t border-slate-200/60">
                      <h4 className="font-semibold text-slate-900 mb-3 mt-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-orange-600" />
                        Key Topics & Practical Concepts
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <span className="text-orange-500 font-bold mt-0.5">
                              •
                            </span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learning Outcome */}
                    {module.learningOutcome && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">🎯</span>
                          Learning Outcome – Real-World AI Marketing Skills
                        </h4>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 md:p-5">
                          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                            {module.learningOutcome}
                          </p>
                          <p className="mt-3 text-xs md:text-sm text-slate-500">
                            By the end of this module, you&apos;ll be able to
                            implement <strong>AI-driven campaigns</strong>,{" "}
                            optimize <strong>ad performance</strong>, and make{" "}
                            <strong>data-backed marketing decisions</strong> for
                            real businesses and client projects.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {module.projects && module.projects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="text-2xl">💼</span>
                          Hands-On Projects & Implementation
                        </h4>
                        <ul className="space-y-2">
                          {module.projects.map(
                            (project: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200"
                              >
                                <span className="text-orange-600 font-bold">
                                  →
                                </span>
                                <span className="text-slate-700">
                                  {project}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Program Outcomes / SEO-Rich Block */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            What You&apos;ll Master in This AI-Powered Digital Marketing Course
          </h3>
          <p className="text-slate-600 mb-6 max-w-3xl">
            This <strong>AI in Digital Marketing certification program</strong>{" "}
            is built to help you plan, launch, and scale{" "}
            <strong>profitable digital marketing campaigns</strong> using{" "}
            <strong>AI tools, automation, and performance analytics</strong>.
            Whether you&apos;re a beginner or a working professional, you&apos;ll
            learn how to generate leads, increase conversions, and grow
            businesses systematically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Marketing & Automation",
                description:
                  "Leverage AI tools like ChatGPT, automation workflows, and predictive analytics to optimize campaigns, funnels, and customer journeys.",
              },
              {
                title: "Performance Marketing & Analytics",
                description:
                  "Master paid ads, tracking, and reporting to improve ROI across Google Ads, Meta Ads, email marketing, and omnichannel strategies.",
              },
              {
                title: "Business Growth & Lead Generation",
                description:
                  "Design full-funnel digital marketing systems that attract, nurture, and convert high-quality leads for B2B, B2C, and D2C brands.",
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border border-orange-200 shadow-sm"
              >
                <h4 className="font-bold text-slate-900 mb-2">
                  {outcome.title}
                </h4>
                <p className="text-sm text-slate-600">{outcome.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Ideal for{" "}
            <strong>
              students, job seekers, freelancers, business owners, and marketing
              professionals
            </strong>{" "}
            who want to stay ahead in the{" "}
            <strong>AI-first digital marketing era</strong> and secure{" "}
            high-paying roles or grow their own brand.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-indigo-100 rounded-2xl border-2 border-orange-300 shadow-md">
            <p className="text-lg text-gray-900 font-semibold mb-3">
              Ready to master all 13 AI-powered digital marketing modules and
              transform your career or business growth?
            </p>
            <p className="text-sm text-slate-600 mb-5 max-w-xl mx-auto">
              Enroll now in this{" "}
              <strong>AI in Digital Marketing course</strong> and get{" "}
              <strong>industry-level training, practical projects, and
                implementation-focused mentoring</strong> to become an
              in-demand digital marketing professional.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3
    text-sm sm:text-base md:text-lg
    bg-white hover:bg-slate-50
    text-orange-600 font-bold
    rounded-xl border-2 border-orange-600
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    cursor-pointer
  "
              >
                Get Full Syllabus PDF
              </button>
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
  "
              >
                Enroll in the Program
              </button>
            </div>

          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Curriculum Section - Enroll"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="AI Digital Marketing - Curriculum Section - Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

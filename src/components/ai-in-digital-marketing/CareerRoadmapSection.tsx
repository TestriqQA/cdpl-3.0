"use client";

import { courseData } from "@/components/ai-in-digital-marketing/courseData";

import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function CareerRoadmapSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "AI in Digital Marketing Course";
  const { learningPath } = courseData;

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Learning <span className="text-orange-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An 8-step structured learning path designed to transform you into a
            digital marketing expert
          </p>
        </div>

        {/* Learning Path Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-600 to-indigo-700"></div>

          {/* Steps */}
          <div className="space-y-12">
            {learningPath.map((step, idx) => (
              <div
                key={step.step}
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`p-8 rounded-2xl border-2 transition-all hover:shadow-xl ${idx % 2 === 0
                      ? "bg-orange-50 border-orange-200 hover:border-orange-400"
                      : "bg-indigo-50 border-indigo-200 hover:border-indigo-400"
                      }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="flex-shrink-0 z-10">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white border-4 border-white shadow-lg ${idx % 2 === 0
                      ? "bg-orange-600"
                      : "bg-indigo-700"
                      }`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-1 hidden lg:flex justify-center">
                  <div className="text-6xl">{step.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mt-12 space-y-8">
          {learningPath.map((step) => (
            <div
              key={step.step}
              className="flex gap-6 items-start"
            >
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-orange-50 rounded-2xl border-2 border-orange-200">
            <div className="text-5xl mb-4">📚</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Comprehensive Learning
            </h4>
            <p className="text-gray-700">
              From fundamentals to advanced strategies, covering all aspects of
              digital marketing
            </p>
          </div>
          <div className="p-8 bg-indigo-50 rounded-2xl border-2 border-indigo-200">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Practical Application
            </h4>
            <p className="text-gray-700">
              Apply your learning to real-world projects and solve actual
              business problems
            </p>
          </div>
          <div className="p-8 bg-orange-50 rounded-2xl border-2 border-orange-200">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Career Ready
            </h4>
            <p className="text-gray-700">
              Complete the journey with certifications, portfolio, and the
              confidence to succeed
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-indigo-100 rounded-2xl border-2 border-orange-300">
            <p className="text-lg text-gray-900 font-semibold mb-4">
              Ready to start your 8-step transformation journey?
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
              Begin Your Journey Now
            </button>

          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - Career Roadmap - Begin Journey"
        courseName={courseName}
      />
    </section >
  );
}

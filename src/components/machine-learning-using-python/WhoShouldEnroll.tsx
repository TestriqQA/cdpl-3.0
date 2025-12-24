"use client";
import { CheckCircle2, Download } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const targetAudience = [
  {
    title: "Beginners with Programming Background",
    description: "If you have basic Python or programming skills and want to transition into machine learning, this course is perfect for you.",
    icon: "🚀",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Students & Recent Graduates",
    description: "Perfect for students, developers, and analysts looking to master ML with Python and build a strong career foundation.",
    icon: "🎓",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Career Switchers",
    description: "Professionals in technology, healthcare, finance, retail, or research looking to transition into data science and AI roles.",
    icon: "🔄",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Working Professionals",
    description: "Individuals looking to upskill and stay competitive in the rapidly evolving machine learning and AI landscape.",
    icon: "💼",
    color: "from-pink-500 to-pink-600",
  },
];

const prerequisites = [
  {
    title: "Basic Python Knowledge",
    description: "Understanding of Python syntax, variables, loops, and functions",
    level: "Essential",
  },
  {
    title: "Mathematics Fundamentals",
    description: "Basic knowledge of algebra, calculus, and statistics is beneficial",
    level: "Helpful",
  },
  {
    title: "Problem-Solving Skills",
    description: "Ability to think logically and solve problems systematically",
    level: "Essential",
  },
  {
    title: "Passion for Learning",
    description: "Willingness to learn and practice consistently throughout the course",
    level: "Essential",
  },
];

const idealCandidate = [
  "Strong foundation in Python programming",
  "Curious about machine learning and AI",
  "Willing to dedicate 45 hours to learning",
  "Eager to work on real-world projects",
  "Committed to career growth in data science",
  "Able to participate in interactive sessions",
];

export default function WhoShouldEnroll() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Should Enroll in This Program?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            This comprehensive ML program is designed for learners at various stages of their career journey.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {audience.icon}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {audience.description}
              </p>

              {/* Badge */}
              <div className={`mt-4 inline-block px-4 py-2 bg-gradient-to-r ${audience.color} text-white text-sm font-semibold rounded-full`}>
                Perfect Fit
              </div>
            </div>
          ))}
        </div>

        {/* Prerequisites Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Prerequisites & Requirements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {prereq.title}
                    </h4>
                    <p className="text-slate-600 mb-3">
                      {prereq.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${prereq.level === "Essential"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}>
                      {prereq.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-white rounded-lg p-6 border border-blue-300">
            <p className="text-slate-700">
              <span className="font-semibold">Note:</span> Don&apos;t worry if you lack some prerequisites! Our course includes foundational modules to help you catch up. However, basic Python knowledge is essential to keep pace with the curriculum.
            </p>
          </div>
        </div>

        {/* Ideal Candidate Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Ideal Candidate Profile
            </h3>
            <div className="space-y-4">
              {idealCandidate.map((trait, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{trait}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 border border-blue-200">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-5xl mb-2">📚</p>
                <p className="font-semibold text-slate-900">Learning Focused</p>
                <p className="text-sm text-slate-600">Committed to continuous improvement</p>
              </div>
              <div className="text-center">
                <p className="text-5xl mb-2">🎯</p>
                <p className="font-semibold text-slate-900">Goal Oriented</p>
                <p className="text-sm text-slate-600">Clear career aspirations in ML/AI</p>
              </div>
              <div className="text-center">
                <p className="text-5xl mb-2">⏰</p>
                <p className="font-semibold text-slate-900">Time Committed</p>
                <p className="text-sm text-slate-600">Able to dedicate 45 hours to learning</p>
              </div>
              <div className="text-center">
                <p className="text-5xl mb-2">🤝</p>
                <p className="font-semibold text-slate-900">Collaborative</p>
                <p className="text-sm text-slate-600">Open to feedback and peer learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Not a Good Fit Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            This Course Might Not Be For You If...
          </h3>
          <ul className="space-y-3">
            {[
              "You have no programming experience and are not willing to learn Python basics",
              "You're looking for a quick shortcut to ML without understanding fundamentals",
              "You cannot commit 45 hours to the course over the scheduled period",
              "You prefer passive learning over hands-on, practical implementation",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-blue-600 bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Check Eligibility & Apply
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Detailed Syllabus
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Machine Learning with Python - Who Should Enroll - Check Eligibility"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Machine Learning with Python - Who Should Enroll - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

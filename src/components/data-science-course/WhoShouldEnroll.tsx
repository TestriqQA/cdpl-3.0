"use client";
import { CheckCircle2, User, Code, Database, BarChart, Brain } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function WhoShouldEnroll() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const targetAudience = [
    {
      title: "Fresh Graduates",
      icon: <User className="w-6 h-6 text-indigo-600" />,
      description: "B.Tech, BCA, BSc, or Commerce grads looking to start a high-paying career in Data Science & AI.",
    },
    {
      title: "Software Developers",
      icon: <Code className="w-6 h-6 text-purple-600" />,
      description: "Programmers wanting to switch from web/app dev to Machine Learning and AI engineering.",
    },
    {
      title: "Data Analysts",
      icon: <BarChart className="w-6 h-6 text-emerald-600" />,
      description: "Analysts aiming to upgrade from Excel/SQL to Python, ML, and advanced predictive modeling.",
    },
    {
      title: "Non-IT Professionals",
      icon: <Database className="w-6 h-6 text-amber-600" />,
      description: "Professionals from Sales, Marketing, or Finance seeking to pivot into the booming data industry.",
    },
    {
      title: "Career Gap Returnees",
      icon: <Brain className="w-6 h-6 text-rose-600" />,
      description: "Individuals looking to restart their career with a future-proof skill set in Data Science.",
    },
  ];

  const prerequisites = [
    "No prior coding experience required (we start from scratch).",
    "Basic understanding of mathematics (high school level) is helpful.",
    "A laptop with internet connection for live classes and projects.",
    "Dedication to learn and practice for at least 8-10 hours a week.",
  ];

  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Is This Data Science Full Course Right for You?
          </h2>
          <p className="text-lg text-slate-600">
            This program is meticulously designed to cater to learners from diverse backgrounds, ensuring a smooth transition into the world of Data Science and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-100">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{audience.title}</h3>
              <p className="text-slate-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}

          {/* Prerequisites Card */}
          <div className="bg-indigo-600 rounded-2xl p-6 shadow-md text-white md:col-span-2 lg:col-span-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-indigo-200" />
              Prerequisites
            </h3>
            <ul className="space-y-3">
              {prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-indigo-100 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 bg-indigo-300 rounded-full flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have transitioned into high-paying Data Science roles. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer px-8 py-3 text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
              title="Enroll Now"
            >
              Enroll Now
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer px-8 py-3 text-base font-semibold rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
              title="Download Syllabus"
            >
              Download Syllabus
            </button>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - Who Should Enroll - Enroll Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - Who Should Enroll - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

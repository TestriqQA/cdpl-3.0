"use client";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

const roadmapSteps = [
  {
    step: 1,
    title: "You Enquired",
    description: "Initial consultation and course exploration",
    details: [
      "Understand your goals and aspirations",
      "Clarify course content and structure",
      "Discuss career opportunities",
      "Review pricing and batch schedules",
    ],
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    title: "You Enroll",
    description: "Start your machine learning journey",
    details: [
      "Complete enrollment and registration",
      "Access course materials and resources",
      "Join the learning community",
      "Receive welcome orientation",
    ],
    icon: "✍️",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    step: 3,
    title: "Extensive Training",
    description: "Master Python, ML tools & technologies",
    details: [
      "Learn Python fundamentals and libraries",
      "Understand ML algorithms deeply",
      "Master tools like Scikit-learn, TensorFlow",
      "Practice with hands-on coding exercises",
    ],
    icon: "📚",
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 4,
    title: "Projects & Assignments",
    description: "Build your portfolio with real projects",
    details: [
      "Work on industry-relevant capstone projects",
      "Implement end-to-end ML solutions",
      "Create portfolio-worthy projects",
      "Collaborate with peers on assignments",
    ],
    icon: "🛠️",
    color: "from-pink-500 to-pink-600",
  },
  {
    step: 5,
    title: "Job Readiness",
    description: "Prepare for your dream role",
    details: [
      "Intensive interview preparation",
      "Resume and LinkedIn optimization",
      "Mock interviews with industry experts",
      "SWOT analysis and feedback sessions",
    ],
    icon: "🎯",
    color: "from-green-500 to-green-600",
  },
  {
    step: 6,
    title: "Market-Ready ML Engineer",
    description: "Launch your successful career",
    details: [
      "Secure your ideal ML engineering role",
      "Start your professional journey",
      "Continuous learning and growth",
      "Lifetime community and support access",
    ],
    icon: "🚀",
    color: "from-orange-500 to-brand",
  },
];

const keySkillsGained = [
  {
    category: "Technical Skills",
    skills: [
      "Python Programming",
      "Data Preprocessing",
      "ML Algorithms",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Feature Engineering",
    ],
  },
  {
    category: "Tools & Frameworks",
    skills: [
      "Scikit-learn",
      "TensorFlow & Keras",
      "Pandas & NumPy",
      "Jupyter Notebook",
      "SQL & Databases",
      "Cloud Platforms",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Project Management",
      "Team Collaboration",
      "Critical Thinking",
      "Business Acumen",
    ],
  },
];

export default function CareerRoadmapSection() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your 6-Step Career Roadmap to ML Engineering
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A structured journey from inquiry to becoming a market-ready machine learning engineer with industry expertise.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-16 lg:mb-36">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>

              {/* Steps */}
              <div className="grid grid-cols-6 gap-4">
                {roadmapSteps.map((item, index) => (
                  <div key={index} className="relative h-56">
                    {/* Circle */}
                    <div className="flex justify-center mb-8">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl border-4 border-white shadow-lg relative z-10`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 h-full">
                      <p className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                        STEP {item.step}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {roadmapSteps.map((item, index) => (
              <div key={index} className="relative">
                {/* Vertical Line */}
                {index < roadmapSteps.length - 1 && (
                  <div className="absolute left-10 top-24 w-1 h-12 bg-gradient-to-b from-slate-300 to-slate-200"></div>
                )}

                {/* Card */}
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
                    <p className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-1`}>
                      STEP {item.step}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <div>
                  <p className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                    STEP {item.step}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Skills Gained */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Key Skills You&apos;ll Gain
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keySkillsGained.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-blue-200">
                <h4 className="text-lg font-bold text-slate-900 mb-6">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-slate-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Duration */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-white text-center">
          <p className="text-lg mb-4">Complete Your Journey In</p>
          <p className="text-5xl md:text-6xl font-bold mb-4">45 Hours</p>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Structured training spread across 7 comprehensive modules with real-world projects, expert mentorship, and guaranteed job support.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setIsCareerOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Get Personalized Roadmap
            </button>
          </div>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Machine Learning Algorithms with Python Course Page - Career Roadmap Section - Get Personalized Roadmap"
        courseName={courseName}
      />
    </section>
  );
}

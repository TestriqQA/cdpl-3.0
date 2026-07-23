import React from "react";
import { TrendingUp, Briefcase, DollarSign, Award, Download } from "lucide-react";
import SyllabusButton from "@/components/course-islands/SyllabusButton";

interface StatCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtext: string;
  bgGradient: string;
  iconBg: string;
  ariaLabel: string;
}

export default function StatsSection() {
  const courseName = "Machine Learning Algorithms using python Programming";

  // ---- ORIGINAL STATS CONTENT (values/labels/subtext preserved) ----
  const stats: StatCard[] = [
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      value: "25%",
      label: "Market Growth",
      subtext: "2020-2030",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
      ariaLabel:
        "Twenty five percent machine learning market growth from 2020 to 2030",
    },
    {
      icon: <Briefcase className="w-6 h-6" aria-hidden="true" />,
      value: "101,000+",
      label: "Job Vacancies",
      subtext: "In India",
      bgGradient: "from-indigo-50 to-indigo-100",
      iconBg: "bg-indigo-500",
      ariaLabel:
        "Over one hundred and one thousand machine learning job vacancies in India",
    },
    {
      icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
      value: "9 LPA",
      label: "Freshers' Salary",
      subtext: "ML Engineer",
      bgGradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
      ariaLabel:
        "Nine lakh per annum fresher salary for machine learning engineer roles",
    },
    {
      icon: <Award className="w-6 h-6" aria-hidden="true" />,
      value: "14+",
      label: "Years Expertise",
      subtext: "Industry Experience",
      bgGradient: "from-pink-50 to-pink-100",
      iconBg: "bg-pink-500",
      ariaLabel:
        "Fourteen plus years of industry experience and expertise in machine learning",
    },
    // From "Additional Info" – content preserved
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      value: "75%",
      label: "Job Satisfaction",
      subtext: "Professionals report high job satisfaction in ML roles",
      bgGradient: "from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-500",
      ariaLabel:
        "Seventy five percent job satisfaction among machine learning professionals",
    },
    {
      icon: <Briefcase className="w-6 h-6" aria-hidden="true" />,
      value: "32%",
      label: "Global Market Share",
      subtext: "India's growing share in the global ML market",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-500",
      ariaLabel:
        "Thirty two percent and growing global market share for India in machine learning and AI services",
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
            Why Invest in{" "}
            <span className="text-brand">Machine Learning</span>?
          </h2>

          {/* Original content kept, then expanded for SEO */}
          <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
            The ML industry is booming with unprecedented growth, lucrative
            opportunities, and high job satisfaction rates. Our{" "}
            <strong>Machine Learning and AI training program</strong> helps you
            build a future-proof career as a{" "}
            <strong>Machine Learning Engineer, Data Scientist,</strong> or{" "}
            <strong>AI Engineer</strong> by combining hands-on projects, real
            business case studies, and job-ready skills recruiters actively
            search for.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-4xl mx-auto">
            Learn industry-standard tools such as{" "}
            <strong>Python, Scikit-learn, TensorFlow, Keras, Pandas, NumPy</strong>{" "}
            and core concepts like{" "}
            <strong>
              supervised learning, unsupervised learning, regression,
              classification, model evaluation, feature engineering
            </strong>{" "}
            and <strong>deployment of ML models</strong> so you can work on
            production-grade <strong>AI and ML projects</strong> from day one.
          </p>
        </header>

        {/* Stats Grid – layout & design matches reference section */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-14"
          aria-label="Machine learning career statistics"
        >
          {stats.map((stat, index) => (
            <li key={index} className="h-full">
              <article
                tabIndex={0}
                aria-label={stat.ariaLabel}
                className={`h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-5 sm:p-6 border border-slate-200 outline-none transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-orange-300`}
              >
                {/* Icon */}
                <div
                  className={`${stat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}
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

                {/* Subtext (unchanged content, used as description) */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  {stat.subtext}
                </p>
              </article>
            </li>
          ))}
        </ul>

        {/* Extra SEO line with keyword variations */}
        <p className="mt-4 text-sm text-center sm:text-base text-slate-600 max-w-4xl mx-auto">
          <em>Machine Learning Course in India</em>,{" "}
          <em>AI and Machine Learning Certification</em>,{" "}
          <em>ML Engineer jobs for freshers</em>,{" "}
          <em>9 LPA Machine Learning Engineer Salary</em>,{" "}
          <em>Career-focused ML and AI training</em>,{" "}
          <em>Offline and online machine learning classes</em>.
        </p>

        {/* SEO-Rich Key Insight Block (adapted to ML, with more keywords) */}
        <div className="mt-10 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl border-2 border-orange-200 p-6 sm:p-8 md:p-10">
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                The Machine Learning &amp; AI Boom - Build a High-Growth Career
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Companies across <strong>finance</strong>,{" "}
                <strong>healthcare</strong>, <strong>e-commerce</strong>,{" "}
                <strong>cybersecurity</strong>, <strong>ed-tech</strong> and{" "}
                <strong>marketing</strong> are investing heavily in{" "}
                <strong>Machine Learning engineers</strong> and{" "}
                <strong>AI specialists</strong> to automate decisions, personalise
                user experiences and unlock insights from big data. Our{" "}
                <strong>job-oriented Machine Learning course in India</strong>{" "}
                bridges the gap between theory and real-world deployment so you
                can confidently apply for{" "}
                <strong>ML Engineer, Data Scientist, AI Engineer</strong> and{" "}
                <strong>ML Ops</strong> roles.
              </p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm sm:text-[15px]">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Career-ready skills:</strong> Python for ML,
                    Scikit-learn, Pandas, NumPy, model evaluation, cross-validation,
                    hyperparameter tuning and feature engineering.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Hands-on ML projects</strong> in regression,
                    classification, recommendation systems, time-series forecasting
                    and real-world business case studies.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Interview-focused preparation</strong> with resume and
                    LinkedIn optimization, ML interview questions, coding
                    challenges and portfolio guidance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong>Flexible learning options:</strong> online and
                    classroom batches, weekend and weekday schedules for students,
                    working professionals and career switchers.
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                Machine Learning Course in India • Artificial
                Intelligence and Machine Learning Training • Machine Learning
                Engineer Salary for Freshers • ML Engineer Jobs • Data Science
                and Machine Learning Certification • Python and Scikit-learn
                Course • Deep Learning and Neural Networks Training • Job-Oriented
                ML Program with Placement Assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Download Syllabus Button */}
        <div className="mt-12 flex justify-center">
          <SyllabusButton
            source="Machine Learning Algorithms with Python Course Page - Stats Section - Download Syllabus"
            courseName={courseName}
            className="inline-flex items-center justify-center cursor-pointer rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-brand focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Syllabus (PDF)
          </SyllabusButton>
        </div>
      </div>
    </section>
  );
}

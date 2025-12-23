"use client";
import { ChevronDown, BookOpen } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface Module {
  id: number;
  title: string;
  duration: string;
  topics: string[];
  projects?: string[];
  color: string;
  icon: string;
}

export default function CurriculumSection() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const courseName = "Comprehensive Data Science and AI - Master Program";

  const subtitle =
    "An industry-aligned path spanning SQL & BI to Python, Statistics, ML, R, and modern GenAI-with real projects that recruiters can run and trust.";
  const keywords =
    "MySQL DBMS course, Advanced Excel analytics, Power BI training, Tableau storytelling, Python programming, pandas matplotlib seaborn, NumPy, statistics and probability, machine learning with Python, R ggplot2 lm glm, deep learning NLP generative AI, prompt engineering, data science capstone projects";

  const modules: Module[] = [
    {
      id: 1,
      title: "DBMS using MySQL",
      duration: "",
      icon: "🗄️",
      color: "from-indigo-50 to-indigo-100",
      topics: [
        "ER modeling",
        "Normalization (1NF–BCNF)",
        "SQL (joins, subqueries, windows)",
        "Indexing & EXPLAIN",
        "Backup/restore",
        "DDL/DML/TCL/DCL",
        "Views",
        "Procs",
        "Triggers",
        "CTEs",
      ],
      projects: [
        "A capstone database design.",
      ],
    },
    {
      id: 2,
      title: "Advanced Excel for Analytics & Viz",
      duration: "",
      icon: "📑",
      color: "from-emerald-50 to-emerald-100",
      topics: [
        "Data types/cleaning",
        "Formulas (IF/XLOOKUP)",
        "Conditional formatting",
        "PivotTables/Charts",
        "ToolPak stats",
        "Forecasting",
        "Power Query",
        "Interactive dashboards",
      ],
      projects: [
        "Hands-on projects.",
      ],
    },
    {
      id: 3,
      title: "Power BI (Data Analytics & Visualization)",
      duration: "",
      icon: "📊",
      color: "from-amber-50 to-amber-100",
      topics: [
        "Power Query transforms",
        "Schema modeling (star/snowflake)",
        "DAX measures",
        "Core & advanced visuals",
        "Drill/focus interactivity",
        "Dashboards",
        "Publishing",
      ],
      projects: [
        "End-to-end projects.",
      ],
    },
    {
      id: 4,
      title: "Tableau (Analytics & Storytelling)",
      duration: "",
      icon: "📉",
      color: "from-sky-50 to-sky-100",
      topics: [
        "Data integration (joins/unions/relationships)",
        "Logical vs physical layers",
        "Dimensions/measures",
        "Specialized/geospatial charts",
        "Table calcs",
        "Parameters/sets",
        "Dashboards & stories.",
      ],
    },
    {
      id: 5,
      title: "Core Python Programming",
      duration: "",
      icon: "🐍",
      color: "from-violet-50 to-violet-100",
      topics: [
        "Syntax",
        "Data structures (lists/tuples/sets/dicts)",
        "Control flow",
        "Functions & recursion",
        "File I/O",
        "OOP (inheritance/encapsulation)",
        "Modules/packages",
        "Jupyter workflows.",
      ],
    },
    {
      id: 6,
      title: "Python Data Viz (pandas, Matplotlib, Seaborn) + NumPy",
      duration: "",
      icon: "📈",
      color: "from-rose-50 to-rose-100",
      topics: [
        "EDA/cleaning with pandas",
        "Plot customization & annotations",
        "Interactive/animated plots",
        "Seaborn statistical & categorical charts",
        "Heatmaps/grids",
        "NumPy arrays/broadcasting.",
      ],
    },
    {
      id: 7,
      title: "Statistics & Probability",
      duration: "",
      icon: "🔢",
      color: "from-orange-50 to-orange-100",
      topics: [
        "Descriptive stats",
        "Probability & Bayes",
        "Discrete/continuous distributions",
        "Sampling & CLT",
        "Hypothesis tests (z/t/χ²/ANOVA)",
        "Correlation/regression",
        "ML-centric metrics.",
      ],
    },
    {
      id: 8,
      title: "ML with Python",
      duration: "",
      icon: "🤖",
      color: "from-teal-50 to-teal-100",
      topics: [
        "Preprocessing (imputation/encoding/scaling)",
        "Regression & regularization",
        "Classifiers (LR/KNN/DT/RF/SVM)",
        "Model validation (CV, metrics, ROC-AUC)",
        "PCA & clustering",
      ],
      projects: [
        "A capstone.",
      ],
    },
    {
      id: 9,
      title: "Machine Learning & Data Viz with R",
      duration: "",
      icon: "📊",
      color: "from-fuchsia-50 to-fuchsia-100",
      topics: [
        "RStudio workflow",
        "Vectors/lists/factors/matrices/DFs",
        "CSV/Excel I/O",
        "Ggplot2 visuals",
        "ML projects using lm() and glm().",
      ],
    },
    {
      id: 10,
      title: "Deep Learning, NLP & Generative AI",
      duration: "",
      icon: "🧠",
      color: "from-lime-50 to-lime-100",
      topics: [
        "ANN/CNN essentials",
        "RNN/LSTM/autoencoders",
        "NLP with NLTK/spaCy & TensorFlow",
        "OCR basics",
        "GenAI tooling across text, image (LIM), video, and speech.",
      ],
    },
    {
      id: 11,
      title: "Prompt Engineering with Gen AI",
      duration: "",
      icon: "💬",
      color: "from-cyan-50 to-cyan-100",
      topics: [
        "AI foundations & ML ecosystem",
        "GenAI basics & technicals (GANs, transfer learning)",
        "LLM evolution",
        "Computer vision tie-ins",
        "Hands-on prompting patterns",
        "Responsible AI.",
      ],
    },
    {
      id: 12,
      title: "Real-Time Projects & Capstone Portfolio",
      duration: "",
      icon: "🚀",
      color: "from-stone-50 to-stone-100",
      topics: [
        "Domain projects: credit risk",
        "Customer segmentation",
        "Sales forecasting",
        "Fraud detection",
        "Hospital resource forecasting",
        "HR attrition analytics—plus portfolio-ready deliverables.",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            12-Module <span className="text-orange-600">Curriculum</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>
          {/* Micro badges (no color repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-6">
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">MySQL & SQL</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-900">Advanced Excel</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Power BI</span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">Tableau</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-900">Python</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-900">Stats & ML</span>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-4 mb-12">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`bg-gradient-to-r ${module.color} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
            >
              {/* Module Header */}
              <button
                onClick={() =>
                  setExpandedModule(expandedModule === module.id ? null : module.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Module {module.id}: {module.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{module.duration}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${expandedModule === module.id ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Module Content */}
              {expandedModule === module.id && (
                <div className="px-6 pb-6 border-t border-slate-200/50 bg-white/50">
                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-600" />
                      Topics Covered
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <span className="text-orange-500 font-bold mt-0.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  {module.projects && module.projects.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="text-2xl">🚀</span>
                        Hands-On Projects
                      </h4>
                      <ul className="space-y-2">
                        {module.projects.map((project, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200"
                          >
                            <span className="text-orange-600 font-bold">→</span>
                            <span className="text-slate-700">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section (adapted to match the learning outcomes layout structure) */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
                aria-label="Apply for the Comprehensive DS & AI program"
              >
                Apply Now
              </button>
              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Download detailed DS & AI syllabus"
              >
                Download Detailed Syllabus (PDF)
              </button>
            </div>
            <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
              *Module order may vary slightly by cohort to maximize outcomes.
            </p>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Comprehensive Data Science & AI - Curriculum Section - Apply Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Comprehensive Data Science & AI - Curriculum Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}
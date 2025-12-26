"use client";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const modules = [
  {
    title: "Module 1: Introduction to Python & ML Foundations",
    duration: "6 hours",
    icon: "🐍",
    topics: [
      "What is Machine Learning and its Applications",
      "Supervised vs Unsupervised Learning",
      "Python libraries suitable for ML (NumPy, Pandas, Scikit-learn)",
      "ML Workflow and Best Practices",
    ],
  },
  {
    title: "Module 2: Data Preprocessing & Feature Engineering",
    duration: "6 hours",
    icon: "⚙️",
    topics: [
      "Handling missing data (imputation, deletion strategies)",
      "Normalization and scaling (min-max, standardization)",
      "Encoding categorical data (one-hot, label encoding)",
      "Data splitting (training, validation, test sets)",
    ],
  },
  {
    title: "Module 3: Supervised Learning - Regression",
    duration: "6 hours",
    icon: "📈",
    topics: [
      "Linear Regression: Assumptions and least squares method",
      "Polynomial Regression: Extending linear models",
      "Regularization techniques: Ridge and Lasso",
      "Model evaluation metrics for regression",
    ],
  },
  {
    title: "Module 4: Supervised Learning - Classification",
    duration: "8 hours",
    icon: "🤖",
    topics: [
      "Logistic Regression: Binary and multiclass classification",
      "K-Nearest Neighbors (KNN): Distance-based classification",
      "Decision Trees: Structure and interpretation",
      "Random Forests: Ensemble learning basics",
      "Support Vector Machines (SVM): Margins and kernels",
    ],
  },
  {
    title: "Module 5: Model Evaluation & Validation",
    duration: "5 hours",
    icon: "📊",
    topics: [
      "Regression Metrics: MSE, MAE, R² Score",
      "Classification Metrics: Accuracy, Precision, Recall, F1 Score, ROC-AUC",
      "Overfitting and Underfitting: Causes and solutions",
      "Cross-Validation: K-fold and stratified methods",
      "Hyperparameter Tuning: Grid search and random search",
    ],
  },
  {
    title: "Module 6: Unsupervised Learning & Dimensionality Reduction",
    duration: "5 hours",
    icon: "🔬",
    topics: [
      "K-Means Clustering: Algorithm and use cases",
      "Hierarchical Clustering: Dendrograms and linkage methods",
      "Principal Component Analysis (PCA): Reducing dimensionality",
      "Density-Based Clustering (DBSCAN)",
    ],
  },
  {
    title: "Module 7: Capstone Project & Real-World Applications",
    duration: "3 hours",
    icon: "🎯",
    topics: [
      "Design and implement an end-to-end ML solution",
      "Real-world case studies across multiple domains",
      "Model deployment and productionization",
      "Best practices and optimization techniques",
    ],
  },
];

export default function CurriculumSection() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section id="curriculum" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Course Curriculum
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A structured 45-hour program covering foundational concepts to advanced ML algorithms with real-world applications.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
            >
              {/* Module Header */}
              <button
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between cursor-pointer bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {module.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Duration: {module.duration}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${expandedModule === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Module Content */}
              {expandedModule === index && (
                <div className="px-6 py-6 bg-white border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">
                    Topics Covered
                  </h4>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5 text-sm font-semibold">
                          ✓
                        </span>
                        <span className="text-slate-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">What You&apos;ll Master</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Data Preprocessing & Cleaning",
              "Regression Analysis",
              "Classification Algorithms",
              "Model Evaluation & Validation",
              "Unsupervised Learning",
              "Feature Engineering",
              "Hyperparameter Tuning",
              "Real-world Project Implementation",
              "Model Deployment",
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <p className="text-slate-700 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-orange-600 bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Detailed Syllabus (PDF)
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Machine Learning with Python Course Page - Curriculum Section - Apply Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Machine Learning with Python Course Page - Curriculum Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

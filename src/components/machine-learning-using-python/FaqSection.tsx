"use client";
import { ChevronDown, HelpCircle, Download } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

import { ML_PYTHON_FAQS } from "@/data/mlPythonData";

const categories = ["All", ...Array.from(new Set(ML_PYTHON_FAQS.map(faq => faq.category || "General")))];

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning Algorithms using python Programming";

  const filteredFaqs = selectedCategory === "All"
    ? ML_PYTHON_FAQS
    : ML_PYTHON_FAQS.filter(faq => (faq.category || "General") === selectedCategory);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about our Machine Learning program, enrollment, and career support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-4 text-left">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${expandedFaq === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Answer */}
              {expandedFaq === index && (
                <div className="px-6 py-5 bg-gradient-to-r from-slate-50 to-slate-100 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="mt-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {faq.category || "General"}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Reach out to us through any of the following channels and we&apos;ll be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Talk to an Advisor
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30 cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Syllabus
            </button>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Machine Learning with Python - FAQ Section - Talk to Advisor"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Machine Learning Course Page - FAQ Section - Machine Learning - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

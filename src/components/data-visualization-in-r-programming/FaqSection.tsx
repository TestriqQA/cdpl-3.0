"use client";

// src/components/FaqSection.tsx
import React, { useState } from "react";
import { ChevronDown, HelpCircle, CloudDownload } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import { R_DATA_VIS_FAQS } from "@/data/rDataVisData";

export const FaqSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  // If your FAQs include category, we'll group by it.
  // If not, everything will appear under one SEO-friendly heading.
  const categories = Array.from(
    new Set(
      R_DATA_VIS_FAQS
        .map((faq) => faq.category)
        .filter((cat): cat is string => Boolean(cat)
        )
    ))

  const hasCategories = categories.length > 0;
  const groupedCategories = hasCategories
    ? categories
    : ["R Programming Master Program FAQs"];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-44">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            R Programming Course{" "}
            <span className="text-orange-600">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find clear answers about our{" "}
            <strong>Data Visualization in R Programming Master Program</strong>,
            including syllabus, fees, certification, live online training,
            hands-on projects, and career opportunities in{" "}
            <strong>data analytics</strong> and <strong>data science</strong>.
          </p>
        </div>

        {/* FAQs by Category (or single group if no categories in content) */}
        {groupedCategories.map((categoryLabel) => (
          <div key={categoryLabel} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded-full" />
              {hasCategories
                ? categoryLabel
                : "R Programming Master Program – Common Questions"}
            </h3>

            {/* FAQs List */}
            <div className="space-y-4">
              {R_DATA_VIS_FAQS
                .filter((faq) =>
                  hasCategories ? faq.category === categoryLabel : true
                )
                .map((faq) => {
                  const globalIdx = R_DATA_VIS_FAQS.indexOf(faq);

                  return (
                    <div
                      key={globalIdx}
                      className="bg-white rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() =>
                          setExpandedFAQ(
                            expandedFAQ === globalIdx ? null : globalIdx
                          )
                        }
                        className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors gap-4"
                      >
                        <div className="flex items-center gap-3 text-left">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-orange-600">
                            <HelpCircle className="w-4 h-4" />
                          </span>
                          <h4 className="text-lg font-semibold text-slate-900">
                            {faq.question}
                          </h4>
                        </div>
                        <ChevronDown
                          className={`w-6 h-6 text-orange-600 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === globalIdx ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Answer */}
                      {expandedFAQ === globalIdx && (
                        <div className="px-6 pb-5 border-t border-slate-200 bg-slate-50">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Still Have Questions – SEO-optimized CTA */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still Have Questions About Our R Programming Course?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our academic counsellors will help you choose the right{" "}
            <strong>R Programming course</strong> path – whether you&apos;re
            aiming for a career in <strong>data analytics</strong>,{" "}
            <strong>business intelligence</strong>, or{" "}
            <strong>data science using R</strong>. Get details on batches,
            pricing, live online classes, and placement support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="px-6 py-3 bg-orange-700 hover:bg-orange-800 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              📞 Talk to a Career Expert
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center"
            >
              <CloudDownload className="w-5 h-5 mr-2" />
              Get Full R Course Details on Email
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-500 max-w-3xl mx-auto">
            Popular searches: <strong>R programming course with placement</strong>,{" "}
            <strong>data visualization in R training</strong>,{" "}
            <strong>R for data analysis certification</strong>,{" "}
            <strong>best R programming course for beginners</strong>.
          </p>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - FAQ Section - Talk to Expert"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - FAQ Section - Get Details"
        courseName={courseName}
      />
    </section>
  );
};

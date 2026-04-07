"use client";

// src/components/data-analytics-bi-bigdata/FaqSection.tsx
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import EnrollModal from "../EnrollModal";
import { DATA_ENGINEERING_MASTERS_FAQS } from "@/data/dataEngineeringMastersData";

// Categories are already in the data
const categories = Array.from(
  new Set(DATA_ENGINEERING_MASTERS_FAQS.map((item) => item.category || "General"))
);

const FaqSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-[#0f766e] uppercase">
            Quick Answers
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            FAQ: <span className="text-[#0f766e]">Data Analytics & Big Data Engineering Program</span>
          </h3>
          <p className="text-lg text-slate-600">
            Everything you need to know about the program, eligibility, and
            career outcomes.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Get clarity on how this{" "}
            Data Analytics Program Mumbai{" "}
            helps you transition into{" "}
            <em>Business Intelligence, SQL Data Analyst, and Big Data Engineer</em>{" "}
            roles.
          </p>
        </div>

        {/* FAQs by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-12 max-w-4xl mx-auto">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-teal-500 rounded-full"></span>
              {category}
            </h3>

            {/* FAQs List */}
            <div className="space-y-4">
              {DATA_ENGINEERING_MASTERS_FAQS
                .filter((item) => (item.category || "General") === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-all duration-300 overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() =>
                        setExpandedFAQ(
                          expandedFAQ === index ? null : index
                        )
                      }
                      className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors text-left"
                    >
                      <h4 className="text-lg font-semibold text-slate-900">
                        {item.question}
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-[#0f766e] transition-transform duration-300 flex-shrink-0 ${expandedFAQ === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Answer */}
                    {expandedFAQ === index && (
                      <div className="px-6 pb-5 border-t border-slate-200 bg-slate-50">
                        <p className="text-slate-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Still Have Questions CTA */}
        <div className="mt-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our counseling team can guide you on whether this{" "}
            BI & Big Data Engineering master program is the
            right fit for your goals—whether you&apos;re an{" "}
            <em>IT professional, fresher, BI analyst, or career changer</em>.
            Reach out for personalized guidance on{" "}
            career paths, placements, and curriculum details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="px-6 py-3 bg-[#0f766e] hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Enroll Now
            </button>
            <Link
              href="tel:+917888383788"
              title="Call us at +91 788-83-83-788"
              className="px-6 py-3 bg-brand hover:bg-brand text-white font-bold rounded-lg transition-colors"
            >
              📞 Call Us
            </Link>
            <Link
              href="mailto:contact@cinutedigital.com"
              title="Email us at contact@cinutedigital.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              ✉️ Email Us
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600 sm:text-sm">
            Keywords: Best Institute for Data Analytics, SQL Data Analyst, Bi and Big Data Engineering, IIM Business Analytics, Data Analytics Program Mumbai, Data Engineering Certifications, How to Become Data Analyst in India.
          </p>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - FAQ Section - Enroll Now"
        courseName={courseName}
      />
    </section >
  );
};

export default FaqSection;

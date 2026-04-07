"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";
import { AI_IN_DIGITAL_MARKETING_FAQS } from "@/data/aiInDigitalMarketingData";

export default function FaqSection() {
  const faqList = AI_IN_DIGITAL_MARKETING_FAQS;

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Master Digital Marketing & AI for Business Owners";

  // Group by category if available, else everything under "General"
  const categories = Array.from(
    new Set(faqList.map((faq) => faq.category || "General"))
  );

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
        {/* Section Header – reference layout + SEO-enhanced copy */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our{" "}
            <strong>AI Digital Marketing for Business Owners program</strong>, from{" "}
            <em>course fees, schedule, business applicability</em> to{" "}
            <em>ROI and support</em>. This FAQ helps you decide if this is the{" "}
            <strong>best digital marketing course for your business growth</strong>.
          </p>
        </div>

        {/* FAQs by Category – layout copied from reference, content from courseData */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
              {category === "General" ? "General Queries" : category}
            </h3>

            {/* FAQs List */}
            <div className="space-y-4">
              {faqList
                .filter((faq) => (faq.category || "General") === category)
                .map((faq) => {
                  const globalIdx = faqList.indexOf(faq);
                  return (
                    <div
                      key={faq.question}
                      className="bg-white rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden"
                    >
                      {/* Question */}
                      <button
                        onClick={() =>
                          setExpandedFAQ(
                            expandedFAQ === globalIdx ? null : globalIdx
                          )
                        }
                        className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-slate-900 text-left">
                          {faq.question}
                        </h4>
                        <ChevronDown
                          className={`w-6 h-6 text-brand transition-transform duration-300 flex-shrink-0 ${expandedFAQ === globalIdx ? "rotate-180" : ""
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

        {/* Still Have Questions – design from reference + your CTA content & SEO keywords */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help! Get in touch with us for personalized
            guidance on{" "}
            <strong>course eligibility, fees, EMI options, live classes</strong>{" "}
            and <strong>100% job assistance</strong>. Speak directly with our
            counselors to understand how this{" "}
            <em>AI-powered digital marketing course</em> fits your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://calendar.app.google/tvh9dsXZsX9BujRR8" title="Schedule a Free Consultation" className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Schedule a Free Consultation
            </Link>
            <button
              onClick={() => setIsCareerOpen(true)}
              className="border-2 border-brand text-brand hover:bg-orange-50 font-bold py-3 px-8 rounded-xl transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Direct contact links like reference */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-slate-700">
            <span>Prefer to talk directly?</span>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="tel:+917888383788"
                title="Call us at +91 788-83-83-788"
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-orange-300 rounded-lg font-semibold text-brand transition-colors"
              >
                📞 Call Us
              </Link>
              <Link
                href="mailto:contact@cinutedigital.com"
                title="Email us at contact@cinutedigital.com"
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-blue-300 rounded-lg font-semibold text-blue-600 transition-colors"
              >
                ✉️ Email Us
              </Link>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto">
            Keywords: <em>digital marketing course FAQ</em>,{" "}
            <em>AI in digital marketing training questions</em>,{" "}
            <em>business marketing course details</em>,{" "}
            <em>best digital marketing institute for business owners</em>,{" "}
            <em>course duration, fees, business support</em>.
          </p>
        </div>
      </div>
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="AI Digital Marketing - Faq Section - Contact Us"
        courseName={courseName}
      />
    </section>
  );
}

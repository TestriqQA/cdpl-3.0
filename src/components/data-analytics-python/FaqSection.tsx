"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { DATA_ANALYTICS_PYTHON_FAQS } from "@/data/dataAnalyticsPythonData";

export default function FaqSection() {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    const categories = Array.from(new Set(DATA_ANALYTICS_PYTHON_FAQS.map((faq) => faq.category || "General")));

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Frequently Asked Questions About <span className="text-brand">Data Analytics Course</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Find answers to common questions about our course, enrollment, and career opportunities.
                    </p>
                </div>

                {/* FAQs by Category */}
                {categories.map((category) => (
                    <div key={category} className="mb-12">
                        {/* Category Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-1 h-8 bg-brand rounded-full"></span>
                            {category}
                        </h3>

                        {/* FAQs List */}
                        <div className="space-y-4">
                            {DATA_ANALYTICS_PYTHON_FAQS
                                .filter((faq) => (faq.category || "General") === category)
                                .map((faq) => {
                                    const globalIdx = DATA_ANALYTICS_PYTHON_FAQS.indexOf(faq);
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

                {/* Still Have Questions */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Still Have Questions?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                        Our enrollment team is here to help! Reach out to us via phone, email, or contact form, and we&apos;ll provide personalized guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="tel:+917888383788"
                            title="Call us at +91 788-83-83-788"
                            className="cursor-pointer px-6 py-3 bg-brand hover:bg-brand text-white font-semibold rounded-lg transition-colors"
                        >
                            📞 Call Us
                        </Link>
                        <Link
                            href="mailto:contact@cinutedigital.com"
                            title="Email us at contact@cinutedigital.com"
                            className="cursor-pointer px-6 py-3 bg-[#1d4ed8] hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
                        >
                            ✉️ Email Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

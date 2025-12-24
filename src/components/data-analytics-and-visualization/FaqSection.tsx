"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";
import EnrollModal from "../EnrollModal";


import { DATA_ANALYTICS_VIS_FAQS } from "@/data/dataAnalyticsVisData";


export default function FaqSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Find answers to common questions about our course, learning approach, and career support.
                    </p>
                </div>

                {/* FAQ items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {DATA_ANALYTICS_VIS_FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
                        >
                            {/* Question - clickable */}
                            <button
                                onClick={() =>
                                    setExpandedIndex(expandedIndex === index ? null : index)
                                }
                                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer bg-gradient-to-r from-slate-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <h3 className="text-lg font-semibold text-slate-900">
                                        {faq.question}
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-slate-600 transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer - expandable */}
                            {expandedIndex === index && (
                                <div className="px-6 py-6 bg-slate-50 border-t border-slate-200">
                                    <p className="text-slate-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Additional help section */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our team is here to help! Reach out to us and we&apos;ll provide personalized guidance for your learning journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                        >
                            Contact Us
                        </button>
                        <Link href="https://calendar.app.google/tvh9dsXZsX9BujRR8" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                            Schedule a Call
                        </Link>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Faq Section - Contact Us"
                courseName={courseName}
            />
        </section>
    );
}

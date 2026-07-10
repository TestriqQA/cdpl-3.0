"use client";
import React, { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/data-analytics-with-tableau/ui/accordion";
import Link from "next/link";
import EnrollModal from "../EnrollModal";

import { DATA_ANALYTICS_TABLEAU_FAQS } from "@/data/dataAnalyticsTableauData";

export default function FaqSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-900">
                        Find answers to common questions about our Tableau course
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {DATA_ANALYTICS_TABLEAU_FAQS.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`faq-${index + 1}`}
                            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer hover:bg-orange-50 transition-colors">
                                <div className="flex items-center gap-4 w-full text-left">
                                    {/* Number */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 text-gray-950 font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Question */}
                                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                                        {faq.question}
                                    </h3>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                                <p className="text-gray-900 leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Additional Help */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Still Have Questions?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">📞</div>
                            <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                            <p className="text-gray-900 mb-3">
                                Speak with our course counselors directly
                            </p>
                            <Link
                                href="tel:+917888383788"
                                className="text-gray-950 text-xs md:text-base font-semibold hover:underline inline-block p-2"
                            >
                                +91 788-83-83-788
                            </Link>
                        </div>

                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">✉️</div>
                            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                            <p className="text-gray-900 mb-3">
                                Get detailed information via email
                            </p>
                            <Link
                                href="mailto:contact@cinutedigital.com"
                                className="text-gray-950 text-xs lg:text-base font-semibold hover:underline inline-block p-2"
                            >
                                contact@cinutedigital.com
                            </Link>
                        </div>

                        <div className="text-center border-2 border-orange-500 rounded-2xl p-3 hover:-translate-y-2 transition-all">
                            <div className="text-4xl mb-3">💬</div>
                            <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
                            <p className="text-gray-900 mb-3">
                                Chat with our support team in real-time
                            </p>
                            <Link href="https://wa.me/917888383788" className="text-gray-950 text-xs md:text-base font-semibold hover:underline inline-block p-2">
                                Start Chat
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-900 text-lg mb-6">
                        Ready to start your Tableau learning journey? Enroll now and get started!
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Enroll Now & Get Free Consultation →
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Faq Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}

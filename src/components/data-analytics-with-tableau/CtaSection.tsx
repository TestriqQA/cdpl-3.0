"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function CtaSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Career?
                </h2>

                {/* Subheading */}
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                    Join hundreds of successful professionals who have mastered Tableau and launched rewarding careers in data analytics. Start your journey today with our comprehensive 20-hour course.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <div className="text-4xl mb-3">🎯</div>
                        <h3 className="font-bold text-slate-900 mb-2">Industry-Ready Skills</h3>
                        <p className="text-orange-500 text-sm">
                            Master in-demand Tableau skills valued by top companies
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <div className="text-4xl mb-3">💼</div>
                        <h3 className="font-bold text-slate-900 mb-2">Career Support</h3>
                        <p className="text-orange-500 text-sm">
                            100% job assistance with placement in top companies
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <div className="text-4xl mb-3">🏆</div>
                        <h3 className="font-bold text-slate-900 mb-2">Global Certificate</h3>
                        <p className="text-orange-500 text-sm">
                            Internationally recognized certification with QR validation
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-white cursor-pointer text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all text-lg"
                    >
                        Enroll Now & Get Started →
                    </button>
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="border-2 border-white cursor-pointer text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 hover:bg-opacity-10 transition-all text-lg"
                    >
                        Download Free Syllabus
                    </button>
                </div>

                {/* Limited Time Offer */}
                <div className="bg-white text-slate-900 bg-opacity-20 border-2 border-yellow-300 rounded-lg p-6 mb-12">
                    <p className="font-bold text-lg">
                        ⏰ Limited Time Offer: Get 20% discount on enrollment this month!
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-white">
                    <div>
                        <div className="text-3xl font-bold">500+</div>
                        <p className="text-orange-100 text-sm">Successful Graduates</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">4.8/5</div>
                        <p className="text-orange-100 text-sm">Average Rating</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">5+</div>
                        <p className="text-orange-100 text-sm">Years Experience</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">4 LPA</div>
                        <p className="text-orange-100 text-sm">Average Salary</p>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - CTA Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Tableau Course Page - CTA Section - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

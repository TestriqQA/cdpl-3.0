"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function CtaSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="text-white space-y-8 lg:col-span-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Ready to <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Master</span> Excel?
                            </h2>
                            <p className="text-xl text-blue-100 leading-relaxed">
                                Join thousands of successful professionals who have transformed their careers with our comprehensive Excel training program.
                            </p>
                        </div>

                        {/* Benefits list */}
                        <div className="space-y-4">
                            {[
                                "Expert instructors with extensive industry experience",
                                "job assistance and placement support",
                                "Globally recognized certification",
                                "Real-world projects and hands-on practice",
                                "Flexible learning - Classroom + Online options",
                                "1:1 doubt solving and personal mentoring",
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="bg-gradient-to-r from-[#1d4ed8] to-[#4338ca] hover:from-[#1e40af] hover:to-[#3730a3] cursor-pointer text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                Enroll Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="border-2 border-white text-white cursor-pointer font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
                            >
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Right side - Highlights */}
                    <div className="space-y-6 lg:col-span-4">
                        {/* Highlight cards */}
                        {[
                            {
                                number: "20",
                                label: "Hours",
                                description: "Intensive training program",
                            },
                            {
                                number: "13",
                                label: "Modules",
                                description: "Comprehensive curriculum",
                            },
                            {
                                number: "3",
                                label: "Projects",
                                description: "Real-world applications",
                            },
                            {
                                number: "100%",
                                label: "Support",
                                description: "Job assistance included",
                            },
                        ].map((highlight, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl font-bold text-blue-300">
                                        {highlight.number}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{highlight.label}</p>
                                        <p className="text-blue-100 text-sm">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom section - Limited offer */}
                <div className="mt-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8 text-center">
                    <p className="text-yellow-100 text-lg mb-4">
                        🎉 Limited Time Offer - Enroll Today and Get
                    </p>
                    <h3 className="text-3xl font-bold text-white mb-6">
                        30% Discount + Free Career Consultation
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        This exclusive offer is available for a limited time only. Don&apos;t miss out on your chance to master Excel and transform your career!
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-3 sm:px-6 sm:py-3 md:px-10 md:py-4
    text-sm sm:text-base md:text-lg
    bg-gradient-to-r from-yellow-400 to-orange-500
    hover:from-yellow-500 hover:to-brand
    text-slate-900 font-bold
    rounded-lg
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    break-words
    cursor-pointer
  "
                    >
                        Claim Your Offer Now
                    </button>

                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - CTA Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics & Visualization Course Page - CTA Section - Download Brochure"
                courseName={courseName}
            />
        </section>
    );
}

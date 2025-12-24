"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

const whyProgramData = [
    {
        icon: "🎯",
        title: "80:20 Approach",
        description: "80% practical and 20% theory model for industry-rich experience",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
    },
    {
        icon: "💡",
        title: "Real-Time Projects",
        description: "Gain hands-on experience with real-world projects and case studies",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        icon: "🤝",
        title: "1:1 Doubt Solving",
        description: "Every doubt is resolved with personalized one-on-one support",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
    },
    {
        icon: "👨‍🎓",
        title: "Expert Instructors",
        description: "Learn from seasoned data analysts and industry veterans",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
    },
    {
        icon: "🏅",
        title: "Global Certification",
        description: "Get internationally recognized certificates from AAA",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
    },
    {
        icon: "🚀",
        title: "Career Support",
        description: "Receive resume-building and interview preparation assistance",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200",
    },
];



export default function WhyTableauProgram() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Our Tableau Course?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience industry-leading training with hands-on projects, expert mentorship, and guaranteed job support
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyProgramData.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} border-2 ${feature.borderColor} rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{feature.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Comprehensive Course Features
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-3">🎓</div>
                            <h4 className="font-bold text-gray-900 mb-2">Certification</h4>
                            <p className="text-sm text-gray-600">
                                Globally recognized certificate with QR code validation
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-3">💼</div>
                            <h4 className="font-bold text-gray-900 mb-2">Job Placement</h4>
                            <p className="text-sm text-gray-600">
                                100% job assistance with top companies
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-3">🏆</div>
                            <h4 className="font-bold text-gray-900 mb-2">Industry Experience</h4>
                            <p className="text-sm text-gray-600">
                                5+ years of expertise in IT training
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="text-4xl mb-3">📱</div>
                            <h4 className="font-bold text-gray-900 mb-2">Flexible Learning</h4>
                            <p className="text-sm text-gray-600">
                                Hybrid model - attend online or in-class
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Highlight */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                        <p className="text-gray-700 font-semibold">Successful Graduates</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Placed in top companies worldwide
                        </p>
                    </div>

                    <div className="text-center p-8 bg-orange-50 rounded-xl border-2 border-orange-200">
                        <div className="text-5xl font-bold text-orange-600 mb-2">4.8/5</div>
                        <p className="text-gray-700 font-semibold">Student Rating</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Consistently excellent feedback
                        </p>
                    </div>

                    <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-200">
                        <div className="text-5xl font-bold text-green-600 mb-2">14+</div>
                        <p className="text-gray-700 font-semibold">Years Experience</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Proven track record in training
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Why Program Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}

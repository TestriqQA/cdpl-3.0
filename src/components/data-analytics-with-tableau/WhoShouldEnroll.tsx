"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

const targetAudience = [
    {
        id: 1,
        title: "Beginners",
        description:
            "Those with basic data skills looking to master Tableau and data visualization",
        icon: "🌱",
        bgColor: "bg-green-50",
    },
    {
        id: 2,
        title: "Intermediate Users",
        description:
            "Professionals enhancing their analytics and visualization expertise",
        icon: "📈",
        bgColor: "bg-blue-50",
    },
    {
        id: 3,
        title: "Business Professionals",
        description:
            "Business analysts, data scientists, and managers creating impactful dashboards",
        icon: "💼",
        bgColor: "bg-orange-50",
    },
    {
        id: 4,
        title: "Career Changers",
        description:
            "Technical and non-technical professionals transitioning to data visualization roles",
        icon: "🚀",
        bgColor: "bg-purple-50",
    },
];



export default function WhoShouldEnroll() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Who Should Enroll?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        This course is designed for diverse professionals looking to master Tableau and advance their careers in data analytics
                    </p>
                </div>

                {/* Target Audience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {targetAudience.map((audience) => (
                        <div
                            key={audience.id}
                            className={`${audience.bgColor} rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{audience.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-900 leading-relaxed mb-6">
                                {audience.description}
                            </p>

                            {/* Benefits */}
                            <div className="space-y-2">
                                <p className="font-semibold text-gray-900 text-sm">You will learn:</p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gray-950 font-bold flex-shrink-0">✓</span>
                                        <span className="text-gray-900">Core Tableau concepts and best practices</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gray-950 font-bold flex-shrink-0">✓</span>
                                        <span className="text-gray-900">Advanced visualization techniques</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gray-950 font-bold flex-shrink-0">✓</span>
                                        <span className="text-gray-900">Real-world project experience</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prerequisites */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12 border-2 border-purple-200 mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Prerequisites
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">✅</span> Required
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">Basic Computer Literacy:</span> Comfortable using computers and software
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">Internet Connection:</span> Reliable internet for online sessions
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">Commitment:</span> Willingness to learn and practice
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎯</span> Recommended
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">Data Familiarity:</span> Basic understanding of data concepts
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">Business Knowledge:</span> Understanding of business analytics
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-900">
                                        <span className="font-semibold">SQL Knowledge:</span> Helpful but not required
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* What You Get */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        What You Get After Enrollment
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-200 text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <h4 className="font-bold text-gray-900 mb-2">Comprehensive Content</h4>
                            <p className="text-sm text-gray-900">
                                12 modules with detailed curriculum and learning materials
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200 text-center">
                            <div className="text-4xl mb-3">👨‍🏫</div>
                            <h4 className="font-bold text-gray-900 mb-2">Expert Guidance</h4>
                            <p className="text-sm text-gray-900">
                                1:1 support from industry experts and experienced instructors
                            </p>
                        </div>

                        <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200 text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <h4 className="font-bold text-gray-900 mb-2">Real Projects</h4>
                            <p className="text-sm text-gray-900">
                                Work on industry-relevant projects for portfolio building
                            </p>
                        </div>

                        <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200 text-center">
                            <div className="text-4xl mb-3">🏆</div>
                            <h4 className="font-bold text-gray-900 mb-2">Certification</h4>
                            <p className="text-sm text-gray-900">
                                Globally recognized certificate with QR code validation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Why Students Choose Us
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="text-4xl flex-shrink-0">🌟</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Industry-Aligned Curriculum</h4>
                                <p className="text-gray-900 text-sm">
                                    Our curriculum is designed based on current industry demands and market trends
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl flex-shrink-0">💡</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Practical Learning Approach</h4>
                                <p className="text-gray-900 text-sm">
                                    80% practical exercises and 20% theory for hands-on experience
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl flex-shrink-0">🚀</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Career Acceleration</h4>
                                <p className="text-gray-900 text-sm">
                                    100% job assistance with resume building and interview preparation
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl flex-shrink-0">🎓</div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Flexible Learning</h4>
                                <p className="text-gray-900 text-sm">
                                    Hybrid model with online and classroom options to fit your schedule
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        If you match any of the above profiles, this course is perfect for you!
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-[#7c2d12] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Check Your Eligibility and Enroll
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Who Should Enroll Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}

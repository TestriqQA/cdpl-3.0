"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

const careerRoadmap = [
    {
        id: 1,
        step: "You Enquired",
        description: "Initial inquiry about the course",
        icon: "📞",
    },
    {
        id: 2,
        step: "You Enroll",
        description: "Complete registration and enrollment",
        icon: "✍️",
    },
    {
        id: 3,
        step: "Extensive Training",
        description: "Learn Tableau tools & technologies",
        icon: "📚",
    },
    {
        id: 4,
        step: "Projects & Assignments",
        description: "Work on real-world projects",
        icon: "🎯",
    },
    {
        id: 5,
        step: "Job Readiness",
        description: "Interview prep and portfolio building",
        icon: "💼",
    },
    {
        id: 6,
        step: "Market-Ready Developer",
        description: "Launch your career as a Tableau Developer",
        icon: "🚀",
    },
];



export default function CareerRoadmapSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Your Career Roadmap
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Follow our proven learning path to become a market-ready Tableau developer and launch a successful career in data analytics
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block mb-16">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 transform -translate-y-1/2"></div>

                        {/* Timeline Items */}
                        <div className="grid grid-cols-6 gap-4">
                            {careerRoadmap.map((item) => (
                                <div key={item.id} className="relative">
                                    {/* Circle */}
                                    <div className="flex justify-center mb-8">
                                        <div className="w-16 h-16 bg-white border-4 border-[#d04502] rounded-full flex items-center justify-center text-2xl shadow-lg relative z-10">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all text-center">
                                        <h3 className="font-bold text-gray-900 mb-2">{item.step}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden mb-16">
                    <div className="space-y-6">
                        {careerRoadmap.map((item, index) => (
                            <div key={item.id} className="relative">
                                {/* Vertical Line */}
                                {index !== careerRoadmap.length - 1 && (
                                    <div className="absolute left-8 top-16 w-1 h-12 bg-gradient-to-b from-orange-400 to-purple-400"></div>
                                )}

                                {/* Content */}
                                <div className="flex gap-6">
                                    {/* Circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white border-4 border-[#d04502] rounded-full flex items-center justify-center text-2xl shadow-lg">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Roadmap */}
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-12 border-2 border-orange-200 mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Detailed Learning and Career Path
                    </h3>

                    <div className="space-y-6">
                        {[
                            {
                                phase: "Phase 1: Foundation (Modules 1-2)",
                                duration: "3.5 hours",
                                focus: "BI Concepts and Tableau Setup",
                                outcomes: [
                                    "Understand Business Intelligence fundamentals",
                                    "Install and configure Tableau",
                                    "Explore Tableau interface and features",
                                    "Connect to data sources",
                                ],
                                careerRelevance:
                                    "Build foundational knowledge required for all data analytics roles",
                            },
                            {
                                phase: "Phase 2: Core Skills (Modules 3-6)",
                                duration: "6.5 hours",
                                focus: "Data Integration and Visualization",
                                outcomes: [
                                    "Master data integration techniques",
                                    "Create fundamental charts and visualizations",
                                    "Enhance visualizations with marks and formatting",
                                    "Understand data types and dimensions",
                                ],
                                careerRelevance:
                                    "Develop practical skills for junior analyst positions",
                            },
                            {
                                phase: "Phase 3: Advanced (Modules 7-10)",
                                duration: "6.5 hours",
                                focus: "Advanced Analytics and Dashboards",
                                outcomes: [
                                    "Create advanced visualization techniques",
                                    "Perform complex data analysis",
                                    "Build interactive dashboards",
                                    "Create data stories for stakeholders",
                                ],
                                careerRelevance:
                                    "Qualify for mid-level analyst and business intelligence roles",
                            },
                            {
                                phase: "Phase 4: Mastery (Modules 11-12)",
                                duration: "3 hours",
                                focus: "Real Projects and Certification",
                                outcomes: [
                                    "Complete real-world projects",
                                    "Build professional portfolio",
                                    "Pass final assessment",
                                    "Receive global certification",
                                ],
                                careerRelevance:
                                    "Ready for senior roles and specialized positions",
                            },
                        ].map((phase, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-[#d04502]">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{phase.phase}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{phase.focus}</p>
                                    </div>
                                    <div className="text-right hidden lg:block">
                                        <div className="text-2xl font-bold text-gray-950">{phase.duration}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div>
                                        <h5 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h5>
                                        <ul className="space-y-2">
                                            {phase.outcomes.map((outcome, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <span className="text-gray-950 font-bold flex-shrink-0">✓</span>
                                                    <span>{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                        <h5 className="font-semibold text-blue-900 mb-2">Career Relevance:</h5>
                                        <p className="text-sm text-blue-800">{phase.careerRelevance}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Post-Course Career Path */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        After Course Completion
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                            <div className="text-4xl mb-3">📋</div>
                            <h4 className="font-bold text-gray-900 mb-2">Resume Building</h4>
                            <p className="text-sm text-gray-700">
                                Our team helps optimize your resume with Tableau skills and projects
                            </p>
                        </div>

                        <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                            <div className="text-4xl mb-3">🎤</div>
                            <h4 className="font-bold text-gray-900 mb-2">Interview Prep</h4>
                            <p className="text-sm text-gray-700">
                                Mock interviews and technical preparation for job interviews
                            </p>
                        </div>

                        <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                            <div className="text-4xl mb-3">🤝</div>
                            <h4 className="font-bold text-gray-900 mb-2">Job Placement</h4>
                            <p className="text-sm text-gray-700">
                                Direct connections with top companies hiring Tableau professionals
                            </p>
                        </div>

                        <div className="p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                            <div className="text-4xl mb-3">📈</div>
                            <h4 className="font-bold text-gray-900 mb-2">Career Growth</h4>
                            <p className="text-sm text-gray-700">
                                Ongoing support for career advancement and skill development
                            </p>
                        </div>
                    </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12 border-2 border-purple-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Our Track Record
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-gray-950 mb-3">500+</div>
                            <p className="text-gray-700 font-semibold mb-2">Successful Graduates</p>
                            <p className="text-sm text-gray-600">
                                Placed in top companies worldwide
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-gray-950 mb-3">4 LPA</div>
                            <p className="text-gray-700 font-semibold mb-2">Average Starting Salary</p>
                            <p className="text-sm text-gray-600">
                                For freshers with our certification
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-gray-950 mb-3">100%</div>
                            <p className="text-gray-700 font-semibold mb-2">Job Assistance</p>
                            <p className="text-sm text-gray-600">
                                Guaranteed support for placement
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Ready to start your career transformation? Join our next batch today!
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-[#7c2d12] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Enroll Now and Begin Your Journey
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Career Roadmap Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}

"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

const toolsData = [
    {
        id: 1,
        name: "Tableau",
        category: "Visualization",
        description:
            "Leading data visualization and business intelligence platform",
        icon: "📊",
        bgColor: "bg-orange-100",
        textColor: "text-gray-950",
    },
    {
        id: 2,
        name: "Calculated Fields",
        category: "Data Manipulation",
        description: "Create custom calculations and derived fields in Tableau",
        icon: "🧮",
        bgColor: "bg-blue-100",
        textColor: "text-gray-950",
    },
    {
        id: 3,
        name: "Tableau Server",
        category: "Collaboration",
        description: "Publish and share interactive dashboards across organizations",
        icon: "🖥️",
        bgColor: "bg-green-100",
        textColor: "text-gray-950",
    },
    {
        id: 4,
        name: "Tableau Public",
        category: "Sharing",
        description: "Share interactive visualizations with the public",
        icon: "🌐",
        bgColor: "bg-purple-100",
        textColor: "text-gray-950",
    },
    {
        id: 5,
        name: "Data Blending",
        category: "Data Integration",
        description: "Combine data from multiple sources seamlessly",
        icon: "🔗",
        bgColor: "bg-yellow-100",
        textColor: "text-gray-950",
    },
    {
        id: 6,
        name: "Advanced Analytics",
        category: "Analysis",
        description: "Perform statistical analysis and forecasting",
        icon: "📈",
        bgColor: "bg-pink-100",
        textColor: "text-gray-950",
    },
];



export default function ToolsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Tools & Technologies
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Master industry-standard tools and libraries used by data professionals worldwide
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {toolsData.map((tool) => (
                        <div
                            key={tool.id}
                            className={`${tool.bgColor} rounded-xl p-8 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-1`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{tool.icon}</div>

                            {/* Name */}
                            <h3 className={`${tool.textColor} text-2xl font-bold mb-2`}>
                                {tool.name}
                            </h3>

                            {/* Category */}
                            <div className="inline-block bg-white bg-opacity-50 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 mb-4">
                                {tool.category}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tools Overview */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 border-2 border-orange-200 mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Comprehensive Tool Coverage
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎯</span> Core Tools
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Tableau Desktop:</span> Professional visualization and analytics
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Tableau Public:</span> Free version for learning and sharing
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Tableau Server:</span> Enterprise deployment and collaboration
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">⚡</span> Advanced Features
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Calculated Fields:</span> Custom calculations and expressions
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Data Blending:</span> Combine multiple data sources
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-950 font-bold flex-shrink-0">•</span>
                                    <span className="text-gray-700">
                                        <span className="font-semibold">Advanced Analytics:</span> Statistical analysis and forecasting
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Learning Path for Tools */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Your Learning Path with Tools
                    </h3>

                    <div className="space-y-4">
                        {[
                            {
                                phase: "Phase 1: Foundation",
                                tools: "Tableau Public, Basic Visualizations",
                                duration: "Modules 1-2",
                            },
                            {
                                phase: "Phase 2: Core Skills",
                                tools: "Tableau Desktop, Calculated Fields, Data Integration",
                                duration: "Modules 3-6",
                            },
                            {
                                phase: "Phase 3: Advanced",
                                tools: "Advanced Analytics, Data Blending, Dashboard Design",
                                duration: "Modules 7-10",
                            },
                            {
                                phase: "Phase 4: Mastery",
                                tools: "Tableau Server, Real-world Projects, Optimization",
                                duration: "Modules 11-12",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-950 text-white font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-lg p-6 border-l-4 border-gray-950">
                                    <div className="font-bold text-gray-900 mb-1">{item.phase}</div>
                                    <div className="text-sm text-gray-600 mb-2">{item.duration}</div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Tools:</span> {item.tools}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Ready to master these powerful tools? Start your journey today!
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-[#7c2d12] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Enroll Now and Start Learning →
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Tools Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}

"use client";
import React, { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const projectsData = [
    {
        id: 1,
        title: "Student Performance Dashboard",
        domain: "Education",
        description:
            "Analyze student performance data (grades, attendance, test scores) to create a dashboard for a school district. Identify at-risk students and highlight trends to inform teaching strategies.",
        skills: [
            "Data Analytics",
            "Tableau",
            "Calculated Fields",
            "Data Visualization",
            "Domain Knowledge (Education)",
        ],
        icon: "🎓",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
    },
    {
        id: 2,
        title: "Campaign Performance Analysis",
        domain: "Marketing",
        description:
            "Analyze marketing campaign data (click-through rates, conversions, ROI) to evaluate effectiveness for a digital marketing agency. Create visual stories that guide future campaign strategies.",
        skills: [
            "Data Analytics",
            "Tableau",
            "Data Visualization",
            "Tableau Server",
            "Domain Knowledge (Marketing)",
        ],
        icon: "📱",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
    },
];

const domainKnowledge = [
    { icon: "✈️", label: "Aviation" },
    { icon: "🏥", label: "Healthcare" },
    { icon: "📱", label: <>Telecommu<br className="md:hidden" />nication</> },
    { icon: "🏦", label: "BFSI" },
    { icon: "📱", label: "Social Media" },
    { icon: "🚗", label: "Automobile" },
    { icon: "📊", label: "Sales & Marketing" },
    { icon: "👥", label: "Human Resources" },
    { icon: "📦", label: "Supply Chain" },
];



export default function ProjectsSection() {
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Real-Time Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Work on industry-relevant projects across multiple domains. Gain hands-on experience with real-world datasets and practical applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            {/* Header with Icon */}
                            <div className="bg-gradient-to-r from-[#7c2d12] to-[#ea580c] p-6 text-white">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="text-4xl mb-3">{project.icon}</div>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                    <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-slate-800 text-sm font-semibold">
                                        {project.domain}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6">
                                {/* Description */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Project Overview</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Skills */}
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3">Skills Required</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                    <p className="text-sm text-blue-900">
                                        <span className="font-bold">💡 Key Benefit:</span> Build a portfolio project that showcases your Tableau expertise to potential employers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Domain Knowledge */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12 border-2 border-purple-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Domain Knowledge Coverage
                    </h3>
                    <p className="text-center text-gray-600 mb-8">
                        Our projects span across multiple industries, ensuring you gain exposure to diverse business domains and real-world analytics challenges.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {domainKnowledge.map((domain, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all"
                            >
                                <span className="text-4xl">{domain.icon}</span>
                                <span className="text-sm font-semibold text-center text-gray-700">
                                    {domain.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Benefits */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-orange-50 rounded-xl border-2 border-orange-200">
                        <div className="text-4xl mb-4">🎯</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Portfolio Building
                        </h4>
                        <p className="text-gray-700">
                            Create impressive projects for your portfolio to showcase to potential employers and stand out in interviews.
                        </p>
                    </div>

                    <div className="p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div className="text-4xl mb-4">🌍</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Real-World Experience
                        </h4>
                        <p className="text-gray-700">
                            Work with actual datasets and solve problems faced by industry professionals in real business scenarios.
                        </p>
                    </div>

                    <div className="p-8 bg-green-50 rounded-xl border-2 border-green-200">
                        <div className="text-4xl mb-4">🚀</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Skill Mastery
                        </h4>
                        <p className="text-gray-700">
                            Apply theoretical knowledge to practical scenarios and master data analytics tools with hands-on practice.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="bg-[#7c2d12] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Download Project Details
                    </button>
                </div>
            </div>

            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Tableau Course Page - Projects Section - Download Details"
                courseName={courseName}
            />
        </section>
    );
}

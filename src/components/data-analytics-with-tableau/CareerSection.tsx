"use client";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const careerRoles = [
    {
        id: 1,
        title: "HR Analyst",
        icon: "👥",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
    },
    {
        id: 2,
        title: "Supply Chain Analyst",
        icon: "📦",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
    },
    {
        id: 3,
        title: "Sales Analyst",
        icon: "📊",
        bgColor: "bg-orange-100",
        textColor: "text-orange-600",
    },
    {
        id: 4,
        title: "Reporting Specialist",
        icon: "📈",
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
    },
    {
        id: 5,
        title: "Operations Analyst",
        icon: "⚙️",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
    },
    {
        id: 6,
        title: "Business Intelligence Analyst",
        icon: "💡",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
    },
    {
        id: 7,
        title: "Financial Analyst",
        icon: "💰",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
    },
    {
        id: 8,
        title: "Tableau Developer",
        icon: "💻",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-600",
    },
];

const hiringCompanies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Apple",
    "Meta",
    "Adobe",
    "Salesforce",
    "IBM",
    "Accenture",
    "Deloitte",
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Cognizant",
];



export default function CareerSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Career Opportunities
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore diverse career paths and job roles available for Tableau professionals in today&apos;s job market
                    </p>
                </div>

                {/* Job Roles Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Job Roles You Can Apply For
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {careerRoles.map((role) => (
                            <div
                                key={role.id}
                                className={`${role.bgColor} rounded-xl p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all hover:-translate-y-1 text-center`}
                            >
                                <div className="text-4xl mb-3">{role.icon}</div>
                                <h4 className={`${role.textColor} font-bold text-lg`}>
                                    {role.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Salary & Growth Info */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-200 mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Salary & Career Growth
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-600 mb-3">4 LPA</div>
                            <p className="text-gray-700 font-semibold mb-2">
                                Average Freshers Salary
                            </p>
                            <p className="text-sm text-gray-600">
                                Starting salary for Tableau developers with our certification
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-purple-600 mb-3">8-12 LPA</div>
                            <p className="text-gray-700 font-semibold mb-2">
                                Mid-Level Salary
                            </p>
                            <p className="text-sm text-gray-600">
                                After 2-3 years of experience in the field
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-orange-600 mb-3">15+ LPA</div>
                            <p className="text-gray-700 font-semibold mb-2">
                                Senior Level Salary
                            </p>
                            <p className="text-sm text-gray-600">
                                With advanced skills and leadership experience
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Hiring Companies */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Top Companies Hiring Tableau Developers
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {hiringCompanies.map((company, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-200 p-6 text-center hover:border-orange-300 hover:shadow-md transition-all"
                            >
                                <p className="font-bold text-gray-900">{company}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 mt-8">
                        And many more leading companies across various industries
                    </p>
                </div>

                {/* Career Path */}
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Your Career Path
                    </h3>

                    <div className="space-y-4">
                        {[
                            {
                                stage: "Year 1",
                                role: "Junior Tableau Developer",
                                responsibilities:
                                    "Create basic visualizations, assist in dashboard development, learn from senior team members",
                            },
                            {
                                stage: "Year 2-3",
                                role: "Tableau Developer",
                                responsibilities:
                                    "Design and develop complex dashboards, optimize Tableau workbooks, mentor junior developers",
                            },
                            {
                                stage: "Year 4-5",
                                role: "Senior Tableau Developer",
                                responsibilities:
                                    "Lead BI projects, architect solutions, manage team, consult on analytics strategy",
                            },
                            {
                                stage: "Year 5+",
                                role: "BI Manager / Architect",
                                responsibilities:
                                    "Strategic planning, team management, enterprise-level implementations, consulting",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-11 rounded-lg bg-orange-600 text-white font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white rounded-lg p-6 border-l-4 border-orange-600">
                                    <div className="font-bold text-gray-900 mb-1">{item.stage}</div>
                                    <div className="text-lg font-semibold text-orange-600 mb-2">
                                        {item.role}
                                    </div>
                                    <p className="text-gray-700 text-sm">{item.responsibilities}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Job Market Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div className="text-4xl mb-3">📈</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Market Growth
                        </h4>
                        <p className="text-gray-700 mb-4">
                            The data analytics market is growing at <span className="font-bold text-blue-600">25% annually</span> from 2020 to 2030, creating abundant job opportunities.
                        </p>
                        <p className="text-sm text-gray-600">
                            This growth is driven by increasing demand for data-driven decision making across all industries.
                        </p>
                    </div>

                    <div className="p-8 bg-green-50 rounded-xl border-2 border-green-200">
                        <div className="text-4xl mb-3">💼</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Job Vacancies
                        </h4>
                        <p className="text-gray-700 mb-4">
                            There are over <span className="font-bold text-green-600">101,000+ job vacancies</span> for Tableau professionals in India alone.
                        </p>
                        <p className="text-sm text-gray-600">
                            This creates excellent opportunities for skilled professionals to secure high-paying positions.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Ready to launch your career as a Tableau professional? Start your journey today!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                        >
                            Enroll Now & Secure Your Future →
                        </button>
                        <button
                            onClick={() => setIsSyllabusOpen(true)}
                            className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                        >
                            Download Syllabus
                        </button>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Career Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Tableau Course Page - Career Section - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

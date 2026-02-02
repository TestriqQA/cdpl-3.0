"use client";
import { Briefcase, TrendingUp, Users, ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface JobRole {
    title: string;
    description: string;
    salary: string;
    icon: string;
}

export default function CareerSection() {
    const [isSessionOpen, setIsSessionOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Advanced Data Analytics with Python";

    const jobRoles: JobRole[] = [
        {
            title: "Data Analyst",
            description: "Analyze business data to identify trends and support decision-making",
            salary: "4-6 LPA",
            icon: "📊",
        },
        {
            title: "Business Intelligence Analyst",
            description: "Create dashboards and reports for business insights and strategy",
            salary: "5-7 LPA",
            icon: "📈",
        },
        {
            title: "Data Scientist",
            description: "Build predictive models and machine learning solutions",
            salary: "6-10 LPA",
            icon: "🤖",
        },
        {
            title: "Research Analyst",
            description: "Conduct data research and analysis for market insights",
            salary: "4-6 LPA",
            icon: "🔬",
        },
        {
            title: "Operations Analyst",
            description: "Optimize business operations using data analytics",
            salary: "4-6 LPA",
            icon: "⚙️",
        },
        {
            title: "Supply Chain Analyst",
            description: "Analyze supply chain data to improve efficiency",
            salary: "5-7 LPA",
            icon: "📦",
        },
        {
            title: "Financial Analyst",
            description: "Analyze financial data for investment and risk assessment",
            salary: "6-9 LPA",
            icon: "💰",
        },
        {
            title: "Marketing Analyst",
            description: "Analyze customer and campaign data to drive marketing strategies",
            salary: "4-7 LPA",
            icon: "📣",
        },
        {
            title: "HR Analyst",
            description: "Use data analytics to optimize human resources management",
            salary: "4-6 LPA",
            icon: "👥",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Your <span className="text-brand">Career Path</span> in Data Analytics
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore diverse <strong>career in data analytics</strong> opportunities. Our <strong>python data analysis course</strong> prepares you for roles across multiple industries. Perfect for those asking <strong>how to become a data analyst</strong>.
                    </p>
                </div>

                {/* Job Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {jobRoles.map((role, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {role.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {role.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                {role.description}
                            </p>

                            {/* Salary */}
                            <div className="pt-4 border-t border-slate-300">
                                <p className="text-xs text-slate-600 mb-1">Expected Salary</p>
                                <p className="text-lg font-bold text-brand">{role.salary}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Career Growth Section */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Career Growth & Opportunities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Rapid Career Growth",
                                description: "Data professionals see 40-50% salary growth within 2-3 years of experience",
                            },
                            {
                                icon: <Briefcase className="w-8 h-8" />,
                                title: "Multiple Career Paths",
                                description: "Transition into specialized roles like Data Science, BI, or Analytics Engineering",
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Global Opportunities",
                                description: "Work with top companies globally with remote and on-site positions",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="flex justify-center mb-4 text-brand">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Hiring Companies */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Top Companies Hiring Python Data Analysts
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Google",
                            "Microsoft",
                            "Amazon",
                            "IBM",
                            "TCS",
                            "Infosys",
                            "Accenture",
                            "Deloitte",
                        ].map((company, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-3 lg:p-6 border border-orange-200 text-center hover:shadow-lg transition-shadow"
                            >
                                <p className="font-bold text-slate-900">{company}</p>
                                <p className="text-xs text-slate-600 mt-2">Active Hiring</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => setIsSessionOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        Get Placement Assistance
                        <ArrowRight className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white px-8 py-4 text-base font-semibold text-brand shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    >
                        <Download className="h-5 w-5" />
                        Download Placement Report
                    </button>
                </div>
            </div>

            {/* Modals */}
            <CareerSessionModal
                isOpen={isSessionOpen}
                onClose={() => setIsSessionOpen(false)}
                source="Data Analytics Python Course Page - Career Section - Placement Assistance"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics Python Course Page - Career Section - Download Report"
                courseName={courseName}
            />
        </section>
    );
}

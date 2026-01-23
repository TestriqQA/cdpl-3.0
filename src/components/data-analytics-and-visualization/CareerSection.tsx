"use client";
import { useState } from "react";
import { BarChart3, DollarSign, Target, TrendingUp, Zap, Cog, Package, FileText, Phone, Download } from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";


const jobRoles = [
    {
        title: "Data Analyst",
        description: "Analyze business data and create insights",
        icon: "BarChart3",
    },
    {
        title: "Business Intelligence Analyst",
        description: "Build BI solutions and dashboards",
        icon: "Zap",
    },
    {
        title: "Financial Analyst",
        description: "Analyze financial data and forecasts",
        icon: "DollarSign",
    },
    {
        title: "Marketing Analyst",
        description: "Analyze marketing campaigns and ROI",
        icon: "Target",
    },
    {
        title: "Operations Analyst",
        description: "Optimize operational efficiency",
        icon: "Cog",
    },
    {
        title: "Sales Analyst",
        description: "Analyze sales performance and trends",
        icon: "TrendingUp",
    },
    {
        title: "Supply Chain Analyst",
        description: "Optimize supply chain operations",
        icon: "Package",
    },
    {
        title: "Reporting Specialist",
        description: "Create reports and data visualizations",
        icon: "FileText",
    },
];


export const hiringCompanies = [
    "Deloitte",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "IBM",
    "Microsoft",
    "Google",
    "Amazon",
    "Goldman Sachs",
    "JP Morgan",
    "McKinsey",
    "BCG",
];

const colorClasses = [
    { bg: "bg-blue-100", text: "text-[#1d4ed8]", border: "border-blue-200", gradient: "from-[#1d4ed8] to-[#1e40af]" },
    { bg: "bg-indigo-100", text: "text-[#4338ca]", border: "border-indigo-200", gradient: "from-[#4338ca] to-[#3730a3]" },
    { bg: "bg-cyan-100", text: "text-[#0e7490]", border: "border-cyan-200", gradient: "from-[#0891b2] to-[#0e7490]" },
    { bg: "bg-purple-100", text: "text-[#7e22ce]", border: "border-purple-200", gradient: "from-[#7e22ce] to-[#6b21a8]" },
    { bg: "bg-pink-100", text: "text-[#be185d]", border: "border-pink-200", gradient: "from-[#be185d] to-[#9d174d]" },
    { bg: "bg-green-100", text: "text-[#15803d]", border: "border-green-200", gradient: "from-[#15803d] to-[#166534]" },
    { bg: "bg-orange-100", text: "text-brand", border: "border-orange-200", gradient: "from-[#ff8c00] to-[#ff8c00]" },
    { bg: "bg-red-100", text: "text-[#b91c1c]", border: "border-red-200", gradient: "from-[#b91c1c] to-[#991b1b]" },
];

export default function CareerSection() {
    const [isSessionOpen, setIsSessionOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Career</span> Opportunities
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Excel expertise opens doors to multiple high-paying roles across industries. Explore the career paths available to you.
                    </p>
                </div>

                {/* Job roles grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {jobRoles.map((role, index) => {
                        const icons = [BarChart3, Zap, DollarSign, Target, Cog, TrendingUp, Package, FileText];
                        const Icon = icons[index % icons.length];
                        const color = colorClasses[index % colorClasses.length];

                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-xl border ${color.border} p-6 hover:shadow-lg transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 ${color.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color.bg} ${color.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        {role.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Hiring companies section */}
                <div className="bg-white rounded-2xl border border-slate-200 p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                        Top Companies Hiring Excel Experts
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {hiringCompanies.map((company, index) => (
                            <div
                                key={index}
                                className="group flex items-center justify-center p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-50 to-white"
                            >
                                <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-center">
                                    {company}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Salary and growth section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Salary progression */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Salary Growth Potential
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700 font-medium">Fresher Level</span>
                                <span className="text-lg font-bold text-[#047857]">4 LPA</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <span className="text-slate-700 font-medium">1-2 Years Experience</span>
                                <span className="text-lg font-bold text-[#047857]">6-8 LPA</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <span className="text-slate-700 font-medium">3+ Years Experience</span>
                                <span className="text-lg font-bold text-[#047857]">10-15 LPA</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Career growth paths */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Career Growth Paths
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                    1
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Data Analyst</p>
                                    <p className="text-sm text-slate-600">Entry-level role analyzing business data</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                                    2
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Senior Analyst</p>
                                    <p className="text-sm text-slate-600">Lead analytics projects and mentor juniors</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                                    3
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Analytics Manager</p>
                                    <p className="text-sm text-slate-600">Manage analytics teams and strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                    <button
                        onClick={() => setIsSessionOpen(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d4ed8] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1e40af] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                    >
                        <Phone className="h-5 w-5" />
                        Get Placement Assistance
                    </button>
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-200 bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer"
                    >
                        <Download className="h-5 w-5" />
                        Download Career Report
                    </button>
                </div>
            </div>

            {/* Modals */}
            <CareerSessionModal
                isOpen={isSessionOpen}
                onClose={() => setIsSessionOpen(false)}
                source="Data Analytics & Visualization Course Page - Career Section - Placement Assistance"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics & Visualization Course Page - Career Section - Download Report"
                courseName={courseName}
            />
        </section>
    );
}

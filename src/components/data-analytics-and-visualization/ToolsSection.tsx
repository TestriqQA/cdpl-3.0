"use client";
import { useState } from "react";
import { FileSpreadsheet, Database, Layers, Grid3x3, BarChart3, TrendingUp } from "lucide-react";
import EnrollModal from "../EnrollModal";

const tools = [
    {
        name: "Microsoft Excel",
        category: "Core Tool",
        description: "Advanced Excel features and functions",
        icon: "FileSpreadsheet",
    },
    {
        name: "Power Query",
        category: "Data Transformation",
        description: "Data import and transformation",
        icon: "Database",
    },
    {
        name: "Power Pivot",
        category: "Data Modeling",
        description: "Advanced data modeling",
        icon: "Layers",
    },
    {
        name: "Pivot Tables",
        category: "Data Analysis",
        description: "Data summarization and analysis",
        icon: "Grid3x3",
    },
    {
        name: "Excel Charts",
        category: "Visualization",
        description: "Various chart types and customization",
        icon: "BarChart3",
    },
    {
        name: "Data Analysis ToolPak",
        category: "Statistical Analysis",
        description: "Advanced statistical analysis",
        icon: "TrendingUp",
    },
];


const colorClasses = [
    { bg: "bg-blue-100", text: "text-[#1d4ed8]", border: "border-blue-200", gradient: "from-[#1d4ed8] to-[#1e40af]" },
    { bg: "bg-indigo-100", text: "text-[#4338ca]", border: "border-indigo-200", gradient: "from-[#4338ca] to-[#3730a3]" },
    { bg: "bg-cyan-100", text: "text-[#0e7490]", border: "border-cyan-200", gradient: "from-[#0891b2] to-[#0e7490]" },
    { bg: "bg-purple-100", text: "text-[#7e22ce]", border: "border-purple-200", gradient: "from-[#7e22ce] to-[#6b21a8]" },
    { bg: "bg-pink-100", text: "text-[#be185d]", border: "border-pink-200", gradient: "from-[#be185d] to-[#9d174d]" },
    { bg: "bg-green-100", text: "text-[#15803d]", border: "border-green-200", gradient: "from-[#15803d] to-[#166534]" },
];

export default function ToolsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
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
                        <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Tools</span> & Technologies
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Master industry-standard tools and technologies that are in high demand across all sectors.
                    </p>
                </div>

                {/* Tools grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {tools.map((tool, index) => {
                        const icons = [FileSpreadsheet, Database, Layers, Grid3x3, BarChart3, TrendingUp];
                        const Icon = icons[index % icons.length];
                        const color = colorClasses[index % colorClasses.length];

                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-2xl border ${color.border} p-8 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 ${color.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${color.bg} ${color.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {tool.name}
                                    </h3>
                                    <p className={`text-sm font-semibold ${color.text} mb-3`}>
                                        {tool.category}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        {tool.description}
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

                {/* Tool categories breakdown */}
                <div className="bg-white rounded-2xl border border-slate-200 p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                        Tool Categories Covered
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                category: "Core Excel",
                                tools: ["Advanced Formulas", "Functions", "Automation", "Macros"],
                            },
                            {
                                category: "Data Processing",
                                tools: ["Power Query", "Data Cleaning", "Transformation", "Validation"],
                            },
                            {
                                category: "Analysis",
                                tools: ["PivotTables", "Statistical Analysis", "Forecasting", "Regression"],
                            },
                            {
                                category: "Visualization",
                                tools: ["Charts", "Dashboards", "Sparklines", "Conditional Formatting"],
                            },
                        ].map((category, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6">
                                <h4 className="text-lg font-bold text-slate-900 mb-4">
                                    {category.category}
                                </h4>
                                <ul className="space-y-2">
                                    {category.tools.map((tool, toolIndex) => (
                                        <li key={toolIndex} className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></span>
                                            <span className="text-slate-700">{tool}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why these tools section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Industry Standard",
                            description: "All tools taught are widely used across Fortune 500 companies and startups worldwide.",
                            icon: "🏢",
                        },
                        {
                            title: "Future-Proof Skills",
                            description: "These tools are continuously updated and remain relevant in the evolving data landscape.",
                            icon: "🚀",
                        },
                        {
                            title: "Competitive Advantage",
                            description: "Master tools that give you an edge in the job market and career advancement.",
                            icon: "⭐",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8"
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h4>
                            <p className="text-slate-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Master These Tools
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Tools Section - Master These Tools"
                courseName={courseName}
            />
        </section>
    );
}

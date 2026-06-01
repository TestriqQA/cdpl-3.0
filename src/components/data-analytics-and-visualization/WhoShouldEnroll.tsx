"use client";
import { useState } from "react";
import { Users, GraduationCap, Briefcase, TrendingUp, BarChart3, Target, ArrowRight, Download } from "lucide-react";

import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";


const whoShouldEnroll = [
    {
        category: "Beginners",
        description: "Individuals with basic Excel experience seeking to advance their data analytics skills",
    },
    {
        category: "Career Changers",
        description: "Professionals looking to transition into data analytics and business intelligence roles",
    },
    {
        category: "Business Professionals",
        description: "Managers and executives who want to leverage data for better decision-making",
    },
    {
        category: "Students",
        description: "Graduates and students preparing for roles in data analysis and business intelligence",
    },
    {
        category: "Finance Professionals",
        description: "Those in finance, accounting, or operations seeking advanced analytical skills",
    },
    {
        category: "Marketing Professionals",
        description: "Marketing professionals who want to analyze campaigns and customer data",
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

export default function WhoShouldEnroll() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Who Should <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Enroll</span>?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        This course is designed for anyone looking to master data analytics. Whether you&apos;re a beginner or professional, there&apos;s something for you.
                    </p>
                </div>

                {/* Target audience cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {whoShouldEnroll.map((audience, index) => {
                        const icons = [Users, GraduationCap, Briefcase, TrendingUp, BarChart3, Target];
                        const Icon = icons[index % icons.length];
                        const color = colorClasses[index % colorClasses.length];

                        return (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl border ${color.border} p-8 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 ${color.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${color.bg} ${color.text} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {audience.category}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {audience.description}
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

                {/* Prerequisites section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Prerequisites */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Prerequisites
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Basic Excel Knowledge</p>
                                    <p className="text-sm text-slate-600">Simple formulas and basic charts (recommended but not mandatory)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Computer Access</p>
                                    <p className="text-sm text-slate-600">Windows or Mac with Microsoft Excel installed</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Commitment</p>
                                    <p className="text-sm text-slate-600">20 hours of training over the course duration</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Learning Mindset</p>
                                    <p className="text-sm text-slate-600">Willingness to learn and practice hands-on</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What you get */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            What You&apos;ll Get
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Expert Training</p>
                                    <p className="text-sm text-slate-600">Learn from industry veterans with extensive experience</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Real Projects</p>
                                    <p className="text-sm text-slate-600">Work on industry-relevant projects with real datasets</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Global Certification</p>
                                    <p className="text-sm text-slate-600">Internationally recognized certificate with QR code validation</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                                    ✓
                                </span>
                                <div>
                                    <p className="font-semibold text-slate-900">Placement Support</p>
                                    <p className="text-sm text-slate-600">Resume building, interview prep, and job assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-slate-700 mb-6">
                        Ready to start your Excel mastery journey?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                        >
                            Enroll Now
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsSyllabusOpen(true)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer"
                        >
                            <Download className="h-5 w-5" />
                            Download Syllabus
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Who Should Enroll - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics & Visualization Course Page - Who Should Enroll - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

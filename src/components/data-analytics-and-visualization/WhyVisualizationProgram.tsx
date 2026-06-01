"use client";
import {
    BarChart3,
    Briefcase,
    MessageCircle,
    Users,
    Award,
    Rocket,
    Target,
    Handshake,
} from "lucide-react";
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

const iconMap = {
    BarChart3,
    Briefcase,
    MessageCircle,
    Users,
    Award,
    Rocket,
    Target,
    Handshake,
};

const colorClasses = [
    { bg: "bg-blue-100", text: "text-[#1d4ed8]", border: "border-blue-200" },
    { bg: "bg-indigo-100", text: "text-[#4338ca]", border: "border-indigo-200" },
    { bg: "bg-cyan-100", text: "text-[#0e7490]", border: "border-cyan-200" },
    { bg: "bg-purple-100", text: "text-[#7e22ce]", border: "border-purple-200" },
    { bg: "bg-pink-100", text: "text-[#be185d]", border: "border-pink-200" },
    { bg: "bg-green-100", text: "text-[#047857]", border: "border-green-200" },
    { bg: "bg-orange-100", text: "text-brand", border: "border-orange-200" },
    { bg: "bg-red-100", text: "text-[#b91c1c]", border: "border-red-200" },
];

export const advantages = [
    {
        title: "80:20 Approach",
        description: "80 practical and 20 theory model for industry-rich experience",
        icon: "BarChart3",
    },
    {
        title: "Real-Time Projects",
        description: "Gain hands-on experience with real-world projects and case studies",
        icon: "Briefcase",
    },
    {
        title: "1:1 Doubt Solving",
        description: "The 1:1 doubt solving ensures every question is resolved",
        icon: "MessageCircle",
    },
    {
        title: "Expert Instructors",
        description: "Learn from seasoned data analysts and industry veterans",
        icon: "Users",
    },
    {
        title: "Global Certification",
        description: "Get internationally recognized certificates with unique QR code",
        icon: "Award",
    },
    {
        title: "Career Support",
        description: "Resume building and interview preparation included",
        icon: "Rocket",
    },
    {
        title: "Job Assistance",
        description: "Comprehensive placement support and career guidance",
        icon: "Target",
    },
    {
        title: "Industry Partnerships",
        description: "Work with top global companies and hiring partners",
        icon: "Handshake",
    },
];

export default function WhyVisualizationProgram() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-96 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute -bottom-96 -left-96 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why Choose <span className="bg-gradient-to-r from-orange-500 via-brand to-orange-500 bg-clip-text text-transparent">Cinute Digital</span>?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                        We combine industry expertise with hands-on learning to transform you into a market-ready Excel professional.
                    </p>

                    {/* --- SEO helper paragraph: natural keywords, no UI change --- */}
                    <p className="mt-3 text-slate-600 max-w-5xl mx-auto text-base">
                        Join the <strong>Advanced Excel Training</strong> and{" "}
                        <strong>Data Analytics Course</strong> by Cinute Digital-built for{" "}
                        <strong>freshers</strong> and <strong>working professionals</strong> seeking
                        <strong> placement assistance</strong>, <strong>live project experience</strong>,{" "}
                        and a <strong>globally recognized Excel certification</strong>. Master{" "}
                        <strong>PivotTables</strong>, <strong>Power Query</strong>, <strong>Power Pivot</strong>,{" "}
                        <strong>dashboards</strong>, and <strong>data visualization</strong> to accelerate your
                        <strong> analytics career in India</strong> and beyond.
                    </p>

                    {/* (Optional) sr-only keywords to help relevance without visual clutter */}
                    <span className="sr-only">
                        Keywords: Advanced Excel course, Excel training in Mumbai, data analytics with Excel,
                        Excel dashboard course, Excel placement support, Excel certification with QR code.
                    </span>
                </div>

                {/* Advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => {
                        const Icon = iconMap[advantage.icon as keyof typeof iconMap];
                        const colors = colorClasses[index % colorClasses.length];

                        return (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-xl border ${colors.border} p-6 hover:shadow-lg transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                                ></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.bg} ${colors.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {advantage.description}
                                    </p>

                                    {/* --- SEO micro-copy per card (kept subtle) --- */}
                                    <p className="mt-3 text-xs text-slate-500">
                                        Best for learners seeking <strong>job-ready Excel skills</strong>,{" "}
                                        <strong>analytics career growth</strong>, and{" "}
                                        <strong>interview preparation</strong> with <strong>real-world use cases</strong>.
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.text} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                    style={{
                                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                    }}
                                    aria-hidden="true"
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Key highlights section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Highlight 1 */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
                        <div className="text-4xl font-bold mb-2">80:20</div>
                        <h3 className="text-xl font-semibold mb-3">Practical Learning</h3>
                        <p className="text-blue-100">
                            80% hands-on practice and 20% theory ensures you gain real-world experience with every concept.
                        </p>
                        <p className="mt-3 text-blue-100/90 text-sm">
                            Apply <strong>Excel formulas</strong>, <strong>data cleaning</strong>, and{" "}
                            <strong>dashboard building</strong> in <strong>live projects</strong> to build a
                            <strong> professional portfolio</strong>.
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
                        <div className="text-4xl font-bold mb-2">1:1</div>
                        <h3 className="text-xl font-semibold mb-3">Personal Support</h3>
                        <p className="text-indigo-100">
                            One-on-one doubt solving ensures every question is answered and you never feel lost.
                        </p>
                        <p className="mt-3 text-indigo-100/90 text-sm">
                            Get <strong>mentorship</strong>, <strong>mock interviews</strong>, and{" "}
                            <strong>resume feedback</strong> tailored to your <strong>analytics career path</strong>.
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white shadow-lg">
                        <div className="text-4xl font-bold mb-2">100%</div>
                        <h3 className="text-xl font-semibold mb-3">Job Assistance</h3>
                        <p className="text-cyan-100">
                            Complete placement support including resume building, interview prep, and career guidance.
                        </p>
                        <p className="mt-3 text-cyan-100/90 text-sm">
                            Access <strong>hiring partners</strong>, role-based <strong>interview questions</strong>, and
                            <strong> salary negotiation tips</strong> for <strong>Excel analyst</strong> and
                            <strong> MIS executive</strong> roles.
                        </p>
                    </div>
                </div>

                {/* CTA section */}
                <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Career?
                    </h3>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful students who have mastered Excel and landed their dream jobs.
                    </p>
                    {/* --- SEO callout line with natural keywords --- */}
                    <p className="text-slate-300 mb-6 max-w-3xl mx-auto text-sm">
                        Enroll in our <strong>Advanced Excel course with placement</strong> to learn{" "}
                        <strong>Power Query</strong>, <strong>Power Pivot</strong>, <strong>PivotTables</strong>, and{" "}
                        <strong>dashboarding</strong>—perfect for <strong>Data Analyst</strong>,{" "}
                        <strong>MIS Executive</strong>, and <strong>Business Analyst</strong> roles.
                    </p>

                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg
    text-center font-semibold
    bg-gradient-to-r from-blue-500 to-indigo-600
    hover:from-blue-600 hover:to-indigo-700
    text-white
    rounded-lg
    shadow-lg hover:shadow-xl
    transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
    cursor-pointer
  "
                    >
                        Start Your Journey Today
                    </button>

                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Why Section - Start Journey"
                courseName={courseName}
            />
        </section>
    );
}

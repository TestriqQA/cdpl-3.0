"use client";

import React from "react";
import { TrendingUp, Briefcase, DollarSign, Smile, Globe } from "lucide-react";

interface StatCard {
    icon: React.ReactNode;
    value: string;
    label: string;
    description: string;
    bgGradient: string;
    iconBg: string;
    ariaLabel: string;
}

export default function StatsSection() {
    const stats: StatCard[] = [
        {
            icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
            value: "25%",
            label: "Market Growth",
            description: "Data analytics industry growth from 2020 to 2030",
            bgGradient: "from-blue-50 to-blue-100",
            iconBg: "bg-[#1d4ed8]",
            ariaLabel: "Twenty five percent market growth from 2020 to 2030",
        },
        {
            icon: <Briefcase className="w-6 h-6" aria-hidden="true" />,
            value: "101K+",
            label: "Job Vacancies",
            description: "Active openings for Python Data Analysts in India",
            bgGradient: "from-orange-50 to-orange-100",
            iconBg: "bg-[#d04502]",
            ariaLabel: "Over one hundred and one thousand job vacancies",
        },
        {
            icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
            value: "₹4 LPA",
            label: "Average Salary",
            description: "Typical fresher salary for Python Data Analyst roles",
            bgGradient: "from-green-50 to-green-100",
            iconBg: "bg-green-500",
            ariaLabel: "Average salary four lakh per annum for freshers",
        },
        {
            icon: <Smile className="w-6 h-6" aria-hidden="true" />,
            value: "75%",
            label: "Job Satisfaction",
            description: "Data professionals report high satisfaction rates",
            bgGradient: "from-purple-50 to-purple-100",
            iconBg: "bg-purple-500",
            ariaLabel: "Seventy five percent job satisfaction",
        },
        {
            icon: <Globe className="w-6 h-6" aria-hidden="true" />,
            value: "32%",
            label: "Market Share",
            description: "India’s growing share in global analytics services",
            bgGradient: "from-red-50 to-red-100",
            iconBg: "bg-red-500",
            ariaLabel: "Thirty two percent market share",
        },
    ];

    return (
        <section
            className="py-10 bg-gradient-to-b from-white to-slate-50"
            aria-labelledby="stats-heading"
        >


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <header className="text-center mb-12 md:mb-16">
                    <h2
                        id="stats-heading"
                        className="text-3xl md:text-4xl font-bold mb-4 text-slate-900"
                    >
                        Why Choose Our{" "}
                        <span className="text-[#d04502]">
                            Python Data Analytics Course
                        </span>
                        ?
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
                        Become a job-ready <strong>Python Data Analyst</strong> with an
                        industry-vetted curriculum,{" "}
                        <strong>hands-on projects</strong>, and{" "}
                        <strong>placement assistance</strong>. Learn{" "}
                        <strong>Pandas, NumPy, Matplotlib</strong>, SQL fundamentals,
                        exploratory data analysis (EDA), and reporting skills recruiters
                        actively search for.
                    </p>

                </header>

                {/* Stats Grid */}
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-10 md:mb-14"
                    aria-label="Program statistics"
                >
                    {stats.map((stat, index) => (
                        <li key={index} className="h-full">
                            <article
                                tabIndex={0}
                                aria-label={stat.ariaLabel}
                                className={`h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-5 sm:p-6 border border-slate-200 outline-none transition-all duration-300 hover:border-orange-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-orange-300`}
                            >
                                {/* Icon */}
                                <div
                                    className={`${stat.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}
                                    aria-hidden="true"
                                >
                                    {stat.icon}
                                </div>

                                {/* Value */}
                                <div className="mb-1">
                                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                        {stat.value}
                                    </p>
                                </div>

                                {/* Label */}
                                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-1">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                                    {stat.description}
                                </p>
                            </article>
                        </li>
                    ))}
                </ul>

                <p className="mt-4 text-sm text-center sm:text-base text-slate-600 max-w-4xl mx-auto">
                    <em>Data Analyst Certification</em>,{" "}
                    <em>Data Analytics Training in India</em>,{" "}
                    <em>Fresher Data Analyst Jobs</em>, <em>Average Salary</em>,{" "}
                    <em>Beginner to Job-Ready</em>, <em>Placement Support</em>,{" "}
                    <em>Online & Classroom</em>.
                </p>

                {/* SEO-Rich Key Insight */}
                <div className="mt-10 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl border-2 border-orange-200 p-6 sm:p-8 md:p-10">
                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#d04502] text-white"
                                aria-hidden="true"
                            >
                                <span className="text-xl">💡</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                The Data Revolution is Here - Build a High-Growth Career
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                                Companies across <strong>finance</strong>,{" "}
                                <strong>healthcare</strong>, <strong>retail</strong>,{" "}
                                <strong>technology</strong>, and <strong>marketing</strong> are
                                hiring <strong>Python Data Analysts</strong> to transform raw
                                data into business insights. Our{" "}
                                <strong>job-oriented training</strong> bridges the gap between
                                academics and industry demands with guided projects, interview
                                prep, and portfolio support—so you can land{" "}
                                <strong>fresher data analyst jobs</strong> in India with
                                confidence.
                            </p>

                            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm sm:text-[15px]">
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Career-ready skills:</strong> Python, Pandas, NumPy,
                                        EDA, Visualization, Basic SQL
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Portfolio projects</strong> that showcase business
                                        impact and storytelling
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Interview support</strong>: resume review, mock
                                        interviews, and recruiter playbook
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Flexible learning</strong>: online or classroom,
                                        weekend and evening schedules
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                                Keywords: Python Data Analytics Course in India • Data Analyst
                                Certification • Placement Assistance • Fresher Data Analyst Jobs
                                • Average Salary for Data Analysts • EDA • SQL • Pandas • NumPy
                                • Matplotlib • Job-Oriented Training.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

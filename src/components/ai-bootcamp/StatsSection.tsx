"use client";

import React, { useState } from "react";
import { TrendingUp, Award, Users, Zap } from "lucide-react";
import EnrollModal from "@/components/EnrollModal";

interface Stat {
    value: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgGradient: string;
    iconBg: string;
    ariaLabel: string;
}

const stats: Stat[] = [
    {
        value: "$671.86B",
        label: "Global Market Value",
        description: "Digital marketing market by 2028",
        icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
        color: "text-blue-600",
        bgGradient: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-500",
        ariaLabel: "Six hundred seventy one point eight six billion dollars global digital marketing market value by 2028",
    },
    {
        value: "#4",
        label: "High-Income Skill",
        description: "Globally (Forbes 2024)",
        icon: <Award className="w-6 h-6" aria-hidden="true" />,
        color: "text-pink-600",
        bgGradient: "from-pink-50 to-pink-100",
        iconBg: "bg-pink-500",
        ariaLabel: "Rank four high income skill globally according to Forbes 2024",
    },
    {
        value: "#3",
        label: "Most In-Demand Skill",
        description: "According to Michael Page 2023",
        icon: <Zap className="w-6 h-6" aria-hidden="true" />,
        color: "text-orange-600",
        bgGradient: "from-orange-50 to-orange-100",
        iconBg: "bg-orange-500",
        ariaLabel: "Rank three most in demand skill according to Michael Page 2023",
    },
    {
        value: "141,000+",
        label: "Job Opportunities",
        description: "Digital marketing jobs worldwide",
        icon: <Users className="w-6 h-6" aria-hidden="true" />,
        color: "text-green-600",
        bgGradient: "from-green-50 to-green-100",
        iconBg: "bg-green-500",
        ariaLabel: "Over one hundred forty one thousand digital marketing job opportunities worldwide",
    },
];

export default function StatsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

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
                        The Numbers Don&apos;t Lie:
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Your Future in Digital Marketing
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto">
                        Discover why digital marketing is one of the most lucrative and in-demand
                        careers in 2024 and beyond. Build a future-ready career in{" "}
                        <strong>SEO, SEM, social media marketing, performance marketing</strong>, and{" "}
                        <strong>AI-powered digital campaigns</strong> with a practical, job-oriented
                        digital marketing course designed for students, freshers, and working
                        professionals.
                    </p>
                </header>

                {/* Stats Grid */}
                <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 md:mb-14"
                    aria-label="Digital marketing industry statistics"
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
                                    <p
                                        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight ${stat.color}`}
                                    >
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

                {/* SEO-rich mini keyword line */}
                <p className="mt-4 text-sm text-center sm:text-base text-slate-600 max-w-4xl mx-auto">
                    <em>Digital Marketing Course in Mumbai</em> •{" "}
                    <em>Digital Marketing with AI Bootcamp</em> •{" "}
                    <em>Performance Marketing & PPC Training</em> •{" "}
                    <em>SEO & Social Media Marketing Certification</em> •{" "}
                    <em>Job-Oriented Digital Marketing Training with 100% Assistance</em>.
                </p>

                {/* SEO-Rich Key Insight + Original CTA */}
                <div className="mt-10 bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl border-2 border-orange-200 p-6 sm:p-8 md:p-10">
                    <div className="flex items-start gap-4 sm:gap-6 flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-500 text-white"
                                aria-hidden="true"
                            >
                                <span className="text-xl">💡</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                Digital Marketing &amp; AI Are Exploding — Secure Your High-Income Career
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                                Brands across <strong>e-commerce</strong>, <strong>fintech</strong>,{" "}
                                <strong>education</strong>, <strong>real estate</strong>,{" "}
                                <strong>hospitality</strong>, and <strong>startups</strong> are investing
                                heavily in <strong>performance marketing</strong>,{" "}
                                <strong>social media ads</strong>, <strong>SEO</strong>, and{" "}
                                <strong>AI-driven marketing automation</strong>. Skilled{" "}
                                <strong>digital marketers</strong> who understand funnels, analytics, and
                                AI tools are landing <strong>high-paying roles</strong> as Digital
                                Marketing Specialists, Performance Marketers, Growth Marketers, and Marketing
                                Strategists.
                            </p>

                            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm sm:text-[15px]">
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Career-focused curriculum:</strong> SEO, SEM, SMM, email
                                        marketing, AI tools, analytics, and conversion optimization.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Hands-on projects:</strong> real ad campaigns, landing
                                        pages, funnels, and reporting dashboards for your portfolio.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Job assistance:</strong> resume optimisation, LinkedIn
                                        branding, interview preparation, and salary negotiation guidance.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden="true">✅</span>
                                    <span>
                                        <strong>Flexible learning:</strong> weekend &amp; weekday batches,
                                        online + classroom options suitable for students &amp; working
                                        professionals.
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-4 text-slate-600 text-xs sm:text-sm">
                                Keywords: digital marketing course in Mumbai • digital marketing with AI
                                training • performance marketing course • SEO and PPC certification • social
                                media marketing institute • online digital marketing bootcamp • job oriented
                                digital marketing course with placement • high-income digital marketing
                                skills.
                            </p>

                            {/* Original Bottom CTA (content unchanged) */}
                            <div className="mt-6 text-center sm:text-left">
                                <p className="text-gray-600 mb-6">
                                    Ready to be part of this booming industry? Our bootcamp prepares you
                                    for high-paying roles in just 30 hours.
                                </p>
                                <button
                                    onClick={() => setIsEnrollOpen(true)}
                                    className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                                >
                                    Start Your Journey Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Stats Section"
                courseName={courseName}
            />
        </section>
    );
}

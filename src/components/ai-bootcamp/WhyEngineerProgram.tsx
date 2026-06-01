"use client";

import React from "react";
import { Zap, Users, Award, Lightbulb, Target, Rocket } from "lucide-react";

interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight: string;
    bgColor: string;
    borderColor: string;
}

const features: FeatureCard[] = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: "AI-Powered Curriculum",
        description:
            "The only program that deeply integrates AI tools like ChatGPT, Grok, and DeepSeek into every module.",
        highlight: "AI Marketing Mastery",
        bgColor: "from-amber-50 to-amber-100",
        borderColor: "border-amber-300",
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Job Assistance",
        description:
            "Resume building, interview preparation, and direct access to job openings from partner companies.",
        highlight: "Placement Support",
        bgColor: "from-blue-50 to-blue-100",
        borderColor: "border-blue-300",
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "80:20 Practical Approach",
        description:
            "80% hands-on projects and case studies ensure you are job-ready from day one.",
        highlight: "Practical Training",
        bgColor: "from-green-50 to-green-100",
        borderColor: "border-green-300",
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Expert-Led Mentorship",
        description:
            "Learn from industry veterans with extensive expertise and 1:1 doubt-solving sessions.",
        highlight: "Mentor Driven",
        bgColor: "from-purple-50 to-purple-100",
        borderColor: "border-purple-300",
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Global Certification",
        description:
            "Internationally recognized certificate from AAA, validated with a unique QR code.",
        highlight: "Global Credential",
        bgColor: "from-red-50 to-red-100",
        borderColor: "border-red-300",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Lifetime Career Support",
        description:
            "Access to our network, mentorship, and career guidance long after graduation.",
        highlight: "Long-Term Growth",
        bgColor: "from-cyan-50 to-cyan-100",
        borderColor: "border-cyan-300",
    },
];

export default function WhyEngineerProgram() {
    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Why This is the ONLY{" "}
                        <span className="text-brand">
                            Digital Marketing Program You Need
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        We don&apos;t just teach theory; we build{" "}
                        <strong>highly skilled Digital Marketers</strong> through an industry-vetted,
                        results-driven methodology that blends{" "}
                        <strong>AI-powered digital marketing</strong>,{" "}
                        <strong>performance marketing</strong>,{" "}
                        <strong>SEO, social media marketing, and PPC advertising</strong> into
                        one career-focused program.
                    </p>
                </div>

                {/* Features Grid – layout same as advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${feature.bgColor} rounded-xl p-6 border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-300 group`}
                        >
                            {/* Icon Container */}
                            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <div className="text-brand">{feature.icon}</div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                {feature.title}
                            </h3>

                            {/* Highlight Badge */}
                            <div className="inline-block mb-3">
                                <span className="text-xs font-semibold text-brand bg-orange-100/60 px-3 py-1 rounded-full">
                                    {feature.highlight}
                                </span>
                            </div>

                            {/* Description (original content preserved) */}
                            <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why This Matters Section – SEO focused, keeps your bottom stats content */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-4xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Build a Future-Proof Digital Marketing Career with AI
                        </h3>
                        <p className="text-slate-200 leading-relaxed mb-6 text-sm sm:text-base">
                            This <strong>Digital Marketing with AI program</strong> is crafted for
                            students, freshers, and working professionals who want to dominate in{" "}
                            <strong>SEO</strong>, <strong>Google Ads</strong>,{" "}
                            <strong>Meta Ads</strong>, <strong>social media marketing</strong>,{" "}
                            <strong>email automation</strong>, and{" "}
                            <strong>AI-based content &amp; campaign optimization</strong>. With an{" "}
                            <strong>80:20 practical learning model</strong>, real client-style
                            projects, and <strong>job assistance</strong>, you&apos;ll be
                            ready to work as a{" "}
                            <strong>
                                Digital Marketing Executive, Performance Marketer, Growth Marketer,
                                or Marketing Strategist
                            </strong>{" "}
                            in top agencies, startups, and brands.
                        </p>

                        {/* Original bottom stats content preserved & integrated */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-1">
                                    4.9/5
                                </div>
                                <p className="text-slate-200 text-sm sm:text-base">
                                    Verified Learner Rating
                                </p>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-1">
                                    425+
                                </div>
                                <p className="text-slate-200 text-sm sm:text-base">
                                    Verified Reviews
                                </p>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-1">
                                    1:1
                                </div>
                                <p className="text-slate-200 text-sm sm:text-base">
                                    Mentorship &amp; Support
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 text-2xl mt-1">✓</span>
                                <div>
                                    <p className="font-semibold text-white">
                                        Industry-Aligned Digital Marketing Curriculum
                                    </p>
                                    <p className="text-sm text-slate-300">
                                        Covers SEO, SEM, SMM, content marketing, marketing funnels,
                                        analytics, and AI marketing tools.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 text-2xl mt-1">✓</span>
                                <div>
                                    <p className="font-semibold text-white">
                                        Proven Success &amp; Career Outcomes
                                    </p>
                                    <p className="text-sm text-slate-300">
                                        Students trained with{" "}
                                        <strong>placement assistance</strong> across agencies,
                                        brands, and startups.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300">
                            Keywords: Digital Marketing Course in Mumbai • Digital Marketing with AI
                            Bootcamp • Performance Marketing Training • SEO and PPC Course • Social
                            Media Marketing Certification • AI Tools for Marketing (ChatGPT, Grok,
                            DeepSeek) • Job-Oriented Digital Marketing Program • Job Assistance
                            • Comprehensive Digital Marketing Institute in Mumbai.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

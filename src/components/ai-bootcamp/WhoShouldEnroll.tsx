"use client";

import React, { useState } from "react";
import { Users, Briefcase, Lightbulb, Zap, CheckCircle } from "lucide-react";
import EnrollModal from "@/components/EnrollModal";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Audience {
    title: string;
    transformation: string;
    benefit: string;
    icon: IconType;
    bgClass: string;
    iconClass: string;
    idealFor: string[];
}

const audiences: Audience[] = [
    {
        title: "Students & Fresh Graduates",
        transformation: "Career Launchpad",
        benefit:
            "Build job-ready digital marketing skills and kickstart your career without needing a coding background, even if you are completely new to performance marketing or AI tools.",
        icon: Users,
        bgClass: "bg-blue-50",
        iconClass: "text-blue-600",
        idealFor: [
            "Final-year students who want a practical digital marketing certification",
            "Fresh graduates targeting entry-level digital marketing jobs and internships",
            "Job seekers aiming for in-demand roles like Digital Marketing Executive or SEO Analyst",
        ],
    },
    {
        title: "Working Professionals",
        transformation: "Strategic Upskilling",
        benefit:
            "Future-proof your role by mastering AI-driven marketing, data-led decision-making, and advanced analytics to switch to high-paying digital roles in India and globally.",
        icon: Briefcase,
        bgClass: "bg-orange-50",
        iconClass: "text-brand",
        idealFor: [
            "Professionals from sales, marketing, IT, HR, or operations looking to transition into digital marketing",
            "Mid-career professionals who want promotions, salary hikes, or leadership roles in growth marketing",
            "Working executives who want to add a strong digital marketing & AI skill set to their resume",
        ],
    },
    {
        title: "Entrepreneurs & Business Owners",
        transformation: "Growth Accelerator",
        benefit:
            "Take control of your business growth by mastering online customer acquisition, performance marketing funnels, and retention strategies across Google, Meta, and other digital platforms.",
        icon: Lightbulb,
        bgClass: "bg-amber-50",
        iconClass: "text-amber-600",
        idealFor: [
            "Startup founders who want to reduce dependency on agencies and freelancers",
            "Local business owners who want more leads and sales through Facebook, Instagram, and Google Ads",
            "E-commerce, D2C, and small business owners looking to scale with ROI-focused digital strategies",
        ],
    },
    {
        title: "Freelancers & Creators",
        transformation: "Monetization Expert",
        benefit:
            "Master digital tools to monetize your content, attract premium clients, and scale your global income using SEO, social media marketing, funnels, and AI-powered automation.",
        icon: Zap,
        bgClass: "bg-green-50",
        iconClass: "text-green-600",
        idealFor: [
            "Freelancers offering social media management, ads, content, or SEO services",
            "Content creators, influencers, and YouTubers who want to grow reach and revenue",
            "Remote professionals who want to build a global digital marketing client base",
        ],
    },
];

const prerequisites = [
    {
        category: "Essential",
        items: [
            "No coding or prior digital marketing experience required – we start from scratch",
            "Basic computer literacy and familiarity with using the internet and social media",
            "Laptop/PC with stable internet connection for live sessions and hands-on practice",
        ],
    },
    {
        category: "Recommended",
        items: [
            "6–8 hours per week to learn, practice, and implement digital marketing strategies",
            "Interest in online business, branding, social media, or performance marketing",
            "Basic understanding of how businesses attract and serve customers (any domain)",
        ],
    },
    {
        category: "Mindset & Commitment",
        items: [
            "Strong commitment to apply real-world marketing strategies and complete assignments",
            "Willingness to experiment, analyze campaign performance, and learn from data",
            "Growth mindset to continuously upgrade skills with new AI and digital tools",
        ],
    },
];

export default function WhoShouldEnroll() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20 animate-fadeInUp">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                        Who is Ready to Accelerate
                        <br />
                        <span className="gradient-text">
                            Their Digital Marketing Career?
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        This digital marketing and AI-powered growth program is meticulously
                        crafted for students, working professionals, entrepreneurs, and
                        freelancers who want to dominate the online space and become
                        high-demand{" "}
                        <strong>
                            digital marketing professionals, performance marketers, and growth strategists.
                        </strong>
                    </p>
                </div>

                {/* Audience Segments – same layout as reference section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {audiences.map((audience, index) => {
                        const Icon = audience.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 feature-card group animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${audience.bgClass} group-hover:scale-110 transition-transform`}
                                >
                                    <Icon className={`w-8 h-8 ${audience.iconClass}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {audience.title}
                                </h3>

                                {/* Transformation Badge */}
                                <div className="badge-primary text-gray-700 mb-4">
                                    {audience.transformation}
                                </div>

                                {/* Benefit */}
                                <p className="text-slate-600 leading-relaxed mb-5">
                                    {audience.benefit}
                                </p>

                                {/* Ideal For List */}
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 mb-3">
                                        This track is ideal if you want to:
                                    </p>
                                    <ul className="space-y-2">
                                        {audience.idealFor.map((point, ridx) => (
                                            <li
                                                key={ridx}
                                                className="flex items-start gap-2 text-sm text-slate-600"
                                            >
                                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Prerequisites / What You Need to Succeed */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12 animate-fadeInUp">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        What You Need to Succeed in This Digital Marketing Bootcamp
                    </h3>
                    <p className="text-slate-200 mb-8 max-w-3xl">
                        You don&apos;t need to be a coder or tech expert. This{" "}
                        <strong>industry-focused digital marketing course with AI tools</strong> is
                        designed for beginners as well as experienced professionals who are ready
                        to put in consistent effort and implement what they learn in real-world
                        campaigns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {prerequisites.map((group, idx) => (
                            <div key={idx}>
                                <h4 className="text-lg font-bold text-blue-300 mb-4">
                                    {group.category}
                                </h4>
                                <ul className="space-y-3">
                                    {group.items.map((item, iidx) => (
                                        <li key={iidx} className="flex items-start gap-3">
                                            <span className="text-blue-300 mt-1">✓</span>
                                            <span className="text-slate-200 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success / Bottom CTA */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 animate-fadeInUp">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center md:text-left">
                        What You Need to Succeed
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center md:text-left">
                            <div className="text-4xl mb-4">✓</div>
                            <h4 className="font-bold text-slate-900 mb-2">
                                No Prerequisites
                            </h4>
                            <p className="text-slate-600">
                                No coding or prior marketing experience required. We start from
                                scratch and guide you step-by-step into{" "}
                                <strong>
                                    digital marketing, performance ads, and AI automation.
                                </strong>
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-4xl mb-4">⏰</div>
                            <h4 className="font-bold text-slate-900 mb-2">6–8 Hours Weekly</h4>
                            <p className="text-slate-600">
                                Flexible schedule that fits your lifestyle. Learn at your own pace
                                with{" "}
                                <strong>
                                    live classes, recorded sessions, and hands-on digital marketing projects.
                                </strong>
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="text-4xl mb-4">🎯</div>
                            <h4 className="font-bold text-slate-900 mb-2">Commitment</h4>
                            <p className="text-slate-600">
                                Dedication to learning and applying real-world{" "}
                                <strong>
                                    SEO, social media marketing, Google Ads, and AI-led growth strategies
                                </strong>{" "}
                                to build a strong portfolio and career.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-slate-700 mb-6 text-lg max-w-4xl mx-auto">
                            Regardless of your background, this{" "}
                            <strong>digital marketing & AI bootcamp</strong> is designed to transform
                            you into a sought-after{" "}
                            <strong>
                                digital marketing specialist, performance marketer, or growth strategist
                            </strong>{" "}
                            with in-demand, job-ready skills.
                        </p>
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-brand hover:to-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            Check Your Eligibility
                        </button>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Who Should Enroll"
                courseName={courseName}
            />
        </section>
    );
}

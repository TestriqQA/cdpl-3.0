"use client";

import React from "react";
import {
    Briefcase,
    Code,
    TrendingUp,
    Shield,
    Zap,
    Users,
    BarChart3,
} from "lucide-react";

interface Project {
    title: string;
    domain: string;
    description: string;
    skills: string[];
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
}

const projects: Project[] = [
    {
        title: "AI-Driven Content Strategy",
        domain: "Content & SEO",
        description:
            "Develop a 90-day content calendar for a startup using ChatGPT and DeepSeek, focusing on high-ranking SEO keywords.",
        skills: ["ChatGPT", "SEO", "Content Planning", "AI Tools"],
        icon: <Code className="w-8 h-8" />,
        bgColor: "from-blue-50 to-blue-100",
        borderColor: "border-blue-300",
    },
    {
        title: "Full-Funnel Paid Campaign",
        domain: "Performance Marketing",
        description:
            "Launch and optimize a Google Search and Meta Ads campaign, including pixel installation, audience segmentation, and A/B testing.",
        skills: ["Google Ads", "Meta Ads", "A/B Testing", "Analytics"],
        icon: <TrendingUp className="w-8 h-8" />,
        bgColor: "from-emerald-50 to-emerald-100",
        borderColor: "border-emerald-300",
    },
    {
        title: "Technical SEO Audit",
        domain: "SEO",
        description:
            "Conduct a full technical SEO audit for an e-commerce site, optimizing sitemaps, robots.txt, and improving page speed.",
        skills: ["SEO", "Technical SEO", "Site Speed", "Tools"],
        icon: <Briefcase className="w-8 h-8" />,
        bgColor: "from-amber-50 to-amber-100",
        borderColor: "border-amber-300",
    },
    {
        title: "ORM Crisis Management",
        domain: "Brand & Reputation",
        description:
            "Simulate an online reputation crisis and execute a full ORM strategy, including review response and positive content generation.",
        skills: ["ORM", "Crisis Management", "Brand Protection", "Strategy"],
        icon: <Shield className="w-8 h-8" />,
        bgColor: "from-rose-50 to-rose-100",
        borderColor: "border-rose-300",
    },
];

const domains = [
    { name: "E-commerce & D2C Brands", icon: "🛒" },
    { name: "Real Estate & Property", icon: "🏠" },
    { name: "Education & EdTech", icon: "🎓" },
    { name: "Healthcare & Clinics", icon: "🏥" },
    { name: "Local & Service Businesses", icon: "📍" },
    { name: "SaaS & Tech Startups", icon: "💻" },
    { name: "Agencies & Freelancers", icon: "🤝" },
    { name: "Personal Brands & Coaches", icon: "👤" },
    { name: "B2B & Enterprise", icon: "🏢" },
];

export default function ProjectsSection() {
    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Build a Portfolio That Gets You Hired
                        <br />
                        <span className="text-brand">Real-World Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        Apply your knowledge to a comprehensive{" "}
                        <strong>Capstone Project</strong> and a series of{" "}
                        <strong>real-time digital marketing case studies</strong>, ensuring you have
                        a demonstrable portfolio for interviews. These projects are designed to
                        impress hiring managers for roles like{" "}
                        <strong>Digital Marketing Executive</strong>,{" "}
                        <strong>Performance Marketer</strong>,{" "}
                        <strong>SEO Specialist</strong>, and{" "}
                        <strong>Social Media Strategist</strong>.
                    </p>
                </div>

                {/* Featured Projects – same layout style as reference */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`bg-gradient-to-br ${project.bgColor} rounded-xl p-8 border-2 ${project.borderColor} hover:shadow-xl transition-all duration-300`}
                        >
                            {/* Icon */}
                            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 text-brand">
                                {project.icon}
                            </div>

                            {/* Domain Badge */}
                            <div className="mb-3">
                                <span className="text-xs font-bold text-brand bg-orange-100/60 px-3 py-1 rounded-full">
                                    Domain: {project.domain}
                                </span>
                            </div>

                            {/* Title (unchanged content) */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {project.title}
                            </h3>

                            {/* Description (unchanged content) */}
                            <p className="text-slate-600 leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/* Skills (unchanged content) */}
                            <div>
                                <p className="text-sm font-semibold text-slate-900 mb-2">
                                    Skills You&apos;ll Practice:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, sidx) => (
                                        <span
                                            key={sidx}
                                            className="text-xs bg-white/70 text-slate-700 px-3 py-1 rounded-full border border-orange-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Domain Knowledge Section – adapted to digital marketing niches */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Domain Coverage for Real-World Digital Marketing
                    </h3>
                    <p className="text-slate-200 mb-8 leading-relaxed">
                        Our digital marketing projects span multiple industries, so you learn how
                        to apply <strong>SEO</strong>, <strong>Google Ads</strong>,{" "}
                        <strong>Meta (Facebook &amp; Instagram) Ads</strong>,{" "}
                        <strong>content marketing</strong>, and{" "}
                        <strong>online reputation management</strong> in real business scenarios.
                        This helps you stand out in{" "}
                        <strong>digital marketing job interviews</strong> and makes your portfolio
                        relevant to agencies, brands, and startups.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {domains.map((domain, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-orange-400 transition-colors text-center"
                            >
                                <div className="text-3xl mb-2">{domain.icon}</div>
                                <p className="text-sm font-semibold text-white">{domain.name}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-xs sm:text-sm text-slate-300">
                        Keywords: <em>digital marketing live projects</em>,{" "}
                        <em>performance marketing projects</em>,{" "}
                        <em>SEO &amp; PPC hands-on training</em>,{" "}
                        <em>social media marketing projects</em>,{" "}
                        <em>digital marketing course with real projects</em>,{" "}
                        <em>portfolio-focused digital marketing bootcamp</em>.
                    </p>
                </div>

                {/* Project Benefits – SEO-rich, same layout as reference */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            icon: <BarChart3 className="w-8 h-8" />,
                            title: "Portfolio That Stands Out",
                            description:
                                "Create a strong digital marketing portfolio with real campaigns, audits, and AI-driven strategies you can showcase to hiring managers and clients.",
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Interview-Ready Experience",
                            description:
                                "Speak confidently about SEO, Google Ads, Meta Ads, ORM, and AI tools using real project outcomes, not just theory or templates.",
                        },
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: "Skill & Tool Mastery",
                            description:
                                "Master in-demand tools like ChatGPT, DeepSeek, Google Ads, Meta Ads, GA4, and technical SEO by implementing them in real-world-like scenarios.",
                        },
                    ].map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200"
                        >
                            <div className="text-brand mb-3">{benefit.icon}</div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                                {benefit.title}
                            </h4>
                            <p className="text-slate-600 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Capstone Highlight – original content preserved, styled to match page */}
                <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Capstone Project: Build a Full Multi-Channel Strategy
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                In Module 20, you&apos;ll bring everything together. Select a real
                                brand or startup, create a comprehensive multi-channel digital
                                marketing strategy, and present your findings to industry experts.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                                    <span className="text-slate-700">
                                        Tool Integration &amp; Reporting
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                                    <span className="text-slate-700">
                                        Professional Presentation Design
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                                    <span className="text-slate-700">
                                        Final Pitch &amp; Peer Review
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-5 text-sm text-slate-600">
                                This capstone becomes the centerpiece of your{" "}
                                <strong>digital marketing portfolio</strong>, showcasing your
                                ability to plan, execute, and report on{" "}
                                <strong>SEO, performance marketing, social media, and automation</strong>{" "}
                                in one unified strategy—exactly what recruiters look for when hiring
                                for <em>digital marketing jobs in India and abroad</em>.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-8 flex items-center justify-center min-h-64">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎯</div>
                                <p className="text-slate-700 font-semibold">
                                    Your Portfolio Showcase
                                </p>
                                <p className="text-slate-600 text-sm mt-2">
                                    Use this capstone project as a talking point in{" "}
                                    <strong>interviews, client pitches, and freelance proposals</strong>{" "}
                                    to win trust and opportunities faster.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

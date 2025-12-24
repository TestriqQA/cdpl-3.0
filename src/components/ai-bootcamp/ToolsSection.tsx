"use client";

import { Zap, BarChart3, Mail, Smartphone } from "lucide-react";
import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

interface ToolCategory {
    title: string;
    description: string;
    icon: React.ReactNode;
    tools: string[];
    color: string;
}

interface ToolCard {
    name: string;
    category: string;
    description: string;
    icon: string;
    color: string;
}

const toolCategories: ToolCategory[] = [
    {
        title: "AI & Content Tools",
        description: "AI-powered tools for content generation and strategy",
        icon: <Zap className="w-8 h-8" />,
        tools: ["ChatGPT", "Grok", "DeepSeek", "Canva"],
        color: "icon-bg-primary",
    },
    {
        title: "SEO & Analytics",
        description: "Competitor analysis and keyword research tools",
        icon: <BarChart3 className="w-8 h-8" />,
        tools: ["SEMrush", "Ahrefs", "Ubersuggest", "Google Search Console", "GA4", "Google Trends"],
        color: "icon-bg-accent",
    },
    {
        title: "Email & CRM",
        description: "Email marketing and customer relationship management",
        icon: <Mail className="w-8 h-8" />,
        tools: ["Mailchimp", "ConvertKit", "Google Calendar"],
        color: "icon-bg-secondary",
    },
    {
        title: "Paid Media",
        description: "Advertising platforms and campaign management",
        icon: <Smartphone className="w-8 h-8" />,
        tools: ["Google Ads", "Meta Business Suite", "Facebook Ads", "Instagram Ads"],
        color: "bg-green-100 text-green-600",
    },
];

// Flat tool list for the grid – names preserved from original section
const tools: ToolCard[] = [
    {
        name: "ChatGPT",
        category: "AI Copywriting & Marketing Automation",
        description:
            "Use ChatGPT to create high-converting ad copy, SEO blogs, landing page content, and marketing automation workflows faster.",
        icon: "🤖",
        color: "from-blue-50 to-blue-100",
    },
    {
        name: "Grok",
        category: "AI Insights & Trend Analysis",
        description:
            "Leverage Grok for real-time insights, market trend analysis, and performance marketing ideas powered by AI.",
        icon: "📡",
        color: "from-indigo-50 to-indigo-100",
    },
    {
        name: "DeepSeek",
        category: "Advanced AI Research",
        description:
            "Tap into DeepSeek for in-depth research, data-backed content strategy, and long-form digital marketing assets.",
        icon: "🧠",
        color: "from-purple-50 to-purple-100",
    },
    {
        name: "Canva",
        category: "Creative Design & Ad Creatives",
        description:
            "Design high-performing social media creatives, ad banners, and brand assets using Canva’s drag-and-drop editor.",
        icon: "🎨",
        color: "from-pink-50 to-pink-100",
    },
    {
        name: "SEMrush",
        category: "SEO & Competitor Research",
        description:
            "Perform advanced keyword research, backlink analysis, and competitor audits to boost organic traffic and Google rankings.",
        icon: "📊",
        color: "from-orange-50 to-orange-100",
    },
    {
        name: "Ahrefs",
        category: "Technical SEO & Link Building",
        description:
            "Track domain authority, analyze backlinks, and uncover content gaps to strengthen your SEO strategy.",
        icon: "🧭",
        color: "from-teal-50 to-teal-100",
    },
    {
        name: "Ubersuggest",
        category: "Keyword & Content Strategy",
        description:
            "Discover long-tail keywords, content ideas, and SEO opportunities to drive targeted organic traffic.",
        icon: "🔍",
        color: "from-lime-50 to-lime-100",
    },
    {
        name: "Google Search Console",
        category: "Search Performance Monitoring",
        description:
            "Monitor website performance on Google Search, fix indexing issues, and optimize for core web vitals.",
        icon: "📈",
        color: "from-sky-50 to-sky-100",
    },
    {
        name: "GA4",
        category: "Web Analytics & Tracking",
        description:
            "Use Google Analytics 4 (GA4) to track user journeys, measure conversions, and optimize marketing funnels.",
        icon: "📉",
        color: "from-emerald-50 to-emerald-100",
    },
    {
        name: "Google Trends",
        category: "Trend & Demand Analysis",
        description:
            "Identify trending topics, seasonal search demand, and content opportunities across regions and niches.",
        icon: "📊",
        color: "from-red-50 to-red-100",
    },
    {
        name: "Mailchimp",
        category: "Email Marketing Automation",
        description:
            "Create email campaigns, nurture sequences, and newsletter automation to grow your subscriber base and revenue.",
        icon: "✉️",
        color: "from-yellow-50 to-yellow-100",
    },
    {
        name: "ConvertKit",
        category: "Creator & Funnel Marketing",
        description:
            "Build lead magnets, sales funnels, and audience segments tailored for creators, coaches, and online businesses.",
        icon: "📬",
        color: "from-rose-50 to-rose-100",
    },
    {
        name: "Google Calendar",
        category: "Campaign & Client Planning",
        description:
            "Plan content calendars, campaign launches, client meetings, and automation timelines in one place.",
        icon: "🗓️",
        color: "from-slate-50 to-slate-100",
    },
    {
        name: "Google Ads",
        category: "Search & Performance Ads",
        description:
            "Run search, display, and Performance Max campaigns focused on lead generation, e-commerce, and brand visibility.",
        icon: "💰",
        color: "from-blue-50 to-cyan-100",
    },
    {
        name: "Meta Business Suite",
        category: "Meta Ads Management",
        description:
            "Manage Facebook and Instagram ad campaigns, audiences, and creatives from a central dashboard.",
        icon: "📱",
        color: "from-indigo-50 to-sky-100",
    },
    {
        name: "Facebook Ads",
        category: "Social Media Advertising",
        description:
            "Create high-ROAS Facebook ad campaigns using custom audiences, lookalikes, and retargeting strategies.",
        icon: "👍",
        color: "from-blue-50 to-blue-100",
    },
    {
        name: "Instagram Ads",
        category: "Visual Performance Marketing",
        description:
            "Launch scroll-stopping Instagram Ads with strong hooks, creatives, and CTA-driven campaigns.",
        icon: "📸",
        color: "from-fuchsia-50 to-pink-100",
    },
];

export default function ToolsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Your AI & Digital Marketing{" "}
                        <span className="text-orange-600">Arsenal of Tools</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Go beyond theory and get hands-on with{" "}
                        <strong>real-world AI tools, SEO platforms, performance marketing dashboards,</strong>{" "}
                        and <strong>email automation suites</strong> used by top digital marketing agencies and
                        growth teams. Learn how to integrate <strong>ChatGPT, GA4, Google Ads, Meta Ads, SEMrush, Ahrefs, Mailchimp</strong> and more into
                        full-funnel digital campaigns.
                    </p>
                </div>

                {/* Tools Grid – individual tools (layout like the reference section) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {tools.map((tool, idx) => (
                        <div
                            key={idx}
                            className={`bg-gradient-to-br ${tool.color} rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {tool.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                {tool.name}
                            </h3>

                            {/* Category */}
                            <p className="text-xs font-semibold text-orange-600 mb-3">
                                {tool.category}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tools Ecosystem Overview – dark band like Technology Stack Overview */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">
                        Full-Funnel AI & Digital Marketing Tools Ecosystem
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {toolCategories.map((category, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-orange-400">
                                        {category.icon}
                                    </div>
                                    <h4 className="text-lg font-bold">
                                        {category.title}
                                    </h4>
                                </div>
                                <p className="text-sm text-slate-200 mb-3">
                                    {category.description} – master how to use these tools to plan, launch, track, and scale{" "}
                                    <strong>ROI-driven campaigns</strong>.
                                </p>
                                <ul className="space-y-2">
                                    {category.tools.map((tool, tIdx) => (
                                        <li key={tIdx} className="flex items-center gap-2 text-slate-200 text-sm">
                                            <span className="text-orange-400">→</span>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Path – same layout as reference Learning Path, tailored to AI & digital marketing */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        AI & Digital Marketing Tools Learning Journey
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            {
                                step: "1",
                                title: "Tool Familiarization",
                                description:
                                    "Get introduced to ChatGPT, Canva, SEMrush, GA4, Google Ads, Meta Business Suite and understand where each tool fits in the digital marketing ecosystem.",
                            },
                            {
                                step: "2",
                                title: "Hands-on Campaign Setup",
                                description:
                                    "Set up real campaigns, tracking, and automation: connect GA4, configure pixels, create keyword plans, and launch search, social, and email campaigns.",
                            },
                            {
                                step: "3",
                                title: "Optimization & A/B Testing",
                                description:
                                    "Use analytics dashboards, heatmaps, and reporting to optimize CTR, CPC, CPA, ROAS, and conversion rate with data-driven experimentation.",
                            },
                            {
                                step: "4",
                                title: "Scaling & Automation",
                                description:
                                    "Automate workflows with AI, build evergreen funnels, remarketing journeys, and reporting systems just like a professional performance marketer.",
                            },
                        ].map((phase, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white rounded-lg p-6 border-2 border-orange-200 text-center">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mx-auto mb-3">
                                        {phase.step}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">
                                        {phase.title}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {phase.description}
                                    </p>
                                </div>
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA – keeps original intent but fits new layout */}
                    <div className="mt-10 text-center">
                        <p className="text-slate-700 mb-4 text-base md:text-lg">
                            By the end of this bootcamp, you’ll be confidently using all major{" "}
                            <strong>AI, SEO, analytics, email marketing, and paid media tools</strong> that
                            top digital marketing professionals rely on daily.
                        </p>
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 transition-colors"
                        >
                            Master These Tools Today
                        </button>
                    </div>
                </div>

            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Tools Section"
                courseName={courseName}
            />
        </section>
    );
}

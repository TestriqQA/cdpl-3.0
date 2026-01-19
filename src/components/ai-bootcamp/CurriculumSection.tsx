"use client";


import { ChevronDown, BookOpen, CloudDownload, ArrowRight } from "lucide-react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

interface Module {
    id: number;
    title: string;
    duration: string;
    topics: string[];
    projects?: string[];
    color: string;
    icon: string;
}

// 🔹 Same content as your original modules, adapted to new layout structure
const modules: Module[] = [
    {
        id: 1,
        title: "Intro to Digital Marketing & Strategy Building",
        duration: "1.5 hours",
        icon: "🎯",
        color: "from-blue-50 to-blue-100",
        topics: [
            "Evolution of Digital Marketing",
            "Traditional vs Digital Marketing",
            "Buyer Persona Creation",
            "Marketing Funnel Stages (TOFU, MOFU, BOFU)",
            "SWOT Analysis of Competitors",
        ],
    },
    {
        id: 2,
        title: "Google Business Profile (GMB) Optimization",
        duration: "1.5 hours",
        icon: "📍",
        color: "from-emerald-50 to-emerald-100",
        topics: [
            "GMB Account Setup & Verification",
            "Business Description & Category Optimization",
            "Adding Products & Services",
            "Customer Reviews & Response Strategy",
            "Insights & Performance Analytics",
        ],
    },
    {
        id: 3,
        title: "WhatsApp Business Marketing",
        duration: "1.5 hours",
        icon: "💬",
        color: "from-teal-50 to-teal-100",
        topics: [
            "WhatsApp Business App Setup",
            "Business Profile & Catalog Configuration",
            "Automated Greetings & Quick Replies",
            "WhatsApp API Integration",
            "Promotional Campaigns using WhatsApp Links",
        ],
    },
    {
        id: 4,
        title: "SEO - On-page Optimization",
        duration: "2 hours",
        icon: "🧭",
        color: "from-orange-50 to-orange-100",
        topics: [
            "Keyword Research & Placement",
            "Meta Title & Description Optimization",
            "URL Structure & Internal Linking",
            "Content Optimization (Headers, Alt Text)",
            "Schema Markup & Rich Snippets",
        ],
    },
    {
        id: 5,
        title: "SEO - Off-page & Technical SEO",
        duration: "2 hours",
        icon: "⚙️",
        color: "from-slate-50 to-slate-100",
        topics: [
            "Link Building Strategies",
            "Domain Authority & Page Authority",
            "Broken Link Analysis & Fixes",
            "Sitemap & Robots.txt Optimization",
            "Mobile Responsiveness & Page Speed",
        ],
    },
    {
        id: 6,
        title: "Google Search Console & GA4",
        duration: "1.5 hours",
        icon: "📊",
        color: "from-indigo-50 to-indigo-100",
        topics: [
            "Property Setup & Domain Verification",
            "Performance Reports (Clicks, CTR, Positions)",
            "Index Coverage & URL Inspection",
            "Setting up Goals & Events in GA4",
            "Custom Dashboards & Reports",
        ],
    },
    {
        id: 7,
        title: "Google Ads - Search Campaigns",
        duration: "2 hours",
        icon: "🔍",
        color: "from-yellow-50 to-yellow-100",
        topics: [
            "Account Structure & Campaign Setup",
            "Keyword Match Types & Planner Tool",
            "Writing Effective Ad Copies",
            "Bidding Strategies & Budget Management",
            "Quality Score & Ad Extensions",
        ],
    },
    {
        id: 8,
        title: "Google Ads - Display & YouTube Ads",
        duration: "2 hours",
        icon: "📺",
        color: "from-red-50 to-red-100",
        topics: [
            "Google Display Network Overview",
            "Creating Visual Ad Creatives",
            "YouTube Ad Formats",
            "Targeting Options for Display/Video Ads",
            "Performance Metrics & Optimization",
        ],
    },
    {
        id: 9,
        title: "Facebook & Instagram Ads - Part 1",
        duration: "1.5 hours",
        icon: "📱",
        color: "from-pink-50 to-pink-100",
        topics: [
            "Meta Business Suite Setup",
            "Page & Ad Account Linking",
            "Installing Meta Pixel",
            "Audience Research & Targeting",
            "Facebook Ad Policies Overview",
        ],
    },
    {
        id: 10,
        title: "Facebook & Instagram Ads - Part 2",
        duration: "1.5 hours",
        icon: "🎯",
        color: "from-lime-50 to-lime-100",
        topics: [
            "Lead Generation Ads Setup",
            "Traffic Campaign Optimization",
            "Creative Best Practices",
            "Analyzing Ad Metrics",
            "A/B Testing for Creatives",
        ],
    },
    {
        id: 11,
        title: "Social Media Content Strategy",
        duration: "1.5 hours",
        icon: "📝",
        color: "from-violet-50 to-violet-100",
        topics: [
            "Content Pillars Creation",
            "7-day Content Calendar",
            "Brand Voice & Consistency",
            "Engagement Tactics",
            "Case Study of Social Media Brands",
        ],
    },
    {
        id: 12,
        title: "Canva Design for Social & Ads",
        duration: "1.5 hours",
        icon: "🎨",
        color: "from-cyan-50 to-cyan-100",
        topics: [
            "Using Canva Templates",
            "Designing Engaging Posts",
            "Creating Ad Creatives",
            "Designing Reels & Stories",
            "Branding & Typography in Canva",
        ],
    },
    {
        id: 13,
        title: "Influencer & Community Marketing",
        duration: "1.5 hours",
        icon: "🤝",
        color: "from-rose-50 to-rose-100",
        topics: [
            "Identifying Relevant Influencers",
            "Campaign Collaboration Strategy",
            "Outreach Email Drafting",
            "Community Engagement Techniques",
            "Tracking Influencer ROI",
        ],
    },
    {
        id: 14,
        title: "Email Marketing & Automation",
        duration: "1.5 hours",
        icon: "📧",
        color: "from-amber-50 to-amber-100",
        topics: [
            "Building an Email List",
            "Designing Email Campaigns",
            "Setting up Auto Responders",
            "Email Tools (Mailchimp, ConvertKit)",
            "Open Rate & CTR Optimization",
        ],
    },
    {
        id: 15,
        title: "YouTube & Shorts Marketing",
        duration: "1.5 hours",
        icon: "🎬",
        color: "from-sky-50 to-sky-100",
        topics: [
            "Channel Branding & Optimization",
            "Keyword Research for YouTube",
            "Creating Shorts",
            "SEO for Titles & Descriptions",
            "Analytics & Watch Time Insights",
        ],
    },
    {
        id: 16,
        title: "Affiliate Marketing Basics",
        duration: "1.5 hours",
        icon: "💸",
        color: "from-emerald-50 to-emerald-100",
        topics: [
            "Understanding Affiliate Networks",
            "Signing Up & Selecting Products",
            "Promoting through Blogs/YouTube",
            "Affiliate Link Tracking",
            "Earnings Optimization Strategies",
        ],
    },
    {
        id: 17,
        title: "ORM – Online Reputation Management",
        duration: "1.5 hours",
        icon: "⭐",
        color: "from-zinc-50 to-zinc-100",
        topics: [
            "Monitoring Brand Mentions",
            "Responding to Negative Reviews",
            "Crisis Management Tactics",
            "Using Tools for ORM",
            "Building Positive Brand Perception",
        ],
    },
    {
        id: 18,
        title: "Competitor & Trend Analysis",
        duration: "1.5 hours",
        icon: "📈",
        color: "from-indigo-50 to-indigo-100",
        topics: [
            "Using Google Trends",
            "Competitor Keyword Research",
            "Analyzing Content Strategy",
            "Tools like SEMrush & Ubersuggest",
            "Benchmarking Competitor Performance",
        ],
    },
    {
        id: 19,
        title: "A/B Testing & Analytics Deep Dive",
        duration: "1.5 hours",
        icon: "🧪",
        color: "from-green-50 to-green-100",
        topics: [
            "Understanding A/B Testing Goals",
            "Running Split Tests on Ads/Emails",
            "Analyzing GA4 Reports",
            "Improving Campaign Conversions",
            "Using Heatmaps & User Behavior Tools",
        ],
    },
    {
        id: 20,
        title: "Capstone: Build a Full Strategy & Present",
        duration: "2 hours",
        icon: "🚀",
        color: "from-orange-50 to-orange-100",
        topics: [
            "Selecting a Brand or Startup",
            "Creating a Multi-Channel Strategy",
            "Tool Integration & Reporting",
            "Designing the Presentation",
            "Final Pitch & Peer Review",
        ],
    },
];

export default function CurriculumSection() {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section id="curriculum" className="py-10 bg-gradient-to-b from-slate-50 to-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        The 20-Module{" "}
                        <span className="text-orange-600">Digital Marketing Curriculum</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        The <strong>20-module blueprint to becoming an AI-powered marketer</strong>.
                        From digital marketing fundamentals, <strong>SEO</strong>,{" "}
                        <strong>Google Ads</strong>, <strong>Meta (Facebook &amp; Instagram) Ads</strong>,{" "}
                        <strong>WhatsApp &amp; email automation</strong>, to{" "}
                        <strong>analytics, GA4, and full-funnel strategy</strong>—this curriculum is
                        designed to transform you into a job-ready{" "}
                        <strong>Digital Marketing Specialist</strong> and{" "}
                        <strong>Performance Marketer</strong>.
                    </p>
                </div>

                {/* Modules List – same layout style as reference */}
                <div className="space-y-4 mb-12">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className={`bg-gradient-to-r ${module.color} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
                        >
                            {/* Module Header */}
                            <button
                                onClick={() =>
                                    setExpandedModule(
                                        expandedModule === module.id ? null : module.id
                                    )
                                }
                                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <span className="text-3xl">{module.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            Module {module.id}: {module.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">
                                            {module.duration} • {module.topics.length} topics
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${expandedModule === module.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Module Content */}
                            {expandedModule === module.id && (
                                <div className="px-6 pb-6 border-t border-slate-200/50 bg-white/50">
                                    {/* Topics */}
                                    <div className="mb-2 md:mb-4">
                                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-orange-600" />
                                            Topics Covered
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {module.topics.map((topic, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 text-slate-700 text-sm"
                                                >
                                                    <span className="text-orange-500 font-bold mt-0.5">
                                                        •
                                                    </span>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Learning Outcomes + SEO-rich copy */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        What You&apos;ll Master in This Digital Marketing Course
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {[
                            {
                                title: "Full-Funnel Strategy",
                                description:
                                    "Plan TOFU-MOFU-BOFU campaigns that combine SEO, Google Ads, Meta Ads, WhatsApp, email marketing, and content to drive leads and sales.",
                            },
                            {
                                title: "AI-Powered Execution",
                                description:
                                    "Use AI tools like ChatGPT, Grok, and DeepSeek to research keywords, write ad copy, generate content ideas, and optimize campaigns faster.",
                            },
                            {
                                title: "Performance Analytics",
                                description:
                                    "Track ROI with GA4, Google Search Console, ad dashboards, A/B testing, heatmaps, and conversion tracking for data-driven decisions.",
                            },
                        ].map((outcome, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-5 border border-orange-200"
                            >
                                <h4 className="font-bold text-slate-900 mb-2">
                                    {outcome.title}
                                </h4>
                                <p className="text-sm text-slate-600">{outcome.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 max-w-4xl">
                        Keywords: <em>Digital Marketing Course</em>,{" "}
                        <em>Digital Marketing Course in Mumbai</em>,{" "}
                        <em>AI-Powered Digital Marketing Training</em>,{" "}
                        <em>Performance Marketing Course</em>,{" "}
                        <em>SEO, Google Ads, Facebook &amp; Instagram Ads</em>,{" "}
                        <em>WhatsApp &amp; Email Automation</em>,{" "}
                        <em>Digital Marketing Certification with Placement</em>,{" "}
                        <em>Job-Ready Digital Marketing Program</em>.
                    </p>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6 text-lg">
                        Master all 20 modules and become job-ready in just 30 hours of intensive
                        training.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center rounded-lg bg-[#d04502] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            Enroll in the Program
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setIsSyllabusOpen(true)}
                            className="cursor-pointer inline-flex items-center justify-center rounded-lg border-2 border-[#d04502] px-8 py-4 text-base font-semibold text-[#d04502] hover:bg-orange-50 transition-colors"
                        >
                            Get Full Syllabus PDF
                            <CloudDownload className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Curriculum Section"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="AI Bootcamp - Curriculum Section"
                courseName={courseName}
            />
        </section>
    );
}


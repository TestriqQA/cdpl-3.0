"use client";

import React, { useState } from "react";
import {
    TrendingUp,
    ArrowRight,
    Sparkles,
    Target,
    Briefcase,
    DollarSign,
    Award,
    BarChart3,
    Users,
    Building2,
    Rocket,
    CheckCircle,
} from "lucide-react";
import { EnrollPopup } from '@/components/EnrollForms';
import BrochureDownloadModal from '@/components/home/BrochureDownloadModal';
import Link from "next/link";

/**
 * NOTE
 * - This file uses the new, polished layout you provided (gradients, hover glow, cards, stats).
 * - Content is kept relevant to **Software Testing / QA** by reusing the original `careerPathContent`
 *   (roles like QA Engineer, Automation Engineer, Performance Test Engineer, QA Lead).
 * - The CareerCard is defensive — it supports both the richer BI-style fields (demandLevel, responsibilities, hiringCompanies)
 *   and the simpler QA-focused dataset (skills, opportunities). Missing fields gracefully fallback to sensible defaults.
 */

/* ----------------------------
   Data (Software Testing focused)
   ---------------------------- */
const careerPathContent = {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in QA and software testing.",
    paths: [
        {
            role: "QA Engineer",
            trending: true,
            description: "Perform manual and automated testing to ensure software quality.",
            salaryRange: "₹4-8 LPA",
            skills: ["Manual Testing", "Automation", "Test Planning", "Bug Reporting"],
            opportunities: ["Startups", "IT Companies", "Product Companies", "Consulting Firms"],
        },
        {
            role: "Automation Test Engineer",
            trending: true,
            description: "Develop and maintain automated test suites and frameworks.",
            salaryRange: "₹5-10 LPA",
            skills: ["Selenium", "API Testing", "Framework Design", "Scripting"],
            opportunities: ["Tech Giants", "Product Companies", "Testing Services", "Startups"],
        },
        {
            role: "Performance Test Engineer",
            trending: false,
            description: "Conduct performance and load testing to optimize applications.",
            salaryRange: "₹6-12 LPA",
            skills: ["JMeter", "LoadRunner", "Performance Analysis", "Optimization"],
            opportunities: ["Enterprise Companies", "Financial Services", "E-Commerce", "Tech Companies"],
        },
        {
            role: "QA Lead / Manager",
            trending: false,
            description: "Lead QA teams and manage testing strategies and processes.",
            salaryRange: "₹10-18 LPA",
            skills: ["Team Management", "Test Strategy", "Process Improvement", "Leadership"],
            opportunities: ["IT Companies", "Product Companies", "Consulting Firms", "Startups"],
        },
    ],
};

/* ----------------------------
   Types (light / permissive)
   ---------------------------- */
type DemandLevel = "Very High" | "High" | "Medium" | string;

interface CareerPath {
    role: string;
    trending?: boolean;
    demandLevel?: DemandLevel;
    experience?: string;
    description?: string;
    salaryRange?: string;
    skills?: string[];
    responsibilities?: string[];
    opportunities?: string[];
    hiringCompanies?: string[];
}

/* ----------------------------
   Career Card (polished design)
   ---------------------------- */
const CareerCard = ({ path, index, onEnroll }: { path: CareerPath; index: number; onEnroll: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Visual theme variants (cycled by index)
    const gradients = [
        {
            card: "from-blue-500/5 via-cyan-500/5 to-blue-600/5",
            border: "border-blue-200",
            accent: "from-blue-600 to-cyan-600",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            badge: "bg-blue-50 text-blue-700 border-blue-200",
            glow: "shadow-blue-500/20",
        },
        {
            card: "from-purple-500/5 via-fuchsia-500/5 to-purple-600/5",
            border: "border-purple-200",
            accent: "from-purple-600 to-fuchsia-600",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600",
            badge: "bg-purple-50 text-purple-700 border-purple-200",
            glow: "shadow-purple-500/20",
        },
        {
            card: "from-emerald-500/5 via-teal-500/5 to-emerald-600/5",
            border: "border-emerald-200",
            accent: "from-emerald-600 to-teal-600",
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
            badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
            glow: "shadow-emerald-500/20",
        },
        {
            card: "from-orange-500/5 via-amber-500/5 to-brand/5",
            border: "border-orange-200",
            accent: "from-brand to-amber-600",
            iconBg: "bg-orange-50",
            iconColor: "text-brand",
            badge: "bg-orange-50 text-brand border-orange-200",
            glow: "shadow-orange-500/20",
        },
    ];

    const theme = gradients[index % gradients.length];

    // derive a simple demand level if not provided
    const demandLevel = (path.demandLevel ?? (() => {
        const s = path.salaryRange ?? "";
        if (s.includes("10") || s.includes("12") || s.includes("18")) return "Very High";
        if (s.includes("6") || s.includes("8")) return "High";
        return "Medium";
    })()) as DemandLevel;

    const demandColors: Record<string, string> = {
        "Very High": "bg-green-50 text-green-700 border-green-200",
        High: "bg-blue-50 text-blue-700 border-blue-200",
        Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    };
    const demandClass = demandColors[demandLevel] ?? "bg-gray-100 text-gray-700 border-gray-200";

    // fallback responsibilities & hiring companies
    const responsibilities = path.responsibilities ?? [
        "Create & execute test cases",
        "Report & verify defects",
        "Collaborate with devs & stakeholders",
    ];
    const hiringCompanies = path.hiringCompanies ?? ["Infosys", "TCS", "Cognizant"];

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full hover:-translate-y-2 transition-transform duration-300"
        >
            {/* Glow effect */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.card} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${theme.glow}`}
            />

            <div
                className={`relative h-full bg-white rounded-3xl border-2 ${theme.border} group-hover:border-opacity-100 border-opacity-50 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
            >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${theme.accent}`} />

                <div className="p-8 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div
                            className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center border-2 ${theme.border} shadow-lg transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
                        >
                            <Briefcase className={`${theme.iconColor} w-7 h-7`} strokeWidth={2.5} />
                        </div>

                        <div className="flex flex-col gap-2 items-end">
                            {path.trending && (
                                <span
                                    className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-orange-50 text-brand border border-orange-200 rounded-full"
                                >
                                    <TrendingUp className="w-3 h-3" /> Trending
                                </span>
                            )}
                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${demandClass}`}>{demandLevel} Demand</span>
                        </div>
                    </div>

                    {/* Role title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">{path.role}</h3>

                    {/* Experience (optional) */}
                    <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-600">{path.experience ?? "0-2+ Years"} Experience</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">{path.description}</p>

                    {/* Salary + Skills */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${theme.card} rounded-xl border ${theme.border}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${theme.iconBg} rounded-lg flex items-center justify-center`}>
                                    <DollarSign className={`w-5 h-5 ${theme.iconColor}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Salary Range</p>
                                    <p className="text-xl font-bold text-gray-900">{path.salaryRange ?? "Competitive"}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                <Target className="w-3.5 h-3.5" />
                                Essential Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {(path.skills ?? []).slice(0, 6).map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Key Responsibilities
                        </p>
                        <ul className="space-y-2">
                            {responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${theme.accent} flex-shrink-0`} />
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opportunities */}
                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5" />
                            Industry Opportunities
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {(path.opportunities ?? []).map((opp, i) => (
                                <span key={i} className="text-xs font-medium px-3 py-1 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm">
                                    {opp}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hiring Companies */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            Top Hiring Companies
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {hiringCompanies.map((company, i) => (
                                <span key={i} className={`text-xs font-semibold px-3 py-1 ${theme.badge} rounded-full border`}>
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="mt-auto flex flex-col gap-3 text-center">
                        <button
                            onClick={onEnroll}
                            className={`w-full bg-gradient-to-r ${theme.accent} text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]`}
                        >
                            <Rocket className="w-5 h-5" />
                            Start Career Path
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        <Link 
                            href="/jobs/live-jobs" 
                            title="View Live Job Openings and Opportunities"
                            className="w-full text-gray-600 font-semibold py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                        >
                            View Job Openings
                        </Link>
                    </div>
                </div>

                {/* bottom corner decor */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${theme.card} rounded-tl-full opacity-50`} />
            </div>
        </div>
    );
};

/* ----------------------------
   Stat card for header metrics
   ---------------------------- */
const StatCard = ({ icon: Icon, value, label, gradient }: { icon: React.ElementType; value: string; label: string; gradient: string }) => (
    <div
        className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600 text-center font-medium">{label}</div>
    </div>
);

/* ----------------------------
   Main Component
   ---------------------------- */
export default function CareerPathSection() {
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    const handleEnrollSubmit = (data: any) => {
        console.log("Form Submitted", data);
        setIsEnrollOpen(false);
    };

    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            <EnrollPopup isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} onSubmit={handleEnrollSubmit} source="Software Testing Course Category Page - Career Section - Enroll Now" />
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Career Opportunities</span>
                    </div>

                    <h2 className="mt-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Software Testing <span className="text-brand">Jobs & Career Roles</span> in Mumbai
                    </h2>


                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                        <Target className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-semibold">{careerPathContent.subtitle}</span>
                    </div>

                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{careerPathContent.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <StatCard icon={TrendingUp} value="40%" label="Avg. Salary Hike" gradient="from-blue-500 to-cyan-600" />
                    <StatCard icon={Users} value="4.9/5" label="Learner Rating" gradient="from-purple-500 to-fuchsia-600" />
                    <StatCard icon={Building2} value="425+" label="Verified Reviews" gradient="from-emerald-500 to-teal-600" />
                    <StatCard icon={Award} value="Live" label="Mentor-Led Classes" gradient="from-orange-500 to-amber-600" />
                </div>

                {/* Career Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {careerPathContent.paths.map((path, index) => (
                        <CareerCard
                            key={path.role}
                            path={{
                                role: path.role,
                                trending: path.trending,
                                description: path.description,
                                salaryRange: path.salaryRange,
                                skills: path.skills,
                                opportunities: path.opportunities,
                            }}
                            index={index}
                            onEnroll={() => setIsEnrollOpen(true)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl shadow-xl max-w-3xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Ready to Launch Your QA Career?</h3>
                                <p className="text-gray-600">Get personalized career guidance and placement support</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button onClick={() => setIsEnrollOpen(true)} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95">
                                Talk to Career Counselor
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button onClick={() => setIsBrochureOpen(true)} className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
                                Download Career Guide
                            </button>
                        </div>
                    </div>
                </div>
                <BrochureDownloadModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} source="Software Testing Course Category Page - Career Section - Download Career Guide" />
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
}

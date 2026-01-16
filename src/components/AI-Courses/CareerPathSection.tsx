"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
import { careerPathContent } from "@/components/AI-Courses/data/data";

import { EnrollFormData, EnrollPopup } from '@/components/EnrollForms';
import BrochureDownloadModal from "../home/BrochureDownloadModal";
import Link from "next/link";

type DemandLevel = "Very High" | "High" | "Medium" | string;

interface CareerPath {
    id: number;
    role: string;
    trending: boolean;
    demandLevel: DemandLevel;
    experience: string;
    description: string;
    salaryRange: string;
    skills: string[];
    responsibilities: string[];
    opportunities: string[];
    hiringCompanies: string[];
}

/* -------------------------
   CareerCard (BI-styled)
   ------------------------- */
const CareerCard = ({ path, index, onEnroll }: { path: CareerPath; index: number, onEnroll: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);


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
            card: "from-orange-500/5 via-amber-500/5 to-orange-600/5",
            border: "border-orange-200",
            accent: "from-orange-600 to-amber-600",
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600",
            badge: "bg-orange-50 text-orange-700 border-orange-200",
            glow: "shadow-orange-500/20",
        },
    ];

    const theme = gradients[index % gradients.length];

    const demandColors: Record<string, string> = {
        "Very High": "bg-green-50 text-green-700 border-green-200",
        High: "bg-blue-50 text-blue-700 border-blue-200",
        Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    };

    const demandClass =
        demandColors[path.demandLevel] ?? "bg-gray-100 text-gray-700 border-gray-200";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -8, transition: { duration: 0.28 } }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {/* Glow */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${theme.card} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${theme.glow}`}
            />

            <div
                className={`relative h-full bg-white rounded-3xl border-2 ${theme.border} group-hover:border-opacity-100 border-opacity-50 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
            >
                <div className={`h-2 bg-gradient-to-r ${theme.accent}`} />

                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{
                                    rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                                    scale: isHovered ? 1.05 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center border-2 ${theme.border} shadow-lg`}
                            >
                                <Briefcase
                                    className={`w-7 h-7 ${theme.iconColor}`}
                                    strokeWidth={2.5}
                                />
                            </motion.div>

                            <div className="ml-3">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {path.role}
                                </h3>
                                <p className="text-sm text-gray-500">{path.experience} Experience</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 items-end hidden md:block">
                            {path.trending && (
                                <motion.span
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.15, type: "spring" }}
                                    className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full"
                                >
                                    <TrendingUp className="w-3 h-3" />
                                    Trending
                                </motion.span>
                            )}

                            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${demandClass}`}>
                                {path.demandLevel} Demand
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{path.description}</p>

                    <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${theme.card} rounded-xl border ${theme.border}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${theme.iconBg} rounded-lg flex items-center justify-center`}>
                                    <DollarSign className={`w-5 h-5 ${theme.iconColor}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Salary Range</p>
                                    <p className="text-xl font-bold text-gray-900">{path.salaryRange}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                <Target className="w-3.5 h-3.5" />
                                Essential Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {path.skills.slice(0, 5).map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.06 + i * 0.03 }}
                                        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Key Responsibilities
                        </p>
                        <ul className="space-y-2">
                            {path.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${theme.accent}`} />
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5" />
                            Industry Opportunities
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {path.opportunities.map((opp, i) => (
                                <span key={i} className="text-xs font-medium px-3 py-1 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm">
                                    {opp}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            Top Hiring Companies
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {path.hiringCompanies.map((company, i) => (
                                <span key={i} className={`text-xs font-semibold px-3 py-1 ${theme.badge} rounded-full border`}>
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 text-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onEnroll}
                            className={`w-full bg-gradient-to-r ${theme.accent} text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                            <Rocket className="w-5 h-5" />
                            Start Career Path
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                        <Link href="/jobs/live-jobs" className="w-full text-gray-600 font-semibold py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                            View Job Openings
                        </Link>
                    </div>

                </div>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${theme.card} rounded-tl-full opacity-50`} />
            </div>
        </motion.div>
    );
};

/* -------------------------
   StatCard
   ------------------------- */
interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
    gradient: string;
}

const StatCard = ({ icon: Icon, value, label, gradient }: StatCardProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600 text-center font-medium">{label}</div>
    </motion.div>
);

/* -------------------------
   CareerPathSection (export)
   ------------------------- */
export default function CareerPathSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);

    const handleEnrollSubmit = (enroll: EnrollFormData) => {
        // Replace with real submit logic as needed
        alert(
            `Enroll Now Submitted:\nName: ${enroll.name}\nEmail: ${enroll.email}\nPhone: ${enroll.phone}`
        );
        setIsPopupOpen(false);
    };

    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            <EnrollPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSubmit={handleEnrollSubmit} source="Artificial Intelligence Course Category Page - Career Section - Enroll Now" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Career Opportunities</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {careerPathContent.title}
                    </h2>

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                        <Target className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-semibold">{careerPathContent.subtitle}</span>
                    </div>

                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {careerPathContent.description}
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <StatCard icon={TrendingUp} value="40%" label="Avg. Salary Hike" gradient="from-blue-500 to-cyan-600" />
                    <StatCard icon={Users} value="2,500+" label="Students Placed" gradient="from-purple-500 to-fuchsia-600" />
                    <StatCard icon={Building2} value="500+" label="Hiring Partners" gradient="from-emerald-500 to-teal-600" />
                    <StatCard icon={Award} value="95%" label="Success Rate" gradient="from-orange-500 to-amber-600" />
                </div>

                {/* Career Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {(careerPathContent.paths as Partial<CareerPath>[]).map((p, index) => {
                        // Create a fully populated CareerPath object with defaults when data is missing.
                        const full: CareerPath = {
                            id: p.id ?? index,
                            role: p.role ?? `Role ${index + 1}`,
                            trending: p.trending ?? false,
                            demandLevel: p.demandLevel ?? "Medium",
                            experience: p.experience ?? "Mid",
                            description: p.description ?? "",
                            salaryRange: p.salaryRange ?? "—",
                            skills: p.skills ?? [],
                            responsibilities: p.responsibilities ?? ["N/A"],
                            opportunities: p.opportunities ?? [],
                            hiringCompanies: p.hiringCompanies ?? []
                        };

                        return <CareerCard key={`${full.id}-${full.role}-${index}`} path={full} index={index} onEnroll={() => setIsPopupOpen(true)} />;
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl shadow-xl max-w-3xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    Ready to Launch Your BI Career?
                                </h3>
                                <p className="text-gray-600">
                                    Get personalized career guidance and placement support
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsPopupOpen(true)} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                Talk to Career Counselor
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <button onClick={() => setIsBrochureOpen(true)} className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
                                Download Career Guide
                            </button>
                        </div>
                    </div>
                </motion.div>
                <BrochureDownloadModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} source="Artificial Intelligence Course Category Page - Career Section - Download Career Guide" />
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

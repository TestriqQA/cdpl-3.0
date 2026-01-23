"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Briefcase,
    Award,
    Zap,
    ArrowRight,
    TrendingUp,
    BarChart3,
    Sparkles,
    Eye,
} from "lucide-react";
import { projectsContent } from "@/components/Digital-Marketing/data/data";
import Link from "next/link";

/**
 * Updated ProjectsSection — uses the polished BI-style layout & interactions,
 * while rendering Digital Marketing projects from `projectsContent`.
 */

/* --------------------------
   Visual themes & helpers
   -------------------------- */
const benefits = [
    {
        icon: Briefcase,
        title: "Portfolio-Ready Projects",
        description:
            "Build production-grade Digital Marketing projects that demonstrate your end-to-end capabilities to employers.",
        color: "from-blue-500 to-cyan-600",
        bgColor: "from-blue-50 to-cyan-50",
    },
    {
        icon: Award,
        title: "Industry Recognition",
        description:
            "Projects modeled after real business problems used by leading data teams across industries.",
        color: "from-purple-500 to-fuchsia-600",
        bgColor: "from-purple-50 to-fuchsia-50",
    },
    {
        icon: Zap,
        title: "Interview Confidence",
        description:
            "Discuss actual implementations in interviews — from feature engineering to model deployment.",
        color: "from-brand to-red-600",
        bgColor: "from-orange-50 to-red-50",
    },
];

const gradients = [
    {
        card: "from-blue-500/5 via-cyan-500/5 to-blue-600/5",
        border: "border-blue-200",
        accent: "from-blue-600 to-cyan-600",
        iconBg: "from-blue-500 to-cyan-600",
        badge: "bg-blue-50 text-blue-700 border-blue-200",
        glow: "shadow-blue-500/20",
    },
    {
        card: "from-purple-500/5 via-fuchsia-500/5 to-purple-600/5",
        border: "border-purple-200",
        accent: "from-purple-600 to-fuchsia-600",
        iconBg: "from-purple-500 to-fuchsia-600",
        badge: "bg-purple-50 text-purple-700 border-purple-200",
        glow: "shadow-purple-500/20",
    },
    {
        card: "from-emerald-500/5 via-teal-500/5 to-emerald-600/5",
        border: "border-emerald-200",
        accent: "from-emerald-600 to-teal-600",
        iconBg: "from-emerald-500 to-teal-600",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        glow: "shadow-emerald-500/20",
    },
    {
        card: "from-orange-500/5 via-amber-500/5 to-brand/5",
        border: "border-orange-200",
        accent: "from-brand to-amber-700",
        iconBg: "from-brand to-amber-700",
        badge: "bg-orange-50 text-brand border-orange-200",
        glow: "shadow-brand/20",
    },
    {
        card: "from-rose-500/5 via-pink-500/5 to-rose-600/5",
        border: "border-rose-200",
        accent: "from-rose-600 to-pink-600",
        iconBg: "from-rose-500 to-pink-600",
        badge: "bg-rose-50 text-rose-700 border-rose-200",
        glow: "shadow-rose-500/20",
    },
    {
        card: "from-indigo-500/5 via-violet-500/5 to-indigo-600/5",
        border: "border-indigo-200",
        accent: "from-indigo-600 to-violet-600",
        iconBg: "from-indigo-500 to-violet-600",
        badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
        glow: "shadow-indigo-500/20",
    },
];

import { EnrollFormData, EnrollPopup } from "@/components/EnrollForms";

/* --------------------------
   ProjectCard (DS/ML content)
   -------------------------- */
const ProjectCard = ({ project, index, onEnroll }: { project: typeof projectsContent.projects[0]; index: number, onEnroll: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = gradients[index % gradients.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -8, transition: { duration: 0.28 } }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {/* Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.card} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${theme.glow}`} />

            <div className={`relative h-full bg-white rounded-3xl border-2 ${theme.border} border-opacity-50 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}>
                {/* top accent */}
                <div className={`h-2 bg-gradient-to-r ${theme.accent}`} />

                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-6">
                        <motion.div
                            animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 bg-gradient-to-br ${theme.iconBg} rounded-2xl flex items-center justify-center shadow-lg ${theme.glow}`}
                        >
                            <BarChart3 className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                        {project.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                            Technologies & Skills
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, i) => (
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

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

                    <div className="mt-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onEnroll}
                            className={`flex-1 bg-gradient-to-r ${theme.accent} text-white font-bold px-3 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                            <Eye className="w-5 h-5" />
                            View Project Details
                        </motion.button>
                    </div>
                </div>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${theme.card} rounded-tl-full opacity-50`} />
            </div>
        </motion.div>
    );
};

/* --------------------------
   BenefitCard
   -------------------------- */
const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="group relative"
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />
        <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
            <motion.div
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
            >
                <benefit.icon className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
    </motion.div>
);

/* --------------------------
   ProjectsSection (export)
   -------------------------- */
const ProjectsSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleEnrollSubmit = (enroll: EnrollFormData) => {
        // Replace with real submit logic as needed
        console.log("Projects Enroll:", enroll);
        setIsPopupOpen(false);
    };

    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <Code2 className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Capstone Projects</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{projectsContent.title}</h2>
                    <p className="text-xl font-semibold text-gray-700 mb-4">{projectsContent.subtitle}</p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{projectsContent.description}</p>
                </motion.div>

                {/* projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projectsContent.projects.map((project, idx) => (
                        <ProjectCard key={project.name} project={project} index={idx} onEnroll={() => setIsPopupOpen(true)} />
                    ))}
                </div>

                {/* why build */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 rounded-full mb-6">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-semibold text-emerald-700">Career Advantages</span>
                    </motion.div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Build These Projects?</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Gain hands-on experience from data ingestion to deployed models — the exact skills hiring managers ask for.</p>
                </motion.div>

                {/* benefits grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((b, i) => (
                        <BenefitCard key={i} benefit={b} index={i} />
                    ))}
                </div>

                {/* bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl shadow-xl max-w-3xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Ready to Build Your Portfolio?</h3>
                                <p className="text-gray-600">Start creating industry-standard Digital Marketing projects today.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsPopupOpen(true)} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                Enroll in Digital Marketing Course
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <Link href="/contact-us" className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
                                Talk to Course Advisor
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <EnrollPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSubmit={handleEnrollSubmit} source="Digital Marketing Course Category Page - Projects Section - Enroll Now" />
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
};

export default ProjectsSection;

'use client';

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, Clock, Award, TrendingUp, Sparkles } from "lucide-react";
import { curriculumContent } from "@/components/BI-Courses/data/data";


/** ---- Gradient Themes ---- */
const gradientThemes = [
    {
        gradient: "from-blue-500 via-cyan-500 to-blue-600",
        lightGradient: "from-blue-50 via-cyan-50 to-blue-100",
        glowColor: "shadow-blue-500/20",
        textColor: "text-blue-600",
        bgLight: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        gradient: "from-purple-500 via-fuchsia-500 to-purple-600",
        lightGradient: "from-purple-50 via-fuchsia-50 to-purple-100",
        glowColor: "shadow-purple-500/20",
        textColor: "text-purple-600",
        bgLight: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        gradient: "from-emerald-500 via-teal-500 to-emerald-600",
        lightGradient: "from-emerald-50 via-teal-50 to-emerald-100",
        glowColor: "shadow-emerald-500/20",
        textColor: "text-emerald-600",
        bgLight: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
    {
        gradient: "from-brand via-amber-600 to-brand",
        lightGradient: "from-orange-50 via-amber-50 to-orange-100",
        glowColor: "shadow-brand/20",
        textColor: "text-brand",
        bgLight: "bg-orange-50",
        borderColor: "border-orange-200"
    }
];

export default function CurriculumSection() {
    const data = curriculumContent;
    const tracks = useMemo(() => data?.tracks ?? [], [data?.tracks]);
    const [activeTrack, setActiveTrack] = useState<number>(0);
    const current = tracks[activeTrack];
    const currentTheme = gradientThemes[activeTrack % gradientThemes.length];
    const totalWeeks = current?.weeks?.length ?? 0;

    return (
        <section id="curriculum-section" className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Comprehensive Curriculum</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {data.title}
                    </h2>

                    {data.subtitle && (
                        <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                            {data.subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Track Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {tracks.map((track, index) => {
                            const isActive = index === activeTrack;
                            const theme = gradientThemes[index % gradientThemes.length];

                            return (
                                <motion.button
                                    key={track.id ?? index}
                                    onClick={() => setActiveTrack(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${isActive
                                        ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg ${theme.glowColor}`
                                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {track.title}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 rounded-xl"
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-gray-700">{totalWeeks} Modules</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <Clock className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-gray-700">4 Weeks per Track</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                            <Award className="w-4 h-4 text-emerald-600" />
                            <span className="font-semibold text-gray-700">Industry Certification</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Panel */}
                <AnimatePresence mode="wait">
                    {current && (
                        <motion.div
                            key={current.id ?? activeTrack}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {current.weeks.map((week, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    {/* Glow effect on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.lightGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${currentTheme.glowColor}`} />

                                    <div className="relative bg-white rounded-2xl border-2 border-gray-200 group-hover:border-gray-300 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                                        {/* Top accent bar */}
                                        <div className={`h-1.5 bg-gradient-to-r ${currentTheme.gradient}`} />

                                        <div className="p-6 lg:p-8">
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                {/* Left: Content */}
                                                <div className="flex-1">
                                                    <div className="flex items-start gap-4 mb-4">
                                                        {/* Week number badge */}
                                                        <motion.div
                                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                                            transition={{ duration: 0.6 }}
                                                            className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center shadow-lg ${currentTheme.glowColor}`}
                                                        >
                                                            <span className="text-white font-bold text-md">
                                                                {week.number || String(index + 1).padStart(2, '0')}
                                                            </span>
                                                        </motion.div>

                                                        <div className="flex-1 pt-1">
                                                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                                                {week.title}
                                                            </h3>
                                                            <p className="text-gray-600 leading-relaxed">
                                                                {week.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right: Deliverables */}
                                                <div className="lg:w-80">
                                                    <div className={`h-full bg-gradient-to-br ${currentTheme.lightGradient} rounded-xl p-5 border ${currentTheme.borderColor}`}>
                                                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-300">
                                                            <div className={`p-1.5 rounded-lg bg-gradient-to-br ${currentTheme.gradient}`}>
                                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                                                                Learning Outcomes
                                                            </span>
                                                        </div>

                                                        {Array.isArray(week.deliverables) && week.deliverables.length > 0 ? (
                                                            <ul className="space-y-3">
                                                                {week.deliverables.map((deliverable, i) => (
                                                                    <motion.li
                                                                        key={i}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                                                        className="flex items-start gap-3 text-sm text-gray-700"
                                                                    >
                                                                        <motion.div
                                                                            whileHover={{ scale: 1.2 }}
                                                                            className={`mt-1 p-1 rounded-full bg-gradient-to-br ${currentTheme.gradient} flex-shrink-0`}
                                                                        >
                                                                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                                                        </motion.div>
                                                                        <span className="font-medium leading-relaxed">
                                                                            {deliverable}
                                                                        </span>
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm italic text-gray-500">
                                                                No specific deliverables listed.
                                                            </p>
                                                        )}

                                                        {/* Progress indicator */}
                                                        <div className="mt-5 pt-4 border-t border-gray-300">
                                                            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
                                                                <span>Module Progress</span>
                                                                <span>{Math.round(((index + 1) / current.weeks.length) * 100)}%</span>
                                                            </div>
                                                            <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${((index + 1) / current.weeks.length) * 100}%` }}
                                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                                    className={`h-full bg-gradient-to-r ${currentTheme.gradient} rounded-full`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentTheme.lightGradient} ${currentTheme.borderColor} border-2 rounded-xl`}>
                        <TrendingUp className={`w-5 h-5 ${currentTheme.textColor}`} />
                        <span className="font-semibold text-gray-700">
                            Complete all tracks to earn your BI Professional Certificate
                        </span>
                    </div>
                </motion.div>
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

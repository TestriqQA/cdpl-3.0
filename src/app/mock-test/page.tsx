"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockCategories, MockCourse } from "@/data/mockTestData";
import RegistrationModal, { RegistrationData } from "@/components/mock-test/RegistrationModal";
import { motion } from "framer-motion";
import {
    Database,
    Globe,
    Server,
    Terminal,
    Code2,
    ShieldCheck,
    Zap,
    ArrowRight,
    Sparkles,
} from "lucide-react";

// Light Theme Color Palette
const CATEGORY_STYLES: Record<string, { bg: string; text: string; iconBg: string; border: string }> = {
    "software-testing": {
        bg: "bg-cyan-50", text: "text-cyan-700", iconBg: "bg-cyan-100", border: "border-cyan-200"
    },
    "database": {
        bg: "bg-emerald-50", text: "text-emerald-700", iconBg: "bg-emerald-100", border: "border-emerald-200"
    },
    "cloud": {
        bg: "bg-violet-50", text: "text-violet-700", iconBg: "bg-violet-100", border: "border-violet-200"
    },
    "automation": {
        bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100", border: "border-amber-200"
    },
    "security": {
        bg: "bg-rose-50", text: "text-rose-700", iconBg: "bg-rose-100", border: "border-rose-200"
    },
    "development": {
        bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100", border: "border-indigo-200"
    },
    "default": {
        bg: "bg-slate-50", text: "text-slate-700", iconBg: "bg-slate-100", border: "border-slate-200"
    }
};

const CATEGORY_ICONS: Record<string, any> = {
    "software-testing": Zap,
    "database": Database,
    "cloud": Globe,
    "automation": Terminal,
    "security": ShieldCheck,
    "development": Code2,
    "default": Server
};

export default function MockTestLandingPage() {
    const router = useRouter();
    const [selectedCourse, setSelectedCourse] = useState<MockCourse | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCourseClick = (course: MockCourse) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleRegister = async (data: RegistrationData) => {
        if (!selectedCourse) return;
        try {
            if (typeof window !== "undefined") {
                sessionStorage.setItem("mockTestUser", JSON.stringify(data));
            }
            setIsModalOpen(false);
            router.push(`/mock-test/${selectedCourse.slug}`);
        } catch (error) {
            console.error("Registration failed", error);
            setIsModalOpen(false);
            router.push(`/mock-test/${selectedCourse.slug}`);
        }
    };

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-100 selection:text-brand-900">

            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">

                {/* HERO */}
                <header className="mb-24 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
                            <Sparkles className="w-4 h-4" />
                            <span>Premium Mock Assessments</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                            Validate your expertise with <span className="text-blue-600 relative whitespace-nowrap">
                                Precision.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Industry-standard simulation environments designed to test your depth of knowledge.
                            Select a domain below to begin your evaluation.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
                            {[
                                "Real-time Scoring",
                                "Adaptive Difficulty",
                                "Instant Certification"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </header>

                {/* MASONRY GRID LAYOUT */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {mockCategories.map((category, idx) => {
                        let styleKey = "default";
                        for (const key in CATEGORY_STYLES) {
                            if (category.name.toLowerCase().includes(key)) {
                                styleKey = key;
                                break;
                            }
                        }
                        const style = CATEGORY_STYLES[styleKey];
                        const Icon = CATEGORY_ICONS[styleKey] || CATEGORY_ICONS["default"];

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="break-inside-avoid"
                            >
                                <div className={`group relative bg-white rounded-3xl p-6 border ${style.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>

                                    {/* Decorative bg blob */}
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${style.bg} opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-500`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 rounded-2xl ${style.iconBg} ${style.text} flex items-center justify-center`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>
                                                {category.courses.length} Modules
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{category.name}</h3>
                                        <div className="w-8 h-1 bg-slate-200 rounded-full mb-6 group-hover:w-full group-hover:bg-current transition-all duration-500 text-blue-500" />

                                        <div className="grid grid-cols-1 gap-3">
                                            {category.courses.map((course) => (
                                                <button
                                                    key={course.id}
                                                    onClick={() => handleCourseClick(course)}
                                                    className="group/card relative w-full flex items-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-brand-500/10 hover:border-brand-100 transition-all duration-300 overflow-hidden text-left"
                                                >
                                                    <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${style.bg} to-transparent`} />

                                                    <div className="relative z-10 flex-1">
                                                        <h4 className="font-semibold text-slate-700 group-hover/card:text-slate-900 transition-colors mb-0.5">
                                                            {course.name}
                                                        </h4>
                                                        <span className="text-xs font-medium text-slate-400 group-hover/card:text-brand-600 transition-colors uppercase tracking-wider">
                                                            Begin Assessment
                                                        </span>
                                                    </div>

                                                    <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 group-hover/card:bg-white group-hover/card:text-brand-600 text-slate-300 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-md">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* FOOTER CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 rounded-[2.5rem] bg-slate-900 text-white text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to benchmark your skills?</h2>
                        <p className="text-slate-400 mb-8">Join thousands of engineers who use our platform to validate their technical expertise.</p>
                        <div className="flex justify-center gap-4">
                            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium">
                                Free Access
                            </div>
                            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium">
                                Instant Results
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onRegister={handleRegister}
                courseName={selectedCourse?.name || ""}
            />
        </div>
    );
}

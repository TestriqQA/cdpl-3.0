"use client";

import React from "react";
import { Clock, Users, ArrowRight, Star, Zap, Download, BookOpen, Gauge, Shield, Smartphone, Cpu, BarChart3, Code, TrendingUp, Cog, Trophy, Brain, Database, CheckCircle, GraduationCap, Workflow, Sparkles, Megaphone } from "lucide-react";
import { DownloadFormButton } from "@/components/DownloadForm";
import OfferCountdown from "@/components/courses/OfferCountdown";
import Link from "next/link";
import { FaChartBar } from "react-icons/fa6";
import { Course } from "./course";

// --- Icon Mapping ---
export const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-10 h-10" />,
    Zap: <Zap className="w-10 h-10" />,
    Gauge: <Gauge className="w-10 h-10" />,
    Shield: <Shield className="w-10 h-10" />,
    Smartphone: <Smartphone className="w-10 h-10" />,
    Cpu: <Cpu className="w-10 h-10" />,
    BarChart3: <BarChart3 className="w-10 h-10" />,
    Code: <Code className="w-10 h-10" />,
    TrendingUp: <TrendingUp className="w-10 h-10" />,
    ChartBar: <FaChartBar className="w-10 h-10" />,
    Cog: <Cog className="w-10 h-10" />,
    Trophy: <Trophy className="w-10 h-10" />,
    Brain: <Brain className="w-10 h-10" />,
    Database: <Database className="w-10 h-10" />,
    GraduationCap: <GraduationCap className="w-10 h-10" />,
    Workflow: <Workflow className="w-10 h-10" />,
    Sparkles: <Sparkles className="w-10 h-10" />,
    Megaphone: <Megaphone className="w-10 h-10" />
};

// --- Styling Variants ---
type Variant = {
    header: string;
    button: string;
    hoverBorder: string;
};

const VARIANTS: Variant[] = [
    {
        header: "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
        button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
        hoverBorder: "hover:border-indigo-300",
    },
    {
        header: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
        button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
        hoverBorder: "hover:border-emerald-300",
    },
    {
        header: "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
        button: "bg-gradient-to-r from-rose-600 to-orange-500",
        hoverBorder: "hover:border-rose-300",
    },
];

const pickVariant = (i: number): Variant => {
    return VARIANTS[i % VARIANTS.length];
};

interface CourseCardProps {
    course: Course;
    index: number;
    categoryBgColor?: string; // Optional, kept for compatibility if needed, but unused in new design
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
    const variant = pickVariant(index);

    // Resolve Icon: check if course.icon is a string key in iconMap, otherwise render as is (if ReactNode) or fallback
    // The new data will strictly use string keys, but let's be safe.
    const IconComponent = (typeof course.icon === 'string' && iconMap[course.icon])
        ? iconMap[course.icon]
        : (React.isValidElement(course.icon) ? course.icon : <BookOpen className="w-10 h-10" />);

    return (
        <article
            className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full hover:-translate-y-2.5`}
        >
            <div className={`${variant.header} p-6 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 text-white">
                            {IconComponent}
                        </div>
                        <div
                            className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                            aria-label={`Rating ${course.rating.toFixed(1)} out of 5`}
                        >
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold text-gray-800">
                                {course.rating.toFixed(1)}
                            </span>
                        </div>
                    </div>

                    {course.popular && (
                        <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
                            <Zap className="w-3 h-3" />
                            POPULAR
                        </span>
                    )}

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                        {course.title}
                    </h3>

                    <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                        {course.description}
                    </p>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div className="flex items-center space-x-2 text-slate-700">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{course.duration}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
                            {course.level}
                        </span>
                    </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">
                        {course.students} students enrolled
                    </span>
                </div>

                <ul className="space-y-2 flex-grow">
                    {/* Prefer 'features', fallback to 'skills' if features missing */}
                    {(course.features || course.skills || []).slice(0, 4).map((feature: string, i: number) => (
                        <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-slate-700"
                        >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Timer Block — self-contained leaf (its own 1s tick; does not
                    re-render the whole card grid). */}
                <OfferCountdown offerEndsAt={course.offerEndsAt} />

                <div className="pt-4 space-y-3 mt-auto">
                    <Link
                        href={course.href || course.link || '#'}
                        title={`View ${course.title} Course Details`}
                        className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                    >
                        <span>View Course Details</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <DownloadFormButton
                        courseTitle={course.title}
                        syllabusLink={course.syllabusLink}
                        buttonText={
                            <span className="flex items-center justify-center gap-2">
                                <Download className="w-5 h-5" />
                                <span>Download Syllabus</span>
                            </span>
                        }
                        buttonClassName="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                        source={`Courses Page - ${course.title} - Download Syllabus Modal Form`}
                        onSubmit={(values) => {
                            console.log("Download form submitted:", { ...values, course: course.title });
                        }}
                    />
                </div>
            </div>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
        </article>
    );
};

export default CourseCard;

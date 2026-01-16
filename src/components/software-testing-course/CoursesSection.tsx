'use client';

import { motion, Variants } from 'framer-motion';
import { BookOpen, Zap, Gauge, Shield, Smartphone, Cpu, BarChart3, Code, TrendingUp, Cog, Trophy, Brain, Database, Star, Clock, Users, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { COURSES, Course } from '@/components/software-testing-course/data/data';
import { FaChartBar } from 'react-icons/fa6';
import { DownloadFormButton } from '@/components/DownloadForm';
import { EnrollPopup } from '@/components/EnrollForms';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export const iconMap = {
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

};

// --- Card Styling Constants from CourseOverviewSection.tsx ---
type Variant = {
    header: string;
    button: string;
    hoverBorder: string;
};

const VARIANTS: Variant[] = [
    {
        header:
            "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
        button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
        hoverBorder: "hover:border-indigo-300",
    },
    {
        header:
            "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
        button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
        hoverBorder: "hover:border-emerald-300",
    },
    {
        header:
            "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
        button: "bg-gradient-to-r from-rose-600 to-orange-500",
        hoverBorder: "hover:border-rose-300",
    },
];

const pickVariant = (i: number): Variant => {
    return VARIANTS[i % VARIANTS.length];
};








// --- Helpers for timer like in ModuleCard ---
const pad = (n: number) => n.toString().padStart(2, '0');

// --- Course Card Component (extracted layout/design/features from ModuleCard) ---
const CourseCard: React.FC<{ course: Course; index: number; nowMs: number }> = ({ course, index, nowMs }) => {
    const variant = pickVariant(index);
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // 48h fallback window from first mount (matches ModuleCard behavior)
    const fallbackDeadlineRef = React.useRef<Date | null>(null);
    if (!course.offerEndsAt && !fallbackDeadlineRef.current) {
        fallbackDeadlineRef.current = new Date(Date.now() + 48 * 3600 * 1000);
    }
    const target: Date = course.offerEndsAt ? new Date(course.offerEndsAt) : (fallbackDeadlineRef.current as Date);
    const diff = Math.max(0, target.getTime() - nowMs);
    const totalSeconds = Math.floor(diff / 1000);
    const hours = pad(Math.floor(totalSeconds / 3600));
    const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
    const seconds = pad(totalSeconds % 60);
    const isOver = diff <= 0;

    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    return (
        <motion.article
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full`}
        >
            <EnrollPopup isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} onSubmit={(data) => console.log(data)} source={`Software Testing Course Category Page - Courses Section - ${course.title} - Enroll Now`} />
            <div className={`${variant.header} p-6 relative overflow-hidden`}>
                {/* Background Pattern (simplified) */}
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
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                            {iconMap[course.icon]}
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

                    <p className="text-white/90 text-sm leading-relaxed">
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
                    {course.features.slice(0, 4).map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-slate-700"
                        >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Extracted timer block from ModuleCard (boxed H/M/S grid) */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-600 mb-2">
                        Limited-time offer ends in
                    </p>

                    <div
                        className="grid grid-cols-3 gap-3 text-center"
                        role="timer"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        <div className="rounded-lg bg-white shadow-sm p-3">
                            <div className="text-xl font-bold text-slate-900 tabular-nums">
                                {hours}
                            </div>
                            <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                                Hours
                            </div>
                        </div>
                        <div className="rounded-lg bg-white shadow-sm p-3">
                            <div className="text-xl font-bold text-slate-900 tabular-nums">
                                {minutes}
                            </div>
                            <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                                Minutes
                            </div>
                        </div>
                        <div className="rounded-lg bg-white shadow-sm p-3">
                            <div className="text-xl font-bold text-slate-900 tabular-nums">
                                {seconds}
                            </div>
                            <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                                Seconds
                            </div>
                        </div>
                    </div>

                    {isOver && (
                        <p className="mt-2 text-xs text-red-600 font-semibold">
                            Offer has ended.
                        </p>
                    )}
                </div>

                <div className="pt-4 space-y-3 mt-auto">
                    <Link
                        href={course.link}
                        className={`w-full flex items-center justify-center gap-2 ${variant.button} text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                    >
                        <span>View Course</span>
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
                        onSubmit={(values) => {
                            console.log("Download form submitted:", { ...values, course: course.title });
                        }}
                        source={`Software Testing Course Category Page - Courses Section - ${course.title} - Download Syllabus`}
                    />
                </div>
            </div>

            {/* Subtle overlay like ModuleCard */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
        </motion.article>
    );
};

export default function CoursesSection() {

    // Ticking clock passed to each card (matches ModuleCard pattern)
    const [nowMs, setNowMs] = useState<number>(() => Date.now());
    useEffect(() => {
        const id = setInterval(() => setNowMs(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="py-10 bg-gray-50" id='courses'>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                        Popular Courses
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Explore Our <span className="text-brand">Industry-Ready</span> Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.
                    </p>
                </motion.div>

                {/* Course Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} nowMs={nowMs} />
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-brand transition-all duration-300"
                    >
                        <span>View All Courses</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
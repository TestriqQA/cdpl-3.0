"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, TrendingUp, BarChart3, Brain, Megaphone } from "lucide-react";

const CATEGORIES = [
    {
        id: 'software-testing',
        name: 'Software Testing',
        description: 'Master manual & automation testing.',
        icon: <BookOpen className="h-7 w-7" />,
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        groupHover: 'group-hover:text-blue-600',
        hoverBorder: 'group-hover:border-blue-200',
        hoverShadow: 'group-hover:shadow-blue-500/20',
        href: '/software-testing-course'
    },
    {
        id: 'data-science',
        name: 'Data Science',
        description: 'Unlock insights with ML & Python.',
        icon: <TrendingUp className="h-7 w-7" />,
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        groupHover: 'group-hover:text-purple-600',
        hoverBorder: 'group-hover:border-purple-200',
        hoverShadow: 'group-hover:shadow-purple-500/20',
        href: '/ds-ml-courses'
    },
    {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        description: 'Visualize data with PowerBI & Tableau.',
        icon: <BarChart3 className="h-7 w-7" />,
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        groupHover: 'group-hover:text-cyan-600',
        hoverBorder: 'group-hover:border-cyan-200',
        hoverShadow: 'group-hover:shadow-cyan-500/20',
        href: '/bi-courses'
    },
    {
        id: 'artificial-intelligence',
        name: 'Artificial Intelligence',
        description: 'Future-proof with GenAI & Deep Learning.',
        icon: <Brain className="h-7 w-7" />,
        color: 'text-pink-600',
        bg: 'bg-pink-50',
        groupHover: 'group-hover:text-pink-600',
        hoverBorder: 'group-hover:border-pink-200',
        hoverShadow: 'group-hover:shadow-pink-500/20',
        href: '/artificial-intelligence-courses'
    },
    {
        id: "digital-marketing",
        name: "Digital Marketing",
        description: "Growth hacking & AI-driven marketing.",
        icon: <Megaphone className="h-7 w-7" />,
        color: "text-orange-600",
        bg: "bg-orange-50",
        groupHover: 'group-hover:text-orange-600',
        hoverBorder: 'group-hover:border-orange-200',
        hoverShadow: 'group-hover:shadow-orange-500/20',
        href: '/digital-marketing-courses'
    }
];

export default function NewYearCoursesSection() {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-50 selection:bg-yellow-200 selection:text-slate-900">
            {/* Dynamic Background Pattern - Optimized: Removed expensive mask-image */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-70" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl px-4 py-1.5 text-sm font-semibold text-slate-600 shadow-sm mb-6 ring-1 ring-slate-100">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        Limited Time Offer
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Top Categories</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Industry-recognized certifications with a flat <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md font-bold text-sm align-middle border border-yellow-200">50% DISCOUNT</span> to kickstart your year.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className={`
                                group relative flex flex-col justify-between 
                                overflow-visible rounded-[2rem] bg-white p-4 sm:p-6 
                                border border-slate-100 
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:border-transparent ${category.hoverShadow} hover:shadow-2xl
                            `}
                        >
                            {/* Animated colored border on hover */}
                            <div className={`absolute inset-0 rounded-[2rem] border-2 border-transparent ${category.hoverBorder} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className={`
                                        inline-flex items-center justify-center rounded-2xl p-4 
                                        ${category.bg} ${category.color} 
                                        transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm
                                    `}>
                                        {category.icon}
                                    </div>

                                    <span className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        50% OFF
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors break-words">
                                    {category.name}
                                </h3>

                                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                                    {category.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                                    Explore Program
                                    <div className={`ml-auto flex items-center justify-center h-8 w-8 rounded-full bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]`}>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

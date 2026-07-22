'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, CheckCircle, Clock, Award, Users, DollarSign, BookOpen, Briefcase } from 'lucide-react';
import Link from 'next/link';

import { FAQ, dmFaqs as faqs } from './faqData';

const FAQItem: React.FC<{
    faq: FAQ;
    index: number;
    isActive: boolean;
    onToggle: () => void;
}> = ({ faq, index, isActive, onToggle }) => {
    const gradients = [
        {
            bg: "from-blue-50 to-cyan-50",
            border: "border-blue-200",
            icon: "from-blue-500 to-cyan-600",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            hover: "hover:bg-blue-50",
            active: "bg-gradient-to-r from-blue-50 to-cyan-50"
        },
        {
            bg: "from-purple-50 to-fuchsia-50",
            border: "border-purple-200",
            icon: "from-purple-500 to-fuchsia-600",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600",
            hover: "hover:bg-purple-50",
            active: "bg-gradient-to-r from-purple-50 to-fuchsia-50"
        },
        {
            bg: "from-emerald-50 to-teal-50",
            border: "border-emerald-200",
            icon: "from-emerald-500 to-teal-600",
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
            hover: "hover:bg-emerald-50",
            active: "bg-gradient-to-r from-emerald-50 to-teal-50"
        },
        {
            bg: "from-orange-50 to-amber-50",
            border: "border-orange-200",
            icon: "from-brand to-amber-700",
            iconBg: "bg-orange-50",
            iconColor: "text-brand",
            hover: "hover:bg-orange-50",
            active: "bg-gradient-to-r from-orange-50 to-amber-50"
        },
        {
            bg: "from-rose-50 to-pink-50",
            border: "border-rose-200",
            icon: "from-rose-500 to-pink-600",
            iconBg: "bg-rose-50",
            iconColor: "text-rose-600",
            hover: "hover:bg-rose-50",
            active: "bg-gradient-to-r from-rose-50 to-pink-50"
        },
        {
            bg: "from-indigo-50 to-violet-50",
            border: "border-indigo-200",
            icon: "from-indigo-500 to-violet-600",
            iconBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
            hover: "hover:bg-indigo-50",
            active: "bg-gradient-to-r from-indigo-50 to-violet-50"
        },
        {
            bg: "from-cyan-50 to-sky-50",
            border: "border-cyan-200",
            icon: "from-cyan-500 to-sky-600",
            iconBg: "bg-cyan-50",
            iconColor: "text-cyan-600",
            hover: "hover:bg-cyan-50",
            active: "bg-gradient-to-r from-cyan-50 to-sky-50"
        },
        {
            bg: "from-lime-50 to-green-50",
            border: "border-lime-200",
            icon: "from-lime-500 to-green-600",
            iconBg: "bg-lime-50",
            iconColor: "text-lime-600",
            hover: "hover:bg-lime-50",
            active: "bg-gradient-to-r from-lime-50 to-green-50"
        }
    ];

    const theme = gradients[index % gradients.length];
    const Icon = faq.icon as React.ElementType;

    return (
        <div className="group hover:-translate-y-1 transition-transform duration-200">
            <div className={`relative bg-white rounded-2xl border-2 ${theme.border} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${isActive ? theme.active : ''}`}>
                {/* Side accent bar — height animates via CSS on isActive */}
                <div
                    className={`absolute left-0 top-0 w-1.5 bg-gradient-to-b ${theme.icon} transition-[height] duration-300 ${isActive ? 'h-full' : 'h-0'}`}
                />

                <button
                    onClick={onToggle}
                    // Make layout stable on small screens: vertically center items, constrain question with min-w-0, and allow truncation/wrapping
                    className={`w-full text-left p-6 flex items-center gap-4 transition-all duration-300 ${theme.hover} overflow-hidden`}
                >
                    {/* Icon — spin+scale on activate, via CSS */}
                    <div
                        className={`flex-shrink-0 w-12 h-12 ${theme.iconBg} rounded-xl flex items-center justify-center border-2 ${theme.border} shadow-md transition-transform duration-[400ms] ${isActive ? 'rotate-[360deg] scale-110' : ''}`}
                    >
                        <Icon className={`w-6 h-6 ${theme.iconColor}`} strokeWidth={2.5} />
                    </div>

                    {/* Question */}
                    <div className="flex-grow min-w-0 pt-1">
                        {/* min-w-0 ensures truncation/wrapping doesn't push flex items like the chevron */}
                        <h3 className="font-bold text-lg text-gray-900 pr-4 leading-tight group-hover:text-gray-800 transition-colors break-words whitespace-normal ">
                            {faq.q}
                        </h3>
                    </div>

                    {/* Chevron */}
                    <div className={`flex-shrink-0 ml-1 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${theme.iconBg} border ${theme.border} flex items-center justify-center`}>
                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${theme.iconColor}`} />
                        </div>
                    </div>
                </button>

                {/* Answer — CSS grid-rows accordion (replaces AnimatePresence height
                    animation). Answer stays in the DOM (crawlable), collapsed via
                    0fr -> 1fr with the inner overflow-hidden clip. */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className="overflow-hidden">
                        <div className={`px-6 pb-6 ml-14 md:ml-16 bg-gradient-to-r ${theme.bg} rounded-xl mx-4 md:mx-6 mb-4 p-4 border ${theme.border}`}>
                            <p className="text-gray-700 leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function FAQSection() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="relative container mx-auto px-6 lg:px-8 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Got Questions?</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked{" "}
                        <span className="text-brand">
                            Questions
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to know about our Digital Marketing course, campaign skills,
                        certifications, and how we help you launch or scale your marketing career.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-16">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            index={index}
                            isActive={activeFAQ === index}
                            onToggle={() => setActiveFAQ(activeFAQ === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    Still Have Questions?
                                </h3>
                                <p className="text-gray-600">
                                    Our team is here to help you choose the right Digital Marketing path
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                             <Link
                                 href="/contact-us"
                                 title="Talk to Our Experts"
                                 className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                             >
                                Talk to Our Experts
                            </Link>
                             <Link
                                 href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                                 title="Schedule a Demo"
                                 className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                             >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust badge */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 mb-3">Trusted by learners across India</p>
                    <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Placement Support</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-blue-500" />
                            <span>Industry Certified</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-purple-500" />
                            <span>Our Hiring Partner Network</span>
                        </div>
                    </div>
                </div>
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

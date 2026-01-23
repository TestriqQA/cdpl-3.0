'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    HelpCircle,
    Sparkles,
    CheckCircle,
    Clock,
    Award,
    Users,
    DollarSign,
    BookOpen,
    Briefcase,
} from 'lucide-react';
import Link from 'next/link';

// --- types ---
type FAQ = {
    id: number;
    icon: React.ElementType;
    q: string;
    a: string;
};

// Software Testing focused FAQ data
const faqs: FAQ[] = [
    {
        id: 1,
        icon: HelpCircle,
        q: "What is Software Testing and why should I learn it?",
        a: "Software Testing ensures applications work as intended and meet quality standards. Learning testing opens stable career paths (QA Engineer, Automation Engineer, Performance Tester) and equips you to improve product reliability. Testers are essential across industries — finance, e-commerce, health-tech — making skills highly employable.",
    },
    {
        id: 2,
        icon: BookOpen,
        q: "Do I need programming experience to join this course?",
        a: "No prior programming experience is required for the manual testing modules. For automation tracks you'll learn the necessary scripting (JavaScript/Python/Java) step-by-step. The course focuses on practical, hands-on labs — from test case design to building automation frameworks with Selenium/Appium and API testing with Postman.",
    },
    {
        id: 3,
        icon: Clock,
        q: "How long does the Software Testing program take?",
        a: "Our core program runs for 12–16 weeks depending on the track (manual + automation). Typical commitment is 6–10 hours/week for part-time batches. We also offer intensives and self-paced options. Each track includes projects, assignments and a capstone to demonstrate job readiness.",
    },
    {
        id: 4,
        icon: Award,
        q: "Which certifications and outcomes will I receive?",
        a: "On completion you'll receive an industry-recognized Software Testing Professional certificate. We also prepare you for role-specific certifications (ISTQB Foundation Level, automation tool badges) and provide exam prep material and mock tests to help you succeed.",
    },
    {
        id: 5,
        icon: DollarSign,
        q: "What salary can I expect after completing the course?",
        a: "Entry-level QA roles in India typically start around ₹3-6 LPA, automation and specialized roles (performance, security testing) often range ₹5-12 LPA. Graduates who upskill to automation commonly report 30–50% salary improvements depending on prior experience and role.",
    },
    {
        id: 6,
        icon: Briefcase,
        q: "What job support and placement assistance do you provide?",
        a: "We offer end-to-end career support: resume & portfolio reviews, mock interviews with industry experts, recruiter introductions, and placement guidance. Our placement partners include product companies, consultancies and testing service providers who regularly hire our graduates.",
    },
    {
        id: 7,
        icon: Users,
        q: "What is the class size and learning format?",
        a: "We maintain small cohorts (max ~20 learners) to ensure personal attention. Classes are live and interactive with experienced instructors, plus recordings and lab access. You’ll get lifetime access to materials and membership in our alumni community for networking.",
    },
    {
        id: 8,
        icon: CheckCircle,
        q: "Which tools and technologies will I master?",
        a: "You’ll get hands-on experience with Selenium, Appium (mobile), Postman for API testing, JMeter for performance testing, CI/CD integration with Jenkins/GitHub Actions, and test management tools like JIRA. We also cover test design techniques, automation frameworks and basic scripting with Python/JavaScript.",
    },
];

const FAQItem: React.FC<{
    faq: FAQ;
    index: number;
    isActive: boolean;
    onToggle: () => void;
}> = ({ faq, index, isActive, onToggle }) => {
    const gradients = [
        {
            bg: 'from-blue-50 to-cyan-50',
            border: 'border-blue-200',
            icon: 'from-blue-500 to-cyan-600',
            iconBg: 'bg-blue-50',
            iconColor: 'text-blue-600',
            hover: 'hover:bg-blue-50',
            active: 'bg-gradient-to-r from-blue-50 to-cyan-50',
        },
        {
            bg: 'from-purple-50 to-fuchsia-50',
            border: 'border-purple-200',
            icon: 'from-purple-500 to-fuchsia-600',
            iconBg: 'bg-purple-50',
            iconColor: 'text-purple-600',
            hover: 'hover:bg-purple-50',
            active: 'bg-gradient-to-r from-purple-50 to-fuchsia-50',
        },
        {
            bg: 'from-emerald-50 to-teal-50',
            border: 'border-emerald-200',
            icon: 'from-emerald-500 to-teal-600',
            iconBg: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
            hover: 'hover:bg-emerald-50',
            active: 'bg-gradient-to-r from-emerald-50 to-teal-50',
        },
        {
            bg: 'from-orange-50 to-amber-50',
            border: 'border-orange-200',
            icon: 'from-orange-500 to-amber-600',
            iconBg: 'bg-orange-50',
            iconColor: 'text-brand',
            hover: 'hover:bg-orange-50',
            active: 'bg-gradient-to-r from-orange-50 to-amber-50',
        },
        {
            bg: 'from-rose-50 to-pink-50',
            border: 'border-rose-200',
            icon: 'from-rose-500 to-pink-600',
            iconBg: 'bg-rose-50',
            iconColor: 'text-rose-600',
            hover: 'hover:bg-rose-50',
            active: 'bg-gradient-to-r from-rose-50 to-pink-50',
        },
        {
            bg: 'from-indigo-50 to-violet-50',
            border: 'border-indigo-200',
            icon: 'from-indigo-500 to-violet-600',
            iconBg: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            hover: 'hover:bg-indigo-50',
            active: 'bg-gradient-to-r from-indigo-50 to-violet-50',
        },
        {
            bg: 'from-cyan-50 to-sky-50',
            border: 'border-cyan-200',
            icon: 'from-cyan-500 to-sky-600',
            iconBg: 'bg-cyan-50',
            iconColor: 'text-cyan-600',
            hover: 'hover:bg-cyan-50',
            active: 'bg-gradient-to-r from-cyan-50 to-sky-50',
        },
        {
            bg: 'from-lime-50 to-green-50',
            border: 'border-lime-200',
            icon: 'from-lime-500 to-green-600',
            iconBg: 'bg-lime-50',
            iconColor: 'text-lime-600',
            hover: 'hover:bg-lime-50',
            active: 'bg-gradient-to-r from-lime-50 to-green-50',
        },
    ];

    const theme = gradients[index % gradients.length];
    const Icon = faq.icon as React.ElementType;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group"
        >
            <div
                className={`relative bg-white rounded-2xl border-2 ${theme.border} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${isActive ? theme.active : ''}`}
            >
                {/* Side accent bar */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 top-0 w-1.5 bg-gradient-to-b ${theme.icon}`}
                />

                <button
                    onClick={onToggle}
                    className={`w-full text-left p-6 flex items-center gap-4 transition-all duration-300 ${theme.hover} overflow-hidden`}
                >
                    {/* Icon */}
                    <motion.div
                        animate={{
                            rotate: isActive ? 360 : 0,
                            scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className={`flex-shrink-0 w-12 h-12 ${theme.iconBg} rounded-xl flex items-center justify-center border-2 ${theme.border} shadow-md`}
                    >
                        <Icon className={`w-6 h-6 ${theme.iconColor}`} strokeWidth={2.5} />
                    </motion.div>

                    {/* Question */}
                    <div className="flex-grow min-w-0 pt-1">
                        <h3 className="font-bold text-lg text-gray-900 pr-4 leading-tight group-hover:text-gray-800 transition-colors break-words whitespace-normal ">
                            {faq.q}
                        </h3>
                    </div>

                    {/* Chevron */}
                    <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 ml-1">
                        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${theme.iconBg} border ${theme.border} flex items-center justify-center`}>
                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${theme.iconColor}`} />
                        </div>
                    </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                    {isActive && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                height: { duration: 0.3, ease: 'easeInOut' },
                                opacity: { duration: 0.2, ease: 'easeInOut' },
                            }}
                            className="overflow-hidden"
                        >
                            <div className={`px-6 pb-6 ml-14 md:ml-16 bg-gradient-to-r ${theme.bg} rounded-xl mx-4 md:mx-6 mb-4 p-4 border ${theme.border}`}>
                                <motion.p initial={{ y: -10 }} animate={{ y: 0 }} transition={{ duration: 0.3 }} className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                </motion.p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
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
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Got Questions?</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="text-brand">Questions</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to know about our Software Testing courses, tools you’ll learn, certification paths, and career support.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-16">
                    {faqs.map((faq, index) => (
                        <FAQItem key={faq.id} faq={faq} index={index} isActive={activeFAQ === index} onToggle={() => setActiveFAQ(activeFAQ === index ? null : index)} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
                    <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Still Have Questions?</h3>
                                <p className="text-gray-600">Our admissions team and instructors are happy to help you choose the right testing track.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contact-us"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Talk to Our Experts
                            </Link>
                            <Link
                                href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Trust badge */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-12 text-center">
                    <p className="text-sm text-gray-500 mb-3">Trusted by software teams & testers</p>
                    <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Practical Labs Included</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-blue-500" />
                            <span>Role-Focused Tracks</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-purple-500" />
                            <span>Industry Mentors</span>
                        </div>
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

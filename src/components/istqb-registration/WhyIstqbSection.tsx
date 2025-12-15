'use client';

import { motion } from 'framer-motion';
import { Globe, Layers, TrendingUp, Infinity, Wallet, Zap } from 'lucide-react';

const FEATURES = [
    {
        title: "Globally Recognized & Industry Standard",
        icon: Globe,
        color: "text-blue-600",
        bg: "bg-blue-50",
        points: [
            "Accepted in 130+ countries with over 1 million certified professionals",
            "Recognized by top companies as the gold standard for software testing",
            "Aligns with international best practices"
        ]
    },
    {
        title: "Structured Learning Path",
        icon: Layers,
        color: "text-purple-600",
        bg: "bg-purple-50",
        points: [
            "Multiple levels for career growth: Foundation, Advanced, and Expert",
            "Covers Manual Testing, Automation, Agile, and Test Management"
        ]
    },
    {
        title: "Enhances Career & Salary Prospects",
        icon: TrendingUp,
        color: "text-green-600",
        bg: "bg-green-50",
        points: [
            "Certified professionals earn higher salaries",
            "Boosts job opportunities in top companies and global enterprises",
            "Essential for roles like QA Engineer, Test Manager, and Automation Engineer"
        ]
    },
    {
        title: "No Expiry – Lifetime Validity",
        icon: Infinity,
        color: "text-rose-600",
        bg: "bg-rose-50",
        points: [
            "Unlike other certifications, ISTQB never expires, so no renewals are needed."
        ]
    },
    {
        title: "Cost-Effective & Flexible",
        icon: Wallet,
        color: "text-amber-600",
        bg: "bg-amber-50",
        points: [
            "More affordable than many other certifications",
            "No mandatory training required – self-study is an option",
            "Available in multiple languages and global locations"
        ]
    },
    {
        title: "Industry-Aligned & Future-Proof",
        icon: Zap,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        points: [
            "Regularly updated to reflect trends (Agile, DevOps, AI in Testing)",
            "Keeps professionals ahead in the evolving testing landscape"
        ]
    }
];

export default function WhyIstqbSection() {
    return (
        <section className="relative">
            {/* Soft Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] rounded-3xl" />

            <div className="relative z-10 py-8 md:py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-4"
                    >
                        Why Choose ISTQB?
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight"
                    >
                        Why ISTQB is the <span className="text-orange-600">Best Testing Certification?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-lg text-slate-600"
                    >
                        Widely recognized as the best in software testing due to its global recognition, structured learning path, and career-boosting benefits.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white relative px-8 py-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(249,115,22,0.1)] hover:border-orange-100 hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
                        >
                            {/* Decorative soft glow on hover */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className={`relative w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-slate-100`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} strokeWidth={1.5} />
                            </div>

                            <h3 className="relative text-xl font-bold text-slate-900 mb-4 pr-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            <ul className="relative space-y-3">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-orange-500 transition-colors duration-300 flex-shrink-0" />
                                        <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

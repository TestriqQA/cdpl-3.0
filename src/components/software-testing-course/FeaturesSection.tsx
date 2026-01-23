'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain, Users, Award, Zap, Target, Briefcase, Shield, Sparkles } from 'lucide-react';

// 🎯 Software Testing / QA-focused features with SEO-optimized content
const testingFeatures = [
    {
        icon: BarChart3,
        title: "Test Reporting & Metrics",
        desc: "Learn to design meaningful test reports, dashboards and QA metrics (pass rate, defect density, MTTR) that demonstrate product quality and guide release decisions — perfect for stakeholder buy-in and SEO-rich content around QA reporting."
    },
    {
        icon: Database,
        title: "Test Data Management & Environment Setup",
        desc: "Master strategies for creating, masking, and managing test data, provisioning test environments, and using containers/VMs for reproducible QA — essential skills for reliable integration and system testing."
    },
    {
        icon: Brain,
        title: "Test Strategy & Test Design",
        desc: "Understand black-box & white-box techniques, risk-based testing, BDD/TDD approaches, and how to craft scalable test cases and test suites that reduce defects and speed up delivery."
    },
    {
        icon: TrendingUp,
        title: "Performance & Load Testing",
        desc: "Integrate performance testing into the CI pipeline using industry tools and approaches to detect bottlenecks, optimize throughput and ensure SLAs — covering load, stress and endurance testing best practices."
    },
    {
        icon: Users,
        title: "Stakeholder Communication for QA",
        desc: "Learn to translate technical test results into business-impact narratives for PMs and execs, enabling better risk decisions and faster go/no-go calls — an underrated but high-value QA skill."
    },
    {
        icon: Briefcase,
        title: "Real-World QA Projects",
        desc: "Work on production-like projects: web & mobile testing, API automation, end-to-end pipelines and regression suites — build a portfolio that hiring managers actually look for in QA roles."
    },
    {
        icon: Zap,
        title: "Test Automation & Frameworks",
        desc: "Hands-on automation with Selenium, Playwright, Cypress and API automation (Postman / REST-assured) plus designing maintainable test frameworks, page objects, and CI/CD test pipelines."
    },
    {
        icon: Award,
        title: "Certification & Interview Prep",
        desc: "Prepare for ISTQB and job interviews with curated practice problems, mock interviews, and role-specific interview kits focused on automation engineers and SDET positions."
    },
    {
        icon: Shield,
        title: "Security & QA Best Practices",
        desc: "Cover security testing fundamentals, common vulnerabilities, and QA-oriented secure coding checks to help teams ship safer software while meeting compliance and governance needs."
    }
];

// 🎨 Reuse modern gradient themes (kept for consistent UI)
const gradientThemes = [
    {
        bg: "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10",
        border: "border-blue-200/50",
        iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
        glow: "group-hover:shadow-blue-500/20"
    },
    {
        bg: "bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-purple-600/10",
        border: "border-purple-200/50",
        iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
        glow: "group-hover:shadow-purple-500/20"
    },
    {
        bg: "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-600/10",
        border: "border-emerald-200/50",
        iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
        glow: "group-hover:shadow-emerald-500/20"
    },
    {
        bg: "bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-brand/10",
        border: "border-orange-200/50",
        iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
        glow: "group-hover:shadow-orange-500/20"
    },
    {
        bg: "bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-rose-600/10",
        border: "border-rose-200/50",
        iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
        glow: "group-hover:shadow-rose-500/20"
    },
    {
        bg: "bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-indigo-600/10",
        border: "border-indigo-200/50",
        iconBg: "bg-gradient-to-br from-indigo-500 to-violet-600",
        glow: "group-hover:shadow-indigo-500/20"
    },
    {
        bg: "bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-cyan-600/10",
        border: "border-cyan-200/50",
        iconBg: "bg-gradient-to-br from-cyan-500 to-sky-600",
        glow: "group-hover:shadow-cyan-500/20"
    },
    {
        bg: "bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-amber-600/10",
        border: "border-amber-200/50",
        iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
        glow: "group-hover:shadow-amber-500/20"
    },
    {
        bg: "bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-slate-600/10",
        border: "border-slate-200/50",
        iconBg: "bg-gradient-to-br from-slate-500 to-gray-600",
        glow: "group-hover:shadow-slate-500/20"
    }
];

interface FeatureCardProps {
    icon: any;
    title: string;
    desc: string;
    theme: {
        bg: string;
        border: string;
        iconBg: string;
        glow: string;
    };
    index: number;
}

const FeatureCard = ({ icon: Icon, title, desc, theme, index }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative h-full"
        >
            {/* Animated gradient border effect */}
            <div className={`absolute inset-0 ${theme.bg} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${theme.glow}`} />

            <div className={`relative h-full ${theme.bg} ${theme.border} border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 shadow-lg ${theme.glow} group-hover:shadow-2xl`}>
                {/* Floating icon */}
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${theme.iconBg} rounded-xl shadow-lg mb-5 group-hover:shadow-xl transition-shadow duration-300`}
                >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                    {desc}
                </p>

                {/* Bottom accent line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className={`absolute bottom-0 left-0 h-1 ${theme.iconBg} rounded-b-xl`}
                />
            </div>
        </motion.div>
    );
};

export default function TestingFeaturesSection() {
    // Smooth scroll to #courses on same page
    const scrollToCourses = () => {
        if (typeof window === 'undefined') return;
        const el = document.getElementById('courses');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback: try scrolling to an anchor named courses
            const anchor = document.querySelector('a[name="courses"]') as HTMLElement | null;
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Software Testing & Quality Assurance</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Build Reliable Software with{" "}
                        <span className="text-brand">
                            Expert QA & Test Automation
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Learn manual testing, automation (Selenium, Playwright, Cypress), API & performance testing, and QA best practices. Become a job-ready SDET or QA engineer with hands-on projects, interview prep, and industry certification guidance.
                    </p>
                </motion.div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testingFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                            theme={gradientThemes[index % gradientThemes.length]}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">
                        Ready to launch your QA career or level up as an SDET?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToCourses}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Target className="w-5 h-5" />
                        Explore Software Testing Courses
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

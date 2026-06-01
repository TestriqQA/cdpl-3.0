"use client";

import {
    BarChart3,
    PieChart,
    Database,
    LineChart,
    Brain,
    ShieldCheck,
    Server,
    BadgeCheck,
    Layers,
    ClipboardList,
} from "lucide-react";

import { useState } from "react";
import EnrollModal from "../EnrollModal";

export default function WhyAnalyticsProgram() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    const featureChips = [
        { label: "110 Hours", color: "bg-indigo-600 text-white" },
        { label: "Hands-On Projects", color: "bg-[#047857] text-white" },
        { label: "Expert Faculty", color: "bg-amber-500 text-gray-900" },
        { label: "Beginner Friendly", color: "bg-sky-600 text-white" },
        { label: "Job-Ready", color: "bg-rose-600 text-white" },
    ];

    const outcomes = [
        {
            icon: BarChart3,
            iconColor: "text-indigo-700",
            iconBg: "bg-indigo-50",
            border: "border-indigo-200",
            title: "BI Dashboards that Drive Action",
            text:
                "Design KPI-focused dashboards in Power BI and Tableau using best-practice layouts, DAX/LOD, and drill-through analytics.",
        },
        {
            icon: Database,
            iconColor: "text-emerald-700",
            iconBg: "bg-emerald-50",
            border: "border-emerald-200",
            title: "SQL & Data Modeling",
            text:
                "Write production-grade SQL, build star/snowflake schemas, and optimize queries with indexing, CTEs, and window functions.",
        },
        {
            icon: LineChart,
            iconColor: "text-amber-700",
            iconBg: "bg-amber-50",
            border: "border-amber-200",
            title: "Predictive Analytics",
            text:
                "Use Python (pandas, scikit-learn) for regression, classification, feature engineering, and model evaluation with real datasets.",
        },
        {
            icon: Brain,
            iconColor: "text-fuchsia-700",
            iconBg: "bg-fuchsia-50",
            border: "border-fuchsia-200",
            title: "Analytics Storytelling",
            text:
                "Turn insights into narratives with benchmarks, comparisons, and context that help stakeholders make decisions fast.",
        },
        {
            icon: Server,
            iconColor: "text-cyan-700",
            iconBg: "bg-cyan-50",
            border: "border-cyan-200",
            title: "ETL & Data Prep",
            text:
                "Cleanse, transform, and join data reliably. Automate refreshes and publish governed datasets for teams.",
        },
        {
            icon: ShieldCheck,
            iconColor: "text-lime-700",
            iconBg: "bg-lime-50",
            border: "border-lime-200",
            title: "Governance & QA",
            text:
                "Validate metrics, manage access, and add documentation so analytics are trusted across the business.",
        },
    ];

    const bullets = [
        {
            icon: PieChart,
            color: "text-sky-700",
            bg: "bg-sky-50",
            text: "Portfolio-first approach: publish dashboards and notebooks recruiters can review.",
        },
        {
            icon: Layers,
            color: "text-violet-700",
            bg: "bg-violet-50",
            text: "End-to-end pipeline: from raw data → modeling → visualization → business impact.",
        },
        {
            icon: ClipboardList,
            color: "text-rose-700",
            bg: "bg-rose-50",
            text: "Interview-ready: metrics, case studies, and SQL challenges with solutions.",
        },
        {
            icon: BadgeCheck,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
            text: "Tooling: Power BI, Tableau, SQL, Python, and Excel for production reporting.",
        },
    ];

    return (
        <section
            className="relative py-10 bg-white"
            aria-labelledby="why-analytics-heading"
        >
            {/* subtle futuristic accent (sleek gradient line only) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-10 md:mb-12">
                    <h2
                        id="why-analytics-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
                    >
                        Advanced Data Analytics - <span className="text-DS">A Complete Career Overview</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        In 2025-2026, the demand for <strong>certified data analysts</strong> is at an all-time high. Our <strong>data analyst full course</strong> covers every aspect of the data lifecycle, from SQL modeling to advanced BI storytelling.
                    </p>
                </header>

                {/* Feature chips (distinct colors, no repetition) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto mb-10 md:mb-12">
                    {featureChips.map((c) => (
                        <div
                            key={c.label}
                            className={`rounded-xl px-4 py-3 text-center text-sm font-semibold shadow-sm ${c.color}`}
                        >
                            {c.label}
                        </div>
                    ))}
                </div>

                {/* Outcomes grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {outcomes.map((o) => (
                        <article
                            key={o.title}
                            className={`rounded-2xl border ${o.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`p-2.5 rounded-xl ${o.iconBg} ring-1 ring-black/5`} aria-hidden="true">
                                    <o.icon className={`w-6 h-6 ${o.iconColor}`} strokeWidth={2.2} />
                                </span>
                                <h3 className="text-lg font-bold text-gray-900">{o.title}</h3>
                            </div>
                            <p className="mt-3 text-gray-700 leading-relaxed">{o.text}</p>
                        </article>
                    ))}
                </div>

                {/* Program summary */}
                <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6 items-start">
                    <article className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900">What you’ll learn (and build)</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            From <strong>data cleaning</strong> and <strong>SQL modeling</strong> to{" "}
                            <strong>visual analytics</strong> and <strong>machine learning</strong>, this program
                            ensures you can ship real analytics. You’ll create KPI suites, cohort/retention views,
                            forecasting models, and stakeholder-ready dashboards with clear documentation and
                            measurable outcomes.
                        </p>
                        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className={`mt-0.5 p-1.5 rounded-md ${b.bg} ring-1 ring-black/5`} aria-hidden="true">
                                        <b.icon className={`w-5 h-5 ${b.color}`} strokeWidth={2.2} />
                                    </span>
                                    <span className="text-gray-800">{b.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-gray-700">
                            Keywords:{" "}
                            <em>
                                data analytics course, business intelligence training, Power BI dashboards, Tableau
                                visualizations, SQL queries, Python analytics, predictive modeling, KPI reporting,
                                ETL, data storytelling
                            </em>
                            .
                        </p>
                    </article>

                    {/* Quick facts / CTA */}
                    <aside className="rounded-2xl border border-gray-200 p-6 md:p-8">
                        <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
                        <dl className="mt-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Duration</dt>
                                <dd className="font-semibold text-indigo-700">≈ 110 Hours</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Learning Mode</dt>
                                <dd className="font-semibold text-emerald-700">Project-Based</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Prerequisites</dt>
                                <dd className="font-semibold text-amber-700">None</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Outcome</dt>
                                <dd className="font-semibold text-rose-700">Job-Ready Portfolio</dd>
                            </div>
                        </dl>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-label="Apply now for Advanced Data Analytics Hero Program"
                            >
                                Apply Now
                                <BadgeCheck className="w-4 h-4" />
                            </button>
                            <p className="mt-3 text-xs text-gray-600">
                                Get the full syllabus and a skill-gap checklist to personalize your learning path.
                            </p>
                        </div>
                    </aside>
                </div>

                <EnrollModal
                    isOpen={isEnrollOpen}
                    onClose={() => setIsEnrollOpen(false)}
                    source="Data Analytics Course Page - Why Analytics Section - Apply Now"
                    courseName="Advanced Data Analytics Hero Program"
                />
            </div>

        </section>
    );
}

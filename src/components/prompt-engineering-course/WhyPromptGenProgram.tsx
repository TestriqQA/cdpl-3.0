// components/sections/WhyPromptGenProgram.tsx
"use client";

import {
    Sparkles,
    Wand2,
    MessageSquare,
    Bot,
    Workflow,
    ShieldCheck,
    Gauge,
    BookOpen,
    Rocket,
    Keyboard,
} from "lucide-react";
import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function WhyPromptGenProgram() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Prompt Engineering Course";
    const source = "Prompt Engineering Course Page - Why Section";


    const featureChips = [
        { label: "20 Hours", color: "bg-indigo-600 text-white" },
        { label: "Hands-On Projects", color: "bg-emerald-600 text-white" },
        { label: "Expert Instructors", color: "bg-amber-500 text-gray-900" },
        { label: "Beginner Friendly", color: "bg-sky-600 text-white" },
        { label: "100% Job-Ready", color: "bg-rose-600 text-white" },
    ];

    const outcomes = [
        {
            icon: Wand2,
            iconColor: "text-violet-700",
            iconBg: "bg-violet-50",
            border: "border-violet-200",
            title: "Design Effective Prompts",
            text:
                "Master system prompts, role prompting, few-shot patterns, and chain-of-thought to boost quality and reliability.",
        },
        {
            icon: MessageSquare,
            iconColor: "text-emerald-700",
            iconBg: "bg-emerald-50",
            border: "border-emerald-200",
            title: "Frameworks & Patterns",
            text:
                "CRISPE, ReAct, CoT, and Planner-Executor frameworks to structure multi-step reasoning and tool use.",
        },
        {
            icon: Bot,
            iconColor: "text-amber-700",
            iconBg: "bg-amber-50",
            border: "border-amber-200",
            title: "Multi-Model Fluency",
            text:
                "Work across ChatGPT, Grok, and open-source LLMs; adapt prompts to different model behaviors and contexts.",
        },
        {
            icon: Workflow,
            iconColor: "text-sky-700",
            iconBg: "bg-sky-50",
            border: "border-sky-200",
            title: "Automation Pipelines",
            text:
                "Wire prompts into APIs and no-code tools, create reusable templates, and automate content & support workflows.",
        },
        {
            icon: ShieldCheck,
            iconColor: "text-lime-700",
            iconBg: "bg-lime-50",
            border: "border-lime-200",
            title: "Safety & Guardrails",
            text:
                "Mitigate bias, define allowed topics, and implement output validation, red-teaming, and fallbacks.",
        },
        {
            icon: Gauge,
            iconColor: "text-rose-700",
            iconBg: "bg-rose-50",
            border: "border-rose-200",
            title: "Evaluate & Iterate",
            text:
                "Build prompt test sets, track win-rates, measure latency/cost, and version prompts like code.",
        },
    ];

    const bullets = [
        {
            icon: Keyboard,
            color: "text-indigo-700",
            bg: "bg-indigo-50",
            text: "Reusable prompt libraries for content, research, support, and analysis.",
        },
        {
            icon: BookOpen,
            color: "text-amber-700",
            bg: "bg-amber-50",
            text: "Clear rubrics and A/B tests to validate prompt improvements objectively.",
        },
        {
            icon: Sparkles,
            color: "text-fuchsia-700",
            bg: "bg-fuchsia-50",
            text: "Portfolio artifacts: prompt packs, evaluation reports, and live demos.",
        },
    ];

    return (
        <section
            className="relative py-10 bg-white"
            aria-labelledby="why-promptgen-heading"
        >
            {/* Subtle futuristic accent (thin gradient line only) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-10 md:mb-12">
                    <h1
                        id="why-promptgen-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
                    >
                        Prompt Engineering with Gen&nbsp;AI —{" "}
                        <span className="text-DS">A Complete Overview</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Learn to <strong>design prompts that perform</strong> across models and use-cases.
                        Build automation and content systems with <strong>measurable quality</strong>,
                        <strong> safety</strong>, and <strong>cost control</strong>.
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
                            From <strong>LLM fundamentals</strong> and <strong>prompt patterns</strong> to{" "}
                            <strong>evaluation</strong> and <strong>guardrails</strong>, this program emphasizes
                            practical, deployable skills. You’ll ship reusable prompt libraries, integrate with APIs,
                            and publish <strong>portfolio-ready demos</strong>.
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
                                prompt engineering course, generative AI prompts, ChatGPT prompting, few-shot CoT,
                                system prompts, evaluation harness, AI content automation, guardrails, LLM safety
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
                                <dd className="font-semibold text-indigo-700">≈ 20 Hours</dd>
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
                                aria-label="Apply now for Prompt Engineering with Gen AI"
                            >
                                Apply Now
                                <Rocket className="w-4 h-4" />
                            </button>
                            <p className="mt-3 text-xs text-gray-600">
                                You’ll receive the full syllabus and a readiness checklist to personalize your path.
                            </p>
                        </div>
                    </aside>
                </div>

                <EnrollModal
                    isOpen={isEnrollOpen}
                    onClose={() => setIsEnrollOpen(false)}
                    source={`${source} - Apply Now`}
                    courseName={courseName}
                />
            </div>

        </section>
    );
}

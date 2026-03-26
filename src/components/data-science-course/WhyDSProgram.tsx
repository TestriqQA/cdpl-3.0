// components/sections/WhyDSProgram.tsx
"use client";

import {

    FlaskConical,
    Cloud,
    BarChart3,
    GitBranch,
    Rocket,
    BookOpen,
} from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function WhyDSProgram() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "Advanced Data Science and Machine Learning Masterclass";

    const bullets = [
        {
            icon: BarChart3,
            color: "text-rose-700",
            bg: "bg-rose-50",
            text: "Business-ready dashboards and reports that translate metrics into decisions.",
        },
        {
            icon: GitBranch,
            color: "text-violet-700",
            bg: "bg-violet-50",
            text: "Versioned experiments with MLFlow & DVC for repeatable results.",
        },
        {
            icon: FlaskConical,
            color: "text-emerald-700",
            bg: "bg-emerald-50",
            text: "A/B tests and uplift modeling to prove model impact.",
        },
        {
            icon: Cloud,
            color: "text-sky-700",
            bg: "bg-sky-50",
            text: "Cloud patterns across AWS/GCP/Azure for scalable training & serving.",
        },
        {
            icon: BookOpen,
            color: "text-amber-700",
            bg: "bg-amber-50",
            text: "Clear READMEs and portfolio storytelling recruiters love.",
        },
    ];

    return (
        <section
            className="relative py-10 bg-white"
            aria-labelledby="why-ds-heading"
        >
            {/* ... (keep background) */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ... (keep header, chips, outcomes, program summary) */}

                {/* Program summary */}
                <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6 items-start">
                    <article className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 md:p-8">
                        {/* ... (keep content) */}
                        <h2 className="text-2xl font-bold text-gray-900">Advanced Data Science - A Complete Career Overview</h2>
                        <p className="mt-3 text-gray-700 leading-relaxed">
                            The demand for <strong>certified data scientists</strong> is at an all-time high. Our <strong>data science full course</strong> covers every aspect of the data lifecycle, from visualization to **MLOps** and deployments.
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
                                data science training, machine learning course, deep learning with TensorFlow,
                                feature engineering, model deployment, MLOps pipeline, ML monitoring, cloud AI
                                solutions, Python data analysis
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
                                <dd className="font-semibold text-indigo-700">≈ 200 Hours</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Learning Mode</dt>
                                <dd className="font-semibold text-emerald-700">Project-Based</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Prerequisites</dt>
                                <dd className="font-semibold text-amber-700">Basic Python & Math</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-gray-600">Outcome</dt>
                                <dd className="font-semibold text-rose-700">Job-Ready Portfolio</dd>
                            </div>
                        </dl>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-slate-900 text-white hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
                                aria-label="Apply now for the Advanced Data Science & ML Masterclass"
                            >
                                Apply Now
                                <Rocket className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="mt-3 inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:translate-y-[-1px] focus:outline-none focus:ring-4 focus:ring-slate-200"
                                aria-label="Download Syllabus"
                            >
                                Download Syllabus (PDF)
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Science Course Page - Why DS Program - Apply Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Science Course Page - Why DS Program - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}

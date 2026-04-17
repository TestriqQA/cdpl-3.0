"use client";

import Link from "next/link";
import { useState } from "react";
import GenerativeAICourseLeadForm from "@/components/forms/GenerativeAICourseLeadForm";
import { ChevronRight, Home, ArrowRight, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false });
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false });

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: 'Data Science & ML', href: '/courses/ds-ml-courses' },
        { label: "Deep Learning • NLP • GenAI" },
    ];

    return (
        <section id="hero" aria-labelledby="ai-hero" className="relative overflow-hidden">
            {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(700px_200px_at_20%_0%,rgba(79,70,229,0.08),transparent_60%),radial-gradient(800px_240px_at_90%_0%,rgba(2,132,199,0.08),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            title={c.label}
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left column: Copy */}
                    <div className="md:col-span-7 lg:col-span-8">
                        {/* Micro-badges (distinct colors, no repeats) */}
                        <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700 border border-indigo-200">Live Online + Classroom</span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">55 Hours</span>
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
                            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
                        </div>

                        <h1
                            id="ai-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-DS">Deep Learning</span>, <span className="text-DS">NLP</span> & <span className="text-DS">Generative AI</span>
                        </h1>

                        {/* Mobile form directly under headline */}
                        <div className="mt-5 block md:hidden">
                            <GenerativeAICourseLeadForm variant="elevated" />
                        </div>

                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Become industry-ready with <strong>Neural Networks</strong>, <strong>CNNs</strong>, <strong>RNNs/LSTMs</strong>,{" "}
                            <strong>Transformers</strong>, <strong>Prompt Engineering</strong>, <strong>fine-tuning LLMs</strong>, embeddings and{" "}
                            <strong>vector databases</strong>. Build portfolio projects and earn a <strong>QR-verified certificate</strong>.
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-slate-600">
                            Curriculum includes data pipelines, tokenization, evaluation (BLEU, ROUGE, accuracy, F1), guardrails, lightweight MLOps, and deployment.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                                aria-label="Enroll now in Generative AI course"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#6b21a8] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-purple-200"
                                aria-label="Download Generative AI Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <Link
                                href="#curriculum"
                                title="View the core modules and curriculum of the Deep Learning & AI program"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Generative AI curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Link>
                        </div>

                        {/* Highlights */}
                        <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                                Hands-on labs with PyTorch & Hugging Face
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                                Transformers, BERT/GPT-style models, LoRA fine-tuning
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                                Prompt engineering & retrieval-augmented generation (RAG)
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                                Deploy to cloud • basic MLOps & monitoring
                            </li>
                        </ul>

                        {/* Trust strip */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
                            <span className="text-yellow-600">★★★★★</span>
                            <span>#1 Mumbai’s Premium Training Institute</span>
                        </div>
                    </div>

                    {/* Right column: Desktop form */}
                    <div className="relative lg:col-span-4 hidden md:block">
                        <GenerativeAICourseLeadForm variant="elevated" className="hidden lg:block" source="Generative AI Course Page - Hero Section" />
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="Master Program in Deep Learning, NLP & Generative AI"
                source="Generative AI Course Page - Hero Section - Enroll Now"
            />

            <CareerSessionModal
                isOpen={isCareerModalOpen}
                onClose={() => setIsCareerModalOpen(false)}
                source="Generative AI Course Page - Hero Section - Free Demo"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Master Program in Deep Learning, NLP & Generative AI"
                source="Generative AI Course Page - Hero Section - Generative AI - Download Syllabus"
            />

        </section>
    );
}

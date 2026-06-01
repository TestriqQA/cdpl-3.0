"use client";

import {
  Brain,
  Sparkles,
  Layers,
  Rocket,
  ShieldCheck,
  Settings2,
  BookOpen,
  Cpu,
  LineChart,
} from "lucide-react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

export default function WhyGenAIProgram() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const featureChips = [
    { label: "55 Hours", color: "bg-indigo-600 text-white" },
    { label: "Hands-On Projects", color: "bg-emerald-600 text-white" },
    { label: "Expert Faculty", color: "bg-amber-500 text-gray-900" },
    { label: "Prior ML Experience Needed", color: "bg-cyan-600 text-white" },
    { label: "Job-Ready", color: "bg-rose-600 text-white" },
  ];

  // Each outcome has an icon color and a soft background swatch to ensure visibility
  const outcomes = [
    {
      icon: Brain,
      iconColor: "text-violet-700",
      iconBg: "bg-violet-50",
      title: "Master Neural Networks",
      text:
        "Build CNNs, RNNs, and Transformers from scratch and with modern libraries. Understand optimization, regularization, and inference.",
      border: "border-violet-500/50",
    },
    {
      icon: Sparkles,
      iconColor: "text-fuchsia-700",
      iconBg: "bg-fuchsia-50",
      title: "Work with LLMs & Prompting",
      text:
        "Apply prompt engineering, adapters (LoRA/QLoRA), and RAG to production use cases without overspending on compute.",
      border: "border-fuchsia-500/50",
    },
    {
      icon: Layers,
      iconColor: "text-teal-700",
      iconBg: "bg-teal-50",
      title: "Production-Ready NLP",
      text:
        "Tokenization, embeddings, vector search, evaluation, and monitoring that stands up in real apps and APIs.",
      border: "border-teal-500/50",
    },
    {
      icon: Rocket,
      iconColor: "text-amber-700",
      iconBg: "bg-amber-50",
      title: "Deploy & Scale",
      text:
        "Package models with FastAPI, containerize with Docker, and ship to cloud with CI/CD and observability best practices.",
      border: "border-amber-500/60",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-lime-700",
      iconBg: "bg-lime-50",
      title: "Safety & Ethics",
      text:
        "Mitigate bias, implement guardrails, and comply with responsible AI guidelines for enterprise use.",
      border: "border-lime-500/60",
    },
    {
      icon: Settings2,
      iconColor: "text-sky-700",
      iconBg: "bg-sky-50",
      title: "MLOps Essentials",
      text:
        "Version datasets & models, track experiments, and automate training pipelines for repeatable results.",
      border: "border-sky-500/60",
    },
  ];

  const bullets = [
    {
      icon: BookOpen,
      color: "text-indigo-700",
      bg: "bg-indigo-50",
      text: "Curriculum aligned to high-demand AI roles and interview patterns.",
    },
    {
      icon: Cpu,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      text: "Python-first stack: PyTorch, Transformers, FastAPI, Faiss/PGVector.",
    },
    {
      icon: LineChart,
      color: "text-rose-700",
      bg: "bg-rose-50",
      text: "Project portfolio with measurable business impact and metrics.",
    },
  ];

  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="why-genai-heading"
    >
      {/* subtle futuristic accent line (sleek gradient allowed) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="why-genai-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            <span className="text-DS">Deep Learning</span>, <span className="text-DS">NLP</span> & <span className="text-DS">Generative AI</span> with <span className="text-DS">Python</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            An advanced, practical program to{" "}
            <strong>design, train, fine-tune, and deploy</strong> modern AI models-
            including <strong>Transformers, LLMs, and generative pipelines</strong>.
            Get industry-ready with hands-on projects, portfolio artifacts, and
            <strong> real deployment workflows</strong>.
          </p>
        </header>

        {/* Feature chips */}
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

        {/* Outcomes grid with clearly colored icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className={`group rounded-2xl border-2 ${o.border} bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`p-2.5 rounded-xl ${o.iconBg} ring-1 ring-black/5`}
                  aria-hidden="true"
                >
                  {/* Ensure icon stroke uses the explicit color */}
                  <o.icon className={`w-6 h-6 ${o.iconColor}`} strokeWidth={2.2} />
                </span>
                <h3 className="text-lg font-bold text-gray-900">{o.title}</h3>
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>

        {/* Program summary */}
        <div className="mt-12 md:mt-14 grid lg:grid-cols-3 gap-6 items-start">
          <article className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              What you’ll learn (and build)
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              From <strong>neural network fundamentals</strong> to{" "}
              <strong>state-of-the-art NLP</strong> and{" "}
              <strong>generative AI</strong>, this course ensures you can ship
              <em> working</em> AI systems. You will implement tokenization &
              embeddings, construct and fine-tune Transformer/LLM architectures,
              and wire up <strong>RAG pipelines</strong> with vector databases.
              You’ll package models with <strong>FastAPI</strong>, containerize with
              Docker, and deploy to cloud with CI/CD while tracking experiments and
              <strong> monitoring performance</strong>.
            </p>
            <ul className="mt-5 space-y-3">
              {bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 p-1.5 rounded-md ${b.bg} ring-1 ring-black/5`}
                    aria-hidden="true"
                  >
                    <b.icon className={`w-5 h-5 ${b.color}`} strokeWidth={2.2} />
                  </span>
                  <span className="text-gray-800">{b.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-gray-700">
              Keywords: <em>Deep Learning course, NLP course, Generative AI with Python,
                Transformer models, Large Language Models, LLM fine-tuning, RAG,
                vector databases, MLOps, AI deployment, prompt engineering.</em>
            </p>
          </article>

          {/* Quick facts / CTA card */}
          <aside className="rounded-2xl border border-gray-200 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
            <dl className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Duration</dt>
                <dd className="font-semibold text-indigo-700">≈ 55 Hours</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Learning Mode</dt>
                <dd className="font-semibold text-emerald-700">Project-Based</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Prerequisite</dt>
                <dd className="font-semibold text-rose-700">Python + ML Basics</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Outcome</dt>
                <dd className="font-semibold text-cyan-700">Job-Ready Portfolio</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col gap-3">
              <button
                onClick={() => setIsEnrollModalOpen(true)}
                className="inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-[#7E22CE] text-white hover:bg-[#6b21a8] focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Apply now for Deep Learning, NLP & Generative AI with Python"
              >
                Apply Now
                <Rocket className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
              <button
                onClick={() => setIsSyllabusModalOpen(true)}
                className="inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                aria-label="Download detailed syllabus"
              >
                Download Syllabus (PDF)
              </button>
              <p className="mt-3 text-xs text-gray-600 text-center">
                You’ll receive a detailed syllabus and a readiness checklist to ensure
                the best learning path for your background.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Master Program in Deep Learning, NLP & Generative AI"
        source="Generative AI Course Page - Why GenAI Section - Apply Now"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Master Program in Deep Learning, NLP & Generative AI"
        source="Generative AI Course Page - Why GenAI Section - Download Syllabus"
      />

    </section>
  );
}

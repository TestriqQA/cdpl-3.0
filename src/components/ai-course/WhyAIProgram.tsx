// components/sections/WhyAIProgram.tsx
"use client";

import {
  Brain,
  Cpu,
  Layers,
  LineChart,
  ShieldCheck,
  BookOpen,
  Gauge,
  Cloud,
  BarChart3,
  GitBranch,
  Rocket,
  Sparkles,
  Download,
} from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export default function WhyAIProgram() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";


  const featureChips = [
    { label: "255 Hours", color: "bg-indigo-700 text-white" },
    { label: "Hands-On Projects", color: "bg-emerald-700 text-white" },
    { label: "Expert Faculty", color: "bg-amber-700 text-white" }, // Changed text to white for better contrast
    { label: "Prior Exp Helpful", color: "bg-sky-700 text-white" },
    { label: "100% Job-Ready", color: "bg-rose-700 text-white" },
  ];

  const outcomes = [
    {
      icon: Layers,
      // ... (omitting strictly unchanged outcomes to keep context small, but need to be careful with replace tool, better to target lines 30-34 separately if possible. I'll do multiple replacements in one file using multi_replace is safer if blocks are far apart, but chips are lines 30-35 and headings are 140. )

      // WAIT. The replace_file_content tool only supports CONTIGUOUS blocks. I cannot do chips AND h1 in one go if they are far apart.
      // I will use multi_replace for WhyAIProgram.tsx to do both.
      iconColor: "text-violet-700",
      iconBg: "bg-violet-50",
      border: "border-violet-200",
      title: "Data Engineering Foundations",
      text:
        "Ingestion → storage → transformation with SQL, pandas/Polars, and lakehouse basics for reliable datasets.",
    },
    {
      icon: LineChart,
      iconColor: "text-emerald-700",
      iconBg: "bg-emerald-50",
      border: "border-emerald-200",
      title: "Classical ML That Scales",
      text:
        "Feature engineering, CV, hyper-parameter tuning, and leakage-free evaluation with scikit-learn.",
    },
    {
      icon: Brain,
      iconColor: "text-indigo-700",
      iconBg: "bg-indigo-50",
      border: "border-indigo-200",
      title: "Deep Learning & Computer Vision",
      text:
        "Neural networks, CNNs/transfer learning with TensorFlow/Keras; best practices for speed and accuracy.",
    },
    {
      icon: Sparkles,
      iconColor: "text-amber-700",
      iconBg: "bg-amber-50",
      border: "border-amber-200",
      title: "NLP & Generative AI",
      text:
        "Modern NLP, prompt engineering, and GenAI patterns to build assistants, summarizers, and content systems.",
    },
    {
      icon: Cpu,
      iconColor: "text-cyan-700",
      iconBg: "bg-cyan-50",
      border: "border-cyan-200",
      title: "MLOps & Deployment",
      text:
        "FastAPI packaging, Docker, CI/CD, experiment tracking (MLflow/DVC), and monitoring in production.",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-lime-700",
      iconBg: "bg-lime-50",
      border: "border-lime-200",
      title: "Responsible, Secure AI",
      text:
        "Bias checks, documentation, governance, and risk controls so models are explainable and audit-ready.",
    },
  ];

  const bullets = [
    {
      icon: BarChart3,
      color: "text-rose-700",
      bg: "bg-rose-50",
      text: "Business KPIs → dashboards & reports that drive decisions.",
    },
    {
      icon: GitBranch,
      color: "text-violet-700",
      bg: "bg-violet-50",
      text: "Versioned experiments with MLflow/DVC; reproducible baselines.",
    },
    {
      icon: Gauge,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      text: "Performance, drift & cost monitoring with alerting SLAs.",
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
      text: "Clear READMEs, notebooks, and portfolio storytelling recruiters love.",
    },
  ];

  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="why-ai-heading"
    >
      {/* Subtle futuristic accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col justify-center items-center text-center mb-10 md:mb-12">
          <h2
            id="why-ai-heading"
            className="text-3xl md:text-4xl max-w-4xl font-bold tracking-tight text-gray-900"
          >
            <span className="text-DS">Masters in AI and ML</span> –{" "}
            Comprehensive Program Overview
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Go end-to-end from <strong>data processing</strong> to{" "}
            <strong>advanced AI deployment</strong>. Build a{" "}
            <strong>job-ready portfolio</strong> in <strong>Python</strong>,{" "}
            <strong>scikit-learn</strong>, <strong>TensorFlow</strong>,{" "}
            <strong>NLP/GenAI</strong>, and <strong>MLOps</strong>—guided by industry experts. This <strong>post graduate program in ai and ml</strong> prepares you for top roles in <strong>masters in artificial intelligence india</strong>.
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
                <h2 className="text-lg font-bold text-gray-900">{o.title}</h2>
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
              From <strong>EDA & feature engineering</strong> to{" "}
              <strong>model development</strong>, <strong>NLP/GenAI</strong>, and{" "}
              <strong>MLOps</strong>, this program emphasizes deployable skills. You’ll ship APIs,
              dashboards, and reproducible experiments that translate directly to interviews and
              on-the-job impact.
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
                data science and AI course, ML masterclass, deep learning with TensorFlow, NLP and
                Generative AI, MLOps pipeline, model monitoring, cloud AI solutions, Python data
                analysis, masters in ai and ml, ai master program mumbai, post graduate program in ai and ml
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
                <dd className="font-semibold text-indigo-700">≈ 255 Hours</dd>
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

            <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col gap-3">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           bg-slate-900 text-white hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300 cursor-pointer"
                aria-label="Apply now for the Comprehensive Data Science & AI Master Program"
              >
                Apply Now
                <Rocket className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm
                           border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200 cursor-pointer"
                aria-label="Download detailed syllabus"
              >
                Download Syllabus (PDF)
                <Download className="w-4 h-4" />
              </button>
              <p className="mt-1 text-xs text-center text-gray-600">
                Get the full syllabus and a readiness checklist to personalize your learning path.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Comprehensive Data Science & AI - Why Program - Apply Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Comprehensive Data Science & AI - Why Program - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
}

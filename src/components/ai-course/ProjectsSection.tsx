"use client";

import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import { Download } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  outcomes: string[];
  stack: string[];
  accent: {
    bar: string;     // top bar color
    border: string;  // border color
    text: string;    // accent text color
    chip: string;    // chip bg
    ring: string;    // focus ring
  };
};

const PROJECTS: Project[] = [
  {
    title: "Healthcare AI Diagnostic",
    desc: "Develop deep-learning models that flag abnormalities in medical images with explainability.",
    outcomes: ["Transfer learning", "Grad-CAM insights", "Bias & safety checks"],
    stack: ["PyTorch", "TorchVision", "OpenCV", "FastAPI"],
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
  {
    title: "Financial Fraud Detection",
    desc: "Real-time anomaly detection for transactions with drift monitoring and alerts.",
    outcomes: ["Feature stores", "Imbalance handling", "Streaming scoring"],
    stack: ["scikit-learn", "LightGBM", "Kafka", "Airflow"],
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    title: "Recommendation Engine",
    desc: "Personalized ranking using collaborative filtering and content features.",
    outcomes: ["Implicit feedback", "Cold-start strategy", "A/B-like offline eval"],
    stack: ["Faiss", "Implicit", "Pandas", "SQL"],
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },
  {
    title: "MLOps Pipeline & Deployment",
    desc: "CI/CD for models: versioning, testing, and rollouts with monitoring.",
    outcomes: ["Model registry", "Canary deploy", "Data & concept drift"],
    stack: ["Docker", "GitHub Actions", "MLflow", "S3"],
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
  {
    title: "RAG QA Assistant",
    desc: "Retrieval-augmented QA with citations and guardrails for safer responses.",
    outcomes: ["Chunking & indexing", "Citations", "Eval harness"],
    stack: ["Embeddings", "Vector DB", "LLM", "Guardrails"],
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    title: "Time-Series Forecasting",
    desc: "Demand & pricing forecasts with rolling backtests and error analysis.",
    outcomes: ["Feature lags/regimes", "Cross-validation", "Residual diagnostics"],
    stack: ["statsmodels", "Prophet", "Plotly", "Pandas"],
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
  },
];

export default function ProjectsSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Comprehensive Data Science and AI - Master Program";

  const seoKeywords =
    "data science projects, ai portfolio projects, healthcare ai diagnostic, fraud detection ml, recommendation engine, mlops pipeline deployment, rag question answering, time series forecasting";


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop (fine grid + soft indigo glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(79,70,229,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Real-World <span className="text-DS">DS & AI Projects</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Build <strong>production-grade AI systems</strong> and <strong>data pipelines</strong> with clear{" "}
            <strong>metrics</strong>, <strong>governance</strong>, and <strong>deployability</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div role="list" aria-label="Project list" className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <div
                key={p.title}
                role="listitem"
                tabIndex={0}
                aria-labelledby={id}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  p.accent.ring,
                  "focus:outline-none focus:ring-2",
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")} aria-hidden />

                <h2 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-700">{p.desc}</p>

                {/* outcomes */}
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")} aria-hidden />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                {/* stack chips */}
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and technologies">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className={["inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-slate-800 border", p.accent.chip, p.accent.border].join(" ")}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* micro-interaction footer */}
                <div className="mt-6 flex items-center justify-between">
                  <span className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}>
                    Portfolio-Ready • Production-Minded
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            These <strong>industry-aligned projects</strong> emphasize reproducibility, evaluation, and clean architecture-ideal for{" "}
            <strong>Data Scientist</strong>, <strong>ML Engineer</strong>, and <strong>Applied AI</strong> roles.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="inline-flex items-center justify-center cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Project List
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">*Scope varies by dataset, domain, and pace.</p>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Comprehensive Data Science & AI - Projects Section - Download Project List"
        courseName={courseName}
      />
    </section>
  );
}

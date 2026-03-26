// components/sections/ProjectsSection.tsx
// Server component — clean, modern, responsive projects with subtle futuristic accents.

import { type LucideIcon, MessageSquareQuote, Image as ImageIcon, Bot, LineChart, Brain, Rocket } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  outcomes: string[];
  tools: string[];
  accent: {
    bar: string;     // top bar color
    border: string;  // border color
    text: string;    // accent text color
    chip: string;    // chip bg
    ring: string;    // focus ring
  };
  icon: LucideIcon;
};

const PROJECTS: Project[] = [
  {
    title: "NLP Sentiment Analysis (Real Reviews)",
    desc:
      "Classify customer sentiment from real-world reviews; surface topics and pain points for product teams.",
    outcomes: [
      "Data cleaning & label strategy",
      "Model comparison (LogReg, BiLSTM, Transformers)",
      "Explainability with SHAP",
    ],
    tools: ["Python", "Pandas", "scikit-learn", "Transformers"],
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      chip: "bg-violet-50",
      ring: "focus:ring-violet-300",
    },
    icon: MessageSquareQuote,
  },
  {
    title: "Image Recognition with CNN",
    desc:
      "Train and evaluate a CNN for multi-class image classification; deploy a lightweight inference API.",
    outcomes: [
      "Augmentation & transfer learning",
      "Metrics: F1, confusion matrix",
      "FastAPI inference endpoint",
    ],
    tools: ["PyTorch", "Torchvision", "FastAPI"],
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      chip: "bg-emerald-50",
      ring: "focus:ring-emerald-300",
    },
    icon: ImageIcon,
  },
  {
    title: "Generative AI Text Generator",
    desc:
      "Fine-tune an open LLM for style-controlled generation and safe prompts with evaluation suites.",
    outcomes: [
      "Prompt templates & RLHF-lite evals",
      "Safety & toxicity checks",
      "Gradio demo app",
    ],
    tools: ["Transformers", "PEFT/LoRA", "Gradio"],
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      chip: "bg-amber-50",
      ring: "focus:ring-amber-300",
    },
    icon: Bot,
  },
  {
    title: "Time-Series Forecasting (Sales)",
    desc:
      "Forecast weekly sales; compare classical and ML approaches with robust backtesting and error analysis.",
    outcomes: [
      "Feature engineering (lags, holidays)",
      "ARIMA/Prophet vs. XGBoost",
      "Backtests & confidence bands",
    ],
    tools: ["Pandas", "Prophet", "XGBoost", "Matplotlib"],
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      chip: "bg-rose-50",
      ring: "focus:ring-rose-300",
    },
    icon: LineChart,
  },
  {
    title: "Customer Segmentation (RFM + Clustering)",
    desc:
      "Create actionable cohorts for marketing using RFM scores and unsupervised learning.",
    outcomes: [
      "K-Means/DBSCAN + validation",
      "Cohort playbooks",
      "Insights dashboard",
    ],
    tools: ["scikit-learn", "Umap-learn", "Plotly"],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      chip: "bg-sky-50",
      ring: "focus:ring-sky-300",
    },
    icon: Brain,
  },
  {
    title: "End-to-End AI Micro-App",
    desc:
      "Ship a small production app: data pipeline, model, API, and a minimal UI with auth and monitoring.",
    outcomes: [
      "Dockerized services",
      "CI/CD with GitHub Actions",
      "Observability & docs",
    ],
    tools: ["FastAPI", "Docker", "Vercel", "PyTest"],
    accent: {
      bar: "bg-indigo-500",
      border: "border-indigo-200",
      text: "text-indigo-700",
      chip: "bg-indigo-50",
      ring: "focus:ring-indigo-300",
    },
    icon: Rocket,
  },
];

export default function ProjectsSection() {
  const seoKeywords =
    "deep learning projects, nlp sentiment analysis, generative ai project, image recognition cnn, time series forecasting, customer segmentation clustering, end-to-end ml app, data science portfolio projects";


  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (fine grid + soft radial glow; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Real-World{" "}
            <span className="text-DS">
              Projects You’ll Build
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Apply <strong>Deep Learning</strong>, <strong>NLP</strong>, and{" "}
            <strong>Generative AI</strong> to solve real problems. Build a{" "}
            <strong>job-ready portfolio</strong> with clean code, clear storytelling, and measurable impact.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Project list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <article
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

                <div className="flex items-start gap-3">
                  <div className={["rounded-xl p-2 shrink-0 border", p.accent.border, p.accent.text].join(" ")} aria-hidden>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h2 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                    <span className={p.accent.text}># </span>
                    {p.title}
                  </h2>
                </div>

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

                {/* tools */}
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and technologies">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className={[
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-slate-800 border",
                        p.accent.chip,
                        p.accent.border,
                      ].join(" ")}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* micro interaction footer */}
                <div className="mt-6 flex items-center justify-between">
                  <span className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}>
                    Portfolio-Ready • Recruiter-Friendly
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            These <strong>industry-aligned projects</strong> demonstrate real metrics, clean engineering, and
            clear communication-exactly what <strong>hiring managers</strong> want for{" "}
            <strong>Data Analyst</strong>, <strong>ML Engineer</strong>, and <strong>Data Scientist</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Project scope may vary by dataset, domain, and pace.</p>
        </div>
      </div>

    </section>
  );
}

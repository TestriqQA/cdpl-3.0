"use client";
import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

type Project = {
  // ... (keep Project type)
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
};

// ... (keep PROJECTS array)
const PROJECTS: Project[] = [
  {
    title: "Predictive Maintenance System",
    desc:
      "Forecast equipment failures from sensor streams to reduce downtime and maintenance cost.",
    outcomes: ["Feature engineering on telemetry", "Classification vs. survival modeling", "Thresholds & alerting"],
    tools: ["Python", "scikit-learn", "XGBoost", "Airflow"],
    accent: { bar: "bg-purple-500", border: "border-purple-200", text: "text-purple-700", chip: "bg-purple-50", ring: "focus:ring-purple-300" },
  },
  {
    title: "NLP Sentiment Analyzer",
    desc:
      "Mine customer feedback to quantify sentiment and surface actionable themes at scale.",
    outcomes: ["Preprocessing & tokenization", "Fine-tuned transformer", "Explainability & bias checks"],
    tools: ["Transformers", "PyTorch", "spaCy", "Weights & Biases"],
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    title: "Stock Price Forecaster",
    desc:
      "Build robust time-series forecasts for equities with backtesting and risk-aware metrics.",
    outcomes: ["Cross-validation on rolling windows", "Feature lags & regimes", "Forecast accuracy vs. utility"],
    tools: ["pandas", "Prophet", "statsmodels", "Plotly"],
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },
  {
    title: "Churn Prediction & Uplift",
    desc:
      "Predict churn and prioritize campaigns using uplift models for incremental impact.",
    outcomes: ["Imbalance handling", "SHAP for insights", "Uplift vs. propensity targeting"],
    tools: ["scikit-learn", "LightGBM", "SHAP", "Great Expectations"],
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
  {
    title: "Image Quality Classifier",
    desc:
      "Detect low-quality or defective product images to automate content standards.",
    outcomes: ["Data augmentation", "Transfer learning", "Threshold tuning & drift watch"],
    tools: ["TensorFlow/Keras", "OpenCV", "FastAPI"],
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    title: "Recommendation Mini-Engine",
    desc:
      "Deliver personalized recommendations with evaluation beyond accuracy (coverage, novelty).",
    outcomes: ["Matrix factorization", "Implicit feedback", "Offline & online metrics"],
    tools: ["Implicit", "Surprise", "Faiss", "SQL"],
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
];

export default function ProjectsSection() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const seoKeywords =
    "data science projects, machine learning portfolio, predictive maintenance, nlp sentiment analysis, stock price forecasting, churn prediction uplift, image classification transfer learning, recommendation system tutorial";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-10 bg-white"
    >
      {/* ... (keep background) */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep header and cards) */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            10+ Real-Time Industry Projects & Capstones
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Build a high-impact portfolio with <strong>advanced data science</strong> projects across diverse domains like Healthcare, Finance, and Retail.
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
                <div
                  className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")}
                  aria-hidden
                />

                <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-slate-700">{p.desc}</p>

                {/* outcomes */}
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")}
                        aria-hidden
                      />
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
                    Portfolio-Ready • Production-Minded
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-left">
            <p className="text-sm text-slate-700">
              These <strong>industry-aligned projects</strong> emphasize reproducible pipelines, evaluation, and clear communication-ideal for{" "}
              <strong>Data Scientist</strong>, <strong>ML Engineer</strong>, and <strong>Analytics</strong> roles.
            </p>
            <p className="mt-2 text-[11px] text-slate-500">*Scope may vary by dataset, domain, and pace.</p>
          </div>
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer px-6 py-2.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-sm hover:shadow-indigo-200 whitespace-nowrap"
          >
            Download Full Project List
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - Projects Section - Download Project List"
        courseName={courseName}
      />
    </section>
  );
}

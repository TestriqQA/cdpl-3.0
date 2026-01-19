// components/sections/ProjectsSection.tsx
import { type LucideIcon, Brain, BarChart3, LineChart, Rocket, Database, Cpu } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  outcomes: string[];
  tools: string[];
  accent: {
    bar: string;
    border: string;
    text: string;
    ring: string;
    chip: string;
  };
  icon: LucideIcon; // <-- icon is a COMPONENT, not a ReactNode
};

const PROJECTS: Project[] = [
  {
    title: "Data Analysis Dashboard (Executive Insights)",
    desc:
      "Transform messy business data into interactive dashboards that reveal KPIs, trends, and anomalies. Use Python to clean, join, and visualize data for decision-makers.",
    outcomes: [
      "Design KPI scorecards and cohort views",
      "Build drill-downs for product, region, and channel",
      "Ship a shareable dashboard and executive summary",
    ],
    tools: ["Python", "Pandas", "Plotly", "FastAPI", "SQL"],
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      ring: "focus:ring-violet-300",
      chip: "bg-violet-50",
    },
    icon: BarChart3, // <-- pass the component, not <BarChart3 />
  },
  {
    title: "Sales Forecasting Model (Time-Series ML)",
    desc:
      "Engineer a robust forecasting pipeline using classical and ML approaches to predict weekly sales with confidence intervals and scenario analysis.",
    outcomes: [
      "Feature engineering for seasonality & promotions",
      "Compare ARIMA/Prophet vs. ML regressors",
      "Backtesting & error analysis (MAE, MAPE, SMAPE)",
    ],
    tools: ["scikit-learn", "Prophet", "NumPy", "Matplotlib"],
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      ring: "focus:ring-emerald-300",
      chip: "bg-emerald-50",
    },
    icon: LineChart,
  },
  {
    title: "Customer Segmentation (Clustering & RFM)",
    desc:
      "Segment customers with unsupervised learning to personalize campaigns and improve retention using explainable, data-driven cohorts.",
    outcomes: [
      "RFM scoring + K-Means/DBSCAN comparison",
      "Silhouette evaluation & interpretability",
      "Actionable cohort playbooks for marketing",
    ],
    tools: ["scikit-learn", "Pandas", "Seaborn", "Umap-learn"],
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      ring: "focus:ring-amber-300",
      chip: "bg-amber-50",
    },
    icon: Brain,
  },
  {
    title: "Churn Prediction (Classification Pipeline)",
    desc:
      "Predict user churn with an end-to-end ML pipeline—balanced training, model selection, and business-friendly, explainable results.",
    outcomes: [
      "Data imbalance handling (SMOTE/weights)",
      "ROC-AUC, PR-AUC, and calibration reporting",
      "SHAP-based explanations & retention levers",
    ],
    tools: ["scikit-learn", "XGBoost", "SHAP", "MLflow"],
    accent: {
      bar: "bg-rose-500",
      border: "border-rose-200",
      text: "text-rose-700",
      ring: "focus:ring-rose-300",
      chip: "bg-rose-50",
    },
    icon: Cpu,
  },
  {
    title: "NLP Insights (Reviews & Sentiment)",
    desc:
      "Mine product reviews to extract topics, sentiment, and pain points. Turn qualitative text into quantifiable product insights.",
    outcomes: [
      "Text cleaning & embeddings",
      "Topic modeling with coherence checks",
      "Aspect-based sentiment & insight report",
    ],
    tools: ["spaCy", "NLTK", "Sentence-Transformers", "UMAP"],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      ring: "focus:ring-sky-300",
      chip: "bg-sky-50",
    },
    icon: Database,
  },
  {
    title: "End-to-End AI App (Data → Model → API → UI)",
    desc:
      "Ship a production-ready mini-application: automated data flows, trained model, REST API, and a lightweight UI with auth and monitoring.",
    outcomes: [
      "Orchestrate pipelines & model registry",
      "Serve predictions via FastAPI",
      "Observability & CI/CD with tests",
    ],
    tools: ["FastAPI", "Docker", "PyTest", "GitHub Actions", "Vercel"],
    accent: {
      bar: "bg-indigo-500",
      border: "border-indigo-200",
      text: "text-indigo-700",
      ring: "focus:ring-indigo-300",
      chip: "bg-indigo-50",
    },
    icon: Rocket,
  },
];

export default function ProjectsSection() {
  const seoKeywords =
    "python projects for beginners, machine learning projects, data science portfolio, sales forecasting, customer segmentation, churn prediction, nlp sentiment analysis, time series forecasting, dashboard with python, end-to-end ml pipeline, data analytics projects";

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-10 bg-gradient-to-b from-slate-50 to-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#f1f5f9_0_18px,transparent_18px_36px)]" />
        </div>
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
            Build a portfolio recruiters love: hands-on <strong>Python</strong>,{" "}
            <strong>Data Science</strong>, and <strong>Machine Learning</strong> projects with
            clean code, clear storytelling, and business impact. Each project is production-minded
            and interview-ready.
          </p>
          <p className="sr-only">{seoKeywords}</p>
        </header>

        <div
          role="list"
          aria-label="Project list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((p) => {
            const Icon = p.icon; // <-- use the component
            return (
              <article
                key={p.title}
                role="listitem"
                tabIndex={0}
                aria-labelledby={p.title.replace(/\s+/g, "-").toLowerCase()}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  p.accent.ring,
                  "focus:outline-none focus:ring-2",
                ].join(" ")}
              >
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  <div
                    className={["rounded-xl p-2 shrink-0 border", p.accent.border, p.accent.text].join(" ")}
                    aria-hidden
                  >
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3
                    id={p.title.replace(/\s+/g, "-").toLowerCase()}
                    className="text-lg md:text-xl font-bold text-slate-900"
                  >
                    <span className={p.accent.text}># </span>
                    {p.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm md:text-base text-slate-700">{p.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")} aria-hidden />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

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

                <div className="mt-6 flex items-center justify-between">
                  <span className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}>
                    Job-Ready • Portfolio-Ready
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            These <strong>industry-aligned data projects</strong> reflect real metrics, clean engineering
            practices, and clear communication—exactly what <strong>hiring managers</strong> look for in{" "}
            <strong>Data Analysts, ML Engineers, and Data Scientists</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">
            *Outcomes and tools may vary by dataset, domain, and role.
          </p>
        </div>
      </div>
    </section>
  );
}

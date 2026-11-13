// Server Component. The only interactive parts of this section are the
// accordion (CurriculumAccordion) and the two CTA buttons, which are the
// shared course-islands that own their own modal state. Everything else —
// the heading, the badges, the module data below and the CTA container — is
// static, so it no longer ships to the browser or hydrates.
//
// Previously the whole 350-line section was "use client" solely because it
// held three useState values, which meant the module copy, the header markup
// and both modal shells all hydrated on a page whose Lighthouse score is
// limited by Total Blocking Time.
import { Database, FileSpreadsheet, BarChart3, ChartSpline, TrendingUp, Bot, Rocket } from "lucide-react";
import { FaPython } from "react-icons/fa6";
import CurriculumAccordion, { type Module } from "./CurriculumAccordion";
import EnrollButton from "../course-islands/EnrollButton";
import SyllabusButton from "../course-islands/SyllabusButton";

const courseName = "Advanced Data Science and Machine Learning Masterclass";

const subtitle =
  "A 200+ hour, industry-aligned journey from SQL and Excel to BI (Power BI/Tableau), Python foundations, Statistics, ML with Python, R, and domain projects.";
const keywords =
  "advanced data science curriculum, MySQL DBMS, Excel analytics, Power BI, Tableau, Python syllabus, statistics probability, machine learning with Python, R programming projects, capstone data science";

// Rendered here (server) and passed to the client accordion as elements —
// component references can't cross the server/client boundary.
const MODULE_ICON = "w-8 h-8 text-brand flex-shrink-0";

const modules: Module[] = [
  {
    id: 1,
    title: "DBMS with MySQL",
    duration: "",
    icon: <Database className={MODULE_ICON} aria-hidden="true" />,
    color: "from-sky-50 to-sky-100",
    topics: [
      "ER modeling",
      "normalization (1NF–BCNF)",
      "SQL essentials (SELECT/WHERE/LIMIT)",
      "joins & subqueries",
      "aggregations & window functions",
      "transactions",
      "indexing & EXPLAIN",
      "admin (users/backup/tuning)",
      "DDL/DML/TCL/DCL",
      "views",
      "procedures",
      "functions",
      "triggers",
      "CTEs",
    ],
    projects: [
      "a database capstone",
    ],
  },
  {
    id: 2,
    title: "Advanced Excel for Analytics & Viz",
    duration: "",
    icon: <FileSpreadsheet className={MODULE_ICON} aria-hidden="true" />,
    color: "from-amber-50 to-amber-100",
    topics: [
      "Data types & cleaning",
      "duplicates/nulls",
      "math/stat/logical/text functions",
      "validation & conditional formats",
      "date/time ops",
      "charts & sparklines",
      "PivotTables/Charts with slicers & timelines",
      "Analysis ToolPak",
      "forecasting",
      "lookup (V/H/XLOOKUP, INDEX/MATCH)",
      "Power Query/Power Pivot",
      "KPI dashboards & storytelling",
    ],
    projects: [
      "domain projects",
    ],
  },
  {
    id: 3,
    title: "Power BI — Data Analytics & Visualization",
    duration: "",
    icon: <BarChart3 className={MODULE_ICON} aria-hidden="true" />,
    color: "from-indigo-50 to-indigo-100",
    topics: [
      "BI concepts",
      "Desktop/Service/Mobile",
      "data connections",
      "Power Query transforms (merge/append, pivot/unpivot, type ops, conditional cols)",
      "modeling (star/snowflake, relationships, cardinality)",
      "visuals & formatting",
      "DAX basics (measures/columns)",
      "advanced visuals & interactivity",
      "bookmarks/navigation",
      "publishing & sharing",
    ],
    projects: [
      "end-to-end case studies",
    ],
  },
  {
    id: 4,
    title: "Tableau — Data Analytics & Storytelling",
    duration: "",
    icon: <ChartSpline className={MODULE_ICON} aria-hidden="true" />,
    color: "from-rose-50 to-rose-100",
    topics: [
      "BI workflow",
      "data integration (relationships, joins, unions)",
      "logical vs physical layers",
      "dimensions/measures",
      "core charts",
      "Marks card polish",
      "specialized charts (treemap/heatmap/gantt/bullet)",
      "maps & density",
      "dual-axis",
      "groups/sorts/filters",
      "calculated fields & table calcs",
      "analytics (trend/forecast/cluster)",
      "dashboards & stories",
    ],
    projects: [
      "projects & assessment",
    ],
  },
  {
    id: 5,
    title: "Python Programming",
    duration: "",
    icon: <FaPython className={MODULE_ICON} aria-hidden="true" />,
    color: "from-emerald-50 to-emerald-100",
    topics: [
      "Jupyter setup",
      "variables/types/ops",
      "I/O & strings",
      "conditionals",
      "core data structures (lists/tuples/sets/dicts)",
      "loops",
      "functions & recursion",
      "exceptions",
      "file I/O",
      "OOP (classes, inheritance, polymorphism, encapsulation)",
      "modules & packages — foundations for data work",
    ],
  },
  {
    id: 6,
    title: "Statistics & Probability for Data Science",
    duration: "",
    icon: <TrendingUp className={MODULE_ICON} aria-hidden="true" />,
    color: "from-purple-50 to-purple-100",
    topics: [
      "Descriptive stats (central tendency, spread, skew/kurtosis, boxplots)",
      "probability & Bayes",
      "discrete/continuous distributions (Bernoulli, Binomial, Poisson, Normal, Uniform, Exponential)",
      "sampling & CLT",
      "confidence intervals",
      "hypothesis testing (z/t/ANOVA/chi-square)",
      "correlation & regression basics",
      "ML-centric stats & evaluation metrics",
    ],
  },
  {
    id: 7,
    title: "Machine Learning Algorithms with Python",
    duration: "",
    icon: <Bot className={MODULE_ICON} aria-hidden="true" />,
    color: "from-fuchsia-50 to-fuchsia-100",
    topics: [
      "End-to-end ML workflow: preprocessing (missing data, scaling, encoding, splits)",
      "regression (linear, polynomial, ridge/lasso)",
      "classification (logistic, KNN, decision trees, random forest, SVM)",
      "model validation (k-fold, stratified, over/underfitting)",
      "metrics (MSE/R², accuracy/precision/recall/F1/ROC-AUC)",
      "PCA & clustering (k-means, hierarchical, DB-based)",
      "hyperparameter tuning",
    ],
  },
  {
    id: 8,
    title: "R Programming — Viz, Stats & ML",
    duration: "",
    icon: <BarChart3 className={MODULE_ICON} aria-hidden="true" />,
    color: "from-teal-50 to-teal-100",
    topics: [
      "RStudio workflow",
      "core objects (vectors, lists, factors, matrices, arrays, data frames)",
      "reading CSV/Excel",
      "visualization (base & ggplot2)",
      "stats (mean/median/mode, quartiles)",
    ],
    projects: [
      "mini projects: lm() linear regression & glm() logistic regression for practical modeling",
    ],
  },
  {
    id: 9,
    title: "Real-World Projects & Capstone",
    duration: "",
    icon: <Rocket className={MODULE_ICON} aria-hidden="true" />,
    color: "from-slate-50 to-slate-100",
    topics: [
      "Domain case studies and capstones: credit-risk modeling (BFSI)",
      "customer segmentation (e-commerce)",
      "sales forecasting (retail)",
      "fraud detection (fintech)",
      "hospital resource forecasting (healthcare)",
      "HR attrition analytics. Story-driven dashboards and production-style model delivery",
    ],
  },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            6-Core Curriculum Modules: Your Data Science Roadmap
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>
          {/* Micro badges (distinct themes) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-900">SQL & Data Modeling</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">Excel & Dashboards</span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Power BI & Tableau</span>
            <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-purple-900">Stats & ML in Python/R</span>
          </div>
        </div>

        {/* Modules List */}
        <CurriculumAccordion modules={modules} />

        {/* CTA Section (adapted to match the learning outcomes layout structure) */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <EnrollButton
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
                ariaLabel="Apply for the Advanced Data Science & Machine Learning program"
                source="Data Science Course Page - Curriculum Section - Apply Now"
                courseName={courseName}
              >
                Apply Now
              </EnrollButton>
              <SyllabusButton
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
                ariaLabel="Download the detailed Advanced Data Science & Machine Learning syllabus"
                source="Data Science Course Page - Curriculum Section - Syllabus Download"
                courseName={courseName}
              >
                Download Detailed Syllabus (PDF)
              </SyllabusButton>
            </div>
            <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
              *Module order may vary slightly by cohort and instructor discretion to maximize learning outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

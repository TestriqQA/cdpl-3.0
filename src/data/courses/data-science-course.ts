import type { CourseContent } from "@/types/coursePage";
import { DATA_SCIENCE_FAQS } from "@/data/dataScienceData";

// Content for /courses/ds-ml-courses/data-science-course, moved from the old
// src/components/data-science-course/* sections (the curriculum accordion is
// replaced by the template's module grid). Kept word for word except
// repeated filler (hidden keyword strings, a visible "Keywords:" list, a
// repeated card footer, badge rows that repeat the module names), which a
// cleanup pass removed.
export const dataScienceCourse: CourseContent = {
  slug: "data-science-course",
  courseName: "Advanced Data Science and Machine Learning Masterclass",
  sourceName: "Data Science Course Page",

  seo: {
    title: "Data Science & Machine Learning Course Mumbai | CDPL",
    description:
      "Master advanced data science and machine learning with live mentor-led classes, real datasets, capstone projects and interview preparation at CDPL.",
    keywords: [
      "data science full course",
      "advanced data science",
      "data science course Mumbai",
      "data scientist course Mumbai",
      "data science training",
      "master machine learning",
      "ai and data science course",
      "master data science",
    ],
    image: "/og-images/courses-ds-ml-courses-data-science-course-og.webp",
  },

  schema: {
    name: "Advanced Data Science and Machine Learning Masterclass: Full Course in Mumbai",
    description:
      "Master the data science full course in Mumbai with 200 hours of intensive training. Advanced data science, machine learning & AI with job placement.",
    duration: "P4M",
    howTo: {
      name: "How to Enroll in CDPL Advanced Data Science Masterclass",
      description: "A step-by-step guide to enrolling in our 200 hours intensive Data Science training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive python, machine learning, and MLOps modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern large language models, prompt engineering, and deep learning for advanced tech roles!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Advanced DS & ML Masterclass",
    badges: [
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "clock", text: "200 Hours" },
      { icon: "code", text: "Project-based" },
      { icon: "briefcase", text: "Placement Support" },
      { icon: "star", text: "Mumbai’s Premium Training Institute" },
    ],
    h1: "Advanced [[Data Science]] and [[Machine Learning]] Masterclass: Full Course in Mumbai",
    subtitle:
      "Master the **data science full course** in Mumbai with 200 hours of intensive training. From **advanced data science** to cutting-edge **machine learning**, we prepare you for high-paying roles with **Interviews** and 10+ real-time projects.",
    description:
      "Become a **certified data scientist** with mastery in Python, SQL, Statistics, Deep Learning, and AI. Our **data science training** in Mumbai/Thane focuses on 80% practical labs and industry-ready Model Deployments.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Advanced Data Science & Machine Learning course" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with mentor feedback",
      "End-to-end ML projects & reproducible pipelines",
      "Model evaluation, tracking, and reporting",
      "CI/CD for ML: basics of containers & deployment",
    ],
  },

  stats: {
    heading: "Why Choose Our [[Advanced Data Science]] Masterclass?",
    intro:
      "Join Mumbai's most intensive **data science training**. We don't just teach algorithms; we build careers. With a {rating} rating and a legacy of **strong placement outcomes**, we are the **comprehensive institute for data science** in Mumbai and Thane.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)", note: "AI adoption accelerating" },
      { value: "101,000+", label: "Job Vacancies in India", note: "Across DA • DS • ML" },
      { value: "9 LPA", label: "Data Science Freshers’ Average Salary", note: "City & role dependent" },
      { value: "75%", label: "Job Satisfaction", note: "Impactful problem-solving" },
      { value: "32%", label: "India’s Global Market Share", note: "Services • Product • Startups" },
    ],
    footnote: "*Figures are indicative and vary by location, skills, and industry.",
    outro:
      "Master **dashboards**, **experimentation**, and **ML pipelines**—target roles like **Data Analyst**, **Data Scientist**, and **ML Engineer**.",
    ctas: [{ label: "Download Syllabus (PDF)", kind: "syllabus" }],
  },

  why: {
    heading: "Advanced Data Science - A Complete Career Overview",
    intro:
      "The demand for **certified data scientists** is at an all-time high. Our **data science full course** covers every aspect of the data lifecycle, from visualization to **MLOps** and deployments.",
    cards: [
      { icon: "clock", title: "Duration", description: "≈ 200 Hours" },
      { icon: "layers", title: "Learning Mode", description: "Project-Based" },
      { icon: "book", title: "Prerequisites", description: "Basic Python & Math" },
      { icon: "briefcase", title: "Outcome", description: "Job-Ready Portfolio" },
    ],
    extras: [
      {
        kind: "list",
        items: [
          "Business-ready dashboards and reports that translate metrics into decisions.",
          "Versioned experiments with MLFlow & DVC for repeatable results.",
          "A/B tests and uplift modeling to prove model impact.",
          "Cloud patterns across AWS/GCP/Azure for scalable training & serving.",
          "Clear READMEs and portfolio storytelling recruiters love.",
        ],
      },
    ],
  },

  curriculum: {
    heading: "6-Core Curriculum Modules: Your Data Science Roadmap",
    intro:
      "A 200+ hour, industry-aligned journey from SQL and Excel to BI (Power BI/Tableau), Python foundations, Statistics, ML with Python, R, and domain projects.",
    modules: [
      {
        title: "DBMS with MySQL",
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
        projects: ["a database capstone"],
      },
      {
        title: "Advanced Excel for Analytics & Viz",
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
        projects: ["domain projects"],
      },
      {
        title: "Power BI — Data Analytics & Visualization",
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
        projects: ["end-to-end case studies"],
      },
      {
        title: "Tableau — Data Analytics & Storytelling",
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
        projects: ["projects & assessment"],
      },
      {
        title: "Python Programming",
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
        title: "Statistics & Probability for Data Science",
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
        title: "Machine Learning Algorithms with Python",
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
        title: "R Programming — Viz, Stats & ML",
        topics: [
          "RStudio workflow",
          "core objects (vectors, lists, factors, matrices, arrays, data frames)",
          "reading CSV/Excel",
          "visualization (base & ggplot2)",
          "stats (mean/median/mode, quartiles)",
        ],
        projects: ["mini projects: lm() linear regression & glm() logistic regression for practical modeling"],
      },
      {
        title: "Real-World Projects & Capstone",
        topics: [
          "Domain case studies and capstones: credit-risk modeling (BFSI)",
          "customer segmentation (e-commerce)",
          "sales forecasting (retail)",
          "fraud detection (fintech)",
          "hospital resource forecasting (healthcare)",
          "HR attrition analytics. Story-driven dashboards and production-style model delivery",
        ],
      },
    ],
    moduleNote: "*Module order may vary slightly by cohort and instructor discretion to maximize learning outcomes.",
    ctas: [
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply for the Advanced Data Science & Machine Learning program" },
      {
        label: "Download Detailed Syllabus (PDF)",
        kind: "syllabus",
        ariaLabel: "Download the detailed Advanced Data Science & Machine Learning syllabus",
      },
    ],
  },

  // The old Tools and Roadmap sections had lost their tool grid / step list
  // (only heading, intro and closing line were still rendered), so they carry
  // no items here either.
  tools: {
    heading: "Tools & Technologies Mastered in This AI and Data Science Course",
    intro:
      "Master the exact tech stack used by industry giants like Google, Meta, and Amazon. From **advanced data science** libraries to model tracking tools, we cover it all.",
    items: [],
    outro:
      "Practice with **real datasets**, version control, reviews, and deploy checklists—the exact toolchain hiring managers expect.",
  },

  roadmap: {
    heading: "Your Roadmap to Becoming a Data Scientist in 4 Steps",
    intro:
      "Our **data science full course** follows a proven 4-stage journey to transform you from a beginner to a job-ready professional in Mumbai.",
    steps: [],
    outro: "Learn from anywhere. Your journey to a Data Science career starts here.",
    ctas: [
      {
        label: "Get Personalized Roadmap",
        kind: "careerSession",
        ariaLabel: "Get personalized Data Science roadmap guidance",
      },
    ],
  },

  projects: {
    heading: "10+ Real-Time Industry Projects & Capstones",
    intro:
      "Build a high-impact portfolio with **advanced data science** projects across diverse domains like Healthcare, Finance, and Retail.",
    items: [
      {
        icon: "settings",
        title: "Predictive Maintenance System",
        description: "Forecast equipment failures from sensor streams to reduce downtime and maintenance cost.",
        features: ["Feature engineering on telemetry", "Classification vs. survival modeling", "Thresholds & alerting"],
        tags: ["Python", "scikit-learn", "XGBoost", "Airflow"],
      },
      {
        icon: "message",
        title: "NLP Sentiment Analyzer",
        description: "Mine customer feedback to quantify sentiment and surface actionable themes at scale.",
        features: ["Preprocessing & tokenization", "Fine-tuned transformer", "Explainability & bias checks"],
        tags: ["Transformers", "PyTorch", "spaCy", "Weights & Biases"],
      },
      {
        icon: "lineChart",
        title: "Stock Price Forecaster",
        description: "Build robust time-series forecasts for equities with backtesting and risk-aware metrics.",
        features: ["Cross-validation on rolling windows", "Feature lags & regimes", "Forecast accuracy vs. utility"],
        tags: ["pandas", "Prophet", "statsmodels", "Plotly"],
      },
      {
        icon: "users",
        title: "Churn Prediction & Uplift",
        description: "Predict churn and prioritize campaigns using uplift models for incremental impact.",
        features: ["Imbalance handling", "SHAP for insights", "Uplift vs. propensity targeting"],
        tags: ["scikit-learn", "LightGBM", "SHAP", "Great Expectations"],
      },
      {
        icon: "image",
        title: "Image Quality Classifier",
        description: "Detect low-quality or defective product images to automate content standards.",
        features: ["Data augmentation", "Transfer learning", "Threshold tuning & drift watch"],
        tags: ["TensorFlow/Keras", "OpenCV", "FastAPI"],
      },
      {
        icon: "shoppingCart",
        title: "Recommendation Mini-Engine",
        description: "Deliver personalized recommendations with evaluation beyond accuracy (coverage, novelty).",
        features: ["Matrix factorization", "Implicit feedback", "Offline & online metrics"],
        tags: ["Implicit", "Surprise", "Faiss", "SQL"],
      },
    ],
    outro:
      "These **industry-aligned projects** emphasize reproducible pipelines, evaluation, and clear communication—ideal for **Data Scientist**, **ML Engineer**, and **Analytics** roles. Scope may vary by dataset, domain, and pace.",
    ctas: [{ label: "Download Full Project List", kind: "syllabus" }],
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Authentic reviews from our **Advanced Data Science & Machine Learning** cohort—highlighting **MLOps**, **model deployment**, **drift monitoring**, and **job outcomes**.",
    outro: "Ready to join them?",
    ctas: [{ label: "Apply Now", kind: "enroll" }],
  },

  career: {
    heading: "Placement Partners & Career Opportunities in Mumbai",
    intro:
      "The demand for skilled data professionals is skyrocketing. Our program prepares you for high-impact roles with top-tier companies, offering comprehensive placement support and portfolio building.",
    rolesTitle: "Top Job Roles You Can Target",
    roles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Data Analyst",
      "Business Intelligence Analyst",
      "AI Research Scientist",
      "Data Engineer",
    ],
    companiesTitle: "Our Graduates Work At Leading Companies",
    companies: [
      "Google",
      "Microsoft",
      "Amazon",
      "IBM",
      "Accenture",
      "Deloitte",
      "TCS",
      "Infosys",
      "Wipro",
      "Capgemini",
      "Cognizant",
      "HCLTech",
    ],
    extras: [
      {
        kind: "cards",
        items: [
          {
            icon: "trendingUp",
            title: "High Growth",
            description: "Data Science roles are among the fastest-growing globally with competitive salaries.",
          },
          { icon: "briefcase", title: "Diverse Roles", description: "From Analyst to ML Engineer, unlock a wide range of career paths." },
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "55%", label: "Average Salary Hike" },
          { value: "92%", label: "Placement Success" },
        ],
      },
    ],
  },

  audience: {
    heading: "Is This Data Science Full Course Right for You?",
    intro:
      "This program is meticulously designed to cater to learners from diverse backgrounds, ensuring a smooth transition into the world of Data Science and AI.",
    items: [
      {
        icon: "graduationCap",
        title: "Fresh Graduates",
        description: "B.Tech, BCA, BSc, or Commerce grads looking to start a high-paying career in Data Science & AI.",
      },
      {
        icon: "code",
        title: "Software Developers",
        description: "Programmers wanting to switch from web/app dev to Machine Learning and AI engineering.",
      },
      {
        icon: "barChart",
        title: "Data Analysts",
        description: "Analysts aiming to upgrade from Excel/SQL to Python, ML, and advanced predictive modeling.",
      },
      {
        icon: "database",
        title: "Non-IT Professionals",
        description: "Professionals from Sales, Marketing, or Finance seeking to pivot into the booming data industry.",
      },
      {
        icon: "brain",
        title: "Career Gap Returnees",
        description: "Individuals looking to restart their career with a future-proof skill set in Data Science.",
      },
    ],
    extras: [
      {
        kind: "list",
        title: "Prerequisites",
        items: [
          "No prior coding experience required (we start from scratch).",
          "Basic understanding of mathematics (high school level) is helpful.",
          "A laptop with internet connection for live classes and projects.",
          "Dedication to learn and practice for at least 8-10 hours a week.",
        ],
      },
      {
        kind: "text",
        title: "Ready to Transform Your Career?",
        text: "Join hundreds of successful graduates who have transitioned into high-paying Data Science roles. Start your journey today.",
      },
    ],
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions About the Data Science Course",
    intro:
      "Everything you need to know about our **Advanced Data Science & Machine Learning Masterclass**—admissions, curriculum, schedule, portfolio, and placement support.",
    items: DATA_SCIENCE_FAQS,
  },

  cta: {
    heading: "Ready to Master [[Advanced Data Science?]]",
    intro:
      "Enroll today and get **job assistance**, **mentor-led projects**, and a **verifiable global certificate**.",
    actions: [
      { label: "Call Admissions: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions at +91 788-83-83-788" },
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply for the Data Science course" },
      { label: "Download Syllabus", kind: "syllabus", ariaLabel: "Download the course syllabus" },
      { label: "Chat on WhatsApp", kind: "whatsapp", ariaLabel: "Open WhatsApp chat with admissions" },
    ],
    highlights: [
      { icon: "briefcase", title: "Job Assistance" },
      { icon: "users", title: "Mentor-Led Projects" },
      { icon: "award", title: "Global Certification" },
    ],
    footnotes: [
      { icon: "message", text: "Live Doubt Solving" },
      { icon: "shield", text: "By contacting us, you agree to receive course updates. No spam—unsubscribe anytime." },
    ],
  },
};

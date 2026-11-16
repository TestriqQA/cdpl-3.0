import type { CourseContent } from "@/types/coursePage";
import { AI_FAQS } from "@/data/aiData";

// Content for /courses/ds-ml-courses/ai-course, moved from the old
// src/components/ai-course/* sections. Kept word for word except repeated
// filler (hidden keyword strings, per-card tool badges and "Learn with
// Projects" buttons, a repeated card footer, stat pills that repeat the
// stats), which a cleanup pass removed.
export const aiCourse: CourseContent = {
  slug: "ai-course",
  courseName: "Comprehensive Data Science and AI - Master Program",
  sourceName: "Comprehensive Data Science & AI",

  seo: {
    title: "Data Science & AI Master Program in Mumbai | CDPL",
    description:
      "255-hour Data Science & AI master program in Mumbai — Python, ML, deep learning, NLP, generative AI & cloud-deployed projects with placement assistance.",
    keywords: [
      "masters in ai and ml",
      "ms in artificial intelligence in india",
      "ai master program mumbai",
      "masters in ai in india",
      "masters in data science and artificial intelligence in india",
      "data science master program mumbai",
      "post graduate program in ai and ml",
      "post graduate program in ai and machine learning",
      "masters in artificial intelligence india",
      "masters in ai and ml in india",
    ],
    image: "/og-images/courses-ds-ml-courses-ai-course-og.webp",
  },

  schema: {
    name: "Comprehensive Data Science & AI Master Program",
    description: "255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, job assistance, global certificates.",
    duration: "P5M",
    howTo: {
      name: "How to Enroll in CDPL AI Master Program",
      description: "A step-by-step guide to enrolling in our 255 hours intensive AI and ML training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive python, machine learning, and comprehensive AI modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern large language models, prompt engineering, and deep learning for advanced tech roles!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Comprehensive DS & AI",
    badges: [
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "clock", text: "255 Hours" },
      { icon: "code", text: "Project-based" },
      { icon: "briefcase", text: "Placement Support" },
      { icon: "star", text: "Mumbai’s Premium Training Institute" },
    ],
    h1: "[[Masters in AI and ML]] – Data Science Master Program Mumbai with Placement",
    subtitle:
      "Pursuing a **masters in ai and ml** in India? Our **ai master program mumbai** makes you industry-ready with **Python**, **Statistics**, **Machine Learning**, **Deep Learning**, **NLP**, **Time Series**, **Big Data (Spark)**, and **MLOps**. Build portfolio projects and earn a **QR-verified certificate**. Ideal for those seeking **ms in artificial intelligence in india**.",
    description:
      "This **post graduate program in ai and machine learning** covers Pandas/NumPy, EDA & visualization, model evaluation, feature engineering, pipelines, basic Transformers, cloud deployments, and CI/CD best practices. Perfect for **masters in data science and artificial intelligence in india**.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Comprehensive Data Science & AI master program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with mentor feedback for **masters in ai in india**",
      "ML & DL projects with reproducible pipelines",
      "Model evaluation, tracking for **data science master program mumbai**",
      "CI/CD & basic MLOps: containers and deployment",
    ],
  },

  stats: {
    heading: "Why [[Comprehensive Data Science & AI]]?",
    intro:
      "Equip yourself for tomorrow’s roles with **Python**, **ML**, **DL**, and **data engineering** foundations—delivered via mentor-led, project-first learning.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)", note: "AI adoption accelerating" },
      { value: "1,01,000+", label: "Job Vacancies in India", note: "DA • DS • ML roles" },
      { value: "₹9 LPA", label: "Average Fresher Salary", note: "City & role dependent" },
      { value: "75%", label: "Job Satisfaction", note: "Impactful problem-solving" },
      { value: "32%", label: "India’s Global Market Share", note: "Services • Product • Startups" },
      { value: "255+ Hours", label: "Program Duration", note: "Projects + mentorship" },
    ],
    footnote: "*Figures are indicative and vary by location, skills, and industry.",
    outro:
      "Build a **recruiter-ready portfolio** with dashboards, models, and pipelines—aimed at **Data Analyst**, **Data Scientist**, and **ML Engineer** roles.",
    ctas: [{ label: "Download Syllabus (PDF)", kind: "syllabus" }],
  },

  why: {
    heading: "[[Masters in AI and ML]] – Comprehensive Program Overview",
    intro:
      "Go end-to-end from **data processing** to **advanced AI deployment**. Build a **job-ready portfolio** in **Python**, **scikit-learn**, **TensorFlow**, **NLP/GenAI**, and **MLOps**—guided by industry experts. This **post graduate program in ai and ml** prepares you for top roles in **masters in artificial intelligence india**.",
    cards: [
      {
        icon: "layers",
        title: "Data Engineering Foundations",
        description: "Ingestion → storage → transformation with SQL, pandas/Polars, and lakehouse basics for reliable datasets.",
      },
      {
        icon: "lineChart",
        title: "Classical ML That Scales",
        description: "Feature engineering, CV, hyper-parameter tuning, and leakage-free evaluation with scikit-learn.",
      },
      {
        icon: "brain",
        title: "Deep Learning & Computer Vision",
        description: "Neural networks, CNNs/transfer learning with TensorFlow/Keras; best practices for speed and accuracy.",
      },
      {
        icon: "sparkles",
        title: "NLP & Generative AI",
        description: "Modern NLP, prompt engineering, and GenAI patterns to build assistants, summarizers, and content systems.",
      },
      {
        icon: "cpu",
        title: "MLOps & Deployment",
        description: "FastAPI packaging, Docker, CI/CD, experiment tracking (MLflow/DVC), and monitoring in production.",
      },
      {
        icon: "shieldCheck",
        title: "Responsible, Secure AI",
        description: "Bias checks, documentation, governance, and risk controls so models are explainable and audit-ready.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "What you’ll learn (and build)",
        text: "From **EDA & feature engineering** to **model development**, **NLP/GenAI**, and **MLOps**, this program emphasizes deployable skills. You’ll ship APIs, dashboards, and reproducible experiments that translate directly to interviews and on-the-job impact.",
      },
      {
        kind: "list",
        items: [
          "Business KPIs → dashboards & reports that drive decisions.",
          "Versioned experiments with MLflow/DVC; reproducible baselines.",
          "Performance, drift & cost monitoring with alerting SLAs.",
          "Cloud patterns across AWS/GCP/Azure for scalable training & serving.",
          "Clear READMEs, notebooks, and portfolio storytelling recruiters love.",
        ],
      },
      {
        kind: "stats",
        title: "Quick Facts",
        items: [
          { value: "≈ 255 Hours", label: "Duration" },
          { value: "Project-Based", label: "Learning Mode" },
          { value: "Basic Python & Math", label: "Prerequisites" },
          { value: "Job-Ready Portfolio", label: "Outcome" },
        ],
      },
    ],
  },

  curriculum: {
    heading: "12-Module [[Curriculum]]",
    intro:
      "An industry-aligned path spanning SQL & BI to Python, Statistics, ML, R, and modern GenAI-with real projects that recruiters can run and trust.",
    modules: [
      {
        title: "DBMS using MySQL",
        topics: [
          "ER modeling",
          "Normalization (1NF–BCNF)",
          "SQL (joins, subqueries, windows)",
          "Indexing & EXPLAIN",
          "Backup/restore",
          "DDL/DML/TCL/DCL",
          "Views",
          "Procs",
          "Triggers",
          "CTEs",
        ],
        projects: ["A capstone database design."],
      },
      {
        title: "Advanced Excel for Analytics & Viz",
        topics: [
          "Data types/cleaning",
          "Formulas (IF/XLOOKUP)",
          "Conditional formatting",
          "PivotTables/Charts",
          "ToolPak stats",
          "Forecasting",
          "Power Query",
          "Interactive dashboards",
        ],
        projects: ["Hands-on projects."],
      },
      {
        title: "Power BI (Data Analytics & Visualization)",
        topics: [
          "Power Query transforms",
          "Schema modeling (star/snowflake)",
          "DAX measures",
          "Core & advanced visuals",
          "Drill/focus interactivity",
          "Dashboards",
          "Publishing",
        ],
        projects: ["End-to-end projects."],
      },
      {
        title: "Tableau (Analytics & Storytelling)",
        topics: [
          "Data integration (joins/unions/relationships)",
          "Logical vs physical layers",
          "Dimensions/measures",
          "Specialized/geospatial charts",
          "Table calcs",
          "Parameters/sets",
          "Dashboards & stories.",
        ],
      },
      {
        title: "Core Python Programming",
        topics: [
          "Syntax",
          "Data structures (lists/tuples/sets/dicts)",
          "Control flow",
          "Functions & recursion",
          "File I/O",
          "OOP (inheritance/encapsulation)",
          "Modules/packages",
          "Jupyter workflows.",
        ],
      },
      {
        title: "Python Data Viz (pandas, Matplotlib, Seaborn) + NumPy",
        topics: [
          "EDA/cleaning with pandas",
          "Plot customization & annotations",
          "Interactive/animated plots",
          "Seaborn statistical & categorical charts",
          "Heatmaps/grids",
          "NumPy arrays/broadcasting.",
        ],
      },
      {
        title: "Statistics & Probability",
        topics: [
          "Descriptive stats",
          "Probability & Bayes",
          "Discrete/continuous distributions",
          "Sampling & CLT",
          "Hypothesis tests (z/t/χ²/ANOVA)",
          "Correlation/regression",
          "ML-centric metrics.",
        ],
      },
      {
        title: "ML with Python",
        topics: [
          "Preprocessing (imputation/encoding/scaling)",
          "Regression & regularization",
          "Classifiers (LR/KNN/DT/RF/SVM)",
          "Model validation (CV, metrics, ROC-AUC)",
          "PCA & clustering",
        ],
        projects: ["A capstone."],
      },
      {
        title: "Machine Learning & Data Viz with R",
        topics: [
          "RStudio workflow",
          "Vectors/lists/factors/matrices/DFs",
          "CSV/Excel I/O",
          "Ggplot2 visuals",
          "ML projects using lm() and glm().",
        ],
      },
      {
        title: "Deep Learning, NLP & Generative AI",
        topics: [
          "ANN/CNN essentials",
          "RNN/LSTM/autoencoders",
          "NLP with NLTK/spaCy & TensorFlow",
          "OCR basics",
          "GenAI tooling across text, image (LIM), video, and speech.",
        ],
      },
      {
        title: "Prompt Engineering with Gen AI",
        topics: [
          "AI foundations & ML ecosystem",
          "GenAI basics & technicals (GANs, transfer learning)",
          "LLM evolution",
          "Computer vision tie-ins",
          "Hands-on prompting patterns",
          "Responsible AI.",
        ],
      },
      {
        title: "Real-Time Projects & Capstone Portfolio",
        topics: [
          "Domain projects: credit risk",
          "Customer segmentation",
          "Sales forecasting",
          "Fraud detection",
          "Hospital resource forecasting",
          "HR attrition analytics—plus portfolio-ready deliverables.",
        ],
      },
    ],
    moduleNote: "*Module order may vary slightly by cohort to maximize outcomes.",
    ctas: [
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply for the Comprehensive DS & AI program" },
      { label: "Download Detailed Syllabus (PDF)", kind: "syllabus", ariaLabel: "Download detailed DS & AI syllabus" },
    ],
  },

  tools: {
    heading: "[[Tools]] & [[Technologies]] You’ll Master",
    intro:
      "Build **production-grade pipelines**, dashboards, and **deployed ML systems** with industry-standard tools—from **Python/R/SQL** to **TensorFlow/PyTorch** and **AWS SageMaker**.",
    items: [
      {
        name: "Python",
        logo: "/techstack_logos/python-logo.svg",
        description: "EDA, feature engineering, notebooks, data apps, and production APIs.",
      },
      { name: "R", logo: "/techstack_logos/r-logo.svg", description: "Statistics, visualization, and reporting with tidyverse workflows." },
      { name: "SQL", icon: "database", description: "Model reliable queries, windows, CTEs, and performance tuning." },
      { name: "Tableau", logo: "/techstack_logos/tableau-logo.svg", description: "Interactive dashboards, storytelling, and KPI drill-downs." },
      { name: "Power BI", logo: "/techstack_logos/power-bi-logo.svg", description: "Data models, DAX measures, and enterprise-ready reports." },
      {
        name: "TensorFlow",
        logo: "/techstack_logos/tensorflow-logo.svg",
        description: "NNs, CNNs, transfer learning, and efficient TF/Keras pipelines.",
      },
      { name: "PyTorch", logo: "/techstack_logos/pytorch-logo.svg", description: "Flexible modeling, training loops, and deployment patterns." },
      {
        name: "AWS SageMaker",
        logo: "/techstack_logos/amazonwebservices-logo.svg",
        description: "Training jobs, endpoints, monitoring, and CI/CD integrations.",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "8 Core Tools", label: "Hands-On Stack", note: "EDA • BI • DL • MLOps" },
          { value: "Cloud & On-Prem", label: "Deploy Anywhere", note: "AWS • GCP • Azure patterns" },
          { value: "Job-Ready Portfolio", label: "Outcome", note: "APIs • Dashboards • Models" },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your [[DS & AI Career Roadmap]]",
    intro: "Follow these 4 proven steps to move from learner to job-ready DS & AI professional with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 255-Hour DS & AI Master Program",
        badge: "Job-Ready Foundations",
        description:
          "Python, Statistics, EDA, supervised & unsupervised ML, Deep Learning, NLP, Time Series, Big Data (Spark) foundations.",
      },
      {
        title: "Build & Ship an Advanced Portfolio",
        badge: "Portfolio & GitHub",
        description:
          "End-to-end projects (APIs, dashboards, notebooks) deployed to cloud with READMEs, metrics, and reproducible pipelines.",
      },
      {
        title: "Career Prep, Mock Interviews & MLOps Basics",
        badge: "Interview Readiness",
        description: "ATS resume, behavioral & technical mocks, packaging models, simple monitoring, CI/CD & deployment checklists.",
      },
      {
        title: "Apply & Land a DS/AI Role",
        badge: "Offer & Onboarding",
        description: "Target Data Scientist, ML Engineer, Applied AI Specialist, or MLOps roles (₹9–18 LPA based on city & stack).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "~ 12–16 Weeks", label: "Program Duration", note: "255 hours guided learning" },
          { value: "3–5", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹9–18 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    outro: "Learn from anywhere. Your journey to a DS & AI career starts here.",
    ctas: [
      { label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized DS & AI roadmap guidance" },
    ],
  },

  projects: {
    heading: "Real-World [[DS & AI Projects]]",
    intro:
      "Build **production-grade AI systems** and **data pipelines** with clear **metrics**, **governance**, and **deployability**.",
    items: [
      {
        icon: "heart",
        title: "Healthcare AI Diagnostic",
        description: "Develop deep-learning models that flag abnormalities in medical images with explainability.",
        features: ["Transfer learning", "Grad-CAM insights", "Bias & safety checks"],
        tags: ["PyTorch", "TorchVision", "OpenCV", "FastAPI"],
      },
      {
        icon: "shield",
        title: "Financial Fraud Detection",
        description: "Real-time anomaly detection for transactions with drift monitoring and alerts.",
        features: ["Feature stores", "Imbalance handling", "Streaming scoring"],
        tags: ["scikit-learn", "LightGBM", "Kafka", "Airflow"],
      },
      {
        icon: "target",
        title: "Recommendation Engine",
        description: "Personalized ranking using collaborative filtering and content features.",
        features: ["Implicit feedback", "Cold-start strategy", "A/B-like offline eval"],
        tags: ["Faiss", "Implicit", "Pandas", "SQL"],
      },
      {
        icon: "workflow",
        title: "MLOps Pipeline & Deployment",
        description: "CI/CD for models: versioning, testing, and rollouts with monitoring.",
        features: ["Model registry", "Canary deploy", "Data & concept drift"],
        tags: ["Docker", "GitHub Actions", "MLflow", "S3"],
      },
      {
        icon: "bot",
        title: "RAG QA Assistant",
        description: "Retrieval-augmented QA with citations and guardrails for safer responses.",
        features: ["Chunking & indexing", "Citations", "Eval harness"],
        tags: ["Embeddings", "Vector DB", "LLM", "Guardrails"],
      },
      {
        icon: "lineChart",
        title: "Time-Series Forecasting",
        description: "Demand & pricing forecasts with rolling backtests and error analysis.",
        features: ["Feature lags/regimes", "Cross-validation", "Residual diagnostics"],
        tags: ["statsmodels", "Prophet", "Plotly", "Pandas"],
      },
    ],
    outro:
      "These **industry-aligned projects** emphasize reproducibility, evaluation, and clean architecture—ideal for **Data Scientist**, **ML Engineer**, and **Applied AI** roles. Scope varies by dataset, domain, and pace.",
    ctas: [{ label: "Download Full Project List", kind: "syllabus" }],
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Real reviews from the **Comprehensive Data Science & AI - Master Program**: end-to-end ML, GenAI, and **MLOps** with a portfolio recruiters trust.",
  },

  career: {
    heading: "Top Companies Hiring [[DS & AI Professionals]] After Masters in AI and ML",
    intro:
      "High-growth careers across Data Science, Machine Learning Engineering, MLOps, and Applied AI in product & services companies. Our **ai master program mumbai** prepares you for **masters in artificial intelligence india** roles.",
    rolesTitle: "Roles You Can Target",
    roles: ["Data Scientist", "ML Engineer", "Data Analyst", "Applied AI Engineer", "MLOps Engineer"],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "HCLTech", "IBM"],
    companiesNote: "Openings vary by location, tech stack, and experience.",
  },

  audience: {
    heading: "Who Is This [[Course For]] – Masters in AI and ML in India",
    intro:
      "Whether you're a **beginner**, **analyst**, or an experienced **professional**, this **post graduate program in ai and ml** helps you build a recruiter-ready portfolio in **Data Science** & **AI**. Perfect for those seeking **ms in artificial intelligence in india**.",
    items: [
      {
        icon: "graduationCap",
        title: "Students & Fresh Graduates",
        description: "Start strong with Python, statistics, ML/DL foundations, and portfolio projects to stand out in interviews.",
        points: ["Zero-to-job-ready path", "Mentor feedback & reviews"],
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description: "Upskill to lead AI/ML initiatives—learn experimentation, MLOps, and stakeholder storytelling.",
        points: ["Impact metrics & dashboards", "Deployment checklists"],
      },
      {
        icon: "barChart",
        title: "Data Analysts",
        description: "Move beyond BI into predictive modeling, feature engineering, and production pipelines.",
        points: ["SQL → ML pipelines", "Model evaluation & drift"],
      },
      {
        icon: "compass",
        title: "Career Switchers",
        description: "Enter the AI industry with curated projects, interview prep, and ATS-optimized resumes.",
        points: ["Portfolio review", "Mock interviews & guidance"],
      },
    ],
    outro:
      "Ideal for **students**, **working professionals**, **data analysts**, and **career switchers** targeting roles like **Data Scientist**, **ML Engineer**, and **Applied AI**.",
    ctas: [
      { label: "Check Eligibility & Apply", kind: "enroll" },
      { label: "Download Detailed Syllabus", kind: "syllabus" },
    ],
  },

  faq: {
    heading: "Frequently Asked [[Questions]]",
    intro:
      "Everything about our **Comprehensive Data Science & AI** program—curriculum, tools, projects, timelines, certification, and **career support**.",
    items: AI_FAQS,
  },

  cta: {
    heading: "Ready to Master [[Data Science & AI]] – Masters in AI and ML in India?",
    intro:
      "Enroll in our **ai master program mumbai** for **global certification**, **job assistance**, and a **portfolio-first** curriculum in Python, ML, Deep Learning, NLP/GenAI, and MLOps. Start your **masters in ai and ml** journey today.",
    actions: [
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply Now" },
      { label: "Download Syllabus", kind: "syllabus", ariaLabel: "Download the Data Science & AI syllabus" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions at +91 7888383788" },
    ],
    highlights: [
      { icon: "award", title: "International Certification", description: "QR-verifiable" },
      { icon: "briefcase", title: "Job-Ready Portfolio", description: "APIs • Dashboards • Models" },
      { icon: "handshake", title: "End-to-End Placement Support", description: "Resume • Mock Interviews" },
    ],
    footnotes: [
      { icon: "calendar", text: "Flexible schedules" },
      { icon: "users", text: "Mentor support" },
      { icon: "clock", text: "Seats are limited—secure yours today." },
    ],
  },
};

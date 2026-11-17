import type { CourseContent } from "@/types/course-page";
import { GENERATIVE_AI_FAQS } from "@/data/courses/ds-ml/faqs/generative-ai-course";

// Content for /courses/ds-ml-courses/generative-ai-course, moved from the old
// src/components/generative-ai-course/* sections. Kept word for word except
// repeated filler (hidden keyword strings, a visible "Keywords:" list, chip
// rows that repeat the stats, a repeated card footer and "Trusted Employer"
// prefix), which a cleanup pass removed.
export const generativeAiCourse: CourseContent = {
  slug: "generative-ai-course",
  courseName: "Master Program in Deep Learning, NLP & Generative AI",
  sourceName: "Generative AI Course Page",

  seo: {
    title: "Deep Learning, NLP & Gen AI Course Mumbai | CDPL",
    description:
      "55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, job assistance, global certificates from AAA.",
    keywords: [
      "deep learning course mumbai",
      "nlp training",
      "generative ai with python",
      "ai hero program",
      "ai jobs mumbai",
      "large language models course",
      "prompt engineering training",
    ],
    image: "/og-images/courses-ds-ml-courses-generative-ai-course-og.webp",
  },

  schema: {
    name: "Master Program in Deep Learning, NLP & Generative AI",
    description:
      "55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, job assistance, global certificates from AAA.",
    duration: "P1M2W",
    howTo: {
      name: "How to Enroll in CDPL Generative AI Hero Program",
      description:
        "A step-by-step guide to enrolling in our advanced Deep Learning, NLP, and Generative AI training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the advanced PyTorch, Hugging Face Transformers, and MLOps modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern large language models, prompt engineering, and deep learning for advanced tech roles!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Deep Learning • NLP • GenAI",
    badges: [
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "clock", text: "55 Hours" },
      { icon: "code", text: "Project-based" },
      { icon: "briefcase", text: "Placement Support" },
      { icon: "star", text: "Mumbai’s Premium Training Institute" },
    ],
    h1: "Master Program in [[Deep Learning]], [[NLP]] & [[Generative AI]]",
    subtitle:
      "Become industry-ready with **Neural Networks**, **CNNs**, **RNNs/LSTMs**, **Transformers**, **Prompt Engineering**, **fine-tuning LLMs**, embeddings and **vector databases**. Build portfolio projects and earn a **QR-verified certificate**.",
    description:
      "Curriculum includes data pipelines, tokenization, evaluation (BLEU, ROUGE, accuracy, F1), guardrails, lightweight MLOps, and deployment.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Generative AI course" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "Hands-on labs with PyTorch & Hugging Face",
      "Transformers, BERT/GPT-style models, LoRA fine-tuning",
      "Prompt engineering & retrieval-augmented generation (RAG)",
      "Deploy to cloud • basic MLOps & monitoring",
    ],
  },

  stats: {
    heading: "Why [[Advanced Data Analytics]]?",
    intro:
      "Data analytics drives **profitability, forecasting, and decisions** in 2025. Join our mentor-led **Advanced Data Analytics** program to build **Python, SQL, BI, and ML** skills with **real projects** and placement support.",
    items: [
      { value: "110 Hours", label: "Program Duration", note: "4 Months • Hybrid" },
      { value: "80:20", label: "Practical : Theory", note: "Industry-Rich Experience" },
      { value: "14+ Years", label: "Team Expertise", note: "Mentor-led • Industry Aligned" },
      { value: "100%", label: "Job Assistance", note: "Resume • Mock Interviews • Referrals" },
      { value: "101,000+", label: "Data Analyst Jobs (India)", note: "Open Roles Across Sectors" },
      { value: "25% CAGR", label: "Market Growth (2020–2030)", note: "Data/Analytics Industry" },
    ],
    footnote: "*Outcomes vary by prior experience, pace, and project depth.",
    outro:
      "Master **dashboards & reporting** (Power BI/Tableau), **SQL for analytics**, **feature engineering**, and **ML for business** with **career support**.",
  },

  why: {
    heading: "[[Deep Learning]], [[NLP]] & [[Generative AI]] with [[Python]]",
    intro:
      "An advanced, practical program to **design, train, fine-tune, and deploy** modern AI models—including **Transformers, LLMs, and generative pipelines**. Get industry-ready with hands-on projects, portfolio artifacts, and **real deployment workflows**.",
    cards: [
      {
        icon: "brain",
        title: "Master Neural Networks",
        description:
          "Build CNNs, RNNs, and Transformers from scratch and with modern libraries. Understand optimization, regularization, and inference.",
      },
      {
        icon: "sparkles",
        title: "Work with LLMs & Prompting",
        description:
          "Apply prompt engineering, adapters (LoRA/QLoRA), and RAG to production use cases without overspending on compute.",
      },
      {
        icon: "layers",
        title: "Production-Ready NLP",
        description: "Tokenization, embeddings, vector search, evaluation, and monitoring that stands up in real apps and APIs.",
      },
      {
        icon: "rocket",
        title: "Deploy & Scale",
        description:
          "Package models with FastAPI, containerize with Docker, and ship to cloud with CI/CD and observability best practices.",
      },
      {
        icon: "shieldCheck",
        title: "Safety & Ethics",
        description: "Mitigate bias, implement guardrails, and comply with responsible AI guidelines for enterprise use.",
      },
      {
        icon: "settings",
        title: "MLOps Essentials",
        description: "Version datasets & models, track experiments, and automate training pipelines for repeatable results.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "What you’ll learn (and build)",
        text: "From **neural network fundamentals** to **state-of-the-art NLP** and **generative AI**, this course ensures you can ship *working* AI systems. You will implement tokenization & embeddings, construct and fine-tune Transformer/LLM architectures, and wire up **RAG pipelines** with vector databases. You’ll package models with **FastAPI**, containerize with Docker, and deploy to cloud with CI/CD while tracking experiments and **monitoring performance**.",
      },
      {
        kind: "list",
        items: [
          "Curriculum aligned to high-demand AI roles and interview patterns.",
          "Python-first stack: PyTorch, Transformers, FastAPI, Faiss/PGVector.",
          "Project portfolio with measurable business impact and metrics.",
        ],
      },
      {
        kind: "stats",
        title: "Quick Facts",
        items: [
          { value: "≈ 55 Hours", label: "Duration" },
          { value: "Project-Based", label: "Learning Mode" },
          { value: "Python + ML Basics", label: "Prerequisite" },
          { value: "Job-Ready Portfolio", label: "Outcome" },
        ],
      },
    ],
  },

  curriculum: {
    heading: "5-Core [[Curriculum Modules]]",
    intro:
      "A 110+ hour, industry-aligned path across SQL/MySQL, Excel, Power BI, Tableau, and Python libraries—culminating in real projects and job-ready skills.",
    modules: [
      {
        title: "DBMS using MySQL",
        topics: [
          "Intro to DBMS & MySQL",
          "schema design (ER → relational, normalization)",
          "SQL essentials (SELECT/WHERE, GROUP BY/HAVING, ORDER/LIMIT)",
          "joins (INNER/LEFT/SELF/CROSS, USING/NATURAL)",
          "subqueries & UNION",
          "window functions (ROW_NUMBER/RANK/DENSE_RANK with OVER)",
          "DML/DDL/TCL/DCL",
          "admin (users/privileges)",
          "backup & recovery",
          "EXPLAIN & indexing",
          "views",
          "stored procedures",
          "UDFs/triggers",
          "CTEs/temp tables",
        ],
        projects: ["Real-world capstone DB design"],
      },
      {
        title: "Advance Excel for Analytics & Visualization",
        topics: [
          "Data handling (types, smart entry, duplicates/nulls)",
          "core formulas (SUM/AVERAGE/COUNTIF(S), TEXT, DATE/TIME)",
          "logicals (IF/AND/OR, nested IF)",
          "sorting/filtering & conditional formatting",
          "charts (bar/line/pie/scatter/bubble/combo)",
          "PivotTables & PivotCharts (groups, slicers, timelines)",
          "Data Analysis ToolPak (descriptive stats)",
          "advanced lookups (VLOOKUP/HLOOKUP/XLOOKUP, INDEX/MATCH)",
          "forecasting & trendlines",
          "Power Query (import/transform/clean)",
          "interactive dashboards & reporting",
        ],
        projects: ["Domain projects"],
      },
      {
        title: "Data Analytics & Visualization with Power BI",
        topics: [
          "BI concepts & Power BI ecosystem (Desktop/Service/Mobile)",
          "data ingestion (CSV/Excel/folder/XML/DB)",
          "Power Query Editor (clean/shape, split/merge, extract/replace, pivot/unpivot, append/merge)",
          "data modeling (facts/dimensions, star vs snowflake, relationships/cardinality)",
          "visuals (bar/line/pie, maps, matrix/cards)",
          "DAX basics (columns, measures, operators/functions)",
          "advanced visuals (KPIs, ribbon/scatter, waterfall/funnel, forecasting)",
          "interactivity (drill-down/through, tooltips, filters/slicers)",
          "dashboards & publishing to Service",
        ],
        projects: ["Hands-on projects"],
      },
      {
        title: "Data Analytics & Visualization with Tableau",
        topics: [
          "BI + Tableau setup",
          "data integration (relationships, joins, unions)",
          "data types & the data pane (dimensions/measures; discrete vs continuous)",
          "core charts (bar/line/scatter) and Marks card (color/shape/size, labels/tooltips)",
          "advanced visuals (treemap/heatmap, Gantt/bullet, dual-axis & combined charts)",
          "geospatial (maps, density)",
          "organize/filter (groups, sorts, context filters)",
          "analysis (calculated fields, table calcs: running totals/%, clustering, forecasting)",
          "dynamic analysis (sets, parameters)",
          "dashboards & stories",
        ],
        projects: ["3 applied projects"],
      },
      {
        title: "Advanced Data Analytics with Python Libraries",
        topics: [
          "Python fundamentals (syntax, control flow, functions/modules, Jupyter setup)",
          "ML basics (supervised vs unsupervised; quick classification demo & metrics)",
          "pandas (IO, clean, filter/sort, groupby/merge/concat, pivots, EDA, stats, correlations)",
          "Matplotlib (figures/axes, hist/box/heatmap/3D, annotations, simple animation & widgets)",
          "Seaborn (distributions, pair/joint, categorical: box/violin/swarm; clustermap/FacetGrid, EDA integration)",
          "NumPy (arrays, reshape/broadcast, random, advanced indexing, linear algebra)",
        ],
        projects: ["Guided hands-on mini-projects"],
      },
    ],
    moduleNote: "*Module order may vary slightly based on cohort needs and instructor discretion.",
    ctas: [
      {
        label: "Download Detailed Syllabus (PDF)",
        kind: "syllabus",
        ariaLabel: "Download the detailed Advanced Data Analytics syllabus",
      },
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply for the Advanced Data Analytics program" },
    ],
  },

  tools: {
    heading: "[[Tools]] & [[Technologies]] You’ll Master",
    intro:
      "A job-ready **AI/ML stack** for real projects: modeling, MLOps, APIs, and visualization. Learn the tools that **recruiters recognise** and **teams use**.",
    items: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg" },
      { name: "TensorFlow", logo: "/techstack_logos/tensorflow-logo.svg" },
      { name: "PyTorch", logo: "/techstack_logos/pytorch-logo.svg" },
      { name: "Keras", logo: "/techstack_logos/keras-logo.svg" },
      { name: "NLTK", icon: "message" },
      { name: "spaCy", logo: "/techstack_logos/spacy-logo.svg" },
      { name: "Hugging Face", logo: "/techstack_logos/Hugging-logo.png" },
      { name: "Docker", logo: "/techstack_logos/docker-logo.svg" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg" },
      { name: "Pandas", logo: "/techstack_logos/pandas-logo.svg" },
      { name: "scikit-learn", logo: "/techstack_logos/scikit-learn-logo.svg" },
      { name: "FastAPI", logo: "/techstack_logos/fastapi-logo.webp" },
    ],
    itemNote: "*Tooling may vary by project and track.",
    outro:
      "Master the **Python data science toolkit** end-to-end—from **data wrangling** and **feature engineering** to **deep learning**, **LLMs**, and **deployment**.",
  },

  roadmap: {
    heading: "Your [[AI Career Roadmap]]",
    intro:
      "Follow these **4 proven steps** to go from learner to a **job-ready Deep Learning / NLP / Generative AI professional** with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 55-Hour GenAI Hero Program",
        badge: "Job-Ready Foundations",
        description:
          "Deep Learning fundamentals → NLP pipelines → Transformers & LLMs. Master embeddings, tokenization, and hands-on model training with Python.",
      },
      {
        title: "Build 3+ Production-Style AI Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship an end-to-end RAG app, a fine-tuned LLM (LoRA/QLoRA), and a vision/NLP capstone. Document with READMEs, metrics, and demos.",
      },
      {
        title: "Deploy, Observe & Secure",
        badge: "Cloud & MLOps",
        description:
          "Expose FastAPI endpoints, containerize with Docker, and deploy to cloud. Add vector search, logging, evals, and guardrails for safe AI.",
      },
      {
        title: "Career Prep & Land a GenAI Role",
        badge: "Offer & Onboarding",
        description:
          "Resume ATS optimization, mock interviews, DS/ML warm-ups, and project storytelling. Target ₹10–20 LPA roles in AI Engineer / NLP / GenAI Dev.",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "≈ 55 Hours", label: "Program Duration", note: "Guided, project-based" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹10–20 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    outro: "Learn from anywhere. Your journey to a Generative AI career starts here.",
    ctas: [{ label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized AI roadmap guidance" }],
  },

  projects: {
    heading: "Real-World [[Projects You’ll Build]]",
    intro:
      "Apply **Deep Learning**, **NLP**, and **Generative AI** to solve real problems. Build a **job-ready portfolio** with clean code, clear storytelling, and measurable impact.",
    items: [
      {
        icon: "message",
        title: "NLP Sentiment Analysis (Real Reviews)",
        description:
          "Classify customer sentiment from real-world reviews; surface topics and pain points for product teams.",
        features: ["Data cleaning & label strategy", "Model comparison (LogReg, BiLSTM, Transformers)", "Explainability with SHAP"],
        tags: ["Python", "Pandas", "scikit-learn", "Transformers"],
      },
      {
        icon: "image",
        title: "Image Recognition with CNN",
        description:
          "Train and evaluate a CNN for multi-class image classification; deploy a lightweight inference API.",
        features: ["Augmentation & transfer learning", "Metrics: F1, confusion matrix", "FastAPI inference endpoint"],
        tags: ["PyTorch", "Torchvision", "FastAPI"],
      },
      {
        icon: "bot",
        title: "Generative AI Text Generator",
        description:
          "Fine-tune an open LLM for style-controlled generation and safe prompts with evaluation suites.",
        features: ["Prompt templates & RLHF-lite evals", "Safety & toxicity checks", "Gradio demo app"],
        tags: ["Transformers", "PEFT/LoRA", "Gradio"],
      },
      {
        icon: "lineChart",
        title: "Time-Series Forecasting (Sales)",
        description:
          "Forecast weekly sales; compare classical and ML approaches with robust backtesting and error analysis.",
        features: ["Feature engineering (lags, holidays)", "ARIMA/Prophet vs. XGBoost", "Backtests & confidence bands"],
        tags: ["Pandas", "Prophet", "XGBoost", "Matplotlib"],
      },
      {
        icon: "brain",
        title: "Customer Segmentation (RFM + Clustering)",
        description: "Create actionable cohorts for marketing using RFM scores and unsupervised learning.",
        features: ["K-Means/DBSCAN + validation", "Cohort playbooks", "Insights dashboard"],
        tags: ["scikit-learn", "Umap-learn", "Plotly"],
      },
      {
        icon: "rocket",
        title: "End-to-End AI Micro-App",
        description:
          "Ship a small production app: data pipeline, model, API, and a minimal UI with auth and monitoring.",
        features: ["Dockerized services", "CI/CD with GitHub Actions", "Observability & docs"],
        tags: ["FastAPI", "Docker", "Vercel", "PyTest"],
      },
    ],
    outro:
      "These **industry-aligned projects** demonstrate real metrics, clean engineering, and clear communication—exactly what **hiring managers** want for **Data Analyst**, **ML Engineer**, and **Data Scientist** roles. Project scope may vary by dataset, domain, and pace.",
  },

  testimonials: {
    heading: "Student Success [[Stories]] & [[Reviews]]",
    intro:
      "Real feedback from graduates who advanced their careers in **Deep Learning**, **NLP**, and **Generative AI**. Verified, job-focused, and packed with **Python + Transformer** projects recruiters recognize.",
  },

  career: {
    eyebrow: "50K+ Open Roles in India",
    heading: "Top Companies Hiring [[AI Professionals]]",
    intro:
      "Careers across **Artificial Intelligence**, **Data Science**, **Machine Learning**, **NLP**, and **Generative AI**—from **Data Analyst** to **ML Engineer** and **Applied Scientist**.",
    rolesTitle: "Popular AI Job Titles",
    roles: ["Data Analyst", "Machine Learning Engineer", "Data Scientist", "MLOps Engineer", "NLP Engineer", "GenAI Engineer"],
    companiesTitle: "Companies Hiring AI & Data Professionals",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "HCLTech", "IBM"],
    companiesNote: "…and many more leading product & services companies.",
  },

  audience: {
    heading: "Who is this [[course for]]?",
    intro: "Designed for motivated learners to become **job-ready** in Deep Learning, NLP, and Generative AI.",
    items: [
      {
        icon: "code",
        title: "Learners with prior programming & ML experience",
        description: "Advance your expertise in Deep Learning, NLP, and Generative AI with production-style labs.",
      },
      {
        icon: "graduationCap",
        title: "Students targeting AI & Data Science careers",
        description: "Build a job-ready portfolio with mentor-reviewed projects, interview prep, and placement assistance.",
      },
      {
        icon: "briefcase",
        title: "Tech professionals seeking AI specialization",
        description: "Integrate and deploy AI models in real systems with evaluation, monitoring, and lightweight MLOps.",
      },
      {
        icon: "lightbulb",
        title: "Builders exploring innovative AI applications",
        description: "Design and ship cutting-edge apps using Transformers, prompt engineering, and RAG with vector DBs.",
      },
    ],
    ctas: [
      { label: "Check Eligibility & Apply", kind: "enroll", ariaLabel: "Check your eligibility and apply" },
      { label: "Download Detailed Syllabus (PDF)", kind: "syllabus", ariaLabel: "Download the detailed syllabus" },
    ],
  },

  faq: {
    heading: "Frequently Asked [[Questions]]",
    intro:
      "All the essentials about our Deep Learning, NLP & Generative AI program—entry requirements, duration, tools, certification, and placements.",
    items: GENERATIVE_AI_FAQS,
  },

  cta: {
    heading: "Ready to Master [[Deep Learning]] & [[AI]]?",
    intro:
      "Enroll now to get **job assistance**, mentor-led guidance, and a **portfolio of real AI projects** using **Python, PyTorch, LLMs**, and **Transformers**.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call to enroll in the Deep Learning & AI course" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email to request the Deep Learning & AI brochure" },
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply now for the Deep Learning & AI program" },
      { label: "WhatsApp +91 788-83-83-788", kind: "whatsapp", ariaLabel: "Message us on WhatsApp for quick guidance" },
    ],
    highlights: [
      { icon: "users", title: "Mentor-Led", description: "Live support & feedback" },
      { icon: "code", title: "Real Projects", description: "CV, NLP, GenAI demos" },
      { icon: "briefcase", title: "Job Assistance", description: "Resume & mock interviews" },
    ],
    footnotes: [
      { icon: "clock", text: "Limited seats" },
      { icon: "calendar", text: "Flexible schedules" },
      { icon: "message", text: "Mentor feedback on every project" },
    ],
  },
};

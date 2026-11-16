import type { CourseContent } from "@/types/coursePage";
import { MACHINE_LEARNING_FAQS } from "@/data/machineLearningData";

// Content for /courses/ds-ml-courses/machine-learning-course, moved from the
// old src/components/machine-learning-course/* sections. Kept word for word
// except repeated filler (hidden keyword strings, a per-module "Outcomes"
// line now shown once, repeated card footers, badge rows that repeat the
// hero badges or the stats), which a cleanup pass removed.
export const machineLearningCourse: CourseContent = {
  slug: "machine-learning-course",
  courseName: "Machine Learning and Data Science with Python",
  sourceName: "Machine Learning Course Page",

  seo: {
    title: "Machine Learning & Data Science with Python | CDPL",
    description:
      "95-hour Hero Program in machine learning & data science with Python — supervised & unsupervised ML, hands-on projects and placement assistance in Mumbai.",
    keywords: [
      "machine learning course mumbai",
      "data science with python",
      "python data science training",
      "ml hero program",
      "data scientist jobs mumbai",
      "artificial intelligence course",
      "deep learning training",
    ],
    image: "/og-images/courses-ds-ml-courses-machine-learning-course-og.webp",
  },

  schema: {
    name: "Machine Learning & Data Science with Python Hero Program",
    description:
      "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, job assistance, global certificates.",
    duration: "P2M1W",
    howTo: {
      name: "How to Enroll in CDPL Machine Learning Hero Program",
      description: "A step-by-step guide to enrolling in our specialized Machine Learning and Data Science program.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Evaluate the comprehensive Python, Pandas, scikit-learn, and Deep Learning modules.",
        },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern Data Science frameworks and Automated AI scripting methodologies with strong placement support!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "ML & DS with Python",
    badges: [
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "clock", text: "95 Hours" },
      { icon: "code", text: "Project-based" },
      { icon: "briefcase", text: "Placement Support" },
      { icon: "star", text: "Mumbai’s Premium Training Institute" },
    ],
    h1: "Master Program in [[Machine Learning]] & [[Data Science]] with [[Python]]",
    subtitle:
      "Become industry-ready with **Python**, **NumPy**, **Pandas**, **Data Visualization**, **scikit-learn**, model building, API integration, and cloud deployments. Build portfolio projects and earn a **QR-verified certificate**.",
    description:
      "Curriculum includes EDA best practices, train/validation workflows, metrics, feature engineering, lightweight MLOps (environments, reproducibility), and deployment patterns.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in ML & DS course" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with mentor feedback",
      "Supervised/unsupervised ML with scikit-learn",
      "Portfolio projects with docs & GitHub",
      "Deployments on cloud + basic MLOps",
    ],
  },

  stats: {
    heading: "Why Invest in [[Machine Learning]] & [[Data Science]]?",
    intro: "Data is the new oil—and Python is the engine powering AI, analytics, and automation across industries.",
    items: [
      { value: "25%", label: "Market growth (2020–2030)" },
      { value: "1,01,000+", label: "Job Vacancies in India" },
      { value: "9 LPA", label: "Data Science freshers’ average salary" },
      { value: "75%", label: "Job Satisfaction" },
      { value: "32%", label: "India’s share in the global market" },
    ],
    footnote:
      "*Figures are sourced from the program brochure and are indicative; they may vary by role, skills, and location.",
    outro:
      "Growing adoption across **FinTech, Healthcare, Retail, and SaaS** is accelerating demand for **Python-first ML engineers, data analysts, and MLOps practitioners**.",
  },

  why: {
    heading: "Advanced Data Science: [[A Complete Overview]]",
    intro:
      "A mentor-led, job-ready journey through Python, Data Visualization, Statistics & Probability, and Machine Learning — built around hands-on labs and real portfolio projects.",
    points: [
      { icon: "clock", text: "95 Hours" },
      { icon: "award", text: "4 Certificates" },
      { icon: "code", text: "Hands-on Projects" },
      { icon: "check", text: "No Prerequisites" },
      { icon: "briefcase", text: "Job-Ready" },
    ],
    cards: [
      { icon: "briefcase", title: "Career Paths", description: "Data Analyst • ML Engineer • Data Scientist" },
      { icon: "wrench", title: "Toolchain", description: "Python • NumPy • Pandas • scikit-learn" },
      { icon: "package", title: "Deliverables", description: "3+ portfolio projects with docs & demos" },
    ],
    extras: [
      {
        kind: "text",
        text: "This **Hero Program** blends theory with practice so you can confidently analyze data, build models, and ship real demos. You’ll learn to structure datasets, visualize insights, apply **statistical reasoning**, and implement **machine learning algorithms** in **Python**. Each module ends with a guided mini-project and code review to ensure you’re **job-ready** for data-driven roles.",
      },
      {
        kind: "list",
        title: "What You’ll Learn",
        items: [
          "Python foundations → EDA → feature engineering",
          "Visualizations with Matplotlib & Plotly",
          "Statistics & Probability for inference and A/B testing",
          "ML with scikit-learn: supervised & unsupervised",
          "Model evaluation, metrics, and fair comparison",
          "Lightweight MLOps: environments, reproducibility, deploy",
        ],
      },
    ],
    outro:
      "Includes mentor guidance, interview prep, resume & LinkedIn polishing, and **placement assistance** for relevant roles. Outcomes depend on practice, project quality, and interview performance.",
  },

  curriculum: {
    heading: "12-Core [[Curriculum Modules]]",
    intro:
      "Industry-aligned syllabus spanning Python, NumPy/pandas, Matplotlib/Seaborn, Statistics, and Machine Learning with rigorous EDA and validation.",
    modules: [
      {
        title: "Python Programming Fundamentals",
        topics: [],
        outcome:
          "History & setup (Jupyter), syntax, variables, data types, operators, input/print, strings, and clean coding foundations.",
      },
      {
        title: "Control Flow & Core Data Structures",
        topics: [],
        outcome:
          "If/elif/else, logical ops, loops; lists, tuples, sets, dictionaries with indexing/slicing, CRUD, and common methods.",
      },
      {
        title: "Functions, Recursion, File I/O & Modules",
        topics: [],
        outcome:
          "Defining/calling functions (args, scope), recursion, exception handling, open/read/write files, stdlib & custom modules.",
      },
      {
        title: "Object-Oriented Programming in Python",
        topics: [],
        outcome:
          "Classes/objects, instance/class vars & methods, inheritance (single/multiple), polymorphism, encapsulation, properties.",
      },
      {
        title: "NumPy for Scientific Computing",
        topics: [],
        outcome:
          "Arrays vs lists, creation (1D/2D/nD), indexing/slicing, reshaping/broadcasting, random, math/linear algebra utilities.",
      },
      {
        title: "Data Analysis with pandas & EDA",
        topics: [],
        outcome:
          "Series/DataFrame, import/export (CSV/Excel/JSON), cleaning (missing/dupes), filter/sort, groupby/merge/pivot, EDA.",
      },
      {
        title: "Data Visualization with Matplotlib",
        topics: [],
        outcome:
          "Figure/Axes, line/bar/pie, hist/box/heatmap/3D, labels/legends/annotations, simple animations & interactive widgets.",
      },
      {
        title: "Advanced Visualization with Seaborn",
        topics: [],
        outcome:
          "Themes/palettes, dist/KDE/rug, pair/joint plots, categorical (strip/box/violin/swarm), heatmaps/clustermaps, FacetGrid.",
      },
      {
        title: "Statistics & Probability Essentials",
        topics: [],
        outcome:
          "Descriptive stats, hist/box plots, probability rules & Bayes, discrete/continuous distributions (binomial, normal, etc.).",
      },
      {
        title: "Sampling, Hypothesis Tests & Regression",
        topics: [],
        outcome:
          "Sampling & CLT, confidence intervals, z/t/chi-square/ANOVA, correlation (Pearson/Spearman), simple linear regression.",
      },
      {
        title: "ML Foundations & Data Preprocessing",
        topics: [],
        outcome:
          "Supervised vs unsupervised, ML workflow; missing handling, scaling, encoding, train/val/test split; quick model demo.",
      },
      {
        title: "Core ML Algorithms & Model Validation",
        topics: [],
        outcome:
          "Regression (linear/poly, ridge/lasso); classification (logistic, KNN, trees, RF, SVM); CV, metrics (MSE, R², AUC, F1).",
      },
    ],
    moduleNote: "Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.",
    ctas: [
      { label: "Download Detailed Syllabus (PDF)", kind: "syllabus" },
      { label: "Apply Now", kind: "enroll" },
    ],
  },

  tools: {
    heading: "[[Tools & Technologies]] You'll Master",
    intro:
      "Master the essential Python data stack for analytics and machine learning — from data wrangling to model training and visualization.",
    items: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg", description: "Primary language for ML & data workflows" },
      { name: "Pandas", logo: "/techstack_logos/pandas-logo.svg", description: "Data wrangling, cleaning & feature prep" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg", description: "Fast arrays, math & vectorized operations" },
      { name: "Scikit-Learn", logo: "/techstack_logos/scikit-learn-logo.svg", description: "Core ML algorithms, pipelines & metrics" },
      { name: "Matplotlib", logo: "/techstack_logos/matplotlib-logo.svg", description: "Publication-ready charts & plots" },
      { name: "Seaborn", logo: "/techstack_logos/seaborn-logo.png", description: "Statistical visuals & quick EDA" },
      { name: "Jupyter Notebook", logo: "/techstack_logos/jupyter-logo.svg", description: "Interactive notebooks for experiments" },
      { name: "SQL", icon: "database", description: "Query, join & aggregate data at source" },
    ],
    itemNote: "*Tooling may be extended with Plotly, FastAPI, Docker, or cloud notebooks based on cohort needs.",
    ctas: [
      {
        label: "See Modules Using These Tools",
        kind: "scroll",
        href: "curriculum",
        ariaLabel: "Explore curriculum modules mapped to these tools",
      },
    ],
  },

  roadmap: {
    heading: "Your [[Data Science]] Career Roadmap",
    intro:
      "Follow these **4 proven steps** to move from learner to **job-ready Data Science professional** with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 95-Hour Data Science Hero Program",
        badge: "Job-Ready Foundations",
        description:
          "Master Python, statistics, NumPy, Pandas, data wrangling, SQL, EDA, and practical visualization for business insights.",
      },
      {
        title: "Build 3 Portfolio Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship an analytics dashboard, a time-series forecasting model, and a classification/NLP project. Document on GitHub with READMEs and CI checks.",
      },
      {
        title: "Deploy & Operationalize (MLOps)",
        badge: "Cloud & MLOps",
        description:
          "Serve models via FastAPI, containerize with Docker, and deploy to cloud (AWS/GCP). Add monitoring, metrics, and API docs.",
      },
      {
        title: "Career Prep & Land a Data Role",
        badge: "Offer & Onboarding",
        description:
          "Resume revamp, ATS keywords, mock interviews, case studies, and SQL/ML refresher. Target ₹8–15 LPA roles (Data Analyst, ML Engineer, Data Scientist).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "~ 10–14 Weeks", label: "Program Duration", note: "95+ hours guided learning" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹8–15 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
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
    heading: "Real-World [[Projects You’ll Build]]",
    intro:
      "Build a portfolio recruiters love: hands-on **Python**, **Data Science**, and **Machine Learning** projects with clean code, clear storytelling, and business impact. Each project is production-minded and interview-ready.",
    items: [
      {
        icon: "barChart",
        title: "Data Analysis Dashboard (Executive Insights)",
        description:
          "Transform messy business data into interactive dashboards that reveal KPIs, trends, and anomalies. Use Python to clean, join, and visualize data for decision-makers.",
        features: [
          "Design KPI scorecards and cohort views",
          "Build drill-downs for product, region, and channel",
          "Ship a shareable dashboard and executive summary",
        ],
        tags: ["Python", "Pandas", "Plotly", "FastAPI", "SQL"],
      },
      {
        icon: "lineChart",
        title: "Sales Forecasting Model (Time-Series ML)",
        description:
          "Engineer a robust forecasting pipeline using classical and ML approaches to predict weekly sales with confidence intervals and scenario analysis.",
        features: [
          "Feature engineering for seasonality & promotions",
          "Compare ARIMA/Prophet vs. ML regressors",
          "Backtesting & error analysis (MAE, MAPE, SMAPE)",
        ],
        tags: ["scikit-learn", "Prophet", "NumPy", "Matplotlib"],
      },
      {
        icon: "brain",
        title: "Customer Segmentation (Clustering & RFM)",
        description:
          "Segment customers with unsupervised learning to personalize campaigns and improve retention using explainable, data-driven cohorts.",
        features: [
          "RFM scoring + K-Means/DBSCAN comparison",
          "Silhouette evaluation & interpretability",
          "Actionable cohort playbooks for marketing",
        ],
        tags: ["scikit-learn", "Pandas", "Seaborn", "Umap-learn"],
      },
      {
        icon: "cpu",
        title: "Churn Prediction (Classification Pipeline)",
        description:
          "Predict user churn with an end-to-end ML pipeline—balanced training, model selection, and business-friendly, explainable results.",
        features: [
          "Data imbalance handling (SMOTE/weights)",
          "ROC-AUC, PR-AUC, and calibration reporting",
          "SHAP-based explanations & retention levers",
        ],
        tags: ["scikit-learn", "XGBoost", "SHAP", "MLflow"],
      },
      {
        icon: "database",
        title: "NLP Insights (Reviews & Sentiment)",
        description:
          "Mine product reviews to extract topics, sentiment, and pain points. Turn qualitative text into quantifiable product insights.",
        features: ["Text cleaning & embeddings", "Topic modeling with coherence checks", "Aspect-based sentiment & insight report"],
        tags: ["spaCy", "NLTK", "Sentence-Transformers", "UMAP"],
      },
      {
        icon: "rocket",
        title: "End-to-End AI App (Data → Model → API → UI)",
        description:
          "Ship a production-ready mini-application: automated data flows, trained model, REST API, and a lightweight UI with auth and monitoring.",
        features: ["Orchestrate pipelines & model registry", "Serve predictions via FastAPI", "Observability & CI/CD with tests"],
        tags: ["FastAPI", "Docker", "PyTest", "GitHub Actions", "Vercel"],
      },
    ],
    outro:
      "These **industry-aligned data projects** reflect real metrics, clean engineering practices, and clear communication—exactly what **hiring managers** look for in **Data Analysts, ML Engineers, and Data Scientists**. Outcomes and tools may vary by dataset, domain, and role.",
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro: "Real outcomes from learners who completed our mentor-led Machine Learning & Data Science program.",
    outro: "{rating} · {reviews} reviews — Professional ML & Data Science Program in Mumbai",
  },

  career: {
    heading: "Top Companies Hiring [[Data Science Professionals]]",
    intro:
      "Join the ranks of Data Scientists, ML Engineers, and Analytics Professionals at India’s leading product and services companies.",
    rolesTitle: "Roles You Can Target",
    roles: ["Data Scientist", "ML Engineer", "Data Analyst", "MLOps Engineer", "BI Analyst"],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "HCLTech", "IBM"],
    companiesNote: "Roles and openings vary by location, skills, and experience.",
    ctas: [
      {
        label: "Apply for Placement Assistance",
        kind: "careerSession",
        ariaLabel: "Apply for data science roles via our placement cell",
      },
      {
        label: "Download Job-Ready Syllabus (PDF)",
        kind: "syllabus",
        ariaLabel: "Download the syllabus to see job-ready skills",
      },
    ],
  },

  audience: {
    heading: "Who Is This [[Course For]]",
    intro:
      "Whether you’re starting out or leveling up, this program turns **Python**, **Data Science**, and **Machine Learning** skills into measurable career outcomes—portfolio projects, practical tooling, and interview-ready confidence.",
    items: [
      {
        icon: "userCheck",
        title: "Beginners & Non-Coders",
        description:
          "Start your Data Science journey from zero—learn Python, statistics, and analytics step by step with hands-on practice.",
        points: ["No prior coding required", "Guided projects and mentor feedback"],
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description:
          "Upskill with Python-first ML to boost roles in technology, finance, healthcare, marketing, and education.",
        points: ["Career-oriented case studies", "Practical tools: Pandas, SQL, scikit-learn"],
      },
      {
        icon: "rocket",
        title: "Intermediate Learners",
        description: "Go deeper into machine learning, model evaluation, and MLOps to deliver production-ready solutions.",
        points: ["End-to-end ML pipelines", "Model tuning, SHAP, experiment tracking"],
      },
      {
        icon: "graduationCap",
        title: "Students & Career Switchers",
        description:
          "Build a job-ready portfolio and transition into high-growth roles like Data Analyst, ML Engineer, or Data Scientist.",
        points: ["Portfolio projects recruiters love", "Interview prep & placement guidance"],
      },
    ],
    outro:
      "Ideal for **Python beginners**, **working professionals**, **intermediate learners**, and **career switchers** seeking **Data Analyst**, **ML Engineer**, or **Data Scientist** roles. Learning paths adapt by background and pace.",
  },

  faq: {
    heading: "[[Frequently Asked Questions]]",
    intro: "Everything you need to know about our mentor-led Machine Learning & Data Science program.",
    items: MACHINE_LEARNING_FAQS,
  },

  cta: {
    heading: "Ready to Launch Your [[Data Science Career]]?",
    intro:
      "Enroll now to get **job assistance**, **4 global certificates**, and a portfolio recruiters love — built with **Python, SQL, Machine Learning,** and **real projects**.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call Cinute Digital to enroll in the Data Science course" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email Cinute Digital to get the course brochure" },
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply now for the Data Science program" },
      { label: "WhatsApp +91 788-83-83-788", kind: "whatsapp", ariaLabel: "Message us on WhatsApp for quick guidance" },
    ],
    highlights: [
      { icon: "briefcase", title: "Job Assistance", description: "Resume, mock interviews, referrals" },
      { icon: "award", title: "Global Certificates", description: "4 verifiable credentials" },
      { icon: "github", title: "Project Portfolio", description: "GitHub + live demos" },
    ],
    footnotes: [
      { icon: "clock", text: "Secure your seat today." },
      { icon: "users", text: "Limited cohorts, mentor-led, flexible schedules." },
    ],
  },
};

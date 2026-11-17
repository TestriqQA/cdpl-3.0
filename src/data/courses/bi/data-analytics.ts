import type { CourseContent } from "@/types/course-page";
import { DATA_ANALYTICS_FAQS } from "@/data/courses/bi/faqs/data-analytics";

// Content for /courses/bi-courses/data-analytics, moved from the old
// src/components/data-analytics/* sections. Kept word for word except repeated
// filler (hidden keyword lists, a visible "Keywords:" line, feature chips that
// repeat the stats, the same sentence and button on every tool / module card).
export const dataAnalyticsCourse: CourseContent = {
  slug: "data-analytics",
  courseName: "Advanced Data Analytics Hero Program",
  sourceName: "Data Analytics Course Page",

  seo: {
    title: "Data Analytics Course in Mumbai | Data Analyst Training",
    description:
      "110-hour advanced data analytics course in Mumbai — Excel, SQL, Python & Power BI with hands-on projects and placement assistance.",
    keywords: [
      "data analyst full course",
      "advanced data analytics",
      "data analytics course Mumbai",
      "data analyst course Mumbai",
      "data analytics training",
      "business intelligence course",
      "power bi and tableau course",
      "master data analytics",
    ],
    image: "/og-images/courses-bi-courses-data-analytics-og.webp",
  },

  schema: {
    name: "Advanced Data Analytics Hero Program: Full Course in Mumbai",
    description:
      "Master the data analyst full course in Mumbai with 110 hours of intensive training. Advanced data analytics, Python, SQL & Power BI with job placement.",
    duration: "P3M",
    howTo: {
      name: "How to Enroll in CDPL Advanced Data Analytics Program",
      description: "A step-by-step guide to enrolling in our 110-hour intensive Data Analytics training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive Python, SQL, Power BI, and Tableau modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master data analytics, business intelligence, and dashboarding to secure top data analyst roles.",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Advanced Data Analytics",
    badges: [
      { icon: "star", text: "Mumbai’s Premium Training Institute" },
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "layers", text: "Project-based" },
    ],
    h1: "Advanced [[Data Analytics]] Hero Program: Full Course in Mumbai",
    subtitle:
      "Master the **data analyst full course** in Mumbai with 110 hours of intensive training. From **advanced data analytics** to business intelligence, we prepare you for high-impact roles with **Interviews** and 5+ real-time projects.",
    description:
      "Become a **certified data analyst** with mastery in Python, SQL, Power BI, and Tableau. Our **data analytics training** in Mumbai/Thane focuses on 80% practical labs and industry-ready dashboard deployments.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Advanced Data Analytics course" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% hands-on labs with mentor feedback",
      "90+ Case Studies & 5+ Real-time Projects",
      "SQL mastery: joins, CTEs, window functions",
      "Interviews & Placement Support",
    ],
  },

  stats: {
    heading: "Why Choose Our [[Advanced Data Analytics]] Hero Program?",
    intro:
      "Join Mumbai's most intensive **data analytics training**. We don't just teach tools; we build careers. With a {rating} rating and a legacy of **strong placement outcomes**, we are the **comprehensive institute for data analytics** in Mumbai and Thane.",
    items: [
      { value: "110 Hours", label: "Comprehensive Training", note: "Python • SQL • BI • ML" },
      { value: "80 : 20", label: "Practical : Theory", note: "Projects • Labs • Code Reviews" },
      { value: "14+", label: "Years Expertise", note: "Mentor-led • Industry-Aligned" },
      { value: "100%", label: "Job Assistance", note: "Resume • Mock Interviews • Referrals" },
      { value: "1 : 1", label: "Doubt Solving", note: "Live Support • Code Walkthroughs" },
      { value: "AAA", label: "Global Certification", note: "Verifiable • Resume-Ready" },
    ],
    footnote: "*Outcomes vary by prior experience, pace, and project depth.",
    outro:
      "Master **dashboards & reporting** (Power BI/Tableau), **SQL for analytics**, **feature engineering**, and **ML for business** with **career support**.",
  },

  why: {
    heading: "Advanced Data Analytics - [[A Complete Career Overview]]",
    intro:
      "In 2025-2026, the demand for **certified data analysts** is at an all-time high. Our **data analyst full course** covers every aspect of the data lifecycle, from SQL modeling to advanced BI storytelling.",
    cards: [
      {
        icon: "barChart",
        title: "BI Dashboards that Drive Action",
        description:
          "Design KPI-focused dashboards in Power BI and Tableau using best-practice layouts, DAX/LOD, and drill-through analytics.",
      },
      {
        icon: "database",
        title: "SQL & Data Modeling",
        description:
          "Write production-grade SQL, build star/snowflake schemas, and optimize queries with indexing, CTEs, and window functions.",
      },
      {
        icon: "lineChart",
        title: "Predictive Analytics",
        description:
          "Use Python (pandas, scikit-learn) for regression, classification, feature engineering, and model evaluation with real datasets.",
      },
      {
        icon: "brain",
        title: "Analytics Storytelling",
        description:
          "Turn insights into narratives with benchmarks, comparisons, and context that help stakeholders make decisions fast.",
      },
      {
        icon: "server",
        title: "ETL & Data Prep",
        description: "Cleanse, transform, and join data reliably. Automate refreshes and publish governed datasets for teams.",
      },
      {
        icon: "shieldCheck",
        title: "Governance & QA",
        description: "Validate metrics, manage access, and add documentation so analytics are trusted across the business.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "What you’ll learn (and build)",
        text: "From **data cleaning** and **SQL modeling** to **visual analytics** and **machine learning**, this program ensures you can ship real analytics. You’ll create KPI suites, cohort/retention views, forecasting models, and stakeholder-ready dashboards with clear documentation and measurable outcomes.",
      },
      {
        kind: "list",
        items: [
          "Portfolio-first approach: publish dashboards and notebooks recruiters can review.",
          "End-to-end pipeline: from raw data → modeling → visualization → business impact.",
          "Interview-ready: metrics, case studies, and SQL challenges with solutions.",
          "Tooling: Power BI, Tableau, SQL, Python, and Excel for production reporting.",
        ],
      },
      {
        kind: "stats",
        title: "Quick Facts",
        items: [
          { value: "≈ 110 Hours", label: "Duration" },
          { value: "Project-Based", label: "Learning Mode" },
          { value: "None", label: "Prerequisites" },
          { value: "Job-Ready Portfolio", label: "Outcome" },
        ],
      },
    ],
  },

  curriculum: {
    heading: "5-Core Curriculum Modules: Your Data Analytics Roadmap",
    intro:
      "An industry-aligned data analytics pathway from clean data and statistics to dashboards, predictive modeling, and BI decisioning.",
    modules: [
      {
        title: "Data Preparation & Cleaning",
        topics: [],
        outcome:
          "Master data wrangling, profiling, missing-value strategy, outlier treatment, text/date handling, and reproducible ETL.",
      },
      {
        title: "Statistical Analysis & Modeling",
        topics: [],
        outcome:
          "Apply descriptive & inferential statistics, hypothesis testing, confidence intervals, and regression for trustworthy insights.",
      },
      {
        title: "Data Visualization & Storytelling",
        topics: [],
        outcome:
          "Design compelling dashboards (Power BI / Tableau), choose the right chart, add interaction, and craft business narratives.",
      },
      {
        title: "Predictive Analytics & Forecasting",
        topics: [],
        outcome:
          "Build & validate predictive models (classification, regression, time series), evaluate with the right metrics and guard against leakage.",
      },
      {
        title: "Business Intelligence & Decision Making",
        topics: [],
        outcome:
          "Translate insights into action: KPIs, experiment design, executive-ready decks, and data products that drive decisions.",
      },
    ],
    moduleNote: "Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.",
    ctas: [
      { label: "Download Detailed Syllabus (PDF)", kind: "syllabus" },
      { label: "Book a Career Session", kind: "careerSession" },
      { label: "Apply Now", kind: "enroll" },
    ],
  },

  tools: {
    heading: "Tools & Technologies Mastered in This Data Analytics Course",
    intro:
      "Learn the exact tech stack used by Amazon, Google, and TCS. Build real, job-ready skills across **data analyst full course** essentials: **data wrangling**, **SQL modeling**, **dashboard design**, and **predictive analytics**.",
    items: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg", description: "Scripting" },
      { name: "SQL", icon: "database", description: "Queries" },
      { name: "Power BI", logo: "/techstack_logos/power-bi-logo.svg", description: "Dashboards" },
      { name: "Tableau", logo: "/techstack_logos/tableau-logo.svg", description: "Visual Analytics" },
      { name: "Excel (Advanced)", logo: "/techstack_logos/excel-logo.svg", description: "Analysis" },
      { name: "pandas", logo: "/techstack_logos/pandas-logo.svg", description: "DataFrames" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg", description: "Numerics" },
      { name: "R", logo: "/techstack_logos/r-logo.svg", description: "Stats" },
    ],
    itemNote:
      "Master each tool to build production-grade analytics: clean data, model KPIs, visualize trends, and present insights stakeholders can act on.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "8+ Core Tools", label: "Hands-On Stack", note: "From raw data → insights" },
          { value: "Dashboards & Notebooks", label: "Portfolio Output", note: "Power BI • Tableau • Python" },
          { value: "Analyst • BI • DS", label: "Hiring Fit", note: "Skills mapped to roles" },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your Roadmap to Becoming a Data Analyst in 4 Steps",
    intro:
      "Follow these 4 proven steps to move from learner to job-ready Analytics professional with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 110-Hour Analytics Hero Program",
        badge: "Job-Ready Foundations",
        description:
          "Excel-to-ETL, SQL, Python (Pandas/NumPy), Statistics, BI dashboards (Power BI / Tableau), and ML-lite for forecasting & classification.",
      },
      {
        title: "Build 3 Portfolio Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship a KPI dashboard, an A/B testing analysis, and a predictive model. Host on GitHub & share interactive links.",
      },
      {
        title: "Career Prep & Mock Interviews",
        badge: "Interview Readiness",
        description:
          "Resume/LinkedIn revamp, SQL & case-study drills, analytics storytelling, and BI scenario interviews with feedback.",
      },
      {
        title: "Apply & Land an Analytics Role",
        badge: "Offer & Onboarding",
        description:
          "Target roles: Data Analyst, BI Developer, Analytics Engineer, Product Analyst (₹7–14 LPA depending on location & skills).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "~ 12–14 Weeks", label: "Program Duration", note: "110 hours guided learning" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹7–14 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    outro: "Learn from anywhere. **Your journey to an Analytics career starts here.**",
    ctas: [
      { label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized analytics roadmap guidance" },
    ],
  },

  projects: {
    heading: "Real-Time Industry Projects & Capstones",
    intro:
      "Apply **Advanced Analytics** to real business challenges. Build a **job-ready portfolio** with clean code, clear storytelling, and measurable impact.",
    items: [
      {
        icon: "lineChart",
        title: "Sales Forecasting Dashboard",
        description: "Predict weekly/monthly sales and visualize KPIs for regions, categories, and channels.",
        features: ["ARIMA/Prophet vs. ML regressors", "Backtesting & seasonality analysis", "Executive-ready KPI views"],
        tags: ["Python", "Pandas", "Prophet", "Plotly"],
      },
      {
        icon: "users",
        title: "Customer Segmentation Model",
        description: "Create actionable cohorts to improve targeting, retention, and LTV.",
        features: ["RFM scoring", "K-Means/DBSCAN + validation", "Cohort playbooks"],
        tags: ["scikit-learn", "NumPy", "Seaborn"],
      },
      {
        icon: "barChart",
        title: "BI Reporting System",
        description: "Build an interactive BI layer with drill-downs, filters, and scheduled refresh.",
        features: ["Star/Snowflake modeling", "Row-level security", "Automated refresh jobs"],
        tags: ["Power BI", "DAX", "Gateway", "SQL"],
      },
      {
        icon: "percent",
        title: "Churn Prediction Pipeline",
        description: "Predict and explain churn risk with interpretable ML and business levers.",
        features: ["Imbalance handling (SMOTE/weights)", "ROC/PR & calibration", "SHAP insights"],
        tags: ["scikit-learn", "XGBoost", "SHAP"],
      },
      {
        icon: "database",
        title: "SQL Data Warehouse & ETL",
        description: "Ingest, clean, and model raw data into analytics-ready marts.",
        features: ["Incremental loads", "SCD handling", "Quality checks & lineage"],
        tags: ["SQL", "dbt", "Airflow", "S3/BigQuery"],
      },
      {
        icon: "settings",
        title: "A/B Testing & Uplift Analysis",
        description: "Design experiments, estimate uplift, and recommend rollouts.",
        features: ["Power & sample sizing", "Bayesian/Classic inference", "Uplift modeling"],
        tags: ["Python", "SciPy", "Matplotlib"],
      },
    ],
    outro:
      "These **industry-aligned projects** showcase real metrics, clean engineering, and clear communication—exactly what **hiring managers** expect for **Data Analyst**, **Analytics Engineer**, and **BI Developer** roles.",
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Real feedback from graduates of our **Advanced Data Analytics** program—covering **Power BI**, **Tableau**, **SQL**, **Python**, and **predictive modeling**. Built for job-ready outcomes and recruiter-friendly portfolios.",
  },

  career: {
    eyebrow: "101,000+ Job Vacancies in India",
    heading: "Placement Partners & Career Opportunities in Mumbai",
    intro:
      "Careers across data analytics, business intelligence, data engineering lite, and strategic decision-making.",
    rolesTitle: "Target Roles",
    roles: ["Data Analyst", "BI Analyst", "Analytics Engineer", "Product Analyst", "Business Analyst"],
    companiesTitle: "Companies Hiring Data Analytics Professionals",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "HCLTech", "IBM"],
    companiesNote: "Pan-India • Product & Services • Startup & Enterprise",
    ctas: [
      {
        label: "Apply for Placement Assistance",
        kind: "careerSession",
        ariaLabel: "Apply for placement assistance in analytics roles",
      },
      { label: "Download Job-Ready Syllabus (PDF)", kind: "syllabus" },
    ],
  },

  audience: {
    heading: "Is This Data Analyst Full Course Right for You?",
    intro:
      "Whether you’re starting out or leveling up, this **Advanced Data Analytics** program turns **Python**, **SQL**, **BI**, and **ML fundamentals** into measurable career outcomes-portfolio projects, practical tooling, and interview-ready confidence.",
    items: [
      {
        icon: "graduationCap",
        title: "Students & Fresh Graduates",
        description:
          "Start your analytics journey from zero—learn Python/SQL, BI dashboards, and decision-making with real datasets.",
        points: ["No prior experience required", "Guided projects + mentor feedback"],
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description:
          "Upskill to data-driven roles in product, finance, marketing, or operations using BI, analytics, and automation.",
        points: ["Industry case studies", "Pandas • Power BI • SQL"],
      },
      {
        icon: "barChart",
        title: "Business Analysts",
        description:
          "Level up from reports to insights—model KPIs, build interactive dashboards, and run experiments that move metrics.",
        points: ["Storytelling with data", "A/B testing & forecasting basics"],
      },
      {
        icon: "repeat",
        title: "Career Switchers",
        description:
          "Transition into high-demand analytics roles with a portfolio that proves hands-on skills and business impact.",
        points: ["Interview prep + ATS resume", "Placement assistance"],
      },
    ],
    outro:
      "Ideal for **students**, **working professionals**, **business analysts**, and **career switchers** targeting **Data Analyst**, **Analytics Engineer**, and **BI Developer** roles.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    heading: "Frequently Asked Questions About the Data Analytics Course",
    intro:
      "Everything you need to know about our **Advanced Data Analytics** program—curriculum, tools, projects, and **career support**.",
    items: DATA_ANALYTICS_FAQS,
  },

  cta: {
    heading: "Ready to Master [[Advanced Data Analytics?]]",
    intro:
      "Don't get left behind in the data revolution. Join the **Hero Program** today and secure your future with **placement assistance** and hands-on tool mastery covering **Power BI**, **Tableau**, **SQL**, and **Python**.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions at +91 7888383788" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email admissions at contact@cinutedigital.com" },
      { label: "Download Syllabus", kind: "syllabus", ariaLabel: "Download the Advanced Data Analytics syllabus" },
    ],
    highlights: [
      { icon: "award", title: "International Certification", description: "QR-verifiable" },
      { icon: "briefcase", title: "End-to-End Placement Support", description: "Resume • Mock Interviews" },
      { icon: "trophy", title: "Job-Ready Portfolio", description: "Dashboards & Notebooks" },
    ],
    footnotes: [
      { icon: "check", text: "No prerequisites required. Flexible batches." },
      { icon: "clock", text: "Seats fill fast-secure yours today." },
    ],
  },
};

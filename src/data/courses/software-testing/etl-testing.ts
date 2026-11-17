import type { CourseContent } from "@/types/course-page";
import { ETL_TESTING_FAQS } from "@/data/courses/software-testing/faqs/etl-testing";

// Content for /courses/software-testing-course/etl-testing, moved from the old
// src/components/etl-testing/* sections. Kept word for word except repeated
// filler (the same caption under every stat / module / tool / project, a
// year-only eyebrow, a "starts in 3 days" countdown).
export const etlTestingCourse: CourseContent = {
  slug: "etl-testing",
  courseName: "ETL Testing",
  sourceName: "ETL Testing Course Page",

  seo: {
    title: "ETL Testing Course in Mumbai | SQL & Data Validation",
    description:
      "Learn ETL testing, SQL queries, data-warehouse validation & data-quality checks with real projects. Job-oriented training in Mumbai with placement assistance.",
    keywords: [
      "what is etl testing",
      "what is etl",
      "etl testing",
      "etl developer",
      "etl automation testing tools",
      "etl testing training",
      "etl testing course",
      "etl tester roles and responsibilities",
      "etl vs elt",
      "etl testing tutorial",
      "etl testing tools",
      "etl automation testing",
      "etl testing means",
      "etl and elt",
      "etl developer skills",
      "etl testing interview questions",
      "sql queries for etl testing",
    ],
    image: "/og-images/courses-software-testing-course-etl-testing-og.webp",
  },

  schema: {
    name: "ETL Testing Course",
    description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
    duration: "PT18H",
    howTo: {
      name: "How to Enroll in CDPL ETL Testing Course",
      description: "A step-by-step guide to enrolling in our specialized Data Validation program.",
      steps: [
        { name: "Review Curriculum", text: "Analyze the ETL vs ELT operations, data pipelining, and query optimization structure." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        { name: "Start Learning", text: "Master data reconciliation, build extraction architectures, and get certified!" },
      ],
    },
  },

  hero: {
    breadcrumb: "ETL Testing",
    badges: [
      { icon: "clock", text: "18-Hour Master Program" },
      { icon: "calendar", text: "Weekend & Evening Slots" },
    ],
    h1: "Master [[ETL Testing]] with SQL & Enterprise Tools – Placement Support",
    subtitle:
      "Understand **what is ETL testing** and validate data at every stage—**extract**, **transform**, and **load**. Learn practical skills in *dataset profiling, schema checks, reconciliation, and automation* to ensure accurate BI & analytics. This **ETL testing course** is your gateway to becoming an **ETL developer**.",
    description:
      "Topics: **ETL vs ELT**, **what is ETL in data warehouse**, SQL data quality rules, SCD types, partitioning, orchestration basics, CI/CD integration, and audit-ready reporting. Master **ETL testing tools** like Informatica and Talend.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in ETL Testing program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with real **ETL pipeline** datasets",
      "Data quality rules & **SQL reconciliation** tests",
      "Interview prep & **ETL testing interview questions** portfolio",
      "QR-verified global certification",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "repeat", title: "80% Hands-On", description: "Test real ETL/ELT data pipelines end-to-end" },
      { icon: "users", title: "Expert Mentors", description: "15+ yrs in Data Warehousing & BI" },
      { icon: "award", title: "Global Certification", description: "ETL + SQL certificate with QR verification" },
      { icon: "briefcase", title: "Placement", description: "Resume, mock interviews & referrals" },
    ],
  },

  stats: {
    heading: "Real-World Outcomes: [[ETL Testing]] Program Snapshot",
    intro:
      "Figures sourced from the official ETL Testing & Development brochure: total training time, curriculum depth, hands-on capstones, and mapped job roles-so you know exactly what you’ll get.",
    items: [
      { value: "100 Hours", label: "Total Training" },
      { value: "10 Modules", label: "Structured Curriculum" },
      { value: "2 Capstone Projects", label: "Hands-on Learning" },
      { value: "5 Job Roles", label: "Career Pathways" },
    ],
    footnote: "Verified from the official program: duration, curriculum items, capstone projects, and job-role mapping.",
    outro:
      "The program blends **ETL/ELT fundamentals**, **SQL validation**, **automation** (Python/Selenium), and modern platforms (Talend, Informatica, Snowflake, Power BI) with **capstone delivery** aligned to real job roles.",
  },

  why: {
    heading: "Why Master [[ETL Testing]] in 2026?",
    intro:
      "Data powers every decision. **What is ETL testing?** It ensures your datasets are **accurate**, **compliant**, and **analytics-ready**—from raw extract to trusted dashboards. The **ETL process** is the backbone of any **data warehouse**.",
    cards: [
      {
        icon: "check",
        title: "99.9% Data Accuracy",
        description: "Prevent costly BI & dashboard errors with strict reconciliation and schema checks. Master SQL queries for ETL testing.",
      },
      {
        icon: "zap",
        title: "10x Faster Validation",
        description: "Automate ETL/ELT test suites for repeatable, audit-ready data quality. Learn ETL automation testing tools.",
      },
      {
        icon: "shield",
        title: "Compliance-Ready",
        description: "GDPR, HIPAA, SOX-aligned test evidence with verifiable logs & reports. Align with ETL tester roles and responsibilities.",
      },
      {
        icon: "database",
        title: "Pipeline Reliability",
        description: "Validate sources, transforms, partitions, and loads that power analytics & ML. Understand what is ETL pipeline.",
      },
      {
        icon: "globe",
        title: "Global Demand",
        description: "Every industry depends on governed data—finance, health, e-commerce, SaaS. The ETL developer role is critical.",
      },
      {
        icon: "trendingUp",
        title: "Higher Salaries",
        description: "ETL testing specialists earn up to 30% more than generic QA roles. Develop ETL developer skills that pay.",
      },
    ],
    outro:
      "Validate **schemas**, **transforms**, **partitions**, and **loads**. Automate **reconciliation**, generate **audit-ready reports**, and boost reliability for **BI**, **ML**, and **data platforms**. Develop **ETL developer skills** that companies pay for.",
  },

  curriculum: {
    heading: "Industry-Ready [[ETL Testing]] Curriculum",
    intro:
      "From **what is ETL** basics to advanced **ETL automation testing**. Learn **DW architecture**, **SQL-based ETL validation**, **manual & automated testing**, and development with **Talend** and **Informatica**. Wrap up with **capstone projects** integrating Snowflake, SnapLogic, and Power BI. This **ETL testing training** prepares you for real **ETL testing interview questions**.",
    modules: [
      {
        title: "Introduction to ETL",
        duration: "2 Hours",
        topics: ["Overview of ETL vs ELT", "Importance in data pipelines", "Roles: ETL testers & developers"],
      },
      {
        title: "Data Warehousing Concepts",
        duration: "4 Hours",
        topics: ["DW architecture", "Star vs Snowflake schema", "Relational vs Dimensional models"],
      },
      {
        title: "SQL for ETL Testing",
        duration: "16 Hours",
        topics: ["Basic to advanced SQL", "Data validation with SQL", "Debugging SQL-based ETL jobs"],
      },
      {
        title: "Manual ETL Testing",
        duration: "10 Hours",
        topics: ["Test plans & strategy", "Test case design (completeness & accuracy)", "Defect management"],
      },
      {
        title: "Automation in ETL Testing",
        duration: "20 Hours",
        topics: ["Python-based automation", "Selenium for ETL validation", "Parameterization & reporting"],
      },
      {
        title: "Talend for ETL Development",
        duration: "10 Hours",
        topics: ["Talend Studio essentials", "tMap & tJoin", "Dynamic schemas", "Multi-source integration"],
      },
      {
        title: "Informatica for ETL Development",
        duration: "10 Hours",
        topics: ["Workflows", "Transformations", "Debugging", "Optimization"],
      },
      {
        title: "Data Transformation & Validation",
        duration: "10 Hours",
        topics: ["Null handling", "Deduplication", "Business rules", "Real-time validation"],
      },
      {
        title: "ETL Tools Overview",
        duration: "10 Hours",
        topics: ["Snowflake", "SnapLogic", "Power BI in ETL workflows"],
      },
      {
        title: "Capstone Projects",
        duration: "8 Hours",
        topics: [
          "Retail sales data ETL testing",
          "E-commerce ETL design & validation",
          "Multi-tool integration (Talend, Informatica, Python, Selenium)",
          "Insights & reporting with Power BI",
        ],
      },
    ],
    moduleNote: "Outcomes: hands-on labs, checklists, and review rubrics to validate every ETL stage (extract → transform → load).",
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Get Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    eyebrow: "Enterprise-grade stack • Job-ready workflows",
    heading: "[[Tools]] You’ll Master",
    intro:
      "Learn the **ETL & orchestration** platforms used across data teams—hands-on, project-driven, and hiring manager approved.",
    items: [
      { name: "SQL Developer", logo: "/techstack_logos/Oracle-logo.svg" },
      { name: "Informatica", logo: "/techstack_logos/informatica-logo.svg" },
      { name: "Talend", logo: "/techstack_logos/talend-logo.svg" },
      { name: "Datastage", icon: "fileText" },
      { name: "SSIS", logo: "/techstack_logos/sql-server-logo.svg" },
      { name: "Control-M", logo: "/techstack_logos/control-m-logo.svg" },
    ],
    itemNote: "Practice real **ETL jobs**, **reconciliation checks**, and **schedule automation**.",
    outro:
      "Apply each tool to **data quality rules**, **job orchestration**, and **audit-ready reporting** so your pipelines are reliable, observable, and production-ready.",
  },

  projects: {
    heading: "Test Real [[ETL Pipelines]]",
    intro:
      "Work on **enterprise-grade data flows** used by banks, e-commerce leaders, and healthcare providers. Build a portfolio recruiters can verify and trust.",
    items: [
      {
        icon: "building",
        title: "Banking Data Warehouse",
        description:
          "Validate 10M+ core-banking transactions into an enterprise DWH with end-to-end reconciliation and SCD handling.",
        features: ["Count Match", "Sum Validation", "Data Completeness", "SCD Type 2"],
      },
      {
        icon: "shoppingCart",
        title: "E-Commerce ETL Pipeline",
        description: "Verify orders, inventory, and customer entities across multi-source feeds with robust data-quality rules.",
        features: ["Duplicate Check", "NULL Handling", "Reference Integrity", "Threshold Alerts"],
      },
      {
        icon: "heart",
        title: "Healthcare Claims ETL",
        description: "Ensure HIPAA-ready pipelines with PII masking, lineage tracking, audit logs, and safe re-run strategies.",
        features: ["PII Masking", "Data Lineage", "Error Logging", "Re-run Strategy"],
      },
    ],
    extras: [
      { kind: "text", text: "**Deliverables:** test design, SQL evidence, reconciliation logs, and audit-ready reports." },
    ],
    outro:
      "Validate **extract**, **transform**, and **load** stages with **reconciliation rules**, **schema checks**, and **error handling** to ensure analytics-ready data for BI & ML.",
  },

  testimonials: {
    eyebrow: "Verified student feedback • Outcomes-based learning",
    heading: "Success [[Stories]]",
    outro:
      "Real outcomes include **faster placements**, **salary jumps**, and **portfolio-ready projects** in banking, e-commerce, and healthcare data platforms.",
  },

  career: {
    eyebrow: "85,000+ openings • Avg salary ₹6–14 LPA",
    heading: "High-Paying [[ETL Testing]] Careers",
    intro:
      "Break into **Data QA**, **DWH Testing**, and **BI Quality** roles. The average **ETL developer** salary is attractive. Learn the **ETL tester roles and responsibilities** that hiring managers seek. We prepare you for common **ETL testing interview questions**.",
    rolesTitle: "Job Roles",
    roles: [
      "ETL Tester",
      "Data QA Engineer",
      "DWH Tester",
      "BI Tester",
      "Data Validation Analyst",
      "SQL Tester",
      "Informatica Tester",
      "Talend Tester",
    ],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Cognizant", "Accenture", "Capgemini", "Wipro", "HCL", "IBM"],
    companiesNote: "Plus 500+ startups & MNCs across fintech, retail, healthcare, and SaaS.",
    outro: "Growth tracks: **Senior ETL Tester → Test Lead → Data Quality Manager**",
    ctas: [{ label: "Get Placement Support", kind: "careerSession", ariaLabel: "Get placed in 30 days" }],
  },

  audience: {
    eyebrow: "Beginner-friendly • Mentor-led • Job-focused",
    heading: "Who Should [[Join]]?",
    intro:
      "No prior **ETL** experience needed. Wondering **what is ETL process** and if this is for you? If you want to work with **data quality**, **data warehouses**, and **analytics pipelines**, this **ETL testing course** is for you.",
    items: [
      {
        icon: "users",
        title: "Career Switchers",
        description: "Non-tech professionals moving into high-growth Data QA roles. Learn what is ETL from basics.",
      },
      { icon: "graduationCap", title: "Fresh Graduates", description: "BSc, BTech, BCA students seeking job-ready ETL testing training skills." },
      {
        icon: "briefcase",
        title: "Manual Testers",
        description: "Upskill from UI/functional testing to data quality & DWH testing. Understand ETL vs ELT.",
      },
      {
        icon: "target",
        title: "SQL Learners",
        description: "Apply SQL to real ETL/ELT pipelines, reconciliation & reporting. Master SQL queries for ETL testing.",
      },
    ],
    outro:
      "Build confidence with **real ETL/ELT scenarios**, **SQL reconciliation**, and **audit-ready reporting**—skills that hiring managers value for Data QA and DWH roles.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    intro:
      "Learn how our **mentor-led** program prepares you for **ETL / ELT pipelines**, **data quality**, and **industry certifications** with job assistance. Get answers to common **ETL testing interview questions with answers**.",
    items: ETL_TESTING_FAQS,
  },

  cta: {
    eyebrow: "Mentor-led • Job Assistance • QR-Verified Certificate",
    heading: "Become an [[ETL Testing]] Expert",
    intro:
      "Master **what is ETL testing**, **SQL for data validation**, and **ETL tools** in 18 hours. Limited seats. Join our **ETL testing training** in Mumbai/Thane.",
    actions: [
      { label: "Call Admissions", kind: "tel", ariaLabel: "Call admissions" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email admissions" },
      {
        label: "Book Free Demo",
        kind: "link",
        href: "https://calendar.app.google/tvh9dsXZsX9BujRR8",
        ariaLabel: "Book a free demo session",
      },
    ],
    highlights: [
      { icon: "clock", title: "18-Hour Live Training", description: "Weekend batches with recordings and post-class practice tasks." },
      { icon: "award", title: "Global Certification", description: "QR-verified digital credential accepted by top employers." },
      { icon: "check", title: "Job Assistance", description: "Resume support, mock interviews, referrals, and portfolio review." },
    ],
    footnotes: [{ icon: "mapPin", text: "Mira Road & Vasai, Maharashtra • Live Online & Classroom" }],
  },
};

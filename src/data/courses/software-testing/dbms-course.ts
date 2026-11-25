import type { CourseContent } from "@/types/course-page";
import { DBMS_FAQS } from "@/data/courses/software-testing/faqs/dbms-course";

// Content for /courses/software-testing-course/dbms-course, moved from the old
// src/components/dbms-course/* sections. Kept word for word except repeated
// filler (per-card "Essential" / "Project" chips, the same outcome line under
// every module, a stats SEO line repeating the Why outro, a stale intake year).
export const dbmsCourse: CourseContent = {
  slug: "dbms-course",
  courseName: "MySQL DBMS",
  sourceName: "DBMS Course Page",

  seo: {
    title: "MySQL Database Course | Job Placement | 20-Hour Training",
    description:
      "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
    keywords: [
      "MySQL course",
      "SQL training",
      "database management",
      "MySQL certification",
      "DBA jobs India",
      "database design course",
      "SQL query optimization",
      "relational database management system",
      "backend development with MySQL",
    ],
    image: "/og-images/courses-software-testing-course-dbms-course-og.webp",
  },

  schema: {
    name: "MySQL Database Management System Course",
    description:
      "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
    duration: "PT20H",
  },

  hero: {
    breadcrumb: "MySQL Course",
    badges: [
      { icon: "star", text: "{rating} Rated" },
      { icon: "users", text: "Mentor-Led Cohorts" },
      { icon: "globe2", text: "Live Online & Classroom" },
    ],
    h1: "Database Management System using [[MySQL]]",
    subtitle:
      "Master **SQL queries**, **database design**, **normalization**, **indexing**, **transactions**, and **performance tuning**. Build scalable databases for web apps, analytics, and enterprise systems. Earn a verified certificate and portfolio-ready projects.",
    description:
      "Topics include ER modeling, stored procedures, joins, query optimization, backup & recovery, and deployment best practices.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in MySQL DBMS program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with project reviews",
      "Production-grade schema & indexing",
      "Interview prep & portfolio guidance",
      "QR-verified global certification",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "database", title: "80% Hands-On", description: "Build real databases from scratch" },
      { icon: "users", title: "Expert Faculty", description: "15+ yrs MySQL & Oracle certified" },
      { icon: "award", title: "Global Certification", description: "MySQL + SQL Certification" },
      { icon: "briefcase", title: "Placement", description: "Resume + Interview Prep" },
    ],
  },

  stats: {
    heading: "Real-World [[MySQL]] Metrics for [[Careers & Training]]",
    intro:
      "Verified indicators for **job demand**, **freshers’ salary**, **market growth**, and our concise **30-hour** program to get you job-ready.",
    items: [
      { value: "1,01,000+", label: "Job Vacancies in India" },
      { value: "4 LPA", label: "Freshers’ Average Salary" },
      { value: "25%", label: "Market Growth (2020–2030)" },
      { value: "30 Hours", label: "Program Duration" },
    ],
    footnote: "Data sourced from the program brochure.",
  },

  why: {
    eyebrow: "Beginner-friendly • Industry-relevant",
    heading: "Why Master [[MySQL]] in 2025?",
    intro:
      "Build production-ready skills for **backend engineering**, **QA automation**, **data analysis**, and **DevOps** using a battle-tested, high-performance relational database.",
    cards: [
      { icon: "database", title: "Powers Modern Platforms", description: "Run product catalogs, user data & analytics on proven MySQL engines." },
      { icon: "zap", title: "Optimized Query Speed", description: "Master indexing, EXPLAIN plans, caching, and query optimization." },
      { icon: "shield", title: "Secure & Compliant", description: "Built-in encryption, RBAC, auditing—supports GDPR & HIPAA controls." },
      { icon: "globe", title: "Scales to Millions", description: "Replication, clustering, and sharding for high-traffic apps." },
      { icon: "lock", title: "ACID Transactions", description: "Guarantee data integrity with InnoDB isolation & recovery." },
      { icon: "trendingUp", title: "High-Demand Skill", description: "Top hiring keyword across QA, Data, Backend & DevOps roles." },
    ],
    outro:
      "Learn **schema design**, **index strategies**, **query optimization**, **replication & backups**, and **security hardening** to stand out for **Database Developer**, **Backend Engineer**, and **Data Analyst** roles.",
  },

  curriculum: {
    heading: "Industry-Ready [[MySQL Curriculum]]",
    intro:
      "Learn **DBMS foundations**, **SQL (basic to advanced)**, **database design**, **administration & performance**, and build **production-style MySQL databases** through case studies and a capstone.",
    modules: [
      {
        title: "Module 1: Introduction to DBMS & MySQL",
        topics: [
          "Understanding DBMS: definition, importance, types (Relational, NoSQL, Hierarchical)",
          "Key concepts: data models, schemas, data independence",
          "Introduction to MySQL: overview, history, features",
          "Advantages & use cases in modern databases",
        ],
      },
      {
        title: "Module 2: Getting Started with MySQL",
        topics: [
          "Installation & setup: system requirements, MySQL Server/Workbench",
          "Basic configuration: user accounts, security settings",
          "MySQL interfaces: CLI basics",
          "MySQL Workbench: GUI features for design & queries",
        ],
      },
      {
        title: "Module 3: Database Design & Modeling",
        topics: [
          "Database design concepts: ER modeling (entities, relationships)",
          "Relational schema conversion from ER models",
          "Schema implementation: normalization (1NF–BCNF) & denormalization trade-offs",
          "Table creation: data types, keys, constraints; indexing basics (single/composite)",
        ],
      },
      {
        title: "Module 4: SQL Basics & Essential Clauses",
        topics: [
          "Basic SQL queries: SELECT, WHERE; retrieving data from single/multiple tables",
          "Essential filters: IN, BETWEEN, LIKE, IS NULL; ORDER BY, LIMIT/OFFSET",
          "MySQL operators: arithmetic, concatenation; logical & comparison operators",
          "Transactions intro: COMMIT/ROLLBACK for integrity",
        ],
      },
      {
        title: "Module 5: Advanced SQL",
        topics: [
          "Joins: INNER, LEFT, SELF, CROSS; USING & NATURAL JOIN",
          "Subqueries: scalar & correlated; UNION/UNION ALL",
          "Aggregations: GROUP BY, HAVING, aggregate functions; multi-level summaries",
          "Window functions: ROW_NUMBER, RANK, DENSE_RANK with OVER; running totals & moving averages",
        ],
      },
      {
        title: "Module 6: Database Administration",
        topics: [
          "User management: create accounts; grant/revoke; security best practices",
          "DDL/DML: CREATE/ALTER/DROP; INSERT/UPDATE/DELETE",
          "Backup & recovery: full/incremental with mysqldump; restore",
          "Query optimization: EXPLAIN, indexing strategies; B-tree, hash, full-text",
          "Server configuration: tuning parameters; slow query logs",
          "TCL & DCL: COMMIT/ROLLBACK/SAVEPOINT; GRANT/REVOKE",
        ],
      },
      {
        title: "Module 7: SQL Advanced Features",
        topics: ["Covered live during class with hands-on exercises"],
      },
      {
        title: "Module 8: SQL Objects",
        topics: [
          "Views: virtual tables for simplified access",
          "Stored procedures: reusable code blocks",
          "Functions & triggers: UDFs and automation",
          "CTEs & temporary tables: common patterns",
        ],
      },
      {
        title: "Module 9: Real-World Applications",
        topics: [
          "Case studies: sales/finance database designs; best practices",
          "Capstone project: design, implement, optimize a business-scenario DB",
        ],
      },
      {
        title: "Module 10: Assessment & Certification",
        topics: ["Final assessment test: practical & theoretical coverage", "Certification"],
      },
    ],
    moduleNote: "Outcomes: hands-on labs, performance drills, and a portfolio-ready capstone.",
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Get Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    eyebrow: "Enterprise-grade • DBA approved",
    heading: "[[Tools]] You’ll Master",
    intro:
      "Hands-on with **MySQL Workbench**, **DBeaver**, **phpMyAdmin**, **MySQL Shell**, **replication**, and **backup** utilities.",
    items: [
      { name: "MySQL Workbench", logo: "/techstack_logos/mysql-logo.svg" },
      { name: "DBeaver", logo: "/techstack_logos/dbeaver-logo.svg" },
      { name: "phpMyAdmin", logo: "/techstack_logos/phpmyadmin-logo.svg" },
      { name: "MySQL Shell", logo: "/techstack_logos/mysql-logo.svg" },
      { name: "Replication", icon: "gitBranch" },
      { name: "Backup Tools", icon: "lock" },
    ],
    outro:
      "Practice **schema design**, **query optimization**, **replication setup**, and **backup & restore** workflows to become **job-ready** for DBA, SQL Developer, and Data Engineer roles.",
  },

  projects: {
    eyebrow: "Portfolio-ready • Industry use cases",
    heading: "Build [[Real Databases]]",
    intro:
      "Design, optimize, and deploy **production-grade MySQL** schemas. Practice **indexing**, **transactions**, **query optimization**, and **backup & recovery**—skills recruiters search for.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-Commerce Database",
        description: "Multi-vendor marketplace: products, orders, reviews, inventory, and promotions.",
        features: ["Normalization", "Complex JOINs", "Triggers", "Stored Procedures"],
      },
      {
        icon: "building",
        title: "Inventory Management",
        description: "Real-time stock tracking with supplier integration and alerting.",
        features: ["Views", "Indexes", "Transactions", "Backup Strategy"],
      },
      {
        icon: "barChart",
        title: "Analytics Dashboard DB",
        description: "Sales, user behavior, and performance KPIs with optimized queries.",
        features: ["Window Functions", "Partitioning", "Materialized Views", "EXPLAIN"],
      },
    ],
    outro:
      "Showcase **real SQL schemas**, **EXPLAIN plans**, and **performance benchmarks** on GitHub to win interviews for **Database Developer**, **Backend Engineer**, and **Data Analyst** roles.",
  },

  testimonials: {
    heading: "Student Success [[Stories]]",
    intro:
      "Read verified reviews highlighting **job placements**, **query optimization**, and **portfolio-ready projects** built during the MySQL course.",
  },

  career: {
    eyebrow: "1,50,000+ openings • ₹5–12 LPA (India)",
    heading: "High-Paying [[MySQL]] Careers",
    intro:
      "Target roles across **Data**, **Backend**, and **BI** tracks. Build in-demand skills—schema design, indexing, SQL optimization, transactions, and analytics.",
    rolesTitle: "Job Roles",
    roles: [
      "Database Administrator",
      "SQL Developer",
      "Data Analyst",
      "Backend Developer",
      "BI Developer",
      "ETL Developer",
      "Data Engineer",
      "DB Architect",
    ],
    companiesTitle: "Top Companies Hiring",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "IBM", "Oracle"],
    companiesNote: "Plus fast-growing startups and global enterprises across fintech, e-commerce, SaaS, and consulting.",
    outro:
      "Stand out with **EXPLAIN plan analysis**, **index strategies**, **ETL pipelines**, and **reporting models**.",
    ctas: [{ label: "Get Placement Support", kind: "careerSession", ariaLabel: "Get placed with MySQL skills" }],
  },

  audience: {
    eyebrow: "Beginner-friendly • No prior coding required",
    heading: "Who Should [[Enroll]]?",
    intro:
      "Ideal for **career switchers**, **fresh graduates**, and **developers** who want practical expertise in **MySQL**, **SQL querying**, **schema design**, and **performance optimization**.",
    items: [
      { icon: "users", title: "Career Switchers", description: "Non-tech professionals transitioning to database & SQL roles" },
      { icon: "graduationCap", title: "Fresh Graduates", description: "BSc, BTech, BCA students seeking job-ready MySQL skills" },
      { icon: "briefcase", title: "Job Seekers", description: "Upskill from low-growth roles to in-demand SQL careers" },
      { icon: "target", title: "Developers", description: "Add database design, indexing & optimization to your stack" },
    ],
    outro:
      "Learn the essentials—**ER modeling**, **index strategies**, **transactions**, and **query optimization**—to stand out for **SQL Developer**, **Database Administrator**, and **Data Analyst** roles.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    intro: "Can’t find an answer? Contact our team for personalized guidance.",
    items: DBMS_FAQS,
  },

  cta: {
    eyebrow: "Next batch starting soon • Limited seats",
    heading: "Become a [[MySQL]] Expert Today",
    intro: "Talk to a mentor, get the full syllabus & fees, and reserve your seat for the upcoming cohort.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email us for course details" },
    ],
    highlights: [
      { icon: "clock", title: "20-Hour Live Training", description: "Weekend & evening batches" },
      { icon: "award", title: "Global Certification", description: "QR-verified digital certificate" },
      { icon: "check", title: "Job Assistance", description: "Resume, mock interviews & referrals" },
    ],
    footnotes: [
      { icon: "mapPin", text: "Mira Road & Vasai, Maharashtra" },
      { icon: "message", text: "Prefer WhatsApp or a call-back? Email us and we’ll reach out within 24 hours." },
    ],
  },
};

// Shared content for every "Software Testing Course in <city>" page.
// Edit here to change all of them at once. Placeholders are filled per city:
// {{city}} location name, {{cityLower}} lower-case name, {{citySlug}} URL form,
// {{state}} state, {{slug}} this page's URL slug.
// A city that needs something different gets it in ../overrides/software-testing.ts.

import type { CityCourseTemplate } from "../types";

export const softwareTestingTemplate: CityCourseTemplate = {
  courseName: "Software Testing",
  specializations: [
    "Manual Testing",
    "Automation Testing",
    "API Testing",
    "Performance Testing",
    "Mobile App Testing",
    "Security Testing",
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Software Testing", href: "/courses/software-testing-course" },
    { label: "{{city}}", href: "/{{slug}}" },
  ],
  metadata: {
    title: "Software Testing Course in {{city}} | CDPL",
    description: "Comprehensive software testing course in {{city}}. Learn manual testing, automation, performance testing with industry experts. job placement support.",
    keywords: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course maharashtra",
  },
  courseDetails: {
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    language: "English & Hindi",
    price: "₹29,999",
    discountedPrice: "₹19,999",
  },
  heroContent: {
    title: "Master Software Testing in {{city}}",
    subtitle: "Industry-Recognized QA Testing Course",
    description: "Learn comprehensive software testing skills from industry experts in {{city}}. Master manual testing, automation, performance testing, and quality assurance to launch your career in tech.",
    certifications: ["ISTQB Certification Ready", "Industry-Recognized", "Hands-on Projects"],
    stats: [
      { number: "5000+", label: "Students Trained", description: "Successfully completed the course" },
      { number: "92%", label: "Job Placement", description: "Within 3 months of completion" },
      { number: "12", label: "Weeks Duration", description: "Intensive learning program" },
      { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
    ],
    landmarks: ["Bandra-Worli Sea Link", "Gateway of India", "Marine Drive", "Bombay Stock Exchange"],
  },
  courseOverviewContent: {
    title: "Course Modules",
    description: "Comprehensive modules covering all aspects of software testing",
    subtitle: "Learn industry-relevant skills with hands-on projects and real-world scenarios.",
    modules: [
      {
        icon: "CheckCircle",
        trending: true,
        name: "Manual Software Testing",
        description: "Master core testing fundamentals—techniques, plans, and defect workflows used in real projects.",
        topics: [
          "Test Case & Scenario Design",
          "Functional vs. Non-Functional Testing",
          "Bug Lifecycle & Reporting",
          "Exploratory & Regression Testing",
        ],
        link: "/courses/software-testing-course/manual-testing-course",
      },
      {
        icon: "Zap",
        trending: true,
        name: "API Testing using POSTMAN and RestAPIs",
        description: "Design, execute, and automate REST API tests with Postman and integrate them into CI pipelines.",
        topics: [
          "HTTP Methods & Status Codes",
          "Postman Collections & Environments",
          "Auth (Bearer/OAuth/JWT) & Headers",
          "Tests, Schemas & Newman CI",
        ],
        link: "/courses/software-testing-course/api-testing",
      },
      {
        icon: "BookOpen",
        trending: false,
        name: "Database Management System using MySQL",
        description: "Query and validate data with SQL—ensure integrity, performance, and clean test datasets.",
        topics: [
          "SQL CRUD, Joins & Subqueries",
          "Constraints, Keys & Transactions",
          "Normalization & Indexing",
          "Data Aggregation & Views",
        ],
        link: "/courses/software-testing-course/dbms-course",
      },
      {
        icon: "Gauge",
        trending: false,
        name: "ETL Testing Course",
        description: "Validate data pipelines—ensure accurate extraction, transformation, and loading across systems.",
        topics: [
          "Source-to-Target Mapping",
          "Data Quality & Reconciliation",
          "Incremental Loads & CDC",
          "SQL for ETL Validation",
        ],
        link: "/courses/software-testing-course/etl-testing",
      },
      {
        icon: "Shield",
        trending: true,
        name: "Advanced Software Testing",
        description: "Go beyond the basics—build strategies, manage risk, and measure quality with actionable metrics.",
        topics: [
          "Test Strategy & Risk-Based Testing",
          "Traceability & Coverage Techniques",
          "Test Management & Metrics",
          "Performance/Security Test Readiness",
        ],
        link: "/courses/software-testing-course/advance-software-testing",
      },
      {
        icon: "Smartphone",
        trending: true,
        name: "Advanced Automation Testing",
        description: "Engineer robust automation—framework design, CI/CD, parallel runs, and rock-solid reporting.",
        topics: [
          "Framework Design (POM/Modular)",
          "Selenium/WebDriver Best Practices",
          "CI/CD Integration & Newman/Allure",
          "Parallel/Cross-Browser & Flaky Test Fixes",
        ],
        link: "/courses/software-testing-course/automation-testing-course",
      },
      {
        icon: "Gauge",
        trending: true,
        name: "Advanced Manual & Automation Testing — Master Program",
        description: "End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.",
        topics: [
          "Risk-Based Strategy & Quality Metrics",
          "Advanced Test Design & Bug Advocacy",
          "Automation Frameworks (POM/Hybrid, API + UI)",
          "CI/CD, Parallel & Cross-Browser at Scale",
        ],
        link: "/courses/software-testing-course/advance-manual-automation-testing",
      },
    ],
  },
  curriculumContent: {
    title: "Detailed Curriculum",
    subtitle: "Choose a program tab to see its modules.",
    tracks: [
      {
        id: "manual-testing",
        title: "Manual Software Testing",
        weeks: [
          {
            number: "01",
            title: "Testing Fundamentals & SDLC",
            description: "Principles of testing, SDLC/STLC, test levels & types, QA vs QC.",
            deliverables: ["Glossary & notes", "mini quiz"],
          },
          {
            number: "02",
            title: "Requirements & Test Design",
            description: "SRS/BRD review, equivalence partitioning, boundary analysis, decision tables.",
            deliverables: ["15+ test cases", "review checklist"],
          },
          {
            number: "03",
            title: "Test Execution & Defect Lifecycle",
            description: "Test execution, defect reporting (JIRA), severity vs priority, RCA basics.",
            deliverables: ["Defect log", "RCA report"],
          },
          {
            number: "04",
            title: "Regression, UAT & Test Reporting",
            description: "Regression planning, UAT coordination, metrics & exit criteria.",
            deliverables: ["Test summary report", "UAT sign-off template"],
          },
        ],
      },
      {
        id: "api-postman-rest",
        title: "API Testing using POSTMAN and RestAPIs",
        weeks: [
          {
            number: "01",
            title: "HTTP & REST Basics",
            description: "HTTP verbs, status codes, headers, REST constraints, Postman setup.",
            deliverables: ["Workspace setup", "collection skeleton"],
          },
          {
            number: "02",
            title: "Postman Collections & Scripts",
            description: "Params, envs, pre-request scripts, assertions, Newman CLI runs.",
            deliverables: ["Parameterized collection", "CLI run report"],
          },
          {
            number: "03",
            title: "Auth, Chaining & Mock Servers",
            description: "Bearer/OAuth2, chaining requests, mock servers, data-driven testing.",
            deliverables: ["Auth-enabled suite", "Mock-based tests"],
          },
          {
            number: "04",
            title: "Contract & Negative Testing",
            description: "JSON schema validation, error handling, rate limits, retries.",
            deliverables: ["Schema files", "negative test pack"],
          },
        ],
      },
      {
        id: "dbms-mysql",
        title: "Database Management System using MySQL",
        weeks: [
          {
            number: "01",
            title: "SQL Foundations",
            description: "DDL, DML, DQL; SELECT, WHERE, ORDER BY, LIMIT; NULL handling.",
            deliverables: ["Practice queries set-1"],
          },
          {
            number: "02",
            title: "Joins & Aggregations",
            description: "INNER/LEFT/RIGHT joins, GROUP BY, HAVING, window functions basics.",
            deliverables: ["Join exercises", "analytics queries"],
          },
          {
            number: "03",
            title: "Constraints & Transactions",
            description: "PK/FK, indexes, ACID, transactions, isolation & locking.",
            deliverables: ["Schema with constraints", "TX scripts"],
          },
          {
            number: "04",
            title: "DB Testing",
            description: "Test data design, DB assertions from API/UI, backups & restores.",
            deliverables: ["DB test cases", "backup checklist"],
          },
        ],
      },
      {
        id: "etl-testing",
        title: "ETL Testing Course",
        weeks: [
          {
            number: "01",
            title: "ETL Concepts & Architecture",
            description: "Source-to-target mapping, staging, dimensional modeling (star/snowflake).",
            deliverables: ["STM document", "mapping sheet"],
          },
          {
            number: "02",
            title: "Data Validation Techniques",
            description: "Record counts, duplicates, constraints, referential integrity.",
            deliverables: ["Validation queries pack"],
          },
          {
            number: "03",
            title: "Transformations & SCD",
            description: "Common transforms, SCD types, incremental loads & CDC testing.",
            deliverables: ["SCD test suite"],
          },
          {
            number: "04",
            title: "Performance & Job Orchestration",
            description: "Batch windows, job dependency checks, error handling & re-runs.",
            deliverables: ["Runbook", "perf report"],
          },
        ],
      },
      {
        id: "advanced-software-testing",
        title: "Advanced Software Testing",
        weeks: [
          {
            number: "01",
            title: "Test Strategy & Risk-Based Testing",
            description: "Product risks, priority matrices, coverage heuristics.",
            deliverables: ["Risk register", "strategy doc"],
          },
          {
            number: "02",
            title: "Exploratory & Session-Based Testing",
            description: "Charters, time-boxing, debriefs, mind-maps.",
            deliverables: ["Session notes", "mind-map"],
          },
          {
            number: "03",
            title: "Non-Functional Testing Deep Dive",
            description: "Security, performance, reliability, accessibility overview for testers.",
            deliverables: ["NFR checklist"],
          },
          {
            number: "04",
            title: "Metrics, Dashboards & Storytelling",
            description: "Meaningful metrics, dashboards, stakeholder comms.",
            deliverables: ["QA dashboard", "weekly report"],
          },
        ],
      },
      {
        id: "advanced-automation",
        title: "Advanced Automation Testing",
        weeks: [
          {
            number: "01-02",
            title: "Framework Design",
            description: "POM, data-driven, modular, logging, reporting (Allure/JUnit).",
            deliverables: ["Starter framework repo"],
          },
          {
            number: "03",
            title: "Parallelism & CI/CD",
            description: "Grid/cloud runs, retries, flakiness control, CI integration.",
            deliverables: ["CI pipeline", "parallel suite"],
          },
          {
            number: "04",
            title: "API & Component Automation",
            description: "Hybrid UI+API strategies, contract tests, test pyramids.",
            deliverables: ["Hybrid suite", "pyramid doc"],
          },
        ],
      },
      {
        id: "master-program",
        title: "Advanced Manual and Automation Testing - Master Program",
        weeks: [
          {
            number: "01-02",
            title: "Testing Fundamentals & SDLC",
            description: "Introduction to software testing, SDLC models, testing types, and QA principles.",
            deliverables: ["Understanding of SDLC", "Testing concepts mastery", "First test case creation"],
          },
          {
            number: "03-04",
            title: "Manual Testing Mastery",
            description: "Deep dive into test design, execution, and defect lifecycle with JIRA.",
            deliverables: ["50+ test cases", "Defect reports", "Testing documentation"],
          },
          {
            number: "05-06",
            title: "Automation with Selenium",
            description: "WebDriver, waits, page objects, framework design, reporting.",
            deliverables: ["Automation framework", "20+ automated scripts", "Test execution reports"],
          },
          {
            number: "07-08",
            title: "API & Database Testing",
            description: "REST testing with Postman/Newman and DB assertions with MySQL.",
            deliverables: ["API test suite", "Database test cases", "Integration testing"],
          },
          {
            number: "09-10",
            title: "Performance & Security Basics",
            description: "Load/stress testing with JMeter and OWASP top 10 awareness.",
            deliverables: ["Performance report", "Security assessment"],
          },
          {
            number: "11-12",
            title: "Capstone & Interview Prep",
            description: "End-to-end project, portfolio, mock interviews & resume workshop.",
            deliverables: ["Capstone project", "Portfolio", "Interview preparation"],
          },
        ],
      },
    ],
  },
  toolsFrameworkContent: {
    title: "Tools & Technologies",
    description: "Learn industry-standard tools used by leading companies.",
    stats: { totalHours: "120+", projects: "8", mentorSupport: "24/7", jobPlacement: "95%" },
  },
  whyChooseContent: {
    title: "Why Choose Our Course?",
    subtitle: "Get trained by industry experts with real-world experience.",
    reasons: [
      {
        icon: "Award",
        title: "Expert Instructors",
        stats: "Industry-Led Training",
        description: "Learn from professionals with extensive industry experience.",
      },
      {
        icon: "Briefcase",
        title: "Job Placement",
        stats: "Placement Support",
        description: "Dedicated placement assistance and interview preparation.",
      },
      {
        icon: "Users",
        title: "Community Support",
        stats: "Active Alumni Network",
        description: "Join a thriving community of professionals and learners.",
      },
      {
        icon: "Clock",
        title: "Flexible Learning",
        stats: "Self-Paced Options",
        description: "Learn at your own pace with recorded sessions available.",
      },
    ],
    testimonial: {
      text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
      author: "Rahul Sharma",
      role: "QA Engineer at TechCorp",
      rating: 5,
    },
  },
  projectsContent: {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",
    projects: [
      {
        name: "E-Commerce Platform Testing",
        description: "Complete testing of an e-commerce application including manual and automation testing.",
        skills: ["Manual Testing", "Selenium", "Test Case Design", "Bug Reporting"],
        difficulty: "Intermediate",
      },
      {
        name: "Banking Application QA",
        description: "Security and performance testing of a banking application.",
        skills: ["Security Testing", "Performance Testing", "API Testing", "Database Testing"],
        difficulty: "Advanced",
      },
      {
        name: "Mobile App Testing Suite",
        description: "Comprehensive testing of a mobile application across multiple devices.",
        skills: ["Mobile Testing", "Appium", "Cross-Platform Testing", "Device Testing"],
        difficulty: "Intermediate",
      },
      {
        name: "CI/CD Pipeline Implementation",
        description: "Set up automated testing in a CI/CD pipeline with Jenkins.",
        skills: ["Automation Testing", "Jenkins", "Git Integration", "Test Reporting"],
        difficulty: "Advanced",
      },
    ],
  },
  careerPathContent: {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in QA and software testing.",
    paths: [
      {
        role: "QA Engineer",
        trending: true,
        description: "Perform manual and automated testing to ensure software quality.",
        salaryRange: "₹4-8 LPA",
        skills: ["Manual Testing", "Automation", "Test Planning", "Bug Reporting"],
        opportunities: ["Startups", "IT Companies", "Product Companies", "Consulting Firms"],
      },
      {
        role: "Automation Test Engineer",
        trending: true,
        description: "Develop and maintain automated test suites and frameworks.",
        salaryRange: "₹5-10 LPA",
        skills: ["Selenium", "API Testing", "Framework Design", "Scripting"],
        opportunities: ["Tech Giants", "Product Companies", "Testing Services", "Startups"],
      },
      {
        role: "Performance Test Engineer",
        trending: false,
        description: "Conduct performance and load testing to optimize applications.",
        salaryRange: "₹6-12 LPA",
        skills: ["JMeter", "LoadRunner", "Performance Analysis", "Optimization"],
        opportunities: ["Enterprise Companies", "Financial Services", "E-Commerce", "Tech Companies"],
      },
      {
        role: "QA Lead / Manager",
        trending: false,
        description: "Lead QA teams and manage testing strategies and processes.",
        salaryRange: "₹10-18 LPA",
        skills: ["Team Management", "Test Strategy", "Process Improvement", "Leadership"],
        opportunities: ["IT Companies", "Product Companies", "Consulting Firms", "Startups"],
      },
    ],
  },
  faqsContent: {
    title: "Frequently Asked Questions",
    subtitle: "Get answers to common questions about the course.",
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "No, this course is designed for beginners. We cover all fundamentals from scratch. Basic computer knowledge is sufficient to get started.",
      },
      {
        question: "What is the course duration?",
        answer: "The course is 12 weeks long with 120+ hours of content. You can complete it at your own pace with flexible learning options.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across India.",
      },
      {
        question: "What placement support do you provide?",
        answer: "Our placement team actively assists with job search and interviews after course completion.",
      },
      {
        question: "Can I access the course content after completion?",
        answer: "Yes, you get lifetime access to all course materials, including future updates and new content additions.",
      },
      {
        question: "Is there any refund policy?",
        answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked.",
      },
      {
        question: "What tools will I learn?",
        answer: "You'll learn Selenium, Appium, JMeter, Postman, Jenkins, and other industry-standard testing tools.",
      },
      {
        question: "Is there mentor support?",
        answer: "Yes, we provide 24/7 mentor support through chat, email, and scheduled calls. Our mentors are experienced QA professionals.",
      },
    ],
  },
  ctaContent: {
    title: "Ready to Start Your Testing Career?",
    description: "Join students who have successfully launched their QA careers.",
    subtitle: "Enroll now and get 20% discount for limited time.",
    benefits: [
      "Industry-recognized certificate",
      "Lifetime access to course materials",
      "24/7 mentor support",
      "Job placement assistance",
      "Real-world projects",
      "Interview preparation",
    ],
    contactInfo: { phone: "+91 84-889-889-84", email: "contact@cinutedigital.com", address: "{{city}}, {{state}}, India" },
  },
};

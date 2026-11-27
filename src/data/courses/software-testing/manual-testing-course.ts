import type { CourseContent } from "@/types/course-page";
import { MANUAL_TESTING_FAQS } from "@/data/courses/software-testing/faqs/manual-testing-course";

// Content for /courses/software-testing-course/manual-testing-course, moved from
// the old src/components/manual-testing-course/* sections. SEO copy (h1, headings,
// intros, curriculum, tools, projects, roles, FAQ) is kept; repeated filler
// (duplicate stat rows, per-card tags and "Start Project" buttons, a second
// learning-path block, hidden keyword text) and the page-only Instructor,
// Comparison and Other Courses sections were removed.
export const manualTestingCourse: CourseContent = {
  slug: "manual-testing-course",
  courseName: "Manual Testing",
  sourceName: "Manual Testing Course Page",

  seo: {
    title: "Manual Testing Course with Placement | QA Training Mumbai",
    description:
      "Master Manual Testing in 12 weeks. ISTQB prep, live projects, Jira & Agile training. Online & classroom batches. Enroll now!",
    keywords: [
      "manual testing course",
      "qa testing course",
      "manual testing training",
      "qa certification course",
      "testing course with placement",
      "qa manual tester",
      "quality assurance training",
      "QA training for beginners",
      "software testing course with placement",
      "manual testing certification",
      "QA testing course online",
      "learn manual testing",
      "software testing training",
      "QA jobs for freshers",
      "manual testing syllabus",
      "ISTQB foundation level course",
    ],
    image: "/og-images/courses-software-testing-course-manual-testing-course-og.webp",
  },

  schema: {
    name: "Manual Testing Course with Placement Support",
    description:
      "Comprehensive 12-week Manual Testing and QA training program covering SDLC, STLC, test case design, Jira, Agile, API testing, and ISTQB preparation. Includes hands-on projects and placement assistance.",
    duration: "P12W",
    howTo: {
      name: "How to Enroll in CDPL Manual Testing Course",
      description: "A step-by-step guide to enrolling in our specialized QA Manual Testing program.",
      steps: [
        { name: "Browse Courses", text: "Select the Manual Testing specialized module." },
        { name: "Review Syllabus", text: "Check the ISTQB aligned syllabus, Jira, and Agile methodologies." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        { name: "Start Learning", text: "Attend live classes, perform bug hunting, and get certified!" },
      ],
    },
  },

  hero: {
    breadcrumb: "Manual Testing",
    badges: [
      { icon: "star", text: "{rating} from {reviews} reviews" },
      { icon: "shieldCheck", text: "ISTQB Foundation Aligned" },
      { icon: "briefcase", text: "Job-Oriented" },
    ],
    h1: "[[Manual Testing Course]] with Placement – Launch Your QA Career in 12 Weeks",
    subtitle:
      "Break into software quality assurance with Cinute Digital's comprehensive manual testing course—no coding background needed. Master test case design, defect tracking, **ISTQB preparation**, and real-world **QA workflows** to land your first testing role in Mumbai, Pune, or across India.",
    description:
      "Join India's leading **Manual Testing Course** with a thriving alumni community. Master **test case design, defect tracking, Jira, Agile workflows**, and **ISTQB Foundation preparation**. Available in **online** and **classroom modes** (Mumbai, Thane) with **placement support**.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Manual Testing program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "12-Week Live Instructor-Led Program",
      "ISTQB Foundation Certification Prep",
      "90+ Hands-On Projects",
      "Placement Support",
    ],
  },

  stats: {
    heading: "Real-World [[Manual Testing]] Career Metrics",
    items: [
      { value: "50 hrs", label: "Training Hours" },
      { value: "1,01,000+", label: "Job Vacancies (India)" },
      { value: "25%", label: "Market Growth (2020–2030)" },
      { value: "75%", label: "Job Satisfaction" },
      { value: "32%", label: "India’s Global Share" },
      { value: "4 LPA", label: "Fresher Avg. Salary" },
    ],
    footnote: "Metrics from the program brochure.",
  },

  why: {
    heading: "Why [[Manual Testing]] in 2026?",
    intro:
      "The foundation of **software quality assurance** - high demand, beginner-friendly, and a proven gateway to **automation testing**, **API testing**, and **DevOps-ready QA**.",
    points: [
      { icon: "trendingUp", text: "**10k+/mo** QA/Test Engineer roles" },
      { icon: "clock", text: "**8–12 weeks** time to job" },
      { icon: "briefcase", text: "**₹3.5–6 LPA** starter CTC for freshers" },
      { icon: "users", text: "Beginner-friendly: **no coding**" },
    ],
    cards: [
      {
        icon: "trendingUp",
        title: "Consistent Hiring Across Industries",
        description: "Every product—fintech, e-commerce, healthcare, SaaS—needs reliable QA to ship confidently.",
        points: ["Work with web, mobile, and API layers", "Join Agile/Scrum teams from day one", "Real impact on release quality"],
      },
      {
        icon: "target",
        title: "No Coding Prerequisite",
        description:
          "Manual testing builds analytical thinking, test design, and defect reporting—no prior programming needed.",
        points: ["Test case writing & boundary analysis", "Bug tracking (Jira) & reporting", "Collaboration with Dev & Product"],
      },
      {
        icon: "zap",
        title: "Fast Career Launch",
        description:
          "Master core QA skills quickly with hands-on projects, interviews, and portfolio-ready case studies.",
        points: ["Live projects & capstones", "Interview prep & mock tests", "Portfolio on GitHub/Notion"],
      },
      {
        icon: "award",
        title: "ISTQB/Global Certification",
        description: "Stand out with internationally recognized QA credentials and standardized testing knowledge.",
        points: ["Syllabus-aligned training", "Exam strategy & practice sets", "Credibility with recruiters"],
      },
      {
        icon: "book",
        title: "Gateway to Automation",
        description:
          "Manual first, automation next—transition smoothly to Selenium, Cypress, and API test frameworks.",
        points: ["Strong fundamentals = easier automation", "Data-driven testing mindset", "Bridges into SDET roles"],
      },
      {
        icon: "shield",
        title: "Recession-Resilient Skill",
        description:
          "Quality is non-negotiable: companies prioritize user experience, security, and reliability—always.",
        points: ["Critical for regulated domains", "Reduces production incidents", "Protects brand & retention"],
      },
    ],
  },

  curriculum: {
    heading: "What You'll Learn: [[Complete Manual Testing Curriculum]]",
    intro:
      "Comprehensive **12-week program** covering **SDLC**, **STLC**, **test design**, **Jira**, **Agile**, **API testing**, and **real-world QA projects**.",
    modules: [
      {
        title: "Software Testing Fundamentals",
        duration: "Week 1-2",
        topics: [
          "Introduction to **software quality assurance** and **quality control**",
          "**SDLC** (Software Development Life Cycle) models: Waterfall, Agile, V-Model, Spiral",
          "**STLC** (Software Testing Life Cycle) phases and **entry/exit criteria**",
          "**Testing principles**, objectives, and limitations",
          "**White Box** vs **Black Box** vs **Grey Box** testing techniques",
          "**Verification vs Validation** concepts",
          "**Error, Defect, Bug, and Failure** terminology",
        ],
      },
      {
        title: "Test Design Techniques",
        duration: "Week 3-4",
        topics: [
          "**Equivalence Partitioning** and **Boundary Value Analysis**",
          "**Decision Table** and **State Transition** testing",
          "**Use Case testing** and **exploratory testing** strategies",
          "Writing effective **test scenarios** and **test cases**",
          "**IEEE 829** Test Case template standards",
          "**Positive and negative testing** approaches",
          "**Requirements Traceability Matrix (RTM)** creation",
        ],
      },
      {
        title: "Test Management & Defect Tracking",
        duration: "Week 5-6",
        topics: [
          "**Defect life cycle** and **severity vs priority** classification",
          "**Bug reporting** best practices with screenshots and logs",
          "**Jira** mastery: Creating projects, epics, stories, bugs, and sprints",
          "**TestRail** and **Zephyr** for test case management",
          "**Test metrics**: Defect density, test coverage, pass/fail rates",
          "**Test estimation** techniques: Work Breakdown Structure, Function Points",
          "Daily standups, retrospectives, and **QA reporting**",
        ],
      },
      {
        title: "Agile & Scrum for QA Testers",
        duration: "Week 7-8",
        topics: [
          "**Agile methodology** fundamentals and manifesto",
          "**Scrum framework**: Roles (Product Owner, Scrum Master, Team)",
          "**Sprint planning**, daily scrums, reviews, and retrospectives",
          "User story **acceptance criteria** and **Definition of Done**",
          "QA role in Agile teams and **continuous testing**",
          "**Kanban boards** and workflow management",
          "Working with **cross-functional** development teams",
        ],
      },
      {
        title: "API Testing Basics with Postman",
        link: { label: "Advance to our API Testing Course", href: "/courses/software-testing-course/api-testing" },
        duration: "Week 9",
        topics: [
          "**REST API** fundamentals: GET, POST, PUT, DELETE methods",
          "**JSON** and **XML** response validation",
          "**Postman** installation and collections setup",
          "Authorization headers and **authentication testing**",
          "**Status code** verification (200, 400, 500 series)",
          "Basic **API test case** scenarios",
        ],
      },
      {
        title: "Database Testing Essentials",
        link: { label: "Explore our DBMS Course", href: "/courses/software-testing-course/dbms-course" },
        duration: "Week 10",
        topics: [
          "Introduction to **MySQL** and **SQL** basics",
          "**SELECT, INSERT, UPDATE, DELETE** queries for testing",
          "**JOIN** operations to validate multi-table data",
          "**Data integrity** and **referential integrity** checks",
          "**Backend vs Frontend** data validation",
          "Common **database testing** scenarios",
        ],
      },
      {
        title: "Mobile & Web Application Testing",
        duration: "Week 11",
        topics: [
          "Web testing: **Cross-browser testing** (Chrome, Firefox, Safari, Edge)",
          "**Responsive design testing** (desktop, tablet, mobile viewports)",
          "**Mobile app testing** fundamentals (Android and iOS)",
          "Installation, **compatibility**, and **interruption testing**",
          "**UI/UX validation** and **usability testing**",
          "**Performance** and **security testing** basics",
          "**Accessibility testing** (WCAG guidelines)",
        ],
      },
      {
        title: "Industry Projects & Placement Prep",
        duration: "Week 12",
        topics: [
          "**Live Project 1**: E-commerce website end-to-end testing (registration, cart, checkout, payment gateway)",
          "**Live Project 2**: Banking application test case creation and execution",
          "**Live Project 3**: Healthcare mobile app defect reporting and retesting",
          "**Resume crafting** for manual QA tester roles",
          "**5+ mock interviews** with real-time feedback",
          "Common manual testing **interview questions** (50+ Q&A)",
          "**HR round** preparation and **salary negotiation** tips",
          "**LinkedIn profile** optimization and job portal strategies",
        ],
      },
    ],
  },

  tools: {
    heading: "Tools You’ll Master in Our [[QA Certification Course]]",
    intro:
      "Learn industry-standard **software testing tools** used by top product teams — from **agile test management** and **API testing** to **UI automation**, **performance testing**, and **continuous integration**.",
    items: [
      {
        name: "Jira",
        logo: "/techstack_logos/jira-logo.svg",
        category: "Plan & Track",
        description: "Plan sprints, manage user stories, and track defects with enterprise-grade workflows.",
      },
      {
        name: "Confluence",
        logo: "/techstack_logos/confluence-logo.svg",
        category: "Plan & Track",
        description: "Document test strategies, runbooks, and RCA with reusable templates.",
      },
      {
        name: "Zephyr",
        logo: "/techstack_logos/zephyr-logo.png",
        category: "Test Management",
        description: "Create test cases, map requirements, and view real-time coverage inside Jira.",
      },
      {
        name: "TestRail",
        logo: "/techstack_logos/testrail-logo.svg",
        category: "Test Management",
        description: "Organize suites, track runs, and generate audit-ready QA reports at scale.",
      },
      {
        name: "Postman",
        logo: "/techstack_logos/postman-logo.svg",
        category: "API & Automation",
        description: "Design REST calls, validate responses, automate collections, and monitor APIs.",
      },
      {
        name: "REST Assured",
        icon: "testTube",
        category: "API & Automation",
        description: "Write robust API assertions in code for CI-ready test pipelines.",
      },
      {
        name: "Selenium WebDriver",
        logo: "/techstack_logos/selenium-logo.svg",
        category: "API & Automation",
        description: "Automate browsers, build maintainable page objects, and run cross-browser suites.",
      },
      {
        name: "Cypress",
        logo: "/techstack_logos/cypress-logo.webp",
        category: "API & Automation",
        description: "Flaky-resistant web tests with time-travel debugging and rich dashboards.",
      },
      {
        name: "Playwright",
        logo: "/techstack_logos/playwright-logo.webp",
        category: "API & Automation",
        description: "Auto-waits, trace viewer, and parallel workers for stable end-to-end testing.",
      },
      {
        name: "JMeter",
        logo: "/techstack_logos/jmeter-logo.svg",
        category: "Performance & Monitoring",
        description: "Model realistic traffic, analyze throughput, and expose bottlenecks early.",
      },
      {
        name: "K6",
        logo: "/techstack_logos/k6-logo.svg",
        category: "Performance & Monitoring",
        description: "Script performance scenarios in code and integrate with CI pipelines.",
      },
      {
        name: "BrowserStack",
        logo: "/techstack_logos/browserstack-logo.svg",
        category: "Cross-Browser & Mobile",
        description: "Execute manual and automated tests on 3000+ real browsers and devices.",
      },
      {
        name: "MySQL",
        logo: "/techstack_logos/mysql-logo.svg",
        category: "Databases & Analytics",
        description: "Write SQL for data validation, joins, and analytics to ensure integrity.",
      },
      {
        name: "MongoDB",
        logo: "/techstack_logos/mongodb-logo.svg",
        category: "Databases & Analytics",
        description: "Query JSON-like documents to verify event streams and microservices.",
      },
      {
        name: "Git",
        logo: "/techstack_logos/git-logo.svg",
        category: "Version Control & CI/CD",
        description: "Branch, review, and manage test code with modern Git workflows.",
      },
      {
        name: "GitHub",
        logo: "/techstack_logos/github-logo.svg",
        category: "Version Control & CI/CD",
        description: "Pull requests, code reviews, and actions to automate quality gates.",
      },
      {
        name: "Jenkins",
        logo: "/techstack_logos/jenkins-logo.svg",
        category: "Version Control & CI/CD",
        description: "Trigger pipelines, run suites in parallel, and publish reports on merge.",
      },
      {
        name: "Chrome DevTools",
        logo: "/techstack_logos/chrome-devtools-logo.svg",
        category: "Utilities & Debugging",
        description: "Trace network calls, measure performance, and inspect accessibility issues.",
      },
      {
        name: "Excel",
        logo: "/techstack_logos/excel-logo.svg",
        category: "Utilities & Debugging",
        description: "Quickly model test data, pivot results, and share quality dashboards.",
      },
      {
        name: "Fiddler",
        logo: "/techstack_logos/fiddler-logo.png",
        category: "Utilities & Debugging",
        description: "Capture HTTP/S traffic to diagnose API errors and performance issues.",
      },
      {
        name: "Charles Proxy",
        logo: "/techstack_logos/charles-proxy-logo.svg",
        category: "Utilities & Debugging",
        description: "Rewrite rules, throttle bandwidth, and validate edge-case behaviors.",
      },
    ],
  },

  roadmap: {
    heading: "Your [[12-Week]] Learning Path",
    intro:
      "Become a **job-ready Manual QA Tester** with industry-standard tools, **ISTQB® preparation**, and a portfolio-grade capstone project. Designed for beginners and career-switchers.",
    steps: [
      {
        title: "Foundation",
        duration: "Weeks 1–3",
        badge: "Beginner Friendly",
        description:
          "Manual Testing Course fundamentals and QA training basics. Key topics: SDLC/STLC, V-Model & Agile, Test Levels & Types, QA Documentation Basics.",
        points: ["SDLC & STLC mastery", "QA Roles & Responsibilities", "Testing Principles"],
      },
      {
        title: "Core Skills",
        duration: "Weeks 4–6",
        badge: "Hands-On Labs",
        description:
          "Test design techniques, RTM, and documentation best practices. Key topics: Equivalence & Boundary, Decision Tables, State Transition, RTM & Checklists.",
        points: ["Design high-quality test cases", "Requirements Traceability Matrix (RTM)", "Test data strategy"],
      },
      {
        title: "Execution",
        duration: "Weeks 7–9",
        badge: "Real Tools",
        description:
          "Defect tracking, bug reporting with Jira, real-world QA tooling. Key topics: Jira / Azure DevOps, Test Runs & Reports, Defect Triage, Exploratory Testing.",
        points: ["Defect life cycle end-to-end", "Bug reporting that gets fixed", "Tooling fluency"],
      },
      {
        title: "Mastery",
        duration: "Weeks 10–12",
        badge: "Career Ready",
        description:
          "ISTQB certification prep, QA interview preparation, job placement support. Key topics: ISTQB Syllabus, Capstone Project, Mock Interviews, Resume & LinkedIn.",
        points: ["ISTQB® exam readiness", "Portfolio capstone project", "Interview preparation & placement"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Career Outcomes",
        text: "Land roles like **Manual QA Tester**, **QA Analyst**, or **Test Engineer**. Build an ATS-optimized resume and a GitHub-hosted portfolio with real test assets.",
      },
      {
        kind: "list",
        title: "What You’ll Deliver",
        items: ["Test Plan, Test Strategy, RTM", "Test Cases, Test Data, Bug Reports", "Capstone project with repository"],
      },
    ],
    outro: "Includes **300+ practice questions** and **10+ interview drills**.",
    ctas: [
      { label: "Start Your QA Journey", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
  },

  projects: {
    heading: "Real-World [[Projects]]",
    intro:
      "Build a **job-winning QA portfolio** with hands-on, instructor-reviewed projects. Practice **manual testing**, **API testing**, and **test documentation** used by top tech companies.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-Commerce QA Suite",
        meta: "Retail · B2C • Intermediate • 2–3 Weeks",
        tags: ["Jira", "Postman", "BrowserStack"],
        description:
          "End-to-end manual testing for search, cart, checkout, payments, refunds, and order tracking across web & mobile.",
        features: [
          "Design high-coverage test cases for complex user journeys",
          "Execute cross-browser & responsive test plans",
          "Log actionable defects with evidence & priority",
        ],
      },
      {
        icon: "building",
        title: "Banking & FinTech App",
        meta: "Finance · Compliance • Advanced • 3–4 Weeks",
        tags: ["TestRail", "Postman", "Swagger"],
        description:
          "Manual & API testing for secure logins, funds transfer, KYC, statements, and regulatory compliance workflows.",
        features: [
          "Validate security, privacy, and audit trails",
          "Author risk-based test scenarios and traceability",
          "Collaborate with DevOps for release sign-off",
        ],
      },
      {
        icon: "heart",
        title: "Healthcare Patient Portal",
        meta: "Healthcare · HIPAA • Intermediate • 2–3 Weeks",
        tags: ["Jira", "Zephyr", "Charles Proxy"],
        description:
          "Test appointments, EMR workflows, e-prescriptions, and HIPAA-aligned privacy with real-world datasets.",
        features: [
          "Author role-based scenarios for clinicians & patients",
          "Verify data integrity and PHI masking",
          "Report defects with reproducible steps & HAR files",
        ],
      },
      {
        icon: "network",
        title: "Telecom Self-Care Portal",
        meta: "Telecom · SaaS • Beginner • 1–2 Weeks",
        tags: ["Jira", "Postman", "Kibana"],
        description:
          "Plans, billing, usage analytics, and support flows tested across high-traffic, multi-tenant environments.",
        features: [
          "Design smoke, sanity, and regression suites",
          "Use logs & analytics to triage defects",
          "Document RTM for stakeholder visibility",
        ],
      },
      {
        icon: "layers",
        title: "ERP Modules (HR · Finance · Inventory)",
        meta: "Enterprise · ERP • Advanced • 3–4 Weeks",
        tags: ["TestLink", "Jira", "MySQL Workbench"],
        description:
          "Modular testing of enterprise dashboards, approvals, and reporting with real-world role hierarchies.",
        features: [
          "Optimize test data and boundary value coverage",
          "Test complex approval chains and SLAs",
          "Deliver metrics: DRE, defect density, lead time",
        ],
      },
      {
        icon: "share2",
        title: "Social Media & Community",
        meta: "Consumer · UGC • Intermediate • 2 Weeks",
        tags: ["Jira", "Figma", "BrowserStack"],
        description:
          "Manual testing for content feeds, privacy settings, notifications, and abuse reporting across devices.",
        features: [
          "Test accessibility (WCAG) & localized content",
          "Validate notification rules & rate limits",
          "Drive UAT with real-world acceptance criteria",
        ],
      },
    ],
  },

  testimonials: {
    heading: "Student [[Success Stories]]",
    intro: "Outcome-based programs with **placement assistance**, **live projects**, and **industry certifications**.",
  },

  career: {
    heading: "[[Career & Salary]] Outcomes",
    intro:
      "Land high-growth **QA Engineer** and **Manual Tester** roles with interview-ready projects, ATS-friendly resumes, and recruiter-optimized profiles.",
    rolesTitle: "High-Demand Roles",
    roles: [
      { title: "Manual Tester", salary: "₹3.5–6 LPA", description: "Test Cases · Bug Reporting · JIRA" },
      { title: "QA Engineer", salary: "₹4–7 LPA", description: "Agile QA · Regression · ISTQB · SDLC/STLC" },
      { title: "Test Analyst", salary: "₹4.5–7.5 LPA", description: "Test Strategy · RTM · UAT · Defect Lifecycle" },
      { title: "QA Associate", salary: "₹3–5.5 LPA", description: "Test Scenarios · Smoke Testing · Functional QA" },
    ],
    companiesTitle: "Hiring Partners",
    companies: ["Axiom", "Credility", "Marqetrix", "Raw Engineering", "Vistaar", "Testriq"],
    extras: [
      {
        kind: "list",
        title: "City-Wise Salary Bands",
        items: [
          "**Bengaluru** — ₹6–11 LPA",
          "**Hyderabad** — ₹5.5–10 LPA",
          "**Pune** — ₹5–9.5 LPA",
          "**Gurugram** — ₹5–9 LPA",
          "**Chennai** — ₹4.8–9 LPA",
          "**Mumbai** — ₹5–9.5 LPA",
        ],
      },
      {
        kind: "text",
        title: "Placement Support",
        text: "Get end-to-end **career services** — resume building, mock interviews, job referrals, and continuous recruiter feedback to help you secure **high-paying software testing jobs**.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "fileText",
            title: "ATS Resume + LinkedIn Optimization",
            description: "Beat filters with keyword-rich, QA-optimized profiles aligned to Naukri & LinkedIn search.",
          },
          {
            icon: "users",
            title: "Mock Interviews with Senior QA",
            description: "Real interviewer panels, role-based questions, and structured feedback loops.",
          },
          {
            icon: "briefcase",
            title: "Priority Referrals & Job Alerts",
            description: "Partner companies in our network, curated openings, and weekly recruiter connects.",
          },
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "indianRupee",
            title: "What is the average QA Engineer salary in India?",
            description:
              "Entry roles start at ₹3.5–6 LPA and scale to ₹9–12 LPA with 2–4 years of experience, depending on city, domain, and skills (Agile, test design, defect management).",
          },
          {
            icon: "clock",
            title: "How soon can I get interview calls?",
            description:
              "Most learners see interview calls within 2–4 weeks of completing the portfolio and resume optimization steps. We align your profile with trending recruiter keywords.",
          },
        ],
      },
    ],
    ctas: [{ label: "Get Free Career Session", kind: "careerSession" }],
  },

  faq: {
    intro:
      "Everything about our **Manual Testing course**, **QA training**, **ISTQB-aligned syllabus**, projects, and **placement assistance**.",
    items: MANUAL_TESTING_FAQS,
    categories: ["General", "Admissions", "Curriculum", "Certification", "Career", "Payments"],
  },

  cta: {
    eyebrow: "Cohort starts monthly",
    heading: "Launch Your [[QA Career]] in 12 Weeks",
    intro: "Talk to our admissions team for syllabus, fees, and cohort start dates.",
    actions: [
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply now for the Manual Testing course" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
    highlights: [
      { icon: "video", title: "Live Sessions + Recorded Classes", description: "Weekend & weekday cohorts, online or classroom" },
      { icon: "award", title: "Certificates on Completion", description: "ISTQB Foundation exam preparation" },
      { icon: "briefcase", title: "Placement Support", description: "Resume, mock interviews & referrals" },
    ],
    footnotes: [{ icon: "mapPin", text: "Mira Road & Vasai, Maharashtra" }],
  },
};

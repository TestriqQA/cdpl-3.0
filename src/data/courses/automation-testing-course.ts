import type { CourseContent } from "@/types/coursePage";
import { AUTOMATION_TESTING_FAQS } from "@/data/automationTestingData";

// Content for /courses/software-testing-course/automation-testing-course, moved
// from the old src/components/automation-testing-course/* sections. Kept word
// for word except repeated filler (the same sentence under every stat, tool,
// project and FAQ card, pills repeating card titles, count-up placeholders),
// which a cleanup pass removed.
export const automationTestingCourse: CourseContent = {
  slug: "automation-testing-course",
  courseName: "Advanced Automation Testing",
  sourceName: "Advanced Automation Testing Course Page",

  seo: {
    title: "Automation Testing Course in Mumbai | SDET | CDPL",
    description:
      "Master Selenium, Cypress, Playwright, API testing & CI/CD automation. Job-oriented SDET training in Mumbai with live projects and placement assistance.",
    keywords: [
      "automation testing course",
      "SDET training",
      "Cypress",
      "Playwright",
      "AI testing",
      "Selenium",
      "ISTQB",
      "QA automation",
      "software testing with python",
      "full stack QA",
    ],
    image: "/og-images/courses-software-testing-course-automation-testing-course-og.webp",
  },

  schema: {
    name: "Advanced Automation Testing Course (SDET)",
    description: "Master Cypress, Playwright, AI Testing, CI/CD. Become a future-ready SDET with elite projects and FAANG placement.",
    duration: "PT30H",
    howTo: {
      name: "How to Enroll in CDPL Automation Testing SDET Course",
      description: "A step-by-step guide to enrolling in our specialized Automation AI program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate Playwright, Cypress, Selenium, and AI automation test execution pipelines." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        { name: "Start Learning", text: "Master modern full-stack automated operations testing and obtain placement!" },
      ],
    },
  },

  hero: {
    breadcrumb: "Advanced Automation Testing",
    badges: [
      { icon: "clock", text: "30-Hour Elite Program" },
      { icon: "globe2", text: "Live Online & Classroom" },
      { icon: "users", text: "Mentor-Led SDET Coaches" },
      { icon: "briefcase", text: "Placement Assistance" },
    ],
    h1: "Advanced [[Automation Testing]] for [[Future-Ready SDETs]]",
    subtitle:
      "Master end-to-end QA with **Selenium**, **Cypress**, **Playwright**, API automation, and **AI-assisted testing**. Build CI/CD pipelines (Jenkins/GitHub Actions), write self-healing tests, and ship reliable releases faster.",
    description:
      "Learn framework design (POM, fixtures, reporting), parallel & cross-browser strategies, contract testing, and performance/security basics. Graduate with a job-ready portfolio and interview prep.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Advanced Automation Testing" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "AI-powered locators & self-healing scripts",
      "CI/CD integration (Jenkins / GitHub Actions)",
      "Interview prep, mock interviews & portfolio review",
      "QR-verified global certification",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "bot", title: "85% Hands-On", description: "AI-powered test scripts & self-healing locators" },
      { icon: "users", title: "SDET Mentors", description: "10+ years, FAANG & product-based guidance" },
      { icon: "award", title: "Global Cert", description: "ISTQB Foundation + Advanced automation prep" },
      { icon: "briefcase", title: "Placement", description: "Resume clinic, mock interviews, referrals" },
    ],
  },

  stats: {
    heading: "Outcomes that Matter for [[SDET]] Careers",
    intro:
      "The figures below come from the program brochure: market growth, open roles, fresher pay, job satisfaction, India’s global share, and program duration.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)" },
      { value: "101,000+", label: "Job Vacancies in India" },
      { value: "6 LPA", label: "Fresher Avg Salary" },
      { value: "75%", label: "Job Satisfaction" },
      { value: "32%", label: "India’s Share of Global Market" },
      { value: "85 Hours", label: "Program Duration" },
    ],
    outro:
      "Upskill with **framework design**, **CI/CD pipelines**, and **AI-assisted testing** to stand out for roles like **SDET**, **Automation Engineer**, and **QA Lead**. Master popular tools such as **Selenium**, **Cypress**, **Playwright**, **REST Assured**, and **Jenkins**.",
  },

  why: {
    heading: "Why Master [[Automation]] in 2025?",
    intro:
      "Automation Testing and **SDET** skills accelerate delivery, improve reliability, and unlock higher salaries. Learn modern tooling, *AI-assisted testing*, and CI/CD to become **industry-ready**.",
    cards: [
      { icon: "zap", title: "95% Faster Releases", description: "CI/CD pipelines, parallel test execution, rapid feedback loops." },
      { icon: "cpu", title: "AI Self-Healing Tests", description: "Reduce flakiness with locator healing & smart retries." },
      { icon: "shield", title: "Zero Regression Bugs", description: "Automated smoke, sanity, and nightly suites with reports." },
      { icon: "globe", title: "Cross-Platform Mastery", description: "Web, Mobile, API & Desktop testing in one skillset." },
      { icon: "bot", title: "Future-Proof SDET", description: "Blend AI, DevOps, and QA to lead quality engineering." },
      { icon: "trendingUp", title: "Top-Tier Salaries", description: "SDETs command premium pay with in-demand automation skills." },
    ],
    outro:
      "Master tools like **Selenium**, **Playwright**, **Cypress**, **REST Assured**, and **Jenkins** while learning *test strategy, reporting, observability,* and *scalable frameworks* that hiring managers value.",
  },

  curriculum: {
    heading: "Advanced [[Automation Testing]] Curriculum",
    intro:
      "Master **Java/Python**, **Selenium WebDriver**, synchronization & interactions, **TestNG/PyTest**, and build a production-ready *Hybrid Framework (E2E)* with reporting, logging, and data-driven tests-plus **Git** and the web automation process model.",
    modules: [
      {
        title: "Programming Foundations (Java / Python)",
        topics: [
          "Installation & Environment Setup",
          "Language Basics & Syntax",
          "Ranges, Arrays / ArrayList & Collections",
          "Conditions & Looping",
          "Functions / Methods",
          "Object-Oriented Programming (Classes & Objects)",
          "Sorting & Data Conversion",
        ],
      },
      {
        title: "Selenium WebDriver Essentials",
        topics: [
          "Setting up the Environment",
          "Browser Operations & Navigation",
          "HTML Basics for Testers",
          "Locators (By id, name, CSS, XPath)",
          "Finding Single & Multiple Elements",
          "Select Class & Dropdowns",
        ],
      },
      {
        title: "Synchronization & User Interactions",
        topics: [
          "Selenium Synchronization / Waits",
          "Handling Windows / Tabs",
          "Action Class (Mouse & Keyboard)",
          "Screenshots & Evidence",
          "Common Selenium Exceptions",
        ],
      },
      {
        title: "Test Frameworks: TestNG / PyTest",
        topics: [
          "Framework Structure & Test Organization",
          "Annotations / Fixtures",
          "Parameterization & Data-Driven Tests",
          "Parallel Execution",
          "HTML Reports & Test Logs",
        ],
      },
      {
        title: "Hybrid Framework Design (End-to-End Project)",
        topics: [
          "Page Object Model (POM) Architecture",
          "Folder Structure & Reusable Utilities",
          "Data-Driven from Excel",
          "Generating Reports & Keeping Failed-Task Records",
          "Hybrid Framework (E2E) Implementation",
        ],
      },
      {
        title: "Version Control & Process Model",
        topics: [
          "Learn Version Control (Git) Basics",
          "Branching & Pull Requests",
          "Code Reviews & Logs",
          "Web Automation Process Model",
          "Best Practices & Team Workflow",
        ],
      },
    ],
    moduleNote: "Outcome: hands-on labs, code reviews, and an end-to-end project to validate real-world skills.",
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Get Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    heading: "[[Tools]] You’ll Master",
    intro: "Master a **production-ready automation stack** across UI, API, performance and CI/CD.",
    items: [
      { name: "Selenium 4", logo: "/techstack_logos/selenium-logo.svg" },
      { name: "Cypress", logo: "/techstack_logos/cypress-logo.webp" },
      { name: "Playwright", logo: "/techstack_logos/playwright-logo.webp" },
      { name: "Applitools", logo: "/techstack_logos/applitools-logo.png" },
      { name: "k6", logo: "/techstack_logos/k6-logo.svg" },
      { name: "Jenkins", logo: "/techstack_logos/jenkins-logo.svg" },
      { name: "Docker", logo: "/techstack_logos/docker-logo.svg" },
      { name: "AI Testing", icon: "bot" },
    ],
    itemNote: "Learn setup, best practices, and real-world patterns with **scalable test design** and **pipeline integration**.",
  },

  projects: {
    heading: "Build Elite [[SDET Projects]]",
    intro:
      "Ship **production-grade automation frameworks** with *AI self-healing*, **visual testing**, **secure mobile E2E**, and **reliability engineering-**the exact portfolio hiring managers search for.",
    items: [
      {
        icon: "globe",
        title: "Netflix Clone Automation",
        description: "Enterprise-grade test automation suite: AI self-healing, visual regression, and real-time reporting at scale.",
        features: ["Cypress + Playwright", "AI Flaky Fix", "Docker Grid", "Grafana Dashboard"],
      },
      {
        icon: "smartphone",
        title: "Banking App (iOS/Android)",
        description: "End-to-end mobile automation on real devices with secure auth, biometrics, and cloud farm execution.",
        features: ["Appium + WDIO", "Biometric Flows", "Push Notifications", "Device Cloud"],
      },
      {
        icon: "shield",
        title: "Chaos & Performance Suite",
        description: "Shift-left resiliency with controlled failures, load tests, and security scans to harden releases.",
        features: ["k6 Load Testing", "Chaos Monkey", "OWASP ZAP", "SLO Monitoring"],
      },
    ],
    extras: [{ kind: "text", text: "Includes CI/CD setup, evidence reporting, and scalability patterns used in modern product teams." }],
    outro:
      "These **SDET portfolio projects** highlight *test design strategy*, **framework architecture**, **observability**, and **developer-friendly pipelines**—helping you stand out in interviews and code reviews.",
  },

  testimonials: {
    heading: "[[SDET]] Success Stories",
    outro:
      "Our alumni showcase **Playwright/Cypress**, **Appium**, **REST Assured**, and **Docker + Jenkins** projects with clean, reviewed code and *measurable impact*-a winning combo for SDET interviews.",
  },

  career: {
    heading: "Elite [[SDET Careers]]",
    intro:
      "**3,00,000+ automation jobs** across India | Typical salary for skilled SDETs: **₹8–25 LPA**. Grow into high-impact roles across *web, mobile, API*, and *DevOps/CI-CD* pipelines.",
    rolesTitle: "High-Impact Job Roles",
    roles: [
      "SDET",
      "Automation Architect",
      "Test AI Engineer",
      "DevOps Tester",
      "Performance SDET",
      "Cypress Expert",
      "Playwright Lead",
      "CI/CD Engineer",
    ],
    rolesBadges: ["AI-Augmented Testing", "DevOps + CI/CD", "High Salary Growth"],
    companiesTitle: "Top Product Companies",
    companies: ["Google", "Amazon", "Microsoft", "Meta", "Netflix", "Adobe", "Atlassian", "PayPal"],
    companiesNote: "Plus: fintech unicorns, SaaS leaders, and cloud-native startups hiring automation-first talent.",
    extras: [
      {
        kind: "text",
        text: "Pathways: junior SDET → senior SDET → automation architect → quality platform/enablement lead.",
      },
    ],
    outro: "Speak to a mentor about roadmap, interview prep, and portfolio projects.",
    ctas: [{ label: "Accelerate Your Career", kind: "careerSession", ariaLabel: "Talk to a mentor and join the program" }],
  },

  audience: {
    eyebrow: "Beginner Friendly • Mentor-Led Cohort • Portfolio Projects • Job Assistance",
    heading: "Who Should [[Join]]?",
    intro:
      "Perfect for **manual testers**, **freshers**, **developers**, and **QA leads** who want industry-ready *Automation Testing* & *SDET* skills-framework design, CI/CD integration, API automation, and real projects.",
    items: [
      { icon: "users", title: "Manual Testers", description: "Upgrade to SDET (UI • API • Mobile)" },
      { icon: "graduationCap", title: "Freshers", description: "BTech • MCA • BCA — job-ready skills" },
      { icon: "briefcase", title: "Developers", description: "Add automation & CI/CD to your stack" },
      { icon: "target", title: "QA Leads", description: "Level-up teams with SDET practices" },
    ],
    outro:
      "Get hands-on with **Selenium/Appium**, **REST Assured**, **Playwright/Cypress**, version control, and **CI/CD** to stand out as an industry-ready **SDET**. Learn test design, data-driven automation, contract testing, and best practices used by top tech teams.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    intro: "Clear answers about the program, certification, timeline, and job assistance",
    items: AUTOMATION_TESTING_FAQS,
  },

  cta: {
    heading: "Become a [[Next-Gen SDET]]",
    intro:
      "Cohort starts in **1 day** — only **15 seats** left. Live, mentor-led classes, ISTQB + AI automation, and **placement assistance**.",
    actions: [
      { label: "Call Admissions: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions for enrollment" },
      { label: "Email Your Questions", kind: "mailto", ariaLabel: "Email us your questions" },
    ],
    highlights: [
      { icon: "clock", title: "30-Hour Live Training", description: "Weekend & evening batches" },
      { icon: "award", title: "ISTQB + AI Certification", description: "QR-verified credential" },
      { icon: "check", title: "Placement Support", description: "Resume, mock interviews, referrals" },
    ],
    footnotes: [{ icon: "mapPin", text: "Mira Road & Vasai, Maharashtra · Live Online & Classroom" }],
  },
};

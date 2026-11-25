import type { CourseContent } from "@/types/course-page";
import { ADVANCED_TESTING_FAQS } from "@/data/courses/software-testing/faqs/advance-software-testing";

// Content for /courses/software-testing-course/advance-software-testing, moved
// from the old src/components/advance-software-testing/* sections. Kept word
// for word except repeated filler (the same line under every tool, project and
// FAQ answer, an identical "Hands-On" tag on every project, pill rows that
// repeat card titles, an accordion keyboard hint), which a cleanup pass removed.
export const advanceSoftwareTestingCourse: CourseContent = {
  slug: "advance-software-testing",
  courseName: "Advanced Software Testing",
  sourceName: "Advanced Software Testing Course Page",

  seo: {
    title: "Advanced Software Testing Course in Mumbai | CDPL",
    description:
      "Master Selenium, Cypress, Appium & API testing in our advanced SDET program. Job-oriented training in Mumbai with live projects, ISTQB prep & placement assistance.",
    keywords: [
      "advanced software testing course",
      "selenium course",
      "sdet training",
      "selenium certification course",
      "selenium training near me",
      "cypress testing course",
      "appium testing course",
      "software testing course with placement",
      "selenium automation testing course",
      "selenium java course",
      "selenium online courses",
      "automation testing",
      "QA training",
      "software testing course in mumbai",
      "job-oriented software testing course",
    ],
    image: "/og-images/courses-software-testing-course-advance-software-testing-og.webp",
  },

  schema: {
    name: "Advanced Software Testing Course (SDET)",
    description:
      "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
    duration: "PT25H",
  },

  hero: {
    breadcrumb: "Advanced Software Testing",
    badges: [
      { icon: "star", text: "{rating} Rated" },
      { icon: "users", text: "{reviews} Reviews" },
      { icon: "globe2", text: "Live Online & Classroom" },
    ],
    h1: "Master [[Advanced Software Testing & SDET]] with Selenium, Cypress & Appium",
    subtitle:
      "Looking for a hands-on **selenium certification course**? Join India's professional **SDET training** program. Learn **Selenium Java course** concepts, **API testing**, **Mobile App testing (Appium)**, and **Cypress**. Get **placement support** and become a complete **Automation Test Engineer**.",
    description:
      "Topics: **Selenium online courses**, Page Objects, **Appium testing course**, **API testing**, **Cypress testing course**, Jenkins/GitHub Actions. Better than any **free selenium course** with dedicated mentorship.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Advanced Software Testing" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with real **selenium automation testing** projects",
      "CI/CD integration using Jenkins & GitHub Actions",
      "Interview prep & portfolio for high-paying **SDET** roles",
      "QR-verified **ISTQB** + **Selenium Certification Course**",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "bug", title: "80% Hands-On", description: "Real test automation projects" },
      { icon: "users", title: "Expert Instructors", description: "ISTQB & Selenium certified" },
      { icon: "award", title: "Global Certification", description: "ISTQB + Automation Cert" },
      { icon: "briefcase", title: "Placement", description: "Resume + Interview Prep" },
    ],
  },

  stats: {
    heading: "[[Advanced Software Testing Course]] Career Insights",
    intro:
      "Join the booming automation market. Our **advanced software testing course** prepares you for the **100,000+ job vacancies** in India's top product and service companies.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)", note: "Growth outlook for software testing in India" },
      { value: "101,000+", label: "Job Vacancies in India", note: "Open roles for Selenium & SDET professionals" },
      { value: "4-8 LPA", label: "Fresher Average Salary", note: "Typical starting package after SDET training" },
      { value: "95 Hours", label: "Total Training Duration", note: "Comprehensive selenium online course with projects" },
      { value: "75%", label: "Job Satisfaction", note: "Satisfaction level reported for Automation Testers" },
      { value: "100%", label: "Placement Assistance", note: "Resume, mock interviews & referrals" },
    ],
    outro:
      "Build strength in **Manual Testing**, **API Testing (Postman)**, **DBMS (MySQL)**, and **Selenium Java** with our comprehensive curriculum designed for **freshers and manual testers**.",
  },

  why: {
    eyebrow: "Industry-ready • CI/CD-first • Automation-focused",
    heading: "Why Choose This [[Selenium Automation Course]]?",
    intro:
      "**Selenium training** is the gateway to high-paying QA roles. Move beyond manual testing and build expertise in **UI, API, Mobile** with our **advanced software testing course** designed for 2026.",
    cards: [
      {
        icon: "zap",
        title: "90% Faster Testing",
        description: "Automate UI, API, and mobile flows with reliable assertions. Master selenium automation testing for speed.",
      },
      {
        icon: "shield",
        title: "Zero Critical Bugs",
        description: "Shift-left with CI/CD gates, flaky test control, & quality bars. Learn selenium best practices.",
      },
      {
        icon: "globe",
        title: "Test on Real Devices",
        description: "Cloud device farms + local emulators for true user coverage. Appium testing course integration.",
      },
      {
        icon: "trendingUp",
        title: "Higher QA Salaries",
        description: "SDETs earn 40% more. This selenium certification course boosts your CTC through automation skills.",
      },
      {
        icon: "cpu",
        title: "AI-Powered Testing",
        description: "Self-healing locators, smart retries, & insights from reports. Modern selenium online course approach.",
      },
      { icon: "bug", title: "Full-Stack QA", description: "UI + API + DB + Mobile + Performance. Complete automation testing coverage." },
    ],
    outro:
      "Learn **framework design**, **parallel execution**, **reporting**, and **release quality gates**. This **expert-led selenium training** ensures you are ready for top MNCs and startups.",
  },

  curriculum: {
    heading: "Comprehensive [[Selenium & SDET Training]] Curriculum",
    intro: "Framework design & best practices • Portfolio-ready real-time projects • 95 hours • 3.5 months • mentor-led",
    modules: [
      {
        title: "Manual Software Testing Fundamentals",
        topics: [
          "SDLC, STLC & Bug Life Cycle",
          "Black/White/Grey Box testing",
          "Functional, Integration, System, UAT",
          "Regression, Smoke & Sanity suites",
        ],
      },
      {
        title: "Test Management & Agile Methodology",
        topics: [
          "Test Plans, Test Cases & RTM",
          "Agile Scrum process & ceremonies",
          "Jira, TestRail, Mantis BT usage",
          "Defect Tracking & Priority/Severity",
        ],
      },
      {
        title: "API Testing using POSTMAN & RestAssured",
        topics: [
          "GET/POST/PUT/PATCH/DELETE requests",
          "Status, headers, cookies, payload",
          "JSON Schema & response validation",
          "Chaining requests & Environment variables",
        ],
      },
      {
        title: "DBMS using MySQL for Testers",
        topics: [
          "SELECT/WHERE/Joins for data validation",
          "DDL, DML operations for test data",
          "Views, Stored Procedures basics",
          "Validating backend data integrity",
        ],
      },
      {
        title: "Selenium Automation with Java",
        topics: [
          "WebDriver setup & Locators (XPath)",
          "Handling Popups, Frames, Windows",
          "TestNG Framework & Annotations",
          "Page Object Model (POM) Design Pattern",
        ],
      },
      {
        title: "Advanced Automation & Mobile Testing",
        topics: [
          "Cypress testing course fundamentals",
          "Appium testing course for Mobile Apps",
          "CI/CD with Jenkins & Git",
          "Intro to Performance Testing (JMeter)",
        ],
      },
    ],
    moduleNote:
      "Outcomes: Build a robust **hybrid framework**, perform **cross-browser testing**, and execute **mobile automation** on real devices.",
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Download Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    heading: "[[Tools]] in this Selenium Java Course",
    intro:
      "Master an industry-proven **SDET toolchain** — build stable frameworks, integrate with **CI/CD**, and automate **UI / API / Performance** testing to ship quality at speed.",
    items: [
      { name: "Selenium", logo: "/techstack_logos/selenium-logo.svg" },
      { name: "Appium", logo: "/techstack_logos/appium-logo.svg" },
      { name: "REST Assured", icon: "terminal" },
      { name: "Cypress", logo: "/techstack_logos/cypress-logo.webp" },
      { name: "JMeter", logo: "/techstack_logos/jmeter-logo.svg" },
      { name: "Jenkins", logo: "/techstack_logos/jenkins-logo.svg" },
      { name: "Postman", logo: "/techstack_logos/postman-logo.svg" },
      { name: "Git", logo: "/techstack_logos/git-logo.svg" },
    ],
    itemNote: "Widely used in automation pipelines for scalable, maintainable testing.",
    outro:
      "This curated toolset helps you implement **Page Object Models**, **API contract testing**, **load testing**, and **continuous integration**—increasing reliability and reducing release risk.",
  },

  projects: {
    heading: "Live Projects in our [[Application Tester Course]]",
    intro:
      "Production-style projects that showcase **UI, API, Mobile**, and **Performance** automation skills. Perfect for resumes, GitHub, and interviews.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-Commerce Automation Framework",
        description: "Automate end-to-end user journeys: login, cart, payment, and checkout using Selenium Java & TestNG.",
        features: ["POM + TestNG", "API + DB Validation", "Cross-Browser", "Jenkins CI"],
      },
      {
        icon: "smartphone",
        title: "Banking Mobile App Testing",
        description: "Build reliable Appium test suites for Android/iOS. Validate secure logins, transactions, and gestures.",
        features: ["Gestures", "OTP Handling", "Biometric Login", "Cloud Device Farm"],
      },
      {
        icon: "shield",
        title: "API & Performance Suite",
        description: "Validate REST APIs using Rest Assured and load test endpoints with JMeter for scalability.",
        features: ["JMeter Scripts", "ZAP Automation", "SSL Testing", "Report Dashboard"],
      },
    ],
    extras: [{ kind: "text", text: "Deliverables: test plans, evidence-rich reports, CI results, and a public repo link." }],
    outro:
      "These projects validate **framework design**, **data-driven testing**, **parallel execution**, **API/DB assertions**, and **CI/CD quality gates**-the exact capabilities hiring managers expect from modern **SDETs**.",
  },

  testimonials: {
    heading: "[[Success Stories]]",
    outro:
      "Alumni highlight **CI/CD automation**, **Appium & Selenium mastery**, and **framework design** as key differentiators in interviews-backed by portfolio projects and evidence-rich reports.",
  },

  career: {
    heading: "Unlock High-Paying [[SDET & Automation]] Careers",
    intro:
      "**SDET training** opens doors to premium roles. With expertise in **selenium**, **API**, and **mobile testing**, you can demand higher salaries. Average fresher package: **₹4–8 LPA**.",
    rolesTitle: "Job Roles",
    roles: [
      "SDET",
      "Automation Engineer",
      "QA Lead",
      "Test Architect",
      "Performance Tester",
      "Mobile Tester",
      "API Tester",
      "DevOps QA",
    ],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini", "IBM", "Google"],
    companiesNote: "+ Startups & product companies hiring for SDET, Automation, and Performance roles.",
    extras: [
      { kind: "text", text: "Popular stacks: *Selenium/Appium, Playwright/Cypress, REST Assured, JMeter, GitHub Actions/Jenkins*." },
    ],
    outro: "Mentor-led, project-based training with resume building and mock interviews.",
    ctas: [{ label: "Become SDET", kind: "careerSession", ariaLabel: "Become SDET" }],
  },

  audience: {
    eyebrow: "Beginner Friendly • Mentor-Led Cohort • Portfolio Projects",
    heading: "Who Should Enroll in this [[Selenium Testing Course]]?",
    intro:
      "Looking for a **selenium course near me**? Perfect for **manual testers**, **fresh graduates**, **career switchers** looking for an **application tester course**, and developers wanting **SDET training**.",
    items: [
      {
        icon: "users",
        title: "Manual Testers",
        description: "Upgrade to automation (UI + API + Mobile). Learn selenium to advance your career.",
      },
      { icon: "graduationCap", title: "Fresh Graduates", description: "BTech • BCA • MCA — job-ready with selenium training in weeks." },
      {
        icon: "briefcase",
        title: "Career Switchers",
        description: "Non-tech to SDET with mentor-led projects. Selenium online classes for flexibility.",
      },
      { icon: "target", title: "Developers", description: "Add reliable testing to your skillset. Selenium java course integration." },
    ],
    outro:
      "Whether you’re transitioning from manual QA or enhancing your dev toolkit, this program covers **Selenium/Appium**, **REST Assured**, **Playwright/Cypress**, version control, and **CI/CD**-everything required to stand out as an industry-ready **SDET**.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    items: ADVANCED_TESTING_FAQS,
  },

  cta: {
    heading: "Enroll in Our [[Selenium Course Near Me]]",
    intro:
      "Master **Selenium**, **Appium**, and **Cypress** in our comprehensive **SDET training**. Next batch starts soon. Enroll now for **placement support**.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admission helpdesk" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email admission team" },
      { label: "Book Free Demo", kind: "careerSession" },
    ],
    highlights: [
      { icon: "clock", title: "25-Hour Live Training", description: "Weekend batches • Lifetime recordings" },
      { icon: "award", title: "ISTQB + Automation Cert", description: "Globally recognized • QR-verified" },
      { icon: "check", title: "Job Assistance", description: "Resume, mock interviews & referrals" },
    ],
    footnotes: [{ icon: "mapPin", text: "Mira Road & Vasai, Maharashtra" }],
  },
};

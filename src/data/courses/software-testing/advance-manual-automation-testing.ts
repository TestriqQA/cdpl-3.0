import type { CourseContent } from "@/types/course-page";
import { ADVANCE_MANUAL_AUTOMATION_FAQS } from "@/data/courses/software-testing/faqs/advance-manual-automation-testing";

// Content for /courses/software-testing-course/advance-manual-automation-testing,
// moved from the old src/components/advance-manual-automation-testing/* sections.
// Kept word for word except repeated filler (the same line under every stat,
// identical tags/chips on every module and project card, pill rows repeating
// card titles), which a cleanup pass removed.
export const advanceManualAutomationTestingCourse: CourseContent = {
  slug: "advance-manual-automation-testing",
  courseName: "Advanced Manual and Automation Testing Master Program",
  sourceName: "Master Program Course Page",

  seo: {
    title: "Manual + Automation Testing Master Program | CDPL",
    description:
      "180-hour QA master program — Selenium, Cypress, API & mobile automation plus manual testing fundamentals. Live projects & placement assistance in Mumbai.",
    keywords: [
      "what is selenium testing",
      "what is ui testing",
      "what is selenium testing tool used for",
      "what is cypress testing",
      "tester fresher",
      "selenium practice sites",
      "unit testing",
      "selenium maven",
      "automation testing projects with selenium",
      "web testing interview questions",
      "web application testing",
      "ui testing",
      "mobile app automation testing",
      "system testing",
      "mobile automation testing",
      "ci testing",
      "automated ui testing",
      "selenium api testing",
      "ui testing tools",
      "selenium practice",
      "selenium methods",
      "user interface testing",
      "web testing tools",
    ],
    image: "/og-images/courses-software-testing-course-advance-manual-automation-testing-og.webp",
  },

  schema: {
    name: "Advanced Manual & Automation Testing Master Program",
    description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
    duration: "P4M",
  },

  hero: {
    breadcrumb: "Manual and Automation Testing",
    badges: [
      { icon: "clock", text: "180-Hour Master Program" },
      { icon: "globe2", text: "Live Online & Classroom" },
      { icon: "graduationCap", text: "Beginner Friendly" },
      { icon: "briefcase", text: "Placement Assistance" },
    ],
    h1: "Master [[Manual & Automation Testing]] – Learn [[What is Selenium Testing]] & Get Placed",
    subtitle:
      "Understand **what is selenium testing** and **what is ui testing** from scratch. Master **ISTQB Manual Testing**, **Selenium**, **Cypress**, **API**, **Mobile**, and **CI/CD**. Build a portfolio with production-like projects using **selenium practice sites** and get **placement assistance**. Ideal for **tester fresher** candidates.",
    description:
      "Learn **what is selenium testing tool used for**, test design techniques, defect lifecycle, framework architecture, Page Object Model, and **automated ui testing** with evidence-based reporting. Covers **unit testing**, **system testing**, and **web application testing**.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Manual + Automation Testing program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "70% structured manual + 30% **automation testing projects with selenium**",
      "**CI testing** integration (Jenkins & GitHub Actions)",
      "Interview prep for **web testing interview questions** & referrals",
      "Dual certificate (Manual + Automation) with QR verification",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "bot", title: "70% Manual + 30% Auto", description: "Best of both worlds" },
      { icon: "users", title: "ISTQB Faculty", description: "15+ yrs in QA" },
      { icon: "award", title: "Dual Certification", description: "Manual + Automation" },
      { icon: "briefcase", title: "Placement", description: "Resume + Mock Interviews" },
    ],
  },

  stats: {
    heading: "Real-World [[QA]] & [[SDET]] Metrics",
    intro:
      "Up-to-date insights on **QA jobs in India**, typical **SDET salaries**, **market growth**, and our **industry-focused training duration**-everything you need to plan a high-paying QA career.",
    items: [
      { value: "1,01,000+", label: "Job Vacancies in India" },
      { value: "₹6 LPA", label: "Freshers’ Avg Salary" },
      { value: "25%", label: "Market Growth (2020–30)" },
      { value: "180 Hours", label: "Total Training" },
    ],
    footnote: "Verified metrics for *QA*, *Automation Testing*, and *SDET* roles across India.",
    outro:
      "With rising demand for **test automation**, **API testing**, **mobile testing**, and **CI/CD** skills, candidates trained on *Selenium, Cypress, Playwright, REST Assured* and robust *framework design* consistently land interviews faster and negotiate higher packages.",
  },

  why: {
    heading: "Why This [[Master Program]] for Selenium & UI Testing?",
    intro:
      "Become a **complete QA engineer**: build an *ISTQB-level foundation* and advance to **automation frameworks** used in modern pipelines— Selenium, Cypress, Playwright, API, Mobile, **CI/CD**, and **AI-assisted testing**. Learn **what is cypress testing**, **mobile automation testing**, and more.",
    cards: [
      {
        icon: "clipboardCheck",
        title: "Perfect Manual Foundation",
        description: "ISTQB-grade test design & defect lifecycle. Master unit testing and system testing.",
      },
      {
        icon: "bot",
        title: "Automation Mastery",
        description: "Selenium • Cypress • Playwright • REST. Learn selenium methods and selenium maven integration.",
      },
      {
        icon: "shield",
        title: "Real-World QA Process",
        description: "Agile ceremonies, DevOps & ci testing gates. Practice on selenium practice websites.",
      },
      {
        icon: "globe",
        title: "Full-Stack Testing",
        description: "UI testing • API • DB • Mobile coverage. Master web testing tools for complete validation.",
      },
      { icon: "cpu", title: "AI & Future Skills", description: "Self-healing, visual AI & analytics. Use ui testing tools with modern approaches." },
      {
        icon: "trendingUp",
        title: "Highest ROI",
        description: "Dual skillset → faster hiring & pay. Pass selenium quiz and web testing interview questions.",
      },
    ],
    outro:
      "This dual-track approach accelerates hiring for **QA Engineer**, **SDET**, and **Automation Engineer** roles by proving mastery across *test strategy*, *tooling*, and *release engineering*—skills recruiters and engineering managers actively search for. Learn **what is selenium testing tool used for** and practice on **test website for automation**.",
  },

  curriculum: {
    heading: "Complete [[QA Master Curriculum]] – Selenium, Cypress & Mobile Testing",
    intro:
      "Manual to Automation — **180 hours** of job-ready, project-based training over **6.5 months**. Learn **what is selenium testing**, **what is ui testing**, **mobile app automation testing**, and more.",
    modules: [
      {
        title: "Manual Software Testing",
        topics: [
          "SDLC, STLC & Testing Types",
          "Test Plan, Cases & Traceability",
          "Agile, Test Mgmt (Jira/TestRail/Mantis)",
          "Defect Lifecycle, Severity/Priority",
        ],
      },
      {
        title: "API Testing with POSTMAN & REST",
        topics: [
          "Workspace, Collections, Environments",
          "HTTP Methods, Status/Headers/Cookies",
          "Tests & JSON Schema Validation",
          "Security checks (incl. BurpSuite)",
        ],
      },
      {
        title: "Database (MySQL) for Testers",
        topics: [
          "DDL / DML / DCL / TCL",
          "SELECT/WHERE/ORDER/GROUP/HAVING",
          "Joins (Inner/Outer/Self/Cross/Natural) & Subqueries",
          "Views, Procedures, Functions, Triggers",
        ],
      },
      {
        title: "Programming (Java / Python)",
        topics: ["Setup & Language Basics", "Control Flow, Functions", "OOP, Collections, Regex", "Exception Handling & Utilities"],
      },
      {
        title: "Web Automation (Selenium)",
        topics: [
          "WebDriver, Locators & Navigation",
          "Actions, Windows & Synchronization",
          "POM, TestNG/Pytest & Framework Structure",
          "Data-Driven (Excel), Reports & Logs",
        ],
      },
      {
        title: "Real Projects & Capstone",
        topics: ["E-Commerce & CRM Domains", "Gaming & Phonebook Apps", "API + Selenium End-to-End", "Defect Triage & Reporting"],
      },
    ],
    outro:
      "Each module blends concise theory with **hands-on labs**, real defect triage, and **CI/CD-ready automation** so you can demonstrate *UI, API, Mobile, and DB* skills for QA/SDET roles. Use **selenium practice sites** for real **automation testing projects with selenium**.",
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Get Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    heading: "[[Tools]] You’ll Master",
    intro:
      "Industry-standard QA & automation stack used by top tech companies - designed for **real projects**, **scalable frameworks**, and **CI/CD delivery**.",
    items: [
      { name: "JIRA", logo: "/techstack_logos/jira-logo.svg", description: "JIRA issue tracking, agile boards, bug tracking, sprint planning" },
      { name: "Selenium", logo: "/techstack_logos/selenium-logo.svg", description: "Selenium WebDriver, UI automation testing, cross browser testing" },
      { name: "Appium", logo: "/techstack_logos/appium-logo.svg", description: "Appium mobile automation, Android iOS testing, real device cloud" },
      { name: "Postman", logo: "/techstack_logos/postman-logo.svg", description: "Postman API testing, REST, collections, monitors, newman CI" },
      { name: "Cypress", logo: "/techstack_logos/cypress-logo.webp", description: "Cypress e2e testing, component testing, flake detection, dashboards" },
      { name: "Jenkins", logo: "/techstack_logos/jenkins-logo.svg", description: "Jenkins CI/CD pipelines, GitHub actions, build automation" },
      { name: "TestRail", logo: "/techstack_logos/testrail-logo.svg", description: "TestRail test case management, test runs, traceability, coverage" },
      { name: "Git", logo: "/techstack_logos/git-logo.svg", description: "Git version control, branching strategy, code reviews, PRs" },
    ],
    outro:
      "Learn how these tools work together in **framework design**, **test management**, **API & UI automation**, and **continuous delivery**-so you can ship high-quality software faster.",
  },

  projects: {
    heading: "Build Your [[QA Portfolio]]",
    intro:
      "Real applications, real defects, **production-like data**, and **CI/CD-ready frameworks**. These projects showcase *manual testing* depth and *automation* mastery-exactly what recruiters search for.",
    items: [
      {
        icon: "building",
        title: "Banking Web + Mobile App",
        description: "Design manual test cases and automate critical flows with Selenium (Web) and Appium (Android/iOS). CI ready.",
        features: ["Master Test Plan", "300+ Test Cases", "POM Framework", "Jenkins CI"],
      },
      {
        icon: "shoppingCart",
        title: "E-Commerce Full Suite",
        description: "Blend exploratory + API validation with Postman and end-to-end Cypress automation for storefront and checkout.",
        features: ["Risk Analysis", "Postman API Tests", "Cypress E2E", "Allure Reports"],
      },
      {
        icon: "smartphone",
        title: "FinTech Hybrid App",
        description: "Translate user stories into BDD scenarios and run Playwright across web-views with living documentation.",
        features: ["User Stories → BDD", "Cucumber Specs", "Playwright", "Live Demo Review"],
      },
    ],
    outro:
      "Each project demonstrates **test strategy**, **defect reporting**, **traceability**, and **automation depth** (UI • API • Mobile) with CI/CD and dashboards-making you stand out for **QA Engineer**, **Automation Tester**, and **SDET** roles.",
  },

  testimonials: {
    heading: "Student [[Success Stories]]",
    intro: "Join 6000+ QA engineers placed in top firms",
    outro:
      "All reviews cite **job outcomes**, **real project work**, and **automation-first skills** (Selenium, Cypress, Playwright, API, CI/CD)-the exact keywords hiring managers search for.",
  },

  career: {
    heading: "High-Paying [[QA Careers]] After Selenium Training",
    intro:
      "Master **what is selenium testing**, **ui testing**, and **mobile automation testing** to unlock top QA roles. Prepare for **web testing interview questions** and pass the **selenium quiz** with confidence. **4,00,000+ QA openings** • Typical salary **₹5–20 LPA**.",
    rolesTitle: "In-Demand Job Roles",
    roles: ["QA Engineer", "SDET", "Test Lead", "Manual Tester", "Automation Tester", "API Tester", "Mobile Tester", "QA Manager"],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini", "HCL", "IBM"],
    ctas: [{ label: "Start Your QA Career", kind: "careerSession" }],
  },

  audience: {
    eyebrow: "Beginner Friendly • Mentor-Led Cohort • Portfolio Projects • Interview Prep",
    heading: "Who Should [[Enroll]]?",
    intro:
      "No prior experience required. Ideal for **tester fresher** candidates, **career switchers**, **fresh graduates**, **manual testers**, and **developers** seeking *job-ready QA & SDET skills*—framework design, **ci testing**, and real **automation testing projects with selenium**.",
    items: [
      {
        icon: "users",
        title: "Career Switchers",
        description: "Transition from non-tech roles to QA with mentor-led projects. Learn what is selenium testing from basics.",
      },
      {
        icon: "graduationCap",
        title: "Fresh Graduates",
        description: "BTech • BCA • BCom — get job-ready skills fast. Perfect for tester fresher candidates.",
      },
      {
        icon: "briefcase",
        title: "Manual Testers",
        description: "Level up to automation (ui testing • API • Mobile • CI/CD). Master selenium methods.",
      },
      {
        icon: "target",
        title: "Developers",
        description: "Add reliable testing to your stack. Use selenium practice sites and jest testing knowledge.",
      },
    ],
    outro:
      "Gain hands-on experience with **Selenium/Appium**, **REST Assured**, **Cypress/Playwright**, Git, and **CI/CD pipelines**. Graduate with a portfolio that showcases **real-world QA impact**.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    intro: "Everything you need to know about the program, certification, and job support",
    items: ADVANCE_MANUAL_AUTOMATION_FAQS,
  },

  cta: {
    heading: "Become a [[Complete QA Engineer]] – Master Selenium & UI Testing",
    intro:
      "Learn **what is selenium testing**, **what is ui testing**, and **mobile automation testing** in our 180-hour Master Program. Next cohort starts in **2 days**. Limited seats in Mumbai/Thane.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call +91 788-83-83-788" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email contact@cinutedigital.com" },
    ],
    highlights: [
      { icon: "clock", title: "180-Hour Live Training", description: "Weekend Batches • Mentor-led" },
      { icon: "award", title: "Dual Certification", description: "ISTQB + Automation (QR Verified)" },
      { icon: "check", title: "Placement Support", description: "Resume • Mock Interviews • Referrals" },
    ],
    footnotes: [{ icon: "mapPin", text: "Mira Road & Vasai, Maharashtra" }],
  },
};

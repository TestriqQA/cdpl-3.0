// Software Testing category hub (/courses/software-testing-course), rendered by
// src/components/category-hub/CategoryHubPage.tsx.
//
// This is the national category page. City wording lives on the city pages:
// the hero note is the one intended mention of Mumbai and hands Mumbai
// searchers to /software-testing-course-in-mumbai, so the two pages don't
// compete for "… in mumbai" searches.

import type { CategoryHubContent } from "@/types/categoryHub";
import type { CourseCardIcon } from "@/components/courses/CourseCard";

const ST = "/courses/software-testing-course";

type RawCourse = {
  id: number;
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  popular: boolean;
  link: string;
  icon: CourseCardIcon;
  features: string[];
  syllabusLink?: string;
};

const RAW_COURSES: RawCourse[] = [
    // --- Software Testing Courses ---
    {
        id: 1,
        title: 'Manual Software Testing',
        description: 'Master manual testing, SDLC, STLC, and bug tracking with JIRA. Ideal for beginners starting their QA career.',
        duration: '50 Hours',
        students: '1200+',
        level: 'Beginner',
        popular: true,
        link: '/courses/software-testing-course/manual-testing-course',
        icon: 'BookOpen',
        features: ['ISTQB Foundation Prep', 'Test Case Design', 'Defect Life Cycle'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/manual-software-testing.pdf',
    },
    {
        id: 2,
        title: 'Advanced Automation Testing',
        // Second sentence ("The most industry-demanded automation course in
        // Thane.") dropped rather than trimmed: without "in Thane" it becomes
        // an unqualified superlative, which BLG-205 removes site-wide.
        description: 'Learn Selenium WebDriver with Java, TestNG, and CI/CD pipelines.',
        duration: '85 Hours',
        students: '950+',
        level: 'Intermediate',
        popular: true,
        link: '/courses/software-testing-course/automation-testing-course',
        icon: 'Code',
        features: ['Selenium WebDriver', 'CI/CD Integration (Jenkins)', 'Advanced Java Concepts'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-automation-testing.pdf',
    },
    {
        id: 3,
        title: 'API Testing using POSTMAN and RestAPIs',
        description: 'Master API testing using Postman, Rest Assured, and Groovy for robust web services validation.',
        duration: '15 Hours',
        students: '700+',
        level: 'Intermediate',
        popular: false,
        link: '/courses/software-testing-course/api-testing',
        icon: 'Zap',
        features: ['Postman & Swagger', 'Rest Assured Framework', 'JSON/XML Validation'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/api-testing-using-postman-and-restapis.pdf',
    },
    {
        id: 4,
        title: 'ETL Testing Course',
        description: 'Learn Data Warehouse testing, SQL queries, and ETL tools like Talend and Informatica. High-demand skills for QA experts.',
        duration: '100 Hours',
        students: '500+',
        level: 'Intermediate',
        popular: true,
        link: '/courses/software-testing-course/etl-testing',
        icon: 'Shield',
        features: ['Data Warehousing Concepts', 'SQL Testing', 'ETL Tools', 'ETL Testing Lifecycle & Test Planning'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/etl-testing-&-development.pdf',
    },
    {
        id: 5,
        title: 'Database Management System using MySQL',
        description: 'Master SQL for QA. Learn complex queries, database design, and backend validation techniques essential for software testers.',
        duration: '40 Hours',
        students: '500+',
        level: 'Beginner',
        popular: false,
        link: '/courses/software-testing-course/dbms-course',
        icon: 'Database',
        features: ['SQL Fundamentals', 'Database Design', 'Normalization', 'Complex Queries'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/database-management-system-using-mysql.pdf',
    },
    {
        id: 6,
        title: 'Advanced Software Testing',
        description: 'Go beyond the basics—build test strategies, manage risk, and master QA metrics for senior roles.',
        duration: '95 Hours',
        students: '2,268+',
        level: 'Beginner',
        popular: true,
        link: '/courses/software-testing-course/advance-software-testing',
        icon: 'ChartBar',
        features: ['Test Strategy & Risk-Based Testing', 'Traceability & Coverage Techniques', 'Test Management & Metrics', 'Performance/Security Test Readiness'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-software-testing.pdf',
    },
    {
        id: 7,
        title: 'Master Program in Java Programming',
        description: 'Perfect for automation testers. Master Core Java, OOPs, Collections, and Exception handling from scratch.',
        duration: '30 Hours',
        students: 'Not specified',
        level: 'Beginner',
        popular: true,
        link: '/courses/software-testing-course/java-course',
        icon: 'Cog',
        features: [
            'Core Java Fundamentals (Variables, OOP, Collections, Exception Handling)',
            'Enterprise Java (Spring Boot, REST APIs, Hibernate/JPA)',
            'Testing & Build Tools (JUnit/Mockito, Maven/Gradle)',
            'CI/CD & Deployment (GitHub Actions, Docker, AWS Basics)',
            '50+ Hands-on Projects (E-Commerce, Banking System, etc.)',
            'Tools: IntelliJ IDEA, Git, Postman'
        ],
        syllabusLink: 'https://www.cinutedigital.com/downloads/java-programming.pdf',
    },
    {
        id: 8,
        title: 'Advanced Manual & Automation Testing — Master Program',
        description: 'Integrated program: Advanced Manual Testing + Selenium + API + JMeter + placement support.',
        duration: '180 Hours',
        students: '2,302+',
        level: 'Beginner',
        popular: true,
        link: '/courses/software-testing-course/advance-manual-automation-testing',
        icon: 'Trophy',
        features: [
            'Risk-Based Strategy & Quality Metrics',
            'Advanced Test Design & Bug Advocacy',
            'Automation Frameworks (POM/Hybrid, API + UI)',
            'CI/CD, Parallel & Cross-Browser at Scale'
        ],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-manual-and-automation-testing-master-program.pdf',
    },

    // Python Programming — ADDED TO SOFTWARE TESTING (as prerequisite)
    {
        id: 9,
        title: 'Python Programming',
        description: 'Learn Python for automation scripting and AI-driven testing. Master data structures and advanced coding for QA.',
        duration: '30 Hours',
        students: '2,268+',
        level: 'Beginner',
        popular: true,
        link: '/courses/software-testing-course/python-course',
        icon: 'TrendingUp',
        features: ['Python Basics Guide', 'Advanced Python Coding', 'Learn Python Fast', 'Real-World Python Projects & Automation Mastery'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/python-programming.pdf',
    },
];

export const softwareTestingHub: CategoryHubContent = {
  category: "software-testing",
  sourceName: "Software Testing Course Category Page",

  seo: {
    title: "Software Testing Courses & Certification Programs",
    description:
      "Software Testing courses & certification programs at CDPL: master Manual & Automation Testing (Selenium, Java, API) with placement support.",
    keywords: [
      "software testing course",
      "software testing courses",
      "software testing certification",
      "manual testing course",
      "automation testing course selenium",
      "qa training with placement",
      "software testing classes",
      "certified software tester",
      "software testing course for beginners",
      "selenium training",
      "api testing course",
    ],
    image: "/og-images/courses-software-testing-course-og.png",
  },

  hero: {
    breadcrumb: "Software Testing",
    badges: [
      { icon: "sparkles", text: "India's comprehensive Software Testing Training Institute" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "Industry-Led Expert Mentors" },
    ],
    h1: "[[Software Testing Courses]] & Programs at CDPL",
    note: {
      text: "Looking for our Mumbai classroom batch? View the",
      link: { label: "Software Testing Course in Mumbai", href: "/software-testing-course-in-mumbai" },
    },
    subtitle:
      "Become a Job-Ready QA Professional. Master Manual & Automation Testing (Selenium, Playwright, API) with industry-expert mentors. Placement Support, ISTQB-aligned training, and real-time projects.",
    description:
      "CDPL’s Software Testing program covers Manual Testing, Test Automation (Selenium, Playwright), API testing with Postman and REST-assured, performance testing using JMeter, test automation frameworks, CI/CD integration for test pipelines, and ISTQB-aligned test practices. The curriculum is tailored for beginners and working professionals aiming for QA Engineer, Test Analyst, and SDET roles.",
    ctas: [
      { label: "Download Brochure", kind: "brochure", primary: true },
      { label: "Watch CDPL", kind: "video", href: "https://www.youtube.com/watch?v=8kB2wESj1n8" },
    ],
    highlights: [
      "100% Live Interactive Classes",
      "90+ Real-World Testing Projects",
      "Selenium, Playwright & Automation",
      "API & Performance Testing",
      "ISTQB & Industry Certifications",
      "Job Support",
      "Flexible Batches",
      "Lifetime Access",
    ],
  },

  why: {
    eyebrow: "Software Testing & Quality Assurance",
    heading: "Expert [[Software Testing Training]]",
    intro:
      "Industry-ready Software Testing course designed to bridge the gap between education and employment. Master Manual Testing, Automation (Selenium, Java, API), and Performance testing with Job Placement assistance.",
    cards: [
      {
        icon: "barChart",
        title: "Test Reporting & Metrics",
        description:
          "Learn to design meaningful test reports, dashboards and QA metrics (pass rate, defect density, MTTR) that demonstrate product quality and guide release decisions.",
      },
      {
        icon: "database",
        title: "Test Data Management & Environment Setup",
        description:
          "Master strategies for creating, masking, and managing test data, provisioning test environments, and using containers/VMs for reproducible QA — essential skills for reliable integration and system testing.",
      },
      {
        icon: "brain",
        title: "Test Strategy & Test Design",
        description:
          "Understand black-box & white-box techniques, risk-based testing, BDD/TDD approaches, and how to craft scalable test cases and test suites that reduce defects and speed up delivery.",
      },
      {
        icon: "trendingUp",
        title: "Performance & Load Testing",
        description:
          "Integrate performance testing into the CI pipeline using industry tools and approaches to detect bottlenecks, optimize throughput and ensure SLAs — covering load, stress and endurance testing best practices.",
      },
      {
        icon: "users",
        title: "Stakeholder Communication for QA",
        description:
          "Learn to translate technical test results into business-impact narratives for PMs and execs, enabling better risk decisions and faster go/no-go calls.",
      },
      {
        icon: "briefcase",
        title: "Real-World QA Projects",
        description:
          "Work on production-like projects: web & mobile testing, API automation, end-to-end pipelines and regression suites — build a portfolio that hiring managers actually look for in QA roles.",
      },
      {
        icon: "zap",
        title: "Test Automation & Frameworks",
        description:
          "Hands-on automation with Selenium, Playwright, Cypress and API automation (Postman / REST-assured) plus designing maintainable test frameworks, page objects, and CI/CD test pipelines.",
      },
      {
        icon: "award",
        title: "Certification & Interview Prep",
        description:
          "Prepare for ISTQB and job interviews with curated practice problems, mock interviews, and role-specific interview kits focused on automation engineers and SDET positions.",
      },
      {
        icon: "shield",
        title: "Security & QA Best Practices",
        description:
          "Cover security testing fundamentals, common vulnerabilities, and QA-oriented secure coding checks to help teams ship safer software while meeting compliance and governance needs.",
      },
    ],
    outro: "Ready to launch your QA career or level up as an SDET?",
    ctas: [{ label: "Explore Software Testing Courses", kind: "scroll", href: "courses" }],
  },

  courses: {
    eyebrow: "Popular Courses",
    heading: "Best [[Software Testing Courses]]",
    intro:
      "Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.",
    items: RAW_COURSES.map((c) => ({
      title: c.title,
      description: c.description,
      duration: c.duration,
      level: c.level,
      students: c.students,
      popular: c.popular,
      link: c.link,
      linkTitle: `View ${c.title} Course Details`,
      features: c.features,
      syllabusLink: c.syllabusLink,
      icon: c.icon,
    })),
    viewAll: { label: "View All Courses", href: "/courses", title: "View All Courses" },
  },

  // The old hub showed every course's full module list in tabs. That syllabus
  // lives on each course page; the hub shows the order to take them in.
  path: {
    eyebrow: "Learning Path",
    heading: "Latest [[Software Testing Course Syllabus]] 2026-27",
    intro:
      "Not sure where to start? Follow the path from QA basics to automation, or take the master program that covers all of it. Each course page has the full module-by-module syllabus.",
    stages: [
      {
        title: "Foundations",
        description:
          "Start here if you are new to QA: how software is built and tested, writing test cases and defect reports, and the SQL every tester uses to check data.",
        topics: ["SDLC & STLC", "Black-Box Test Design", "Test Plan & RTM", "Defect Tracking", "Agile & JIRA", "SQL Queries", "Database Design"],
        courses: [
          { title: "Manual Software Testing", href: `${ST}/manual-testing-course` },
          { title: "Database Management System using MySQL", href: `${ST}/dbms-course` },
        ],
      },
      {
        title: "Backend Testing",
        description:
          "Add the backend skills that set testers apart: validating APIs with Postman and checking data pipelines in ETL and data-warehouse projects.",
        topics: ["Postman", "REST APIs", "HTTP Assertions", "Environments & Data Files", "Data Warehousing", "ETL Validation with SQL", "Talend & Informatica"],
        courses: [
          { title: "API Testing using POSTMAN and RestAPIs", href: `${ST}/api-testing` },
          { title: "ETL Testing Course", href: `${ST}/etl-testing` },
        ],
      },
      {
        title: "Automation",
        description:
          "Learn a programming language, then build Selenium automation frameworks with TestNG or PyTest, page objects, reporting and CI/CD.",
        topics: ["Java or Python", "Selenium WebDriver", "TestNG / PyTest", "Page Object Model", "Hybrid Frameworks", "Reports & Logs", "CI/CD (Jenkins)"],
        courses: [
          { title: "Python Programming", href: `${ST}/python-course` },
          { title: "Master Program in Java Programming", href: `${ST}/java-course` },
          { title: "Advanced Automation Testing", href: `${ST}/automation-testing-course` },
        ],
      },
      {
        title: "Senior QA",
        description:
          "For testers moving into senior roles: test strategy, risk-based planning, coverage and the quality metrics teams report to stakeholders.",
        topics: ["Risk-Based Testing", "Test Strategy", "Traceability & Coverage", "Test Management", "QA Metrics"],
        courses: [{ title: "Advanced Software Testing", href: `${ST}/advance-software-testing` }],
      },
      {
        title: "All in One",
        description:
          "One 180-hour program that covers the whole path, from manual testing to Selenium, API, database and performance testing, with placement support.",
        topics: ["Manual Testing", "Selenium Automation", "API & Database Testing", "Performance & Security Basics", "Capstone & Interview Prep"],
        courses: [
          {
            title: "Advanced Manual & Automation Testing — Master Program",
            href: `${ST}/advance-manual-automation-testing`,
          },
        ],
      },
    ],
  },

  testimonials: {
    eyebrow: "Student Success Stories",
    heading: "Real Results From [[Software Testing Professionals]]",
    intro:
      "Join thousands of QA engineers and testers who accelerated their careers with our comprehensive Software Testing training — mastering manual & automated testing, test design, and modern QA tools.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "2,000+", label: "QA Graduates" },
          { value: "40%", label: "Avg. Salary Increase" },
          { value: "Live", label: "Mentor-Led Classes" },
          { value: "{reviews}", label: "Verified Reviews" },
        ],
      },
    ],
    outro: "**Start Your QA Career** — join our next Software Testing cohort and become job-ready.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Capstone Projects",
    heading: "Industry-Level [[Software Testing Projects]] for Portfolio",
    intro: "Apply your learning through practical, industry-relevant projects that strengthen your portfolio.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-Commerce Platform Testing",
        description: "Complete testing of an e-commerce application including manual and automation testing.",
        tags: ["Manual Testing", "Selenium", "Test Case Design", "Bug Reporting"],
        meta: "Intermediate",
      },
      {
        icon: "lock",
        title: "Banking Application QA",
        description: "Security and performance testing of a banking application.",
        tags: ["Security Testing", "Performance Testing", "API Testing", "Database Testing"],
        meta: "Advanced",
      },
      {
        icon: "smartphone",
        title: "Mobile App Testing Suite",
        description: "Comprehensive testing of a mobile application across multiple devices.",
        tags: ["Mobile Testing", "Appium", "Cross-Platform Testing", "Device Testing"],
        meta: "Intermediate",
      },
      {
        icon: "gitBranch",
        title: "CI/CD Pipeline Implementation",
        description: "Set up automated testing in a CI/CD pipeline with Jenkins.",
        tags: ["Automation Testing", "Jenkins", "Git Integration", "Test Reporting"],
        meta: "Advanced",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Why Build These Projects?",
        text: "Transform from a learner to a job-ready QA professional with hands-on testing and automation experience.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio-Ready Projects",
            description: "Build professional-grade QA artifacts and test suites that demonstrate your hands-on expertise.",
          },
          {
            icon: "award",
            title: "Industry Recognition",
            description: "Work on projects that mirror real enterprise QA scenarios across fintech, e-commerce, and mobile.",
          },
          {
            icon: "zap",
            title: "Interview Confidence",
            description: "Discuss real test strategies, automation frameworks and CI/CD integration during interviews.",
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: "Career Opportunities",
    heading: "Software Testing [[Jobs & Career Roles]]",
    intro: "Launch your career in QA and software testing. Explore the roles our graduates move into after the course.",
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
        description: "Conduct performance and load testing to optimize applications.",
        salaryRange: "₹6-12 LPA",
        skills: ["JMeter", "LoadRunner", "Performance Analysis", "Optimization"],
        opportunities: ["Enterprise Companies", "Financial Services", "E-Commerce", "Tech Companies"],
      },
      {
        role: "QA Lead / Manager",
        description: "Lead QA teams and manage testing strategies and processes.",
        salaryRange: "₹10-18 LPA",
        skills: ["Team Management", "Test Strategy", "Process Improvement", "Leadership"],
        opportunities: ["IT Companies", "Product Companies", "Consulting Firms", "Startups"],
      },
    ],
    outro: "**Ready to Launch Your QA Career?** Get personalized career guidance and placement support.",
    ctas: [
      { label: "Talk to Career Counselor", kind: "careerSession" },
      { label: "Download Career Guide", kind: "brochure" },
      { label: "View Job Openings", kind: "link", href: "/jobs/live-jobs" },
    ],
  },

  // One list for the page and its FAQPage schema (the old page showed eight
  // questions while its schema carried a different seven).
  faq: {
    heading: "Software Testing Course [[FAQ]]",
    intro:
      "Everything you need to know about our Software Testing courses, tools you’ll learn, certification paths, and career support.",
    items: [
      {
        question: "Which software testing course should I take for placement?",
        answer:
          "CDPL offers a comprehensive software testing course with placement assistance. Our curriculum covers Manual Testing, Automation (Selenium), API Testing, and ETL testing, ensuring you are job-ready for top QA roles with industry-recognized certification.",
      },
      {
        question: "Do I need coding experience for the Software Testing course?",
        answer:
          "No prior coding experience is required. We start from the absolute basics of Manual Testing and SDLC. For Automation Testing, we teach you necessary Java and Python scripting from scratch, ensuring even non-IT students can master the tools.",
      },
      {
        question: "Is it possible to switch from a non-IT background to QA?",
        answer:
          "Absolutely! Many of our successful students come from non-IT backgrounds like sales, teaching, or admin. Our step-by-step training makes the transition smooth.",
      },
      {
        question: "What is the duration of the Software Testing course?",
        answer:
          "The duration varies from 8 to 16 weeks depending on the track you choose (Manual, Automation, or Master Program). Typical batches run for 3-4 months with weekend and weekday options available.",
      },
      {
        question: "Will I get ISTQB certification support?",
        answer:
          "Yes, our course is fully aligned with the ISTQB Foundation Level syllabus. We provide dedicated training, mock exams, and resources to help you clear the ISTQB certification on your first attempt.",
      },
      {
        question: "What is the average salary after a software testing course?",
        answer:
          "Freshers can expect a salary of ₹3.5 LPA to ₹6 LPA. For candidates with automation skills (Selenium, Playwright, API), the packages can range from ₹6 LPA to ₹12 LPA+, depending on the company and expertise.",
      },
      {
        question: "Does CDPL provide placement support?",
        answer:
          "Yes, we provide placement assistance, which includes resume building, LinkedIn optimization and interview preparation to help you move into a QA role.",
      },
      {
        question: "Is there a demo session available?",
        answer:
          "Absolutely! We encourage students to attend a free interactive demo session at one of our centers (or online) to experience our teaching style and interact with our expert mentors.",
      },
      {
        question: "What tools will I learn in this QA training?",
        answer:
          "You will master industry-standard tools like Selenium WebDriver, JUnit, TestNG, Maven, Jenkins (for CI/CD), Postman (API), JMeter (Performance), JIRA (Bug Tracking), and SQL (Database Testing).",
      },
    ],
  },

  cta: {
    heading: "Start Your [[Software Testing Career]] Today!",
    intro:
      "Join successful graduates who have launched their QA careers with our expert-led training. Placement Support & ISTQB-Aligned Curriculum.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Brochure", kind: "brochure" },
    ],
    highlights: [
      { icon: "award", title: "Industry-recognized certificate" },
      { icon: "infinity", title: "Lifetime access to course materials" },
      { icon: "headphones", title: "24/7 mentor support" },
      { icon: "briefcase", title: "Job placement assistance" },
      { icon: "code", title: "Real-world projects" },
      { icon: "message", title: "Interview preparation" },
    ],
    footnotes: [
      { icon: "phone", text: "+91 84-889-889-84" },
      { icon: "mail", text: "contact@cinutedigital.com" },
      { icon: "mapPin", text: "Mumbai, Maharashtra, India" },
    ],
  },
};

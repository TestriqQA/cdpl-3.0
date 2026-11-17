import type { CourseContent } from "@/types/course-page";
import { API_TESTING_FAQS } from "@/data/courses/software-testing/faqs/api-testing";

// Content for /courses/software-testing-course/api-testing, moved from the old
// src/components/api-testing/* sections. Kept word for word except repeated
// filler (duplicate stat pills, repeated per-card tags, a second and third
// copy of the same keyword paragraph), which a cleanup pass removed.
export const apiTestingCourse: CourseContent = {
  slug: "api-testing",
  courseName: "API Testing",
  sourceName: "API Testing Course Page",

  seo: {
    title: "API Testing Course with Postman & REST APIs | CDPL",
    description:
      "Master API testing with Postman & REST APIs in 15 hours — request chaining, validation, automation & live projects with placement assistance.",
    image: "/og-images/courses-software-testing-course-api-testing-og.webp",
  },

  schema: {
    name: "API Testing Course with POSTMAN & RestAPIs",
    description: "Master API testing in 15 hours with live projects, global certification, and placement support.",
    duration: "PT15H",
    howTo: {
      name: "How to Enroll in CDPL API Testing Course",
      description: "A step-by-step guide to enrolling in our specialized API Testing program.",
      steps: [
        { name: "Review Syllabus", text: "Analyze the Postman, JSON structure, and automation framework curriculum." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        { name: "Start Learning", text: "Master network requests, perform backend validations, and get certified!" },
      ],
    },
  },

  hero: {
    breadcrumb: "API Testing with Postman, REST & GraphQL",
    badges: [
      { icon: "star", text: "{rating} Rated" },
      { icon: "users", text: "Mentor-Led Cohorts" },
      { icon: "globe2", text: "Live Online & Classroom" },
    ],
    h1: "Master [[API Testing]] & [[Automation]] with Postman, REST & GraphQL",
    subtitle:
      "Build high-demand skills in **API automation testing**, **REST API examples**, and **security validation**. Learn **how to test API** endpoints efficiently with **Postman**, ensure robust backend performance, and secure your career with our **placement support**.",
    description:
      "Topics include Postman Collections & Newman, REST principles, GraphQL queries & mutations, Swagger/OpenAPI, OAuth2 & JWT, data-driven tests, Jenkins/GitHub Actions, and reporting with evidence for enterprise-grade QA.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in API Testing program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with **API testing examples**",
      "CI/CD integration (Jenkins, GitHub Actions) for **API automation**",
      "Interview prep & **API test cases examples** portfolio",
      "QR-verified global certification",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "code", title: "Hands-On API Labs", description: "Postman, REST, GraphQL & auth flows" },
      { icon: "users", title: "Mentor-Led Cohort", description: "13+ yrs industry veterans" },
      { icon: "briefcase", title: "Placement Support", description: "Resume, mock interviews, referrals" },
      { icon: "shieldCheck", title: "API Security", description: "OWASP API Top-10, OAuth2, JWT" },
    ],
  },

  stats: {
    heading: "Real-World Outcomes: [[API Testing]] Careers & Training Impact",
    intro:
      "Discover key metrics that matter for **API Testing** careers in India—job openings, fresher salary ranges, market growth, and our concise **15-hour** intensive program designed to make you **job-ready** quickly.",
    items: [
      { value: "25%", label: "Market growth from 2020 to 2030" },
      { value: "1,01,000+", label: "Job Vacancies in India" },
      { value: "4 LPA", label: "API Testing freshers’ average salary" },
      { value: "75%", label: "Job Satisfaction" },
      { value: "32%", label: "India’s share in the global market" },
    ],
    footnote: "Verified metrics from the program brochure.",
  },

  why: {
    heading: "Why Master [[API Testing]] in 2026?",
    intro:
      "**What is API testing in software testing?** It is the backbone of modern applications. With **online API testing** becoming critical for banking and e-commerce, **API checker** roles and **API automation testing** experts are in high demand.",
    cards: [
      {
        icon: "shield",
        title: "Secure APIs = Trusted Apps",
        description: "Validate authentication, encryption, and prevent data leaks. Learn api testing methods to block OWASP vulnerabilities.",
      },
      {
        icon: "zap",
        title: "Catch Bugs Early",
        description: "Find integration issues 10× faster than UI tests. Master how to do api testing to save cost and time.",
      },
      {
        icon: "target",
        title: "Ensure 100% Functionality",
        description: "Verify endpoints and schemas. Use public api for testing scenarios to practice test api post request workflows.",
      },
      {
        icon: "trendingUp",
        title: "High-Demand Skill",
        description: "API testing tools expertise earns you 20–30% more. Future-proof your career in API automation.",
      },
      {
        icon: "globe",
        title: "Backbone of Modern Tech",
        description: "Everything runs on APIs. From rest api example validation to diverse api testing examples, be the quality gatekeeper.",
      },
      {
        icon: "lock",
        title: "OWASP & Compliance Ready",
        description: "Test for rate limits and SQLi. Understand api testing means security first with OAuth2/JWT.",
      },
    ],
    outro:
      "Learn **API automation**, **schema validation**, **contract testing**, **CI/CD integration**, and **OWASP API security** to deliver reliable services. Become the quality gatekeeper for microservices, mobile backends, and cloud-native apps.",
  },

  curriculum: {
    heading: "Industry Ready [[Curriculum]]",
    intro:
      "From **what is API testing** basics to advanced **API automation testing tools**. Master **Postman API testing tutorial** modules, **REST API automation**, and build a **sample REST API for testing** portfolio.",
    modules: [
      {
        title: "Basics of API Testing",
        topics: [
          "What is API Testing",
          "POSTMAN Introduction",
          "POSTMAN Installation",
          "JavaScript Object Notation (JSON)",
          "Creating Dummy APIs for API Testing",
          "How to Create Own APIs",
        ],
      },
      {
        title: "Postman Workspace & Collections",
        topics: [
          "Creating Workspace",
          "Creating a Collection",
          "Saving & Editing Requests",
          "Exporting & Importing Collections",
          "Operations on Collections",
        ],
      },
      {
        title: "HTTP Requests in Postman",
        topics: [
          "Creating Requests – GET, POST, PUT, PATCH & DELETE",
          "HTTP Request Validation in POSTMAN",
          "Request/Response Structure",
        ],
      },
      {
        title: "Validation & Test Scripts",
        topics: [
          "Validating Response with Test Scripts in Postman",
          "Testing Status Codes",
          "Testing Headers & Cookies",
          "Testing Response Time",
          "Testing Response Body",
          "Testing JSON Schema",
        ],
      },
      {
        title: "Environments & Variables",
        topics: [
          "Creating Environments in POSTMAN",
          "Benefits of Environment Variables",
          "How to Use Environment Variables",
        ],
      },
      {
        title: "Hands-On Project: Employee.json API",
        topics: [
          "Create Server and .json File",
          "Execute Test Cases for HTTP Requests",
          "Create Variables & Environments",
          "Add Validation Scripts",
        ],
      },
      {
        title: "Hands-On Project: Contact List (Live)",
        topics: [
          "Create User via API Link using Postman",
          "Create Collections for Different Modules",
          "Write & Execute Test Cases",
          "Use Authorization ID (Token)",
        ],
      },
      {
        title: "Security Practice: OWASP Juice Shop",
        topics: ["Overview of OWASP Juice Shop", "Security Training & Awareness Use-cases", "Practice for Pen-Testing/CTFs"],
      },
    ],
    ctas: [
      { label: "Book a Free Demo", kind: "careerSession" },
      { label: "Get Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    heading: "[[Tools]] You’ll Master",
    intro:
      "Get hands-on with top **free API testing tools** and enterprise platforms. Learn **how to test api** effectively using industry-standard **API testing tools**.",
    items: [
      { name: "POSTMAN", logo: "/techstack_logos/postman-logo.svg" },
      { name: "REST APIs", logo: "/techstack_logos/REST-API-logo.png" },
      { name: "JSON / XML", icon: "fileJson" },
      { name: "OAuth 2.0", logo: "/techstack_logos/OAuth2-logo.jpg" },
      { name: "API Chaining", icon: "link" },
      { name: "Newman CLI", logo: "/techstack_logos/postman-logo.svg" },
      { name: "OWASP ZAP", logo: "/techstack_logos/owasp-zap-logo.svg" },
      { name: "Mock Servers", icon: "database" },
    ],
    itemNote: "Build job-ready skills in configuration, scripting, and CI/CD integration for real-world API testing.",
  },

  projects: {
    heading: "Build Your [[Portfolio]] with [[Real Projects]]",
    intro:
      "Don't just **learn API testing** theory. Execute **API testing examples** on live apps. Practice **api testing means** delivering bug-free code with these capstones.",
    items: [
      {
        icon: "smartphone",
        title: "Contact List CRUD API",
        description:
          "Full-stack contact manager with user authentication, request validation, and country-wise filtering for modern micro-frontends.",
        features: ["JWT Authentication", "CRUD Operations", "Data Validation", "Robust Error Handling"],
      },
      {
        icon: "shield",
        title: "OWASP Juice Shop Security Testing",
        description:
          "Hands-on security testing lab using a deliberately vulnerable app to practice OWASP API Top-10 attack detection and prevention.",
        features: ["SQL Injection", "XSS Testing", "Broken Auth", "Rate Limiting"],
      },
      {
        icon: "database",
        title: "Employee Management System",
        description:
          "Enterprise-grade HR API with role-based access control, pagination, and searchable audit logs for compliance-ready workflows.",
        features: ["RBAC Testing", "Pagination", "Search & Filter", "Audit Trail"],
      },
    ],
    outro:
      "These portfolio projects demonstrate **API automation**, **schema validation**, **contract testing**, and **security best practices**. Showcase measurable outcomes—coverage reports, response time trends, and CI/CD pipelines—to stand out for **QA Engineer** and **Automation Tester** roles.",
  },

  testimonials: {
    heading: "Success [[Stories]]",
    intro: "Hear from students who mastered **what is API testing with example** projects and landed top jobs.",
  },

  career: {
    heading: "Launch Your [[API Testing]] Career",
    intro:
      "Average salary: **₹4–8 LPA**. With skills in **API automation testing** and **Postman**, you become eligible for roles like **API Tester** and **SDET**. Companies need experts who know **how to test api** thoroughly.",
    rolesTitle: "High-Paying Job Roles",
    roles: [
      "API Tester",
      "QA Engineer",
      "Automation Tester",
      "Security Tester",
      "DevOps Engineer",
      "Performance Engineer",
      "Integration Specialist",
      "SDET",
    ],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "Tech Mahindra", "HCL", "IBM", "Deloitte"],
    companiesNote: "+ 500+ startups & MNCs actively hiring",
  },

  audience: {
    eyebrow: "Beginner-friendly • No coding required",
    heading: "Who Is This [[For]]?",
    intro:
      "Ideal for **career switchers**, **fresh graduates**, **job seekers**, and **manual testers** aiming to master **API testing**, **automation**, and **security**.",
    items: [
      { icon: "users", title: "Career Switchers", description: "Non-IT pros. Learn what is API testing in software testing from scratch." },
      {
        icon: "graduationCap",
        title: "Fresh Graduates",
        description: "B.Tech/BCA. Get job-ready with API testing javatpoint style easy learning + practicals.",
      },
      { icon: "briefcase", title: "Job Seekers", description: "Upskill with free API testing tools knowledge and commercial tool mastery." },
      { icon: "target", title: "Manual Testers", description: "Upgrade from manual to API automation testing." },
    ],
    outro:
      'Perfect for those asking "how to **learn API testing**?" or looking for a **manual testing course with placement** that includes API skills.',
    ctas: [{ label: "Enroll Now - Become a QA Tester", kind: "enroll" }],
  },

  faq: {
    intro: "Answers to **what is API testing**, eligibility, and placement.",
    items: API_TESTING_FAQS,
  },

  cta: {
    eyebrow: "New batch starting soon • Limited seats",
    heading: "Start Your [[API Testing]] Career Today",
    intro: "Master **what is API testing**, **Postman**, and **Automation** in 15 hours.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email us for course details" },
    ],
    highlights: [
      { icon: "clock", title: "15-Hour Live Training", description: "Weekend & evening slots" },
      { icon: "award", title: "Global Certification", description: "QR-verified digital badge" },
      { icon: "check", title: "Job Assistance", description: "Resume & interview prep" },
    ],
    footnotes: [
      { icon: "mapPin", text: "Mira Road & Vasai, Maharashtra" },
      { icon: "shield", text: "Secure & privacy-first enrollment" },
    ],
  },
};

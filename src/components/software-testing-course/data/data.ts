// lib/data.ts
import { Zap, Users, Briefcase, Award, Clock, ShieldCheck } from 'lucide-react';
import { iconMap } from '@/components/software-testing-course/CoursesSection';
export const features = [
    { icon: Zap, title: '100% Live Interactive Classes', desc: 'No pre-recorded videos' },
    { icon: Users, title: 'Small Batches (Max 15)', desc: 'Personal mentor attention' },
    { icon: Briefcase, title: '100% Placement Assistance', desc: 'Until you get placed' },
    { icon: Award, title: 'Industry Certificate', desc: 'Recognized by 350+ companies' },
    { icon: Clock, title: 'Flexible Timings', desc: 'Weekday & Weekend batches' },
    { icon: ShieldCheck, title: 'Lifetime Access', desc: 'Recordings + updates forever' },
];

export interface Course {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    students: string;
    rating: number;
    level: string;
    popular: boolean;
    link: string;
    icon: keyof typeof iconMap;
    features: string[];
    /** Optional per-course offer end timestamp (ISO). If omitted, defaults to +48h from mount */
    offerEndsAt?: string;
    syllabusLink?: string;
}

export const COURSES: Course[] = [
    // --- Software Testing Courses ---
    {
        id: 1,
        title: 'Manual Software Testing',
        category: 'Software Testing',
        description: 'Learn to facilitate Scrum teams and drive Agile projects effectively.',
        duration: '50 Hours',
        students: '1200+',
        rating: 4.9,
        level: 'Beginner',
        popular: true,
        link: '/manual-testing-course',
        icon: 'BookOpen',
        features: ['ISTQB Foundation Prep', 'Test Case Design', 'Defect Life Cycle'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/manual-software-testing.pdf',
    },
    {
        id: 2,
        title: 'Advanced Automation Testing',
        category: 'Software Testing',
        description: 'Drive product vision and delivery in SAFe settings.',
        duration: '85 Hours',
        students: '950+',
        rating: 4.8,
        level: 'Intermediate',
        popular: true,
        link: '/automation-testing-course',
        icon: 'Code',
        features: ['Selenium WebDriver', 'CI/CD Integration (Jenkins)', 'Advanced Java Concepts'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-automation-testing.pdf',
    },
    {
        id: 3,
        title: 'API Testing using POSTMAN and RestAPIs',
        category: 'Software Testing',
        description: 'Master API testing using Postman, Rest Assured, and Groovy for robust web services.',
        duration: '15 Hours',
        students: '700+',
        rating: 4.7,
        level: 'Intermediate',
        popular: false,
        link: '/api-testing',
        icon: 'Zap',
        features: ['Postman & Swagger', 'Rest Assured Framework', 'JSON/XML Validation'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/api-testing-using-postman-and-restapis.pdf',
    },
    {
        id: 4,
        title: 'ETL Testing Course',
        category: 'Software Testing',
        description: 'Master the art of leading enterprise-wide Agile transformations using the Scaled Agile Framework (SAFe).',
        duration: '100 Hours',
        students: '500+',
        rating: 4.6,
        level: 'Intermediate',
        popular: true,
        link: '/etl-testing',
        icon: 'Shield',
        features: ['Data Warehousing Concepts', 'SQL Testing', 'ETL Tools', 'ETL Testing Lifecycle & Test Planning'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/etl-testing-&-development.pdf',
    },
    {
        id: 5,
        title: 'Database Management System using MySQL',
        category: 'Software Testing',
        description: 'Master SQL queries, database design, and management with MySQL. Learn to build scalable and efficient database solutions.',
        duration: '40 Hours',
        students: '500+',
        rating: 4.8,
        level: 'Beginner',
        popular: false,
        link: '/dbms-course',
        icon: 'Database',
        features: ['SQL Fundamentals', 'Database Design', 'Normalization', 'Complex Queries'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/database-management-system-using-mysql.pdf',
    },
    {
        id: 6,
        title: 'Advanced Software Testing',
        category: 'Software Testing',
        description: 'Go beyond the basics—build strategies, manage risk, and measure quality with actionable metrics.',
        duration: '95 Hours',
        students: '2,268+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/advance-software-testing',
        icon: 'ChartBar',
        features: ['Test Strategy & Risk-Based Testing', 'Traceability & Coverage Techniques', 'Test Management & Metrics', 'Performance/Security Test Readiness'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-software-testing.pdf',
    },
    {
        id: 7,
        title: 'Master Program in Java Programming',
        category: 'Software Testing',
        description: 'Become industry-ready with Core Java, OOP, Collections, JDBC, Spring Boot, REST APIs, unit testing, and deployment. Build portfolio projects and earn a QR-verified certificate.',
        duration: '30 Hours',
        students: 'Not specified',
        rating: 4.9,
        level: 'Beginner',
        popular: true,
        link: '/java-course',
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
        category: 'Software Testing',
        description: 'End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.',
        duration: '180 Hours',
        students: '2,302+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/advance-manual-automation-testing',
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
        category: 'Software Testing',
        description: 'Master Python Programming from absolute basics all the way to advanced and professional-level concepts! Dive deep into Python syntax, data structures, object-oriented programming, functional programming, automation scripting, and real-world problem-solving through engaging, hands-on projects that reinforce every concept.',
        duration: '30 Hours',
        students: '2,268+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/python-course',
        icon: 'TrendingUp',
        features: ['Python Basics Guide', 'Advanced Python Coding', 'Learn Python Fast', 'Real-World Python Projects & Automation Mastery'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/python-programming.pdf',
    },
]

export const curriculumContent = {
    title: "Detailed Curriculum",
    subtitle: "Choose a program tab to see its modules.",
    tracks: [
        {
            id: "manual-testing",
            title: "Manual Software Testing",
            weeks: [
                {
                    number: "01",
                    title: "SDLC, Testing Overview & STLC Basics",
                    description:
                        "Software Development Life Cycle (Waterfall, Spiral, V-Model, Prototype, Hybrid). Software Testing overview, STLC introduction, and types of software testing used in corporate (White Box, Black Box, Gray Box).",
                    deliverables: ["Glossary & notes", "SDLC vs STLC chart", "Model comparison table"]
                },
                {
                    number: "02",
                    title: "Black-Box Testing Types & Test Design Artifacts",
                    description:
                        "Black-Box Testing overview and major testing types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Adhoc. Also includes Requirement & Documentation Testing, Exploratory Testing, Smoke, Sanity, Regression, and Re-Testing. Test artifacts: Test Plan, Test Cases, Traceability Matrix.",
                    deliverables: ["Test plan draft", "30+ test cases", "RTM (v1)"]
                },
                {
                    number: "03",
                    title: "STLC in Detail + Defect Tracking & Reporting",
                    description:
                        "System study, detailed STLC activities: test planning, test case writing, test execution, test execution reporting, and retrospective meeting. Defect management: identification, reporting, tracking process, Defect Tracking Life Cycle (DTLC), severity vs priority, types of defects.",
                    deliverables: ["Defect log", "Bug reports (with severity/priority)", "Test execution report"]
                },
                {
                    number: "04",
                    title: "Agile Methodology & Test Management Tools",
                    description:
                        "Agile overview, importance, ceremonies/meetings, roles/members, and working Agile model. Hands-on with test management and tracking tools used in industry: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel (test cases & reports).",
                    deliverables: ["Jira project & sprint board", "TestRail test suite", "MantisBT bug tracker setup", "Retrospective notes"]
                }
            ]
        },

        {
            id: "api-postman-rest",
            title: "API Testing using POSTMAN and RestAPIs",
            weeks: [
                {
                    number: "01",
                    title: "Basics of API Testing & Postman Setup",
                    description:
                        "What is API testing, POSTMAN introduction & installation, creating workspace and collections, creating & saving requests (GET, POST, PUT, PATCH, DELETE), operations on collections, and JSON (JavaScript Object Notation) essentials.",
                    deliverables: ["Workspace setup", "CRUD requests collection", "JSON primer notes"],
                },
                {
                    number: "02",
                    title: "Assertions & HTTP Validation in Postman",
                    description:
                        "Validate responses with Postman test scripts: status codes, headers, cookies, response time, response body, and JSON Schema validation. Perform HTTP request validation, plus exporting & importing collections for reuse.",
                    deliverables: ["Test scripts pack", "JSON schema files", "Exported collection"],
                },
                {
                    number: "03",
                    title: "Environments, Variables & Data Files",
                    description:
                        "Create environments and variables, understand benefits of env variables, set up a server and .json data file, execute test cases for various HTTP requests, and add validation scripts for robust coverage.",
                    deliverables: ["Env & globals files", "employee.json data file", "Newman/Runner report"],
                },
                {
                    number: "04",
                    title: "Projects: Contact List & OWASP Juice Shop",
                    description:
                        "Hands-on projects: Contact List (live site) and OWASP Juice Shop. Create users via API links in Postman, organize collections per module, write & execute test cases end-to-end, and use Authorization/Token IDs for secured flows.",
                    deliverables: ["Auth-enabled suite", "Project collections", "Test summary report"],
                },
            ],
        },

        {
            id: "dbms-mysql",
            title: "Database Management System using MySQL",
            weeks: [
                {
                    number: "01",
                    title: "DBMS & MySQL Fundamentals, Setup, and Data Modeling",
                    description:
                        "Understand DBMS (definitions, importance, types: Relational/NoSQL/Hierarchical), data models, schemas, and data independence. Introduction to MySQL (history, features, use cases). Install & configure MySQL Server and Workbench; use CLI and Workbench GUI. Practice database design with ER modeling → relational schema conversion; apply normalization (1NF–BCNF) and discuss denormalization trade-offs. Create tables with correct data types, keys, and constraints; intro to basic indexing.",
                    deliverables: ["MySQL installed & secured", "ER diagram + normalized schema", "Sample database with keys & constraints"]
                },
                {
                    number: "02",
                    title: "Core SQL: Queries, Filters, DML, Operators & Aggregations",
                    description:
                        "Write basic SQL queries with SELECT and WHERE; retrieve from single/multiple tables. Apply essential filtering (IN, BETWEEN, LIKE, IS NULL), sorting (ORDER BY), and pagination (LIMIT/OFFSET). Use DML for INSERT, UPDATE, DELETE; manage transactions with COMMIT/ROLLBACK. Work with MySQL operators (arithmetic, concatenation, logical/comparison). Summarize data using GROUP BY, HAVING, and aggregate functions (SUM, AVG, etc.).",
                    deliverables: ["Practice queries set-1", "DML + transaction script", "Aggregation report (GROUP BY/HAVING)"]
                },
                {
                    number: "03",
                    title: "Advanced SQL, Subqueries, Window Functions & Performance",
                    description:
                        "Join data with INNER, LEFT, SELF, and CROSS joins; use USING and NATURAL JOIN. Build scalar and correlated subqueries; combine results with UNION/UNION ALL. Apply window functions (ROW_NUMBER, RANK, DENSE_RANK) with OVER, including partitions for running totals and moving averages. Optimize queries using EXPLAIN and indexing strategies (B-tree, hash, full-text). Configure/tune server parameters and monitor performance (slow query logs). Back up and restore databases (full/incremental with mysqldump).",
                    deliverables: ["Joins & subqueries workbook", "Indexed schema + EXPLAIN snapshots", "Backup/restore runbook"]
                },
                {
                    number: "04",
                    title: "SQL Objects, Security, and Capstone with Assessment",
                    description:
                        "Manage SQL advanced features and objects: DDL (CREATE/ALTER/DROP), DML, TCL (COMMIT/ROLLBACK/SAVEPOINT), and DCL (GRANT/REVOKE). Build Views; write Stored Procedures; create User-Defined Functions & Triggers for automation; use CTEs and Temporary Tables. Apply concepts to real-world case studies (sales/finance) and complete a capstone: design, implement, and optimize a business-scenario database. Conclude with final assessment and certification.",
                    deliverables: ["Views/SP/UDF/Trigger pack", "Capstone database + documentation", "Final assessment & certification readiness"]
                }
            ]
        },

        {
            id: "etl-testing",
            title: "ETL Testing Course",
            weeks: [
                {
                    number: "01",
                    title: "ETL/ELT Foundations & Data Warehousing",
                    description:
                        "Overview of ETL/ELT processes, why ETL matters in data pipelines, roles of testers vs developers. Data warehousing architecture, staging areas, dimensional modeling (star vs snowflake), and relational vs dimensional models.",
                    deliverables: ["STM document", "Dimensional model (star/snowflake)", "Source-to-staging mapping sheet"]
                },
                {
                    number: "02",
                    title: "SQL for ETL Testing & Manual Validation",
                    description:
                        "Core and advanced SQL for validation (filters, joins, aggregates), writing queries to verify extract/transform/load accuracy, debugging SQL-based jobs. Manual ETL testing: create test plans, design comprehensive test cases for completeness/accuracy, and manage defects.",
                    deliverables: ["Validation queries pack", "ETL test plan & test cases", "Defect log with severity/priority"]
                },
                {
                    number: "03",
                    title: "Automation + ETL Development with Talend & Informatica",
                    description:
                        "Automate ETL tests using Python and Selenium with parameterization and reporting. Talend Studio for ETL development (tMap, tJoin, dynamic schemas, multi-source integration). Informatica workflows, transformations, debugging, and optimization. Data transformation/validation techniques: handling NULLs, deduplication, applying business logic, and real-time validation.",
                    deliverables: ["Automated test suite (Python/Selenium)", "Talend/Informatica jobs", "Data quality & validation report"]
                },
                {
                    number: "04",
                    title: "Modern Platforms, Reporting & Capstone Projects",
                    description:
                        "Overview of Snowflake, SnapLogic, and Power BI in ETL workflows. Capstone: Retail Sales ETL testing project and E-Commerce ETL pipeline build + validation—covering test plans, automated scripts, end-to-end execution, and BI reporting.",
                    deliverables: ["Capstone ETL pipeline & test assets", "Power BI dashboards", "Final test summary & results"]
                }
            ]
        },

        {
            id: "advanced-software-testing",
            title: "Advanced Software Testing",
            weeks: [
                {
                    number: "01",
                    title: "SDLC/STLC Foundations & Testing Taxonomy",
                    description:
                        "Software Development Life Cycle models (Waterfall, Spiral, V-Model, Prototype/Dynamic, Hybrid) and where testing fits. Testing overview, Software Testing Life Cycle, and testing styles used in corporate (White-Box, Black-Box, Gray-Box).",
                    deliverables: ["Glossary & notes", "SDLC vs STLC map", "Model comparison sheet"]
                },
                {
                    number: "02",
                    title: "Black-Box Testing Types & Coverage Design",
                    description:
                        "Deep dive into functional and non-functional test types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Ad-hoc; plus Requirement/Documentation testing, Exploratory, Smoke, Sanity, Regression and Re-testing. Traceability and coverage strategy.",
                    deliverables: ["Test plan (v1)", "30+ test cases", "Requirements Traceability Matrix"]
                },
                {
                    number: "03",
                    title: "STLC in Practice + Defect Management",
                    description:
                        "End-to-end STLC execution: system study, test planning, test case writing, execution, reporting and retrospectives. Defect lifecycle and reporting: identification, reporting workflow, Defect Tracking Life Cycle (DTLC), severity vs priority, common defect types; build test execution reports.",
                    deliverables: ["Defect log with DTLC states", "Execution & summary reports", "Retrospective notes"]
                },
                {
                    number: "04",
                    title: "Agile Testing & Test Management Tooling",
                    description:
                        "Agile overview and importance, ceremonies/meetings, roles, and working agile model. Hands-on with industry tools: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel for cases/reports; establishing practical workflows.",
                    deliverables: ["Jira project & sprint board", "TestRail suite/run", "MantisBT project with bugs"]
                }
            ]
        },

        {
            id: "advanced-automation",
            title: "Advanced Automation Testing",
            weeks: [
                {
                    number: "01-02",
                    title: "Programming Foundations + Selenium WebDriver Essentials",
                    description:
                        "Set up environment (IDE, SDKs, Selenium) and refresh core programming (Java/Python basics, arrays/lists, conditions & loops, functions, OOP/classes, collections, exceptions). Learn web automation fundamentals: browser operations & navigation, HTML basics, element identification & locators, finding single/multiple elements, Select class, synchronization/waits, handling windows, actions (mouse/keyboard), screenshots, and common Selenium exceptions.",
                    deliverables: ["Local dev & Selenium setup", "Locator & navigation mini-suite", "Synchronization scenarios pack", "Screenshot helper utility"]
                },
                {
                    number: "03",
                    title: "Hybrid Framework Design with TestNG/PyTest & POM",
                    description:
                        "Design a scalable hybrid test framework: understand TestNG/PyTest, define framework structure and folder layout, implement Page Object Model, author automation test cases, build data-driven tests from Excel, and externalize configs/test data.",
                    deliverables: ["Hybrid framework repo (POM)", "Data-driven tests from Excel", "Configurable runner & utilities"]
                },
                {
                    number: "04",
                    title: "Reporting, Logs & End-to-End Project",
                    description:
                        "Generate rich execution artifacts and manage failures: HTML reports and test logs, keep records of failed tasks/reruns, and finalize an end-to-end Hybrid Framework Design project. (Tooling includes Allure/TestNG/PyTest as applicable.)",
                    deliverables: ["Allure/HTML reports + logs", "Failed-tests tracking & rerun setup", "E2E hybrid framework project"]
                }
            ]
        },

        {
            id: "master-program",
            title: "Advanced Manual and Automation Testing - Master Program",
            // Your original 12 weeks condensed into 6 modules (kept content meaning)
            weeks: [
                {
                    number: "01-02",
                    title: "Testing Fundamentals & SDLC",
                    description:
                        "Introduction to software testing, SDLC models, testing types, and QA principles.",
                    deliverables: ["Understanding of SDLC", "Testing concepts mastery", "First test case creation"],
                },
                {
                    number: "03-04",
                    title: "Manual Testing Mastery",
                    description:
                        "Deep dive into test design, execution, and defect lifecycle with JIRA.",
                    deliverables: ["50+ test cases", "Defect reports", "Testing documentation"],
                },
                {
                    number: "05-06",
                    title: "Automation with Selenium",
                    description:
                        "WebDriver, waits, page objects, framework design, reporting.",
                    deliverables: ["Automation framework", "20+ automated scripts", "Test execution reports"],
                },
                {
                    number: "07-08",
                    title: "API & Database Testing",
                    description:
                        "REST testing with Postman/Newman and DB assertions with MySQL.",
                    deliverables: ["API test suite", "Database test cases", "Integration testing"],
                },
                {
                    number: "09-10",
                    title: "Performance & Security Basics",
                    description:
                        "Load/stress testing with JMeter and OWASP top 10 awareness.",
                    deliverables: ["Performance report", "Security assessment"],
                },
                {
                    number: "11-12",
                    title: "Capstone & Interview Prep",
                    description:
                        "End-to-end project, portfolio, mock interviews & resume workshop.",
                    deliverables: ["Capstone project", "Portfolio", "Interview preparation"],
                },
            ],
        },
    ],
}


export const batches = [
    { type: 'Weekend Batch', start: '14 Dec 2025', seats: 6, instructor: 'Rakesh Sir (15+ yrs)' },
    { type: 'Weekday Batch', start: '6 Jan 2026', seats: 12, instructor: 'Neha Mam (Ex-Accenture)' },
    { type: 'Fast-Track', start: '20 Dec 2025', seats: 3, instructor: 'Vikram Sir (Ex-TCS)' },
];

export const faqs = [
    { q: 'Do you provide placement?', a: 'Yes, 100% placement assistance. Job-Ready plan has job guarantee.' },
    { q: 'Is the course live or recorded?', a: '100% live interactive classes. Recordings provided for revision.' },
    { q: 'Any prerequisites?', a: 'No prior coding needed. We teach everything from scratch.' },
    { q: 'Will I get a certificate?', a: 'Yes, industry-recognized certificate on completion.' },
    { q: 'What if I miss a class?', a: 'You get recording + doubt session + backup class.' },
    { q: 'Do you help with resume building?', a: 'Yes, professional resume + LinkedIn optimization included.' },
];

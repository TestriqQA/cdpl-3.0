// Older or alternative versions of a Software Testing section that several cities
// still use instead of the template's. A city picks one with `use` in
// ../overrides/software-testing.ts, e.g. use: { "curriculumContent.tracks": "v2" }.
// Placeholders work the same as in the template.

import type { CourseVariants } from "../types";

export const softwareTestingVariants: CourseVariants = {
  metadata: {
    title: { v2: "Software Testing Course in {{city}} | Learn QA Testing" },
    keywords: {
      v2: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course uae",
      v3: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course gujarat",
      v4: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course rajasthan",
      v5: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course {{cityLower}}",
      v6: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course uttar pradesh",
      v7: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course madhya pradesh",
      v8: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course kerala",
      v9: "software testing course {{cityLower}}, qa testing training {{cityLower}}, automation testing course, manual testing course, testing certification {{cityLower}}, qa course andhra pradesh",
    },
  },
  courseDetails: {
    language: {
      v2: "English & Arabic",
      v3: "English & Marathi",
      v4: "English & Gujarati",
      v5: "English & Telugu",
      v6: "English & Bengali",
      v7: "English & Punjabi",
      v8: "English & Malayalam",
    },
    price: { v2: "AED 4,999" },
    discountedPrice: { v2: "AED 3,499" },
  },
  heroContent: {
    stats: {
      v2: [
        { number: "500+", label: "Students Trained", description: "Successfully completed the course" },
        { number: "95%", label: "Job Placement", description: "Within 3 months of completion" },
        { number: "12", label: "Weeks Duration", description: "Intensive learning program" },
        { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
      ],
    },
  },
  courseOverviewContent: {
    modules: {
      v2: [
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
          link: "/manual-software-testing",
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
          link: "/api-testing-postman-rest",
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
          link: "/mysql-dbms",
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
          link: "/advanced-software-testing",
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
          link: "/advanced-automation-testing",
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
          link: "/advanced-manual-automation-master",
        },
      ],
    },
  },
  curriculumContent: {
    tracks: {
      v2: [
        {
          id: "manual-testing",
          title: "Manual Software Testing",
          weeks: [
            {
              number: "01",
              title: "SDLC, Testing Overview & STLC Basics",
              description: "Software Development Life Cycle (Waterfall, Spiral, V-Model, Prototype, Hybrid). Software Testing overview, STLC introduction, and types of software testing used in corporate (White Box, Black Box, Gray Box).",
              deliverables: ["Glossary & notes", "SDLC vs STLC chart", "Model comparison table"],
            },
            {
              number: "02",
              title: "Black-Box Testing Types & Test Design Artifacts",
              description: "Black-Box Testing overview and major testing types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Adhoc. Also includes Requirement & Documentation Testing, Exploratory Testing, Smoke, Sanity, Regression, and Re-Testing. Test artifacts: Test Plan, Test Cases, Traceability Matrix.",
              deliverables: ["Test plan draft", "30+ test cases", "RTM (v1)"],
            },
            {
              number: "03",
              title: "STLC in Detail + Defect Tracking & Reporting",
              description: "System study, detailed STLC activities: test planning, test case writing, test execution, test execution reporting, and retrospective meeting. Defect management: identification, reporting, tracking process, Defect Tracking Life Cycle (DTLC), severity vs priority, types of defects.",
              deliverables: ["Defect log", "Bug reports (with severity/priority)", "Test execution report"],
            },
            {
              number: "04",
              title: "Agile Methodology & Test Management Tools",
              description: "Agile overview, importance, ceremonies/meetings, roles/members, and working Agile model. Hands-on with test management and tracking tools used in industry: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel (test cases & reports).",
              deliverables: [
                "Jira project & sprint board",
                "TestRail test suite",
                "MantisBT bug tracker setup",
                "Retrospective notes",
              ],
            },
          ],
        },
        {
          id: "api-postman-rest",
          title: "API Testing using POSTMAN and RestAPIs",
          weeks: [
            {
              number: "01",
              title: "Basics of API Testing & Postman Setup",
              description: "What is API testing, POSTMAN introduction & installation, creating workspace and collections, creating & saving requests (GET, POST, PUT, PATCH, DELETE), operations on collections, and JSON (JavaScript Object Notation) essentials.",
              deliverables: ["Workspace setup", "CRUD requests collection", "JSON primer notes"],
            },
            {
              number: "02",
              title: "Assertions & HTTP Validation in Postman",
              description: "Validate responses with Postman test scripts: status codes, headers, cookies, response time, response body, and JSON Schema validation. Perform HTTP request validation, plus exporting & importing collections for reuse.",
              deliverables: ["Test scripts pack", "JSON schema files", "Exported collection"],
            },
            {
              number: "03",
              title: "Environments, Variables & Data Files",
              description: "Create environments and variables, understand benefits of env variables, set up a server and .json data file, execute test cases for various HTTP requests, and add validation scripts for robust coverage.",
              deliverables: ["Env & globals files", "employee.json data file", "Newman/Runner report"],
            },
            {
              number: "04",
              title: "Projects: Contact List & OWASP Juice Shop",
              description: "Hands-on projects: Contact List (live site) and OWASP Juice Shop. Create users via API links in Postman, organize collections per module, write & execute test cases end-to-end, and use Authorization/Token IDs for secured flows.",
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
              description: "Understand DBMS (definitions, importance, types: Relational/NoSQL/Hierarchical), data models, schemas, and data independence. Introduction to MySQL (history, features, use cases). Install & configure MySQL Server and Workbench; use CLI and Workbench GUI. Practice database design with ER modeling → relational schema conversion; apply normalization (1NF–BCNF) and discuss denormalization trade-offs. Create tables with correct data types, keys, and constraints; intro to basic indexing.",
              deliverables: [
                "MySQL installed & secured",
                "ER diagram + normalized schema",
                "Sample database with keys & constraints",
              ],
            },
            {
              number: "02",
              title: "Core SQL: Queries, Filters, DML, Operators & Aggregations",
              description: "Write basic SQL queries with SELECT and WHERE; retrieve from single/multiple tables. Apply essential filtering (IN, BETWEEN, LIKE, IS NULL), sorting (ORDER BY), and pagination (LIMIT/OFFSET). Use DML for INSERT, UPDATE, DELETE; manage transactions with COMMIT/ROLLBACK. Work with MySQL operators (arithmetic, concatenation, logical/comparison). Summarize data using GROUP BY, HAVING, and aggregate functions (SUM, AVG, etc.).",
              deliverables: ["Practice queries set-1", "DML + transaction script", "Aggregation report (GROUP BY/HAVING)"],
            },
            {
              number: "03",
              title: "Advanced SQL, Subqueries, Window Functions & Performance",
              description: "Join data with INNER, LEFT, SELF, and CROSS joins; use USING and NATURAL JOIN. Build scalar and correlated subqueries; combine results with UNION/UNION ALL. Apply window functions (ROW_NUMBER, RANK, DENSE_RANK) with OVER, including partitions for running totals and moving averages. Optimize queries using EXPLAIN and indexing strategies (B-tree, hash, full-text). Configure/tune server parameters and monitor performance (slow query logs). Back up and restore databases (full/incremental with mysqldump).",
              deliverables: ["Joins & subqueries workbook", "Indexed schema + EXPLAIN snapshots", "Backup/restore runbook"],
            },
            {
              number: "04",
              title: "SQL Objects, Security, and Capstone with Assessment",
              description: "Manage SQL advanced features and objects: DDL (CREATE/ALTER/DROP), DML, TCL (COMMIT/ROLLBACK/SAVEPOINT), and DCL (GRANT/REVOKE). Build Views; write Stored Procedures; create User-Defined Functions & Triggers for automation; use CTEs and Temporary Tables. Apply concepts to real-world case studies (sales/finance) and complete a capstone: design, implement, and optimize a business-scenario database. Conclude with final assessment and certification.",
              deliverables: [
                "Views/SP/UDF/Trigger pack",
                "Capstone database + documentation",
                "Final assessment & certification readiness",
              ],
            },
          ],
        },
        {
          id: "etl-testing",
          title: "ETL Testing Course",
          weeks: [
            {
              number: "01",
              title: "ETL/ELT Foundations & Data Warehousing",
              description: "Overview of ETL/ELT processes, why ETL matters in data pipelines, roles of testers vs developers. Data warehousing architecture, staging areas, dimensional modeling (star vs snowflake), and relational vs dimensional models.",
              deliverables: ["STM document", "Dimensional model (star/snowflake)", "Source-to-staging mapping sheet"],
            },
            {
              number: "02",
              title: "SQL for ETL Testing & Manual Validation",
              description: "Core and advanced SQL for validation (filters, joins, aggregates), writing queries to verify extract/transform/load accuracy, debugging SQL-based jobs. Manual ETL testing: create test plans, design comprehensive test cases for completeness/accuracy, and manage defects.",
              deliverables: ["Validation queries pack", "ETL test plan & test cases", "Defect log with severity/priority"],
            },
            {
              number: "03",
              title: "Automation + ETL Development with Talend & Informatica",
              description: "Automate ETL tests using Python and Selenium with parameterization and reporting. Talend Studio for ETL development (tMap, tJoin, dynamic schemas, multi-source integration). Informatica workflows, transformations, debugging, and optimization. Data transformation/validation techniques: handling NULLs, deduplication, applying business logic, and real-time validation.",
              deliverables: [
                "Automated test suite (Python/Selenium)",
                "Talend/Informatica jobs",
                "Data quality & validation report",
              ],
            },
            {
              number: "04",
              title: "Modern Platforms, Reporting & Capstone Projects",
              description: "Overview of Snowflake, SnapLogic, and Power BI in ETL workflows. Capstone: Retail Sales ETL testing project and E-Commerce ETL pipeline build + validation—covering test plans, automated scripts, end-to-end execution, and BI reporting.",
              deliverables: ["Capstone ETL pipeline & test assets", "Power BI dashboards", "Final test summary & results"],
            },
          ],
        },
        {
          id: "advanced-software-testing",
          title: "Advanced Software Testing",
          weeks: [
            {
              number: "01",
              title: "SDLC/STLC Foundations & Testing Taxonomy",
              description: "Software Development Life Cycle models (Waterfall, Spiral, V-Model, Prototype/Dynamic, Hybrid) and where testing fits. Testing overview, Software Testing Life Cycle, and testing styles used in corporate (White-Box, Black-Box, Gray-Box).",
              deliverables: ["Glossary & notes", "SDLC vs STLC map", "Model comparison sheet"],
            },
            {
              number: "02",
              title: "Black-Box Testing Types & Coverage Design",
              description: "Deep dive into functional and non-functional test types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Ad-hoc; plus Requirement/Documentation testing, Exploratory, Smoke, Sanity, Regression and Re-testing. Traceability and coverage strategy.",
              deliverables: ["Test plan (v1)", "30+ test cases", "Requirements Traceability Matrix"],
            },
            {
              number: "03",
              title: "STLC in Practice + Defect Management",
              description: "End-to-end STLC execution: system study, test planning, test case writing, execution, reporting and retrospectives. Defect lifecycle and reporting: identification, reporting workflow, Defect Tracking Life Cycle (DTLC), severity vs priority, common defect types; build test execution reports.",
              deliverables: ["Defect log with DTLC states", "Execution & summary reports", "Retrospective notes"],
            },
            {
              number: "04",
              title: "Agile Testing & Test Management Tooling",
              description: "Agile overview and importance, ceremonies/meetings, roles, and working agile model. Hands-on with industry tools: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel for cases/reports; establishing practical workflows.",
              deliverables: ["Jira project & sprint board", "TestRail suite/run", "MantisBT project with bugs"],
            },
          ],
        },
        {
          id: "advanced-automation",
          title: "Advanced Automation Testing",
          weeks: [
            {
              number: "01-02",
              title: "Programming Foundations + Selenium WebDriver Essentials",
              description: "Set up environment (IDE, SDKs, Selenium) and refresh core programming (Java/Python basics, arrays/lists, conditions & loops, functions, OOP/classes, collections, exceptions). Learn web automation fundamentals: browser operations & navigation, HTML basics, element identification & locators, finding single/multiple elements, Select class, synchronization/waits, handling windows, actions (mouse/keyboard), screenshots, and common Selenium exceptions.",
              deliverables: [
                "Local dev & Selenium setup",
                "Locator & navigation mini-suite",
                "Synchronization scenarios pack",
                "Screenshot helper utility",
              ],
            },
            {
              number: "03",
              title: "Hybrid Framework Design with TestNG/PyTest & POM",
              description: "Design a scalable hybrid test framework: understand TestNG/PyTest, define framework structure and folder layout, implement Page Object Model, author automation test cases, build data-driven tests from Excel, and externalize configs/test data.",
              deliverables: [
                "Hybrid framework repo (POM)",
                "Data-driven tests from Excel",
                "Configurable runner & utilities",
              ],
            },
            {
              number: "04",
              title: "Reporting, Logs & End-to-End Project",
              description: "Generate rich execution artifacts and manage failures: HTML reports and test logs, keep records of failed tasks/reruns, and finalize an end-to-end Hybrid Framework Design project. (Tooling includes Allure/TestNG/PyTest as applicable.)",
              deliverables: [
                "Allure/HTML reports + logs",
                "Failed-tests tracking & rerun setup",
                "E2E hybrid framework project",
              ],
            },
          ],
        },
        {
          id: "master-program",
          title: "Advanced Manual and Automation Testing - Master Program",
          weeks: [
            {
              number: "01-02",
              title: "Manual Testing Foundations (SDLC/STLC & Testing Types)",
              description: "Software Development Life Cycle models (Waterfall, Spiral, V-Model, Prototype/Dynamic, Hybrid). Software Testing overview and Software Testing Life Cycle. Testing taxonomy used in corporate: White-Box, Black-Box, Gray-Box; Black-Box testing types such as Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Adhoc; plus Requirement/Documentation, Exploratory, Smoke, Sanity, Regression, and Re-Testing.",
              deliverables: ["SDLC vs STLC map", "Testing types cheatsheet", "Sample test plan & RTM"],
            },
            {
              number: "03-04",
              title: "STLC in Practice, Defects & Agile with Test Management Tools",
              description: "End-to-end STLC execution: system study, test planning, test case writing, execution, traceability, reporting, and retrospectives. Defect Tracking & Reporting: identification, tracking process, reporting workflow, defect types, severity vs priority, Defect Tracking Life Cycle (DTLC). Agile methodology: overview, importance, ceremonies/meetings, members/roles, and working Agile model. Hands-on with tools: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel for cases/reports.",
              deliverables: [
                "Defect log with DTLC states",
                "Agile board & sprint artifacts",
                "TestRail suite & execution report",
              ],
            },
            {
              number: "05-06",
              title: "Programming Essentials (Java/Python) for Testers",
              description: "Environment setup and language basics; ranges/arrays & array lists; conditions & looping; unpacking; comprehensions/data conversion; functions; sorting; Object-Oriented Programming (classes & objects); decorators/access modifiers; regular expressions/collections; exception handling; and container objects.",
              deliverables: ["Language basics exercises", "OOP mini-project", "Regex & collections workbook"],
            },
            {
              number: "07-08",
              title: "Web Automation with Selenium & Hybrid Framework",
              description: "Selenium/WebDriver fundamentals: installation & environment, browser operations/navigation, HTML basics, locators, finding single/multiple elements, Select class, waits/synchronization, window handling, Actions (mouse/keyboard), screenshots, and common Selenium exceptions. Hybrid Framework Design with TestNG/PyTest: framework/folder structure, Page Object Model (POM), automation test cases, data-driven from Excel, generating HTML/Allure-style reports & logs, tracking failed tasks and reruns; complete end-to-end framework project.",
              deliverables: [
                "POM-based hybrid framework repo",
                "Data-driven test pack",
                "Allure/HTML reports & rerun setup",
              ],
            },
            {
              number: "09-10",
              title: "API Testing using POSTMAN & REST",
              description: "Basics of API testing and Postman: workspace/collections, creating & saving requests (GET/POST/PUT/PATCH/DELETE), JSON essentials, exporting/importing collections. Response validation with Postman test scripts: status codes, headers, cookies, response time, response body, JSON Schema. HTTP request validation and security test cases exposure using BurpSuite. Environments & variables: benefits and usage, executing test cases with data files; projects like Employee.json and Contact List (live site).",
              deliverables: [
                "Postman collections & environments",
                "Schema-validated tests",
                "Newman/Runner execution report",
              ],
            },
            {
              number: "11-12",
              title: "DBMS with MySQL + Projects & Job Readiness",
              description: "DBMS & MySQL overview; installation and MySQL Workbench. Core SQL: SELECT/WHERE, DISTINCT/IN/BETWEEN/LIKE/REGEXP/IS NULL, ORDER BY, LIMIT, GROUP BY, HAVING; operators (arithmetic/concatenation/comparison/logical/relational/special); joins (INNER/OUTER/SELF/CROSS, USING/NATURAL, multi-table), subqueries, UNIONS. SQL domains: DDL (CREATE/RENAME/ALTER/TRUNCATE/DROP), DML (INSERT/UPDATE/DELETE), TCL (COMMIT/ROLLBACK/SAVEPOINT), DCL (GRANT/REVOKE). SQL objects: tables, views, stored procedures, functions, triggers. Apply skills on real-time domain projects (e-commerce/CRM/phonebook) and finalize portfolio, resume/LinkedIn, and interview preparation.",
              deliverables: [
                "SQL exercises & mini-DB",
                "Views/SP/UDF/Trigger pack",
                "Project report + portfolio & interview prep",
              ],
            },
          ],
        },
      ],
      v3: [
        {
          id: "manual-testing",
          title: "Manual Software Testing",
          weeks: [
            {
              number: "01",
              title: "SDLC, Testing Overview & STLC Basics",
              description: "Software Development Life Cycle (Waterfall, Spiral, V-Model, Prototype, Hybrid). Software Testing overview, STLC introduction, and types of software testing used in corporate (White Box, Black Box, Gray Box).",
              deliverables: ["Glossary & notes", "SDLC vs STLC chart", "Model comparison table"],
            },
            {
              number: "02",
              title: "Black-Box Testing Types & Test Design Artifacts",
              description: "Black-Box Testing overview and major testing types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Adhoc. Also includes Requirement & Documentation Testing, Exploratory Testing, Smoke, Sanity, Regression, and Re-Testing. Test artifacts: Test Plan, Test Cases, Traceability Matrix.",
              deliverables: ["Test plan draft", "30+ test cases", "RTM (v1)"],
            },
            {
              number: "03",
              title: "STLC in Detail + Defect Tracking & Reporting",
              description: "System study, detailed STLC activities: test planning, test case writing, test execution, test execution reporting, and retrospective meeting. Defect management: identification, reporting, tracking process, Defect Tracking Life Cycle (DTLC), severity vs priority, types of defects.",
              deliverables: ["Defect log", "Bug reports (with severity/priority)", "Test execution report"],
            },
            {
              number: "04",
              title: "Agile Methodology & Test Management Tools",
              description: "Agile overview, importance, ceremonies/meetings, roles/members, and working Agile model. Hands-on with test management and tracking tools used in industry: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel (test cases & reports).",
              deliverables: [
                "Jira project & sprint board",
                "TestRail test suite",
                "MantisBT bug tracker setup",
                "Retrospective notes",
              ],
            },
          ],
        },
        {
          id: "api-postman-rest",
          title: "API Testing using POSTMAN and RestAPIs",
          weeks: [
            {
              number: "01",
              title: "Basics of API Testing & Postman Setup",
              description: "What is API testing, POSTMAN introduction & installation, creating workspace and collections, creating & saving requests (GET, POST, PUT, PATCH, DELETE), operations on collections, and JSON (JavaScript Object Notation) essentials.",
              deliverables: ["Workspace setup", "CRUD requests collection", "JSON primer notes"],
            },
            {
              number: "02",
              title: "Assertions & HTTP Validation in Postman",
              description: "Validate responses with Postman test scripts: status codes, headers, cookies, response time, response body, and JSON Schema validation. Perform HTTP request validation, plus exporting & importing collections for reuse.",
              deliverables: ["Test scripts pack", "JSON schema files", "Exported collection"],
            },
            {
              number: "03",
              title: "Environments, Variables & Data Files",
              description: "Create environments and variables, understand benefits of env variables, set up a server and .json data file, execute test cases for various HTTP requests, and add validation scripts for robust coverage.",
              deliverables: ["Env & globals files", "employee.json data file", "Newman/Runner report"],
            },
            {
              number: "04",
              title: "Projects: Contact List & OWASP Juice Shop",
              description: "Hands-on projects: Contact List (live site) and OWASP Juice Shop. Create users via API links in Postman, organize collections per module, write & execute test cases end-to-end, and use Authorization/Token IDs for secured flows.",
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
              description: "Understand DBMS (definitions, importance, types: Relational/NoSQL/Hierarchical), data models, schemas, and data independence. Introduction to MySQL (history, features, use cases). Install & configure MySQL Server and Workbench; use CLI and Workbench GUI. Practice database design with ER modeling → relational schema conversion; apply normalization (1NF–BCNF) and discuss denormalization trade-offs. Create tables with correct data types, keys, and constraints; intro to basic indexing.",
              deliverables: [
                "MySQL installed & secured",
                "ER diagram + normalized schema",
                "Sample database with keys & constraints",
              ],
            },
            {
              number: "02",
              title: "Core SQL: Queries, Filters, DML, Operators & Aggregations",
              description: "Write basic SQL queries with SELECT and WHERE; retrieve from single/multiple tables. Apply essential filtering (IN, BETWEEN, LIKE, IS NULL), sorting (ORDER BY), and pagination (LIMIT/OFFSET). Use DML for INSERT, UPDATE, DELETE; manage transactions with COMMIT/ROLLBACK. Work with MySQL operators (arithmetic, concatenation, logical/comparison). Summarize data using GROUP BY, HAVING, and aggregate functions (SUM, AVG, etc.).",
              deliverables: ["Practice queries set-1", "DML + transaction script", "Aggregation report (GROUP BY/HAVING)"],
            },
            {
              number: "03",
              title: "Advanced SQL, Subqueries, Window Functions & Performance",
              description: "Join data with INNER, LEFT, SELF, and CROSS joins; use USING and NATURAL JOIN. Build scalar and correlated subqueries; combine results with UNION/UNION ALL. Apply window functions (ROW_NUMBER, RANK, DENSE_RANK) with OVER, including partitions for running totals and moving averages. Optimize queries using EXPLAIN and indexing strategies (B-tree, hash, full-text). Configure/tune server parameters and monitor performance (slow query logs). Back up and restore databases (full/incremental with mysqldump).",
              deliverables: ["Joins & subqueries workbook", "Indexed schema + EXPLAIN snapshots", "Backup/restore runbook"],
            },
            {
              number: "04",
              title: "SQL Objects, Security, and Capstone with Assessment",
              description: "Manage SQL advanced features and objects: DDL (CREATE/ALTER/DROP), DML, TCL (COMMIT/ROLLBACK/SAVEPOINT), and DCL (GRANT/REVOKE). Build Views; write Stored Procedures; create User-Defined Functions & Triggers for automation; use CTEs and Temporary Tables. Apply concepts to real-world case studies (sales/finance) and complete a capstone: design, implement, and optimize a business-scenario database. Conclude with final assessment and certification.",
              deliverables: [
                "Views/SP/UDF/Trigger pack",
                "Capstone database + documentation",
                "Final assessment & certification readiness",
              ],
            },
          ],
        },
        {
          id: "etl-testing",
          title: "ETL Testing Course",
          weeks: [
            {
              number: "01",
              title: "ETL/ELT Foundations & Data Warehousing",
              description: "Overview of ETL/ELT processes, why ETL matters in data pipelines, roles of testers vs developers. Data warehousing architecture, staging areas, dimensional modeling (star vs snowflake), and relational vs dimensional models.",
              deliverables: ["STM document", "Dimensional model (star/snowflake)", "Source-to-staging mapping sheet"],
            },
            {
              number: "02",
              title: "SQL for ETL Testing & Manual Validation",
              description: "Core and advanced SQL for validation (filters, joins, aggregates), writing queries to verify extract/transform/load accuracy, debugging SQL-based jobs. Manual ETL testing: create test plans, design comprehensive test cases for completeness/accuracy, and manage defects.",
              deliverables: ["Validation queries pack", "ETL test plan & test cases", "Defect log with severity/priority"],
            },
            {
              number: "03",
              title: "Automation + ETL Development with Talend & Informatica",
              description: "Automate ETL tests using Python and Selenium with parameterization and reporting. Talend Studio for ETL development (tMap, tJoin, dynamic schemas, multi-source integration). Informatica workflows, transformations, debugging, and optimization. Data transformation/validation techniques: handling NULLs, deduplication, applying business logic, and real-time validation.",
              deliverables: [
                "Automated test suite (Python/Selenium)",
                "Talend/Informatica jobs",
                "Data quality & validation report",
              ],
            },
            {
              number: "04",
              title: "Modern Platforms, Reporting & Capstone Projects",
              description: "Overview of Snowflake, SnapLogic, and Power BI in ETL workflows. Capstone: Retail Sales ETL testing project and E-Commerce ETL pipeline build + validation—covering test plans, automated scripts, end-to-end execution, and BI reporting.",
              deliverables: ["Capstone ETL pipeline & test assets", "Power BI dashboards", "Final test summary & results"],
            },
          ],
        },
        {
          id: "advanced-software-testing",
          title: "Advanced Software Testing",
          weeks: [
            {
              number: "01",
              title: "SDLC/STLC Foundations & Testing Taxonomy",
              description: "Software Development Life Cycle models (Waterfall, Spiral, V-Model, Prototype/Dynamic, Hybrid) and where testing fits. Testing overview, Software Testing Life Cycle, and testing styles used in corporate (White-Box, Black-Box, Gray-Box).",
              deliverables: ["Glossary & notes", "SDLC vs STLC map", "Model comparison sheet"],
            },
            {
              number: "02",
              title: "Black-Box Testing Types & Coverage Design",
              description: "Deep dive into functional and non-functional test types: Functionality, Integration, System, Acceptance, Usability/GUI, Performance, Security, Compatibility, Responsive, Configuration, Reliability, Accessibility, Globalization/Localization, Recovery, Ad-hoc; plus Requirement/Documentation testing, Exploratory, Smoke, Sanity, Regression and Re-testing. Traceability and coverage strategy.",
              deliverables: ["Test plan (v1)", "30+ test cases", "Requirements Traceability Matrix"],
            },
            {
              number: "03",
              title: "STLC in Practice + Defect Management",
              description: "End-to-end STLC execution: system study, test planning, test case writing, execution, reporting and retrospectives. Defect lifecycle and reporting: identification, reporting workflow, Defect Tracking Life Cycle (DTLC), severity vs priority, common defect types; build test execution reports.",
              deliverables: ["Defect log with DTLC states", "Execution & summary reports", "Retrospective notes"],
            },
            {
              number: "04",
              title: "Agile Testing & Test Management Tooling",
              description: "Agile overview and importance, ceremonies/meetings, roles, and working agile model. Hands-on with industry tools: Jira (bug tracking, release & sprint management), TestRail (test case management), MantisBT (bug tracking), and Excel for cases/reports; establishing practical workflows.",
              deliverables: ["Jira project & sprint board", "TestRail suite/run", "MantisBT project with bugs"],
            },
          ],
        },
        {
          id: "advanced-automation",
          title: "Advanced Automation Testing",
          weeks: [
            {
              number: "01-02",
              title: "Programming Foundations + Selenium WebDriver Essentials",
              description: "Set up environment (IDE, SDKs, Selenium) and refresh core programming (Java/Python basics, arrays/lists, conditions & loops, functions, OOP/classes, collections, exceptions). Learn web automation fundamentals: browser operations & navigation, HTML basics, element identification & locators, finding single/multiple elements, Select class, synchronization/waits, handling windows, actions (mouse/keyboard), screenshots, and common Selenium exceptions.",
              deliverables: [
                "Local dev & Selenium setup",
                "Locator & navigation mini-suite",
                "Synchronization scenarios pack",
                "Screenshot helper utility",
              ],
            },
            {
              number: "03",
              title: "Hybrid Framework Design with TestNG/PyTest & POM",
              description: "Design a scalable hybrid test framework: understand TestNG/PyTest, define framework structure and folder layout, implement Page Object Model, author automation test cases, build data-driven tests from Excel, and externalize configs/test data.",
              deliverables: [
                "Hybrid framework repo (POM)",
                "Data-driven tests from Excel",
                "Configurable runner & utilities",
              ],
            },
            {
              number: "04",
              title: "Reporting, Logs & End-to-End Project",
              description: "Generate rich execution artifacts and manage failures: HTML reports and test logs, keep records of failed tasks/reruns, and finalize an end-to-end Hybrid Framework Design project. (Tooling includes Allure/TestNG/PyTest as applicable.)",
              deliverables: [
                "Allure/HTML reports + logs",
                "Failed-tests tracking & rerun setup",
                "E2E hybrid framework project",
              ],
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
  },
  whyChooseContent: {
    testimonial: {
      v2: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Khalid Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
      v3: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Aisha Al-Nahyan",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
      v4: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Fatima Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
  },
  careerPathContent: {
    paths: {
      v2: [
        {
          role: "QA Engineer",
          trending: true,
          description: "Perform manual and automated testing to ensure software quality.",
          salaryRange: "AED 8K-15K",
          skills: ["Manual Testing", "Automation", "Test Planning", "Bug Reporting"],
          opportunities: ["Startups", "IT Companies", "Product Companies", "Consulting Firms"],
        },
        {
          role: "Automation Test Engineer",
          trending: true,
          description: "Develop and maintain automated test suites and frameworks.",
          salaryRange: "AED 12K-20K",
          skills: ["Selenium", "API Testing", "Framework Design", "Scripting"],
          opportunities: ["Tech Giants", "Product Companies", "Testing Services", "Startups"],
        },
        {
          role: "Performance Test Engineer",
          trending: false,
          description: "Conduct performance and load testing to optimize applications.",
          salaryRange: "AED 15K-25K",
          skills: ["JMeter", "LoadRunner", "Performance Analysis", "Optimization"],
          opportunities: ["Enterprise Companies", "Financial Services", "E-Commerce", "Tech Companies"],
        },
        {
          role: "QA Lead / Manager",
          trending: false,
          description: "Lead QA teams and manage testing strategies and processes.",
          salaryRange: "AED 25K-40K",
          skills: ["Team Management", "Test Strategy", "Process Improvement", "Leadership"],
          opportunities: ["IT Companies", "Product Companies", "Consulting Firms", "Startups"],
        },
      ],
    },
  },
  faqsContent: {
    faqs: {
      v2: [
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
          answer: "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across UAE.",
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
  },
  ctaContent: {
    subtitle: {
      v2: "Enroll now and get 30% discount for limited time.",
      v3: "Enroll now and get 33% discount for limited time.",
    },
    contactInfo: {
      v2: { phone: "+971 50 123 4567", email: "contact@cinutedigital.ae", address: "{{city}}, {{state}}, UAE" },
      v3: { phone: "+971 50 123 4567", email: "contact@cinutedigital.ae", address: "{{city}}, UAE" },
    },
  },
};

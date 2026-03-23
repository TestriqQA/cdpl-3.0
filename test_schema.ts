import { generateAllCoursesPageSchema, generateHomePageSchema, generateSoftwareTestingCategoryPageSchema, generateDataScienceMachineLearningCategoryPageSchema, generateBusinessIntelligenceCategoryPageSchema, generateArtificialIntelligenceCategoryPageSchema, generateDigitalMarketingCategoryPageSchema, generateManualTestingCoursePageSchema, generateApiTestingCoursePageSchema, generateDbmsCoursePageSchema, generateEtlTestingCoursePageSchema, generateAdvanceSoftwareTestingCoursePageSchema, generateAutomationTestingCoursePageSchema, generateAdvanceManualAutomationTestingCoursePageSchema } from './src/lib/schema-generators';
import { softwareTestingFaqs } from "./src/components/software-testing-course/data/data";
import { MANUAL_TESTING_FAQS } from "./src/data/manualTestingData";
import { API_TESTING_FAQS } from "./src/data/apiTestingData";
import fs from 'fs';

const schemas = generateAllCoursesPageSchema();
const homeSchemas = generateHomePageSchema([]);

// Need dummy parameters since the original components aren't loaded here (it's safe just for testing syntax)
const stSchemas = generateSoftwareTestingCategoryPageSchema(
  {
    name: "Software Testing Full Course (Manual + Automation)",
    description: "Looking for the best Software Testing Course in Mumbai?",
    url: '/courses/software-testing-course',
    slug: "software-testing-course",
  },
  softwareTestingFaqs.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: '/courses/software-testing-course' }]
);

const dsSchemas = generateDataScienceMachineLearningCategoryPageSchema(
  {
    name: "Data Science & Machine Learning Master Course",
    description: "Master Data Science and Machine Learning with our comprehensive courses.",
    url: '/courses/ds-ml-courses',
    slug: "ds-ml-courses",
  },
  [{ question: "Dummy Q?", answer: "Dummy A" }],
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }]
);

const biSchemas = generateBusinessIntelligenceCategoryPageSchema(
  {
    name: "Business Intelligence Master Course",
    description: "Master Data Analytics & Visualization with Power BI, Tableau, and Big Data Engineering.",
    url: '/courses/bi-courses',
    slug: "bi-courses",
  },
  [{ question: "Dummy Q?", answer: "Dummy A" }],
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }]
);

const aiSchemas = generateArtificialIntelligenceCategoryPageSchema(
  {
    name: "Artificial Intelligence Master Course",
    description: "Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.",
    url: '/courses/artificial-intelligence-courses',
    slug: "artificial-intelligence-courses",
  },
  [{ question: "Dummy Q?", answer: "Dummy A" }],
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" }]
);

const dmSchemas = generateDigitalMarketingCategoryPageSchema(
  {
    name: "Digital Marketing Master Course",
    description: "Become a certified digital marketer with our industry-focused courses. Learn SEO, PPC, social media marketing, and content strategy.",
    url: '/courses/digital-marketing-courses',
    slug: "digital-marketing-courses",
  },
  [{ question: "Dummy Q?", answer: "Dummy A" }],
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" }]
);

const mtSchemas = generateManualTestingCoursePageSchema(
  {
    name: "Manual Testing Course with 100% Placement Support",
    description: "Comprehensive 12-week Manual Testing and QA training program.",
    url: '/courses/software-testing-course/manual-testing-course',
    slug: "manual-testing-course",
  },
  MANUAL_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Manual Testing", url: '/courses/software-testing-course/manual-testing-course' }]
);

const apiSchemas = generateApiTestingCoursePageSchema(
  {
    name: "API Testing Course with POSTMAN & RestAPIs",
    description: "Master API testing in 15 hours with live projects, global certification, and placement support.",
    url: '/courses/software-testing-course/api-testing',
    slug: "api-testing",
  },
  API_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "API Testing", url: '/courses/software-testing-course/api-testing' }]
);

import { DBMS_FAQS } from "./src/data/dbmsData";
const dbmsSchemas = generateDbmsCoursePageSchema(
  {
    name: "MySQL Database Management System Course",
    description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
    url: '/courses/software-testing-course/dbms-course',
    slug: "dbms-course",
  },
  DBMS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "DBMS (MySQL)", url: '/courses/software-testing-course/dbms-course' }]
);

import { ETL_TESTING_FAQS } from "./src/data/etlTestingData";
const etlSchemas = generateEtlTestingCoursePageSchema(
  {
    name: "ETL Testing Course",
    description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
    url: '/courses/software-testing-course/etl-testing',
    slug: "etl-testing",
  },
  ETL_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "ETL Testing", url: '/courses/software-testing-course/etl-testing' }]
);


import { ADVANCED_TESTING_FAQS } from "./src/data/advancedTestingData";
const astSchemas = generateAdvanceSoftwareTestingCoursePageSchema(
  {
    name: "Advanced Software Testing Course (SDET)",
    description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET.",
    url: '/courses/software-testing-course/advance-software-testing',
    slug: "advance-software-testing",
  },
  ADVANCED_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Advanced Software Testing", url: '/courses/software-testing-course/advance-software-testing' }]
);


import { AUTOMATION_TESTING_FAQS } from "./src/data/automationTestingData";
const automationSchemas = generateAutomationTestingCoursePageSchema(
  {
    name: "Advanced Automation Testing Course (SDET)",
    description: "Master Cypress, Playwright, AI Testing, CI/CD. Become a future-ready SDET with elite projects and FAANG placement.",
    url: '/courses/software-testing-course/automation-testing-course',
    slug: "automation-testing-course",
  },
  AUTOMATION_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Automation Testing", url: '/courses/software-testing-course/automation-testing-course' }]
);


import { ADVANCE_MANUAL_AUTOMATION_FAQS } from "./src/data/advanceManualAutomationData";
const amatSchemas = generateAdvanceManualAutomationTestingCoursePageSchema(
  {
    name: "Advanced Manual & Automation Testing Master Program",
    description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
    url: '/courses/software-testing-course/advance-manual-automation-testing',
    slug: "advance-manual-automation-testing",
  },
  ADVANCE_MANUAL_AUTOMATION_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Manual & Automation Testing", url: '/courses/software-testing-course/advance-manual-automation-testing' }]
);

// Output raw, unformatted JSON (no markdown wrappers) to raw .json file in project root
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/courses_schema.json', JSON.stringify(schemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/home_schema.json', JSON.stringify(homeSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/software_testing_schema.json', JSON.stringify(stSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ds_ml_schema.json', JSON.stringify(dsSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/bi_schema.json', JSON.stringify(biSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ai_schema.json', JSON.stringify(aiSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/dm_schema.json', JSON.stringify(dmSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/mt_schema.json', JSON.stringify(mtSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/api_schema.json', JSON.stringify(apiSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/dbms_schema.json', JSON.stringify(dbmsSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/etl_schema.json', JSON.stringify(etlSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ast_schema.json', JSON.stringify(astSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/automation_schema.json', JSON.stringify(automationSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/amat_schema.json', JSON.stringify(amatSchemas, null, 2), 'utf-8');
console.log('Successfully wrote raw JSON all 14 files!');

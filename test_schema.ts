import { generateAllCoursesPageSchema, generateHomePageSchema, generateSoftwareTestingCategoryPageSchema, generateDataScienceMachineLearningCategoryPageSchema, generateBusinessIntelligenceCategoryPageSchema, generateArtificialIntelligenceCategoryPageSchema, generateDigitalMarketingCategoryPageSchema, generateManualTestingCoursePageSchema, generateApiTestingCoursePageSchema, generateDbmsCoursePageSchema, generateEtlTestingCoursePageSchema, generateAdvanceSoftwareTestingCoursePageSchema, generateAutomationTestingCoursePageSchema, generateAdvanceManualAutomationTestingCoursePageSchema, generatePythonCoursePageSchema, generateJavaCoursePageSchema, generateMachineLearningCoursePageSchema, generateGenerativeAICoursePageSchema, generateDataScienceCoursePageSchema, generateAICoursePageSchema, generateMachineLearningUsingPythonCoursePageSchema, generateDataVisualizationInRProgrammingCoursePageSchema, generatePromptEngineeringCoursePageSchema, generateDataAnalyticsCoursePageSchema, generateDataAnalyticsPythonCoursePageSchema, generateDataAnalyticsVisualizationCoursePageSchema, generateDataAnalyticsTableauCoursePageSchema, generatePowerBICoursePageSchema, generateMastersDataEngineeringCoursePageSchema, generateDigitalMarketingCoursePageSchema, generateAiInDigitalMarketingCoursePageSchema, generateAiBootcampCoursePageSchema, generateContactPageAllSchemas, generateAboutPageAllSchemas } from './src/lib/schema-generators';
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


import { PYTHON_FAQS } from "./src/data/pythonData";
const pythonSchemas = generatePythonCoursePageSchema(
  {
    name: "Python Programming Master Course",
    description: "Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate.",
    url: '/courses/software-testing-course/python-course',
    slug: "python-course",
  },
  PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Python Programming", url: '/courses/software-testing-course/python-course' }]
);


import { JAVA_FAQS } from "./src/data/javaData";
const javaSchemas = generateJavaCoursePageSchema(
  {
    name: "Java Programming Master Course",
    description: "Best Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. 100% placement. Live projects, global certificate.",
    url: '/courses/software-testing-course/java-course',
    slug: "java-course",
  },
  JAVA_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Software Testing Course", url: "/courses/software-testing-course" }, { name: "Java Programming", url: '/courses/software-testing-course/java-course' }]
);


import { MACHINE_LEARNING_FAQS } from "./src/data/machineLearningData";
const machineLearningSchemas = generateMachineLearningCoursePageSchema(
  {
    name: "Machine Learning & Data Science with Python Hero Program",
    description: "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates.",
    url: '/courses/ds-ml-courses/machine-learning-course',
    slug: "machine-learning-course",
  },
  MACHINE_LEARNING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "Machine Learning & Data Science", url: '/courses/ds-ml-courses/machine-learning-course' }]
);


import { GENERATIVE_AI_FAQS } from "./src/data/generativeAiData";
const generativeAiSchemas = generateGenerativeAICoursePageSchema(
  {
    name: "Master Program in Deep Learning, NLP & Generative AI",
    description: "55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, 100% job assistance, global certificates from AAA.",
    url: '/courses/ds-ml-courses/generative-ai-course',
    slug: "generative-ai-course",
  },
  GENERATIVE_AI_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "Generative AI Course", url: '/courses/ds-ml-courses/generative-ai-course' }]
);


import { DATA_SCIENCE_FAQS } from "./src/data/dataScienceData";
const dataScienceSchemas = generateDataScienceCoursePageSchema(
  {
    name: "Advanced Data Science and Machine Learning Masterclass: Full Course in Mumbai",
    description: "Master the data science full course in Mumbai with 200 hours of intensive training. Advanced data science, machine learning & AI with 100% job placement.",
    url: '/courses/ds-ml-courses/data-science-course',
    slug: "data-science-course",
  },
  DATA_SCIENCE_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "Data Science & ML Masterclass", url: '/courses/ds-ml-courses/data-science-course' }]
);


import { AI_FAQS } from "./src/data/aiData";
const aiCourseSchemas = generateAICoursePageSchema(
  {
    name: "Comprehensive Data Science & AI Master Program",
    description: "255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates.",
    url: '/courses/ds-ml-courses/ai-course',
    slug: "ai-course",
  },
  AI_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "AI Master Program", url: '/courses/ds-ml-courses/ai-course' }]
);


import { ML_PYTHON_FAQS } from "./src/data/mlPythonData";
const machineLearningUsingPythonSchemas = generateMachineLearningUsingPythonCoursePageSchema(
  {
    name: "Master Program in Machine Learning Algorithms using Python",
    description: "45-Hour Master Program in Machine Learning Algorithms using Python. Hands-on projects, 100% job assistance, global certificates.",
    url: '/courses/ds-ml-courses/machine-learning-using-python',
    slug: "machine-learning-using-python",
  },
  ML_PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "Machine Learning with Python", url: '/courses/ds-ml-courses/machine-learning-using-python' }]
);


import { R_DATA_VIS_FAQS } from "./src/data/rDataVisData";
const dataVisualizationInRProgrammingSchemas = generateDataVisualizationInRProgrammingCoursePageSchema(
  {
    name: "Machine Learning and Data Visualization using R Programming",
    description: "Master Machine Learning algorithms and advanced Data Visualization using R Programming. 20-hour Master Program with 100% job assistance.",
    url: '/courses/ds-ml-courses/data-visualization-in-r-programming',
    slug: "data-visualization-in-r-programming",
  },
  R_DATA_VIS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" }, { name: "R Programming Master Program", url: '/courses/ds-ml-courses/data-visualization-in-r-programming' }]
);


import { PROMPT_ENGINEERING_FAQS } from "./src/data/promptEngineeringData";
const promptEngineeringSchemas = generatePromptEngineeringCoursePageSchema(
  {
    name: "Prompt Engineering with Generative AI Course",
    description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
    url: '/courses/artificial-intelligence-courses/prompt-engineering-course',
    slug: "prompt-engineering-course",
  },
  PROMPT_ENGINEERING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" }, { name: "Prompt Engineering", url: '/courses/artificial-intelligence-courses/prompt-engineering-course' }]
);


import { DATA_ANALYTICS_FAQS } from "./src/data/dataAnalyticsData";
const dataAnalyticsSchemas = generateDataAnalyticsCoursePageSchema(
  {
    name: "Advanced Data Analytics Hero Program: Full Course in Mumbai",
    description: "Master the data analyst full course in Mumbai with 110 hours of intensive training. Advanced data analytics, Python, SQL & Power BI with 100% job placement.",
    url: '/courses/bi-courses/data-analytics',
    slug: "data-analytics",
  },
  DATA_ANALYTICS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Advanced Data Analytics", url: '/courses/bi-courses/data-analytics' }]
);


import { DATA_ANALYTICS_PYTHON_FAQS } from "./src/data/dataAnalyticsPythonData";
const dataAnalyticsPythonSchemas = generateDataAnalyticsPythonCoursePageSchema(
  {
    name: "Best Data Analytics Course with Python | 20-Hour Training Mumbai",
    description: "20-hour python data analysis course with hands-on projects, global certification, and 100% job assistance.",
    url: '/courses/bi-courses/data-analytics-python',
    slug: "data-analytics-python",
  },
  DATA_ANALYTICS_PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Data Analytics with Python", url: '/courses/bi-courses/data-analytics-python' }]
);


import { DATA_ANALYTICS_VIS_FAQS } from "./src/data/dataAnalyticsVisData";
const dataAnalyticsVisSchemas = generateDataAnalyticsVisualizationCoursePageSchema(
  {
    name: "Advanced Excel for Data Analytics & Visualization",
    description: "Master Advanced Excel for Data Analytics & Visualization. 20-Hour comprehensive course with interactive dashboards, Power Query, and Power Pivot. 100% job assistance.",
    url: '/courses/bi-courses/data-analytics-and-visualization',
    slug: "data-analytics-and-visualization",
  },
  DATA_ANALYTICS_VIS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Data Analytics & Visualization", url: '/courses/bi-courses/data-analytics-and-visualization' }]
);


import { DATA_ANALYTICS_TABLEAU_FAQS } from "./src/data/dataAnalyticsTableauData";
const dataAnalyticsTableauSchemas = generateDataAnalyticsTableauCoursePageSchema(
  {
    name: "Master Program in Data Analytics using Tableau",
    description: "20-Hour Master Program in Data Analytics with Tableau. Hands-on projects, interactive dashboards, 100% job assistance, global certificates.",
    url: '/courses/bi-courses/data-analytics-with-tableau',
    slug: "data-analytics-with-tableau",
  },
  DATA_ANALYTICS_TABLEAU_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Data Analytics with Tableau", url: '/courses/bi-courses/data-analytics-with-tableau' }]
);


import { POWER_BI_FAQS } from "./src/data/powerBiData";
const powerBISchemas = generatePowerBICoursePageSchema(
  {
    name: "Master Data Analytics & Visualization with Power BI",
    description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
    url: '/courses/bi-courses/power-bi-course',
    slug: "power-bi-course",
  },
  POWER_BI_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Power BI Course", url: '/courses/bi-courses/power-bi-course' }]
);


import { DATA_ENGINEERING_MASTERS_FAQS } from "./src/data/dataEngineeringMastersData";
const mastersDataEngineeringSchemas = generateMastersDataEngineeringCoursePageSchema(
  {
    name: "Master Program in Data Engineering: BI & Big Data Engineering Course",
    description: "155-hour intensive master program in Mumbai covering SQL for data analytics, BI tools, and Big Data engineering with Spark and Hadoop. 100% placement.",
    url: '/courses/bi-courses/masters-in-data-engineering',
    slug: "masters-in-data-engineering",
  },
  DATA_ENGINEERING_MASTERS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "BI Courses", url: "/courses/bi-courses" }, { name: "Master in Data Engineering", url: '/courses/bi-courses/masters-in-data-engineering' }]
);


import { DIGITAL_MARKETING_FAQS } from "./src/data/digitalMarketingData";
const digitalMarketingSchemas = generateDigitalMarketingCoursePageSchema(
  {
    name: "Advanced AI-Driven Digital Marketing & Analytics Master Program",
    description: "A comprehensive 80-hour digital marketing mastery program in Mumbai covering SEO, SEM, SMM, Content Marketing, and AI Tools with guaranteed placement assistance.",
    url: '/courses/digital-marketing-courses/digital-marketing-course',
    slug: "digital-marketing-course",
  },
  DIGITAL_MARKETING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" }, { name: "Digital Marketing Course", url: '/courses/digital-marketing-courses/digital-marketing-course' }]
);


import { AI_IN_DIGITAL_MARKETING_FAQS } from "./src/data/aiInDigitalMarketingData";
const aiDmSchemas = generateAiInDigitalMarketingCoursePageSchema(
  {
    name: "Master Digital Marketing & AI for Business Owners",
    description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners.",
    url: '/courses/digital-marketing-courses/ai-in-digital-marketing',
    slug: "ai-in-digital-marketing",
  },
  AI_IN_DIGITAL_MARKETING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" }, { name: "AI in Digital Marketing", url: '/courses/digital-marketing-courses/ai-in-digital-marketing' }]
);


import { AI_BOOTCAMP_FAQS } from "./src/data/aiBootcampData";
const aiBootcampSchemas = generateAiBootcampCoursePageSchema(
  {
    name: "AI-Powered Digital Marketing Bootcamp",
    description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with 100% Job Assistance.",
    url: '/courses/digital-marketing-courses/ai-bootcamp',
    slug: "ai-bootcamp",
  },
  AI_BOOTCAMP_FAQS.map(f => ({ question: f.question, answer: f.answer })),
  [{ name: "Home", url: "/" }, { name: "Courses", url: "/courses" }, { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" }, { name: "AI Bootcamp", url: '/courses/digital-marketing-courses/ai-bootcamp' }]
);


const contactPageSchemas = generateContactPageAllSchemas();


const aboutFaqs = [
  { question: "Do you provide placement assistance?", answer: "Yes. Our dedicated Career Services team offers resume reviews, portfolio polishing, mock interviews, and direct referrals through hiring partners." },
  { question: "Are the programs beginner friendly?", answer: "Absolutely. Each program starts with fundamentals and hands-on guided labs. No prior coding experience is required for our beginner tracks." },
  { question: "Will I work on live projects?", answer: "Yes. You will build job-ready skills through live or sandbox projects mirroring real business scenarios." },
  { question: "What makes your curriculum industry-aligned?", answer: "Our modules are co-designed with practitioners from QA, Data, and DevOps." },
  { question: "How are classes delivered—online or in-person?", answer: "We run live online cohorts with recordings and Q&A, plus weekend doubt-clearing sessions." },
];
const aboutPageSchemas = generateAboutPageAllSchemas(aboutFaqs);

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
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/python_schema.json', JSON.stringify(pythonSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/java_schema.json', JSON.stringify(javaSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/machine_learning_schema.json', JSON.stringify(machineLearningSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/generative_ai_schema.json', JSON.stringify(generativeAiSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_science_schema.json', JSON.stringify(dataScienceSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ai_course_schema.json', JSON.stringify(aiCourseSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/machine_learning_using_python_schema.json', JSON.stringify(machineLearningUsingPythonSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_visualization_in_r_schema.json', JSON.stringify(dataVisualizationInRProgrammingSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/prompt_engineering_schema.json', JSON.stringify(promptEngineeringSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_analytics_schema.json', JSON.stringify(dataAnalyticsSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_analytics_python_schema.json', JSON.stringify(dataAnalyticsPythonSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_analytics_visualization_schema.json', JSON.stringify(dataAnalyticsVisSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/data_analytics_tableau_schema.json', JSON.stringify(dataAnalyticsTableauSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/power_bi_schema.json', JSON.stringify(powerBISchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/masters_data_engineering_schema.json', JSON.stringify(mastersDataEngineeringSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/digital_marketing_schema.json', JSON.stringify(digitalMarketingSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ai_in_digital_marketing_schema.json', JSON.stringify(aiDmSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ai_bootcamp_schema.json', JSON.stringify(aiBootcampSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/contact_us_schema.json', JSON.stringify(contactPageSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/about_us_schema.json', JSON.stringify(aboutPageSchemas, null, 2), 'utf-8');
console.log('Successfully wrote raw JSON all 34 files!');

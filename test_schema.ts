import { generateAllCoursesPageSchema, generateHomePageSchema, generateSoftwareTestingCategoryPageSchema, generateDataScienceMachineLearningCategoryPageSchema, generateBusinessIntelligenceCategoryPageSchema, generateArtificialIntelligenceCategoryPageSchema, generateDigitalMarketingCategoryPageSchema, generateManualTestingCoursePageSchema, generateContactPageAllSchemas, generateAboutPageAllSchemas } from './src/lib/schema-generators';
import { softwareTestingHub } from "./src/data/hubs/software-testing";
import { MANUAL_TESTING_FAQS } from "./src/data/manualTestingData";
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
  softwareTestingHub.faq.items.map(f => ({ question: f.question, answer: f.answer })),
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

// Individual course pages: built from their content files, exactly as the
// shared template (src/components/course-page) builds them for the page.
import { courseSchemas } from "./src/components/course-page/schema";
import { apiTestingCourse } from "./src/data/courses/api-testing";
import { dbmsCourse } from "./src/data/courses/dbms-course";
import { etlTestingCourse } from "./src/data/courses/etl-testing";
import { advanceSoftwareTestingCourse } from "./src/data/courses/advance-software-testing";
import { automationTestingCourse } from "./src/data/courses/automation-testing-course";
import { advanceManualAutomationTestingCourse } from "./src/data/courses/advance-manual-automation-testing";
import { pythonCourse } from "./src/data/courses/python-course";
import { javaCourse } from "./src/data/courses/java-course";
import { machineLearningCourse } from "./src/data/courses/machine-learning-course";
import { generativeAiCourse } from "./src/data/courses/generative-ai-course";
import { dataScienceCourse } from "./src/data/courses/data-science-course";
import { aiCourse } from "./src/data/courses/ai-course";
import { machineLearningUsingPythonCourse } from "./src/data/courses/machine-learning-using-python";
import { dataVisualizationInRProgrammingCourse } from "./src/data/courses/data-visualization-in-r-programming";
import { promptEngineeringCourse } from "./src/data/courses/prompt-engineering-course";
import { dataAnalyticsCourse } from "./src/data/courses/data-analytics";
import { dataAnalyticsPythonCourse } from "./src/data/courses/data-analytics-python";
import { dataAnalyticsAndVisualizationCourse } from "./src/data/courses/data-analytics-and-visualization";
import { dataAnalyticsWithTableauCourse } from "./src/data/courses/data-analytics-with-tableau";
import { powerBiCourse } from "./src/data/courses/power-bi-course";
import { mastersInDataEngineeringCourse } from "./src/data/courses/masters-in-data-engineering";
import { digitalMarketingCourse } from "./src/data/courses/digital-marketing-course";
import { aiInDigitalMarketingCourse } from "./src/data/courses/ai-in-digital-marketing";
import { aiBootcampCourse } from "./src/data/courses/ai-bootcamp";
const COURSE_SCHEMA_FILES = [
  [apiTestingCourse, "api"],
  [dbmsCourse, "dbms"],
  [etlTestingCourse, "etl"],
  [advanceSoftwareTestingCourse, "ast"],
  [automationTestingCourse, "automation"],
  [advanceManualAutomationTestingCourse, "amat"],
  [pythonCourse, "python"],
  [javaCourse, "java"],
  [machineLearningCourse, "machine_learning"],
  [generativeAiCourse, "generative_ai"],
  [dataScienceCourse, "data_science"],
  [aiCourse, "ai_course"],
  [machineLearningUsingPythonCourse, "machine_learning_using_python"],
  [dataVisualizationInRProgrammingCourse, "data_visualization_in_r"],
  [promptEngineeringCourse, "prompt_engineering"],
  [dataAnalyticsCourse, "data_analytics"],
  [dataAnalyticsPythonCourse, "data_analytics_python"],
  [dataAnalyticsAndVisualizationCourse, "data_analytics_visualization"],
  [dataAnalyticsWithTableauCourse, "data_analytics_tableau"],
  [powerBiCourse, "power_bi"],
  [mastersInDataEngineeringCourse, "masters_data_engineering"],
  [digitalMarketingCourse, "digital_marketing"],
  [aiInDigitalMarketingCourse, "ai_in_digital_marketing"],
  [aiBootcampCourse, "ai_bootcamp"],
] as const;

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
for (const [course, out] of COURSE_SCHEMA_FILES) {
  fs.writeFileSync(`C:/Users/user1/Documents/GitHub/cdpl-3.0/${out}_schema.json`, JSON.stringify(courseSchemas(course), null, 2), 'utf-8');
}
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/contact_us_schema.json', JSON.stringify(contactPageSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/about_us_schema.json', JSON.stringify(aboutPageSchemas, null, 2), 'utf-8');
console.log('Successfully wrote raw JSON all 34 files!');

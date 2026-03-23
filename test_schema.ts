import { generateAllCoursesPageSchema, generateHomePageSchema, generateSoftwareTestingCategoryPageSchema, generateDataScienceMachineLearningCategoryPageSchema, generateBusinessIntelligenceCategoryPageSchema, generateArtificialIntelligenceCategoryPageSchema, generateDigitalMarketingCategoryPageSchema } from './src/lib/schema-generators';
import { softwareTestingFaqs } from "./src/components/software-testing-course/data/data";
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

// Output raw, unformatted JSON (no markdown wrappers) to raw .json file in project root
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/courses_schema.json', JSON.stringify(schemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/home_schema.json', JSON.stringify(homeSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/software_testing_schema.json', JSON.stringify(stSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ds_ml_schema.json', JSON.stringify(dsSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/bi_schema.json', JSON.stringify(biSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/ai_schema.json', JSON.stringify(aiSchemas, null, 2), 'utf-8');
fs.writeFileSync('C:/Users/user1/Documents/GitHub/cdpl-3.0/dm_schema.json', JSON.stringify(dmSchemas, null, 2), 'utf-8');
console.log('Successfully wrote raw JSON all 7 files!');

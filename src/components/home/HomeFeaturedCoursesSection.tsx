"use client";

import React, { useState } from 'react';
import { ArrowRight, Zap, Flame, Bug, Download, BookOpen, Gauge, Shield, Smartphone, CheckCircle, Cpu, BarChart3, Code, TrendingUp, Cog, Trophy, Brain, Database, Megaphone, Briefcase, Rocket, PieChart, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import { DownloadFormButton } from '@/components/DownloadForm';
import Link from 'next/link';
import { FaChartBar } from 'react-icons/fa6';

// --- Card Styling Constants from CourseOverviewSection.tsx ---
type Variant = {
  header: string;
  button: string;
};

const VARIANTS: Variant[] = [
  {
    header:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-indigo-600",
  },
  {
    header:
      "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-emerald-600",
  },
  {
    header:
      "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-rose-600",
  },
];

const pickVariant = (i: number): Variant => {
  return VARIANTS[i % VARIANTS.length];
};

// --- Mock Data Structure (Updated to match new categories) ---
interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  popular: boolean;
  link: string;
  icon: keyof typeof iconMap;
  features: string[];
  /** Optional per-course offer end timestamp (ISO). If omitted, defaults to +48h from mount */
  offerEndsAt?: string;
  syllabusLink?: string;
}

const iconMap = {
  BookOpen: <BookOpen className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Gauge: <Gauge className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  BarChart3: <BarChart3 className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  TrendingUp: <TrendingUp className="w-10 h-10" />,
  ChartBar: <FaChartBar className="w-10 h-10" />,
  Cog: <Cog className="w-10 h-10" />,
  Trophy: <Trophy className="w-10 h-10" />,
  Brain: <Brain className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
  Megaphone: <Megaphone className="w-10 h-10" />,
  Briefcase: <Briefcase className="w-10 h-10" />,
  Rocket: <Rocket className="w-10 h-10" />,
  PieChart: <PieChart className="w-10 h-10" />,
  FileSpreadsheet: <FileSpreadsheet className="w-10 h-10" />,
  LayoutGrid: <LayoutGrid className="w-10 h-10" />,

};

const COURSES: Course[] = [
  // --- Software Testing Courses ---
  {
    id: 1,
    title: 'Manual Software Testing',
    category: 'Software Testing',
    description: 'Learn to facilitate Scrum teams and drive Agile projects effectively.',
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
    category: 'Software Testing',
    description: 'Drive product vision and delivery in SAFe settings.',
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
    category: 'Software Testing',
    description: 'Master API testing using Postman, Rest Assured, and Groovy for robust web services.',
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
    category: 'Software Testing',
    description: 'Master the art of leading enterprise-wide Agile transformations using the Scaled Agile Framework (SAFe).',
    duration: '100 Hours',
    students: '500+',
    level: 'Intermediate',
    popular: false,
    link: '/courses/software-testing-course/etl-testing',
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
    category: 'Software Testing',
    description: 'Go beyond the basics—build strategies, manage risk, and measure quality with actionable metrics.',
    duration: '95 Hours',
    students: '2,268+',
    level: 'Beginner',
    popular: false,
    link: '/courses/software-testing-course/advance-software-testing',
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
    level: 'Beginner',
    popular: false,
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
    category: 'Software Testing',
    description: 'End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.',
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
    category: 'Software Testing',
    description: 'Master Python Programming from absolute basics all the way to advanced and professional-level concepts! Dive deep into Python syntax, data structures, object-oriented programming, functional programming, automation scripting, and real-world problem-solving through engaging, hands-on projects that reinforce every concept.',
    duration: '30 Hours',
    students: '2,268+',
    level: 'Beginner',
    popular: false,
    link: '/courses/software-testing-course/python-course',
    icon: 'TrendingUp',
    features: ['Python Basics Guide', 'Advanced Python Coding', 'Learn Python Fast', 'Real-World Python Projects & Automation Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/python-programming.pdf',
  },

  // --- Data Science Courses ---
  {
    id: 10,
    title: 'Machine Learning and Data Science with Python - Hero Program',
    category: 'Data Science',
    description: 'Master Machine Learning & Data Science with Python in our Hero Program! Hands-on projects, expert mentorship & job-ready skills. Enroll now & launch your tech career!',
    duration: '95 Hours',
    students: '2,200+',
    level: 'Beginner',
    popular: true,
    link: '/courses/ds-ml-courses/machine-learning-course',
    icon: 'Cpu',
    features: ['Machine Learning Python', 'Data Science Hero', 'Python ML Program', 'MLOps & Production-Ready ML Systems'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-and-data-science-with-python-hero-program.pdf',
  },
  {
    id: 11,
    title: 'Deep Learning, NLP and Generative AI',
    category: 'Data Science',
    description: 'Dive into Deep Learning, NLP & Generative AI! Master neural networks, text processing & AI creation with hands-on projects. Enroll now & lead the AI revolution!',
    duration: '55 Hours',
    students: '2,217+',
    level: 'Beginner',
    popular: true,
    link: '/courses/ds-ml-courses/generative-ai-course',
    icon: 'Brain',
    features: ['Deep Learning Basics', 'NLP Mastery Course', 'Clustering', 'Generative AI Skills'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/deep-learning-nlp-and-generativeai.pdf',
  },
  {
    id: 12,
    title: 'Advanced Data Science and Machine Learning Masterclass',
    category: 'Data Science',
    description: 'Elevate your career with Advanced Data Science & Machine Learning Masterclass! Deep-dive into algorithms, big data & AI. Expert-led, project-based. Enroll today!',
    duration: '200 Hours',
    students: '2,234+',
    level: 'Beginner',
    popular: false,
    link: '/courses/ds-ml-courses/data-science-course',
    icon: 'Trophy',
    features: ['Advanced Data Science', 'Machine Learning Masterclass', 'AI Algorithms Pro', 'Generative AI & LLM Engineering in Practice'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-data-science-and-machine-learning-masterclass.pdf',
  },
  {
    id: 13,
    title: 'Comprehensive Data Science and AI - Master Program',
    category: 'Data Science',
    description: 'Unlock expertise in Comprehensive Data Science & AI Master Program! From ML to deep learning, big data & ethics. Hands-on, industry-aligned. Enroll now & shape the future!',
    duration: '255 Hours',
    students: '2,251+',
    level: 'Beginner',
    popular: false,
    link: '/courses/ds-ml-courses/ai-course',
    icon: 'Database',
    features: ['Data Science Mastery', 'AI Master Program', 'Comprehensive ML AI'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/comprehensive-data-science-and-ai-master-program.pdf',
  },
  {
    id: 14,
    title: 'Machine Learning Algorithms using python Programming',
    category: 'Data Science',
    description: 'Master Machine Learning Algorithms using Python Programming! Implement regression, classification, clustering & more with scikit-learn. Hands-on code, real projects. Enroll now!',
    duration: '45 Hours',
    students: '2,285+',
    level: 'Beginner',
    popular: false,
    link: '/courses/ds-ml-courses/machine-learning-using-python',
    icon: 'Code',
    features: ['ML Algorithms Python', 'Python ML Coding', 'Scikit-Learn Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-algorithms-using-python-programming.pdf',
  },
  {
    id: 15,
    title: 'Machine Learning and Data Visualization using R Programming',
    category: 'Data Science',
    description: 'Master Machine Learning & Data Visualization using R Programming! Explore ggplot2, tidyverse, ML models & interactive dashboards. Hands-on projects. Enroll now & excel in data!',
    duration: '20 Hours',
    students: '2,302+',
    level: 'Beginner',
    popular: false,
    link: '/courses/ds-ml-courses/data-visualization-in-r-programming',
    icon: 'BarChart3',
    features: ['R ML Visualization', 'Data Viz R', 'R Programming ML'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/machine-learning-and-data-visualization-using-r-programming.pdf',
  },

  // Python Programming — MOVED TO LAST IN DATA SCIENCE (as requested)
  {
    id: 16,
    title: 'Python Programming',
    category: 'Data Science',
    description: 'Master Python Programming from absolute basics all the way to advanced and professional-level concepts! Dive deep into Python syntax, data structures, object-oriented programming, functional programming, automation scripting, and real-world problem-solving through engaging, hands-on projects that reinforce every concept.',
    duration: '30 Hours',
    students: '2,268+',
    level: 'Beginner',
    popular: false,
    link: '/courses/software-testing-course/python-course',
    icon: 'TrendingUp',
    features: ['Python Basics Guide', 'Advanced Python Coding', 'Learn Python Fast', 'Real-World Python Projects & Automation Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/python-programming.pdf',
  },

  // --- Business Intelligence Courses ---
  {
    id: 17,
    title: 'Advanced Data Analytics - Hero Program',
    category: 'Business Intelligence',
    description: 'Elevate to pro with Advanced Data Analytics Hero Program! Master SQL, Python, Tableau, predictive modeling & big data. Hands-on, job-focused.',
    duration: '110 Hours',
    students: '2,200+',
    level: 'Beginner',
    popular: true,
    link: '/courses/bi-courses/data-analytics',
    icon: 'TrendingUp',
    features: ['Advanced Analytics Hero', 'Data Analytics Mastery', 'Predictive Analytics Pro'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-data-analytics-hero-program.pdf',
  },
  {
    id: 18,
    title: 'Advanced Data Analytics with Python Libraries',
    category: 'Business Intelligence',
    description: 'Master Advanced Data Analytics with Python Libraries! Harness Pandas, NumPy, Matplotlib, Seaborn & Scikit-learn for insights & predictions. Hands-on projects.',
    duration: '20 Hours',
    students: '2,217+',
    level: 'Beginner',
    popular: false,
    link: '/courses/bi-courses/data-analytics-python',
    icon: 'Code',
    features: ['Python Data Analytics', 'Advanced Analytics Libraries', 'Pandas NumPy Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-data-analytics-with-python-libraries.pdf',
  },
  {
    id: 19,
    title: 'Advanced Excel for Data Analytics & Visualization',
    category: 'Business Intelligence',
    description: 'Master Excel for Data Analytics & Visualization! Unlock PivotTables, Power Query, charts, dashboards & advanced formulas. Hands-on, real-world projects.',
    duration: '20 Hours',
    students: '2,234+',
    level: 'Beginner',
    popular: false,
    link: '/courses/bi-courses/data-analytics-and-visualization',
    icon: 'FileSpreadsheet',
    features: ['Excel Data Analytics', 'Data Visualization Excel', 'Excel Analytics Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/advanced-excel-for-data-analytics-&-visualization.pdf',
  },
  {
    id: 20,
    title: 'Data Analytics & Visualization with Tableau',
    category: 'Business Intelligence',
    description: 'Master Data Analytics & Visualization with Tableau! Build interactive dashboards, explore data with drag-and-drop, uncover insights & tell stories. Hands-on projects.',
    duration: '20 Hours',
    students: '2,251+',
    level: 'Beginner',
    popular: false,
    link: '/courses/bi-courses/data-analytics-with-tableau',
    icon: 'PieChart',
    features: ['Tableau Data Analytics', 'Visualization Mastery Tableau', 'Interactive Dashboards Tableau'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/data-analytics-&-visualization-with-tableau.pdf',
  },
  {
    id: 21,
    title: 'Data Analytics & Visualization with Power BI',
    category: 'Business Intelligence',
    description: 'Master Data Analytics & Visualization with Power BI! Create stunning dashboards, DAX formulas, data modeling & insights. Hands-on projects for business intelligence.',
    duration: '20 Hours',
    students: '2,268+',
    level: 'Beginner',
    popular: true,
    link: '/courses/bi-courses/power-bi-course',
    icon: 'BarChart3',
    features: ['Power BI Analytics', 'Data Visualization Power BI', 'Power BI Mastery'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/data-analytics-&-visualization-with-power-bi.pdf',
  },
  {
    id: 22,
    title: 'Data Analytics With BI And Big Data Engineering Master Program',
    category: 'Business Intelligence',
    description: 'Master Data Analytics with BI & Big Data Engineering Master Program! Harness Power BI, Tableau, Spark, Hadoop & ETL pipelines for scalable insights. Hands-on, industry-ready.',
    duration: '155 Hours',
    students: '2,285+',
    level: 'Beginner',
    popular: false,
    link: '/courses/bi-courses/masters-in-data-engineering',
    icon: 'Trophy',
    features: ['Power BI/Tableau', 'Big Data Concepts', 'Data Warehousing'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/data-analytics-with-bi-and-big-data-engineering-master-program.pdf',
  },

  // --- Artificial Intelligence Courses ---
  {
    id: 23,
    title: 'Prompt Engineering with Gen AI',
    category: 'Artificial Intelligence',
    description: 'Become an AI Expert in Mumbai. Master the fundamentals of AI, deep learning, NLP, and intelligent automation systems with hands-on projects and industry certifications.',
    duration: '20 Hours',
    students: '10,000+',
    level: 'Master',
    popular: true,
    link: '/courses/artificial-intelligence-courses/prompt-engineering-course',
    icon: 'Brain',
    features: ['AI Foundations & Generative AI', 'Large Language Models & Multimodal AI', 'Prompt Engineering Techniques', 'Responsible AI, Governance & Capstone'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/prompt-engineering-with-gen-ai.pdf',
  },

  // --- Digital Marketing Courses ---
  {
    id: 24,
    title: 'AI-Driven Digital Marketing & Analytics',
    category: 'Digital Marketing',
    description: 'End-to-end mastery: full-funnel strategies, analytics-driven decisions, and campaign leadership.',
    duration: '80 Hours',
    students: '2,200+',
    level: 'Master',
    popular: true,
    link: '/courses/digital-marketing-courses/digital-marketing-course',
    icon: 'Megaphone',
    features: ['Holistic Strategy & Planning', 'Advanced Analytics & Attribution', 'Multi-Channel Campaigns', 'Portfolio & Freelance Readiness'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/ai-driven-digital-marketing-&-analytics.pdf',
  },
  {
    id: 25,
    title: 'Digital Marketing and AI (For Business Owners)',
    category: 'Digital Marketing',
    description: 'Leverage AI to grow your business faster and cheaper – no agency needed. Perfect for founders, CEOs & solopreneurs.',
    duration: '50 Hours',
    students: '2,217+',
    level: 'Beginner',
    popular: false,
    link: '/courses/digital-marketing-courses/ai-in-digital-marketing',
    icon: 'Briefcase',
    features: ['AI-Powered Market Research & Customer Avatars', 'Automated Content Creation at Scale', 'AI Ads Optimization & Predictive Analytics', 'Build Your Own No-Code AI Marketing Team'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-and-ai-for-business-owners-digital-marketing-and-ai-for-business-owners.pdf',
  },
  {
    id: 26,
    title: 'Digital Marketing With AI Bootcamp',
    category: 'Digital Marketing',
    description: 'Become a future-ready digital marketer: master AI tools, prompt engineering for ads & content, and run hyper-personalized campaigns.',
    duration: '30 Hours',
    students: '2,234+',
    level: 'Beginner',
    popular: false,
    link: '/courses/digital-marketing-courses/ai-bootcamp',
    icon: 'Rocket',
    features: ['Prompt Engineering for Ads & Copywriting', 'AI Tools Mastery (ChatGPT, Claude, Midjourney, ElevenLabs, etc.)', 'Automated Funnels & Omnichannel AI Workflows', 'AI-Driven Performance Marketing & ROAS Optimization'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-with-ai-bootcamp-digital-marketing-with-ai-bootcamp.pdf',
  },
];


// --- Helpers for timer like in ModuleCard ---
const pad = (n: number) => n.toString().padStart(2, '0');

// --- Course Card ---
// Each card spans two rows of the parent grid as a subgrid (header row, body
// row), so every header in a grid row ends at the same height, set by the
// tallest one.
// Kept deliberately quiet: coloured header with icon, a subtle "Popular" tag,
// title and a 2-line description; duration / level / learners as bold
// labelled columns; three plain features; one solid button plus a text-style
// syllabus link. Plain <article>, not motion.article: the hover lift is pure
// CSS, and the cards are visible without JavaScript.
// Phones show only the first few cards of a tab (the rest stay in the HTML).
const MOBILE_CARD_LIMIT = 6;

const CourseCard: React.FC<{ course: Course; index: number; hidden: boolean }> = ({ course, index, hidden }) => {
  const variant = pickVariant(index);
  // Some courses carry "Not specified" instead of a count; leave it out.
  const hasStudents = /\d/.test(course.students);
  const facts = [
    { label: 'Duration', value: course.duration },
    { label: 'Level', value: course.level },
    ...(hasStudents ? [{ label: 'Learners', value: course.students }] : []),
  ];

  return (
    <article
      hidden={hidden}
      className={`relative group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-0.5 grid grid-rows-subgrid row-span-2 gap-0 [&[hidden]]:hidden ${index >= MOBILE_CARD_LIMIT ? 'max-sm:hidden' : ''}`}
    >
      <div className={`${variant.header} px-5 py-4`}>
        <div className="flex items-center justify-between mb-3">
          <div className="text-white/90 [&>svg]:w-6 [&>svg]:h-6">{iconMap[course.icon]}</div>
          {course.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/30">
              <Zap className="w-3 h-3" />
              Popular
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white leading-snug mb-1">{course.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{course.description}</p>
      </div>

      <div className="px-5 py-4 flex-grow flex flex-col gap-3">
        <ul className="space-y-1.5">
          {course.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* mt-auto pins the facts and buttons to the bottom, so they line up across a row. */}
        <dl className={`grid ${facts.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mt-auto pt-3 border-t border-slate-100`}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{f.label}</dt>
              <dd className="text-sm font-bold text-slate-800">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-1 pt-1">
          <Link
            href={course.link}
            title={course.title}
            className={`flex items-center justify-center gap-1.5 w-full ${variant.button} text-white text-sm font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200`}
          >
            {/* The hidden course name gives each link descriptive anchor text
                (for search engines and screen readers) instead of 26
                identical "View Course Details" links; visually unchanged. */}
            <span>View Course Details<span className="sr-only">: {course.title}</span></span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <DownloadFormButton
            courseTitle={course.title}
            syllabusLink={course.syllabusLink}
            buttonText={
              <span className="flex items-center justify-center gap-1.5">
                <Download className="w-4 h-4" />
                <span>Download Syllabus</span>
              </span>
            }
            buttonClassName="w-full flex items-center justify-center text-slate-500 hover:text-slate-800 text-sm font-medium py-2 transition-colors duration-200"
            onSubmit={(values) => {
              console.log("Download form submitted:", { ...values, course: course.title });
            }}
          />
        </div>
      </div>
    </article>
  );
};


// Filter options. "Popular" (the default) shows courses flagged popular; the
// rest match `course.category` exactly.
const FILTERS: { label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { label: 'Popular', Icon: Flame },
  { label: 'Software Testing', Icon: Bug },
  { label: 'Data Science', Icon: Database },
  { label: 'Business Intelligence', Icon: PieChart },
  { label: 'Artificial Intelligence', Icon: Brain },
  { label: 'Digital Marketing', Icon: Megaphone },
];


/**
 * HomeFeaturedCoursesSection - Interactive Course Cards
 *
 * Shows popular courses with filtering
 * CDPL brand design with card styling from CourseOverviewSection.tsx
 */
export default function HomeFeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = useState(FILTERS[0].label);

  const matches = (course: Course) =>
    activeCategory === 'Popular' ? course.popular : course.category === activeCategory;

  // Every course is rendered on every tab; non-matching ones are only hidden.
  // That keeps all 26 course links in the server HTML for crawlers, instead of
  // just the default tab's. Visible cards are numbered on their own so the
  // header colours still rotate evenly.
  let visibleIndex = 0;
  const cards = COURSES.map((course) => {
    const visible = matches(course);
    return { course, visible, index: visible ? visibleIndex++ : 0 };
  });

  return (
    <section className="py-12 lg:py-16 bg-gray-50" aria-labelledby="featured-courses-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Our Courses
          </span>
          <h2 id="featured-courses-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Our <span className="text-brand">Industry-Ready</span> Courses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Software testing, data science, AI and digital marketing courses with hands-on projects and expert mentorship.
          </p>
        </div>

        {/* Category filter: one segmented bar with an icon per option, so it
            reads as a filter rather than loose buttons. Every option stays
            visible: a 2-column grid on phones, a wrapping row from sm up. */}
        <div className="mb-10 flex justify-center">
          <div className="w-full sm:w-auto sm:max-w-full">
            <div
              role="group"
              aria-label="Filter courses by category"
              className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm sm:flex sm:flex-wrap sm:justify-center"
            >
              {FILTERS.map(({ label, Icon }) => {
                const active = activeCategory === label;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={active}
                    aria-controls="featured-courses-grid"
                    onClick={() => setActiveCategory(label)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold leading-tight transition-colors duration-200 sm:px-4 sm:whitespace-nowrap ${active
                      ? 'bg-brand text-white shadow-md'
                      : 'text-slate-600 hover:bg-orange-50 hover:text-brand'
                      }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div id="featured-courses-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map(({ course, visible, index }) => (
            <CourseCard key={course.id} course={course} index={index} hidden={!visible} />
          ))}
        </div>

        {/* View All CTA */}
        <div
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            title="View All Courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-brand transition-all duration-300"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

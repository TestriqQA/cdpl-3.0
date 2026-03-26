"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock, Users, ArrowRight, Star, Zap, Download, BookOpen, Gauge, Shield, Smartphone, CheckCircle, Cpu, BarChart3, Code, TrendingUp, Cog, Trophy, Brain, Database, Megaphone, Briefcase, Rocket, PieChart, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import { DownloadFormButton } from '@/components/DownloadForm';
import Link from 'next/link';
import { FaChartBar } from 'react-icons/fa6';

// --- Card Styling Constants from CourseOverviewSection.tsx ---
type Variant = {
  header: string;
  button: string;
  hoverBorder: string;
};

const VARIANTS: Variant[] = [
  {
    header:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    header:
      "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    header:
      "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-gradient-to-r from-rose-600 to-orange-500",
    hoverBorder: "hover:border-rose-300",
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

// --- Isolated Countdown Component ---
const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: string; minutes: string; seconds: string; isOver: boolean }>({
    hours: '00', minutes: '00', seconds: '00', isOver: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = Date.now();
      const diff = Math.max(0, targetDate.getTime() - now);
      const totalSeconds = Math.floor(diff / 1000);

      if (diff <= 0) {
        return { hours: '00', minutes: '00', seconds: '00', isOver: true };
      }

      return {
        hours: pad(Math.floor(totalSeconds / 3600)),
        minutes: pad(Math.floor((totalSeconds % 3600) / 60)),
        seconds: pad(totalSeconds % 60),
        isOver: false
      };
    };

    // Initial cal
    setTimeLeft(calculateTime());

    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      <div
        className="grid grid-cols-3 gap-3 text-center"
        role="timer"
        aria-live="polite"
      >
        <div className="rounded-lg bg-white shadow-sm p-3">
          <div className="text-xl font-bold text-slate-900 tabular-nums">
            {timeLeft.hours}
          </div>
          <div className="text-[10px] text-slate-500 tracking-wide uppercase">
            Hours
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-3">
          <div className="text-xl font-bold text-slate-900 tabular-nums">
            {timeLeft.minutes}
          </div>
          <div className="text-[10px] text-slate-500 tracking-wide uppercase">
            Minutes
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-3">
          <div className="text-xl font-bold text-slate-900 tabular-nums">
            {timeLeft.seconds}
          </div>
          <div className="text-[10px] text-slate-500 tracking-wide uppercase">
            Seconds
          </div>
        </div>
      </div>
      {timeLeft.isOver && (
        <p className="mt-2 text-xs text-red-600 font-semibold">
          Offer has ended.
        </p>
      )}
    </>
  );
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
    rating: 4.9,
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
    rating: 4.8,
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
    rating: 4.7,
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
    rating: 4.6,
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
    category: 'Software Testing',
    description: 'Master SQL queries, database design, and management with MySQL. Learn to build scalable and efficient database solutions.',
    duration: '40 Hours',
    students: '500+',
    rating: 4.8,
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
    rating: 4.8,
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
    category: 'Software Testing',
    description: 'Become industry-ready with Core Java, OOP, Collections, JDBC, Spring Boot, REST APIs, unit testing, and deployment. Build portfolio projects and earn a QR-verified certificate.',
    duration: '30 Hours',
    students: 'Not specified',
    rating: 4.9,
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
    category: 'Software Testing',
    description: 'End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.',
    duration: '180 Hours',
    students: '2,302+',
    rating: 4.8,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
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
    rating: 4.8,
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
    rating: 4.8,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.9,
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
    rating: 4.8,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
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
    rating: 4.8,
    level: 'Beginner',
    popular: true,
    link: '/courses/digital-marketing-courses/ai-bootcamp',
    icon: 'Rocket',
    features: ['Prompt Engineering for Ads & Copywriting', 'AI Tools Mastery (ChatGPT, Claude, Midjourney, ElevenLabs, etc.)', 'Automated Funnels & Omnichannel AI Workflows', 'AI-Driven Performance Marketing & ROAS Optimization'],
    syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-with-ai-bootcamp-digital-marketing-with-ai-bootcamp.pdf',
  },
];


// --- Helpers for timer like in ModuleCard ---
const pad = (n: number) => n.toString().padStart(2, '0');

// --- Course Card Component (extracted layout/design/features from ModuleCard) ---
const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const variant = pickVariant(index);
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  // Initialize ONLY ONCE on mount to ensure consistent hydration
  const [target, setTarget] = React.useState<Date | null>(null);

  useEffect(() => {
    if (course.offerEndsAt) {
      setTarget(new Date(course.offerEndsAt));
    } else {
      // Create a consistent deadline for this user session if not set
      // We use sessionStorage to persist it across reloads if possible, or just memoize for this session
      // For now, simple stable date:
      const saved = sessionStorage.getItem(`deadline-${course.id}`);
      if (saved) {
        setTarget(new Date(saved));
      } else {
        const d = new Date(Date.now() + 48 * 3600 * 1000);
        sessionStorage.setItem(`deadline-${course.id}`, d.toISOString());
        setTarget(d);
      }
    }
  }, [course.id, course.offerEndsAt]);

  if (!target) return null; // Or a skeleton

  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full`}
    >
      <div className={`${variant.header} p-6 relative overflow-hidden`}>
        {/* Background Pattern (simplified) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
              {iconMap[course.icon]}
            </div>
            <div
              className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
              aria-label={`Rating ${course.rating.toFixed(1)} out of 5`}
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-800">
                {course.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {course.popular && (
            <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
              <Zap className="w-3 h-3" />
              POPULAR
            </span>
          )}

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
            {course.title}
          </h3>

          <p className="text-white/90 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center space-x-2 text-slate-700">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{course.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
              {course.level}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
          <Users className="w-4 h-4 text-purple-500" />
          <span className="font-medium">
            {course.students} students enrolled
          </span>
        </div>

        <ul className="space-y-2 flex-grow">
          {course.features.slice(0, 4).map((feature, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-sm text-slate-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Extracted timer block from ModuleCard (boxed H/M/S grid) */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600 mb-2">
            Limited-time offer ends in
          </p>

          <CountdownTimer targetDate={target} />
        </div>

        <div className="pt-4 space-y-3 mt-auto">
          <Link
            href={course.link}
            className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
          >
            <span>View Course Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <DownloadFormButton
            courseTitle={course.title}
            syllabusLink={course.syllabusLink}
            buttonText={
              <span className="flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>Download Syllabus</span>
              </span>
            }
            buttonClassName="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            onSubmit={(values) => {
              console.log("Download form submitted:", { ...values, course: course.title });
            }}
          />
        </div>
      </div>

      {/* Subtle overlay like ModuleCard */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
    </motion.article>
  );
};


/**
 * HomeFeaturedCoursesSection - Interactive Course Cards
 *
 * Shows popular courses with filtering
 * CDPL brand design with card styling from CourseOverviewSection.tsx
 */
export default function HomeFeaturedCoursesSection() {
  // Updated categories as requested
  const ALL_CATEGORIES = ['All', 'Software Testing', 'Data Science', 'Business Intelligence', 'Artificial Intelligence', 'Digital Marketing'];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES[0]);

  // Ticking clock removed from parent to prevent full re-renders
  // const [nowMs, setNowMs] = useState<number>(() => Date.now());
  // useEffect(() => {
  //   const id = setInterval(() => setNowMs(Date.now()), 1000);
  //   return () => clearInterval(id);
  // }, []);

  const filteredCourses = activeCategory === 'All'
    ? COURSES
    : COURSES.filter(course => course.category === activeCategory);

  return (
    <section className="py-6 lg:py-10 bg-gray-50" aria-labelledby="featured-courses-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-brand rounded-full text-sm font-semibold mb-4">
            Popular Courses
          </span>
          <h2 id="featured-courses-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-brand">Industry-Ready</span> Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.
          </p>
        </motion.div>

        {/* Category Filter (Tabs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {ALL_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${activeCategory === category
                ? 'bg-brand text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-brand transition-all duration-300"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

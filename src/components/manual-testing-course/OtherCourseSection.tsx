"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LuClock,
  LuStar,
  LuZap,
  LuArrowRight,
  LuUsers,
  LuCode,
  LuShield,
  LuSettings,
  LuTrophy,
  LuBookOpen,
  LuShieldCheck,
  LuBadgeCheck,
  LuTrendingUp,
} from "react-icons/lu";
import dynamic from "next/dynamic";
import { BarChart, CheckCircle } from "lucide-react";
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false });

type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  popular: boolean;
  link: string;
  icon: IconName;
  features: string[];
};

const iconMap = {
  Code: <LuCode className="w-6 h-6" aria-hidden="true" />,
  Zap: <LuZap className="w-6 h-6" aria-hidden="true" />,
  Shield: <LuShield className="w-6 h-6" aria-hidden="true" />,
  BarChart3: <BarChart className="w-6 h-6" aria-hidden="true" />,
  Settings: <LuSettings className="w-6 h-6" aria-hidden="true" />,
  Trophy: <LuTrophy className="w-6 h-6" aria-hidden="true" />,
} as const;

type IconName = keyof typeof iconMap;

const COURSES: Course[] = [
  {
    id: 2,
    title: "Advanced Automation Testing",
    category: "Software Testing",
    description: "Drive product vision and delivery in SAFe settings.",
    duration: "85 Hours",
    students: "950+",
    rating: 4.8,
    level: "Intermediate",
    popular: true,
    link: "/automation-testing-course",
    icon: "Code",
    features: ["Selenium WebDriver", "CI/CD Integration (Jenkins)", "Advanced Java Concepts"],
  },
  {
    id: 3,
    title: "API Testing using POSTMAN and RestAPIs",
    category: "Software Testing",
    description: "Master API testing using Postman, Rest Assured, and Groovy for robust web services.",
    duration: "15 Hours",
    students: "700+",
    rating: 4.7,
    level: "Intermediate",
    popular: false,
    link: "/api-testing",
    icon: "Zap",
    features: ["Postman & Swagger", "Rest Assured Framework", "JSON/XML Validation"],
  },
  {
    id: 4,
    title: "ETL Testing Course",
    category: "Software Testing",
    description: "Learn to lead Agile transformations using the SAFe framework.",
    duration: "100 Hours",
    students: "500+",
    rating: 4.6,
    level: "Intermediate",
    popular: false,
    link: "/etl-testing",
    icon: "Shield",
    features: ["Data Warehousing Concepts", "SQL Testing", "ETL Tools"],
  },
  {
    id: 5,
    title: "Advanced Software Testing",
    category: "Software Testing",
    description: "Go beyond the basics—build strategies, manage risk, and measure quality with actionable metrics.",
    duration: "95 Hours",
    students: "2,268+",
    rating: 4.8,
    level: "Beginner",
    popular: true,
    link: "/advance-software-testing",
    icon: "BarChart3",
    features: ["Test Strategy & Risk-Based Testing", "Traceability & Coverage Techniques", "Test Management & Metrics", "Performance/Security Test Readiness"],
  },
  {
    id: 6,
    title: "Master Program in Java Programming",
    category: "Software Testing",
    description: "Become industry-ready with Core Java, OOP, Collections, JDBC, Spring Boot, REST APIs, unit testing, and deployment. Build portfolio projects and earn a QR-verified certificate.",
    duration: "30 Hours",
    students: "Not specified",
    rating: 4.9,
    level: "Beginner",
    popular: true,
    link: "/java-course",
    icon: "Settings",
    features: ["Core Java Fundamentals (Variables, OOP, Collections, Exception Handling)", "Enterprise Java (Spring Boot, REST APIs, Hibernate/JPA)", "Testing & Build Tools (JUnit/Mockito, Maven/Gradle)", "CI/CD & Deployment (GitHub Actions, Docker, AWS Basics)", "50+ Hands-on Projects (E-Commerce, Banking System, etc.)", "Tools: IntelliJ IDEA, Git, Postman"],
  },
  {
    id: 7,
    title: "Advanced Manual & Automation Testing — Master Program",
    category: "Software Testing",
    description: "End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.",
    duration: "180 Hours",
    students: "2,302+",
    rating: 4.8,
    level: 'Beginner',
    popular: true,
    link: "/automation-testing-course",
    icon: "Trophy",
    features: ["Risk-Based Strategy & Quality Metrics", "Advanced Test Design & Bug Advocacy", "Automation Frameworks (POM/Hybrid, API + UI)", "CI/CD, Parallel & Cross-Browser at Scale"],
  },
];

function pickVariant(index: number) {
  const variants = [
    {
      header: "bg-gradient-to-br from-indigo-600 to-blue-700",
      button: "bg-indigo-600 hover:bg-indigo-700",
      hoverBorder: "hover:border-indigo-300",
    },
    {
      header: "bg-gradient-to-br from-emerald-600 to-teal-700",
      button: "bg-emerald-600 hover:bg-emerald-700",
      hoverBorder: "hover:border-emerald-300",
    },
    {
      header: "bg-gradient-to-br from-rose-600 to-pink-700",
      button: "bg-rose-600 hover:bg-rose-700",
      hoverBorder: "hover:border-rose-300",
    },
    {
      header: "bg-gradient-to-br from-amber-600 to-orange-700",
      button: "bg-amber-600 hover:bg-amber-700",
      hoverBorder: "hover:border-amber-300",
    },
    {
      header: "bg-gradient-to-br from-violet-600 to-purple-700",
      button: "bg-violet-600 hover:bg-violet-700",
      hoverBorder: "hover:border-violet-300",
    },
    {
      header: "bg-gradient-to-br from-cyan-600 to-sky-700",
      button: "bg-cyan-600 hover:bg-cyan-700",
      hoverBorder: "hover:border-cyan-300",
    },
  ];
  return variants[index % variants.length];
}

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const variant = pickVariant(index);

  return (
    <article
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
            <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300 text-white">
              {iconMap[course.icon]}
            </div>
            <div
              className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
              aria-label={`Rating ${course.rating.toFixed(1)} out of 5`}
            >
              <LuStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-800">
                {course.rating.toFixed(1)}
              </span>
            </div>
          </div>

          {course.popular && (
            <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
              <LuZap className="w-3 h-3" />
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
            <LuClock className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{course.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
              {course.level}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
          <LuUsers className="w-4 h-4 text-purple-500" />
          <span className="font-medium">
            {course.students} students enrolled
          </span>
        </div>

        <ul className="space-y-2 flex-grow">
          {course.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-sm text-slate-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 mt-auto">
          <Link
            href={course.link}
            className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
          >
            <span>View Course Details</span>
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Subtle overlay like ModuleCard */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
    </article>
  );
};

export default function OtherCoursesSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section className="py-10 bg-white" id="other-courses" aria-label="Other professional software testing courses">
      {/* Invisible SEO keywords */}
      <p className="sr-only">
        Best software testing courses, automation testing with Selenium Java, full-stack QA training, API testing with
        Postman and RestAssured, performance testing JMeter, mobile app testing Appium, ISTQB Foundation certification.
        Job-ready curriculum, placement assistance, live projects.
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Explore <span className="text-blue-700">Other Courses</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Accelerate your career with industry-ready, mentor-led training. Hands-on, project-based and aligned with
            high-demand QA jobs.
          </p>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200">
              <LuStar className="h-4 w-4" aria-hidden="true" /> 4.8/5 Learner Rating
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-indigo-200">
              <LuTrendingUp className="h-4 w-4" aria-hidden="true" /> Job-Ready Curriculum
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700 ring-1 ring-cyan-200">
              <LuZap className="h-4 w-4" aria-hidden="true" /> Live Projects & Labs
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, index) => (
            <CourseCard key={c.id} course={c} index={index} />
          ))}
        </div>

        {/* Value props */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <LuBadgeCheck className="h-5 w-5 text-indigo-600" aria-hidden="true" /> Industry-Validated Syllabus
            </h3>
            <p className="text-neutral-700 text-sm">
              Designed with input from hiring managers to help you master **Selenium, API testing, CI/CD, JMeter, and
              Appium** with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <LuShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" /> Placement Assistance
            </h3>
            <p className="text-neutral-700 text-sm">
              Resume reviews, mock interviews, and referrals to **QA Analyst**, **Automation Engineer**, and **SDET**
              roles.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <LuBookOpen className="h-5 w-5 text-rose-600" aria-hidden="true" /> Lifetime Learning Access
            </h3>
            <p className="text-neutral-700 text-sm">
              Get recordings, templates, and updates—stay current with **test automation frameworks** and **DevOps** trends.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm ring-1 ring-neutral-100">
          <h3 className="text-2xl font-bold text-neutral-900">
            Not sure which course fits you best?
          </h3>
          <p className="mt-2 text-neutral-700">
            Talk to a mentor for a personalized **career roadmap** based on your experience and goals.
          </p>
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
          >
            Get Free Counselling
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Manual Testing Course Page - Other Courses Section - Get Free Counselling"
      />
    </section>
  );
}
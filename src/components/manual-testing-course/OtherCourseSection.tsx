"use client";

import { useState } from "react";
import {
  LuStar,
  LuZap,
  LuArrowRight,
  LuBookOpen,
  LuShieldCheck,
  LuBadgeCheck,
  LuTrendingUp,
} from "react-icons/lu";
import dynamic from "next/dynamic";
import CourseCard, { type CourseCardIcon } from "@/components/courses/CourseCard";
import { SiteStat } from "@/components/stats/SiteStatsProvider";
import { SITE_STATS } from "@/lib/siteStats";
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
  icon: CourseCardIcon;
  features: string[];
};

const COURSES: Course[] = [
  {
    id: 2,
    title: "Advanced Automation Testing",
    category: "Software Testing",
    description: "Drive product vision and delivery in SAFe settings.",
    duration: "85 Hours",
    students: "950+",
    rating: SITE_STATS.rating,
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
    rating: SITE_STATS.rating,
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
    rating: SITE_STATS.rating,
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
    rating: SITE_STATS.rating,
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
    rating: SITE_STATS.rating,
    level: "Beginner",
    popular: true,
    link: "/java-course",
    icon: "Cog",
    features: ["Core Java Fundamentals (Variables, OOP, Collections, Exception Handling)", "Enterprise Java (Spring Boot, REST APIs, Hibernate/JPA)", "Testing & Build Tools (JUnit/Mockito, Maven/Gradle)", "CI/CD & Deployment (GitHub Actions, Docker, AWS Basics)", "50+ Hands-on Projects (E-Commerce, Banking System, etc.)", "Tools: IntelliJ IDEA, Git, Postman"],
  },
  {
    id: 7,
    title: "Advanced Manual & Automation Testing — Master Program",
    category: "Software Testing",
    description: "End-to-end mastery: advanced test strategy and leadership combined with enterprise-grade automation and CI/CD.",
    duration: "180 Hours",
    students: "2,302+",
    rating: SITE_STATS.rating,
    level: 'Beginner',
    popular: true,
    link: "/automation-testing-course",
    icon: "Trophy",
    features: ["Risk-Based Strategy & Quality Metrics", "Advanced Test Design & Bug Advocacy", "Automation Frameworks (POM/Hybrid, API + UI)", "CI/CD, Parallel & Cross-Browser at Scale"],
  },
];

export default function OtherCoursesSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section className="py-10 bg-white" id="other-courses" aria-label="Other professional software testing courses">
      {/* Invisible SEO keywords */}
      <p className="sr-only">
        Comprehensive software testing courses, automation testing with Selenium Java, full-stack QA training, API testing with
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
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800 ring-1 ring-emerald-200">
              <LuStar className="h-4 w-4" aria-hidden="true" /> <SiteStat k="rating" /> Learner Rating
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
        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, index) => (
            <CourseCard
              key={c.id}
              course={c}
              index={index}
              subgrid
              source={`Manual Testing Course Page - Other Courses Section - ${c.title} - Download Syllabus`}
            />
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

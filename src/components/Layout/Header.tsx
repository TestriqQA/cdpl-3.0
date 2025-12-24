"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EnquireModal from "./EnquireModal";

/* ----------------------- Types ----------------------- */
type LogoItem = { name: string; logo: string };
type Course = {
  name: string;
  description: string;
  slug?: string;
  rightColumnImages?: LogoItem[];
};
type Category = {
  id: string;
  name: string;
  description: string;
  slug?: string;
  rightColumnImages?: LogoItem[];
  courses: Course[];
};

/* ----------------------- Course Data ----------------------- */
const courseCategories: Category[] = [
  {
    id: "software-testing-courses",
    name: "Software Testing Courses",
    slug: "software-testing-course",
    description:
      "Master Agile methodologies and Scrum frameworks to enhance team collaboration and project delivery.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ],
    courses: [
      {
        name: "Manual Software Testing",
        slug: "manual-testing-course",
        description: "Learn to facilitate Scrum teams and drive Agile projects effectively.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "API Testing using POSTMAN and RestAPIs",
        slug: "api-testing",
        description: "Master product backlog management and stakeholder collaboration.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Database Management System using MySQL",
        slug: "dbms-course",
        description: "Gain advanced Scrum knowledge to lead high-performing teams.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "ETL Testing Course",
        slug: "etl-testing",
        description: "Learn to lead Agile transformations using the SAFe framework.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Software Testing",
        slug: "advance-software-testing",
        description: "Facilitate SAFe practices for scaled Agile environments.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Automation Testing",
        slug: "automation-testing-course",
        description: "Drive product vision and delivery in SAFe settings.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Manual and Automation Testing - Master Program",
        slug: "advance-manual-automation-testing",
        description: "Blend Agile principles with PMI project management standards.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Python Programming",
        slug: "python-course",
        description: "Master containerization and orchestration technologies.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Java Programming",
        slug: "java-course",
        description: "Automate CI/CD pipelines with Jenkins.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
    ],
  },
  {
    id: "data-science",
    name: "Data Science",
    slug: "ds-ml-courses",
    description: "Prepare for job interviews with practical skills and confidence.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ],
    courses: [
      {
        name: "Machine Learning and Data Science with Python - Hero Program",
        slug: "machine-learning-course",
        description: "Build strategies to ace behavioral and technical interviews.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Deep Learning, NLP and GenerativeAI",
        slug: "generative-ai-course",
        description: "Practice real-world interview scenarios with feedback.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Data Science and Machine Learning Masterclass",
        slug: "data-science-course",
        description: "Master coding challenges and technical questions.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Comprehensive Data Science and AI - Master Program",
        slug: "ai-course",
        description: "Master coding challenges and technical questions.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Python Programming",
        slug: "python-course",
        description: "Master containerization and orchestration technologies.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Machine Learning Algorithms using python Programming",
        slug: "machine-learning-using-python",
        description: "Master containerization and orchestration technologies.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Machine Learning and Data Visualization using R Programming",
        slug: "data-visualization-in-r-programming",
        description: "Master containerization and orchestration technologies.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
    ],
  },
  {
    id: "business-intelligence",
    name: "Business Intelligence (BI)",
    slug: "bi-courses",
    description: "Develop skills to manage projects efficiently and effectively.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ], courses: [
      {
        name: "Advanced Data Analytics - Hero Program",
        slug: "data-analytics",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: " Advanced Data Analytics with Python Libraries",
        slug: "data-analytics-python",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Excel for Data Analytics & Visualization",
        slug: "data-analytics-and-visualization",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Data Analytics & Visualization with Tableau",
        slug: "data-analytics-with-tableau",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Data Analytics & Visualization with Power BI",
        slug: "power-bi-course",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Data Analytics With BI And Big Data Engineering Master Program",
        slug: "masters-in-data-engineering",
        description: "Craft a standout resume to impress recruiters.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      // {
      //   name: "Big Data Engineering",
      //   slug: "data-engineering-course",
      //   description: "Master coding challenges and technical questions.",
      //   rightColumnImages: [
      //     { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      //     { name: "Advanced Automation Testing", logo: "/aaa.png" },
      //   ],
      // },

    ],
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence-courses",
    description: "Develop skills to manage projects efficiently and effectively.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ], courses: [
      {
        name: "Prompt Engineering with Generative AI",
        slug: "prompt-engineering-course",
        description: "Master coding challenges and technical questions.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing-courses",
    description: "Develop skills to manage projects efficiently and effectively.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ], courses: [
      {
        name: "AI-Driven Digital Marketing & Analytics",
        slug: "digital-marketing-course",
        description: "Earn the globally recognized PMP certification.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: " Digital Marketing and AI (For Business Owners)",
        slug: "ai-in-digital-marketing",
        description: "Earn the globally recognized PMP certification.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Digital Marketing With AI Bootcamp",
        slug: "ai-bootcamp",
        description: "Earn the globally recognized PMP certification.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
    ],
  },
  {
    id: "aaa-accredited",
    name: "AAA Accredited Courses",
    description: "Unlock insights from data with advanced analytics and machine learning.",
    rightColumnImages: [
      { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
      { name: "Advanced Automation Testing", logo: "/aaa.png" },
    ], courses: [
      {
        name: "Advanced Software Testing",
        slug: "advance-software-testing",
        description: "Analyze data to drive business decisions.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Automation Testing",
        slug: "automation-testing-course",
        description: "Build predictive models with machine learning techniques.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Advanced Data Science and Machine Learning - Masterclass",
        slug: "data-science-course",
        description: "Use Python for data analysis and visualization.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
      {
        name: "Data Analysis with BI & Big Data Engineering - Master Program",
        slug: "masters-in-data-engineering",
        description: "Create interactive data visualizations with Power BI.",
        rightColumnImages: [
          { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
          { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
      },
    ],
  },
];

/* ----------------------- Header ----------------------- */
const Header = () => {
  const pathname = usePathname();

  // Extract all course slugs for active state check
  const allCourseSlugs = courseCategories.flatMap(category =>
    category.courses.map(course => course.slug)
  ).filter((slug): slug is string => !!slug);

  // Check if the current pathname is a course page
  const isCourseActive = allCourseSlugs.some(slug => pathname.startsWith(`/${slug}`));

  // Check if the current pathname is the main /courses page
  const isCoursesBaseActive = pathname.startsWith("/courses");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  // Mega menu state (layout unchanged)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);


  const isCoursesMenuOpen = isMegaMenuOpen || isCourseActive || isCoursesBaseActive;

  // const isJobsActive = pathname.startsWith("/jobs");
  // const isAboutActive = pathname.startsWith("/about") || pathname.startsWith("/our-team");
  const [selectedCategory, setSelectedCategory] = useState<string>(courseCategories[0].id);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Other dropdowns
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutButtonRef = useRef<HTMLButtonElement | null>(null);
  const aboutMenuRef = useRef<HTMLDivElement | null>(null);
  const jobsButtonRef = useRef<HTMLButtonElement | null>(null);
  const jobsMenuRef = useRef<HTMLDivElement | null>(null);

  // Mobile accordions
  const [mobileSections, setMobileSections] = useState<{
    courses: boolean;
    jobs: boolean;
    about: boolean;
    openCategoryId: string | null;
  }>({
    courses: false,
    jobs: false,
    about: false,
    openCategoryId: null,
  });

  // Refs to detect boundaries
  const panelRef = useRef<HTMLDivElement | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const coursesButtonRef = useRef<HTMLButtonElement | null>(null);

  // Mobile refs
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  // ---- Hover stability: delayed close, cancel on enter ----
  const closeTimerRef = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      closeMega();
    });
  };

  const openMega = () => {
    cancelClose();
    setIsMegaMenuOpen(true);
  };

  const closeMega = () => {
    setIsMegaMenuOpen(false);
    setHoveredCourse(null);
    setHoveredCategory(null);
  };

  const toggleMega = () => {
    if (isMegaMenuOpen) {
      closeMega();
    } else {
      openMega();
    }
  };

  // Close Jobs/About and mega on outside click / ESC
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        isJobsOpen &&
        jobsMenuRef.current &&
        !jobsMenuRef.current.contains(t) &&
        jobsButtonRef.current &&
        !jobsButtonRef.current.contains(t)
      ) {
        setIsJobsOpen(false);
      }
      if (
        isAboutOpen &&
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(t) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(t)
      ) {
        setIsAboutOpen(false);
      }
      if (
        isMegaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(t) &&
        coursesButtonRef.current &&
        !coursesButtonRef.current.contains(t)
      ) {
        closeMega();
      }
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(t) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(t)
      ) {
        setIsMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsJobsOpen(false);
        setIsAboutOpen(false);
        closeMega();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
      cancelClose();
    };
  }, [isJobsOpen, isAboutOpen, isMegaMenuOpen, isMenuOpen]);

  // Mobile toggles
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    if (isMenuOpen) setMobileSections({ courses: false, jobs: false, about: false, openCategoryId: null });
  };

  const toggleMobileSection = (key: "courses" | "jobs" | "about") => {
    setMobileSections((s) => {
      const next = { ...s, [key]: !s[key] };
      if (key === "courses" && s.courses) next.openCategoryId = null;
      return next;
    });
  };
  const toggleMobileCategory = (categoryId: string) => {
    setMobileSections((s) => ({ ...s, openCategoryId: s.openCategoryId === categoryId ? null : categoryId }));
  };

  // Derived
  const selectedCategoryData = courseCategories.find((cat) => cat.id === selectedCategory)!;
  const hoveredCourseData = selectedCategoryData?.courses.find((c) => c.name === hoveredCourse);

  // Prefer explicit rightColumnImages, else fall back to first two governingBodies
  const rightColumnBodies: LogoItem[] = (() => {
    const src = hoveredCourse
      ? hoveredCourseData?.rightColumnImages ?? hoveredCourseData?.rightColumnImages ?? []
      : selectedCategoryData?.rightColumnImages ?? selectedCategoryData?.rightColumnImages ?? [];
    return (src || []).slice(0, 2);
  })();

  const displayDescription =
    hoveredCourse ? hoveredCourseData?.description : selectedCategoryData?.description;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="rounded-lg">
                <Image src="/cdpl-logo.png" alt="CDPL Logo" title="CDPL Logo" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-12 xl:w-14 xl:h-14" />
              </div>
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-brand">Cinute Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-start">
            <Link href="/" className={`transition-colors text-sm xl:text-base px-4 py-6 active:text-brand ${pathname === "/" ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>Home</Link>

            {/* Mega Menu Trigger */}
            <div className="relative">
              <button
                ref={coursesButtonRef}
                type="button"
                className={`transition-colors flex items-center text-sm xl:text-base px-4 py-6 active:text-brand ${isCoursesMenuOpen ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                aria-expanded={isMegaMenuOpen}
                aria-controls="mega-menu"
                onMouseEnter={openMega}
                onMouseLeave={() => scheduleClose()}
                onClick={toggleMega}
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Mega Menu Wrapper */}
              {isMegaMenuOpen && (
                <div
                  id="mega-menu"
                  ref={megaMenuRef}
                  className="fixed left-0 right-0 top-[72px] z-50"
                  onMouseEnter={cancelClose}
                  onMouseLeave={() => scheduleClose()}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                      ref={panelRef}
                      className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-brand overflow-hidden"
                      style={{ maxHeight: 520 }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={() => scheduleClose()}
                    >
                      <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 lg:p-6">
                        {/* Column 1: Categories */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-3 border-r border-gray-200 pr-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Categories</h3>
                          <div className="space-y-1 max-h-[420px] overflow-y-auto pr-2">
                            {courseCategories.map((category) => {
                              const href = category.slug ? `/${category.slug}` : undefined;
                              return href ? (
                                <Link
                                  href={href}
                                  key={category.id}
                                  onMouseEnter={() => {
                                    setSelectedCategory(category.id);
                                    setHoveredCategory(category.id);
                                    setHoveredCourse(null);
                                  }}
                                  onClick={() => setSelectedCategory(category.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${selectedCategory === category.id ? "bg-orange-50 text-brand font-medium" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                  aria-current={selectedCategory === category.id ? "true" : "false"}
                                >
                                  <span>{category.name}</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${selectedCategory === category.id ? "text-brand" : "text-gray-400"
                                      }`}
                                  />
                                </Link>
                              ) : (
                                <div
                                  key={category.id}
                                  onMouseEnter={() => {
                                    setSelectedCategory(category.id);
                                    setHoveredCategory(category.id);
                                    setHoveredCourse(null);
                                  }}
                                  onClick={() => setSelectedCategory(category.id)}
                                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${selectedCategory === category.id ? "bg-orange-50 text-brand font-medium" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                  aria-current={selectedCategory === category.id ? "true" : "false"}
                                >
                                  <span>{category.name}</span>
                                  <ChevronRight
                                    className={`h-4 w-4 transition-transform ${selectedCategory === category.id ? "text-brand" : "text-gray-400"
                                      }`}
                                  />
                                </div>
                              )
                            })}
                          </div>
                          <Link href="/courses" className="mt-4 flex items-center text-brand hover:text-brand font-medium text-sm group" onClick={closeMega}>
                            View All Courses
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>

                        {/* Column 2: Courses */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-5 pr-0 sm:pr-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Courses</h3>
                          <div className="grid grid-cols-1 gap-1 max-h-[420px] overflow-y-auto pr-2">
                            {selectedCategoryData?.courses.map((course, index) => {
                              const isHovered = hoveredCourse === course.name;
                              const href = course.slug ? `/${course.slug}` : undefined;
                              const itemClasses = `flex items-start px-3 py-2 rounded-lg transition-all duration-200 group ${isHovered ? "bg-orange-50 text-brand" : "text-gray-700 hover:bg-orange-50 hover:text-brand"
                                }`;

                              const inner = (
                                <>
                                  <div className="flex-shrink-0 mt-1">
                                    <div
                                      className={`w-2 h-2 rounded-full transition-transform ${isHovered ? "bg-brand scale-125" : "bg-brand group-hover:scale-125"
                                        }`}
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="font-medium text-sm">{course.name}</p>
                                  </div>
                                </>
                              );

                              return href ? (
                                <Link
                                  key={index}
                                  href={href}
                                  onMouseEnter={() => setHoveredCourse(course.name)}
                                  className={itemClasses}
                                  onClick={closeMega}
                                >
                                  {inner}
                                </Link>
                              ) : (
                                <div
                                  key={index}
                                  onMouseEnter={() => setHoveredCourse(course.name)}
                                  className={itemClasses}
                                  role="button"
                                  tabIndex={0}
                                >
                                  {inner}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Column 3: Two stacked images (distinct slots) */}
                        <div className="col-span-12 sm:col-span-4 lg:col-span-4 bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-4">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            {hoveredCourse || hoveredCategory ? "Certifications" : "Governing Bodies"}
                          </h3>
                          <p className="text-xs text-gray-600 mb-4">
                            {hoveredCourse
                              ? "Certified by leading organizations"
                              : hoveredCategory
                                ? "Certified by leading organizations"
                                : "Hover over a category or course to see its certifications"}
                          </p>

                          <div className="grid grid-rows-2 gap-4">
                            {[0, 1].map((i) => {
                              const body = rightColumnBodies[i];
                              return (
                                <div
                                  key={i + (body?.name || "placeholder")}
                                  className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 flex items-center justify-center h-32"
                                >
                                  {body ? (
                                    <Image
                                      src={body.logo}
                                      alt={body.name}
                                      className="object-contain h-full w-auto rounded-md"
                                      width={400}
                                      height={128}
                                      priority={false}
                                    />
                                  ) : (
                                    <div className="flex items-center justify-center h-full w-full text-gray-300 text-xs">
                                      Image slot
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          <p className="text-xs text-gray-600 mt-4 mb-4">
                            {displayDescription || "Select a category or course to view its description"}
                          </p>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center text-xs text-gray-600">
                              <Globe className="h-4 w-4 mr-2 text-brand flex-shrink-0" />
                              <span>Globally Recognized Certifications</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services" className={`transition-colors text-sm xl:text-base px-4 py-6 active:text-brand ${pathname.startsWith("/services") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>Services</Link>

            <Link href="/events/past-events" className={`transition-colors text-sm xl:text-base px-4 py-6 active:text-brand ${pathname.startsWith("/events") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              Event
            </Link>
            <Link href="/mentors" className={`transition-colors text-sm xl:text-base px-4 py-6 active:text-brand ${pathname.startsWith("/mentors") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              Mentors
            </Link>

            {/* Jobs Dropdown (Desktop) */}
            <div className="relative" onMouseEnter={() => setIsJobsOpen(true)} onMouseLeave={() => setIsJobsOpen(false)}>
              <button
                ref={jobsButtonRef}
                onClick={() => setIsJobsOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsJobsOpen(true);
                    requestAnimationFrame(() => {
                      const first = jobsMenuRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
                      first?.focus();
                    });
                  }
                }}
                className={`transition-colors flex items-center text-sm xl:text-base px-4 py-6 active:text-brand ${pathname.startsWith("/jobs") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                aria-haspopup="menu"
                aria-expanded={isJobsOpen}
                aria-controls="jobs-menu"
              >
                Jobs
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isJobsOpen && (
                <div
                  id="jobs-menu"
                  ref={jobsMenuRef}
                  role="menu"
                  aria-label="Jobs"
                  className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50"
                >

                  <div className="py-1">
                    <Link
                      href="/jobs/live-jobs"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-brand-50 focus:text-brand outline-none"
                    >
                      Live Jobs
                    </Link>
                    <Link
                      href="/jobs/placements"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      Placements
                    </Link>
                    <Link
                      href="/jobs/careers"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/jobs/job-openings"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      Job Openings
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown (Desktop) */}
            <div className="relative" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
              <button
                ref={aboutButtonRef}
                onClick={() => setIsAboutOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsAboutOpen(true);
                    requestAnimationFrame(() => {
                      const first = aboutMenuRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
                      first?.focus();
                    });
                  }
                }}
                className={`transition-colors flex items-center text-sm xl:text-base px-4 py-6 ${pathname.startsWith("/about") || pathname.startsWith("/our-team") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
                aria-controls="about-menu"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isAboutOpen && (
                <div
                  id="about-menu"
                  ref={aboutMenuRef}
                  role="menu"
                  aria-label="About"
                  className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50"
                >
                  <div className="py-1">
                    <Link
                      href="/about-us"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      About CDPL
                    </Link>
                    <Link
                      href="/our-team"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      Our Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className={`transition-colors text-sm xl:text-base px-4 py-6 ${pathname.startsWith("/blog") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              Blog
            </Link>
            <Link href="/contact-us" className={`transition-colors text-sm xl:text-base px-4 py-6 ${pathname.startsWith("/contact-us") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="cursor-pointer hidden lg:block bg-brand text-white px-4 sm:px-5 py-2 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 text-sm font-semibold"
            >
              Free Demo
            </button>
          </div>

          {/* Mobile Menu Button - Visible on lg and below */}
          <div className="lg:hidden flex items-center">
            <button
              ref={mobileToggleRef}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-73px)] overflow-y-auto shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/" ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>

            {/* Mobile Courses Accordion */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("courses")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${isCoursesMenuOpen ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                aria-expanded={mobileSections.courses}
                aria-controls="mobile-courses"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileSections.courses ? "rotate-180" : ""}`}
                />
              </button>

              {mobileSections.courses && (
                <div id="mobile-courses" className="pl-4 space-y-2">
                  {courseCategories.map((category) => {
                    const isOpen = mobileSections.openCategoryId === category.id;
                    return (
                      <div key={category.id} className="space-y-2">
                        <button
                          onClick={() => toggleMobileCategory(category.id)}
                          className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-brand hover:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none rounded-lg transition-colors outline-none"
                          aria-expanded={isOpen}
                          aria-controls={`mobile-category-${category.id}`}
                        >
                          <span>{category.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                          />
                        </button>

                        {isOpen && (
                          <div id={`mobile-category-${category.id}`} className="pl-4 space-y-1">
                            {category.courses.map((course, idx) => {
                              const href = course.slug ? `/${course.slug}` : undefined;
                              return href ? (
                                <Link
                                  key={idx}
                                  href={href}
                                  className={`block px-4 py-2 text-sm rounded-lg transition-colors active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === href ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                                  onClick={toggleMenu}
                                >
                                  • {course.name}
                                </Link>
                              ) : (
                                <div
                                  key={idx}
                                  className="block px-4 py-2 text-sm text-gray-600 rounded-lg"
                                >
                                  • {course.name}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <Link
                    href="/courses"
                    className={`block px-4 py-2 text-sm font-medium active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/courses" ? "text-brand" : "text-brand hover:text-brand"}`}
                    onClick={toggleMenu}
                  >
                    View All Courses →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services Link */}
            <Link
              href="/services"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/services") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Services
            </Link>

            {/* Mobile Jobs Accordion */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("jobs")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/jobs") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                aria-expanded={mobileSections.jobs}
                aria-controls="mobile-jobs"
              >
                <span>Jobs</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileSections.jobs ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSections.jobs && (
                <div id="mobile-jobs" className="pl-4 space-y-1">
                  <Link
                    href="/jobs/live-jobs"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/live-jobs" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • Live Jobs
                  </Link>
                  <Link
                    href="/jobs/placements"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/placements" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • Placements
                  </Link>
                  <Link
                    href="/jobs/careers"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/careers" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • Careers
                  </Link>
                  <Link
                    href="/jobs/job-openings"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/job-openings" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • Job Openings
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile About Accordion */}
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("about")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/about") || pathname.startsWith("/our-team") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                aria-expanded={mobileSections.about}
                aria-controls="mobile-about"
              >
                <span>About</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileSections.about ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSections.about && (
                <div id="mobile-about" className="pl-4 space-y-1">
                  <Link
                    href="/about-us"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/about-us" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • About CDPL
                  </Link>
                  <Link
                    href="/our-team"
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/our-team" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                    onClick={toggleMenu}
                  >
                    • Our Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/events/past-events"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/events") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Event
            </Link>
            <Link
              href="/mentors"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/mentors") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Mentors
            </Link>
            <Link
              href="/blog"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/blog") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/contact-us") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                toggleMenu();
                setIsEnquireModalOpen(true);
              }}
              className="w-full block px-4 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg text-center text-sm sm:text-base font-semibold"
            >
              Free Demo
            </button>
          </div>
        </div>
      )}

      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </header >
  );
};

export default Header;
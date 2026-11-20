import type { CourseContent } from "@/types/course-page";
import { DATA_ANALYTICS_VIS_FAQS } from "@/data/courses/bi/faqs/data-analytics-and-visualization";

// Content for /courses/bi-courses/data-analytics-and-visualization, moved from
// the old src/components/data-analytics-and-visualization/* sections. Kept word
// for word except repeated filler (stat recap lists, the same SEO line under
// every card, sr-only keyword lists, a third keyword paragraph in the hero).
export const dataAnalyticsAndVisualizationCourse: CourseContent = {
  slug: "data-analytics-and-visualization",
  courseName: "Advanced Excel for Data Analytics & Visualization",
  sourceName: "Data Analytics & Visualization Course Page",

  seo: {
    title: "Advanced Excel for Data Analytics & Visualization | CDPL",
    description:
      "20-hour advanced Excel course — Power Query, Power Pivot, DAX, interactive dashboards & data visualization with placement assistance in Mumbai.",
    keywords: [
      "advanced excel course mumbai",
      "excel for data analytics",
      "data visualization training",
      "power pivot course",
      "excel dashboards training",
      "data analyst skills excel",
      "mis reporting course",
    ],
    image: "/og-images/courses-bi-courses-data-analytics-and-visualization-og.webp",
  },

  schema: {
    name: "Advanced Excel for Data Analytics & Visualization",
    description:
      "Master Advanced Excel for Data Analytics & Visualization. 20-Hour comprehensive course with interactive dashboards, Power Query, and Power Pivot. job assistance.",
    duration: "P1M",
    howTo: {
      name: "How to Enroll in CDPL Advanced Excel for Data Analytics & Visualization Course",
      description: "A step-by-step guide to enrolling in our 20-hour Excel Data Analytics & Visualization training program.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore Power Query, Power Pivot, Pivot Tables, Excel Charts, and interactive dashboard modules.",
        },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master Excel data analytics and visualization to become a Data Analyst, BI Analyst, or Financial Analyst.",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Advanced Excel for Data Analytics & Visualization",
    badges: [
      { icon: "star", text: "{reviews} Verified Reviews" },
      { icon: "mapPin", text: "Mumbai's Premium Training Institute" },
    ],
    h1: "Master [[Advanced Excel]] for [[Data Analytics & Visualization]]",
    subtitle:
      "Transform raw business data into decision-ready dashboards with Excel’s advanced formulas, PivotTables, Power Query, and Power Pivot. Learn KPI tracking, interactive charts, reporting automation, and best practices for analytics in just 20 hours. Build job-ready dashboards, streamline weekly and monthly reports, and apply proven frameworks for **Excel data analysis**, **business intelligence**, and **interactive visualization**. Ideal for learners in **Mumbai, Maharashtra (India)** seeking a career upgrade in analytics, MIS, or reporting.",
    description:
      "Looking for the **comprehensive Advanced Excel course in Mumbai**? Join our **Excel data analytics training** to learn **dashboard design**, **KPI tracking**, and **Power Query** workflows used by modern analytics teams across India.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Data Analytics program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "Advanced formulas & functions",
      "PivotTables & PivotCharts",
      "Power Query (ETL)",
      "Power Pivot & Data Model",
      "DAX (intro) for KPIs",
      "Interactive dashboards",
      "Data cleaning & shaping",
      "Automation & reporting",
      "Business analytics use-cases",
    ],
  },

  stats: {
    heading: "Why Invest in This [[Course]]?",
    intro:
      "The data analytics industry is booming across India and globally. Mastering **Advanced Excel for Data Analytics**-from **PivotTables** and **Power Query** to **Power Pivot** and **interactive dashboards**-helps you analyze, visualize, and present business insights faster. Ideal for **freshers**, **working professionals**, and **career switchers**.",
    items: [
      { value: "25%", label: "Market Growth (2020-2030)", note: "Projected growth in data analytics roles" },
      { value: "101,000+", label: "Job Vacancies in India", note: "Excel expert positions available" },
      { value: "4 LPA", label: "Average Fresher Salary", note: "Excel expert starting salary" },
      { value: "75%", label: "Job Satisfaction Rate", note: "Among data analytics professionals" },
      { value: "32%", label: "India's Global Market Share", note: "In data analytics services" },
      { value: "14+", label: "Years of Expertise", note: "Cinute Digital's industry experience" },
    ],
    extras: [
      {
        kind: "text",
        title: "Advanced Excel for Data Analytics & Visualization — Skills You’ll Use Daily",
        text: "Build job-ready skills with hands-on practice in **Excel dashboards**, **data cleaning**, **Power Query**, **Power Pivot**, **DAX basics**, and **visual storytelling**. This program is designed for **analysts**, **business managers**, and **students** aiming to improve decision-making and reporting. If you’re searching for an *Advanced Excel course in Mumbai* with *placement assistance*, or need *Excel training for data analytics* to boost your career, this course gives you a competitive edge.",
      },
    ],
    ctas: [{ label: "Book a Free Career Session", kind: "careerSession" }],
  },

  why: {
    heading: "Why Choose [[Cinute Digital]]?",
    intro: "We combine industry expertise with hands-on learning to transform you into a market-ready Excel professional.",
    cards: [
      { icon: "barChart", title: "80:20 Approach", description: "80 practical and 20 theory model for industry-rich experience" },
      { icon: "briefcase", title: "Real-Time Projects", description: "Gain hands-on experience with real-world projects and case studies" },
      { icon: "message", title: "1:1 Doubt Solving", description: "The 1:1 doubt solving ensures every question is resolved" },
      { icon: "users", title: "Expert Instructors", description: "Learn from seasoned data analysts and industry veterans" },
      { icon: "award", title: "Global Certification", description: "Get internationally recognized certificates with unique QR code" },
      { icon: "rocket", title: "Career Support", description: "Resume building and interview preparation included" },
      { icon: "target", title: "Job Assistance", description: "Comprehensive placement support and career guidance" },
      { icon: "handshake", title: "Industry Partnerships", description: "Work with top global companies and hiring partners" },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          {
            value: "80:20",
            label: "Practical Learning",
            note: "80% hands-on practice and 20% theory ensures you gain real-world experience with every concept. Apply **Excel formulas**, **data cleaning**, and **dashboard building** in **live projects** to build a **professional portfolio**.",
          },
          {
            value: "1:1",
            label: "Personal Support",
            note: "One-on-one doubt solving ensures every question is answered and you never feel lost. Get **mentorship**, **mock interviews**, and **resume feedback** tailored to your **analytics career path**.",
          },
          {
            value: "100%",
            label: "Job Assistance",
            note: "Complete placement support including resume building, interview prep, and career guidance. Access **hiring partners**, role-based **interview questions**, and **salary negotiation tips** for **Excel analyst** and **MIS executive** roles.",
          },
        ],
      },
      {
        kind: "text",
        title: "Ready to Transform Your Career?",
        text: "Join thousands of successful students who have mastered Excel and landed their dream jobs. Enroll in our **Advanced Excel course with placement** to learn **Power Query**, **Power Pivot**, **PivotTables**, and **dashboarding**—perfect for **Data Analyst**, **MIS Executive**, and **Business Analyst** roles.",
      },
    ],
    outro:
      "Join the **Advanced Excel Training** and **Data Analytics Course** by Cinute Digital-built for **freshers** and **working professionals** seeking **placement assistance**, **live project experience**, and a **globally recognized Excel certification**. Master **PivotTables**, **Power Query**, **Power Pivot**, **dashboards**, and **data visualization** to accelerate your **analytics career in India** and beyond.",
    ctas: [{ label: "Start Your Journey Today", kind: "enroll" }],
  },

  curriculum: {
    heading: "Comprehensive [[Curriculum]]",
    intro: "Master 13 comprehensive modules covering everything from Excel basics to advanced dashboards and real-world projects.",
    modules: [
      {
        title: "Introduction to Excel",
        topics: [
          "Getting Started with Excel - Introduction to Excel and its Interface",
          "Workbook, Worksheets, and Navigation",
          "Exploring Excel Ribbons and Basic Shortcuts",
          "Creating, Saving, and Opening Excel Files",
        ],
      },
      {
        title: "Data Handling in Excel",
        topics: [
          "Understanding Data Types - Text, Numbers, Dates, etc.",
          "Identifying and Formatting Data Types",
          "Data Entry and Modification in Cells",
          "Using Autofit for Column and Row Adjustments",
          "Handling Duplicates and Null Values",
          "Smart Data Entry Techniques - Predictive Entry, Auto Fill, Flash Fill",
          "Enhancing Data Visibility - Freezing Panes, Text-to-Columns",
        ],
      },
      {
        title: "Essential Excel Functions",
        topics: [
          "Understanding Formulas and Functions",
          "Arithmetic and Logical Operators",
          "Mathematical Functions - SUM, AVERAGE, MIN, MAX",
          "Statistical Functions - COUNT, COUNTA, COUNTIF, COUNTIFS",
          "Logical Functions - IF, AND, OR, NOT, Nested IF Statements",
          "Text Functions - CONCAT, TEXTJOIN, LEFT, RIGHT, MID, LEN, TRIM, SUBSTITUTE, FIND, SEARCH",
        ],
      },
      {
        title: "Data Manipulation Techniques",
        topics: [
          "Sorting and Filtering - Basic and Custom Sorting",
          "Using Filters for Data Segmentation",
          "Conditional Formatting - Highlighting Cells, Custom Rules",
          "Data Validation - Input Restrictions, Drop-down Lists",
          "Working with Dates and Times - DATE, TODAY, NOW, DAY, MONTH, YEAR, DATEDIF",
        ],
      },
      {
        title: "Data Visualization in Excel",
        topics: [
          "Creating Charts - Column, Bar, Line, Pie Charts",
          "Scatter Plots and Bubble Charts",
          "Combo Charts",
          "Customizing Charts - Data Labels, Legends, Titles",
          "Formatting Chart Elements",
          "Using Sparklines for Quick Visualization",
        ],
      },
      {
        title: "Working with PivotTables and PivotCharts",
        topics: [
          "Introduction to PivotTables - Creating and Modifying",
          "Using Rows, Columns, Filters, and Values",
          "Grouping Data in PivotTables",
          "Calculated Fields and Items",
          "Filtering and Slicers",
          "Using Timelines for Date Analysis",
          "Creating and Customizing PivotCharts",
        ],
      },
      {
        title: "Data Analysis Tools in Excel",
        topics: [
          "Descriptive Statistics - Using Data Analysis ToolPak",
          "Generating Summary Statistics - Mean, Median, Mode, Standard Deviation",
          "Linear Regression and Trendlines in Charts",
          "Creating Forecast Sheets for Predictions",
        ],
      },
      {
        title: "Advanced Formulas and Functions",
        topics: [
          "Lookup and Reference Functions - VLOOKUP, HLOOKUP, XLOOKUP",
          "INDEX and MATCH Functions",
          "Nested Functions for Advanced Calculations",
          "Error Handling - IFERROR and IFNA",
        ],
      },
      {
        title: "Advanced Data Handling using Power Query",
        topics: ["Introduction to Power Query", "Importing, Transforming, and Cleaning Data", "Power Pivot Basics"],
      },
      {
        title: "Dashboarding and Reporting",
        topics: [
          "Creating Interactive Dashboards",
          "Data Storytelling - Designing Dashboards for Effective Communication",
          "Using Data to Tell a Compelling Story and Drive Insights",
        ],
      },
      {
        title: "Real-World Applications and Projects",
        topics: [
          "End-to-End Excel Project - Data Cleaning, Transformation, Functions, Visualizations",
          "Creating Dashboards and Reports",
          "Domain-Specific Applications - Financial, Sales, Inventory, Operations",
        ],
      },
      {
        title: "Excel Tips, Tricks, and Best Practices",
        topics: [
          "Productivity Tips - Advanced Keyboard Shortcuts",
          "Customizing the Quick Access Toolbar",
          "Organizing Workbooks for Readability",
          "Avoiding Common Excel Errors",
        ],
      },
      {
        title: "Hands-On Projects",
        topics: ["Sales Performance Analysis", "Financial Data Visualization", "Customer Insights Dashboard"],
      },
    ],
    extras: [
      {
        kind: "list",
        title: "What You'll Learn",
        items: [
          "Master advanced Excel formulas and functions",
          "Create professional dashboards and reports",
          "Analyze and visualize complex datasets",
          "Work with PivotTables and PivotCharts",
          "Implement data validation and automation",
          "Apply statistical analysis techniques",
        ],
      },
      {
        kind: "list",
        title: "Course Highlights",
        items: [
          "**13 modules** covering all Excel skills",
          "**20 hours** of intensive training",
          "**Real-world projects** with domain knowledge",
          "**Expert instructors** with industry experience",
          "**Hands-on practice** with every concept",
          "**Global certification** upon completion",
        ],
      },
    ],
    ctas: [
      { label: "Download Full Syllabus", kind: "syllabus" },
      { label: "Book a Career Session", kind: "careerSession" },
    ],
  },

  tools: {
    heading: "[[Tools]] & Technologies",
    intro: "Master industry-standard tools and technologies that are in high demand across all sectors.",
    items: [
      { name: "Microsoft Excel", logo: "/techstack_logos/excel-logo.svg", description: "Advanced Excel features and functions" },
      { name: "Power Query", icon: "database", description: "Data import and transformation" },
      { name: "Power Pivot", icon: "layers", description: "Advanced data modeling" },
      { name: "Pivot Tables", icon: "table", description: "Data summarization and analysis" },
      { name: "Excel Charts", icon: "barChart", description: "Various chart types and customization" },
      { name: "Data Analysis ToolPak", icon: "trendingUp", description: "Advanced statistical analysis" },
    ],
    extras: [
      {
        kind: "cards",
        title: "Tool Categories Covered",
        items: [
          { icon: "table", title: "Core Excel", points: ["Advanced Formulas", "Functions", "Automation", "Macros"] },
          { icon: "database", title: "Data Processing", points: ["Power Query", "Data Cleaning", "Transformation", "Validation"] },
          { icon: "lineChart", title: "Analysis", points: ["PivotTables", "Statistical Analysis", "Forecasting", "Regression"] },
          { icon: "pieChart", title: "Visualization", points: ["Charts", "Dashboards", "Sparklines", "Conditional Formatting"] },
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "building",
            title: "Industry Standard",
            description: "All tools taught are widely used across Fortune 500 companies and startups worldwide.",
          },
          {
            icon: "rocket",
            title: "Future-Proof Skills",
            description: "These tools are continuously updated and remain relevant in the evolving data landscape.",
          },
          {
            icon: "star",
            title: "Competitive Advantage",
            description: "Master tools that give you an edge in the job market and career advancement.",
          },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your Learning [[Journey]]",
    intro: "Follow our proven 6-step learning path to become a market-ready Excel expert and secure your dream job.",
    steps: [
      {
        title: "You Enquired",
        description: "Start your journey with us",
        points: ["Connect with our counselors to understand your goals and course fit"],
      },
      {
        title: "You Enroll",
        description: "Get enrolled in the program",
        points: ["Complete registration and get access to learning materials"],
      },
      {
        title: "Extensive Training",
        description: "Learn Excel tools & technologies",
        points: ["Learn from experts with hands-on projects and real datasets"],
      },
      {
        title: "Projects & Assignments",
        description: "Work on real-world projects",
        points: ["Build portfolio with 3 real-world projects across domains"],
      },
      {
        title: "Job Readiness",
        description: "Interview prep and resume building",
        points: ["Interview prep, resume building, and mock interviews"],
      },
      {
        title: "Market-Ready Excel Expert",
        description: "Become a proficient data analyst",
        points: ["Get placed in top companies with competitive salaries"],
      },
    ],
    extras: [
      {
        kind: "list",
        title: "Why This Approach Works",
        items: [
          "**Structured Learning** — Follow a proven path that takes you from beginner to expert",
          "**Continuous Support** — Get guidance at every step from enrollment to placement",
          "**Practical Experience** — Work on real projects that you can showcase to employers",
          "**Career Acceleration** — Fast-track your career with industry-recognized certification",
          "**Job Assistance** — job assistance ensures you land the right opportunity",
          "**Lifetime Support** — Access to resources and alumni network even after completion",
        ],
      },
      {
        kind: "stats",
        title: "Success Metrics of Our Learning Path",
        items: [
          { value: "95%", label: "Completion Rate", note: "Students who complete all modules" },
          { value: "{rating}", label: "Student Rating", note: "Average course satisfaction score" },
          { value: "3 Months", label: "Avg Placement", note: "Time to secure first job" },
          { value: "4+ LPA", label: "Avg Salary", note: "Starting salary for freshers" },
        ],
      },
    ],
    outro: "Ready to start your transformation journey?",
    ctas: [{ label: "Begin Your Learning Path Now", kind: "enroll" }],
  },

  projects: {
    heading: "Real-World [[Projects]]",
    intro:
      "Work on industry-relevant projects that mirror real business scenarios. Build a portfolio that impresses employers.",
    items: [
      {
        icon: "trendingUp",
        title: "Sales Performance Analysis",
        meta: "Domain: Retail",
        description:
          "Analyzing sales data to evaluate the performance of a retail chain across multiple stores. Identify top-performing products, regions, and sales trends to optimize inventory and marketing strategies.",
        features: ["Data Analytics", "PivotTables", "Excel Charts", "Conditional Formatting", "Retail Domain Knowledge"],
      },
      {
        icon: "pieChart",
        title: "Budget Variance Analysis",
        meta: "Domain: Finance",
        description:
          "Comparing actual financial performance against budgeted figures for a corporate firm. Identify variances, analyze their causes, and visualize financial health to support strategic planning.",
        features: ["Data Analytics", "Excel Formulas", "PivotTables", "Data Visualization", "Finance Domain Knowledge"],
      },
      {
        icon: "users",
        title: "Customer Insights Dashboard",
        meta: "Domain: Marketing",
        description:
          "Creating comprehensive dashboards to analyze customer behavior, preferences, and engagement metrics. Drive data-informed marketing strategies and improve customer retention.",
        features: ["Dashboard Creation", "Data Analysis", "Visualization", "Marketing Analytics"],
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Our Project Methodology",
        items: [
          { title: "Problem Understanding", description: "Analyze business requirements and data structure" },
          { title: "Data Exploration", description: "Clean, validate, and prepare datasets" },
          { title: "Analysis & Visualization", description: "Create insights using Excel tools" },
          { title: "Presentation", description: "Build dashboards and present findings" },
        ],
      },
    ],
    ctas: [{ label: "Download Project Guide", kind: "syllabus" }],
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro: "Join thousands of successful students who have transformed their careers with our training.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "5,000+", label: "Students Trained", note: "Across all programs" },
          { value: "{rating}", label: "Average Rating", note: "Based on student reviews" },
          { value: "95%", label: "Placement Rate", note: "Within 3 months" },
        ],
      },
    ],
    ctas: [{ label: "Join Our Success Story", kind: "enroll" }],
  },

  career: {
    heading: "[[Career]] Opportunities",
    intro:
      "Excel expertise opens doors to multiple high-paying roles across industries. Explore the career paths available to you.",
    rolesTitle: "Job Roles",
    roles: [
      { title: "Data Analyst", description: "Analyze business data and create insights" },
      { title: "Business Intelligence Analyst", description: "Build BI solutions and dashboards" },
      { title: "Financial Analyst", description: "Analyze financial data and forecasts" },
      { title: "Marketing Analyst", description: "Analyze marketing campaigns and ROI" },
      { title: "Operations Analyst", description: "Optimize operational efficiency" },
      { title: "Sales Analyst", description: "Analyze sales performance and trends" },
      { title: "Supply Chain Analyst", description: "Optimize supply chain operations" },
      { title: "Reporting Specialist", description: "Create reports and data visualizations" },
    ],
    companiesTitle: "Top Companies Hiring Excel Experts",
    companies: [
      "Deloitte",
      "Accenture",
      "TCS",
      "Infosys",
      "Wipro",
      "Cognizant",
      "IBM",
      "Microsoft",
      "Google",
      "Amazon",
      "Goldman Sachs",
      "JP Morgan",
      "McKinsey",
      "BCG",
    ],
    extras: [
      {
        kind: "stats",
        title: "Salary Growth Potential",
        items: [
          { value: "4 LPA", label: "Fresher Level" },
          { value: "6-8 LPA", label: "1-2 Years Experience" },
          { value: "10-15 LPA", label: "3+ Years Experience" },
        ],
      },
      {
        kind: "steps",
        title: "Career Growth Paths",
        items: [
          { title: "Data Analyst", description: "Entry-level role analyzing business data" },
          { title: "Senior Analyst", description: "Lead analytics projects and mentor juniors" },
          { title: "Analytics Manager", description: "Manage analytics teams and strategy" },
        ],
      },
    ],
    ctas: [{ label: "Get Placement Assistance", kind: "careerSession" }],
  },

  audience: {
    heading: "Who Should [[Enroll]]?",
    intro:
      "This course is designed for anyone looking to master data analytics. Whether you're a beginner or professional, there's something for you.",
    items: [
      {
        icon: "users",
        title: "Beginners",
        description: "Individuals with basic Excel experience seeking to advance their data analytics skills",
      },
      {
        icon: "graduationCap",
        title: "Career Changers",
        description: "Professionals looking to transition into data analytics and business intelligence roles",
      },
      {
        icon: "briefcase",
        title: "Business Professionals",
        description: "Managers and executives who want to leverage data for better decision-making",
      },
      {
        icon: "trendingUp",
        title: "Students",
        description: "Graduates and students preparing for roles in data analysis and business intelligence",
      },
      {
        icon: "barChart",
        title: "Finance Professionals",
        description: "Those in finance, accounting, or operations seeking advanced analytical skills",
      },
      {
        icon: "target",
        title: "Marketing Professionals",
        description: "Marketing professionals who want to analyze campaigns and customer data",
      },
    ],
    extras: [
      {
        kind: "list",
        title: "Prerequisites",
        items: [
          "**Basic Excel Knowledge** — Simple formulas and basic charts (recommended but not mandatory)",
          "**Computer Access** — Windows or Mac with Microsoft Excel installed",
          "**Commitment** — 20 hours of training over the course duration",
          "**Learning Mindset** — Willingness to learn and practice hands-on",
        ],
      },
      {
        kind: "list",
        title: "What You'll Get",
        items: [
          "**Expert Training** — Learn from industry veterans with extensive experience",
          "**Real Projects** — Work on industry-relevant projects with real datasets",
          "**Global Certification** — Internationally recognized certificate with QR code validation",
          "**Placement Support** — Resume building, interview prep, and job assistance",
        ],
      },
    ],
    outro: "Ready to start your Excel mastery journey?",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
  },

  faq: {
    intro: "Find answers to common questions about our course, learning approach, and career support.",
    items: DATA_ANALYTICS_VIS_FAQS,
  },

  cta: {
    eyebrow: "Limited Time Offer - 30% Discount + Free Career Consultation",
    heading: "Ready to [[Master]] Excel?",
    intro:
      "Join thousands of successful professionals who have transformed their careers with our comprehensive Excel training program.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Brochure", kind: "syllabus" },
    ],
    highlights: [
      { icon: "users", title: "Expert instructors with extensive industry experience" },
      { icon: "briefcase", title: "job assistance and placement support" },
      { icon: "award", title: "Globally recognized certification" },
      { icon: "code", title: "Real-world projects and hands-on practice" },
      { icon: "laptop", title: "Flexible learning - Classroom + Online options" },
      { icon: "message", title: "1:1 doubt solving and personal mentoring" },
    ],
    footnotes: [
      { icon: "clock", text: "**20** Hours · Intensive training program" },
      { icon: "book", text: "**13** Modules · Comprehensive curriculum" },
      { icon: "briefcase", text: "**3** Projects · Real-world applications" },
      { icon: "handshake", text: "**100%** Support · Job assistance included" },
    ],
  },
};

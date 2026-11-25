import type { CourseContent } from "@/types/course-page";
import { POWER_BI_FAQS } from "@/data/courses/bi/faqs/power-bi-course";

// Content for /courses/bi-courses/power-bi-course, moved from the old
// src/components/power-bi-course/* sections. Kept word for word except repeated
// filler (the same "Included" tag on every card, CTA rows repeated in
// back-to-back sections). The old career section had job roles but no hiring
// companies, which the career section type requires, so its roles sit under
// the roadmap as extras.
export const powerBiCourse: CourseContent = {
  slug: "power-bi-course",
  courseName: "Data Analytics & Visualization with Power BI",
  sourceName: "Power BI Course Page",

  seo: {
    title: "Comprehensive Power BI Course in Mumbai & Thane | Master Data Analytics with Placement",
    description:
      "Power BI Course in Mumbai & Thane — master Power BI Desktop, DAX & Service in 20 hours. Job placement assistance and certification.",
    keywords: [
      "Power BI Course in Mumbai",
      "Power BI Course in Thane",
      "Power BI Developer Course",
      "Data Analytics Course",
      "Power BI Certification",
      "DAX training",
      "Power Query",
      "Business Intelligence course",
      "Data Visualization training",
      "what is power bi",
      "power bi placement mumbai",
      "how to learn power bi",
      "power bi syllabus pdf",
    ],
    image: "/og-images/power-bi-course-og.webp",
  },

  schema: {
    name: "Master Data Analytics & Visualization with Power BI",
    description:
      "Enroll in the comprehensive Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get job assistance and global certification.",
    duration: "P1M",
  },

  hero: {
    breadcrumb: "Power BI Course",
    badges: [
      { icon: "clock", text: "Duration: 20 Hours Master Program" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "trendingUp", text: "Industry-Led Training" },
    ],
    h1: "[[Power BI Course]] in Mumbai & Thane with [[Placement]]",
    subtitle:
      "Is Power BI worth learning? Yes! Master the world's most in-demand business intelligence tool. Learn **how to create dashboards in Power BI** from scratch, master DAX, and use **Power BI Service** to launch your career as a high-paid **Power BI Developer** in Mumbai.",
    description:
      "**Key Skills:** Power BI Desktop, Power BI Service, DAX Calculations, Power Query (M), Data Modeling, and Advanced Visualization, Report Publishing, and Collaboration.",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "check", title: "Real-World Projects" },
      { icon: "users", title: "Expert Instructors" },
      { icon: "award", title: "Global Certification" },
      { icon: "briefcase", title: "Dedicated Job Assistance" },
    ],
  },

  stats: {
    eyebrow: "Career Potential",
    heading: "Is Power BI in Demand? Explore the Career Growth Stats",
    intro:
      "The demand for skilled **Power BI Developers** is soaring across Mumbai's corporate landscape. Invest in comprehensive **Power BI training** that supports career growth and high returns.",
    items: [
      { value: "101,000+", label: "Job Vacancies for BI/Data Analysts in India" },
      { value: "25%", label: "Projected Market Growth (2020-2030)" },
      { value: "4 LPA", label: "Power BI Analyst Freshers’ Average Salary" },
      { value: "75%", label: "High Job Satisfaction Rate in Data Roles" },
    ],
    ctas: [{ label: "Book a Free Career Session", kind: "careerSession" }],
  },

  why: {
    eyebrow: "Program Advantages",
    heading: "Is Power BI worth learning? Discover the Top Reasons to Join!",
    intro:
      "As data-driven decision-making becomes critical, **Power BI is highly in demand** globally. Our **Power BI course** bridge the gap between academic learning and industry demands with a focus on practical, high-quality training in Mumbai & Thane.",
    cards: [
      {
        icon: "target",
        title: "80:20 Practical Approach",
        description:
          "Our curriculum is 80% practical, hands-on projects and 20% theory, ensuring you gain industry-rich, job-ready experience.",
      },
      {
        icon: "userCheck",
        title: "1:1 Doubt Solving Sessions",
        description:
          "Personalized, one-on-one doubt resolution ensures every concept is clear, no matter how complex or simple.",
      },
      {
        icon: "globe",
        title: "Globally Recognized Certification",
        description:
          "Receive an internationally recognized certificate from our training partner, validated with a unique QR code.",
      },
      {
        icon: "briefcase",
        title: "100% Dedicated Job Assistance",
        description:
          "Comprehensive career support including resume building, profile optimization (LinkedIn, Naukri), and tailored interview preparation.",
      },
      {
        icon: "clock",
        title: "Industry-Led Training",
        description: "Learn from seasoned data analysts and industry veterans with deep real-world experience.",
      },
      {
        icon: "zap",
        title: "Hybrid Learning Model",
        description:
          "Benefit from a flexible CLASSROOM + ONLINE model with live-streamed sessions and access to all recorded lectures.",
      },
    ],
    ctas: [{ label: "Start Your Journey Today", kind: "enroll" }],
  },

  curriculum: {
    eyebrow: "Comprehensive Learning Path",
    heading: "Latest Power BI Course Syllabus 2026-27: From Zero to Expert",
    intro:
      "Our meticulously designed **Power BI syllabus** covers everything from **Power BI Desktop** setup to **Power BI Service** publishing. Master **Power BI visualizations** and DAX with industry-led modules.",
    modules: [
      {
        title: "Introduction to BI Concepts and Power BI",
        topics: [
          "Understanding Business Intelligence (BI) and its Lifecycle",
          "Overview of BI Tools and Concepts in Decision Making",
          "What is Power BI? Benefits and Applications",
          "Power BI Desktop vs. Service vs. Mobile",
        ],
      },
      {
        title: "Setting Up Power BI & Data Connection",
        topics: [
          "Installation and System Requirements for Power BI Desktop",
          "Power BI Interface Overview and Workbook Management",
          "Connecting to diverse data sources (CSV, Excel, Folder, XML, Database)",
          "Difference between Loading Data and Transforming Data",
        ],
      },
      {
        title: "Data Transformation using Power Query Editor",
        topics: [
          "Introduction to Power Query Editor and Ribbon Exploration",
          "Cleaning and Shaping Data: Handling Missing and Duplicate Data",
          "Split, Merge, Extract, and Replace Values Tools",
          "Pivoting and Unpivoting Data in Power Query",
          "Merging and Appending Queries",
          "Text, Number, Date, and Time Transformation tools, Conditional Columns",
        ],
      },
      {
        title: "Data Modeling in Power BI",
        topics: [
          "Building Data Models: Understanding Tables and Relationships",
          "Facts and Dimension Tables",
          "Star Schema Vs. Snowflake Schema",
          "Cardinality and Cross-Filter Directions",
        ],
      },
      {
        title: "Data Visualization Basics",
        topics: [
          "Creating Basic Visualizations: Bar, Line, Pie Charts",
          "Tables, Matrix, and Cards",
          "Slicers and Filters for Interactivity",
          "Map Visualizations (Basic and Filled Maps)",
          "Customization: Formatting Visuals and Conditional Formatting",
          "Sorting and Filtering Data in Visuals",
        ],
      },
      {
        title: "DAX (Data Analysis Expressions)",
        topics: [
          "Introduction to DAX and Syntax",
          "Types of Operators and Functions",
          "Creating New Columns and New Measures",
          "Using Explicit Measures to Create New Measures",
        ],
      },
      {
        title: "Advanced Visualization Techniques",
        topics: [
          "Advanced Visuals: Tree Maps, Waterfall, Funnel Charts",
          "Gauge Charts and KPI Indicators",
          "Ribbon Charts and Scatter Plots",
          "Forecasting and Advanced Analytics Features",
          "Advanced Interactivity: Drill-Down and Drill-Through Features",
          "Using Tooltips for Additional Insights, Filters, and Slicers",
        ],
      },
      {
        title: "Dashboards and Reports",
        topics: [
          "Designing Interactive Dashboards: Best Practices for Layout and Design",
          "Using Visual Interactivity to Enhance Storytelling",
          "Adding Page Navigator and Bookmarks",
          "Publishing Reports to Power BI Service",
          "Sharing Dashboards with Teams and Organizations",
        ],
      },
      {
        title: "Case Studies and Real-World Applications",
        topics: [
          "End-to-End Project: Data Extraction, Transformation, and Modeling",
          "Visualization and Dashboard Creation",
          "Publishing and Sharing Insights",
        ],
      },
      {
        title: "Hands-On Projects",
        topics: [
          "Project 1: Sales Performance Analysis Dashboard",
          "Project 2: Financial Data Visualization Report",
          "Project 3: Customer Insights Dashboard",
        ],
      },
    ],
    ctas: [{ label: "Download Full Syllabus", kind: "syllabus" }],
  },

  tools: {
    eyebrow: "Tools & Technologies",
    heading: "What is Power BI? Master the Complete Tool Ecosystem",
    intro:
      "Our **Power BI course** provides hands-on mastery of the entire **Power BI tool** suite. Learn **why Power BI is used** globally for **data visualization** and business intelligence.",
    items: [
      {
        name: "Power BI Desktop",
        logo: "/techstack_logos/power-bi-logo.svg",
        description:
          "Master the primary development tool for connecting, transforming, and modeling data on your local machine.",
      },
      {
        name: "Power BI Service",
        logo: "/techstack_logos/power-bi-logo.svg",
        description:
          "Learn to publish, share, and collaborate on reports and dashboards in the cloud-based Power BI environment.",
      },
      {
        name: "DAX (Data Analysis Expressions)",
        icon: "calculator",
        description:
          "Deep dive into the formula language used to create custom calculations, measures, and columns for advanced analysis.",
      },
      {
        name: "Power Query (M Language)",
        icon: "wrench",
        description:
          "Expertly use the data connection and transformation engine to clean, shape, and prepare data from various sources.",
      },
      {
        name: "Data Modeling",
        icon: "puzzle",
        description:
          "Understand Star/Snowflake schemas, relationships, and cardinality to build robust and efficient data models.",
      },
      {
        name: "Advanced Visuals",
        icon: "trendingUp",
        description:
          "Utilize custom visuals, KPI indicators, and advanced interactivity features like Drill-Through and Tooltips.",
      },
    ],
  },

  roadmap: {
    eyebrow: "Your Success Path",
    heading: "The 6-Step Career Roadmap to Power BI Mastery",
    intro:
      "Follow our proven learning path designed to take you from beginner to a market-ready professional in just 20 hours.",
    steps: [
      {
        title: "You Enquire",
        icon: "userCheck",
        description:
          "Start your journey by requesting the syllabus and a free consultation to understand the program details.",
      },
      {
        title: "You Enroll",
        icon: "book",
        description:
          "Secure your spot in the next batch and gain immediate access to pre-course materials and the learning platform.",
      },
      {
        title: "Extensive Training",
        icon: "code",
        description:
          "Complete the 10 modules, mastering Power BI Desktop, DAX, Power Query, and advanced visualization techniques.",
      },
      {
        title: "Projects & Assignments",
        icon: "check",
        description:
          "Apply your knowledge through real-time projects and assignments, building a robust, industry-ready portfolio.",
      },
      {
        title: "Job Readiness & Placement",
        icon: "briefcase",
        description:
          "Benefit from resume optimization, interview prep, and job assistance to connect with top hiring companies.",
      },
      {
        title: "Become a Power BI Analyst",
        icon: "trendingUp",
        description: "Successfully transition into a high-paying, in-demand role as a certified Power BI expert.",
      },
    ],
    ctas: [{ label: "Start Your Roadmap", kind: "enroll" }],
  },

  // The old career section listed roles only (no companies), so it uses the
  // roles card at full width.
  career: {
    heading: "Lucrative [[Power BI Developer]] Jobs in Mumbai & Thane",
    intro:
      "Become a market-ready **Power BI Developer** qualified for high-demand **data analyst** roles across Mumbai's top IT and finance sectors.",
    rolesTitle: "Job Roles",
    roles: [
      "Power BI Analyst",
      "Business Intelligence Analyst",
      "Data Analyst",
      "Financial Analyst",
      "Operations Analyst",
      "Supply Chain Analyst",
      "Sales Analyst",
      "Marketing Analyst",
    ],
  },

  projects: {
    eyebrow: "Hands-On Experience",
    heading: "Real-World Power BI Report Examples & Capstone Projects",
    intro:
      "Learn **how to create dashboards in Power BI** by working on industry-specific datasets. Build a portfolio of **Power BI report examples** that prove your expertise to top recruiters in Mumbai.",
    items: [
      {
        icon: "heart",
        meta: "Healthcare Domain",
        title: "Patient Care Analytics for a Hospital Network",
        description:
          "Analyze patient data (admission rates, treatment outcomes, wait times) to improve operational efficiency. Create dashboards to highlight care bottlenecks and guide resource allocation.",
        tags: ["Data Analytics", "Power BI", "DAX", "Data Visualization", "Healthcare Domain"],
      },
      {
        icon: "shoppingCart",
        meta: "E-Commerce Domain",
        title: "Customer Purchase Behavior Analysis",
        description:
          "Analyze customer purchase data to understand buying patterns, product preferences, and seasonal trends for an online store. Create interactive reports for marketing and inventory decisions.",
        tags: ["Data Analytics", "Power BI", "Power Query", "Data Visualization", "E-Commerce Domain"],
      },
      {
        icon: "lineChart",
        meta: "Finance Domain",
        title: "Financial Data Visualization Report",
        description:
          "Develop a comprehensive financial dashboard to track key performance indicators (KPIs) like revenue, profit margins, and budget variance. Essential for strategic financial planning.",
        tags: ["Financial Analysis", "Power BI", "DAX Measures", "Time Intelligence", "Finance Domain"],
      },
    ],
    ctas: [{ label: "Download Project Syllabus", kind: "syllabus" }],
  },

  testimonials: {
    eyebrow: "Student Success Stories",
    heading: "What Our Graduates Say About the Program",
    intro:
      "Join a community of successful data professionals who have transformed their careers with our expert training.",
  },

  audience: {
    eyebrow: "Target Audience",
    heading: "Who Should Enroll in Our Power BI Training in Mumbai?",
    intro:
      "**Does Power BI require coding?** Not at all! This course is designed for both technical and non-technical learners across Mumbai & Thane who want to master **business intelligence**.",
    items: [
      {
        icon: "rocket",
        title: "Beginners & Career Changers",
        description:
          "Individuals with no prior programming or BI experience, looking to start a lucrative career in data analytics.",
      },
      {
        icon: "briefcase",
        title: "Business & Financial Analysts",
        description:
          "Professionals who need to move beyond Excel to create dynamic, interactive reports and dashboards for strategic decision-making.",
      },
      {
        icon: "megaphone",
        title: "Marketing & Sales Professionals",
        description:
          "Those who want to analyze campaign performance, customer behavior, and sales trends to drive revenue growth.",
      },
      {
        icon: "building",
        title: "HR & Operations Managers",
        description:
          "Managers in HR, Healthcare, or Manufacturing who rely on data-driven decisions for resource allocation and process optimization.",
      },
    ],
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    heading: "Power BI Course Mumbai & Thane: Frequently Asked Questions",
    // Plain QA objects: the FAQ list is a client component, and the source
    // items also carry icon components that can't cross that boundary.
    items: POWER_BI_FAQS.map(({ question, answer, category }) => ({ question, answer, category })),
  },

  cta: {
    heading: "Ready to Become a Certified Power BI Expert?",
    intro:
      "Don't miss out on the booming demand for data visualization professionals. Enroll today and secure your future in data analytics.",
    actions: [
      { label: "Enroll Now & Start Learning", kind: "enroll" },
      { label: "Request a Free Demo", kind: "careerSession" },
    ],
  },
};

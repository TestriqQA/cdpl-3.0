// Shared content for every "Business Intelligence Course in <city>" page.
// Edit here to change all of them at once. Placeholders are filled per city:
// {{city}} location name, {{cityLower}} lower-case name, {{citySlug}} URL form,
// {{state}} state, {{slug}} this page's URL slug.
// A city that needs something different gets it in ../overrides/business-intelligence.ts.

import type { CityCourseTemplate } from "../types";

export const businessIntelligenceTemplate: CityCourseTemplate = {
  courseName: "Business Intelligence",
  specializations: ["Power BI", "Tableau", "Data Warehousing", "BI Consulting"],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Business Intelligence", href: "/business-intelligence-courses" },
    { label: "{{city}}", href: "/{{slug}}" },
  ],
  metadata: {
    title: "BI Course in {{city}} | CDPL",
    description: "Master Business Intelligence in {{city}}. Get certified in Power BI & Tableau with job assistance. Enroll for the professional Business Intelligence course near {{city}}.",
    keywords: "Business Intelligence Course, BI Training, Power BI Certification, Tableau Training, Data Analysis Course, BI Analyst Salary, Best BI Tools, Data Visualization, SQL for BI, BI Developer Jobs, Business Intelligence {{city}}, Power BI course {{city}}, Tableau training {{city}}, BI jobs {{city}}",
  },
  courseDetails: {
    duration: "6 Months",
    level: "Beginner to Advanced",
    language: "English & Hindi",
    price: "₹59,999",
    discountedPrice: "₹39,999",
  },
  heroContent: {
    title: "Master Business Intelligence in {{city}}",
    subtitle: "Industry-Recognized Business Intelligence Course",
    description: "Our comprehensive Business Intelligence program in {{city}} is designed to transform you into a job-ready BI professional. Master Power BI, Tableau, and advanced SQL from industry experts and secure your dream job with our dedicated placement support.",
    certifications: [
      "Microsoft Power BI Certified",
      "Tableau Desktop Specialist",
      "Google Data Analytics Professional Certificate",
    ],
    stats: [
      {
        number: "150+",
        label: "Hours of Training",
        description: "Comprehensive curriculum covering all BI essentials.",
      },
      {
        number: "10+",
        label: "Real-World Projects",
        description: "Hands-on experience with industry-relevant datasets.",
      },
      {
        number: "₹8.5 LPA",
        label: "Avg. Salary",
        description: "Reported average salary for BI Analysts in India.",
      },
      { number: "92%", label: "Job Placement", description: "Within 3 months of completion" },
    ],
    landmarks: [],
  },
  courseOverviewContent: {
    title: "Course Modules",
    description: "Comprehensive modules covering all aspects of Business Intelligence",
    subtitle: "Learn industry-relevant skills with hands-on projects and real-world scenarios.",
    modules: [
      {
        icon: "Database",
        trending: true,
        name: "Advanced Data Analytics - Hero Program",
        description: "Elevate to pro with Advanced Data Analytics Hero Program! Master SQL, Python, Tableau, predictive modeling & big data. Hands-on, job-focused. Enroll now & lead analytics!",
        topics: ["Advanced Analytics Hero", "Data Analytics Mastery", "Predictive Analytics Pro"],
        link: "data-analytics",
      },
      {
        icon: "ChartBar",
        trending: true,
        name: "Advanced Data Analytics with Python Libraries",
        description: "Master Advanced Data Analytics with Python Libraries! Harness Pandas, NumPy, Matplotlib, Seaborn & Scikit-learn for insights & predictions. Hands-on projects. Enroll now!",
        topics: ["Python Data Analytics", "Advanced Analytics Libraries", "Pandas NumPy Mastery"],
        link: "data-analytics-python",
      },
      {
        icon: "Brain",
        trending: false,
        name: "Excel for Data Analytics & Visualization",
        description: "Master Excel for Data Analytics & Visualization! Unlock PivotTables, Power Query, charts, dashboards & advanced formulas. Hands-on, real-world projects. Enroll now & excel in data!",
        topics: ["Excel Data Analytics", "Data Visualization Excel", "Excel Analytics Mastery"],
        link: "data-analytics-and-visualization",
      },
      {
        icon: "Briefcase",
        trending: false,
        name: "Data Analytics & Visualization with Tableau",
        description: "Master Data Analytics & Visualization with Tableau! Build interactive dashboards, explore data with drag-and-drop, uncover insights & tell stories. Hands-on projects. Enroll now!",
        topics: ["Tableau Data Analytics", "Visualization Mastery Tableau", "Interactive Dashboards Tableau"],
        link: "data-analytics-with-tableau",
      },
      {
        icon: "Briefcase",
        trending: false,
        name: "Data Analytics & Visualization with Power BI",
        description: "Master Data Analytics & Visualization with Power BI! Create stunning dashboards, DAX formulas, data modeling & insights. Hands-on projects for business intelligence. Enroll now!",
        topics: ["Power BI Analytics", "Data Visualization Power BI", "Power BI Mastery"],
        link: "power-bi-course",
      },
      {
        icon: "Briefcase",
        trending: false,
        name: "Data Analytics With BI And Big Data Engineering Master Program",
        description: "Master Data Analytics with BI & Big Data Engineering Master Program! Harness Power BI, Tableau, Spark, Hadoop & ETL pipelines for scalable insights. Hands-on, industry-ready. Enroll now!",
        topics: ["BI Big Data Analytics", "Data Engineering Master", "Analytics BI Program"],
        link: "masters-in-data-engineering",
      },
    ],
  },
  curriculumContent: {
    title: "Detailed Curriculum",
    subtitle: "Choose a program track to see its modules.",
    tracks: [
      {
        id: "advanced-data-analytics-hero",
        title: "Advanced Data Analytics - Hero Program",
        weeks: [
          {
            number: "01-03",
            title: "Database Management with MySQL",
            description: "DBMS fundamentals, MySQL setup, database design & normalization, SQL basics (SELECT, clauses, operators), data manipulation (INSERT/UPDATE/DELETE), joins & subqueries, aggregations & window functions, database administration, views, stored procedures, triggers & real-world case studies.",
            deliverables: [
              "Complete MySQL Database Design Project",
              "Advanced SQL Query Portfolio",
              "Optimized Database with Indexes & Views",
            ],
          },
          {
            number: "04-06",
            title: "Advanced Excel for Data Analytics & Visualization",
            description: "Excel interface & data handling, essential functions (text, date, logical, lookup), Power Query for ETL, PivotTables/Charts, advanced formulas (XLOOKUP, INDEX/MATCH, array formulas), dashboarding, forecasting & data storytelling.",
            deliverables: [
              "Automated Data Pipeline with Power Query",
              "Interactive Sales/Financial Dashboard",
              "End-to-End Excel Capstone Project",
            ],
          },
          {
            number: "07-09",
            title: "Power BI & Tableau Mastery",
            description: "Power BI: Data modeling, Power Query transformations, DAX deep dive, advanced visualizations, dashboards & publishing. Tableau: Data connections, calculated fields, LOD expressions, advanced charts (treemaps, bullet, geospatial), table calculations, parameters, sets & interactive dashboards.",
            deliverables: [
              "Star Schema Model + DAX Measures",
              "Published Power BI Enterprise Dashboard",
              "Tableau Story with Advanced Analytics",
            ],
          },
          {
            number: "10-12",
            title: "Python for Data Visualization & Analytics",
            description: "Pandas deep dive (cleaning, manipulation, merging, grouping), Matplotlib/Seaborn customization, NumPy scientific computing, advanced plotting (animations, interactivity), real-world dataset analysis & professional visualization projects.",
            deliverables: [
              "Cancer Dataset EDA + Dashboard",
              "Animated & Interactive Visualization Project",
              "Domain-Specific Visualization Portfolio",
            ],
          },
          {
            number: "13-15",
            title: "Capstone Projects & Industry Preparation",
            description: "5+ real-world projects across domains (BFSI, Healthcare, Retail, Marketing, HR, Transportation, Media), interview preparation from day 1, resume building, portfolio creation & placement support.",
            deliverables: [
              "Minimum 5 Complete Industry Projects",
              "Professional Portfolio & GitHub Repo",
              "Mock Interviews + Placement Readiness",
            ],
          },
        ],
      },
      {
        id: "advanced-python-libraries",
        title: "Advanced Data Analytics with Python Libraries",
        weeks: [
          {
            number: "01-02",
            title: "Python Fundamentals & Pandas Mastery",
            description: "Python basics recap, Jupyter setup, Pandas (Series/DataFrames, data import/export, cleaning, filtering, grouping, merging, pivot tables, time-series), exploratory data analysis techniques.",
            deliverables: ["Cleaned Real-World Dataset (CSV/Excel/JSON)", "Comprehensive Pandas EDA Report"],
          },
          {
            number: "03-05",
            title: "Visualization with Matplotlib & Seaborn",
            description: "Matplotlib deep customization (subplots, annotations, animations), Seaborn statistical plots (pair plots, heatmaps, cluster maps, categorical), themes & aesthetics, integration with Pandas.",
            deliverables: ["Custom Matplotlib Animated Visualization", "Seaborn Statistical Dashboard"],
          },
          {
            number: "06-08",
            title: "NumPy Scientific Computing & Projects",
            description: "NumPy arrays, broadcasting, mathematical operations, advanced indexing, linear algebra, real-world case studies (cancer dataset, HR analytics, financial plots).",
            deliverables: [
              "NumPy + Pandas End-to-End Project",
              "Professional Visualization Portfolio (Titanic/HR/Cancer Dataset)",
            ],
          },
        ],
      },
      {
        id: "excel-analytics",
        title: "Advanced Excel for Data Analytics & Visualization",
        weeks: [
          {
            number: "01-02",
            title: "Data Handling & Essential Functions",
            description: "Excel interface, data types, cleaning (duplicates, text-to-columns, flash fill), functions (text, date, logical, lookup - VLOOKUP/XLOOKUP/INDEX-MATCH), conditional formatting, data validation.",
            deliverables: ["Automated Data Cleaning Workbook", "Advanced Formula Library with Nested Functions"],
          },
          {
            number: "03-04",
            title: "PivotTables, Power Query & Visualization",
            description: "PivotTables/Charts deep dive, slicers/timelines, Power Query (ETL, transformations, merging), chart customization, sparklines, combo charts.",
            deliverables: ["Dynamic Pivot Dashboard", "Power Query Transformation Pipeline"],
          },
          {
            number: "05-06",
            title: "Advanced Analysis & Dashboard Projects",
            description: "Array formulas, forecasting, data analysis ToolPak, dashboard design principles, data storytelling, real-world projects (sales/finance/operations).",
            deliverables: ["Interactive Executive Dashboard", "Full End-to-End Domain Project"],
          },
        ],
      },
      {
        id: "tableau-analytics",
        title: "Data Analytics & Visualization with Tableau",
        weeks: [
          {
            number: "01-02",
            title: "Tableau Fundamentals & Data Integration",
            description: "BI concepts, Tableau interface, data connections, joins/relationships/unions, data types, calculated fields, parameters, logical/physical layers.",
            deliverables: ["Multi-Source Data Blend Workbook", "Dynamic Parameter Dashboard"],
          },
          {
            number: "03-04",
            title: "Core & Advanced Visualizations",
            description: "Basic to advanced charts (bar/line/scatter/treemap/bullet/heatmaps), marks card customization, dual-axis, geospatial mapping, table calculations, sets & grouping.",
            deliverables: ["Advanced Chart Portfolio", "Geospatial + Multi-Axis Dashboard"],
          },
          {
            number: "05-06",
            title: "Analytics, Dashboards & Projects",
            description: "LOD expressions, forecasting, clustering, reference lines, dynamic analysis with sets/parameters, dashboard best practices, stories & interactivity, real-world projects.",
            deliverables: ["Interactive Enterprise Dashboard", "Tableau Story + Capstone Project"],
          },
        ],
      },
      {
        id: "powerbi-analytics",
        title: "Data Analytics & Visualization with Power BI",
        weeks: [
          {
            number: "01-02",
            title: "Power BI Desktop & Data Modeling",
            description: "Power BI setup, data import, Power Query transformations (merge/append/conditional columns), star schema modeling, relationships & cardinality.",
            deliverables: ["Transformed Dataset with Power Query", "Star Schema Data Model"],
          },
          {
            number: "03-04",
            title: "DAX & Advanced Visualization",
            description: "DAX basics to advanced (measures, calculated columns, time intelligence), advanced visuals (tree maps, gauge, ribbon, forecasting), conditional formatting, interactivity.",
            deliverables: ["Complex DAX Measures Library", "Advanced Analytics Dashboard"],
          },
          {
            number: "05-06",
            title: "Dashboards, Publishing & Projects",
            description: "Interactive dashboard design, bookmarks, drill-through, Power BI Service publishing, sharing & security, real-world end-to-end projects.",
            deliverables: ["Published Interactive Dashboard", "Full Sales/Finance Capstone Project"],
          },
        ],
      },
      {
        id: "bi-bigdata-master",
        title: "Data Analytics With BI And Big Data Engineering Master Program",
        weeks: [
          {
            number: "01-06",
            title: "Complete Visualization Mastery",
            description: "Full modules from Advanced Excel + Python Visualization (Pandas/Matplotlib/Seaborn/NumPy) + Tableau + Power BI (all detailed modules above combined).",
            deliverables: ["Cross-Tool Visualization Comparison Project", "Professional Multi-Tool Dashboard Portfolio"],
          },
          {
            number: "07-09",
            title: "Database & Big Data Foundations",
            description: "MySQL complete (design, advanced SQL, administration) + Big Data with Hadoop (HDFS, Hive, Pig if covered) + Apache Spark & Databricks fundamentals.",
            deliverables: ["MySQL Optimized Database Project", "Spark ETL Pipeline on Databricks"],
          },
          {
            number: "10-14",
            title: "Advanced Big Data Engineering & Capstone",
            description: "Spark/Databricks deep dive (PySpark, Spark SQL, streaming if included), modern data architectures, integration with BI tools, full-stack industry capstone combining BI + Big Data.",
            deliverables: ["End-to-End Big Data Pipeline", "Complete BI + Big Data Capstone + Presentation"],
          },
        ],
      },
    ],
  },
  toolsFrameworkContent: {
    title: "Tools and Frameworks Covered",
    description: "Gain expertise in the entire BI ecosystem, from data extraction to advanced visualization.",
    stats: { totalHours: "200+", projects: "15+", mentorSupport: "Dedicated 1:1", jobPlacement: "100% Assistance" },
  },
  whyChooseContent: {
    title: "The {{city}} Advantage: Launch Your BI Career",
    subtitle: "Unmatched Support and Industry Focus",
    reasons: [
      {
        icon: "Rocket",
        title: "Accelerated Career Growth",
        stats: "40% Hike",
        description: "Our graduates report an average salary increase of 40% within the first year.",
      },
      {
        icon: "Medal",
        title: "Industry-Recognized Certification",
        stats: "Global Credibility",
        description: "Earn certifications from Microsoft and Tableau, highly valued by top employers.",
      },
      {
        icon: "Network",
        title: "Dedicated Placement Cell",
        stats: "Hiring Partner Network",
        description: "Access to our network of hiring partners across India.",
      },
    ],
    testimonial: {
      text: "The BI course transformed my career. The Power BI and Tableau modules were incredibly practical, and the placement support was excellent. Highly recommend for anyone serious about data.",
      author: "Priya Sharma",
      role: "BI Analyst, Tech Mahindra",
      rating: 5,
    },
  },
  projectsContent: {
    title: "Hands-on BI Projects",
    description: "Build a professional portfolio with real-world case studies.",
    subtitle: "Featured Projects",
    projects: [
      {
        name: "Sales Performance Dashboard",
        description: "Develop a comprehensive sales dashboard using Power BI to track KPIs, identify trends, and forecast future performance.",
        skills: ["Power BI", "DAX", "Data Modeling", "KPI Tracking"],
        difficulty: "Advanced",
      },
      {
        name: "Customer Churn Analysis",
        description: "Use Tableau to visualize customer data and identify key factors contributing to churn, providing actionable insights for retention strategies.",
        skills: ["Tableau", "Data Cleaning", "Statistical Analysis", "Data Storytelling"],
        difficulty: "Intermediate",
      },
    ],
  },
  careerPathContent: {
    title: "BI Career Outlook in {{city}}",
    description: "Explore high-growth career paths and salary expectations for BI professionals.",
    subtitle: "Top Roles",
    paths: [
      {
        role: "BI Analyst",
        trending: true,
        description: "The entry-point role focused on reporting, dashboard creation, and data interpretation.",
        salaryRange: "₹6 LPA - ₹12 LPA",
        skills: ["SQL", "Power BI", "Tableau", "Excel"],
        opportunities: ["IT Services", "Finance", "E-commerce"],
      },
      {
        role: "BI Developer",
        trending: true,
        description: "Focuses on designing and implementing data warehouses and ETL processes.",
        salaryRange: "₹8 LPA - ₹18 LPA",
        skills: ["Advanced SQL", "ETL Tools", "Cloud Platforms (Azure/AWS)", "Python"],
        opportunities: ["Product Companies", "Consulting Firms"],
      },
      {
        role: "Data Scientist (BI Focus)",
        trending: false,
        description: "Leverages BI data for predictive modeling and advanced statistical analysis.",
        salaryRange: "₹12 LPA - ₹30 LPA",
        skills: ["Python", "R", "Machine Learning", "Statistical Modeling"],
        opportunities: ["R&D", "FinTech", "Healthcare"],
      },
    ],
  },
  faqsContent: {
    title: "Frequently Asked Questions",
    subtitle: "About BI Training in {{city}}",
    faqs: [
      {
        question: "What is the duration of the Business Intelligence course?",
        answer: "The comprehensive BI program is designed to be completed in 6 months, with flexible scheduling options.",
      },
      {
        question: "Is prior coding knowledge required for the BI course?",
        answer: "No, the course starts with the fundamentals of SQL and data concepts, making it accessible for beginners.",
      },
      {
        question: "Which BI tools are covered in the training?",
        answer: "We provide in-depth training on industry-leading tools including Microsoft Power BI and Tableau.",
      },
    ],
  },
  ctaContent: {
    title: "Ready to Become a Certified BI Professional?",
    description: "Unlock your potential in the world of data. Enroll now to get a free demo class and a personalized career consultation.",
    subtitle: "Limited Seats Available for the Next Batch!",
    benefits: ["Expert-Led Live Classes", "1:1 Mentorship", "Job Placement Assistance"],
    contactInfo: { phone: "+91 84-889-889-84", email: "contact@cinutedigital.com", address: "India" },
  },
};

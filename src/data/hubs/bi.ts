import type { CategoryHubContent } from "@/types/categoryHub";

// Content for /courses/bi-courses, moved from the old src/components/BI-Courses/*
// sections and their data.ts / faqData.ts. Copy is kept word for word except
// repeated filler (duplicate stat strips, per-card buttons that only opened the
// enrol modal, a stale "20% discount" promo); the closing line said "QA careers"
// (copied from the testing hub) and now says "BI careers".

const RAW_COURSES = [
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
        titleAttribute: 'Advanced Data Analytics - Hero Program Overview',
        icon: 'BarChart3',
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
        popular: true,
        link: '/courses/bi-courses/data-analytics-python',
        titleAttribute: 'Advanced Data Analytics with Python Libraries Overview',
        icon: 'BarChart3',
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
        popular: true,
        link: '/courses/bi-courses/data-analytics-and-visualization',
        titleAttribute: 'Advanced Excel for Data Analytics & Visualization Overview',
        icon: 'BarChart3',
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
        popular: true,
        link: '/courses/bi-courses/data-analytics-with-tableau',
        titleAttribute: 'Data Analytics & Visualization with Tableau Overview',
        icon: 'BarChart3',
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
        titleAttribute: 'Data Analytics & Visualization with Power BI Overview',
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
        popular: true,
        link: '/courses/bi-courses/masters-in-data-engineering',
        titleAttribute: 'Data Analytics With BI And Big Data Engineering Master Program Overview',
        icon: 'BarChart3',
        features: ['Power BI/Tableau', 'Big Data Concepts', 'Data Warehousing'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/data-analytics-with-bi-and-big-data-engineering-master-program.pdf',
    },
];

const RAW_CURRICULUM = {
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
                    deliverables: ["Complete MySQL Database Design Project", "Advanced SQL Query Portfolio", "Optimized Database with Indexes & Views"]
                },
                {
                    number: "04-06",
                    title: "Advanced Excel for Data Analytics & Visualization",
                    description: "Excel interface & data handling, essential functions (text, date, logical, lookup), Power Query for ETL, PivotTables/Charts, advanced formulas (XLOOKUP, INDEX/MATCH, array formulas), dashboarding, forecasting & data storytelling.",
                    deliverables: ["Automated Data Pipeline with Power Query", "Interactive Sales/Financial Dashboard", "End-to-End Excel Capstone Project"]
                },
                {
                    number: "07-09",
                    title: "Power BI & Tableau Mastery",
                    description: "Power BI: Data modeling, Power Query transformations, DAX deep dive, advanced visualizations, dashboards & publishing. Tableau: Data connections, calculated fields, LOD expressions, advanced charts (treemaps, bullet, geospatial), table calculations, parameters, sets & interactive dashboards.",
                    deliverables: ["Star Schema Model + DAX Measures", "Published Power BI Enterprise Dashboard", "Tableau Story with Advanced Analytics"]
                },
                {
                    number: "10-12",
                    title: "Python for Data Visualization & Analytics",
                    description: "Pandas deep dive (cleaning, manipulation, merging, grouping), Matplotlib/Seaborn customization, NumPy scientific computing, advanced plotting (animations, interactivity), real-world dataset analysis & professional visualization projects.",
                    deliverables: ["Cancer Dataset EDA + Dashboard", "Animated & Interactive Visualization Project", "Domain-Specific Visualization Portfolio"]
                },
                {
                    number: "13-15",
                    title: "Capstone Projects & Industry Preparation",
                    description: "5+ real-world projects across domains (BFSI, Healthcare, Retail, Marketing, HR, Transportation, Media), interview preparation from day 1, resume building, portfolio creation & placement support.",
                    deliverables: ["Minimum 5 Complete Industry Projects", "Professional Portfolio & GitHub Repo", "Mock Interviews + Placement Readiness"]
                }
            ]
        },
        {
            id: "advanced-python-libraries",
            title: "Advanced Data Analytics with Python Libraries",
            weeks: [
                {
                    number: "01-02",
                    title: "Python Fundamentals & Pandas Mastery",
                    description: "Python basics recap, Jupyter setup, Pandas (Series/DataFrames, data import/export, cleaning, filtering, grouping, merging, pivot tables, time-series), exploratory data analysis techniques.",
                    deliverables: ["Cleaned Real-World Dataset (CSV/Excel/JSON)", "Comprehensive Pandas EDA Report"]
                },
                {
                    number: "03-05",
                    title: "Visualization with Matplotlib & Seaborn",
                    description: "Matplotlib deep customization (subplots, annotations, animations), Seaborn statistical plots (pair plots, heatmaps, cluster maps, categorical), themes & aesthetics, integration with Pandas.",
                    deliverables: ["Custom Matplotlib Animated Visualization", "Seaborn Statistical Dashboard"]
                },
                {
                    number: "06-08",
                    title: "NumPy Scientific Computing & Projects",
                    description: "NumPy arrays, broadcasting, mathematical operations, advanced indexing, linear algebra, real-world case studies (cancer dataset, HR analytics, financial plots).",
                    deliverables: ["NumPy + Pandas End-to-End Project", "Professional Visualization Portfolio (Titanic/HR/Cancer Dataset)"]
                }
            ]
        },
        {
            id: "excel-analytics",
            title: "Advanced Excel for Data Analytics & Visualization",
            weeks: [
                {
                    number: "01-02",
                    title: "Data Handling & Essential Functions",
                    description: "Excel interface, data types, cleaning (duplicates, text-to-columns, flash fill), functions (text, date, logical, lookup - VLOOKUP/XLOOKUP/INDEX-MATCH), conditional formatting, data validation.",
                    deliverables: ["Automated Data Cleaning Workbook", "Advanced Formula Library with Nested Functions"]
                },
                {
                    number: "03-04",
                    title: "PivotTables, Power Query & Visualization",
                    description: "PivotTables/Charts deep dive, slicers/timelines, Power Query (ETL, transformations, merging), chart customization, sparklines, combo charts.",
                    deliverables: ["Dynamic Pivot Dashboard", "Power Query Transformation Pipeline"]
                },
                {
                    number: "05-06",
                    title: "Advanced Analysis & Dashboard Projects",
                    description: "Array formulas, forecasting, data analysis ToolPak, dashboard design principles, data storytelling, real-world projects (sales/finance/operations).",
                    deliverables: ["Interactive Executive Dashboard", "Full End-to-End Domain Project"]
                }
            ]
        },
        {
            id: "tableau-analytics",
            title: "Data Analytics & Visualization with Tableau",
            weeks: [
                {
                    number: "01-02",
                    title: "Tableau Fundamentals & Data Integration",
                    description: "BI concepts, Tableau interface, data connections, joins/relationships/unions, data types, calculated fields, parameters, logical/physical layers.",
                    deliverables: ["Multi-Source Data Blend Workbook", "Dynamic Parameter Dashboard"]
                },
                {
                    number: "03-04",
                    title: "Core & Advanced Visualizations",
                    description: "Basic to advanced charts (bar/line/scatter/treemap/bullet/heatmaps), marks card customization, dual-axis, geospatial mapping, table calculations, sets & grouping.",
                    deliverables: ["Advanced Chart Portfolio", "Geospatial + Multi-Axis Dashboard"]
                },
                {
                    number: "05-06",
                    title: "Analytics, Dashboards & Projects",
                    description: "LOD expressions, forecasting, clustering, reference lines, dynamic analysis with sets/parameters, dashboard best practices, stories & interactivity, real-world projects.",
                    deliverables: ["Interactive Enterprise Dashboard", "Tableau Story + Capstone Project"]
                }
            ]
        },
        {
            id: "powerbi-analytics",
            title: "Data Analytics & Visualization with Power BI",
            weeks: [
                {
                    number: "01-02",
                    title: "Power BI Desktop & Data Modeling",
                    description: "Power BI setup, data import, Power Query transformations (merge/append/conditional columns), star schema modeling, relationships & cardinality.",
                    deliverables: ["Transformed Dataset with Power Query", "Star Schema Data Model"]
                },
                {
                    number: "03-04",
                    title: "DAX & Advanced Visualization",
                    description: "DAX basics to advanced (measures, calculated columns, time intelligence), advanced visuals (tree maps, gauge, ribbon, forecasting), conditional formatting, interactivity.",
                    deliverables: ["Complex DAX Measures Library", "Advanced Analytics Dashboard"]
                },
                {
                    number: "05-06",
                    title: "Dashboards, Publishing & Projects",
                    description: "Interactive dashboard design, bookmarks, drill-through, Power BI Service publishing, sharing & security, real-world end-to-end projects.",
                    deliverables: ["Published Interactive Dashboard", "Full Sales/Finance Capstone Project"]
                }
            ]
        },
        {
            id: "bi-bigdata-master",
            title: "Data Analytics With BI And Big Data Engineering Master Program",
            weeks: [
                {
                    number: "01-06",
                    title: "Complete Visualization Mastery",
                    description: "Full modules from Advanced Excel + Python Visualization (Pandas/Matplotlib/Seaborn/NumPy) + Tableau + Power BI (all detailed modules above combined).",
                    deliverables: ["Cross-Tool Visualization Comparison Project", "Professional Multi-Tool Dashboard Portfolio"]
                },
                {
                    number: "07-09",
                    title: "Database & Big Data Foundations",
                    description: "MySQL complete (design, advanced SQL, administration) + Big Data with Hadoop (HDFS, Hive, Pig if covered) + Apache Spark & Databricks fundamentals.",
                    deliverables: ["MySQL Optimized Database Project", "Spark ETL Pipeline on Databricks"]
                },
                {
                    number: "10-14",
                    title: "Advanced Big Data Engineering & Capstone",
                    description: "Spark/Databricks deep dive (PySpark, Spark SQL, streaming if included), modern data architectures, integration with BI tools, full-stack industry capstone combining BI + Big Data.",
                    deliverables: ["End-to-End Big Data Pipeline", "Complete BI + Big Data Capstone + Presentation"]
                }
            ]
        }
    ]
};

const RAW_CAREER = {
    title: "BI Career Outlook",
    description: "Explore high-growth career paths and salary expectations for BI professionals.",
    subtitle: "Top Roles",
    paths: [
        {
            id: 1,
            role: "BI Analyst",
            trending: true,
            demandLevel: "Very High",
            experience: "0-2 Years",
            description: "The entry-point role focused on reporting, dashboard creation, and data interpretation.",
            salaryRange: "\u20b96 LPA - \u20b912 LPA",
            skills: [
                "SQL",
                "Power BI",
                "Tableau",
                "Excel"
            ],
            responsibilities: [
                "Analyze complex data sets",
                "Create interactive dashboards",
                "Generate business reports"
            ],
            opportunities: [
                "IT Services",
                "Finance",
                "E-commerce"
            ],
            hiringCompanies: [
                "Deloitte",
                "Accenture",
                "TCS"
            ]
        },
        {
            id: 2,
            role: "BI Developer",
            trending: true,
            demandLevel: "High",
            experience: "2-5 Years",
            description: "Focuses on designing and implementing data warehouses and ETL processes.",
            salaryRange: "\u20b98 LPA - \u20b918 LPA",
            skills: [
                "Advanced SQL",
                "ETL Tools",
                "Cloud Platforms (Azure/AWS)",
                "Python"
            ],
            responsibilities: [
                "Design ETL processes",
                "Maintain data warehouses",
                "Optimize SQL queries"
            ],
            opportunities: [
                "Product Companies",
                "Consulting Firms"
            ],
            hiringCompanies: [
                "Microsoft",
                "Amazon",
                "Infosys"
            ]
        },
        {
            id: 3,
            role: "Data Scientist (BI Focus)",
            trending: false,
            demandLevel: "Very High",
            experience: "3+ Years",
            description: "Leverages BI data for predictive modeling and advanced statistical analysis.",
            salaryRange: "\u20b912 LPA - \u20b930 LPA",
            skills: [
                "Python",
                "R",
                "Machine Learning",
                "Statistical Modeling"
            ],
            responsibilities: [
                "Build predictive models",
                "Perform statistical analysis",
                "Collaborate with stakeholders"
            ],
            opportunities: [
                "R&D",
                "FinTech",
                "Healthcare"
            ],
            hiringCompanies: [
                "Google",
                "Facebook",
                "IBM"
            ]
        }
    ]
};

const RAW_PROJECTS = {
    title: "Hands-on BI Projects",
    description: "Build a professional portfolio with real-world case studies.",
    subtitle: "Featured Projects",
    projects: [
        {
            name: "Sales Performance Dashboard",
            description: "Develop a comprehensive sales dashboard using Power BI to track KPIs, identify trends, and forecast future performance.",
            skills: [
                "Power BI",
                "DAX",
                "Data Modeling",
                "KPI Tracking"
            ],
            difficulty: "Advanced"
        },
        {
            name: "Customer Churn Analysis",
            description: "Use Tableau to visualize customer data and identify key factors contributing to churn, providing actionable insights for retention strategies.",
            skills: [
                "Tableau",
                "Data Cleaning",
                "Statistical Analysis",
                "Data Storytelling"
            ],
            difficulty: "Intermediate"
        }
    ]
};

const RAW_FAQS = [
    {
        id: 1,        q: "What is Business Intelligence and why should I learn it?",
        a: "Business Intelligence (BI) is the process of transforming raw data into actionable insights for better decision-making. Learning BI opens doors to high-paying careers as organizations increasingly rely on data-driven strategies. With average salaries of ₹6-15 LPA, BI professionals are among the most sought-after in today's job market."
    },
    {
        id: 2,        q: "Do I need coding experience to learn Business Intelligence?",
        a: "No prior coding experience is required! Our BI course starts from the basics and gradually builds your skills. You'll learn SQL for data querying, basic Python for analytics, and powerful visualization tools like Power BI and Tableau through hands-on projects. We focus on practical skills that directly apply to real-world business scenarios."
    },
    {
        id: 3,        q: "How long does it take to complete the BI course?",
        a: "Our comprehensive BI program takes 16 weeks (4 months) with flexible weekend and weekday batches. Fast-track options are available for 10 weeks. Each week includes 8-10 hours of live sessions, assignments, and project work. You'll gain job-ready skills and complete 6+ industry projects by the end of the program."
    },
    {
        id: 4,        q: "What certifications will I receive after completing the course?",
        a: "Upon completion, you'll receive an industry-recognized Business Intelligence Professional Certificate. We also prepare you for Microsoft Power BI Data Analyst (PL-300) and Tableau Desktop Specialist certifications. Our course includes exam prep materials, practice tests, and guidance to help you ace these certifications and stand out to employers."
    },
    {
        id: 5,        q: "What is the average salary for BI professionals in India?",
        a: "Entry-level BI Analysts earn ₹6-12 LPA, BI Developers earn ₹8-15 LPA, and Analytics Managers can earn ₹15-25 LPA. Our graduates report an average 40% salary increase after completing the program. Top performers at companies like TCS, Infosys, Accenture, and Deloitte earn even higher, with experienced professionals reaching ₹30+ LPA."
    },
    {
        id: 6,        q: "What kind of job support do you provide after course completion?",
        a: "We offer comprehensive career support including resume building, portfolio creation, mock interviews with industry experts, and direct referrals to our hiring partner network. Our dedicated placement team works with you until you land your dream BI role. Our placement team works to connect graduates with companies actively hiring."
    },
    {
        id: 7,        q: "What is the batch size and learning format?",
        a: "We maintain small batch sizes of maximum 15 students to ensure personalized attention. All sessions are live and interactive with experienced instructors who have 10+ years in the BI industry. You'll get lifetime access to recorded sessions, course materials, and our alumni community for continuous learning and networking."
    },
    {
        id: 8,        q: "What tools and technologies will I master in this course?",
        a: "You'll gain hands-on expertise in Power BI, Tableau, SQL (MySQL, PostgreSQL, SQL Server), Excel for analytics, Python (Pandas, NumPy), ETL tools (SSIS, Azure Data Factory), data warehousing concepts, and cloud platforms (Azure, AWS). All tools are industry-standard and highly demanded by employers in 2025."
    }
];

export const biHub: CategoryHubContent = {
  category: "bi",
  sourceName: "Business Intelligence Course Category Page",

  seo: {
    title: "Business Intelligence Courses | Power BI, Tableau & Data Viz",
    description:
      "Explore our professional Business Intelligence courses. Master Power BI, Tableau, and data visualization skills with hands-on training and placement support.",
    keywords: ["business intelligence course", "power bi training", "tableau course", "data visualization", "data analysis"],
    image: "/og-images/courses-bi-courses-og.webp",
  },

  hero: {
    breadcrumb: "Business Intelligence",
    badges: [
      { icon: "sparkles", text: "India's comprehensive Business Intelligence Training Institute" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "Industry-Led Expert Mentors" },
    ],
    h1: "Master [[Business Intelligence]] & Data Analytics - Turn data into actionable insights",
    subtitle:
      "Industry-focused training in Business Intelligence with hands-on projects using SQL, Power BI, Tableau, Python (Pandas), and ETL workflows. Learn data modeling, KPI design, dashboarding, storytelling with data, and best practices for data governance. Build a BI portfolio and get placement support for BI Analyst, Data Analyst, and Analytics Engineer roles.",
    description:
      "CDPL’s Business Intelligence program covers Data Integration (ETL), SQL for analytics, Data Modeling, Dashboarding with Power BI and Tableau, Advanced Excel, Python for data manipulation, KPI design, storytelling with data, and governance best practices. The curriculum is tailored for beginners and working professionals aiming for BI Analyst, Data Analyst, and Analytics Engineer roles.",
    ctas: [
      { label: "Download Brochure", kind: "brochure", primary: true },
      { label: "Watch CDPL", kind: "video", href: "https://www.youtube.com/watch?v=8kB2wESj1n8" },
    ],
    highlights: [
      "100% Live Interactive Classes",
      "90+ Real-World BI Projects",
      "Industry Certifications (Power BI, Tableau, SQL)",
      "Data Visualization & Dashboards",
      "Job Support",
      "Flexible Batches",
      "Lifetime Access",
    ],
  },

  why: {
    eyebrow: "Business Intelligence Excellence",
    heading: "Transform Data Into [[Strategic Decisions]]",
    intro:
      "Master enterprise Business Intelligence tools and techniques. Build production-ready dashboards, analytics solutions, and become a certified BI professional with hands-on industry projects.",
    cards: [
      {
        icon: "barChart",
        title: "Advanced Data Visualization",
        description:
          "Master Power BI, Tableau, and modern visualization tools to transform complex data into compelling business insights and interactive dashboards.",
      },
      {
        icon: "database",
        title: "ETL & Data Warehousing",
        description:
          "Learn enterprise-grade ETL processes, data modeling, and warehousing techniques using SQL, Azure, and AWS to build scalable BI solutions.",
      },
      {
        icon: "brain",
        title: "Business Analytics & KPIs",
        description:
          "Develop expertise in defining metrics, creating KPI frameworks, and delivering actionable insights that drive strategic business decisions.",
      },
      {
        icon: "trendingUp",
        title: "Predictive Analytics",
        description:
          "Integrate forecasting models and predictive analytics into BI workflows to help organizations anticipate trends and optimize performance.",
      },
      {
        icon: "users",
        title: "Stakeholder Communication",
        description:
          "Master the art of presenting data stories to executives and stakeholders, translating technical insights into business value.",
      },
      {
        icon: "briefcase",
        title: "Real-World BI Projects",
        description:
          "Work on industry-standard projects including sales analytics, financial reporting, and customer segmentation with actual business scenarios.",
      },
      {
        icon: "zap",
        title: "Fast-Track Career Support",
        description:
          "Get personalized resume reviews, mock interviews, and direct connections to hiring managers at top companies seeking BI professionals.",
      },
      {
        icon: "award",
        title: "Industry Certification Prep",
        description:
          "Prepare for Microsoft Power BI, Tableau Desktop Specialist, and other leading BI certifications with guided study materials and practice exams.",
      },
      {
        icon: "shield",
        title: "Data Governance & Security",
        description:
          "Understand data privacy regulations, security best practices, and governance frameworks essential for enterprise BI implementations.",
      },
    ],
    outro: "Ready to start your BI career journey?",
    ctas: [{ label: "Explore BI Courses", kind: "scroll", href: "courses" }],
  },

  courses: {
    eyebrow: "Popular Courses",
    heading: "Explore Our [[Industry-Ready]] Courses",
    intro:
      "Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.",
    items: RAW_COURSES.map((c) => ({
      title: c.title,
      description: c.description,
      duration: c.duration,
      level: c.level,
      students: c.students,
      popular: c.popular,
      link: c.link,
      linkTitle: c.titleAttribute,
      features: c.features,
      syllabusLink: c.syllabusLink,
      icon: c.icon,
    })),
    viewAll: { label: "View All Courses", href: "/courses", title: "Explore All Professional Courses" },
  },

  curriculum: {
    eyebrow: "Comprehensive Curriculum",
    heading: "Detailed [[Curriculum]]",
    intro: RAW_CURRICULUM.subtitle,
    facts: ["4 Weeks per Track", "Industry Certification"],
    tracks: RAW_CURRICULUM.tracks.map((t) => ({
      id: t.id,
      title: t.title,
      modules: t.weeks.map((w) => ({ number: w.number, title: w.title, description: w.description, deliverables: w.deliverables })),
    })),
    outro: "Complete all tracks to earn your BI Professional Certificate",
  },

  testimonials: {
    eyebrow: "Student Success Stories",
    heading: "Real Results From [[Real BI Professionals]]",
    intro:
      "Join successful graduates who transformed their careers with our industry-leading Business Intelligence training. See how our students landed roles at top companies with significant salary increases.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "{rating}", label: "Learner Rating" },
          { value: "40%", label: "Avg. Salary Increase" },
          { value: "Live", label: "Mentor-Led Classes" },
          { value: "{reviews}", label: "Verified Reviews" },
        ],
      },
    ],
    outro: "**Start Your Success Story** — join our next BI cohort starting soon.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Capstone Projects",
    heading: "Hands-on [[BI Projects]]",
    intro: RAW_PROJECTS.description,
    items: RAW_PROJECTS.projects.map((p) => ({
      icon: "barChart" as const,
      title: p.name,
      description: p.description,
      tags: p.skills,
      meta: p.difficulty,
    })),
    extras: [
      {
        kind: "text",
        title: "Why Build These Projects?",
        text: "Transform from a learner to a job-ready BI professional with hands-on experience.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio-Ready Projects",
            description: "Build professional-grade BI solutions that demonstrate your expertise to potential employers and clients.",
          },
          {
            icon: "award",
            title: "Industry Recognition",
            description: "Work on projects based on real business scenarios from Fortune 500 companies across multiple industries.",
          },
          {
            icon: "zap",
            title: "Interview Confidence",
            description: "Discuss actual implementations in interviews with hands-on experience in ETL, dashboards, and analytics.",
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: "Career Opportunities",
    heading: "BI [[Career Outlook]]",
    intro: RAW_CAREER.description,
    paths: RAW_CAREER.paths.map((p) => ({
      role: p.role,
      trending: p.trending,
      demandLevel: p.demandLevel,
      experience: p.experience,
      description: p.description,
      salaryRange: p.salaryRange,
      skills: p.skills,
      responsibilities: p.responsibilities,
      opportunities: p.opportunities,
      hiringCompanies: p.hiringCompanies,
    })),
    outro: "**Ready to Launch Your BI Career?** Get personalized career guidance and placement support.",
    ctas: [
      { label: "Talk to Career Counselor", kind: "careerSession" },
      { label: "Download Career Guide", kind: "brochure" },
    ],
  },

  faq: {
    intro:
      "Everything you need to know about our Business Intelligence course, career opportunities, certifications, and how we help you succeed in the BI industry.",
    items: RAW_FAQS.map((f) => ({ question: f.q, answer: f.a })),
  },

  cta: {
    heading: "Ready to Start Your [[Data Revolution]] Career?",
    intro: "Join students who have successfully launched their BI careers.",
    actions: [
      { label: "Start Your Journey Now", kind: "enroll" },
      { label: "Download Brochure", kind: "brochure" },
    ],
    highlights: [
      { icon: "award", title: "Industry-recognized certificate" },
      { icon: "infinity", title: "Lifetime access to course materials" },
      { icon: "headphones", title: "24/7 mentor support" },
      { icon: "briefcase", title: "Job placement assistance" },
      { icon: "code", title: "Real-world projects" },
      { icon: "message", title: "Interview preparation" },
    ],
    footnotes: [
      { icon: "phone", text: "+91 84-889-889-84" },
      { icon: "mail", text: "contact@cinutedigital.com" },
      { icon: "mapPin", text: "Mumbai, Maharashtra, India" },
    ],
  },
};

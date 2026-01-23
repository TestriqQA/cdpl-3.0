import { Zap, Users, Briefcase, Award, Clock, ShieldCheck } from 'lucide-react';

import { iconMap } from '@/components/BI-Courses/CoursesSection';

export const features = [
    {
        icon: Zap,
        title: 'Hands-On Live Classes',
        desc: 'Interactive Python & ML sessions with live coding — not just slides.',
    },
    {
        icon: Users,
        title: 'Small Batches & Mentor Support',
        desc: 'Max 15 learners per batch with 1:1 mentor reviews, weekly doubt clears & career coaching.',
    },
    {
        icon: Briefcase,
        title: 'Job-Ready Portfolio & Placement Support',
        desc: '90+ real projects, portfolio reviews, mock interviews & guaranteed interview opportunities.',
    },
    {
        icon: Award,
        title: 'Industry-Aligned Certifications',
        desc: 'Certificates covering Python, ML, Deep Learning & MLOps recognized by hiring partners.',
    },
    {
        icon: Clock,
        title: 'Flexible Batches & Lifetime Access',
        desc: 'Weekend or weekday batches + lifetime access to recordings, notebooks and updates.',
    },
    {
        icon: ShieldCheck,
        title: 'Production & MLOps Training',
        desc: 'Model deployment, Docker, APIs, monitoring & MLOps best practices for real-world ML systems.',
    },
];

export interface Course {
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

export const COURSES: Course[] = [
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
        link: '/data-analytics',
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
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/data-analytics-python',
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
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/data-analytics-and-visualization',
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
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/data-analytics-with-tableau',
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
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/power-bi-course',
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
        link: '/masters-in-data-engineering',
        icon: 'BarChart3',
        features: ['Power BI/Tableau', 'Big Data Concepts', 'Data Warehousing'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/data-analytics-with-bi-and-big-data-engineering-master-program.pdf',
    },
]



export const curriculumContent = {
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
}

export const careerPathContent = {
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
}


export const ProjectContent = {
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
}

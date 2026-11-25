import type { CourseContent } from "@/types/course-page";
import { DATA_ENGINEERING_MASTERS_FAQS } from "@/data/courses/bi/faqs/masters-in-data-engineering";

// Content for /courses/bi-courses/masters-in-data-engineering, moved from the
// old src/components/masters-in-data-engineering/* sections. Kept word for word
// except repeated filler ("Keywords:" lines in every section, per-card badge
// micro-copy, a stack overview repeating the tool groups, a keyword-only hero line).
export const mastersInDataEngineeringCourse: CourseContent = {
  slug: "masters-in-data-engineering",
  courseName: "Data Analytics with BI & Big Data Engineering Master Program",
  sourceName: "Data Engineering Course Page",

  seo: {
    title: "Data Engineering & BI Master Program in Mumbai | CDPL",
    description:
      "Master program in BI & big data engineering — SQL, Spark, Power BI, Tableau, Python & data pipelines with hands-on projects and placement assistance.",
    keywords: [
      "comprehensive institute for data analytics",
      "sql data analyst",
      "bi and big data engineering",
      "iim business analytics",
      "bi data analyst",
      "sql for data analytics",
      "data analytics program mumbai",
      "software engineer jobs in mumbai",
      "data engineering certifications",
      "sql analytics",
      "data analytics iit",
      "certifications for data engineers",
      "how to become data analyst in india",
      "data engineer certification",
      "iit data analytics",
      "sql in data analytics",
    ],
    image: "/og-images/courses-bi-courses-masters-in-data-engineering-og.webp",
  },

  schema: {
    name: "Master Program in Data Engineering: BI & Big Data Engineering Course",
    description:
      "155-hour intensive master program in Mumbai covering SQL for data analytics, BI tools, and Big Data engineering with Spark and Hadoop. placement.",
    duration: "P3M",
    program: { programType: "Master's Program", timeToComplete: "P3M", occupationalCategory: "Data Engineer" },
  },

  hero: {
    breadcrumb: "Data Analytics with BI & Big Data Engineering",
    badges: [
      { icon: "clock", text: "Duration: 155 Hours · 5.5 Months" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "trophy", text: "14+ Years Industry Experience" },
    ],
    h1: "Master [[Data Engineering & Business Intelligence]] with Placement in [[Mumbai]]",
    subtitle:
      "Join the comprehensive institute for data analytics. Become a high-paid SQL Data Analyst or Big Data Engineer. Learn BI and Big Data Engineering, SQL for data analytics, and cloud pipelines with job support.",
    description:
      "This BI and Big Data engineering master program is designed for students and working professionals who want to transition into high-growth roles such as Data Analyst, BI Developer, or Data Engineer. Build a job-ready portfolio using end-to-end projects that cover data ingestion, modeling, visualization, and performance optimization for real business use cases.",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "155 Hours of Structured Training",
      "8 Industry-Recognized Certifications",
      "10+ Real-World BI & Big Data Projects",
      "Job Assistance & Placement Support",
    ],
  },

  stats: {
    heading: "Program Highlights & [[Data Engineering Certifications]]",
    intro:
      "Why settle for less? Join the comprehensive institute for data analytics. Our Data Analytics Program Mumbai delivers in-demand skills in SQL analytics, BI and Big Data Engineering, preparing you for top Software Engineer Jobs in Mumbai.",
    items: [
      {
        value: "5.5",
        label: "Months Duration",
        note: "5.5-month structured Data Analytics Program Mumbai designed for working professionals seeking Data Engineering Certifications.",
      },
      {
        value: "155",
        label: "Hours of Intensive Training",
        note: "155 hours of intensive, mentor-led training. Master SQL in data analytics, Python, and Big Data Engineering concepts.",
      },
      {
        value: "40%+",
        label: "Projected Job Growth in Data Engineering",
        note: "40%+ projected growth for SQL Data Analyst and Big Data Engineer roles in India's top tech hubs.",
      },
      {
        value: "₹ 12 LPA",
        label: "Average Salary Hike for Certified Engineers",
        note: "Average salary hike of up to ₹12 LPA. Top option for Software Engineer Jobs in Mumbai aspirants.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "BI & Big Data Engineering: Build a Future-Proof Career in the Data Economy",
        text: "Modern enterprises in banking, healthcare, and e-commerce rely on Data Engineers and SQL Data Analysts to design scalable data pipelines. This BI and Big Data Engineering master program bridges the skills gap with real-world projects—so you can confidently target Data Engineer, BI Developer, and Analytics Engineer roles.",
      },
      {
        kind: "list",
        items: [
          "**End-to-end stack:** BI tools, SQL, data warehousing, ETL, Big Data technologies, and cloud data engineering basics",
          "**Industry projects:** build dashboards, data pipelines, and reporting solutions using real business scenarios",
          "**Career support:** resume optimization, mock interviews, LinkedIn profile review, and job assistance for BI & Data Engineering roles",
          "**Flexible learning:** weekend / evening batches, online and classroom options for working professionals and students",
        ],
      },
    ],
    ctas: [{ label: "Book a Free Career Session", kind: "careerSession" }],
  },

  why: {
    eyebrow: "Why We Are The Comprehensive Institute for Data Analytics",
    heading: "Master [[BI and Big Data Engineering]] for 2026",
    intro:
      "We bridge the gap between analysis and engineering. This Data Analytics Program Mumbai is ideal for those planning how to become a data analyst in India or a Big Data Engineer. Whether you want IIT data analytics depth or practical data engineering certifications skills, our program covers it all. Perfect for aspiring SQL Data Analysts and BI Data Analysts.",
    cards: [
      {
        icon: "zap",
        title: "Dual Expertise: BI + Big Data",
        description: "Become a versatile SQL Data Analyst with mastery in BI dashboards and Big Data Engineering pipelines.",
      },
      {
        icon: "code",
        title: "Industry-Relevant Curriculum",
        description:
          "Better than theoretical IIT data analytics courses. Learn practical SQL for data analytics, Spark, and Cloud.",
      },
      {
        icon: "users",
        title: "Hands-On Project Portfolio",
        description: "Build 10+ real-world projects. Essential for clearing Data Engineering Certifications and interviews.",
      },
      {
        icon: "trendingUp",
        title: "Accelerated Career Growth",
        description:
          "Qualify for high-paying Software Engineer Jobs in Mumbai. Target roles: BI Data Analyst, Data Engineer.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Become a Full-Stack Data Professional in BI & Big Data",
        text: "Most courses focus only on one aspect. This BI and Big Data Engineering program combines SQL for data analytics with ETL workflows. You don't just learn tools—you learn to design solutions.",
      },
      {
        kind: "list",
        items: [
          "**Full Career Stack: Analyst to Engineer** — Build capabilities for SQL Data Analyst and Data Engineer roles with one integrated master program.",
          "**Real Projects & Hiring-Focused Training** — Work on 10+ hands-on projects, including end-to-end pipelines, matching the rigor of Data Analytics IIT courses.",
        ],
      },
    ],
    ctas: [{ label: "Start Your Journey", kind: "enroll" }],
  },

  curriculum: {
    eyebrow: "Detailed Syllabus for 2026",
    heading: "Masters in Data Engineering: From [[SQL Data Analyst]] to Architect",
    intro: "Our 6-module structure rivals IIM Business Analytics and IIT Data Analytics programs.",
    modules: [
      {
        title: "Data Visualization & BI Mastery",
        topics: ["Data Analytics with Tableau", "Data Visualization in Excel", "Data Analytics with Power BI"],
        outcome: "Master Power BI and Tableau. Essential for any SQL Data Analyst.",
      },
      {
        title: "Data Foundation & SQL",
        topics: ["Database Management System using MySQL", "Advanced SQL Analytics Queries", "Data Modeling Basics"],
        outcome: "Master SQL for data analytics. Design schemas and write complex queries.",
      },
      {
        title: "Advanced Analytics with Python",
        topics: [
          "Data Visualization in Python (Matplotlib, Seaborn)",
          "Pandas for Data Manipulation",
          "NumPy for Numerical Computing",
        ],
        outcome: "Automate analysis with Python. Key for modern Data Analytics Certifications.",
      },
      {
        title: "Big Data Engineering Core",
        topics: [
          "Big Data Engineering with Hadoop (HDFS, MapReduce)",
          "Hadoop Ecosystem Overview",
          "Data Ingestion Techniques",
        ],
        outcome: "Learn Hadoop ecosystem. The foundation of BI and Big Data Engineering.",
      },
      {
        title: "Real-Time Processing with Spark",
        topics: [
          "Big Data Engineering with Apache Spark & Databricks",
          "PySpark Programming",
          "Building ETL/ELT Pipelines",
        ],
        outcome: "High-speed processing with Apache Spark. In-demand for Software Engineer Jobs in Mumbai.",
      },
      {
        title: "Capstone Project & Certification",
        topics: ["End-to-End Data Pipeline Implementation", "Certification Exam Preparation", "Portfolio Review"],
        outcome: "Build a portfolio. Get job-ready with our Data Engineering Certifications.",
      },
    ],
    extras: [
      {
        kind: "list",
        title: "What's Included in This Master Program",
        items: [
          "Comprehensive training in Data Analytics, BI, and Big Data Engineering tools.",
          "Practical exposure to SQL, Python, Tableau, Power BI, Hadoop, Spark, and Databricks.",
          "Real-world projects across BI dashboards, ETL pipelines, and predictive analytics.",
          "Career-focused support: resume building, mock interviews, and portfolio review.",
          "Guidance for roles like Business Intelligence Analyst, Data Analyst, and Big Data Engineer.",
          "Access to mentors and an active alumni network in data and analytics.",
        ],
      },
    ],
    ctas: [{ label: "Download Full Syllabus", kind: "syllabus" }],
  },

  tools: {
    eyebrow: "Industry-Standard Stack",
    heading: "Tools in our [[Data Analytics Program Mumbai]]",
    intro:
      "Master the stack preferred by top MNCs for BI and Big Data Engineering. From SQL in data analytics to Certifications for Data Engineers tools like Spark and Tableau, we cover it all.",
    items: [
      {
        name: "Tableau",
        logo: "/techstack_logos/tableau-logo.svg",
        category: "BI & Visualization",
        description: "Leading BI tool for SQL Data Analyst roles. Visualize SQL analytics data effortlessly.",
      },
      {
        name: "Power BI",
        logo: "/techstack_logos/power-bi-logo.svg",
        category: "BI & Visualization",
        description: "Essential for Business Intelligence. Learn to build dashboards for data analytics programs.",
      },
      {
        name: "Microsoft Excel",
        logo: "/techstack_logos/excel-logo.svg",
        category: "BI & Visualization",
        description: "The foundation of data analysis. Master advanced functions for quick insights.",
      },
      {
        name: "MySQL",
        logo: "/techstack_logos/mysql-logo.svg",
        category: "Databases",
        description: "Master SQL for data analytics. Design schemas and query robust databases.",
      },
      {
        name: "Python",
        logo: "/techstack_logos/python-logo.svg",
        category: "Programming",
        description: "Automate ETL with Python. A must-have skill for Data Engineering Certifications.",
      },
      {
        name: "Apache Spark",
        logo: "/techstack_logos/apache-spark-logo.svg",
        category: "Big Data",
        description: "High-speed processing for Big Data Engineering. Handle massive datasets.",
      },
      {
        name: "Databricks",
        logo: "/techstack_logos/databricks-logo.svg",
        category: "Big Data",
        description: "Unified analytics platform. Learn modern cloud data engineering workflows.",
      },
      {
        name: "Apache Hadoop",
        logo: "/techstack_logos/hadoop-logo.svg",
        category: "Big Data",
        description: "Understanding distributed storage (HDFS) is key for any Big Data Engineer.",
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Your Learning Journey with the Data Stack",
        items: [
          {
            title: "BI & Analytics Foundations",
            description: "Start with Excel, Tableau, and Power BI to build dashboards and business reports.",
          },
          {
            title: "Databases & SQL",
            description: "Use MySQL to design schemas, write queries, and prepare data for analytics.",
          },
          {
            title: "Python for Data Engineering",
            description: "Leverage Python for automation, ETL scripts, data transformation, and integration.",
          },
          {
            title: "Big Data & Cloud Workloads",
            description: "Work with Apache Spark, Hadoop, and Databricks to handle large-scale Big Data pipelines.",
          },
        ],
      },
    ],
    outro:
      "This structured learning roadmap ensures you grow from **BI fundamentals** to **full-fledged Big Data Engineering**, making you highly competitive for **data analytics**, **BI developer**, and **data engineer** job roles.",
  },

  roadmap: {
    heading: "Your 5-Step Career Roadmap to Becoming a [[Big Data Engineer]]",
    intro:
      "This master program is the launchpad for a decade-long career progression in the high-growth data domain. Follow a proven path from **Data Analyst** roles into **Big Data Engineer**. This roadmap is tailored for a **high-demand Data Analytics Program Mumbai**.",
    steps: [
      {
        title: "Foundation & Analysis",
        badge: "Data Analyst / Junior BI Analyst",
        icon: "users",
        description: "Master SQL in data analytics and Excel. Start your journey as a SQL Data Analyst.",
      },
      {
        title: "BI Specialization",
        badge: "Business Intelligence Specialist",
        icon: "globe",
        description:
          "Deep dive into Tableau and Power BI for advanced reporting, dashboard creation, and strategic data storytelling.",
      },
      {
        title: "Data Engineering Associate",
        badge: "Junior Data Engineer",
        icon: "server",
        description: "Learn Hadoop and Certifications for Data Engineers concepts.",
      },
      {
        title: "Big Data Engineer Mastery",
        badge: "Big Data Engineer",
        icon: "zap",
        description: "Master Apache Spark and BI and Big Data Engineering pipelines.",
      },
      {
        title: "Architect & Leadership",
        badge: "Data Architect / Data Lead",
        icon: "trendingUp",
        description:
          "Focus on system design, cloud integration (AWS/Azure/GCP), data governance, and leading data teams.",
      },
    ],
    outro:
      "This Big Data Engineer career roadmap is ideal for graduates, working professionals, and career switchers who want a clear **end-to-end path in Data Analytics, Business Intelligence, and Data Engineering**. From mastering *SQL, Excel, Python, Tableau, Power BI, Hadoop, Spark, Databricks* to leading *data teams on AWS, Azure, and GCP*, this roadmap helps you plan your journey toward high-paying Big Data Engineer and Data Architect roles in India and global markets.",
    ctas: [{ label: "Start Your Roadmap", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Hands-on Experience",
    heading: "Build a [[Data Engineer Certification]] Portfolio",
    intro:
      "Don't just watch. Build. Our 10+ projects rival data analytics iit casework. Solve real problems in BI Data Analyst dashboards and SQL Analytics. Perfect for demonstrating skills for Software Engineer Jobs in Mumbai.",
    items: [
      {
        icon: "database",
        title: "E-commerce Sales & Inventory Dashboard",
        meta: "Domain: E-commerce & Retail",
        description: "Design a BI Data Analyst dashboard. Visualize KPIs using Power BI and SQL Analytics.",
        tags: ["Power BI", "Tableau", "MySQL", "SQL"],
      },
      {
        icon: "trendingUp",
        title: "Social Media Sentiment Analysis Pipeline",
        meta: "Domain: Social Media & Digital Marketing",
        description: "A complete Big Data Engineering pipeline. Ingest real-time data with Apache Spark (PySpark).",
        tags: ["Apache Spark", "PySpark", "Hadoop (HDFS)", "Python"],
      },
      {
        icon: "cloud",
        title: "Financial Data ETL and Data Warehouse",
        meta: "Domain: Banking, Finance & Regulatory",
        description: "Build a secure ETL process on Databricks. Applies IIM Business Analytics case study logic.",
        tags: ["Databricks", "Apache Spark", "ETL/ELT", "Data Modeling"],
      },
      {
        icon: "barChart",
        title: "Advanced Predictive Analytics with Python",
        meta: "Domain: Customer Analytics & Predictive Modelling",
        description: "Use Python for advanced modeling. Essential for top-tier Data Analytics Program Mumbai roles.",
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Knowledge Coverage",
        text: "Our projects span domains like Software Engineer Jobs in Mumbai sectors so you gain exposure to real-world challenges. From e-commerce dashboards to financial data warehouses, you build the domain understanding recruiters look for in BI and Big Data Engineering roles.",
      },
      {
        kind: "list",
        items: [
          "E-commerce & Retail",
          "Banking & Finance (BFSI)",
          "Social Media & Marketing",
          "Cloud & SaaS Products",
          "Telecom & Customer Analytics",
          "Healthcare & Insurance",
          "Regulatory & Compliance",
          "Supply Chain & Operations",
          "Executive BI Reporting",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "barChart",
            title: "Portfolio Building",
            description: "Create impressive projects that you can showcase for Certifications for Data Engineers.",
          },
          {
            icon: "users",
            title: "Real-World Experience",
            description: "Work with realistic datasets used by SQL Data Analyst teams.",
          },
          {
            icon: "zap",
            title: "Skill Mastery",
            description: "Apply skills end-to-end and master Data Analytics Program Mumbai concepts.",
          },
        ],
      },
    ],
    outro:
      "This project-driven master program helps you build a **strong, proof-based portfolio** for **Data Analytics, Business Intelligence, and Big Data Engineering** careers with job-oriented, real-time projects.",
    ctas: [{ label: "Download Project Syllabus", kind: "syllabus" }],
  },

  testimonials: {
    eyebrow: "Success Stories",
    heading: "Hear From Our Successful [[Graduates]]",
  },

  career: {
    eyebrow: "Career Advancement",
    heading: "Land High-Paying [[Software Engineer Jobs in Mumbai]]",
    intro:
      "Master SQL Analytics and BI Data Analyst skills to command top salaries. This Masters in Data Engineering opens doors to roles like BI Data Analyst, SQL Data Analyst, and Big Data Engineer. Better placement outcomes than many IIT data analytics short courses.",
    rolesTitle: "Target Roles",
    roles: [
      {
        title: "Business Intelligence Analyst",
        description: "Build dashboards and strategic reports. Use SQL Analytics and Power BI.",
        salary: "₹6 L - ₹15 L",
      },
      {
        title: "Data Analyst",
        description: "Analyze trends with Python and SQL. A perfect entry point for Software Engineer Jobs in Mumbai.",
        salary: "₹5 L - ₹12 L",
      },
      {
        title: "Big Data Engineer",
        description: "Design scalable pipelines using Spark/Hadoop. The peak of BI and Big Data Engineering.",
        salary: "₹8 L - ₹25 L+",
      },
    ],
    companiesTitle: "Our Graduates Work At",
    companies: ["Amazon", "Accenture", "TCS", "Wipro", "Google", "Microsoft"],
    companiesNote:
      "Top recruiters include Amazon, Accenture, TCS, Wipro, Google, Microsoft and many more organizations building data platforms, BI dashboards, and Big Data solutions.",
    extras: [
      {
        kind: "cards",
        title: "Career Growth & Opportunities",
        items: [
          {
            icon: "trendingUp",
            title: "Rapid Career Growth",
            description: "Data Engineers see 40–50% salary growth within 2–3 years.",
          },
          {
            icon: "briefcase",
            title: "Multiple Career Paths",
            description: "Start as a SQL Data Analyst and move into specialized roles such as Big Data Engineer.",
          },
          {
            icon: "users",
            title: "Global Opportunities",
            description: "Work in Software Engineer Jobs in Mumbai and global markets.",
          },
        ],
      },
    ],
    outro:
      "Alumni from this **Data Analytics with BI and Big Data Engineering** program have the skills to apply for roles at leading *product companies, IT service firms, consulting giants, and cloud providers*.",
    ctas: [{ label: "Book a Free Career Session", kind: "careerSession" }],
  },

  audience: {
    eyebrow: "Eligibility & Prerequisites",
    heading: "Who Needs This [[Data Engineer Certification]]?",
    intro:
      "Wondering how to become a data analyst in India or transition to Big Data? This is your path. Whether you're an **IT professional**, **recent graduate**, **BI / Data Analyst**, or **career changer**, this **Data Analytics with BI and Big Data Engineering Master Program** gives you a structured path toward *high-paying data analytics, BI, and data engineering jobs*.",
    items: [
      {
        icon: "briefcase",
        title: "IT Professionals",
        description: "Transition from support to Software Engineer Jobs in Mumbai. Master BI and Big Data Engineering.",
        points: [
          "Basic understanding of software development or IT workflows",
          "Interest in Data Analytics, BI, or Big Data Engineering roles",
          "Willingness to learn tools like SQL, Python, Power BI, and Spark",
        ],
      },
      {
        icon: "graduationCap",
        title: "Recent Graduates",
        description: "Kickstart your career as a SQL Data Analyst. Learn SQL for Data Analytics from scratch.",
        points: [
          "Strong desire to build a job-ready, practical skill set",
          "Comfort with basic logic, math, or programming concepts",
          "Commitment to hands-on labs, capstone projects, and mock interviews",
        ],
      },
      {
        icon: "repeat",
        title: "BI Analysts & Data Analysts",
        description:
          "Upgrade to Big Data. Move beyond basic reporting to Data Engineering Certifications roles.",
        points: [
          "Existing experience in BI or data analysis (reports/dashboards)",
          "Curiosity about Big Data tools like Hadoop, Spark, and Databricks",
          "Goal to move into senior BI Engineer or Data Engineer positions",
        ],
      },
      {
        icon: "users",
        title: "Career Changers",
        description:
          "Non-tech background? Our Data Analytics Program Mumbai makes you a Certified Data Engineer.",
        points: [
          "Basic knowledge of programming or databases (any language/SQL)",
          "Open mindset to switch into the data analytics & engineering domain",
          "Motivation to follow a structured Data Analytics with BI & Big Data roadmap",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Prerequisites & Requirements",
        items: [
          {
            icon: "check",
            title: "Essential",
            points: [
              "Comfort using a computer and web-based tools",
              "Interest in working with numbers, reports, and business data",
              "Laptop/PC with stable internet connection",
            ],
          },
          {
            icon: "listChecks",
            title: "Recommended",
            points: [
              "Basic SQL or spreadsheet (Excel/Google Sheets) knowledge",
              "Familiarity with any programming language (Python preferred)",
              "Understanding of basic statistics and business metrics",
            ],
          },
          {
            icon: "sparkles",
            title: "Nice to Have",
            points: [
              "Prior exposure to BI tools like Excel, Tableau, or Power BI",
              "Awareness of cloud platforms such as AWS, Azure, or GCP",
              "Experience with any analytics or reporting projects in your domain",
            ],
          },
        ],
      },
      {
        kind: "text",
        text: "Ideal for learners aiming for **Business Intelligence, Data Analytics, and Big Data Engineering** careers with technologies like *SQL, Python, Power BI, Tableau, Hadoop, Spark, Databricks, and cloud platforms*.",
      },
      {
        kind: "cards",
        title: "Keys to Success in This Program",
        items: [
          {
            icon: "clock",
            title: "Regular Practice",
            description: "Allocate consistent time for SQL Analytics and Big Data Engineering labs.",
          },
          {
            icon: "handshake",
            title: "Active Participation",
            description: "Engage in discussions for Data Analytics Program Mumbai topics.",
          },
          {
            icon: "target",
            title: "Project-First Mindset",
            description:
              "Complete all real-world projects to build a strong portfolio in BI and Big Data Engineering.",
          },
          {
            icon: "book",
            title: "Continuous Learning",
            description: "Stay updated with new tools and Certifications for Data Engineers.",
          },
        ],
      },
    ],
    ctas: [{ label: "Check Your Eligibility", kind: "enroll" }],
  },

  faq: {
    heading: "FAQ: [[Data Analytics & Big Data Engineering Program]]",
    intro:
      "Everything you need to know about the program, eligibility, and career outcomes. Get clarity on how this **Data Analytics Program Mumbai** helps you transition into *Business Intelligence, SQL Data Analyst, and Big Data Engineer* roles.",
    items: DATA_ENGINEERING_MASTERS_FAQS,
    categories: ["General", "Curriculum", "Career", "Certification", "Eligibility"],
  },

  cta: {
    eyebrow: "Limited Time Offer",
    heading: "Enroll in the Top [[Masters in Data Engineering]]",
    intro:
      "Join our alumni who transformed their careers. Certifications for data engineers included. Our Data Analytics Program Mumbai covers everything: SQL Data Analyst skills, Python, BI and Big Data Engineering.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Brochure", kind: "syllabus" },
      { label: "Talk to an Advisor", kind: "careerSession" },
    ],
    highlights: [
      {
        icon: "barChart",
        title: "BI & Big Data Focus",
        description: "End-to-end training across Business Intelligence, Data Analytics, and Big Data Engineering.",
      },
      {
        icon: "briefcase",
        title: "Career & Placement Support",
        description: "Resume building, mock interviews, portfolio review, and job assistance.",
      },
      {
        icon: "graduationCap",
        title: "Industry-Ready Curriculum",
        description: "Hands-on projects, real-time datasets, and globally relevant tools.",
      },
    ],
  },
};

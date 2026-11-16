import type { CourseContent } from "@/types/coursePage";
import { R_DATA_VIS_FAQS } from "@/data/rDataVisData";

// Content for /courses/ds-ml-courses/data-visualization-in-r-programming, moved
// from the old src/components/data-visualization-in-r-programming/* sections
// and their data/content.ts. Kept word for word except repeated filler
// (keyword-dump lines, the same SEO sentence under every card, auto-generated
// stat/role blurbs, a placeholder line), which a cleanup pass removed.
export const dataVisualizationInRProgrammingCourse: CourseContent = {
  slug: "data-visualization-in-r-programming",
  courseName: "Machine Learning and Data Visualization using R Programming",
  sourceName: "R Programming Course Page",

  seo: {
    title: "Machine Learning & Data Visualization with R | CDPL",
    description:
      "20-hour master program in R programming — ML algorithms, ggplot2 visualization & statistical modeling with hands-on projects and placement assistance.",
    keywords: [
      "Machine Learning with R",
      "Data Visualization R",
      "R Programming Course",
      "Data Science R",
      "ML Algorithms R",
      "RStudio",
      "ggplot2",
      "Career in Data Science",
      "Data Analyst Training",
      "Predictive Modeling R",
    ],
    image: "/og-images/courses-ds-ml-courses-data-visualization-in-r-programming-og.webp",
  },

  schema: {
    name: "Machine Learning and Data Visualization using R Programming",
    description:
      "Master Machine Learning algorithms and advanced Data Visualization using R Programming. 20-hour Master Program with job assistance.",
    duration: "P1M",
    howTo: {
      name: "How to Enroll in CDPL Data Visualization in R Program",
      description: "A step-by-step guide to enrolling in our 20 hours intensive Data Visualization in R training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive python, machine learning, and AI algorithms modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern large language models, prompt engineering, and deep learning for advanced tech roles!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Machine Learning and Data Visualization using R Programming",
    badges: [
      { icon: "clock", text: "Duration: 20 Hours Master Program" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "trophy", text: "5+ Years Industry Experience" },
    ],
    h1: "Master [[Machine Learning]] and [[Data Visualization using R]]",
    subtitle:
      "Transform raw data into powerful, insight-driven visualizations and deploy robust Machine Learning models. Learn from industry experts and master R libraries for data science, statistical analysis, and interactive dashboards in this intensive 20-hour Master Program.",
    description:
      "Learn R for data visualization, statistics, predictive modeling, dashboards, and real-world analytics projects tailored for business decision-making.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in R Programming Course" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
  },

  stats: {
    heading: "Why Learners Trust Our [[R Data Visualization & Machine Learning Program]]?",
    intro:
      "Build a **job-ready data analytics profile with R**. Our **R programming course** focuses on **data visualization, statistics, and machine learning** using industry-standard tools like **ggplot2**, **dplyr**, and **tidyr**. Work on **real-world projects**, sharpen your **business analytics** skills, and get **career guidance and placement support** for data analyst and data scientist roles.",
    items: [
      { value: "{rating}", label: "Average Rating" },
      { value: "{studentsPlaced}", label: "Students Placed" },
      { value: "14+ Years", label: "Industry Experience" },
      { value: "101,000+", label: "Job Vacancies in India" },
      { value: "4 LPA", label: "ML Engineer Fresher Avg. Salary" },
    ],
    extras: [
      {
        kind: "text",
        title: "Turn R Programming Skills into a High-Growth Analytics Career",
        text: "Companies in **banking**, **healthcare**, **e-commerce**, **marketing**, and **technology** rely on **R for statistics, forecasting, and visualization**. Our **R data visualization & machine learning course** is built to help you move from basic spreadsheets to **advanced analytics dashboards**, **predictive models**, and **data-driven decision making**.",
      },
      {
        kind: "list",
        items: [
          "**Core tools:** R, RStudio, ggplot2, dplyr, tidyr, readr, shiny dashboards",
          "**Hands-on projects** in business analytics, marketing analytics, and performance reporting",
          "**Career support** with resume building, LinkedIn optimization, and interview preparation for data roles",
          "**Flexible learning modes** – weekend, evening, online and classroom batches for students & working professionals",
        ],
      },
    ],
  },

  why: {
    heading: "Why Choose Our [[R Programming Master Program]]?",
    intro: "Invest in your future with a program designed by industry leaders to ensure you are job-ready.",
    cards: [
      {
        icon: "code",
        title: "80:20 Practical Approach",
        description: "Our curriculum is structured with 80% practical application and 20% theory for industry-rich experience.",
      },
      {
        icon: "rocket",
        title: "Real-Time Projects",
        description: "Gain hands-on experience with real-world projects and case studies across diverse domains.",
      },
      {
        icon: "userCheck",
        title: "Expert Instructors",
        description: "Learn from seasoned data analysts and industry veterans with extensive expertise.",
      },
      {
        icon: "globe",
        title: "Global Certification",
        description: "Receive an internationally recognized certificate from CDPL with a unique authorization QR code.",
      },
      {
        icon: "briefcase",
        title: "Job Assistance",
        description: "Comprehensive career support including resume building, interview preparation, and placement drives.",
      },
      {
        icon: "message",
        title: "1:1 Doubt Solving",
        description: "Personalized 1:1 doubt-solving sessions ensure every concept is clearly understood.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Build a High-Demand Career with R Programming & Data Visualization",
        text: "Our R data visualization and analytics program is crafted to help you become a **job-ready data professional**. You'll learn how to clean, analyze, and visualize data using R, **ggplot2, dplyr, tidyverse**, and other industry-standard libraries. From exploratory data analysis to building insightful dashboards and BI-style reports, you'll gain practical skills that employers look for in **data analyst, business analyst, and data science roles**. The curriculum is aligned with real-world business use cases so you can confidently work on marketing, finance, operations, and product datasets.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "book",
            title: "Industry-Focused R Curriculum",
            description:
              "Covers core topics like data wrangling, statistical analysis, ggplot2 dashboards, and report automation using R for real business scenarios.",
          },
          {
            icon: "globe2",
            title: "High-Demand, Global R Skills",
            description:
              "R programming and visualization skills are in demand across **data science, analytics, research, and consulting roles** in India and abroad, giving you a strong competitive edge in the job market.",
          },
        ],
      },
    ],
    ctas: [{ label: "Apply Now", kind: "enroll" }],
  },

  curriculum: {
    heading: "Comprehensive Course [[Curriculum]]",
    intro:
      "Master the R Process Model: Foundations of R Programming, Data Preprocessing, Algorithm Implementation, Model Evaluation and Tuning, and Deployment and Practical Applications. This curriculum is designed to make you a proficient R Data Scientist.",
    modules: [
      {
        title: "Introduction to R and RStudio",
        topics: [
          "Understanding DBMS (Database Management System) fundamentals",
          "Introduction to RStudio Interface and environment setup",
          "Mastering R Objects: vectors, list, factors, matrix, arrays, and data frames",
        ],
      },
      {
        title: "Advanced Data Visualization in R with ggplot2",
        topics: [
          "Fundamentals of visualization without external libraries",
          "Creating elegant and informative plots using the powerful ggplot2 library",
          "Customizing visualizations for professional reporting",
        ],
      },
      {
        title: "Statistics, Data Handling, and Manipulation",
        topics: [
          "Core Statistical Concepts: Mean, Median, Mode, and Standard Deviation",
          "In-depth Quartile Analysis (1st, 2nd, 3rd Quartile) for data distribution",
          "Efficiently reading and importing data from CSV and Excel files",
        ],
      },
      {
        title: "Database Connectivity and SQL Integration",
        topics: [
          "Connecting R to databases: MySQL Interfaces",
          "Command Line Interface (CLI) basics for database interaction",
          "Using MySQL Workbench for GUI-based design and advanced queries",
        ],
      },
      {
        title: "Implementing Core Machine Learning Algorithms",
        topics: [
          "R Project 1: Building and evaluating Linear Regression models using lm()",
          "R Project 2: Implementing Logistic Regression for classification using glm()",
          "Model evaluation metrics and interpretation of results",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "What You'll Master in This R Data Visualization Course",
        items: [
          {
            icon: "barChart",
            title: "R for Data Analysis",
            description:
              "Use R programming to import, clean, transform, and analyze structured datasets for business and research use cases.",
          },
          {
            icon: "lineChart",
            title: "Statistical & Visual Insights",
            description:
              "Apply statistical techniques and create clear, insight-driven charts, graphs, and plots to communicate findings.",
          },
          {
            icon: "layoutDashboard",
            title: "Industry-Ready Dashboards",
            description:
              "Design professional, presentation-ready visualizations and dashboards in R that recruiters and stakeholders love.",
          },
        ],
      },
      {
        kind: "list",
        title: "What's Included in This R Machine Learning Course",
        items: [
          "20 hours of intensive live R programming & machine learning training",
          "Step-by-step guidance on supervised & unsupervised learning in R",
          "End-to-end real-time projects in classification, regression, and clustering",
          "Hands-on experience with RStudio, Tidyverse, ggplot2, and caret",
          "Practical exposure to data cleaning, feature engineering, and model tuning",
          "Coverage of key algorithms like Logistic Regression, Random Forest, XGBoost, and k-Means in R",
          "Lifetime access to recorded R & ML training sessions",
          "Downloadable notes, templates, and reusable R scripts for analytics",
          "Interview-oriented preparation for Data Analyst & ML Engineer roles",
          "Resume building, LinkedIn optimization & career mentoring",
          "Certificate of completion in R for Machine Learning & Data Science",
          "Access to a growing alumni network and lifetime email support",
        ],
      },
    ],
    outro:
      "By the end of this **Data Visualization in R Programming masterclass**, you will be able to confidently analyze data, build **R visualizations, dashboards, and reports**, and apply **R for real-world data science projects** in analytics, business intelligence, and decision-making roles.",
    ctas: [{ label: "Download Syllabus", kind: "syllabus" }],
  },

  tools: {
    heading: "Tools & Technologies You Will Master [[in R Programming]]",
    intro:
      "Become job-ready in **R programming, data visualization, business analytics** and **data science** by mastering industry-standard tools, IDEs, and libraries used by top **Data Analysts**, **Data Scientists** and **BI professionals** across the world.",
    items: [
      {
        name: "R Programming",
        logo: "/techstack_logos/r-logo.svg",
        description: "The primary language for statistical computing, data analysis, and graphics.",
      },
      {
        name: "RStudio",
        logo: "/techstack_logos/rstudio-logo.svg",
        description: "The powerful Integrated Development Environment (IDE) designed specifically for R.",
      },
      {
        name: "ggplot2",
        logo: "/techstack_logos/ggplot2-logo.svg",
        description: "A powerful R package for creating elegant, layered, and informative data visualizations.",
      },
      {
        name: "Caret",
        icon: "cpu",
        description: "A comprehensive package that streamlines the process of creating predictive models.",
      },
      {
        name: "MySQL",
        logo: "/techstack_logos/mysql-logo.svg",
        description: "Relational database management system for data storage, retrieval, and integration with R.",
      },
      {
        name: "lm() & glm()",
        icon: "package",
        description: "Built-in R functions for implementing core Machine Learning models: Linear and Logistic Regression.",
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "R Technology Stack Overview for Data Visualization & Analytics",
        items: [
          { icon: "code", title: "R Programming & Scripting for Data Science", points: ["Base R", "RStudio IDE", "tidyverse"] },
          { icon: "database", title: "Data Wrangling, Cleaning & Business Analytics", points: ["dplyr", "readr", "data.table"] },
          { icon: "barChart", title: "Data Visualization, Dashboards & BI Reporting", points: ["ggplot2", "Shiny", "plotly"] },
        ],
      },
      {
        kind: "steps",
        title: "Your Learning Journey with R for Data Visualization & BI",
        items: [
          {
            title: "R Programming Foundations",
            description: "Learn R syntax, data types, control structures and best practices for data science and analytics.",
          },
          {
            title: "Data Cleaning & Transformation",
            description:
              "Master data wrangling, preprocessing, and feature engineering using tidyverse, dplyr and powerful R packages.",
          },
          {
            title: "Data Visualization & Storytelling",
            description:
              "Build publication-ready charts, dashboards and reports with ggplot2, Shiny and interactive data visualization in R.",
          },
          {
            title: "Advanced Analytics & Business Insights",
            description:
              "Apply statistical analysis, forecasting and machine learning in R to solve real-world business and BI problems.",
          },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your 6-Step Career Roadmap to Becoming an [[R ML Engineer]]",
    intro: "A clear, structured path from enrollment to becoming a certified, job-ready Machine Learning Engineer.",
    steps: [
      {
        title: "You Enquired",
        icon: "userCheck",
        description: "Start your journey by requesting the detailed syllabus and a free consultation with our career advisors.",
      },
      {
        title: "You Enroll",
        icon: "graduationCap",
        description: "Secure your spot in the Master Program and gain access to all learning resources and the community.",
      },
      {
        title: "Extensive Training in R Tools & Technologies",
        icon: "zap",
        description: "Deep dive into R, RStudio, ggplot2, and core ML algorithms through live, interactive sessions.",
      },
      {
        title: "Projects and Assignments",
        icon: "briefcase",
        description:
          "Apply your knowledge to real-time, industry-relevant projects to solidify your skills and build your portfolio.",
      },
      {
        title: "Job Readiness",
        icon: "check",
        description: "Undergo resume building, profile optimization, and intensive interview preparation with industry experts.",
      },
      {
        title: "Become a Market-Ready Machine Learning Engineer",
        icon: "rocket",
        description:
          "Launch your career with job assistance, securing your dream role in the high-growth field of Data Science.",
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Keys to Rapid Growth in R, Data Visualization & ML",
        items: [
          {
            title: "Continuous Learning in R & ML",
            description:
              "Stay updated with the latest R packages, visualization libraries, and machine learning techniques used in real projects.",
          },
          {
            title: "Real-World Data Projects",
            description:
              "Build an impressive portfolio with end-to-end dashboards, EDA, and ML models using real business datasets.",
          },
          {
            title: "Networking & Mentorship",
            description:
              "Engage with trainers, peers, and industry experts to access hidden job opportunities in analytics and data science.",
          },
          {
            title: "Domain Specialization",
            description: "Develop expertise in domains like finance, healthcare, marketing, or operations using R-based analytics.",
          },
          {
            title: "Soft Skills & Storytelling",
            description:
              "Learn to present insights, tell compelling data stories, and influence business decisions with your visualizations.",
          },
          {
            title: "Certifications & Proof of Work",
            description:
              "Use your course certificate, GitHub projects, and dashboards to showcase your skills to recruiters and hiring managers.",
          },
        ],
      },
    ],
    ctas: [{ label: "Get Personalized Roadmap", kind: "careerSession" }],
  },

  projects: {
    heading: "Real-Time Industry Projects to [[Build Your Portfolio]]",
    intro:
      "Apply your **R programming, data visualization, and machine learning** skills to solve real-world **analytics and business intelligence** problems across diverse industries. Work on end-to-end **data science projects in R, predictive modeling, and dashboard development** using industry datasets.",
    items: [
      {
        icon: "heart",
        title: "Patient Outcome Prediction for a Clinic (Healthcare)",
        meta: "Domain: Healthcare & Medical Analytics",
        description:
          "Build a machine learning model to predict patient outcomes (e.g., recovery rates) based on clinical data. The goal is to improve treatment plans and resource allocation using R and the Caret package.",
        features: ["R", "Caret", "Data Preprocessing", "Domain Knowledge (Healthcare)", "Classification"],
      },
      {
        icon: "shoppingCart",
        title: "Customer Segmentation for E-commerce & Retail",
        meta: "Domain: E-commerce & Retail Analytics",
        description:
          "Using unsupervised learning techniques (e.g., K-Means), segment customers based on their purchase behavior, frequency, and basket size. This project helps in targeting personalized marketing campaigns and optimizing inventory.",
        features: ["R", "ggplot2", "Clustering", "Model Evaluation", "Domain Knowledge (Finance/Retail)"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Knowledge Coverage in R Projects",
        text: "Our **R programming and data visualization projects** cover multiple business domains so you can confidently work with **real-world datasets**, understand **domain-specific KPIs**, and build **insightful dashboards and predictive models**. This prepares you for roles in **Data Analyst, Business Analyst, BI Developer, and ML Engineer** across industries.",
      },
      {
        kind: "list",
        items: ["Aviation", "Healthcare", "BFSI", "Social Media", "Automobile", "Sales & Marketing", "Human Resources", "Supply Chain Management"],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "barChart",
            title: "Build a Strong Data Science Portfolio",
            description:
              "Create real-world R projects, dashboards, and case studies that you can showcase on LinkedIn, GitHub, and in data analyst interviews.",
          },
          {
            icon: "users",
            title: "Real-World, Industry-Focused Experience",
            description:
              "Work with realistic datasets from healthcare, BFSI, e-commerce, and more to solve business problems using R, statistics, and machine learning.",
          },
          {
            icon: "zap",
            title: "Master Data Visualization & ML in R",
            description:
              "Apply concepts like EDA, feature engineering, model evaluation, and storytelling dashboards to become job-ready in data analytics and BI roles.",
          },
        ],
      },
    ],
    ctas: [{ label: "Download Full Project List", kind: "syllabus" }],
  },

  testimonials: {
    heading: "Hear From Our [[Successful Graduates]]",
    intro: "Our students are achieving their career goals in Data Science and Machine Learning.",
  },

  career: {
    heading: "Launch Your Career in [[Data Science and Machine Learning]]",
    intro:
      "Unlock **high-demand data science, analytics, and machine learning careers** with industry-focused **R programming, statistics, and data visualization skills**. Prepare for job-ready roles such as Data Analyst, Business Analyst, and ML Engineer in top companies across India and abroad.",
    rolesTitle: "Job Roles",
    roles: [
      {
        title: "Machine Learning Engineer",
        salary: "8–16 LPA*",
        description:
          "Deploy scalable machine learning pipelines, optimize models, and work closely with data science teams to productionize R and Python solutions.",
      },
      {
        title: "Data Scientist",
        salary: "8–18 LPA*",
        description:
          "Build machine learning models, predictive analytics solutions, and advanced statistical models using R, Python, and modern data science tools.",
      },
      {
        title: "Business Intelligence Analyst",
        salary: "6–12 LPA*",
        description:
          "Translate complex data into actionable business insights, KPIs, and dashboards for leadership teams using R and BI tools.",
      },
      {
        title: "Data Analyst",
        salary: "5–10 LPA*",
        description:
          "Clean, visualize, and analyze large datasets using R, SQL, and Excel to uncover trends and drive strategic business decisions.",
      },
      {
        title: "Research Analyst",
        salary: "4–9 LPA*",
        description:
          "Use quantitative methods, R-based statistical analysis, and experimentation to generate research-driven insights for products or markets.",
      },
      {
        title: "Data Engineer",
        salary: "4–10 LPA+",
        description:
          "Leverage R programming, data visualization, and analytics to solve real business problems and support data-driven decision-making.",
      },
      { title: "AI/ML Associate", salary: "4–10 LPA+" },
      { title: "Decision Scientist", salary: "4–10 LPA+" },
      { title: "Quantitative Analyst", salary: "4–10 LPA+" },
      { title: "Statistical Analyst", salary: "4–10 LPA+" },
      { title: "Quantitative Researcher", salary: "4–9 LPA*" },
    ],
    companiesTitle: "Top Companies Hiring R Data Analysts & Data Scientists",
    companies: ["TCS", "Infosys", "Accenture", "Deloitte", "KPMG", "EY", "Cognizant", "Capgemini"],
    companiesNote:
      "This R Data Science & Machine Learning program prepares you for interviews at leading IT services, product companies, consulting firms, fintechs, and analytics startups.",
    extras: [
      {
        kind: "cards",
        title: "Career Growth, R Data Science Opportunities & Job Assistance",
        items: [
          {
            icon: "trendingUp",
            title: "Rapid Growth in Data Careers",
            description:
              "Data Science, Machine Learning, and Analytics roles using R and Python are among the fastest-growing tech careers, with strong salary hikes within 2–3 years of experience.",
          },
          {
            icon: "briefcase",
            title: "Multiple Career Tracks",
            description:
              "Move into specialized profiles like Data Scientist, ML Engineer, Business Intelligence Analyst, or Analytics Consultant in domains such as BFSI, Healthcare, Retail, and more.",
          },
          {
            icon: "users",
            title: "Global & Remote Opportunities",
            description:
              "Work with global product companies, startups, consulting firms, and analytics service providers offering hybrid and remote roles in R-based analytics and data science.",
          },
        ],
      },
      {
        kind: "steps",
        title: "Job Assistance & Placement Support",
        items: [
          { title: "Craft a Winning Portfolio", description: "Showcase your R projects and analytical skills." },
          { title: "Polish Your Resume", description: "Expert-led updates with the latest in-demand skills." },
          { title: "LinkedIn Profile Optimization", description: "Boost your professional visibility and network." },
          { title: "Expand Your Reach", description: "Profile updates on top job portals (Naukri, Indeed, Foundit)." },
          { title: "Interview Preparatory Sessions", description: "Intensive training right from Day 1." },
          { title: "Ace Your Interviews", description: "SWOT Analysis and personalized feedback from industry experts." },
        ],
      },
      {
        kind: "text",
        text: "Our dedicated **career services and R data science placement team** work closely with you from **resume building, profile optimization, mock interviews, to final HR and technical rounds**. You are guided to crack **Data Analyst, Data Scientist, and ML roles** in top organizations.",
      },
    ],
    outro: "*Salary ranges are indicative and vary based on skills, experience, location, and company.",
    ctas: [{ label: "Apply for Placement Assistance", kind: "enroll" }],
  },

  audience: {
    heading: "Who Should Enroll in This Program? [[for R Data Visualization]]",
    intro:
      "This program is tailored for individuals ready to specialize in Machine Learning and Data Visualization using R. Ideal for students, fresh graduates, working professionals, and career switchers who want to build job-ready skills in **R programming**, **data analytics**, **business intelligence (BI)**, and **data science**.",
    items: [
      {
        icon: "graduationCap",
        title: "Students & Fresh Graduates in Data and Analytics",
        description: "Learners with basic R or programming skills looking to specialize in ML.",
        points: [
          "Interest in data analytics, R programming, and business intelligence",
          "Basic understanding of maths or statistics (helpful but not mandatory)",
          "Willingness to build a strong portfolio with hands-on R projects",
        ],
      },
      {
        icon: "trendingUp",
        title: "Working Professionals & Upskilling Analysts",
        description: "Intermediate users seeking to formalize their knowledge in R-based machine learning.",
        points: [
          "Motivation to switch or grow into data analyst / data scientist roles",
          "Basic familiarity with spreadsheets, dashboards, or reporting tools",
          "Readiness to learn R for data visualization, forecasting, and BI",
        ],
      },
      {
        icon: "briefcase",
        title: "Career Changers from Non-Technical Backgrounds",
        description: "Students, researchers, and analysts aiming to master ML with R for academic or professional projects.",
        points: [
          "Domain expertise in fields like finance, marketing, HR, operations, or healthcare",
          "Curiosity about data-driven decision making and analytics",
          "Commitment to learning R, data visualization, and statistical modeling step-by-step",
        ],
      },
      {
        icon: "bot",
        title: "Engineers, Programmers & Tech Enthusiasts",
        description: "Professionals transitioning to high-demand data science or statistical roles.",
        points: [
          "Interest in machine learning, AI, and advanced analytics using R",
          "Comfort with basic programming concepts (variables, loops, logic)",
          "Desire to build end-to-end data science and visualization solutions in R",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Prerequisites & Requirements for R Data Visualization & Analytics",
        items: [
          {
            icon: "check",
            title: "Essential",
            points: [
              "Basic comfort with working on a computer and the internet",
              "Interest in data analytics, data visualization, and problem solving",
              "Laptop or desktop with R and RStudio (or ability to install them)",
            ],
          },
          {
            icon: "listChecks",
            title: "Recommended",
            points: [
              "Basic statistics knowledge (mean, median, variance, correlation)",
              "Familiarity with Excel, Google Sheets, or any spreadsheet tool",
              "Understanding of business metrics, KPIs, or reporting basics",
            ],
          },
          {
            icon: "sparkles",
            title: "Nice to Have",
            points: [
              "Prior exposure to any programming language (R, Python, SQL, etc.)",
              "Awareness of BI tools, dashboards, or data storytelling concepts",
              "Curiosity to explore machine learning, forecasting, and predictive models",
            ],
          },
        ],
      },
      {
        kind: "cards",
        title: "Keys to Success & Program Outcome",
        items: [
          {
            icon: "timer",
            title: "Consistent Hands-On Practice",
            description:
              "Dedicate regular time to coding in R, working with datasets, and building visualizations and dashboards.",
          },
          {
            icon: "handshake",
            title: "Active Doubt-Solving & Participation",
            description:
              "Engage in live sessions, ask questions, participate in discussions, and clarify every R and data concept.",
          },
          {
            icon: "target",
            title: "Real-World Project Focus",
            description:
              "Complete all capstone and case-study projects to build a strong data analytics and visualization portfolio in R.",
          },
          {
            icon: "book",
            title: "Continuous Learning & Industry Awareness",
            description:
              "Stay updated with the latest trends in data science, BI, and machine learning, and keep refining your R skills.",
          },
        ],
      },
      {
        kind: "text",
        title: "Your Program Outcome",
        text: "Upon completion, you will be proficient in using R to design, train, and deploy predictive machine learning models that tackle real-world challenges. Your expertise will drive impactful, data-driven decision-making across diverse domains.",
      },
    ],
    ctas: [{ label: "Download Detailed Syllabus (PDF)", kind: "syllabus" }],
  },

  faq: {
    heading: "R Programming Course [[Frequently Asked Questions]]",
    intro:
      "Find clear answers about our **Data Visualization in R Programming Master Program**, including syllabus, fees, certification, live online training, hands-on projects, and career opportunities in **data analytics** and **data science**.",
    items: R_DATA_VIS_FAQS,
    categories: ["Course Details", "Learning Format", "Prerequisites", "Certification", "Placement", "Curriculum"],
  },

  cta: {
    eyebrow: "Limited Time Offer • 20% OFF this month",
    heading: "Ready to Master [[R for Machine Learning]]?",
    intro:
      "Enroll now in our intensive **20-hour R Programming for Machine Learning Master Program** and accelerate your **data science career**. Learn **R for data analysis, predictive modeling, and AI-powered machine learning projects** with hands-on training designed for **students, working professionals, and career switchers** aiming for high-demand roles like **Data Analyst**, **Machine Learning Engineer**, and **Data Scientist**.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Free Syllabus", kind: "syllabus" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
    ],
    highlights: [
      {
        icon: "timer",
        title: "20-Hour Master Program",
        description: "Compact, high-impact R and machine learning training with live sessions.",
      },
      {
        icon: "barChart",
        title: "Hands-On ML Projects",
        description: "Build real-world predictive models in R using industry datasets.",
      },
      {
        icon: "target",
        title: "Career-Focused Syllabus",
        description: "Job-ready skills for data science, analytics, and AI-powered roles.",
      },
    ],
    footnotes: [{ icon: "mail", text: "contact@cinutedigital.com" }],
  },
};

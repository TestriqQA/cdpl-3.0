import type { CourseContent } from "@/types/course-page";
import { DATA_ANALYTICS_PYTHON_FAQS } from "@/data/courses/bi/faqs/data-analytics-python";

// Content for /courses/bi-courses/data-analytics-python, moved from the old
// src/components/data-analytics-python/* sections. Kept word for word except
// repeated filler (visible "Keywords:" lines, a third hero paragraph repeating
// keywords, the same "Active Hiring" tag on every company, a stale "20% OFF
// this month" promo).
export const dataAnalyticsPythonCourse: CourseContent = {
  slug: "data-analytics-python",
  courseName: "Advanced Data Analytics with Python",
  sourceName: "Data Analytics Python Course Page",

  seo: {
    title: "Data Analytics with Python Course in Mumbai | CDPL",
    description:
      "20-hour data analytics with Python course in Mumbai — pandas, NumPy, matplotlib, real projects & data-analyst job prep with placement assistance.",
    keywords: [
      "what is data analytics course",
      "what is data analyst course",
      "how to learn data analytics",
      "who can do data analyst course",
      "how to become a data analyst",
      "how to analyse data using python",
      "what is data analysis in python",
      "python data analysis course",
      "data analytics courses",
      "data analytics certification",
      "comprehensive data analytics courses",
      "data analyst course duration",
      "career in data analytics",
      "data analyst courses for beginners",
    ],
    image: "/og-images/courses-bi-courses-data-analytics-python-og.webp",
  },

  schema: {
    name: "Comprehensive Data Analytics Course with Python | 20-Hour Training Mumbai",
    description:
      "20-hour python data analysis course with hands-on projects, global certification, and job assistance. Learn how to become a data analyst in Mumbai/Thane.",
    duration: "P1M",
    howTo: {
      name: "How to Enroll in CDPL Data Analytics with Python Course",
      description: "A step-by-step guide to enrolling in our 20-hour Data Analytics with Python training program.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore Python, Pandas, NumPy, Matplotlib, Seaborn, and Plotly modules for data analytics.",
        },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master Python data analysis to secure Data Analyst, BI Analyst, or Data Scientist roles.",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Data Analytics with Python",
    badges: [
      { icon: "clock", text: "Duration: **20 Hours**" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
    ],
    h1: "[[Comprehensive Data Analytics Course]] with [[Python]] – 20 Hours to a Data Analyst Career",
    subtitle:
      "Wondering **what is data analytics course** and **how to become a data analyst**? Our **python data analysis course** in Mumbai/Thane transforms beginners into job-ready professionals. Learn **how to analyse data using python** with Pandas, NumPy, Matplotlib, Seaborn, and Plotly—all in just 20 intensive hours with **placement support**.",
    description:
      "Topics: **what is data analysis in python**, **data analytics subjects**, EDA & visualization, dashboard design, real-world projects, business intelligence, KPI tracking, reporting automation. Ideal for those asking **how to use python in data analysis**.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Data Analytics program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "barChart", title: "Real Projects" },
      { icon: "users", title: "Expert Trainers" },
      { icon: "graduationCap", title: "Certification" },
      { icon: "briefcase", title: "Job Ready" },
    ],
  },

  stats: {
    heading: "Why Choose Our [[Python Data Analytics Course]]?",
    intro:
      "Become a job-ready **Python Data Analyst** with an industry-vetted curriculum, **hands-on projects**, and **placement assistance**. Learn **Pandas, NumPy, Matplotlib**, SQL fundamentals, exploratory data analysis (EDA), and reporting skills recruiters actively search for.",
    items: [
      { value: "25%", label: "Market Growth", note: "Data analytics industry growth from 2020 to 2030" },
      { value: "101K+", label: "Job Vacancies", note: "Active openings for Python Data Analysts in India" },
      { value: "₹4 LPA", label: "Average Salary", note: "Typical fresher salary for Python Data Analyst roles" },
      { value: "75%", label: "Job Satisfaction", note: "Data professionals report high satisfaction rates" },
      { value: "32%", label: "Market Share", note: "India’s growing share in global analytics services" },
    ],
    extras: [
      {
        kind: "text",
        title: "The Data Revolution is Here - Build a High-Growth Career",
        text: "Companies across **finance**, **healthcare**, **retail**, **technology**, and **marketing** are hiring **Python Data Analysts** to transform raw data into business insights. Our **job-oriented training** bridges the gap between academics and industry demands with guided projects, interview prep, and portfolio support—so you can land **fresher data analyst jobs** in India with confidence.",
      },
      {
        kind: "list",
        items: [
          "**Career-ready skills:** Python, Pandas, NumPy, EDA, Visualization, Basic SQL",
          "**Portfolio projects** that showcase business impact and storytelling",
          "**Interview support**: resume review, mock interviews, and recruiter playbook",
          "**Flexible learning**: online or classroom, weekend and evening schedules",
        ],
      },
    ],
  },

  why: {
    heading: "Why Choose Our [[Data Analytics Course]] with Python?",
    intro:
      "At Cinute Digital, we answer the question **\"what to study to become a data analyst\"** with industry-aligned training. Our curriculum bridges theory with practical expertise, ensuring you learn **how to use python data analysis** for real business impact. Ideal for those asking **who can do data analyst course**.",
    cards: [
      {
        icon: "zap",
        title: "80:20 Approach",
        description: "80% practical hands-on training and 20% theory model for industry-rich experience",
      },
      {
        icon: "users",
        title: "1:1 Doubt Solving",
        description: "Personalized mentoring ensures every question is answered and every doubt is resolved",
      },
      {
        icon: "award",
        title: "Real-Time Projects",
        description: "Gain hands-on experience with real-world projects and case studies from industry",
      },
      {
        icon: "briefcase",
        title: "Expert Instructors",
        description: "Learn from seasoned data analysts and industry veterans with extensive experience",
      },
      {
        icon: "globe",
        title: "Global Certification",
        description: "Get internationally recognized certificates from AAA with unique QR code validation",
      },
      {
        icon: "clipboardCheck",
        title: "Career Support",
        description: "Receive comprehensive resume-building and interview preparation assistance",
      },
      {
        icon: "handshake",
        title: "Job Assistance",
        description: "Stay ahead with industry-relevant training and dedicated placement support",
      },
      {
        icon: "badgeCheck",
        title: "Industry-Led Training",
        description: "Benefit from over a decade of proven training excellence and student success",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Transform Your Career with Confidence",
        text: "Our unique blend of practical training, expert mentorship, and industry-aligned curriculum ensures you're not just learning Python libraries—you're becoming a market-ready data analyst. With our 80:20 approach, real-time projects, and personalized doubt-solving, you'll master **how to use python in data analysis** and gain the confidence needed for a successful **career in data analytics**.",
      },
      {
        kind: "list",
        items: [
          "**Industry-Aligned Curriculum** — Updated regularly with latest tools and trends",
          "**Proven Success Rate** — successful graduates placed in top companies",
        ],
      },
      {
        kind: "list",
        title: "What's Included",
        items: [
          "20 hours of intensive live training",
          "7 comprehensive modules with hands-on projects",
          "Real-time projects from industry domains",
          "1:1 doubt-solving sessions",
          "Lifetime access to recorded sessions",
          "International certification from AAA",
          "job placement assistance",
          "Resume building and interview prep",
          "Career coaching and mentoring",
          "Access to alumni network",
          "Free tools and resources",
          "Lifetime email support",
        ],
      },
    ],
  },

  curriculum: {
    heading: "Complete [[Data Analytics]] Curriculum – What to Study to Become a Data Analyst",
    intro:
      "Our 20-hour curriculum answers **what is data analyst course** with 7 comprehensive modules. Learn **how to become a data analyst** from scratch with hands-on training.",
    modules: [
      {
        title: "Python Fundamentals",
        duration: "2 hours",
        topics: [
          "Overview of Python Programming",
          "Basic Syntax, Variables, and Data Types",
          "Control Structures: Conditionals and Loops",
          "Functions, Modules, and Script Execution",
        ],
      },
      {
        title: "Introduction to Python Visualization & Environment Setup",
        duration: "1.5 hours",
        topics: [
          "Python for Visualization: An Overview",
          "Key Python Libraries for Data Visualization",
          "Installing Python and Setting Up Jupyter Notebook",
          "Environment Setup on Windows, macOS, and Linux",
        ],
      },
      {
        title: "Machine Learning Basics",
        duration: "2 hours",
        topics: [
          "What is Machine Learning and Why It Matters",
          "Supervised vs. Unsupervised Learning",
          "Demonstration of a Simple Classification Model (e.g., Logistic Regression)",
          "Overview of Basic Evaluation Metrics (Accuracy, ROC Curve)",
        ],
      },
      {
        title: "Data Analysis with pandas",
        duration: "3.5 hours",
        topics: [
          "Overview of pandas; DataFrames & Series",
          "Importing/Exporting Data (CSV, Excel, JSON) & Saving Cleaned Data",
          "Loading & Summarizing Datasets",
          "Handling Missing & Duplicate Data",
          "Filtering, Sorting, Ranking & Renaming Columns",
          "Data Type Conversion & Pivot Tables",
          "Merging, Joining & Concatenating DataFrames",
          "Grouping, Aggregating & Multi-Indexing",
          "Descriptive Statistics & Data Distribution Analysis",
          "Correlation & Covariance",
          "End-to-End Case Study: From Data Cleaning to Visualization",
          "Creating Dashboards from the Cancer Dataset",
        ],
        projects: [
          "Analyzing Patient Survival Rates in the Cancer Dataset",
          "Visualizing Cancer Incidence and Mortality Statistics",
        ],
      },
      {
        title: "Data Visualization with Matplotlib",
        duration: "3 hours",
        topics: [
          "Overview, Installation & Setup; Basic Plotting",
          "Titles, Axis Labels, Legends & Annotations",
          "Axis Limits & Date/Time Formatting",
          "Managing Multiple Plots & Subplots",
          "Advanced Visuals: Histograms, Box Plots, Heatmaps, 3D Plotting",
          "Text Annotation Techniques",
          "Direct DataFrame Visualizations (line, bar, pie)",
          "Interactive Plotting with Widgets (Sliders, Buttons)",
          "Creating Simple Animations",
          "Choosing the Right Plot & Simplifying Visuals",
          "Clear Labelling, Legends & Color Schemes",
          "Case Studies & Real-World Applications; End-to-End Visualization Projects",
        ],
        projects: ["HR Data Plotting", "Real-Time Data Monitoring with Animations"],
      },
      {
        title: "Advanced Visualization with Seaborn",
        duration: "2.5 hours",
        topics: [
          "Overview, Built-in Themes & Color Palettes; Statistical Visuals Support",
          "Basic Plotting: Line, Bar, Histogram, Scatter",
          "Distribution Visuals: Hist, KDE, Rug",
          "Variable Relationships: Pair & Joint Plots",
          "Categorical Displays: Strip, Box, Violin, Swarm, Bar",
          "Themes, Plot Styles & Aesthetic Adjustments",
          "Titles, Axis Labels, Legends & Figure Size",
          "Heatmaps, Cluster Maps & Hierarchical Clustering",
          "Multi-Plot Grids: Pair & Facet",
          "Integration with pandas: Direct DataFrame Viz, Aggregations & EDA",
          "Domain-specific case applications",
        ],
        projects: ["Titanic Survival Analysis", "Financial Dataset Visualization"],
      },
      {
        title: "Scientific Computing & Visualization with NumPy",
        duration: "2 hours",
        topics: [
          "Overview & Key Features; Installation and Setup",
          "NumPy Basics: Arithmetic & Mathematical Ops (sum, mean, etc.)",
          "Indexing, Slicing, and Subarrays",
          "Arrays vs. Python Lists; Creating 1D/2D/Multi-Dimensional Arrays",
          "Random Data Generation (np.random); Reshaping, Resizing, Broadcasting",
          "Mathematical Functions: exponents, logarithms; Linear Algebra (dot, matmul)",
          "Boolean & Fancy Indexing; Conditional Selection (np.where)",
          "Case Studies & Real-World Applications; End-to-End Visualization Projects",
        ],
        projects: [
          "Analyzing Patient Survival Rates in the Cancer Dataset",
          "Visualizing Cancer Incidence and Mortality Statistics",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "What You'll Master",
        items: [
          { icon: "database", title: "Data Processing", description: "Clean, transform, and prepare data for analysis" },
          {
            icon: "sigma",
            title: "Statistical Analysis",
            description: "Perform exploratory data analysis and statistical modeling",
          },
          {
            icon: "pieChart",
            title: "Data Visualization",
            description: "Create compelling visualizations and interactive dashboards",
          },
        ],
      },
    ],
    ctas: [
      { label: "Download Full Syllabus", kind: "syllabus" },
      { label: "Book a Career Session", kind: "careerSession" },
    ],
  },

  tools: {
    heading: "[[Tools]] You'll Master in This Python Data Analysis Course",
    intro:
      "Learn the exact tools used by top data analysts. Our **data analytics courses** cover everything you need to know about **how to use python in data analysis**.",
    items: [
      {
        name: "Python",
        logo: "/techstack_logos/python-logo.svg",
        description: "**Programming Language** — Core programming language for data analytics and scripting",
      },
      {
        name: "Pandas",
        logo: "/techstack_logos/pandas-logo.svg",
        description: "**Data Manipulation** — Powerful library for data cleaning and transformation",
      },
      {
        name: "NumPy",
        logo: "/techstack_logos/numpy-logo.svg",
        description: "**Scientific Computing** — Numerical computing library for array operations",
      },
      {
        name: "Matplotlib",
        logo: "/techstack_logos/matplotlib-logo.svg",
        description: "**Data Visualization** — Comprehensive plotting and visualization library",
      },
      {
        name: "Seaborn",
        logo: "/techstack_logos/seaborn-logo.png",
        description: "**Statistical Visualization** — Statistical data visualization built on Matplotlib",
      },
      {
        name: "Jupyter Notebook",
        logo: "/techstack_logos/jupyter-logo.svg",
        description: "**Development Environment** — Interactive computing environment for coding and visualization",
      },
      {
        name: "Scikit-learn",
        logo: "/techstack_logos/scikit-learn-logo.svg",
        description: "**Machine Learning** — Machine learning library for modeling and prediction",
      },
      {
        name: "SciPy",
        logo: "/techstack_logos/scipy-logo.svg",
        description: "**Scientific Computing** — Advanced scientific and statistical computing library",
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Technology Stack Overview",
        items: [
          { icon: "code", title: "Programming & Scripting", points: ["Python"] },
          { icon: "database", title: "Data Processing", points: ["Pandas", "NumPy", "SciPy"] },
          { icon: "barChart", title: "Visualization & Analytics", points: ["Matplotlib", "Seaborn", "Plotly"] },
        ],
      },
      {
        kind: "steps",
        title: "Your Learning Journey",
        items: [
          { title: "Python Basics", description: "Master Python fundamentals and syntax" },
          { title: "Data Processing", description: "Learn Pandas and NumPy for data manipulation" },
          { title: "Visualization", description: "Create stunning visuals with Matplotlib & Seaborn" },
          { title: "Advanced Analytics", description: "Apply ML and statistical analysis techniques" },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your [[Career Roadmap]]",
    intro:
      "Follow a structured path to career advancement in data analytics. From junior analyst to industry leader, we'll guide you every step of the way.",
    steps: [
      {
        title: "Foundation Builder",
        badge: "Phase 1",
        duration: "0-6 Months",
        icon: "target",
        description: "Expected Salary: **4-5 LPA**",
        points: [
          "**Skills to Develop:** Python Programming, Data Cleaning, Basic EDA, SQL Basics",
          "**Target Roles:** Junior Data Analyst, Data Associate, Analytics Intern",
        ],
      },
      {
        title: "Skill Accelerator",
        badge: "Phase 2",
        duration: "6-12 Months",
        icon: "trendingUp",
        description: "Expected Salary: **5-6.5 LPA**",
        points: [
          "**Skills to Develop:** Advanced Pandas, Data Visualization, Statistical Analysis, Dashboard Creation",
          "**Target Roles:** Data Analyst, BI Analyst, Analytics Specialist",
        ],
      },
      {
        title: "Expert Practitioner",
        badge: "Phase 3",
        duration: "1-2 Years",
        icon: "award",
        description: "Expected Salary: **6.5-9 LPA**",
        points: [
          "**Skills to Develop:** Machine Learning, Advanced Analytics, Data Engineering Basics, Leadership Skills",
          "**Target Roles:** Senior Data Analyst, Data Scientist, Analytics Manager",
        ],
      },
      {
        title: "Industry Leader",
        badge: "Phase 4",
        duration: "2+ Years",
        icon: "briefcase",
        description: "Expected Salary: **10-15+ LPA**",
        points: [
          "**Skills to Develop:** Advanced ML/AI, Big Data Technologies, Strategic Analytics, Team Leadership",
          "**Target Roles:** Lead Data Scientist, Analytics Director, Chief Data Officer",
        ],
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Keys to Rapid Career Growth",
        items: [
          { title: "Continuous Learning", description: "Stay updated with latest tools, techniques, and industry trends" },
          { title: "Real-World Projects", description: "Build impressive portfolio with hands-on projects and case studies" },
          { title: "Networking", description: "Connect with industry professionals and expand your professional network" },
          { title: "Specialization", description: "Develop expertise in specific domains or advanced analytics areas" },
          { title: "Leadership Skills", description: "Develop soft skills and leadership capabilities for management roles" },
          { title: "Certifications", description: "Pursue advanced certifications to validate expertise and increase value" },
        ],
      },
    ],
  },

  projects: {
    heading: "Build Your [[Portfolio]] with Real Data Analytics Projects",
    intro:
      "Don't just learn **what is data analytics course** theory. Build real projects that showcase **how to analyse data using python** for actual business scenarios.",
    items: [
      {
        icon: "zap",
        title: "User Engagement Analysis for a Tech Startup App",
        meta: "Domain: Technology",
        description:
          "Analyze user engagement data (session duration, feature usage, retention rates) for a tech startup's mobile app. Create visualizations and dashboards to identify user behavior trends and improve app features.",
        tags: ["Data Analytics", "Pandas", "Matplotlib", "Plotly", "Domain Knowledge"],
      },
      {
        icon: "trendingUp",
        title: "Audience Engagement Analysis for a Digital Media Platform",
        meta: "Domain: Energy",
        description:
          "Analyze historical energy consumption data to forecast future demand for a utility company. Use statistical models and visualizations to support energy planning and sustainability initiatives.",
        tags: ["Data Analytics", "Pandas", "SciPy", "Seaborn", "Domain Knowledge"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Knowledge Coverage",
        text: "Our projects span across multiple industries, ensuring you gain exposure to diverse business domains and real-world analytics challenges.",
      },
      {
        kind: "list",
        items: [
          "Aviation",
          "Healthcare",
          "Telecommunication",
          "BFSI",
          "Social Media",
          "Automobile",
          "Sales & Marketing",
          "Human Resources",
          "Supply Chain",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "barChart",
            title: "Portfolio Building",
            description: "Create impressive projects for your portfolio to showcase to potential employers",
          },
          {
            icon: "users",
            title: "Real-World Experience",
            description: "Work with actual datasets and solve problems faced by industry professionals",
          },
          {
            icon: "zap",
            title: "Skill Mastery",
            description: "Apply theoretical knowledge to practical scenarios and master data analytics tools",
          },
        ],
      },
    ],
  },

  testimonials: {
    heading: "Success [[Stories]] from Our Data Analytics Course",
    intro:
      "Hear from students who completed our **comprehensive data analytics courses** and landed top roles at leading companies.",
    extras: [
      {
        kind: "cards",
        title: "Why Students Trust Us",
        items: [
          {
            icon: "graduationCap",
            title: "Industry-Recognized Certification",
            description: "Get certified by AAA with international recognition",
          },
          {
            icon: "users",
            title: "Expert Mentors",
            description: "Learn from professionals with extensive industry experience",
          },
          {
            icon: "briefcase",
            title: "Job Placement Support",
            description: "job assistance and placement support from our dedicated team",
          },
          {
            icon: "trendingUp",
            title: "Career Growth",
            description: "Average salary increase of 40-50% post-course completion",
          },
        ],
      },
    ],
  },

  career: {
    heading: "Your [[Career Path]] in Data Analytics",
    intro:
      "Explore diverse **career in data analytics** opportunities. Our **python data analysis course** prepares you for roles across multiple industries. Perfect for those asking **how to become a data analyst**.",
    rolesTitle: "Job Roles & Expected Salary",
    roles: [
      {
        title: "Data Analyst",
        description: "Analyze business data to identify trends and support decision-making",
        salary: "4-6 LPA",
      },
      {
        title: "Business Intelligence Analyst",
        description: "Create dashboards and reports for business insights and strategy",
        salary: "5-7 LPA",
      },
      { title: "Data Scientist", description: "Build predictive models and machine learning solutions", salary: "6-10 LPA" },
      { title: "Research Analyst", description: "Conduct data research and analysis for market insights", salary: "4-6 LPA" },
      { title: "Operations Analyst", description: "Optimize business operations using data analytics", salary: "4-6 LPA" },
      { title: "Supply Chain Analyst", description: "Analyze supply chain data to improve efficiency", salary: "5-7 LPA" },
      {
        title: "Financial Analyst",
        description: "Analyze financial data for investment and risk assessment",
        salary: "6-9 LPA",
      },
      {
        title: "Marketing Analyst",
        description: "Analyze customer and campaign data to drive marketing strategies",
        salary: "4-7 LPA",
      },
      { title: "HR Analyst", description: "Use data analytics to optimize human resources management", salary: "4-6 LPA" },
    ],
    companiesTitle: "Top Companies Hiring Python Data Analysts",
    companies: ["Google", "Microsoft", "Amazon", "IBM", "TCS", "Infosys", "Accenture", "Deloitte"],
    extras: [
      {
        kind: "cards",
        title: "Career Growth & Opportunities",
        items: [
          {
            icon: "trendingUp",
            title: "Rapid Career Growth",
            description: "Data professionals see 40-50% salary growth within 2-3 years of experience",
          },
          {
            icon: "briefcase",
            title: "Multiple Career Paths",
            description: "Transition into specialized roles like Data Science, BI, or Analytics Engineering",
          },
          {
            icon: "globe",
            title: "Global Opportunities",
            description: "Work with top companies globally with remote and on-site positions",
          },
        ],
      },
    ],
    ctas: [
      { label: "Get Placement Assistance", kind: "careerSession" },
      { label: "Download Placement Report", kind: "syllabus" },
    ],
  },

  audience: {
    heading: "Who Should [[Enroll]]? – Data Analyst Course Eligibility",
    intro:
      "Wondering **who can do data analyst course**? This course is designed for diverse learners asking **what to learn to become data analyst**. Whether you're a beginner or a professional seeking to advance your skills, we have the right program for you.",
    items: [
      {
        icon: "target",
        title: "Beginners with Basic Python",
        description:
          "If you're asking **how to become a data analyst**, this **data analyst courses for beginners** is perfect. Learn **what is data analysis in python** from scratch.",
        points: [
          "Basic understanding of Python variables and loops",
          "Familiarity with fundamental programming concepts",
          "Willingness to learn and practice regularly",
        ],
      },
      {
        icon: "trendingUp",
        title: "Intermediate Users",
        description:
          "Enhance your **python data analysis course** expertise with advanced techniques. Master **how to use python data analysis** for complex scenarios.",
        points: [
          "Intermediate Python programming skills",
          "Basic understanding of data structures",
          "Experience with simple data manipulation",
        ],
      },
      {
        icon: "briefcase",
        title: "Professionals Seeking Career Change",
        description:
          "From finance, healthcare, retail, or marketing—learn **what skills are required for data analyst** roles and transition into a **career in data analytics**.",
        points: [
          "Basic Python knowledge (recommended)",
          "Domain expertise in your industry",
          "Motivation to learn new technical skills",
        ],
      },
      {
        icon: "graduationCap",
        title: "Students & Graduates",
        description:
          "Recent graduates or students looking to build practical skills. Answer **what to study to become a data analyst** with hands-on projects and **data analytics certification**.",
        points: [
          "Basic Python knowledge or willingness to learn",
          "Strong analytical thinking",
          "Commitment to hands-on learning",
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
              "Basic Python knowledge (variables, loops, functions)",
              "Familiarity with data concepts (datasets, tables)",
              "Computer with Python installed",
            ],
          },
          {
            icon: "listChecks",
            title: "Recommended",
            points: ["Basic statistics knowledge", "Experience with spreadsheets (Excel)", "Understanding of basic SQL"],
          },
          {
            icon: "sparkles",
            title: "Nice to Have",
            points: [
              "Previous experience with data analysis tools",
              "Familiarity with visualization concepts",
              "Experience with Jupyter Notebook",
            ],
          },
        ],
      },
      {
        kind: "cards",
        title: "Keys to Success",
        items: [
          { icon: "timer", title: "Regular Practice", description: "Dedicate time daily to hands-on coding and projects" },
          { icon: "handshake", title: "Active Participation", description: "Engage in doubt-solving sessions and ask questions" },
          { icon: "target", title: "Project Focus", description: "Complete all real-world projects to build your portfolio" },
          { icon: "book", title: "Continuous Learning", description: "Stay updated with latest tools and industry trends" },
        ],
      },
    ],
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    heading: "Frequently Asked Questions About [[Data Analytics Course]]",
    intro: "Find answers to common questions about our course, enrollment, and career opportunities.",
    items: DATA_ANALYTICS_PYTHON_FAQS,
    categories: ["General", "Course Content", "Career", "Enrollment", "Certification"],
  },

  cta: {
    heading: "Ready to Transform Your [[Data Career]]?",
    intro:
      "Join successful graduates who have mastered **python data analysis course** and secured high-paying jobs. Start your **career in data analytics** today—learn **how to become a data analyst** in just 20 hours with our **comprehensive data analytics courses** in Mumbai/Thane.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Schedule Free Demo", kind: "careerSession" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email contact@cinutedigital.com" },
    ],
    highlights: [
      { icon: "timer", title: "20 Hours", description: "Intensive, focused training" },
      { icon: "briefcase", title: "Job Assistance", description: "Placement support included" },
      { icon: "graduationCap", title: "Global Certification", description: "Internationally recognized" },
    ],
  },
};

// src/data/content.ts
import { ContentData } from '@/components/data-visualization-in-r-programming/types/index';

// SEO-optimized keywords for the course
const SEO_KEYWORDS = "Machine Learning with R, Data Visualization R, R Programming Course, Data Science R, ML Algorithms R, RStudio, ggplot2, Career in Data Science, Data Analyst Training, Predictive Modeling R";

// Enhanced and SEO-optimized content based on the extracted data
export const content: ContentData = {
  course_title: "Machine Learning and Data Visualization using R Programming",
  seo_description: "Master Machine Learning algorithms and advanced Data Visualization using R Programming. Our 20-hour Master Program offers 80% practical training, real-time projects, and job assistance for a high-growth career in Data Science.",
  seo_keywords: SEO_KEYWORDS,
  
  hero_section: {
    tagline: "Master the Art of Predictive Modeling and Insightful Visualization with R",
    description: "Transform raw data into powerful, insight-driven visualizations and deploy robust Machine Learning models. Learn from industry experts and master R libraries for data science, statistical analysis, and interactive dashboards in this intensive 20-hour Master Program.",
    duration: "20 Hours Master Program",
    key_features: [
      { icon: "Code", title: "80% Practical Approach", description: "Hands-on training with real-world datasets and industry case studies." },
      { icon: "Rocket", title: "Real-Time Projects", description: "Build a job-ready portfolio with projects across diverse domains." },
      { icon: "UserCheck", title: "Expert Instructors", description: "Learn from seasoned data scientists and industry veterans." },
      { icon: "Globe", title: "Global Certification", description: "Internationally recognized certificate with unique QR validation." }
    ]
  },
  
  stats_section: {
    stats: [
      { value: "25%", label: "Market Growth (2020-2030)" },
      { value: "101,000+", label: "Job Vacancies in India" },
      { value: "4 LPA", label: "ML Engineer Fresher Avg. Salary" },
      { value: "75%", label: "Job Satisfaction" },
      { value: "32%", label: "India's Share in Global Market" }
    ],
    web_stats_reference: [
      { value: "4.8/5", label: "Average Rating" },
      { value: "500+", label: "Successful Graduates" },
      { value: "14+ Years", label: "Industry Experience" }
    ]
  },
  
  why_enroll_section: {
    title: "Why Choose Our R Programming Master Program?",
    points: [
      { icon: "Code", title: "80:20 Practical Approach", description: "Our curriculum is structured with 80% practical application and 20% theory for industry-rich experience." },
      { icon: "Rocket", title: "Real-Time Projects", description: "Gain hands-on experience with real-world projects and case studies across diverse domains." },
      { icon: "UserCheck", title: "Expert Instructors", description: "Learn from seasoned data analysts and industry veterans with extensive expertise." },
      { icon: "Globe", title: "Global Certification", description: "Receive an internationally recognized certificate from CDPL with a unique authorization QR code." },
      { icon: "Briefcase", title: "Job Assistance", description: "Comprehensive career support including resume building, interview preparation, and placement drives." },
      { icon: "MessageSquare", title: "1:1 Doubt Solving", description: "Personalized 1:1 doubt-solving sessions ensure every concept is clearly understood." }
    ]
  },
  
  curriculum_section: {
    title: "Comprehensive Course Curriculum",
    description: "Master the R Process Model: Foundations of R Programming, Data Preprocessing, Algorithm Implementation, Model Evaluation and Tuning, and Deployment and Practical Applications. This curriculum is designed to make you a proficient R Data Scientist.",
    modules: [
      {
        title: "Module 1: Introduction to R and RStudio",
        topics: [
          "Understanding DBMS (Database Management System) fundamentals",
          "Introduction to RStudio Interface and environment setup",
          "Mastering R Objects: vectors, list, factors, matrix, arrays, and data frames"
        ]
      },
      {
        title: "Module 2: Advanced Data Visualization in R with ggplot2",
        topics: [
          "Fundamentals of visualization without external libraries",
          "Creating elegant and informative plots using the powerful **ggplot2** library",
          "Customizing visualizations for professional reporting"
        ]
      },
      {
        title: "Module 3: Statistics, Data Handling, and Manipulation",
        topics: [
          "Core Statistical Concepts: Mean, Median, Mode, and Standard Deviation",
          "In-depth Quartile Analysis (1st, 2nd, 3rd Quartile) for data distribution",
          "Efficiently reading and importing data from CSV and Excel files"
        ]
      },
      {
        title: "Module 4: Database Connectivity and SQL Integration",
        topics: [
          "Connecting R to databases: MySQL Interfaces",
          "Command Line Interface (CLI) basics for database interaction",
          "Using MySQL Workbench for GUI-based design and advanced queries"
        ]
      },
      {
        title: "Module 5: Implementing Core Machine Learning Algorithms",
        topics: [
          "R Project 1: Building and evaluating **Linear Regression** models using **lm()**",
          "R Project 2: Implementing **Logistic Regression** for classification using **glm()**",
          "Model evaluation metrics and interpretation of results"
        ]
      }
    ]
  },
  
  projects_section: {
    title: "Real-Time Industry Projects to Build Your Portfolio",
    domains: [
      "Aviation", "Healthcare", "BFSI", "Social Media", "Automobile", "Sales & Marketing", "Human Resources", "Supply Chain Management"
    ],
    project_examples: [
      {
        title: "Patient Outcome Prediction for a Clinic (Healthcare)",
        description: "Build a machine learning model to predict patient outcomes (e.g., recovery rates) based on clinical data. The goal is to improve treatment plans and resource allocation using R and the Caret package.",
        skills: ["R", "Caret", "Data Preprocessing", "Domain Knowledge (Healthcare)", "Classification"]
      },
      {
        title: "Customer Segmentation for E-commerce & Retail",
        description: "Using unsupervised learning techniques (e.g., K-Means), segment customers based on their purchase behavior, frequency, and basket size. This project helps in targeting personalized marketing campaigns and optimizing inventory.",
        skills: ["R", "ggplot2", "Clustering", "Model Evaluation", "Domain Knowledge (Finance/Retail)"]
      }
    ]
  },
  
  tools_section: {
    title: "Tools & Technologies You Will Master",
    tools: [
      { name: "R Programming", category: "Core Language", description: "The primary language for statistical computing, data analysis, and graphics." },
      { name: "RStudio", category: "IDE", description: "The powerful Integrated Development Environment (IDE) designed specifically for R." },
      { name: "ggplot2", category: "Visualization", description: "A powerful R package for creating elegant, layered, and informative data visualizations." },
      { name: "Caret", category: "Machine Learning", description: "A comprehensive package that streamlines the process of creating predictive models." },
      { name: "MySQL", category: "Database", description: "Relational database management system for data storage, retrieval, and integration with R." },
      { name: "lm() & glm()", category: "Algorithms", description: "Built-in R functions for implementing core Machine Learning models: Linear and Logistic Regression." }
    ]
  },
  
  career_section: {
    title: "Launch Your Career in Data Science and Machine Learning",
    job_roles: [
      "Machine Learning Engineer", "Data Scientist", "Business Intelligence Analyst",
      "Data Analyst", "Research Analyst", "Data Engineer",
      "AI/ML Associate", "Decision Scientist", "Quantitative Analyst",
      "Statistical Analyst", "Quantitative Researcher"
    ],
    hiring_companies_placeholder: "Top Companies Hiring Machine Learning Engineers (Logos/Names to be added)",
    placement_support: [
      "Craft a Winning Portfolio: Showcase your R projects and analytical skills.",
      "Polish Your Resume: Expert-led updates with the latest in-demand skills.",
      "LinkedIn Profile Optimization: Boost your professional visibility and network.",
      "Expand Your Reach: Profile updates on top job portals (Naukri, Indeed, Foundit).",
      "Interview Preparatory Sessions: Intensive training right from Day 1.",
      "Ace Your Interviews: SWOT Analysis and personalized feedback from industry experts."
    ]
  },
  
  who_should_enroll_section: {
    title: "Who Should Enroll in This Program?",
    target_audience: [
      "Learners with basic R or programming skills looking to specialize in ML.",
      "Intermediate users seeking to formalize their knowledge in R-based machine learning.",
      "Students, researchers, and analysts aiming to master ML with R for academic or professional projects.",
      "Professionals transitioning to high-demand data science or statistical roles."
    ],
    outcome: "Upon completion, you will be proficient in using R to design, train, and deploy predictive machine learning models that tackle real-world challenges. Your expertise will drive impactful, data-driven decision-making across diverse domains."
  },
  
  faq_section: {
    questions: [
      { q: "What is the duration of the course?", a: "The Machine Learning and Data Visualization using R Programming Master Program is a 20-hour intensive training." },
      { q: "What is the mode of learning?", a: "We offer a Hybrid (CLASSROOM + ONLINE) training pattern. Students can attend live sessions in the classroom or online, and live recording sessions are also provided for flexibility." },
      { q: "Do I need prior programming experience?", a: "The course is ideal for learners with basic R or general programming skills. We build on these fundamentals to teach advanced ML concepts." },
      { q: "What certification will I receive?", a: "You will receive an internationally recognized certificate from Cinute Digital with a unique authorization QR code for validation." },
      { q: "Is job placement assistance provided?", a: "Yes, we provide Job Assistance, which includes comprehensive career support like resume building, interview preparation, and access to placement drives." },
      { q: "What are the key R packages covered?", a: "The course focuses on core R, RStudio, ggplot2 for visualization, and the Caret package for machine learning, along with built-in functions like lm() and glm()." }
    ]
  },
  
  career_roadmap_section: {
    title: "Your 6-Step Career Roadmap to Becoming an R ML Engineer",
    steps: [
      { step: 1, title: "You Enquired", description: "Start your journey by requesting the detailed syllabus and a free consultation with our career advisors." },
      { step: 2, title: "You Enroll", description: "Secure your spot in the Master Program and gain access to all learning resources and the community." },
      { step: 3, title: "Extensive Training in R Tools & Technologies", description: "Deep dive into R, RStudio, ggplot2, and core ML algorithms through live, interactive sessions." },
      { step: 4, title: "Projects and Assignments", description: "Apply your knowledge to real-time, industry-relevant projects to solidify your skills and build your portfolio." },
      { step: 5, title: "Job Readiness", description: "Undergo resume building, profile optimization, and intensive interview preparation with industry experts." },
      { step: 6, title: "Become a Market-Ready Machine Learning Engineer", description: "Launch your career with job assistance, securing your dream role in the high-growth field of Data Science." }
    ]
  }
};

// Data Science & Machine Learning category hub (/courses/ds-ml-courses),
// rendered by src/components/category-hub/CategoryHubPage.tsx. Moved from the
// old src/components/DS&ML-Courses/* sections and their data files.
//
// Cleanup on the move: the hero's "Sub-Courses" link list (the course grid and
// the learning path link every course), the stat strip repeated in the career
// section, per-card buttons that only opened the enrol modal, the FAQ "Still
// have questions?" box, the closing consultation form (the hero already has the
// lead form) and a "Limited Time: 20% Discount" promo. Course links point at
// the canonical /courses/... paths instead of the old flat URLs, which only
// reached the pages through a 301.

import type { CategoryHubContent } from "@/types/categoryHub";
import type { CourseCardIcon } from "@/components/courses/CourseCard";
import { COURSES, type CourseSlug } from "@/data/courses/registry";

const href = (slug: CourseSlug) => COURSES[slug].href;

type RawCourse = {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  popular: boolean;
  link: string;
  titleAttribute: string;
  icon: CourseCardIcon;
  features: string[];
  syllabusLink: string;
};

const RAW_COURSES: RawCourse[] = [
  {
    title: "Machine Learning and Data Science with Python - Hero Program",
    description:
      "Master Machine Learning & Data Science with Python in our Hero Program! Hands-on projects, expert mentorship & job-ready skills. Enroll now & launch your tech career!",
    duration: "95 Hours",
    students: "2,200+",
    level: "Beginner",
    popular: true,
    link: href("machine-learning-course"),
    titleAttribute: "Machine Learning and Data Science with Python - Hero Program Overview",
    icon: "TrendingUp",
    features: ["Machine Learning Python", "Data Science Hero", "Python ML Program", "MLOps & Production-Ready ML Systems"],
    syllabusLink: "https://www.cinutedigital.com/downloads/machine-learning-and-data-science-with-python-hero-program.pdf",
  },
  {
    title: "Deep Learning, NLP and Generative AI",
    description:
      "Dive into Deep Learning, NLP & Generative AI! Master neural networks, text processing & AI creation with hands-on projects. Enroll now & lead the AI revolution!",
    duration: "55 Hours",
    students: "2,217+",
    level: "Beginner",
    popular: true,
    link: href("generative-ai-course"),
    titleAttribute: "Deep Learning, NLP and Generative AI Course Overview",
    icon: "TrendingUp",
    features: ["Deep Learning Basics", "NLP Mastery Course", "Clustering", "Generative AI Skills"],
    syllabusLink: "https://www.cinutedigital.com/downloads/deep-learning-nlp-and-generativeai.pdf",
  },
  {
    title: "Advanced Data Science and Machine Learning Masterclass",
    description:
      "Elevate your career with Advanced Data Science & Machine Learning Masterclass! Deep-dive into algorithms, big data & AI. Expert-led, project-based. Enroll today!",
    duration: "200 Hours",
    students: "2,234+",
    level: "Beginner",
    popular: false,
    link: href("data-science-course"),
    titleAttribute: "Advanced Data Science and Machine Learning Masterclass Overview",
    icon: "TrendingUp",
    features: ["Advanced Data Science", "Machine Learning Masterclass", "AI Algorithms Pro", "Generative AI & LLM Engineering in Practice"],
    syllabusLink: "https://www.cinutedigital.com/downloads/advanced-data-science-and-machine-learning-masterclass.pdf",
  },
  {
    title: "Comprehensive Data Science and AI - Master Program",
    description:
      "Unlock expertise in Comprehensive Data Science & AI Master Program! From ML to deep learning, big data & ethics. Hands-on, industry-aligned. Enroll now & shape the future!",
    duration: "255 Hours",
    students: "2,251+",
    level: "Beginner",
    popular: true,
    link: href("ai-course"),
    titleAttribute: "Comprehensive Data Science and AI Master Program Overview",
    icon: "TrendingUp",
    features: ["Data Science Mastery", "AI Master Program", "Comprehensive ML AI"],
    syllabusLink: "https://www.cinutedigital.com/downloads/comprehensive-data-science-and-ai-master-program.pdf",
  },
  {
    title: "Machine Learning Algorithms using Python Programming",
    description:
      "Master Machine Learning Algorithms using Python Programming! Implement regression, classification, clustering & more with scikit-learn. Hands-on code, real projects. Enroll now!",
    duration: "45 Hours",
    students: "2,285+",
    level: "Beginner",
    popular: true,
    link: href("machine-learning-using-python"),
    titleAttribute: "Machine Learning Algorithms using Python Programming Overview",
    icon: "TrendingUp",
    features: ["ML Algorithms Python", "Python ML Coding", "Scikit-Learn Mastery"],
    syllabusLink: "https://www.cinutedigital.com/downloads/machine-learning-algorithms-using-python-programming.pdf",
  },
  {
    title: "Machine Learning and Data Visualization using R Programming",
    description:
      "Master Machine Learning & Data Visualization using R Programming! Explore ggplot2, tidyverse, ML models & interactive dashboards. Hands-on projects. Enroll now & excel in data!",
    duration: "20 Hours",
    students: "2,302+",
    level: "Beginner",
    popular: true,
    link: href("data-visualization-in-r-programming"),
    titleAttribute: "Machine Learning and Data Visualization using R Programming Overview",
    icon: "TrendingUp",
    features: ["R ML Visualization", "Data Viz R", "R Programming ML"],
    syllabusLink: "https://www.cinutedigital.com/downloads/machine-learning-and-data-visualization-using-r-programming.pdf",
  },
  // Lives under the Software Testing hub; listed here as the prerequisite.
  {
    title: "Python Programming",
    description:
      "Master Python Programming from absolute basics all the way to advanced and professional-level concepts! Dive deep into Python syntax, data structures, object-oriented programming, functional programming, automation scripting, and real-world problem-solving through engaging, hands-on projects that reinforce every concept.",
    duration: "30 Hours",
    students: "2,268+",
    level: "Beginner",
    popular: true,
    link: href("python-course"),
    titleAttribute: "Python Programming Course Overview",
    icon: "TrendingUp",
    features: ["Python Basics Guide", "Advanced Python Coding", "Learn Python Fast", "Real-World Python Projects & Automation Mastery"],
    syllabusLink: "https://www.cinutedigital.com/downloads/python-programming.pdf",
  },
];

export const dsMlHub: CategoryHubContent = {
  category: "ds-ml",
  sourceName: "Data Science & Machine Learning Course Category Page",

  seo: {
    // Final <title>: "Data Science & Machine Learning Courses | CDPL".
    title: "Data Science & Machine Learning Courses",
    description:
      "Master Data Science and Machine Learning with our comprehensive courses. Learn Python, R, SQL, and AI with hands-on projects and placement support.",
    keywords: ["data science course", "machine learning training", "python for data science", "AI course", "data analytics"],
    image: "/og-images/courses-ds-ml-courses-og.webp",
  },

  hero: {
    breadcrumb: "Data Science",
    badges: [
      { icon: "sparkles", text: "India's comprehensive Data Science Training Institute" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "Industry-Led Expert Mentors" },
    ],
    h1: "[[Data Science & Machine Learning]] Courses at CDPL",
    subtitle:
      "Industry-focused training in Data Science and Machine Learning with hands-on projects using Python, Pandas, NumPy, scikit-learn, TensorFlow, and PyTorch. Learn SQL, data visualization with Tableau and Power BI, model evaluation, model deployment, and MLOps practices. Build a portfolio of real data projects and get placement support for Data Scientist, ML Engineer, and Data Analyst roles.",
    description:
      "CDPL’s Data Science program covers Data Wrangling (Pandas, NumPy), Exploratory Data Analysis, Statistical Modeling, Supervised & Unsupervised Learning, Deep Learning (TensorFlow/PyTorch), NLP, Time Series, Model Deployment, MLOps, and SQL for data querying. The curriculum is designed for beginners and working professionals aiming for Data Scientist, ML Engineer, and Data Analyst roles.",
    ctas: [
      { label: "Download Brochure", kind: "brochure", primary: true },
      { label: "Watch CDPL", kind: "video", href: "https://www.youtube.com/watch?v=8kB2wESj1n8" },
    ],
    highlights: [
      "100% Live Interactive Classes",
      "90+ Real-World Data Projects",
      "Python, Pandas & Machine Learning",
      "Machine Learning & Model Deployment",
      "Industry Certifications",
      "Job Support",
      "Flexible Batches",
      "Lifetime Access",
    ],
  },

  why: {
    eyebrow: "Data Science & ML Excellence",
    heading: "Become a Data Scientist - [[Build & Deploy Models]]",
    intro:
      "Learn the full data science lifecycle: data engineering, modeling, evaluation, and production deployment. Projects, mentorship and career support included.",
    cards: [
      {
        icon: "brain",
        title: "Machine Learning Foundations",
        description:
          "Understand supervised & unsupervised learning, model selection, evaluation metrics, and build classical ML models (logistic regression, trees, SVMs) with hands-on labs.",
      },
      {
        icon: "database",
        title: "Data Wrangling & Feature Engineering",
        description:
          "Master data cleaning, transformation, feature creation, and pipelines using pandas, SQL, and best practices to prepare production-grade datasets.",
      },
      {
        icon: "barChart",
        title: "Exploratory Data Analysis & Visualization",
        description:
          "Learn to analyze distributions, correlations, and communicate insights using Matplotlib, Seaborn and interactive dashboards to influence business decisions.",
      },
      {
        icon: "brainCircuit",
        title: "Deep Learning & Neural Networks",
        description:
          "Build, train and tune neural networks for image, text and tabular data using PyTorch/TensorFlow — covering CNNs, RNNs, transformers and best optimization practices.",
      },
      {
        icon: "lineChart",
        title: "Time Series & Forecasting",
        description:
          "Model time-dependent data with ARIMA, Prophet and modern deep learning approaches for robust forecasting and anomaly detection in real-world systems.",
      },
      {
        icon: "rocket",
        title: "Model Deployment & MLOps",
        description:
          "Deploy models to production with Docker, REST endpoints, CI/CD pipelines and monitor model performance using proper logging, retraining strategies and versioning.",
      },
      {
        icon: "sigma",
        title: "Statistical Modeling & Experimental Design",
        description:
          "Gain statistical intuition: hypothesis testing, A/B testing, causal inference and confidence intervals to make data-driven product decisions.",
      },
      {
        icon: "eye",
        title: "NLP & Computer Vision Applications",
        description:
          "Implement real-world NLP pipelines (tokenization, embeddings, transformers) and CV tasks (object detection, segmentation) with practical projects.",
      },
      {
        icon: "award",
        title: "Capstone Projects & Career Support",
        description:
          "Complete end-to-end capstones, prepare a portfolio, get interview coaching and hiring connections to land roles as Data Scientist, ML Engineer, or Researcher.",
      },
    ],
    outro: "Ready to level up? Start building production-ready ML systems today.",
    ctas: [{ label: "Explore DS & ML Courses", kind: "scroll", href: "courses" }],
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

  // The old hub showed every course's full module list in tabs. That syllabus
  // lives on each course page; the hub shows the order to take them in.
  path: {
    eyebrow: "Learning Path",
    heading: "Data Science & Machine Learning [[Course Syllabus]]",
    intro:
      "Structured for maximum learning and career readiness. Start with Python, learn the core machine learning algorithms, then move into deep learning and generative AI, or take a master program that covers the whole path. Each course page has the full module-by-module syllabus.",
    stages: [
      {
        title: "Python Foundations",
        description:
          "Start here if you are new to programming: Python syntax, data structures and object-oriented code, the base every data science and machine learning course builds on.",
        topics: ["Python Core Syntax", "Functions & Modules", "Data Structures", "File Handling & Errors", "Object-Oriented Programming", "Standard Library"],
        courses: [{ title: "Python Programming", href: href("python-course") }],
      },
      {
        title: "Machine Learning",
        description:
          "Learn the core machine learning algorithms on real datasets: scikit-learn and pandas in Python, or ML algorithms, ggplot2 and statistical modeling in R. The 95-hour hero program covers supervised and unsupervised ML end to end, from data wrangling and EDA to model deployment.",
        topics: [
          "Data Wrangling & EDA",
          "Regression & Classification",
          "Decision Trees & Ensembles",
          "Gradient Boosting",
          "SVM & KNN",
          "Clustering & Dimensionality Reduction",
          "ggplot2 in R",
        ],
        courses: [
          { title: "Machine Learning Algorithms using Python Programming", href: href("machine-learning-using-python") },
          { title: "Machine Learning and Data Visualization using R Programming", href: href("data-visualization-in-r-programming") },
          { title: "Machine Learning and Data Science with Python - Hero Program", href: href("machine-learning-course") },
        ],
      },
      {
        title: "Deep Learning & Generative AI",
        description:
          "Neural networks, natural language processing and generative AI in Python: CNNs for computer vision, sequence models and transformers, then diffusion models and large language models.",
        topics: [
          "Neural Networks",
          "CNNs & Computer Vision",
          "RNNs & LSTMs",
          "Transformers & Attention",
          "NLP Pipelines",
          "Diffusion Models",
          "LLMs & Prompt Engineering",
        ],
        courses: [{ title: "Deep Learning, NLP and Generative AI", href: href("generative-ai-course") }],
      },
      {
        title: "Master Programs",
        description:
          "The whole path in one program, with capstone projects: the 200-hour masterclass runs from EDA and ML algorithms through to model deployment and end-to-end pipelines; the 255-hour master program spans Python, ML, deep learning, NLP, generative AI and cloud deployment.",
        topics: [
          "Statistics for AI",
          "Feature Engineering",
          "Model Interpretability",
          "MLOps & Production",
          "Big Data & Distributed ML",
          "Reinforcement Learning & AutoML",
          "AI Ethics & Governance",
        ],
        courses: [
          { title: "Advanced Data Science and Machine Learning Masterclass", href: href("data-science-course") },
          { title: "Comprehensive Data Science and AI - Master Program", href: href("ai-course") },
        ],
      },
    ],
  },

  testimonials: {
    eyebrow: "Student Success Stories",
    heading: "Real Results From [[Data Science & ML Graduates]]",
    intro:
      "Join thousands of learners who advanced their careers through hands-on Data Science & Machine Learning training. See how alumni moved into data roles, shipped models to production, and boosted their earnings.",
    // The review count is not repeated here: the reviews marquee above already
    // shows a "{reviews} Verified Reviews" badge.
    extras: [
      {
        kind: "stats",
        items: [
          { value: "3,200+", label: "Graduates Trained" },
          { value: "45%", label: "Avg. Salary Increase" },
        ],
      },
    ],
    outro:
      "**Start Your DS & ML Story** — join our next Data Science & ML cohort: hands-on projects, mentorship, and career support.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Capstone Projects",
    heading: "Hands-On [[Data Science & ML Projects]]",
    intro: "Apply your learning through practical, industry-relevant projects that strengthen your portfolio.",
    items: [
      {
        icon: "wrench",
        title: "Predictive Maintenance",
        description: "Predict equipment failure using time-series data and deep learning.",
        tags: ["Time Series", "Deep Learning", "TensorFlow", "Python"],
        meta: "Advanced",
      },
      {
        icon: "users",
        title: "Customer Churn Analysis",
        description: "Identify and predict customers likely to leave a telecom company.",
        tags: ["Classification", "Pandas", "Scikit-learn", "Statistics"],
        meta: "Intermediate",
      },
      {
        icon: "image",
        title: "Image Recognition System",
        description: "Develop a deep learning model for image classification.",
        tags: ["Deep Learning", "CNN", "Keras/PyTorch", "Computer Vision"],
        meta: "Advanced",
      },
      {
        icon: "lineChart",
        title: "Stock Price Forecasting",
        description: "Use time-series models to predict future stock prices.",
        tags: ["Time Series", "ARIMA", "LSTM", "Financial Data"],
        meta: "Intermediate",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Why Build These Projects?",
        text: "Gain hands-on experience from data ingestion to deployed models — the exact skills hiring managers ask for.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio-Ready Projects",
            description:
              "Build production-grade ML & DS projects that demonstrate your end-to-end capabilities to employers.",
          },
          {
            icon: "award",
            title: "Industry Recognition",
            description: "Projects modeled after real business problems used by leading data teams across industries.",
          },
          {
            icon: "zap",
            title: "Interview Confidence",
            description: "Discuss actual implementations in interviews — from feature engineering to model deployment.",
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: "Career Opportunities",
    heading: "Data Science & ML [[Career Paths]]",
    intro: "Launch your career in Data Science and Analytics. Explore diverse career paths after completing the course.",
    paths: [
      {
        role: "Data Scientist",
        trending: true,
        demandLevel: "Very High",
        experience: "1-3+ Years",
        description: "Design and implement machine learning models to solve complex business problems.",
        salaryRange: "₹8L - ₹25L+",
        skills: ["ML", "Python", "Statistics", "AI"],
        responsibilities: ["Build predictive models", "Analyze complex datasets", "Collaborate with stakeholders"],
        opportunities: ["Top Tech Companies", "Global Consulting Firms"],
        hiringCompanies: ["Google", "Amazon", "Microsoft", "Deloitte"],
      },
      {
        role: "Data Analyst",
        demandLevel: "High",
        experience: "0-2 Years",
        description: "Analyze large datasets to extract actionable insights and create reports.",
        salaryRange: "₹5L - ₹12L+",
        skills: ["SQL", "Excel", "Visualization", "Business Intelligence"],
        responsibilities: ["Create dashboards", "Clean and transform data", "Generate business reports"],
        opportunities: ["E-commerce", "Finance", "Healthcare"],
        hiringCompanies: ["Flipkart", "Myntra", "HDFC Bank", "Accenture"],
      },
      {
        role: "Machine Learning Engineer",
        trending: true,
        demandLevel: "Very High",
        experience: "2-4+ Years",
        description: "Build and deploy scalable machine learning systems in production.",
        salaryRange: "₹10L - ₹30L+",
        skills: ["MLOps", "Cloud", "Deployment", "Software Engineering"],
        responsibilities: ["Deploy ML models", "Optimize model performance", "Build ML pipelines"],
        opportunities: ["Product Companies", "FinTech", "AI Startups"],
        hiringCompanies: ["Uber", "Swiggy", "Zomato", "Cred"],
      },
    ],
    outro: "**Ready to Launch Your Data Science Career?** Get personalized career guidance and placement support.",
    ctas: [
      { label: "Talk to Career Counselor", kind: "careerSession" },
      { label: "Download Career Guide", kind: "brochure" },
      { label: "View Job Openings", kind: "link", href: "/jobs/live-jobs" },
    ],
  },

  // Hub-level DS & ML questions. The old page showed the Business Intelligence
  // hub's FAQ word for word, so /courses/bi-courses and this page emitted the
  // same FAQPage. Every fact below is taken from this hub or its course pages
  // (durations, prerequisites, tools, career-card salaries); the answers are
  // plain text because page.tsx also feeds them into the FAQPage schema.
  faq: {
    intro:
      "Everything you need to know about our Data Science & Machine Learning courses: where to start, the tools you’ll learn, certification, salaries and placement support.",
    items: [
      {
        question: "Which Data Science & Machine Learning course should I start with?",
        answer:
          "If you are new to programming, start with Python Programming (30 hours). Then learn the core algorithms in Machine Learning Algorithms using Python Programming (45 hours) or the 95-hour Machine Learning and Data Science with Python Hero Program. Once you are comfortable with Python and machine learning basics, move on to Deep Learning, NLP and Generative AI (55 hours), or take a master program that covers the whole path.",
      },
      {
        question: "What is the difference between the Hero Program, the Masterclass and the Master Program?",
        answer:
          "The 95-hour Machine Learning and Data Science with Python Hero Program covers supervised and unsupervised machine learning end to end, from data wrangling and EDA to model deployment. The 200-hour Advanced Data Science and Machine Learning Masterclass goes deeper, from EDA and ML algorithms through to model deployment, MLOps and end-to-end pipelines. The 255-hour Comprehensive Data Science and AI Master Program spans Python, machine learning, deep learning, NLP, generative AI and cloud deployment, with capstone projects.",
      },
      {
        question: "Do I need coding experience to learn data science and machine learning?",
        answer:
          "No. Python Programming and the Machine Learning and Data Science with Python Hero Program start from the basics, so beginners can begin there. Deep Learning, NLP and Generative AI expects Python and machine learning basics, and basic Python and math make the Comprehensive Data Science and AI Master Program easier to follow.",
      },
      {
        question: "Should I learn Python or R for data science?",
        answer:
          "Most of our data science and machine learning courses use Python, because Pandas, NumPy, scikit-learn, TensorFlow and PyTorch all run on it and it is widely used in Data Scientist and ML Engineer roles. R is strong for statistics and visualization: Machine Learning and Data Visualization using R Programming (20 hours) teaches ML algorithms, ggplot2 and statistical modeling in R, and suits analysts who want R alongside Python.",
      },
      {
        question: "What tools and technologies will I learn?",
        answer:
          "Python, Pandas, NumPy, scikit-learn, TensorFlow and PyTorch for data wrangling and modeling; SQL for data querying; Matplotlib, Seaborn, Tableau and Power BI for data visualization; R with ggplot2; and Docker, REST endpoints and CI/CD pipelines for model deployment and MLOps. The exact stack depends on the course, and each course page lists its tools.",
      },
      {
        question: "What salary can I expect after a data science course in India?",
        answer:
          "Typical ranges in India are ₹5L - ₹12L+ a year for a Data Analyst (0-2 years), ₹8L - ₹25L+ for a Data Scientist (1-3+ years) and ₹10L - ₹30L+ for a Machine Learning Engineer (2-4+ years). Actual offers depend on your experience, portfolio and interview performance.",
      },
      {
        question: "Will I get a certificate after the course?",
        answer:
          "Yes. Each course awards a QR-verified CDPL certificate on completion, and the Machine Learning and Data Science with Python Hero Program includes four certificates.",
      },
      {
        question: "Do you provide placement support for data science and ML roles?",
        answer:
          "Yes. Placement support covers resume and LinkedIn profile building, portfolio guidance, interview preparation and mock interviews, and job openings for Data Scientist, ML Engineer and Data Analyst roles. Outcomes depend on practice, project quality and interview performance.",
      },
      {
        question: "Are the classes online or in the classroom?",
        answer:
          "Both. Classes are live and mentor-led, online or in the classroom, with flexible weekday and weekend batches for students and working professionals, and lifetime access to course materials.",
      },
    ],
  },

  cta: {
    heading: "Ready to Start Your [[Data Revolution]] Career?",
    intro: "Join students who have successfully launched their data science careers.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
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

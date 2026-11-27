import type { CourseContent } from "@/types/course-page";
import { ML_PYTHON_FAQS } from "@/data/courses/ds-ml/faqs/machine-learning-using-python";

// Content for /courses/ds-ml-courses/machine-learning-using-python, moved from
// the old src/components/machine-learning-using-python/* sections. Kept word
// for word except repeated filler (duplicate stat blocks, keyword-dump lines,
// per-card badges, chips that contradicted the 45-hour course), which a
// cleanup pass removed.
export const machineLearningUsingPythonCourse: CourseContent = {
  slug: "machine-learning-using-python",
  courseName: "Machine Learning Algorithms using python Programming",
  sourceName: "Machine Learning Algorithms with Python Course Page",

  seo: {
    // No "Mumbai" (the city page owns it) and no "master program": this is a
    // 45-hour course.
    title: "Machine Learning Algorithms with Python Course | CDPL",
    description:
      "45-hour course in ML algorithms using Python — scikit-learn, pandas, real datasets & hands-on projects with placement assistance in Mumbai.",
    keywords: [
      "machine learning with python course mumbai",
      "python for data science training",
      "ml algorithms course",
      "python programming for ml",
      "machine learning certification mumbai",
      "ai and ml training institute",
    ],
    image: "/og-images/courses-ds-ml-courses-machine-learning-using-python-og.webp",
  },

  schema: {
    name: "Machine Learning Algorithms using Python",
    description:
      "45-Hour Course in Machine Learning Algorithms using Python. Hands-on projects, job assistance, global certificates.",
    duration: "P1M2W",
    howTo: {
      name: "How to Enroll in CDPL Machine Learning with Python Course",
      description: "A step-by-step guide to enrolling in our 45 hours intensive Machine Learning with Python training program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive python, machine learning, and AI algorithms modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master data preprocessing, regression, classification, model evaluation, and unsupervised learning in Python, then build a capstone project!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Machine Learning Algorithms with Python",
    badges: [
      { icon: "clock", text: "Duration: 45 Hours" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "trophy", text: "5+ Years Industry Experience" },
    ],
    h1: "Master [[Machine Learning Algorithms]] with [[Python]]",
    note: { text: "Not sure this is the right fit? Compare every", link: { label: "data science course", href: "/courses/ds-ml-courses" } },
    subtitle:
      "Transform raw data into powerful, predictive intelligence. Learn from industry experts and build production-ready ML models that solve real-world business problems using Python.",
    description:
      "Topics: supervised & unsupervised learning, regression, classification, clustering, model evaluation, feature engineering, hyperparameter tuning, ensemble methods, time series, and ML model deployment.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Machine Learning with Python" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
  },

  stats: {
    heading: "Why Invest in [[Machine Learning]]?",
    intro:
      "The ML industry is booming with unprecedented growth, lucrative opportunities, and high job satisfaction rates. Our **Machine Learning and AI training program** helps you build a future-proof career as a **Machine Learning Engineer, Data Scientist,** or **AI Engineer** by combining hands-on projects, real business case studies, and job-ready skills recruiters actively search for.",
    items: [
      { value: "25%", label: "Market Growth", note: "2020-2030" },
      { value: "101,000+", label: "Job Vacancies", note: "In India" },
      { value: "9 LPA", label: "Freshers' Salary", note: "ML Engineer" },
      { value: "14+", label: "Years Expertise", note: "Industry Experience" },
      { value: "75%", label: "Job Satisfaction", note: "Professionals report high job satisfaction in ML roles" },
      { value: "32%", label: "Global Market Share", note: "India's growing share in the global ML market" },
    ],
    extras: [
      {
        kind: "text",
        title: "The Machine Learning & AI Boom - Build a High-Growth Career",
        text: "Companies across **finance**, **healthcare**, **e-commerce**, **cybersecurity**, **ed-tech** and **marketing** are investing heavily in **Machine Learning engineers** and **AI specialists** to automate decisions, personalise user experiences and unlock insights from big data. Our **job-oriented Machine Learning course in India** bridges the gap between theory and real-world deployment so you can confidently apply for **ML Engineer, Data Scientist, AI Engineer** and **ML Ops** roles.",
      },
      {
        kind: "list",
        items: [
          "**Career-ready skills:** Python for ML, Scikit-learn, Pandas, NumPy, model evaluation, cross-validation, hyperparameter tuning and feature engineering.",
          "**Hands-on ML projects** in regression, classification, recommendation systems, time-series forecasting and real-world business case studies.",
          "**Interview-focused preparation** with resume and LinkedIn optimization, ML interview questions, coding challenges and portfolio guidance.",
          "**Flexible learning options:** online and classroom batches, weekend and weekday schedules for students, working professionals and career switchers.",
        ],
      },
    ],
  },

  why: {
    heading: "Advanced Data Science: [[A Complete Overview]]",
    intro:
      "A mentor-led, job-ready journey through Python, Data Visualization, Statistics & Probability, and Machine Learning - built around hands-on labs and real portfolio projects.",
    points: [
      { icon: "code", text: "Hands-on Projects" },
      { icon: "briefcase", text: "Job-Ready" },
    ],
    cards: [
      { icon: "briefcase", title: "Career Paths", description: "Data Analyst • ML Engineer • Data Scientist" },
      { icon: "wrench", title: "Toolchain", description: "Python • NumPy • Pandas • scikit-learn" },
      { icon: "package", title: "Deliverables", description: "3+ portfolio projects with docs & demos" },
    ],
    extras: [
      {
        kind: "list",
        title: "What You’ll Learn",
        items: [
          "Python foundations → EDA → feature engineering",
          "Visualizations with Matplotlib & Plotly",
          "Statistics & Probability for inference and A/B testing",
          "ML with scikit-learn: supervised & unsupervised",
          "Model evaluation, metrics, and fair comparison",
          "Lightweight MLOps: environments, reproducibility, deploy",
        ],
      },
    ],
    outro:
      "This **Hero Program** blends theory with practice so you can confidently analyze data, build models, and ship real demos. You’ll learn to structure datasets, visualize insights, apply **statistical reasoning**, and implement **machine learning algorithms** in **Python**. Each module ends with a guided mini-project and code review to ensure you’re **job-ready** for data-driven roles. Includes mentor guidance, interview prep, resume & LinkedIn polishing, and **placement assistance** for relevant roles.",
    ctas: [{ label: "Apply Now", kind: "enroll", ariaLabel: "Apply to the Machine Learning & Data Science program" }],
  },

  curriculum: {
    heading: "Comprehensive Course [[Curriculum]]",
    intro: "A structured 45-hour program covering foundational concepts to advanced ML algorithms with real-world applications.",
    modules: [
      {
        title: "Introduction to Python & ML Foundations",
        duration: "6 hours",
        topics: [
          "What is Machine Learning and its Applications",
          "Supervised vs Unsupervised Learning",
          "Python libraries suitable for ML (NumPy, Pandas, Scikit-learn)",
          "ML Workflow and Best Practices",
        ],
      },
      {
        title: "Data Preprocessing & Feature Engineering",
        duration: "6 hours",
        topics: [
          "Handling missing data (imputation, deletion strategies)",
          "Normalization and scaling (min-max, standardization)",
          "Encoding categorical data (one-hot, label encoding)",
          "Data splitting (training, validation, test sets)",
        ],
      },
      {
        title: "Supervised Learning - Regression",
        duration: "6 hours",
        topics: [
          "Linear Regression: Assumptions and least squares method",
          "Polynomial Regression: Extending linear models",
          "Regularization techniques: Ridge and Lasso",
          "Model evaluation metrics for regression",
        ],
      },
      {
        title: "Supervised Learning - Classification",
        duration: "8 hours",
        topics: [
          "Logistic Regression: Binary and multiclass classification",
          "K-Nearest Neighbors (KNN): Distance-based classification",
          "Decision Trees: Structure and interpretation",
          "Random Forests: Ensemble learning basics",
          "Support Vector Machines (SVM): Margins and kernels",
        ],
      },
      {
        title: "Model Evaluation & Validation",
        duration: "5 hours",
        topics: [
          "Regression Metrics: MSE, MAE, R² Score",
          "Classification Metrics: Accuracy, Precision, Recall, F1 Score, ROC-AUC",
          "Overfitting and Underfitting: Causes and solutions",
          "Cross-Validation: K-fold and stratified methods",
          "Hyperparameter Tuning: Grid search and random search",
        ],
      },
      {
        title: "Unsupervised Learning & Dimensionality Reduction",
        duration: "5 hours",
        topics: [
          "K-Means Clustering: Algorithm and use cases",
          "Hierarchical Clustering: Dendrograms and linkage methods",
          "Principal Component Analysis (PCA): Reducing dimensionality",
          "Density-Based Clustering (DBSCAN)",
        ],
      },
      {
        title: "Capstone Project & Real-World Applications",
        duration: "3 hours",
        topics: [
          "Design and implement an end-to-end ML solution",
          "Real-world case studies across multiple domains",
          "Model deployment and productionization",
          "Best practices and optimization techniques",
        ],
      },
    ],
    extras: [
      {
        kind: "list",
        title: "What You'll Master",
        items: [
          "Data Preprocessing & Cleaning",
          "Regression Analysis",
          "Classification Algorithms",
          "Model Evaluation & Validation",
          "Unsupervised Learning",
          "Feature Engineering",
          "Hyperparameter Tuning",
          "Real-world Project Implementation",
          "Model Deployment",
        ],
      },
    ],
    ctas: [{ label: "Download Detailed Syllabus (PDF)", kind: "syllabus" }],
  },

  tools: {
    heading: "[[Tools & Technologies]] You Will Master",
    intro: "Learn industry-standard tools and frameworks used by leading companies worldwide.",
    items: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg", category: "Programming & Core Libraries" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg", category: "Programming & Core Libraries" },
      { name: "Pandas", logo: "/techstack_logos/pandas-logo.svg", category: "Programming & Core Libraries" },
      { name: "Matplotlib", logo: "/techstack_logos/matplotlib-logo.svg", category: "Programming & Core Libraries" },
      { name: "Seaborn", logo: "/techstack_logos/seaborn-logo.png", category: "Programming & Core Libraries" },
      { name: "Scikit-learn", logo: "/techstack_logos/scikit-learn-logo.svg", category: "Machine Learning Frameworks" },
      { name: "TensorFlow", logo: "/techstack_logos/tensorflow-logo.svg", category: "Machine Learning Frameworks" },
      { name: "Keras", logo: "/techstack_logos/keras-logo.svg", category: "Machine Learning Frameworks" },
      { name: "PyTorch", logo: "/techstack_logos/pytorch-logo.svg", category: "Machine Learning Frameworks" },
      { name: "XGBoost", icon: "rocket", category: "Machine Learning Frameworks" },
      { name: "SQL", icon: "database", category: "Data & Visualization" },
      { name: "Power BI", logo: "/techstack_logos/power-bi-logo.svg", category: "Data & Visualization" },
      { name: "Tableau", logo: "/techstack_logos/tableau-logo.svg", category: "Data & Visualization" },
      { name: "Plotly", logo: "/techstack_logos/plotly-logo.svg", category: "Data & Visualization" },
      { name: "Excel", logo: "/techstack_logos/excel-logo.svg", category: "Data & Visualization" },
      { name: "Jupyter Notebook", logo: "/techstack_logos/jupyter-logo.svg", category: "Development & Deployment" },
      { name: "Git & GitHub", logo: "/techstack_logos/git-logo.svg", category: "Development & Deployment" },
      { name: "Docker", logo: "/techstack_logos/docker-logo.svg", category: "Development & Deployment" },
      { name: "AWS/Cloud", logo: "/techstack_logos/amazonwebservices-logo.svg", category: "Development & Deployment" },
      { name: "APIs", icon: "link", category: "Development & Deployment" },
    ],
    extras: [
      {
        kind: "cards",
        title: "Why These Tools?",
        items: [
          {
            icon: "building",
            title: "Industry Standard",
            description: "Used by Fortune 500 companies and leading tech organizations worldwide.",
          },
          {
            icon: "trendingUp",
            title: "High Demand",
            description: "Employers actively seek professionals proficient in these tools and frameworks.",
          },
          {
            icon: "rocket",
            title: "Future-Ready",
            description: "Stay ahead with constantly updated tools and emerging technologies in ML.",
          },
        ],
      },
      {
        kind: "steps",
        title: "Your Proficiency Levels",
        items: [
          { title: "Beginner", description: "Foundation and basics of tools and frameworks" },
          { title: "Intermediate", description: "Practical implementation and real-world applications" },
          { title: "Advanced", description: "Expert-level proficiency and optimization techniques" },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your 6-Step Career Roadmap to [[ML Engineering]]",
    intro:
      "A structured journey from inquiry to becoming a market-ready machine learning engineer with industry expertise.",
    steps: [
      {
        title: "You Enquired",
        description: "Initial consultation and course exploration",
        icon: "search",
        points: [
          "Understand your goals and aspirations",
          "Clarify course content and structure",
          "Discuss career opportunities",
          "Review pricing and batch schedules",
        ],
      },
      {
        title: "You Enroll",
        description: "Start your machine learning journey",
        icon: "penTool",
        points: [
          "Complete enrollment and registration",
          "Access course materials and resources",
          "Join the learning community",
          "Receive welcome orientation",
        ],
      },
      {
        title: "Extensive Training",
        description: "Master Python, ML tools & technologies",
        icon: "book",
        points: [
          "Learn Python fundamentals and libraries",
          "Understand ML algorithms deeply",
          "Master tools like Scikit-learn, TensorFlow",
          "Practice with hands-on coding exercises",
        ],
      },
      {
        title: "Projects & Assignments",
        description: "Build your portfolio with real projects",
        icon: "wrench",
        points: [
          "Work on industry-relevant capstone projects",
          "Implement end-to-end ML solutions",
          "Create portfolio-worthy projects",
          "Collaborate with peers on assignments",
        ],
      },
      {
        title: "Job Readiness",
        description: "Prepare for your dream role",
        icon: "target",
        points: [
          "Intensive interview preparation",
          "Resume and LinkedIn optimization",
          "Mock interviews with industry experts",
          "SWOT analysis and feedback sessions",
        ],
      },
      {
        title: "Market-Ready ML Engineer",
        description: "Launch your successful career",
        icon: "rocket",
        points: [
          "Secure your ideal ML engineering role",
          "Start your professional journey",
          "Continuous learning and growth",
          "Lifetime community and support access",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Key Skills You'll Gain",
        items: [
          {
            icon: "code",
            title: "Technical Skills",
            points: [
              "Python Programming",
              "Data Preprocessing",
              "ML Algorithms",
              "Model Evaluation",
              "Hyperparameter Tuning",
              "Feature Engineering",
            ],
          },
          {
            icon: "wrench",
            title: "Tools & Frameworks",
            points: [
              "Scikit-learn",
              "TensorFlow & Keras",
              "Pandas & NumPy",
              "Jupyter Notebook",
              "SQL & Databases",
              "Cloud Platforms",
            ],
          },
          {
            icon: "users",
            title: "Soft Skills",
            points: [
              "Problem Solving",
              "Communication",
              "Project Management",
              "Team Collaboration",
              "Critical Thinking",
              "Business Acumen",
            ],
          },
        ],
      },
      {
        kind: "text",
        title: "Complete Your Journey In 45 Hours",
        text: "Structured training spread across 7 comprehensive modules with real-world projects, expert mentorship, and job support.",
      },
    ],
    ctas: [{ label: "Get Personalized Roadmap", kind: "careerSession" }],
  },

  projects: {
    heading: "Real-Time [[Capstone Projects]]",
    intro: "Work on industry-relevant projects across multiple domains to build a portfolio that impresses employers.",
    items: [
      {
        icon: "heart",
        title: "Disease Prediction Model for Hospital",
        meta: "Healthcare",
        description:
          "Build a machine learning model to predict disease outbreaks based on patient data including symptoms and demographics. Improve early detection and optimize resource allocation using Python-based predictive models.",
        features: ["Python", "Scikit-learn", "Data Preprocessing", "Healthcare Domain Knowledge"],
      },
      {
        icon: "shield",
        title: "Fraud Detection System for Bank",
        meta: "E-Finance (BFSI)",
        description:
          "Develop a fraud detection system using machine learning to analyze transaction data and identify suspicious activities. Enhance security measures and protect customer assets through intelligent anomaly detection.",
        features: ["Python", "TensorFlow", "Model Evaluation", "Finance Domain Knowledge"],
      },
      {
        icon: "smartphone",
        title: "Customer Churn Prediction",
        meta: "Telecommunication",
        description:
          "Create a predictive model to identify customers likely to churn and implement retention strategies. Reduce customer attrition and improve customer lifetime value through proactive interventions.",
        features: ["Python", "Pandas", "Classification Models", "Business Analytics"],
      },
      {
        icon: "shoppingCart",
        title: "Recommendation Engine",
        meta: "E-Commerce",
        description:
          "Build a recommendation system that suggests products based on user behavior and preferences. Increase sales and customer satisfaction through personalized product recommendations.",
        features: ["Python", "Collaborative Filtering", "Content-Based Filtering", "Data Analysis"],
      },
      {
        icon: "settings",
        title: "Predictive Maintenance System",
        meta: "Manufacturing",
        description:
          "Develop a system to predict equipment failures before they occur to minimize downtime. Reduce maintenance costs and improve operational efficiency through predictive analytics.",
        features: ["Python", "Time Series Analysis", "IoT Data", "Scikit-learn"],
      },
      {
        icon: "message",
        title: "Sentiment Analysis Dashboard",
        meta: "Social Media",
        description:
          "Create a system to analyze and classify sentiment from social media posts and customer reviews. Monitor brand perception and customer satisfaction in real-time across platforms.",
        features: ["Python", "NLP", "Text Processing", "Data Visualization"],
      },
    ],
    extras: [
      {
        kind: "list",
        title: "Project Domains",
        items: [
          "Aviation",
          "Healthcare",
          "Telecommunication",
          "BFSI",
          "Social Media",
          "Automobile",
          "Sales & Marketing",
          "Human Resources",
          "Supply Chain Management",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Industry-Relevant",
            description: "Projects based on real-world business problems and industry requirements.",
          },
          {
            icon: "code",
            title: "Hands-On Implementation",
            description: "Write production-grade code and deploy models using best practices.",
          },
          {
            icon: "database",
            title: "Portfolio Building",
            description: "Create impressive portfolio pieces to showcase to potential employers.",
          },
        ],
      },
    ],
    ctas: [{ label: "Download Full Project List", kind: "syllabus" }],
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Join hundreds of successful graduates who have transformed their careers through our comprehensive ML program.",
    extras: [
      {
        kind: "stats",
        title: "Verified Reviews on Leading Platforms",
        items: [
          { value: "{rating}", label: "Google Reviews" },
          { value: "5.0/5", label: "Sulekha Reviews" },
          { value: "{rating}", label: "Justdial Reviews" },
        ],
      },
    ],
  },

  career: {
    heading: "Your Career Path After [[ML Mastery]]",
    intro: "Explore lucrative career opportunities and roles you can pursue after completing the program.",
    rolesTitle: "Job Roles You Can Apply For",
    roles: [
      { title: "Machine Learning Engineer", salary: "9-15 LPA" },
      { title: "Data Scientist", salary: "8-14 LPA" },
      { title: "Data Analyst", salary: "6-10 LPA" },
      { title: "Business Intelligence Analyst", salary: "7-12 LPA" },
      { title: "Software Engineer (ML)", salary: "10-16 LPA" },
      { title: "Computer Vision Engineer", salary: "10-15 LPA" },
      { title: "Predictive Modeler", salary: "8-13 LPA" },
      { title: "Research Scientist", salary: "12-18 LPA" },
    ],
    companiesTitle: "Top Companies Hiring Our Graduates",
    companies: ["Google", "Microsoft", "Amazon", "Apple", "Meta", "Tesla", "IBM", "Adobe", "Accenture", "Infosys", "TCS", "Wipro"],
    extras: [
      {
        kind: "steps",
        title: "Our Comprehensive Placement Program",
        items: [
          { title: "Craft a Winning Portfolio", description: "Build a standout portfolio and network to showcase your skills and projects." },
          { title: "Polish Your Resume", description: "Our experts will update your resume with the latest skills and projects." },
          { title: "LinkedIn Profile Optimization", description: "Boost your professional LinkedIn profile by adding your certifications." },
          { title: "Expand Your Reach", description: "Update your profiles on job portals like Naukri, Indeed, and Foundit." },
          { title: "Interview Preparation", description: "Intensive interview preparation from Day 1 to prepare for technical interviews." },
          { title: "Ace Your Interviews", description: "Industry experts conduct SWOT analysis and provide feedback on performance." },
        ],
      },
      {
        kind: "text",
        title: "Launch Your Career Journey",
        text: "Get our support to secure your ideal role and kickstart your professional path in machine learning.",
      },
    ],
  },

  audience: {
    heading: "Who Should Enroll in This [[Program]]?",
    intro: "This comprehensive ML program is designed for learners at various stages of their career journey.",
    items: [
      {
        icon: "rocket",
        title: "Beginners with Programming Background",
        description:
          "If you have basic Python or programming skills and want to transition into machine learning, this course is perfect for you.",
      },
      {
        icon: "graduationCap",
        title: "Students & Recent Graduates",
        description:
          "Perfect for students, developers, and analysts looking to master ML with Python and build a strong career foundation.",
      },
      {
        icon: "repeat",
        title: "Career Switchers",
        description:
          "Professionals in technology, healthcare, finance, retail, or research looking to transition into data science and AI roles.",
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description:
          "Individuals looking to upskill and stay competitive in the rapidly evolving machine learning and AI landscape.",
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Prerequisites & Requirements",
        items: [
          { title: "Basic Python Knowledge", meta: "Essential", description: "Understanding of Python syntax, variables, loops, and functions" },
          { title: "Mathematics Fundamentals", meta: "Helpful", description: "Basic knowledge of algebra, calculus, and statistics is beneficial" },
          { title: "Problem-Solving Skills", meta: "Essential", description: "Ability to think logically and solve problems systematically" },
          { title: "Passion for Learning", meta: "Essential", description: "Willingness to learn and practice consistently throughout the course" },
        ],
      },
      {
        kind: "text",
        text: "**Note:** Don't worry if you lack some prerequisites! Our course includes foundational modules to help you catch up. However, basic Python knowledge is essential to keep pace with the curriculum.",
      },
      {
        kind: "list",
        title: "Ideal Candidate Profile",
        items: [
          "Strong foundation in Python programming",
          "Curious about machine learning and AI",
          "Willing to dedicate 45 hours to learning",
          "Eager to work on real-world projects",
          "Committed to career growth in data science",
          "Able to participate in interactive sessions",
        ],
      },
      {
        kind: "list",
        title: "This Course Might Not Be For You If...",
        items: [
          "You have no programming experience and are not willing to learn Python basics",
          "You're looking for a quick shortcut to ML without understanding fundamentals",
          "You cannot commit 45 hours to the course over the scheduled period",
          "You prefer passive learning over hands-on, practical implementation",
        ],
      },
    ],
    ctas: [
      { label: "Check Eligibility & Apply", kind: "enroll" },
      { label: "Download Detailed Syllabus", kind: "syllabus" },
    ],
  },

  faq: {
    intro: "Find answers to common questions about our Machine Learning program, enrollment, and career support.",
    items: ML_PYTHON_FAQS,
    categories: [
      "Course Details",
      "Prerequisites",
      "Curriculum",
      "Learning Format",
      "Certification",
      "Placement",
      "Career",
      "Support",
      "Technical",
      "Enrollment",
    ],
  },

  cta: {
    eyebrow: "Limited Time Offer: Get 20% Off on Early Enrollment!",
    heading: "Ready to [[Transform Your Career]]?",
    intro:
      "Join hundreds of successful graduates who have landed high-paying ML engineering roles. Start your journey today with our comprehensive 45-hour course.",
    actions: [
      { label: "Enroll Now & Get Started", kind: "enroll" },
      { label: "Schedule Free Demo", kind: "careerSession" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
    ],
    highlights: [
      {
        icon: "clock",
        title: "45 Hours of Expert Training",
        description: "7 Comprehensive Modules • Real-World Capstone Projects",
      },
      { icon: "users", title: "1:1 Doubt Solving Sessions", description: "Lifetime Community Access" },
      {
        icon: "award",
        title: "Global Certification",
        description: "Job Assistance • Resume & Portfolio Building • Interview Preparation • Placement Support",
      },
    ],
    footnotes: [{ icon: "mail", text: "contact@cinutedigital.com" }],
  },
};

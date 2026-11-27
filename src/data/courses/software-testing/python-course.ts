import type { CourseContent } from "@/types/course-page";
import { PYTHON_FAQS } from "@/data/courses/software-testing/faqs/python-course";

// Content for /courses/software-testing-course/python-course, moved from the old
// src/components/python-course/* sections. Kept word for word except repeated
// filler (the same chips / captions on every module, tool and project card, a
// rating pill row, a decorative star strip, a Ctrl+F tip, a second
// "Learn from anywhere" tagline).
export const pythonCourse: CourseContent = {
  slug: "python-course",
  courseName: "Python Programming",
  sourceName: "Python Course Page",

  seo: {
    title: "Python Programming Course in Mumbai | CDPL",
    description:
      "Job-ready Python course in Mumbai — data structures, OOP, pandas, NumPy, automation scripting & live projects with placement assistance.",
    keywords: [
      "python course mumbai",
      "python training",
      "django course",
      "data science python",
      "python job assistance",
      "python certification mumbai",
      "python web development course",
      "online python classes",
    ],
    image: "/og-images/courses-software-testing-course-python-course-og.webp",
  },

  schema: {
    name: "Python Programming Master Course",
    description:
      "Comprehensive Python course in Mumbai with Django, Data Science, ML, Automation. placement. Live projects, global certificate.",
    duration: "PT30H",
    howTo: {
      name: "How to Enroll in CDPL Python Master Course",
      description: "A step-by-step guide to enrolling in our specialized Python framework and Automation master program.",
      steps: [
        { name: "Review Curriculum", text: "Evaluate the comprehensive Python, Django, Data Science, and Machine Learning modules." },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and batch details." },
        {
          name: "Start Learning",
          text: "Master modern full-stack backend development and automated scripting methodologies with strong placement support!",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Python Master Program",
    badges: [
      { icon: "star", text: "{rating} Rated" },
      { icon: "globe", text: "Live Online & Classroom" },
      { icon: "cpu", text: "Project-Based" },
    ],
    h1: "Master Program in [[Python Programming]]",
    note: { text: "Learning Python for data science? Start here, then pick a", link: { label: "data science course", href: "/courses/ds-ml-courses" } },
    subtitle:
      "Learn modern **Python** with **data structures**, **OOP**, **API & file automation**, **testing**, **data analysis**, and **deployment**. Build **portfolio-ready projects**, earn a **QR-verified certificate**, and get **placement support** with interview prep.",
    description:
      "Topics include problem solving, environments, REST APIs, pandas, SQL, unit tests, and shipping small apps.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Python program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with capstone reviews",
      "API, automation & testing fundamentals",
      "Interview prep & portfolio guidance",
      "QR-verified certificate + placement",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "code", title: "80% Hands-On", description: "Real Python labs & reviews" },
      { icon: "users", title: "Expert Faculty", description: "10+ yrs industry mentors" },
      { icon: "award", title: "Global Certificate", description: "QR-verified completion" },
      { icon: "briefcase", title: "Placement", description: "Resume + mock interviews" },
    ],
  },

  stats: {
    heading: "Python Stats – [[Clear & Impactful]]",
    intro: "Snapshot of the market and careers pulled from the program brochure.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)", note: "Expanding opportunities over the decade" },
      { value: "101,000+", label: "Job Vacancies in India", note: "Open roles across industries and regions" },
      { value: "6 LPA", label: "Fresher Average Salary", note: "Typical entry-level compensation" },
      { value: "75%", label: "Job Satisfaction", note: "Strong satisfaction among professionals" },
      { value: "32%", label: "India’s Global Share", note: "Share in the global market" },
    ],
    outro:
      "From **automation & APIs** to **data science & AI**, Python’s ecosystem unlocks multiple high-growth career paths with strong hiring demand.",
  },

  why: {
    heading: "Your Gateway to the [[Top 1% Python Developer]]",
    intro:
      "A **30-hour**, mentor-led, **project-driven** Python program that blends **AI & Data Science**, **Web APIs**, and **Automation** to make you job-ready.",
    points: [
      { icon: "clock", text: "30 Hours · Live + Labs" },
      { icon: "package", text: "40+ Projects · Portfolio Ready" },
      { icon: "calendar", text: "6 hrs / week · Flexible Cohort" },
      { icon: "graduationCap", text: "No Coding Exp. · Beginner Friendly" },
      { icon: "star", text: "{rating} Rating · Learner Reviews" },
    ],
    cards: [
      { icon: "brain", title: "AI + Data Science", description: "NumPy, Pandas, Matplotlib, scikit-learn, prompt engineering" },
      { icon: "globe", title: "Web Development", description: "FastAPI / Django APIs, authentication, deployment, Docker" },
      { icon: "workflow", title: "Automation & Scripting", description: "ETL, file ops, schedulers, CLI tools, Selenium basics" },
      { icon: "gitBranch", title: "Clean Code & DevOps", description: "OOP, testing (pytest), Git/GitHub, CI/CD fundamentals" },
    ],
    outro:
      "Graduate with a **QR-verified certificate**, a **portfolio of production-like projects**, and interview prep that highlights **problem-solving, testing,** and **clean code**.",
  },

  curriculum: {
    heading: "15-Module [[Python Curriculum]] + Capstone",
    intro:
      "Carefully sequenced, **project-driven** roadmap from setup to deployment — built for **job-ready outcomes**.",
    modules: [
      {
        title: "Introduction to Python Programming",
        topics: [],
        outcome: "Why Python, key applications (Web, Data Science, Testing, Scripting), interpreted vs. compiled, Python 2 vs 3.",
      },
      {
        title: "Installation & Environment Setup",
        topics: [],
        outcome:
          "Install Python (Win/Mac/Linux), set up VS Code/PyCharm/Jupyter, configure pip & virtual envs, run your first script.",
      },
      {
        title: "Python Basics",
        topics: [],
        outcome: "Variables, data types, operators, input/output, type casting, comments, and clean coding practices.",
      },
      {
        title: "Ranges, Lists, and Tuples",
        topics: [],
        outcome: "range(), lists & tuples, indexing, slicing, iteration, mutability, and common list/tuple methods.",
      },
      {
        title: "Conditionals and Looping",
        topics: [],
        outcome: "if/elif/else, while & for loops, break/continue/pass, and real-life control-flow scenarios.",
      },
      {
        title: "Unpacking and Swapping Variables",
        topics: [],
        outcome: "Tuple/list unpacking, swap without temp, unpacking with * and nested structures.",
      },
      {
        title: "Comprehensions and Data Conversion",
        topics: [],
        outcome: "List/set/dict comprehensions, type conversions, filters/maps/conditional logic, lambda with comps.",
      },
      {
        title: "Functions in Python",
        topics: [],
        // `\\*` is a literal asterisk in Rich, so *args/**kwargs isn't read as markup.
        outcome: "Define/call functions, parameters & return values, \\*args/\\*\\*kwargs, lambdas, scope basics.",
      },
      {
        title: "Sorting Techniques",
        topics: [],
        outcome: "sorted(), .sort(), key functions; sort lists of tuples/dicts; manual bubble/selection sort.",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        topics: [],
        outcome: "Classes/objects, __init__ and self, inheritance/encapsulation/polymorphism, automation/data app use cases.",
      },
      {
        title: "Decorators and Access Control",
        topics: [],
        outcome: "Function decorators (@staticmethod, @property, custom), private/protected members, usage in Flask/Django.",
      },
      {
        title: "Regular Expressions in Python",
        topics: [],
        outcome: "re module, pattern matching, groups/quantifiers, validations (email, phone), practical exercises.",
      },
      {
        title: "Exception Handling",
        topics: [],
        outcome: "try/except/else/finally, common exceptions, raising & custom exceptions, best-practice error handling.",
      },
      {
        title: "Working with Python Collections",
        topics: [],
        outcome: "dict, set, frozenset; operations/methods; nested collections; performance considerations.",
      },
      {
        title: "Container Objects and Nested Data",
        topics: [],
        outcome: "Lists of dicts/dicts of lists, iterate & parse complex data, JSON/API/file data manipulation.",
      },
      {
        title: "Capstone Project",
        topics: [],
        outcome:
          "Build a mini app (e.g., inventory/expense tracker) using OOP, comprehensions, regex, exceptions, and file I/O.",
      },
    ],
    outro: "Includes topics, outcomes, tools, and project checklist.",
    ctas: [{ label: "Download Detailed Syllabus", kind: "syllabus", ariaLabel: "Download detailed Python curriculum" }],
  },

  tools: {
    eyebrow: "Production Ready • Portfolio Projects • Recruiter Friendly",
    heading: "[[Tools]] You’ll Master",
    intro:
      "Learn a **modern developer & data stack** used in real teams — from notebooks and frameworks to version control and cloud.",
    items: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg" },
      { name: "VS Code", logo: "/techstack_logos/vscode-logo.svg" },
      { name: "Jupyter", logo: "/techstack_logos/jupyter-logo.svg" },
      { name: "Django", logo: "/techstack_logos/django-logo.svg" },
      { name: "Pandas", logo: "/techstack_logos/pandas-logo.svg" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg" },
      { name: "Scikit-Learn", logo: "/techstack_logos/scikit-learn-logo.svg" },
      { name: "Git", logo: "/techstack_logos/git-logo.svg" },
      { name: "AWS", logo: "/techstack_logos/amazonwebservices-logo.svg" },
    ],
    itemNote: "Covers install, real-world use cases, and integration with the rest of the stack.",
    outro:
      "From **Jupyter notebooks** to **Django APIs**, **Pandas/NumPy** pipelines and **AWS deployments**, you’ll learn how these tools connect to ship reliable, scalable software.",
  },

  roadmap: {
    heading: "Your [[Python Career Roadmap]]",
    intro:
      "Follow these **4 proven steps** to move from learner to **job-ready Python professional** with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 30-Hour Python Course",
        badge: "Job-Ready Foundations",
        description:
          "Master Python syntax, OOP, data structures, web (Django), data analysis, ML basics, automation, APIs, and deployments.",
      },
      {
        title: "Build 3 Portfolio Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship an e-commerce app, a data dashboard, and an automation/ML project. Host on GitHub + cloud with readme docs.",
      },
      {
        title: "Career Prep & Mock Interviews",
        badge: "Interview Readiness",
        description: "Resume revamp, ATS keywords, DSA warm-ups, system design for backend, and domain interview drills.",
      },
      {
        title: "Apply & Land a Python Role",
        badge: "Offer & Onboarding",
        description:
          "Target roles like Python Developer, Data Analyst, ML Engineer, Backend Developer, or Automation Engineer (₹6–15 LPA).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "30 Hours", label: "Program Duration", note: "Live, mentor-led sessions" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹6–15 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    outro: "Learn from anywhere. **Your journey to a Python career starts here.**",
    ctas: [{ label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized roadmap guidance" }],
  },

  projects: {
    heading: "40+ [[Real-World Projects]]",
    intro:
      "Build a **job-winning portfolio**: production-style architecture, clean code, measurable outcomes and clear documentation.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-commerce Website with Django",
        description: "Payments, carts, auth, admin—deployed & scalable.",
        tags: ["Django", "PostgreSQL", "Tailwind"],
      },
      {
        icon: "lineChart",
        title: "Stock Price Predictor (ML)",
        description: "Time-series features, model evaluation & reporting.",
        tags: ["Pandas", "scikit-learn", "Matplotlib"],
      },
      {
        icon: "mail",
        title: "Automated Email Sender",
        description: "Templated campaigns with attachments & logging.",
        tags: ["SMTP", "Schedule", "CLI"],
      },
      {
        icon: "search",
        title: "Web Scraper for Job Listings",
        description: "Robust scraping with rate-limit & dedupe guards.",
        tags: ["Requests", "BeautifulSoup", "CSV/DB"],
      },
      {
        icon: "bot",
        title: "Chatbot with NLP",
        description: "Intent detection, entity extraction & REST API.",
        tags: ["NLTK", "spaCy", "Flask"],
      },
      {
        icon: "layoutDashboard",
        title: "Data Dashboard with Streamlit",
        description: "Interactive KPIs, filters, and exportable insights.",
        tags: ["Streamlit", "Plotly", "Pandas"],
      },
      {
        icon: "image",
        title: "Instagram Auto-Poster",
        description: "Media pipeline, caption templates & scheduler.",
        tags: ["API", "CRON", "OAuth"],
      },
      {
        icon: "building",
        title: "Banking System CLI App",
        description: "Accounts, transactions, audits & test coverage.",
        tags: ["OOP", "SQLite", "Testing"],
      },
    ],
    outro: "Every project ships with README, tests, and deployment notes.",
  },

  testimonials: {
    heading: "Python Programming [[Course Reviews]]",
    intro:
      "Read verified **student testimonials** from our industry-aligned **Python Programming** program. Projects cover **NumPy**, **Pandas**, **APIs (FastAPI)**, **testing**, and **deployment** - everything you need to become **job-ready**.",
    ctas: [
      { label: "Enroll now", kind: "enroll" },
      { label: "Download syllabus", kind: "syllabus" },
    ],
  },

  career: {
    heading: "1.8M+ [[Python Jobs]] Worldwide",
    intro:
      "Roles you can land across **Data Science**, **Machine Learning**, **Backend**, **Automation**, and **DevOps**. Build an ATS-friendly portfolio recruiters love.",
    rolesTitle: "Job Roles",
    roles: [
      "Python Developer",
      "Data Scientist",
      "ML Engineer",
      "Backend Developer",
      "Automation Engineer",
      "Django Developer",
      "Data Analyst",
      "DevOps Engineer",
    ],
    companiesTitle: "Top Domains",
    companies: ["FinTech", "SaaS", "E-com"],
    companiesNote: "Hiring at scale",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "₹6–20 LPA", label: "Avg. Salary (IN)", note: "Role & location dependent" },
          { value: "65%+", label: "Remote Friendly", note: "Hybrid/remote roles" },
        ],
      },
      {
        kind: "cards",
        items: [
          { icon: "target", title: "Skills Recruiters Want", points: ["Python + SQL", "APIs & Django", "Pandas / scikit-learn"] },
          { icon: "briefcase", title: "Placement Support", points: ["Resume polish", "Mock interviews", "Job alerts"] },
          { icon: "layers", title: "Build Portfolio", points: ["Deployed apps", "Clean code & tests", "README + docs"] },
        ],
      },
    ],
    ctas: [{ label: "Talk to a Program Advisor", kind: "careerSession", ariaLabel: "Talk to a program advisor" }],
  },

  audience: {
    eyebrow: "Beginner-Friendly • Mentor-Guided • Portfolio Projects",
    heading: "Who is this [[Python course]] for?",
    intro:
      "A perfect fit whether you’re starting from scratch or upskilling for **Backend**, **Data**, **Automation**, and **DevOps** roles. Learn clean code, testing, Git, and deployment best practices.",
    items: [
      {
        icon: "graduationCap",
        title: "Students & Freshers",
        description: "Start from zero and build job-ready Python skills: syntax, OOP, APIs, SQL, and projects.",
      },
      {
        icon: "rocket",
        title: "Career Switchers",
        description: "Move from non-tech roles to high-growth Python careers in Backend, Data, or Automation.",
      },
      {
        icon: "briefcase",
        title: "Entrepreneurs",
        description: "Prototype MVPs faster, automate operations, and turn ideas into deployable products.",
      },
      {
        icon: "barChart",
        title: "Data Enthusiasts",
        description: "Enter Data Science & ML with Pandas, NumPy, scikit-learn, and clean experimentation.",
      },
    ],
    extras: [{ kind: "text", text: "Includes guided pathways, quizzes, and review on your mini-projects." }],
    outro:
      "From writing your **first Python script** to deploying **production-ready apps**, this program helps you develop real skills that companies hire for-clean code, testing, **Git/GitHub**, and cloud deployment.",
    ctas: [{ label: "Enroll Now", kind: "enroll" }],
  },

  faq: {
    intro: "Everything you need to know about the program — **live classes, certification, portfolio, and placements**.",
    items: PYTHON_FAQS,
  },

  cta: {
    eyebrow: "Live Online + Classroom • 40+ Projects • Job Assistance",
    heading: "Start Your [[Python Journey]] Today",
    intro:
      "Enroll now in the **30-hour, mentor-led** program with **placement assistance**, portfolio projects, and a **QR-verified certificate**.",
    actions: [
      { label: "Call Admissions: +91 788-83-83-788", kind: "tel", ariaLabel: "Call CDPL admissions" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email CDPL" },
    ],
    highlights: [
      { icon: "users", title: "Mentor-Led", description: "Small cohorts, code reviews, and doubt clearing" },
      { icon: "award", title: "Certificate", description: "Globally recognized, QR verified on completion" },
      { icon: "briefcase", title: "Placement", description: "Resume polish, mock interviews, job alerts" },
    ],
    footnotes: [
      { icon: "mapPin", text: "Mira Road & Vasai, Maharashtra • Weekday/Weekend batches • Hybrid learning available" },
    ],
  },
};

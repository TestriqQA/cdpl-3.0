// ============================================================================
// BLOG POST DATA - MODULAR CONTENT SYSTEM
// ============================================================================
// This file contains blog post metadata. Full content is stored in separate
// files in the /posts directory for better maintainability and performance.

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: {
    bg: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  categoryId: string;
  author: string;
  authorId: string;
  publishDate: string;
  lastModified?: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  contentFile: string; // Path to content file
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
    canonical?: string;
  };
}

export interface PopularPost {
  id: string;
  rank: number;
  title: string;
  category: string;
  slug: string;
}

export interface SidebarCategory {
  id: string;
  name: string;
  count: number;
  slug: string;
  color: string;
}

// ============================================================================
// AUTHORS DATA
// ============================================================================

export const AUTHORS: Record<string, Author> = {
  "shoeb-shaikh": {
    id: "shoeb-shaikh",
    name: "Shoeb Shaikh",
    bio: "Shoeb Shaikh is a seasoned Software Testing and Data Science Expert and a Mentor with over 14 years of experience in the field. Specialist in designing and managing processes, and leading high-performing teams to deliver impactful results.",
    avatar: "/blog/authors/shoeb-shaikh.png",
    role: "Test Automation Engineer & Data Science Enthusiast",
    social: {
      linkedin: "https://www.linkedin.com/in/ishaikhshoeb/",
    },
  },
  "ashish-shetty": {
    id: "ashish-shetty",
    name: "Ashish Shetty",
    bio: "Seasoned Business Intelligence and learning and development professional with over 11 years of experience empowering students and professionals to unlock career success through data-driven skills. Specializing in Power BI, Tableau, and Prompt Engineering, Ashish is known for delivering practical, high-impact workshops and training programs across academic and corporate sectors.",
    avatar: "/blog/authors/ashish-shetty.png",
    role: "Business Intelligence & Data Analytics Specialist",
    social: {

      linkedin: "https://www.linkedin.com/in/profashishshetty/"

    },
  },
  "teshoo-rai": {
    id: "teshoo-rai",
    name: "Teshoo Rai",
    bio: "A highly skilled Quality Analysis Engineer and Corporate Trainer, specialising in Software Development Life Cycle (SDLC) and Software Testing.",
    avatar: "/blog/authors/teshoo-rai.png",
    role: "Quality Analysis Engineer",
    social: {
      linkedin: "linkedin.com/in/teshoo-rai-b56179237"
    },
  },
  "vaibhav-kakade": {
    id: "vaibhav-kakade",
    name: "Vaibhav Kakade",
    bio: "A Manual Tester in TESTRIQ QA LLP and also as Corporate Trainer with CDPL. With a focused career in training and development.",
    avatar: "/blog/authors/vaibhav-kakade.png",
    role: "Quality Analysis Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/vaibhav-kakade-565bb6207/",
    },
  },
  "rehmat-shaikh": {
    id: "rehmat-shaikh",
    name: "Rehmat Shaikh",
    bio: "A visionary data scientist dedicated to unlocking the potential of data to drive informed decision-making and spark innovation. With a strong foundation in Data Science.",
    avatar: "/blog/authors/rehmat-shaikh.png",
    role: "Data Science Trainer",
    social: {
      linkedin: "https://www.linkedin.com/in/rehmat-shaikh-60a023324"
    },
  },
  "cezzane-khan": {
    id: "cezzane-khan",
    name: "Cezzane Khan",
    bio: "Cezzane Khan is a dedicated and innovative Data Science Trainer committed to empowering individuals and organizations.",
    avatar: "/blog/authors/cezzane-kha.png",
    role: "Data Science Trainer",
    social: {
      linkedin: "https://www.linkedin.com/in/khan-cezzane"
    },
  },
  "prakash-mishra": {
    id: "prakash-mishra",
    name: "Prakash Mishra",
    bio: "Drives software development initiatives, leading teams to build robust, scalable, and high-performance solutions with latest tools and technologies.",
    avatar: "/blog/authors/prakash-mishra.png",
    role: "Lead Software Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/prakashmmishra/"
    },
  },
  "jayesh-mistry": {
    id: "jayesh-mistry",
    name: "Jayesh Mistry",
    bio: "A passionate and detail-oriented frontend developer with a strong knowledge in Web Development and strong foundation in HTML, CSS, JavaScript, React.js and Next.js.",
    avatar: "/blog/authors/jayesh-mistry.png",
    role: "Frontend Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/jayesh-mistry-53300235b/"
    },
  },
  "sushma-pal": {
    id: "sushma-pal",
    name: "Sushma Pal",
    bio: "SEO Analyst & Digital Marketing Specialist helping brands grow organically through smart strategy, data-driven insights, and powerful content.",
    avatar: "/blog/authors/sushma-pal.png",
    role: "SEO Analyst & Digital Marketing Specialist",
    social: {
      linkedin: "https://www.linkedin.com/in/sushma-pal-a1557b1b1/"
    }
  },
  "adnan-khan": {
    id: "adnan-khan",
    name: "Adnan Khan",
    bio: "Full Stack JavaScript Developer who designs and ships end-to-end web apps. I use React/Next.js + Node.js/NestJS with TypeScript, building secure, scalable, high-performance systems with modern DevOps, testing, and cloud-native tooling.",
    avatar: "/blog/authors/adnan--khan.jpg",
    role: "Full Stack JavaScript Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/adnan--khan/"
    }
  },

};

// ============================================================================
// CATEGORIES DATA
// ============================================================================

export const CATEGORIES: Record<string, Category> = {
  "ai": {
    id: "ai",
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description: "Explore the latest in artificial intelligence and machine learning technologies",
    color: {
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
  },
  "web-development": {
    id: "web-development",
    name: "Web Development",
    slug: "web-development",
    description: "Modern web development techniques, frameworks, and best practices",
    color: {
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
  },
  // "react": {
  //   id: "react",
  //   name: "React",
  //   slug: "react",
  //   description: "Everything about React, from basics to advanced patterns and performance optimization",
  //   color: {
  //     bg: "bg-cyan-100",
  //     text: "text-cyan-700",
  //   },
  // },
  // "backend-development": {
  //   id: "backend-development",
  //   name: "Backend Development",
  //   slug: "backend-development",
  //   description: "Server-side development, databases, APIs, and backend architecture",
  //   color: {
  //     bg: "bg-green-100",
  //     text: "text-green-700",
  //   },
  // },
  // "ui-ux-design": {
  //   id: "ui-ux-design",
  //   name: "UI/UX Design",
  //   slug: "ui-ux-design",
  //   description: "User interface design, user experience, and accessibility best practices",
  //   color: {
  //     bg: "bg-pink-100",
  //     text: "text-pink-700",
  //   },
  // },
  // "devops": {
  //   id: "devops",
  //   name: "DevOps",
  //   slug: "devops",
  //   description: "DevOps practices, CI/CD, containerization, and infrastructure automation",
  //   color: {
  //     bg: "bg-amber-100",
  //     text: "text-amber-700",
  //   },
  // },
  // "cloud-computing": {
  //   id: "cloud-computing",
  //   name: "Cloud Computing",
  //   slug: "cloud-computing",
  //   description: "Cloud platforms, serverless architecture, and cloud-native development",
  //   color: {
  //     bg: "bg-indigo-100",
  //     text: "text-indigo-700",
  //   },
  // },
  "software-testing": {
    id: "software-testing",
    name: "Software Testing",
    slug: "software-testing",
    description: "Testing strategies, automation, and quality assurance practices",
    color: {
      bg: "bg-teal-50",
      text: "text-teal-800",
    },
  },
  "data-science": {
    id: "data-science",
    name: "Data Science",
    slug: "data-science",
    description: "Data analysis, visualization, and data-driven decision making",
    color: {
      bg: "bg-orange-50",
      text: "text-orange-800",
    },
  },
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "SEO, content marketing, and digital growth strategies",
    color: {
      bg: "bg-rose-100",
      text: "text-rose-700",
    },
  },

  "business-intelligence": {
    id: "business-intelligence",
    name: "Business Intelligence (BI)",
    slug: "business-intelligence",
    description: "Data warehousing, ETL, dashboards, and analytics for smarter decision-making",
    color: {
      bg: "bg-indigo-100",
      text: "text-indigo-700",
    },
  },

  // "career-tips": {
  //   id: "career-tips",
  //   name: "Career Tips",
  //   slug: "career-tips",
  //   description: "Career advice, interview tips, and professional development",
  //   color: {
  //     bg: "bg-violet-100",
  //     text: "text-violet-700",
  //   },
  // },
  // "tutorials": {
  //   id: "tutorials",
  //   name: "Tutorials",
  //   slug: "tutorials",
  //   description: "Step-by-step guides and hands-on tutorials for developers",
  //   color: {
  //     bg: "bg-emerald-100",
  //     text: "text-emerald-700",
  //   },
  // },
};

// ============================================================================
// BLOG POSTS METADATA
// ============================================================================

export const BLOG_POSTS: BlogPost[] = [

  {
    id: "1",
    slug: "top-data-science-trends-2025-guide",
    title: "Top Data Science Trends 2025: AI, Automation, and Ethical Insights",
    description: "Explore the top data science trends shaping 2025, from generative AI and automated ML to ethical practices and edge computing. A complete guide for professionals and businesses.",
    excerpt: "As data volumes explode in 2025, staying ahead of trends like agentic AI and augmented analytics is crucial. Learn how these innovations drive smarter decisions, boost efficiency, and address ethical challenges in data science.",
    featuredImage: "/blog/featured/ds.png",
    category: "Data Science",
    categoryId: "data-science",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-10-29",
    lastModified: "2025-10-29",
    readTime: "13 min read",
    tags: ["Data Science", "AI Trends", "Generative AI", "Automated ML", "Ethical AI", "Edge Computing", "2025"],
    featured: true,
    contentFile: "top-data-science-trends-2025-guide",
    seo: {
      metaTitle: "Data Science Trends 2025: Top Innovations & Predictions",
      metaDescription: "Discover the leading data science trends for 2025, including generative AI, automated analytics, and ethical data practices. Expert insights to future-proof your career and business.",
      keywords: [
        "data science trends 2025",
        "generative AI in data science",
        "automated machine learning",
        "ethical AI trends",
        "edge computing data",
        "augmented analytics",
        "agentic AI"
      ],
      ogImage: "/blog/featured/data-science-trends-2025.jpg",
      canonical: "/blog/top-data-science-trends-2025-guide"
    }
  },
  {
    id: "2",
    slug: "mastering-automated-software-testing-2025",
    title: "Mastering Automated Software Testing: The Complete 2025 Guide",
    description: "A comprehensive guide to automated software testing covering fundamentals, best practices, advanced techniques, tools, real-world examples, and future trends in 2025.",
    excerpt: "Discover how to build a robust automated testing strategy that saves time, reduces bugs, and scales with modern software development. From Selenium to AI-powered testing, this guide has everything QA engineers and developers need.",
    featuredImage: "/blog/featured/mastering-automated-software-testing-2025.png",
    category: "Software Testing",
    categoryId: "software-testing",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-01-15",
    lastModified: "2025-01-15",
    readTime: "14 min read",
    tags: ["Automated Testing", "Software Testing", "Selenium", "Test Automation", "QA", "DevOps", "2025"],
    featured: true,
    contentFile: "mastering-automated-software-testing-2025",
    seo: {
      metaTitle: "Automated Software Testing Guide 2025: Best Practices & Tools",
      metaDescription: "Master automated software testing in 2025. Learn fundamentals, avoid pitfalls, implement best practices, explore AI tools, and future-proof your QA strategy with this expert guide.",
      keywords: [
        "automated software testing",
        "test automation 2025",
        "selenium testing",
        "qa automation",
        "ai in testing",
        "software testing best practices",
        "end-to-end testing"
      ],
      ogImage: "/blog/featured/automated-software-testing-2025.jpg",
      canonical: "/blog/mastering-automated-software-testing-2025"
    }
  },

  {
    id: "3",
    slug: "what-is-software-testing",
    title: "What Is Software Testing? Types, Levels, and Examples",
    description: "A practical introduction to software testing for product teams at CDPL. Learn key testing types, testing levels across the SDLC, and real-world examples with tools and tips.",
    excerpt: "New to QA or refreshing fundamentals? Learn software testing basics, explore functional and non-functional types, understand testing levels from unit to UAT, and see simple examples you can apply today.",
    featuredImage: "/blog/featured/what-is-software-testing.png",
    category: "Software Testing",
    categoryId: "software-testing",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "12 min read",
    tags: [
      "Software Testing",
      "Testing Types",
      "Testing Levels",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "UAT",
      "Manual vs Automation",
      "Test Strategy",
      "Quality Assurance"
    ],
    featured: true,
    contentFile: "what-is-software-testing-types-levels-examples",
    seo: {
      metaTitle: "What Is Software Testing? Types, Levels, and Examples | CDPL Cinute Digital",
      metaDescription: "Complete software testing guide for CDPL learners and partners. Understand testing types, testing levels, best practices, pitfalls, examples, and tools to build reliable releases.",
      keywords: [
        "what is software testing",
        "software testing guide",
        "types of testing",
        "levels of testing",
        "unit testing",
        "integration testing",
        "system testing",
        "user acceptance testing",
        "qa best practices",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/software-testing-basics-og.jpg",
      canonical: "/blog/what-is-software-testing-types-levels-examples"
    }
  },
  {
    id: "4",
    slug: "manual-testing-test-scenarios-cases-suites",
    title: "Manual Testing 101: Test Scenarios, Test Cases, and Test Suites",
    description: "Learn manual testing fundamentals for CDPL learners and partner teams. Write clear test scenarios, actionable test cases, and maintainable test suites with examples and templates.",
    excerpt: "Start manual testing the right way. Understand scenarios vs cases vs suites, write steps that catch real defects, link to requirements, and organize suites that scale with CI and releases.",
    featuredImage: "/blog/featured/Manual-testing-101.jpg",
    category: "Software Testing",
    categoryId: "software-testing",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "11 min read",
    tags: [
      "Manual Testing",
      "Test Scenarios",
      "Test Cases",
      "Test Suites",
      "Test Design",
      "Traceability",
      "Exploratory Testing",
      "Bug Reporting",
      "QA Best Practices",
      "CDPL Cinute Digital"
    ],
    featured: true,
    contentFile: "manual-testing-101-test-scenarios-cases-suites",
    seo: {
      metaTitle: "Manual Testing 101: Test Scenarios, Test Cases, and Test Suites | CDPL Cinute Digital",
      metaDescription: "Step by step manual testing guide by CDPL. Learn to design test scenarios, write high quality test cases, structure test suites, and track coverage with templates and examples.",
      keywords: [
        "manual testing",
        "test scenarios",
        "test cases",
        "test suites",
        "manual testing guide",
        "test case template",
        "traceability matrix",
        "bug reporting",
        "qa best practices",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/manual-testing-101-og.jpg",
      canonical: "/blog/manual-testing-test-scenarios-cases-suites"
    }
  },
  {
    id: "5",
    slug: "how-to-write-test-cases",
    title: "How to Write Test Cases: Step-by-Step Template and Examples",
    description: "A practical how to for CDPL learners and partner teams. Use a simple template, see good vs bad examples, and write test cases that are clear, repeatable, and traceable.",
    excerpt: "Learn the anatomy of a great test case, compare good vs bad examples, grab a free template, avoid common mistakes, and apply QA tips for real projects at Cinute Digital Pvt Ltd.",
    featuredImage: "/blog/featured/how-to-write-test-cases-featured.png",
    category: "Software Testing",
    categoryId: "software-testing",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "10 min read",
    tags: [
      "how to write test cases",
      "test case template",
      "sample test cases",
      "manual testing",
      "QA best practices",
      "traceability",
      "login test cases",
      "checkout test cases",
      "CDPL Cinute Digital"
    ],
    featured: true,
    contentFile: "how-to-write-test-cases",
    seo: {
      metaTitle: "How to Write Test Cases: Step-by-Step Template + Examples",
      metaDescription: "A simple template for clear, repeatable test cases plus samples for login and checkout flows.",
      keywords: [
        "how to write test cases",
        "test case template",
        "sample test cases",
        "manual testing",
        "qa best practices",
        "login test cases",
        "checkout test cases",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/how-to-write-test-cases-og.jpg",
      canonical: "/blog/how-to-write-test-cases"
    }
  },
  {
    id: "6",
    slug: "what-is-data-science",
    title: "What Is Data Science? Definition, Examples, Skills, and Career Paths",
    description: "A beginner friendly guide by CDPL that explains what data science is, how it works, real world examples, key skills, and career paths with tools to get started.",
    excerpt: "Learn what data science means, how data becomes decisions, the core workflow, popular tools, real examples, and how to start a career with a simple learning plan.",
    featuredImage: "/blog/featured/what-is-data-science-featured-hero.png",
    category: "Data Science",
    categoryId: "data-science",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "10 min read",
    tags: [
      "what is data science",
      "data science definition",
      "data science examples",
      "data science skills",
      "data science tools",
      "machine learning basics",
      "career paths in data science",
      "CDPL Cinute Digital"
    ],
    featured: true,
    contentFile: "what-is-data-science",
    seo: {
      metaTitle: "What Is Data Science? Definition, Examples, Skills, and Career Paths",
      metaDescription: "Understand data science with a clear definition, workflow, tools, real examples, key skills, and career paths. A CDPL guide for learners and partner teams.",
      keywords: [
        "what is data science",
        "data science definition",
        "data science examples",
        "data science skills",
        "data science workflow",
        "data science tools",
        "machine learning basics",
        "data science career",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/what-is-data-science-og.jpg",
      canonical: "/blog/what-is-data-science"
    }
  },
  {
    id: "7",
    slug: "data-science-vs-machine-learning-vs-artificial-intelligence",
    title: "Data Science vs Machine Learning vs AI: The Clear Difference",
    description: "Understand the difference between data science, machine learning, and artificial intelligence with simple definitions, examples, skills, and tools. A CDPL guide for learners and partner teams.",
    excerpt: "Confused between data science, machine learning, and AI? This guide gives clear definitions, shows where they overlap, explains skills and tools for each, and includes examples you can relate to.",
    featuredImage: "/blog/featured/ds-vs-ml-vs-ai.png",
    category: "Data Science",
    categoryId: "data-science",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "12 min read",
    tags: [
      "data science vs machine learning vs ai",
      "difference between data science and machine learning and ai",
      "data science",
      "machine learning",
      "artificial intelligence",
      "ml vs ai",
      "skills and tools",
      "CDPL Cinute Digital"
    ],
    featured: true,
    contentFile: "data-science-vs-machine-learning-vs-artificial-intelligence",
    seo: {
      metaTitle: "Data Science vs Machine Learning vs AI: The Clear Difference",
      metaDescription: "Clear definitions and differences between data science, machine learning, and artificial intelligence. See overlaps, examples, skills, and tools with a CDPL study path.",
      keywords: [
        "data science vs machine learning vs ai",
        "difference between data science and machine learning and ai",
        "what is data science",
        "what is machine learning",
        "what is artificial intelligence",
        "ml vs ai",
        "data science skills",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/ds-vs-ml-vs-ai-og.jpg",
      canonical: "/blog/data-science-vs-machine-learning-vs-artificial-intelligence"
    }
  },
  {
    id: "8",
    slug: "30-must-know-functions-with-real-datasets",
    title: "Pandas Tutorial: 30 Must-Know Functions With Real Datasets",
    description: "Learn 30 essential Pandas functions with copy paste examples on real datasets. A CDPL focused tutorial for analysts, data scientists, and students.",
    excerpt: "Master the 80 20 of Pandas. From read_csv and merge to groupby, pivot_table, apply, and time series tricks, each function includes a short example on realistic data.",
    featuredImage: "/blog/featured/Pandas_Tutorial_30_Must-Know_Functions_With_Real_Datasets.png",
    category: "Data Science",
    categoryId: "data-science",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "15 min read",
    tags: [
      "pandas tutorial",
      "pandas functions",
      "python data analysis",
      "real datasets",
      "data science",
      "data wrangling",
      "pandas cheat sheet",
      "CDPL Cinute Digital"
    ],
    featured: true,
    contentFile: "30-must-know-functions-with-real-datasets",
    seo: {
      metaTitle: "Pandas Tutorial: 30 Must-Know Functions With Real Datasets",
      metaDescription: "A practical Pandas tutorial by CDPL with 30 essential functions and realistic datasets. Learn read_csv, merge, groupby, pivot_table, apply, datetime, and more.",
      keywords: [
        "pandas tutorial",
        "pandas functions",
        "pandas cheat sheet",
        "python data analysis",
        "pandas examples",
        "groupby in pandas",
        "merge in pandas",
        "pivot table pandas",
        "data cleaning pandas",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/pandas-30-functions-og.jpg",
      canonical: "/blog/30-must-know-functions-with-real-datasets"
    }
  },
  {
    id: "9",
    slug: "what-is-artificial-intelligence",
    title: "What Is Artificial Intelligence? Types, Examples, and Use Cases",
    description: "Beginner friendly AI guide by CDPL. Learn what artificial intelligence is, key types, real examples, and industry use cases with skills and tools to get started.",
    excerpt: "What is artificial intelligence? This CDPL guide explains AI in simple terms, covers types like symbolic, machine learning, deep learning, and generative AI, and shares practical examples and high value use cases.",
    featuredImage: "/blog/featured/what-is-artificial-intelligence.png",
    category: "Artificial Intelligence",
    categoryId: "ai",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "12 min read",
    tags: [
      "what is artificial intelligence",
      "types of artificial intelligence",
      "ai examples",
      "ai use cases",
      "machine learning vs ai",
      "generative ai",
      "deep learning",
      "nlp",
      "computer vision",
      "cdpl cinute digital"
    ],
    featured: true,
    contentFile: "what-is-artificial-intelligence",
    seo: {
      metaTitle: "What Is Artificial Intelligence? Types, Examples, and Use Cases | CDPL Cinute Digital",
      metaDescription: "Clear AI guide for beginners. Understand what artificial intelligence is, types of AI (symbolic, machine learning, deep learning, generative), real examples, and industry use cases with a CDPL learning path.",
      keywords: [
        "what is artificial intelligence",
        "types of artificial intelligence",
        "ai examples",
        "ai use cases",
        "machine learning vs ai",
        "generative ai",
        "deep learning",
        "natural language processing",
        "computer vision",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/what-is-artificial-intelligence-og.jpg",
      canonical: "/blog/what-is-artificial-intelligence"
    }
  },
  {
    id: "10",
    slug: "ai-agents-101-tools-memory-and-planning",
    title: "AI Agents 101: Tools, Memory, and Planning",
    description: "Beginner friendly guide to AI agents by CDPL. Learn how agent tools, memory, and planning work together to automate tasks safely and reliably.",
    excerpt: "New to AI agents? This CDPL guide explains what agents are, how they use tools and memory, popular planning strategies like ReAct, and how to evaluate and ship useful agent workflows.",
    featuredImage: "/blog/featured/ai-agents-101-tools-memory-and-planning.png",
    category: "Artificial Intelligence",
    categoryId: "ai",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "13 min read",
    tags: [
      "ai agents",
      "agent tools",
      "agent memory",
      "agent planning",
      "react prompting",
      "rag",
      "function calling",
      "workflow automation",
      "cdpl cinute digital"
    ],
    featured: true,
    contentFile: "ai-agents-101-tools-memory-and-planning",
    seo: {
      metaTitle: "AI Agents 101: Tools, Memory, and Planning | CDPL Cinute Digital",
      metaDescription: "Learn AI agents from the ground up. Understand tools and function calling, short term and long term memory, planning strategies like ReAct, safety, and evaluation with runnable code samples.",
      keywords: [
        "ai agents",
        "what is an ai agent",
        "agent tools",
        "agent memory",
        "agent planning",
        "react prompting",
        "rag for agents",
        "function calling",
        "workflow automation",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/ai-agents-101-og.jpg",
      canonical: "/blog/ai-agents-101-tools-memory-and-planning"
    }
  },
  {
    id: "11",
    slug: "overfitting-vs-underfitting-with-pictures",
    title: "Overfitting vs Underfitting with Pictures",
    description: "A clear, picture first guide by CDPL that explains overfitting and underfitting, bias variance trade off, detection methods, and practical fixes with scikit learn examples.",
    excerpt: "See what overfitting and underfitting look like with simple charts. Learn the bias variance trade off, how to detect issues with learning curves and validation, and how to fix them with regularization and better data.",
    featuredImage: "/blog/featured/overfitting-vs-underfitting-with-pictures-featured.png",
    category: "Artificial Intelligence",
    categoryId: "ai",
    author: "Shoeb Shaikh",
    authorId: "shoeb-shaikh",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "9 min read",
    tags: [
      "overfitting",
      "underfitting",
      "bias variance trade off",
      "machine learning basics",
      "model generalization",
      "learning curves",
      "regularization",
      "scikit learn",
      "cdpl cinute digital"
    ],
    featured: true,
    contentFile: "overfitting-vs-underfitting-with-pictures",
    seo: {
      metaTitle: "Overfitting vs Underfitting with Pictures | CDPL Cinute Digital",
      metaDescription: "Understand overfitting and underfitting visually. Learn bias variance trade off, how to detect problems with validation and learning curves, and how to fix them using regularization and better data.",
      keywords: [
        "overfitting vs underfitting",
        "bias variance trade off",
        "what is overfitting",
        "what is underfitting",
        "learning curves",
        "regularization",
        "scikit learn examples",
        "model generalization",
        "cdpl cinute digital"
      ],
      ogImage: "/blog/featured/overfitting-vs-underfitting-og.jpg",
      canonical: "/blog/overfitting-vs-underfitting-with-pictures"
    }
  },

  {
    id: "12",
    slug: "nextjs-15-seo-guide-react-server-components-2025",
    title: "Next.js 15 SEO Guide: Master React Server Components in 2025",
    description: "A practical, up-to-date SEO playbook for Next.js 15. Learn how React Server Components, the App Router, streaming, caching, ISR, and Edge rendering impact search performance in 2025.",
    excerpt: "Ship lightning-fast, indexable Next.js 15 apps. From React Server Components to ISR and Edge rendering, this 2025 guide shows you how to rank higher and load faster.",
    featuredImage: "/blog/featured/nextjs-15-seo-guide-react-server-components-2025.png",
    category: "Web Development",
    categoryId: "web-development",
    author: "Jayesh Mistry",
    authorId: "jayesh-mistry",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Next.js 15",
      "React Server Components",
      "Next.js SEO",
      "Core Web Vitals",
      "App Router",
      "ISR",
      "Edge Rendering",
      "2025"
    ],
    featured: true,
    contentFile: "nextjs-15-seo-guide-react-server-components-2025",
    seo: {
      metaTitle: "Next.js 15 SEO Guide (2025): Master React Server Components, ISR & Edge",
      metaDescription: "Learn high-impact Next.js 15 SEO: React Server Components, App Router, streaming, ISR, Edge rendering, metadata, sitemaps, and Core Web Vitals optimization for 2025.",
      keywords: [
        "next.js seo",
        "nextjs 15",
        "react server components",
        "nextjs app router",
        "core web vitals",
        "nextjs isr",
        "nextjs sitemap",
        "edge rendering",
        "nextjs metadata"
      ],
      ogImage: "/blog/featured/nextjs15-seo-guide-og.jpg",
      canonical: "/blog/nextjs-15-seo-guide-react-server-components-2025"
    }
  },
  {
    id: "13",
    slug: "ai-for-frontend-developers-llms-generate-code-tests-docs-2025",
    title: "AI for Front-End Developers: Using LLMs to Generate Code, Tests & Docs",
    description:
      "A hands-on 2025 playbook for front-end engineers to use LLMs to scaffold React/Next.js components, write TypeScript, generate unit/e2e tests, create Storybook and MDX docs, and wire everything into CI with safety and quality controls.",
    excerpt:
      "Turn AI into a force multiplier for your UI stack. Learn prompt patterns, guardrails, test-first workflows, Storybook automation, and CI integration to ship reliable, documented React and Next.js features faster.",
    featuredImage: "/blog/featured/ai-for-frontend-developers-llms-generate-code-tests-docs-2025.png",
    category: "Web Development",
    categoryId: "web-development",
    author: "Jayesh Mistry",
    authorId: "jayesh-mistry",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "LLM",
      "Front-End",
      "React",
      "Next.js",
      "TypeScript",
      "Jest",
      "Playwright",
      "Storybook",
      "MDX"
    ],
    featured: true,
    contentFile: "ai-for-frontend-developers-llms-generate-code-tests-docs",
    seo: {
      metaTitle:
        "AI for Front-End Developers (2025): Generate React/Next.js Code, Tests & Docs with LLMs",
      metaDescription:
        "A practical guide for using LLMs in front-end development: React/Next.js scaffolding, TypeScript patterns, Jest/Playwright tests, Storybook & MDX docs, prompts, and CI guardrails.",
      keywords: [
        "ai for front-end developers",
        "llm code generation react",
        "nextjs ai workflow",
        "generate unit tests jest",
        "playwright e2e testing",
        "storybook docs mdx automation",
        "typescript best practices ai"
      ],
      ogImage: "/blog/featured/ai-frontend-dev-og.jpg",
      canonical: "/blog/ai-for-frontend-developers-llms-generate-code-tests-docs-2025"
    }
  },
  {
    id: "14",
    slug: "migrating-gatsby-cra-to-nextjs-15-step-by-step",
    title: "Static to Dynamic: Migrating Gatsby/CRA to Next.js 15 (Step-by-Step)",
    description:
      "A practical 2025 migration guide for teams moving from Gatsby or Create React App to Next.js 15. Learn App Router, React Server Components, ISR, edge rendering, Metadata API, routing, SEO, images, and CI/CD.",
    excerpt:
      "Ship faster with React Server Components, App Router, and ISR. This step-by-step playbook shows how to migrate from Gatsby or CRA to Next.js 15 without losing SEO, performance, or developer velocity.",
    featuredImage: "/blog/featured/migrating-gatsby-cra-to-nextjs-15-step-by-step.png",
    category: "Web Development",
    categoryId: "web-development",
    author: "Jayesh Mistry",
    authorId: "jayesh-mistry",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Next.js 15",
      "Migration",
      "Gatsby",
      "Create React App",
      "React Server Components",
      "ISR",
      "SEO"
    ],
    featured: true,
    contentFile: "migrating-gatsby-cra-to-nextjs-15-step-by-step",
    seo: {
      metaTitle:
        "Migrate Gatsby/CRA to Next.js 15 (2025): Step-by-Step Guide to App Router, RSC, ISR & SEO",
      metaDescription:
        "Definitive 2025 guide to migrate from Gatsby or Create React App to Next.js 15. Covers App Router, React Server Components, ISR, edge rendering, routing, images, fonts, SEO (Metadata API), and CI/CD.",
      keywords: [
        "migrate gatsby to nextjs",
        "migrate cra to nextjs",
        "next.js 15 app router",
        "react server components migration",
        "nextjs isr migration",
        "nextjs seo metadata api",
        "gatsby to nextjs guide"
      ],
      ogImage: "/blog/featured/migrate-gatsby-cra-to-next15-og.jpg",
      canonical: "/blog/migrating-gatsby-cra-to-nextjs-15-step-by-step"
    }
  },
  {
    id: "15",
    slug: "2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue",
    title: "2025 Digital Marketing Strategy: Proven Frameworks to Grow Traffic & Revenue",
    description:
      "A step-by-step 2025 digital marketing playbook covering SEO, content strategy, paid media, email automation, CRO, and attribution. Use proven frameworks to scale qualified traffic, leads, and revenue with first-party data and GA4.",
    excerpt:
      "Build a high-ROI digital marketing engine for 2025. Learn ICP research, topical authority SEO, programmatic content, PPC mix, lifecycle email, CRO experimentation, and GA4 attribution—organized into a 90-day roadmap.",
    featuredImage: "/blog/featured/2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue.png",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    author: "Sushma Pal",
    authorId: "sushma-pal",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Digital Marketing",
      "SEO Strategy",
      "Content Marketing",
      "PPC",
      "CRO",
      "Email Marketing",
      "GA4",
      "First-Party Data",
      "Demand Generation",
      "ABM"
    ],
    featured: true,
    contentFile: "2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue",
    seo: {
      metaTitle:
        "2025 Digital Marketing Strategy: SEO, Content, PPC, Email & CRO Frameworks",
      metaDescription:
        "Create a winning 2025 digital marketing strategy. Master SEO (topical authority, programmatic content), PPC mix, lifecycle email, CRO, and GA4 attribution to grow traffic and revenue.",
      keywords: [
        "digital marketing strategy 2025",
        "seo strategy 2025",
        "content marketing plan",
        "programmatic seo",
        "ppc strategy google ads",
        "email marketing automation",
        "conversion rate optimization cro",
        "ga4 attribution",
        "first-party data strategy",
        "demand generation framework"
      ],
      ogImage: "/blog/featured/2025-digital-marketing-strategy-og.jpg",
      canonical: "/blog/2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue"
    }
  },
  {
    id: "16",
    slug: "linkedin-lead-generation-personal-branding-dm-funnels-that-scale",
    title: "LinkedIn Lead Generation: Personal Branding and DM Funnels That Scale",
    description:
      "A 2025 playbook for LinkedIn lead generation. Build a magnetic personal brand, design ethical DM funnels, and scale outreach with Sales Navigator, content pillars, CTAs, and conversion metrics.",
    excerpt:
      "Turn LinkedIn into a predictable pipeline engine. Learn personal branding, content frameworks, DM funnels, Sales Navigator targeting, offer design, and KPI tracking to grow qualified B2B leads.",
    featuredImage: "/blog/featured/linkedin-lead-generation-personal-branding-dm-funnels-that-scale.png",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    author: "Sushma Pal",
    authorId: "sushma-pal",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "LinkedIn Lead Generation",
      "Personal Branding",
      "Social Selling",
      "Sales Navigator",
      "Outbound",
      "Content Marketing",
      "B2B Marketing",
      "DM Strategy",
      "Appointment Setting"
    ],
    featured: true,
    contentFile: "linkedin-lead-generation-personal-branding-dm-funnels-that-scale",
    seo: {
      metaTitle:
        "LinkedIn Lead Generation (2025): Personal Branding & DM Funnels That Scale",
      metaDescription:
        "Master LinkedIn lead generation in 2025. Build a personal brand, create high-converting DM funnels, use Sales Navigator targeting, and track reply & booking rates for predictable B2B pipeline.",
      keywords: [
        "linkedin lead generation",
        "linkedin personal branding",
        "linkedin dm strategy",
        "sales navigator targeting",
        "social selling framework",
        "b2b appointment setting",
        "linkedin outreach templates",
        "linkedin content strategy",
        "inbound leads linkedin",
        "linkedin messages that convert"
      ],
      ogImage: "/blog/featured/linkedin-lead-gen-2025-og.jpg",
      canonical: "/blog/linkedin-lead-generation-personal-branding-dm-funnels-that-scale"
    }
  },
  {
    id: "17",
    slug: "ai-in-digital-marketing-prompting-content-ops-personalization-at-scale",
    title: "AI in Digital Marketing: Prompting, Content Ops, and Personalization at Scale",
    description:
      "A 2025 playbook for using AI in digital marketing: prompt engineering, content operations, and 1:1 personalization that scales across SEO, ads, email, and lifecycle—without sacrificing brand safety.",
    excerpt:
      "Turn AI into real pipeline. Learn prompt patterns, editorial workflows, human-in-the-loop QA, AI-driven personalization, and GA4/CRM attribution to grow qualified traffic, leads, and revenue.",
    featuredImage: "/blog/featured/ai-in-digital-marketing-prompting-content-ops-personalization-at-scale.png",
    category: "Digital Marketing",
    categoryId: "digital-marketing",
    author: "Sushma Pal",
    authorId: "sushma-pal",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "AI in Digital Marketing",
      "Prompt Engineering",
      "Content Operations",
      "Personalization",
      "Programmatic SEO",
      "Marketing Automation",
      "GA4",
      "First-Party Data",
      "Email Marketing",
      "CRO"
    ],
    featured: true,
    contentFile: "ai-in-digital-marketing-prompting-content-ops-personalization-at-scale",
    seo: {
      metaTitle:
        "AI in Digital Marketing (2025): Prompting, Content Ops & Personalization at Scale",
      metaDescription:
        "Master AI for digital marketing: prompt engineering, programmatic SEO, content ops, and 1:1 personalization across ads, email, and web. Includes QA guardrails, GA4 attribution, and a 90-day roadmap.",
      keywords: [
        "ai in digital marketing",
        "prompt engineering marketing",
        "content operations workflow",
        "programmatic seo",
        "marketing personalization at scale",
        "email marketing automation",
        "ga4 attribution",
        "first-party data strategy",
        "marketing ai tools 2025",
        "generative ai content marketing"
      ],
      ogImage: "/blog/featured/ai-digital-marketing-2025-og.jpg",
      canonical: "/blog/ai-in-digital-marketing-prompting-content-ops-personalization-at-scale"
    }
  },
  {
    id: "18",
    slug: "power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025",
    title: "Power BI vs Tableau vs Looker (Google Cloud): Which BI Tool Wins in 2025?",
    description:
      "An unbiased 2025 comparison of Power BI, Tableau, and Looker (Google Cloud). Evaluate pricing, performance, governance, embedded analytics, AI features, and best-fit scenarios for enterprises and startups.",
    excerpt:
      "Power BI vs Tableau vs Looker in 2025: side-by-side comparison of features, pricing, performance, governance, AI, and use cases—so you can choose the right BI platform for growth.",
    featuredImage: "/blog/featured/power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025.png",
    category: "Business Intelligence",
    categoryId: "business-intelligence",
    author: "Ashish Shetty",
    authorId: "ashish-shetty",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Power BI",
      "Tableau",
      "Looker",
      "Google Cloud",
      "Business Intelligence",
      "Data Visualization",
      "Embedded Analytics",
      "Self-Service BI",
      "Data Governance",
      "Analytics Engineering"
    ],
    featured: true,
    contentFile: "power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025",
    seo: {
      metaTitle:
        "Power BI vs Tableau vs Looker (2025): Pricing, Features, and Best BI Tool",
      metaDescription:
        "Compare Power BI, Tableau, and Looker (Google Cloud) for 2025. See pricing, AI features, data modeling, governance, embedded analytics, and which BI tool is best for your team.",
      keywords: [
        "power bi vs tableau",
        "tableau vs looker",
        "power bi vs looker",
        "best bi tools 2025",
        "business intelligence comparison",
        "power bi pricing",
        "tableau pricing",
        "looker pricing",
        "embedded analytics",
        "self-service bi"
      ],
      ogImage: "/blog/featured/bi-tools-2025-og.jpg",
      canonical: "/blog/power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025"
    }
  },
  {
    id: "19",
    slug: "sql-for-bi-analysts-queries-window-functions-performance-tuning",
    title: "SQL for BI Analysts: Queries, Window Functions, and Performance Tuning",
    description:
      "A practical 2025 guide to SQL for BI analysts: SELECT patterns, joins, aggregations, window functions (ROW_NUMBER, RANK, LAG/LEAD), CTEs, and performance tuning with indexes, partitions, and EXPLAIN.",
    excerpt:
      "Level up your BI SQL. Learn high-impact query patterns, master window functions, and tune performance with indexes, partitions, and caching—plus ready-to-use snippets for dashboards and ad-hoc analysis.",
    featuredImage: "/blog/featured/sql-for-bi-analysts-queries-window-functions-performance-tuning.png",
    category: "Business Intelligence",
    categoryId: "business-intelligence",
    author: "Ashish Shetty",
    authorId: "ashish-shetty",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "SQL",
      "Business Intelligence",
      "Window Functions",
      "Performance Tuning",
      "Analytics Engineering",
      "Data Warehousing",
      "ETL/ELT",
      "PostgreSQL",
      "BigQuery",
      "Snowflake"
    ],
    featured: true,
    contentFile: "sql-for-bi-analysts-queries-window-functions-performance-tuning",
    seo: {
      metaTitle:
        "SQL for BI Analysts (2025): Queries, Window Functions & Performance Tuning",
      metaDescription:
        "Master SQL for BI in 2025. Learn high-impact query patterns, window functions (ROW_NUMBER, RANK, LAG/LEAD), CTEs, and performance tuning with indexes, partitions, and EXPLAIN for faster dashboards.",
      keywords: [
        "sql for bi analysts",
        "window functions sql",
        "sql performance tuning",
        "row_number rank dense_rank",
        "lag lead rolling average",
        "sql joins and aggregates",
        "ctes and materialized views",
        "bigquery partition clustering",
        "snowflake performance best practices",
        "postgresql indexing explain analyze"
      ],
      ogImage: "/blog/featured/sql-for-bi-analysts-2025-og.jpg",
      canonical: "/blog/sql-for-bi-analysts-queries-window-functions-performance-tuning"
    }
  },
  {
    id: "20",
    slug: "drill-through-bookmarks-buttons-ux-patterns-pro-dashboards",
    title: "Drill-Through, Bookmarks, and Buttons: UX Patterns for Pro Dashboards",
    description:
      "A 2025 UX guide to build high-converting dashboards using drill-through, bookmarks, and buttons. Includes patterns for Power BI, Tableau, and Looker, with navigation, context, and accessibility best practices.",
    excerpt:
      "Design dashboards users love. Learn actionable UX patterns for drill-through, bookmarks, and buttons—optimize task flows, preserve context, and speed insights across Power BI, Tableau, and Looker.",
    featuredImage: "/blog/featured/drill-through-bookmarks-buttons-ux-patterns-pro-dashboards.png",
    category: "Business Intelligence",
    categoryId: "business-intelligence",
    author: "Ashish Shetty",
    authorId: "ashish-shetty",
    publishDate: "2025-11-06",
    lastModified: "2025-11-06",
    readTime: "14 min read",
    tags: [
      "Dashboard UX",
      "Power BI",
      "Tableau",
      "Looker",
      "Drill-Through",
      "Bookmarks",
      "Buttons",
      "Interaction Design",
      "Self-Service BI",
      "Product Analytics"
    ],
    featured: true,
    contentFile: "drill-through-bookmarks-buttons-ux-patterns-pro-dashboards",
    seo: {
      metaTitle:
        "Dashboard UX (2025): Drill-Through, Bookmarks & Buttons for Power BI, Tableau, Looker",
      metaDescription:
        "Master dashboard UX in 2025. Use drill-through, bookmarks, and buttons to build fast, intuitive Power BI, Tableau, and Looker experiences that increase adoption and time-to-insight.",
      keywords: [
        "dashboard ux patterns",
        "power bi bookmarks",
        "power bi drill through",
        "tableau navigation buttons",
        "looker drill fields",
        "bi dashboard design 2025",
        "self-service analytics ux",
        "embedded analytics navigation",
        "data storytelling dashboards",
        "business intelligence best practices"
      ],
      ogImage: "/blog/featured/dux-pro-dashboards-2025-og.jpg",
      canonical: "/blog/drill-through-bookmarks-buttons-ux-patterns-pro-dashboards"
    }
  }









];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getAllPosts = (): BlogPost[] => {
  return BLOG_POSTS.sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

export const getFeaturedPost = (): BlogPost | null => {
  return BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
};

export const getLatestPosts = (limit: number = 10): BlogPost[] => {
  const featuredPost = getFeaturedPost();
  return BLOG_POSTS
    .filter(post => post.id !== featuredPost?.id)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  return BLOG_POSTS.find(post => post.slug === slug) || null;
};

export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  return BLOG_POSTS
    .filter(post => post.categoryId === categoryId)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getCategoryById = (id: string): Category | null => {
  return CATEGORIES[id] || null;
};

export const getCategoryBySlug = (slug: string): Category | null => {
  return Object.values(CATEGORIES).find(cat => cat.slug === slug) || null;
};

export const getAuthorById = (id: string): Author | null => {
  return AUTHORS[id] || null;
};

export const getAllCategories = (): Category[] => {
  return Object.values(CATEGORIES);
};

export const getMainCategories = (): Category[] => {
  return [
    CATEGORIES["software-testing"],
    CATEGORIES["data-science"],
    CATEGORIES["web-development"],
    CATEGORIES["ai-ml"],
  ];
};

export const getDropdownCategories = (): Category[] => {
  const mainCategoryIds = ["software-testing", "data-science", "web-development", "ai-ml"];
  return Object.values(CATEGORIES).filter(cat => !mainCategoryIds.includes(cat.id));
};

// ============================================================================
// SIDEBAR DATA
// ============================================================================

export const POPULAR_POSTS: PopularPost[] = [
  {
    id: "1",
    rank: 1,
    title: "The Future of AI in Web Development: 2025 and Beyond",
    category: "AI & ML",
    slug: "/blog/future-of-ai-web-development-2025"
  },
  {
    id: "2",
    rank: 2,
    title: "Building Responsive Layouts with CSS Grid and Flexbox",
    category: "Web Dev",
    slug: "/blog/responsive-layouts-css-grid-flexbox"
  },
  {
    id: "3",
    rank: 3,
    title: "React 19: What's New and How to Migrate",
    category: "React",
    slug: "/blog/react-19-whats-new-migration"
  },
  {
    id: "4",
    rank: 4,
    title: "Optimizing Database Performance for High-Traffic Applications",
    category: "Backend",
    slug: "/blog/database-performance-optimization"
  },
  {
    id: "5",
    rank: 5,
    title: "Leveraging Generative AI for Content Creation",
    category: "AI & ML",
    slug: "/blog/generative-ai-content-creation"
  },
];

// export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
//   {
//     id: "1",
//     name: "AI & Machine Learning",
//     count: 2,
//     slug: "/blog/category/ai-ml",
//     color: "bg-purple-100 text-purple-700"
//   },
//   {
//     id: "2",
//     name: "Web Development",
//     count: 1,
//     slug: "/blog/category/web-development",
//     color: "bg-blue-100 text-blue-700"
//   },
//   {
//     id: "3",
//     name: "React",
//     count: 2,
//     slug: "/blog/category/react",
//     color: "bg-cyan-100 text-cyan-700"
//   },
//   {
//     id: "4",
//     name: "Backend Development",
//     count: 2,
//     slug: "/blog/category/backend-development",
//     color: "bg-green-100 text-green-700"
//   },
//   {
//     id: "5",
//     name: "UI/UX Design",
//     count: 1,
//     slug: "/blog/category/ui-ux-design",
//     color: "bg-pink-100 text-pink-700"
//   },
//   {
//     id: "6",
//     name: "DevOps",
//     count: 1,
//     slug: "/blog/category/devops",
//     color: "bg-amber-100 text-amber-700"
//   },
//   {
//     id: "7",
//     name: "Cloud Computing",
//     count: 1,
//     slug: "/blog/category/cloud-computing",
//     color: "bg-indigo-100 text-indigo-700"
//   },
// ];



// ============================================================================
// NEW HELPER FUNCTIONS
// ============================================================================

export const getPostsByAuthorId = (authorId: string): BlogPost[] => {
  return BLOG_POSTS.filter((post) => post.authorId === authorId).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
};

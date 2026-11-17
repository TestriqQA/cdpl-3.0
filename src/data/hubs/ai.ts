// Artificial Intelligence category hub (/courses/artificial-intelligence-courses),
// rendered by src/components/category-hub/CategoryHubPage.tsx. Moved from the old
// src/components/AI-Courses/* sections and their data.ts / faqData.ts.
//
// The hub has one course, so the curriculum section shows that course's four
// modules (no learning path, no track tabs). Copy is kept except repeated
// filler and lines copied from other hubs: the "SEO Optimized" eyebrow, the second
// stats row, per-card buttons that only opened the enrol modal, defaults filled
// into every career card ("Mid" / "Medium Demand" / "N/A"), the "20% discount"
// promo, and the second consultation form. Lines copied from the BI and testing
// hubs ("BI professional", "BI Career", "QA careers", the BI FAQ intro) now say AI.

import type { CategoryHubContent } from "@/types/categoryHub";
import type { CourseCardIcon } from "@/components/courses/CourseCard";

type RawCourse = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  popular: boolean;
  link: string;
  titleAttribute: string;
  icon: CourseCardIcon;
  features: string[];
  syllabusLink?: string;
};

const RAW_COURSES: RawCourse[] = [
    {
        id: 1,
        title: 'Prompt Engineering with Gen AI',
        category: 'Artificial Intelligence',
        description: 'Become an AI Expert in Mumbai. Master the fundamentals of AI, deep learning, NLP, and intelligent automation systems with hands-on projects and industry certifications.',
        duration: '20 Hours',
        students: '10,000+',
        level: 'Master',
        popular: true,
        link: '/courses/artificial-intelligence-courses/prompt-engineering-course',
        titleAttribute: 'Prompt Engineering with Generative AI Course',
        icon: 'Brain',
        features: ['AI Foundations & Generative AI', 'Large Language Models & Multimodal AI', 'Prompt Engineering Techniques', 'Responsible AI, Governance & Capstone'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/prompt-engineering-with-gen-ai.pdf',
    },
];

export const aiHub: CategoryHubContent = {
  category: "ai",
  sourceName: "Artificial Intelligence Course Category Page",

  seo: {
    // hubMetadata appends " | CDPL"; the old page passed this same string, so the
    // final <title> stays "Artificial Intelligence Courses in Mumbai | CDPL | CDPL".
    title: "Artificial Intelligence Courses in Mumbai",
    description:
      "Advance your career with CDPL Artificial Intelligence courses — prompt engineering, generative AI, NLP & deep learning with hands-on projects and placement assistance.",
    keywords: ["artificial intelligence course", "AI training", "generative ai course", "deep learning", "NLP training"],
    image: "/og-images/courses-artificial-intelligence-courses-og.webp",
  },

  hero: {
    breadcrumb: "Artificial Intelligence",
    badges: [
      { icon: "sparkles", text: "India's comprehensive Artificial Intelligence Training Institute" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "Industry-Led Expert Mentors" },
    ],
    h1: "Master [[Artificial Intelligence]] & Machine Learning - Build intelligent systems",
    subtitle:
      "Industry-ready AI training with hands-on projects using Python, NumPy, Pandas, scikit-learn, TensorFlow and PyTorch. Learn NLP, computer vision, deep learning, model evaluation, explainability, deployment and MLOps. Build a strong AI portfolio and receive placement support for Data Scientist, ML Engineer and AI Research roles.",
    description:
      "CDPL's Artificial Intelligence program covers fundamentals of AI and ML, Python for data science, supervised and unsupervised learning, deep learning with TensorFlow and PyTorch, NLP and computer vision, model evaluation and explainability, model deployment, MLOps, and ethical AI practices. The curriculum is designed for beginners and working professionals aiming for Data Scientist, ML Engineer, and AI Research roles.",
    ctas: [
      { label: "Download Brochure", kind: "brochure", primary: true },
      { label: "Watch CDPL", kind: "video", href: "https://www.youtube.com/watch?v=8kB2wESj1n8" },
    ],
    highlights: [
      "100% Live Interactive Classes",
      "90+ Real-World AI Projects",
      "Industry Certifications (TensorFlow, AWS, GCP)",
      "ML Models & Deployment",
      "Job Support",
      "Flexible Batches",
      "Lifetime Access",
    ],
  },

  why: {
    eyebrow: "Artificial Intelligence",
    heading: "Build & Deploy [[Cutting-Edge AI Systems]]",
    intro:
      "Learn practical AI and machine learning skills — from deep learning and NLP to MLOps and ethical AI — designed to help you ship real-world models and products.",
    cards: [
      {
        icon: "brain",
        title: "Deep Learning & Neural Networks",
        description:
          "Master deep learning architectures (CNNs, RNNs, transformers) and practical techniques for training production-grade neural networks for vision, language and time-series tasks.",
      },
      {
        icon: "cpu",
        title: "Machine Learning & Model Engineering",
        description:
          "Build robust ML pipelines: feature engineering, model selection, evaluation, hyperparameter tuning and deployment best practices for reliable, scalable AI systems.",
      },
      {
        icon: "lineChart",
        title: "Data Science & Applied Analytics",
        description:
          "Learn end-to-end data science workflows — data cleaning, exploratory analysis, statistical inference and storytelling with data to drive AI product decisions.",
      },
      {
        icon: "network",
        title: "Natural Language Processing (NLP)",
        description:
          "Hands-on NLP with transformers, sequence models, fine-tuning large language models, embeddings and retrieval-augmented generation for search, chatbots and summarization.",
      },
      {
        icon: "eye",
        title: "Computer Vision & Perception",
        description:
          "Implement modern computer vision solutions: image classification, object detection, segmentation, and practical approaches for deploying visual AI in real-world applications.",
      },
      {
        icon: "zap",
        title: "Generative AI & Foundation Models",
        description:
          "Explore generative models, diffusion models, fine-tuning strategies and creative AI workflows to build text, image and multimodal generation products.",
      },
      {
        icon: "server",
        title: "MLOps & Productionizing AI",
        description:
          "Operationalize models with CI/CD for ML, monitoring, model versioning, reproducible training, and scalable serving to keep AI systems healthy in production.",
      },
      {
        icon: "award",
        title: "AI Ethics, Safety & Responsible AI",
        description:
          "Design and deploy AI responsibly by learning fairness, interpretability, privacy-preserving techniques and governance practices for trustworthy AI systems.",
      },
      {
        icon: "barChart",
        title: "AI Product Design & KPI-Driven Outcomes",
        description:
          "Translate business goals into AI success metrics — define KPIs, run experiments, measure impact, and iterate product features driven by data and user feedback.",
      },
    ],
    outro: "Ready to accelerate your AI career and build impactful models?",
    ctas: [{ label: "Explore AI Courses", kind: "scroll", href: "courses" }],
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
    viewAll: { label: "View All Courses", href: "/courses" },
  },

  // The hub has one course, so the learning path is that course's four
  // stages (Modules 1–10) and the section links to the course page once.
  path: {
    eyebrow: "Learning Path",
    heading: "[[Prompt Engineering]] Course Syllabus",
    intro: "Prompt Engineering with Generative AI: Modules 1–10, from AI foundations to a certified capstone.",
    stages: [
      {
        title: "AI Foundations & Generative AI Introduction",
        description:
          "Modules 1–4: AI evolution, the AI ecosystem and machine learning foundations, and the core principles of Generative AI.",
        topics: ["Introduction to AI", "AI Ecosystem", "Machine Learning Foundations", "Generative AI Concepts"],
        courses: [],
      },
      {
        title: "Large Language Models & Multimodal AI",
        description:
          "Modules 5–7: how large language models work, computer vision with LLMs, and hands-on image, speech and video generation tools.",
        topics: ["Large Language Models", "Computer Vision & LLMs", "Image Generation", "Speech & Video AI"],
        courses: [],
      },
      {
        title: "Mastering Prompt Engineering Techniques",
        description:
          "Module 8: prompt design, contextual structuring and real-world prompt optimisation, up to agents that call tools.",
        topics: ["Chain-of-Thought", "Few-Shot / Zero-Shot", "ReAct", "Tree-of-Thoughts", "Structured Outputs", "Function Calling"],
        courses: [],
      },
      {
        title: "Responsible AI, Governance & Capstone",
        description:
          "Modules 9–10: ethics, bias mitigation and prompt security, then an end-to-end generative AI capstone and certification.",
        topics: ["Responsible AI", "Bias Mitigation", "Prompt Security", "Capstone Project", "Certification"],
        courses: [],
      },
    ],
    ctas: [{ label: "See the full Prompt Engineering syllabus", kind: "link", href: "/courses/artificial-intelligence-courses/prompt-engineering-course" }],
  },

  // One stats row: the old page had two (here and under Career). The row kept is
  // the site-wide one; the other's "92% placement rate", "800+ hiring partners"
  // and "3,200+ trained" counts are claims BLG-205 removed everywhere else.
  testimonials: {
    eyebrow: "AI Student Success Stories",
    heading: "Real Results From [[Real Artificial Intelligence Professionals]]",
    intro:
      "Join AI practitioners who advanced their careers with our practical, industry-driven Artificial Intelligence & Machine Learning training. Learn MLOps, deep learning, large language models, and real-world deployment — designed to get you hired at top AI teams.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "{rating}", label: "Learner Rating" },
          { value: "40%", label: "Avg. Salary Increase" },
          { value: "Live", label: "Mentor-Led Classes" },
        ],
      },
    ],
    outro:
      "**Start Your AI Career** — join our next Artificial Intelligence cohort: hands-on labs, LLM projects, and hiring support.",
    ctas: [{ label: "Enroll in AI Program", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Capstone Projects",
    heading: "Hands-On [[Projects]]",
    intro: "Apply your learning through practical, industry-relevant projects that strengthen your portfolio.",
    items: [
      {
        icon: "activity",
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
        icon: "trendingUp",
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
        text: "Transform from a learner to a job-ready AI professional with hands-on experience.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio-Ready Projects",
            description: "Build professional-grade AI solutions that demonstrate your expertise to potential employers and clients.",
          },
          {
            icon: "award",
            title: "Industry Recognition",
            description: "Work on projects based on real business scenarios from Fortune 500 companies across multiple industries.",
          },
          {
            icon: "zap",
            title: "Interview Confidence",
            description: "Discuss actual implementations in interviews with hands-on experience in model training, evaluation, and deployment.",
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: "Career Opportunities",
    heading: "Launch Your [[AI Career]]",
    intro:
      "Explore the high-growth career paths available to our AI graduates, with roles in Machine Learning, Deep Learning, and Data Science.",
    paths: [
      {
        role: "AI Engineer",
        trending: true,
        description: "Design, develop, and deploy AI models and systems.",
        salaryRange: "₹8L - ₹25L+",
        skills: ["Python", "Deep Learning", "Cloud Platforms"],
        opportunities: ["Tech Startups", "R&D Labs", "Fintech"],
      },
      {
        role: "Machine Learning Scientist",
        trending: true,
        description: "Research and develop new ML algorithms and models.",
        salaryRange: "₹12L - ₹35L+",
        skills: ["Statistics", "Algorithm Design", "TensorFlow/PyTorch"],
        opportunities: ["Academic Research", "Big Tech", "Healthcare"],
      },
      {
        role: "Data Scientist",
        description: "Analyze complex data to extract insights and drive business decisions.",
        salaryRange: "₹7L - ₹20L+",
        skills: ["Data Analysis", "SQL", "Visualization"],
        opportunities: ["Consulting", "E-commerce", "Banking"],
      },
    ],
    outro: "**Ready to Launch Your AI Career?** Get personalized career guidance and placement support.",
    ctas: [
      { label: "Talk to Career Counselor", kind: "careerSession" },
      { label: "Download Career Guide", kind: "brochure" },
      { label: "View Job Openings", kind: "link", href: "/jobs/live-jobs" },
    ],
  },

  // The page and its FAQPage schema already used the same eight questions.
  faq: {
    intro:
      "Everything you need to know about our Artificial Intelligence course, career opportunities, certifications, and how we help you succeed in the AI industry.",
    items: [
      {
        question: "What is Artificial Intelligence and why should I learn it?",
        answer:
          "Artificial Intelligence (AI) is the science of building machines and systems that can think, learn, and make decisions like humans. Learning AI opens doors to high-paying careers in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. As companies increasingly adopt automation and AI-driven solutions, the demand for AI engineers has grown by over 40% globally, making it one of the most future-proof careers.",
      },
      {
        question: "Do I need programming experience to start learning AI?",
        answer:
          "You do not need advanced programming knowledge! Basic Python is recommended, but our AI course starts from fundamentals and gradually moves into Machine Learning, Deep Learning, and Generative AI. Even beginners can follow along with our hands-on approach, guided assignments, and real-world AI projects.",
      },
      {
        question: "How long does it take to complete the Artificial Intelligence course?",
        answer:
          "Our comprehensive AI program takes 16–20 weeks with flexible weekend and weekday batches. Fast-track options (10–12 weeks) are available for working professionals. You will learn Python, ML, Deep Learning, NLP, and Generative AI while completing 8+ industry projects, capstone work, and model deployment.",
      },
      {
        question: "What certifications will I receive after completing the AI course?",
        answer:
          "You will receive an industry-recognized Artificial Intelligence Professional Certificate upon completion. We also prepare you for global certifications such as TensorFlow Developer, AWS Machine Learning Specialty, and Microsoft AI Engineer (AI-102). Study materials, mock tests, and exam guidance are included.",
      },
      {
        question: "What is the average salary for AI professionals in India?",
        answer:
          "Entry-level AI Engineers earn ₹8–14 LPA, Machine Learning Engineers earn ₹10–20 LPA, and experienced Deep Learning or Generative AI experts can earn ₹25–45+ LPA. Top tech companies, startups, and research labs offer even higher packages, especially for candidates skilled in LLMs, MLOps, and cloud deployment.",
      },
      {
        question: "What kind of job support do you provide after course completion?",
        answer:
          "We provide personalized career support including resume building, GitHub/portfolio creation, mock interviews, hackathon preparation, LinkedIn optimization, and direct referrals to our hiring partners. Our AI program has a strong placement record with students joining roles like AI Engineer, ML Engineer, Data Scientist, and Research Analyst.",
      },
      {
        question: "What is the batch size and learning format for the AI course?",
        answer:
          "We keep batch sizes small (maximum 15 learners) to ensure personalized attention from mentors. All sessions are live and interactive. You also get lifetime access to recordings, AI tools, code templates, doubt-solving sessions, interview practice, and our alumni community for ongoing support.",
      },
      {
        question: "What tools and technologies will I master in this AI course?",
        answer:
          "You will gain practical experience with Python, NumPy, Pandas, Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, NLP (Transformers, BERT, GPT), Generative AI tools, LangChain, LLM apps, cloud platforms (AWS / Azure / GCP), and MLOps tools for model deployment. Everything you learn is directly aligned with current industry demand.",
      },
    ],
  },

  cta: {
    heading: "Ready to Start Your [[AI Career]]?",
    intro: "Join students who have successfully launched their AI careers.",
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

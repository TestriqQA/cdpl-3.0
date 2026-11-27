// Shared content for every "Artificial Intelligence Course in <city>" page.
// Edit here to change all of them at once. Placeholders are filled per city:
// {{city}} location name, {{cityLower}} lower-case name, {{citySlug}} URL form,
// {{state}} state, {{slug}} this page's URL slug.
// A city that needs something different gets it in ../overrides/artificial-intelligence.ts.

import type { CityCourseTemplate } from "../types";

export const artificialIntelligenceTemplate: CityCourseTemplate = {
  courseName: "Artificial Intelligence",
  heroImage: "/images/ai-hero-{{citySlug}}.jpg",
  metadata: {
    title: "Artificial Intelligence Course in {{city}} | Comprehensive AI Training",
    description: "Join the comprehensive Artificial Intelligence course in {{city}}. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in {{city}}.",
    keywords: "artificial intelligence course {{citySlug}}, ai training {{citySlug}}, machine learning course {{citySlug}}, deep learning course, nlp course {{citySlug}}, ai certification {{citySlug}}",
  },
  specializations: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Robotics",
    "Data Science",
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
    { label: "{{city}}", href: "/{{slug}}" },
  ],
  heroContent: {
    title: "Become an AI Expert in {{city}}",
    subtitle: "India's comprehensive AI Course for Tech Professionals",
    description: "Unlock your potential with our comprehensive Artificial Intelligence course in {{city}}. Gain hands-on experience with real-world projects and become a certified AI engineer.",
    certifications: [
      "Certified AI Professional",
      "IBM Certified AI Engineer",
      "Microsoft Certified: Azure AI Engineer Associate",
    ],
    stats: [
      { number: "10000+", label: "Students Trained", description: "Successfully trained in AI and ML" },
      { number: "95%", label: "Placement Rate", description: "Placed in top tech companies" },
      { number: "16", label: "Weeks Duration", description: "Intensive learning program" },
      { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
    ],
    landmarks: ["CSMT", "Gateway of India", "Bandra-Worli Sea Link"],
  },
  courseOverviewContent: {
    title: "What You'll Learn",
    description: "Our AI course covers everything from the fundamentals of Python to advanced topics in deep learning and robotics.",
    subtitle: "Master the most in-demand AI skills with our hands-on curriculum.",
    modules: [
      {
        icon: "Zap",
        trending: true,
        name: "Prompt Engineering with Generative AI",
        description: "Master Prompt Engineering with Generative AI! Craft perfect prompts for ChatGPT, Gemini, Claude & LLMs. Boost output quality, automate tasks & build AI agents. Hands-on projects. Enroll now!",
        topics: ["Prompt Engineering Mastery", "Generative AI Prompts", "LLM Prompt Techniques"],
        link: "/courses/artificial-intelligence-courses/prompt-engineering-course",
      },
    ],
  },
  curriculumContent: {
    title: "Detailed Curriculum",
    subtitle: "Choose a program tab to see its modules.",
    tracks: [
      {
        id: "prompt-engineering",
        title: "Prompt Engineering with Generative AI",
        weeks: [
          {
            number: "01",
            title: "AI Foundations & Generative AI Introduction",
            description: "Module 1-4: Introduction to AI, AI Ecosystem & Machine Learning Foundations, Introduction to Generative AI, Generative Learning & Technical Concepts. Building the base understanding of AI evolution, ML basics, and core Generative AI principles.",
            deliverables: ["AI & GenAI Fundamentals Assessment", "Basic Generative AI Experimentation Report"],
          },
          {
            number: "02",
            title: "Large Language Models & Multimodal AI",
            description: "Module 5-7: The Evolution & Power of Large Language Models, Computer Vision & LLMs, Video, Speech & Generative AI Tools. Deep dive into LLMs, multimodal capabilities, and hands-on with tools like image generation, speech synthesis, and video AI.",
            deliverables: ["LLM Interaction Projects (Text/Image Generation)", "Multimodal AI Tool Portfolio"],
          },
          {
            number: "03",
            title: "Mastering Prompt Engineering Techniques",
            description: "Module 8: Prompt Engineering & Practical Applications. Advanced techniques including prompt design, contextual structuring, Chain-of-Thought, Few-Shot/Zero-Shot, ReAct, Tree-of-Thoughts, role-playing, structured outputs, function calling, and real-world prompt optimization.",
            deliverables: [
              "Advanced Prompt Library (100+ Prompts)",
              "Complex Reasoning Solvers & Benchmarks",
              "AI Agent with Tool Use",
            ],
          },
          {
            number: "04",
            title: "Responsible AI, Governance & Capstone",
            description: "Module 9-10: Responsible AI & Governance, ethical considerations, bias mitigation, prompt security, followed by Capstone Project & Certification. Apply all skills in end-to-end generative AI workflow.",
            deliverables: [
              "Responsible AI Case Study Report",
              "Full Capstone Project (e.g., AI-Powered Content/Research/Design Workflow)",
              "Professional Certification",
            ],
          },
        ],
      },
    ],
  },
  toolsFrameworkContent: {
    title: "Tools & Frameworks You Will Master",
    description: "Gain expertise in the industry-standard tools and frameworks used by leading AI companies.",
    stats: {
      totalHours: "200+ Hours",
      projects: "15+ Projects",
      mentorSupport: "Lifetime Access",
      jobPlacement: "Interviews",
    },
  },
  whyChooseContent: {
    title: "Why Choose Our AI Course in {{city}}?",
    subtitle: "The most comprehensive and career-focused AI training program.",
    reasons: [
      {
        icon: "GraduationCap",
        title: "Industry-Expert Faculty",
        stats: "Industry-Led Training",
        description: "Learn from AI professionals who have worked at top tech companies.",
      },
      {
        icon: "Briefcase",
        title: "Placement Assistance",
        stats: "Placement Support",
        description: "Dedicated career support, mock interviews, and resume building.",
      },
      {
        icon: "Code",
        title: "Hands-on Project Portfolio",
        stats: "15+ Real-World Projects",
        description: "Build a strong portfolio with projects in Computer Vision, NLP, and ML.",
      },
      {
        icon: "Clock",
        title: "Flexible Learning Options",
        stats: "24/7 Access",
        description: "Choose from weekend, weekday, or self-paced online batches.",
      },
    ],
    testimonial: {
      text: "The AI course transformed my career. The projects were challenging and the placement team was incredibly supportive.",
      author: "Priya Sharma",
      role: "AI Engineer at TechCorp",
      rating: 5,
    },
  },
  projectsContent: {
    title: "Build Your AI Portfolio",
    description: "Work on real-world projects to solidify your understanding and showcase your skills to employers.",
    subtitle: "Hands-on projects in Computer Vision, NLP, and Predictive Analytics.",
    projects: [
      {
        name: "Predictive Maintenance System",
        description: "Use time-series data and ML to predict equipment failure in a manufacturing plant.",
        skills: ["Time Series Analysis", "Scikit-learn", "Data Preprocessing"],
        difficulty: "Advanced",
      },
      {
        name: "Image Recognition for E-commerce",
        description: "Develop a CNN model to classify product images with high accuracy.",
        skills: ["CNN", "TensorFlow/PyTorch", "Computer Vision"],
        difficulty: "Intermediate",
      },
      {
        name: "Chatbot with NLP",
        description: "Build a rule-based and a deep learning-based chatbot for customer service.",
        skills: ["NLP", "BERT", "Seq2Seq Models", "Python"],
        difficulty: "Intermediate",
      },
    ],
  },
  careerPathContent: {
    title: "Launch Your AI Career",
    description: "Explore the high-growth career paths available to our AI graduates.",
    subtitle: "Roles in Machine Learning, Deep Learning, and Data Science.",
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
        trending: false,
        description: "Analyze complex data to extract insights and drive business decisions.",
        salaryRange: "₹7L - ₹20L+",
        skills: ["Data Analysis", "SQL", "Visualization"],
        opportunities: ["Consulting", "E-commerce", "Banking"],
      },
    ],
  },
  faqsContent: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the AI course.",
    faqs: [
      {
        question: "Is this AI course suitable for beginners in {{city}}?",
        answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
      },
      {
        question: "What is the placement record for AI graduates in this program?",
        answer: "Our graduates work at leading companies in {location_name} and across India.",
      },
      {
        question: "What are the prerequisites for the Artificial Intelligence course?",
        answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
      },
    ],
  },
  ctaContent: {
    title: "Ready to Start Your AI Journey in {location_name}?",
    description: "Download the free brochure to learn more about the curriculum, fees, and schedule.",
    subtitle: "Enroll now and get a 20% early bird discount!",
    benefits: ["Free Demo Class", "EMI Options Available", "Dedicated Career Coach"],
    contactInfo: {
      phone: "+91 84-889-889-84",
      email: "contact@cinutedigital.com",
      address: "AI Training Center, {{city}}, {{state}}, India",
    },
  },
  courseDetails: {
    duration: "16 weeks",
    level: "Beginner to Advanced",
    language: "English",
    price: "₹49,999",
    discountedPrice: "₹39,999",
  },
};

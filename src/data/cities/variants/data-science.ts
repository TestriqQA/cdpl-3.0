// Older or alternative versions of a Data Science section that several cities
// still use instead of the template's. A city picks one with `use` in
// ../overrides/data-science.ts, e.g. use: { "curriculumContent.tracks": "v2" }.
// Placeholders work the same as in the template.

import type { CourseVariants } from "../types";

export const dataScienceVariants: CourseVariants = {
  metadata: {
    title: {
      v2: "Comprehensive Data Science Course in {{city}}, {{state}} | Professional {{city}} Data Science Training",
      v3: "Data Science Course in {{city}}: Live Online Classes | CDPL",
      v4: "Comprehensive Data Science Course in {{city}} | CDPL",
    },
    description: {
      v2: "Master Data Science with our industry-leading certification course in {{city}}, {{state}}. Get hands-on training in Python, Machine Learning, and AI. job placement support.",
      v3: "Master Data Science with our industry-leading certification course in {{city}}. Get hands-on training in Python, Machine Learning, and AI. job placement support.",
    },
    keywords: {
      v2: "Data Science course {{cityLower}}, Data Science Course near {{city}}, Python, Machine Learning, AI, Data Analyst, Data Scientist, certification, online training, placement, {{city}}, {{state}}",
      v3: "Data Science course {{citySlug}}, Data Science Course near {{city}}, Python, Machine Learning, AI, Data Analyst, Data Scientist, certification, online training, placement, {{city}}, {{state}}",
      v4: "Data Science course {{city}}, {{city}} Data Science Training, Python, Machine Learning, AI, Data Analyst, Data Scientist, certification, online training, placement, {{city}}, {{state}}",
    },
  },
  heroContent: {
    description: {
      v2: "Our comprehensive Data Science course is designed to transform you into a job-ready Data Scientist. Learn from top industry experts and gain practical experience through real-world projects relevant to the booming tech sector of {{city}}.",
    },
    landmarks: {
      v2: [
        "Major IT Parks and Tech Hubs in {{city}}",
        "Top-tier educational institutions",
        "Leading corporate offices",
      ],
    },
  },
  whyChooseContent: {
    testimonial: {
      v2: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "A Satisfied Alumnus",
        role: "Data Scientist at a leading firm in CSMT",
        rating: 5,
      },
    },
  },
  careerPathContent: {
    description: { v2: "Explore diverse career paths after completing the course in CSMT." },
    paths: {
      v2: [
        {
          role: "Data Scientist",
          trending: true,
          description: "Design and implement machine learning models to solve complex business problems.",
          salaryRange: "₹8L - ₹25L+",
          skills: ["ML", "Python", "Statistics", "AI"],
          opportunities: ["Top Tech Companies in CSMT", "Global Consulting Firms"],
        },
        {
          role: "Data Analyst",
          trending: false,
          description: "Analyze large datasets to extract actionable insights and create reports.",
          salaryRange: "₹5L - ₹12L+",
          skills: ["SQL", "Excel", "Visualization", "Business Intelligence"],
          opportunities: ["E-commerce", "Finance", "Healthcare"],
        },
        {
          role: "Machine Learning Engineer",
          trending: true,
          description: "Build and deploy scalable machine learning systems in production.",
          salaryRange: "₹10L - ₹30L+",
          skills: ["MLOps", "Cloud", "Deployment", "Software Engineering"],
          opportunities: ["Product Companies", "FinTech", "AI Startups"],
        },
      ],
    },
  },
  faqsContent: {
    faqs: {
      v2: [
        {
          question: "Is this course suitable for beginners in {{city}}?",
          answer: "Yes, the curriculum starts with Python fundamentals and is designed for absolute beginners to become job-ready experts.",
        },
        {
          question: "What is the course duration?",
          answer: "The course is 6 months long with 600+ hours of content. You can complete it at your own pace with flexible learning options.",
        },
        {
          question: "Will I get a certificate?",
          answer: "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across {{state}}.",
        },
        {
          question: "What placement support do you provide?",
          answer: "We have a job placement assistance program. Our placement team actively assists with job search and interviews.",
        },
      ],
      v3: [
        {
          question: "Is this course suitable for beginners in CSMT?",
          answer: "Yes, the curriculum starts with Python fundamentals and is designed for absolute beginners to become job-ready experts.",
        },
        {
          question: "What is the course duration?",
          answer: "The course is 6 months long with 600+ hours of content. You can complete it at your own pace with flexible learning options.",
        },
        {
          question: "Will I get a certificate?",
          answer: "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across India.",
        },
        {
          question: "What placement support do you provide?",
          answer: "We have a job placement assistance program. Our placement team actively assists with job search and interviews.",
        },
      ],
    },
  },
  ctaContent: {
    title: { v2: "Join the Data Revolution in {{city}}", v3: "Join the Data Revolution in CSMT" },
    contactInfo: {
      v2: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "{{city}}, {{state}}, {{state}}",
      },
      v3: { phone: "+91 84-889-889-84", email: "contact@cinutedigital.com", address: "{{city}}, India, India" },
      v4: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "{{city}}, Mumbai, {{state}}",
      },
    },
  },
};

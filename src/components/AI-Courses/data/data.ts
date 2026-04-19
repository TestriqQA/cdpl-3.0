import { Zap, Users, Briefcase, Award, Clock, ShieldCheck } from 'lucide-react';

import { iconMap } from '@/components/AI-Courses/CoursesSection';

export const features = [
    {
        icon: Zap,
        title: 'Hands-On Live Classes',
        desc: 'Interactive Python & ML sessions with live coding — not just slides.',
    },
    {
        icon: Users,
        title: 'Small Batches & Mentor Support',
        desc: 'Max 15 learners per batch with 1:1 mentor reviews, weekly doubt clears & career coaching.',
    },
    {
        icon: Briefcase,
        title: 'Job-Ready Portfolio & Placement Support',
        desc: '90+ real projects, portfolio reviews, mock interviews & guaranteed interview opportunities.',
    },
    {
        icon: Award,
        title: 'Industry-Aligned Certifications',
        desc: 'Certificates covering Python, ML, Deep Learning & MLOps recognized by hiring partners.',
    },
    {
        icon: Clock,
        title: 'Flexible Batches & Lifetime Access',
        desc: 'Weekend or weekday batches + lifetime access to recordings, notebooks and updates.',
    },
    {
        icon: ShieldCheck,
        title: 'Production & MLOps Training',
        desc: 'Model deployment, Docker, APIs, monitoring & MLOps best practices for real-world ML systems.',
    },
];

export interface Course {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    students: string;
    rating: number;
    level: string;
    popular: boolean;
    link: string;
    icon: keyof typeof iconMap;
    features: string[];
    /** Optional per-course offer end timestamp (ISO). If omitted, defaults to +48h from mount */
    offerEndsAt?: string;
    syllabusLink?: string;
    titleAttribute?: string;
}

export const COURSES: Course[] = [
    {
        id: 1,
        title: 'Prompt Engineering with Gen AI',
        category: 'Artificial Intelligence',
        description: 'Become an AI Expert in Mumbai. Master the fundamentals of AI, deep learning, NLP, and intelligent automation systems with hands-on projects and industry certifications.',
        duration: '20 Hours',
        students: '10,000+',
        rating: 4.9,
        level: 'Master',
        popular: true,
        link: '/courses/artificial-intelligence-courses/prompt-engineering-course',
        titleAttribute: 'Prompt Engineering with Generative AI Course',
        icon: 'Brain',
        features: ['AI Foundations & Generative AI', 'Large Language Models & Multimodal AI', 'Prompt Engineering Techniques', 'Responsible AI, Governance & Capstone'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/prompt-engineering-with-gen-ai.pdf',
    }
]



export const curriculumContent = {
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
                    description:
                        "Module 1-4: Introduction to AI, AI Ecosystem & Machine Learning Foundations, Introduction to Generative AI, Generative Learning & Technical Concepts. Building the base understanding of AI evolution, ML basics, and core Generative AI principles.",
                    deliverables: [
                        "AI & GenAI Fundamentals Assessment",
                        "Basic Generative AI Experimentation Report"
                    ]
                },
                {
                    number: "02",
                    title: "Large Language Models & Multimodal AI",
                    description:
                        "Module 5-7: The Evolution & Power of Large Language Models, Computer Vision & LLMs, Video, Speech & Generative AI Tools. Deep dive into LLMs, multimodal capabilities, and hands-on with tools like image generation, speech synthesis, and video AI.",
                    deliverables: [
                        "LLM Interaction Projects (Text/Image Generation)",
                        "Multimodal AI Tool Portfolio"
                    ]
                },
                {
                    number: "03",
                    title: "Mastering Prompt Engineering Techniques",
                    description:
                        "Module 8: Prompt Engineering & Practical Applications. Advanced techniques including prompt design, contextual structuring, Chain-of-Thought, Few-Shot/Zero-Shot, ReAct, Tree-of-Thoughts, role-playing, structured outputs, function calling, and real-world prompt optimization.",
                    deliverables: [
                        "Advanced Prompt Library (100+ Prompts)",
                        "Complex Reasoning Solvers & Benchmarks",
                        "AI Agent with Tool Use"
                    ]
                },
                {
                    number: "04",
                    title: "Responsible AI, Governance & Capstone",
                    description:
                        "Module 9-10: Responsible AI & Governance, ethical considerations, bias mitigation, prompt security, followed by Capstone Project & Certification. Apply all skills in end-to-end generative AI workflow.",
                    deliverables: [
                        "Responsible AI Case Study Report",
                        "Full Capstone Project (e.g., AI-Powered Content/Research/Design Workflow)",
                        "Professional Certification"
                    ]
                }
            ]
        }
    ]
}

export const careerPathContent = {
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
            opportunities: ["Tech Startups", "R&D Labs", "Fintech"]
        },
        {
            role: "Machine Learning Scientist",
            trending: true,
            description: "Research and develop new ML algorithms and models.",
            salaryRange: "₹12L - ₹35L+",
            skills: ["Statistics", "Algorithm Design", "TensorFlow/PyTorch"],
            opportunities: ["Academic Research", "Big Tech", "Healthcare"]
        },
        {
            role: "Data Scientist",
            trending: false,
            description: "Analyze complex data to extract insights and drive business decisions.",
            salaryRange: "₹7L - ₹20L+",
            skills: ["Data Analysis", "SQL", "Visualization"],
            opportunities: ["Consulting", "E-commerce", "Banking"]
        }
    ]
}


export const ProjectContent = {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",

    projects: [
        {
            name: "Predictive Maintenance",
            description: "Predict equipment failure using time-series data and deep learning.",
            skills: ["Time Series", "Deep Learning", "TensorFlow", "Python"],
            difficulty: "Advanced"
        },
        {
            name: "Customer Churn Analysis",
            description: "Identify and predict customers likely to leave a telecom company.",
            skills: ["Classification", "Pandas", "Scikit-learn", "Statistics"],
            difficulty: "Intermediate"
        },
        {
            name: "Image Recognition System",
            description: "Develop a deep learning model for image classification.",
            skills: ["Deep Learning", "CNN", "Keras/PyTorch", "Computer Vision"],
            difficulty: "Advanced"
        },
        {
            name: "Stock Price Forecasting",
            description: "Use time-series models to predict future stock prices.",
            skills: ["Time Series", "ARIMA", "LSTM", "Financial Data"],
            difficulty: "Intermediate"
        }
    ]
};

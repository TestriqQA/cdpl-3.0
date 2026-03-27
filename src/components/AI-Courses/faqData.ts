import { HelpCircle, BookOpen, Clock, Award, DollarSign, Briefcase, Users, CheckCircle } from 'lucide-react';

export type FAQ = {
    id: number;
    icon: any;
    q: string;
    a: string;
};

// SEO-optimized FAQ data for AI courses
export const aiFaqs: FAQ[] = [
    {
        id: 1,
        icon: HelpCircle,
        q: "What is Artificial Intelligence and why should I learn it?",
        a: "Artificial Intelligence (AI) is the science of building machines and systems that can think, learn, and make decisions like humans. Learning AI opens doors to high-paying careers in Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. As companies increasingly adopt automation and AI-driven solutions, the demand for AI engineers has grown by over 40% globally, making it one of the most future-proof careers."
    },
    {
        id: 2,
        icon: BookOpen,
        q: "Do I need programming experience to start learning AI?",
        a: "You do not need advanced programming knowledge! Basic Python is recommended, but our AI course starts from fundamentals and gradually moves into Machine Learning, Deep Learning, and Generative AI. Even beginners can follow along with our hands-on approach, guided assignments, and real-world AI projects."
    },
    {
        id: 3,
        icon: Clock,
        q: "How long does it take to complete the Artificial Intelligence course?",
        a: "Our comprehensive AI program takes 16–20 weeks with flexible weekend and weekday batches. Fast-track options (10–12 weeks) are available for working professionals. You will learn Python, ML, Deep Learning, NLP, and Generative AI while completing 8+ industry projects, capstone work, and model deployment."
    },
    {
        id: 4,
        icon: Award,
        q: "What certifications will I receive after completing the AI course?",
        a: "You will receive an industry-recognized Artificial Intelligence Professional Certificate upon completion. We also prepare you for global certifications such as TensorFlow Developer, AWS Machine Learning Specialty, and Microsoft AI Engineer (AI-102). Study materials, mock tests, and exam guidance are included."
    },
    {
        id: 5,
        icon: DollarSign,
        q: "What is the average salary for AI professionals in India?",
        a: "Entry-level AI Engineers earn ₹8–14 LPA, Machine Learning Engineers earn ₹10–20 LPA, and experienced Deep Learning or Generative AI experts can earn ₹25–45+ LPA. Top tech companies, startups, and research labs offer even higher packages, especially for candidates skilled in LLMs, MLOps, and cloud deployment."
    },
    {
        id: 6,
        icon: Briefcase,
        q: "What kind of job support do you provide after course completion?",
        a: "We provide personalized career support including resume building, GitHub/portfolio creation, mock interviews, hackathon preparation, LinkedIn optimization, and direct referrals to our hiring partners. Our AI program has a strong placement record with students joining roles like AI Engineer, ML Engineer, Data Scientist, and Research Analyst."
    },
    {
        id: 7,
        icon: Users,
        q: "What is the batch size and learning format for the AI course?",
        a: "We keep batch sizes small (maximum 15 learners) to ensure personalized attention from mentors. All sessions are live and interactive. You also get lifetime access to recordings, AI tools, code templates, doubt-solving sessions, interview practice, and our alumni community for ongoing support."
    },
    {
        id: 8,
        icon: CheckCircle,
        q: "What tools and technologies will I master in this AI course?",
        a: "You will gain practical experience with Python, NumPy, Pandas, Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, NLP (Transformers, BERT, GPT), Generative AI tools, LangChain, LLM apps, cloud platforms (AWS / Azure / GCP), and MLOps tools for model deployment. Everything you learn is directly aligned with current industry demand."
    }
];

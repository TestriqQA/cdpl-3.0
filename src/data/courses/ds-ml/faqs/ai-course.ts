import { type QA } from "@/types/faq";
import { SITE_STATS, STAT_TEXT } from "@/lib/site-stats";

// The program is a CDPL certificate course, not a university master's or PG
// degree: questions say "Master Program", never "masters" / "post graduate".
export const AI_FAQS: QA[] = [
    {
        question: "What is the Comprehensive Data Science and AI Master Program?",
        answer: `CDPL's AI and ML master program offers 255 hours of hands-on training, portfolio projects, and placement support, live online or at our Mira Road, Mumbai centre. It's rated ${STAT_TEXT.rating} by our learners. It is a professional certificate program, not a university master's degree.`,
        category: "General",
    },
    {
        question: "Is prior experience required for this AI and ML master program?",
        answer: "Basic programming and statistics help, but the program includes a structured ramp-up covering Python, data wrangling, and ML fundamentals so motivated beginners can succeed.",
        category: "General",
    },
    {
        question: "What is the total duration of the Data Science and AI Master Program?",
        answer: "Approximately 255 hours of guided learning with 80% hands-on labs, capstone projects, and weekly mentor check-ins, spread over 5 months.",
        category: "Schedule",
    },
    {
        question: "Do you provide job assistance after the Data Science and AI Master Program?",
        answer: "Yes. You'll get resume review with ATS keywords, mock interviews, LinkedIn optimization, and curated referrals through our network for data science and AI roles.",
        category: "Career",
    },
    {
        question: "What projects and tools are covered in this AI master program?",
        answer: "Projects in NLP, computer vision, forecasting, and MLOps. Tools include Python, scikit-learn, PyTorch/TensorFlow, SQL, Spark, Airflow, and AWS for deployment.",
        category: "Curriculum",
    },
    {
        question: "Is there a certificate for the AI and ML master program?",
        answer: "Yes. You'll receive a globally verifiable CDPL certificate with QR validation. Guidance is provided to showcase your portfolio on GitHub and LinkedIn.",
        category: "Certification",
    },
    {
        question: "How is this program different from a university master's in AI?",
        answer: "A university master's is an academic degree. CDPL's AI and ML master program is a professional certificate course focused on industry-ready skills, with 80% hands-on training, real projects, and dedicated placement support.",
        category: "General",
    },
    {
        question: "Can I join the Data Science and AI Master Program while working?",
        answer: "Yes. We offer flexible weekend batches and live online options for working professionals.",
        category: "Schedule",
    },
];

export const AI_REVIEW_DATA = {
    ratingValue: SITE_STATS.rating,
    reviewCount: SITE_STATS.reviewCount,
};

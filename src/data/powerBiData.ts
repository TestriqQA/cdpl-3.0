import { type QA } from "@/types/faq";

interface FaqItem extends QA {
    details?: string[];
    emoji: string;
    color: "blue" | "orange" | "green" | "purple" | "pink";
}

export const POWER_BI_FAQS: FaqItem[] = [
    {
        question: "Is Power BI worth learning in 2026?",
        answer: "Absolutely! Power BI is currently one of the most in-demand business intelligence tools globally. Companies in Mumbai and Thane are actively hiring Power BI Developers to transform data into actionable insights.",
        details: ["High demand in IT, Finance, and Retail", "Competitive salary packages for freshers"],
        emoji: "🚀",
        color: "blue",
        category: "Career",
    },
    {
        question: "Does Power BI require coding or programming knowledge?",
        answer: "No, Power BI does not require extensive coding. While it uses DAX (Data Analysis Expressions) for complex calculations, its primary interface is drag-and-drop. Our course covers all necessary logic from scratch.",
        details: ["Perfect for non-IT backgrounds", "Master DAX step-by-step"],
        emoji: "💻",
        color: "orange",
        category: "Prerequisites",
    },
    {
        question: "Is Power BI easy to learn for beginners?",
        answer: "Yes, Power BI is known for its user-friendly interface. Most students can learn how to create a dashboard in Power BI within a few weeks of consistent practice. Our 20-hour master program ensures you master the tool efficiently.",
        details: ["Hands-on labs every session", "Real-world project implementation"],
        emoji: "🧭",
        color: "green",
        category: "Learning",
    },
    {
        question: "What is the difference between Power BI Desktop and Power BI Service?",
        answer: "Power BI Desktop is a free application for creating reports and data modeling on your computer. Power BI Service is the cloud-based platform used for sharing and collaborating on these reports online.",
        details: ["Learn report publishing", "Master cloud collaboration"],
        emoji: "☁️",
        color: "purple",
        category: "Tools",
    },
    {
        question: "What is the average salary for a Power BI Developer in Mumbai?",
        answer: "A certified Power BI Developer in Mumbai can expect a starting salary of ₹4 LPA to ₹8 LPA. With 2+ years of experience, packages often range from ₹10 LPA to ₹18 LPA in top IT firms.",
        details: ["100% placement assistance", "Resume and LinkedIn optimization"],
        emoji: "💰",
        color: "pink",
        category: "Salary",
    },
];


export const POWER_BI_REVIEW_DATA = {
    ratingValue: 4.8,
    reviewCount: 300,
};

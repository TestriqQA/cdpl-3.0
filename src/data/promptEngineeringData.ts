export type PromptEngineeringFaq = {
    question: string;
    answer: string;
    accent: {
        bar: string;     // top bar
        border: string;  // card border
        text: string;    // accent text
        ring: string;    // focus ring
        chip: string;    // small chip bg
    };
};

export const PROMPT_ENGINEERING_FAQS: PromptEngineeringFaq[] = [
    {
        question: "Do I need AI experience?",
        answer: "No. We start from the fundamentals of prompt engineering, model behavior, and safety. You’ll practice with patterns, guardrails, and evaluation to build confidence quickly.",
        accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", ring: "focus:ring-emerald-300", chip: "bg-emerald-50" },
    },
    {
        question: "What is the course duration and format?",
        answer: "About 20 hours across 2–4 weeks, with ~80% hands-on labs and portfolio-grade mini projects. Live doubt solving and weekly checkpoints included.",
        accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", ring: "focus:ring-sky-300", chip: "bg-sky-50" },
    },
    {
        question: "Will I get a certification?",
        answer: "Yes. You’ll receive an AAA global certificate with QR verification. Guidance provided to showcase projects on LinkedIn and GitHub.",
        accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", ring: "focus:ring-violet-300", chip: "bg-violet-50" },
    },
    {
        question: "What tools and use-cases are covered?",
        answer: "Prompt patterns for content, code, chat, and workflows; guardrails; structured outputs (JSON); and evaluation basics. Optional RAG add-on for citations and reliability.",
        accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", ring: "focus:ring-amber-300", chip: "bg-amber-50" },
    },
    {
        question: "Do you offer placement support?",
        answer: "Yes—resume/ATS keywords, mock interviews, and portfolio reviews. Target roles include Prompt Engineer, AI Automations Specialist, and Applied AI.",
        accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", ring: "focus:ring-rose-300", chip: "bg-rose-50" },
    },
];

export const PROMPT_ENGINEERING_REVIEW_DATA = {
    ratingValue: 4.9,
    reviewCount: 150,
};

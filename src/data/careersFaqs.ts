// Shown on /jobs/careers and sent as its FAQPage schema, so the two always match.
export const CAREERS_FAQ_CATEGORIES = ["Working at CDPL", "Hiring Process"] as const;

export type CareersFaq = {
  category: (typeof CAREERS_FAQ_CATEGORIES)[number];
  question: string;
  answer: string;
};

export const CAREERS_FAQS: CareersFaq[] = [
  {
    category: "Working at CDPL",
    question: "What is it like to work at CDPL?",
    answer: "CDPL offers a fast-paced, product-led environment where innovation and student success are our top priorities. We value ownership, transparency, and continuous learning.",
  },
  {
    category: "Working at CDPL",
    question: "What benefits does CDPL offer?",
    answer: "Our team enjoys competitive compensation, flexible work arrangements, health insurance, and internal growth opportunities through our own advanced training modules.",
  },
  {
    category: "Working at CDPL",
    question: "Do you support remote work?",
    answer: "Yes. Several roles are Remote (India). For hybrid roles, we meet in Bengaluru for collaboration weeks.",
  },
  {
    category: "Hiring Process",
    question: "How does the hiring process work?",
    answer: "Five steps: apply with your resume or portfolio, a 30-minute intro call, a practical exercise based on real CDPL work, a panel conversation with the team, and then an offer.",
  },
  {
    category: "Hiring Process",
    question: "How long does the process take?",
    answer: "We aim for 1–2 weeks end-to-end, depending on schedules and role seniority.",
  },
  {
    category: "Hiring Process",
    question: "What should I include in my application?",
    answer: "A brief note about why CDPL, links to portfolio/GitHub/LinkedIn, and outcomes you’re proud of.",
  },
  {
    category: "Hiring Process",
    question: "Do you hire interns or freshers?",
    answer: "Yes. We value potential and craft. Our Student Success and Engineering teams often hire 0–1 yr talent.",
  },
];

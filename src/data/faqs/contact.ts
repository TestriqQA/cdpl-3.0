// Shown on /contact-us and sent as its FAQPage schema, so the two always match.
export const CONTACT_FAQ_CATEGORIES = ["Admissions", "Learning", "Financing", "Placement", "Corporate"] as const;

export type ContactFaqCategory = (typeof CONTACT_FAQ_CATEGORIES)[number];

export type ContactFaq = { category: ContactFaqCategory; question: string; answer: string };

export const CONTACT_FAQS: ContactFaq[] = [
  {
    category: "Admissions",
    question: "How do I apply for a course at Cinute Digital?",
    answer: "Submit the contact form or book a free 1:1 counseling call. Our admissions team will guide you through eligibility, batch start dates, and required documents.",
  },
  {
    category: "Admissions",
    question: "What are the eligibility criteria?",
    answer: "Open to graduates, final-year students, and working professionals. For advanced tracks in Data Science & AI or Full-Stack, basic programming familiarity is recommended.",
  },
  {
    category: "Admissions",
    question: "Do you share a detailed syllabus before enrollment?",
    answer: "Yes. We provide curriculum PDFs covering modules, projects, tools, and assessments for Software Testing, Data Science & AI, and Full-Stack Development.",
  },
  {
    category: "Admissions",
    question: "How soon will I get a response after contacting you?",
    answer: "Within one business day. For urgent queries, use WhatsApp for the fastest response during working hours.",
  },
  {
    category: "Learning",
    question: "Are classes live or self-paced?",
    answer: "Live mentor-led classes with recordings, hands-on labs, capstone projects, and weekly doubt-solving support.",
  },
  {
    category: "Learning",
    question: "Which tools and technologies will I learn?",
    answer: "Programs include Git & GitHub, SQL, Python, Power BI, Tableau, React, Node.js, Selenium, Postman, and more, aligned with current industry hiring.",
  },
  {
    category: "Learning",
    question: "Do you provide certificates?",
    answer: "Yes. On successful completion you receive an industry-recognized certificate from Cinute Digital along with project portfolios.",
  },
  {
    category: "Financing",
    question: "Do you have EMI or flexible payment options?",
    answer: "Yes. We offer convenient EMI plans via finance partners and occasional scholarships on eligible programs.",
  },
  {
    category: "Financing",
    question: "Are there any scholarships or discounts?",
    answer: "Merit-based and need-based scholarships are available on select batches. Speak to admissions for current offers and criteria.",
  },
  {
    category: "Placement",
    question: "Do you offer placement assistance?",
    answer: "Yes. Resume reviews, mock interviews, LinkedIn optimization, career counseling, and hiring drives with partner companies.",
  },
  {
    category: "Placement",
    question: "What is the average placement support timeline?",
    answer: "Most learners start interview pipelines within 4–8 weeks of completing capstone projects and meeting placement-readiness criteria.",
  },
  {
    category: "Corporate",
    question: "Can you customize corporate training for teams?",
    answer: "Absolutely. We tailor content, labs, assessments, and delivery (online or on-site) to your team’s skill gaps, tools, and timelines.",
  },
  {
    category: "Corporate",
    question: "Do you conduct upskilling bootcamps for companies?",
    answer: "Yes. We run outcome-driven bootcamps in Software Testing, Data Analytics, AI, and Full-Stack with real datasets and internal use-cases.",
  },
];

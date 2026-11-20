// Shown on /jobs/placements and sent as its FAQPage schema, so the two always match.
export const PLACEMENTS_FAQ_CATEGORIES = ["Placement", "Program", "Fees & Certificates"] as const;

export type PlacementsFaq = {
  category: (typeof PLACEMENTS_FAQ_CATEGORIES)[number];
  question: string;
  answer: string;
};

export const PLACEMENTS_FAQS: PlacementsFaq[] = [
  {
    category: "Placement",
    question: "Are placements guaranteed?",
    answer: "No. We don’t guarantee jobs. We guarantee rigorous training, interview prep, and access to our hiring network.",
  },
  {
    category: "Placement",
    question: "Do you provide referrals?",
    answer: "Yes. Based on performance in projects, attendance, and interview readiness, mentors put you forward to partner companies.",
  },
  {
    category: "Placement",
    question: "Do you help with resume, LinkedIn, and portfolio?",
    answer: "Yes. You’ll get templates, 1:1 reviews, ATS checks, and a portfolio checklist with project narration guidance.",
  },
  {
    category: "Placement",
    question: "How many mock interviews do I get?",
    answer: "At least 2 structured mocks (HR + technical). Extra mocks are offered based on mentor recommendation.",
  },
  {
    category: "Placement",
    question: "Do you assist with walk-ins and off-campus drives?",
    answer: "Yes. We share openings, help you shortlist roles, tailor resumes, and prep for HR + technical rounds.",
  },
  {
    category: "Placement",
    question: "Do companies require background checks?",
    answer: "Most do. Keep your documents (ID, education, experience, PAN/Aadhaar) ready; we’ll guide you on what’s typically needed.",
  },
  {
    category: "Placement",
    question: "What support do I get after placement?",
    answer: "Alumni Slack, interview debriefs, and optional upskilling modules. We continue to share better-fit roles for growth.",
  },
  {
    category: "Program",
    question: "Is prior experience required?",
    answer: "No. We have beginner-friendly tracks and advanced modules for upskilling professionals.",
  },
  {
    category: "Program",
    question: "What is the ‘Live Jobs’ track?",
    answer: "Mentor-led sprints that simulate real teams: requirements, sprints, code reviews, bug tracking, CI/CD, and stakeholder demos.",
  },
  {
    category: "Program",
    question: "How long does it take to become job-ready?",
    answer: "Typical learners take 8–16 weeks depending on pace, track, and practice time. Fast-track options exist.",
  },
  {
    category: "Program",
    question: "What tools/tech do you cover?",
    answer: "Depends on the track. Examples: Jira, Postman, Selenium/Playwright, Python/SQL, Git/GitHub, Docker basics, and dashboard tools for analytics.",
  },
  {
    category: "Program",
    question: "What’s the class schedule?",
    answer: "Cohorts run on weekday evenings and weekend slots (IST). Live sessions are recorded; doubt clearing happens daily on Slack.",
  },
  {
    category: "Program",
    question: "Can I learn fully online?",
    answer: "Yes. The program is designed for remote learners with live sessions, recordings, and async mentor feedback.",
  },
  {
    category: "Program",
    question: "What are the laptop requirements?",
    answer: "8 GB RAM minimum (16 GB recommended), i5/Ryzen 5 or better, stable internet. For heavier automation/analytics, 16 GB is ideal.",
  },
  {
    category: "Program",
    question: "What is the mentor:learner ratio?",
    answer: "Small groups with 1 lead mentor and 1–2 associate mentors. Doubts are handled via live sessions + async channels.",
  },
  {
    category: "Fees & Certificates",
    question: "Do you offer EMI or installment plans?",
    answer: "Yes. We support installments/EMI via common payment providers. Speak to the team for available options.",
  },
  {
    category: "Fees & Certificates",
    question: "What is your refund policy?",
    answer: "We offer a brief cooling-off window before cohorts start. After project access begins, refunds aren’t offered.",
  },
  {
    category: "Fees & Certificates",
    question: "Will I get a certificate?",
    answer: "Yes. You’ll receive a verified completion certificate along with project artifacts and mentor feedback.",
  },
];

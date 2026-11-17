// Shown on /about-us and sent as its FAQPage schema, so the two always match.
export const ABOUT_FAQ_CATEGORIES = ["Programs", "Learning", "Placement", "Fees & Flexibility"] as const;

export type AboutFaqCategory = (typeof ABOUT_FAQ_CATEGORIES)[number];

export type AboutFaq = { category: AboutFaqCategory; question: string; answer: string };

export const ABOUT_FAQS: AboutFaq[] = [
  {
    category: "Placement",
    question: "Do you provide placement assistance?",
    answer: "Yes. Our dedicated Career Services team offers resume reviews, portfolio polishing, mock interviews, and direct referrals through hiring partners. Many learners secure interviews within 2–6 weeks of completing capstone projects.",
  },
  {
    category: "Programs",
    question: "Are the programs beginner friendly?",
    answer: "Absolutely. Each program starts with fundamentals and hands-on guided labs. No prior coding experience is required for our beginner tracks.",
  },
  {
    category: "Learning",
    question: "Will I work on live projects?",
    answer: "Yes. You'll build job-ready skills through live or sandbox projects mirroring real business scenarios, version control, code reviews, and CI/CD workflows.",
  },
  {
    category: "Programs",
    question: "What makes your curriculum industry-aligned?",
    answer: "Our modules are co-designed with practitioners from QA, Data, and DevOps. Tooling includes Git, GitHub Actions, Postman, REST APIs, Selenium, Playwright, SQL, and cloud fundamentals so your skills map directly to hiring needs.",
  },
  {
    category: "Learning",
    question: "How are classes delivered—online or in-person?",
    answer: "We run live online cohorts with recordings and Q&A, plus weekend doubt-clearing sessions. Select cities also host optional in-person meetups and hiring drives.",
  },
  {
    category: "Programs",
    question: "Do you offer certifications?",
    answer: "Yes. You'll receive a Cinute Digital certificate on completion. We also guide you for global certifications like ISTQB (for Software Testing) and provide exam preparation resources.",
  },
  {
    category: "Programs",
    question: "What is the typical program duration?",
    answer: "Most job-ready tracks span 10–24 weeks, with flexible schedules for working professionals. Accelerated bootcamps are available for focused upskilling.",
  },
  {
    category: "Learning",
    question: "Is there doubt support and mentorship?",
    answer: "Every learner gets mentor hours, Discord/Slack community access, and daily doubt support. Premium tracks include 1-on-1 career mentorship and mock interviews.",
  },
  {
    category: "Fees & Flexibility",
    question: "Do you provide EMI or flexible payment plans?",
    answer: "Yes. We offer EMI options and milestone-based payment plans for most programs. Speak with our admissions team for the best fit.",
  },
  {
    category: "Fees & Flexibility",
    question: "Can I switch tracks if my interests change?",
    answer: "Within the first 2 weeks, you can switch to another eligible cohort based on seat availability and prerequisites.",
  },
  {
    category: "Placement",
    question: "What outcomes can I expect after completion?",
    answer: "Graduates showcase a portfolio of real projects, pass structured assessments, and get interview referrals. Many transition into roles such as QA Engineer, Automation Tester, Data Analyst, or Junior ML Engineer.",
  },
  {
    category: "Programs",
    question: "Where can I view the full syllabus and upcoming cohorts?",
    answer: "Visit the program pages for detailed syllabus, start dates, and application steps. You can also request a personalized counseling call.",
  },
];

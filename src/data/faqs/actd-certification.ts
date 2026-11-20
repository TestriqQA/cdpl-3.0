// Shown on /actd-certification and sent as its FAQPage schema, so the two always match.
// (The page used to show three questions and send four different ones as schema.)
export type ActdFaq = { question: string; answer: string };

export const ACTD_FAQS: ActdFaq[] = [
  {
    question: "What does ACTD stand for?",
    answer: "ACTD stands for Agile, Cloud, and Test-Driven Development. It's a comprehensive certification that covers modern testing practices in agile and cloud environments.",
  },
  {
    question: "How long is the ACTD certification program?",
    answer: "The ACTD Certification program is a 10-week intensive course with approximately 15 hours of learning per week, including live sessions, practical labs, and project work.",
  },
  {
    question: "Do I need prior cloud experience for ACTD?",
    answer: "Prior cloud experience is helpful but not mandatory. The course covers cloud fundamentals and gradually progresses to advanced cloud testing strategies.",
  },
  {
    question: "What are the career opportunities after ACTD certification?",
    answer: "ACTD certification opens doors to roles like Agile QA Engineer, Cloud Test Engineer, DevOps Tester, Test Automation Specialist, and Senior QA positions in companies adopting agile and cloud practices.",
  },
  {
    question: "How is ACTD different from AAA?",
    answer: "ACTD emphasizes demonstrable, practical skills and case execution, while AAA is broader on blueprint coverage.",
  },
  {
    question: "Do I get placement support?",
    answer: "Yes. Eligible graduates are surfaced to CDPL partners and receive resume and interview support.",
  },
  {
    question: "Is the certificate digital?",
    answer: "Yes, you'll receive a shareable link with a unique verification ID.",
  },
];

// Shown on /aaa-certification and sent as its FAQPage schema, so the two always match.
// (The page used to show three questions and send four different ones as schema.)
export type AaaFaq = { question: string; answer: string };

export const AAA_FAQS: AaaFaq[] = [
  {
    question: "What is AAA Certification?",
    answer: "AAA (Advanced Automation Architecture) Certification is an industry-recognized credential that validates your expertise in designing and implementing advanced test automation frameworks, CI/CD integration, and cloud-based testing strategies.",
  },
  {
    question: "How long does the AAA course take?",
    answer: "The AAA Certification course is a 12-week program with approximately 20 hours of learning per week, including live sessions, hands-on labs, and project work.",
  },
  {
    question: "Is the AAA certificate recognized by employers?",
    answer: "Yes, the AAA Certification from CDPL is recognized by leading tech companies and demonstrates your advanced skills in test automation architecture.",
  },
  {
    question: "What are the prerequisites for AAA certification?",
    answer: "Basic programming knowledge and understanding of software testing fundamentals are required. Prior experience with test automation tools is helpful but not mandatory.",
  },
  {
    question: "Is the AAA certificate verifiable?",
    answer: "Yes. Graduates receive a digital certificate with a unique ID verifiable on the CDPL Certificate Validation page.",
  },
  {
    question: "Do I need prior experience?",
    answer: "Basics help, but we start with foundations and provide bridging resources.",
  },
  {
    question: "How are assessments conducted?",
    answer: "Time-bounded, proctored assessments with scenario tasks and rubric-based grading.",
  },
];

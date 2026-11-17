// Shown on /cdpl-certificate-validation and sent as its FAQPage / HowTo schema,
// so the visible page and the structured data always match. (Both used to be
// schema-only: the page showed no FAQ and no steps.)
export type ValidationFaq = { question: string; answer: string };
export type ValidationStep = { name: string; text: string };

export const VALIDATION_FAQS: ValidationFaq[] = [
  {
    question: "How can I verify a CDPL certificate?",
    answer: "You can verify any CDPL, AAA, or ACTD certificate by entering the unique Certificate ID on our official validation page. The system will provide instant confirmation of the holder's name and certificate status.",
  },
  {
    question: "What certificates can be validated here?",
    answer: "This tool validates all official certifications issued by Cinute Digital Private Limited, including Advanced Automation Architecture (AAA) and Agile, Cloud & Test-Driven Development (ACTD) programs.",
  },
  {
    question: "Is this validation recognized by employers?",
    answer: "Yes, our digital certificates come with an immutable ID that employers can verify in real-time to ensure the authenticity of your qualifications.",
  },
  {
    question: "Can I share my verified status?",
    answer: "Yes, once a certificate is validated, the system generates a unique shareable link that you can include on your LinkedIn profile, resume, or portfolio.",
  },
];

export const VALIDATION_STEPS: ValidationStep[] = [
  { name: "Obtain Certificate ID", text: "Locate the unique alphanumeric ID on your CDPL, AAA, or ACTD certificate." },
  { name: "Enter ID", text: "Input the Certificate ID into the secure validation search field on the CDPL website." },
  { name: "Initiate Validation", text: "Click the 'Validate' button to cross-reference the ID with our secure global registry." },
  { name: "Verify Authenticity", text: "Instantly view the student's name, program, and current certification status." },
  { name: "Share or Save", text: "Use the unique shareable link to provide proof of qualification to employers." },
];

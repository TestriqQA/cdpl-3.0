// Shown on /cdpl-affiliate-program and sent as its FAQPage schema, so the two
// always match. (Before this file the page rendered one set of questions and
// sent a different set as JSON-LD.) Every answer below is the page's existing
// copy; "What can I promote" merges the visible and schema versions.
export const AFFILIATE_FAQ_CATEGORIES = ["Joining", "Earnings & Payouts", "Promoting"] as const;

export type AffiliateFaqCategory = (typeof AFFILIATE_FAQ_CATEGORIES)[number];

export type AffiliateFaq = { category: AffiliateFaqCategory; question: string; answer: string };

export const AFFILIATE_FAQS: AffiliateFaq[] = [
  {
    category: "Earnings & Payouts",
    question: "How much commission can I earn as a CDPL affiliate?",
    answer:
      "CDPL affiliates earn between 15-25% commission based on their tier level. Commission rates increase as you refer more students and generate higher revenue.",
  },
  {
    category: "Earnings & Payouts",
    question: "When do I get paid as an affiliate?",
    answer:
      "Affiliate commissions are paid monthly via bank transfer or your preferred payment method. Minimum payout threshold applies.",
  },
  {
    category: "Earnings & Payouts",
    question: "Is there a minimum payout threshold?",
    answer: "Yes, the threshold is $50 (or local equivalent). Unpaid balances roll over automatically.",
  },
  {
    category: "Earnings & Payouts",
    question: "What’s the cookie window?",
    answer: "60 days from the first click. Attribution is last click with fraud protection in place.",
  },
  {
    category: "Joining",
    question: "Is there a cost to join the CDPL affiliate program?",
    answer: "No, joining the CDPL Affiliate Program is completely free. There are no signup fees or hidden costs.",
  },
  {
    category: "Joining",
    question: "How long does approval take?",
    answer:
      "Most applications are reviewed within 2–3 business days. We prioritize creators with relevant, engaged audiences.",
  },
  {
    category: "Joining",
    question: "Do I need a website to become an affiliate?",
    answer:
      "While having a website helps, it's not mandatory. You can promote CDPL through social media, YouTube, email lists, or other digital channels.",
  },
  {
    category: "Promoting",
    question: "What can I promote as a CDPL affiliate?",
    answer:
      "You can promote all CDPL offerings including certification courses (AAA, ACTD), corporate training programs, developer events, workshops, and professional services. Assets and deep links are provided.",
  },
  {
    category: "Promoting",
    question: "Do you support custom campaigns?",
    answer: "For high-volume partners we co-create webinars, series, and case studies, plus custom landing pages.",
  },
];

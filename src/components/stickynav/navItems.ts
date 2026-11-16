export const sections = [
  { id: "why-learn", label: "Why Manual Testing", color: "from-indigo-600 to-cyan-600" },
  { id: "curriculum", label: "Curriculum", color: "from-cyan-600 to-sky-500" },
  { id: "tools", label: "Tools", color: "from-emerald-600 to-lime-500" },
  { id: "projects", label: "Projects", color: "from-fuchsia-600 to-pink-500" },
  { id: "learning-path", label: "Learning Path", color: "from-violet-600 to-indigo-500" },
  { id: "instructor", label: "Instructors", color: "from-rose-600 to-orange-500" },
  { id: "career", label: "Career & Salary", color: "from-amber-600 to-yellow-500" },
  { id: "trust", label: "Trust", color: "from-slate-700 to-gray-500" },
  { id: "comparison", label: "Compare", color: "from-teal-600 to-cyan-500" },
  { id: "other-courses", label: "Other Courses", color: "from-blue-600 to-sky-500" },
  { id: "faq", label: "FAQs", color: "from-indigo-600 to-cyan-600" },
];

// Course detail pages on the shared template (src/components/course-page)
// pass their own `items`, built from the sections they render.

export const general_course = [
  { id: "features", label: "Program Highlights", color: "from-indigo-600 to-cyan-600" },
  { id: "courses", label: "Courses", color: "from-indigo-600 to-cyan-600" },
  { id: "curriculum", label: "Curriculum", color: "from-indigo-600 to-cyan-600" },
  { id: "testimonials", label: "Testimonials", color: "from-indigo-600 to-cyan-600" },
  { id: "projects", label: "Projects", color: "from-indigo-600 to-cyan-600" },
  { id: "career", label: "Career Path", color: "from-indigo-600 to-cyan-600" },
  { id: "faqs", label: "FAQs", color: "from-indigo-600 to-cyan-600" },
  { id: "contact", label: "Contact", color: "from-indigo-600 to-cyan-600" },
]

export const NAV_ITEMS = {
  "manual-testing": sections,
  general: general_course,
};

export type NavVariant = keyof typeof NAV_ITEMS;

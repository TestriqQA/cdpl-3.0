// Content for /mira-road-campus, from the "Mira Road campus page content
// brief" (Nov 2026). Facts confirmed with the user on 27 Nov 2026: walking
// time, by-road directions, facilities, walk-ins, Saturday batches, every
// course in both modes, classroom extras, and the GST and internship lines.
// Still open: parking (left out) and real photos (placeholders below).

import { BarChart3, BrainCircuit, Megaphone, PieChart, ShieldCheck, type LucideIcon } from "lucide-react";
import { COURSES, COURSE_CATEGORIES, type CourseSlug } from "@/data/courses/registry";

const course = (label: string, slug: CourseSlug, hours: number) => ({ label, href: COURSES[slug].href, hours });

/**
 * Every course here runs in classroom batches at the campus as well as live
 * online. Hours are each course's total from its syllabus brochure
 * (public/downloads). Three course pages state less in their own schema or
 * badges (Advanced Automation 30, ETL 18, Advanced Software Testing 25); the
 * brochure figure is used here.
 */
export const CLASSROOM_FAMILIES: ReadonlyArray<{
  family: string;
  summary: string;
  href: string;
  Icon: LucideIcon;
  tile: string;
  courses: ReadonlyArray<{ label: string; href: string; hours: number }>;
}> = [
  {
    family: "Software Testing",
    summary: "Manual and automation testing, from your first test cases to Selenium frameworks, API and ETL testing.",
    href: COURSE_CATEGORIES["software-testing"].href,
    Icon: ShieldCheck,
    tile: "bg-brand",
    courses: [
      course("Manual Testing", "manual-testing-course", 50),
      course("Advanced Software Testing", "advance-software-testing", 95),
      course("Advanced Automation Testing", "automation-testing-course", 85),
      course("Manual + Automation Master Program", "advance-manual-automation-testing", 180),
      course("API Testing", "api-testing", 15),
      course("ETL Testing", "etl-testing", 100),
    ],
  },
  {
    family: "Data Science & ML",
    summary: "Python, machine learning and data science, up to the full data science and AI master program.",
    href: COURSE_CATEGORIES["ds-ml"].href,
    Icon: BarChart3,
    tile: "bg-sky-600",
    courses: [
      course("Python Programming", "python-course", 30),
      course("Machine Learning & Data Science with Python", "machine-learning-course", 95),
      course("Data Science & AI Master Program", "ai-course", 255),
    ],
  },
  {
    family: "Business Intelligence",
    summary: "Excel, Power BI and Tableau dashboards, and data analytics for business reporting.",
    href: COURSE_CATEGORIES.bi.href,
    Icon: PieChart,
    tile: "bg-emerald-600",
    courses: [
      course("Power BI", "power-bi-course", 20),
      course("Tableau", "data-analytics-with-tableau", 20),
      course("Advanced Excel", "data-analytics-and-visualization", 20),
      course("Data Analytics Hero Program", "data-analytics", 110),
    ],
  },
  {
    family: "Artificial Intelligence",
    summary: "Prompt engineering, and deep learning, NLP and generative AI in Python.",
    href: COURSE_CATEGORIES.ai.href,
    Icon: BrainCircuit,
    tile: "bg-indigo-600",
    courses: [
      course("Prompt Engineering", "prompt-engineering-course", 20),
      course("Deep Learning, NLP & Generative AI", "generative-ai-course", 55),
    ],
  },
  {
    family: "Digital Marketing",
    summary: "Digital marketing with AI tools, up to the full digital marketing and analytics master program.",
    href: COURSE_CATEGORIES["digital-marketing"].href,
    Icon: Megaphone,
    tile: "bg-rose-500",
    courses: [
      course("Digital Marketing with AI", "ai-bootcamp", 30),
      course("Digital Marketing & Analytics Master Program", "digital-marketing-course", 80),
    ],
  },
];

/** What a campus visit covers ("What happens when you visit"). */
export const VISIT_STEPS: readonly string[] = [
  "Take a look around the campus and the classrooms where batches are taught.",
  "Talk to a counsellor about your background and what you want to do next, and find the course that fits.",
  "Go through the syllabus, course hours, fees and the next batch dates for that course.",
  "Choose between a classroom batch here and a live online batch. The syllabus, certificate and fee are the same.",
];

/**
 * Western Line stations in line order, north (Virar side) to south
 * (Churchgate side), with Mira Road in the middle. `minutes` is the slow-train
 * time to Mira Road (corrected 27 Nov 2026: Dahisar is the next station).
 */
export const WESTERN_LINE: ReadonlyArray<{ station: string; minutes?: string }> = [
  { station: "Vasai Road", minutes: "~15 min" },
  { station: "Naigaon", minutes: "~10 min" },
  { station: "Bhayandar", minutes: "~4 min" },
  { station: "Mira Road" }, // the campus
  { station: "Dahisar", minutes: "~4 min" },
  { station: "Borivali", minutes: "~10 min" },
  { station: "Kandivali", minutes: "~14 min" },
];

/**
 * Photo slots from the brief's shot list. Real photos only, never stock: set
 * `src` (a file under /public/images/mira-road-campus/) and the slot renders
 * the photo; until then it renders a labelled placeholder. The first slot with
 * a `src` also becomes the LocalBusiness `image` in the page's schema.
 */
export const CAMPUS_PHOTOS: ReadonlyArray<{ alt: string; src?: string }> = [
  { alt: "Shanti Shopping Centre seen from Mira Road station East exit" },
  { alt: "Entrance to B-Wing, Shanti Shopping Centre, Mira Road East" },
  { alt: "CDPL campus entrance, Office 203–204, first floor" },
  { alt: "Reception and counselling desk at CDPL Mira Road campus" },
  { alt: "Software testing classroom batch at CDPL Mira Road" },
  { alt: "Trainer teaching a Selenium session at CDPL" },
  { alt: "Placement drive held at CDPL Mira Road campus" },
];

/** Shown on the page and emitted as FAQPage, so the two always match. */
export const CAMPUS_FAQS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: "Where is the CDPL campus located?",
    answer:
      "Office 203 & 204, B-Wing, 1st Floor, Shanti Shopping Centre, directly opposite Mira Road Station (East), Mira Bhayandar 401107.",
  },
  {
    question: "How far is the campus from Mira Road station?",
    answer:
      "Under a 5-minute walk. Take the East exit: Shanti Shopping Centre is directly opposite, and the campus is on the first floor of B-Wing.",
  },
  {
    question: "How do I reach the campus by road?",
    answer: "By auto or bus, ask for Shanti Shopping Centre, Mira Road East. The building faces the East exit of Mira Road station.",
  },
  {
    question: "What are the campus timings?",
    answer: "Monday to Friday 9 AM to 6 PM, Saturday 9 AM to 3 PM. Closed on Sunday.",
  },
  {
    question: "What facilities does the campus have?",
    answer:
      "Two air-conditioned classrooms with large displays, and Wi-Fi throughout. Batches are capped at 20 students, so every learner gets time with the trainer.",
  },
  {
    question: "Which courses can I take in the classroom?",
    answer:
      "All of them. Every Software Testing, Data Science, Business Intelligence, AI and Digital Marketing course listed on this page runs in classroom batches here as well as live online.",
  },
  {
    question: "What does the classroom give me that online doesn't?",
    answer:
      "In-person guidance and one-on-one teaching from your trainer. The syllabus, hours, certificate and fee are the same in both modes.",
  },
  {
    question: "Is the classroom course more expensive than online?",
    answer:
      "No. The fee is the same for both modes and is inclusive of GST. The syllabus, hours and certificate are identical.",
  },
  {
    question: "Can I visit the campus before enrolling?",
    answer:
      "Yes. Walk in any time during opening hours, or book a visit below or call +91 84889 88984 and a counsellor will be ready for you.",
  },
  {
    question: "Do you have weekend batches?",
    answer: "Yes. Saturday batches run at the campus alongside weekday batches.",
  },
  {
    question: "Do you offer internships?",
    answer: "The Advanced Manual + Automation Master Program includes an assured paid internship for 3 months.",
  },
  {
    question: "Which areas do students come from?",
    answer:
      "Mostly the Western Line and Mira-Bhayandar: Mira Road, Bhayandar, Kashimira, Dahisar, Borivali, Naigaon and Vasai. Learners further away join the same batches live online.",
  },
];

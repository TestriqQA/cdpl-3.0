// src/lib/mentorShared.ts  (or components/mentors/shared.ts)

export type Social = {
  platform: "linkedin" | "x" | "github" | "website";
  url: string;
};

export type Mentor = {
  id: string;
  name: string;
  title: string;
  company?: string;
  domain:
  | "QA"
  | "Data Science"
  | "Data Analytics"
  | "Marketing"
  | "Product"
  | "Engineering"
  | "Cloud"
  | "Security"
  | "Other"
  | "Data Engineering"
  | "Full-Stack";
  location?: string;
  experience?: string;
  avatar?: string;
  highlights?: string[];
  bio?: string;
  socials?: Social[]; // <-- now recognized
};

export function classNames(...xs: (string | false | undefined | null)[]) {
  return xs.filter(Boolean).join(" ");
}

export const DOMAIN_COLORS: Record<NonNullable<Mentor["domain"]>, string> = {
  QA: "bg-blue-50 text-blue-700 ring-blue-200",
  "Data Science": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Data Analytics": "bg-purple-50 text-purple-700 ring-purple-200",
  Marketing: "bg-pink-50 text-pink-700 ring-pink-200",
  Product: "bg-amber-50 text-amber-700 ring-amber-200",
  Engineering: "bg-slate-50 text-slate-700 ring-slate-200",
  Cloud: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Security: "bg-red-50 text-red-700 ring-red-200",
  Other: "bg-gray-50 text-gray-700 ring-gray-200",
  "Data Engineering": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  "Full-Stack": "bg-violet-50 text-violet-700 ring-violet-200",
};

export const MENTORS: Mentor[] = [
  {
    id: "pravin-mhaske",
    name: "Pravin Mhaske",
    title: "Data Science Manager",
    company: "Infosys (India)",
    domain: "Data Science",
    experience: "12+ years",
    highlights: ["Leadership", "Analytics", "Machine Learning", "Strategy"],
    avatar: "/mentors_images/Pravin-Maske.webp",
    bio: "pravin mhaske data science manager infosys analytics machine learning leadership india",
  },
  {
    id: "piyali-mondal",
    name: "Piyali Mondal",
    title: "Program Leader · M.Sc (Data Science AI & ML)",
    company: "Exeed College (UAE)",
    domain: "Data Science",
    experience: "10+ years",
    highlights: ["Academia", "Curriculum Design", "Research", "Python"],
    avatar: "/mentors_images/Piyali-Mondal.webp",
    bio: "piyali mondal program leader exeed college uae academia data science ai ml curriculum professor",
  },
  {
    id: "revathi-soundarrajan",
    name: "Revathi Soundarrajan",
    title: "Data Scientist (PhD)",
    company: "Electra Vehicles (USA)",
    domain: "Data Science",
    experience: "8+ years",
    highlights: ["ML Research", "Time Series", "AutoML", "Python"],
    avatar: "/mentors_images/Revathi-Soundarrajan.webp",
    bio: "revathi soundarrajan dr s revathi data scientist phd electra vehicles machine learning research usa",
  },
  {
    id: "dnyaneshwar-bhabad",
    name: "Dnyaneshwar Bhabad",
    title: "Assistant Manager – Technology",
    company: "Deloitte – Technology Academy (India)",
    domain: "Full-Stack",
    experience: "9+ years",
    highlights: ["JavaScript", "Training", "Backend", "System Design"],
    avatar: "/mentors_images/Dnyaneshwar-Bhabad.webp",
    bio: "dnyaneshwar bhabad assistant manager technology deloitte training software development full-stack india",
  },
  {
    id: "abhirupa-manna",
    name: "Abhirupa Manna",
    title: "Consultant",
    company: "KPMG (India)",
    domain: "Data Science",
    experience: "7+ years",
    highlights: ["SQL", "Tableau", "Power BI", "ETL", "Python"],
    avatar: "/mentors_images/Abhirupa-Manna.webp",
    bio: "abhirupa manna consultant kpmg data analytics bi sql tableau power bi qlikview etl python india",
  },
  {
    id: "urvi-verma",
    name: "Urvi Verma",
    title: "AVP – Data Engineering",
    company: "Deutsche Bank (Germany)",
    domain: "Cloud",
    experience: "10+ years",
    highlights: ["Big Data", "AWS", "GCP", "Python", "SQL"],
    avatar: "/mentors_images/Urvi-Verma.webp",
    bio: "urvi verma avp data engineering deutsche bank germany big data aws gcp cloud services python sql",
  },
  {
    id: "eshita-gangwar",
    name: "Eshita Gangwar",
    title: "Application Engineer",
    company: "Oracle (USA)",
    domain: "Full-Stack",
    experience: "5+ years",
    highlights: ["Java", "Python", "Genomic Data", "Software Development"],
    avatar: "/mentors_images/Ishita.webp",
    bio: "eshita gangwar application engineer oracle usa masters computer science usc genomic data analysis software development",
  },
];

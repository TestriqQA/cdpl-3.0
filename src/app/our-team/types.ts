// =============================
// components/our-team/types.ts

import { Url } from "next/dist/shared/lib/router/router";

// =============================
export type TeamLeaders = {
  id: string;
  name: string;
  experience: string;
  specialization: string;
  title: string;
  role: string;
  expertise: string[];
  bio: string;
  achievements: string[];
  location?: string;
  avatar: string;
  linkedin?: string;
  email?: string;
  highlights?: string[];
  src?: string
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  role: string;
  expertise: string[];
  bio: string;
  location?: string;
  avatar: string;
  linkedin: string;
  email?: string;
  highlights?: string[];
  src?: string
};

export type Trainer = {
  id: number;
  name: string;
  role: string; // e.g., "Senior QA Mentor"
  avatar: string; // public path or remote URL
  bio: string;
  yearsExp: number;
  rating?: number; // 0–5
  specialties: string[]; // e.g., ["Manual Testing", "Playwright", "API Testing"]
  certifications?: string[]; // e.g., ["ISTQB CTFL", "Scrum Master"]
  languages?: string[]; // e.g., ["English", "Hindi"]
  successStories?: number; // no. of placed learners or notable outcomes
  slug?: string; // optional profile link
  linkedin?: Url;
};

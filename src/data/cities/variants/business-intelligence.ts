// Older or alternative versions of a Business Intelligence section that several cities
// still use instead of the template's. A city picks one with `use` in
// ../overrides/business-intelligence.ts, e.g. use: { "curriculumContent.tracks": "v2" }.
// Placeholders work the same as in the template.

import type { CourseVariants } from "../types";

export const businessIntelligenceVariants: CourseVariants = {
  metadata: {
    description: {
      v2: "Looking for the comprehensive Business Intelligence training near {{city}} Railway Station? Join our job-ready BI program covering Power BI, Tableau, and SQL. Start your data career today!",
    },
  },
  heroContent: { landmarks: { v2: ["Near {{city}} Station", "Major IT Hubs in Mumbai", "Business Parks"] } },
};

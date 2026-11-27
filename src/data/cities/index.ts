// City course pages (/software-testing-course-in-pune and the rest).
//
// Each page is built from its course's template, the shared variants a city picks,
// and that city's overrides. Where to edit:
//   templates/<course>.ts  text shared by every city for that course
//   overrides/<course>.ts  one city's page
//   cities.ts              which cities exist and which courses they offer
//   local-content.ts       city-wide FAQs and job-market text (merged in by the page)

import type { CourseData } from "@/types/course-data";
import { buildCityCoursePage } from "./build";
import { CITIES, COURSE_CITIES } from "./cities";
import type { CityCourseKey, CityCourseSource } from "./types";

import { softwareTestingTemplate } from "./templates/software-testing";
import { softwareTestingVariants } from "./variants/software-testing";
import { softwareTestingOverrides } from "./overrides/software-testing";
import { dataScienceTemplate } from "./templates/data-science";
import { dataScienceVariants } from "./variants/data-science";
import { dataScienceOverrides } from "./overrides/data-science";
import { businessIntelligenceTemplate } from "./templates/business-intelligence";
import { businessIntelligenceVariants } from "./variants/business-intelligence";
import { businessIntelligenceOverrides } from "./overrides/business-intelligence";
import { artificialIntelligenceTemplate } from "./templates/artificial-intelligence";
import { artificialIntelligenceVariants } from "./variants/artificial-intelligence";
import { artificialIntelligenceOverrides } from "./overrides/artificial-intelligence";
import { digitalMarketingTemplate } from "./templates/digital-marketing";
import { digitalMarketingVariants } from "./variants/digital-marketing";
import { digitalMarketingOverrides } from "./overrides/digital-marketing";

const SOURCES: Record<CityCourseKey, CityCourseSource> = {
  "software-testing": { template: softwareTestingTemplate, variants: softwareTestingVariants, overrides: softwareTestingOverrides },
  "data-science": { template: dataScienceTemplate, variants: dataScienceVariants, overrides: dataScienceOverrides },
  "business-intelligence": { template: businessIntelligenceTemplate, variants: businessIntelligenceVariants, overrides: businessIntelligenceOverrides },
  "artificial-intelligence": { template: artificialIntelligenceTemplate, variants: artificialIntelligenceVariants, overrides: artificialIntelligenceOverrides },
  "digital-marketing": { template: digitalMarketingTemplate, variants: digitalMarketingVariants, overrides: digitalMarketingOverrides },
};

function buildAll(): Record<string, CourseData> {
  const pages: Record<string, CourseData> = {};
  for (const course of Object.keys(COURSE_CITIES) as CityCourseKey[]) {
    for (const citySlug of COURSE_CITIES[course]) {
      const city = CITIES[citySlug];
      if (!city) throw new Error(`City page ${course}/${citySlug}: "${citySlug}" is missing from CITIES`);
      pages[`${course}-${citySlug}`] = buildCityCoursePage(course, citySlug, city, SOURCES[course]);
    }
  }
  return pages;
}

/** Every city course page, keyed `<course>-<citySlug>`. */
export const courseData: Record<string, CourseData> = buildAll();

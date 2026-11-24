/**
 * TEMPORARY MOCK — course prices.
 *
 * The end state is Sanity (`coursePrice` documents) read through
 * `src/sanity/lib/course-prices.ts`; see docs/course-pricing-plan.md.
 * This file lets the UI be built and reviewed before that fetch layer exists.
 * When the real module lands, swap the import and delete this file — the
 * `CoursePrice` shape and `priceForHref` signature are deliberately identical.
 *
 * Source: Google Sheet "course detail_v7 sharable" (read 2026-11-24).
 *   price     = sheet "Final price / 20% discounted"
 *   listPrice = sheet "New Fees"
 * Courses with no confirmed fee (etl-testing, sdet-course) are absent on
 * purpose so cards and pages can be checked in both states.
 */

import type { CourseSlug } from "@/data/courses/registry";

export type CoursePrice = {
  /** Current selling price, integer rupees. */
  price: number;
  /** Strike-through list price. */
  listPrice?: number;
  /** Small print under the price. */
  note?: string;
};

export const PRICE_NOTE = "GST as applicable";

export const MOCK_COURSE_PRICING: Partial<Record<CourseSlug, CoursePrice>> = {
  // Software testing
  "manual-testing-course": { price: 24000, listPrice: 30000, note: PRICE_NOTE },
  "api-testing": { price: 10400, listPrice: 13000, note: PRICE_NOTE },
  "dbms-course": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  "java-course": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  "advance-software-testing": { price: 45000, listPrice: 50000, note: PRICE_NOTE },
  "automation-testing-course": { price: 45000, listPrice: 50000, note: PRICE_NOTE },
  "advance-manual-automation-testing": { price: 85000, listPrice: 100000, note: PRICE_NOTE },
  "python-course": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  // Data science & ML
  "machine-learning-using-python": { price: 24000, listPrice: 30000, note: PRICE_NOTE },
  "machine-learning-course": { price: 48000, listPrice: 60000, note: PRICE_NOTE },
  "data-visualization-in-r-programming": { price: 12000, listPrice: 15000, note: PRICE_NOTE },
  "generative-ai-course": { price: 32000, listPrice: 40000, note: PRICE_NOTE },
  "data-science-course": { price: 100000, listPrice: 120000, note: PRICE_NOTE },
  "ai-course": { price: 144000, listPrice: 180000, note: PRICE_NOTE },
  // Data analytics & BI
  "data-analytics-python": { price: 12000, listPrice: 15000, note: PRICE_NOTE },
  "data-analytics-and-visualization": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  "power-bi-course": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  "data-analytics-with-tableau": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
  "data-analytics": { price: 45000, listPrice: 50000, note: PRICE_NOTE },
  "masters-in-data-engineering": { price: 85000, listPrice: 100000, note: PRICE_NOTE },
  // Digital marketing
  "ai-bootcamp": { price: 24000, listPrice: 30000, note: PRICE_NOTE },
  "digital-marketing-course": { price: 48000, listPrice: 60000, note: PRICE_NOTE },
  "ai-in-digital-marketing": { price: 48000, listPrice: 60000, note: PRICE_NOTE },
  // Artificial intelligence
  "prompt-engineering-course": { price: 16000, listPrice: 20000, note: PRICE_NOTE },
};

export function priceForSlug(slug?: string): CoursePrice | undefined {
  return slug ? MOCK_COURSE_PRICING[slug as CourseSlug] : undefined;
}

/**
 * Look up a price from a card link, e.g.
 * "/courses/software-testing-course/api-testing" → "api-testing".
 */
export function priceForHref(href?: string): CoursePrice | undefined {
  if (!href) return undefined;
  const slug = href.split("?")[0].replace(/\/+$/, "").split("/").pop();
  return priceForSlug(slug);
}

/**
 * The subset of `CourseCardData` a price fills in. Spread onto a card's props:
 * `{ ...course, ...cardPrice(course.link) }`. Returns `{}` when unpriced, so
 * the card renders its no-price layout.
 */
export function cardPrice(href?: string): { price?: number; listPrice?: number; priceNote?: string } {
  const found = priceForHref(href);
  if (!found) return {};
  return { price: found.price, listPrice: found.listPrice, priceNote: found.note };
}


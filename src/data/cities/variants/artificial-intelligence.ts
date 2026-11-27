// Older or alternative versions of a Artificial Intelligence section that several cities
// still use instead of the template's. A city picks one with `use` in
// ../overrides/artificial-intelligence.ts, e.g. use: { "curriculumContent.tracks": "v2" }.
// Placeholders work the same as in the template.

import type { CourseVariants } from "../types";

export const artificialIntelligenceVariants: CourseVariants = {
  heroImage: { v2: "/images/ai-hero-{{cityLower}}.jpg" },
  metadata: {
    keywords: {
      v2: "artificial intelligence course {{cityLower}}, ai training {{cityLower}}, machine learning course {{cityLower}}, deep learning course, nlp course {{cityLower}}, ai certification {{cityLower}}",
    },
  },
  heroContent: { landmarks: { v2: ["India Gate", "Taj Mahal", "Red Fort"] } },
};

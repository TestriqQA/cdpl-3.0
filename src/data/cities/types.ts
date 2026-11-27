import type { CourseData } from "@/types/course-data";

/** Course families that have city pages, e.g. /data-science-course-in-pune. */
export type CityCourseKey =
  | "software-testing"
  | "data-science"
  | "business-intelligence"
  | "artificial-intelligence"
  | "digital-marketing";

/** One location in cities.ts. A course's override can replace name or state for its own page. */
export type CityInfo = { name: string; state: string };

/**
 * A course's shared city-page content. Strings may hold placeholders, filled per page:
 * {{city}}, {{cityLower}}, {{citySlug}}, {{state}}, {{slug}}.
 */
export type CityCourseTemplate = Omit<CourseData, "slug" | "location" | "state" | "lat" | "lng">;

/** Top-level fields replace whole; object fields (heroContent, metadata…) replace per sub-field. */
type OneLevelPatch<T> = {
  [K in keyof T]?: NonNullable<T[K]> extends readonly unknown[]
    ? T[K]
    : NonNullable<T[K]> extends object
      ? Partial<NonNullable<T[K]>>
      : T[K];
};

/** What one city's page changes. `use` picks a shared version from the course's variants file. */
export type CityPageOverride = OneLevelPatch<CourseData> & {
  /** Field path → variant id, e.g. { "curriculumContent.tracks": "v2" }. */
  use?: Record<string, string>;
};

export type CityOverrides = Record<string, CityPageOverride>;

/** Shared alternatives to template values: field (or field.subField) → variant id → value. */
export type CourseVariants = {
  [K in keyof CourseData]?: NonNullable<CourseData[K]> extends readonly unknown[]
    ? Record<string, CourseData[K]>
    : NonNullable<CourseData[K]> extends object
      ? { [K2 in keyof NonNullable<CourseData[K]>]?: Record<string, NonNullable<CourseData[K]>[K2]> }
      : Record<string, CourseData[K]>;
};

export type CityCourseSource = {
  template: CityCourseTemplate;
  variants: CourseVariants;
  overrides: CityOverrides;
};

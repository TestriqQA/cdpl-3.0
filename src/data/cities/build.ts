import type { CourseData } from "@/types/course-data";
import type { CityCourseKey, CityCourseSource, CityInfo } from "./types";

type Plain = Record<string, unknown>;
const isPlain = (v: unknown): v is Plain => v !== null && typeof v === "object" && !Array.isArray(v);

/** Replaces {{city}}-style placeholders in every string of a value. */
function fill<T>(value: T, tokens: Record<string, string>): T {
  if (typeof value === "string") {
    return value.replace(/\{\{(\w+)\}\}/g, (match, name: string) => tokens[name] ?? match) as T;
  }
  if (Array.isArray(value)) return value.map((v) => fill(v, tokens)) as T;
  if (isPlain(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v, tokens)])) as T;
  }
  return value;
}

/** Sets `value` at a one- or two-part path; `undefined` removes the field. */
function setPath(page: Plain, path: string[], value: unknown) {
  const [field, sub] = path;
  if (sub === undefined) {
    if (value === undefined) delete page[field];
    else page[field] = value;
    return;
  }
  const parent = { ...(page[field] as Plain) };
  if (value === undefined) delete parent[sub];
  else parent[sub] = value;
  page[field] = parent;
}

/**
 * Builds one city course page: template, then any shared variants the city
 * picks, then its own overrides, then the placeholders filled in.
 */
export function buildCityCoursePage(
  course: CityCourseKey,
  citySlug: string,
  city: CityInfo,
  { template, variants, overrides }: CityCourseSource,
): CourseData {
  const { use, location, state, ...own } = overrides[citySlug] ?? {};
  const page: Plain = { ...template };

  for (const [path, id] of Object.entries(use ?? {})) {
    const parts = path.split(".");
    let table: unknown = variants;
    for (const part of parts) table = isPlain(table) ? table[part] : undefined;
    if (!isPlain(table) || !(id in table)) {
      throw new Error(`City page ${course}/${citySlug}: no variant "${id}" for ${path}`);
    }
    setPath(page, parts, table[id]);
  }

  for (const [field, value] of Object.entries(own)) {
    if (isPlain(value) && isPlain(page[field])) {
      for (const [sub, subValue] of Object.entries(value)) setPath(page, [field, sub], subValue);
    } else {
      setPath(page, [field], value);
    }
  }

  const slug = `${course}-course-in-${citySlug}`;
  const name = location ?? city.name;
  const pageState = state ?? city.state;
  const tokens = { slug, city: name, cityLower: name.toLowerCase(), citySlug, state: pageState };

  const filled = fill(page, tokens);
  return { slug, courseName: filled.courseName, location: name, state: pageState, ...filled } as CourseData;
}

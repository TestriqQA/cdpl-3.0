// src/data/courseData/buildLocationsHierarchy.ts
import { CourseData } from "@/types/courseData";

export type City = {
  name: string;
  lat: number;
  lng: number;
  courseTypes: string[];
  links: Record<string, string>;
};

export type District = {
  district: string;
  description?: string;
  cities: City[];
};

export type StateT = {
  state: string;
  description?: string;
  districts: District[];
};

export type Country = {
  country: string;
  description?: string;
  states: StateT[];
};

const norm = (s: string) => s.trim().toLowerCase();

/** ALL STATES PRESERVED — NO REDUCTION */
const COUNTRY_BY_STATE: Record<string, "India" | "UAE"> = {
  // === INDIA - 28 STATES + 8 UTs (add more keys as needed) ===
  [norm("Andhra Pradesh")]: "India",
  [norm("Arunachal Pradesh")]: "India",
  [norm("Assam")]: "India",
  [norm("Bihar")]: "India",
  [norm("Chhattisgarh")]: "India",
  [norm("Goa")]: "India",
  [norm("Gujarat")]: "India",
  [norm("Haryana")]: "India",
  [norm("Himachal Pradesh")]: "India",
  [norm("Jharkhand")]: "India",
  [norm("Karnataka")]: "India",
  [norm("Kerala")]: "India",
  [norm("Madhya Pradesh")]: "India",
  [norm("Maharashtra")]: "India",
  [norm("Manipur")]: "India",
  [norm("Meghalaya")]: "India",
  [norm("Mizoram")]: "India",
  [norm("Nagaland")]: "India",
  [norm("Odisha")]: "India",
  [norm("Punjab")]: "India",
  [norm("Rajasthan")]: "India",
  [norm("Sikkim")]: "India",
  [norm("Tamil Nadu")]: "India",
  [norm("Telangana")]: "India",
  [norm("Tripura")]: "India",
  [norm("Uttar Pradesh")]: "India",
  [norm("Uttarakhand")]: "India",
  [norm("West Bengal")]: "India",
  // Union Territories
  [norm("Delhi")]: "India",
  [norm("Puducherry")]: "India",
  [norm("Chandigarh")]: "India",
  [norm("Jammu and Kashmir")]: "India",
  [norm("Ladakh")]: "India",

  // === UAE - 7 EMIRATES ===
  [norm("Abu Dhabi")]: "UAE",
  [norm("Dubai")]: "UAE",
  [norm("Sharjah")]: "UAE",
  [norm("Ajman")]: "UAE",
  [norm("Umm Al Quwain")]: "UAE",
  [norm("Ras Al Khaimah")]: "UAE",
  [norm("Fujairah")]: "UAE",
};

/** Extract course type from slug */
function getCourseType(slug: string): string | undefined {
  const lower = slug.toLowerCase();
  if (lower.includes("data-science") || lower.includes("ai-ml-bi") || lower.includes("business-intelligence") || lower.includes("data-analytics")) return "data-science";
  if (lower.includes("software-testing")) return "software-testing";
  if (lower.includes("digital-marketing") || lower.includes("general")) return "digital-marketing";
  // Changed: map new "web-development" slug, and keep legacy "programming" slugs compatible
  if (lower.includes("web-development") || lower.includes("programming")) return "web-development";
  return undefined;
}

export function buildLocationsHierarchy(courses: CourseData[]): Country[] {
  // country → state → city → { types, links, coord }
  const tree = new Map<
    string,
    Map<
      string,
      Map<
        string,
        { types: Set<string>; links: Map<string, string>; coord?: { lat: number; lng: number } }
      >
    >
  >();

  for (const c of courses) {
    const state = c.state?.trim();
    let city = c.location?.trim();
    if (!state || !city) continue;

    // Normalize city name: remove " Station, Mumbai" suffix, ", Mumbai" suffix, and parentheticals
    city = city.replace(/ Station, Mumbai$/i, "")
      .replace(/, Mumbai$/i, "")
      .replace(/\s*\(.*?\)\s*/g, "") // Remove (Text)
      .trim();

    // Filter out invalid city names
    if (city === "Station" || city.includes("Stations")) continue;

    const country = COUNTRY_BY_STATE[norm(state)];
    if (!country) continue; // Unknown state — add to map above if needed

    // Build tree
    if (!tree.has(country)) tree.set(country, new Map());
    const byState = tree.get(country)!;

    if (!byState.has(state)) byState.set(state, new Map());
    const byCity = byState.get(state)!;

    if (!byCity.has(city)) {
      byCity.set(city, { types: new Set(), links: new Map(), coord: undefined });
    }
    const entry = byCity.get(city)!;

    const type = getCourseType(c.slug);
    if (type) {
      entry.types.add(type);
      entry.links.set(type, c.slug);
    }

    // Store lat/lng once
    if (c.lat != null && c.lng != null && !entry.coord) {
      entry.coord = { lat: c.lat, lng: c.lng };
    }
  }

  // Convert to final structure
  const countries: Country[] = [];
  for (const [country, statesMap] of tree) {
    const states: StateT[] = [];

    for (const [state, citiesMap] of statesMap) {
      const cities: City[] = [];

      for (const [cityName, { types, links, coord }] of citiesMap) {
        cities.push({
          name: cityName,
          lat: coord?.lat ?? 0,
          lng: coord?.lng ?? 0,
          courseTypes: Array.from(types).sort(),
          links: Object.fromEntries(links),
        });
      }

      // Sort cities alphabetically
      cities.sort((a, b) => a.name.localeCompare(b.name));

      const districts: District[] = [
        {
          district: "Cities",
          cities,
        },
      ];

      states.push({ state, districts });
    }

    // Sort states alphabetically
    states.sort((a, b) => a.state.localeCompare(b.state));

    countries.push({ country, states });
  }

  // Sort countries: India first, then UAE
  return countries.sort((a, b) => (a.country === "India" ? -1 : b.country === "India" ? 1 : 0));
}

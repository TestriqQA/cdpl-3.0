// src/components/sections/LocationsHierarchicalLocationsSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronDown, ChevronUp, BookOpen, Code, Search, Target, Zap } from "lucide-react";

type City = {
  name: string;
  lat: number;
  lng: number;
  courseTypes: string[];
  links: Record<string, string>;
};

type District = { district: string; description?: string; cities: City[] };
type StateT = { state: string; description?: string; districts: District[] };
type Country = { country: string; description?: string; states: StateT[] };
type HierarchyData = Country[];

interface Props {
  data: HierarchyData;
  sectionClassName?: string;
  containerClassName?: string;
}

const COURSE_CONFIG: Record<
  string,
  { label: string; icon: ReactNode; color: string }
> = {
  "data-science": {
    label: "Data Science",
    icon: <BookOpen className="w-3.5 h-3.5" />,
    color: "bg-blue-100 text-blue-700 ring-blue-300",
  },
  "software-testing": {
    label: "Software Testing",
    icon: <Search className="w-3.5 h-3.5" />,
    color: "bg-green-100 text-green-700 ring-green-300",
  },
  "digital-marketing": {
    label: "Digital Marketing",
    icon: <Target className="w-3.5 h-3.5" />,
    color: "bg-purple-100 text-purple-700 ring-purple-300",
  },
  // Updated key to match new course type emitted by data: "web-development"
  "web-development": {
    label: "Web Development",
    icon: <Code className="w-3.5 h-3.5" />,
    color: "bg-orange-100 text-brand ring-orange-300",
  },
  // (Optional) Backward-compat alias for any legacy data still using "programming"
  programming: {
    label: "Web Development",
    icon: <Code className="w-3.5 h-3.5" />,
    color: "bg-orange-100 text-brand ring-orange-300",
  },
  "artificial-intelligence": {
    label: "Artificial Intelligence",
    icon: <Zap className="w-3.5 h-3.5" />,
    color: "bg-amber-100 text-amber-700 ring-amber-300",
  },
};

// Country backgrounds
const COUNTRY_BG: Record<string, string> = {
  India: "bg-gradient-to-br from-blue-50 to-indigo-50",
  UAE: "bg-gradient-to-br from-purple-50 to-pink-50",
};

// State backgrounds
const STATE_BG: Record<string, Record<string, string>> = {
  India: {
    "Andhra Pradesh": "bg-gradient-to-r from-blue-50/80 to-cyan-50/80",
    "Arunachal Pradesh": "bg-gradient-to-r from-emerald-50/80 to-teal-50/80",
    Assam: "bg-gradient-to-r from-green-50/80 to-lime-50/80",
    Bihar: "bg-gradient-to-r from-amber-50/80 to-orange-50/80",
    Chhattisgarh: "bg-gradient-to-r from-red-50/80 to-pink-50/80",
    Goa: "bg-gradient-to-r from-indigo-50/80 to-purple-50/80",
    Gujarat: "bg-gradient-to-r from-sky-50/80 to-blue-50/80",
    Haryana: "bg-gradient-to-r from-cyan-50/80 to-teal-50/80",
    "Himachal Pradesh": "bg-gradient-to-r from-slate-50/80 to-gray-50/80",
    Jharkhand: "bg-gradient-to-r from-yellow-50/80 to-amber-50/80",
    Karnataka: "bg-gradient-to-r from-blue-50/80 to-indigo-50/80",
    Kerala: "bg-gradient-to-r from-teal-50/80 to-emerald-50/80",
    "Madhya Pradesh": "bg-gradient-to-r from-orange-50/80 to-red-50/80",
    Maharashtra: "bg-gradient-to-r from-purple-50/80 to-pink-50/80",
    Manipur: "bg-gradient-to-r from-rose-50/80 to-fuchsia-50/80",
    Meghalaya: "bg-gradient-to-r from-lime-50/80 to-green-50/80",
    Mizoram: "bg-gradient-to-r from-violet-50/80 to-purple-50/80",
    Nagaland: "bg-gradient-to-r from-teal-50/80 to-cyan-50/80",
    Odisha: "bg-gradient-to-r from-amber-50/80 to-yellow-50/80",
    Punjab: "bg-gradient-to-r from-sky-50/80 to-blue-50/80",
    Rajasthan: "bg-gradient-to-r from-pink-50/80 to-rose-50/80",
    Sikkim: "bg-gradient-to-r from-emerald-50/80 to-teal-50/80",
    "Tamil Nadu": "bg-gradient-to-r from-indigo-50/80 to-blue-50/80",
    Telangana: "bg-gradient-to-r from-cyan-50/80 to-sky-50/80",
    Tripura: "bg-gradient-to-r from-green-50/80 to-lime-50/80",
    "Uttar Pradesh": "bg-gradient-to-r from-orange-50/80 to-amber-50/80",
    Uttarakhand: "bg-gradient-to-r from-slate-50/80 to-gray-50/80",
    "West Bengal": "bg-gradient-to-r from-purple-50/80 to-violet-50/80",
    Delhi: "bg-gradient-to-r from-blue-50/80 to-cyan-50/80",
    Puducherry: "bg-gradient-to-r from-teal-50/80 to-emerald-50/80",
    Chandigarh: "bg-gradient-to-r from-sky-50/80 to-indigo-50/80",
    "Jammu and Kashmir": "bg-gradient-to-r from-pink-50/80 to-rose-50/80",
    Ladakh: "bg-gradient-to-r from-gray-50/80 to-slate-50/80",
  },
  UAE: {
    "Abu Dhabi": "bg-gradient-to-r from-purple-50/80 to-violet-50/80",
    Dubai: "bg-gradient-to-r from-pink-50/80 to-rose-50/80",
    Sharjah: "bg-gradient-to-r from-fuchsia-50/80 to-purple-50/80",
    Ajman: "bg-gradient-to-r from-rose-50/80 to-pink-50/80",
    "Umm Al Quwain": "bg-gradient-to-r from-violet-50/80 to-purple-50/80",
    "Ras Al Khaimah": "bg-gradient-to-r from-indigo-50/80 to-purple-50/80",
    Fujairah: "bg-gradient-to-r from-pink-50/80 to-fuchsia-50/80",
  },
};

// City backgrounds
const CITY_BG: Record<string, string> = {
  Hyderabad: "bg-blue-50",
  Vijayawada: "bg-indigo-50",
  Visakhapatnam: "bg-teal-50",
  Guntur: "bg-cyan-50",
  Nellore: "bg-sky-50",
  Bengaluru: "bg-blue-50",
  Mysuru: "bg-indigo-50",
  Hubli: "bg-teal-50",
  Mangaluru: "bg-cyan-50",
  Belagavi: "bg-sky-50",
  Chennai: "bg-blue-50",
  Coimbatore: "bg-indigo-50",
  Madurai: "bg-teal-50",
  Tiruchirappalli: "bg-cyan-50",
  Salem: "bg-sky-50",
  Pune: "bg-blue-50",
  Mumbai: "bg-indigo-50",
  Nagpur: "bg-teal-50",
  Nashik: "bg-cyan-50",
  Aurangabad: "bg-sky-50",
  Delhi: "bg-blue-50",
  Noida: "bg-indigo-50",
  Gurugram: "bg-teal-50",
  Ghaziabad: "bg-cyan-50",
  Faridabad: "bg-sky-50",
  Kolkata: "bg-blue-50",
  Howrah: "bg-indigo-50",
  Siliguri: "bg-teal-50",
  Durgapur: "bg-cyan-50",
  Asansol: "bg-sky-50",
  Ahmedabad: "bg-blue-50",
  Surat: "bg-indigo-50",
  Vadodara: "bg-teal-50",
  Rajkot: "bg-cyan-50",
  Jamnagar: "bg-sky-50",
  Kochi: "bg-blue-50",
  Thiruvananthapuram: "bg-indigo-50",
  Kozhikode: "bg-teal-50",
  Thrissur: "bg-cyan-50",
  Kannur: "bg-sky-50",
  Jaipur: "bg-blue-50",
  Jodhpur: "bg-indigo-50",
  Udaipur: "bg-teal-50",
  Kota: "bg-cyan-50",
  Ajmer: "bg-sky-50",
  Lucknow: "bg-blue-50",
  Kanpur: "bg-indigo-50",
  Agra: "bg-teal-50",
  Varanasi: "bg-cyan-50",
  Prayagraj: "bg-sky-50",
  Patna: "bg-blue-50",
  Gaya: "bg-indigo-50",
  Bhagalpur: "bg-teal-50",
  Muzaffarpur: "bg-cyan-50",
  Purnia: "bg-sky-50",
  Indore: "bg-blue-50",
  Bhopal: "bg-indigo-50",
  Jabalpur: "bg-teal-50",
  Gwalior: "bg-cyan-50",
  Ujjain: "bg-sky-50",
  Raipur: "bg-blue-50",
  Bhilai: "bg-indigo-50",
  Bilaspur: "bg-teal-50",
  Korba: "bg-cyan-50",
  Durg: "bg-sky-50",
  Goa: "bg-blue-50",
  Panaji: "bg-indigo-50",
  Margao: "bg-teal-50",
  Vasco: "bg-cyan-50",
  Mapusa: "bg-sky-50",
  Dubai: "bg-purple-50",
  "Abu Dhabi": "bg-pink-50",
  Sharjah: "bg-rose-50",
  Ajman: "bg-fuchsia-50",
  "Al Ain": "bg-violet-50",
  "Ras Al Khaimah": "bg-purple-50",
  Fujairah: "bg-pink-50",
  "Umm Al Quwain": "bg-rose-50",
};

export default function LocationsHierarchicalLocationsSection({
  data,
  sectionClassName = "",
  containerClassName = "",
}: Props) {
  const [expandedStates, setExpandedStates] = useState<Record<string, Set<string>>>({});
  // Countries start CLOSED on initial load
  const [openCountries, setOpenCountries] = useState<Set<string>>(
    () => new Set()
  );

  const toggleState = (country: string, state: string) => {
    setExpandedStates((p) => {
      const set = p[country] ?? new Set<string>();
      const next = new Set(set);
      if (next.has(state)) next.delete(state);
      else next.add(state);
      return { ...p, [country]: next };
    });
  };

  const toggleCountry = (country: string) => {
    setOpenCountries((prev) => {
      const next = new Set(prev);
      if (next.has(country)) next.delete(country);
      else next.add(country);
      return next;
    });
  };

  return (
    <section id="locations-directory" className={`w-full bg-white ${sectionClassName}`}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Browse Our Locations</h2>
            <p className="text-sm text-blue-600">
              Explore our global network—jump from <strong>Country</strong> to <strong>State</strong> to{" "}
              <strong>City</strong> and find the perfect classroom near you.
            </p>
          </div>

          {/* Countries */}
          <div className="space-y-6">
            {data.map((countryObj) => {
              const totalCities = countryObj.states.reduce(
                (a, s) => a + s.districts.reduce((b, d) => b + d.cities.length, 0),
                0
              );

              const isIndia = countryObj.country === "India";
              const iconBg = isIndia ? "bg-blue-600" : "bg-purple-600";
              const iconText = isIndia ? "IN" : "AE";
              const countryBg = COUNTRY_BG[countryObj.country] || "bg-gray-50";
              const cOpen = openCountries.has(countryObj.country);

              return (
                <div
                  key={countryObj.country}
                  className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${countryBg}`}
                >
                  {/* Country Header */}
                  <button
                    type="button"
                    onClick={() => toggleCountry(countryObj.country)}
                    className="flex w-full items-center justify-between px-6 py-4"
                    aria-expanded={cOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg} text-white font-bold text-sm`}
                      >
                        {iconText}
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900">{countryObj.country}</h3>
                        <p className="text-sm text-gray-500">
                          {countryObj.states.length} State{countryObj.states.length > 1 ? "s" : ""} • {totalCities}{" "}
                          Location{totalCities > 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                    {cOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {/* States */}
                  {cOpen && (
                    <div className="border-t border-gray-100">
                      {countryObj.states.map((stateObj) => {
                        const sOpen =
                          expandedStates[countryObj.country]?.has(stateObj.state) ?? false;
                        const cityCount = stateObj.districts.reduce(
                          (acc, d) => acc + d.cities.length,
                          0
                        );
                        const stateBg =
                          STATE_BG[countryObj.country]?.[stateObj.state] || "bg-gray-50/80";

                        return (
                          <div
                            key={stateObj.state}
                            className={`border-b border-gray-100 last:border-b-0 ${stateBg}`}
                          >
                            <button
                              onClick={() => toggleState(countryObj.country, stateObj.state)}
                              className="flex w-full items-center justify-between px-6 py-3 text-left hover:bg-white/40 transition"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-800">{stateObj.state}</span>
                                <span className="text-sm text-gray-500">
                                  ({cityCount} {cityCount === 1 ? "city" : "cities"})
                                </span>
                              </div>
                              {sOpen ? (
                                <ChevronUp className="h-4 w-4 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                              )}
                            </button>

                            {/* Cities */}
                            {sOpen && (
                              <div className="bg-white px-6 pb-4 pt-2 border-t border-gray-100">
                                {stateObj.districts.map((districtObj) => {
                                  return (
                                    <div key={districtObj.district}>
                                      {districtObj.cities.map((city) => {
                                        const cityBg = CITY_BG[city.name] || "bg-gray-50";
                                        return (
                                          <div
                                            key={city.name}
                                            className={`mb-4 rounded-lg border border-gray-200 p-4 shadow-sm ${cityBg}`}
                                          >
                                            <div className="flex items-center justify-between mb-2">
                                              <h4 className="font-semibold text-gray-900">{city.name}</h4>
                                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                                                {city.courseTypes.length} course
                                                {city.courseTypes.length > 1 ? "s" : ""}
                                              </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                              {city.courseTypes.map((type) => {
                                                const cfg = COURSE_CONFIG[type];
                                                if (!cfg) return null;
                                                return (
                                                  <Link
                                                    key={type}
                                                    href={city.links[type]}
                                                    className={`group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all shadow-sm ring-1 ${cfg.color} hover:shadow`}
                                                  >
                                                    {cfg.icon}
                                                    <span>{cfg.label}</span>
                                                  </Link>
                                                );
                                              })}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

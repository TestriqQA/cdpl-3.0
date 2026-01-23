"use client";

import { useEffect, useMemo, useState } from "react";
import type { Trainer } from "@/app/trainers/types";
import { Search, Filter, X, Flame, SortDesc, BadgeCheck } from "lucide-react";
import TrainersCardSection from "@/components/sections/TrainersCardSection";

type SortKey = "relevance" | "name" | "experience";

type ExtendedTrainer = Trainer & {
    experienceYears?: number;
    featured?: boolean;
    linkedin?: string;
    website?: string;
    twitter?: string;
    github?: string;
};

export default function TrainersDirectorySection({ trainers }: { trainers: ExtendedTrainer[] }) {
    const [query, setQuery] = useState("");
    const [skill, setSkill] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<SortKey>("relevance");

    // ---- Derived SEO-friendly content ----
    const skills = useMemo(() => {
        const set = new Set<string>();
        trainers.forEach((t) => t.skills?.forEach((s) => set.add(s)));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [trainers]);

    const locations = useMemo(() => {
        const set = new Set<string>();
        trainers.forEach((t) => t.location && set.add(t.location));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [trainers]);

    // ---- Filter + Sort ----
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();

        const base = trainers.filter((t) => {
            const matchesQuery = q
                ? [t.name, t.title, t.bio, (t.skills || []).join(" ")].some((x) =>
                    (x || "").toLowerCase().includes(q)
                )
                : true;
            const matchesSkill = skill ? (t.skills || []).includes(skill) : true;
            return matchesQuery && matchesSkill;
        });

        const sorted = [...base];
        if (sortBy === "name") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "experience") {
            // assumes optional numeric field like experienceYears
            sorted.sort(
                (a, b) => (b.experienceYears ?? 0) - (a.experienceYears ?? 0)
            );
        } else {
            // "relevance": light heuristic -> featured first, then experience, then name
            sorted.sort((a, b) => {
                const af = a.featured ? 1 : 0;
                const bf = b.featured ? 1 : 0;
                if (bf !== af) return bf - af;
                const ae = a.experienceYears ?? 0;
                const be = b.experienceYears ?? 0;
                if (be !== ae) return be - ae;
                return a.name.localeCompare(b.name);
            });
        }
        return sorted;
    }, [trainers, query, skill, sortBy]);

    const featured = useMemo(
        () => trainers.filter((t) => t.featured).slice(0, 6),
        [trainers]
    );

    const resetAll = () => {
        setQuery("");
        setSkill(null);
        setSortBy("relevance");
    };

    // ---- JSON-LD: ItemList for better SEO ----
    const jsonLd = useMemo(() => {
        const items = filtered.slice(0, 12).map((t, idx) => {
            const sameAs = [
                t.linkedin,
                t.website,
                t.twitter,
                t.github,
            ].filter(Boolean);
            return {
                "@type": "ListItem",
                position: idx + 1,
                item: {
                    "@type": "Person",
                    name: t.name,
                    jobTitle: t.title,
                    description: t.bio,
                    worksFor: "Cinute Digital",
                    sameAs,
                    address: t.location ? { "@type": "PostalAddress", addressLocality: t.location } : undefined,
                    knowsAbout: t.skills,
                },
            };
        });

        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cinute Digital Trainers Directory",
            itemListElement: items,
        };
    }, [filtered]);

    // ---- Announce result count for a11y ----
    useEffect(() => {
        // no-op; present but reserved for future live region hooks if needed
    }, [filtered.length]);

    return (
        <section
            id="directory"
            className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
            aria-labelledby="trainers-directory-heading"
        >
            {/* Light, slightly futuristic header with SEO text */}
            <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 sm:p-8 shadow-sm"
                style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.20)" }}>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 id="trainers-directory-heading" className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            Expert Trainers in Manual & Automation Testing, API Testing, and Data Science
                        </h2>
                        <p className="mt-2 text-sm text-slate-700">
                            Discover mentor-led instructors with real industry experience. Filter by in-demand skills, compare{" "}
                            hands-on project portfolios, and connect with certified experts aligned to hiring partner standards.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-600">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                                <BadgeCheck className="h-3.5 w-3.5" /> ISO-aligned training
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                                <Flame className="h-3.5 w-3.5" /> Job-ready capstones
                            </span>
                            {locations.length > 0 && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                                    {locations.length} locations
                                </span>
                            )}
                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 ring-1 ring-slate-200">
                                {skills.length} skills
                            </span>
                        </div>
                    </div>

                    {/* Search + Sort */}
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:w-auto">
                        <div className="relative w-full sm:w-80">
                            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <label htmlFor="trainers-search" className="sr-only">
                                Search trainers by name, skill, or role
                            </label>
                            <input
                                id="trainers-search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search trainers by name, skill, or role…"
                                aria-label="Search trainers by name, skill, or role"
                                className="w-full rounded-2xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand"
                                type="search"
                                inputMode="search"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="sort-trainers" className="sr-only">
                                Sort trainers
                            </label>
                            <div className="relative">
                                <SortDesc className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <select
                                    id="sort-trainers"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortKey)}
                                    className="appearance-none rounded-2xl border border-slate-200 bg-white pl-9 pr-8 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand"
                                >
                                    <option value="relevance">Sort: Relevance</option>
                                    <option value="name">Sort: Name (A–Z)</option>
                                    <option value="experience">Sort: Experience</option>
                                </select>
                            </div>
                            {(query || skill || sortBy !== "relevance") && (
                                <button
                                    onClick={resetAll}
                                    className="inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                                    aria-label="Reset all filters"
                                >
                                    <X className="h-4 w-4" /> Reset
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Featured mentors rail */}
                {featured.length > 0 && (
                    <div className="mt-5">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                            <Flame className="h-4 w-4 text-orange-500" />
                            Featured Mentors
                        </div>
                        <div className="scrollbar-none -mx-2 flex snap-x gap-4 overflow-x-auto px-2 pb-1">
                            {featured.map((t) => (
                                <div key={t.id} className="min-w-[260px] snap-start">
                                    <TrainersCardSection t={t} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Filters bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200">
                    <Filter className="h-3.5 w-3.5" /> Skills
                </span>
                <button
                    onClick={() => setSkill(null)}
                    className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${skill === null
                        ? "bg-brand text-white ring-brand"
                        : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"
                        }`}
                    aria-pressed={skill === null}
                >
                    All skills
                </button>
                {skills.map((s) => (
                    <button
                        key={s}
                        onClick={() => setSkill((cur) => (cur === s ? null : s))}
                        className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${skill === s
                            ? "bg-brand text-white ring-brand"
                            : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"
                            }`}
                        aria-pressed={skill === s}
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* Results meta */}
            <div className="mt-3 flex items-center justify-between">
                <p
                    className="text-xs text-slate-600"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Showing <strong className="text-slate-900">{filtered.length}</strong> of{" "}
                    <strong className="text-slate-900">{trainers.length}</strong> trainers
                    {skill ? (
                        <>
                            {" "}
                            for skill <strong className="text-slate-900">{skill}</strong>
                        </>
                    ) : null}
                    {query ? (
                        <>
                            {" "}
                            matching <strong className="text-slate-900">&quot;{query}&quot;</strong>
                        </>
                    ) : null}
                    .
                </p>
                {locations.length > 0 && (
                    <p className="hidden text-xs text-slate-500 md:block">
                        Available across {locations.length}+ cities • ISO-aligned learning • Portfolio-first outcomes
                    </p>
                )}
            </div>

            {/* Grid */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((t) => (
                    <TrainersCardSection key={t.id} t={t} />
                ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-center">
                    <p className="text-sm text-slate-700">
                        No trainers match your search. Try different keywords or filters.
                    </p>
                    <button
                        onClick={resetAll}
                        className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand px-3 py-2 text-xs font-semibold text-white shadow-sm ring-1 ring-brand/80"
                    >
                        Clear filters
                    </button>
                </div>
            )}

            {/* SEO booster: supporting copy */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Why learn with Cinute Digital mentors?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                    Our trainers are working professionals specializing in{" "}
                    <strong>Manual Testing</strong>, <strong>Automation Testing</strong>,{" "}
                    <strong>API Testing</strong>, and <strong>Data Science</strong>. Expect
                    project-based learning, interview prep, and career guidance aligned with
                    hiring partner expectations—so you graduate <em>job-ready</em>.
                </p>
            </div>

            {/* JSON-LD for rich results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}

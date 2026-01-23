// =============================
// components/our-team/TeamDirectory.tsx
// =============================
"use client";

import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/app/our-team/types";
import {
    RefreshCw,
    Sparkles,
    Shield,
    Quote,
    GraduationCap,
} from "lucide-react";
import Link from "next/link";

type SortKey = "relevance" | "name-asc" | "name-desc";

type CustomCSSProperties = React.CSSProperties & { [key: `--${string}`]: string };

export default function TeamDirectory({ data }: { data: TeamMember[] }) {
    const [query, setQuery] = useState("");
    const [role, setRole] = useState<"All" | TeamMember["role"]>("All");
    const [skill, setSkill] = useState<string>("All");
    const [sort, setSort] = useState<SortKey>("relevance");
    const id = useId();

    // Brand via CSS var to keep Tailwind clean
    const brand = "#ff8c00";

    // Keyboard shortcut: "/" focuses search
    const searchRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                searchRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Defer heavy search to keep typing smooth
    const deferredQuery = useDeferredValue(query.trim().toLowerCase());

    // Basic scoring for "relevance"
    const scoreMember = (m: TeamMember, q: string) => {
        if (!q) return 0;
        const hay = [m.name, m.title, m.bio, ...m.expertise].join(" ").toLowerCase();
        let score = 0;
        if (hay.includes(q)) score += 1;
        if (m.name.toLowerCase().includes(q)) score += 2;
        if (m.title.toLowerCase().includes(q)) score += 1;
        return score;
    };

    const filtered = useMemo(() => {
        const q = deferredQuery;

        const base = data.filter((m) => {
            const matchesRole = role === "All" || m.role === role;
            const matchesSkill = skill === "All" || m.expertise.includes(skill);
            const matchesSearch =
                q.length === 0 ||
                [m.name, m.title, m.bio, ...m.expertise].join(" ").toLowerCase().includes(q);
            return matchesRole && matchesSkill && matchesSearch;
        });

        const sorted = [...base];
        if (sort === "name-asc") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "name-desc") {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            sorted.sort((a, b) => scoreMember(b, q) - scoreMember(a, q));
        }
        return sorted;
    }, [data, deferredQuery, role, skill, sort]);

    // JSON-LD for ItemList (reflect visible mentors)
    useEffect(() => {
        const scriptId = `${id}-jsonld-team-directory`;
        const existing = document.getElementById(scriptId);
        if (existing) existing.remove();

        const itemList = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Cinute Digital Mentor Directory",
            description:
                "Explore Cinute Digital’s mentor directory featuring leadership, faculty, advisory, and operations experts in software testing, automation, QA, DevOps, and modern engineering practices.",
            numberOfItems: filtered.length,
            itemListElement: filtered.map((m, index) => ({
                "@type": "Person",
                name: m.name,
                jobTitle: m.title,
                worksFor: { "@type": "Organization", name: "Cinute Digital" },
                disambiguatingDescription: `${m.role} • ${m.expertise.join(", ")}`,
                position: index + 1,
            })),
        };

        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.id = scriptId;
        s.text = JSON.stringify(itemList);
        document.head.appendChild(s);

        return () => document.getElementById(scriptId)?.remove();
    }, [filtered, id]);

    const clearAll = () => {
        setQuery("");
        setRole("All");
        setSkill("All");
        setSort("relevance");
        searchRef.current?.focus();
    };

    return (
        <section
            id="directory"
            aria-labelledby={`${id}-directory`}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 lg:py-12"
            style={{ "--brand": brand } as CustomCSSProperties}
        >
            {/* Decorative halo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 max-w-5xl blur-2xl"
                style={{
                    background: "radial-gradient(600px 300px at 50% 35%, rgba(194,65,12,0.12), rgba(194,65,12,0))",
                }}
            />

            {/* Header (centered) */}
            <div className="flex flex-col items-center gap-3">
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        id={`${id}-directory`}
                        className="text-4xl font-bold tracking-tight text-slate-900"
                    >
                        Our <span className="text-brand">Team</span> Directory
                    </h2>
                    <p className="mt-5 mx-auto max-w-5xl text-lg text-slate-600">
                        Discover experienced <strong className="font-semibold">mentors, faculty, and advisors</strong> in{" "}
                        <em>software testing, automation, QA, and industry-ready skills</em>. Learn from leaders who build
                        job-ready talent through hands-on, project-based learning.
                    </p>
                </div>

                {/* Centered helper note */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    <span>Curated for job-ready outcomes</span>
                </div>
            </div>


            {/* Grid */}
            <div className="mt-10 md:mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((m) => (
                    <MentorCard key={m.id} m={m} />
                ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center">
                    <p className="text-slate-700 font-medium">No results found</p>
                    <p className="mt-1 text-sm text-slate-600">
                        Try broader keywords (e.g., “QA”, “Automation”, “Manual Testing”) or remove a filter.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <button
                            type="button"
                            onClick={clearAll}
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                            style={{ backgroundColor: brand }}
                        >
                            <RefreshCw className="h-4 w-4" />
                            Clear all filters
                        </button>
                    </div>
                </div>
            )}

            {/* SEO helper copy */}
            <div className="mt-12 md:mt-14 rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold text-slate-900">Learn with industry mentors at <span className="text-brand">Cinute Digital</span></h3>
                <p className="mt-2 text-md leading-6 text-slate-600">
                    Our mentor directory brings together{" "}
                    <strong className="font-semibold">
                        software testing experts, automation engineers, QA leads, and industry advisors
                    </strong>{" "}
                    who teach real-world workflows - test strategy, API testing, CI/CD, Selenium, Playwright, Agile & DevOps.
                    Build a job-ready portfolio with live projects, capstones, and interview preparation to accelerate{" "}
                    <strong className="font-semibold">tech careers and high-growth placements</strong>.
                </p>
            </div>
        </section>
    );
}

/* =============================
 * New Mentor Card (Premium)
 * ============================= */
function MentorCard({ m }: { m: TeamMember & { avatar?: string } }) {
    return (
        <article
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md focus-within:shadow-md"
            aria-label={`${m.name}, ${m.title}`}
        >
            {/* Gradient ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 ring-2 ring-[var(--brand)]/40 transition group-hover:opacity-100" />

            <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="self-center md:self-start">
                    <Avatar name={m.name} src={m.avatar} />
                </div>

                <div className="min-w-0 space-y-1 md:space-y-0 mt-2 md:mt-0 flex-1">
                    <h3 className="truncate text-xl text-center md:text-start font-bold text-slate-900">{m.name}</h3>
                    <p className="truncate text-md text-center md:text-start text-wrap text-slate-600">{m.title}</p>

                    <div className="mt-5 md:mt-2 flex flex-wrap gap-1.5">
                        {m.expertise.slice(0, 4).map((e) => (
                            <span
                                key={e}
                                className="inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-[12px] font-medium text-green-700 ring-1 ring-inset ring-orange-200"
                            >
                                {e}
                            </span>
                        ))}
                        {m.expertise.length > 4 && (
                            <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600 ring-1 ring-slate-200">
                                +{m.expertise.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </div>


            {/* Bio teaser */}
            {m.bio && (
                <p className="mt-6 line-clamp-3 text-md leading-6 text-slate-600">
                    {m.bio}
                </p>
            )}

            {/* Metadata strip */}
            <div className="mt-6 flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700">
                    <Shield className="h-3.5 w-3.5 text-slate-500 hidden md:block" />
                    {m.role}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                    <GraduationCap className="h-3.5 w-3.5 text-slate-500 hidden md:block" />
                    Mentoring for job-readiness
                </span>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-8">
                <Link
                    href={`${m.linkedin}`}
                    className="inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-semibold text-white bg-blue-800 shadow-sm transition hover:bg-brand focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                >
                    LinkedIn
                </Link>
                <span className="ml-auto inline-flex items-center gap-1 text-[12px] text-slate-500">
                    <Quote className="h-3.5 w-3.5" />
                    Industry-aligned teaching
                </span>
            </div>
        </article>
    );
}

function Avatar({ name, src }: { name: string; src?: string }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return src ? (
        <div className="relative w-40 h-40 md:w-30 md:h-30 overflow-hidden rounded-full ring-1 ring-slate-200">
            <Image src={src} alt={`${name} avatar`} title={`${name} avatar`} width={160} height={120} className="object-cover rounded-full" />
        </div>
    ) : (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 text-sm font-semibold text-brand ring-1 ring-slate-200">
            {initials}
        </div>
    );
}

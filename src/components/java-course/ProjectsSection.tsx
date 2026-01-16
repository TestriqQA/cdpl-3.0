// components/java-course/ProjectsSection.tsx
// Futuristic, colorful, and fully responsive projects grid with per-card accents + SEO JSON-LD.

'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false, loading: () => <div>Loading...</div> });

type Project = {
    title: string;
    stack: string[];
    outcome: string;
};

const PROJECTS: Project[] = [
    {
        title: "E-commerce Microservices",
        stack: ["Spring Boot", "Kafka", "Docker"],
        outcome: "Order, Inventory, and Payment services with event-driven architecture.",
    },
    {
        title: "Banking API System",
        stack: ["Java 17", "Spring Security", "PostgreSQL"],
        outcome: "Secure transaction processing, JWT auth, and audit logging.",
    },
    {
        title: "Employee Management Portal",
        stack: ["Spring MVC", "Thymeleaf", "Hibernate"],
        outcome: "Full-stack CRUD app with role-based access control.",
    },
    {
        title: "Real-time Chat Application",
        stack: ["WebSockets", "Spring Boot", "Redis"],
        outcome: "Scalable chat server with message persistence and broadcasting.",
    },
    {
        title: "Cloud File Storage Service",
        stack: ["AWS S3", "Spring Cloud", "React"],
        outcome: "Secure file upload/download with presigned URLs.",
    },
    {
        title: "Job Portal Backend",
        stack: ["Spring Data JPA", "Elasticsearch", "MySQL"],
        outcome: "Advanced search, filtering, and application tracking.",
    },
    {
        title: "Hotel Booking System",
        stack: ["Microservices", "Eureka", "Zuul"],
        outcome: "Service discovery, gateway routing, and load balancing.",
    },
    {
        title: "Library Management CLI",
        stack: ["Core Java", "File I/O", "OOP"],
        outcome: "Console-based app demonstrating solid OOP principles.",
    },
];

// Soft, non-repeating accents for each card (cycled)
const ACCENTS = [
    {
        line: "bg-sky-400/80",
        ring: "focus:ring-sky-300",
        chip: "bg-sky-50 text-sky-800 border-sky-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(2,132,199,0.45)]",
    },
    {
        line: "bg-emerald-400/80",
        ring: "focus:ring-emerald-300",
        chip: "bg-emerald-50 text-emerald-800 border-emerald-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(16,185,129,0.45)]",
    },
    {
        line: "bg-amber-400/80",
        ring: "focus:ring-amber-300",
        chip: "bg-amber-50 text-amber-900 border-amber-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(245,158,11,0.45)]",
    },
    {
        line: "bg-violet-400/80",
        ring: "focus:ring-violet-300",
        chip: "bg-violet-50 text-violet-800 border-violet-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(139,92,246,0.45)]",
    },
    {
        line: "bg-rose-400/80",
        ring: "focus:ring-rose-300",
        chip: "bg-rose-50 text-rose-800 border-rose-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(244,63,94,0.45)]",
    },
    {
        line: "bg-indigo-400/80",
        ring: "focus:ring-indigo-300",
        chip: "bg-indigo-50 text-indigo-800 border-indigo-200",
        halo: "shadow-[0_10px_30px_-12px_rgba(99,102,241,0.45)]",
    },
];

export default function ProjectsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative py-10 bg-white"
        >
            {/* Subtle futuristic backdrop */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.12),transparent_60%)]" />
            </div>

            <div className="container max-w-7xl mx-auto px-4 xl:px-10">
                {/* Heading */}
                <header className="text-center max-w-4xl mx-auto">
                    <h2
                        id="projects-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
                    >
                        40+ <span className="text-FS">Real-World Projects</span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600">
                        Build a <strong>job-winning portfolio</strong>: production-style architecture, clean code,
                        measurable outcomes and clear documentation.
                    </p>
                </header>

                {/* Grid */}
                <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {PROJECTS.map((p, i) => {
                        const a = ACCENTS[i % ACCENTS.length];
                        return (
                            <article
                                key={p.title}
                                className={[
                                    "group relative overflow-hidden rounded-2xl border-2 bg-white p-5",
                                    "shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition",
                                    "hover:translate-y-[-2px] hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                                    "border-slate-200",
                                    a.ring,
                                ].join(" ")}
                                tabIndex={0}
                                aria-label={p.title}
                                title={p.title}
                            >
                                {/* Top accent line (only this card animates on hover) */}
                                <span
                                    aria-hidden
                                    className={[
                                        "absolute left-0 top-0 h-1 w-0",
                                        "transition-all duration-500 ease-out",
                                        "group-hover:w-full",
                                        a.line,
                                    ].join(" ")}
                                />
                                {/* Halo blur */}
                                <span
                                    aria-hidden
                                    className={[
                                        "pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-md transition",
                                        "group-hover:opacity-100",
                                        a.halo,
                                    ].join(" ")}
                                />

                                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                                <p className="mt-1 text-sm text-slate-600">{p.outcome}</p>

                                {/* Stack chips */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.stack.map((t, idx) => (
                                        <span
                                            key={t + idx}
                                            className={[
                                                "inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-semibold",
                                                idx === 0 ? a.chip : "bg-slate-50 text-slate-700 border-slate-300",
                                            ].join(" ")}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer meta */}
                                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                                    <span>~12–18 hrs</span>
                                    <span className="inline-flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                                        Portfolio-Ready
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
                        aria-label="View sample portfolios"
                    >
                        View Sample Portfolios
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path d="M12.293 4.293a1 1 0 011.414 0l4 4c.39.39.39 1.024 0 1.414l-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H4a1 1 0 110-2h10.585l-2.292-2.293a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600">
                        Every project ships with README, tests, and deployment notes.
                    </p>
                </div>
            </div>

            <CareerSessionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName="Java Programming"
                source="Java Programming Course Page - Projects Section"
                title="Get Access to Sample Portfolios"
                subtitle="Enter your details to view our student portfolio showcase."
            />

        </section>
    );
}

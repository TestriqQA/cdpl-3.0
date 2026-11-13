// src/components/sections/LocationsServicesSection.tsx
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BarChart3, Brain, Database, Megaphone, ShieldCheck } from "lucide-react";

type Service = {
    id: string;
    title: string;
    description: string;
    Icon: LucideIcon;
    href: string;
    tile: string;
    link: string;
};

// Same course families and course-hub links as the Our Team page. Web
// Development is not listed: CDPL does not run it (see EXCLUDED_FAMILIES in
// lib/cityTiers.ts).
const SERVICES: Service[] = [
    {
        id: "testing",
        title: "Software Testing",
        description: "Manual & automation QA, frameworks, CI/CD, and real project workflows for robust product quality.",
        Icon: ShieldCheck,
        href: "/courses/software-testing-course",
       
        tile: "bg-orange-100 text-orange-600",
        link: "text-orange-700",
    },
    {
        id: "datascience",
        title: "Data Science",
        description: "Python, statistics, EDA, ML pipelines, and deployment best practices for data-driven impact.",
        Icon: Database,
        href: "/courses/ds-ml-courses",
       
        tile: "bg-sky-100 text-sky-600",
        link: "text-sky-700",
    },
    {
        id: "bi",
        title: "Business Intelligence (BI)",
        description: "Power BI, Tableau, dashboards, and KPI storytelling that turns raw data into decisions.",
        Icon: BarChart3,
        href: "/courses/bi-courses",
       
        tile: "bg-emerald-100 text-emerald-600",
        link: "text-emerald-700",
    },
    {
        id: "ai",
        title: "Artificial Intelligence (AI)",
        description: "ML, GenAI, prompt engineering, vector DBs, and responsible AI to build intelligent systems.",
        Icon: Brain,
        href: "/courses/artificial-intelligence-courses",
       
        tile: "bg-violet-100 text-violet-600",
        link: "text-violet-700",
    },
    {
        id: "marketing",
        title: "Digital Marketing",
        description: "SEO, performance ads, analytics, landing pages, and content playbooks that compound growth.",
        Icon: Megaphone,
        href: "/courses/digital-marketing-courses",
       
        tile: "bg-rose-100 text-rose-600",
        link: "text-rose-700",
    },
];

/** What we teach, as linked cards in the site's card style. Server component. */
export default function LocationsServicesSection() {
    return (
        <section aria-labelledby="services-heading" className="bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                        What we offer
                    </span>
                    <h2 id="services-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Services that power <span className="text-brand">careers &amp; teams</span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        From QA to GenAI, our training and services are crafted for hands-on, job-ready outcomes
                        across India.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {SERVICES.map((s, idx) => (
                        <Link
                            key={s.id}
                            href={s.href}
                            aria-labelledby={`${s.id}-title`}
                            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 lg:col-span-2 ${idx === 3 ? "lg:col-start-2" : ""} ${idx === 4 ? "sm:col-span-2" : ""}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${s.tile}`} aria-hidden="true">
                                    <s.Icon className="h-5 w-5" />
                                </span>
                                <h3 id={`${s.id}-title`} className="text-lg font-bold text-slate-900">{s.title}</h3>
                            </div>
                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{s.description}</p>
                            <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${s.link}`}>
                                Explore courses
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

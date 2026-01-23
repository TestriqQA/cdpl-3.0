// src/components/sections/LocationsServicesSection.tsx
import { ShieldCheck, Database, BarChart3, Brain, Code2, Megaphone } from "lucide-react";

/**
 * LocationsServicesSection
 * Responsive, accessible grid with clipped background glow.
 * Server component — no client hooks.
 */

type Service = {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href?: string;
    colorFrom: string;
    colorTo: string;
    ink: string; // text/icon color for subtle accents
};

const BRAND = "var(--color-brand, #ff8c00)";

const SERVICES: Service[] = [
    {
        id: "testing",
        title: "Software Testing",
        description:
            "Manual & automation QA, frameworks, CI/CD, and real project workflows for robust product quality.",
        icon: ShieldCheck,
        href: "/services/software-testing",
        colorFrom: "#FFE6BF",
        colorTo: "#FFF2DF",
        ink: "#ff8c00",
    },
    {
        id: "datascience",
        title: "Data Science",
        description:
            "Python, statistics, EDA, ML pipelines, and deployment best practices for data-driven impact.",
        icon: Database,
        href: "/services/data-science",
        colorFrom: "#D6EEFF",
        colorTo: "#EEF8FF",
        ink: "#075985",
    },
    {
        id: "bi",
        title: "Business Intelligence (BI)",
        description:
            "Power BI, Tableau, dashboards, and KPI storytelling that turns raw data into decisions.",
        icon: BarChart3,
        href: "/services/business-intelligence",
        colorFrom: "#E4F8C8",
        colorTo: "#F4FFE6",
        ink: "#365314",
    },
    {
        id: "ai",
        title: "Artificial Intelligence (AI)",
        description:
            "ML, GenAI, prompt engineering, vector DBs, and responsible AI to build intelligent systems.",
        icon: Brain,
        href: "/services/artificial-intelligence",
        colorFrom: "#F0E5FF",
        colorTo: "#FFF2FF",
        ink: "#701a75",
    },
    {
        id: "webdev",
        title: "Web Development",
        description:
            "Modern frontend & backend stacks, patterns, testing, and performance for production-grade apps.",
        icon: Code2,
        href: "/services/web-development",
        colorFrom: "#E7ECF4",
        colorTo: "#FAFDFF",
        ink: "#0f172a",
    },
    {
        id: "marketing",
        title: "Digital Marketing",
        description:
            "SEO, performance ads, analytics, landing pages, and content playbooks that compound growth.",
        icon: Megaphone,
        href: "/services/digital-marketing",
        colorFrom: "#FFE0E6",
        colorTo: "#FFF0F4",
        ink: "#881337",
    },
];

export default function LocationsServicesSection() {
    return (
        <section
            className="relative isolate w-full overflow-x-clip py-8 sm:py-12" // clip bg flare on small screens
            aria-labelledby="services-heading"
        >
            {/* soft background flare (clipped + responsive sizing) */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute left-1/2 top-[-8rem] h-[18rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl opacity-25 sm:h-[24rem] sm:w-[48rem] md:h-[28rem] md:w-[56rem]"
                    style={{
                        background:
                            "radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.24), transparent 60%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mx-auto mb-3 w-fit rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600 backdrop-blur sm:text-xs">
                        What we offer
                    </p>
                    <h2
                        id="services-heading"
                        className="text-2xl font-extrabold leading-tight tracking-tight text-[#0069A8] sm:text-4xl"
                    >
                        Services that power <span style={{ color: BRAND }}>careers &amp; teams</span>
                    </h2>
                    <p className="mt-3 text-[15px] text-slate-600 sm:text-base">
                        From QA to GenAI, our training and services are crafted for hands-on,
                        job-ready outcomes across India &amp; UAE.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div
                    className="
            mt-6 grid items-stretch gap-4 sm:mt-8
            sm:grid-cols-2 lg:grid-cols-3
          "
                >
                    {SERVICES.map((s) => {
                        const Icon = s.icon;
                        return (
                            <article
                                key={s.id}
                                className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md"
                                aria-labelledby={`${s.id}-title`}
                            >
                                {/* card bg tint (under content) */}
                                <div
                                    className="pointer-events-none absolute inset-0 z-0 opacity-90"
                                    style={{
                                        background: `linear-gradient(135deg, ${s.colorFrom} 0%, ${s.colorTo} 100%)`,
                                    }}
                                />
                                {/* top accent line */}
                                <div className="absolute inset-x-0 top-0 h-1" style={{ background: BRAND }} />

                                {/* Inner layout */}
                                <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 lg:p-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        {/* Icon plate */}
                                        <div
                                            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/75 backdrop-blur-sm ring-1 transition group-hover:scale-[1.03] sm:h-12 sm:w-12"
                                            aria-hidden="true"
                                            style={{ borderColor: `${s.ink}22` }}
                                        >
                                            <span
                                                className="absolute inset-0 rounded-xl"
                                                style={{
                                                    background: `linear-gradient(135deg, ${s.colorFrom}66, transparent 70%)`,
                                                }}
                                            />
                                            <Icon
                                                className="relative h-5 w-5 sm:h-6 sm:w-6"
                                                style={{ color: s.ink }}
                                                strokeWidth={1.75}
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3
                                                id={`${s.id}-title`}
                                                className="break-words text-base font-semibold tracking-tight text-slate-900 sm:text-lg"
                                            >
                                                {s.title}
                                            </h3>
                                            <p className="mt-1 text-[13.5px] leading-6 text-slate-700 sm:text-sm">
                                                {s.description}
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

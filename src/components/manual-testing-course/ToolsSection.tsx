"use client";

import Image from "next/image";
import type { FC } from "react";
import { useMemo, useState } from "react";
import { FlaskConical, Toolbox, type LucideIcon } from "lucide-react";

/* ============================== Types ============================== */
interface Category {
    id: "plan" | "test-mgmt" | "api-auto" | "perf" | "cross" | "data" | "devops" | "utils";
    label: string;
}

interface Tool {
    name: string;
    logo?: string;
    tagline: string;
    desc: string;
    category: Category["id"];
    tags?: string[];
    color?: Accent; // Will be assigned
}

interface ToolCardProps {
    tool: Tool;
}

interface FilterChipProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

/* ============================== Color System ============================== */
const ACCENTS = ["indigo", "cyan", "emerald", "amber", "rose", "violet", "sky", "lime", "pink", "teal"] as const;
type Accent = typeof ACCENTS[number];

const COLOR_MAP: Record<
    Accent,
    {
        iconBg: string;
        cardBg: string;
        border: string;
        accentBorder: string;
        ring: string;
    }
> = {
    indigo: { iconBg: "bg-indigo-600", cardBg: "bg-indigo-50", border: "border-indigo-200", accentBorder: "border-indigo-600", ring: "ring-indigo-200" },
    cyan: { iconBg: "bg-cyan-600", cardBg: "bg-cyan-50", border: "border-cyan-200", accentBorder: "border-cyan-600", ring: "ring-cyan-200" },
    emerald: { iconBg: "bg-emerald-700", cardBg: "bg-emerald-50", border: "border-emerald-200", accentBorder: "border-emerald-700", ring: "ring-emerald-200" },
    amber: { iconBg: "bg-amber-600", cardBg: "bg-amber-50", border: "border-amber-200", accentBorder: "border-amber-600", ring: "ring-amber-200" },
    rose: { iconBg: "bg-rose-600", cardBg: "bg-rose-50", border: "border-rose-200", accentBorder: "border-rose-600", ring: "ring-rose-200" },
    violet: { iconBg: "bg-violet-600", cardBg: "bg-violet-50", border: "border-violet-200", accentBorder: "border-violet-600", ring: "ring-violet-200" },
    sky: { iconBg: "bg-sky-600", cardBg: "bg-sky-50", border: "border-sky-200", accentBorder: "border-sky-600", ring: "ring-sky-200" },
    lime: { iconBg: "bg-lime-600", cardBg: "bg-lime-50", border: "border-lime-200", accentBorder: "border-lime-600", ring: "ring-lime-200" },
    pink: { iconBg: "bg-pink-600", cardBg: "bg-pink-50", border: "border-pink-200", accentBorder: "border-pink-600", ring: "ring-pink-200" },
    teal: { iconBg: "bg-teal-600", cardBg: "bg-teal-50", border: "border-teal-200", accentBorder: "border-teal-600", ring: "ring-teal-200" },
};

/** Assign unique accent to each tool */
const assignColors = (tools: Tool[]): Tool[] => {
    return tools.map((tool, i) => ({
        ...tool,
        color: ACCENTS[i % ACCENTS.length] as Accent,
    }));
};

/* ============================== Fallback Icons ============================== */
/** Lucide icons for tools without a logo. */
const ICON_MAP: Record<string, LucideIcon> = {
    "REST Assured": FlaskConical,
};

const iconFor = (name: string): LucideIcon => ICON_MAP[name] ?? Toolbox;

const ToolIcon: FC<{ name: string; color: Accent }> = ({ name, color }) => {
    const colors = COLOR_MAP[color];
    const Icon = iconFor(name);
    return (
        <div
            className={`${colors.iconBg} rounded-lg h-8 w-8 sm:h-10 sm:w-10 shrink-0 flex items-center justify-center`}
            role="img"
            aria-label={`${name} icon`}
            title={name}
        >
            <Icon className="text-white h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </div>
    );
};

/* ============================== Data ============================== */
const CATEGORIES: Category[] = [
    { id: "plan", label: "Plan & Track" },
    { id: "test-mgmt", label: "Test Management" },
    { id: "api-auto", label: "API & Automation" },
    { id: "perf", label: "Performance & Monitoring" },
    { id: "cross", label: "Cross-Browser & Mobile" },
    { id: "data", label: "Databases & Analytics" },
    { id: "devops", label: "Version Control & CI/CD" },
    { id: "utils", label: "Utilities & Debugging" },
];

const TOOL_DATA: Tool[] = assignColors([
    { name: "Jira", logo: "/techstack_logos/jira-logo.svg", tagline: "Agile Issue Tracking", desc: "Plan sprints, manage user stories, and track defects with enterprise-grade workflows.", category: "plan", tags: ["agile", "kanban", "scrum"] },
    { name: "Zephyr", logo: "/techstack_logos/zephyr-logo.png", tagline: "Native Test Management", desc: "Create test cases, map requirements, and view real-time coverage inside Jira.", category: "test-mgmt", tags: ["test-cases", "coverage"] },
    { name: "TestRail", logo: "/techstack_logos/testrail-logo.svg", tagline: "Scalable Test Suites", desc: "Organize suites, track runs, and generate audit-ready QA reports at scale.", category: "test-mgmt", tags: ["suites", "runs", "reports"] },
    { name: "Postman", logo: "/techstack_logos/postman-logo.svg", tagline: "API Testing & Mocking", desc: "Design REST calls, validate responses, automate collections, and monitor APIs.", category: "api-auto", tags: ["api", "rest", "automation"] },
    { name: "REST Assured", tagline: "Java API Automation", desc: "Write robust API assertions in code for CI-ready test pipelines.", category: "api-auto", tags: ["java", "assertions", "ci"] },
    { name: "Selenium WebDriver", logo: "/techstack_logos/selenium-logo.svg", tagline: "UI Automation at Scale", desc: "Automate browsers, build maintainable page objects, and run cross-browser suites.", category: "api-auto", tags: ["ui", "e2e", "page-object"] },
    { name: "Cypress", logo: "/techstack_logos/cypress-logo.webp", tagline: "Fast Front-End E2E", desc: "Flaky-resistant web tests with time-travel debugging and rich dashboards.", category: "api-auto", tags: ["front-end", "e2e"] },
    { name: "Playwright", logo: "/techstack_logos/playwright-logo.webp", tagline: "Reliable Cross-Browser E2E", desc: "Auto-waits, trace viewer, and parallel workers for stable end-to-end testing.", category: "api-auto", tags: ["cross-browser", "parallel"] },
    { name: "JMeter", logo: "/techstack_logos/jmeter-logo.svg", tagline: "Performance & Load", desc: "Model realistic traffic, analyze throughput, and expose bottlenecks early.", category: "perf", tags: ["load", "stress", "latency"] },
    { name: "K6", logo: "/techstack_logos/k6-logo.svg", tagline: "Developer-centric Load Tests", desc: "Script performance scenarios in code and integrate with CI pipelines.", category: "perf", tags: ["scripting", "metrics"] },
    { name: "BrowserStack", logo: "/techstack_logos/browserstack-logo.svg", tagline: "Real Devices & Browsers", desc: "Execute manual and automated tests on 3000+ real browsers and devices.", category: "cross", tags: ["devices", "cloud"] },
    { name: "Chrome DevTools", logo: "/techstack_logos/chrome-devtools-logo.svg", tagline: "Debugging & Audits", desc: "Trace network calls, measure performance, and inspect accessibility issues.", category: "utils", tags: ["debug", "a11y"] },
    { name: "MySQL", logo: "/techstack_logos/mysql-logo.svg", tagline: "Relational Database", desc: "Write SQL for data validation, joins, and analytics to ensure integrity.", category: "data", tags: ["sql", "joins"] },
    { name: "MongoDB", logo: "/techstack_logos/mongodb-logo.svg", tagline: "NoSQL for QA", desc: "Query JSON-like documents to verify event streams and microservices.", category: "data", tags: ["nosql", "json"] },
    { name: "Git", logo: "/techstack_logos/git-logo.svg", tagline: "Version Control", desc: "Branch, review, and manage test code with modern Git workflows.", category: "devops", tags: ["vcs", "review"] },
    { name: "GitHub", logo: "/techstack_logos/github-logo.svg", tagline: "Collaboration & PRs", desc: "Pull requests, code reviews, and actions to automate quality gates.", category: "devops", tags: ["pr", "actions"] },
    { name: "Jenkins", logo: "/techstack_logos/jenkins-logo.svg", tagline: "Continuous Integration", desc: "Trigger pipelines, run suites in parallel, and publish reports on merge.", category: "devops", tags: ["ci", "pipeline"] },
    { name: "Confluence", logo: "/techstack_logos/confluence-logo.svg", tagline: "QA Knowledge Base", desc: "Document test strategies, runbooks, and RCA with reusable templates.", category: "plan", tags: ["docs", "rca"] },
    { name: "Excel", logo: "/techstack_logos/excel-logo.svg", tagline: "Test Data & Analysis", desc: "Quickly model test data, pivot results, and share quality dashboards.", category: "utils", tags: ["data", "reporting"] },
    { name: "Fiddler", logo: "/techstack_logos/fiddler-logo.png", tagline: "Network Sniffing", desc: "Capture HTTP/S traffic to diagnose API errors and performance issues.", category: "utils", tags: ["proxy", "http"] },
    { name: "Charles Proxy", logo: "/techstack_logos/charles-proxy-logo.svg", tagline: "Mobile & API Debugging", desc: "Rewrite rules, throttle bandwidth, and validate edge-case behaviors.", category: "utils", tags: ["throttle", "rewrite"] },
]);

/* ============================== Section ============================== */
const ToolsSection: FC = () => {
    const [active, setActive] = useState<string | "all">("all");

    const filtered = useMemo<Tool[]>(() => {
        if (active === "all") return TOOL_DATA;
        return TOOL_DATA.filter((t) => t.category === active);
    }, [active]);

    return (
        <section aria-labelledby="tools-heading" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 id="tools-heading" className="text-4xl font-bold text-gray-900 tracking-tight">
                        Tools You’ll Master in Our <span className="text-blue-700">QA Certification Course</span>
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn industry-standard <strong>software testing tools</strong> used by top product teams — from
                        <strong> agile test management</strong> and <strong>API testing</strong> to <strong>UI automation</strong>,
                        <strong> performance testing</strong>, and <strong>continuous integration</strong>.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
                    <FilterChip label="All Tools" active={active === "all"} onClick={() => setActive("all")} />
                    {CATEGORIES.map((c) => (
                        <FilterChip key={c.id} label={c.label} active={active === c.id} onClick={() => setActive(c.id)} />
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {filtered.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ToolsSection;

/* --------------------------------- Cards --------------------------------- */
const ToolCard: FC<ToolCardProps> = ({ tool }) => {
    const color = tool.color!;
    const colors = COLOR_MAP[color];

    return (
        <article
            className={`group relative h-full overflow-hidden rounded-2xl ${colors.cardBg} border ${colors.border} border-l-4 ${colors.accentBorder} p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 ${colors.ring}`}
            aria-label={`${tool.name} — ${tool.tagline}`}
        >
            <div className="flex items-center gap-3">
                {tool.logo ? (
                    <Image src={tool.logo} alt="" width={40} height={40} className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10" aria-hidden />
                ) : (
                    <ToolIcon name={tool.name} color={color} />
                )}
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{tool.name}</h3>
                    <p className="text-sm font-medium text-gray-700 mt-0.5">{tool.tagline}</p>
                </div>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{tool.desc}</p>

            {tool.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {tool.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                            #{t}
                        </span>
                    ))}
                </div>
            )}

            <span className="sr-only">Learn more about {tool.name}</span>
        </article>
    );
};

/* ------------------------------ Filter Chip ------------------------------ */
const FilterChip: FC<FilterChipProps> = ({ label, active, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${active ? "border-indigo-600 bg-indigo-600 text-white shadow-sm" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
            aria-pressed={active}
            aria-label={`Filter: ${label}`}
        >
            {label}
        </button>
    );
};

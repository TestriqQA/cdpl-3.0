/* ==================== CURRICULUM (Manual Testing 2025) ==================== */
"use client";

import { LuBadgeCheck, LuBookOpen, LuTarget, LuSparkles, LuChevronDown, LuNotebookPen, LuFlaskConical, LuBug, LuPin, LuCode, LuDatabase, LuSmartphone } from "react-icons/lu";
import Link from "next/link";

/* ---------- Token: small color map so cards feel lively but not loud ---------- */
const ACCENTS = ["indigo", "cyan", "emerald", "amber", "rose", "violet", "sky", "fuchsia"] as const;
type Accent = typeof ACCENTS[number];

void ACCENTS;

type Module = {
    id: string;
    weeks: string;
    title: string;
    accent: Accent;
    topics: string[];
    internalLink?: { label: string; href: string };
};

/* ====== 8 Modules from user requirements (Manual Testing Course Content) ====== */
const MODULES: Module[] = [
    {
        id: "fundamentals",
        weeks: "Week 1-2",
        title: "Software Testing Fundamentals",
        accent: "indigo",
        topics: [
            "Introduction to software quality assurance and quality control",
            "SDLC (Software Development Life Cycle) models: Waterfall, Agile, V-Model, Spiral",
            "STLC (Software Testing Life Cycle) phases and entry/exit criteria",
            "Testing principles, objectives, and limitations",
            "White Box vs Black Box vs Grey Box testing techniques",
            "Verification vs Validation concepts",
            "Error, Defect, Bug, and Failure terminology"
        ]
    },
    {
        id: "test-design",
        weeks: "Week 3-4",
        title: "Test Design Techniques",
        accent: "cyan",
        topics: [
            "Equivalence Partitioning and Boundary Value Analysis",
            "Decision Table and State Transition testing",
            "Use Case testing and exploratory testing strategies",
            "Writing effective test scenarios and test cases",
            "IEEE 829 Test Case template standards",
            "Positive and negative testing approaches",
            "Requirements Traceability Matrix (RTM) creation"
        ]
    },
    {
        id: "test-management",
        weeks: "Week 5-6",
        title: "Test Management & Defect Tracking",
        accent: "emerald",
        topics: [
            "Defect life cycle and severity vs priority classification",
            "Bug reporting best practices with screenshots and logs",
            "Jira mastery: Creating projects, epics, stories, bugs, and sprints",
            "TestRail and Zephyr for test case management",
            "Test metrics: Defect density, test coverage, pass/fail rates",
            "Test estimation techniques: Work Breakdown Structure, Function Points",
            "Daily standups, retrospectives, and QA reporting"
        ]
    },
    {
        id: "agile-scrum",
        weeks: "Week 7-8",
        title: "Agile & Scrum for QA Testers",
        accent: "amber",
        topics: [
            "Agile methodology fundamentals and manifesto",
            "Scrum framework: Roles (Product Owner, Scrum Master, Team)",
            "Sprint planning, daily scrums, reviews, and retrospectives",
            "User story acceptance criteria and Definition of Done",
            "QA role in Agile teams and continuous testing",
            "Kanban boards and workflow management",
            "Working with cross-functional development teams"
        ]
    },
    {
        id: "api-testing",
        weeks: "Week 9",
        title: "API Testing Basics with Postman",
        accent: "rose",
        topics: [
            "REST API fundamentals: GET, POST, PUT, DELETE methods",
            "JSON and XML response validation",
            "Postman installation and collections setup",
            "Authorization headers and authentication testing",
            "Status code verification (200, 400, 500 series)",
            "Basic API test case scenarios"
        ],
        internalLink: { label: "Advance to our API Testing Course", href: "/api-testing" }
    },
    {
        id: "database-testing",
        weeks: "Week 10",
        title: "Database Testing Essentials",
        accent: "violet",
        topics: [
            "Introduction to MySQL and SQL basics",
            "SELECT, INSERT, UPDATE, DELETE queries for testing",
            "JOIN operations to validate multi-table data",
            "Data integrity and referential integrity checks",
            "Backend vs Frontend data validation",
            "Common database testing scenarios"
        ],
        internalLink: { label: "Explore our DBMS Course", href: "/dbms-course" }
    },
    {
        id: "mobile-web-testing",
        weeks: "Week 11",
        title: "Mobile & Web Application Testing",
        accent: "sky",
        topics: [
            "Web testing: Cross-browser testing (Chrome, Firefox, Safari, Edge)",
            "Responsive design testing (desktop, tablet, mobile viewports)",
            "Mobile app testing fundamentals (Android and iOS)",
            "Installation, compatibility, and interruption testing",
            "UI/UX validation and usability testing",
            "Performance and security testing basics",
            "Accessibility testing (WCAG guidelines)"
        ]
    },
    {
        id: "projects-placement",
        weeks: "Week 12",
        title: "Industry Projects & Placement Prep",
        accent: "fuchsia",
        topics: [
            "Live Project 1: E-commerce website end-to-end testing (registration, cart, checkout, payment gateway)",
            "Live Project 2: Banking application test case creation and execution",
            "Live Project 3: Healthcare mobile app defect reporting and retesting",
            "Resume crafting for manual QA tester roles",
            "5+ mock interviews with real-time feedback",
            "Common manual testing interview questions (50+ Q&A)",
            "HR round preparation and salary negotiation tips",
            "LinkedIn profile optimization and job portal strategies"
        ]
    }
];

/* ---------- Color Mapping System ---------- */
const COLOR_MAP: Record<Accent, {
    iconBg: string;
    cardBg: string;
    borderColor: string;
    accentBorder: string
}> = {
    indigo: {
        iconBg: "bg-indigo-600",
        cardBg: "bg-indigo-50",
        borderColor: "border-indigo-200",
        accentBorder: "border-indigo-600"
    },
    cyan: {
        iconBg: "bg-cyan-600",
        cardBg: "bg-cyan-50",
        borderColor: "border-cyan-200",
        accentBorder: "border-cyan-600"
    },
    emerald: {
        iconBg: "bg-emerald-700",
        cardBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        accentBorder: "border-emerald-700"
    },
    amber: {
        iconBg: "bg-amber-600",
        cardBg: "bg-amber-50",
        borderColor: "border-amber-200",
        accentBorder: "border-amber-600"
    },
    rose: {
        iconBg: "bg-rose-600",
        cardBg: "bg-rose-50",
        borderColor: "border-rose-200",
        accentBorder: "border-rose-600"
    },
    violet: {
        iconBg: "bg-violet-600",
        cardBg: "bg-violet-50",
        borderColor: "border-violet-200",
        accentBorder: "border-violet-600"
    },
    sky: {
        iconBg: "bg-sky-600",
        cardBg: "bg-sky-50",
        borderColor: "border-sky-200",
        accentBorder: "border-sky-600"
    },
    fuchsia: {
        iconBg: "bg-fuchsia-600",
        cardBg: "bg-fuchsia-50",
        borderColor: "border-fuchsia-200",
        accentBorder: "border-fuchsia-600"
    }
};

/* ---------- UI Bits ---------- */
function Badge({ children }: { children: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm whitespace-nowrap">
            {children}
        </span>
    );
}

function TopicPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">
            <LuPin className="mr-1 h-3 w-3" aria-hidden />
            {label}
        </span>
    );
}

function AccentBar({ accent }: { accent: Accent }) {
    return <div className={COLOR_MAP[accent].accentBorder} aria-hidden />;
}

function IconFor(title: string, accent: Accent) {
    const IconComponent =
        /Fundamentals/i.test(title) ? LuBookOpen :
            /Test Design/i.test(title) ? LuFlaskConical :
                /Test Management|Defect/i.test(title) ? LuBug :
                    /Agile|Scrum/i.test(title) ? LuTarget :
                        /API Testing/i.test(title) ? LuCode :
                            /Database/i.test(title) ? LuDatabase :
                                /Mobile|Web/i.test(title) ? LuSmartphone :
                                    /Projects|Placement/i.test(title) ? LuNotebookPen :
                                        LuSparkles;

    return (
        <div className={`${COLOR_MAP[accent].iconBg} p-2.5 rounded-lg`}>
            <IconComponent className="h-5 w-5 text-white" aria-hidden />
        </div>
    );
}

/* ---------- Module Card ---------- */
function CurriculumCard({ mod }: { mod: Module }) {
    const colors = COLOR_MAP[mod.accent];

    return (
        <article
            className={`group mx-auto relative rounded-2xl ${colors.cardBg} ring-1 ring-inset ${colors.borderColor} shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300 border-l-4 ${colors.accentBorder} h-full`}
            aria-label={`${mod.weeks}: ${mod.title}`}
        >
            <AccentBar accent={mod.accent} />
            <div className="mx-auto p-2 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-gray-900">
                        {IconFor(mod.title, mod.accent)}
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{mod.title}</h3>
                    </div>
                    <Badge>{mod.weeks}</Badge>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    {mod.topics.slice(0, 4).map((t) => (
                        <TopicPill key={t} label={t.length > 40 ? t.substring(0, 40) + '...' : t} />
                    ))}
                </div>

                <details className="mt-4">
                    <summary className="flex cursor-pointer select-none items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-700">
                        <LuChevronDown className="h-4 w-4" aria-hidden />
                        View all topics ({mod.topics.length})
                    </summary>
                    <div className="mt-3 space-y-3">
                        <div>
                            <ul className="mt-1 space-y-2 text-sm text-gray-700">
                                {mod.topics.map((p) => (
                                    <li key={p} className="flex items-start">
                                        <LuBadgeCheck className="mt-0.5 mr-2 h-4 w-4 text-emerald-800 flex-shrink-0" aria-hidden />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {mod.internalLink && (
                            <div className="pt-2 border-t border-gray-200">
                                <Link
                                    href={mod.internalLink.href}
                                    className="inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-600 transition"
                                >
                                    {mod.internalLink.label} →
                                </Link>
                            </div>
                        )}
                    </div>
                </details>
            </div>
        </article>
    );
}

/* ---------- Main Curriculum Section ---------- */
export default function CurriculumSection() {
    return (
        <section className="py-10 bg-white" aria-label="Manual Testing Course Curriculum">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        What You'll Learn: <span className="text-blue-700">Complete Manual Testing Curriculum</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive 12-week program covering SDLC, STLC, test design, Jira, Agile, API testing, and real-world QA projects.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
                    {MODULES.map((m) => (
                        <CurriculumCard key={m.id} mod={m} />
                    ))}
                </div>
            </div>
        </section>
    );
}

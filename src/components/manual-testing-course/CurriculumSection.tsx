/* ==================== CURRICULUM (Light Theme) — from PDF ==================== */
"use client";


import { LuBadgeCheck, LuBookOpen, LuTarget, LuSparkles, LuChevronDown, LuNotebookPen, LuFlaskConical, LuBug, LuLayers, LuPin } from "react-icons/lu";

/* ---------- Token: small color map so cards feel lively but not loud ---------- */
const ACCENTS = ["indigo", "cyan", "emerald", "amber", "rose", "violet"] as const;
type Accent = typeof ACCENTS[number];

void ACCENTS;

type Module = {
    id: string;
    weeks: string; // used as a simple section label (Module 1, Module 2, …)
    title: string;
    accent: Accent;
    outcomes: string[]; // kept for UI consistency; populated strictly with PDF items when applicable
    topics: string[];
    projects: string[];
    tools?: string[];
};

/* ====== Extracted curriculum only (PDF pages 16–17) ====== */
const MODULES: Module[] = [
    {
        id: "sdlc-models",
        weeks: "Module 1",
        title: "Software Development Life Cycle (SDLC): Types of SDLC",
        accent: "indigo",
        outcomes: [],
        topics: [
            "Waterfall Model",
            "Spiral Model",
            "V-Model (V & V Model)",
            "Prototype Model (Dynamic Model)",
            "Hybrid Model"
        ],
        projects: []
    },
    {
        id: "overview-stlc",
        weeks: "Module 2",
        title: "Software Testing Overview & STLC",
        accent: "cyan",
        outcomes: [],
        topics: [
            "Software Testing Overview",
            "Software Testing Life Cycle (STLC)",
            "Types of Software Testing & Usage in Corporate",
            "White Box Testing",
            "Black Box Testing",
            "Gray Box"
        ],
        projects: []
    },
    {
        id: "black-box-types",
        weeks: "Module 3",
        title: "Black Box Testing Overview: Types of Black Box Testing",
        accent: "emerald",
        outcomes: [],
        topics: [
            "Functionality Testing",
            "Integration Testing",
            "System Testing",
            "Acceptance Testing",
            "Usability / GUI Testing",
            "Performance Testing",
            "Security Testing",
            "Compatibility Testing",
            "Responsive Testing",
            "Configuration Testing",
            "Reliability Testing",
            "Globalization / Localization Testing",
            "Recovery Testing",
            "Adhoc Testing",
            "Requirement Testing",
            "Documentation Testing",
            "Exploratory Testing",
            "Smoke Testing",
            "Regression Testing",
            "Sanity Testing",
            "Re-Testing"
        ],
        projects: []
    },
    {
        id: "defect-tracking",
        weeks: "Module 4",
        title: "Defect Tracking & Reporting",
        accent: "amber",
        outcomes: [],
        topics: [
            "Identification of defect",
            "Defect tracking process",
            "Defect reporting process",
            "Various types of defects",
            "Severity & Priority levels for defects",
            "Defect Tracking Life Cycle (DTLC)"
        ],
        projects: []
    },
    {
        id: "agile",
        weeks: "Module 5",
        title: "Agile Methodology (Agile Model)",
        accent: "rose",
        outcomes: [],
        topics: [
            "Overview of Agile process",
            "Importance of Agile process",
            "Agile meetings and their importance",
            "Members Involved in Agile Model",
            "Working agile model"
        ],
        projects: []
    },
    {
        id: "stlc-detailed",
        weeks: "Module 6",
        title: "Software Test Life Cycle (STLC) — In Detail",
        accent: "violet",
        outcomes: [],
        topics: [
            "System Study",
            "Preparation of Test Plan",
            "Test Cases Writing",
            "Preparation of Traceability Matrix",
            "Test Execution",
            "Defect Tracking Life Cycle (DTLC)",
            "Preparation of Test Execution Report",
            "Retrospect Meeting"
        ],
        projects: []
    },
    {
        id: "tools",
        weeks: "Module 7",
        title: "Test Management Tools",
        accent: "indigo",
        outcomes: [],
        topics: [
            "Excel — Test case writing & bug reporting",
            "TestRail — Test case management",
            "Jira — Bug tracking, release scheduling & sprint management",
            "Mantis BT — Bug tracking"
        ],
        projects: [],
        tools: ["Excel", "TestRail", "Jira", "Mantis BT"]
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
        iconBg: "bg-emerald-600",
        cardBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        accentBorder: "border-emerald-600"
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
        /SDLC/i.test(title) ? LuLayers :
            /Black Box/i.test(title) ? LuFlaskConical :
                /Defect|DTLC/i.test(title) ? LuBug :
                    /Agile/i.test(title) ? LuTarget :
                        /Tools/i.test(title) ? LuNotebookPen :
                            /STLC/i.test(title) ? LuBookOpen :
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
                    {mod.topics.slice(0, 6).map((t) => (
                        <TopicPill key={t} label={t} />
                    ))}
                </div>

                {/* Only render list if outcomes exist (we keep outcomes empty to stay faithful to PDF) */}
                {mod.outcomes.length > 0 && (
                    <ul className="space-y-2 text-sm leading-6 text-gray-700">
                        {mod.outcomes.map((o) => (
                            <li key={o} className="flex items-start">
                                <LuBadgeCheck className="mt-0.5 mr-2 h-4 w-4 text-emerald-600" aria-hidden />
                                <span>{o}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <details className="mt-4">
                    <summary className="flex cursor-pointer select-none items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-700">
                        <LuChevronDown className="h-4 w-4" aria-hidden />
                        View all topics {mod.tools ? "& tools" : ""}
                    </summary>
                    <div className="mt-3 space-y-3">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Topics</p>
                            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
                                {mod.topics.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </div>
                        {mod.tools && (
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mr-1">Tools</p>
                                {mod.tools.map((tool) => (
                                    <span key={tool} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-200">
                                        {tool}
                                    </span>
                                ))}
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
        <section className="py-10 bg-white" aria-label="Manual Software Testing Curriculum">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Manual Software Testing <span className="text-blue-700">Curriculum</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Extracted directly from the provided syllabus PDF - focusing strictly on curriculum items.
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

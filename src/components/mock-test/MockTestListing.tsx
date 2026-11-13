"use client";

import { useMemo, useState, type ComponentType, type SVGProps } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
    ArrowRight,
    Award,
    Brain,
    Bug,
    CircleCheck,
    Database,
    LayoutGrid,
    ListChecks,
    Megaphone,
    PieChart,
    Search,
    Timer,
    X,
} from "lucide-react";
import type { RegistrationData } from "@/components/mock-test/RegistrationModal";

const RegistrationModal = dynamic(() => import("@/components/mock-test/RegistrationModal"), { ssr: false });

/** What the listing needs per test; the server passes this instead of the full question bank. */
export type MockTestSummary = { id: string; slug: string; name: string; categoryId: string; questionCount: number };
export type MockCategorySummary = { id: string; name: string; tests: MockTestSummary[] };

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** Icon and solid tile colour per category (literal classes so Tailwind sees them). */
const CATEGORY_LOOK: Record<string, { Icon: Icon; tile: string }> = {
    "software-testing-courses": { Icon: Bug, tile: "bg-brand" },
    "data-science": { Icon: Database, tile: "bg-indigo-600" },
    "business-intelligence": { Icon: PieChart, tile: "bg-emerald-600" },
    "artificial-intelligence": { Icon: Brain, tile: "bg-purple-600" },
    "digital-marketing": { Icon: Megaphone, tile: "bg-rose-600" },
    "aaa-accredited": { Icon: Award, tile: "bg-amber-500" },
};
const lookFor = (id: string) => CATEGORY_LOOK[id] ?? { Icon: ListChecks, tile: "bg-slate-600" };

const ALL = "all";

/**
 * Test finder: a search box and category chips over the tests, grouped by
 * category. Every test stays in the HTML (non-matching ones are only hidden),
 * so all 30 test names remain crawlable whatever the filter.
 */
export default function MockTestListing({ categories }: { categories: MockCategorySummary[] }) {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [active, setActive] = useState<string>(ALL);
    const [selected, setSelected] = useState<MockTestSummary | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const total = useMemo(() => categories.reduce((n, c) => n + c.tests.length, 0), [categories]);
    const q = query.trim().toLowerCase();

    const matches = (test: MockTestSummary, categoryName: string) =>
        (active === ALL || test.categoryId === active) &&
        (q === "" || test.name.toLowerCase().includes(q) || categoryName.toLowerCase().includes(q));

    const shown = categories.reduce((n, c) => n + c.tests.filter((t) => matches(t, c.name)).length, 0);

    const openTest = (test: MockTestSummary) => {
        setSelected(test);
        setIsModalOpen(true);
    };

    const handleRegister = async (data: RegistrationData) => {
        if (!selected) return;
        try {
            sessionStorage.setItem("mockTestUser", JSON.stringify(data));
        } catch (error) {
            console.error("Registration failed", error);
        }
        setIsModalOpen(false);
        router.push(`/mock-test/${selected.slug}`);
    };

    const reset = () => {
        setQuery("");
        setActive(ALL);
    };

    return (
        <>
            <section id="tests" aria-label="Find a mock test" className="scroll-mt-24 bg-white py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Finder */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                        <label htmlFor="mock-test-search" className="sr-only">Search mock tests</label>
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                            <input
                                id="mock-test-search"
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search, e.g. Python or SQL"
                                autoComplete="off"
                                className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-12 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-orange-100 [&::-webkit-search-cancel-button]:hidden"
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                    className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                                >
                                    <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                            )}
                        </div>

                        {/* Phones: two per row (like the homepage course filters); wrapping row from sm up */}
                        <div role="group" aria-label="Filter tests by domain" className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                            {[{ id: ALL, name: "All tests" }, ...categories].map((c) => {
                                const isActive = active === c.id;
                                const { Icon } = c.id === ALL ? { Icon: LayoutGrid } : lookFor(c.id);
                                return (
                                    <button
                                        key={c.id}
                                        type="button"
                                        aria-pressed={isActive}
                                        aria-controls="mock-test-results"
                                        onClick={() => setActive(c.id)}
                                        className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold leading-tight transition-colors duration-200 sm:px-3.5 ${isActive
                                            ? "bg-brand text-white shadow-md"
                                            : "border border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                                        {c.name}
                                    </button>
                                );
                            })}
                        </div>

                        <p className="mt-4 text-sm text-slate-500" aria-live="polite">
                            Showing <strong className="text-slate-900">{shown}</strong> of {total} tests
                            {(q || active !== ALL) && (
                                <>
                                    {" · "}
                                    <button type="button" onClick={reset} className="cursor-pointer font-semibold text-brand hover:underline">
                                        Reset filters
                                    </button>
                                </>
                            )}
                        </p>
                    </div>

                    {/* Results, grouped by domain */}
                    <div id="mock-test-results" className="mt-10 space-y-12">
                        {categories.map((c) => {
                            const visible = c.tests.filter((t) => matches(t, c.name));
                            const { Icon, tile } = lookFor(c.id);
                            return (
                                <section key={c.id} hidden={visible.length === 0} aria-labelledby={`cat-${c.id}`}>
                                    <div className="mb-5 flex items-center gap-3">
                                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile} text-white shadow-md`} aria-hidden="true">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <h2 id={`cat-${c.id}`} className="text-2xl font-bold text-gray-900">{c.name}</h2>
                                    </div>

                                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {c.tests.map((t) => (
                                            <li key={t.id} hidden={!matches(t, c.name)}>
                                                <button
                                                    type="button"
                                                    onClick={() => openTest(t)}
                                                    className="group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                                                >
                                                    <h3 className="font-bold leading-snug text-gray-900">{t.name}</h3>
                                                    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                                                        <span className="inline-flex items-center gap-1.5">
                                                            <ListChecks className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                                            {t.questionCount} questions
                                                        </span>
                                                        <span className="inline-flex items-center gap-1.5">
                                                            <Timer className="h-4 w-4 text-slate-400" aria-hidden="true" />
                                                            Instant result
                                                        </span>
                                                    </p>
                                                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
                                                        Start test
                                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            );
                        })}

                        {shown === 0 && (
                            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                                <p className="text-lg font-semibold text-gray-900">No tests match “{query.trim()}”</p>
                                <p className="mt-1 text-slate-600">Try a tool or topic like Python, SQL or Tableau, or browse all tests.</p>
                                <button
                                    type="button"
                                    onClick={reset}
                                    className="mt-5 inline-flex cursor-pointer items-center rounded-xl bg-brand px-5 py-2.5 font-semibold text-white shadow-md hover:shadow-lg"
                                >
                                    Show all tests
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Closing CTA: the orange band used on the Our Team, Careers, Services and About pages */}
            <section aria-labelledby="mock-cta-heading" className="bg-white pb-12 lg:pb-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
                        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />
                        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                            <div className="max-w-2xl">
                                <h2 id="mock-cta-heading" className="text-2xl font-bold sm:text-3xl">Ready to benchmark your skills?</h2>
                                <p className="mt-3 text-white/90">
                                    Join thousands of engineers who use our platform to validate their technical expertise.
                                </p>
                                <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                                    {["Free Access", "Instant Results"].map((p) => (
                                        <li key={p} className="inline-flex items-center gap-1.5">
                                            <CircleCheck className="h-4 w-4" aria-hidden="true" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#tests"
                                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Find your test <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onRegister={handleRegister}
                courseName={selected?.name || ""}
            />
        </>
    );
}

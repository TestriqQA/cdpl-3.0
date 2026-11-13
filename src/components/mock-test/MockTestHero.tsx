// Server Component (the LCP element; no hydration).
import Link from "next/link";
import { ArrowDown, CheckCircle2, Home, ChevronRight, Sparkles } from "lucide-react";

const FEATURES = ["Real-time Scoring", "Adaptive Difficulty", "Instant Certification"];

/**
 * Mock test hero, in the homepage hero's language: light wash, dark h1 with a
 * brand-orange word, orange pill and button. The h1 and intro copy are
 * unchanged. Test and domain counts come from the data, so they stay true.
 */
export default function MockTestHero({ testCount, domainCount }: { testCount: number; domainCount: number }) {
    return (
        <section aria-labelledby="mock-test-heading" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute right-10 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-30 blur-3xl" />
                <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 opacity-20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <Home className="h-4 w-4" aria-hidden="true" />
                            <Link href="/" className="transition-colors hover:text-brand">Home</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            <Link href="/mock-test" aria-current="page" className="font-semibold text-slate-900">Mock Tests</Link>
                        </li>
                    </ol>
                </nav>

                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                        Premium Mock Assessments
                    </span>

                    {/* isolate: keeps the -z-10 underline above the hero background */}
                    <h1 id="mock-test-heading" className="isolate mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Validate your expertise with{" "}
                        <span className="relative whitespace-nowrap text-brand">
                            Precision.
                            <svg aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-3 w-full text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Industry-standard simulation environments designed to test your depth of knowledge.
                        Select a domain below to begin your evaluation.
                    </p>

                    <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {FEATURES.map((f) => (
                            <li key={f} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-col items-center gap-3">
                        <Link
                            href="#tests"
                            className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Browse {testCount} mock tests
                            <ArrowDown className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        <p className="text-sm text-slate-500">{domainCount} domains · instant results</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

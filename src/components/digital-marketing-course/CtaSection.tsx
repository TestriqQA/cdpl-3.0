// components/sections/CtaSection.tsx
// Server component — sleek, slightly futuristic, accessible, fully responsive.

import Link from "next/link";

export default function CtaSection() {


    return (
        <section
            id="contact"
            aria-labelledby="cta-heading"
            className="relative py-10 overflow-hidden"
        >
            {/* Futuristic, subtle backdrop (no heavy gradients) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                {/* soft grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.05)_1px,transparent_1px)] bg-[size:26px_26px]" />
                {/* gentle orange glow top */}
                <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(800px_160px_at_50%_0%,rgba(251,146,60,0.18),transparent_60%)]" />
                {/* gentle blue glow bottom */}
                <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[radial-gradient(900px_180px_at_50%_100%,rgba(59,130,246,0.16),transparent_60%)]" />
            </div>

            <div className="container mx-auto px-4">
                <header className="text-center max-w-3xl mx-auto">
                    <h2
                        id="cta-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
                    >
                        Ready to become a <span className="text-green-700">Top&nbsp;1% Digital Marketer</span>?
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600">
                        Enroll now for <strong>job-ready, AI-powered</strong> training with{' '}
                        <strong>100% placement assistance</strong>, portfolio projects, and interview prep.
                    </p>

                    {/* trust badges — each with a different, simple color */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
                            QR-Verified Certificate
                        </span>
                        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">
                            Live Online & Classroom
                        </span>
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">
                            Mentor-Led Cohort
                        </span>
                        <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-800">
                            Project-Based Learning
                        </span>
                    </div>
                </header>

                {/* CTA panel */}
                <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.06)] backdrop-blur">
                    {/* highlight row */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-left">
                        <Highlight title="Next Cohort" value="Starts Soon" color="text-orange-600" />
                        <Highlight title="Learning Hours" value="~80 hrs" color="text-sky-700" />
                        <Highlight title="Placement" value="100% Assistance" color="text-emerald-700" />
                    </div>

                    {/* buttons */}
                    <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                        <Link
                            href="tel:+917888383788"
                            className="group inline-flex w-full items-center justify-center rounded-xl border border-orange-600 bg-orange-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-orange-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
                            aria-label="Call Cinute Digital to enroll"
                        >
                            Call Now: +91&nbsp;788-83-83-788
                            <svg
                                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden
                            >
                                <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
                            </svg>
                        </Link>

                        <Link
                            href="mailto:contact@cinutedigital.com"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-indigo-300 bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-200 sm:w-auto"
                            aria-label="Email Cinute Digital"
                        >
                            Email Us
                        </Link>
                    </div>

                    {/* location + micro copy */}
                    <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:grid-cols-2">
                        <p className="text-xs sm:text-sm text-slate-600">
                            Locations: <span className="font-medium text-slate-800">Mira Road</span> &{' '}
                            <span className="font-medium text-slate-800">Vasai, Maharashtra</span> · Live online available.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600">
                            Prefer WhatsApp? <span className="font-medium text-slate-800">Message after calling and we’ll follow up.</span>
                        </p>
                    </div>
                </div>

                {/* tiny reassurance strip with different colors (no repeats) */}
                <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-2 sm:grid-cols-3 text-center text-[11px] font-semibold">
                    <Badge color="emerald">Career Counselling</Badge>
                    <Badge color="sky">Scholarship Options</Badge>
                    <Badge color="amber">EMI Available</Badge>
                </div>
            </div>

        </section>
    );
}

/* ------- tiny subcomponents ------- */

function Highlight({
    title,
    value,
    color,
}: {
    title: string;
    value: string;
    color: string;
}) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
            <div className="text-[11px] font-semibold text-slate-600">{title}</div>
            <div className={`mt-0.5 text-xl font-bold tracking-tight ${color}`}>{value}</div>
        </div>
    );
}

function Badge({ color, children }: { color: 'emerald' | 'sky' | 'amber'; children: React.ReactNode }) {
    const map = {
        emerald: 'border-emerald-200 bg-emerald-50 text-emerald-800',
        sky: 'border-sky-200 bg-sky-50 text-sky-800',
        amber: 'border-amber-200 bg-amber-50 text-amber-900',
    } as const;
    return (
        <span
            className={[
                'inline-flex items-center justify-center rounded-full border px-3 py-1',
                map[color],
            ].join(' ')}
        >
            {children}
        </span>
    );
}

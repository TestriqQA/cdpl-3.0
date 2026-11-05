import type { LucideIcon } from "lucide-react";
import { Sparkles, Star, Workflow } from "lucide-react";

// What we expect from every hire. Moved out of the per-role detail pane, where
// the same lists repeated on every job.

type Tone = { icon: string; bar: string };

const CARDS: { title: string; icon: LucideIcon; tone: Tone; items: string[] }[] = [
    {
        title: "Your first 90 days",
        icon: Star,
        tone: { icon: "bg-amber-100 text-amber-600", bar: "from-amber-400 to-orange-400" },
        items: [
            "Ship 1–2 meaningful improvements in your area.",
            "Create solid docs and crisp decision records.",
            "Raise quality bars in reviews and demos.",
        ],
    },
    {
        title: "Nice-to-haves",
        icon: Sparkles,
        tone: { icon: "bg-violet-100 text-violet-600", bar: "from-violet-400 to-fuchsia-500" },
        items: [
            "A portfolio or work samples showing thoughtful craft.",
            "Experience in small, product-led teams.",
            "Comfort writing clear docs.",
        ],
    },
    {
        title: "How we work",
        icon: Workflow,
        tone: { icon: "bg-sky-100 text-sky-600", bar: "from-sky-400 to-blue-500" },
        items: [
            "Outcomes over vanity; small, fast teams.",
            "Written culture: clear docs beat meetings.",
            "Accessibility, stability and quality first.",
        ],
    },
];

export default function JobsCareersExpectationsSection() {
    return (
        <section id="what-we-look-for" aria-labelledby="expectations-heading" className="bg-white text-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <header className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">Before you apply</p>
                    <h2 id="expectations-heading" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        What we <span className="text-brand">look for</span>
                    </h2>
                    <p className="mt-3 text-base text-slate-600">
                        The same bar applies to every role: what success looks like early on, and how we work together.
                    </p>
                </header>

                <ul className="mt-10 grid gap-5 md:grid-cols-3">
                    {CARDS.map(({ title, icon: Icon, tone, items }) => (
                        <li key={title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.bar}`} />
                            <div className="flex items-center gap-3">
                                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                            </div>
                            <ul className="mt-4 space-y-2">
                                {items.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700">
                                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

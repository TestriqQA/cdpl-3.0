import type { LucideIcon } from "lucide-react";
import { GaugeCircle, HeartHandshake, NotebookPen, ShieldCheck, Sparkles, Target } from "lucide-react";

// Culture principles as cards under the intro.

type Principle = { title: string; desc: string; icon: LucideIcon; tag: string };

// One tone per card: top bar, icon chip, tag pill, corner watermark.
const TONES = [
    { bar: "from-orange-400 to-amber-400", icon: "bg-orange-100 text-orange-600", tag: "bg-orange-50 text-orange-700", mark: "text-orange-500" },
    { bar: "from-sky-400 to-blue-500", icon: "bg-sky-100 text-sky-600", tag: "bg-sky-50 text-sky-700", mark: "text-sky-500" },
    { bar: "from-emerald-400 to-teal-500", icon: "bg-emerald-100 text-emerald-600", tag: "bg-emerald-50 text-emerald-700", mark: "text-emerald-500" },
    { bar: "from-violet-400 to-fuchsia-500", icon: "bg-violet-100 text-violet-600", tag: "bg-violet-50 text-violet-700", mark: "text-violet-500" },
    { bar: "from-rose-400 to-pink-500", icon: "bg-rose-100 text-rose-600", tag: "bg-rose-50 text-rose-700", mark: "text-rose-500" },
    { bar: "from-amber-400 to-yellow-400", icon: "bg-amber-100 text-amber-600", tag: "bg-amber-50 text-amber-700", mark: "text-amber-500" },
];

const PRINCIPLES: Principle[] = [
    {
        title: "Write it down",
        desc: "Clear writing beats meetings. Specs, PRDs, and decision logs keep us shipping faster with fewer surprises.",
        icon: NotebookPen,
        tag: "Operating rhythm",
    },
    {
        title: "Solve for the learner",
        desc: "Every feature must tie back to learner outcomes or mentor productivity. No vanity velocity, only value.",
        icon: Target,
        tag: "Product truth",
    },
    {
        title: "Move with care",
        desc: "Speed matters, but accessibility, stability, and reliability matter more. We ship small and verify safely.",
        icon: ShieldCheck,
        tag: "Quality first",
    },
    {
        title: "Own the craft",
        desc: "Reviews, pairing, and refactors are investments. We leave code, copy, and data models better than we found them.",
        icon: GaugeCircle,
        tag: "Craftsmanship",
    },
    {
        title: "Mentor-led outcomes",
        desc: "Human + AI. Mentors unblock learners while AI handles routing, insights, and instant feedback loops.",
        icon: HeartHandshake,
        tag: "CDPL edge",
    },
    {
        title: "Bias to experiment",
        desc: "Hypotheses over hunches. We instrument, A/B test, and sunset ruthlessly to double down on what moves the needle.",
        icon: Sparkles,
        tag: "Growth mindset",
    },
];

export default function JobsCareersCultureSection() {
    return (
        <section id="culture" aria-labelledby="culture-heading" className="bg-slate-50 text-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <header className="max-w-2xl">
                    <h2 id="culture-heading" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Culture <span className="text-brand">that ships outcomes</span>
                    </h2>
                    <p className="mt-3 text-base text-slate-600">
                        At <span className="font-semibold text-slate-800">Cinute Digital (CDPL)</span>, we’re a product-led ed-tech
                        team where mentors, data and thoughtful design come together to help learners get hired faster.
                    </p>
                </header>

                {/* Principles */}
                <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {PRINCIPLES.map(({ title, desc, icon: Icon, tag }, i) => {
                        const tone = TONES[i % TONES.length];
                        return (
                            <li
                                key={title}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.bar}`} />
                                <Icon
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 opacity-[0.06] transition duration-300 group-hover:rotate-6 group-hover:opacity-10 ${tone.mark}`}
                                />
                                <div className="relative flex items-center justify-between gap-3">
                                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tone.icon}`}>
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tone.tag}`}>{tag}</span>
                                </div>
                                <h3 className="relative mt-5 text-lg font-bold text-slate-900">{title}</h3>
                                <p className="relative mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

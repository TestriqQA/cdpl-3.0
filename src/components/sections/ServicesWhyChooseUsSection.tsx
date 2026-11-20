// src/components/sections/ServicesWhyChooseUsSection.tsx

import { Rocket, SlidersHorizontal, Hammer, LifeBuoy, BadgeCheck, Sparkles, type LucideIcon } from "lucide-react";

type WhyItem = {
    title: string;
    desc: string;
    icon: LucideIcon;
    /** One hue per card: thin top accent and a tinted icon tile. */
    bar: string;
    tile: string;
};

const ITEMS: WhyItem[] = [
    {
        title: "Industry Expertise",
        desc: "Senior trainers with 10+ years shipping real products.",
        icon: Rocket,
        bar: "bg-indigo-500",
        tile: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    },
    {
        title: "Customized Content",
        desc: "Tailored to your stack, schedule, and business goals.",
        icon: SlidersHorizontal,
        bar: "bg-emerald-500",
        tile: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    },
    {
        title: "Hands-On Learning",
        desc: "Labs, capstones, and client-style scenarios.",
        icon: Hammer,
        bar: "bg-sky-500",
        tile: "bg-sky-50 text-sky-600 ring-sky-100",
    },
    {
        title: "Post-Training Support",
        desc: "Refreshers, guidance, and hiring assistance.",
        icon: LifeBuoy,
        bar: "bg-rose-500",
        tile: "bg-rose-50 text-rose-600 ring-rose-100",
    },
];

export default function ServicesWhyChooseUsSection() {
    return (
        <section aria-labelledby="why-teams-heading" className="py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        Why CDPL
                    </span>
                    <h2 id="why-teams-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Why Teams Choose <span className="text-brand">Our Training</span>
                    </h2>
                    <p className="mt-3 text-base text-slate-600 sm:text-lg">
                        Clean, focused, and outcomes-driven programs, with no fluff.
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {ITEMS.map(({ title, desc, icon: Icon, bar, tile }) => (
                        <li
                            key={title}
                            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-md sm:p-7"
                        >
                            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${bar}`} />
                            <div className="flex items-center gap-3">
                                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ${tile}`} aria-hidden="true">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <h3 className="text-lg font-semibold leading-snug text-slate-900">{title}</h3>
                            </div>
                            <p className="mt-4 text-[15px] leading-6 text-slate-600">{desc}</p>
                        </li>
                    ))}
                </ul>

                <p className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    Trusted by teams for measurable outcomes
                </p>
            </div>
        </section>
    );
}

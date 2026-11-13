import { Gift, BarChart3, TimerReset, FileSearch, Megaphone, Wallet, type LucideIcon } from "lucide-react";
import AffiliateSectionHeader from "./AffiliateSectionHeader";

const benefits: { icon: LucideIcon; tile: string; title: string; sub: string }[] = [
    { icon: Wallet, tile: "bg-brand", title: "Up to 25% Commission", sub: "Competitive, scalable rates across training, events, and services." },
    { icon: TimerReset, tile: "bg-sky-600", title: "Fast Payouts", sub: "Monthly payouts with transparent ledger and downloadable invoices." },
    { icon: BarChart3, tile: "bg-emerald-600", title: "Conversion-Ready Funnels", sub: "Optimized SEO pages, landing pages, and nurture emails by CDPL." },
    { icon: FileSearch, tile: "bg-indigo-600", title: "Real-time Analytics", sub: "Track clicks, trials, and conversions — all in one dashboard." },
    { icon: Megaphone, tile: "bg-rose-500", title: "Marketing Assets", sub: "Banners, email copy, post templates, and co-branded decks." },
    { icon: Gift, tile: "bg-amber-500", title: "Bonus Tiers", sub: "Hit milestones to unlock higher rates & quarterly bonuses." },
];

export default function AffiliateBenefitsSection() {
    return (
        <section id="benefits" aria-labelledby="benefits-heading" className="scroll-mt-24">
            <AffiliateSectionHeader
                id="benefits-heading"
                eyebrow="Why CDPL"
                title="Why partner with"
                accent="CDPL?"
                subtitle="CDPL’s ecosystem spans corporate upskilling, public workshops, and productized services — giving affiliates multiple ways to earn with a single audience."
            />

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map(({ icon: Icon, tile, title, sub }) => (
                    <li
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-md ${tile}`} aria-hidden="true">
                                <Icon className="h-5 w-5" />
                            </span>
                            <h3 className="text-lg font-semibold leading-snug text-slate-900">{title}</h3>
                        </div>
                        <p className="mt-4 text-[15px] leading-6 text-slate-600">{sub}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

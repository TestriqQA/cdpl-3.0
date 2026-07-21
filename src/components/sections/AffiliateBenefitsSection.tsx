import {
    Gift,
    BarChart3,
    TimerReset,
    FileSearch,
    Megaphone,
    Wallet,
} from "lucide-react";
import type React from "react";

// Section heading colors (unchanged)
const BRAND_A = "rgb(0, 105, 168)";
const BRAND_B = "rgb(255, 140, 0)";

// Strongly-typed CSS variable helper
type CSSVarStyles<T extends string> = React.CSSProperties & Record<T, string>;

const benefits = [
    { icon: Wallet, title: "Up to 25% Commission", sub: "Competitive, scalable rates across training, events, and services." },
    { icon: TimerReset, title: "Fast Payouts", sub: "Monthly payouts with transparent ledger and downloadable invoices." },
    { icon: BarChart3, title: "Conversion-Ready Funnels", sub: "Optimized SEO pages, landing pages, and nurture emails by CDPL." },
    { icon: FileSearch, title: "Real-time Analytics", sub: "Track clicks, trials, and conversions — all in one dashboard." },
    { icon: Megaphone, title: "Marketing Assets", sub: "Banners, email copy, post templates, and co-branded decks." },
    { icon: Gift, title: "Bonus Tiers", sub: "Hit milestones to unlock higher rates & quarterly bonuses." },
];

// Per-card strong color pairs (title/icon) — none are white/black
const BRAND_PAIRS: Array<{ title: string; icon: string }> = [
    { title: "#0069A8", icon: "#FF8C00" }, // deep blue / vivid orange
    { title: "#7C3AED", icon: "#F59E0B" }, // violet / amber
    { title: "#DC2626", icon: "#22C55E" }, // red / green
    { title: "#2563EB", icon: "#D946EF" }, // blue / fuchsia
    { title: "#0EA5E9", icon: "#8B5CF6" }, // sky / violet
    { title: "#22C55E", icon: "#EF4444" }, // emerald / red
];

// Card background palettes (unchanged)
const SOFT_PALETTES: Array<[string, string, string]> = [
    ["oklch(0.96 0.06 60)", "oklch(0.96 0.06 300)", "oklch(0.96 0.06 200)"],
    ["oklch(0.98 0.05 230)", "oklch(0.97 0.05 170)", "oklch(0.98 0.05 100)"],
    ["oklch(0.97 0.05 300)", "oklch(0.97 0.05 220)", "oklch(0.97 0.05 20)"],
    ["oklch(0.97 0.05 210)", "oklch(0.98 0.05 95)", "oklch(0.96 0.06 300)"],
    ["oklch(0.96 0.06 20)", "oklch(0.97 0.05 150)", "oklch(0.99 0.01 230)"],
    ["oklch(0.96 0.06 25)", "oklch(0.97 0.03 280)", "oklch(0.97 0.04 150)"],
];

export default function AffiliateBenefitsSection() {
    // Provide typed CSS vars (fixes no-explicit-any)
    const brandVars: CSSVarStyles<"--brand1" | "--brand2"> = {
        "--brand1": BRAND_A,
        "--brand2": BRAND_B,
    };

    return (
        <section
            id="benefits"
            className="scroll-mt-24"
            style={brandVars}
        >
            {/* Section title (unchanged) */}
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--brand1)" }}>
                Why partner with CDPL?
            </h2>

            <p className="mt-2 max-w-2xl text-slate-700">
                CDPL’s ecosystem spans corporate upskilling, public workshops, and productized services —
                giving affiliates multiple ways to earn with a single audience.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((b, i) => {
                    const Icon = b.icon as React.ElementType;
                    const [c1, c2, c3] = SOFT_PALETTES[i % SOFT_PALETTES.length];
                    const pair = BRAND_PAIRS[i % BRAND_PAIRS.length];

                    return (
                        <article
                            key={b.title}
                            className={[
                                "group relative h-full overflow-hidden rounded-3xl",
                                "shadow-[0_14px_40px_-24px_rgba(2,6,23,0.35)]",
                                "p-6",
                            ].join(" ")}
                            style={
                                {
                                    "--c1": c1,
                                    "--c2": c2,
                                    "--c3": c3,
                                    background: [
                                        "linear-gradient(0deg, var(--c1), var(--c1))",
                                        "radial-gradient(70% 100% at 105% 0%, var(--c2) 0%, transparent 60%)",
                                        "radial-gradient(85% 90% at 15% 100%, var(--c3) 0%, transparent 60%)",
                                        "conic-gradient(from 20deg at 30% 20%, var(--c1), var(--c2), var(--c3), var(--c1))",
                                    ].join(", "),
                                    backgroundBlendMode: "normal, multiply, multiply, soft-light",
                                } as React.CSSProperties
                            }
                        >
                            {/* Icon — per-card solid color (no border) */}
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                                <Icon className="h-5 w-5" style={{ color: pair.icon }} />
                            </div>

                            {/* Card title — per-card solid color */}
                            <h3 className="text-lg font-semibold leading-snug" style={{ color: pair.title }}>
                                {b.title}
                            </h3>

                            <p className="mt-1 text-slate-800">{b.sub}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

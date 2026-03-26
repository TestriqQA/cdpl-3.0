"use client";

import { useMemo } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import {
    Rocket,
    Gauge,
    Users,
    Laptop,
    BookOpenCheck,
    Coins,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const BRAND_COLOR = "#ff8c00";
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

type Benefit = {
    title: string;
    desc: string;
    icon: React.ComponentType<{ className?: string; color?: string }>;
    seoId: string;
};

export default function JobsCareersBenefitsSection() {
    const benefits: Benefit[] = useMemo(
        () => [
            { title: "Outcomes over vanity", desc: "We optimize for learner outcomes and business value, not dashboards that just look pretty.", icon: Gauge, seoId: "outcomes-over-vanity" },
            { title: "Ownership & speed", desc: "Small teams, tight loops, clean interfaces, so you can ship, learn, and iterate fast.", icon: Rocket, seoId: "ownership-and-speed" },
            { title: "Mentor ecosystem", desc: "Access to expert mentors & hiring partners across QA, Data, Full-Stack, and DevOps.", icon: Users, seoId: "mentor-ecosystem" },
            { title: "Hybrid flexibility", desc: "Collaborative in-office rhythms with remote-friendly space for deep work when it matters.", icon: Laptop, seoId: "hybrid-flexibility" },
            { title: "Learning budget", desc: "Courses, books, conferences, grow your craft with a dedicated L&D stipend and peer reviews.", icon: BookOpenCheck, seoId: "learning-budget" },
            { title: "Competitive comp", desc: "We pay for impact and potential. ESOPs available for critical, high-leverage roles.", icon: Coins, seoId: "competitive-comp" },
        ],
        []
    );

    // Card 5 set to violet (#7c3aed). Others unchanged.
    const ACCENTS = ["#ff8c00", "#8b5cf6", "#0ea5e9", "#10b981", "#7c3aed", "#f43f5e"];
    const LIGHT = (hex: string, alpha = 0.16) => hexToRgba(hex, alpha);
    const TINT = (hex: string) => mix(hex, "#ffffff", 0.55);

    return (
        <section className="relative w-full overflow-hidden bg-white text-neutral-900 dark:bg-white dark:text-neutral-900" aria-labelledby="benefits-title">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-full w-[140vw] sm:w-[120vw] md:w-[110vw] lg:w-[100vw] max-w-none">
                    <div className="absolute left-1/2 top-[15%] -translate-x-1/2 h-[56vh] sm:h-[62vh] md:h-[68vh] lg:h-[72vh] w-[140vw] sm:w-[120vw] md:w-[110vw] lg:w-[100vw]"
                        style={{ background: "radial-gradient(closest-side, rgba(255,181,88,0.16), rgba(255,209,158,0.08) 45%, transparent 70%)", filter: "blur(6px)" }} />
                    <div className="absolute right-[-12vw] sm:right-[-10vw] md:right-[-8vw] top-[-4rem] sm:top-[-5rem] md:top-[-6rem] h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-[22rem] sm:w-[28rem] md:w-[32rem] lg:w-[36rem]"
                        style={{ background: "radial-gradient(45% 45% at 50% 50%, rgba(255,209,158,0.15), transparent 65%)", filter: "blur(3px)" }} />
                    <div className="absolute left-1/2 bottom-[-6rem] md:bottom-[-7rem] lg:bottom-[-8rem] -translate-x-1/2 h-[16rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem] w-[30rem] sm:w-[40rem] md:w-[44rem] lg:w-[48rem]"
                        style={{ background: "radial-gradient(closest-side, rgba(255,181,88,0.10), transparent 70%)", filter: "blur(4px)" }} />
                    <div className="absolute inset-x-0 top-0 h-20 sm:h-24 md:h-28"
                        style={{ background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0) 100%)" }} />
                    <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28"
                        style={{ background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0) 100%)" }} />
                    <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20"
                        style={{ background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0) 100%)" }} />
                    <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20"
                        style={{ background: "linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0) 100%)" }} />
                </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-20 max-w-7xl [mask-image:linear-gradient(to_bottom,black,transparent)]">
                <div className="mx-4 sm:mx-6 lg:mx-8 h-[2px] rounded-full bg-gradient-to-r from-[#ff8c00]/30 via-[#ffb558]/30 to-[#ffd19e]/30" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                <header className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Life at <span style={{ color: BRAND_COLOR }}>Cinute Digital (CDPL)</span>
                    </div>
                    <h2 id="benefits-title" className="mt-3 text-2xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight">
                        Why <span style={{ color: BRAND_COLOR }}>CDPL</span> is different
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-neutral-600">
                        A culture crafted for builders who care about quality, learner impact, and shipping with discipline.
                    </p>
                </header>

                <div className="relative mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
                    <div className="flex min-w-max gap-8 whitespace-nowrap py-3 text-sm font-medium text-neutral-700 [animation:marquee_24s_linear_infinite] will-change-transform">
                        <TickerItems />
                        <TickerItems ariaHidden />
                    </div>
                </div>

                <ul className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        const accent = ACCENTS[i % ACCENTS.length];
                        const accentSoft = LIGHT(accent, 0.1);
                        const accentRing = LIGHT(accent, 0.18);
                        const accentTint = TINT(accent);
                        const transition: Transition = { delay: 0.05 * i, duration: 0.45, ease: easeBezier };

                        return (
                            <motion.li
                                key={b.seoId}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={itemVariants}
                                transition={transition}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-transparent bg-white/95 p-5 sm:p-6 shadow-sm transition-transform duration-300 will-change-transform"
                                whileHover={{ y: -4, rotateX: 0.6, rotateY: -0.6 }}
                                style={{ transformPerspective: 800 }}
                                itemProp="itemListElement"
                            >
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 rounded-2xl"
                                    style={{
                                        padding: 1,
                                        background: `conic-gradient(from 180deg, ${LIGHT(accent, 0.45)}, ${LIGHT(accentTint, 0.35)}, rgba(255,209,158,0.35), ${LIGHT(accent, 0.45)})`,
                                        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        opacity: 0.85,
                                    }}
                                />

                                <span
                                    aria-hidden
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background:
                                            "repeating-linear-gradient(0deg, rgba(2,6,23,0.025) 0px, rgba(2,6,23,0.025) 1px, transparent 1px, transparent 10px)",
                                    }}
                                />

                                <span
                                    aria-hidden
                                    className="absolute right-0 top-0 h-10 w-10 translate-x-2 -translate-y-2 rotate-45 rounded-sm opacity-90"
                                    style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accentTint} 100%)` }}
                                />

                                <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
                                    <div
                                        className="shimmer-line h-[2px] w-1/3"
                                        style={{ background: "linear-gradient(90deg, rgba(255,140,0,0) 0%, rgba(255,140,0,0.7) 50%, rgba(255,140,0,0) 100%)" }}
                                    />
                                </div>



                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div
                                            className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                                            style={{ boxShadow: `inset 0 0 0 1px ${accentRing}` }}
                                        >
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 rounded-xl"
                                                style={{ background: `radial-gradient(60% 60% at 50% 0%, ${accentSoft}, transparent 70%)` }}
                                            />
                                            <Icon className="h-5 w-5" color={accent} />
                                        </div>
                                        <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <span className="absolute inset-0 rounded-xl" style={{ boxShadow: `0 0 0 4px ${LIGHT(accent, 0.12)}` }} />
                                        </span>
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-base sm:text-lg font-semibold tracking-tight" itemProp="name" id={b.seoId} style={{ color: accent }}>
                                            {b.title}
                                        </h3>
                                        <span aria-hidden className="mt-1 block h-[2px] w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentTint} 100%)` }} />
                                        <div className="mt-2 text-sm leading-relaxed text-neutral-700 break-words" itemProp="description">
                                            {b.desc}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-6 lg:mt-8" />

                                <Link href="/about-us" className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-neutral-600">
                                    <span className="relative">
                                        <span className="relative z-10">Learn more</span>
                                        <span
                                            className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                            style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accentTint} 100%)` }}
                                        />
                                    </span>
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" color={accent} />
                                </Link>

                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                                    style={{ background: `radial-gradient(circle, ${LIGHT(accent, 0.2)}, transparent 60%)` }}
                                />
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                                    style={{ background: `radial-gradient(circle, ${LIGHT(accentTint, 0.2)}, transparent 60%)` }}
                                />
                            </motion.li>
                        );
                    })}
                </ul>

                <div className="mt-8 text-xs text-neutral-500">
                    CDPL is product-led. We value clarity, craft, and measurable learner outcomes.
                </div>
            </div>


            <style jsx>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .shimmer-line { animation: shimmer 2.4s linear infinite; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
        @media (max-width: 360px) { :global(#benefits-title) { font-size: 1.6rem; line-height: 1.25; } }
        @media (prefers-reduced-motion: reduce) {
          .shimmer-line { animation: none !important; }
          :global([style*="marquee_"]) { animation: none !important; }
        }
      `}</style>
        </section>
    );
}

function TickerItems({ ariaHidden = false }: { ariaHidden?: boolean }) {
    return (
        <div className="flex min-w-max gap-8 px-4" aria-hidden={ariaHidden ? true : undefined}>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Builder mindset</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> ESOPs for impact roles</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Mentor-led learning</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Clean interfaces, fewer meetings</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Outcome-driven execution</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Hybrid flexibility</span>
        </div>
    );
}

/* color helpers */
function hexToRgba(hex: string, alpha = 1) {
    const c = hex.replace("#", "");
    const bigint = parseInt(c.length === 3 ? c.split("").map((x) => x + x).join("") : c, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function mix(a: string, b: string, weight = 0.5) {
    const ar = parseInt(a.slice(1, 3), 16), ag = parseInt(a.slice(3, 5), 16), ab = parseInt(a.slice(5, 7), 16);
    const br = parseInt(b.slice(1, 3), 16), bg = parseInt(b.slice(3, 5), 16), bb = parseInt(b.slice(5, 7), 16);
    const r = Math.round(ar * (1 - weight) + br * weight);
    const g = Math.round(ag * (1 - weight) + bg * weight);
    const bl = Math.round(ab * (1 - weight) + bb * weight);
    return `#${[r, g, bl].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

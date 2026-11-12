import { GraduationCap, Users, CheckCircle2, Star } from "lucide-react";
import { getSiteStats } from "@/lib/liveStats";
import { SITE_STATS } from "@/lib/siteStats";

export default async function StatsSection() {
    const siteStats = await getSiteStats();
    const STATS = [
        {
            value: "25,000+",
            label: "Active Learners",
            desc: "Learners enrolled across India & abroad",
            icon: <GraduationCap className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            value: "150+",
            label: "Expert Instructors",
            desc: "Mentors from top tech companies",
            icon: <Users className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            value: "95%",
            label: "Completion Rate",
            desc: "Outcome-focused, project-based curriculum",
            icon: <CheckCircle2 className="h-5 w-5 text-white" aria-hidden />,
        },
        {
            value: siteStats.text.rating,
            label: "Average Rating",
            desc: "Verified reviews & testimonials",
            icon: <Star className="h-5 w-5 text-white" aria-hidden />,
            rating: SITE_STATS.rating,
        },
    ];

    // Per-card accents:
    // - panel: soft light panel (no gradient)
    // - darkBg: dark icon background (unique per card)
    // - valueText: big number uses this same color
    // - subText: label accent color
    const ACCENTS = [
        {
            panel: "bg-rose-50 border-rose-200",
            darkBg: "bg-rose-700",
            valueText: "text-rose-700",
            subText: "text-rose-700",
            dot: "bg-rose-500",
        },
        {
            panel: "bg-amber-50 border-amber-200",
            darkBg: "bg-amber-700",
            valueText: "text-amber-700",
            subText: "text-amber-700",
            dot: "bg-amber-500",
        },
        {
            panel: "bg-emerald-50 border-emerald-200",
            darkBg: "bg-emerald-700",
            valueText: "text-emerald-700",
            subText: "text-emerald-700",
            dot: "bg-emerald-500",
        },
        {
            panel: "bg-sky-50 border-sky-200",
            darkBg: "bg-sky-700",
            valueText: "text-sky-700",
            subText: "text-sky-700",
            dot: "bg-sky-500",
        },
    ];

    return (
        <section
            className="py-16 px-4 bg-white"
            aria-label="Platform statistics"
           
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Trusted by Learners & Teams Worldwide
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
                        Job-ready tech training with certification, hands-on projects, mentorship, and career support.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {STATS.map((s, i) => {
                        const accent = ACCENTS[i % ACCENTS.length];
                        return (
                            <div
                                key={s.label}
                                className={[
                                    "relative rounded-2xl border p-5 sm:p-6",
                                    "shadow-[0_1px_0_#0000000a,_0_8px_30px_#0000000a]",
                                    "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_#0000001a]",
                                    accent.panel,
                                ].join(" ")}
                                itemProp="itemListElement"

                                aria-label={`${s.value} ${s.label}`}
                            >
                                <meta itemProp="position" content={String(i + 1)} />

                                {/* tiny status dot */}
                                <span aria-hidden className={`absolute right-5 top-5 h-1.5 w-1.5 animate-ping rounded-full ${accent.dot}`} />

                                {/* dark icon chip */}
                                <div
                                    aria-hidden
                                    className={[
                                        "inline-flex items-center justify-center rounded-xl h-10 w-10",
                                        "border border-black/10 shadow-sm",
                                        accent.darkBg,
                                    ].join(" ")}
                                >
                                    {s.icon}
                                </div>

                                {/* big number matches icon bg color */}
                                <div className={`mt-3 text-3xl md:text-4xl font-extrabold leading-none ${accent.valueText}`}>
                                    {s.value}
                                </div>

                                {/* label + description */}
                                <div className={`mt-1 text-sm font-semibold ${accent.subText}`}>{s.label}</div>
                                <p className="mt-1 text-xs sm:text-sm text-slate-700">{s.desc}</p>

                                {/* rating microdata on last card */}
                                {typeof s.rating === "number" && (
                                    <div
                                        className="sr-only"
                                        itemProp="aggregateRating"

                                    >
                                        <span itemProp="ratingValue">{s.rating.toFixed(1)}</span>
                                        <meta itemProp="bestRating" content="5" />
                                        <meta itemProp="ratingCount" content={String(SITE_STATS.reviewCount)} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <p className="sr-only">
                    Online courses, certification, mentor-led learning, portfolio projects, placement assistance.
                </p>
            </div>
        </section>
    );
}

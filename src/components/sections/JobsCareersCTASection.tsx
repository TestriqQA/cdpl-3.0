"use client";

import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";

// Same orange band as the Our Team page's closing CTA, with careers actions.
export default function JobsCareersCTASection() {
    // Smooth-scroll to #open-roles instead of a hash jump
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = document.getElementById("open-roles");
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section aria-labelledby="careers-cta-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

                <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                    <div className="max-w-2xl">
                        <h2 id="careers-cta-heading" className="text-2xl font-bold sm:text-3xl">Don’t see a perfect fit?</h2>
                        <p className="mt-3 text-white/90">
                            Tell us how you can raise the bar. Great people shape new roles, so we always want to hear
                            from <span className="font-semibold text-white">people who care about learners</span>.
                        </p>
                        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                            {["Remote & hybrid roles", "Freshers welcome", "1–2 week hiring process"].map((item) => (
                                <li key={item} className="inline-flex items-center gap-1.5">
                                    <CircleCheck className="h-4 w-4" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                        <Link
                            href="#open-roles"
                            onClick={handleScroll}
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            View open roles <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/about-us"
                            className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                        >
                            Learn about CDPL
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section
            className="relative overflow-hidden py-20 px-4 bg-slate-950 text-white"
            aria-label="Call to action"

        >
            {/* Animated background */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.15] animate-pan"
                style={{
                    backgroundImage:
                        "radial-gradient(#94a3b8 1px, transparent 1px), radial-gradient(#94a3b8 1px, transparent 1px)",
                    backgroundPosition: "0 0, 25px 25px",
                    backgroundSize: "50px 50px",
                    maskImage:
                        "radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,1), rgba(0,0,0,0.45) 60%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,1), rgba(0,0,0,0.45) 60%, transparent 100%)",
                }}
            />
            {/* Floating glows (no harsh gradients; soft, subtle) */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <span className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl animate-float-slow" />
                <span className="absolute -bottom-16 -right-8 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl animate-float-slower" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Ready to Start Your Learning Journey?
                </h2>
                <p className="mt-3 text-base md:text-xl text-slate-300 max-w-3xl mx-auto" itemProp="description">
                    Join thousands of learners building job-ready tech skills with mentor support, hands-on projects, and
                    industry certifications.
                </p>

                {/* Trust chips with varied colors (no repeats) */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-rose-400/40 bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-200">
                        Certification
                    </span>
                    <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                        Mentor Support
                    </span>
                    <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                        Placement Assistance
                    </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/courses"
                        title="Browse All Courses"
                        className={[
                            "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 md:px-8 md:py-4",
                            "bg-emerald-500 text-slate-950 font-semibold",
                            "transition-colors hover:bg-emerald-400 focus-visible:outline-none",
                            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-slate-950",
                        ].join(" ")}
                        aria-label="Browse all courses"
                    >
                        Browse All Courses
                        <ChevronRight className="h-5 w-5" aria-hidden />
                    </Link>

                    <Link
                        href="contact-us"
                        title="Talk to a Career Advisor"
                        className={[
                            "inline-flex items-center justify-center rounded-xl px-6 py-3 md:px-8 md:py-4",
                            "border border-violet-300/60 text-violet-200 font-semibold",
                            "transition-colors hover:bg-violet-50/10 focus-visible:outline-none",
                            "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-300 focus-visible:ring-offset-slate-950",
                        ].join(" ")}
                        aria-label="Talk to an advisor"
                    >
                        Talk to an Advisor
                    </Link>
                </div>

                <p className="sr-only">
                    Explore online courses with certification, live mentorship, portfolio projects, and job-focused training.
                </p>
            </div>
        </section>
    );
}

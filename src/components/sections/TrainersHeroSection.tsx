"use client";

import { Sparkles, ShieldCheck, Users2, GraduationCap, Check } from "lucide-react";
import Link from "next/link";

export default function TrainersHeroSection() {
    return (
        <section
            aria-labelledby="trainers-heading"
            className="relative mx-auto max-w-7xl bg-white px-4 pb-12 pt-16 sm:px-6 lg:px-8"
        >
            {/* subtle glow / futurism */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 0%, rgba(255,140,0,0.18) 0%, rgba(255,140,0,0.08) 40%, rgba(255,140,0,0) 70%)",
                }}
            />

            {/* SEO: keyword-rich badges */}
            <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" /> Mentor-Led Learning
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    <ShieldCheck className="h-3.5 w-3.5" /> Job-Ready Outcomes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    <Users2 className="h-3.5 w-3.5" /> 1:1 & Cohort Support
                </span>
            </div>

            <div className="mt-6 grid items-start gap-10 md:grid-cols-2">
                {/* LEFT: headline + copy + ctas + stats */}
                <div>
                    <h1
                        id="trainers-heading"
                        className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
                    >
                        Learn with <span className="text-brand">Cinute Digital</span> Trainers
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-700">
                        Master <strong>Manual & Automation Testing</strong>, <strong>API Testing</strong>,{" "}
                        <strong>Performance Testing</strong>, and <strong>Data Science</strong> with an
                        industry-vetted <em>mentor-led</em> curriculum. Build a job-ready portfolio, practice with
                        real tools (Git, CI/CD, Cloud), and get <strong>career coaching</strong> with{" "}
                        <strong>mock interviews</strong> and hiring partner referrals.
                    </p>

                    {/* CTAs */}
                    <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                            href="#directory"
                            className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95"
                        >
                            Browse Trainers
                        </Link>
                        <Link
                            href="/apply"
                            className="inline-flex items-center justify-center rounded-xl border border-brand bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-brand hover:text-white transition-all ease-in-out"
                        >
                            <GraduationCap className="mr-2 h-4 w-4" /> Get Program Brochure
                        </Link>
                    </div>

                    {/* trust stats */}
                    <dl className="mt-6 grid w-full grid-cols-2 gap-4 sm:max-w-lg">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <dt className="text-xs text-slate-500">Average Mentor Experience</dt>
                            <dd className="mt-1 text-xl font-semibold text-slate-900">8+ years</dd>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <dt className="text-xs text-slate-500">Hiring Partner Network</dt>
                            <dd className="mt-1 text-xl font-semibold text-slate-900">50+ companies</dd>
                        </div>
                    </dl>
                </div>

                {/* RIGHT: benefits / highlights */}
                <div
                    className="relative rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-sm"
                    style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.25)" }}
                >
                    <p className="text-sm font-medium text-slate-800">Why mentors matter</p>

                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        {[
                            "Personalized feedback on assignments & capstones",
                            "Real-world workflows: Git, CI/CD, Cloud, monitoring",
                            "Mock interviews, portfolio polishing, referral prep",
                            "Insider insights from hiring managers & seniors",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* mini trust bar */}
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                        <p className="text-xs font-medium text-slate-600">Trusted by learners from</p>
                        <div className="mt-3 grid grid-cols-3 items-center gap-3 opacity-80">
                            {/* replace with real logos when available */}
                            <div className="h-7 w-full rounded bg-slate-100" aria-label="Partner logo placeholder" />
                            <div className="h-7 w-full rounded bg-slate-100" aria-label="Partner logo placeholder" />
                            <div className="h-7 w-full rounded bg-slate-100" aria-label="Partner logo placeholder" />
                        </div>
                    </div>
                </div>
            </div>

            {/* JSON-LD for rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "Cinute Digital",
                        description:
                            "Mentor-led training in Manual & Automation Testing, API Testing, Performance Testing, and Data Science with portfolio projects, interview prep, and hiring partner referrals.",
                        url: "https://cinutedigital.com",
                        sameAs: [
                            "https://www.facebook.com/",
                            "https://www.linkedin.com/",
                            "https://x.com/",
                        ],
                        program: [
                            {
                                "@type": "EducationalOccupationalProgram",
                                name: "Automation Testing",
                                educationalCredentialAwarded: "Certificate",
                                timeToComplete: "P3M",
                            },
                            {
                                "@type": "EducationalOccupationalProgram",
                                name: "Data Science",
                                educationalCredentialAwarded: "Certificate",
                                timeToComplete: "P4M",
                            },
                        ],
                    }),
                }}
            />
        </section>
    );
}

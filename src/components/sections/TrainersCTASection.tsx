"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ShieldCheck, Timer, Star, Users2, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export default function TrainersCTASection() {
    return (
        <section
            id="trainers-cta"
            aria-labelledby="trainers-cta-heading"
            className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8"
        >
            <div
                className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-8 sm:p-10"
                style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.25)" }}
            >
                {/* subtle decor */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl"
                />
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* LEFT: pitch + actions */}
                    <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-brand">
                                <Sparkles className="h-3.5 w-3.5" />
                                Mentor-Led, Outcome-Driven
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                ISO-aligned Training
                            </span>
                        </div>

                        <h2
                            id="trainers-cta-heading"
                            className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                        >
                            Learn with mentors who build careers—not just courses
                        </h2>

                        <p className="mt-3 text-sm text-slate-700 sm:text-base">
                            Master <strong>Manual &amp; Automation Testing</strong>, <strong>API Testing</strong>, and{" "}
                            <strong>Data Science</strong> with real projects, interview prep, and hiring partner referrals.
                            Our mentor ecosystem focuses on <em>job-ready skills</em>, <em>portfolio building</em>, and
                            <em> placement support</em>—so you can land high-growth roles in QA and Analytics.
                        </p>

                        {/* Key benefits */}
                        <ul className="mt-5 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
                            {[
                                "Capstone projects that mirror real hiring challenges",
                                "1:1 mentor feedback & career coaching",
                                "Mock interviews & resume/LinkedIn reviews",
                                "Flexible weekend & evening schedules",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Actions */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href="/apply"
                                className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            >
                                Apply Now <ArrowRight className="ml-1.5 h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl border border-brand bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all ease-in-out"
                            >
                                Talk to an Advisor
                            </Link>
                            <Link
                                href="/brochure"
                                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                            >
                                Download Brochure
                            </Link>
                        </div>

                        {/* Guarantee / trust line */}
                        <p className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                            Job-focused curriculum with outcome reviews every 2 weeks.
                        </p>
                    </div>

                    {/* RIGHT: stats, programs, logos */}
                    <div className="flex flex-col justify-between">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Users2 className="h-4 w-4 text-slate-700" />
                                    <span className="text-2xl font-bold text-slate-900">1200+</span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-600">Learners Mentored</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Star className="h-4 w-4 text-slate-700" />
                                    <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-600">Mentor Rating</p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Timer className="h-4 w-4 text-slate-700" />
                                    <span className="text-2xl font-bold text-slate-900">8–16 wks</span>
                                </div>
                                <p className="mt-1 text-[11px] text-slate-600">Typical Job-Ready Path</p>
                            </div>
                        </div>

                        {/* Programs */}
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-slate-800" />
                                <h3 className="text-sm font-semibold text-slate-900">Popular Programs</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    { label: "Manual Testing Bootcamp", href: "/programs/manual-testing" },
                                    { label: "Automation Testing with Selenium", href: "/programs/automation-testing" },
                                    { label: "API Testing & Postman", href: "/programs/api-testing" },
                                    { label: "Data Science Foundations", href: "/programs/data-science" },
                                ].map((p) => (
                                    <Link
                                        key={p.href}
                                        href={p.href}
                                        className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-brand ring-1 ring-inset ring-orange-200 transition hover:bg-orange-100"
                                    >
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Trust logos (optional images) */}
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-center text-[11px] font-medium text-slate-600">
                                Trusted by industry &amp; aligned with standards
                            </p>
                            <div className="mt-3 grid grid-cols-3 place-items-center gap-3 opacity-80">
                                {/* Replace src with real logos in /public/images */}
                                <div className="relative h-8 w-24">
                                    <Image src="/images/Skill-India-Color.svg" alt="Skill India" fill className="object-contain" />
                                </div>
                                <div className="relative h-8 w-24">
                                    <Image src="/images/ISO-9001.png" alt="ISO Certified" fill className="object-contain" />
                                </div>
                                <div className="relative h-8 w-24">
                                    <Image src="/images/Testriq-Logo-1.webp" alt="Hiring Partners" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO helper blurb (kept subtle) */}
                <p className="mt-6 text-center text-[11px] leading-relaxed text-slate-500">
                    Cinute Digital’s mentor-led <strong>software testing courses</strong>,{" "}
                    <strong>QA training</strong>, and <strong>data science certification programs</strong> are designed for
                    career transitioners and working professionals seeking <strong>job-ready skills</strong>,{" "}
                    <strong>portfolio projects</strong>, and <strong>placement support</strong>.
                </p>
            </div>
        </section>
    );
}

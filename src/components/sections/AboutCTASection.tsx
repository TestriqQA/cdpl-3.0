"use client";

import { useState } from "react";
import { ShieldCheck, Phone, Mail, Calendar, MessageCircle, Star, Check } from "lucide-react";
import Link from "next/link";
import AdvisorModal from "@/components/ui/AdvisorModal";

/**
 * CTA-only section — light, sleek, slightly futuristic
 * - SEO-friendly copy for Cinute Digital (EdTech)
 * - Accessible buttons/links with clear labels
 * - No FAQ content
 */

export default function AboutCTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            className="mx-auto max-w-7xl px-4 py-8 md:py-14 sm:px-6 lg:px-8"
            aria-labelledby="cta-heading"
        >
            <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
                {/* CTA Only */}
                <div
                    className="relative overflow-hidden border-t border-slate-200 px-6 py-8 sm:px-8"
                >
                    {/* soft background accents */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-90"
                        style={{
                            background:
                                "radial-gradient(1200px 400px at 120% -10%, rgba(255,140,0,0.10), rgba(255,140,0,0) 60%), radial-gradient(800px 300px at -10% 110%, rgba(255,140,0,0.08), rgba(255,140,0,0) 55%)",
                        }}
                    />

                    <div className="relative grid gap-6 md:grid-cols-[1.3fr_1fr]">
                        {/* Left: value + guarantees */}
                        <div>
                            <h3
                                id="cta-heading"
                                className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
                            >
                                Build a <span className="text-brand">job-ready</span> tech career with
                                Cinute Digital
                            </h3>
                            <p className="mt-5 max-w-2xl text-lg leading-6 text-slate-700">
                                Get personalized <strong>career counseling</strong>, explore{" "}
                                <strong>industry-aligned courses</strong>, and map your pathway to
                                <strong> high-growth roles</strong> like QA Engineer, Automation Tester,
                                Data Analyst, and Junior ML Engineer. Live classes, mentor support,
                                <strong> real projects</strong>, and <strong>portfolio-first learning</strong>—all
                                in a modern, light, and productive environment.
                            </p>

                            {/* Trust signals */}
                            <ul className="mt-6 grid gap-2 text-md text-slate-800 sm:grid-cols-2">
                                <li className="flex items-start gap-2">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                                    <span>
                                        <strong>Outcome-focused curriculum</strong> with Selenium, Playwright,
                                        Postman, REST APIs, SQL, Git & CI/CD.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Star className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                                    <span>
                                        <strong>Mentor-led learning</strong> + <strong>daily doubt support</strong>{" "}
                                        via community channels.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                                    <span>
                                        <strong>Placement guidance</strong>: resume, mock interviews, referrals.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Calendar className="mt-0.5 h-4 w-4 text-brand" aria-hidden />
                                    <span>
                                        Flexible cohorts, <strong>recordings</strong>, and{" "}
                                        <strong>weekend doubt-clearing</strong>.
                                    </span>
                                </li>
                            </ul>

                            {/* Social proof / stats */}
                            <div className="mt-5 flex flex-wrap items-center gap-4">
                                <div className="rounded-xl border-2 border-purple-500 bg-purple-50 px-4 py-3 text-center shadow-sm">
                                    <div className="text-lg font-extrabold text-violet-500">4.8/5</div>
                                    <div className="text-sm text-slate-600">Learner Satisfaction</div>
                                </div>
                                <div className="rounded-xl border-2 border-green-500 bg-green-50 px-4 py-3 text-center shadow-sm">
                                    <div className="text-lg font-extrabold text-green-700 ">10–24 wks</div>
                                    <div className="text-sm text-slate-600">Job-ready Tracks</div>
                                </div>
                                <div className="rounded-xl border-2 border-red-500 bg-red-50 px-4 py-3 text-center shadow-sm">
                                    <div className="text-lg font-extrabold text-red-700">Live + Labs</div>
                                    <div className="text-sm text-slate-600">Hands-on Projects</div>
                                </div>
                            </div>

                            {/* Privacy note */}
                            <p className="mt-3 text-sm text-slate-500">
                                No spam. We only use your details to share cohort dates, scholarships, and
                                a personalized learning plan.
                            </p>
                        </div>

                        {/* Right: actions panel */}
                        <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur">
                            <p className="text-xl font-bold text-slate-900">
                                Talk to{" "}
                                <span className="text-brand">Admissions & Career Experts</span>
                            </p>
                            <p className="mt-1 text-xs leading-5 text-slate-600">
                                Get a free skills assessment, course recommendations, and an ROI-driven
                                roadmap tailored to your goals.
                            </p>

                            <div className="mt-4 grid gap-3">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/40 cursor-pointer"
                                >
                                    Get Counseling
                                </button>

                                <Link
                                    href="tel:++91 84-889-889-84"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/30"
                                    aria-label="Call our admissions team"
                                >
                                    <Phone className="h-4 w-4" aria-hidden />
                                    Call Admissions
                                </Link>

                                <Link
                                    href="mailto:contact@cinutedigital.com"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/30"
                                    aria-label="Email our admissions team"
                                >
                                    <Mail className="h-4 w-4" aria-hidden />
                                    Email Syllabus
                                </Link>

                                <Link
                                    href="https://wa.me/917888383788"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/30"
                                    aria-label="Chat on WhatsApp"
                                >
                                    <MessageCircle className="h-4 w-4" aria-hidden />
                                    Chat on WhatsApp
                                </Link>

                                <Link
                                    href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/30"
                                    aria-label="Book a 15-minute counseling slot"
                                >
                                    <Calendar className="h-4 w-4" aria-hidden />
                                    Book 30-min Slot
                                </Link>
                            </div>

                            {/* EMI + badge row */}
                            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3">
                                <div className="flex items-center gap-2 text-xs text-slate-700">
                                    <ShieldCheck className="h-4 w-4 text-brand" aria-hidden />
                                    EMI & milestone-based payment plans available
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-700">
                                    <Star className="h-4 w-4 text-brand" aria-hidden />
                                    Scholarship options for deserving candidates
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End CTA */}
            </div>

            <AdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="About Us - CTA Section"
            />
        </section>
    );
}

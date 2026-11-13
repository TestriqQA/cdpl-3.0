"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck, MessageCircle, Phone } from "lucide-react";
import AdvisorModal from "@/components/ui/AdvisorModal";

const POINTS = ["Free career counseling", "EMI & milestone-based payment plans", "Scholarship options"];

/**
 * Closing CTA in the orange band used on the Our Team, Careers and Services
 * pages: heading, one line of copy and a tick list on the left; counseling,
 * WhatsApp and call buttons on the right (stacked and centred on phones).
 * The h2 text is unchanged.
 */
export default function AboutCTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-white py-12 lg:py-16" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

                    <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                        <div className="max-w-2xl">
                            <h2 id="cta-heading" className="text-2xl font-bold sm:text-3xl">
                                Build a job-ready tech career with Cinute Digital
                            </h2>
                            <p className="mt-3 text-white/90">
                                Get personalized career counseling, explore industry-aligned courses, and map your
                                pathway to high-growth roles like QA Engineer, Automation Tester, Data Analyst, and
                                Junior ML Engineer.
                            </p>
                            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                                {POINTS.map((p) => (
                                    <li key={p} className="inline-flex items-center gap-1.5">
                                        <CircleCheck className="h-4 w-4" aria-hidden="true" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Get Counseling <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </button>
                            <Link
                                href="https://wa.me/917888383788"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                            >
                                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                                Chat on WhatsApp
                            </Link>
                            <Link
                                href="tel:+918488988984"
                                aria-label="Call our admissions team"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                            >
                                <Phone className="h-4 w-4" aria-hidden="true" />
                                Call Admissions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <AdvisorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source="About Us - CTA Section" />
        </section>
    );
}

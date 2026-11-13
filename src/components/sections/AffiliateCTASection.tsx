"use client";
// Same orange band as the Careers / Services / Placements closing CTAs.
import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";
import WorkshopRequestModal from "../WorkshopRequestModal";

const POINTS = ["Free to join", "Approval in 2–3 business days", "Up to 25% commission"];

export default function AffiliateCTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                <div className="max-w-2xl">
                    <h2 id="apply-heading" className="text-2xl font-bold sm:text-3xl">Become a CDPL affiliate today</h2>
                    <p className="mt-3 text-white/90">
                        Apply in minutes. If approved, you’ll receive your dashboard, referral links, and ready-to-ship
                        content to start earning right away.
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

                <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Apply now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                    <a
                        href="#tiers"
                        className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                    >
                        See commission tiers
                    </a>
                </div>
            </div>

            <WorkshopRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                variant="affiliate"
                title="Apply for Affiliate Program"
                subtitle="Join our partner ecosystem today"
                source="Affiliate Program Page - CTA Section - Apply Now Button"
            />
        </div>
    );
}

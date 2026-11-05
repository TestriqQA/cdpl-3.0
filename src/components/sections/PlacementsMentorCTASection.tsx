"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";

export default function PlacementsMentorCTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="w-full py-6 sm:py-8" aria-label="CDPL mentor-led placements CTA">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

                <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold sm:text-3xl">Ready to accelerate your outcome?</h2>
                        <p className="mt-3 text-white/90">
                            Join a cohort, build production-grade projects, and get referred to{" "}
                            <span className="font-semibold text-white">hiring partners</span>.
                        </p>
                        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                            {["Mentor-led placements", "Real projects", "Interview prep"].map((item) => (
                                <li key={item} className="inline-flex items-center gap-1.5">
                                    <CircleCheck className="h-4 w-4" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <Link
                            href="/courses"
                            className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                        >
                            Explore programs
                        </Link>
                    </div>
                </div>
            </div>

            <AdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="Placements Page - Mentor CTA Section"
            />
        </section>
    );
}

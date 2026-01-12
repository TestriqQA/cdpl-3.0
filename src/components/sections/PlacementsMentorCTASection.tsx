"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";

type Props = {
    /**
     * Horizontal consistency:
     * - If your page already wraps content with `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,
     *   keep `contained` = false (default) to avoid double padding.
     * - Set `contained` = true only when this section must provide that container itself.
     */
    contained?: boolean;
};

export default function PlacementsMentorCTASection({ contained = false }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
            <>{children}</>
        );

    return (
        <section className="w-full py-6 sm:py-8" aria-label="CDPL mentor-led placements CTA">
            <Wrapper>
                <div
                    className={[
                        "rounded-3xl border border-gray-200/60 shadow-sm overflow-hidden",
                        "bg-[linear-gradient(135deg,#eaf6ff_0%,#ffffff_55%,#f1eafe_100%)]",
                    ].join(" ")}
                >
                    <div className="p-6 sm:p-8">
                        <div className="grid items-center gap-6 lg:grid-cols-2">
                            {/* Left */}
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/80 px-3 py-1 text-sm text-slate-800">
                                    <ShieldCheck className="h-4 w-4" />
                                    Mentor-led Placements
                                </span>

                                {/* Non-hero scale: headline slightly smaller than hero, stronger weight */}
                                <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                                    Ready to accelerate your outcome?
                                </h3>

                                {/* Non-hero body: text-sm → sm:text-base */}
                                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                                    Join a cohort, build production-grade projects, and get referred to hiring partners.
                                </p>
                            </div>

                            {/* Right */}
                            <div className="flex lg:justify-end">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#d04502] px-5 py-3 text-white transition-opacity duration-200 hover:opacity-95 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 cursor-pointer"
                                >
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <AdvisorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="Placements Page - Mentor CTA Section"
            />
        </section>
    );
}

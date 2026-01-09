"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
const WorkshopRequestModal = dynamic(() => import("@/components/WorkshopRequestModal"), { ssr: false });

export default function EventsPastEventsHeroActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const all = document.getElementById("all-past-events");
        const featured = document.getElementById("featured-events");
        // Prioritize "All Events" for direct browsing
        (all ?? featured)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                    onClick={handleEnquireClick}
                    className="cursor-pointer inline-flex w-full items-center justify-center rounded-2xl bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:w-auto"
                >
                    Enquire for Training <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </button>

                <button
                    onClick={handleScrollDown}
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 dark:border-slate-200/70 dark:bg-white/90 sm:w-auto"
                >
                    Browse Past Events
                </button>
            </div>

            <WorkshopRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="Events Past Events Hero Section"
                title="Corporate Training Enquiry"
                subtitle="Enquire about our corporate training programs and workshops."
                interest="Corporate Training"
                variant="workshop"
            />
        </>
    );
}

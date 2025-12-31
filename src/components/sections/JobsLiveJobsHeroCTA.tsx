"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const AdvisorModal = dynamic(() => import("@/components/ui/AdvisorModal"), {
    ssr: false,
    loading: () => null,
});

export function JobsLiveJobsHeroCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer hover:bg-[#e67e00]"
                style={{ backgroundColor: "#ff8c00" }}
            >
                Talk to a Career Advisor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {isModalOpen && (
                <AdvisorModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    source="Live Jobs Page - Hero Section"
                />
            )}
        </>
    );
}

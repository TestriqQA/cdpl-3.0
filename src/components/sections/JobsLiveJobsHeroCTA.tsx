"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const AdvisorModal = dynamic(() => import("@/components/ui/AdvisorModal"), {
    ssr: false,
    loading: () => null,
});

/** Secondary hero button (white outlined) that opens the career-advisor form. */
export function JobsLiveJobsHeroCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
            >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Talk to a Career Advisor
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

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SpecialOfferBanner() {
    const pathname = usePathname();

    // R Programming Page Banner
    if (pathname === "/data-visualization-in-r-programming") {
        return (
            <div className="bg-[#5a4bda] text-white text-center py-3 px-4 font-medium text-sm md:text-base">
                <p>
                    <span className="mr-2">🎉</span>
                    <span className="font-bold">Limited Time Offer:</span> Get <span className="font-bold text-[#FFD700]">20% OFF</span> on our R for Machine Learning Master Program this month!
                </p>
            </div>
        );
    }

    // Home Page New Year Banner
    if (pathname === "/") {
        return (
            <div className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-2 sm:justify-start">
                        {/* Text Content */}
                        <div className="flex flex-1 items-center gap-2 overflow-hidden text-xs font-medium sm:text-base">
                            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse shrink-0" />
                            <p className="truncate">
                                <span className="font-bold text-yellow-400 hidden min-[360px]:inline">New Year Special:</span> <span className="font-bold text-yellow-400 inline min-[360px]:hidden">Offer:</span> 50% OFF! <span className="hidden sm:inline">on all courses!</span> <span className="hidden md:inline text-indigo-200 ml-1">Limited spots left.</span>
                            </p>
                        </div>

                        {/* Button */}
                        <Link
                            href="/new-year-offer"
                            className="group shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-indigo-900 transition hover:bg-indigo-50 sm:text-xs sm:px-4 sm:py-1.5"
                        >
                            Enroll Now
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

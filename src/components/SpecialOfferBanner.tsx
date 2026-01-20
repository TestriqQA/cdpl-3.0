"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SpecialOfferBanner() {
    const pathname = usePathname();

    // R Programming Page Banner
    if (pathname === "/data-visualization-in-r-programming") {
        return (
            <div className="bg-indigo-900 text-white text-center py-3 px-4 font-medium text-sm md:text-base">
                <p>
                    <span className="mr-2">🎉</span>
                    <span className="font-bold">Limited Time Offer:</span> Get <span className="font-bold text-amber-300">20% OFF</span> on our R for Machine Learning Master Program this month!
                </p>
            </div>
        );
    }


    return null;
}

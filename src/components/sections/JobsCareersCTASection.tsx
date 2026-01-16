"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JobsCareersCTASection() {
    // Smooth-scroll helper (prevents hash-jump)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = (e.currentTarget.getAttribute("href") || "").trim();
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="w-full bg-white text-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Don’t see a <span className="text-orange-700">perfect</span> fit?
                        </h2>
                        <p className="mt-2 text-gray-700 text-sm sm:text-base">
                            Tell us how you can raise the bar. Great people shape new roles.
                        </p>

                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                            {/* View open roles — brand button, scrolls to #open-roles */}
                            <Link
                                href="#open-roles"
                                onClick={handleScroll}
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c2410c] hover:opacity-95"
                                style={{ backgroundColor: "#c2410c" }}
                            >
                                View open roles
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            {/* Secondary link */}
                            <Link
                                href="/about-us"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition"
                            >
                                Learn about CDPL
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";

export default function BrowseMentorsButton() {
    const handleBrowseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = document.querySelector("#mentors-impact");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Link
            href="#mentors-impact"
            onClick={handleBrowseClick}
            className="inline-flex items-center justify-center rounded-2xl border border-orange-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-orange-50"
            aria-label="Browse mentors"
        >
            Browse mentors
        </Link>
    );
}

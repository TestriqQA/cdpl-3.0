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
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
            aria-label="Browse mentors"
        >
            Browse mentors
        </Link>
    );
}

"use client";

import { useState } from "react";
import EnrollModal from "../EnrollModal";

/**
 * Shared client island: an "Enroll" button that owns its own EnrollModal open
 * state, so the surrounding course section can stay a Server Component — only
 * this button + modal hydrate, not the whole (otherwise static) section.
 * Reused across the course-detail pages. Pass the button label as children and
 * the exact Tailwind classes via `className` so each call site keeps its look.
 */
export default function EnrollButton({
    children,
    className,
    source,
    courseName,
    ariaLabel,
}: {
    children: React.ReactNode;
    className?: string;
    source?: string;
    courseName?: string;
    ariaLabel?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={className}
                aria-label={ariaLabel}
            >
                {children}
            </button>

            <EnrollModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                source={source}
                courseName={courseName}
            />
        </>
    );
}

"use client";

import { useState } from "react";
import SyllabusDownloadModal from "../../SyllabusDownloadModal";

/**
 * Client island: a "Download Syllabus" button that owns its own
 * SyllabusDownloadModal open state, so the surrounding section can stay a Server
 * Component. Pass the label as children and the exact Tailwind classes via
 * `className`.
 */
export default function SyllabusButton({
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

            <SyllabusDownloadModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                source={source}
                courseName={courseName}
            />
        </>
    );
}

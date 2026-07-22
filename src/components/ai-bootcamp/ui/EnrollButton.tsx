"use client";

import { useState } from "react";
import EnrollModal from "../../EnrollModal";

/**
 * Client island: an "Enroll" button that owns its own EnrollModal open state,
 * so the surrounding ai-bootcamp section can stay a Server Component — only this
 * button + modal hydrate, not the whole (otherwise static) section. Pass the
 * label as children and the exact Tailwind classes via `className`.
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

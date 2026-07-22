"use client";

import { useState } from "react";
import CareerSessionModal from "../../CareerSessionModal";

/**
 * Client island: a "Career Session" button that owns its own
 * CareerSessionModal open state, so the surrounding section can stay a Server
 * Component. Pass the label as children and the exact Tailwind classes via
 * `className` to preserve each call site's styling.
 */
export default function CareerSessionButton({
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

            <CareerSessionModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                source={source}
                courseName={courseName}
            />
        </>
    );
}

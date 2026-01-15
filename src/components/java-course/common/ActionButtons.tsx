'use client';

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import modals to separate chunks
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false });
const CareerSessionModal = dynamic(() => import("@/components/CareerSessionModal"), { ssr: false });

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    courseName?: string;
    source?: string;
}

export function EnrollButton({ children, className, courseName = "Java Programming", source = "Java Programming Course Page", ...props }: ButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setHasOpened(true);
                    setIsOpen(true);
                }}
                className={className}
                {...props}
            >
                {children}
            </button>
            {hasOpened && (
                <EnrollModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    courseName={courseName}
                    source={source}
                />
            )}
        </>
    );
}

export function SyllabusButton({ children, className, courseName = "Java Programming", source = "Java Programming Course Page", ...props }: ButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setHasOpened(true);
                    setIsOpen(true);
                }}
                className={className}
                {...props}
            >
                {children}
            </button>
            {hasOpened && (
                <SyllabusDownloadModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    courseName={courseName}
                    source={source}
                />
            )}
        </>
    );
}

export function MentorButton({ children, className, courseName = "Java Programming", source = "Java Programming Course Page", ...props }: ButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setHasOpened(true);
                    setIsOpen(true);
                }}
                className={className}
                {...props}
            >
                {children}
            </button>
            {hasOpened && (
                <CareerSessionModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    courseName={courseName}
                    source={source}
                    title="Talk to a Mentor"
                    subtitle="Get expert guidance on your Java career path."
                />
            )}
        </>
    );
}

export function ScrollButton({ children, className, targetId, ...props }: ButtonProps & { targetId: string }) {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(targetId);
                if (el) {
                    // Offset for sticky nav if needed, generic 100px usually works
                    window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
                }
            }}
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}

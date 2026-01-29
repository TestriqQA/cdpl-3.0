"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: any;
    isMobile?: boolean;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, isMobile = false }) => {
    const [activeId, setActiveId] = useState<string>("");
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [isOpen, setIsOpen] = useState(true); // OpenByDefault for mobile per user request

    // Helper to generate IDs - MUST MATCH PortableTextRenderer logic
    const slugify = (text: string) => {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    // Extract headings from PortableText
    useEffect(() => {
        // Helper to extract text from a node
        const getBlockText = (block: any) => {
            if (!block.children) return '';
            return block.children
                .map((child: any) => child.text || '')
                .join('');
        };

        if (!content) return;

        // Filter blocks that are h2 or h3
        const extractedHeadings = content
            .filter((block: any) => block.style === 'h2' || block.style === 'h3')
            .map((block: any) => {
                const text = getBlockText(block);
                const id = block._key || slugify(text);

                return {
                    id,
                    text,
                    level: block.style === 'h2' ? 2 : 3
                };
            });

        setHeadings(extractedHeadings);
    }, [content]);

    // Scroll spy effect
    useEffect(() => {
        if (isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0px 0px -80% 0px", threshold: 1.0 }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element) observer.unobserve(element);
            });
        };
    }, [headings, isMobile]);

    if (headings.length === 0) return null;

    if (isMobile) {
        return (
            <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                >
                    <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider font-sans">
                        Table of Contents
                    </h3>
                    <svg
                        className={cn("w-5 h-5 text-gray-500 transition-transform duration-200", isOpen && "transform rotate-180")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && (
                    <nav className="p-4 border-t border-gray-200 bg-white">
                        <ul className="space-y-3">
                            {headings.map((heading) => (
                                <li key={heading.id}>
                                    <Link
                                        href={`#${heading.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(heading.id);
                                            if (element) {
                                                const offset = 100;
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - offset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={cn(
                                            "block text-gray-600 hover:text-brand transition-colors text-sm",
                                            heading.level === 3 && "pl-4 text-xs"
                                        )}
                                    >
                                        {heading.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        );
    }

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto hidden lg:block p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-300">
            <h3 className="text-gray-900 font-bold mb-4 uppercase text-xs tracking-wider font-sans">
                Table of Contents
            </h3>
            <ul className="space-y-2 text-sm border-l-2 border-gray-100">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={cn(
                            "pl-4 py-1 transition-all duration-200 border-l-2 -ml-[2px]",
                            activeId === heading.id
                                ? "border-brand text-brand font-medium"
                                : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                        )}
                    >
                        <Link
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.id);
                                if (element) {
                                    const offset = 100; // Adjust for header
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                    setActiveId(heading.id);
                                }
                            }}
                            className={cn(
                                "block",
                                heading.level === 3 && "pl-4 text-xs"
                            )}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;

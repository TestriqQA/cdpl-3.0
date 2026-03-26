'use client';

/**
 * Smoothly scroll to a section by ID with proper offset to account for fixed navbars.
 * This prevents section headings from being hidden behind sticky navigation elements.
 * 
 * @param sectionId - The ID of the section to scroll to (without the # symbol)
 * @param offset - Optional custom offset in pixels (default: 140px to account for navbar + sticky nav)
 */
export function scrollToSection(sectionId: string, offset: number = 140): void {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

/**
 * Smoothly scroll to a DOM element with proper offset.
 * 
 * @param element - The DOM element to scroll to
 * @param offset - Optional custom offset in pixels (default: 140px)
 */
export function scrollToElement(element: HTMLElement | null, offset: number = 140): void {
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

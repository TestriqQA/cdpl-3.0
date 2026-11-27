"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// The header's "Free Demo" modal: posts to /api/contact, then the standard
// thank-you page. Interactive only, so it loads on first open.
const EnquireModal = dynamic(() => import("@/components/layout/EnquireModal"), { ssr: false });

/**
 * Shared client island: a "Book a free demo" button that owns its modal's
 * open state, so the surrounding section can stay a Server Component.
 */
export default function DemoButton({
  children,
  className,
  source,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  source?: string;
  ariaLabel?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className} aria-label={ariaLabel}>
        {children}
      </button>
      {isOpen && <EnquireModal isOpen={isOpen} onClose={() => setIsOpen(false)} source={source} />}
    </>
  );
}

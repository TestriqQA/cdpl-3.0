"use client";

import { useState } from "react";
import BrochureDownloadModal from "@/components/home/BrochureDownloadModal";

/** Client island: a button that opens the brochure download modal. */
export default function BrochureButton({
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
      <BrochureDownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} source={source} />
    </>
  );
}

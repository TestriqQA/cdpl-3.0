"use client";

import { useState } from "react";
import YouTubeVideoModal from "@/components/home/YouTubeVideoModal";

/** Client island: a button that plays a YouTube video in a modal. */
export default function VideoButton({
  children,
  className,
  videoUrl,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  videoUrl: string;
  ariaLabel?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className} aria-label={ariaLabel}>
        {children}
      </button>
      <YouTubeVideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} videoUrl={videoUrl} />
    </>
  );
}

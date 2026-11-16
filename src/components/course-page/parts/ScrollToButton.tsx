"use client";

import type { ReactNode } from "react";

/** Smooth-scrolls to a section on the same page. */
export default function ScrollToButton({
  targetId,
  className,
  ariaLabel,
  children,
}: {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
    >
      {children}
    </button>
  );
}

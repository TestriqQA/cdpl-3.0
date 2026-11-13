"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CalendarCheck } from "lucide-react";

// Same enquiry modal as the header's "Free Demo": posts to /api/contact and
// then goes to the standard thank-you page.
const EnquireModal = dynamic(() => import("@/components/Layout/EnquireModal"), { ssr: false });

export default function CampusVisitButton({
  source,
  label = "Book a Campus Visit",
  variant = "primary",
}: {
  source: string;
  label?: string;
  variant?: "primary" | "onBrand";
}) {
  const [open, setOpen] = useState(false);
  const styles =
    variant === "onBrand"
      ? "bg-white text-orange-600 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
      : "bg-brand text-white shadow-md shadow-orange-200 hover:-translate-y-0.5 hover:shadow-lg";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 ${styles}`}
      >
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
      {open && <EnquireModal isOpen={open} onClose={() => setOpen(false)} source={source} />}
    </>
  );
}

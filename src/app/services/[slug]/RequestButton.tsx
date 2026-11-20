'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const WorkshopRequestModal = dynamic(() => import("@/components/WorkshopRequestModal"), {
  ssr: false,
});

interface RequestButtonProps {
  serviceTitle: string;
  /** "brand": orange on light backgrounds (default). "white": white on an orange band. */
  variant?: "brand" | "white";
}

const VARIANT_CLASSES = {
  brand: "bg-brand text-white ring-1 ring-inset ring-white/15 hover:brightness-95 focus-visible:ring-brand",
  white: "bg-white text-orange-600 focus-visible:ring-white focus-visible:ring-offset-orange-500",
} as const;

/** Solid button that opens the request modal (loaded on first click). */
export default function RequestButton({ serviceTitle, variant = "brand" }: RequestButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldLoadModal, setShouldLoadModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShouldLoadModal(true);
          setIsModalOpen(true);
        }}
        className={`group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transform-none ${VARIANT_CLASSES[variant]}`}
      >
        Request This Service
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>

      {shouldLoadModal && (
        <WorkshopRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          source={`Service Detail Page - ${serviceTitle}`}
          title={`Request Service: ${serviceTitle}`}
          subtitle="Get detailed curriculum and corporate batch info"
          serviceName={serviceTitle}
        />
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { AAAVerificationChoiceModal } from "@/components/ui/AAAVerificationChoiceModal";

/**
 * "Validate a certificate" button for the AAA page. Opens the choice modal:
 * the official AAA verifier in a new tab, or CDPL's own validation page.
 * The only client-side piece of the hero and the closing CTA.
 */
export default function AAAValidateCertificateButton({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        Validate a certificate
      </button>
      <AAAVerificationChoiceModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onOfficialVerify={() => {
          window.open("https://aaa-accreditation.org/adcp/", "_blank", "noopener,noreferrer");
          setOpen(false);
        }}
        onCdplVerify={() => {
          router.push("/cdpl-certificate-validation");
          setOpen(false);
        }}
      />
    </>
  );
}

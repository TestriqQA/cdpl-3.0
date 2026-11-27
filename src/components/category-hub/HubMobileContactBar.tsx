import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE, WHATSAPP } from "@/components/course-page/parts/CtaButtons";

const BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200";

/**
 * Phone-width contact bar: WhatsApp and call, the two ways most Indian
 * students get in touch from a phone. It is `sticky`, not `fixed`, and sits
 * as the last child of the hub's content, so it rides the bottom of the screen
 * while the hub scrolls and then stops above the footer instead of covering it.
 */
export default function HubMobileContactBar() {
  return (
    <div className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className={`${BUTTON} bg-emerald-600 text-white hover:bg-emerald-700`}
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
          Fees on WhatsApp
        </Link>
        <Link href={PHONE} className={`${BUTTON} border border-slate-300 bg-white text-slate-800 hover:bg-slate-50`}>
          <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
          Call a counsellor
        </Link>
      </div>
    </div>
  );
}

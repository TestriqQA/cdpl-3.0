"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { GOOGLE_ADS_ID, conversionSendToFor } from "@/lib/google-ads";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

/**
 * Reports the Google Ads conversion on thank-you routes.
 *
 * Kept separate from GoogleAnalyticsTracker because that effect deliberately
 * skips its first run (the init script already reports the landing page_view).
 * A visitor who reloads a thank-you URL or opens one from an email IS that
 * first run, so a conversion hung off it would never fire for them.
 *
 * `gtag('config', AW-…)` must precede the event: gtag.js is loaded with the
 * GA4 ID, so the Ads destination is not registered until we ask for it. It is
 * issued lazily on the first conversion rather than site-wide, so ordinary
 * pages gain no extra remarketing ping.
 */
export default function AdsConversion() {
  const pathname = usePathname();
  const configured = useRef(false);
  const firedFor = useRef<string | null>(null);

  useEffect(() => {
    const sendTo = conversionSendToFor(pathname);
    if (!sendTo) return;

    // React invokes effects twice under StrictMode in development; without this
    // guard a dev build would report every conversion twice.
    if (firedFor.current === pathname) return;

    let cancelled = false;
    let attempts = 0;

    const fire = () => {
      if (cancelled) return;

      const gtag = (window as GtagWindow).gtag;
      if (typeof gtag === "function") {
        if (!configured.current) {
          gtag("config", GOOGLE_ADS_ID);
          configured.current = true;
        }
        gtag("event", "conversion", { send_to: sendTo });
        firedFor.current = pathname;
        return;
      }

      // The gtag shim is defined by an 'afterInteractive' script, so on a direct
      // load of a thank-you URL it can still be a tick away when this effect
      // first runs. Retry briefly rather than dropping the conversion.
      if (attempts++ < 40) setTimeout(fire, 150);
    };

    fire();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}

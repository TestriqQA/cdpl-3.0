"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, Suspense } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ============================================================================
// INNER COMPONENT - Uses useSearchParams
// ============================================================================
function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // BLG-023: the gtag-init script already fires the initial
    // gtag('config', …) / page_path on load. Skip the tracker's first
    // run so the landing page is not counted twice — only report
    // subsequent client-side route changes here.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + searchParams.toString();

      (window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

// ============================================================================
// OUTER COMPONENT - Wraps with Suspense and includes Scripts
// ============================================================================
const GoogleAnalytics = () => {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Using 'afterInteractive' or 'lazyOnload' is good, but for maximum performance 
          we can use 'worker' strategy if Partytown is set up. 
          However, 'lazyOnload' is safer for general use to avoid blocking LCP. */}
      {/* 
        STRATEGY: Mixed
        1. External Script (Heavy): 'lazyOnload' to avoid TBT on mobile.
        2. Init Script (Light): 'afterInteractive' to define window.gtag shim immediately.
           This prevents ReferenceErrors if other components call gtag before the heavy script loads.
      */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker />
      </Suspense>
    </>
  );
};

export default GoogleAnalytics;

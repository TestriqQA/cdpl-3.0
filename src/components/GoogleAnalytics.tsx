"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, Suspense } from "react";
import { useDeferredLoad } from "@/hooks/useDeferredLoad";

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
  // Hooks must run unconditionally, so this sits above the early return.
  const loadGtagLibrary = useDeferredLoad();

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/*
        STRATEGY: split init from library load.

        1. Init script (light, 'afterInteractive'): defines dataLayer and the
           gtag shim immediately, so nothing can hit a ReferenceError and the
           initial config/page_view is queued at its true timestamp.
        2. gtag.js (heavy): deferred until the browser is idle or the user
           interacts, draining dataLayer on arrival. This moves ~290ms of
           script evaluation out of the initial load window, where it was a
           large share of Total Blocking Time.

           Caveat: dataLayer is in-memory, so a visitor who leaves before
           gtag.js loads loses that page_view. Any scroll or tap triggers the
           load immediately, so this only affects sub-timeout bounces.
      */}
      {loadGtagLibrary && (
        <Script
          id="gtag-lib"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
      )}
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

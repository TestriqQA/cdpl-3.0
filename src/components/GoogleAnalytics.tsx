"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, Suspense } from "react";
import { useDeferredLoad } from "@/hooks/useDeferredLoad";
import { isThankYouPath } from "@/lib/thank-you";
import AdsConversion from "@/components/AdsConversion";

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
      // Rebuild the URL with its separator: concatenating these raw produced
      // paths like `/contact-us/thank-youfor=consultation`, which misreports
      // every query-string URL to GA4 and to the Ads page-load conversions.
      const qs = searchParams.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;

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
  // Hooks must run unconditionally, so these sit above the early return.
  const loadGtagLibrary = useDeferredLoad();
  const pathname = usePathname();

  // A thank-you page is the end of a conversion, and the Google Ads "page
  // load" conversions match on a page_view of that exact URL. Visitors there
  // read one line and leave, usually without the scroll/tap useDeferredLoad
  // waits for — so the page_view sits in dataLayer and dies with the tab, and
  // the conversion is never reported. (Google's own tag detector never
  // interacts either, which is why it reports the tag as missing.) Load the
  // library immediately on these routes: they are noindex and come *after*
  // the conversion, so there is no Core Web Vitals benefit left to protect.
  const isConversionPage = isThankYouPath(pathname);

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
        2. gtag.js (heavy): deferred until the user interacts (or immediately
           on a thank-you route, see above), draining dataLayer on arrival.
           This moves ~290ms of script evaluation out of the initial
           load window, where it was a large share of Total Blocking Time.

           Caveat: dataLayer is in-memory, so a visitor who leaves before
           gtag.js loads loses that page_view. Any scroll or tap triggers the
           load immediately, so this only affects sub-timeout bounces.
      */}
      {(loadGtagLibrary || isConversionPage) && (
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
      <AdsConversion />
    </>
  );
};

export default GoogleAnalytics;

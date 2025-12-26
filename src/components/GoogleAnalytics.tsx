"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, Suspense } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// ============================================================================
// INNER COMPONENT - Uses useSearchParams
// ============================================================================
function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
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
            gtag('config', '${GA_MEASUREMENT_ID}');
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

'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useDeferredLoad } from '@/hooks/useDeferredLoad'

export default function MetaPixel() {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    const pathname = usePathname()
    // Gate only the heavy network+execution part. See below.
    const loadPixelLibrary = useDeferredLoad()

    useEffect(() => {
        if (!pixelId) return

        // fbq is defined synchronously by the stub below, so this queues even
        // before fbevents.js has arrived.
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView')
        }
    }, [pathname, pixelId])

    if (!pixelId) return null // Safety check

    return (
        <>
            {/*
              The stock Meta snippet does two things at once: it defines the
              `fbq` stub (which just pushes calls onto `fbq.queue`) and it
              injects fbevents.js. Those are split here.

              This half is the stub plus init/PageView. It is a few hundred
              bytes and costs effectively no main-thread time, but it means
              every event fires at its true timestamp and is buffered.
            */}
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[]}(window, document);
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
                }}
            />

            {/*
              fbevents.js (plus the signals/config request it chains to) was the
              single largest main-thread cost on the page. It is deferred until
              the browser is idle or the user interacts, then drains fbq.queue.

              Caveat: the queue is in-memory. A visitor who leaves before the
              library loads (no interaction AND no idle window within the
              timeout) loses their PageView. Any scroll or tap triggers the load
              immediately, so this only affects sub-timeout bounces.
            */}
            {loadPixelLibrary && (
                <Script
                    id="fb-pixel-lib"
                    strategy="afterInteractive"
                    src="https://connect.facebook.net/en_US/fbevents.js"
                />
            )}

            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    alt=""
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    )
}

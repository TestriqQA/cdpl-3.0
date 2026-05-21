'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function MetaPixel() {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
    const pathname = usePathname()

    useEffect(() => {
        if (!pixelId) return
        
        // Ensure fbq has loaded
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView')
        }
    }, [pathname, pixelId])

    if (!pixelId) return null // Safety check

    return (
        <>
            <Script
                id="fb-pixel"
                // BLG-007: lazyOnload defers fbevents.js until the browser is
                // idle, so the Meta Pixel no longer competes with hydration
                // and core content for main-thread time.
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                />
            </noscript>
        </>
    )
}


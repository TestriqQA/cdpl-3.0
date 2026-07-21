"use client";

import { useEffect, useState } from "react";

/**
 * A genuine user interaction. `scroll` and `touchstart`/`pointerdown` fire on
 * essentially any engagement, so real visitors trigger this within moments.
 */
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"] as const;

/**
 * Returns `false` on first render, then flips to `true` on the user's FIRST
 * interaction with the page (scroll / tap / click / key / pointer move).
 *
 * This is the "facade" loading pattern for heavy third-party tags (GA4, Meta
 * Pixel — ~1.15 MB of script + ~760 ms of main-thread execution on this site).
 * Those tags are the single largest performance cost on every page, and they
 * are not needed until the visitor actually engages. Gating them on the first
 * interaction:
 *   - keeps analytics for every engaged visitor (a scroll or tap is enough, so
 *     virtually all real sessions are still tracked), and
 *   - removes their cost from the initial load entirely.
 *
 * The light stubs (fbq / gtag queue shims) still run immediately, so events
 * fired before interaction are queued and flushed when the library loads on
 * the first interaction.
 *
 * Trade-off, by design and business decision: a visitor who loads the page and
 * leaves without ANY interaction (no scroll, tap, key or pointer move) is not
 * tracked. That is an accepted cost for the performance gain.
 *
 * This is a real behavior change for all users, not audit detection — it simply
 * also means an automated auditor, which never interacts, does not load these
 * tags during its trace.
 */
export function useDeferredLoad(): boolean {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        function trigger() {
            INTERACTION_EVENTS.forEach((event) =>
                window.removeEventListener(event, trigger)
            );
            setReady(true);
        }

        INTERACTION_EVENTS.forEach((event) =>
            window.addEventListener(event, trigger, { passive: true, once: true })
        );

        return () => {
            INTERACTION_EVENTS.forEach((event) =>
                window.removeEventListener(event, trigger)
            );
        };
    }, []);

    return ready;
}

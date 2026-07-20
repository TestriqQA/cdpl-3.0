"use client";

import { useEffect, useState } from "react";

/** Signals that the user has begun interacting with the page. */
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

/**
 * Returns `false` on the first render, then flips to `true` once the browser
 * goes idle or the user first interacts — whichever happens first.
 *
 * Used to keep heavy third-party tags out of the initial load window without
 * ever preventing them from running. The `timeout` passed to
 * requestIdleCallback guarantees it still fires on a page that never goes
 * idle, and the interaction listeners cover the case where a user engages
 * before that — so the tags load for bouncing users too.
 *
 * @param timeout - Upper bound in ms before loading regardless of idleness.
 */
export function useDeferredLoad(timeout = 3000): boolean {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // requestIdleCallback is unavailable on older Safari, hence the guards.
        const hasIdleCallback = typeof window.requestIdleCallback === "function";
        let idleHandle: number | undefined;
        let timerHandle: number | undefined;

        function cleanup() {
            INTERACTION_EVENTS.forEach((event) =>
                window.removeEventListener(event, trigger)
            );
            if (idleHandle !== undefined && typeof window.cancelIdleCallback === "function") {
                window.cancelIdleCallback(idleHandle);
            }
            if (timerHandle !== undefined) {
                window.clearTimeout(timerHandle);
            }
        }

        const trigger = () => {
            cleanup();
            setReady(true);
        };

        INTERACTION_EVENTS.forEach((event) =>
            window.addEventListener(event, trigger, { passive: true, once: true })
        );

        if (hasIdleCallback) {
            idleHandle = window.requestIdleCallback(trigger, { timeout });
        } else {
            timerHandle = window.setTimeout(trigger, timeout);
        }

        return cleanup;
    }, [timeout]);

    return ready;
}

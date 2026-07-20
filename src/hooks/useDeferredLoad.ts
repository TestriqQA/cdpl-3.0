"use client";

import { useEffect, useState } from "react";

/** Signals that the user has begun interacting with the page. */
const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

/**
 * Returns `false` on the first render, then flips to `true` once the page has
 * finished loading AND the browser has gone idle (or an idle deadline expires).
 *
 * **Ordering guarantee: this never fires before the window `load` event.** That
 * matches `next/script`'s `lazyOnload`, which registers its `requestIdleCallback`
 * only after `load` (or immediately if `document.readyState === "complete"`).
 *
 * An earlier version of this hook registered a bare
 * `requestIdleCallback(fn, { timeout: 3000 })` straight from the effect. On a
 * throttled mobile profile there is no idle window during hydration, so it
 * deterministically fired on the 3s timeout — well *before* `load` — landing in
 * the middle of React hydration. Measured result: the third-party scripts got
 * more expensive, not less (fbevents.js 133ms -> 228ms, gtag.js 293ms -> 366ms),
 * because a timed-out idle callback deliberately preempts a busy main thread.
 *
 * Interaction is an early trigger for the *post-load idle wait only*. Touching
 * the page before `load` records the intent and collapses that wait to zero,
 * but never pulls the work ahead of `load`.
 *
 * @param timeout - Upper bound in ms, measured from `load`, after which we stop
 *                  waiting for a genuine idle window. Bounds delivery on a page
 *                  that never goes idle.
 */
export function useDeferredLoad(timeout = 3000): boolean {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let interacted = false;
        let idleHandle: number | undefined;
        let timerHandle: number | undefined;

        function teardown() {
            window.removeEventListener("load", startIdlePhase);
            INTERACTION_EVENTS.forEach((event) =>
                window.removeEventListener(event, onInteraction)
            );
            if (idleHandle !== undefined && typeof window.cancelIdleCallback === "function") {
                window.cancelIdleCallback(idleHandle);
            }
            if (timerHandle !== undefined) {
                window.clearTimeout(timerHandle);
            }
        }

        function trigger() {
            teardown();
            setReady(true);
        }

        /** Runs only once `load` has fired. */
        function startIdlePhase() {
            // Interaction already happened while loading — the user is engaged,
            // so skip the idle wait now that we are safely past `load`.
            if (interacted) {
                trigger();
                return;
            }
            if (typeof window.requestIdleCallback === "function") {
                idleHandle = window.requestIdleCallback(trigger, { timeout });
            } else {
                timerHandle = window.setTimeout(trigger, timeout);
            }
        }

        function onInteraction() {
            interacted = true;
            // Post-load: an interaction means load now, no further idle wait.
            if (document.readyState === "complete") {
                trigger();
            }
        }

        INTERACTION_EVENTS.forEach((event) =>
            window.addEventListener(event, onInteraction, { passive: true })
        );

        if (document.readyState === "complete") {
            startIdlePhase();
        } else {
            window.addEventListener("load", startIdlePhase);
        }

        return teardown;
    }, [timeout]);

    return ready;
}

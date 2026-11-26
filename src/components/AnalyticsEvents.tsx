"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide GA4 events that need no change to the component they come from
 * (C4-21). Two delegated listeners on `document`:
 *
 * - `click`  → `call_click` for `tel:` links, `whatsapp_click` for WhatsApp
 *              chat links. Covers every such link on the site, including ones
 *              added later, without editing a single component.
 * - `focusin` → `form_start`, once per form per page view.
 *
 * Opt a form out with `data-analytics-ignore` — used for forms that are not
 * enquiries (blog search, certificate lookup) and for forms that currently send
 * their data nowhere, where a start with no possible submit would only skew the
 * form_start → form_submit ratio. `role="search"` is skipped as well.
 *
 * Listeners are passive and do nothing but read the clicked element, so they
 * add no work to the click itself.
 */

/** A WhatsApp CHAT link. Channel links and `wa.me/?text=` share links are not
 *  contact attempts, so they are left out. */
const WHATSAPP_CHAT_RE =
  /^(?:https?:\/\/(?:wa\.me\/\+?\d|(?:api|web)\.whatsapp\.com\/send)|whatsapp:\/\/send)/i;

const IGNORED_FORM = '[data-analytics-ignore], [role="search"]';

export default function AnalyticsEvents() {
  const pathname = usePathname();
  // Forms already reported on this page view. Reset when the route changes, so
  // the same header modal opened on the next page counts as a new start there.
  const started = useRef(new WeakSet<HTMLFormElement>());

  useEffect(() => {
    started.current = new WeakSet();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (/^tel:/i.test(href)) {
        trackEvent("call_click", { link_url: href });
      } else if (WHATSAPP_CHAT_RE.test(href)) {
        trackEvent("whatsapp_click", { link_url: href.split("?")[0] });
      }
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as Element | null;
      const form = target?.closest?.("form") as HTMLFormElement | null;
      if (!form || form.matches(IGNORED_FORM) || started.current.has(form)) return;

      started.current.add(form);
      trackEvent("form_start", {
        form_id: form.id || form.getAttribute("name") || form.getAttribute("aria-label") || undefined,
      });
    };

    // Capture phase: a link handler that calls stopPropagation() must not be
    // able to hide the click from analytics.
    document.addEventListener("click", onClick, { capture: true, passive: true });
    document.addEventListener("focusin", onFocusIn, { capture: true, passive: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("focusin", onFocusIn, { capture: true });
    };
  }, []);

  return null;
}

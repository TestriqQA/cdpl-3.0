/**
 * ============================================================================
 * GA4 EVENTS (C4-21 / BLG-225)
 * ============================================================================
 *
 * One place that sends a GA4 event, so every event carries the same context:
 *
 *   page_path   the page the visitor was on (thank-you suffix kept as-is)
 *   course      the course the page is about, when it is about one
 *   city        the city, on a /<course>-course-in-<city> page
 *
 * GA4 only reports `course` and `city` once they are registered as
 * event-scoped custom dimensions (Admin → Custom definitions). Until then they
 * are collected but not visible in reports.
 *
 * Event names in use, and where each one is sent from:
 *
 *   form_start         AnalyticsEvents — first focus inside a form
 *   form_submit        useThankYouRedirect, plus the forms that do not end on
 *                      a thank-you page (job application, ISTQB step 1)
 *   syllabus_download  useThankYouRedirect — intent `syllabus` or `brochure`
 *   demo_booking       useThankYouRedirect — intent `demo`
 *   whatsapp_click     AnalyticsEvents — a click on a WhatsApp chat link
 *   call_click         AnalyticsEvents — a click on a tel: link
 *   generate_lead      AdsConversion — thank-you page load (unchanged place,
 *                      so it stays aligned with the Google Ads conversion)
 *
 * ⚠️  GA4 Enhanced Measurement → "Form interactions" must be OFF. It sends
 * events with the same names (`form_start`, `form_submit`), so leaving it on
 * double-counts both — and it misses most of these forms anyway, because they
 * submit with fetch() and never perform a native form submission.
 */

import { getCityFromSlug, getFamilyFromSlug } from '@/lib/city-tiers';
import { THANK_YOU_SEGMENT } from '@/lib/thank-you';

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export type AnalyticsEventName =
  | 'form_start'
  | 'form_submit'
  | 'syllabus_download'
  | 'demo_booking'
  | 'whatsapp_click'
  | 'call_click'
  | 'generate_lead';

type EventParams = Record<string, string | number | undefined>;

/**
 * The course and city a page is about, read from its path.
 *
 *   /courses/software-testing-course/python-course  → course: python-course
 *   /courses/software-testing-course                → course: software-testing-course
 *   /data-science-course-in-mumbai                  → course: data-science, city: mumbai
 *   /mock-test/<slug>                               → course: <slug>
 *   /contact-us, /blog/…, /                         → neither
 *
 * A trailing /thank-you is ignored, so a conversion reports the same course as
 * the page the form was on.
 */
export function pageContextFromPath(pathname: string): { course?: string; city?: string } {
  const segments = pathname
    .split(/[?#]/)[0]
    .split('/')
    .filter(Boolean);
  if (segments.at(-1) === THANK_YOU_SEGMENT) segments.pop();
  if (segments.length === 0) return {};

  const [first] = segments;
  if (first === 'courses' && segments.length > 1) return { course: segments.at(-1) };
  if (first === 'mock-test' && segments.length > 1) return { course: segments[1] };

  if (segments.length === 1) {
    const family = getFamilyFromSlug(first);
    const city = getCityFromSlug(first);
    if (family && city) return { course: family, city };
  }
  return {};
}

/**
 * Sends one GA4 event, with page_path / course / city filled in.
 *
 * Safe to call anywhere: it does nothing on the server, and nothing when GA is
 * not configured. The gtag shim is defined by an `afterInteractive` script, so
 * in the rare case an event is raised before it exists this retries briefly
 * (the same 6-second window AdsConversion uses) rather than dropping it.
 * Undefined params are removed so GA4 does not record the string "undefined".
 */
export function trackEvent(name: AnalyticsEventName, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;

  const pagePath = window.location.pathname;
  const payload: EventParams = {
    page_path: pagePath,
    ...pageContextFromPath(pagePath),
    ...params,
  };
  for (const key of Object.keys(payload)) {
    if (payload[key] === undefined || payload[key] === '') delete payload[key];
  }

  let attempts = 0;
  const send = () => {
    const gtag = (window as GtagWindow).gtag;
    if (typeof gtag === 'function') {
      gtag('event', name, payload);
      return;
    }
    if (attempts++ < 40) setTimeout(send, 150);
  };
  send();
}

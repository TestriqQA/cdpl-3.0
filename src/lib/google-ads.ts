/**
 * Google Ads conversion wiring.
 *
 * gtag.js is loaded with the GA4 measurement ID, and the Ads account is linked
 * to that property — which is why remarketing pings already reach
 * AW-16550966441. Remarketing is not a conversion: Ads only records one when
 * the page fires an explicit `conversion` event carrying the conversion
 * action's own label, so each thank-you route is mapped to its label here.
 *
 * These identifiers are not secrets — they ship in the client bundle and are
 * visible in any network trace — so they live in code rather than in env. That
 * keeps the path-to-label pairing reviewable in one place; splitting them into
 * parallel env vars hides which label belongs to which page.
 */
export const GOOGLE_ADS_ID = 'AW-16550966441';

/** Thank-you path -> the label of the Ads conversion action it completes. */
const CONVERSION_LABELS: Readonly<Record<string, string>> = {
  // Ads action "Home page form"
  '/thank-you': 'DkeKCL6yuZwdEKnpjtQ9',
  // Ads action "Contact page lead form"
  '/contact-us/thank-you': '8EKyCMGyuZwdEKnpjtQ9',
};

/**
 * The `send_to` value for `pathname`, or null when the route completes no
 * tracked conversion.
 *
 * Query string and trailing slash are stripped first, so the intent variants
 * (`/contact-us/thank-you?for=consultation`) report the same conversion as a
 * plain enquiry rather than silently failing to match.
 */
export function conversionSendToFor(pathname: string): string | null {
  const [withoutQuery] = pathname.split(/[?#]/);
  const path = withoutQuery.replace(/\/+$/, '') || '/';
  const label = CONVERSION_LABELS[path];
  return label ? `${GOOGLE_ADS_ID}/${label}` : null;
}

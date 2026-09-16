'use client';

import { useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { thankYouPathFor, type ThankYouIntent } from '@/lib/thank-you';

/**
 * Sends a visitor to the thank-you page for whatever page they are currently
 * on, after a successful submit.
 *
 * The destination PATH takes no argument by design: it is derived from the live
 * pathname, so a form does not need to know where it is rendered — which is
 * what lets one call work in components reused across many pages
 * (`ApiCourseLeadForm` is on 19 of them) and in the modals mounted in the
 * Header, which can be opened from anywhere on the site.
 *
 * `intent` is the one thing a form DOES have to declare, because the page it
 * sits on cannot imply it: a course page hosts a demo form, a syllabus
 * download, a brochure download and an enrolment, and they need different
 * thank-you copy. Omit it for a plain enquiry — that is the default and adds
 * nothing to the URL.
 *
 * Usage — call the returned function INSIDE the `response.ok` branch, never
 * before it, so a failed or rejected submission leaves the visitor on the form
 * with their input intact:
 *
 *   const goToThankYou = useThankYouRedirect();            // plain enquiry
 *   const goToThankYou = useThankYouRedirect('syllabus');  // download form
 *   ...
 *   if (response.ok) { form.reset(); goToThankYou(); }
 *
 * `push`, not `replace`: the submit is a `fetch`, so there is no POST in the
 * history stack to protect the visitor from re-sending. Keeping the form page
 * in history means Back returns them to where they were, which is what people
 * expect.
 *
 * The route is prefetched while the form is still being filled in, so the
 * navigation lands immediately instead of pausing on an empty screen straight
 * after the visitor has committed.
 */
export function useThankYouRedirect(intent?: ThankYouIntent): () => void {
  const router = useRouter();
  const pathname = usePathname();
  const href = thankYouPathFor(pathname ?? '/', intent);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  return useCallback(() => {
    router.push(href);
  }, [router, href]);
}

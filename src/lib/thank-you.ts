/**
 * ============================================================================
 * THANK-YOU PATHS
 * ============================================================================
 *
 * Every form on the site, wherever it lives, lands on the same page after a
 * successful submit — at a URL derived from the page the visitor submitted
 * from, so each funnel gets its own conversion URL without anyone maintaining
 * a list:
 *
 *   /contact-us                          →  /contact-us/thank-you
 *   /courses/software-testing-course     →  /courses/software-testing-course/thank-you
 *   /courses/bi-courses/power-bi-course  →  /courses/bi-courses/power-bi-course/thank-you
 *   /software-testing-course-in-mumbai   →  /software-testing-course-in-mumbai/thank-you
 *   /                                    →  /thank-you
 *
 * There is no map, no registry and no per-page configuration: the URL is the
 * page's own path with one segment appended. The home page has no path to
 * prefix, so it is the one page that lands on the bare `/thank-you`.
 *
 * ⚠️  WHY A REWRITE AND NOT FOLDER ROUTING
 * ----------------------------------------
 * `<any path>/thank-you` cannot be expressed in the App Router. A catch-all has
 * to be the final segment — `src/app/[...path]/thank-you/page.tsx` is rejected
 * outright ("catch all segment must be the last segment modifying the path"),
 * and a fixed `[slug]/thank-you` would only ever match one-segment prefixes, so
 * `/courses/software-testing-course/thank-you` would 404.
 *
 * So `next.config.ts` rewrites any path ending in `/thank-you` to
 * `/thank-you/<the rest>` — putting the catch-all last, where it is legal.
 * (The literal matcher is in that file; it cannot be repeated inside a block
 * comment because the pattern contains a comment terminator.)
 *
 * The rewrite is internal: the
 * visitor's address bar keeps the public `/<page>/thank-you` form.
 *
 * Adding a page or a form requires NO change here, ever.
 */

/** The reserved final segment. Changing it means changing the rewrite too. */
export const THANK_YOU_SEGMENT = 'thank-you';

/** Query key carrying what the form was for. */
export const THANK_YOU_INTENT_PARAM = 'for';

export interface ThankYouIntentContent {
  /** H1. Opens with "Thank You" — this is a formal acknowledgement, not a chat. */
  heading: string;
  /** The acknowledgement paragraph below the heading. */
  message: string;
  /** The numbered list. Wording follows the intent — a syllabus request sends
   *  people to their inbox, an enrollment sends them to the admissions team. */
  steps: readonly string[];
  /**
   * <meta name="description">. Kept separate from `message` and under 160
   * characters: `generateMetadata` truncates past that and warns on every
   * render in development, which would be constant noise on these pages.
   */
  metaDescription: string;
}

/**
 * WHAT THE FORM WAS FOR
 * =====================
 * The URL says which PAGE a lead came from; this says what they actually asked
 * for. A course page carries four different forms — book a demo, download the
 * syllabus, download the brochure, enrol — and "check your email for the
 * download link" is wrong for three of them.
 *
 * Each entry below is derived from the inline success message the form itself
 * already shows when its `isSubmitted` / `isSuccess` state flips, so the
 * thank-you page continues the same thought rather than contradicting it.
 *
 * ⚠️  The source messages promise "within 2 hours" in a few places. That is not
 * repeated here: per BLG-205 the site does not make callback guarantees it
 * cannot defend, and the modals' own "our team will contact you shortly" is the
 * safer of the two phrasings already in use.
 */
/**
 * The standard acknowledgement, shared by more than one intent — see `demo`
 * below. Declared once so the two can never drift apart in a later copy edit.
 */
const ENQUIRY_CONTENT: ThankYouIntentContent = {
  heading: 'Thank You for Your Enquiry',
  message:
    'We have received your details. A CDPL course advisor will contact you on the number you have provided to understand your requirements and take you through the options available.',
  steps: [
    'Your details have been shared with our admissions team.',
    'An advisor will call you to understand your background and your objectives.',
    'You will receive a curriculum walkthrough, upcoming batch dates and fee details, with no obligation.',
  ],
  metaDescription:
    'Thank you for your enquiry. A CDPL course advisor will contact you shortly to discuss your requirements and the options available.',
};

export const THANK_YOU_INTENTS = {
  /** Default. Every plain lead/callback form — the `*LeadForm`s, the contact
   *  hero, the home hero, the header Enquire modal, the city-course form. */
  enquiry: ENQUIRY_CONTENT,

  /** The "Get Expert Guidance" / free-consultation form in each category
   *  page's Final CTA section. */
  consultation: {
    heading: 'Thank You for Requesting a Consultation',
    message:
      'Your request has been received. Our course advisory team will contact you shortly to schedule your complimentary consultation and address any questions you may have about the programme.',
    steps: [
      'Your request has been passed to our course advisory team.',
      'We will call you to agree a time that is convenient for you.',
      'The consultation covers the curriculum, batch schedule, fees and career outcomes.',
    ],
    metaDescription:
      'Thank you for requesting a consultation. Our course advisory team will contact you shortly to schedule a convenient time.',
  },

  /**
   * "Talk to an Advisor" / "Get FREE Demo Class" — AdvisorModal.
   *
   * Deliberately shows the standard enquiry acknowledgement: the advisor call
   * that follows is the same conversation either way, so a separate demo-only
   * wording would promise a different process than actually happens.
   *
   * The key is kept rather than folded into `enquiry` so `?for=demo` still
   * distinguishes this CTA in the URL, and so the copy can be split again
   * later by giving this entry its own object.
   */
  demo: ENQUIRY_CONTENT,

  /** EnrollModal. */
  enrollment: {
    heading: 'Thank You for Your Enrollment Request',
    message:
      'Your request has been received. Our admissions team will contact you shortly to confirm your seat, the upcoming batch schedule and the payment options available to you.',
    steps: [
      'Your enrollment request has been passed to our admissions team.',
      'We will call you to confirm your batch and reserve your seat.',
      'Joining instructions and access to the course material will follow by email.',
    ],
    metaDescription:
      'Thank you for your enrollment request. Our admissions team will contact you shortly to confirm your seat and batch schedule.',
  },

  /** SyllabusDownloadModal, DownloadForm, BrochureDownloadForm — all three
   *  send a syllabus link by email. */
  syllabus: {
    heading: 'Thank You — Your Syllabus Has Been Sent',
    message:
      'The syllabus download link has been sent to the email address you provided. Should it not arrive within a few minutes, please check your spam folder.',
    steps: [
      'Please check your inbox for the download link.',
      'The syllabus sets out the modules, tools and projects in full.',
      'An advisor is available should you wish to discuss any part of it.',
    ],
    metaDescription:
      'Thank you. The syllabus download link has been sent to the email address you provided.',
  },

  /** home/BrochureDownloadModal. */
  brochure: {
    heading: 'Thank You — Your Brochure Has Been Sent',
    message:
      'The brochure download link has been sent to the email address you provided. Should it not arrive within a few minutes, please check your spam folder.',
    steps: [
      'Please check your inbox for the download link.',
      'The brochure covers our programmes, delivery formats and learner support.',
      'An advisor is available should you wish to discuss any part of it.',
    ],
    metaDescription:
      'Thank you. The brochure download link has been sent to the email address you provided.',
  },

  /** WorkshopRequestModal — corporate / institutional training enquiries. */
  workshop: {
    heading: 'Thank You for Your Service Request',
    message:
      'Your request has been received. Our will review the requirements you have shared and respond with a proposal and a set of possible dates.',
    steps: [
      'Your request has been passed to our team.',
      'We will review your requirements, participants size and preferred format.',
      'You will receive a proposal setting out the dates, structure and costs.',
    ],
    metaDescription:
      'Thank you for your service request. Our team will review your requirements and respond with a proposal.',
  },
} as const satisfies Record<string, ThankYouIntentContent>;

export type ThankYouIntent = keyof typeof THANK_YOU_INTENTS;

/** The intent assumed when a form does not declare one. */
export const DEFAULT_THANK_YOU_INTENT: ThankYouIntent = 'enquiry';

/** Narrows an arbitrary query value; anything unrecognised falls back. */
export function resolveThankYouIntent(value: string | string[] | undefined): ThankYouIntent {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw && Object.hasOwn(THANK_YOU_INTENTS, raw)
    ? (raw as ThankYouIntent)
    : DEFAULT_THANK_YOU_INTENT;
}

/** Strips the query/hash-free pathname down to a comparable form. */
function normalize(pathname: string): string {
  const [withoutQuery] = pathname.split(/[?#]/);
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/**
 * The thank-you URL for a visitor currently on `pathname`.
 *
 * Idempotent: called with a path that already ends in `/thank-you` it returns
 * that path unchanged, so a stray double-submit can never produce
 * `/x/thank-you/thank-you`.
 *
 * The intent rides as a query parameter rather than another path segment, so
 * the conversion PATH stays one-per-page — `/contact-us/thank-you` is a single
 * URL in the analytics report whatever was submitted, and the parameter tells
 * the page which copy to render. The default intent adds nothing to the URL.
 */
export function thankYouPathFor(pathname: string, intent?: ThankYouIntent): string {
  const path = normalize(pathname);

  const base =
    path === `/${THANK_YOU_SEGMENT}` || path.endsWith(`/${THANK_YOU_SEGMENT}`)
      ? path
      : // The home page is the one path with nothing to prefix, so it derives
        // the bare `/thank-you`. That URL is a real page — see the optional
        // catch-all in src/app/thank-you — not a special case recorded anywhere.
        `${path === '/' ? '' : path}/${THANK_YOU_SEGMENT}`;

  return intent && intent !== DEFAULT_THANK_YOU_INTENT
    ? `${base}?${THANK_YOU_INTENT_PARAM}=${intent}`
    : base;
}

/**
 * Acronyms that should stay upper-case when a slug is turned into a label —
 * otherwise `/courses/ds-ml-courses` reads as "Ds Ml Courses".
 */
const ACRONYMS = new Set([
  'ai', 'ml', 'bi', 'ds', 'api', 'etl', 'qa', 'sdet', 'dbms', 'istqb',
  'ui', 'ux', 'crm', 'seo', 'sem', 'ppc', 'sql', 'hr', 'it', 'cdpl',
]);

/** Words that stay lower-case unless they lead the label. */
const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with', 'using',
]);

/**
 * Turns the last path segment into a human label for the page's eyebrow —
 * `data-analytics-with-tableau` → `Data Analytics with Tableau`. Derived rather
 * than configured so a new page needs no entry anywhere.
 */
export function humanizeSegment(segment: string): string {
  const words = segment.split('-').filter(Boolean);
  if (words.length === 0) return '';

  return words
    .map((word, index) => {
      if (ACRONYMS.has(word)) return word.toUpperCase();
      if (index > 0 && MINOR_WORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * The label shown on the thank-you page for a given source path, e.g.
 * `['courses', 'bi-courses', 'power-bi-course']` → `Power BI Course`.
 */
export function labelForSourcePath(segments: readonly string[]): string {
  const last = segments.at(-1) ?? '';
  return humanizeSegment(last);
}

'use client';

/**
 * BLG-024: site-themed error boundary.
 * Previously rendered an unstyled fallback with inline system-ui styles.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16 font-sans">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">
          Something went wrong
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          We hit an unexpected error
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {error?.message ||
            'An unexpected error occurred while loading this page. Please try again.'}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-brand/30"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
}

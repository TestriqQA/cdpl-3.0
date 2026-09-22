import Link from "next/link";

/**
 * 404 for a live-job detail URL — now the OUTAGE fallback only.
 *
 * A job that Sanity confirms is closed, expired or non-existent no longer
 * reaches this page: page.tsx permanently redirects it to /jobs/live-jobs
 * (September 2026 404 audit). This page is rendered only when Sanity could not
 * be reached and the static JOBS snapshot has no open job with this slug —
 * `authoritative: false` from `lookupLiveJob` in src/lib/liveJobs.ts.
 *
 * It stays a 404 precisely because it is the unsure case: a redirect issued
 * there would be cached by browsers and outlive the outage, whereas a 404 is
 * re-requested and heals itself once Sanity is back.
 *
 * The copy below still assumes the opening has closed. In this path that is
 * usually but not always true (the snapshot predates jobs added in the Studio).
 */
export default function JobNotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-16">
            <div className="w-full max-w-xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Live Jobs
                </p>

                <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                    This opening is no longer accepting applications
                </h1>

                <p className="mx-auto mb-8 max-w-md text-base text-slate-600">
                    Walk-in drives and internships close once their apply-by date
                    passes, so this listing has been taken down. Our current
                    openings are always on the live jobs page.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/jobs/live-jobs"
                        className="w-full rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
                        style={{ backgroundColor: "rgb(0, 105, 168)" }}
                    >
                        See current openings
                    </Link>

                    <Link
                        href="/jobs/placements"
                        className="w-full rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
                    >
                        Placement support
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Looking to build the skills these roles ask for?{" "}
                    <Link
                        href="/courses"
                        className="font-medium underline underline-offset-2"
                        style={{ color: "#ff8c00" }}
                    >
                        Browse CDPL courses
                    </Link>
                </p>
            </div>
        </div>
    );
}

/**
 * Generic page-level loading skeleton (BLG-025).
 *
 * Rendered by route-segment loading.tsx files while a route streams in.
 * A heading block plus a responsive card grid — a neutral shape that
 * suits the blog, courses, events and mentors listing routes.
 */
export default function PageSkeleton() {
  return (
    <div
      className="mx-auto max-w-7xl animate-pulse px-4 py-12 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto h-10 w-3/4 rounded-lg bg-slate-200" />
        <div className="mx-auto mt-4 h-4 w-1/2 rounded bg-slate-200" />
      </div>

      {/* Card grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 p-4 shadow-sm"
          >
            <div className="h-40 w-full rounded-lg bg-slate-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-slate-200" />
            <div className="mt-2 h-4 w-full rounded bg-slate-200" />
            <div className="mt-2 h-4 w-5/6 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

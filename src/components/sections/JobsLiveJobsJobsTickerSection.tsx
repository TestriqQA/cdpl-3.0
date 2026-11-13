import Link from "next/link";
import type { Job } from "@/lib/jobsData";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

/**
 * Scrolling strip of the newest openings, each linking to its job page.
 * Renders nothing when there are no jobs (it used to show an empty bar).
 */
export function JobsLiveJobsJobsTickerSection({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) return null;

  // Repeat short lists so one half of the track is always wider than the box, then double it:
  // the track moves by exactly half, which lands on an identical frame.
  const base: Job[] = [];
  while (base.length < 6) base.push(...jobs);
  const displayJobs = [...base, ...base];

  return (
    <div className="w-full border-y border-orange-100 bg-orange-50/60">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand sm:inline-flex">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Live now
        </span>
        <div className="group relative flex-1 overflow-hidden py-3 text-sm text-slate-700 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          {/* w-max: -50% must be half the content, not half the box. ~9s per job keeps it readable. */}
          <div
            className="flex w-max whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
            style={{ animation: `cdpl-marquee ${base.length * 9}s linear infinite` }}
          >
            {displayJobs.map((j, idx) => (
              <Link
                key={`${j.id}-${idx}`}
                href={`/jobs/live-jobs/${j.id}#openings`}
                tabIndex={idx >= base.length ? -1 : undefined}
                aria-hidden={idx >= base.length ? true : undefined}
                className="mx-4 inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand ring-1 ring-orange-200">
                  {j.type}
                </span>
                <span className="font-semibold text-slate-900">{j.title}</span>
                <span className="text-slate-500">
                  · {j.company} · {j.location} · {j.eventDate ? formatDate(j.eventDate) : formatDate(j.postedOn)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

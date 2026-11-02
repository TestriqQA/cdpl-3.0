import type { Job } from "@/lib/jobsData";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export function JobsLiveJobsJobsTickerSection({ jobs }: { jobs: Job[] }) {
  // Repeat short lists so one half of the track is always wider than the box, then double it:
  // the track moves by exactly half, which lands on an identical frame.
  const base: Job[] = [];
  while (jobs.length && base.length < 6) base.push(...jobs);
  const displayJobs = [...base, ...base];

  return (
    <div className="w-full border-y border-slate-100 bg-white/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden py-3 text-sm text-slate-700"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,165,233,.0), rgba(14,165,233,.35), rgba(14,165,233,.0))",
            }}
          />
          {/* w-max: -50% must be half the content, not half the box. ~9s per job keeps it readable. */}
          <div
            className="flex w-max whitespace-nowrap motion-reduce:[animation:none]"
            style={{ animation: `cdpl-marquee ${base.length * 9}s linear infinite` }}
          >
            {displayJobs.map((j, idx) => (
              <span key={`${j.id}-${idx}`} className="mx-4 inline-flex items-center gap-2">
                <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-800 text-[10px]">
                  {j.type}
                </span>
                <span className="font-semibold">{j.title}</span>
                <span className="text-slate-500">· {j.company} · {j.location} · {j.eventDate ? formatDate(j.eventDate) : formatDate(j.postedOn)}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

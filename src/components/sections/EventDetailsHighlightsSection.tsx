import type { PastEvent } from "@/data/eventsData";
import { CircleDot } from "lucide-react";

type Props = { event: PastEvent; fullWidth?: boolean };

export default function EventDetailsHighlightsSection({ event, fullWidth = false }: Props) {
  const wrap = fullWidth ? "max-w-none px-0" : "max-w-7xl px-4 sm:px-6 lg:px-8";
  const highlights = event.sessionHighlights ?? [];

  const ACCENTS = [
    { from: "#0ea5e9", to: "#06b6d4", ink: "#0c4a6e" }, // sky → cyan
    { from: "#10b981", to: "#22c55e", ink: "#065f46" }, // emerald → green
    { from: "#f59e0b", to: "#f97316", ink: "#ff8c00" }, // amber → orange
    { from: "#6366f1", to: "#8b5cf6", ink: "#3730a3" }, // indigo → violet
  ] as const;

  return (
    <section className="w-full text-neutral-900">
      {/* subtle section background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70rem 40rem at -10% -10%, rgba(14,165,233,.08), transparent 60%), radial-gradient(60rem 30rem at 110% 10%, rgba(6,182,212,.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#0f172a33 1px, transparent 1.4px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className={`relative mx-auto ${wrap} py-10`}>
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="relative py-6 px-3 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Content & Session Highlights</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {highlights.map((s, idx) => {
                const a = ACCENTS[idx % ACCENTS.length];
                return (
                  <div
                    key={s.title + idx}
                    className="group relative rounded-2xl p-[2px] transition-transform duration-300 will-change-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                  >
                    {/* inner card */}
                    <div className="rounded-[1rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
                      {/* faint grid inside only */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[1rem] opacity-[0.04]"
                        style={{
                          backgroundImage:
                            "linear-gradient(#0f172a33 1px, transparent 1px), linear-gradient(90deg,#0f172a33 1px, transparent 1px)",
                          backgroundSize: "22px 22px",
                        }}
                      />

                      {/* HEADER + LIST in one padded column; icon sits in the gutter */}
                      <div className="relative">
                        {/* icon in gutter (2.25rem) */}
                        <span
                          aria-hidden
                          className="absolute left-0 top-0 inline-grid size-9 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-black/5"
                          style={{ boxShadow: `0 0 0 3px ${a.from}1A` }}
                        >
                          <CircleDot className="size-5" style={{ color: a.from }} strokeWidth={2.5} />
                        </span>

                        {/* text column (title + list) */}
                        <div className="pl-12 text-left">
                          <h3 className="text-lg font-semibold tracking-tight" style={{ color: a.ink }}>
                            {s.title}
                          </h3>

                          <ul className="mt-3 space-y-2 text-[15px] text-neutral-800">
                            {s.points?.map((p: string, i: number) => (
                              <li key={p + i} className="relative pl-[2px]">
                                {/* bullet moved slightly right toward text */}
                                <span
                                  aria-hidden
                                  className="absolute -left-[1.35rem] top-2 inline-block h-2 w-2 rounded-full"
                                  style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                                />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* hover underline */}
                      <span
                        aria-hidden
                        className="pointer-events-none mt-4 block h-px origin-left scale-x-0 opacity-90 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {event.specialSession ? (
              <div className="mt-8">
                <div
                  className="relative rounded-2xl p-[2px]"
                  style={{ backgroundImage: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
                >
                  <div className="relative rounded-[1rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                    <h3 className="text-lg font-bold" style={{ color: "#4c1d95" }}>
                      Special Session
                    </h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: "#6d28d9" }}>
                      {event.specialSession.speaker}
                    </p>
                    <p className="mt-2 text-sm text-neutral-800">{event.specialSession.topic}</p>

                    <ul className="mt-3 space-y-2 text-[15px] text-neutral-800 pl-12 text-left relative">
                      <span aria-hidden className="absolute left-0 top-0 inline-block size-9 rounded-lg opacity-0" />
                      {event.specialSession.highlights?.map((h: string, i: number) => (
                        <li key={h + i} className="relative pl-[2px]">
                          <span className="absolute -left-[1.35rem] top-[7px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

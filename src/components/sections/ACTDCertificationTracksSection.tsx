"use client";

export default function ACTDCertificationTracksSection() {
  const tracks = [
    {
      name: "Core Concepts",
      points: ["Policies & scope", "Assessment patterns", "Readiness metrics"],
    },
    {
      name: "Practical Skills",
      points: ["Scenario tasks", "Labs & reviews", "Rubric alignment"],
    },
    {
      name: "Capstone + Interview",
      points: ["End-to-end case", "Storytelling", "Mock interviews"],
    },
  ];

  // Clean, blended skins rotated across cards
  const SKINS: { tint: string; overlay: string; edge?: string }[] = [
    {
      // Brand orange with micro-dots
      tint: "rgba(255,140,0,0.10)",
      overlay:
        "radial-gradient(120% 80% at 0% 0%, rgba(255,140,0,.16), transparent 55%),repeating-linear-gradient(45deg, rgba(255,140,0,.10) 0 2px, transparent 2px 6px)",
      edge: "radial-gradient(60% 60% at 100% 0%, rgba(255,140,0,.14), transparent 60%)",
    },
    {
      // Sky blue with soft stripes
      tint: "rgba(14,165,233,0.10)",
      overlay:
        "conic-gradient(from 0deg at 100% 0%, rgba(14,165,233,.16), transparent 40%),repeating-linear-gradient(-45deg, rgba(14,165,233,.10) 0 2px, transparent 2px 6px)",
    },
    {
      // Violet mesh
      tint: "rgba(157,123,255,0.10)",
      overlay:
        "radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.18), transparent 55%),repeating-linear-gradient(90deg, rgba(157,123,255,.10) 0 1px, transparent 1px 5px)",
    },
  ];

  return (
    <section id="actd-tracks" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Training tracks</h2>
          <p className="mt-2 max-w-3xl text-[15px] text-slate-800 sm:text-base">
            Progress with short sprints, hands-on labs, and structured reviews. Each track culminates in a capstone.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t, i) => {
            const skin = SKINS[i % SKINS.length];
            return (
              <div
                key={t.name}
                className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition
                           hover:-translate-y-0.5 hover:shadow-md duration-300 will-change-transform"
              >
                {/* Blended background layers */}
                <span aria-hidden className="absolute inset-0" style={{ backgroundColor: skin.tint }} />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
                  style={{ backgroundImage: skin.overlay }}
                />
                {skin.edge && (
                  <span aria-hidden className="absolute inset-0 rounded-2xl" style={{ backgroundImage: skin.edge }} />
                )}
                {/* Soft inner ring & left accent */}
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: "rgba(255,140,0,0.18)" }}
                />

                {/* Content */}
                <div className="relative">
                  <h3 className="text-sm font-extrabold text-slate-900">{t.name}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-slate-800">
                    {t.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

export default function AAACertificationWhySection() {
  const items = [
    { t: "Industry-aligned", d: "Mapped to AAA blueprint with graded labs & capstone." },
    { t: "Mentor guidance", d: "1:1 feedback on projects and exam readiness." },
    { t: "Outcome-focused", d: "Portfolio artifacts recruiters can evaluate." },
    { t: "Flexible learning", d: "Live + recorded sessions, weekend cohorts." },
    { t: "Shareable badge", d: "Verifiable digital certificate with unique ID." },
    { t: "Hiring visibility", d: "Surfaced to CDPL partner network." },
  ];

  /** Distinct, clean, futuristic skins per card (rotates by index) */
  const SKINS: { tint: string; overlay: string; edge?: string }[] = [
    // Brand orange + micro dots
    {
      tint: "rgba(255,140,0,0.12)",
      overlay:
        "radial-gradient(120% 80% at 0% 0%, rgba(255,140,0,.18), transparent 55%),repeating-linear-gradient(45deg, rgba(255,140,0,.12) 0 2px, transparent 2px 6px)",
      edge:
        "radial-gradient(60% 60% at 100% 0%, rgba(255,140,0,.16), transparent 60%)",
    },
    // Sky blue stripes
    {
      tint: "rgba(14,165,233,0.10)",
      overlay:
        "conic-gradient(from 0deg at 100% 0%, rgba(14,165,233,.16), transparent 40%),repeating-linear-gradient(-45deg, rgba(14,165,233,.12) 0 2px, transparent 2px 6px)",
    },
    // Violet mesh
    {
      tint: "rgba(157,123,255,0.10)",
      overlay:
        "radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.18), transparent 55%),repeating-linear-gradient(90deg, rgba(157,123,255,.12) 0 1px, transparent 1px 5px)",
    },
    // Emerald hatch
    {
      tint: "rgba(16,185,129,0.10)",
      overlay:
        "conic-gradient(from 180deg at 0% 100%, rgba(16,185,129,.18), transparent 45%),repeating-linear-gradient(30deg, rgba(16,185,129,.12) 0 2px, transparent 2px 6px)",
    },
    // Rose diagonals
    {
      tint: "rgba(236,72,153,0.10)",
      overlay:
        "radial-gradient(90% 70% at 100% 100%, rgba(236,72,153,.18), transparent 55%),repeating-linear-gradient(135deg, rgba(236,72,153,.12) 0 2px, transparent 2px 7px)",
    },
    // Amber weave
    {
      tint: "rgba(245,158,11,0.10)",
      overlay:
        "conic-gradient(from 90deg at 0% 0%, rgba(245,158,11,.18), transparent 40%),repeating-linear-gradient(60deg, rgba(245,158,11,.12) 0 2px, transparent 2px 8px)",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Why AAA with <span style={{ color: "#ff8c00" }}>CDPL</span>
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] text-slate-800 sm:text-base">
            Cinute Digital Pvt. Ltd. blends instructor expertise, labs, and structured assessment for employability.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => {
            const skin = SKINS[i % SKINS.length];
            return (
              <li
                key={f.t}
                className="relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition
                           hover:shadow-md hover:-translate-y-0.5 will-change-transform duration-300"
              >
                {/* Futuristic blend layers */}
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{ backgroundColor: skin.tint }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-90 rounded-2xl [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
                  style={{ backgroundImage: skin.overlay }}
                />
                {skin.edge && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundImage: skin.edge }}
                  />
                )}
                {/* Subtle inner ring + left accent strip */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: "rgba(255,140,0,0.18)" }}
                />

                {/* Content */}
                <div className="relative">
                  <h3 className="text-sm font-extrabold text-slate-900">{f.t}</h3>
                  <p className="mt-2 text-sm text-slate-800">{f.d}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

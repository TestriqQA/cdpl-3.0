import { Users, TrendingUp, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, label: "Learners Placed", value: "500+" },
  { icon: TrendingUp, label: "Avg Package Growth", value: "1.5×" },
  { icon: MapPin, label: "Cities Covered", value: "50+" },
  { icon: ShieldCheck, label: "Hiring Partners", value: "50+" },
];

/** Per-card gradient classes — cycles if more cards are added */
const VALUE_GRADIENTS: string[] = [
  // Brand orange
  "bg-gradient-to-r from-[#ff8c00] via-[#ffb558] to-[#ffd19e] group-hover:from-[#ff7a00] group-hover:via-[#ffb558] group-hover:to-[#ffc978]",
  // Blue
  "bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#93c5fd] group-hover:from-[#1d4ed8] group-hover:via-[#60a5fa] group-hover:to-[#93c5fd]",
  // Emerald / Green
  "bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] group-hover:from-[#059669] group-hover:via-[#34d399] group-hover:to-[#6ee7b7]",
  // Purple
  "bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#c4b5fd] group-hover:from-[#6d28d9] group-hover:via-[#a78bfa] group-hover:to-[#c4b5fd]",
  // Rose / Pink
  "bg-gradient-to-r from-[#e11d48] via-[#fb7185] to-[#fda4af] group-hover:from-[#be123c] group-hover:via-[#fb7185] group-hover:to-[#fda4af]",
  // Teal / Cyan
  "bg-gradient-to-r from-[#06b6d4] via-[#67e8f9] to-[#a5f3fc] group-hover:from-[#0891b2] group-hover:via-[#67e8f9] group-hover:to-[#a5f3fc]",
];

type Props = {
  contained?: boolean;
};

export default function PlacementsHighlightsStatsSection({ contained = false }: Props) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <section className="w-full py-10 sm:py-12" aria-label="CDPL placements highlights">
      <Wrapper>
        {/* Anchor placed exactly where the content should align after jump */}
        <div
          id="placements-highlights"
          className="h-0 scroll-mt-[72px] md:scroll-mt-[88px] lg:scroll-mt-[104px]"
        />

        {/* 1 col <640, 2 cols 640–1023, 4 cols ≥1024 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {stats.map((s, i) => {
            const gradient = VALUE_GRADIENTS[i % VALUE_GRADIENTS.length];
            return (
              <button
                key={s.label}
                type="button"
                className="group m-0 w-full text-left rounded-2xl border border-slate-200 bg-white shadow-sm
                           outline-none ring-0 transition-all duration-200 hover:border-slate-300
                           hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg
                           focus-visible:ring-2 focus-visible:ring-[#ff8c00]/40 overflow-hidden
                           /* Phone: natural height */
                           aspect-auto
                           /* Tablet (640–767): keep gentle ratio as before */
                           sm:aspect-[5/4]
                           /* ≥768: tighten height & remove ratios to avoid tall empty cards */
                           md:aspect-auto md:min-h-[120px] md:max-h-[160px]
                           lg:aspect-auto lg:min-h-[130px] lg:max-h-[170px]"
              >
                {/* content */}
                <div className="flex h-full flex-col p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center transition-transform duration-200 group-hover:scale-105 group-hover:rotate-2">
                      <s.icon className="h-5 w-5 text-brand" />
                    </span>
                    <div className="text-sm sm:text-base font-medium text-slate-900">{s.label}</div>
                  </div>

                  {/* Number — distinct gradient per card */}
                  <div
                    className={`mt-1.5 sm:mt-2 text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text transition-all duration-200 group-hover:-translate-y-0.5 ${gradient}`}
                  >
                    {s.value}
                  </div>

                  <div className="mt-auto" />

                  <div className="h-[2px] w-full rounded-full bg-transparent transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-[#ff8c00]/70 group-hover:to-[#ffd19e]/70" />
                </div>
              </button>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}

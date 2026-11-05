import { Users, TrendingUp, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, label: "Learners Placed", value: "500+" },
  { icon: TrendingUp, label: "Avg Package Growth", value: "1.5×" },
  { icon: MapPin, label: "Cities Covered", value: "50+" },
  { icon: ShieldCheck, label: "Hiring Partners", value: "50+" },
];

/** Per-card number colour — cycles if more cards are added */
const VALUE_COLORS: string[] = ["text-[#ff8c00]", "text-[#2563eb]", "text-[#10b981]", "text-[#7c3aed]", "text-[#e11d48]", "text-[#06b6d4]"];

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

        {/* 2 cols <1024, 4 cols ≥1024 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {stats.map((s, i) => {
            const color = VALUE_COLORS[i % VALUE_COLORS.length];
            return (
              <div
                key={s.label}
                className="group m-0 w-full text-left rounded-2xl border border-slate-200 bg-white shadow-sm
                           transition-all duration-200 hover:border-slate-300
                           hover:-translate-y-1 hover:shadow-lg overflow-hidden
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
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center transition-transform duration-200 group-hover:scale-105 group-hover:rotate-2">
                      <s.icon className="h-5 w-5 text-brand" />
                    </span>
                    <div className="text-center text-sm sm:text-base font-medium text-slate-900">{s.label}</div>
                  </div>

                  {/* Number — distinct gradient per card */}
                  <div className="flex flex-1 items-center justify-center py-2">
                    <div
                      className={`text-4xl sm:text-5xl font-extrabold transition-transform duration-200 group-hover:-translate-y-0.5 ${color}`}
                    >
                      {s.value}
                    </div>
                  </div>

                  <div className="h-[2px] w-full rounded-full bg-transparent transition-colors duration-200 group-hover:bg-gradient-to-r group-hover:from-[#ff8c00]/70 group-hover:to-[#ffd19e]/70" />
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}

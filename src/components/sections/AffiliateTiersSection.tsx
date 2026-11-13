// src/components/sections/AffiliateTiersSection.tsx
import { Crown, Sparkles, Rocket } from "lucide-react";
import AffiliateSectionHeader from "./AffiliateSectionHeader";

const tiers = [
  {
    name: "Starter",
    rate: "15%",
    icon: Sparkles,
    bullets: ["Up to 10 referrals / month", "Standard creatives & UTMs", "Email support"],
  },
  {
    name: "Pro",
    rate: "20%",
    icon: Crown,
    highlight: true,
    bullets: ["11–40 referrals / month", "Co-branded landing page", "Quarterly bonus eligibility", "Priority support"],
  },
  {
    name: "Elite",
    rate: "25%",
    icon: Rocket,
    bullets: ["40+ referrals / month", "Custom funnels & webinars", "Dedicated partner manager", "Quarterly + campaign bonuses"],
  },
];

export default function AffiliateTiersSection() {
  return (
    <div>
      <AffiliateSectionHeader
        id="tiers-heading"
        eyebrow="Commission tiers"
        title="Earn more as you"
        accent="grow"
        subtitle="Scale your earnings with transparent, performance-based tiers."
        center
      />

      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {tiers.map((t) => {
          const Icon = t.icon;
          return (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-3xl bg-white p-7 transition hover:-translate-y-0.5 ${
                t.highlight
                  ? "border-2 border-brand shadow-xl shadow-orange-100"
                  : "border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-md">
                  Most Popular
                </span>
              )}
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${t.highlight ? "bg-brand text-white shadow-md" : "bg-orange-50 text-brand ring-1 ring-orange-100"}`}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
              </div>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-brand">{t.rate}</span>
                <span className="text-sm font-medium text-slate-500">commission</span>
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5 text-[15px] text-slate-600">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}

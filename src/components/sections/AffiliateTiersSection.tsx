// src/components/sections/AffiliateTiersSection.tsx
import { Crown, Sparkles, Rocket } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    rate: "15%",
    icon: Sparkles,
    bullets: [
      "Up to 10 referrals / month",
      "Standard creatives & UTMs",
      "Email support",
    ],
  },
  {
    name: "Pro",
    rate: "20%",
    icon: Crown,
    highlight: true,
    bullets: [
      "11–40 referrals / month",
      "Co-branded landing page",
      "Quarterly bonus eligibility",
      "Priority support",
    ],
  },
  {
    name: "Elite",
    rate: "25%",
    icon: Rocket,
    bullets: [
      "40+ referrals / month",
      "Custom funnels & webinars",
      "Dedicated partner manager",
      "Quarterly + campaign bonuses",
    ],
  },
];

export default function AffiliateTiersSection() {
  return (
    <div id="tiers">
      <h2 className="text-3xl font-bold tracking-tight">Commission tiers</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Scale your earnings with transparent, performance-based tiers.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => {
          const Icon = t.icon;
          return (
            <article
              key={t.name}
              className={[
                "relative rounded-3xl border bg-white p-6 shadow-[0_16px_45px_-24px_rgba(2,6,23,0.25)]",
                t.highlight ? "border-slate-900" : "border-slate-200/70",
              ].join(" ")}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-6 rounded-full border border-slate-900 bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                  Most Popular
                </div>
              )}
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                <Icon className="h-5 w-5 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-4xl font-extrabold tracking-tight">{t.rate}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
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

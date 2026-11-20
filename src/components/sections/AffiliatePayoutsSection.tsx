// src/components/sections/AffiliatePayoutsSection.tsx
import { CalendarClock, Banknote, FileText, type LucideIcon } from "lucide-react";
import AffiliateSectionHeader from "./AffiliateSectionHeader";

const cards: { title: string; sub: string; Icon: LucideIcon; tile: string }[] = [
  {
    title: "Monthly payouts",
    sub: "Paid on net-30 via bank transfer or PayPal with detailed statements.",
    Icon: CalendarClock,
    tile: "bg-brand",
  },
  {
    title: "Fair attribution",
    sub: "60-day cookie window. Last click, anti-fraud filters, and multi-channel UTMs.",
    Icon: Banknote,
    tile: "bg-sky-600",
  },
  {
    title: "Invoices & taxes",
    sub: "Automatic statements and downloadable invoices for bookkeeping.",
    Icon: FileText,
    tile: "bg-emerald-600",
  },
];

export default function AffiliatePayoutsSection() {
  return (
    <div>
      <AffiliateSectionHeader
        id="payouts-heading"
        eyebrow="Payouts & tracking"
        title="Predictable payouts,"
        accent="transparent tracking"
        subtitle="We keep payouts predictable and tracking transparent so you always know where you stand."
      />

      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {cards.map(({ title, sub, Icon, tile }) => (
          <li key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-md ${tile}`} aria-hidden="true">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-4 text-[15px] leading-6 text-slate-600">{sub}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

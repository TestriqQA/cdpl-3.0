// src/components/sections/LocationsBenefitsSection.tsx
import type { LucideIcon } from "lucide-react";
import { Briefcase, Globe2, Layers, Smartphone } from "lucide-react";

const BENEFITS: { Icon: LucideIcon; title: string; desc: string; strip: string; tile: string }[] = [
  { Icon: Globe2, title: "Nationwide Reach", desc: "Mira Road campus plus live-online batches anywhere in India.", strip: "bg-brand", tile: "bg-brand" },
  { Icon: Briefcase, title: "92% Placement", desc: "Job assistance in local tech hubs.", strip: "bg-emerald-600", tile: "bg-emerald-600" },
  { Icon: Layers, title: "Flexible Modes", desc: "Online, offline, hybrid learning options.", strip: "bg-sky-600", tile: "bg-sky-600" },
  { Icon: Smartphone, title: "Mobile-First", desc: "Access materials anytime, anywhere.", strip: "bg-violet-600", tile: "bg-violet-600" },
];

/** Why learners pick us, as four cards with a coloured top strip (as on About). Server component. */
export default function LocationsBenefitsSection() {
  return (
    <section aria-labelledby="locations-benefits-heading" className="bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Why CDPL
          </span>
          <h2 id="locations-benefits-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why choose our <span className="text-brand">locations</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ Icon, title, desc, strip, tile }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${strip}`} />
              <span className={`mx-auto grid h-12 w-12 place-items-center rounded-xl text-white ${tile}`} aria-hidden="true">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mx-auto mt-2 max-w-[24ch] text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

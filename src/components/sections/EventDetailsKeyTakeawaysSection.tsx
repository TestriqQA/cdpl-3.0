// src/components/sections/EventDetailsKeyTakeawaysSection.tsx
type Takeaway = {
  title: string;
  description: string;
};

type Props = { takeaways: Takeaway[]; fullWidth?: boolean };

export default function EventDetailsKeyTakeawaysSection({ takeaways, fullWidth = false }: Props) {
  const wrap = fullWidth ? "max-w-none px-0" : "max-w-7xl px-4 sm:px-6 lg:px-8";

  return (
    <section className="w-full text-neutral-900">
      <div className={`mx-auto ${wrap} py-10`}>
        {/* Clean filled gradient (emerald → teal), dark text for legibility */}
        <div
          className="relative w-full overflow-hidden rounded-2xl border border-black/10 shadow-sm"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,185,129,.14), rgba(20,184,166,.14))", // emerald-500 → teal-500 @ ~14%
          }}
        >
          <div className="relative p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Key Takeaways</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-700">✓</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">{t.title}</span>
                    <span className="text-slate-900/90 text-sm">{t.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

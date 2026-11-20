// Shared header for the /cdpl-affiliate-program sections: orange label pill,
// dark title with the key phrase in brand orange, optional subtitle.
export default function AffiliateSectionHeader({
  id,
  eyebrow,
  title,
  accent,
  subtitle,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  accent: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <header className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title} <span className="text-brand">{accent}</span>
      </h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>}
    </header>
  );
}

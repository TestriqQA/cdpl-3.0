import type { ReactNode } from 'react';

/**
 * The homepage section header: orange pill, large heading with a brand-orange
 * word, short intro. Server-safe (no hooks).
 */
export default function SectionHeader({
  id,
  pill,
  title,
  intro,
  align = 'center',
  className = '',
}: {
  /** id of the h2, for the section's aria-labelledby */
  id: string;
  pill: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} mb-10 lg:mb-12 ${className}`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
        {pill}
      </span>
      <h2 id={id} className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-gray-600">{intro}</p>}
    </div>
  );
}

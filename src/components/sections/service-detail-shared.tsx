// Shared bits for the /services/[slug] sections. Server-only usage: the
// `import * as Icons` lookup stays out of client bundles as long as this
// module is imported from server components.
import * as Icons from 'lucide-react';
import type { ComponentType, ReactNode, SVGProps } from 'react';

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

/** Resolves a service's `iconName` (from Sanity or local data) to a Lucide icon. */
export function getServiceIcon(name: string): LucideIcon {
  const Icon = Icons[name as keyof typeof Icons];
  return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

/**
 * Rotating solid colours for icon tiles and step markers, so lists keep some
 * colour without per-card gradients. Literal class names, so Tailwind sees them.
 */
export const TILE_COLOURS = [
  'bg-brand',
  'bg-indigo-600',
  'bg-emerald-600',
  'bg-sky-600',
  'bg-rose-600',
  'bg-amber-500',
  'bg-purple-600',
] as const;

export const tileColour = (i: number) => TILE_COLOURS[i % TILE_COLOURS.length];

/** The homepage section header: orange pill, large heading, short intro. */
export function ServiceSectionHeader({
  id,
  pill,
  title,
  intro,
  align = 'center',
}: {
  id: string;
  pill: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-10 max-w-3xl text-center lg:mb-12' : 'mb-8 max-w-3xl'}>
      <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
        {pill}
      </span>
      <h2 id={id} className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-gray-600">{intro}</p>}
    </div>
  );
}

'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { FALLBACK_STATS, type SiteStats } from '@/lib/siteStats';

const SiteStatsContext = createContext<SiteStats>(FALLBACK_STATS);

export function SiteStatsProvider({ value, children }: { value: SiteStats; children: ReactNode }) {
  return <SiteStatsContext.Provider value={value}>{children}</SiteStatsContext.Provider>;
}

export function useSiteStats() {
  return useContext(SiteStatsContext);
}

// Renders a live stat as text; usable from server and client components.
export function SiteStat({ k }: { k: keyof SiteStats['text'] }) {
  return <>{useSiteStats().text[k]}</>;
}

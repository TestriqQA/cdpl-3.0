// SeoHead.tsx – injects canonical link based on current path
"use client";
import { usePathname } from "next/navigation";

export default function SeoHead() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cinutedigital.com";
  const canonical = `${baseUrl}${pathname}`;
  return <link rel="canonical" href={canonical} />;
}

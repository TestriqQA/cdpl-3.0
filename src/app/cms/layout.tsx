import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";

export const metadata: Metadata = generateMetadata({
  title: "Course Management System - Cinute Digital Studio",
  description: "Secure administrative portal to manage course content, SEO metadata, and digital assets for Cinute Digital Pvt. Ltd.",
  url: "/cms",
  noindex: true,
  nofollow: true,
});

// BLG-016: /cms is a noindex,nofollow admin route — search engines ignore
// structured data on it, so the JSON-LD (WebPage/FAQPage/HowTo/etc.) that
// was emitted here via generateCmsPageAllSchemas was pure dead weight.
// Removed.
export default function CmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

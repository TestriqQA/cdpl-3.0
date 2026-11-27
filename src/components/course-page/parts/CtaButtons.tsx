import Link from "next/link";
import { ArrowRight, ArrowDown, CalendarCheck, CloudDownload, Download, Mail, Phone, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EnrollButton from "@/components/course-islands/EnrollButton";
import SyllabusButton from "@/components/course-islands/SyllabusButton";
import CareerSessionButton from "@/components/course-islands/CareerSessionButton";
import DemoButton from "@/components/course-islands/DemoButton";
import BrochureButton from "@/components/course-islands/BrochureButton";
import VideoButton from "@/components/course-islands/VideoButton";
import ScrollToButton from "./ScrollToButton";
import type { CtaAction } from "@/types/course-page";

export const PHONE = "tel:+917888383788";
const EMAIL = "mailto:contact@cinutedigital.com";
export const WHATSAPP = "https://wa.me/917888383788";

// Orange is kept for the hero and the closing band; buttons inside the body
// sections are dark/neutral so the page isn't orange from top to bottom.
const STYLES = {
  brand: {
    primary: "bg-brand text-white shadow-md shadow-orange-200 hover:brightness-95",
    secondary: "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
  },
  neutral: {
    primary: "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
    secondary: "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50",
  },
  band: {
    primary: "bg-white text-orange-600 shadow-md hover:bg-orange-50",
    secondary: "border-2 border-white/80 text-white hover:bg-white/10",
  },
};

const BASE =
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:text-base";

// Kinds whose icon sits before the label (contact actions, play).
const LEADING_ICON: CtaAction["kind"][] = ["tel", "mailto", "whatsapp", "video", "demo"];

function ActionIcon({ kind }: { kind: CtaAction["kind"] }) {
  const cls = "h-5 w-5 shrink-0";
  switch (kind) {
    case "syllabus":
      return <CloudDownload className={`${cls} transition-transform group-hover:translate-y-0.5`} aria-hidden="true" />;
    case "brochure":
      return <Download className={`${cls} transition-transform group-hover:translate-y-0.5`} aria-hidden="true" />;
    case "video":
      return <Play className={cls} aria-hidden="true" />;
    case "scroll":
      return <ArrowDown className={`${cls} transition-transform group-hover:translate-y-0.5`} aria-hidden="true" />;
    case "tel":
      return <Phone className={cls} aria-hidden="true" />;
    case "mailto":
      return <Mail className={cls} aria-hidden="true" />;
    case "whatsapp":
      return <FaWhatsapp className={cls} aria-hidden="true" />;
    case "demo":
      return <CalendarCheck className={cls} aria-hidden="true" />;
    default:
      return <ArrowRight className={`${cls} transition-transform group-hover:translate-x-1`} aria-hidden="true" />;
  }
}

/**
 * Renders a row of course CTAs. Enrol / syllabus / career-session open their
 * lead modals through the shared client islands; the rest are plain links.
 */
export default function CtaButtons({
  actions,
  courseName,
  source,
  tone = "neutral",
  center = true,
  className = "",
}: {
  actions?: CtaAction[];
  /** Omitted on category hubs, where no single course applies. */
  courseName?: string;
  /** Lead source prefix, e.g. "API Testing Course Page - Hero Section". */
  source: string;
  tone?: keyof typeof STYLES;
  center?: boolean;
  className?: string;
}) {
  if (!actions?.length) return null;
  const hasPrimary = actions.some((a) => a.primary);

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${center ? "sm:justify-center" : ""} ${className}`}>
      {actions.map((a, i) => {
        const isPrimary = hasPrimary ? !!a.primary : i === 0;
        const style = STYLES[tone][isPrimary ? "primary" : "secondary"];
        const cls = `${BASE} ${style}`;
        const content = (
          <>
            {LEADING_ICON.includes(a.kind) && <ActionIcon kind={a.kind} />}
            {a.label}
            {!LEADING_ICON.includes(a.kind) && <ActionIcon kind={a.kind} />}
          </>
        );
        const leadSource = `${source} - ${a.label}`;

        switch (a.kind) {
          case "enroll":
            return (
              <EnrollButton key={i} className={cls} source={leadSource} courseName={courseName} ariaLabel={a.ariaLabel}>
                {content}
              </EnrollButton>
            );
          case "syllabus":
            return (
              <SyllabusButton key={i} className={cls} source={leadSource} courseName={courseName} ariaLabel={a.ariaLabel}>
                {content}
              </SyllabusButton>
            );
          case "careerSession":
            return (
              <CareerSessionButton
                key={i}
                className={cls}
                source={leadSource}
                courseName={courseName}
                ariaLabel={a.ariaLabel}
                title={a.modalTitle}
              >
                {content}
              </CareerSessionButton>
            );
          case "demo":
            return (
              <DemoButton key={i} className={cls} source={leadSource} ariaLabel={a.ariaLabel}>
                {content}
              </DemoButton>
            );
          case "brochure":
            return (
              <BrochureButton key={i} className={cls} source={leadSource} ariaLabel={a.ariaLabel}>
                {content}
              </BrochureButton>
            );
          case "video":
            return (
              <VideoButton key={i} className={cls} videoUrl={a.href ?? ""} ariaLabel={a.ariaLabel}>
                {content}
              </VideoButton>
            );
          case "scroll":
            return (
              <ScrollToButton key={i} targetId={a.href ?? "curriculum"} className={cls} ariaLabel={a.ariaLabel}>
                {content}
              </ScrollToButton>
            );
          default: {
            const href =
              a.href ?? (a.kind === "tel" ? PHONE : a.kind === "mailto" ? EMAIL : a.kind === "whatsapp" ? WHATSAPP : "/contact-us");
            const external = a.kind === "whatsapp";
            return (
              <Link
                key={i}
                href={href}
                className={cls}
                aria-label={a.ariaLabel}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {content}
              </Link>
            );
          }
        }
      })}
    </div>
  );
}

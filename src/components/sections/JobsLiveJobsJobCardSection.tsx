"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  Clock,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Share2,
  Tag,
} from "lucide-react";
import type { Job } from "@/lib/jobsData";

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : "";

type AnyJob = Job & {
  bannerImage?: string;
  bannerImageAlt?: string;
  tags?: string[];
};

/**
 * Session flag set when a job is opened from the listing, so the job page's
 * "Back to all jobs" can return to the listing's scroll position (history back).
 */
export const FROM_LISTING_KEY = "cdpl:jobs-from-listing";

const markFromListing = () => {
  try {
    sessionStorage.setItem(FROM_LISTING_KEY, "1");
  } catch { }
};

function Chip({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "brand" | "neutral" }) {
  return (
    <span
      className={
        tone === "brand"
          ? "rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-orange-200"
          : "rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
      }
    >
      {children}
    </span>
  );
}

const TECH_DICT = [
  "jmeter", "selenium", "postman", "restassured", "rest assured", "cypress", "playwright", "appium",
  "java", "python", "javascript", "typescript", "sql", "mysql", "postgres", "mongodb", "jenkins",
  "docker", "kubernetes", "aws", "azure", "gcp", "react", "node", "next.js", "ci/cd",
];

function useTechStack(job: AnyJob) {
  return useMemo(() => {
    const hay = [job.title, ...(job.highlights || []), ...(job.responsibilities || [])].join(" ").toLowerCase();
    const found = new Set<string>();
    for (const k of TECH_DICT) if (hay.includes(k)) found.add(k.replace(/\brest assured\b/, "Rest Assured"));
    const title = (s: string) =>
      s
        .split(/[\s/]+/)
        .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
        .join(" ");
    return Array.from(found).map((t) => t.replace("next.js", "Next.js")).map(title).slice(0, 12).sort();
  }, [job.title, job.highlights, job.responsibilities]);
}

const OUTLINED = "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-brand hover:text-brand";
const PRIMARY = "bg-brand text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg";

/** Apply actions. With `primary`, the first one shown is the orange main button. */
function ApplyButtons({ job, size = "md", primary = false }: { job: AnyJob; size?: "sm" | "md"; primary?: boolean }) {
  const pad = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm";
  const emailStyle = primary ? PRIMARY : OUTLINED;
  const linkStyle = primary && !job.applyEmail ? PRIMARY : OUTLINED;
  return (
    <>
      {job.applyEmail && (
        <a
          href={`mailto:${job.applyEmail}`}
          className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${emailStyle} ${pad}`}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Apply via Email
        </a>
      )}
      {job.applyLink && (
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${linkStyle} ${pad}`}
        >
          Apply Online
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
    </>
  );
}

function ShareButton({ job, onShare, isCopied }: { job: Job; onShare: (job: Job) => void; isCopied: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onShare(job)}
      aria-label={isCopied ? `Link to ${job.title} copied` : `Share ${job.title}`}
      title={isCopied ? "Link copied" : "Share"}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-orange-50 hover:text-brand"
    >
      {isCopied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Share2 className="h-4 w-4" aria-hidden="true" />}
      {isCopied ? "Copied" : "Share"}
    </button>
  );
}

/**
 * Job card. `compact` (listing): the essentials and a link to the job's own
 * page. `full` (job page): everything, including banner, responsibilities,
 * venue and contacts.
 */
export function JobsLiveJobsJobCardSection({
  job,
  onShare,
  isCopied,
  variant = "full",
}: {
  job: AnyJob;
  onShare: (job: Job) => void;
  isCopied: boolean;
  variant?: "compact" | "full";
}) {
  const tech = useTechStack(job);
  const dateText = job.eventDate ? `Event: ${formatDate(job.eventDate)}` : job.postedOn ? `Posted: ${formatDate(job.postedOn)}` : "";
  // #openings lands on the job card itself instead of the top of the hero.
  const href = `/jobs/live-jobs/${job.id}#openings`;

  const meta = (
    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
      <span className="inline-flex items-center gap-1.5">
        <Building2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
        {job.company}
      </span>
      {job.location && (
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
          {job.location}
        </span>
      )}
      {dateText && (
        <span className="inline-flex items-center gap-1.5" suppressHydrationWarning>
          <CalendarDays className="h-4 w-4 text-slate-400" aria-hidden="true" />
          {dateText}
        </span>
      )}
    </p>
  );

  const chips = (
    <div className="mt-4 flex flex-wrap gap-2">
      {job.type && <Chip tone="brand">{job.type}</Chip>}
      {job.mode && <Chip tone="brand">{job.mode}</Chip>}
      {job.tags?.map((t) => <Chip key={t}>{t}</Chip>)}
      {job.exp && <Chip>Exp: {job.exp}</Chip>}
      {job.salary && <Chip>{job.salary}</Chip>}
    </div>
  );

  if (variant === "compact") {
    return (
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg sm:p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md" aria-hidden="true">
            <Briefcase className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-snug text-gray-900">
              <Link href={href} onClick={markFromListing} className="transition-colors hover:text-brand">
                {job.title}
              </Link>
            </h3>
            {meta}
          </div>
        </div>

        {chips}

        {!!job.highlights?.length && (
          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-slate-600">{job.highlights.slice(0, 3).join(" • ")}</p>
        )}

        {!!tech.length && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tech.slice(0, 5).map((t) => (
              <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{t}</span>
            ))}
            {tech.length > 5 && <span className="px-1 py-0.5 text-xs text-slate-500">+{tech.length - 5} more</span>}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
          <Link
            href={href}
            onClick={markFromListing}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            View details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <ApplyButtons job={job} size="sm" />
          <span className="ml-auto">
            <ShareButton job={job} onShare={onShare} isCopied={isCopied} />
          </span>
        </div>
      </article>
    );
  }

  return <FullCard job={job} onShare={onShare} isCopied={isCopied} tech={tech} meta={meta} chips={chips} />;
}

/** A titled block inside the full card, divided from the one above. */
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 border-t border-slate-100 pt-5">
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </div>
  );
}

function FullCard({
  job,
  onShare,
  isCopied,
  tech,
  meta,
  chips,
}: {
  job: AnyJob;
  onShare: (job: Job) => void;
  isCopied: boolean;
  tech: string[];
  meta: React.ReactNode;
  chips: React.ReactNode;
}) {
  // Banner: only when one is set and it actually loads (tries common extensions for bare paths).
  const candidateSrcs = useMemo(() => {
    if (!job.bannerImage) return [] as string[];
    if (/\.(png|jpe?g|webp|gif|avif|svg)$/i.test(job.bannerImage)) return [job.bannerImage];
    return [".jpg", ".jpeg", ".png", ".webp"].map((e) => `${job.bannerImage}${e}`);
  }, [job.bannerImage]);
  const [imgIdx, setImgIdx] = useState(0);
  const [giveUp, setGiveUp] = useState(false);
  const currentSrc = candidateSrcs[imgIdx];
  const handleImgError = () => {
    if (imgIdx < candidateSrcs.length - 1) setImgIdx((i) => i + 1);
    else setGiveUp(true);
  };

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {currentSrc && !giveUp && (
          <aside className="order-1 w-full md:order-2 md:w-[300px] md:shrink-0 lg:w-[360px]">
            <div className="relative">
              <Image
                src={currentSrc}
                alt={job.bannerImageAlt || `${job.company} hiring`}
                title={job.bannerImageAlt || `${job.company} hiring`}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 360px"
                className="h-auto w-full rounded-2xl bg-white object-contain ring-1 ring-slate-200"
                decoding="async"
                quality={60}
                onError={handleImgError}
                onLoad={(e) => {
                  if (!e.currentTarget?.naturalWidth) handleImgError();
                }}
              />
              {(job.type || job.mode) && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  <Tag className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  {job.type || job.mode}
                </span>
              )}
            </div>
          </aside>
        )}

        <div className="order-2 min-w-0 md:order-1 md:flex-1">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md" aria-hidden="true">
              <Briefcase className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h3 className="text-2xl font-bold leading-tight text-gray-900">{job.title}</h3>
              {meta}
              {job.companySite && (
                <a
                  href={job.companySite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Company website
                </a>
              )}
            </div>
          </div>

          {chips}

          {!!job.highlights?.length && (
            <Block title="What we’re looking for">
              <ul className="space-y-1.5">
                {job.highlights.slice(0, 5).map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {!!job.responsibilities?.length && (
            <Block title="Roles & responsibilities">
              <ul className="space-y-1.5">
                {job.responsibilities.slice(0, 6).map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {!!tech.length && (
            <Block title="Tech stack">
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => <Chip key={t} tone="brand">{t}</Chip>)}
              </div>
            </Block>
          )}

          {(job.venue || job.eventDate || job.timeWindow) && (
            <Block title="Venue & schedule">
              {job.venue && (
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  {job.venue}
                </p>
              )}
              {(job.eventDate || job.timeWindow) && (
                <p className="mt-1 flex items-start gap-2" suppressHydrationWarning>
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  {job.eventDate ? formatDate(job.eventDate) : ""} {job.timeWindow ? `(${job.timeWindow})` : ""}
                </p>
              )}
            </Block>
          )}

          {Array.isArray(job.contacts) && job.contacts.length > 0 && (
            <Block title="Contacts">{job.contacts.slice(0, 3).join(" • ")}</Block>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
            <ApplyButtons job={job} primary />
            <span className="ml-auto">
              <ShareButton job={job} onShare={onShare} isCopied={isCopied} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

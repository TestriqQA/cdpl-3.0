"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  Briefcase,
  ExternalLink,
  Mail,
  Share2,
  Copy,
} from "lucide-react";
import type { Job } from "@/lib/jobsData";

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "";

type AnyJob = Job & {
  bannerImage?: string;
  bannerImageAlt?: string;
  tags?: string[];
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800">
      {children}
    </span>
  );
}

export function JobsLiveJobsJobCardSection({
  job,
  onShare,
  isCopied,
}: {
  job: AnyJob;
  onShare: (job: Job) => void;
  isCopied: boolean;
}) {
  const dateText = job.eventDate
    ? `Event: ${formatDate(job.eventDate)}`
    : job.postedOn
      ? `Posted: ${formatDate(job.postedOn)}`
      : "";

  const techFromText = (() => {
    const hay = [job.title, ...(job.highlights || []), ...(job.responsibilities || [])]
      .join(" ")
      .toLowerCase();
    const DICT = [
      "jmeter",
      "selenium",
      "postman",
      "restassured",
      "rest assured",
      "cypress",
      "playwright",
      "appium",
      "java",
      "python",
      "javascript",
      "typescript",
      "sql",
      "mysql",
      "postgres",
      "mongodb",
      "jenkins",
      "docker",
      "kubernetes",
      "aws",
      "azure",
      "gcp",
      "react",
      "node",
      "next.js",
      "ci/cd",
    ];
    const found = new Set<string>();
    for (const k of DICT) if (hay.includes(k)) found.add(k.replace(/\brest assured\b/, "Rest Assured"));
    const title = (s: string) =>
      s
        .split(/[\s/]+/)
        .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
        .join(" ");
    return Array.from(found)
      .map((t) => t.replace("next.js", "Next.js"))
      .map(title)
      .slice(0, 12)
      .sort();
  })();

  // --- IMAGE HANDLING ---
  // Only attempt to render an image if a bannerImage is explicitly provided.
  const hasBanner = Boolean(job.bannerImage);

  // Build candidate sources ONLY from bannerImage (no generic fallback),
  // so if it fails, we won't render any image area or badge.
  const candidateSrcs = useMemo(() => {
    if (!hasBanner) return [] as string[];
    const hasExt = (p?: string) => !!p && /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(p);
    const EXT_ORDER_GENERIC = [".jpg", ".jpeg", ".png", ".webp"];

    const expand = (base?: string, exts: string[] = EXT_ORDER_GENERIC) => {
      if (!base) return [] as string[];
      if (hasExt(base)) return [base];
      return exts.map((e) => `${base}${e}`);
    };

    return expand(job.bannerImage);
  }, [hasBanner, job.bannerImage]);

  const [imgIdx, setImgIdx] = useState(0);
  const [giveUp, setGiveUp] = useState(false);
  const currentSrc = candidateSrcs[imgIdx];

  const handleImgError = () => {
    if (imgIdx < candidateSrcs.length - 1) setImgIdx((i) => i + 1);
    else setGiveUp(true);
  };

  const imageBadge =
    job.type || job.mode || (job.eventDate ? formatDate(job.eventDate) : undefined);

  return (
    <article className="relative font-sans">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        {/* IMAGE — render ONLY if bannerImage exists AND successfully loads */}
        {hasBanner && !giveUp && currentSrc && (
          <aside
            className="
              order-1 md:order-2 md:self-start relative
              w-full md:w-[300px] lg:w-[340px] xl:w-[380px]
              md:shrink-0
            "
          >
            <Image
              src={currentSrc}
              alt={job.bannerImageAlt || `${job.company} hiring`}
              title={job.bannerImageAlt || `${job.company} hiring`}
              width={600}
              height={400}
              sizes="(max-width: 768px) 320px, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto rounded-2xl object-contain bg-white"
              priority={false}
              decoding="async"
              quality={60}
              onError={handleImgError}
              onLoad={(e) => {
                const img = e.currentTarget;
                if (!img?.naturalWidth) handleImgError();
              }}
            />

            {/* Badge/label ONLY if image rendered */}
            {imageBadge && (
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur-sm">
                🏷️
                <span className="truncate max-w-[240px] sm:max-w-[300px] md:max-w-[300px]">
                  {imageBadge}
                </span>
              </div>
            )}

            <div className="mt-2 flex justify-end">
              <button
                onClick={() => onShare(job)}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
                aria-label={`Share ${job.title}`}
                title={isCopied ? "Link copied!" : "Share"}
              >
                {isCopied ? (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5" />
                    Share
                  </>
                )}
              </button>
            </div>
          </aside>
        )}

        {/* MAIN CONTENT */}
        <div className="order-2 md:order-1 min-w-0 md:flex-1">
          <div className="flex items-start gap-3">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
              style={{
                background: "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)",
              }}
            >
              <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-xl font-extrabold leading-tight text-slate-900">
                {job.title}
              </h3>

              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600">
                <span className="inline-flex items-center">
                  🏢 {job.company}
                </span>

                {job.companySite && (
                  <a
                    href={job.companySite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 before:content-['•'] before:mr-2 before:text-slate-300"
                    title="Company website"
                  >
                    🔗 Visit site
                  </a>
                )}

                {job.location && (
                  <span className="inline-flex items-center before:content-['•'] before:mr-2 before:text-slate-300">
                    📍 {job.location}
                  </span>
                )}

                {dateText && (
                  <span className="inline-flex items-center before:content-['•'] before:mr-2 before:text-slate-300">
                    📅 {dateText}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Tags / meta */}
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags?.map((t) => <Pill key={t}>{t}</Pill>)}
            {job.type && <Pill>{job.type}</Pill>}
            {job.mode && <Pill>{job.mode}</Pill>}
            {job.exp && (
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                Exp: {job.exp}
              </span>
            )}
            {job.salary && (
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                {job.salary}
              </span>
            )}
          </div>

          {/* Highlights */}
          {!!job.highlights?.length && (
            <div className="mt-3">
              <h4 className="mb-1 text-sm font-semibold text-slate-900">What we’re looking for</h4>
              <div className="text-sm leading-relaxed text-slate-600">
                {job.highlights.slice(0, 5).map((h, i) => (
                  <span key={h}>{i > 0 && " • "} {h}</span>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {!!job.responsibilities?.length && (
            <div className="mt-4">
              <h4 className="mb-1 text-sm font-semibold text-slate-900">Roles & responsibilities</h4>
              <div className="text-sm leading-relaxed text-slate-600">
                {job.responsibilities.slice(0, 6).map((r, i) => (
                  <span key={i}>{i > 0 && " • "} {r}</span>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack (derived) */}
          {!!techFromText.length && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">🏷️ Tech stack</h4>
              <div className="flex flex-wrap gap-2">
                {techFromText.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Venue & schedule */}
          {(job.venue || job.eventDate || job.timeWindow || job.location) && (
            <div className="mt-5 border-t border-slate-100 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Venue & schedule</h4>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {job.venue && <p>• {job.venue}</p>}
                {(job.eventDate || job.timeWindow) && (
                  <p>• {job.eventDate ? formatDate(job.eventDate) : ""} {job.timeWindow ? `(${job.timeWindow})` : ""}</p>
                )}
              </div>
            </div>
          )}

          {/* Contacts */}
          {Array.isArray(job.contacts) && job.contacts.length > 0 && (
            <div className="mt-4 border-t border-slate-100 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Contacts</h4>
              <div className="mt-2 text-sm text-slate-600">
                {job.contacts.slice(0, 3).map((c, i) => (
                  <span key={i}>{i > 0 && " • "} {c}</span>
                ))}
              </div>
            </div>
          )}

          {/* Apply actions */}
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
            {job.applyEmail && (
              <a
                href={`mailto:${job.applyEmail}`}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Apply via Email
              </a>
            )}
            {job.applyLink && (
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm"
              >
                Apply Online <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            {(job.timeWindow || job.eventDate) && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                🕒 {job.timeWindow ?? formatDate(job.eventDate)}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

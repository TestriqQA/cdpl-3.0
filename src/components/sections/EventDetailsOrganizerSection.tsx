'use client';

import Image from "next/image";
import Link from "next/link";
import { Globe, Facebook, Instagram, Twitter, Youtube, ShieldCheck } from "lucide-react";
import type { PastEvent } from "@/data/eventsData";
import { CDPL_ORG } from "@/data/eventsData";
import { useState } from "react";

type Props = { event: PastEvent };

function SmartImage({
  src,
  fallbackSrc,
  alt,
  className,
  width = 96,
  height = 96,
  sizes = "96px",
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      onError={() => imgSrc !== fallbackSrc && setImgSrc(fallbackSrc)}
      className={className}
      priority={false}
    />
  );
}

function Social({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/5 transition hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${className}`}
    >
      {children}
    </a>
  );
}

// NOTE: use empty-destructure to satisfy type without an unused var
export default function EventDetailsOrganizerSection({ }: Props) {
  const name = CDPL_ORG.name;
  const logo = CDPL_ORG.logo || "/cdpl-logo.png";
  const desc = CDPL_ORG.description;

  const links = {
    website: "https://cinutedigita.com",
    facebook: "https://www.facebook.com/cinutedigital",
    instagram: "https://www.instagram.com/cinutedigital/",
    x: "https://x.com/cinutedigital",
    youtube: "https://www.youtube.com/@cinutedigital",
  };

  return (
    <section className="w-full bg-white text-slate-900">
      {/* No inner max-width: inherits from parent section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-900/5">
        {/* Section label */}
        <div className="px-6 pt-6 md:px-10 md:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
            Organizer
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 md:p-10 md:pt-6">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6">
            {/* Logo (flush) */}
            <div className="self-start">
              <div className="relative h-16 w-16 md:h-20 md:w-20 md:-ml-3 -mt-1">
                <SmartImage
                  src={logo}
                  fallbackSrc="/cdpl-logo.png"
                  alt={name}
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="min-w-0 self-start">
              {/* Title row */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                  {name}
                </h3>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200 self-start md:self-auto">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              {/* Small, consistent gap under title */}
              <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-slate-700">
                {desc}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Social href={links.website} label="Website" className="bg-slate-100 hover:bg-slate-200">
                  <Globe className="h-5 w-5 text-slate-700" />
                </Social>
                <Social href={links.facebook} label="Facebook" className="bg-[#1877F2]/10 hover:bg-[#1877F2]/20">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </Social>
                <Social href={links.instagram} label="Instagram" className="bg-pink-500/10 hover:bg-pink-500/20">
                  <Instagram className="h-5 w-5 text-pink-500" />
                </Social>
                <Social href={links.x} label="X (Twitter)" className="bg-slate-900/10 hover:bg-slate-900/20">
                  <Twitter className="h-5 w-5 text-slate-900" />
                </Social>
                <Social href={links.youtube} label="YouTube" className="bg-red-600/10 hover:bg-red-600/20">
                  <Youtube className="h-5 w-5 text-red-600" />
                </Social>
              </div>

              <div className="mt-4">
                <Link
                  href="/about-us"
                  className="group inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-sky-700/20 transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                >
                  More Info
                  <span className="sr-only"> about {name}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}

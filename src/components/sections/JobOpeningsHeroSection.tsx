import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  scrollToId?: string;
};

const BRAND_ORANGE = "#d04502";
const BRAND_BLUE = "#0069A8";

export default function JobOpeningsHeroSection({
  title,
  subtitle,
  ctaLabel = "Get started",
  scrollToId,
}: HeroProps) {
  // Split title into two parts (first half blue, second half orange)
  const [firstPart, secondPart] = (() => {
    const words = title.trim().split(/\s+/);
    if (words.length <= 1) return [title, ""]; // all blue if single word
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  })();

  return (
    <section className="relative bg-white">
      {/* soft CDPL glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,146,60,0.12)_0%,rgba(245,158,11,0.10)_40%,transparent_75%)]" />
      </div>

      {/* Container matches About hero; breadcrumb sits inside with same spacing */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb (same position/spacing as About) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              <Link href="/" className="hover:text-indigo-700">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="cursor-default">Jobs</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link href="/jobs/job-openings" className="font-semibold text-slate-900">Job openings</Link>
            </li>
          </ol>
        </nav>

        {/* Hero content */}
        <header>
          <h1 className="mx-auto max-w-4xl text-center text-3xl font-semibold sm:text-4xl">
            <span style={{ color: BRAND_BLUE }}>{firstPart}</span>
            {secondPart ? (
              <>
                {" "}
                <span style={{ color: BRAND_ORANGE }}>{secondPart}</span>
              </>
            ) : null}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              {subtitle}
            </p>
          )}

          <div className="mt-5 flex justify-center">
            <a
              href={`#${scrollToId ?? ""}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#d04502] px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
            >
              {ctaLabel}
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M6 14l8-8M10 6h4v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </header>
      </div>
    </section>
  );
}

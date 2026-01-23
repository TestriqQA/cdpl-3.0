// components/trainers/TrainersPartnerSection.tsx
import Image from "next/image";
import Link from "next/link";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type TrainersPartnerSectionProps = {
  logos?: Logo[];
  className?: string;
};

const DEFAULT_LOGOS: Logo[] = [
  { src: "/images/Skill-India-Color.svg", alt: "Skill India" },
  { src: "/images/ISO-9001.png", alt: "ISO 9001 Certified" },
  { src: "/images/Testriq-Logo-1.webp", alt: "Testriq — Hiring Partner" },
];

export default function TrainersPartnerSection({
  logos = DEFAULT_LOGOS,
  className = "",
}: TrainersPartnerSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Cinute Digital",
    sameAs: ["https://cinutedigital.com/"],
    alumni: [],
    makesOffer: {
      "@type": "Offer",
      category: "Professional Training",
      description:
        "Mentor-led IT training aligned to Skill India and ISO 9001 quality standards with active hiring partners.",
    },
    memberOf: [
      { "@type": "Organization", name: "Skill India" },
      { "@type": "Organization", name: "ISO 9001:2015" },
    ],
    knowsAbout: ["Manual Testing", "Automation Testing", "API Testing", "Data Science"],
    brand: {
      "@type": "Brand",
      name: "Cinute Digital",
      logo: "/images/brand-og.png",
    },
  };

  return (
    <section
      className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${className}`}
      aria-labelledby="partners-heading"
    >
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
        style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.20)" }} /* brand glow */
      >
        {/* Soft background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,140,0,.08), transparent 70%)" }}
        />

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#ff8c00" }}
              aria-hidden="true"
            />
            Trusted by industry & aligned with standards
          </p>

          <h2
            id="partners-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Hiring Partners & Accreditations
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-700 sm:text-base">
            Our mentor-led programs are <strong>Skill India</strong> aligned and run under
            <strong> ISO&nbsp;9001:2015 quality systems</strong>. Learners gain job-ready skills
            through real-world projects and interviews powered by active <strong>hiring partners</strong>.
          </p>

          {/* Trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-inset ring-orange-200">
              ISO 9001:2015 Certified
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
              Skill India Alignment
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
              Mentor-Led Job Outcomes
            </span>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-6">
          <div className="grid grid-cols-3 gap-4">
            {logos.map((l) => (
              <figure
                key={l.alt}
                className="group relative flex items-center justify-center rounded-2xl border border-slate-100 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <div className="relative h-12 w-28 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    sizes="120px"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="sr-only">{l.alt}</figcaption>
              </figure>
            ))}
          </div>

          {/* Highlights / bullets */}
          <ul className="mx-auto mt-6 grid max-w-4xl gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li className="rounded-xl border border-brand bg-white px-3 py-2">
              <span className="font-semibold text-slate-900">Industry-Validated Curriculum</span>
              <span className="block text-slate-600">Projects mirror hiring standards.</span>
            </li>
            <li className="rounded-xl border border-brand bg-white px-3 py-2">
              <span className="font-semibold text-slate-900">Placement Support</span>
              <span className="block text-slate-600">Mock interviews & referrals.</span>
            </li>
            <li className="rounded-xl border border-brand bg-white px-3 py-2">
              <span className="font-semibold text-slate-900">Quality-Assured Delivery</span>
              <span className="block text-slate-600">ISO-driven processes & audits.</span>
            </li>
          </ul>
        </div>

        {/* CTA Row */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/hiring-partners"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold text-white bg-brand hover:bg-amber-600 transition-all ease-in-out"
          >
            Explore all partners
          </Link>
          <Link
            href="/brochure"
            className="text-sm font-semibold text-slate-800 border border-brand p-2 rounded-2xl hover:bg-brand hover:text-white transition-all ease-in-out"
          >
            Download placement brochure →
          </Link>
        </div>
      </div>
    </section>
  );
}

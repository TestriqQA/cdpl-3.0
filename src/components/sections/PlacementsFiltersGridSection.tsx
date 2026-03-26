"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Placement = {
  name: string;
  company: string;
  domain: "QA";
  role?: string;
  city?: string;
  image: string;
};

const DATA: Placement[] = [
  { name: "Dakshali Merya", company: "Tech Mahindra", domain: "QA", image: "/placements/Dakshali Merya.jpg" },
  { name: "Sheetal Singh", company: "Accenture", domain: "QA", image: "/placements/Sheetal Singh.jpg" },
  { name: "Shrikanth Suri", company: "eClerx", domain: "QA", image: "/placements/Shrikanth Suri.jpg" },
  { name: "Kartik Bomble", company: "JM Financial", domain: "QA", image: "/placements/Kartik Bomble.jpg" },
  { name: "Bhagyesh Mahadik", company: "Tech Mahindra", domain: "QA", image: "/placements/Bhagyesh Mahadik.jpg" },
  { name: "Latesh Kamble", company: "Testriq", domain: "QA", image: "/placements/Latesh Kamble.jpg" },
  { name: "Tejal More", company: "i-XL", domain: "QA", image: "/placements/Tejal More.jpg" },
  { name: "Rajvardhan Desai", company: "i-XL", domain: "QA", image: "/placements/Rajvardhan Desai.jpg" },
  { name: "Arun Panicker", company: "Aryan Technologies", domain: "QA", image: "/placements/Arun Panicker.jpg" },
  { name: "Bhakti Raigawali", company: "Aryan Technologies", domain: "QA", image: "/placements/Bhakti Raigawali.jpg" },
  { name: "Satya Dutt", company: "Tech Mahindra", domain: "QA", image: "/placements/Satya Dutt.jpg" },
  { name: "Mohsin Patel", company: "Testriq", domain: "QA", image: "/placements/Mohsin Patel.jpg" },
  { name: "Kishore Jha", company: "Raw Engineering", domain: "QA", image: "/placements/Kishore Jha.jpg" },
  { name: "Krutika Penkar", company: "Tech Cryptors", domain: "QA", image: "/placements/Krutika Penkar.jpg" },
  { name: "Insha Dosani", company: "Maxwell Energy Systems", domain: "QA", image: "/placements/Insha Dosani.jpg" },
  { name: "Jaynam Shah", company: "IDfy", domain: "QA", image: "/placements/Jaynam Shah.jpg" },
  { name: "Akash Yadav", company: "CVistar", domain: "QA", image: "/placements/Akash Yadav.jpg" },
  { name: "Preksha Mehta", company: "Tech Mahindra", domain: "QA", image: "/placements/Preksha Mehta.jpg" },
  { name: "Shreyash Pakhare", company: "Testriq", domain: "QA", image: "/placements/Shreyash Pakhare.jpg" },
  { name: "Navin Joshi", company: "Rendered Ideas", domain: "QA", image: "/placements/Navin Joshi.jpg" },
  { name: "Rucha Pawar", company: "Reeble", domain: "QA", image: "/placements/Rucha Pawar.jpg" },
  { name: "Abdul Mateen", company: "QodeNext", domain: "QA", image: "/placements/Abdul Mateen.jpg" },
  { name: "Muthukumaran Iyer", company: "Axiom TechGuru", domain: "QA", image: "/placements/Muthukumaran Iyer.jpg" },
  { name: "Aaditya Bobade", company: "Punon Technologies", domain: "QA", image: "/placements/Aaditya Bobade.jpg" },
  { name: "Sunil Pillai", company: "Tech Mahindra", domain: "QA", image: "/placements/Sunil Pillai.jpg" },
  { name: "Ashwini Badgujar", company: "Testriq", domain: "QA", image: "/placements/Ashwini Badgujar.jpg" },
  { name: "Faiz Khan", company: "Rendered Ideas", domain: "QA", image: "/placements/Faiz Khan.jpg" },
  { name: "Shrey Gupta", company: "Rendered Ideas", domain: "QA", image: "/placements/Shrey Gupta.jpg" },
];

/** Use a type for the domain instead of a (now-unused) value array */
type Domain = "All" | "QA";

/* ============================================================
   do not delete: future use — DOMAINS value for filter buttons
   const DOMAINS = ["All", "QA"] as const;
============================================================ */

const DOMAIN_COLORS = {
  QA: { bg: "bg-orange-50", text: "text-brand", ring: "ring-[#ff8c00]/20" },
};

const COMPANY_LOGOS: Record<string, string> = {
  "tech mahindra": "tech_mahindra.png",
  "accenture": "accenture.png",
  "eclerx": "eclerx.png",
  "jm financial": "jm_financial.png",
  "testriq": "testriq.png",
  "i-xl technologies": "i-xl_technologies.png",
  "aryan technologies": "aryan_technologies.png",
  "maxwell energy systems": "maxwell.png",
  "idfy": "idfy.png",
  "vistaar": "vistaar.png",
  "rendered ideas": "rendered_ideas.png",
  "reeble": "reeble.png",
  "axiom technologies": "axiom_technologies.png",
  "punon technologies": "punon.png",
  "raw engineering": "raw_engineering.png",
  "tech cryptors": "tech_cryptors.png",
  "codex lancers": "codex_lancers.png",
  "alif management services": "alif_management_services2.png",
  "sp ultraflex": "sp_ultraflex.png",
  "xr": "xr.png",
  "ibkr": "ibkr.png",
};

const FALLBACK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="40" viewBox="0 0 180 40">
    <rect x="0.5" y="0.5" width="179" height="39" rx="6" ry="6" fill="#fafafa" stroke="#e5e7eb"/>
    <circle cx="20" cy="20" r="6" fill="#cbd5e1"/>
    <rect x="34" y="14" width="108" height="12" rx="3" fill="#e2e8f0"/>
  </svg>`
);
const COMPANY_LOGO_FALLBACK = `data:image/svg+xml;utf8,${FALLBACK_SVG}`;

function normalizeCompanyName(name: string): string {
  const n = name.trim().toLowerCase();
  if (COMPANY_LOGOS[n]) return n;
  if (n === "axiom techguru" || n === "axiom tech guru") return "axiom technologies";
  if (["qodenext", "qode next", "qodenext technologies", "codenext", "code next"].includes(n)) return "sp ultraflex";
  if (n === "cvistar" || n === "c vistar" || n === "c-vistar") return "xr";
  if (n === "i-xl") return "i-xl technologies";
  return n;
}

function getCompanyLogoSrc(company: string): string {
  const key = normalizeCompanyName(company);
  const file = COMPANY_LOGOS[key];
  return file ? `/placements/companies/${file}` : COMPANY_LOGO_FALLBACK;
}

/** --- Pattern presets: each card gets a different soft pattern --- */
type Pattern = {
  overlay: string; // CSS background-image
  extra?: string;  // optional extra layer
};
const PATTERNS: Pattern[] = [
  { overlay: "radial-gradient(120% 90% at 0% 0%, rgba(255,140,0,.12), transparent 60%), repeating-linear-gradient(45deg, rgba(255,140,0,.10) 0 2px, transparent 2px 6px)" },
  { overlay: "conic-gradient(from 0deg at 100% 0%, rgba(30,136,229,.14), transparent 40%), repeating-linear-gradient(-45deg, rgba(30,136,229,.10) 0 2px, transparent 2px 6px)" },
  { overlay: "radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.16), transparent 55%), repeating-linear-gradient(90deg, rgba(157,123,255,.10) 0 1px, transparent 1px 5px)" },
  { overlay: "conic-gradient(from 180deg at 0% 100%, rgba(20,184,166,.14), transparent 45%), repeating-linear-gradient(0deg, rgba(20,184,166,.10) 0 1px, transparent 1px 6px)" },
  { overlay: "radial-gradient(90% 70% at 100% 100%, rgba(236,72,153,.14), transparent 55%), repeating-linear-gradient(135deg, rgba(236,72,153,.10) 0 2px, transparent 2px 7px)" },
  { overlay: "conic-gradient(from 90deg at 0% 0%, rgba(245,158,11,.14), transparent 40%), repeating-linear-gradient(60deg, rgba(245,158,11,.10) 0 2px, transparent 2px 8px)" },
  { overlay: "radial-gradient(100% 80% at 0% 100%, rgba(16,185,129,.14), transparent 60%), repeating-linear-gradient(30deg, rgba(16,185,129,.10) 0 2px, transparent 2px 6px)" },
];

type Props = { contained?: boolean };

export default function PlacementsFiltersGridSection({ contained = false }: Props) {
  // no setters needed right now since filters/search are commented
  const [q] = useState("");
  const [domain] = useState<Domain>("All");

  const results = useMemo(() => {
    return DATA.filter((d) => {
      const qok = !q || `${d.name} ${d.company}`.toLowerCase().includes(q.toLowerCase());
      const dok = domain === "All" || d.domain === domain;
      return qok && dok;
    });
  }, [q, domain]);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : <>{children}</>;

  return (
    <section className="w-full py-10 sm:py-12">
      <Wrapper>
        {/* =====================================================
            do not delete: future use — FILTER BAR (commented)
        ======================================================= */}
        {/*
        ... (filter UI retained here in comments)
        */}

        {/* RESULTS */}
        <div className="mt-6">
          {/* ================================================
              do not delete: future use — "Showing results" bar
          ================================================ */}
          {/*
          ... (showing results UI retained here in comments)
          */}

          <AnimatePresence mode="popLayout">
            {results.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center"
              >
                <p className="text-slate-700">No matches. Try a different search.</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial="hidden"
                animate="show"
                variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } } }}
                className="grid grid-cols-2 gap-4 max-[400px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-6 2xl:gap-8"
              >
                {results.map((p, idx) => {
                  const theme = DOMAIN_COLORS[p.domain];
                  const logoSrc = getCompanyLogoSrc(p.company);
                  const pat = PATTERNS[idx % PATTERNS.length];

                  return (
                    <motion.div
                      key={`${p.name}-${idx}`}
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.25 }}
                      className="relative overflow-visible rounded-2xl border border-slate-200 bg-white p-4 shadow-sm w-full"
                    >
                      {/* pattern paint (different per-card) */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
                        style={{ backgroundImage: pat.overlay }}
                      />
                      {/* subtle inner border glow to make patterns feel built-in */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
                      />

                      {/* left accent (kept) */}
                      <span aria-hidden className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl ${theme.bg}`} />

                      {/* AVATAR — slightly bigger */}
                      <Image
                        src={p.image}
                        alt={p.name}
                        title={p.name}
                        width={64}
                        height={64}
                        className="absolute -left-3 -top-3 h-16 w-16 rounded-full object-cover border border-slate-200 ring-4 ring-white shadow"
                      />

                      {/* Header spacer + logo bay */}
                      <div className="h-12 pr-28 sm:pr-32 md:pr-36" />
                      <div className="absolute right-4 top-4 h-12 w-28 sm:w-32 md:w-36 flex items-center justify-center">
                        <Image
                          src={logoSrc}
                          alt={`${p.company} logo`}
                          title={`${p.company} logo`}
                          width={128}
                          height={40}
                          className="max-h-10 sm:max-h-11 w-auto object-contain"
                        />
                      </div>

                      {/* BODY */}
                      <div className="relative min-w-0 mt-0.5">
                        <p className="truncate text-xs sm:text-sm text-slate-600">{p.company}</p>
                        <h3 className="truncate text-[1.02rem] sm:text-lg font-extrabold text-slate-900">{p.name}</h3>
                      </div>

                      <div className="relative mt-2.5">
                        <span className={`rounded-md px-2 py-0.5 text-xs sm:text-sm font-semibold ${theme.bg} ${theme.text}`}>
                          {p.domain}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
}

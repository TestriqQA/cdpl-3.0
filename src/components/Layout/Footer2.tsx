"use client";

import React from "react";
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Minimal X (formerly Twitter) logo */
function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="X"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.146 2.25H21.5l-7.49 8.55 8.79 10.95H16.52l-5.36-6.68-6.13 6.68H2.67l8.02-8.74L2.25 2.25h6.18l4.86 6.03 4.856-6.03Zm-1.054 18.9h1.786L7.988 3.95H6.093l10.999 17.2Z" />
    </svg>
  );
}

const Footer: React.FC = () => {
  const pathname = usePathname();
  return (
    <section className="bg-slate-100 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        {/* CARD */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* TOP: Brand + Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/cdpl-logo.png"
                  alt="Cinute Digital logo"
                  title="Cinute Digital logo"
                  width={48}
                  height={48}
                  className="rounded"
                  priority
                />
                <p className="text-2xl font-semibold tracking-tight text-slate-900">
                  Cinute Digital
                </p>
              </div>

              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                Get In Touch
              </h2>

              <div className="space-y-4 text-[15px] leading-relaxed">

                <div>
                  <p className="font-bold">Head Office (<span className="text-blue-700">CDPL</span>)</p>
                  <div className="flex items-start mt-1 gap-3">
                    <MapPin className="h-5 w-5 text-brand mt-0.5" aria-hidden="true" />
                    <Link className="hover:text-blue-700 transition" title="View Head Office Location on Google Maps" href="https://www.google.com/maps/place/Cinute+Digital+Pvt.+Ltd.+A+Premier+Software+Training+Institute+(CDPL)/@19.29342,72.8685471,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1af2b2c5fed:0x7104f80b9fec8b9d!8m2!3d19.293415!4d72.871122!16s%2Fg%2F11t5q_mt87?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D">
                      Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="font-bold">Study Center <span className="text-red-800">MeghMehul Classes</span> (<span className="text-blue-700">Vasai</span>)</p>
                  <div className="flex items-start mt-1 gap-3">
                    <MapPin className="h-5 w-5 text-brand mt-0.5" aria-hidden="true" />
                    <Link className="hover:text-blue-700 transition" title="View Vasai Study Center Location on Google Maps" href="https://maps.app.goo.gl/SACPou6JCdRZh5j98">
                      Shop No 7, Laxmi Palace, Opposite Vidhyavardhini Degree Engineering College, Gurunanak Nagar, Vasai West, Mumbai, Maharashtra - 401202
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                  <Link
                    href="mailto:contact@cinutedigital.com"
                    title="Send Email to CDPL"
                    className="hover:text-brand transition-colors"
                  >
                    contact@cinutedigital.com
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand mt-0.5" aria-hidden="true" />
                  <div className="flex flex-row flex-wrap items-center gap-2">
                    <Link
                      href="tel:+917888383788"
                      title="Call Head Office"
                      className="hover:text-brand transition-colors whitespace-nowrap"
                    >
                      +91 78-883-837-88
                    </Link>
                    <span className="text-slate-300 whitespace-nowrap">|</span>
                    <Link
                      href="tel:+918488988984"
                      title="Call Vasai Office"
                      className="hover:text-brand transition-colors whitespace-nowrap"
                    >
                      +91 84-889-889-84
                    </Link>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-5 mt-4">
                  <Link href="https://www.facebook.com/cinutedigital" title="Facebook" className="text-slate-400 hover:text-blue-700 transition-all duration-300 ease-in-out" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>

                  <Link href="https://x.com/cinutedigital" title="X (Twitter)" className="text-slate-400 hover:text-blue-700 transition-all duration-300 ease-in-out" aria-label="X">
                    <XLogo className="h-5 w-5" />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" title="YouTube" className="text-slate-400 hover:text-blue-700 transition-all duration-300 ease-in-out" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" title="LinkedIn" className="text-slate-400 hover:text-blue-700 transition-all duration-300 ease-in-out" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" title="Instagram" className="text-slate-400 hover:text-blue-700 transition-all duration-300 ease-in-out" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Logos + Policies */}
            <div className="flex flex-col gap-6">
              {/* Logos: centered, larger size */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-7">
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/msme.png"
                    alt="MSME"
                    title="MSME Registered Company Badge"
                    width={120}
                    height={120}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/Skill-India-Color.svg"
                    alt="Skill India"
                    title="Skill India Logo"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/Trustpilot.png"
                    alt="Trustpilot"
                    title="Trustpilot Reviews Badge"
                    width={150}
                    height={150}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/ISO-27001.png"
                    alt="ISO 27001 Certified"
                    title="ISO 27001 Certified Badge"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
                <div className="w-32 flex justify-center">
                  <Image
                    src="/images/ISO-9001.png"
                    alt="ISO 9001 Certified"
                    title="ISO 9001 Certified Badge"
                    width={130}
                    height={130}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>

              </div>

              {/* Policies: simple chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <Link
                  href="/privacy-policy"
                  title="Privacy Policy"
                  className={`rounded-full border px-3 py-1.5 transition-colors ${pathname === "/privacy-policy" ? "border-orange-300 text-brand" : "border-slate-200 hover:border-orange-300 hover:text-brand"}`}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookies-policy"
                  title="Cookies Policy"
                  className={`rounded-full border px-3 py-1.5 transition-colors ${pathname === "/cookies-policy" ? "border-orange-300 text-brand" : "border-slate-200 hover:border-orange-300 hover:text-brand"}`}
                >
                  Cookies Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  title="Terms and Conditions"
                  className={`rounded-full border px-3 py-1.5 transition-colors ${pathname === "/terms-of-service" ? "border-orange-300 text-brand" : "border-slate-200 hover:border-orange-300 hover:text-brand"}`}
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/cancellation-refund-policy"
                  title="Cancellation and Refund Policy"
                  className={`rounded-full border px-3 py-1.5 transition-colors ${pathname === "/cancellation-refund-policy" ? "border-orange-300 text-brand" : "border-slate-200 hover:border-orange-300 hover:text-brand"}`}
                >
                  Cancellation/Refund Policy
                </Link>
              </div>

              <p className="text-xs text-center text-slate-600">
                ISO 9001:2015 (QMS) 27001:2013 (ISMS) Certified Company.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-slate-100" />

          {/* Bottom Bar */}
          <div className="px-6 md:px-10 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-xs md:text-sm text-slate-600 text-center md:text-left">
                © 2026 Cinute Digital Pvt. Ltd. — All Rights Reserved.
              </p>
              {/* Powered By */}
              <div className="flex gap-4 space-y-4">
                <h3 className="text-xl font-semibold text-brand">Powered By</h3>
                <Link href="https://www.testriq.com/" title="Powered by TestRiq QA Lab" className="text-gray-300 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  <Image src={'/images/Testriq-Logo-1.webp'} alt='Testriq_logo' title="Testriq-Logo" width={100} height={100} style={{ width: "auto", height: "auto" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Footer;

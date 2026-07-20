"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { courseSlugs } from "@/data/headerSlugs";
const EnquireModal = dynamic(() => import("./EnquireModal"), { ssr: false }); // Modal is interactive-only, ssr:false is OK
// ⚠️  SEO FIX (April 2026): Changed ssr:false → ssr:true for navigation menus.
// With ssr:false, Googlebot could NOT see course links in the mega/mobile menu
// from the initial HTML, reducing internal link discovery for course pages.
const MegaMenuContent = dynamic(() => import("./MegaMenuContent"), { ssr: true });
const MobileMenuContent = dynamic(() => import("./MobileMenuContent"), { ssr: true });

// Dummy comment to force build refresh

/* ----------------------- Header ----------------------- */
const Header = () => {
  const pathname = usePathname();

  // Extract all course slugs for active state check
  // Use lightweight courseSlugs instead of calculating from full object
  const allCourseSlugs = courseSlugs;

  // Check if the current pathname is a course page
  const isCourseActive = allCourseSlugs.some(slug => pathname.startsWith(`/${slug}`));

  // Check if the current pathname is the main /courses page
  const isCoursesBaseActive = pathname.startsWith("/courses");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const [hasEnquireModalLoaded, setHasEnquireModalLoaded] = useState(false);

  useEffect(() => {
    if (isEnquireModalOpen) {
      setHasEnquireModalLoaded(true);
    }
  }, [isEnquireModalOpen]);

  // Mega menu state (layout unchanged)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);


  const isCoursesMenuOpen = isMegaMenuOpen || isCourseActive || isCoursesBaseActive;

  // Other dropdowns
  const [isJobsOpen, setIsJobsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutButtonRef = useRef<HTMLButtonElement | null>(null);
  const aboutMenuRef = useRef<HTMLDivElement | null>(null);
  const jobsButtonRef = useRef<HTMLButtonElement | null>(null);
  const jobsMenuRef = useRef<HTMLDivElement | null>(null);



  // Refs to detect boundaries
  const panelRef = useRef<HTMLDivElement | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const coursesButtonRef = useRef<HTMLButtonElement | null>(null);

  // Mobile refs
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);

  // ---- Hover stability: delayed close, cancel on enter ----
  const closeTimerRef = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      closeMega();
    });
  };

  const openMega = () => {
    cancelClose();
    setIsMegaMenuOpen(true);
  };

  const closeMega = () => {
    setIsMegaMenuOpen(false);
  };

  const toggleMega = () => {
    if (isMegaMenuOpen) {
      closeMega();
    } else {
      openMega();
    }
  };

  // Close Jobs/About and mega on outside click / ESC
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        isJobsOpen &&
        jobsMenuRef.current &&
        !jobsMenuRef.current.contains(t) &&
        jobsButtonRef.current &&
        !jobsButtonRef.current.contains(t)
      ) {
        setIsJobsOpen(false);
      }
      if (
        isAboutOpen &&
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(t) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(t)
      ) {
        setIsAboutOpen(false);
      }
      if (
        isMegaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(t) &&
        coursesButtonRef.current &&
        !coursesButtonRef.current.contains(t)
      ) {
        closeMega();
      }
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(t) &&
        mobileToggleRef.current &&
        !mobileToggleRef.current.contains(t)
      ) {
        setIsMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsJobsOpen(false);
        setIsAboutOpen(false);
        closeMega();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
      cancelClose();
    };
  }, [isJobsOpen, isAboutOpen, isMegaMenuOpen, isMenuOpen]);

  // Mobile toggles
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };



  return (
    <header className="relative bg-gradient-to-r from-white via-white to-slate-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-1">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" title="CDPL - Cinute Digital" className="flex items-center space-x-2 sm:space-x-3">
              <div className="rounded-lg">
                <Image src="/cdpl-logo.png" alt="CDPL Logo" title="CDPL Logo" width={40} height={40} className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14" priority={true} />
              </div>
              <span className="text-[19px] sm:text-xl xl:text-2xl font-bold text-brand">Cinute Digital</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center justify-start">
            <Link href="/" title="Home" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${pathname === "/" ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Home">Home</span>
            </Link>

            {/* Mega Menu Trigger */}
            <div className="">
              <button
                ref={coursesButtonRef}
                type="button"
                className={`transition-colors flex items-center text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${isCoursesMenuOpen ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                onMouseEnter={openMega}
                onMouseLeave={() => scheduleClose()}
                onClick={toggleMega}
              >
                <span className="nav-link-bold" data-text="Courses">Courses</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Mega Menu Wrapper */}
              {isMegaMenuOpen && (
                <div
                  id="mega-menu"
                  ref={megaMenuRef}
                  className="absolute left-0 right-0 top-full z-50"
                  onMouseEnter={cancelClose}
                  onMouseLeave={() => scheduleClose()}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                      ref={panelRef}
                      className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-brand overflow-hidden"
                      style={{ maxHeight: 520 }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={() => scheduleClose()}
                    >
                      <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-brand overflow-hidden">
                        <MegaMenuContent closeMega={closeMega} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/services" title="Services" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${pathname.startsWith("/services") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Services">Services</span>
            </Link>

            <Link href="/events" title="Events" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${pathname.startsWith("/events") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Event">Event</span>
            </Link>

            <Link href="/mentors" title="Mentors" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${pathname.startsWith("/mentors") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Mentors">Mentors</span>
            </Link>

            {/* Jobs Dropdown (Desktop) */}
            <div className="relative" onMouseEnter={() => setIsJobsOpen(true)} onMouseLeave={() => setIsJobsOpen(false)}>
              <button
                ref={jobsButtonRef}
                onClick={() => setIsJobsOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsJobsOpen(true);
                    requestAnimationFrame(() => {
                      const first = jobsMenuRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
                      first?.focus();
                    });
                  }
                }}
                className={`transition-colors flex items-center text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 active:text-brand ${pathname.startsWith("/jobs") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                aria-haspopup="menu"
                aria-expanded={isJobsOpen}
                aria-controls="jobs-menu"
              >
                <span className="nav-link-bold" data-text="Jobs">Jobs</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isJobsOpen && (
                <div
                  id="jobs-menu"
                  ref={jobsMenuRef}
                  role="menu"
                  aria-label="Jobs"
                  className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50"
                >

                  <div className="py-1">
                    <Link
                      href="/jobs/live-jobs"
                      title="Live Jobs"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-brand-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="Live Jobs">Live Jobs</span>
                    </Link>
                    <Link
                      href="/jobs/placements"
                      title="Placements"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="Placements">Placements</span>
                    </Link>
                    <Link
                      href="/jobs/careers"
                      title="Careers"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="Careers">Careers</span>
                    </Link>
                    <Link
                      href="/jobs/job-openings"
                      title="Job Openings"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="Job Openings">Job Openings</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown (Desktop) */}
            <div className="relative" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
              <button
                ref={aboutButtonRef}
                onClick={() => setIsAboutOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIsAboutOpen(true);
                    requestAnimationFrame(() => {
                      const first = aboutMenuRef.current?.querySelector<HTMLAnchorElement>('a[role="menuitem"]');
                      first?.focus();
                    });
                  }
                }}
                className={`transition-colors flex items-center text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 ${pathname.startsWith("/about") || pathname.startsWith("/our-team") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
                aria-controls="about-menu"
              >
                <span className="nav-link-bold" data-text="About">About</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isAboutOpen && (
                <div
                  id="about-menu"
                  ref={aboutMenuRef}
                  role="menu"
                  aria-label="About"
                  className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50"
                >
                  <div className="py-1">
                    <Link
                      href="/about-us"
                      title="About CDPL"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="About CDPL">About CDPL</span>
                    </Link>
                    <Link
                      href="/our-team"
                      title="Our Team"
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand focus:bg-orange-50 focus:text-brand outline-none"
                    >
                      <span className="nav-link-bold" data-text="Our Team">Our Team</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" title="Blog" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 ${pathname.startsWith("/blog") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Blog">Blog</span>
            </Link>
            <Link href="/contact-us" title="Contact Us" className={`transition-colors text-sm xl:text-base px-2 lg:px-3 xl:px-4 py-6 ${pathname.startsWith("/contact-us") ? "text-brand font-semibold" : "text-gray-700 hover:text-brand"}`}>
              <span className="nav-link-bold" data-text="Contact">Contact</span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              // bg-orange-700 (#c2410c) rather than bg-brand (#ff8c00): white
              // on the brand orange is 2.33:1 and fails WCAG AA. White on
              // orange-700 is 5.18:1. This button is lg-only, which is why it
              // failed the desktop audit but not mobile.
              className="cursor-pointer hidden lg:block text-white px-4 sm:px-5 py-2 rounded-lg bg-orange-700 hover:bg-orange-800 transition-all duration-200 transform hover:scale-105 text-sm font-semibold shadow-md"
            >
              Free Demo
            </button>
          </div>

          {/* Mobile Menu Button - Visible on lg and below */}
          <div className="lg:hidden flex items-center">
            <button
              ref={mobileToggleRef}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-73px)] overflow-y-auto shadow-xl">
            <MobileMenuContent closeMenu={toggleMenu} openEnquire={() => { setIsEnquireModalOpen(true); }} />
          </div>
        )
      }

      {/* Lazy load EnquireModal to save initial TBT (libphonenumber-js) */}
      {
        (isEnquireModalOpen || hasEnquireModalLoaded) && (
          <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
        )
      }
    </header >
  );
};

export default Header;

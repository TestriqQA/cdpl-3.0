'use client';

import { NAV_ITEMS, type NavVariant } from './navItems';
import React, { useEffect, useRef, useState } from 'react';

interface StickyNavProps {
  variant?: NavVariant;
}

export default function StickyNav({ variant = 'software-testing' }: StickyNavProps) {
  const navItems = NAV_ITEMS[variant];
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  // Compact pills replace the desktop row as soon as the row no longer fits on one line.
  const [compact, setCompact] = useState(false);
  // In-flow height, reserved by a placeholder while the nav is fixed so the page doesn't jump.
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = desktopRef.current;
    const row = rowRef.current;
    if (!box || !row) return;
    const check = () => setCompact(row.offsetWidth > box.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(box);
    ro.observe(row);
    return () => ro.disconnect();
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);

      let current = '';
      navItems.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    if (!isScrolled && navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, [isScrolled, compact]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Calculate offset: navbar height (~72px) + sticky nav height (~56px) + small padding (12px)
      const offset = isScrolled ? 100 : 100;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Placeholder keeps the page from jumping when the nav turns fixed */}
      {isScrolled && <div className="mt-8 w-full" style={{ height: navHeight }} aria-hidden="true" />}
      <div
        ref={navRef}
        className={`z-20 transition-all duration-500 ${isScrolled
          ? 'fixed md:top-14 lg:top-16 top-20 left-0 right-0 py-1 backdrop-blur-xl bg-white/70 shadow-[0_4px_12px_-6px_rgba(15,23,42,0.08)] border-b border-gray-200/50'
          : 'relative mt-8'
          }`}
      >
        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: one centred row; kept in layout (invisible) while compact so it can be re-measured */}
          <div
            ref={desktopRef}
            className={`hidden lg:block overflow-hidden ${compact ? 'lg:invisible lg:h-0' : 'py-2'}`}
          >
            <div ref={rowRef} className="mx-auto flex w-max items-center gap-1">
              {navItems.map((sec, index) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${activeSection === sec.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  {/* Subtle shimmer on hover (non-active only) */}
                  {!activeSection && (
                    <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </div>
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {sec.label}
                  </span>

                  {/* Active underline indicator */}
                  {activeSection === sec.id && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-indigo-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Compact horizontal scroll: below lg, or whenever the desktop row overflows */}
          <div className={`relative py-2 ${compact ? '' : 'lg:hidden'}`}>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-x-auto scrollbar-thin pb-1">
              <div className="flex gap-2 px-4 min-w-max">
                {navItems.map((sec, index) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`relative px-4 py-1.5 rounded-full font-medium text-xs whitespace-nowrap transition-all duration-300
                    ${activeSection === sec.id
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {sec.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

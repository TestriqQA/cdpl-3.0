// Server Component. framer-motion was the only reason this needed "use client";
// the two motion.div wrappers were decorative scroll fades with no state, no
// handlers and no browser APIs. Rendering this on the server ships zero client
// JS for the section.
import React from 'react';
import Image from 'next/image';

/**
 * HomeTrustBarSection - Partner Logos & Certifications
 * 
 * Shows hiring partners and trust badges.
 * Updated to display company logos for a better visual trust bar.
 */
export default function HomeTrustBarSection() {
  // Actual hiring partners from CDPL
  // The names are used to construct the image path: /partners/{name-in-lowercase-and-kebab-case}.png
  const partners = [
    'testriq',
    'Axiom',
    'idfy',
    'maxwell',
    'rawengineering',
    'techmahindra',
    'Accenture',
    'eClerx',
    'vistaar', // Added a couple more for a richer display
    'jm_financial',
  ];

  const getLogoPath = (partnerName: string) => {
    // Convert partner name to lowercase and replace spaces with hyphens for the file path
    return `/partners/${partnerName.toLowerCase().replace(/\s/g, '-')}.png`;
  };

  return (
    <section className="mt-4 py-4 bg-gray-50 border-y border-gray-200" aria-label="Our Partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Trusted by Learners & Teams From
          </p>
        </div>

        {/* Partner logos as a marquee. The track holds two identical copies
            (the second hidden from screen readers) and the global
            cdpl-marquee keyframe moves it by exactly half, so the loop is
            seamless. Pauses on hover; with reduced motion it is a still row.
            The edge mask fades logos in and out instead of cutting them. */}
        <div className="group relative mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max [animation:cdpl-marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex shrink-0 items-center gap-12 pr-12"
              >
                {partners.map((partner) => (
                  <li key={partner} className="flex h-16 w-28 items-center justify-center sm:w-32">
                    <Image
                      src={getLogoPath(partner)}
                      alt={copy === 1 ? '' : `${partner} Logo`}
                      title={copy === 1 ? undefined : `${partner} Logo`}
                      width={100}
                      height={40}
                      className="h-full w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                      sizes="128px"
                      // No priority: this strip sits below the hero, so preloading
                      // these competed with the LCP text for early bandwidth.
                      loading="lazy"
                      quality={60}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

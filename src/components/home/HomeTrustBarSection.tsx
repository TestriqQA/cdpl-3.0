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

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-4 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              // hover:scale-105 replaces framer-motion's whileHover — same
              // effect, pure CSS, and it inherits the prefers-reduced-motion
              // block in globals.css for free.
              className="flex items-center justify-center h-16 p-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={getLogoPath(partner)}
                alt={`${partner} Logo`}
                title={`${partner} Logo`}
                width={100}
                height={40}
                className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                sizes="100px"
                // No priority: this strip sits below the hero, so preloading
                // these competed with the LCP text for early bandwidth.
                loading="lazy"
                quality={60}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

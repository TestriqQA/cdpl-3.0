"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="mt-4 py-4 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Trusted by Learners & Teams From
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-4 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-16 p-2" // Reduced padding and height
            >
              <Image
                src={getLogoPath(partner)}
                alt={`${partner} Logo`}
                title={`${partner} Logo`}
                width={140} // Optimized for display size (approx 150px)
                height={60}
                className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                // Added sizes and priority for better Next.js Image optimization and SEO
                sizes="(max-width: 768px) 33vw, 10vw"
                priority={index < 5} // Prioritize loading for the first few logos
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

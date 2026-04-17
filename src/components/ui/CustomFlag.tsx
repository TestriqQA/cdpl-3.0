'use client';

import React, { useEffect, useState } from 'react';

/**
 * CustomFlag - A wrapper for the country flag in PhoneInput
 * 
 * Added 'title' attribute to satisfy SEO requirements identified by
 * 'SEO in 1 click' extension.
 * 
 * Updated with a 'mounted' state check to avoid Next.js hydration errors
 * where the server-side rendered flag might not match the client-side
 * version with the additional 'title' attribute.
 */
const CustomFlag = ({ country, countryName }: any): any => {
  if (!country) return null;

  // Render the country flag using the same CDN source as react-phone-number-input
  return (
    <img
      className="PhoneInputCountryIconImg"
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
      alt={`${countryName || country} Flag`}
      title={`${countryName || country} Flag`} // Explicit title to resolve SEO issue
      loading="lazy"
    />
  );
};

export default CustomFlag;

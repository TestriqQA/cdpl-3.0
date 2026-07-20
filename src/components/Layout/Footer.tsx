'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

// Neither of these declares a `loading` fallback. With ssr:true the real markup
// is already in the server HTML, so a fallback only ever appeared while the
// client chunk was in flight — and each reserved a full 100vh that then
// collapsed to the real footer height. Since both render unconditionally (see
// below), that was a latent 2x100vh shift on client navigations.
// The removed markup also used `bg-[theme(color.background)]`, which is not a
// valid Tailwind theme path (`colors.background`), so it compiled to nothing.
const Footer2 = dynamic(
  () => import("@/components/Layout/Footer2"),
  {
    ssr: true,
  }
);

const CityFooter = dynamic(
  () => import("@/components/Layout/CityFooter"),
  {
    ssr: true,
  }
)

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

const FooterLink = ({ href, children, title }: { href: string; children: React.ReactNode; title?: string }) => {
  return (
    <Link
      href={href}
      title={title || (typeof children === 'string' ? children : undefined)}
      className="hover:text-brand hover:translate-x-2 active:textColor-orange-500 active:text-orange-500 focus-visible:text-orange-500 active:translate-x-2 active:transition-none focus-visible:transition-none transition-all duration-300 ease-in-out text-sm outline-none text-gray-300 inline-block py-2 px-3"
    >
      {children}
    </Link>
  );
};

// Institute links without translate effect
const InstituteLink = ({ href, children, title }: { href: string; children: React.ReactNode; title?: string }) => {
  return (
    <Link
      href={href}
      title={title || (typeof children === 'string' ? children : undefined)}
      className="hover:text-brand active:text-orange-500 focus-visible:text-orange-500 transition-colors duration-300 ease-in-out text-sm outline-none text-gray-300 inline-block py-2 px-3"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-[auto_auto_auto] gap-8">
          {/* Data Science, AI - ML & BI Courses */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-1 lg:row-start-1">
              <h2 className="text-lg font-semibold text-brand">Data Science</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/courses/ds-ml-courses">
                    Data Science - Overview
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/ai-course">
                    Comprehensive Data Science and AI - Master Program
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/machine-learning-course">
                    Machine Learning and Data Science with Python
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/generative-ai-course">
                    Deep Learning, NLP and Generative AI
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/data-science-course">
                    Advanced Data Science &amp; Machine Learning Masterclass
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/machine-learning-using-python">
                    Machine Learning Algorithms using python Programming
                  </FooterLink>

                  <FooterLink href="/courses/ds-ml-courses/data-visualization-in-r-programming">
                    Machine Learning and Data Visualization using R Programming
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/python-course">
                    Python Programming
                  </FooterLink>

                </li>
              </ul>
            </div>

            {/* Artificial Intelligence */}
            <div className="space-y-4 lg:col-start-1 lg:row-start-2">
              <h2 className="text-lg font-semibold text-brand">Artificial Intelligence(AI)</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/courses/artificial-intelligence-courses">
                    Artificial Intelligence (AI) - Overview
                  </FooterLink>

                  <FooterLink href="/courses/artificial-intelligence-courses/prompt-engineering-course">
                    Prompt Engineering with Gen AI
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Testing Courses */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-2 lg:row-start-1">
              <h2 className="text-lg font-semibold text-brand">Software Testing Courses</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/courses/software-testing-course">
                    Software Testing - Overview
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/manual-testing-course">
                    Manual Software Testing
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/api-testing">
                    API Testing using POSTMAN and RestAPIs
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/dbms-course">
                    Database Management System using MySQL
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/etl-testing">
                    ETL Testing Course
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/advance-software-testing">
                    Advanced Software Testing
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/automation-testing-course">
                    Advanced Automation Testing
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/advance-manual-automation-testing">
                    Advanced Manual and Automation Testing
                  </FooterLink>

                  <FooterLink href="/courses/software-testing-course/advance-manual-automation-testing">
                    Advanced Manual and Automation Testing
                  </FooterLink>


                  <FooterLink href="/courses/software-testing-course/java-course">
                    Java Programming
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="space-y-4 lg:col-start-2 lg:row-start-2">
              <h2 className="text-lg font-semibold text-brand">Digital Marketing</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/courses/digital-marketing-courses">
                    Digital Marketing - Overview
                  </FooterLink>

                  <FooterLink href="/courses/digital-marketing-courses/digital-marketing-course">
                    Digital Marketing and Analytics - Master Program
                  </FooterLink>

                  <FooterLink href="/courses/digital-marketing-courses/ai-in-digital-marketing">
                    Digital Marketing and AI (For Business Owners)
                  </FooterLink>

                  <FooterLink href="/courses/digital-marketing-courses/ai-bootcamp">
                    Digital Marketing With AI Bootcamp
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing (actually BI) */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-3 lg:row-start-1">
              <h2 className="text-lg font-semibold text-brand">Business Development(BI)</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/courses/bi-courses">
                    Business Intelligence (BI) - Overview
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/data-analytics">
                    Advanced Data Analytics - Hero Program
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/data-analytics-python">
                    Advanced Data Analytics with Python Libraries
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/data-analytics-and-visualization">
                    Excel for Data Analytics & Visualization
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/data-analytics-with-tableau">
                    Data Analytics & Visualization with Tableau
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/power-bi-course">
                    Data Analytics & Visualization with Power BI
                  </FooterLink>

                  <FooterLink href="/courses/bi-courses/masters-in-data-engineering">
                    Data Analytics With BI And Big Data Engineering - Master Program
                  </FooterLink>

                </li>
              </ul>
            </div>

            {/* Blogs and Categories */}
            <div className="space-y-4 lg:col-start-3 lg:row-start-2">
              <h2 className="text-lg font-semibold text-brand">Blogs</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/blog">
                    Blogs
                  </FooterLink>

                  <FooterLink href="/blog/category/software-testing">
                    Software Testing
                  </FooterLink>

                  <FooterLink href="/blog/category/data-science">
                    Data Science
                  </FooterLink>

                  <FooterLink href="/blog/category/web-development">
                    Web Development
                  </FooterLink>

                  <FooterLink href="/blog/category/artificial-intelligence">
                    AI &amp; Machine Learning
                  </FooterLink>

                  <FooterLink href="/blog/category/digital-marketing">
                    Digital Marketing
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:contents">
            <div className="space-y-4 lg:col-start-4 lg:row-start-1">
              <h2 className="text-lg font-semibold text-brand">Services</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/services/campus-to-corporate">
                    Campus to Corporate
                  </FooterLink>

                  <FooterLink href="/services/custom-training">
                    Custom Training
                  </FooterLink>

                  <FooterLink href="/services/expert-talks">
                    Expert Talks
                  </FooterLink>

                  <FooterLink href="/services/faculty-development">
                    Faculty Development
                  </FooterLink>

                  <FooterLink href="/services/government-public-sector-training">
                    Govt & Public Sector Training
                  </FooterLink>

                  <FooterLink href="/services/industrial-visits">
                    Industrial Visits
                  </FooterLink>

                  <FooterLink href="/services/internship-program">
                    Internship Program
                  </FooterLink>

                  <FooterLink href="/services/on-job-training">
                    On Job Training
                  </FooterLink>

                  <FooterLink href="/services/sttp">
                    Short Term Training Program (STTP)
                  </FooterLink>

                  <FooterLink href="/services/train-the-trainer">
                    Train the Trainer
                  </FooterLink>

                  <FooterLink href="/services/workshops">
                    Workshops
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Certifications and Accreditation */}
            <div className="space-y-4 lg:col-start-4 lg:row-start-2">
              <h2 className="text-lg font-semibold text-brand">Certifications and Accreditation</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/aaa-certification">
                    AAA Certification
                  </FooterLink>

                  <FooterLink href="/actd-certification">
                    ACTD Certification
                  </FooterLink>

                  <FooterLink href="/cdpl-certificate-validation">
                    Validate Your Certificate
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Events - Column 5 */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-5 lg:row-start-1">
              <h2 className="text-lg font-semibold text-brand">Events</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/events/business-analytics-course-at-aldel-institute-of-management">
                    Business Analytics Course (Aldel Institute)
                  </FooterLink>
                  <FooterLink href="/events/mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab">
                    MoU Signing (St. Francis)
                  </FooterLink>
                  <FooterLink href="/events/job-fair">
                    Job Fair (Nirmala Memorial)
                  </FooterLink>
                  <FooterLink href="/events/industrial-visit-viva-institute-of-technology">
                    Industrial Visit (VIVA Institute)
                  </FooterLink>
                  <FooterLink href="/events/national-conference-on-applications-of-ai-promises-perils-and-sustainability-mkes-trust-nagindas-khandwala-college">
                    National Conference on AI (MKES)
                  </FooterLink>
                  <FooterLink href="/events/faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri">
                    FDP on Power BI & Tableau (Bhavans College)
                  </FooterLink>
                  <FooterLink href="/events/internship-program-dj-sanghvi-college">
                    Internship Program (DJ Sanghvi)
                  </FooterLink>
                  <FooterLink href="/events/techoutsav">
                    Techoutsav
                  </FooterLink>
                  <FooterLink href="/events/industrial-visit-thakur-college-of-science-commerce">
                    Industrial Visit (Thakur College)
                  </FooterLink>
                  <FooterLink href="/events/placement-drive-at-cinute-digital-pvt-ltd-for-tech-mahindra-and-transunion-cibil">
                    Placement Drive (Tech Mahindra)
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Follow Us (desktop) - Column 5 Row 2 */}
            <div className="space-y-4 hidden lg:block lg:col-start-5 lg:row-start-2">
              <h2 className="text-lg font-semibold text-brand">Follow Us On</h2>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" title="Facebook" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" title="X (Twitter)" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" title="YouTube" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" title="LinkedIn" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" title="Instagram" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us (mobile) */}
            <div className="space-y-4 lg:hidden">
              <h2 className="text-lg font-semibold text-brand">Follow Us On</h2>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" title="Facebook" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" title="X (Twitter)" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" title="YouTube" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" title="LinkedIn" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" title="Instagram" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Institute - Separate Horizontal Row Below Grid */}
        <div className="mt-8 pt-8 border-t border-gray-700/50">
          <h2 className="text-lg font-semibold text-brand mb-4">Institute</h2>
          <ul>
            <li className='flex flex-wrap'>
              <InstituteLink href="/" title="CDPL Home Page">Home</InstituteLink>
              <InstituteLink href="/cms" title="CMS Student/Faculty Login">CMS Login</InstituteLink>
              <InstituteLink href="/mock-test" title="Free Online Mock Tests">Mock Test</InstituteLink>
              <InstituteLink href="/istqb-registration" title="ISTQB Certification Registration">ISTQB Registration</InstituteLink>
              <InstituteLink href="/services" title="Our Professional Services">Services</InstituteLink>
              <InstituteLink href="/events" title="Upcoming & Past Events">Events</InstituteLink>
              <InstituteLink href="/mentors" title="Our Expert Mentors">Mentors</InstituteLink>
              <InstituteLink href="/jobs/placements" title="Recent Student Placements">Placements</InstituteLink>
              <InstituteLink href="/jobs/live-jobs" title="Live Job Openings & Opportunities">Live Jobs</InstituteLink>
              <InstituteLink href="/jobs/job-openings" title="Current Job Openings">Job Openings</InstituteLink>
              <InstituteLink href="/jobs/careers" title="Careers at CDPL">Careers</InstituteLink>
              <InstituteLink href="/about-us" title="About Cinute Digital">About CDPL</InstituteLink>
              <InstituteLink href="/our-team" title="Meet the Team">Our Team</InstituteLink>
              <InstituteLink href="/reviews" title="Student Reviews & Success Stories">Reviews</InstituteLink>
              <InstituteLink href="/cdpl-affiliate-program" title="CDPL Affiliate Partner Program">Affiliate Program</InstituteLink>
              <InstituteLink href="/contact-us" title="Contact Us for Support & Enquiries">Contact Us</InstituteLink>
            </li>
          </ul>
        </div>
      </div>

      <CityFooter />

      <Footer2 />
    </footer>
  );
};

export default Footer;

'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

const Footer2 = dynamic(
  () => import("@/components/Layout/Footer2"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-300">Loading...</p>
      </div>
    ),
  }
);

const CityFooter = dynamic(
  () => import("@/components/Layout/CityFooter"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-300">Loading...</p>
      </div>
    ),
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

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="hover:text-brand hover:translate-x-2 active:textColor-orange-500 active:text-orange-500 focus-visible:text-orange-500 active:translate-x-2 active:transition-none focus-visible:transition-none transition-all duration-300 ease-in-out text-sm outline-none text-gray-300 inline-block py-2 px-3"
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
              <h2 className="text-lg font-semibold text-orange-300">Data Science</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/ds-ml-courses">
                    Data Science - Overview
                  </FooterLink>

                  <FooterLink href="/ai-course">
                    Comprehensive Data Science and AI - Master Program
                  </FooterLink>

                  <FooterLink href="/machine-learning-course">
                    Machine Learning and Data Science with Python
                  </FooterLink>

                  <FooterLink href="/generative-ai-course">
                    Deep Learning, NLP and Generative AI
                  </FooterLink>

                  <FooterLink href="/data-science-course">
                    Advanced Data Science &amp; Machine Learning Masterclass
                  </FooterLink>

                  <FooterLink href="/machine-learning-using-python">
                    Machine Learning Algorithms using python Programming
                  </FooterLink>

                  <FooterLink href="/data-visualization-in-r-programming">
                    Machine Learning and Data Visualization using R Programming
                  </FooterLink>

                </li>
              </ul>
            </div>

            {/* Artificial Intelligence */}
            <div className="space-y-4 lg:col-start-1 lg:row-start-2">
              <h2 className="text-lg font-semibold text-orange-300">Artificial Intelligence(AI)</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/artificial-intelligence-courses">
                    Artificial Intelligence (AI) - Overview
                  </FooterLink>

                  <FooterLink href="/prompt-engineering-course">
                    Prompt Engineering with Gen AI
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Follow Us (desktop) */}
            <div className="space-y-4 hidden lg:block lg:col-start-1 lg:row-start-3">
              <h2 className="text-lg font-semibold text-orange-300">Follow Us On</h2>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Testing Courses */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-2 lg:row-start-1">
              <h2 className="text-lg font-semibold text-orange-300">Software Testing Courses</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/software-testing-course">
                    Software Testing - Overview
                  </FooterLink>

                  <FooterLink href="/manual-testing-course">
                    Manual Software Testing
                  </FooterLink>

                  <FooterLink href="/api-testing">
                    API Testing using POSTMAN and RestAPIs
                  </FooterLink>

                  <FooterLink href="/dbms-course">
                    Database Management System using MySQL
                  </FooterLink>

                  <FooterLink href="/etl-testing">
                    ETL Testing Course
                  </FooterLink>

                  <FooterLink href="/advance-software-testing">
                    Advanced Software Testing
                  </FooterLink>

                  <FooterLink href="/automation-testing-course">
                    Advanced Automation Testing
                  </FooterLink>

                  <FooterLink href="/advance-manual-automation-testing">
                    Advanced Manual and Automation Testing
                  </FooterLink>

                  <FooterLink href="/advance-manual-automation-testing">
                    Advanced Manual and Automation Testing
                  </FooterLink>

                  <FooterLink href="/python-course">
                    Python Programming
                  </FooterLink>

                  <FooterLink href="/java-course">
                    Java Programming
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="space-y-4 lg:col-start-2 lg:row-start-2">
              <h2 className="text-lg font-semibold text-orange-300">Digital Marketing</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/digital-marketing-courses">
                    Digital Marketing - Overview
                  </FooterLink>

                  <FooterLink href="/digital-marketing-course">
                    Digital Marketing and Analytics - Master Program
                  </FooterLink>

                  <FooterLink href="/ai-in-digital-marketing">
                    Digital Marketing and AI (For Business Owners)
                  </FooterLink>

                  <FooterLink href="/ai-bootcamp">
                    Digital Marketing With AI Bootcamp
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Digital Marketing (actually BI) */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-3 lg:row-start-1">
              <h2 className="text-lg font-semibold text-orange-300">Business Development(BI)</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/bi-courses">
                    Business Intelligence (BI) - Overview
                  </FooterLink>

                  <FooterLink href="/data-analytics">
                    Advanced Data Analytics - Hero Program
                  </FooterLink>

                  <FooterLink href="/data-analytics-python">
                    Advanced Data Analytics with Python Libraries
                  </FooterLink>

                  <FooterLink href="/data-analytics-and-visualization">
                    Excel for Data Analytics & Visualization
                  </FooterLink>

                  <FooterLink href="/data-analytics-with-tableau">
                    Data Analytics & Visualization with Tableau
                  </FooterLink>

                  <FooterLink href="/power-bi-course">
                    Data Analytics & Visualization with Power BI
                  </FooterLink>

                  <FooterLink href="/masters-in-data-engineering">
                    Data Analytics With BI And Big Data Engineering - Master Program
                  </FooterLink>

                </li>
              </ul>
            </div>

            {/* Blogs and Categories */}
            <div className="space-y-4 lg:col-start-3 lg:row-start-2">
              <h2 className="text-lg font-semibold text-orange-300">Blogs</h2>
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
              <h2 className="text-lg font-semibold text-orange-300">Services</h2>
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

            {/* Events */}
            <div className="space-y-4 lg:col-start-4 lg:row-start-2">
              <h2 className="text-lg font-semibold text-orange-300">Events</h2>
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
                </li>
              </ul>
            </div>
          </div>

          {/* Institute */}
          <div className="space-y-4 flex flex-col lg:contents">
            <div className="space-y-4 lg:col-start-5 lg:row-start-1">
              <h2 className="text-lg font-semibold text-orange-300">Institute</h2>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <FooterLink href="/">
                    Home
                  </FooterLink>

                  <FooterLink href="/mock-test">
                    Mock Test
                  </FooterLink>

                  <FooterLink href="/istqb-registration">
                    ISTQB Registration
                  </FooterLink>

                  <FooterLink href="/services">
                    Services
                  </FooterLink>

                  <FooterLink href="/events">
                    Events
                  </FooterLink>

                  <FooterLink href="/mentors">
                    Mentors
                  </FooterLink>

                  <FooterLink href="/jobs/placements">
                    Placements
                  </FooterLink>

                  <FooterLink href="/jobs/live-jobs">
                    Live Jobs
                  </FooterLink>

                  <FooterLink href="/jobs/job-openings">
                    Job Openings
                  </FooterLink>

                  <FooterLink href="/jobs/careers">
                    Careers
                  </FooterLink>

                  <FooterLink href="/about-us">
                    About CDPL
                  </FooterLink>

                  <FooterLink href="/our-team">
                    Our Team
                  </FooterLink>

                  <FooterLink href="/reviews">
                    Reviews
                  </FooterLink>

                  <FooterLink href="/cdpl-affiliate-program">
                    Affiliate Program
                  </FooterLink>

                  <FooterLink href="/contact-us">
                    Contact Us
                  </FooterLink>
                </li>
              </ul>
            </div>

            {/* Certifications and Accreditation */}
            <div className="space-y-4 lg:col-start-5 lg:row-start-2">
              <h2 className="text-lg font-semibold text-orange-300">Certifications and Accreditation</h2>
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

            {/* Follow Us (mobile) */}
            <div className="space-y-4 lg:hidden">
              <h2 className="text-lg font-semibold text-orange-300">Follow Us On</h2>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CityFooter />

      <Footer2 />
    </footer>
  );
};

export default Footer;

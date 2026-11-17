'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const FooterLink = ({ href, children, title }: { href: string; children: React.ReactNode; title?: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            title={title || (typeof children === 'string' ? children : undefined)}
            className={`hover:text-orange-400 hover:translate-x-2 active:text-orange-400 active:translate-x-2 transition-all duration-300 ease-in-out text-sm inline-block py-2 px-3 ${isActive ? "text-orange-400 translate-x-2" : "text-gray-300"}`}
        >
            {children}
        </Link>
    );
};

const CityFooter = () => {
    const pathname = usePathname();
    return (
        <section className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-orange-400">City Wise</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Software Testing Location Wise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Software Testing City Wise</h3>
                        <ul>
                            <li className='flex flex-col space-y-2'>
                                <FooterLink href="/software-testing-course-in-mumbai" title="Software Testing Course in Mumbai">
                                    Software Testing Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-delhi" title="Software Testing Course in Delhi">
                                    Software Testing Course in Delhi
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-ahmedabad" title="Software Testing Course in Ahmedabad">
                                    Software Testing Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-chennai" title="Software Testing Course in Chennai">
                                    Software Testing Course in Chennai
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-bengaluru" title="Software Testing Course in Bengaluru">
                                    Software Testing Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-pune" title="Software Testing Course in Pune">
                                    Software Testing Course in Pune
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-kolkata" title="Software Testing Course in Kolkata">
                                    Software Testing Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-hyderabad" title="Software Testing Course in Hyderabad">
                                    Software Testing Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Data Science Location Wise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Data Science City Wise</h3>
                        <ul>
                            <li className='flex flex-col space-y-2'>
                                <FooterLink href="/data-science-course-in-mumbai" title="Data Science Course in Mumbai">
                                    Data Science Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-delhi" title="Data Science Course in Delhi">
                                    Data Science Course in Delhi
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-ahmedabad" title="Data Science Course in Ahmedabad">
                                    Data Science Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-chennai" title="Data Science Course in Chennai">
                                    Data Science Course in Chennai
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-bengaluru" title="Data Science Course in Bengaluru">
                                    Data Science Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-pune" title="Data Science Course in Pune">
                                    Data Science Course in Pune
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-kolkata" title="Data Science Course in Kolkata">
                                    Data Science Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-hyderabad" title="Data Science Course in Hyderabad">
                                    Data Science Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Business Intelligence Location Wise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Business Intelligence City Wise</h3>
                        <ul>
                            <li className='flex flex-col space-y-2'>
                                <FooterLink href="/business-intelligence-course-in-mumbai" title="Business Intelligence Course in Mumbai">
                                    Business Intelligence Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-delhi" title="Business Intelligence Course in Delhi">
                                    Business Intelligence Course in delhi
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-ahmedabad" title="Business Intelligence Course in Ahmedabad">
                                    Business Intelligence Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-chennai" title="Business Intelligence Course in Chennai">
                                    Business Intelligence Course in Chennai
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-bengaluru" title="Business Intelligence Course in Bengaluru">
                                    Business Intelligence Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-pune" title="Business Intelligence Course in Pune">
                                    Business Intelligence Course in Pune
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-kolkata" title="Business Intelligence Course in Kolkata">
                                    Business Intelligence Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-hyderabad" title="Business Intelligence Course in Hyderabad">
                                    Business Intelligence Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Artificial Intelligence Location Wise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Artificial Intelligence City Wise</h3>
                        <ul>
                            <li className='flex flex-col space-y-2'>
                                <FooterLink href="/artificial-intelligence-course-in-mumbai" title="Artificial Intelligence Course in Mumbai">
                                    Artificial Intelligence Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-delhi" title="Artificial Intelligence Course in Delhi">
                                    Artificial Intelligence Course in delhi
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-ahmedabad" title="Artificial Intelligence Course in Ahmedabad">
                                    Artificial Intelligence Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-chennai" title="Artificial Intelligence Course in Chennai">
                                    Artificial Intelligence Course in Chennai
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-bengaluru" title="Artificial Intelligence Course in Bengaluru">
                                    Artificial Intelligence Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-pune" title="Artificial Intelligence Course in Pune">
                                    Artificial Intelligence Course in Pune
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-kolkata" title="Artificial Intelligence Course in Kolkata">
                                    Artificial Intelligence Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-hyderabad" title="Artificial Intelligence Course in Hyderabad">
                                    Artificial Intelligence Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>

                    {/* Digital Marketing Location Wise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Digital Marketing City Wise</h3>
                        <ul>
                            <li className='flex flex-col space-y-2'>
                                <FooterLink href="/digital-marketing-courses-in-mumbai" title="Digital Marketing Course in Mumbai">
                                    Digital Marketing Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-delhi" title="Digital Marketing Course in Delhi">
                                    Digital Marketing Course in delhi
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-ahmedabad" title="Digital Marketing Course in Ahmedabad">
                                    Digital Marketing Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-chennai" title="Digital Marketing Course in Chennai">
                                    Digital Marketing Course in Chennai
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-bengaluru" title="Digital Marketing Course in Bengaluru">
                                    Digital Marketing Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/digital-marketing-courses-in-pune" title="Digital Marketing Course in Pune">
                                    Digital Marketing Course in Pune
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-kolkata" title="Digital Marketing Course in Kolkata">
                                    Digital Marketing Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-hyderabad" title="Digital Marketing Course in Hyderabad">
                                    Digital Marketing Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link
                    href="/locations-we-serve"
                    title="View All Locations We Serve"
                    className={`mt-2 inline-block px-6 py-2 border-2 text-md font-semibold rounded-md transition-all duration-300 ease-in-out ${pathname === "/locations-we-serve" ? "bg-brand text-white border-brand" : "border-brand text-orange-400 hover:bg-brand hover:text-white"}`}
                >
                    View All
                </Link>
            </div>
        </section>
    );
};

export default CityFooter;

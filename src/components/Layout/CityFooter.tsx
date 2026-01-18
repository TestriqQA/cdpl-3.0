'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`hover:text-orange-400 hover:translate-x-2 active:text-orange-400 active:translate-x-2 transition-all duration-300 ease-in-out text-sm ${isActive ? "text-orange-400 translate-x-2" : "text-gray-300"}`}
        >
            {children}
        </Link>
    );
};

const CityFooter = () => {
    const pathname = usePathname();
    return (
        <footer className="bg-gray-800 text-white">
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
                                <FooterLink href="/software-testing-course-in-mumbai">
                                    Software Testing Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-delhi">
                                    Software Testing Course in Delhi
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-ahmedabad">
                                    Software Testing Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-chennai">
                                    Software Testing Course in Chennai
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-bengaluru">
                                    Software Testing Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-pune">
                                    Software Testing Course in Pune
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-kolkata">
                                    Software Testing Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/software-testing-course-in-hyderabad">
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
                                <FooterLink href="/data-science-course-in-mumbai">
                                    Data Science Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-delhi">
                                    Data Science Course in Delhi
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-ahmedabad">
                                    Data Science Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-chennai">
                                    Data Science Course in Chennai
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-bengaluru">
                                    Data Science Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-pune">
                                    Data Science Course in Pune
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-kolkata">
                                    Data Science Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/data-science-course-in-hyderabad">
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
                                <FooterLink href="/business-intelligence-course-in-mumbai">
                                    Business Intelligence Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-delhi">
                                    Business Intelligence Course in delhi
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-ahmedabad">
                                    Business Intelligence Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-chennai">
                                    Business Intelligence Course in Chennai
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-bengaluru">
                                    Business Intelligence Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-pune">
                                    Business Intelligence Course in Pune
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-kolkata">
                                    Business Intelligence Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/business-intelligence-course-in-hyderabad">
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
                                <FooterLink href="/artificial-intelligence-course-in-mumbai">
                                    Artificial Intelligence Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-delhi">
                                    Artificial Intelligence Course in delhi
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-ahmedabad">
                                    Artificial Intelligence Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-chennai">
                                    Artificial Intelligence Course in Chennai
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-bengaluru">
                                    Artificial Intelligence Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-pune">
                                    Artificial Intelligence Course in Pune
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-kolkata">
                                    Artificial Intelligence Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/artificial-intelligence-course-in-hyderabad">
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
                                <FooterLink href="/digital-marketing-courses-in-mumbai">
                                    Digital Marketing Course in Mumbai
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-delhi">
                                    Digital Marketing Course in delhi
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-ahmedabad">
                                    Digital Marketing Course in Ahmedabad
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-chennai">
                                    Digital Marketing Course in Chennai
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-bengaluru">
                                    Digital Marketing Course in Bengaluru
                                </FooterLink>

                                <FooterLink href="/digital-marketing-courses-in-pune">
                                    Digital Marketing Course in Pune
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-kolkata">
                                    Digital Marketing Course in Kolkata
                                </FooterLink>

                                <FooterLink href="/digital-marketing-course-in-hyderabad">
                                    Digital Marketing Course in Hyderabad
                                </FooterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link
                    href="/locations-we-serve"
                    className={`mt-2 inline-block px-6 py-2 border-2 text-md font-semibold rounded-md transition-all duration-300 ease-in-out ${pathname === "/locations-we-serve" ? "bg-orange-700 text-white border-orange-700" : "border-orange-700 text-orange-400 hover:bg-orange-700 hover:text-white"}`}
                >
                    View All
                </Link>
            </div>
        </footer>
    );
};

export default CityFooter;
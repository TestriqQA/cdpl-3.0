// hero section
"use client";

import React, { useState, useRef } from "react";
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { Phone, Mail, CalendarDays, Home, ChevronRight, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Import react-phone-number-input for professional phone input
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  validatePhone as validatePhoneLib,
  validateFullName as validateFullNameLib
} from '@/lib/formValidation';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export function ContactHeroSection() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  // Error states
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const mobileFormRef = useRef<HTMLDivElement>(null);
  const desktopFormRef = useRef<HTMLDivElement>(null);

  useFormErrorReset([mobileFormRef, desktopFormRef], [
    setFullNameError,
    setEmailError,
    setPhoneError,
    setMessageError
  ]);

  // Loading and submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation functions
  const validateFullName = (name: string) => {
    const error = validateFullNameLib(name);
    setFullNameError(error);
    return error === null;
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('Email Address is required.');
      return false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Invalid email format.');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePhoneNumber = (phone: string | undefined) => {
    const error = validatePhoneLib(phone);
    setPhoneError(error);
    return error === null;
  };

  const validateMessage = (message: string) => {
    if (message.trim().length < 10) {
      setMessageError('Message should be at least 10 characters.');
      return false;
    }
    setMessageError(null);
    return true;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (name === 'fullName') validateFullName(value);
    if (name === 'email') validateEmail(value);
    if (name === 'message') validateMessage(value);
  };

  // Handle phone change
  const handlePhoneChange = (phone: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: phone || ''
    }));
    if (phone) validatePhoneNumber(phone);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFullNameValid = validateFullName(formData.fullName);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhoneNumber(formData.phone);
    const isMessageValid = validateMessage(formData.message);

    if (isFullNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            type: 'contact',
            source: 'Contact Page - Hero Section Form',
            interest: formData.interest,
            message: formData.message
          }),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000);

          // Reset form
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            interest: '',
            message: ''
          });
        } else {
          alert('Form submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Network error:', error);
        alert('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ]

  return (
    <>
      {/* Custom CSS for phone input */}
      <style jsx global>{`
        /* Phone input styling */
        .phone-input-container .PhoneInputInput {
          width: 100%;
          padding: 0.75rem 1rem;
          padding-left: 1rem;
          border: 2px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #1e293b;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .phone-input-container .PhoneInputInput::placeholder {
          color: #9ca3af;
          opacity: 1;
        }

        .phone-input-container .PhoneInputInput:focus {
          border-color: #ff8c00;
          ring: 2px;
          ring-color: #ff8c00;
        }

        .phone-input-container .PhoneInputInput {
          border: none;
          padding: 0;
          flex: 1;
          font-size: 0.875rem;
          color: #111827;
          background-color: transparent;
          outline: none;
        }

        .phone-input-container .PhoneInputInput::placeholder {
          color: #9ca3af;
        }

        .phone-input-container .PhoneInputInput:focus {
          outline: none;
          border: none;
          ring: 0;
        }

        .phone-input-container .PhoneInputCountry {
          margin-right: 0.5rem;
        }

        .phone-input-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.30rem 1rem;
          padding-left: 0.875rem;
          padding-right: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          background-color: transparent;
        }

        .phone-input-container:focus-within {
          border-color: #ff8c00;
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.1);
        }

        .phone-input-container.border-red-500 {
          border-color: #fca5a5;
        }

        .phone-input-container.border-red-500:focus-within {
          border-color: #ef4444;
          box-shadow: 0 0 0 2px rgba(254, 202, 202, 1);
        }

        .phone-input-container .phone-icon {
          flex-shrink: 0;
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          margin-right: 0.625rem;
        }

        .phone-input-container .PhoneInput {
          flex: 1;
          display: flex;
          align-items: center;
        }
      `}</style>

      <section className="relative isolate overflow-hidden bg-white" id="contact-hero">
        {/* themed blobs ABOVE the white background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 50% at 10% 10%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(167,139,250,0.18), transparent 60%)",
            willChange: "transform",
          }}
        />
        {/* subtle grid overlay ABOVE white, BELOW content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />


        {/* CONTENT on top */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10">

          {/* Breadcrumbs for SEO & UX */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  <a
                    href={c.href}
                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-10 items-start">
            {/* Left column: Main content + Form on mobile */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-start md:pt-1">
              <span className="md:inline-flex text-center w-fit items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-sky-700 shadow-sm backdrop-blur">
                🎓 Industry-recognized • ⚡ Fast Response <span className="opacity-70">under 24 hrs</span>
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-700">
                Contact <span className="text-brand">CDPL (Cinute Digital)</span> - Start Your Tech Career
              </h1>

              {/* Form: Display below h1 on mobile only */}
              <div className="md:hidden mt-6">
                {/* gradient outer skin + 1px border */}
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/70 via-indigo-100/60 to-orange-100/70 shadow-2xl">
                  {/* inner glass panel */}
                  <div className="rounded-[calc(1.5rem-1px)] backdrop-blur p-6 sm:p-8" ref={mobileFormRef}>
                    <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                    <p className="mt-1.5 text-slate-600">
                      Have questions about our courses or placements? Our expert counselors are here to help you.
                    </p>

                    {/* Success Message */}
                    {isSubmitted && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="text-sm font-semibold text-green-900">
                              Thank You!
                            </div>
                            <div className="text-xs text-green-700">
                              We&apos;ll get back to you soon.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      {/* Full Name Input - TestRiq Style */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            maxLength={35}
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            id="fullName"
                            className={`bg-white w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${fullNameError
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                              }`}
                          />
                        </div>
                        {fullNameError && (
                          <p className="mt-1.5 text-sm text-red-600">{fullNameError}</p>
                        )}
                      </div>

                      {/* Email Input - TestRiq Style */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            id="email"
                            className={`bg-white w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${emailError
                              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                              }`}
                          />
                        </div>
                        {emailError && (
                          <p className="mt-1.5 text-sm text-red-600">{emailError}</p>
                        )}
                      </div>

                      {/* Phone Input - TestRiq Style with react-phone-number-input */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <div className="bg-white relative">
                          <div className={`phone-input-container ${phoneError ? 'border-red-500' : ''
                            }`}>
                            <Phone className="phone-icon h-5 w-5" />
                            <PhoneInput
                              id="phone"
                              international
                              limitMaxLength={true}
                              defaultCountry="IN"
                              value={formData.phone}
                              onChange={handlePhoneChange}
                              placeholder="Enter your mobile number"
                            />
                          </div>
                        </div>
                        {phoneError && (
                          <p className="mt-1.5 text-sm text-red-600">{phoneError}</p>
                        )}
                      </div>

                      {/* Area of Interest */}
                      <div>
                        <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                          Area of Interest
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="bg-white w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-[#ff8c00] focus:ring-orange-100 transition-colors duration-300"
                        >
                          <option value="">Select…</option>
                          <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
                          <option value="Business Intelligence (BI)">Business Intelligence (BI)</option>
                          <option value="Corporate Training">Corporate Training</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Full Stack Development">Full Stack Development</option>
                          <option value="Software Testing">Software Testing</option>
                          <option value="Training & Event Services">Training & Event Services</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Tell us how we can help..."
                          id="message"
                          className={`bg-white w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${messageError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                        />
                        {messageError && (
                          <p className="mt-1.5 text-sm text-red-600">{messageError}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Submit Message'
                        )}
                      </button>
                    </form>

                    <p className="mt-4 text-[12px] text-slate-500">
                      By submitting, you agree to be contacted about admissions and courses. We respect your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg text-slate-600 max-w-prose">
                Reach India&apos;s leading ed-tech institute for <strong>Software Testing</strong>,{" "}
                <strong>Data Science &amp; AI</strong>, and <strong>Full-Stack Development</strong>. Get{" "}
                <strong>job-ready training</strong>, <strong>placement assistance</strong>, and{" "}
                <strong>industry-recognized certificates</strong> with live mentor-led classes and hands-on
                capstone projects.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Live Online Classes + Recordings",
                  "Placement Assistance & Mock Interviews",
                  "Project-based Learning & Capstones",
                  "Corporate Training & Team Upskilling",
                  "Flexible EMIs & Scholarships",
                  "Mentor Support • Doubt-solving",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Quick Contact Buttons */}
              <div className="mt-6">
                <div className="mb-2 text-sm font-semibold text-slate-700">Quick Contact Options</div>

                {/* Responsive, non-overlapping grid */}
                <div
                  className="grid gap-4 lg:gap-3 xl:gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
                >
                  {/* Call Now */}
                  <Link
                    href="tel:+918488988984"
                    aria-label="Call Now"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/90 text-white shadow-sm">
                      <Phone className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Call Now</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        +91 84-889-889-84
                      </span>
                    </span>
                  </Link>

                  {/* Email Us */}
                  <Link
                    href="mailto:contact@cinutedigital.com"
                    aria-label="Email Us"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-sm">
                      <Mail className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Email Us</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        contact@cinutedigital.com
                      </span>
                    </span>
                  </Link>

                  {/* Schedule Meeting */}
                  <Link
                    href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                    target="_blank"
                    aria-label="Schedule a Meeting"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-600/90 text-white shadow-sm">
                      <CalendarDays className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Schedule Meeting</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        Book a Call
                      </span>
                    </span>
                  </Link>
                </div>
              </div>


              <p className="mt-5 text-[15px] text-slate-600">
                Serving learners across India - Mumbai, Pune, Bengaluru &amp; beyond. Talk to our{" "}
                <strong>admissions counselors</strong> for <strong>course fees</strong>,{" "}
                <strong>syllabus &amp; roadmaps</strong>, <strong>placement support</strong>, or{" "}
                <strong>custom corporate training</strong>.
              </p>

              <p className="mt-3 text-[13px] text-slate-500">
                No spam. Our advisors respond within 24 hours with course advice, career guidance, and next steps.
              </p>
            </div>

            {/* Right column: Form on desktop only */}
            <div className="hidden md:block md:col-span-6 lg:col-span-5 relative">
              {/* gradient outer skin + 1px border */}
              <div className="rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/70 via-indigo-100/60 to-orange-100/70 shadow-2xl">
                {/* inner glass panel — constrained width */}
                <div className="rounded-[calc(1.5rem-1px)] backdrop-blur p-6 sm:p-8 w-full md:max-w-md lg:max-w-sm xl:max-w-md" ref={desktopFormRef}>
                  <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                  <p className="mt-1.5 text-slate-600">
                    Share your goals — we&apos;ll help you find the perfect course or training plan.
                  </p>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="text-sm font-semibold text-green-900">
                            Thank You!
                          </div>
                          <div className="text-xs text-green-700">
                            We&apos;ll get back to you soon.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Full Name Input - TestRiq Style */}
                    <div>
                      <label htmlFor="fullNameDesktop" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          id="fullNameDesktop"
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 bg-white ${fullNameError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                        />
                      </div>
                      {fullNameError && (
                        <p className="mt-1.5 text-sm text-red-600">{fullNameError}</p>
                      )}
                    </div>

                    {/* Email Input - TestRiq Style */}
                    <div>
                      <label htmlFor="emailDesktop" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          id="emailDesktop"
                          className={`bg-white w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${emailError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                        />
                      </div>
                      {emailError && (
                        <p className="mt-1.5 text-sm text-red-600">{emailError}</p>
                      )}
                    </div>

                    {/* Phone Input - TestRiq Style with react-phone-number-input */}
                    <div>
                      <label htmlFor="phoneDesktop" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <div className="relative bg-white">
                        <div className={`phone-input-container bg-white ${phoneError ? 'border-red-500' : ''
                          }`}>
                          <Phone className="bg-white phone-icon h-5 w-5" />
                          <PhoneInput
                            id="phoneDesktop"
                            international
                            defaultCountry="IN"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter your mobile number"
                          />
                        </div>
                      </div>
                      {phoneError && (
                        <p className="mt-1.5 text-sm text-red-600">{phoneError}</p>
                      )}
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label htmlFor="interestDesktop" className="block text-sm font-semibold text-gray-700 mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="interestDesktop"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="bg-white w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-[#ff8c00] focus:ring-orange-100 transition-colors duration-300"
                      >
                        <option value="">Select…</option>
                        <option value="Artificial Intelligence (AI)">Artificial Intelligence (AI)</option>
                        <option value="Business Intelligence (BI)">Business Intelligence (BI)</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Software Testing">Software Testing</option>
                        <option value="Training & Event Services">Training & Event Services</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="messageDesktop" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="messageDesktop"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us how we can help..."
                        className={`bg-white w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors duration-300 ${messageError
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                          }`}
                      />
                      {messageError && (
                        <p className="mt-1.5 text-sm text-red-600">{messageError}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Message'
                      )}
                    </button>
                  </form>

                  <p className="mt-4 text-[12px] text-slate-500">
                    By submitting, you agree to be contacted about admissions and courses. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';
import { useThankYouRedirect } from '@/hooks/useThankYouRedirect';
import { useRef } from 'react';
import { useFormErrorReset } from '@/hooks/useFormErrorReset';

import React, { useState, useCallback } from 'react';
import PhoneInput from '@/components/ui/PhoneNumberInput';
import CustomFlag from '../ui/CustomFlag';

import {
  validatePhone,
  validateFullName as validateFullNameLib
} from '@/lib/formValidation';
import { ArrowRight, Briefcase, CheckCircle2, Mail, User, Video, Wallet, Zap } from 'lucide-react';
import Link from 'next/link';

/**
 * HomeFinalCTASection - Strong Call to Action
 * 
 * Final conversion section with lead form, in the homepage's own style.
 */

// Same four benefits as before, each with a solid icon tile like the hero stats.
const BENEFITS = [
  { text: 'Start learning within 48 hours', Icon: Zap, tile: 'bg-brand' },
  { text: 'Live interactive classes with experts', Icon: Video, tile: 'bg-blue-600' },
  { text: 'Placement support', Icon: Briefcase, tile: 'bg-emerald-600' },
  { text: 'Flexible payment options available', Icon: Wallet, tile: 'bg-indigo-600' },
];

export default function HomeFinalCTASection() {
  const [formData, setFormData] = useState({
    fullName: '', // Changed from 'name' to 'fullName' for API consistency
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    fullName: '', // Changed from 'name' to 'fullName' for API consistency
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goToThankYou = useThankYouRedirect();

  const formRef = useRef<HTMLDivElement>(null);

  useFormErrorReset(formRef, [
    (val) => setErrors(prev => ({ ...prev, fullName: val || '' })),
    (val) => setErrors(prev => ({ ...prev, email: val || '' })),
    (val) => setErrors(prev => ({ ...prev, phone: val || '' })),
  ]);

  // Validation functions from HomeHeroSection
  const validateFullName = useCallback((fullName: string) => {
    const error = validateFullNameLib(fullName);
    if (error) {
      setErrors(prev => ({ ...prev, fullName: error }));
      return false;
    }
    setErrors(prev => ({ ...prev, fullName: '' }));
    return true;
  }, []);

  const validateEmail = useCallback((email: string) => {
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Email address is invalid' }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: '' }));
    return true;
  }, []);

  const validatePhoneNumber = useCallback((phone: string) => {
    const error = validatePhone(phone);
    setErrors(prev => ({ ...prev, phone: error || '' }));
    return error === null;
  }, []);

  const validateForm = useCallback(() => {
    const isNameValid = validateFullName(formData.fullName);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhoneNumber(formData.phone);
    return isNameValid && isEmailValid && isPhoneValid;
  }, [formData, validateFullName, validateEmail, validatePhoneNumber]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Home Page - Get Started Section',
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully, emails sent.');
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: ''
        });

        // Only once the API has accepted the lead. The failure paths are
        // untouched, so a rejected submit leaves the visitor on the form.
        goToThankYou();
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData.message);
        // You might want to set an error state here to show inline error
      }
    } catch (error) {
      console.error('Network error during form submission:', error);
      // You might want to set an error state here to show inline error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Re-validate on change to clear error messages
    if (e.target.name === 'fullName') validateFullName(e.target.value);
    if (e.target.name === 'email') validateEmail(e.target.value);
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData(prev => ({
      ...prev,
      phone: value || '',
    }));
  };

  return (
    // Same visual language as the homepage hero and section headers: light
    // slate/blue wash with soft orange and blue glows, an orange label pill,
    // dark heading with the key word in brand orange, solid icon tiles,
    // white cards and a brand-orange primary action.
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 lg:py-16"
      aria-labelledby="final-cta-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              Get Started
            </span>
            <h2 id="final-cta-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Ready to <span className="text-brand">Transform</span> Your Career?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join learners who have successfully launched their careers in Software Testing, Data Science, and AI/ML with CDPL&apos;s industry-ready training.
            </p>

            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {BENEFITS.map(({ text, Icon, tile }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur-sm transition hover:shadow-md"
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${tile} text-white shadow-md`} aria-hidden="true">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-bold text-gray-800 shadow-md transition-all duration-300 hover:border-brand hover:text-brand"
            >
              Explore courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Lead form, styled like the hero's "Talk to an Advisor" card */}
          <div ref={formRef} className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Started Today</h3>
              <p className="mt-1 text-sm text-gray-600">
                Fill the form below and our team will contact you within 24 hours.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="text-sm font-semibold text-green-900">Thank You!</div>
                    <div className="text-xs text-green-700">We&apos;ll contact you within 2 hours.</div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    maxLength={35}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => validateFullName(formData.fullName)}
                    required
                    className={`w-full rounded-lg border py-3 pl-10 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your full name"
                    style={{ color: '#1e293b' }}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => validateEmail(formData.email)}
                    required
                    className={`w-full rounded-lg border py-3 pl-10 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your email address"
                    style={{ color: '#1e293b' }}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mobile Number *</label>
                <div className="relative">
                  <PhoneInput
                    international
                    limitMaxLength={true}
                    defaultCountry="IN"
                    flagComponent={CustomFlag}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => validatePhoneNumber(formData.phone)}
                    className={`phone-input-container ${errors.phone ? 'error' : ''}`}
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Get Started Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-gray-200 pt-5 text-sm text-gray-600">
              {['100% Privacy', 'No Spam', 'Quick Response'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Phone input: country and number as two separate boxes */
        .phone-input-container {
          display: flex;
          align-items: stretch;
          width: 100%;
          gap: 0.5rem;
          background: transparent;
        }
        .phone-input-container .PhoneInputCountry {
          display: flex !important;
          align-items: center !important;
          padding: 0 0.5rem !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          background-color: white !important;
          transition: all 0.3s ease !important;
        }
        .phone-input-container .PhoneInputInput {
          flex-grow: 1 !important;
          padding: 0.75rem 1rem !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.5rem !important;
          outline: none !important;
          background-color: white !important;
          color: #1e293b !important;
          font-size: 0.875rem !important;
          transition: all 0.3s ease !important;
        }
        .phone-input-container .PhoneInputInput:focus {
          border-color: #f97316 !important;
          box-shadow: 0 0 0 2px #ffedd5 !important;
        }
        .phone-input-container.error .PhoneInputCountry,
        .phone-input-container.error .PhoneInputInput {
          border-color: #ef4444 !important;
        }
      `}</style>
    </section>
  );
}

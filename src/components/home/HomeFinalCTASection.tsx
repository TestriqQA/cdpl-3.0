'use client';
import { useRef } from 'react';
import { useFormErrorReset } from '@/hooks/useFormErrorReset';

import React, { useState, useCallback } from 'react';
import PhoneInput from '@/components/ui/PhoneNumberInput';
import CustomFlag from '../ui/CustomFlag';

import {
  validatePhone,
  validateFullName as validateFullNameLib
} from '@/lib/formValidation';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, User } from 'lucide-react';

/**
 * HomeFinalCTASection - Strong Call to Action
 * 
 * Final conversion section with lead form
 * Enhanced with a light, modern, and visually appealing UI/UX.
 */
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
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
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
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden">
      {/* Decorative Background - Light and Subtle */}
      <div className="absolute inset-0 opacity-50" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-gray-900"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
              Ready to <span className="text-indigo-600">Transform</span> Your Career?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-600">
              Join learners who have successfully launched their careers in Software Testing, Data Science, and AI/ML with CDPL&apos;s industry-ready training.
            </p>

            {/* Benefits - Enhanced UI */}
            <div className="space-y-4 mb-8">
              {[
                'Start learning within 48 hours',
                'Live interactive classes with experts',
                'placement support',
                'Flexible payment options available',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-100 border border-green-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Right Column - Lead Form - Enhanced UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div ref={formRef} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10 transform hover:shadow-3xl transition-shadow duration-300">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600">
                  Fill the form below and our team will contact you within 24 hours.
                </p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-green-900">
                        Thank You!
                      </div>
                      <div className="text-xs text-green-700">
                        We'll contact you within 2 hours.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name Input - TestRiq Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      maxLength={35}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => validateFullName(formData.fullName)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Enter your full name"
                      style={{ color: '#1e293b' }}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Input - TestRiq Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => validateEmail(formData.email)}
                      required
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Enter your email address"
                      style={{ color: '#1e293b' }}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Input - TestRiq Style with react-phone-number-input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number *
                  </label>
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
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Started Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>

              {/* Trust Indicators - Enhanced UI */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>100% Privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }

          /* Phone Input Styling - Separate Boxes Style */
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
      </div>
    </section>
  );
}

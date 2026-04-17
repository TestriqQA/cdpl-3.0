"use client";

import { useState, useRef } from "react";
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { User, Mail, CheckCircle2, TrendingUp } from "lucide-react";

// Import react-phone-number-input for professional phone input
import PhoneInput from 'react-phone-number-input';
import CustomFlag from '../ui/CustomFlag';

import { validateFullName as validateFullNameLib, validatePhone } from '@/lib/formValidation';

export default function GenerativeAICourseLeadForm({
    className = '',
    variant = 'elevated',
    title = 'Request a Callback',
    subtitle = 'Want to know exactly how much it costs & when the next batch starts? Tell us where to call you!',
    source = 'Generative AI Course Page - Hero Section'
}: {
    className?: string;
    variant?: 'default' | 'elevated';
    title?: string;
    subtitle?: string;
    source?: string;
}) {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    // Validation errors
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    const formRef = useRef<HTMLFormElement>(null);

    useFormErrorReset(formRef, [
        setFullNameError,
        setEmailError,
        setPhoneError
    ]);

    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation functions (same as home page)
    const validateFullName = (name: string): boolean => {
        const error = validateFullNameLib(name);
        setFullNameError(error);
        return error === null;
    };

    const validateEmail = (email: string): boolean => {
        if (!email.trim()) {
            setEmailError('Email address is required.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            return false;
        }
        setEmailError(null);
        return true;
    };

    const validatePhoneNumber = (phone: string): boolean => {
        const error = validatePhone(phone);
        setPhoneError(error);
        return error === null;
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Real-time validation
        if (name === 'fullName') validateFullName(value);
        if (name === 'email') validateEmail(value);
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

        if (isFullNameValid && isEmailValid && isPhoneValid) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        source: source
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
                        phone: ''
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

    return (
        <>
            {/* Custom CSS for phone input */}
            <style jsx global>{`
        /* Phone input styling */
        .phone-input-container .PhoneInputInput {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #1e293b;
          outline: none;
          transition: all 0.3s;
        }

        .phone-input-container .PhoneInputInput:focus {
          border-color: #7E22CE;
          ring: 2px;
          ring-color: rgba(126, 34, 206, 0.2);
        }

        .phone-input-container.border-red-500 .PhoneInputInput {
          border-color: #ef4444;
        }

        .phone-input-container .PhoneInputCountrySelect {
          margin-right: 0.5rem;
          padding: 0.5rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background: white;
          color: #1e293b;
        }

        .phone-input-container .PhoneInputCountryIcon {
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                aria-label="Quick enrollment form"
                className={[
                    'rounded-2xl border bg-white/92 backdrop-blur-xl p-6 sm:p-8',
                    variant === 'elevated' ? 'shadow-2xl' : 'shadow-sm',
                    'border-slate-200',
                    className,
                ].join(' ')}
            >
                {/* Form Header - Same as home page */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-slate-900">
                            {title}
                        </h2>

                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                        {subtitle}
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
                                    We&apos;ll contact you within 2 hours.
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form Fields */}
                <div className="space-y-4">
                    {/* Full Name Input - Same as home page */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                            Full Name *
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                maxLength={35}
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                onBlur={() => validateFullName(formData.fullName)}
                                required
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7E22CE] focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your full name"
                                style={{ color: '#1e293b' }}
                            />
                        </div>
                        {fullNameError && (
                            <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
                        )}
                    </div>

                    {/* Email Input - Same as home page */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                            Email Address *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={() => validateEmail(formData.email)}
                                required
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#7E22CE] focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your email address"
                                style={{ color: '#1e293b' }}
                            />
                        </div>
                        {emailError && (
                            <p className="text-red-500 text-xs mt-1">{emailError}</p>
                        )}
                    </div>

                    {/* Phone Input - Same as home page with react-phone-number-input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
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
                                className={`phone-input-container ${phoneError ? 'border-red-500' : ''
                                    }`}
                                placeholder="Enter phone number"
                            />
                        </div>
                        {phoneError && (
                            <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                        )}
                    </div>

                    {/* Submit Button - Same as home page */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 bg-[#7E22CE] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <TrendingUp className="h-5 w-5" />
                                Get Started Now
                            </>
                        )}
                    </button>

                    <p className="text-xs text-slate-500">
                        By submitting, you agree to our <a href="https://cinutedigital.com/privacy-policy" title="Privacy Policy">Privacy Policy</a>.
                    </p>

                </div>
            </form>
        </>
    );
}

"use client";

import { useState, useRef } from "react";
import { User, Mail, TrendingUp, CheckCircle2 } from "lucide-react";
import PhoneInput from 'react-phone-number-input';

import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { validatePhone } from '@/lib/formValidation';

export default function DesktopLeadForm() {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    // Error states
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    const formRef = useRef<HTMLFormElement>(null);

    useFormErrorReset(formRef, [
        setFullNameError,
        setEmailError,
        setPhoneError
    ]);

    // Loading and submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation functions
    const validateFullName = (name: string) => {
        if (!name) {
            setFullNameError('Full Name is required.');
            return false;
        }
        if (name.trim().length < 3) {
            setFullNameError('Full Name must be at least 3 characters.');
            return false;
        }
        setFullNameError(null);
        return true;
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
                        source: 'Courses Page Hero Section - Form'
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
        <div className="bg-white/95 rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 sticky top-6">
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

                .phone-input-container .PhoneInputInput::placeholder {
                    color: #64748b;
                    opacity: 1;
                }

                .phone-input-container .PhoneInputInput:focus {
                    border-color: #ff8c00;
                    ring: 2px;
                    ring-color: #ff8c00;
                    box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2);
                }

                .phone-input-container.border-red-500 .PhoneInputInput {
                    border-color: #ef4444;
                }

                .phone-input-container .PhoneInputCountry {
                    margin-right: 0.5rem;
                }

                /* Country dropdown styling */
                .phone-input-container .PhoneInputCountrySelect {
                    color: #1e293b;
                    font-weight: 500;
                }

                .phone-input-container .PhoneInputCountrySelectArrow {
                    color: #64748b;
                }

                /* Fix placeholder visibility for all inputs */
                input::placeholder {
                    color: #64748b !important;
                    opacity: 1 !important;
                }
            `}</style>

            {/* Form Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                        Talk to an Advisor
                    </h3>
                    <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                        <span className="text-xs font-bold text-white">FREE</span>
                    </div>
                </div>
                <p className="text-sm font-semibold text-brand">
                    Get FREE Demo Class Instantly!
                </p>
                <p className="text-xs text-slate-600 mt-1">
                    Fill the form below and start learning today
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>

                {/* Full Name Input */}
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
                            onChange={handleInputChange}
                            onBlur={() => validateFullName(formData.fullName)}
                            required
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your full name"
                            style={{ color: '#1e293b' }}
                        />
                    </div>
                    {fullNameError && (
                        <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
                    )}
                </div>

                {/* Email Input */}
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
                            onChange={handleInputChange}
                            onBlur={() => validateEmail(formData.email)}
                            required
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter your email address"
                            style={{ color: '#1e293b' }}
                        />
                    </div>
                    {emailError && (
                        <p className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                </div>

                {/* Phone Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                    </label>
                    <div className="relative">
                        <PhoneInput
                            international
                            limitMaxLength={true}
                            defaultCountry="IN"
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

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

                {/* Trust Badges */}
                <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                            <span>Instant Access</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                            <span>No Spam</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                            <span>100% Secure</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

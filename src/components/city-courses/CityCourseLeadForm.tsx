"use client";

import React, { useState } from "react";
import { TrendingUp, User, Mail, CheckCircle2 } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
    validateFullName as validateFullNameLib,
    validateEmail as validateEmailLib,
    validatePhone as validatePhoneLib
} from '@/lib/formValidation';
import { motion, type Variants } from "framer-motion";

export interface CityCourseLeadFormProps {
    className?: string;
    tracks?: string[];
    onSubmit?: (data: any) => void;
    variants?: Variants;
}

export default function CityCourseLeadForm({
    className = "",
    onSubmit,
    variants
}: CityCourseLeadFormProps) {
    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    // Error states
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    // Loading and submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation functions
    // Validation functions - strict version using library
    // Import dynamically or assume imports at top. 
    // We'll use the top-level import strategy as done in other files.
    // For now, replacing logic with wrappers around lib functions.

    const validateFullName = (name: string) => {
        const error = validateFullNameLib(name);
        setFullNameError(error);
        return error === null;
    };

    const validateEmail = (email: string) => {
        const error = validateEmailLib(email);
        setEmailError(error);
        return error === null;
    };

    const validatePhoneNumber = (phone: string | undefined) => {
        const error = validatePhoneLib(phone);
        setPhoneError(error);
        return error === null;
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "fullName") validateFullName(value);
        if (name === "email") validateEmail(value);
    };

    const handlePhoneChange = (phone: string | undefined) => {
        setFormData((prev) => ({
            ...prev,
            phone: phone || "",
        }));
        if (phone) validatePhoneNumber(phone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isFullNameValid = validateFullName(formData.fullName);
        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhoneNumber(formData.phone);

        if (isFullNameValid && isEmailValid && isPhoneValid) {
            setIsSubmitting(true);
            try {
                if (onSubmit) {
                    // If a custom handler is provided
                    onSubmit(formData);
                    setIsSubmitted(true);
                    setTimeout(() => setIsSubmitted(false), 5000);
                    setFormData({ fullName: "", email: "", phone: "" });
                } else {
                    // Default submission logic
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...formData,
                            // Source will be handled by the parent or use a default here?
                            // Best to let the parent handle the API call or stick to the Home Hero pattern.
                            // Since Home Hero handles it inside the component, we'll do the same but verify the source.
                            source: 'City Course Page - Hero Section',
                            // Location needs to be passed in ideally or extracted from URL in backend?
                            // For now, we just send form data. The API route can extract location from referer if needed,
                            // BUT the requested requirements didn't specify passing location prop to form, just input fields.
                            // We'll send the raw data.
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
                        });
                    } else {
                        alert('Form submission failed. Please try again.');
                    }
                }
            } catch (error) {
                console.error("Network error:", error);
                alert("Network error. Please check your connection and try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
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

            <motion.div
                variants={variants}
                className={`bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 ${className}`}
            >
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
                    <p className="text-sm font-semibold text-orange-600">
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
                <form onSubmit={handleSubmit} className="space-y-4">

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
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${fullNameError ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter your full name"
                                style={{ color: "#1e293b" }}
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
                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${emailError ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder="Enter your email address"
                                style={{ color: "#1e293b" }}
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
                                className={`phone-input-container ${phoneError ? "border-red-500" : ""
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
                        className="w-full py-3 px-6 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
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
            </motion.div>
        </>
    );
}

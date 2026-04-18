"use client";

import React, { useState, useRef } from "react";
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { Phone, Mail, User, CheckCircle2 } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import CustomFlag from '../ui/CustomFlag';

import {
    validatePhone as validatePhoneLib,
    validateFullName as validateFullNameLib
} from '@/lib/formValidation';

// Types
type FormState = {
    fullName: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
};

interface ContactHeroFormProps {
    idPrefix?: string;
    onSuccess?: () => void;
}

export function ContactHeroForm({ idPrefix = "", onSuccess }: ContactHeroFormProps) {
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

    const containerRef = useRef<HTMLDivElement>(null);

    useFormErrorReset(containerRef, [
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
                    if (onSuccess) onSuccess();
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

    return (
        <div ref={containerRef}>
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
          
          /* Optimized transition to avoid non-composited animations warning if possible, 
             but border-color support is widely standard. 
             If strict 100% perflab is needed, we could remove border-color transition. 
             But keeping it for UX. 
          */
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
                {/* Full Name Input */}
                <div>
                    <label htmlFor={`${idPrefix}fullName`} className="block text-sm font-semibold text-gray-700 mb-2">
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
                            id={`${idPrefix}fullName`}
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

                {/* Email Input */}
                <div>
                    <label htmlFor={`${idPrefix}email`} className="block text-sm font-semibold text-gray-700 mb-2">
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
                            id={`${idPrefix}email`}
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

                {/* Phone Input */}
                <div>
                    <label htmlFor={`${idPrefix}phone`} className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Number *
                    </label>
                    <div className="bg-white relative">
                        <div className={`phone-input-container ${phoneError ? 'border-red-500' : ''
                            }`}>
                            <Phone className="phone-icon h-5 w-5" />
                            <PhoneInput
                                id={`${idPrefix}phone`}
                                international
                                limitMaxLength={true}
                                defaultCountry="IN"
                                flagComponent={CustomFlag}
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
                    <label htmlFor={`${idPrefix}interest`} className="block text-sm font-semibold text-gray-700 mb-2">
                        Area of Interest
                    </label>
                    <select
                        id={`${idPrefix}interest`}
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
                    <label htmlFor={`${idPrefix}message`} className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us how we can help..."
                        id={`${idPrefix}message`}
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
        </div>
    );

}

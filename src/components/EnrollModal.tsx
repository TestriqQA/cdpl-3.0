'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, CheckCircle2, Loader2, GraduationCap } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';

import { validatePhone, validateFullName as validateFullNameLib } from '@/lib/formValidation';
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { useRef } from 'react';

interface EnrollModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName?: string;
    source?: string;
    location?: string;
}

const EnrollModal: React.FC<EnrollModalProps> = ({
    isOpen,
    onClose,
    courseName = "Course",
    source,
    location
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

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

    const formRef = useRef<HTMLDivElement>(null);

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
                        phone: formData.phone || 'Not provided',
                        type: 'enrollment',
                        source: source || `${courseName} Course Page - Enroll Now`,
                        courseName,
                        location
                    }),
                });

                if (response.ok) {
                    console.log('Enrollment request submitted successfully');
                    setIsSubmitted(true);

                    setTimeout(() => {
                        setIsSubmitted(false);
                        setFormData({
                            fullName: '',
                            email: '',
                            phone: ''
                        });
                        onClose();
                    }, 3000);
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

    // Handle modal close - Memoized with useCallback
    const handleClose = useCallback(() => {
        if (!isSubmitting) {
            setFormData({
                fullName: '',
                email: '',
                phone: ''
            });
            setFullNameError(null);
            setEmailError(null);
            setPhoneError(null);
            setIsSubmitted(false);
            onClose();
        }
    }, [isSubmitting, onClose]);

    // Handle escape key - Now stable with memoized handleClose
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !isSubmitting) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isSubmitting, handleClose]);

    if (!mounted) return null;

    return createPortal(
        <>
            {/* Custom CSS for phone input */}
            <style jsx global>{`
        /* Country dropdown styling */
        .PhoneInputCountrySelect {
          color: #1e293b !important;
          font-weight: 500 !important;
        }
      `}</style>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            ref={formRef}
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 relative">
                                <button
                                    onClick={handleClose}
                                    disabled={isSubmitting}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors disabled:opacity-50"
                                    aria-label="Close modal"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Enroll Now</h2>
                                        <p className="text-sm text-white/90 mt-0.5">Start your journey in {courseName}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Enrollment Received!</h3>
                                        <p className="text-gray-600 mb-1">
                                            Thank you for enrolling in {courseName}.
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Our team will contact you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Full Name Field */}
                                        <div>
                                            <label htmlFor="enroll-fullName" className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                                <input
                                                    type="text"
                                                    id="enroll-fullName"
                                                    maxLength={35}
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your full name"
                                                    className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${fullNameError
                                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                                        : 'border-gray-200 focus:border-orange-500 focus:ring-orange-100'
                                                        }`}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            {fullNameError && (
                                                <p className="mt-1.5 text-sm text-red-600">{fullNameError}</p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label htmlFor="enroll-email" className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                                <input
                                                    type="email"
                                                    id="enroll-email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your email address"
                                                    className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${emailError
                                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                                                        : 'border-gray-200 focus:border-orange-500 focus:ring-orange-100'
                                                        }`}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            {emailError && (
                                                <p className="mt-1.5 text-sm text-red-600">{emailError}</p>
                                            )}
                                        </div>

                                        {/* Phone Field (Mandatory) */}
                                        <div>
                                            <label htmlFor="enroll-phone" className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <PhoneInput
                                                    id="enroll-phone"
                                                    international
                                                    limitMaxLength={true}
                                                    defaultCountry="IN"
                                                    value={formData.phone}
                                                    onChange={handlePhoneChange}
                                                    placeholder="Enter your mobile number (e.g., 98765 43210)"
                                                    className={`w-full [&>input]:pl-4 [&>input]:pr-4 [&>input]:py-3 [&>input]:border-2 [&>input]:rounded-lg [&>input]:text-gray-900 [&>input]:placeholder:text-gray-400 [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:transition-all [&>input]:placeholder-opacity-100 [&>input]:placeholder-shown:text-gray-400 ${phoneError
                                                        ? '[&>input]:border-red-300 [&>input]:focus:border-red-500 [&>input]:focus:ring-red-200'
                                                        : '[&>input]:border-gray-200 [&>input]:focus:border-orange-500 [&>input]:focus:ring-orange-100'
                                                        }`}
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                            {phoneError && (
                                                <p className="mt-1.5 text-sm text-red-600">{phoneError}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <GraduationCap className="w-5 h-5" />
                                                    Enroll Now
                                                </>
                                            )}
                                        </button>

                                        {/* Privacy Note */}
                                        <p className="text-xs text-center text-gray-500 mt-3">
                                            By enrolling, you agree to receive course information via email and phone.
                                            <br />
                                            We respect your privacy and won&apos;t spam you.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
};

export default EnrollModal;

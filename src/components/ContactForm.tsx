'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import react-phone-number-input for professional phone input
// Use dynamic import to ensure it's only loaded on the client side
const PhoneInput = dynamic(() => import('react-phone-number-input'), { ssr: false });
import CustomFlag from './ui/CustomFlag';

import {
  validateFullName as validateFullNameLib,
  validateEmail as validateEmailLib,
  validatePhone as validatePhoneLib
} from '@/lib/formValidation';

// Define the props for the ContactForm component
interface ContactFormProps {
  // Optional prop to customize the submit button text
  submitButtonText?: string;
  // Optional prop to customize the form header text
  headerText?: string;
  // Optional prop to customize the form sub-header text
  subHeaderText?: string;
  // Optional prop to customize the success message sub-header text
  successSubHeaderText?: string;
  // Optional prop to customize the success message body text
  successBodyText?: string;
  // Optional prop to customize the success message button text
  successButtonText?: string;
  // Optional prop to customize the submit button color classes
  submitButtonClasses?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  submitButtonText = 'Get Started Now',
  headerText = 'Talk to an Advisor',
  subHeaderText = 'Get FREE Demo Class Instantly!',
  successSubHeaderText = 'Thank you for your interest.',
  successBodyText = 'A dedicated advisor will contact you within 2 hours.',
  successButtonText = 'Submit Another Inquiry',
  submitButtonClasses = 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700',
}) => {
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
  // Imported from formValidation.ts - simplified local usage
  const validateFullName = useCallback((name: string) => {
    const error = validateFullNameLib(name);
    setFullNameError(error);
    return error === null;
  }, []);

  const validateEmail = useCallback((email: string) => {
    const error = validateEmailLib(email);
    setEmailError(error);
    return error === null;
  }, []);

  const validatePhoneNumber = useCallback((phone: string | undefined) => {
    const error = validatePhoneLib(phone);
    setPhoneError(error);
    return error === null;
  }, []);

  // Handle input changes for text fields
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
    // Real-time validation (kept as per original Hero section logic)
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
          body: JSON.stringify(formData),
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
        } else {
          const errorData = await response.json();
          console.error('Form submission failed:', errorData.message);
          // Fallback to alert for API errors
          alert(`Submission failed: ${errorData.message || 'An unknown error occurred.'}`);
        }
      } catch (error) {
        console.error('Network error during form submission:', error);
        // Fallback to alert for network errors
        alert('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Success Message Component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full py-16 text-center"
    >
      <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Inquiry Received!
      </h3>
      <p className="text-lg text-gray-600 mb-6">
        {successBodyText}
      </p>
      <button
        onClick={() => setIsSubmitted(false)}
        className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand text-white font-bold rounded-lg shadow-lg transition-all duration-300"
      >
        {successButtonText}
      </button>
    </motion.div>
  );

  // Form Fields Component
  const FormFields = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name Input */}
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 ${submitButtonClasses} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>{submitButtonText}</span>
        )}
      </button>
    </form>
  );

  return (
    <div ref={formRef}>
      {/* Form Header - Catchy and Actionable */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-900">
            {isSubmitted ? 'Inquiry Received!' : headerText}
          </h3>
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
            <span className="text-xs font-bold text-white">FREE</span>
          </div>
        </div>
        <p className="text-sm font-semibold text-brand">
          {isSubmitted ? successSubHeaderText : subHeaderText}
        </p>
        <p className="text-xs text-slate-600 mt-1">
          {isSubmitted ? successBodyText : 'Fill the form below and start learning today'}
        </p>
      </div>

      {isSubmitted ? <SuccessMessage /> : <FormFields />}
    </div>
  );
};

export default ContactForm;

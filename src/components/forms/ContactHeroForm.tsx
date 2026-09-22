"use client";

import React, { useState, useRef } from "react";
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { useThankYouRedirect } from '@/hooks/useThankYouRedirect';
import { ArrowLeft, ArrowRight, Phone, User, CheckCircle2 } from "lucide-react";
import PhoneInput from '@/components/ui/PhoneNumberInput';
import CustomFlag from '../ui/CustomFlag';

import {
    validatePhone as validatePhoneLib,
    validateFullName as validateFullNameLib
} from '@/lib/formValidation';

/**
 * TWO-STEP FORM
 * =============
 * Step 1 collects the contact details and does NOT submit: the answers are
 * held in component state and the form swaps to step 2, which asks the two
 * qualifying questions and posts everything in a single request. Nothing
 * reaches /api/contact until the visitor completes step 2, so a half-finished
 * form never produces a lead or an email.
 *
 * The heading and sub-heading live here rather than in ContactHeroSection
 * because they change between the steps; the section previously rendered them
 * as static markup above this component, in both its mobile and desktop
 * blocks.
 */
type Step = 1 | 2;

// Types
type FormState = {
    fullName: string;
    /** WhatsApp number. Kept as `phone` so it still satisfies the phone
     *  validation and the `phone` field /api/contact requires. */
    phone: string;
    /** "What are you looking to learn?" — reuses the existing `interest`
     *  field, which already reaches the admin email and the Google Sheet. */
    interest: string;
    /** Step 2: "When are you planning to start your course?" */
    timeline: string;
    /** Step 2: "What best describes you right now?" */
    currentStatus: string;
};

const TIMELINE_OPTIONS = [
    'I want to start now',
    'Within 1 month',
    'Within 1-2 months',
    "I'm just exploring",
] as const;

const STATUS_OPTIONS = [
    'Currently Looking for a Job',
    'College Student',
    'Recent Graduate',
    'Working Professional',
    'Looking for a Career Change',
    'Other',
] as const;

const STEP_HEADINGS: Record<Step, { title: string; subtitle: string }> = {
    1: {
        title: "Let's Find the Right Course for You",
        subtitle: 'Tell us what you are looking for and we will help you choose the right option.',
    },
    2: {
        title: 'Almost There, One Quick Question',
        subtitle: 'This helps our advisor prepare the right guidance before calling you.',
    },
};

interface ContactHeroFormProps {
    idPrefix?: string;
    onSuccess?: () => void;
}

export function ContactHeroForm({ idPrefix = "", onSuccess }: ContactHeroFormProps) {
    const [step, setStep] = useState<Step>(1);

    const [formData, setFormData] = useState<FormState>({
        fullName: "",
        phone: "",
        interest: "",
        timeline: "",
        currentStatus: "",
    });

    // Error states
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [interestError, setInterestError] = useState<string | null>(null);
    const [timelineError, setTimelineError] = useState<string | null>(null);
    const [currentStatusError, setCurrentStatusError] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    useFormErrorReset(containerRef, [
        setFullNameError,
        setPhoneError,
        setInterestError,
        setTimelineError,
        setCurrentStatusError
    ]);

    // Loading and submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const goToThankYou = useThankYouRedirect();

    // Validation functions
    const validateFullName = (name: string) => {
        const error = validateFullNameLib(name);
        setFullNameError(error);
        return error === null;
    };

    const validatePhoneNumber = (phone: string | undefined) => {
        const error = validatePhoneLib(phone);
        setPhoneError(error);
        return error === null;
    };

    const validateInterest = (interest: string) => {
        if (!interest) {
            setInterestError('Please choose what you want to learn.');
            return false;
        }
        setInterestError(null);
        return true;
    };

    const validateTimeline = (timeline: string) => {
        if (!timeline) {
            setTimelineError('Please choose when you plan to start.');
            return false;
        }
        setTimelineError(null);
        return true;
    };

    const validateCurrentStatus = (currentStatus: string) => {
        if (!currentStatus) {
            setCurrentStatusError('Please choose the option that describes you.');
            return false;
        }
        setCurrentStatusError(null);
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
        if (name === 'interest') validateInterest(value);
        if (name === 'timeline') validateTimeline(value);
        if (name === 'currentStatus') validateCurrentStatus(value);
    };

    // Handle phone change
    const handlePhoneChange = (phone: string | undefined) => {
        setFormData(prev => ({
            ...prev,
            phone: phone || ''
        }));
        if (phone) validatePhoneNumber(phone);
    };

    /**
     * Step 1 — deliberately does NOT post anything.
     *
     * The answers stay in `formData` and the form advances to step 2; the
     * single request that carries both steps' answers is fired by
     * `handleFinalSubmit` below. Abandoning the form here therefore creates no
     * lead, no email and no CRM record.
     */
    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();

        const isFullNameValid = validateFullName(formData.fullName);
        const isPhoneValid = validatePhoneNumber(formData.phone);
        const isInterestValid = validateInterest(formData.interest);

        if (isFullNameValid && isPhoneValid && isInterestValid) {
            setStep(2);
        }
    };

    /** Step 2 — the only place this form talks to the API. */
    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isTimelineValid = validateTimeline(formData.timeline);
        const isCurrentStatusValid = validateCurrentStatus(formData.currentStatus);

        // Re-checked rather than trusted: step 1 validated these, but the
        // visitor may have gone Back and emptied a field before returning.
        const isFullNameValid = validateFullName(formData.fullName);
        const isPhoneValid = validatePhoneNumber(formData.phone);
        const isInterestValid = validateInterest(formData.interest);

        if (!isFullNameValid || !isPhoneValid || !isInterestValid) {
            setStep(1);
            return;
        }

        if (isTimelineValid && isCurrentStatusValid) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        phone: formData.phone,
                        type: 'contact',
                        source: 'Contact Page - Hero Section Form',
                        interest: formData.interest,
                        timeline: formData.timeline,
                        currentStatus: formData.currentStatus
                    }),
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    if (onSuccess) onSuccess();

                    // Reset form
                    setFormData({
                        fullName: '',
                        phone: '',
                        interest: '',
                        timeline: '',
                        currentStatus: ''
                    });
                    setStep(1);

                    // Only now that the API has accepted the lead. The banner
                    // above is what the visitor sees for the instant the
                    // prefetched thank-you route takes to paint; there is no
                    // auto-dismiss timer any more because this component
                    // unmounts on navigation.
                    goToThankYou();
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

    const heading = STEP_HEADINGS[step];

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
          /* The container is a flex row, so its content height is its
             tallest child — this input. A 14px font's default line box is
             21px, against the 24px box of the 16px/1.5 inputs elsewhere.
             Pinning 1.5rem equalises them without changing text size. */
          line-height: 1.5rem;
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
          /* 0.75rem vertical matches the py-3 on every other field in this
             form. Was 0.30rem, which rendered the control 34.6px tall next
             to their 52px. The horizontal half of this shorthand is
             overridden by the two declarations below. */
          padding: 0.75rem 1rem;
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

            {/* Heading — owned by the form because it changes with the step.
                ContactHeroSection used to render this as static markup above
                the component, once for mobile and once for desktop. */}
            <h2 className="text-2xl font-bold text-slate-900">{heading.title}</h2>
            <p className="mt-1.5 text-slate-600">{heading.subtitle}</p>

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

            {/* ⚠️  The `key` on each form is load-bearing, not decoration.
                Both branches render a <form> in the same position, so without
                distinct keys React reconciles them into the SAME DOM nodes —
                and the step-2 "Back" button (type="button") gets rewritten in
                place into step 1's submit button while the click that
                triggered the change is still being processed. The browser then
                runs that click's default action against what is now a submit
                button, firing handleContinue and bouncing the visitor straight
                back to step 2. Distinct keys make React unmount one form and
                mount the other, so the clicked node is destroyed rather than
                repurposed. */}
            {step === 1 ? (
            <form key="step-1" onSubmit={handleContinue} className="mt-6 space-y-4">
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

                {/* WhatsApp Number (posted as `phone`) */}
                <div>
                    <label htmlFor={`${idPrefix}phone`} className="block text-sm font-semibold text-gray-700 mb-2">
                        WhatsApp Number *
                    </label>
                    <div className="bg-white relative">
                        <div className={`phone-input-container ${phoneError ? 'border-red-500' : ''
                            }`}>
                            <Phone className="phone-icon h-5 w-5" />
                            {/* `international` is deliberately omitted here, unlike the
                                other phone fields on the site. With it set,
                                react-phone-number-input seeds the input's value with the
                                calling code ("+91"), and an HTML placeholder only paints
                                on an empty input — so "Enter your WhatsApp number" could
                                never be seen. Dropping it leaves the field empty until
                                the visitor types.

                                The submitted value is unaffected: with defaultCountry set,
                                onChange still yields E.164 ("+919820853250"), so
                                validatePhone and the `phone` the API requires are
                                unchanged. The country is still shown and switchable via
                                the flag selector. */}
                            <PhoneInput
                                id={`${idPrefix}phone`}
                                limitMaxLength={true}
                                defaultCountry="IN"
                                flagComponent={CustomFlag}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="Enter your WhatsApp number"
                            />
                        </div>
                    </div>
                    {phoneError && (
                        <p className="mt-1.5 text-sm text-red-600">{phoneError}</p>
                    )}
                </div>

                {/* What are you looking to learn? — posted as `interest` */}
                <div>
                    <label htmlFor={`${idPrefix}interest`} className="block text-sm font-semibold text-gray-700 mb-2">
                        What are you looking to learn? *
                    </label>
                    <select
                        id={`${idPrefix}interest`}
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className={`bg-white w-full px-4 py-3 border-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-300 ${interestError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                    >
                        <option value="">Select…</option>
                            <option value="Software Testing">Software Testing</option>
                            <option value="Full Stack Development">Full Stack Development</option>
                            <option value="Data Science & Analytics">Data Science & Analytics</option>
                            <option value="AI & ML">AI & ML</option>
                            <option value="Prompt Engineering">Prompt Engineering</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Scholarship">Scholarship</option>
                            <option value="Corporate Training">Corporate Training</option>
                            <option value="Understand Training & Event Services">Understand Training & Event Services</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                    {interestError && (
                        <p className="mt-1.5 text-sm text-red-600">{interestError}</p>
                    )}
                </div>

                {/* Advances to step 2 — sends nothing. */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                    Continue
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </form>
            ) : (
            <form key="step-2" onSubmit={handleFinalSubmit} className="mt-6 space-y-4">
                {/* When are you planning to start your course? */}
                <div>
                    <label htmlFor={`${idPrefix}timeline`} className="block text-sm font-semibold text-gray-700 mb-2">
                        When are you planning to start your course? *
                    </label>
                    <select
                        id={`${idPrefix}timeline`}
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`bg-white w-full px-4 py-3 border-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-300 ${timelineError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                    >
                        <option value="">Select…</option>
                        {TIMELINE_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {timelineError && (
                        <p className="mt-1.5 text-sm text-red-600">{timelineError}</p>
                    )}
                </div>

                {/* What best describes you right now? */}
                <div>
                    <label htmlFor={`${idPrefix}currentStatus`} className="block text-sm font-semibold text-gray-700 mb-2">
                        What best describes you right now? *
                    </label>
                    <select
                        id={`${idPrefix}currentStatus`}
                        name="currentStatus"
                        value={formData.currentStatus}
                        onChange={handleInputChange}
                        className={`bg-white w-full px-4 py-3 border-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-300 ${currentStatusError
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#ff8c00] focus:ring-orange-100'
                            }`}
                    >
                        <option value="">Select…</option>
                        {STATUS_OPTIONS.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {currentStatusError && (
                        <p className="mt-1.5 text-sm text-red-600">{currentStatusError}</p>
                    )}
                </div>

                {/* The real submission — posts both steps' answers. */}
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
                        'Get Course Guidance'
                    )}
                </button>

                {/* Lets a visitor fix a typo in their number without losing
                    what they have already entered — step 1's values are still
                    in state. */}
                <button
                    type="button"
                    // preventDefault as well as the keys above: belt and
                    // braces against this click ever being treated as a form
                    // submission on its way back out of React.
                    onClick={(e) => { e.preventDefault(); setStep(1); }}
                    disabled={isSubmitting}
                    className="w-full text-sm font-medium text-gray-500 hover:text-[#ff8c00] transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to my details
                </button>
            </form>
            )}
        </div>
    );

}

"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { User, Mail, CheckCircle2, Loader2, BookOpen, ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import { coursesData } from "@/components/courses/coursesData";
import { validateFullName, validatePhone } from "@/lib/formValidation";

export default function NewYearOfferForm() {
    // Flatten courses for the dropdown
    const allCourses = useMemo(() => {
        return coursesData.flatMap(category =>
            (category.courses || []).map(course => ({
                id: course.id,
                title: course.title,
                category: category.name
            }))
        );
    }, []);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle click outside checks
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                // Blur active element if it's inside the form
                if (document.activeElement instanceof HTMLElement && formRef.current.contains(document.activeElement)) {
                    document.activeElement.blur();
                }
                // Clear all validation errors
                setErrors({
                    fullName: "",
                    email: "",
                    phone: "",
                    course: "",
                });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Validation Functions matching HomeHeroSection logic
    const validateName = (name: string) => {
        const error = validateFullName(name);
        setErrors(prev => ({ ...prev, fullName: error || "" }));
        return error === null;
    };

    const validateEmailField = (email: string) => {
        if (!email) {
            setErrors(prev => ({ ...prev, email: "Email Address is required." }));
            return false;
        }
        // Using the exact regex from HomeHeroSection
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setErrors(prev => ({ ...prev, email: "Invalid email format." }));
            return false;
        }
        setErrors(prev => ({ ...prev, email: "" }));
        return true;
    };

    const validatePhoneField = (phone: string | undefined) => {
        const error = validatePhone(phone);
        setErrors(prev => ({ ...prev, phone: error || "" }));
        return error === null;
    };

    const validateCourse = (course: string) => {
        if (!course) {
            setErrors(prev => ({ ...prev, course: "Please select a course" }));
            return false;
        }
        setErrors(prev => ({ ...prev, course: "" }));
        return true;
    };

    const searchParams = useSearchParams();
    const source = searchParams.get('source') || "New Year Offer Page (Direct)";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError("");

        const isNameValid = validateName(formData.fullName);
        const isEmailValid = validateEmailField(formData.email);
        const isPhoneValid = validatePhoneField(formData.phone);
        const isCourseValid = validateCourse(formData.course);

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isCourseValid) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/new-year-offer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    course: formData.course,
                    source: source,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit enquiry");
            }

            setIsSubmitted(true);
            // Reset form
            setFormData({ fullName: "", email: "", phone: "", course: "" });
            setErrors({ fullName: "", email: "", phone: "", course: "" });
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData((prev) => ({ ...prev, phone: value || "" }));
        // Optional: Real-time validation clear if user starts typing, or wait for blur/submit?
        // HomeHeroSection validates onBlur for phone, but clears if new value is valid?
        // Let's stick to standard input behavior: update state, validate on blur.
        if (value && errors.phone) validatePhoneField(value);
    };

    if (isSubmitted) {
        return (
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Offer Claimed! 🎉</h3>
                <p className="text-slate-300">
                    Thank you for your interest. Our admissions team will contact you shortly to complete your enrollment with the <span className="text-yellow-400 font-bold">50% discount</span>.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-slate-400 hover:text-white underline"
                >
                    Submit another enquiry
                </button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Claim Your 50% Discount</h3>
                <p className="text-sm text-slate-400">Fill out the form below to lock in this limited-time offer.</p>
            </div>

            {submitError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center">
                    {submitError}
                </div>
            )}

            <div className="space-y-4">
                {/* Name */}
                <div>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className={`h-5 w-5 ${errors.fullName ? 'text-red-400' : 'text-slate-400 group-focus-within:text-yellow-400'} transition-colors`} />
                        </div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => {
                                setFormData({ ...formData, fullName: e.target.value });
                                // HomeHero validates on change too
                                if (errors.fullName) validateName(e.target.value);
                            }}
                            onBlur={() => validateName(formData.fullName)}
                            className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border ${errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-yellow-400'} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-yellow-400'} transition-all`}
                        />
                    </div>
                    {errors.fullName && <span className="text-xs text-red-400 mt-1 ml-1">{errors.fullName}</span>}
                </div>

                {/* Email */}
                <div>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className={`h-5 w-5 ${errors.email ? 'text-red-400' : 'text-slate-400 group-focus-within:text-yellow-400'} transition-colors`} />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) validateEmailField(e.target.value);
                            }}
                            onBlur={() => validateEmailField(formData.email)}
                            className={`w-full pl-10 pr-4 py-3 bg-slate-900/50 border ${errors.email ? 'border-red-500' : 'border-slate-700 focus:border-yellow-400'} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-yellow-400'} transition-all`}
                        />
                    </div>
                    {errors.email && <span className="text-xs text-red-400 mt-1 ml-1">{errors.email}</span>}
                </div>

                {/* Phone */}
                <div>
                    <div className={`relative group phone-input-dark ${errors.phone ? 'border-red-500 rounded-xl' : ''}`}>
                        <PhoneInput
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            onBlur={() => validatePhoneField(formData.phone)}
                            defaultCountry="IN"
                            international
                            className={`w-full bg-slate-900/50 border ${errors.phone ? 'border-red-500' : 'border-slate-700 group-focus-within:border-yellow-400'} rounded-xl px-3 py-3 text-white placeholder-slate-500 focus-within:ring-1 ${errors.phone ? 'focus-within:ring-red-500' : 'focus-within:ring-yellow-400'} transition-all`}
                            style={{
                                '--PhoneInputCountrySelectArrowOpacity': 0,
                                '--PhoneInputCountryFlagHeight': '24px',
                                '--PhoneInputCountrySelectArrowColor': 'currentColor',
                                '--PhoneInputCountrySelectArrowWidth': '0.3em',
                                '--PhoneInputCountrySelectArrowUrl': 'none',
                            } as React.CSSProperties}
                        />
                    </div>
                    {errors.phone && <span className="text-xs text-red-400 mt-1 ml-1">{errors.phone}</span>}
                </div>

                {/* Course Selection */}
                <div>
                    <div className="relative group cursor-pointer" ref={dropdownRef}>
                        <div
                            className={`
                            relative w-full pl-10 pr-10 py-3.5 
                            bg-slate-900/50 backdrop-blur-md 
                            border rounded-xl 
                            text-left transition-all duration-300
                            ${errors.course ? 'border-red-500' : 'border-slate-700 hover:border-yellow-400'}
                            ${isDropdownOpen ? 'ring-2 ring-yellow-400 border-yellow-400' : ''}
                        `}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <BookOpen className={`h-5 w-5 ${errors.course ? 'text-red-400' : 'text-slate-400 group-hover:text-yellow-400'} transition-colors`} />
                            </div>

                            <span className={`block truncate ${formData.course ? 'text-white' : 'text-slate-500'}`}>
                                {formData.course || "Select Interested Course"}
                            </span>

                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-yellow-400' : ''}`} />
                            </div>
                        </div>

                        {/* Custom Dropdown Options */}
                        {isDropdownOpen && (
                            <div className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200 custom-scrollbar">
                                <div className="py-1">
                                    {allCourses.map((course) => (
                                        <div
                                            key={course.id}
                                            onClick={() => {
                                                setFormData({ ...formData, course: course.title });
                                                validateCourse(course.title);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`
                                            relative flex items-center justify-between px-4 py-3 text-sm cursor-pointer
                                            transition-colors duration-150
                                            ${formData.course === course.title
                                                    ? 'bg-yellow-500/10 text-yellow-400'
                                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                                }
                                        `}
                                        >
                                            <span className={`block truncate ${formData.course === course.title ? 'font-semibold' : 'font-medium'}`}>
                                                {course.title}
                                            </span>
                                            {formData.course === course.title && (
                                                <CheckCircle2 className="h-4 w-4 text-yellow-400" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {errors.course && <span className="text-xs text-red-400 mt-1 ml-1">{errors.course}</span>}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1e293b;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #475569;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #64748b;
                }
            `}</style>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 font-bold py-3.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-500/25 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        Get 50% OFF Now
                        <span className="text-xs bg-slate-900/20 px-2 py-0.5 rounded text-slate-800 font-bold ml-1">- Limited Time</span>
                    </>
                )}
            </button>

            <p className="text-xs text-center text-slate-500 mt-4">
                By submitting, you agree to receive calls/texts about your enquiry. Your data is secure.
            </p>

            <style jsx global>{`
                .phone-input-dark .PhoneInputInput {
                    background: transparent;
                    border: none;
                    color: white;
                    outline: none;
                    padding-left: 8px;
                }
                .phone-input-dark .PhoneInputInput::placeholder {
                    color: #64748b;
                }
                .phone-input-dark .PhoneInputCountry {
                    margin-right: 8px;
                }
                .phone-input-dark .PhoneInputCountrySelect {
                    background: #0f172a;
                    color: white;
                }
                .phone-input-dark .PhoneInputCountrySelect option {
                    background: #0f172a;
                    color: white;
                }
            `}</style>
        </form>
    );
}

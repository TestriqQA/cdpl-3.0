'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import {
  Award,
  TrendingUp,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
  Download,
  Eye,
  Play,
  User,
  Mail,
  Home
} from 'lucide-react';

// Import react-phone-number-input for professional phone input
import PhoneInput from '@/components/ui/PhoneNumberInput';

import styles from '../ui/phone-input.module.css';
import CustomFlag from '../ui/CustomFlag';
import { validatePhone, validateFullName as validateFullNameLib } from '@/lib/formValidation';

// Import BrochureDownloadModal
const BrochureDownloadModal = dynamic(() => import('./BrochureDownloadModal'), { ssr: false });

// Import YouTubeVideoModal
const YouTubeVideoModal = dynamic(() => import('./YouTubeVideoModal'), { ssr: false });

// Component for the list of features/stats (for mobile)
interface MobileFeatureListProps {
  onOpenBrochure: () => void;
  onOpenVideo: () => void;
}

const MobileFeatureList: React.FC<MobileFeatureListProps> = ({ onOpenBrochure, onOpenVideo }) => (
  <div className="mt-7 space-y-4">
    {/* List of features/stats */}
    <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">425+ Verified Reviews</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-orange-500 fill-orange-500 flex-shrink-0" />
        <span className="font-semibold">4.9/5 Student Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="h-4 w-4 text-indigo-600 flex-shrink-0" />
        <span className="font-semibold">Industry-Led Training</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">100% Live Interactive Classes</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">90+ Real-World Projects</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">ISTQB & Industry Certifications</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">Job Support with Interview Prep</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">Flexible Weekend & Weekday Batches</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">Lifetime Access to Course Materials</span>
      </div>
    </div>


    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onOpenBrochure}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Download className="h-5 w-5" />
        Download Brochure
      </button>
      <Link
        href="/jobs/placements"
        title="View Placement Success Stories"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Eye className="h-5 w-5" />
        View Placement Stories
      </Link>
      <button
        onClick={onOpenVideo}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Play className="h-5 w-5" />
        Watch CDPL
      </button>
    </div>
  </div>
);



// Component for desktop hero content
interface DesktopHeroContentProps {
  onOpenBrochure: () => void;
  onOpenVideo: () => void;
}

const DesktopHeroContent: React.FC<DesktopHeroContentProps> = ({ onOpenBrochure, onOpenVideo }) => (
  <>
    {/* Top Badge */}
    {/* Top Badge - ANIMATION REMOVED FOR LCP */}
    <div
      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-full px-4 py-2 mb-5"
    >
      <Sparkles className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
      <span className="text-[11px] sm:text-xs font-semibold text-indigo-700">
        🏆 India&apos;s comprehensive Software Testing & Data Science Training Institute
      </span>
    </div>

    {/* Main Headline - Updated Copy */}
    {/* Main Headline - Updated Copy - ANIMATION REMOVED FOR LCP */}
    <h1
      id="home-heading"
      className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
    >
      Master <span className="text-brand">Software Testing</span> & <span className="text-brand">Data Science</span> with <span className="text-brand">Placement</span>
    </h1>

    {/* Enhanced Subheadline */}
    {/* Enhanced Subheadline - ANIMATION REMOVED FOR LCP */}
    <p
      className="mt-5 text-[15px] sm:text-base md:text-lg leading-7 text-slate-700"
    >
      Launch your tech career with industry-leading courses, live projects, and job interviews. Join our successful graduates today.
    </p>

    {/* Trust Indicators - 3 Cards */}
    <div
      className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
    >
      {/* Card 1 - Students Placed */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <Users className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">5,000+</div>
          <div className="text-xs text-slate-600">Students Placed</div>
        </div>
      </div>

      {/* Card 2 - Rating */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-brand rounded-lg flex items-center justify-center">
          <Star className="h-5 w-5 text-white fill-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">4.9/5</div>
          <div className="text-xs text-slate-600">Student Rating</div>
        </div>
      </div>

      {/* Card 3 - Experience */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Award className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">Industry-Led</div>
          <div className="text-xs text-slate-600">Expert Mentors</div>
        </div>
      </div>
    </div>

    {/* Key Features - 6 Benefits */}
    <div
      className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {[
        { icon: CheckCircle2, text: '100% Live Interactive Classes', color: 'text-green-600' },
        { icon: CheckCircle2, text: '90+ Real-World Projects', color: 'text-blue-600' },
        { icon: CheckCircle2, text: 'ISTQB & Industry Certifications', color: 'text-purple-600' },
        { icon: CheckCircle2, text: 'Job Support with Interview Prep', color: 'text-indigo-600' },
        { icon: CheckCircle2, text: 'Flexible Weekend & Weekday Batches', color: 'text-brand' },
        { icon: CheckCircle2, text: 'Lifetime Access to Course Materials', color: 'text-teal-600' },
      ].map((feature, index) => (
        <div key={index} className="flex items-start gap-2">
          <feature.icon className={`h-5 w-5 ${feature.color} flex-shrink-0 mt-0.5`} />
          <span className="text-sm text-slate-700">{feature.text}</span>
        </div>
      ))}
    </div>


    {/* CTA Buttons */}
    <div
      className="mt-7 flex flex-col sm:flex-row gap-4"
    >
      {/* Primary CTA - Download Brochure */}
      <button
        onClick={onOpenBrochure}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand to-brand text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Download className="h-5 w-5" />
        Download Brochure
      </button>

      {/* Secondary CTA - View Placement Success Stories */}
      <Link
        href="/jobs/placements"
        title="View Placement Success Stories"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Eye className="h-5 w-5" />
        View Placement Stories
      </Link>

      {/* Tertiary CTA - Watch CDPL */}
      <button
        onClick={onOpenVideo}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Play className="h-5 w-5" />
        Watch CDPL
      </button>
    </div>
  </>
);

const HomeHeroSection: React.FC = () => {
  // Ref for the form container to handle click-outside
  const formRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside to blur inputs and clear errors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        // If clicking outside the form, blur any active input inside the form
        if (document.activeElement instanceof HTMLElement && formRef.current.contains(document.activeElement)) {
          document.activeElement.blur();
        }
        // Clear all validation errors
        setFullNameError(null);
        setEmailError(null);
        setPhoneError(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Loading and submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Brochure modal state
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // YouTube video URL - UPDATE THIS WITH YOUR VIDEO URL
  const videoUrl = 'https://www.youtube.com/watch?v=8kB2wESj1n8'; // Replace YOUR_VIDEO_ID with actual video ID

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
            source: 'Enquiry Form - Home Hero Section'
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

  const openBrochure = useCallback(() => setIsBrochureModalOpen(true), []);
  const openVideo = useCallback(() => setIsVideoModalOpen(true), []);

  // The original Breadcrumb component
  const Breadcrumb = (
    <nav aria-label="Breadcrumb" className="lg:mb-6 mb-2">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          <Link href="/" title="Home" className="hover:text-indigo-700 font-semibold text-slate-900 transition-colors">
            Home
          </Link>
        </li>
      </ol>
    </nav>
  );

  // The original Lead Form block (Right side of the grid)
  const LeadForm = (
    <div
      className="order-2 lg:order-2 lg:col-span-5"
    >
      <div className="sticky top-4 max-w-sm mx-auto lg:ml-auto lg:mr-0">
        <div ref={formRef} className="bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
          {/* Form Header - Catchy and Actionable */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-slate-900">
                Talk to an Advisor
              </h2>
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
          <form onSubmit={handleSubmit} className="space-y-4">

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
                  onChange={handleInputChange}
                  onBlur={() => validateFullName(formData.fullName)}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                  style={{ color: '#1e293b' }}
                />
              </div>
              {fullNameError && (
                <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
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
                  onChange={handleInputChange}
                  onBlur={() => validateEmail(formData.email)}
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email address"
                  style={{ color: '#1e293b' }}
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
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
                  className={`${styles['phone-input-container']} ${phoneError ? 'border-red-500' : ''
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
              className="w-full py-3 px-6 bg-gradient-to-r from-brand to-brand text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
      </div>
    </div>
  );

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:py-4 py-4 overflow-hidden" aria-labelledby="home-heading">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static gradient orbs (Optimized for Main Thread) */}
          <div
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-3xl opacity-30 contains-strict"
          />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full blur-3xl opacity-20 contains-strict"
          />
        </div>

        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- Mobile Layout (lg:hidden) --- */}
          <div className="lg:hidden">
            {/* 1. Breadcrumb */}
            {Breadcrumb}

            {/* 2. Headline - ANIMATION REMOVED FOR LCP */}
            {/* BLG-045: this is the visible primary heading on mobile, so it
                must be an <h1> — it previously rendered as <h2>, leaving the
                mobile (mobile-first-indexed) view without an h1. */}
            <h1
              id="home-heading-mobile"
              className="mt-2 py-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Master <span className="text-brand">Software Testing</span> & <span className="text-brand">Data Science</span>
            </h1>

            {/* 3. Description */}
            {/* 3. Description - ANIMATION REMOVED FOR LCP */}
            <p
              className="mt-1 mb-1.5 text-[15px] sm:text-base leading-7 text-slate-700"
            >
              Launch your tech career with industry-leading courses, live projects, and job interviews. Join our successful graduates today.
            </p>

            {/* 4. Form Card */}
            {LeadForm}

            {/* 5. Mobile Feature List */}
            <MobileFeatureList
              onOpenBrochure={openBrochure}
              onOpenVideo={openVideo}
            />
          </div>

          {/* --- Desktop/Laptop Layout (hidden lg:block) --- */}
          <div className="hidden lg:block">
            {/* 1. Breadcrumb */}
            {Breadcrumb}

            {/* 2. Grid Layout - 8 columns left, 4 columns right */}
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

              {/* Left Content - 8 columns (66.67% width) */}
              <div className="order-1 lg:order-1 lg:col-span-7">
                <DesktopHeroContent onOpenBrochure={openBrochure} onOpenVideo={openVideo} />
              </div>

              {/* Right Form - 4 columns (33.33% width) */}
              <div className="order-2 lg:order-2 lg:col-span-5">
                {LeadForm}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download Modal */}
      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        source="Home Page - Hero Section - Download Brochure Button"
      />

      {/* YouTube Video Modal */}
      <YouTubeVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default HomeHeroSection;

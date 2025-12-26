"use client";

import { useState, useEffect, useRef } from "react";
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { X, Building2, User, MessageSquare, Send, CheckCircle } from "lucide-react";

interface FormData {
  organizationName: string;
  organizationType: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceInterest: string;
  participantCount: string;
  preferredDate: string;
  message: string;
}

interface CustomEventDetail {
  service?: string;
  eventType?: string;
}

const CorporateRegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    organizationType: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceInterest: "",
    participantCount: "",
    preferredDate: "",
    message: "",
  });

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const customEvent = event as CustomEvent<CustomEventDetail>;
      setIsOpen(true);
      if (customEvent.detail?.service) {
        const service = customEvent.detail.service;
        setFormData(prev => ({ ...prev, serviceInterest: service }));
      }
      if (customEvent.detail?.eventType) {
        const eventType = customEvent.detail.eventType;
        setFormData(prev => ({ ...prev, serviceInterest: eventType }));
      }
    };

    window.addEventListener('openCorporateRegistration', handleOpen);
    return () => window.removeEventListener('openCorporateRegistration', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        organizationName: "",
        organizationType: "",
        contactPerson: "",
        email: "",
        phone: "",
        serviceInterest: "",
        participantCount: "",
        preferredDate: "",
        message: "",
      });
    }, 300);
  };

  // State for errors
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const formRef = useRef<HTMLDivElement>(null);

  useFormErrorReset(formRef, [
    () => setErrors({})
  ]);

  // Dynamic import or direct usage if we turn this into a client component with imports
  // Validation function wrapper
  const validateForm = async () => {
    const { validateFullName, validateEmail, validatePhone, validateCompany, validateMessage } = await import('@/lib/formValidation');

    const newErrors: Partial<Record<keyof FormData, string>> = {};

    const orgNameError = validateCompany(formData.organizationName);
    if (orgNameError) newErrors.organizationName = orgNameError;

    const contactNameError = validateFullName(formData.contactPerson);
    if (contactNameError) newErrors.contactPerson = contactNameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const messageError = validateMessage(formData.message);
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    if (errors[name as keyof FormData]) {
      // If there was an error, clear it or re-validate
      // preventing complex async logic here for simplicity, just clearing error
      setErrors(prev => ({ ...prev, [name]: '' }));
      // For strict real-time:
      // const { validate... } = await import...
      // but dynamic import in sync event handler is tricky, relying on submit or pre-load is better.
      // Since we used dynamic import in other files without top-level import, we'll stick to submit validation mainly 
      // or import at top if possible. *Check imports*: The file header has "use client".
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Auto-close after 3 seconds
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" ref={formRef}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white rounded-t-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Corporate Training Request</h2>
                    <p className="text-white/90 text-sm">Let&apos;s bring expert training to your organization</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Organization Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Organization Details
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your organization name"
                    />
                    {errors.organizationName && <p className="mt-1 text-xs text-red-500">{errors.organizationName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select type</option>
                      <option value="corporate">Corporate / Private Company</option>
                      <option value="academic">Academic Institution / College</option>
                      <option value="government">Government Organization</option>
                      <option value="startup">Startup</option>
                      <option value="ngo">NGO / Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Contact Person Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-600" />
                    Contact Person
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      maxLength={35}
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                    {errors.contactPerson && <p className="mt-1 text-xs text-red-500">{errors.contactPerson}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        maxLength={15}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Training Requirements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                    Training Requirements
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="Expert Talks / Sessions">Expert Talks / Sessions</option>
                      <option value="Workshops">Workshops</option>
                      <option value="On-the-Job Training Program">On-the-Job Training Program</option>
                      <option value="Faculty Development Program">Faculty Development Program</option>
                      <option value="Train-the-Trainer Program">Train-the-Trainer Program</option>
                      <option value="STTP (Short Term Training Program)">STTP (Short Term Training Program)</option>
                      <option value="Industrial Visits">Industrial Visits</option>
                      <option value="Custom Training Solution">Custom Training Solution</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Participants
                      </label>
                      <select
                        name="participantCount"
                        value={formData.participantCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select range</option>
                        <option value="1-20">1-20 participants</option>
                        <option value="21-50">21-50 participants</option>
                        <option value="51-100">51-100 participants</option>
                        <option value="101-200">101-200 participants</option>
                        <option value="200+">200+ participants</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us more about your training needs, specific topics, or any special requirements..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We&apos;ll get back to you within 24 hours to discuss your training requirements
                </p>
              </form>
            </>
          ) : (
            // Success Message
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest. Our team will contact you within 24 hours to discuss your training requirements.
              </p>
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CorporateRegistrationModal;
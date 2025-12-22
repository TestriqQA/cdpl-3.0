"use client";

import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type LeadFormData = {
    name: string;
    email: string;
    phone: string;
};

export type EnrollFormData = {
    name: string;
    email: string;
    phone: string;
};

interface LeadFormProps {
    variants?: any;
    onSubmit: (data: LeadFormData) => void;
    className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ variants, onSubmit, className }) => {
    const [form, setForm] = useState<LeadFormData>({
        name: "",
        email: "",
        phone: "",
    });

    // Simple error state for immediate feedback
    const [fieldErrors, setFieldErrors] = useState<{ name?: string | null, email?: string | null, phone?: string | null }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Dynamic import validation to be consistent
        const { validateFullName, validateEmail, validatePhone } = await import('@/lib/formValidation');

        const nameError = validateFullName(form.name);
        const emailError = validateEmail(form.email);
        const phoneError = validatePhone(form.phone);

        setFieldErrors({ name: nameError, email: emailError, phone: phoneError });

        if (!nameError && !emailError && !phoneError) {
            onSubmit(form);
        }
    };

    return (
        <motion.div variants={variants} className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-lg ${className}`}>
            <h3 className="text-xl font-bold text-slate-900">Request a Callback</h3>
            <p className="mt-2 text-sm text-slate-600">
                Enter your details to get the full curriculum, fees, and upcoming batch dates.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        maxLength={20}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`block w-full rounded-lg border ${fieldErrors.name ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                        placeholder="Enter your name"
                    />
                    {fieldErrors.name && <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`block w-full rounded-lg border ${fieldErrors.email ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                        placeholder="you@example.com"
                    />
                    {fieldErrors.email && <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>}
                </div>
                <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        maxLength={15}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`block w-full rounded-lg border ${fieldErrors.phone ? 'border-red-500' : 'border-slate-300'} text-slate-900 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                        placeholder="+91 98765 43210"
                    />
                    {fieldErrors.phone && <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>}
                </div>
                <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Get Course Details <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </form>
        </motion.div>
    );
};

interface EnrollPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: EnrollFormData) => void;
}

export const EnrollPopup: React.FC<EnrollPopupProps> = ({ isOpen, onClose }) => {
    return (
        <EnrollModal isOpen={isOpen} onClose={onClose} courseName="Course" />
    );
};

'use client';

import { useState, useRef } from 'react';
import { useFormErrorReset } from '@/hooks/useFormErrorReset';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PhoneInput from '@/components/ui/PhoneNumberInput';
import CustomFlag from '../ui/CustomFlag';


import {
    validateFullName as validateFullNameLib,
    validateEmail as validateEmailLib,
    validatePhone as validatePhoneLib
} from '@/lib/formValidation';

const schema = z.object({
    name: z.string().superRefine((val, ctx) => {
        const error = validateFullNameLib(val);
        if (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: error,
            });
        }
    }),
    email: z.string().superRefine((val, ctx) => {
        const error = validateEmailLib(val);
        if (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: error,
            });
        }
    }),
    phone: z.string().superRefine((val, ctx) => {
        const error = validatePhoneLib(val);
        if (error) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: error,
            });
        }
    }),
    course: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    showCourse?: boolean;
    source?: string;
}

export default function LeadForm({
    title = "Book Your Free Demo Class",
    subtitle = "Get personalized career guidance in 5 minutes",
    buttonText = "Book Free Demo Now",
    showCourse = true,
    source = "Course Category - Hero Section (Default)"
}: LeadFormProps) {
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { name: '', email: '', phone: '', course: '' },
    });

    const formRef = useRef<HTMLDivElement>(null);

    useFormErrorReset(formRef, [
        () => form.clearErrors()
    ]);

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: data.name,
                    email: data.email,
                    phone: data.phone,
                    interest: data.course,
                    source: source,
                }),
            });
            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We received your enquiry. Our expert advisor will call you within 2 hours.</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden" ref={formRef}>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 break-words">
                {title}
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base break-words">
                {subtitle}
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 w-full overflow-hidden">
                <div className="w-full overflow-hidden">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        {...form.register('name')}
                        maxLength={35}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand overflow-hidden"
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                <div className="w-full overflow-hidden">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        {...form.register('email')}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand overflow-hidden"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.email.message}
                        </p>
                    )}
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                </label>
                <div className="phone-input-wrapper w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-brand bg-white overflow-hidden">

                    <PhoneInput
                        limitMaxLength={true}
                        defaultCountry="IN"
                        international
                        countryCallingCodeEditable={false}
                        flagComponent={CustomFlag}
                        value={form.watch('phone')}
                        onChange={(v) => form.setValue('phone', v || '')}
                        className="w-full [&>input]:w-full [&>input]:border-none [&>input]:outline-none [&>input]:bg-transparent overflow-hidden"
                        numberInputProps={{
                            className: "!w-full !text-base !border-none !outline-none !ring-0",
                            "aria-label": "Phone Number"
                        }}
                    />
                    {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.phone.message}
                        </p>
                    )}
                </div>

                {showCourse && (
                    <select
                        {...form.register('course')}
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand bg-white overflow-hidden"
                    >
                        <option value="">Select Course</option>
                        <option>Advanced Data Analytics - Hero Program</option>
                        <option>Advanced Data Analytics with Python Libraries</option>
                        <option>Advanced Excel for Data Analytics & Visualization</option>
                        <option>Data Analytics & Visualization with Tableau</option>
                        <option>Data Analytics & Visualization with Power BI</option>
                        <option>Data Analytics With BI And Big Data Engineering Master Program</option>
                    </select>
                )}

                <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-brand hover:bg-brand text-white font-bold py-3 sm:py-4 rounded-xl text-base sm:text-lg transition overflow-hidden"
                >
                    {form.formState.isSubmitting ? 'Submitting...' : buttonText}
                </button>
            </form>
        </div>
    );
}

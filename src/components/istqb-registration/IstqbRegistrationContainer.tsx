'use client';

import { useState, useEffect } from 'react';
import RegistrationForm from '@/components/istqb-registration/RegistrationForm';
import BookingOption from '@/components/istqb-registration/BookingOption';
import ExamSelection from '@/components/istqb-registration/ExamSelection';
import SuccessState from '@/components/istqb-registration/SuccessState';
import { CheckCircle2, ArrowLeft, Calendar, ChevronRight, Clock } from 'lucide-react';
import WhyIstqbSection from '@/components/istqb-registration/WhyIstqbSection';
import IstqbOverview from '@/components/istqb-registration/IstqbOverview';

export default function IstqbRegistrationContainer() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [choice, setChoice] = useState<'none' | 'booking' | 'exam'>('none');
    const [isBookingComplete, setIsBookingComplete] = useState(false);
    const [userData, setUserData] = useState<any>(null);
    const [meetingTimeLabel, setMeetingTimeLabel] = useState('Loading...');

    useEffect(() => {
        const now = new Date();
        const cutoff = new Date();
        cutoff.setHours(15, 30, 0, 0); // 3:30 PM local client time
        const isToday = now < cutoff;
        setMeetingTimeLabel(isToday ? 'Today at 3:30 PM' : 'Tomorrow at 3:30 PM');
    }, []);

    // Handlers
    const handleStep1Success = (data: any) => {
        setUserData(data);
        setStep(2);
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBookingSuccess = () => {
        setIsBookingComplete(true);
        setChoice('none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFinalSuccess = () => {
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Step 1: Registration Form */}
            {step === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    {/* Right: Form */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <RegistrationForm onSuccess={handleStep1Success} />
                    </div>

                    {/* Left: overview, about as tall as the form so neither
                        column needs to be sticky. */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <IstqbOverview />
                    </div>
                </div>
            )}

            {/* Step 2: Selection (Book Meeting or Exam) */}
            {step === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left: Overview Sidebar */}
                    <div className="lg:col-span-6 order-2 lg:order-1 h-full">
                        <IstqbOverview />
                    </div>

                    {/* Right: Forms/Choice */}
                    <div className="lg:col-span-6 order-1 lg:order-2 h-full">
                        {choice === 'none' && (
                            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8 md:p-10">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-brand"
                                >
                                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                                    Back to details
                                </button>

                                <div className="mt-6 flex items-center gap-3">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-brand" aria-hidden="true">
                                        <Calendar className="h-6 w-6" />
                                    </span>
                                    <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                                        Book a Free <span className="text-brand">Consultation</span>
                                    </h2>
                                </div>
                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    Thank you for your interest in ISTQB certification! To ensure you have all the details you need, we&rsquo;d love to connect with you.
                                </p>

                                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                            In the meeting, our expert will help you
                                        </h3>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-1 text-sm font-semibold text-brand">
                                            <Clock className="h-4 w-4" aria-hidden="true" />
                                            {meetingTimeLabel}
                                        </span>
                                    </div>
                                    <ul className="mt-4 space-y-2.5">
                                        {[
                                            "Understand the ISTQB certification process & exam options",
                                            "Get guidance on choosing the right certification level",
                                            "Learn about exam booking, preparation, and benefits",
                                            "Have all your questions answered before you register"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-slate-700">
                                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    {!isBookingComplete ? (
                                        <button
                                            type="button"
                                            onClick={() => setChoice('booking')}
                                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-md shadow-orange-200 transition hover:shadow-lg hover:brightness-95 sm:flex-1"
                                        >
                                            Book a Meeting
                                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                        </button>
                                    ) : (
                                        <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-6 py-3.5 font-semibold text-green-700 sm:flex-1">
                                            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                                            Meeting Booked
                                        </div>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => setChoice('exam')}
                                        className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition sm:flex-1 ${isBookingComplete
                                            ? 'bg-brand text-white shadow-md shadow-orange-200 hover:shadow-lg hover:brightness-95'
                                            : 'border border-orange-300 bg-white text-slate-800 hover:bg-orange-50'
                                            }`}
                                    >
                                        {isBookingComplete ? 'Choose Exam Date' : 'Skip to Exam Booking'}
                                        {isBookingComplete && <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
                                    </button>
                                </div>
                            </div>
                        )}

                        {choice === 'booking' && (
                            <BookingOption
                                userData={userData}
                                onSuccess={handleBookingSuccess}
                                onBack={() => setChoice('none')}
                            />
                        )}

                        {choice === 'exam' && (
                            <ExamSelection
                                userData={userData}
                                onSuccess={handleFinalSuccess}
                                onBack={() => setChoice('none')}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
                <div className="py-12">
                    <SuccessState />
                </div>
            )}

            {/* Why ISTQB Section - Show on Step 1 & 2 */}
            {step !== 3 && (
                <div className="mt-10">
                    <WhyIstqbSection />
                </div>
            )}
        </>
    );
}

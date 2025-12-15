'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ArrowRight, Loader2, CreditCard } from 'lucide-react';
import { submitIstqbStep2 } from '@/app/istqb-registration/actions';

interface ExamSelectionProps {
    userData: { name: string; email: string; phone: string; certificationLevel: string };
    onSuccess: () => void;
}

const PRICING: Record<string, { original: string; discounted: string }> = {
    "ISTQB Certified Tester Foundation Level": { original: "₹12,000", discounted: "₹10,000" },
    "ISTQB Certified Tester Agile Tester Extension": { original: "₹12,000", discounted: "₹10,000" },
    "ISTQB Certified Tester Acceptance Testing (CT-AcT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester AI Testing (CT-AI)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Automotive Software Tester (CT-AuT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Gambling Industry Tester (CT-GT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Game Testing (CT-GaMe)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Mobile Application Testing (CT-MAT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Model-Based Tester (CT-MBT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Performance Testing (CT-PT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Security Tester (CT-ST)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Test Automation Engineer (CT-TAE)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Usability Testing (CT-UT)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Advanced Level Test Manager (CTAL-TM)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA)": { original: "₹20,000", discounted: "₹18,000" },
    "ISTQB Certified Tester Advanced Level Technical Test Analyst (CTAL-TTA)": { original: "₹20,000", discounted: "₹18,000" },

    "Default": { original: "₹12,000", discounted: "₹10,000" }
};

export default function ExamSelection({ userData, onSuccess }: ExamSelectionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [examDate, setExamDate] = useState('');

    const pricing = PRICING[userData.certificationLevel] || PRICING["Default"];

    async function handleConfirm(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const result = await submitIstqbStep2({
                action: 'skip_exam',
                ...userData,
                examDate,
                amount: pricing.discounted
            });
            if (result.success) {
                onSuccess();
            } else {
                alert('Error submitting exam preference.');
            }
        } catch (e) {
            console.error(e);
            alert('Error submitting exam preference.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full"
        >
            <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <CalendarCheck className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">Skip & Book Exam</h3>
                <p className="text-slate-600 mb-6">
                    Already decided? Select your preferred exam date and proceed.
                </p>

                <form onSubmit={handleConfirm} className="flex-grow flex flex-col">
                    <div className="space-y-4 mb-8 flex-grow">
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Certification Level</p>
                            <p className="font-semibold text-slate-900">{userData.certificationLevel || 'Not Selected'}</p>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">Exam Fee</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-lg font-bold text-emerald-900">{pricing.discounted}</span>
                                    <span className="text-sm text-emerald-600/70 line-through">{pricing.original}</span>
                                </div>
                            </div>
                            <CreditCard className="w-6 h-6 text-emerald-500 opacity-80" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="examDate" className="text-sm font-semibold text-slate-700 ml-1">Preferred Exam Date</label>
                            <input
                                type="date"
                                id="examDate"
                                required
                                min={new Date().toISOString().split('T')[0]}
                                value={examDate}
                                onChange={(e) => setExamDate(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-slate-50 focus:bg-white"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-slate-500/30 transition-all flex items-center justify-center gap-2 group"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Confirm Exam Details
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

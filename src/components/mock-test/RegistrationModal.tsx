"use client";

import { useState } from "react";
import { X, User, Mail, Briefcase } from "lucide-react";
import dynamic from "next/dynamic";
import 'react-phone-number-input/style.css';

const PhoneInput = dynamic(() => import("react-phone-number-input"), { ssr: false });

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (data: RegistrationData) => void;
    courseName: string;
}

export interface RegistrationData {
    name: string;
    email: string;
    number: string;
    occupation: "student" | "professional";
}

const RegistrationModal = ({ isOpen, onClose, onRegister, courseName }: RegistrationModalProps) => {
    const [formData, setFormData] = useState<RegistrationData>({
        name: "",
        email: "",
        number: "",
        occupation: "student",
    });
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.number) {
            setError("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        onRegister(formData);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-purple-600"></div>

                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100/50"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2">
                            Start Your Journey
                        </h2>
                        <p className="text-gray-600">
                            Complete your profile to unlock the <span className="font-semibold text-brand">{courseName}</span> mock test.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors w-5 h-5" />
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-gray-800 placeholder-gray-400 hover:bg-white"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors w-5 h-5" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-gray-800 placeholder-gray-400 hover:bg-white"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Phone Number</label>
                                <div className="phone-input-wrapper w-full px-3 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand hover:bg-white transition-all">
                                    <PhoneInput
                                        defaultCountry="IN"
                                        international
                                        countryCallingCodeEditable={false}
                                        value={formData.number}
                                        onChange={(v) => setFormData({ ...formData, number: v || '' })}
                                        className="w-full [&>input]:w-full [&>input]:border-none [&>input]:outline-none [&>input]:bg-transparent"
                                        inputClass="!w-full !pl-14 !text-base !border-none !outline-none !ring-0 !bg-transparent"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" /> I am a:
                            </label>
                            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, occupation: "student" })}
                                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${formData.occupation === "student"
                                        ? "bg-white text-brand shadow-md transform scale-100"
                                        : "text-gray-500 hover:text-gray-700 bg-transparent"
                                        }`}
                                >
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, occupation: "professional" })}
                                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${formData.occupation === "professional"
                                        ? "bg-white text-brand shadow-md transform scale-100"
                                        : "text-gray-500 hover:text-gray-700 bg-transparent"
                                        }`}
                                >
                                    Professional
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-center justify-center animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            Start Assessment
                        </button>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            By continuing, you agree to our Terms & Privacy Policy.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;

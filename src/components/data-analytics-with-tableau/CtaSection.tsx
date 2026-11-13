import { Target, Briefcase, Trophy, AlarmClock } from "lucide-react";
import EnrollButton from "./ui/EnrollButton";
import SyllabusButton from "./ui/SyllabusButton";
import { SiteStat } from "@/components/stats/SiteStatsProvider";

export default function CtaSection() {
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Career?
                </h2>

                {/* Subheading */}
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                    Join hundreds of successful professionals who have mastered Tableau and launched rewarding careers in data analytics. Start your journey today with our comprehensive 20-hour course.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <Target className="w-10 h-10 mx-auto mb-3 text-orange-400" aria-hidden="true" />
                        <h3 className="font-bold text-white mb-2">Industry-Ready Skills</h3>
                        <p className="text-white text-sm">
                            Master in-demand Tableau skills valued by top companies
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <Briefcase className="w-10 h-10 mx-auto mb-3 text-orange-400" aria-hidden="true" />
                        <h3 className="font-bold text-white mb-2">Career Support</h3>
                        <p className="text-white text-sm">
                            job assistance with placement in top companies
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                        <Trophy className="w-10 h-10 mx-auto mb-3 text-orange-400" aria-hidden="true" />
                        <h3 className="font-bold text-white mb-2">Global Certificate</h3>
                        <p className="text-white text-sm">
                            Internationally recognized certification with QR validation
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <EnrollButton
                        source="Tableau Course Page - CTA Section - Enroll Now"
                        courseName={courseName}
                        className="bg-white cursor-pointer text-brand font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all text-lg"
                    >
                        Enroll Now & Get Started →
                    </EnrollButton>
                    <SyllabusButton
                        source="Tableau Course Page - CTA Section - Download Syllabus"
                        courseName={courseName}
                        className="border-2 border-white cursor-pointer text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-900 hover:bg-opacity-10 transition-all text-lg"
                    >
                        Download Free Syllabus
                    </SyllabusButton>
                </div>

                {/* Limited Time Offer */}
                <div className="bg-white text-slate-900 bg-opacity-20 border-2 border-yellow-300 rounded-lg p-6 mb-12">
                    <p className="font-bold text-lg flex items-center justify-center gap-2">
                        <AlarmClock className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> Limited Time Offer: Get 20% discount on enrollment this month!
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-white">
                    <div>
                        <div className="text-3xl font-bold"><SiteStat k="studentsPlaced" /></div>
                        <p className="text-orange-100 text-sm">Students Placed</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold"><SiteStat k="rating" /></div>
                        <p className="text-orange-100 text-sm">Average Rating</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">5+</div>
                        <p className="text-orange-100 text-sm">Years Experience</p>
                    </div>

                    <div>
                        <div className="text-3xl font-bold">4 LPA</div>
                        <p className="text-orange-100 text-sm">Average Salary</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

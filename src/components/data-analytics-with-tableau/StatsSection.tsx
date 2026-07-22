import CareerSessionButton from "./ui/CareerSessionButton";


const statsData = [
    {
        value: "25%",
        label: "Market Growth",
        description: "From 2020 to 2030",
        icon: "📈",
        bgColor: "bg-orange-100",
        textColor: "text-gray-950",
    },
    {
        value: "101,000+",
        label: "Job Vacancies",
        description: "In India",
        icon: "💼",
        bgColor: "bg-blue-100",
        textColor: "text-gray-950",
    },
    {
        value: "4 LPA",
        label: "Average Salary",
        description: "Tableau Developer Freshers",
        icon: "💰",
        bgColor: "bg-green-100",
        textColor: "text-gray-950",
    },
    {
        value: "75%",
        label: "Job Satisfaction",
        description: "Among professionals",
        icon: "😊",
        bgColor: "bg-purple-100",
        textColor: "text-gray-950",
    },
    {
        value: "32%",
        label: "India's Share",
        description: "In global market",
        icon: "🌍",
        bgColor: "bg-pink-100",
        textColor: "text-gray-950",
    },
];



export default function StatsSection() {
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Why Invest in This Course?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the market demand, career opportunities, and earning potential in data analytics with Tableau
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`${stat.bgColor} rounded-xl p-8 border-2 border-transparent hover:border-orange-300 transition-all hover:shadow-lg group cursor-pointer`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>

                            {/* Value */}
                            <div className={`${stat.textColor} text-4xl font-bold mb-2`}>
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-gray-900 font-semibold mb-1">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <div className="text-sm text-gray-600">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        These statistics show the incredible demand for Tableau professionals in today&apos;s job market.
                    </p>
                    <div className="inline-block bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-6">
                        <p className="text-gray-700">
                            <span className="font-bold text-gray-950">Join successful graduates</span> who have built rewarding careers in data analytics
                        </p>
                    </div>
                    <div>
                        <CareerSessionButton
                            source="Tableau Course Page - Stats Section - Career Session"
                            courseName={courseName}
                            className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                        >
                            Book a Free Career Session
                        </CareerSessionButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

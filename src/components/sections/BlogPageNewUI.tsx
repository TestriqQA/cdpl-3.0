
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const articles = [
    {
        category: 'Web Development',
        title: 'Building Responsive Layouts with CSS Grid and Flexbox',
        description: 'Master the art of creating flexible, responsive layouts using modern CSS techniques.',
        author: 'Mike Rodriguez',
        date: 'September 30, 2025',
        readTime: '6 min read',
        categoryBg: 'bg-blue-100',
        categoryText: 'text-blue-700',
    },
    {
        category: 'React',
        title: "React 19: What's New and How to Migrate",
        description: "A comprehensive guide to React 19's new features and migration strategies.",
        author: 'Emily Johnson',
        date: 'September 28, 2025',
        readTime: '10 min read',
        categoryBg: 'bg-cyan-100',
        categoryText: 'text-cyan-700',
    },
    {
        category: 'Backend',
        title: 'Optimizing Database Performance for High-Traffic Applications',
        description: 'Learn proven strategies to scale your database for millions of users.',
        author: 'David Kim',
        date: 'September 25, 2025',
        readTime: '12 min read',
        categoryBg: 'bg-green-100',
        categoryText: 'text-green-700',
    },
    // Add more articles here to be loaded
    {
        category: 'AI & Machine Learning',
        title: 'The Impact of Generative AI on Content Creation',
        description: 'Exploring how AI is transforming writing, art, and music industries.',
        author: 'Alex Green',
        date: 'September 20, 2025',
        readTime: '8 min read',
        categoryBg: 'bg-purple-100',
        categoryText: 'text-purple-700',
    },
    {
        category: 'UI/UX Design',
        title: 'Designing for Accessibility: Best Practices',
        description: 'Ensuring your web applications are usable by everyone.',
        author: 'Sophia Lee',
        date: 'September 18, 2025',
        readTime: '7 min read',
        categoryBg: 'bg-pink-100',
        categoryText: 'text-pink-700',
    },
    {
        category: 'DevOps',
        title: 'Introduction to Kubernetes for Developers',
        description: 'A beginner-friendly guide to container orchestration.',
        author: 'Chris Evans',
        date: 'September 15, 2025',
        readTime: '11 min read',
        categoryBg: 'bg-yellow-100',
        categoryText: 'text-yellow-700',
    },
    {
        category: 'AI & Machine Learning',
        title: 'The Impact of Generative AI on Content Creation',
        description: 'Exploring how AI is transforming writing, art, and music industries.',
        author: 'Alex Green',
        date: 'September 20, 2025',
        readTime: '8 min read',
        categoryBg: 'bg-purple-100',
        categoryText: 'text-purple-700',
    },
    {
        category: 'UI/UX Design',
        title: 'Designing for Accessibility: Best Practices',
        description: 'Ensuring your web applications are usable by everyone.',
        author: 'Sophia Lee',
        date: 'September 18, 2025',
        readTime: '7 min read',
        categoryBg: 'bg-pink-100',
        categoryText: 'text-pink-700',
    },
    {
        category: 'DevOps',
        title: 'Introduction to Kubernetes for Developers',
        description: 'A beginner-friendly guide to container orchestration.',
        author: 'Chris Evans',
        date: 'September 15, 2025',
        readTime: '11 min read',
        categoryBg: 'bg-yellow-100',
        categoryText: 'text-yellow-700',
    },
    {
        category: 'Web Development',
        title: 'Understanding Serverless Architectures',
        description: 'Building scalable and cost-effective applications without managing servers.',
        author: 'Jordan Smith',
        date: 'September 12, 2025',
        readTime: '9 min read',
        categoryBg: 'bg-blue-100',
        categoryText: 'text-blue-700',
    },
    {
        category: 'React',
        title: 'State Management in React: A Deep Dive',
        description: 'Comparing Redux, Context API, and Zustand for your React projects.',
        author: 'Patty O’Lantern',
        date: 'September 10, 2025',
        readTime: '13 min read',
        categoryBg: 'bg-cyan-100',
        categoryText: 'text-cyan-700',
    },
    {
        category: 'Backend',
        title: 'Securing Your APIs with JWT Authentication',
        description: 'Implementing JSON Web Tokens for robust API security.',
        author: 'Robert Brown',
        date: 'September 8, 2025',
        readTime: '10 min read',
        categoryBg: 'bg-green-100',
        categoryText: 'text-green-700',
    }
];

const BlogPageNewUI: React.FC = () => {
    const [visibleArticles, setVisibleArticles] = useState(3);

    const loadMoreArticles = () => {
        setVisibleArticles((prev) => prev + 3);
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Hero/Featured Article */}
            <section className="gradient-bg rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 bg-orange-200 text-brand text-xs font-medium rounded-md mb-4">
                            AI & Machine Learning
                        </span>
                        <h1 className="text-4xl md:text-4xl font-bold text-gray-950 mb-4 leading-tight">
                            The Future of AI in Web Development: Trends and Predictions for 2025
                        </h1>
                        <p className="text-gray-800 text-base mb-6 leading-relaxed">
                            Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences. Discover the tools and techniques that will shape the industry.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-700 mb-6">
                            <div className="flex items-center">
                                <i className="fas fa-user mr-2"></i>
                                <span>Sarah Chen</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-calendar mr-2"></i>
                                <span>October 2, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock mr-2"></i>
                                <span>8 min read</span>
                            </div>
                        </div>
                        <Link href="#">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-fit bg-[theme(color.brand)] hover:bg-brand interactive-scale glow">
                            Read Full Article
                            <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full h-80 bg-white rounded-xl flex flex-col items-center justify-center">
                            <i className="fas fa-book-open text-gray-400 text-8xl mb-4"></i>
                            <p className="text-gray-600 text-sm">Featured Article Image</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Latest Articles Section */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-950">Latest Articles</h2>
                        <Link href="#" className="px-4 py-2 border-2 border-orange-500 text-brand rounded-lg font-medium hover:bg-orange-50 transition-all duration-200 flex items-center">
                            View All Posts
                            <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    {/* Article Cards */}
                    <div className="space-y-6">
                        {articles.slice(0, visibleArticles).map((article, index) => (
                            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="md:flex">
                                    <div className="md:w-48 h-48 bg-white flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-book-open text-gray-300 text-6xl"></i>
                                    </div>
                                    <div className="p-5 flex-1">
                                        <span className={`inline-block px-3 py-1 ${article.categoryBg} ${article.categoryText} text-xs font-medium rounded-md mb-2`}>
                                            {article.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-950 mb-2 hover:text-purple-700 cursor-pointer">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-700 mb-4 text-sm">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                                            <div className="flex items-center">
                                                <i className="fas fa-user mr-1"></i>
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-calendar mr-1"></i>
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <i className="fas fa-clock mr-1"></i>
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleArticles < articles.length && (
                        <div className="flex justify-center mt-8">
                            <button onClick={loadMoreArticles} className="gradient-btn text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
                                Load More Articles
                                <i className="fas fa-arrow-down ml-2"></i>
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    {/* Stay Updated Box */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-envelope text-purple-600 text-2xl mr-3"></i>
                            <h3 className="text-xl font-bold text-gray-950">Stay Updated</h3>
                        </div>
                        <p className="text-gray-700 mb-4 text-sm">
                            Get the latest tech insights delivered to your inbox weekly.
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                            </div>
                            <button className="w-full gradient-btn text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                                Subscribe Now
                            </button>
                        </div>
                    </div>

                    {/* Popular This Week */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-fire text-orange-500 text-xl mr-2"></i>
                            <h3 className="text-xl font-bold text-gray-950">Popular This Week</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-950 text-sm mb-1 hover:text-purple-700 cursor-pointer">
                                        Complete Guide to TypeScript for Beginners
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">TypeScript</span>
                                        <span>15.2k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-950 text-sm mb-1 hover:text-purple-700 cursor-pointer">
                                        Docker Best Practices for Production
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">DevOps</span>
                                        <span>12.8k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-950 text-sm mb-1 hover:text-purple-700 cursor-pointer">
                                        Building Scalable APIs with Node.js
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">Backend</span>
                                        <span>11.5k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-950 text-sm mb-1 hover:text-purple-700 cursor-pointer">
                                        Modern CSS Animations and Transitions
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">CSS</span>
                                        <span>9.3k views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Browse by Category */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-th-list text-blue-500 text-xl mr-2"></i>
                            <h3 className="text-xl font-bold text-gray-950">Browse by Category</h3>
                        </div>
                        <div className="space-y-3">
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">Web Development</span>
                                <span className="badge bg-blue-200 text-blue-800">45</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">AI & Machine Learning</span>
                                <span className="badge bg-purple-200 text-purple-800">32</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">React</span>
                                <span className="badge bg-green-200 text-green-800">28</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">Backend</span>
                                <span className="badge bg-red-200 text-red-800">24</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">DevOps</span>
                                <span className="badge bg-yellow-200 text-yellow-800">18</span>
                            </Link>
                            <Link href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <span className="font-medium text-gray-700">UI/UX Design</span>
                                                           </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default BlogPageNewUI;


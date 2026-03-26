"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Globe, FileText, ArrowLeft, BookOpen, Quote } from "lucide-react";
import { SanityAuthor, SanityPost } from "@/sanity/types";
import { BlogArticleList } from "@/components/blog";

interface AuthorPageContentProps {
    author: SanityAuthor;
    posts: SanityPost[];
}

export const AuthorPageContent: React.FC<AuthorPageContentProps> = ({ author, posts }) => {
    // Stats calculation
    const yearsActive = posts.length > 0 ? getYearsActive(posts) : 1;

    return (
        <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden relative selection:bg-indigo-100 selection:text-indigo-900">
            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-indigo-50/50" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-100/40 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Navigation */}
                <motion.div
                    // Optimized LCP: Removed initial opacity:0
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Articles
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Sticky Sidebar */}
                    <motion.div
                        // Optimized LCP: Removed initial opacity:0
                        className="lg:col-span-4 lg:sticky lg:top-24 space-y-8"
                    >
                        {/* Profile Card */}
                        <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative">
                                {/* Avatar Container */}
                                <div className="relative mx-auto w-40 h-40 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 shadow-lg animate-spin-slow" style={{ animationDuration: '10s' }} />
                                    <div className="absolute inset-[3px] rounded-full bg-white p-1">
                                        <div className="relative w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src={author.avatar || "/images/user1.jpg"}
                                                alt={author.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 160px, 160px"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    {/* Verification Badge */}
                                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center text-white shadow-md z-10" title="Verified Author">
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                                    </div>
                                </div>

                                {/* Identity */}
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                                        {author.name}
                                    </h1>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
                                        {author.role}
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 transition-colors hover:bg-slate-100">
                                        <div className="text-indigo-600 font-bold text-xl mb-0.5">{posts.length}</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Articles</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 transition-colors hover:bg-slate-100">
                                        <div className="text-blue-600 font-bold text-xl mb-0.5">{yearsActive}</div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Exp.</div>
                                    </div>
                                </div>

                                {/* Social Actions */}
                                <div className="flex gap-2 justify-center">
                                    {author.social?.linkedin && (
                                        <SocialButton href={author.social.linkedin} icon={Linkedin} label="LinkedIn" color="hover:text-[#0077b5] hover:border-[#0077b5] px-8 bg-" />
                                    )}
                                    {author.social?.twitter && (
                                        <SocialButton href={author.social.twitter} icon={Twitter} label="Twitter" color="hover:text-[#1da1f2] hover:border-[#1da1f2]" />
                                    )}
                                    {author.social?.github && (
                                        <SocialButton href={author.social.github} icon={Github} label="Github" color="hover:text-slate-900 hover:border-slate-900" />
                                    )}
                                    {author.social?.website && (
                                        <SocialButton href={author.social.website} icon={Globe} label="Website" color="hover:text-emerald-600 hover:border-emerald-600" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Quote/Highlight Card (Static for now, could be dynamic) */}
                        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                                <Quote size={120} />
                            </div>
                            <Quote className="w-8 h-8 text-indigo-300 mb-4" />
                            <p className="text-lg font-medium leading-relaxed italic opacity-90 mb-4">
                                "Technology is best when it brings people together and solves real-world problems."
                            </p>
                            <div className="flex items-center gap-2 opacity-75 text-sm font-medium">
                                <div className="w-6 h-[1px] bg-white/50" />
                                <span>Philosophy</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Bio Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 sm:p-10 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-indigo-600" />
                                About {author.name.split(" ")[0]}
                            </h2>
                            <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 leading-relaxed">
                                <p>{author.bio}</p>
                            </div>
                        </motion.div>

                        {/* Articles Feed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                                    <FileText className="w-6 h-6 text-indigo-600" />
                                    Published Articles
                                </h2>
                                <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                                    {posts.length} Total
                                </span>
                            </div>

                            {posts.length > 0 ? (
                                <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200/60 p-2 sm:p-6">
                                    <BlogArticleList posts={posts} />
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">No articles yet</h3>
                                    <p className="text-slate-500">Check back later for updates from this author.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sub-components
const SocialButton = ({ href, icon: Icon, label, color }: { href: string, icon: any, label: string, color: string }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 bg-white border border-slate-300 rounded-xl text-slate-500 text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${color}`}
        title={label}
        aria-label={label}
    >
        <Icon className="w-5 h-5" />
    </Link>
);

// Helper
function getYearsActive(posts: SanityPost[]) {
    if (!posts || posts.length === 0) return 1;
    const dates = posts.map(p => new Date(p.publishDate).getFullYear());
    const min = Math.min(...dates);
    const max = Math.max(...dates);
    return max - min + 1;
}

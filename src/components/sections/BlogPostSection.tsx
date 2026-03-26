'use client';

import React from 'react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import BlogSidebarRelated from '@/components/blog/BlogSidebarRelated';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';
import TableOfContents from '@/components/blog/TableOfContents';
import { notFound } from 'next/navigation';
import { SanityPost, SanityCategory } from '@/sanity/types';

import BlogAuthorInfo from '@/components/blog/BlogAuthorInfo';

interface BlogPostSectionProps {
    post: SanityPost;
    relatedPosts: SanityPost[];
    categories: SanityCategory[];
    latestPosts: SanityPost[];
}

export const BlogPostSection: React.FC<BlogPostSectionProps> = ({ post, relatedPosts, categories, latestPosts }) => {
    if (!post) {
        notFound();
    }

    // Removed old scroll effect as it's handled in TableOfContents component now

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
                {/* Left Sidebar - Table of Contents (Desktop) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24">
                        <TableOfContents content={post.content} />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-6 min-w-0">
                    {/* Mobile Table of Contents */}
                    <div className="block lg:hidden">
                        <TableOfContents content={post.content} isMobile={true} />
                    </div>

                    {/* Render Portable Text Content */}
                    {post.content && (
                        <article className="prose prose-lg max-w-none">
                            <PortableTextRenderer value={post.content} />
                        </article>
                    )}

                    {/* Tags Section */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-8 mb-8">
                            <h3 className="text-xl font-bold mb-3 text-gray-700">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mobile Author Info */}
                    {post.author && (
                        <BlogAuthorInfo
                            author={post.author}
                            publishDate={post.publishDate}
                            readTime={post.readTime}
                            className="flex sm:hidden mb-8 mt-8 border-t border-gray-200 pt-6"
                        />
                    )}

                    {/* Share Section */}
                    <div className="border-t border-gray-200 pt-6 mt-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-700">Share this article</h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
                            >
                                <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span className="font-medium">Twitter</span>
                            </Link>
                            <Link
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                            >
                                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span className="font-medium">LinkedIn</span>
                            </Link>
                            <Link
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                            >
                                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                <span className="font-medium">Facebook</span>
                            </Link>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar - Related Posts */}
                <aside className="lg:col-span-3">
                    <div className="sticky top-24">
                        <BlogSidebarRelated
                            relatedPosts={relatedPosts}
                            categories={categories}
                            latestPosts={latestPosts}
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
};

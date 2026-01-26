'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import BlogSidebarRelated from '@/components/blog/BlogSidebarRelated';
import PortableTextRenderer from '@/components/blog/PortableTextRenderer';
import { notFound } from 'next/navigation';
import { SanityPost, SanityCategory } from '@/sanity/types';

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

    // FIXED: Add smooth scroll with offset for table of contents links
    useEffect(() => {
        // ... (Keep existing scroll logic, it's generic)
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.slice(1);
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        const offset = 152;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <main className="lg:col-span-2">
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

            {/* Sidebar with Related Posts */}
            <aside className="lg:col-span-1">
                {/* Note: BlogSidebarRelated still uses old system IDs. Might need future update. 
                    For now, passing post._id as currentPostId might not match old IDs, 
                    but we are transitioning. */
                }
                <BlogSidebarRelated
                    relatedPosts={relatedPosts}
                    categories={categories}
                    latestPosts={latestPosts}
                />
            </aside>
        </section>
    );
};

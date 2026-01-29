"use client";

import Image from 'next/image';

import { notFound } from 'next/navigation';
import { SanityPost } from '@/sanity/types';
import BlogAuthorInfo from '../blog/BlogAuthorInfo';

interface BlogPostHeroSectionProps {
    post: SanityPost;
}

export const BlogPostHeroSection: React.FC<BlogPostHeroSectionProps> = ({ post }) => {
    if (!post) {
        notFound();
    }

    const author = post.author;

    // Category-based fallback images
    const getFallbackImage = (categorySlug?: string) => {
        const fallbacks: Record<string, string> = {
            'software-testing': '/images/blog/fallback/software-testing.webp',
            'data-science': '/images/blog/fallback/data-science.webp',
            'ai-ml': '/images/blog/fallback/ai-ml.webp',
            'web-development': '/images/blog/fallback/web-development.webp',
            'devops': '/images/blog/fallback/devops.webp',
        };
        return (categorySlug && fallbacks[categorySlug]) || '/images/blog/fallback/default.webp';
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center md:text-left text-gray-600">
                {post.title}
            </h1>

            {/* Author Bio */}
            {author && (
                <BlogAuthorInfo
                    author={author}
                    publishDate={post.publishDate}
                    readTime={post.readTime}
                    className="mb-6 sm:mb-8 hidden sm:flex"
                />
            )}

            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] mb-6 sm:mb-8 rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                {/* Blurred Background Layer */}
                <Image
                    src={post.featuredImage || getFallbackImage(post.category?.slug)}
                    alt=""
                    fill
                    className="object-cover blur-xl scale-110 opacity-60 dark:opacity-40"
                    aria-hidden="true"
                    priority
                />

                {/* Main Image Layer */}
                <Image
                    src={post.featuredImage || getFallbackImage(post.category?.slug)}
                    alt={post.title}
                    fill
                    className="object-contain z-10 relative"
                    sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1200px"
                    priority
                    quality={90}
                />
            </div>

            {/* Introduction - Using excerpt as intro */}
            <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    {post.excerpt}
                </p>
                {post.description && (
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 mt-4">
                        {post.description}
                    </p>
                )}
            </div>
        </section>
    );
};

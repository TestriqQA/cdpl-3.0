import React from 'react';
import { BlogCategoryMenu, BlogHero, BlogSidebar } from '@/components/blog';
import BlogArticleList from "@/components/blog/BlogArticleList";
import type { Metadata } from 'next';
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
    generateBreadcrumbSchema,
    generateWebsiteSchema,
    generateBlogSchema,
    generateFAQSchema
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { SanityPost } from '@/sanity/types';

// ============================================================================
// SEO METADATA
// ============================================================================
export const metadata: Metadata = {
    ...generateStaticPageMetadata({
        title: 'Tech Blog - Insights, Tutorials & Trends',
        description: 'Discover expert-written articles on AI/ML, web development, React, Next.js, software testing, and DevOps. Get actionable tutorials, best practices, and industry insights to level up your tech skills. Updated daily with fresh content from CDPL experts.',
        keywords: [
            'tech blog',
            'technology blog',
            'web development tutorials',
            'AI machine learning articles',
            'React tutorials',
            'Next.js guides',
            'software testing blog',
            'DevOps best practices',
            'programming guides',
            'coding tutorials',
            'software development blog',
            'tech industry insights',
            'developer resources',
            'software engineering blog',
            'full stack development',
        ],
        url: '/blog',
        image: '/blog/og-image.jpg',
    }),
    title: {
        absolute: 'Tech Blog - Insights, Tutorials & Trends | CDPL',
    },
};

// ============================================================================
// MAIN BLOG PAGE COMPONENT
// ============================================================================
export default async function BlogPage() {
    // Fetch data from Sanity
    const posts: SanityPost[] = await client.fetch(POSTS_QUERY, {}, {
        next: { revalidate: 60 } // Revalidate every minute
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]);

    // Website Schema
    const websiteSchema = generateWebsiteSchema();

    // Blog Schema
    const blogSchema = generateBlogSchema({
        name: 'CDPL Tech Blog',
        description: 'Expert articles on AI/ML, web development, React, Next.js, DevOps, software testing, and modern technology from CDPL industry experts',
        url: '/blog',
    });

    // FAQ Schema
    const faqSchema = generateFAQSchema([
        {
            question: 'What topics does the CDPL blog cover?',
            answer: 'The CDPL blog covers a wide range of technology topics including Software Testing, Web Development (React, Next.js), AI/ML, Data Science, DevOps, Automation, Cloud Computing, and software engineering best practices. All articles are written by industry experts with practical experience.'
        },
        // ... (truncated FAQs for brevity if needed, but keeping them is fine)
        {
            question: 'How often is the CDPL blog updated?',
            answer: 'The CDPL blog is updated regularly with fresh content, tutorials, and industry insights. New articles are published multiple times per week covering the latest trends and technologies.'
        },
        {
            question: 'Are the blog tutorials suitable for beginners?',
            answer: 'Yes! The CDPL blog features content for all skill levels - from beginner tutorials to advanced technical guides. Each article clearly indicates the difficulty level and prerequisites.'
        },
        {
            question: 'Can I search for specific topics on the blog?',
            answer: 'Yes, the CDPL blog includes a search function and category filters to help you find articles on specific topics. You can browse by category, search by keywords, or filter by tags.'
        },
        {
            question: 'Who writes the CDPL blog articles?',
            answer: 'CDPL blog articles are written by experienced technology professionals, trainers, and industry experts who specialize in software testing, web development, AI/ML, and DevOps. All authors have real-world experience in their respective fields.'
        }
    ]);

    return (
        <>
            {/* Structured Data (JSON-LD) - Multiple Schemas */}
            <JsonLd id="blog-breadcrumb" schema={breadcrumbSchema} />
            <JsonLd id="blog-website" schema={websiteSchema} />
            <JsonLd id="blog-main" schema={blogSchema} />
            <JsonLd id="blog-faq" schema={faqSchema} />

            {/* Semantic HTML with proper structure */}
            <article itemScope itemType="https://schema.org/Blog">
                {/* Hidden metadata for schema.org */}
                <meta itemProp="name" content="CDPL Tech Blog" />
                <meta itemProp="description" content="Expert articles on technology, development, and testing" />
                <meta itemProp="url" content="https://www.cinutedigital.com/blog" />

                {/* Category Navigation Menu - Scrollable */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Hero Section with Featured Article */}
                <header>
                    <BlogHero post={posts[0]} />
                </header>

                {/* Main Content Area */}
                <div className="bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* SEO-friendly heading - Hidden visually but available for screen readers and SEO */}
                        <h1 className="sr-only">
                            CDPL Tech Blog - Latest Articles on Web Development, AI/ML, React, Software Testing, and DevOps
                        </h1>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Article List - 2 columns */}
                            <main className="lg:col-span-2" role="main" aria-label="Blog articles">
                                <BlogArticleList posts={posts.slice(1)} /> {/* Start from second post */}
                            </main>

                            {/* Sidebar - 1 column */}
                            <aside className="lg:col-span-1" role="complementary" aria-label="Blog sidebar">
                                <div className="lg:sticky lg:top-[200px]">
                                    <BlogSidebar />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

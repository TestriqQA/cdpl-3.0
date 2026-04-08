import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCategoryMenu } from '@/components/blog';
import { generateBlogMetadata } from '@/lib/metadata-generator';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { client } from '@/sanity/client';
import { POST_QUERY, POSTS_SLUG_QUERY, RELATED_POSTS_QUERY, CATEGORIES_WITH_COUNTS_QUERY, LATEST_POSTS_QUERY } from '@/sanity/lib/queries';
import { SanityPost, SanityCategory } from '@/sanity/types';

const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => ({ default: m.BlogPostHeroSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostSection = dynamic(
    () => import("@/components/sections/BlogPostSection").then(m => ({ default: m.BlogPostSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

// BlogPostContactSection doesn't need data props, so it can stay as is if it doesn't use slug for logic
// Checking import below, it seems to take 'slug'. Let's assume it's fine or we might need to update it too.
// Ideally contact section is generic.
const BlogPostContactSection = dynamic(
    () => import("@/components/sections/BlogPostContactSection").then(m => ({ default: m.BlogPostContactSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

// ============================================================================
// STATIC SITE GENERATION - Generate pages for all blog posts
// ============================================================================
export async function generateStaticParams() {
    const slugs: string[] = await client.fetch(POSTS_SLUG_QUERY);
    return slugs.map((slug) => ({
        slug,
    }));
}

// ============================================================================
// REVALIDATION (ISR) - Update cache every 60 seconds
// ============================================================================
export const revalidate = 60;

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post: SanityPost = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        return {
            title: 'Post Not Found | CDPL Tech Blog',
            description: 'The requested blog post could not be found.',
            robots: { index: false, follow: true },
        };
    }

    return generateBlogMetadata({
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt || '',
        slug: post.slug,
        author: post.author?.name || 'CDPL Team',
        publishedDate: new Date(post.publishDate).toISOString(),
        modifiedDate: new Date(post.publishDate).toISOString(), // Sanity tracks _updatedAt but using publishDate for now
        category: post.category?.name,
        tags: post.tags,
        image: post.featuredImage || '/blog/og-image.jpg',
    });
}

// ============================================================================
// BLOG POST PAGE COMPONENT
// ============================================================================
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch Post
    const post: SanityPost = await client.fetch(POST_QUERY, { slug });

    if (!post) {
        notFound();
    }

    // Fetch Additional Data for Sidebar and Related Content
    const [relatedPosts, categories, latestPosts] = await Promise.all([
        client.fetch<SanityPost[]>(RELATED_POSTS_QUERY, {
            categorySlug: post.category?.slug || 'all',
            currentId: post._id
        }),
        client.fetch<SanityCategory[]>(CATEGORIES_WITH_COUNTS_QUERY),
        client.fetch<SanityPost[]>(LATEST_POSTS_QUERY)
    ]);

    const { author, category } = post;

    // Calculate estimated word count (approximate for now since content is structured)
    const estimatedWordCount = 1000; // Placeholder or calculate from Portable Text

    // Generate Article Schema
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.excerpt || '',
        url: `/blog/${post.slug}`,
        image: post.featuredImage || '',
        author: author ? author.name : 'CDPL Team',
        publishedDate: new Date(post.publishDate).toISOString(),
        modifiedDate: new Date(post.publishDate).toISOString(),
        keywords: post.tags,
        wordCount: estimatedWordCount,
        category: category ? category.name : undefined,
    });

    // Generate Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: category?.name || 'Category', url: `/blog/category/${category?.slug || 'all'}` },
        { name: post.title, url: `/blog/${post.slug}` },
    ]);

    return (
        <>
            {/* Standardized JSON-LD Injection */}
            <JsonLd id="article-schema" schema={articleSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />

            <article className="blog-post-page">
                {/* Category Navigation Menu */}
                <nav aria-label="Blog categories">
                    <React.Suspense fallback={<div>Loading menu...</div>}>
                        <BlogCategoryMenu />
                    </React.Suspense>
                </nav>

                {/* Blog Post Hero Section */}
                <header>
                    <React.Suspense fallback={<div>Loading header...</div>}>
                        <BlogPostHeroSection post={post} />
                    </React.Suspense>
                </header>

                {/* Blog Post Main Content */}
                <main role="main" aria-label="Article content">
                    <React.Suspense fallback={<div>Loading content...</div>}>
                        <BlogPostSection
                            post={post}
                            relatedPosts={relatedPosts}
                            categories={categories}
                            latestPosts={latestPosts}
                        />
                    </React.Suspense>
                </main>

                {/* Contact Section */}
                <aside role="complementary" aria-label="Contact information">
                    <React.Suspense fallback={<div>Loading contact form...</div>}>
                        <BlogPostContactSection slug={slug} />
                    </React.Suspense>
                </aside>
            </article>
        </>
    );
}

import dynamic from 'next/dynamic';
import React, { cache } from 'react';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { BlogCategoryMenu } from '@/components/blog';
import { generateBlogMetadata } from '@/lib/metadata-generator';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { client } from '@/sanity/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { POST_QUERY, POSTS_SLUG_QUERY, POST_CURRENT_SLUG_FOR_PREVIOUS_QUERY, RELATED_POSTS_QUERY, CATEGORIES_WITH_COUNTS_QUERY, LATEST_POSTS_QUERY } from '@/sanity/lib/queries';
import { SanityPost, SanityCategory } from '@/sanity/types';

// Deduplicate the Sanity fetch between generateMetadata and the page
// component for the same request. Without React.cache(), POST_QUERY ran
// twice per request on every blog post (BLG-003).
//
// BLG-139: routed through sanityFetch so an editor inside the Sanity
// Presentation tool sees the unpublished draft of this post.
const getPostBySlug = cache(
    (slug: string) => sanityFetch<SanityPost>({
        query: POST_QUERY,
        params: { slug },
        tags: ['post', `post:${slug}`],
    })
);

// BLG-067: count words in the Portable Text body so BlogPosting.wordCount
// is accurate per post (it was previously hard-coded to 1000 for every post).
function countPortableTextWords(content: unknown): number {
    if (!Array.isArray(content)) return 0;
    let words = 0;
    for (const block of content) {
        const b = block as { _type?: string; children?: unknown };
        if (b?._type !== 'block' || !Array.isArray(b.children)) continue;
        for (const child of b.children) {
            const text = (child as { text?: unknown })?.text;
            if (typeof text === 'string' && text.trim()) {
                words += text.trim().split(/\s+/).length;
            }
        }
    }
    return words;
}

// BLG-018: same-shape skeleton instead of a centered "Loading..." text.
// The text fallback was a full-height element that could flash as the LCP
// candidate and caused a layout shift when the real hero swapped in.
const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => ({ default: m.BlogPostHeroSection })),
    {
        ssr: true,
        loading: () => (
            <div className="animate-pulse" aria-hidden="true">
                <div className="mb-4 h-8 w-3/4 rounded bg-gray-200" />
                <div className="mb-8 h-4 w-1/2 rounded bg-gray-200" />
                <div className="mb-6 sm:mb-8 h-64 w-full rounded-lg bg-gray-200 sm:h-80 md:h-96 lg:h-[420px]" />
                <div className="space-y-3">
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-5/6 rounded bg-gray-200" />
                </div>
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

// ⚠️  SEO FIX (April 2026): Increased from 60s to 3600s (1 hour).
// 60-second revalidation constantly invalidates the static cache, causing
// Googlebot to receive inconsistent HTML across different crawls.
export const revalidate = 3600;

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post: SanityPost = await getPostBySlug(slug);

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
        // Use _updatedAt if available, otherwise fall back to publishDate
        modifiedDate: post._updatedAt
            ? new Date(post._updatedAt).toISOString()
            : new Date(post.publishDate).toISOString(),
        category: post.category?.name,
        tags: post.tags,
        image: post.featuredImage || '/og-images/blog-og.webp',
    });
}

// ============================================================================
// BLOG POST PAGE COMPONENT
// ============================================================================
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch Post (cached per request — same call as generateMetadata)
    const post: SanityPost = await getPostBySlug(slug);

    if (!post) {
        // BLG-039 (extended): before 404-ing, check whether this slug is a
        // retired (`previousSlugs`) name of a post that has since been
        // renamed. If so, 308 to its current canonical URL so the old
        // link's accumulated SEO authority transfers.
        const renamed = await sanityFetch<{ slug?: string } | null>({
            query: POST_CURRENT_SLUG_FOR_PREVIOUS_QUERY,
            params: { slug },
            tags: ['post'],
        });
        if (renamed?.slug) {
            permanentRedirect(`/blog/${renamed.slug}`);
        }
        notFound();
    }

    // Fetch Additional Data for Sidebar and Related Content
    // BLG-139/146: draft-aware + cache-tagged via sanityFetch.
    const [relatedPosts, categories, latestPosts] = await Promise.all([
        sanityFetch<SanityPost[]>({
            query: RELATED_POSTS_QUERY,
            params: {
                categorySlug: post.category?.slug || 'all',
                currentId: post._id,
            },
            tags: ['post'],
        }),
        sanityFetch<SanityCategory[]>({
            query: CATEGORIES_WITH_COUNTS_QUERY,
            tags: ['category', 'post'],
        }),
        sanityFetch<SanityPost[]>({
            query: LATEST_POSTS_QUERY,
            tags: ['post'],
        }),
    ]);

    const { author, category } = post;

    // BLG-067: real word count derived from the Portable Text body.
    const wordCount = countPortableTextWords(post.content);

    // BLG-066: collect the author's verified profile URLs for the
    // BlogPosting author.sameAs (an E-E-A-T signal for search and AI engines).
    const authorSameAs = author?.social
        ? [
              author.social.linkedin,
              author.social.twitter,
              author.social.github,
              author.social.website,
          ].filter((url): url is string => Boolean(url))
        : [];

    // Generate Article Schema
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.excerpt || '',
        url: `/blog/${post.slug}`,
        image: post.featuredImage || '',
        author: author ? author.name : 'CDPL Team',
        authorSameAs,
        publishedDate: new Date(post.publishDate).toISOString(),
        // Use _updatedAt if available for accurate modifiedDate in structured data
        modifiedDate: post._updatedAt
            ? new Date(post._updatedAt).toISOString()
            : new Date(post.publishDate).toISOString(),
        keywords: post.tags,
        wordCount: wordCount,
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
                <div role="region" aria-label="Article content">
                    <React.Suspense fallback={<div>Loading content...</div>}>
                        <BlogPostSection
                            post={post}
                            relatedPosts={relatedPosts}
                            categories={categories}
                            latestPosts={latestPosts}
                        />
                    </React.Suspense>
                </div>

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

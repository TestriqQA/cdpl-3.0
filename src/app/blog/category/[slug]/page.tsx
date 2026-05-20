import { Metadata } from 'next';
import { cache } from 'react';
import { BlogCategoryMenu } from '@/components/blog';
import BlogSidebarCategory from '@/components/blog/BlogSidebarCategory';
import { notFound } from 'next/navigation';
import CategoryHero from '@/components/blog/CategoryHero';
import CategoryArticleList from '@/components/blog/CategoryArticleList';
import {
    generateCollectionPageSchema,
    generateItemListSchema,
    generateBreadcrumbSchema,
    generateReviewSchema,
    generateWebPageSchema
} from "@/lib/schema-generators";
import { 
    getWebsiteId, 
    getOrganizationId, 
    getFullUrl,
    STATISTICS 
} from "@/lib/seo-config";
import JsonLd from "@/components/JsonLd";
import { client } from '@/sanity/client';
import { CATEGORIES_WITH_COUNTS_QUERY, CATEGORY_POSTS_QUERY, CATEGORY_QUERY } from '@/sanity/lib/queries';
import { SanityCategory, SanityPost } from '@/sanity/types';

// Deduplicate Sanity fetches between generateMetadata and the page
// component for the same request (BLG-027). Without React.cache(),
// CATEGORY_QUERY and CATEGORY_POSTS_QUERY each ran twice per request.
const getCategoryBySlug = cache(
    (slug: string) => client.fetch<SanityCategory>(CATEGORY_QUERY, { slug })
);
const getCategoryPosts = cache(
    (slug: string) => client.fetch<SanityPost[]>(CATEGORY_POSTS_QUERY, { slug })
);

// ============================================================================
// STATIC SITE GENERATION - Generate pages for all categories
// ============================================================================
export async function generateStaticParams() {
    const categories = await client.fetch<SanityCategory[]>(CATEGORIES_WITH_COUNTS_QUERY);
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);

    if (!category) {
        return {
            title: 'Category Not Found | CDPL Tech Blog',
            description: 'The requested category could not be found. Browse all categories to discover expert articles on technology and software development.',
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    const posts = await getCategoryPosts(slug);
    const latestPost = posts[0];

    return {
        // Primary Meta Tags - Enhanced
        title: {
            absolute: `${category.name} Articles & Tutorials | CDPL Blog`,
        },
        description: `${category.description || ''} Explore ${posts.length}+ in-depth articles, tutorials, and best practices on ${category.name.toLowerCase()}. Learn from CDPL industry experts and stay updated with the latest trends.`,

        // Keywords - Category-specific (array format required by Next.js Metadata API)
        keywords: [
            category.name,
            `${category.name} tutorials`,
            `${category.name} articles`,
            `${category.name} blog`,
            `${category.name} best practices`,
            `${category.name} guides`,
            `learn ${category.name}`,
            `${category.name} tips`,
            'CDPL blog',
            'tech blog',
            'programming tutorials',
            'software development',
        ],

        // Author Information
        authors: [{ name: 'CDPL Tech Experts Team', url: 'https://www.cinutedigital.com/our-team' }],
        creator: 'CDPL - Cinute Digital Pvt. Ltd.',
        publisher: 'CDPL - Cinute Digital Pvt. Ltd.',

        // Format Detection
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },

        // Base URL
        metadataBase: new URL('https://www.cinutedigital.com'),

        // Canonical URL
        alternates: {
            canonical: `/blog/category/${category.slug}`,
            languages: {
                'en-IN': `/blog/category/${category.slug}`,
            },
        },

        // Open Graph - Enhanced
        openGraph: {
            title: `${category.name} - Expert Articles, Tutorials & Best Practices | CDPL`,
            description: `${category.description || ''} ${posts.length}+ articles to help you master ${category.name.toLowerCase()}.`,
            url: `https://www.cinutedigital.com/blog/category/${category.slug}`,
            siteName: 'CDPL Tech Blog',
            images: [
                {
                    url: latestPost?.featuredImage || '/og-images/blog-og.webp',
                    width: 1200,
                    height: 630,
                    alt: `${category.name} Articles and Tutorials`,
                    type: 'image/jpeg',
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },

        // Twitter Card - Enhanced
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} - Expert Articles & Tutorials | CDPL`,
            description: `${category.description || ''} ${posts.length}+ articles available.`,
            images: [latestPost?.featuredImage || '/og-images/blog-og.webp'],
            creator: '@cinutedigital',
            site: '@cinutedigital',
        },

        // Robots Configuration
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Additional Properties
        category: category.name,
        classification: 'Technology Category',
    };
}

// ============================================================================
// CATEGORY PAGE COMPONENT
// ============================================================================
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Parallel fetching — getCategoryBySlug / getCategoryPosts are
    // React.cache()-wrapped, so these reuse the results already fetched
    // in generateMetadata for the same request (BLG-027).
    const [category, posts, categoriesWithCounts] = await Promise.all([
        getCategoryBySlug(slug),
        getCategoryPosts(slug),
        client.fetch<any[]>(CATEGORIES_WITH_COUNTS_QUERY)
    ]);

    if (!category) {
        notFound();
    }

    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    // ============================================================================
    // ENHANCED STRUCTURED DATA (JSON-LD)
    // ============================================================================

    // ItemList Schema
    const itemListSchema = generateItemListSchema(
        posts.slice(0, 20).map((post) => ({
            name: post.title,
            url: `/blog/${post.slug}`,
            description: post.excerpt,
            image: post.featuredImage,
            type: 'BlogPosting',
            itemSchema: {
                '@type': 'BlogPosting',
                '@id': `https://www.cinutedigital.com/blog/${post.slug}#article`,
                headline: post.title,
                description: post.excerpt,
                image: post.featuredImage,
                datePublished: new Date(post.publishDate).toISOString(),
                dateModified: new Date(post.publishDate).toISOString(),
                author: {
                    '@type': 'Person',
                    name: post.author?.name,
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'CDPL - Cinute Digital Pvt. Ltd.',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://www.cinutedigital.com/logo.png',
                        width: 250,
                        height: 60
                    }
                },
                url: `https://www.cinutedigital.com/blog/${post.slug}`,
                mainEntityOfPage: `https://www.cinutedigital.com/blog/${post.slug}`,
                articleSection: category.name,
                keywords: post.tags?.join(', '),
                inLanguage: 'en-IN'
            }
        })),
        `${category.name} Articles`
    );

    // CollectionPage Schema
    const collectionPageSchema = generateCollectionPageSchema({
        name: `${category.name} Articles - CDPL Blog`,
        description: category.description || '',
        url: `/blog/category/${category.slug}`,
    });

    // WebPage Schema (Standard consolidated SEO)
    const webPageSchema = generateWebPageSchema({
        name: `${category.name} Articles & Tutorials | CDPL Blog`,
        description: `${category.description || ''} Explore tutorials and best practices on ${category.name.toLowerCase()}.`,
        url: `/blog/category/${category.slug}`,
        isPartOf: { '@id': getWebsiteId() },
        about: { '@id': getOrganizationId() }
    });

    // Consolidated AggregateRating (using valid Service entity)
    const aggregateRatingSchema = generateReviewSchema({
        itemType: 'Service',
        itemName: `CDPL ${category.name} Training & Resources`,
        itemId: getFullUrl(`/blog/category/${category.slug}#service`),
        ratingValue: STATISTICS.rating,
        reviewCount: STATISTICS.reviewCount,
    });

    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Categories', url: '/blog/categories' },
        { name: category.name, url: `/blog/category/${category.slug}` },
    ], getFullUrl(`/blog/category/${category.slug}#breadcrumb`));

    return (
        <>
            {/* Enhanced JSON-LD Structured Data */}
            <JsonLd id="category-breadcrumb" schema={breadcrumbSchema} />
            <JsonLd id="category-webpage" schema={webPageSchema} />
            <JsonLd id="category-collection" schema={collectionPageSchema} />
            <JsonLd id="category-itemlist" schema={itemListSchema} />
            <JsonLd id="category-rating" schema={aggregateRatingSchema} />

            {/* Semantic HTML structure with proper structure */}
            <div className="category-page">

                {/* Category Navigation Menu */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Category Hero Section */}
                <header>
                    <CategoryHero category={category} post={featuredPost} />
                </header>

                {/* SEO-friendly H1 - Hidden visually but available for SEO */}
                <p className="sr-only">
                    {category.name} Articles and Tutorials - Expert Insights and Best Practices from CDPL
                </p>


                {/* Main Content Area */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - Article List */}
                        <div className="lg:col-span-2" role="region" aria-label={`${category.name} articles`}>
                            <CategoryArticleList
                                categoryName={category.name}
                                posts={otherPosts}
                            />
                        </div>

                        {/* Sidebar with Category-Specific Content */}
                        <aside className="lg:col-span-1" role="complementary" aria-label="Category sidebar">
                            <BlogSidebarCategory
                                categoryName={category.name}
                                categoryPosts={posts}
                                categories={categoriesWithCounts}
                            />
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}

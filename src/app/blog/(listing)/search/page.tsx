import { Metadata } from "next";
import { SITE_CONFIG } from '@/lib/seo-config';
import { BlogCategoryMenu } from "@/components/blog";
import { SearchAgainButton } from "@/components/blog/SearchAgainButton";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Search as SearchIcon, X } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_WITH_COUNTS_QUERY, SEARCH_POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityPost, SanityCategory } from "@/sanity/types";

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q || "";

  return {
    title: query
      ? `Search Results for "${query}" | Tech Blog - Software Testing & Development`
      : "Search Blog Posts | Find Expert Articles on Software Testing, Web Development & AI",
    description: query
      ? `Discover ${query} articles and tutorials. Search our comprehensive blog covering software testing, web development, AI, machine learning, data science, DevOps, and modern development practices.`
      : "Search our extensive tech blog for expert articles, tutorials, and guides on software testing, web development, AI, machine learning, data science, DevOps, and more. Find exactly what you need.",
    keywords: query
      ? [query, `${query} tutorials`, `${query} articles`, `${query} guides`, 'tech blog search', 'programming search']
      : ['blog search', 'tech articles search', 'programming tutorials', 'software development search'],
    openGraph: {
      title: query ? `Search: "${query}" | Tech Blog` : "Search Tech Blog",
      description: query
        ? `Find articles about ${query} in our comprehensive tech blog`
        : "Search our comprehensive tech blog for expert articles and tutorials",
      type: "website",
      url: query ? `${SITE_CONFIG.url}/blog/search?q=${encodeURIComponent(query)}` : `${SITE_CONFIG.url}/blog/search`,
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: "summary",
      title: query ? `Search: "${query}"` : "Search Blog",
      description: "Search our tech blog for expert content",
    },
    robots: {
      index: false, // Don't index search results pages (SEO best practice)
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  };
}

// ============================================================================
// SEARCH PAGE COMPONENT
// ============================================================================
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";

  // Fetch all posts and categories from Sanity
  // Note: For larger sites, use groq filtering. For static/small sites, client-side or server-side filtering of all posts is okay.
  // Draft-aware + cache-tagged via sanityFetch (BLG-139/146).
  const [allPosts, categories] = await Promise.all([
    sanityFetch<SanityPost[]>({ query: SEARCH_POSTS_QUERY, tags: ['post'] }),
    sanityFetch<SanityCategory[]>({
      query: CATEGORIES_WITH_COUNTS_QUERY,
      tags: ['category', 'post'],
    })
  ]);

  // Enhanced search algorithm
  const searchResults = query.trim().length > 0
    ? allPosts.filter((post) => {
      const searchLower = query.toLowerCase();
      // Handle optional fields safely
      const titleMatch = post.title?.toLowerCase().includes(searchLower);
      const excerptMatch = post.excerpt?.toLowerCase().includes(searchLower);
      const categoryMatch = post.category?.name.toLowerCase().includes(searchLower);
      const authorMatch = post.author?.name.toLowerCase().includes(searchLower);
      const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchLower));
      const keywordMatch = post.seo?.keywords?.some(keyword => keyword.toLowerCase().includes(searchLower));
      const descriptionMatch = post.seo?.metaDescription?.toLowerCase().includes(searchLower);

      return (
        titleMatch ||
        excerptMatch ||
        categoryMatch ||
        authorMatch ||
        tagsMatch ||
        keywordMatch ||
        descriptionMatch
      );
    }).sort((a, b) => {
      // Prioritize title matches
      const aTitle = a.title?.toLowerCase().includes(query.toLowerCase());
      const bTitle = b.title?.toLowerCase().includes(query.toLowerCase());
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      // Then sort by publish date
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    : [];

  // Group results by category
  // Using slug matching safely
  const resultsByCategory = categories.map(category => ({
    category,
    posts: searchResults.filter(post => post.category?.name === category.name) // Using name match since ID might not propagate or differ
  })).filter(group => group.posts.length > 0);

  // Popular searches (you can customize this)
  const popularSearches = [
    "React", "Next.js", "TypeScript", "Testing", "AI",
    "Machine Learning", "DevOps", "Python", "JavaScript", "AWS"
  ];

  // ============================================================================
  // STRUCTURED DATA (JSON-LD) - SearchResultsPage
  // ============================================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "url": `${SITE_CONFIG.url}/blog/search?q=${encodeURIComponent(query)}`,
    "name": query ? `Search Results for "${query}"` : "Blog Search",
    "description": query ? `Search results for ${query} in our tech blog` : "Search our tech blog",
    "mainEntity": query && searchResults.length > 0 ? {
      "@type": "ItemList",
      "numberOfItems": searchResults.length,
      "itemListElement": searchResults.slice(0, 10).map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "url": `${SITE_CONFIG.url}/blog/${post.slug}`,
          "datePublished": new Date(post.publishDate).toISOString(),
          "author": {
            "@type": "Person",
            "name": post.author?.name
          }
        }
      }))
    } : undefined
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic HTML Structure */}
      <div itemScope itemType="https://schema.org/SearchResultsPage">
        {/* Category Menu */}
        <nav aria-label="Blog categories">
          <BlogCategoryMenu />
        </nav>

        {/* Search Results Hero */}
        <header className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {query ? (
                <>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <SearchIcon className="w-8 h-8 text-purple-600" aria-hidden="true" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      Search Results
                    </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-6">
                    Found <span className="font-bold text-purple-600">{searchResults.length}</span>{" "}
                    {searchResults.length === 1 ? 'result' : 'results'} for{" "}
                    <span className="font-bold text-purple-600">&quot;{query}&quot;</span>
                  </p>
                  {searchResults.length > 0 && (
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Browse through our curated articles matching your search. Each article includes expert insights, practical examples, and actionable advice.
                    </p>
                  )}

                  {/* Clear Search & Search Again Buttons */}
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <SearchAgainButton />
                    <Link
                      href="/blog/search"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200 font-medium"
                    >
                      <X className="w-4 h-4" />
                      Clear Search
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <SearchIcon className="w-12 h-12 text-purple-600" aria-hidden="true" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      Search Our Blog
                    </h1>
                  </div>
                  <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                    Search through {allPosts.length}+ expert articles on software testing, web development, AI, machine learning, data science, and DevOps. Find tutorials, guides, and best practices to advance your skills.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Use the search bar above to find specific topics, technologies, or concepts. Our comprehensive search covers titles, descriptions, tags, and content to help you discover exactly what you need.
                  </p>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Search Results or Popular Searches */}
        <div className="py-12 bg-gray-50" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {query && searchResults.length > 0 ? (
              <>
                {/* Results by Category */}
                {resultsByCategory.map(({ category, posts }) => (
                  <section key={category.slug} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        {posts.length} {posts.length === 1 ? 'result' : 'results'}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {posts.map(post => (
                        <article
                          key={post._id}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                          itemScope
                          itemType="https://schema.org/BlogPosting"
                        >
                          <Link href={`/blog/${post.slug}`} className="block">
                            <div className="relative h-48 bg-gray-200">
                              {post.featuredImage ? (
                                <Image
                                  src={post.featuredImage}
                                  alt={`${post.title} - Featured Image`}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                  <SearchIcon className="w-12 h-12 text-gray-300" />
                                </div>
                              )}
                              <div className={`absolute top-4 left-4 px-3 py-1 ${category.color?.bg || 'bg-gray-100'} ${category.color?.text || 'text-gray-800'} rounded-full text-xs font-semibold`}>
                                {post.category?.name}
                              </div>
                            </div>

                            <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2" itemProp="headline">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed" itemProp="description">
                                {post.excerpt}
                              </p>

                              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-4">
                                  <time className="flex items-center gap-1" dateTime={post.publishDate} itemProp="datePublished">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}
                                  </time>
                                  {post.readTime && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      {post.readTime}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 mt-4">
                                <User className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600" itemProp="author">{post.author?.name}</span>
                              </div>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </>
            ) : query && searchResults.length === 0 ? (
              /* No Results Found */
              <div className="text-center py-16">
                <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No results found for &quot;{query}&quot;
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We couldn&apos;t find any articles matching your search. Try different keywords, check your spelling, or browse our categories below.
                </p>

                {/* Suggestions */}
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Try searching for:</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {popularSearches.map(term => (
                      <Link
                        key={term}
                        href={`/blog/search?q=${encodeURIComponent(term)}`}
                        className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors border border-gray-200"
                      >
                        {term}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Browse Categories */}
                <div className="mt-12">
                  <Link
                    href="/blog/categories"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Browse All Categories
                  </Link>
                </div>
              </div>
            ) : (
              /* No Search Query - Show Popular Searches */
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Searches</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                  {popularSearches.map(term => (
                    <Link
                      key={term}
                      href={`/blog/search?q=${encodeURIComponent(term)}`}
                      className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors border border-gray-200 font-medium"
                    >
                      {term}
                    </Link>
                  ))}
                </div>

                {/* Browse Options */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/blog"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    View All Posts
                  </Link>
                  <Link
                    href="/blog/categories"
                    className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 font-medium"
                  >
                    Browse Categories
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================



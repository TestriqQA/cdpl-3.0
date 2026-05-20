import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";
import { client } from "@/sanity/client";
import { CATEGORIES_WITH_COUNTS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityPost, SanityCategory } from "@/sanity/types";
import JsonLd from "@/components/JsonLd";
import { getFullUrl } from "@/lib/seo-config";

// ============================================================================
// SEO METADATA - ENHANCED
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "All Blog Posts | CDPL Tech Articles & Tutorials",
  description: "Explore CDPL's full collection of expert articles on software testing, data science, AI/ML, BI and digital marketing — tutorials, best practices and industry insights.",
  keywords: [
    "CDPL blog",
    "software testing blog",
    "web development articles",
    "AI machine learning tutorials",
    "data science guides",
    "DevOps best practices",
    "tech blog India",
    "programming tutorials",
    "software development",
    "quality assurance",
    "test automation",
    "React tutorials",
    "Next.js guides",
    "Python programming",
    "JavaScript tutorials",
    "cloud computing",
    "CI/CD pipelines",
    "agile development",
    "software engineering blog"
  ],
  url: "/blog/all-posts",
  image: "/og-images/blog-og.webp",
});

// ============================================================================
// ALL POSTS PAGE COMPONENT
// ============================================================================
export default async function AllPostsPage() {
  const [allPosts, categories] = await Promise.all([
    client.fetch<SanityPost[]>(POSTS_QUERY),
    client.fetch<SanityCategory[]>(CATEGORIES_WITH_COUNTS_QUERY)
  ]);

  // Group posts by category for better organization
  // Using slug or name matching since we don't have explicit category IDs in Sanity Post (we have reference object)
  const postsByCategory = categories.map(category => ({
    category,
    posts: allPosts.filter(post => post.category?.name === category.name)
  })).filter(group => group.posts.length > 0);

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "All Posts", url: "/blog/all-posts" }
  ], getFullUrl('/blog/all-posts#breadcrumb'));


  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <JsonLd id="all-posts-breadcrumb" schema={breadcrumbSchema} />
      
      <JsonLd id="all-posts-collection" schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": getFullUrl("/blog/all-posts#collectionpage"),
        "url": getFullUrl("/blog/all-posts"),
        "name": "All Blog Posts - Software Testing & Development Resources | CDPL",
        "description": "Comprehensive collection of expert articles on software testing, web development, AI, data science, and modern development practices from CDPL",
        "isPartOf": {
          "@id": getFullUrl("/blog#blog")
        },
        "mainEntity": {
          "@id": getFullUrl("/blog/all-posts#itemlist")
        },
        "breadcrumb": {
          "@id": getFullUrl("/blog/all-posts#breadcrumb")
        }
      }} />

      <JsonLd id="all-posts-itemlist" schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": getFullUrl("/blog/all-posts#itemlist"),
        "name": "All Blog Posts - CDPL",
        "description": `Collection of ${allPosts.length} expert articles from CDPL`,
        "numberOfItems": allPosts.length,
        "itemListElement": allPosts.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "@id": getFullUrl(`/blog/${post.slug}#article`),
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "url": getFullUrl(`/blog/${post.slug}`),
            "datePublished": new Date(post.publishDate).toISOString(),
            "dateModified": new Date(post.publishDate).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author?.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "CDPL - Cinute Digital Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": getFullUrl("/logo.png"),
                "width": 250,
                "height": 60
              }
            }
          }
        }))
      }} />

      <JsonLd id="all-posts-webpage" schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": getFullUrl("/blog/all-posts"),
        "url": getFullUrl("/blog/all-posts"),
        "name": "All Blog Posts - CDPL",
        "description": "Complete collection of expert articles on software development and testing from CDPL",
        "isPartOf": {
          "@id": getFullUrl("/#website")
        }
      }} />

      {/* Semantic HTML Structure */}
      <div itemScope itemType="https://schema.org/CollectionPage">
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="All Blog Posts - CDPL" />
        <meta itemProp="description" content={`Collection of ${allPosts.length} expert articles from CDPL`} />
        <meta itemProp="url" content="https://www.cinutedigital.com/blog/all-posts" />

        {/* Category Menu */}
        <nav aria-label="Blog categories">
          <BlogCategoryMenu />
        </nav>

        {/* Hero Section with Rich Content */}
        <header className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All Blog Posts - Expert Software Development & Testing Resources from CDPL
              </h1>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Discover CDPL&apos;s comprehensive collection of {allPosts.length}+ expert articles covering software testing, web development, artificial intelligence, data science, and modern development practices. Our in-depth guides and tutorials help developers, testers, and tech professionals stay ahead in the rapidly evolving technology landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re looking to master test automation, learn the latest web frameworks, dive into machine learning, or optimize your DevOps workflow, our curated content provides actionable insights and best practices from CDPL industry experts. Browse by category below or use the search feature to find exactly what you need.
              </p>

              {/* Stats Section for SEO */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">{allPosts.length}+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">{categories.length}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600">50k+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">Weekly</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Category Filter Section */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <nav aria-label="Category filter" className="flex flex-wrap gap-3">
              <Link
                href="/blog/all-posts"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                aria-current="page"
              >
                All Posts ({allPosts.length})
              </Link>
              {categories.map(category => {
                // We can use the pre-calculated count if we trust the query, or filter here. 
                // The query now returns 'count', so let's try to use that if consistent, but we are filtering 'posts' anyway.
                // To be safe and consistent with the posts displayed:
                const count = allPosts.filter(p => p.category?.name === category.name).length;
                return (
                  <Link
                    key={category.slug}
                    href={`/blog/category/${category.slug}`}
                    className={`px-4 py-2 ${category.color?.bg || 'bg-gray-100'} ${category.color?.text || 'text-gray-800'} rounded-lg hover:opacity-80 transition-opacity font-medium`}
                  >
                    {category.name} ({count})
                  </Link>
                );
              })}
            </nav>
          </div>
        </section>

        {/* Main Content - All Posts Grouped by Category */}
        <div className="bg-gray-50 py-12" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {postsByCategory.map(({ category, posts }) => (
              <section key={category.slug} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map(post => (
                    <article
                      key={post._id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      {/* Featured Image */}
                      <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            itemProp="image"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200" />
                        )}

                      </Link>

                      {/* Post Content */}
                      <div className="p-6">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishDate} itemProp="datePublished">
                              {new Date(post.publishDate).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </time>
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors" itemProp="headline">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-2" itemProp="description">
                          {post.excerpt}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span itemProp="author" itemScope itemType="https://schema.org/Person">
                            <span itemProp="name">{post.author?.name}</span>
                          </span>
                        </div>

                        {/* Hidden metadata */}
                        <meta itemProp="url" content={`https://www.cinutedigital.com/blog/${post.slug}`} />
                        <meta itemProp="publisher" content="CDPL - Cinute Digital Pvt. Ltd." />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



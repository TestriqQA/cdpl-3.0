import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import Link from "next/link";
import { FolderOpen, ArrowRight, FileText, TrendingUp } from "lucide-react";
import BlogCategoriesClient from "./BlogCategoriesClient";
import {
  generateCollectionPageSchema,
  generateItemListSchema,
  generateBreadcrumbSchema
} from "@/lib/schema-generators";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import JsonLd from "@/components/JsonLd";
import { client } from "@/sanity/client";
import { CATEGORIES_WITH_COUNTS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityCategory, SanityPost } from "@/sanity/types";

// ============================================================================
// SEO METADATA
// ============================================================================
// BLG-026/029/030/031/032 (Sprint 1): this page previously hand-rolled its
// entire Metadata object, which shipped placeholder branding ("Your Company",
// "Your Company Tech Blog"), the wrong locale (en_US), a fake en-US hreflang
// alternate, and a redundant per-page metadataBase. Now routed through the
// central generateMetadata helper — single source of truth, correct CDPL
// branding, en_IN locale, no fake hreflang.
export const metadata: Metadata = generateSEOMetadata({
  title: { absolute: "Blog Categories - Explore Tech Topics | CDPL" },
  description:
    "Browse the CDPL tech blog by category — software testing, web development, AI & machine learning, data science, and DevOps. Find the right learning resource.",
  keywords: [
    "blog categories",
    "software testing category",
    "web development articles",
    "AI machine learning blog",
    "data science tutorials",
    "DevOps guides",
    "tech blog categories",
    "programming topics",
    "quality assurance articles",
    "test automation tutorials",
  ],
  url: "/blog/categories",
  image: "/og-images/blog-og.webp",
});

// ============================================================================
// CATEGORIES PAGE COMPONENT
// ============================================================================
export default async function CategoriesPage() {
  // Fetch categories with counts and latest post from Sanity
  // We also fetch all posts to calculate total count efficiently if needed, or rely on individual calls
  // The query `CATEGORIES_WITH_COUNTS_QUERY` now includes 'count' and 'latestPost'

  const categories = await client.fetch<(SanityCategory & { count: number, latestPost?: any })[]>(CATEGORIES_WITH_COUNTS_QUERY);
  const allPosts = await client.fetch<SanityPost[]>(POSTS_QUERY); // Needed for total calculations/SEO

  const categoriesWithCounts = categories.filter((cat) => cat.count > 0);

  const totalPosts = allPosts.length;
  const totalCategories = categoriesWithCounts.length;

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================

  // ItemList Schema
  const itemListSchema = generateItemListSchema(
    categoriesWithCounts.map((category) => ({
      name: category.name,
      url: `/blog/category/${category.slug}`,
      description: category.description,
      image: category.latestPost?.featuredImage,
      type: 'Thing'
    })),
    'Blog Categories'
  );

  // CollectionPage Schema
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'Blog Categories - Technology Topics',
    description: 'Browse expert articles by category across software testing, web development, AI, data science, and more',
    url: '/blog/categories',
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Categories', url: '/blog/categories' },
  ]);

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <JsonLd id="categories-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="categories-collection" schema={collectionPageSchema} />
      <JsonLd id="categories-itemlist" schema={itemListSchema} />

      {/* Semantic HTML Structure */}
      <div itemScope itemType="https://schema.org/CollectionPage">
        {/* Category Menu */}
        <nav aria-label="Blog categories">
          <BlogCategoryMenu />
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FolderOpen className="w-12 h-12 text-purple-600" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Blog Categories - Explore Tech Topics
                </h1>
              </div>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Explore our comprehensive collection of {totalPosts}+ expert articles organized into{" "}
                {totalCategories} specialized categories. Whether you&apos;re interested in software
                testing, web development, artificial intelligence, data science, or DevOps, we&apos;ve
                curated content to help you master modern technology and advance your career.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each category contains in-depth tutorials, best practices, industry insights, and
                practical guides written by experienced professionals with years of hands-on
                experience. Browse by topic below to find exactly what you&apos;re looking for, or
                use the search feature to discover specific content across all categories.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">{totalCategories}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">{totalPosts}+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600">Weekly</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Introduction Section for SEO */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Complete Technology Learning Resource
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our blog is designed to be your comprehensive resource for staying current with the
                latest developments in software engineering, quality assurance, and technology
                innovation. We organize our content into carefully curated categories to make it
                easy for you to find relevant information quickly and efficiently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From foundational concepts to advanced techniques, our articles cover the full
                spectrum of modern software development. Whether you&apos;re a beginner taking your
                first steps in programming, an experienced developer looking to expand your
                skillset, or a tech leader staying informed about industry trends, you&apos;ll find
                valuable content tailored to your needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each category is regularly updated with fresh content, ensuring you have access to
                the latest best practices, emerging technologies, and industry insights. Our expert
                authors bring real-world experience from leading tech companies and share practical
                knowledge you can apply immediately in your projects.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <div className="py-12 bg-gray-50" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoriesWithCounts.map((category) => (
                <article
                  key={category.slug}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  itemScope
                  itemType="https://schema.org/Thing"
                >
                  <Link href={`/blog/category/${category.slug}`} className="block">
                    <div
                      className={`p-6 ${category.color?.bg || 'bg-gray-100'} ${category.color?.text || 'text-gray-800'} border-b-4 border-opacity-50`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <FolderOpen className="w-8 h-8" aria-hidden="true" />
                        <span className="text-2xl font-bold">{category.count}</span>
                      </div>
                      <h3
                        className="text-2xl font-bold mb-2 group-hover:underline"
                        itemProp="name"
                      >
                        {category.name}
                      </h3>
                      <p className="text-sm" itemProp="description">
                        {category.description}
                      </p>
                    </div>

                    <div className="p-6">
                      {category.latestPost && (
                        <div className="mb-4">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Latest Article
                          </div>
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                            {category.latestPost.title}
                          </h4>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {category.latestPost.description}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileText className="w-4 h-4" />
                          <span>
                            {category.count}{" "}
                            {category.count === 1 ? "Article" : "Articles"}
                          </span>
                        </div>
                        <span className="text-purple-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <aside className="bg-white py-16" role="complementary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Blog?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We cover the entire technology stack, from frontend frameworks to backend
                    architectures, from manual testing to AI-powered automation, ensuring you have
                    access to knowledge across all domains of modern software development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Authors</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our content is created by industry professionals with proven track records at
                    leading technology companies. They share real-world insights, battle-tested
                    solutions, and practical advice you can trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regularly Updated</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Technology evolves rapidly, and so does our content. We publish new articles
                    weekly and update existing content to reflect the latest best practices, tools,
                    and industry standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Insights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every article includes practical examples, code snippets, and step-by-step
                    guides that you can implement immediately. We focus on solutions that work in
                    real-world production environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Client-side query param handling */}
      <BlogCategoriesClient />
    </>
  );
}

// ============================================================================
// SEO METADATA - ENHANCED
// ============================================================================


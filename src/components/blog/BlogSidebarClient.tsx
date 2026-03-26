"use client";

import { TrendingUp, FolderOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SanityPost, SanityCategory } from "@/sanity/types";

interface BlogSidebarClientProps {
    allPosts: SanityPost[];
    allCategories: SanityCategory[];
}

const BlogSidebarClient = ({ allPosts, allCategories }: BlogSidebarClientProps) => {
    // Calculate post count for each category dynamically
    // Note: SanityCategory might not have 'id', using 'name' or passing categories with counts from server is better.
    // But if we pass allCategories (raw) and allPosts, we can map.
    // However, SanityCategory from query usually doesn't have ID unless we project it.
    // We can match by name.

    const categoriesWithCounts = allCategories.map(category => ({
        ...category,
        postCount: allPosts.filter(post => post.category?.name === category.name).length
    })).filter(cat => cat.postCount > 0);

    // DYNAMIC: Get last 5 latest blog posts for Popular Posts
    const latestPosts = [...allPosts]
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, 5)
        .map((post, index) => ({
            _id: post._id,
            rank: index + 1,
            title: post.title,
            category: post.category?.name,
            slug: `/blog/${post.slug}`
        }));

    // DYNAMIC: Get unique tags from last 5 blogs
    const latestBlogTags = [...allPosts]
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, 5)
        .flatMap(post => post.tags || []);

    // Get unique tags and count occurrences
    const tagCounts = latestBlogTags.reduce((acc: Record<string, number>, tag) => {
        if (tag) {
            acc[tag] = (acc[tag] || 0) + 1;
        }
        return acc;
    }, {});

    // Sort tags by frequency and get top tags
    const popularTags = Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([tag]) => tag)
        .slice(0, 10); // Show top 10 tags

    return (
        <aside className="space-y-6">
            {/* Popular Posts Section - DYNAMIC */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-sm border border-indigo-100">
                <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">Popular Posts</h3>
                </div>
                <div className="space-y-4">
                    {latestPosts.map((post) => (
                        <Link
                            key={post._id}
                            href={post.slug}
                            className="group block"
                        >
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                                    {post.rank}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 leading-snug">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-600">
                                        <span className="px-2 py-0.5 bg-white rounded-full font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border border-purple-100">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <FolderOpen className="w-5 h-5 text-purple-600" />
                        <h3 className="text-lg font-bold text-gray-900">Categories</h3>
                    </div>
                </div>
                <div className="space-y-2">
                    {categoriesWithCounts.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/blog/category/${category.slug}`}
                            className="group flex items-center justify-between p-3 bg-white hover:bg-purple-50 rounded-lg transition-all duration-200 border border-transparent hover:border-purple-200"
                        >
                            <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors">
                                {category.name}
                            </span>
                            <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                                {category.postCount}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* View All Categories Link */}
                <div className="mt-4 pt-4 border-t border-purple-200">
                    <Link
                        href="/blog/categories"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
                    >
                        <span>View All Categories</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Tags Cloud - DYNAMIC */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 shadow-sm border border-cyan-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {popularTags.length > 0 ? (
                        popularTags.map((tag) => (
                            <Link
                                key={tag}
                                href={`/blog/search?q=${tag.toLowerCase()}`}
                                className="px-3 py-1.5 bg-white hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 text-xs font-medium rounded-full border border-cyan-200 hover:border-cyan-300 transition-all duration-200"
                            >
                                #{tag}
                            </Link>
                        ))
                    ) : (
                        <p className="text-sm text-gray-600">No tags available</p>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebarClient;

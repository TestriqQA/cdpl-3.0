"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SanityPost } from '@/sanity/types';

// --- Blog Card Component ---
const BlogCard: React.FC<{ post: SanityPost; index: number }> = ({ post, index }) => {
  // Helper to format the date string
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} title={post.title}>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          {/* Featured Image */}
          <div className="relative h-48 bg-gradient-to-br from-indigo-300 to-indigo-600 overflow-hidden">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage}
                alt={post.title}
                title={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-400 font-bold">CDPL Blog</span>
              </div>
            )}

            {/* Category Badge - post.category is now an object { name: string } */}
            {post.category?.name && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold rounded-full">
                  {post.category.name}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author?.name}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            {/* Date & CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1 text-indigo-600 font-semibold group-hover:gap-2 transition-all duration-300">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};


/**
 * HomeLatestBlogSection - Recent Articles
 * 
 * Shows the latest 3 blog posts passed as props.
 */
interface HomeLatestBlogSectionProps {
  posts?: SanityPost[];
}

export default function HomeLatestBlogSection({ posts = [] }: HomeLatestBlogSectionProps) {
  // Fallback for when no posts are available
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-6 lg:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Our <span className="text-indigo-600">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in software testing, data science, and technology.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog" // Link to the main blog page
            title="View All Articles"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

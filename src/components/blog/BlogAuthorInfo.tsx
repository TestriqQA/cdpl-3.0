import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SanityAuthor } from '@/sanity/types';

interface BlogAuthorInfoProps {
    author: SanityAuthor;
    publishDate: string;
    readTime?: string;
    className?: string; // Allow external styling for visibility control
}

const BlogAuthorInfo: React.FC<BlogAuthorInfoProps> = ({ author, publishDate, readTime, className = '' }) => {
    if (!author) return null;

    // Format date
    const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const displayReadTime = readTime || "5 min read";

    return (
        <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ${className}`}>
            {author.slug ? (
                <Link href={`/blog/author/${author.slug}`} className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <Image
                        src={author.avatar || "/images/user1.jpg"}
                        alt={author.name}
                        fill
                        className="rounded-full border-2 border-blue-600 object-cover"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                    />
                </Link>
            ) : (
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                    <Image
                        src={author.avatar || "/images/user1.jpg"}
                        alt={author.name}
                        fill
                        className="rounded-full border-2 border-blue-600 object-cover"
                    />
                </div>
            )}
            <div className="text-center sm:text-left">
                {author.slug ? (
                    <Link href={`/blog/author/${author.slug}`} className="font-semibold text-base sm:text-lg text-gray-600 hover:text-blue-600 transition-colors">
                        {author.name}
                    </Link>
                ) : (
                    <span className="font-semibold text-base sm:text-lg text-gray-600">
                        {author.name}
                    </span>
                )}
                {author.bio && (
                    <p className="text-xs sm:text-sm text-gray-700">
                        {author.bio}
                    </p>
                )}
                <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                    <span className="text-xs text-gray-500">{formattedDate}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{displayReadTime}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogAuthorInfo;

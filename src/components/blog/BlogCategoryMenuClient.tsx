"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SanityPost, SanityCategory } from "@/sanity/types";

interface BlogCategoryMenuClientProps {
    allPosts: SanityPost[];
    allCategories: SanityCategory[];
}

const BlogCategoryMenuClient = ({ allPosts, allCategories }: BlogCategoryMenuClientProps) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SanityPost[]>([]);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchResultsRef = useRef<HTMLDivElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    // Listen for custom event to open search
    useEffect(() => {
        const handleOpenSearch = () => {
            setIsSearchOpen(true);
            // Small delay to ensure render before focus (though the focus useEffect should handle it)
            setTimeout(() => {
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }, 100);
        };

        window.addEventListener('open-blog-search', handleOpenSearch);
        return () => window.removeEventListener('open-blog-search', handleOpenSearch);
    }, []);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    // Real-time search functionality
    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            const filtered = allPosts.filter((post) => {
                const searchLower = searchQuery.toLowerCase();
                return (
                    post.title.toLowerCase().includes(searchLower) ||
                    post.excerpt?.toLowerCase().includes(searchLower) ||
                    post.category?.name.toLowerCase().includes(searchLower) ||
                    post.author?.name.toLowerCase().includes(searchLower) ||
                    post.tags?.some(tag => tag.toLowerCase().includes(searchLower))
                );
            });
            setSearchResults(filtered.slice(0, 5)); // Show top 5 results
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, allPosts]);

    // Handle scroll to hide/show menu
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
                setSearchQuery("");
                setSearchResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/blog/search?q=${encodeURIComponent(searchQuery)}`;
        }
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
    };

    const handleResultClick = () => {
        setSearchResults([]);
        setSearchQuery("");
        setIsSearchOpen(false);
    };

    return (
        <div
            className={`sticky top-[72px] lg:top-[80px] z-40 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 shadow-md transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">
                    {/* Scroll Button Left */}
                    {showLeftButton && (
                        <button
                            onClick={handleScrollLeft}
                            className="flex items-center justify-center p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 mr-1"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    )}

                    {/* Categories Navigation */}
                    <nav
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex items-center space-x-1 overflow-x-auto scrollbar-hide flex-1 snap-x snap-mandatory"
                    >
                        {/* All Blogs Link */}
                        <Link
                            href="/blog"
                            className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 snap-center"
                        >
                            All Blogs
                        </Link>

                        {/* Dynamic Categories */}
                        {allCategories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/blog/category/${category.slug}`}
                                className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 snap-center"
                            >
                                {category.name}
                            </Link>
                        ))}

                        {/* All Categories Link */}
                        <Link
                            href="/blog/categories"
                            className="whitespace-nowrap px-4 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 snap-center"
                        >
                            All Categories
                        </Link>
                    </nav>

                    {/* Scroll Button */}
                    {showRightButton && (
                        <button
                            onClick={handleScrollRight}
                            className="flex items-center justify-center p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200 ml-1"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    )}

                    {/* Search Section */}
                    <div ref={searchContainerRef} className="flex items-center ml-4 flex-shrink-0 relative search-container">
                        {!isSearchOpen ? (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                                aria-label="Open search"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        ) : (
                            <div className="relative">
                                <form
                                    onSubmit={handleSearchSubmit}
                                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden animate-expand"
                                >
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search articles..."
                                        className="bg-transparent text-white placeholder-white/70 px-4 py-2 outline-none w-48 sm:w-64 text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleCloseSearch}
                                        className="p-2 text-white hover:bg-white/20 transition-colors duration-200"
                                        aria-label="Close search"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </form>

                                {/* Real-time Search Results */}
                                {searchResults.length > 0 && (
                                    <div
                                        ref={searchResultsRef}
                                        className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto"
                                    >
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                                Search Results ({searchResults.length})
                                            </p>
                                        </div>
                                        {searchResults.map((post) => (
                                            <Link
                                                key={post._id}
                                                href={`/blog/${post.slug}`}
                                                onClick={handleResultClick}
                                                className="block px-4 py-3 hover:bg-purple-50 transition-colors duration-150"
                                            >
                                                <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                                                    {post.title}
                                                </h4>
                                                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                                                        {post.category?.name}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </Link>
                                        ))}
                                        {searchQuery.trim().length > 0 && (
                                            <div className="px-4 py-3 border-t border-gray-100">
                                                <button
                                                    onClick={handleSearchSubmit}
                                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                                                >
                                                    View all results for &quot;{searchQuery}&quot; →
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* No Results Message */}
                                {searchQuery.trim().length > 0 && searchResults.length === 0 && (
                                    <div
                                        ref={searchResultsRef}
                                        className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 px-4 z-50"
                                    >
                                        <p className="text-sm text-gray-600 text-center">
                                            No results found for &quot;{searchQuery}&quot;
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: auto;
            opacity: 1;
          }
        }
        .animate-expand {
          animation: expand 0.3s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default BlogCategoryMenuClient;

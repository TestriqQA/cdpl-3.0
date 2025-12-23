"use client";

import { Search } from "lucide-react";

export const SearchAgainButton = () => {
    const handleSearchAgain = () => {
        // Dispatch custom event to open search in BlogCategoryMenu
        window.dispatchEvent(new CustomEvent('open-blog-search'));

        // Scroll to top where the menu is
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleSearchAgain}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-sm hover:shadow-md border border-purple-600"
        >
            <Search className="w-4 h-4" />
            Search Again
        </button>
    );
};

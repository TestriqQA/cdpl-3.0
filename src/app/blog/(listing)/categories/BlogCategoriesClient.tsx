// src/app/blog/categories/BlogCategoriesClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// ============================================================================
// INNER COMPONENT - Uses useSearchParams
// ============================================================================
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // You can log, send analytics, pre-select a category, etc.
  if (typeof window !== "undefined" && category) {
    console.log("Blog categories page – pre-selected category:", category);
    // e.g. window.gtag?.("event", "category_filter", { category });
  }

  // This component renders **nothing** – it only reads the query string.
  return null;
}

// ============================================================================
// OUTER COMPONENT - Wraps with Suspense
// ============================================================================
export default function BlogCategoriesClient() {
  return (
    <Suspense fallback={null}>
      <SearchParamsHandler />
    </Suspense>
  );
}

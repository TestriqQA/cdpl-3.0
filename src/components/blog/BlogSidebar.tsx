import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogSidebarClient from "./BlogSidebarClient";
import { SanityPost, SanityCategory } from "@/sanity/types";

export default async function BlogSidebar() {
  const [allPosts, allCategories] = await Promise.all([
    client.fetch<SanityPost[]>(POSTS_QUERY, {}, { next: { revalidate: 3600 } }),
    client.fetch<SanityCategory[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } })
  ]);

  return <BlogSidebarClient allPosts={allPosts} allCategories={allCategories} />;
}

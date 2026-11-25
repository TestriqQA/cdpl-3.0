import PageSkeleton from "@/components/skeletons/PageSkeleton";

// BLG-025: route-segment loading UI for the blog listing pages.
//
// C4-01: this file must stay inside the (listing) route group. Do not move it
// back up to src/app/blog/. A loading.tsx wraps its segment and every
// descendant in a Suspense boundary, so Next.js streams this skeleton with
// HTTP 200 before the page runs. At the parent level that included the
// [slug] detail routes, whose notFound() then fired too late to change the
// status: every unknown slug was served as a crawlable 200 "Not Found" page.
// Scoped here, it covers only the listing pages, and detail routes return a
// real 404.
export default function Loading() {
  return <PageSkeleton />;
}

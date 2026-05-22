import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

/**
 * BLG-006 — Sanity → Next.js on-demand revalidation webhook.
 *
 * WHY THIS EXISTS
 * ---------------
 * Blog posts use ISR (`export const revalidate = 3600`) and the sitemap /
 * category data is cached too. Without this webhook, anything published in
 * Sanity only appears on the live site at the next ISR cycle (up to an hour
 * later). With it, Sanity calls this endpoint the instant you hit "Publish",
 * and the affected pages refresh within seconds.
 *
 * The shared secret proves the request genuinely came from Sanity — it stops
 * anyone else from hammering this endpoint to force cache rebuilds.
 *
 * Invalidation uses `revalidatePath` only. Tag-based invalidation
 * (`revalidateTag`, pairing with the tagged caches from BLG-021/BLG-146)
 * is intentionally not used here yet — Next.js 16's `revalidateTag` now
 * requires a cache-profile argument under the new caching model, which
 * should be wired up deliberately once that model is adopted project-wide.
 *
 * SANITY SETUP (sanity.io/manage → API → Webhooks → Create webhook)
 * -----------------------------------------------------------------
 *   Name:        Next.js revalidate
 *   URL:         https://www.cinutedigital.com/api/revalidate
 *   Dataset:     production
 *   Trigger on:  Create, Update, Delete
 *   HTTP method: POST
 *   API version: v2021-03-25 (or later)
 *   Secret:      the same value as SANITY_REVALIDATE_SECRET in the env
 *   Projection (recommended): {"_type": _type, "slug": slug.current}
 *     — the route also works without a projection (full document body).
 */

type WebhookPayload = {
  _type?: string;
  // `slug` is a string when the webhook uses the recommended projection,
  // or an object when Sanity sends the full document body.
  slug?: string | { current?: string };
};

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return NextResponse.json(
        { message: 'SANITY_REVALIDATE_SECRET is not configured on the server.' },
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      secret,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const type = body?._type;
    if (!type) {
      return NextResponse.json(
        { message: 'Bad request: payload is missing _type' },
        { status: 400 },
      );
    }

    // Slug works whether the webhook projects it as a string or sends the
    // full document (where slug is { current: string }).
    const slug =
      typeof body?.slug === 'string' ? body.slug : body?.slug?.current;

    const revalidated: string[] = [];

    switch (type) {
      case 'post': {
        if (slug) {
          revalidatePath(`/blog/${slug}`, 'page');
          revalidated.push(`/blog/${slug}`);
        }
        revalidatePath('/blog', 'page');
        revalidatePath('/blog/all-posts', 'page');
        revalidatePath('/blog/category/[slug]', 'page');
        revalidatePath('/blog/author/[slug]', 'page');
        revalidated.push('/blog', '/blog/all-posts', '/blog/category/*', '/blog/author/*');
        break;
      }
      case 'category': {
        if (slug) {
          revalidatePath(`/blog/category/${slug}`, 'page');
          revalidated.push(`/blog/category/${slug}`);
        }
        revalidatePath('/blog', 'page');
        revalidatePath('/blog/categories', 'page');
        revalidatePath('/blog/all-posts', 'page');
        revalidated.push('/blog', '/blog/categories', '/blog/all-posts');
        break;
      }
      case 'author': {
        if (slug) {
          revalidatePath(`/blog/author/${slug}`, 'page');
          revalidated.push(`/blog/author/${slug}`);
        }
        break;
      }
      case 'job': {
        revalidatePath('/jobs/careers', 'page');
        revalidated.push('/jobs/careers');
        break;
      }
      case 'certificate': {
        revalidatePath('/cdpl-certificate-validation', 'page');
        revalidated.push('/cdpl-certificate-validation');
        break;
      }
      default:
        // Unknown document type — acknowledged, nothing to revalidate.
        break;
    }

    // The XML sitemap enumerates posts, categories and authors, so refresh it
    // whenever any of those change.
    if (type === 'post' || type === 'category' || type === 'author') {
      revalidatePath('/sitemap.xml', 'page');
      revalidated.push('/sitemap.xml');
    }

    return NextResponse.json({
      revalidated: true,
      type,
      slug: slug ?? null,
      paths: revalidated,
      now: Date.now(),
    });
  } catch (err) {
    console.error('[/api/revalidate] error:', err);
    return NextResponse.json(
      { message: 'Internal error while revalidating.' },
      { status: 500 },
    );
  }
}

# Content Seeds

These `.tsx` files are **legacy blog-article seed drafts** that previously
lived in `src/content/posts/`. They were not imported anywhere — the live
blog is fully Sanity-driven — so they were dead code shipped inside the
`src/` tree (BLG-109).

They are kept here as **reference material** for migrating the article
content into Sanity (relevant to the Sprint 6 content cycle). They are
intentionally outside `src/` and excluded from `tsconfig.json`, so they are
no longer compiled, type-checked, or bundled.

Do not import from this directory. Migrate the useful content into Sanity
`post` documents, then delete the corresponding file here.

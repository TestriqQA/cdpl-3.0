export const content = {
    introduction: `<p><strong>Large Language Models (LLMs)</strong> are no longer just autocomplete—they’re reliable collaborators that can scaffold components, refactor TypeScript, write <strong>Jest</strong>/<strong>Testing Library</strong> specs, produce <strong>Playwright</strong> e2e flows, and even draft <strong>Storybook</strong> stories and <strong>MDX</strong> docs. Used well, they compress days of work into hours while improving consistency and coverage. Used poorly, they generate brittle code and silent regressions.</p>
  <p>This guide shows front-end developers how to plug LLMs into a modern <strong>React/Next.js</strong> stack, with prompt patterns, guardrails, examples, and CI integration. You’ll learn how to generate code you can trust, validate it with tests, and ship discoverable, documented UI—faster.</p>`,

    sections: [
        {
            title: "LLM-First Front-End Workflow: The Big Picture",
            content: `<p>An AI-augmented front-end loop looks like this:</p>
      <ol>
        <li><strong>Intent &amp; Specs:</strong> Describe user stories, acceptance criteria, and constraints (design tokens, accessibility, performance).</li>
        <li><strong>Scaffold:</strong> Ask the LLM to generate component structure, types, and state management <em>without</em> heavy styling first.</li>
        <li><strong>Tests first:</strong> Produce Jest/RTL unit tests and Playwright e2e scripts to lock behavior.</li>
        <li><strong>Wire to data:</strong> Add hooks, fetchers, and adapters; then harden types.</li>
        <li><strong>Docs:</strong> Generate Storybook stories and MDX usage with props tables and a11y notes.</li>
        <li><strong>CI guardrails:</strong> Prettier/ESLint/TypeCheck + unit/e2e + Lighthouse/Pa11y budgets + review prompts.</li>
      </ol>
      <p>Keep humans in the loop: you review architecture, naming, and edge cases; the model handles repetitive scaffolding and boilerplate.</p>`
        },

        {
            title: "Prompt Patterns that Produce Clean, Typed React Code",
            content: `<p>Prompts should be <em>deterministic</em>, <em>constrained</em>, and <em>contextual</em>. Provide the target framework, file boundaries, and style rules.</p>
      <div class="code-block">
        <pre><code class="language-text">SYSTEM: You are a senior front-end engineer. Output only the requested files.
USER: Generate a React (TypeScript) headless &lt;Pagination /&gt; component with keyboard navigation and a11y (ARIA). Follow these constraints:
- No external state libraries
- Accepts totalItems, pageSize, page, onPageChange
- Emits accessible markup (aria-current, aria-label)
- Include types, tests (Jest + RTL), and Storybook stories (CSF3)
- No CSS frameworks; expose slot props for styling
Return files: Pagination.tsx, Pagination.test.tsx, Pagination.stories.tsx</code></pre>
      </div>
      <p><strong>Why it works:</strong> You bound the output to specific files, libraries, and accessibility rules, which steers the model away from hallucinated dependencies.</p>`
        },

        {
            title: "Scaffolding a Headless Component (TypeScript First)",
            content: `<p>Ask the model to generate a minimal, typed component with exhaustive props and predictable state transitions.</p>
      <div class="code-block">
        <pre><code class="language-tsx">// Pagination.tsx (excerpt)
import * as React from "react";

export type PaginationProps = {
  totalItems: number;
  pageSize: number;
  page: number;
  onPageChange: (page: number) =&gt; void;
  getItemLabel?: (n: number) =&gt; string;
};

export function Pagination({
  totalItems,
  pageSize,
  page,
  onPageChange,
  getItemLabel = (n) =&gt; \`Page \${n}\`,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const go = (n: number) =&gt; onPageChange(Math.min(totalPages, Math.max(1, n)));
  const items = Array.from({ length: totalPages }, (_, i) =&gt; i + 1);

  return (
    &lt;nav aria-label="Pagination"&gt;
      &lt;ul role="list" className="inline-flex items-center gap-2"&gt;
        &lt;li&gt;
          &lt;button aria-label="Previous page" onClick={() =&gt; go(page - 1)} disabled={page === 1}&gt;Prev&lt;/button&gt;
        &lt;/li&gt;
        {items.map((n) =&gt; (
          &lt;li key={n}&gt;
            &lt;button
              aria-current={n === page ? "page" : undefined}
              aria-label={getItemLabel(n)}
              onClick={() =&gt; go(n)}
            &gt;
              {n}
            &lt;/button&gt;
          &lt;/li&gt;
        ))}
        &lt;li&gt;
          &lt;button aria-label="Next page" onClick={() =&gt; go(page + 1)} disabled={page === totalPages}&gt;Next&lt;/button&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  );
}</code></pre>
      </div>
      <p>Keep it headless; styling can be slots or wrapper classes. This makes the component reusable across design systems.</p>`
        },

        {
            title: "Generating Unit Tests with Jest & Testing Library",
            content: `<p>Once the skeleton exists, ask the LLM to write behavior-driven tests that validate navigation, boundary conditions, ARIA attributes, and callbacks.</p>
      <div class="code-block">
        <pre><code class="language-ts">// Pagination.test.tsx (excerpt)
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "./Pagination";

test("renders pages and handles navigation", async () =&gt; {
  const user = userEvent.setup();
  const onPageChange = vi.fn();
  render(&lt;Pagination totalItems={100} pageSize={10} page={1} onPageChange={onPageChange} /&gt;);

  expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
  await user.click(screen.getByRole("button", { name: "2" }));
  expect(onPageChange).toHaveBeenCalledWith(2);
});

test("applies aria-current on active page", () =&gt; {
  const { rerender } = render(&lt;Pagination totalItems={30} pageSize={10} page={3} onPageChange={() =&gt; {}} /&gt;);
  expect(screen.getByRole("button", { name: "Page 3" })).toHaveAttribute("aria-current", "page");
});</code></pre>
      </div>
      <p><strong>Prompt tip:</strong> Ask for tests that fail when accessibility contracts break—this locks in a11y as a non-regression requirement.</p>`
        },

        {
            title: "Playwright E2E: From User Story to Script",
            content: `<p>For critical flows (checkout, login, search), generate Playwright tests from acceptance criteria. Provide route URLs, data states, and selectors.</p>
      <div class="code-block">
        <pre><code class="language-ts">// tests/pagination.e2e.ts (excerpt)
import { test, expect } from "@playwright/test";

test("pagination works on blog list", async ({ page }) =&gt; {
  await page.goto("/blog");
  await expect(page.getByRole("navigation", { name: "Pagination" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await expect(page).toHaveURL(/page=2/);
});</code></pre>
      </div>
      <p>Pin endpoints and IDs in fixtures to make tests stable; ask the LLM to refactor selectors to role-based queries for resilience.</p>`
        },

        {
            title: "Docs that Don’t Rot: Storybook + MDX via AI",
            content: `<p>LLMs excel at turning prop types and examples into living docs. Prompt for CSF3 stories, controls, and accessibility notes. Then add an MDX page with usage and do/don’t patterns.</p>
      <div class="code-block">
        <pre><code class="language-tsx">// Pagination.stories.tsx (excerpt)
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta&lt;typeof Pagination&gt; = {
  title: "Navigation/Pagination",
  component: Pagination,
  args: { totalItems: 120, pageSize: 10, page: 1 },
};
export default meta;
type Story = StoryObj&lt;typeof Pagination&gt;;

export const Basic: Story = {};
export const WithCustomLabels: Story = {
  args: { getItemLabel: (n) =&gt; \`Go to page \${n}\` },
};</code></pre>
      </div>
      <div class="code-block">
        <pre><code class="language-mdx">---
// docs/Pagination.mdx (excerpt)
title: Pagination
---

import { Meta } from "@storybook/blocks";
&lt;Meta title="Navigation/Pagination" /&gt;

# Pagination

Use for paginated lists. Keyboard and screen reader friendly.

**Props**
- totalItems: number
- pageSize: number
- page: number
- onPageChange(page): void

**A11y**
- Use \`aria-current="page"\` on the active page
- Provide descriptive labels via \`getItemLabel\`</code></pre>
      </div>
      <p>Automate docs generation in CI: extract prop tables from TypeScript and regenerate MDX on changes—LLM fills narrative gaps.</p>`
        },

        {
            title: "Integrating with Next.js 15 & RSC: Data + Caching",
            content: `<p>For app routes, keep components server-first and pass small client islands only when interactivity is required. Ask the LLM to produce an RSC data loader and a client wrapper.</p>
      <div class="code-block">
        <pre><code class="language-tsx">// app/blog/page.tsx (excerpt)
import { Pagination } from "@/components/Pagination";
import { Suspense } from "react";

export const revalidate = 300;

async function getPosts(page: number) {
  const res = await fetch(\`https://api.example.com/posts?page=\${page}\`, { next: { revalidate: 300 } });
  return res.json();
}

export default async function BlogList({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page ?? 1);
  const data = await getPosts(page);

  return (
    &lt;main&gt;
      &lt;ul&gt;{data.items.map((p: any) =&gt; &lt;li key={p.id}&gt;{p.title}&lt;/li&gt;)}&lt;/ul&gt;
      &lt;Suspense fallback={null}&gt;
        &lt;Pagination totalItems={data.total} pageSize={10} page={page} onPageChange={() =&gt; {}} /&gt;
      &lt;/Suspense&gt;
    &lt;/main&gt;
  );
}</code></pre>
      </div>
      <p>Keep Pagination headless and client if it needs event handlers; otherwise render static anchors for crawlable pagination URLs.</p>`
        },

        {
            title: "CI Guardrails: Make AI Output Safe & Maintainable",
            content: `<p>Automate quality checks so generated code never lands broken:</p>
      <ul>
        <li><strong>Static checks:</strong> TypeScript strict, ESLint (including a11y plugins), Prettier.</li>
        <li><strong>Tests:</strong> Jest + RTL (unit) and Playwright (e2e) on PRs; threshold coverage gates.</li>
        <li><strong>Performance:</strong> Lighthouse budgets; block regressions in LCP/INP/CLS.</li>
        <li><strong>Accessibility:</strong> Storybook a11y, Pa11y/axe CI runs, snapshot ARIA roles.</li>
        <li><strong>Security:</strong> Dependabot + npm audit; block risky packages.</li>
      </ul>
      <div class="code-block">
        <pre><code class="language-yaml"># .github/workflows/ci.yml (excerpt)
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: npm ci
      - run: npm run lint && npm run typecheck
      - run: npm run test -- --coverage
      - run: npx playwright install --with-deps &amp;&amp; npm run e2e
      - run: npm run lighthouse:ci</code></pre>
      </div>
      <p>Ask the LLM to write the CI file then review tokens, permissions, and cache keys manually.</p>`
        },

        {
            title: "Refactoring with AI: From JS to Strict TypeScript",
            content: `<p>LLMs shine at <em>mechanical refactors</em>: converting JS to <strong>strict</strong> TS, extracting hooks, or flattening prop drilling. Provide a small example and rules (no any, explicit generics, exhaustive unions).</p>
      <div class="code-block">
        <pre><code class="language-text">Refactor to TypeScript with these rules:
- no implicit any; use discriminated unions
- prefer React.FC&lt;Props&gt; with named Props export
- document props with TSDoc
Return only changed files.</code></pre>
      </div>
      <p>Run <code>tsc --noEmit</code> in CI to enforce correctness.</p>`
        },

        {
            title: "Accessibility, i18n, and Design Tokens—Baked In",
            content: `<p>Include a11y and i18n in your prompts so generated code adopts them by default:</p>
      <ul>
        <li>Ask for semantic roles and labels; require keyboard and screen reader flows.</li>
        <li>Provide translation keys and directionality (LTR/RTL) examples.</li>
        <li>Pass your design tokens (spacing, colors, radius) and ask for token-aligned class names or inline styles.</li>
      </ul>
      <p>LLM output mirrors your inputs—seed it with your team’s standards.</p>`
        },

        {
            title: "Common Pitfalls & How to Avoid Them",
            content: `<ul>
        <li><strong>Hallucinated APIs:</strong> Prevent by pinning library versions and asking for imports explicitly.</li>
        <li><strong>Over-engineered code:</strong> Demand minimal dependencies and headless patterns; ban global state unless justified.</li>
        <li><strong>Flaky tests:</strong> Use role-based queries, deterministic test data, and test retries for e2e.</li>
        <li><strong>Docs drift:</strong> Regenerate Storybook/MDX from types on PRs; fail CI if signatures mismatch.</li>
        <li><strong>Security &amp; licenses:</strong> Ask the model to avoid GPL-incompatible snippets; run license checks.</li>
      </ul>`
        },

        {
            title: "Advanced: AST-Aware Edits & Spec-Driven Generation",
            content: `<p>For large repos, prefer <em>spec-first</em> generation: provide JSON/TS interfaces for props and state, then ask the LLM to implement against the spec. For safe edits, combine AI with AST tools (ts-morph, codemods) to enforce exact changes and run automated codemods in CI.</p>
      <div class="code-block">
        <pre><code class="language-ts">// Example spec for a FilterBar
export interface FilterBarProps {
  query: string;
  tags: string[];
  onChange: (next: { query: string; tags: string[] }) =&gt; void;
  disabled?: boolean;
}</code></pre>
      </div>
      <p>Feed this spec and require exhaustive props handling; generate tests that assert behavior across all branches.</p>`
        }
    ],

    conclusion: `<p>LLMs are the new power tool for front-end teams: they scaffold components, cement behavior with tests, and create clean, searchable docs. The win isn’t just speed—it’s <em>quality at scale</em> when you pair AI with strict TypeScript, a11y-first patterns, Storybook, and CI guardrails.</p>
  <p>Start small: pick one component, write the prompt with constraints, generate code + tests + docs, and wire the CI. Iterate on your prompt library, encode your design tokens, and let the model do the repetitive work while you focus on architecture, UX nuance, and edge cases.</p>
  <p>The result: faster delivery, higher coverage, consistent documentation—and happier users.</p>`,

    relatedPosts: [
        "nextjs-15-seo-guide-master-react-server-components-2025",
        "typescript-refactoring-patterns-for-react-2025",
        "storybook-driven-development-with-rsc",
        "playwright-testing-strategy-for-spas"
    ]
};

export default content;





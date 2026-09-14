# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack at localhost:3000
npm run build      # Production build
npm run lint       # Run Next.js ESLint
npm run test       # Run all tests with Vitest
npm run test:ui    # Run tests with Vitest UI
```

To run a single test file:
```bash
npx vitest src/components/ui/Button/Button.test.tsx
```

## Environment

Requires a `HYGRAPH_ENDPOINT` environment variable — a Hygraph (GraphQL CMS) API URL. Set it in `.env.local`. Without it, the blog pages will throw at runtime.

## Architecture

**Data flow:** Blog content is fetched server-side from [Hygraph](https://hygraph.com) (a headless CMS) via GraphQL. Queries are defined in `src/lib/queries.ts` and typed via `src/lib/types.ts`. Pages use Next.js `fetch` with `next: { revalidate: 3600 }` for ISR (revalidates every hour).

**Routing:**
- `/` — Home/landing page
- `/blog` — Blog listing page (server component, fetches all posts)
- `/blog/[slug]` — Individual post page (server component, fetches by slug)
- `/preview` — Component preview/design system sandbox

**HTML sanitization:** Blog post content arrives as raw HTML from Hygraph. It is sanitized in `src/lib/sanitize.ts` using DOMPurify + jsdom before being rendered via `dangerouslySetInnerHTML`.

**Styling:** Tailwind CSS v4 with custom CSS variables for theming (see `src/app/globals.css`). Theme tokens like `bg-primary`, `text-muted`, `bg-surface` are CSS variable–based. Dark mode is toggled via `DarkModeToggle` component in the global layout.

**Component structure:** Reusable UI components live in `src/components/ui/<ComponentName>/`. The `Button` component supports variants: `primary`, `secondary`, `success`, `warning`, `danger`.

**Testing:** Vitest + React Testing Library with jsdom environment. Tests co-locate with components (e.g., `Button.test.tsx` alongside `Button.tsx`).

**GitHub Actions:** `.github/workflows/claude.yml` enables Claude Code to respond to `@claude` mentions in issues, PR comments, and PR reviews via `anthropics/claude-code-action`.

**MCP servers configured** (`.mcp.json`): `context7` (library docs) and `playwright` (browser automation).

## Conventions

- When creating a new page component, always add a corresponding `<Link>` for it in the header nav inside `src/app/layout.tsx`.

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (header, nav, dark mode toggle)
│   ├── page.tsx                # Home/landing page
│   ├── globals.css             # Global styles & Tailwind CSS variable theme tokens
│   ├── blog/
│   │   ├── page.tsx            # Blog listing (server component)
│   │   └── [slug]/
│   │       ├── page.tsx        # Individual blog post (server component)
│   │       └── BlogPost.module.css
│   └── preview/
│       └── page.tsx            # Component preview/design system sandbox
├── components/
│   ├── BlogSidebar.tsx         # Sidebar with categories & newsletter (static)
│   ├── DarkModeToggle.tsx      # Dark/light mode toggle button
│   └── ui/                     # Reusable UI primitives
│       └── Button/
│           ├── Button.tsx
│           └── Button.test.tsx
├── hooks/                      # Reusable hooks
├── lib/
│   ├── queries.ts              # GraphQL query strings (GET_BLOG_POSTS, GET_SINGLE_POST)
│   ├── sanitize.ts             # DOMPurify HTML sanitizer (server-safe via jsdom)
│   └── types.ts                # Shared TypeScript interfaces (BlogPost)
└── test/
    ├── setup.ts                # Vitest global test setup (@testing-library/jest-dom)
    └── vitest.d.ts             # Vitest type declarations
```

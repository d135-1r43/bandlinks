# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BandLinks is a "link in bio" aggregator built with **Svelte 5** and powered by **Directus CMS**. It's a single-page application that fetches content from a Directus headless CMS and renders a beautiful landing page with dynamic theming.

## Development Commands

```bash
# Development
pnpm run dev              # Start development server on http://localhost:5173
pnpm run dev --open       # Start dev server and open browser

# Building
pnpm run build            # Create production build
pnpm run preview          # Preview production build locally

# Code Quality
pnpm run check            # Run TypeScript and Svelte type checks
pnpm run check:watch      # Run type checks in watch mode
pnpm run lint             # Check code formatting (Prettier) and linting (ESLint)
pnpm run format           # Format code with Prettier
```

## Tech Stack

- **Frontend Framework**: Svelte 5 (using runes: `$props()`, `$derived`, etc.)
- **Meta Framework**: SvelteKit with `@sveltejs/adapter-node` for SSR
- **Styling**: Tailwind CSS v4 + DaisyUI components
- **Language**: TypeScript
- **Package Manager**: pnpm (prefer pnpm over npm)
- **Deployment**: Docker + GitHub Actions CI/CD

## Architecture

### Data Flow

1. **Environment Configuration**: The `BAND_ID` environment variable specifies which Directus item to fetch
2. **Layout Server Load** (`+layout.server.ts`): Fetches basic aggregator data (title, favicon, theme color) - available to all routes
3. **Page Server Load** (`+page.server.ts`): Fetches full aggregator data including links and hero image metadata
4. **Client Rendering**: Svelte components render the page with dynamic theming

### Key Architectural Patterns

**Server-Side Data Loading**: All CMS data is fetched server-side in `+layout.server.ts` and `+page.server.ts` using SvelteKit's load functions. This enables SSR and better SEO.

**Data Deduplication**: The layout loader fetches minimal data (for head tags), while the page loader fetches the full dataset. Both use the same Directus endpoint but with different field selections.

**Dynamic Theming**: The theme color from Directus is injected as a CSS custom property (`--theme-color`) in `+layout.svelte` using inline styles in `<svelte:head>`.

**Asset URL Construction**: Directus assets are accessed via two patterns:
- `/assets/{uuid}` - For transformed/optimized assets (used in `utils.ts` `getAssetUrl()`)
- `/files/{uuid}` - For file metadata (used in server loaders)

**Component Structure**:
- `HeroSection.svelte` - Main hero with background image, logo, and link list
- `LinkButton.svelte` - Individual link button with Font Awesome icon
- `PageFooter.svelte` - Footer with imprint link

### Svelte 5 Runes Usage

This project uses Svelte 5's modern runes syntax:
- `$props()` for component props (replaces `export let`)
- `$derived` for computed values (replaces `$:`)
- `import('svelte').Snippet` for typed children/render props

### Type System

All types are defined in `src/lib/types.ts`:
- `LinkAggregator` - Main CMS content type
- `DirectusFile` - File metadata from Directus
- `Link` - Individual link button data
- `PageData` / `LayoutData` - SvelteKit page data types

## Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `BAND_ID` | Directus item ID for the link aggregator to display | ✅ Yes | `abc123` |

Set in `.env` file (not committed to git):
```bash
BAND_ID=your-directus-item-id
```

## Directus Integration

**Hardcoded Directus URL**: The Directus instance URL (`https://directus.herhoffer.net`) is hardcoded in:
- `src/routes/+layout.server.ts`
- `src/routes/+page.server.ts`
- `src/lib/utils.ts`

**API Endpoints Used**:
- `GET /items/link_aggregator/{id}` - Fetch aggregator data
- `GET /items/link_aggregator/{id}?fields=*.*&sort=links.sort` - Fetch with nested links
- `GET /files/{uuid}` - Fetch file metadata
- `GET /assets/{uuid}` - Serve optimized assets

**Collection Schema**: The Directus `link_aggregator` collection should have:
- Basic fields: `id`, `title`, `tagline`, `tag_line`, `theme_color`, `impress_url`
- File relations: `favicon`, `background_image`, `logo_image`
- Many-to-many relation: `links` (sorted by `sort` field)

## Deployment

**Docker**: Uses `@sveltejs/adapter-node` for Node.js SSR deployment. Build with:
```bash
docker build -t bandlinks .
docker run -p 3000:3000 -e BAND_ID=your-id bandlinks
```

**CI/CD**: GitHub Actions workflow (`.github/workflows/docker-image.yml`) automatically:
1. Builds Docker image on push to `main`
2. Pushes to GitHub Container Registry (`ghcr.io`)
3. Triggers Portainer webhook for deployment

## Important Notes

- **No Tests**: This project currently has no test suite
- **No ESLint Config**: No `eslint.config.js` file exists, linting relies on package.json scripts
- **Accessibility**: Components use proper ARIA labels and semantic HTML (see `HeroSection.svelte` and `LinkButton.svelte`)
- **Performance**: Images are preloaded in `HeroSection.svelte` using `onMount()` and the `preloadImage()` utility
- **SEO**: Meta tags are managed via `svelte-meta-tags` in `+page.svelte` with Open Graph support
- **Analytics**: Plausible Analytics is integrated in `+layout.svelte` (hardcoded to `plausible.herhoffer.net`)

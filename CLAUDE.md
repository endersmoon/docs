# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **PhoenixDS** design system documentation site built with:
- **Next.js 15.3.3** with App Router
- **Nextra** (documentation theme) for static site generation
- **shadcn/ui** components with Radix UI primitives
- **Tailwind CSS v4** for styling
- **Pagefind** for search functionality

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
# or for specific port
npm run startx  # runs on port 3000

# Linting
npm run lint
```

## Deployment

### Production Build Process
1. **Build the application**: `npm run build`
   - Generates static files in `.next/` directory
   - Optimizes and minifies assets
   - Builds search index with Pagefind

2. **Search Index Generation**: Pagefind automatically runs as postbuild step
   - Indexes the built site from `.next/server/app`
   - Outputs search files to `public/_pagefind/`

### Deployment Options

#### Static Export (Recommended for CDN)
Since this is a documentation site built with Nextra, it can be deployed as a static site:
```bash
npm run build
# Deploy the .next/out directory (if static export is configured)
# Or deploy the entire project for server-side rendering
```

#### Platform-Specific Deployments
- **Vercel**: Connect GitHub repository, automatic deployments on push
- **Netlify**: Deploy from GitHub, configure build command as `npm run build`
- **GitHub Pages**: Use GitHub Actions with Next.js static export
- **Docker**: Use Node.js base image, copy built files, serve on port 3000

#### Environment Considerations
- Ensure Node.js 18+ is available on deployment platform
- Configure proper environment variables if needed
- Verify PostCSS and Tailwind CSS build process works in production
- Test that Pagefind search functionality works after deployment

## Architecture Overview

### Content Structure
- **app/**: Next.js App Router pages and layouts
  - Uses Nextra theme with `.mdx` files for documentation content
  - Navigation defined in `_meta.js` files throughout the directory structure
  - Main sections: Guide (`doc/`), Tokens (`token/`), Components (`components/`), Blocks (`blocks/`), Assets (`material/`)

### Component System
- **components/ui/**: shadcn/ui components (Button, Card, Accordion, etc.)
- All UI components use `.jsx` extension
- Configured via `components.json` with New York style and Lucide icons

### Styling & Configuration
- **Tailwind CSS v4** with PostCSS integration
- Global styles in `app/globals.css`
- Uses CSS variables for theming (`cssVariables: true`)
- Path aliases configured for `@/components`, `@/lib`, `@/utils`

### Search Integration
- **Pagefind** search runs as postbuild step
- Indexes built site and outputs to `public/_pagefind/`
- Command: `pagefind --site .next/server/app --output-path public/_pagefind`

### Key Features
- Mermaid diagram support via `@theguild/remark-mermaid`
- Auto-collapsing sidebar with default menu collapse level 1
- Responsive design with PhoenixDS branding

## Important File Locations

- Main layout: `app/layout.js`
- Site configuration: `next.config.mjs`
- Component aliases: `components.json`
- Navigation structure: `app/_meta.js` and nested `_meta.js` files
- Content pages: `.mdx` files in respective directories
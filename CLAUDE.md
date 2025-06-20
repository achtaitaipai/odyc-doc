# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for Odyc.js (https://odyc.dev), a JavaScript library for creating interactive narrative games. The site is built with SvelteKit and features:

- Multilingual documentation (English/French)
- Interactive code playground with live game preview
- Visual tools (Paint editor, Map editor, Sound generator)
- Example games and tutorials
- Component gallery built with Storybook

**Primary Use Case:** Adding and updating documentation for Odyc.js library methods and features.

## Development Commands

### Core Development
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run check            # Type check with svelte-check
npm run check:watch      # Type check in watch mode
npm run format           # Format code with Prettier
npm run lint             # Check formatting with Prettier
```

### Content & Build Process
```bash
npm run postbuild:search   # Generate search index with Pagefind
npm run postbuild:sitemap  # Generate sitemap
npm run postbuild          # Both search index and sitemap (runs after build)
```

### Storybook (Component Development)
```bash
npm run storybook         # Start Storybook dev server (port 6006)
npm run build-storybook   # Build Storybook for production
```

## Architecture

### SvelteKit Structure
- **Static Site Generation**: Uses `@sveltejs/adapter-static` for deployment
- **Preprocessing**: MDsveX for Markdown processing with Svelte components
- **Styling**: TailwindCSS v4 with custom design system
- **TypeScript**: Strict mode enabled throughout

### Content Management
- **Documentation**: Markdown files in `src/content/doc/` organized by language (`en.md`, `fr.md`)
- **Examples**: Game code examples in `src/content/examples/`
- **Internationalization**: Centralized in `src/lib/i18n/` with language routing via `[[lang]]` parameter

### Key Components & Libraries
- **Game Engine Integration**: Embeds Odyc.js library for live game previews
- **Code Editor**: CodeMirror 6 with TypeScript support, Vim mode, and custom themes
- **Visual Tools**: 
  - Paint editor for sprite creation
  - Map editor for game level design  
  - Sound generator using PFXR
- **Search**: Pagefind for static site search

### Game Code Architecture
- **Sandbox Execution**: Games run in iframe with `srcdoc` for security
- **Communication**: PostMessage API for editor-game communication
- **Code Processing**: Custom parsing to extract user code from template

### Component Organization
- **Reusable UI**: All components in `src/lib/ui/` and exported from `src/lib/index.ts`
- **Storybook Integration**: Stories in `src/stories/` for component development
- **Design System**: Consistent styling with TailwindCSS utilities and custom color palette

## File Structure Patterns

- **Routes**: Follow SvelteKit conventions with `[[lang]]` for i18n
- **Content**: Markdown with frontmatter, processed by MDsveX
- **Static Assets**: Emojis, gallery images, and docs media in `/static/`
- **Component Co-location**: Related components grouped in subdirectories (e.g., `Editor/`, `Paint/`)

## Documentation Guidelines

### Adding New Documentation
Documentation files are located in `src/content/doc/` and organized by category and language:
- **File structure**: `[category]--[title]/{en,fr}.md`
- **Required languages**: Always add content in both English (`en.md`) and French (`fr.md`)
- **Markdown format**: Use MDsveX (Markdown + Svelte components)

### Documentation Patterns
- **Sections**: Use `## <Emoji src="🔤" /> Section Title` format
- **Code examples**: Always include practical code examples with comments
- **Parameters**: Document all parameters with type and description
- **Return values**: Clearly specify what functions return
- **Import statements**: Show proper import syntax from 'odyc' library

### Available Components in Documentation
- `<Emoji src="..." />`: For section headers and visual elements
- `<Aside>`: For notes, warnings, and additional information
- `<PaintDemo/>`, `<SoundDemo/>`, etc.: Interactive demos for specific features

### Bilingual Documentation
- Maintain consistency between English and French versions
- French translations should be natural, not literal
- Technical terms (function names, parameters) remain in English
- Comments in code examples should be translated

## Development Notes

- **Prerendering**: All pages are prerendered (`export const prerender = true`)
- **Search Integration**: Pagefind generates search index post-build
- **Asset Optimization**: Emoji sprites are pre-generated WebP files
- **TypeScript**: Uses SvelteKit's generated tsconfig with strict settings
- **Code Formatting**: Prettier with Svelte and TailwindCS plugins
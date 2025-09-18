# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "Salvex" built with TypeScript, React 19, and Tailwind CSS. The project uses the App Router architecture and includes shadcn/ui components for the UI layer.

## Development Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## Project Structure

- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout component
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles and Tailwind imports
  - `/api` - API routes directory
- `/components` - React components
  - `/ui` - shadcn/ui base components (Button, Card, Dialog, Input, Label, Badge)
  - `project-inquiry-modal.tsx` - Custom modal component
- `/lib` - Utility functions and shared logic
  - `utils.ts` - Common utility functions including cn() for class merging
- `/public` - Static assets

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion, tailwindcss-animate
- **Package Manager**: pnpm

## shadcn/ui Configuration

The project uses shadcn/ui with the "new-york" style variant. Components are configured with:
- RSC (React Server Components) enabled
- CSS variables for theming
- Neutral base color
- Component aliases defined in `components.json`

## Path Aliases

- `@/*` - Root directory
- `@/components` - Components directory
- `@/lib` - Library/utilities directory
- `@/components/ui` - UI components

## Code Style

- ESLint configured with Next.js recommended rules
- TypeScript strict mode enabled
- Use the existing component patterns found in `/components/ui`
- Follow the shadcn/ui component composition patterns
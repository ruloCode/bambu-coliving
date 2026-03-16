# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bambu Coliving — a Next.js 16 booking website for a coliving space in Bogotá, Colombia. All UI content is in Spanish.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint via next lint
```

No test framework is configured.

## Architecture

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4 + shadcn/ui (Radix primitives in `components/ui/`)
- **State**: Zustand with localStorage persistence (`lib/booking-store.ts`, key: `bambu-booking-storage`)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Path alias**: `@/*` maps to project root

### Key directories

- `app/` — Pages using App Router. Routes use Spanish names (`habitaciones`, `reserva`, `eventos`, etc.)
- `app/habitaciones/[slug]/` — Dynamic room detail pages
- `components/` — Page-level and shared components
- `components/ui/` — shadcn/ui primitives (do not edit manually, use `npx shadcn@latest add`)
- `components/habitaciones/slug/` — Room detail page sections (gallery, features, prices, booking form)
- `lib/` — Zustand store and utilities (`cn()` helper)
- `hooks/` — Custom hooks (`use-toast`, `use-mobile`)
- `content.ts` — Centralized static data (rooms, hero, testimonials, benefits)

### Booking flow

1. User selects a room on `/habitaciones/[slug]` → `RoomBookingSection` writes room + duration + price to Zustand store
2. User is redirected to `/reserva` → `BookingWizard` renders a 3-step form (summary → guest info → confirmation)
3. Pricing: base monthly price × duration + 5% surcharge per extra guest + 10% security deposit

### Conventions

- Most components are client components (`"use client"`). Server components are used for static page shells.
- `next.config.mjs` ignores TypeScript build errors and disables image optimization (`unoptimized: true`).
- Room data (titles, slugs, images, features, pricing) lives in `content.ts`, not fetched from an API.

# FoodBridge — Frontend

Production frontend scaffold for FoodBridge, a SaaS platform connecting surplus
food from hotels to NGOs and volunteers.

> This is a **project initialization + design system** milestone. No landing
> page, dashboards, or authentication UI have been built yet — only the
> architecture, routing shell, and reusable design system components that
> future pages will be built on top of.

## Tech stack

- React 19 + Vite
- TypeScript
- Tailwind CSS (v3, CSS-variable theming)
- shadcn/ui primitives (Radix UI under the hood)
- React Router DOM v7
- Lucide React icons
- Framer Motion

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint      # oxlint
npm run preview   # preview the production build
```

## Folder structure

```
src/
  assets/          static images/fonts (empty — populated per page)
  components/
    common/        cross-cutting layout helpers (PageContainer, SectionContainer, PlaceholderPage)
    layout/         Navbar, Sidebar, AppLayout, DashboardLayout, PageTransition
    ui/             design-system primitives (Button, Input, Card, Badge, Modal, Loader, EmptyState)
  pages/            route-level components, grouped by area (landing, auth, hotel, ngo, volunteer, admin)
  hooks/            shared React hooks (empty — populated per feature)
  context/          React context providers (empty — populated per feature)
  services/         API clients / data-fetching layer (empty — populated per feature)
  routes/           router config (router.tsx) + path constants (paths.ts)
  types/            shared TypeScript types
  utils/            utilities, incl. cn() class-merge helper
  constants/        theme.ts (raw token mirror) + motion.ts (Framer Motion variants)
  styles/           reserved for future global stylesheets beyond index.css
  index.css         Tailwind layers + CSS variables (source of truth for theme)
```

## Design system

All design tokens are defined in two places that must stay in sync:

- `tailwind.config.js` — Tailwind theme extension (colors, type scale, shadows,
  radius, spacing, breakpoints, animation keyframes).
- `src/index.css` — CSS custom properties consumed by shadcn/ui-style
  components (`--primary`, `--background`, `--border`, etc.), plus the
  typography utility classes (`.hero`, `.page-title`, `.section-title`,
  `.card-title`, `.body-text`, `.caption-text`).
- `src/constants/theme.ts` — a plain-JS/TS mirror of the same values for
  contexts that need raw hex/px values (charts, inline styles).

### Palette

| Token | Value |
|---|---|
| Primary (Emerald) | `#059669` (`primary-600`) |
| Secondary (Royal Blue) | `#4169E1` (`secondary-500`) |
| Background | `#FAFAFA` |
| Card | `#FFFFFF` |
| Text primary | `#111827` |
| Text secondary | `#6B7280` |
| Border | `#E5E7EB` |

### Typography

Font: **Inter**. Scale available as both Tailwind utilities
(`text-hero`, `text-page-title`, `text-section-title`, `text-card-title`,
`text-body`, `text-caption`) and semantic classes (`.hero`, `.page-title`, …).

### UI primitives (`src/components/ui`)

`Button` (primary / secondary / outline / ghost / link / destructive variants),
`Input`, `Card` (+ Header/Title/Description/Content/Footer), `Badge`, `Modal`
(Radix Dialog + Framer Motion), `Loader`, `EmptyState`.

### Layout primitives

`PageContainer`, `SectionContainer` (`src/components/common`), and
`Navbar` / `Sidebar` / `AppLayout` / `DashboardLayout` / `PageTransition`
(`src/components/layout`) — all placeholders ready to be filled in as real
pages are designed.

## Routing

Configured in `src/routes/router.tsx` using `createBrowserRouter`. Public
routes (`/`, `/login`, `/register`) use `AppLayout`; role dashboards
(`/hotel/dashboard`, `/ngo/dashboard`, `/volunteer/dashboard`,
`/admin/dashboard`) use `DashboardLayout`. All routes currently render
`PlaceholderPage` stubs — no real page content, per this milestone's scope.
Route paths are centralized in `src/routes/paths.ts` as `ROUTES`.

# ByteSpace

Marketing site for the ByteSpace online-course platform, built from the "ByteSpace New Check website" Figma design.

Implemented screens:

| Route       | Screen                      | Status               |
| ----------- | --------------------------- | -------------------- |
| `/`         | Home / landing page         | Required deliverable |
| `/login`    | Sign in                     | Bonus                |
| `/register` | Create an account           | Bonus                |
| `*`         | 404 Not Found (`not-found`) | Bonus                |

## Stack

- **Next.js 16** (Pages Router, Turbopack)
- **React 19** + **TypeScript** (strict)
- **Chakra UI v3** — the whole design system is expressed as Chakra tokens, text styles, layer styles and recipes
- **Emotion** with SSR critical-CSS extraction in `_document`, so the first paint is already styled
- **lucide-react** for icons
- **next/font** — Poppins (Google), Satoshi + Clash Display (self-hosted `woff2`)

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The site runs at http://localhost:3000.

| Script                 | Purpose                       |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Dev server (Turbopack)        |
| `npm run build`        | Production build              |
| `npm run start`        | Serve the production build    |
| `npm run typecheck`    | `tsc --noEmit`                |
| `npm run lint`         | ESLint (`eslint-config-next`) |
| `npm run format`       | Prettier write                |
| `npm run format:check` | Prettier check (CI-friendly)  |

## Design source of truth

Everything under `src/theme/` is transcribed from the Figma style guide that shipped with the design resources:

- **Colors** — Persian Blue (`brand`), Electric Lime (`accent`), Shuttle Gray (`ink`), full 50–950 ramps.
- **Typography** — Poppins SemiBold for headings, Satoshi Regular/Medium for body and labels, Clash Display Bold for the logo wordmark. All 13 Figma text styles exist as `textStyles` (`heading.l` … `label.xs`).
- **Layout grid** — 1440px frame, 1200px content, 120px margin, 40px gutter, 12 columns. Exposed as the `frame`/`content` size tokens and the `margin`/`gutter` spacing tokens, consumed by `<Container>` and section grids.

## Adding a section

1. Put the copy and records in `src/data/` with a type from `src/types/content.ts`.
2. Compose existing primitives from `src/components/ui` and `src/components/common`.
3. Add the section component under `src/components/sections/<page>/` and export it from that folder's barrel.
4. Render it from the route in `src/pages/`.

Nothing in a section file should contain a raw hex color, font stack or px font size — reach for a token, `textStyle` or `layerStyle` instead. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full picture.

## Assets

Design assets were extracted from the Figma export and normalised into `public/`:

- `public/images/courses` — course thumbnails
- `public/images/people` — hero photography (alpha-trimmed so layout boxes match the subject)
- `public/images/avatars` — learner and testimonial avatars
- `public/images/decor` — the 3D lime/white props from the hero, creator CTA and auth screens
- `public/logo` — the ByteSpace logo (the mark is also inlined as SVG in `src/components/common/logo.tsx`)

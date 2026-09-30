# Architecture

The project is organised in four layers. Each layer may only import from the layers above it, which keeps the dependency graph acyclic and makes every piece independently testable.

```
theme      design tokens, text styles, layer styles, recipes   (no React)
   |
ui         unstyled-to-styled primitives built from recipes    (Button, Pill, TextInput, Container, Section)
   |
common     domain-agnostic building blocks                     (CourseCard, AvatarStack, DecorShape, CollageStage)
   |
sections   one component per band of a page                    (HeroSection, TestimonialsSection)
   |
app        routes that compose sections                        (/, /login, /register, not-found)
```

## Directory map

```
src/
  app/                     App Router entries
    layout.tsx             fonts + Chakra provider
    page.tsx               landing page
    not-found.tsx          404 screen
    (auth)/login|register  auth routes (route group, no shared URL segment)
  assets/fonts/            self-hosted woff2 consumed by next/font/local
  components/
    ui/                    primitives driven by theme recipes
    common/                reusable domain blocks
    layout/                SiteHeader, SiteFooter
    sections/home/         landing-page bands
    auth/                  auth layout, card, form, showcase
  data/                    typed content (home.ts, auth.ts, navigation.ts)
  lib/fonts.ts             next/font wiring, exports `fontVariables`
  theme/                   the design system
  types/content.ts         shared content contracts
```

## The theme layer

`src/theme/index.ts` builds the Chakra system with `createSystem(defaultConfig, config)`.

| File                   | Contents                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `tokens/colors.ts`     | `brand` / `accent` / `ink` ramps straight from the Figma color styles                           |
| `tokens/typography.ts` | font families, the Figma font sizes, weights and line heights                                   |
| `tokens/layout.ts`     | radii, shadows, and the layout-grid sizes (`frame`, `content`) and spacing (`margin`, `gutter`) |
| `semantic-tokens.ts`   | intent-level aliases (`bg`, `fg.muted`, `border`, `grid.line`) and the two page gradients       |
| `text-styles.ts`       | the 13 Figma text styles, responsive at the top end (`heading.l` steps down on small screens)   |
| `layer-styles.ts`      | recurring surfaces (`surface.card`, `surface.panel`, `surface.floating`)                        |
| `recipes/`             | `button`, `input`, `pill` variant definitions                                                   |

**Recipes are not registered on the Chakra system.** They are consumed through the `chakra()` factory in `src/components/ui`, e.g. `chakra("button", buttonRecipe)`. This avoids merging with (and fighting) Chakra's built-in `button`/`input` recipes, and keeps our variant names (`visual`, `scale`, `tone`, `shape`) unambiguous.

Consequence: the three files in `src/components/ui` that call `chakra()` are Client Components, because the factory is client-only. Everything else in the tree stays a Server Component.

## Server/Client boundaries

Server Components by default. Only these are `"use client"`:

- `components/ui/{button,pill,text-input}.tsx` — `chakra()` factory requirement
- `components/ui/provider.tsx` — `ChakraProvider`
- `components/layout/site-header.tsx` — mobile menu state, `usePathname`
- `components/common/inline-form.tsx` — controlled search/newsletter input
- `components/sections/home/topic-filter.tsx` — active topic + "+ More"
- `components/auth/auth-form.tsx` — controlled fields and validation

Two rules follow from Next.js' server/client boundary and are worth knowing before adding code:

1. **Never pass a component as a prop from a Server Component to a Chakra component.** `<Icon as={Star} />` fails at build time. Use `<Icon asChild><Star /></Icon>` instead — that passes an element, which serialises.
2. **`chakra.svg` (and any other `chakra.*` access) is client-only.** For inline SVG inside a Server Component, use `<Box asChild>` around a plain `<svg>`.

## Layout system

`<Container>` reproduces the Figma frame: `maxW="frame"` (1440px) with `px` stepping up to the 120px margin, leaving a 1200px content column. Section grids use `gap="gutter"` (40px), so the 12-column/40px-gutter grid from the style guide holds without a grid abstraction.

`<Section>` wraps a `<Container>` with the standard vertical rhythm; bands that need a full-bleed background (hero, creator CTA, gradients) render their own `<Box as="section">` and use `<Container>` directly.

## Pixel-composed collages

Three places in the design are free-form overlays of cards, photography and 3D props: the growth block, the creator block and the auth showcase. These are built with `CollageStage`, which renders a fixed-size stage (e.g. 580x560) whose children are positioned in the exact Figma pixel coordinates, then scales the whole stage per breakpoint with a CSS transform.

This keeps the composition faithful at 1440px and proportionate everywhere else, without re-tuning a dozen absolute offsets per breakpoint.

The hero photography PNGs are alpha-trimmed at build-prep time, so a layout box of `w × h` always frames the subject exactly.

## Content

Copy and records live in `src/data` and are typed by `src/types/content.ts`. Sections import data rather than embedding strings, so swapping in a CMS later means replacing the module, not the components.

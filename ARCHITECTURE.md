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
pages      routes that compose sections                        (/, /login, /register, /404)
```

## Directory map

```
src/
  pages/                   Pages Router entries
    _app.tsx               Emotion cache, font CSS variables, Chakra provider
    _document.tsx          html shell + Emotion critical-CSS extraction
    index.tsx              landing page
    login.tsx              sign in
    register.tsx           create an account
    creators/[slug].tsx    creator profile (SSG)
    courses/[slug].tsx     course details, lessons and reviews (SSG)
    404.tsx                not-found screen
  assets/fonts/            self-hosted woff2 consumed by next/font/local
  components/
    ui/                    primitives driven by theme recipes
    common/                reusable domain blocks
    layout/                SiteHeader, SiteFooter
    sections/home/         landing-page bands
    sections/course/       course page: intro, player, sidebar, tabs, three panels
    sections/creator/      creator page: hero and course grid
    auth/                  auth layout, card, form, showcase
    seo.tsx                per-page <Head> metadata
  data/                    typed content (home.ts, auth.ts, navigation.ts)
  lib/
    fonts.ts               next/font wiring, exports `fontRootCss`
    emotion-cache.ts       shared cache factory for client and server
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

The theme never imports from Next or from `next/font` — it refers to fonts only as the CSS variables `--font-poppins`, `--font-satoshi` and `--font-clash-display`. Those variables are supplied by the app shell (below), so the design system stays framework-agnostic.

## App shell

Two files carry everything that is Pages-Router specific:

**`_app.tsx`**

1. Creates one Emotion cache for the browser and accepts a server-supplied cache as a prop, wrapping the tree in `CacheProvider`.
2. Emits the three font CSS variables onto `:root` via a `styled-jsx` global block. `next/font` only emits its `@font-face` CSS for modules reachable from a page or `_app`, and `_document` is explicitly excluded from the font loader, so this is where the variables have to be declared.
3. Mounts `ChakraProvider` through `components/ui/provider.tsx`.

**`_document.tsx`**

Runs `extractCriticalToChunks` from `@emotion/server` over the rendered HTML and inlines the resulting `<style data-emotion>` tags. Without this the server HTML would ship unstyled and flash on hydration. `enhanceApp` hands the per-request cache to `_app`, so server and client agree on class names.

## Metadata

`components/seo.tsx` wraps `next/head` and renders the title, description and Open Graph tags. Every page renders one `<Seo />`; the home page uses the defaults, the rest pass a title.

## Layout system

`<Container>` reproduces the Figma frame: `maxW="frame"` (1440px) with `px` stepping up to the 120px margin, leaving a 1200px content column. Section grids use `gap="gutter"` (40px), so the 12-column/40px-gutter grid from the style guide holds without a grid abstraction.

`<Section>` wraps a `<Container>` with the standard vertical rhythm; bands that need a full-bleed background (hero, creator CTA, gradients) render their own `<Box as="section">` and use `<Container>` directly.

## Pixel-composed collages

Three places in the design are free-form overlays of cards, photography and 3D props: the growth block, the creator block and the auth showcase. These are built with `CollageStage`, which renders a fixed-size stage (e.g. 580x560) whose children are positioned in the exact Figma pixel coordinates, then scales the whole stage per breakpoint with a CSS transform.

This keeps the composition faithful at 1440px and proportionate everywhere else, without re-tuning a dozen absolute offsets per breakpoint.

The hero photography PNGs are alpha-trimmed at build-prep time, so a layout box of `w × h` always frames the subject exactly.

## The course page grid

In the design, the blue band ends just below the video while the sidebar card starts level with the video and overhangs into the white area below. Rather than measure that overhang, the page is one CSS grid and the blue band is a grid item:

```
row 1   header                     (spans both columns)
row 2   title, subtitle, meta      (spans both columns)
row 3   video            | sidebar (sidebar spans rows 3-4)
row 4   tabs + panel     |
```

The blue backdrop is a grid item placed at rows 1-3 across both columns with `alignSelf="stretch"`, so it ends exactly where the video ends, whatever the content height. It bleeds past the container with negative insets, and the section uses `overflowX="clip"` to hide the bleed without creating a scroll container.

Tabs are links carrying `?tab=`, so each panel is linkable and the route stays a single SSG page.

## Content

Copy and records live in `src/data` and are typed by `src/types/content.ts`. Sections import data rather than embedding strings, so swapping in a CMS later means replacing the module, not the components.

## Conventions worth knowing

- No raw hex colors, font stacks or px font sizes outside `src/theme`. Use a token, a `textStyle` or a `layerStyle`.
- Icons render as `<Icon asChild><SomeIcon /></Icon>` rather than `as={SomeIcon}`.
- Inline SVG uses `<Box asChild>` around a plain `<svg>` so Chakra style props still apply.
- `tsconfig.json` includes `.next/types` only. Including `.next/dev/types` as well makes `tsc` report a duplicate `PagesPageConfig` whenever a dev server and a production build have both written their generated types.

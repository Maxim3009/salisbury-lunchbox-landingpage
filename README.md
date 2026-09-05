# Salisbury Lunch Box

Marketing website for Salisbury Lunch Box, a lunch takeaway in Asquith, NSW. Built with Next.js (App Router) and Tailwind CSS.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack) — routing, rendering, image optimization, metadata
- **[React 19](https://react.dev)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** — CSS-first configuration via `@theme inline` in `src/app/globals.css` (no `tailwind.config.js`); all design tokens (colors, fonts) are defined there
- **[Motion](https://motion.dev/)** (`motion/react`, the successor to Framer Motion) — page-transition curtain wipe, carousels, drag gestures, hover animations
- **[GSAP](https://gsap.com/)** + **`@gsap/react`** — the drifting lunchbox decorations on the Hero section
- **`next/font`** — self-hosted Google Fonts (Oswald for headings, Inter for body text, Permanent Marker for the hand-lettered hover labels)
- **[Sharp](https://sharp.pixelplumbing.com/)** — used only as a one-off, local scripting tool during development to recolor/trim the supplied menu category icon artwork into the transparent PNGs shipped in `public/images`; it is not a runtime dependency of the site
- **ESLint 9** (flat config) with `eslint-config-next`
- **[Netlify](https://www.netlify.com/)** — hosting, via `@netlify/plugin-nextjs` (see `netlify.toml`)

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, <head> metadata, Navbar/Footer, curtain transition provider
    page.tsx           Home page
    menu/page.tsx       Menu page
    gallery/page.tsx    Gallery page
    globals.css         Tailwind import + theme tokens (colors, fonts, keyframes)
    icon.png            App icon (Next.js metadata file convention)
    favicon.ico         Legacy favicon fallback
  components/           All UI components (see "Pages" below for how they fit together)
  data/                 Static content — the source of truth for prices, copy, and photo lists
    restaurant.ts        Name, address, phone, hours, nav items
    fullMenu.ts           Every menu category, item, price and extra shown on /menu
    gallery.ts             Photo list for the /gallery carousel (captions, corner, intrinsic size)
  lib/
    smoothScroll.ts      Shared eased-scroll helper (used by the navbar and the menu's category jump-links)
public/
  images/                Photos and pre-processed menu icons
```

## Pages

### Home (`/`)

Assembled in `src/app/page.tsx` from, top to bottom:

- **`Hero`** — headline, call-to-action buttons, Google review badge, and the GSAP-driven floating lunchbox decorations (`HeroDecorations`)
- **`RestaurantIntro`** — "Our Story" copy plus the staggered `ImageTiles` photo trio (rolls / sandwiches / wraps)
- **`FeaturedMenu`** — "Salisbury's Favourites", wrapping `StackInteractor` (hover-to-preview list on desktop, swipeable one-at-a-time carousel on mobile)
- **`CTASection`** — closing call-to-action banner
- **`VisitSection`** — embedded Google Map, address, opening hours and phone number

### Menu (`/menu`)

Renders `MenuBrowser`, which reads every category and item from `src/data/fullMenu.ts`. Includes:

- A sticky category jump-list — a horizontally swipeable pill bar (with fade-out edge arrows hinting at more categories) on mobile/tablet, a vertical sidebar on desktop
- Scrollspy that highlights the active category as you scroll
- Per-category icons (pre-recolored PNGs) and priced "extras" lists for sandwich/roll categories

### Gallery (`/gallery`)

Renders `GalleryCarousel`, reading photos from `src/data/gallery.ts`. Each slide is sized to its own photo's real aspect ratio (no cropping, no letterboxing), with a white captioned label positioned in whichever corner of that photo has a clear background. Supports drag/swipe and Previous/Next buttons.

## Editing content

Nearly all copy, prices, and photo lists live in `src/data/`, not scattered through components:

- **Menu prices/items** → `src/data/fullMenu.ts`
- **Restaurant details** (address, phone, hours, nav items) → `src/data/restaurant.ts`
- **Gallery photos/captions** → `src/data/gallery.ts` (drop the image in `public/images/` first)

## Notable implementation details

- **`CurtainTransition`** — a custom circular "clip-wipe" page-transition effect (recreated from a Motion+ example) that plays between route changes instead of an instant navigation.
- **`src/lib/smoothScroll.ts`** — a manually-eased scroll (900ms, ease-in-out) shared by the navbar's in-page links and the menu's category jump-list, since the native `scrollTo({ behavior: "smooth" })` isn't slow enough to feel intentional and isn't configurable.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deployment

Hosted on Netlify. `netlify.toml` pins the build command and publish directory and installs `@netlify/plugin-nextjs`, which is required for Next.js App Router routes (like `/menu` and `/gallery`) to work correctly on Netlify — without it, Netlify has no way to serve anything beyond static files. If deploys 404, check the site's **Build & deploy → Build settings** in the Netlify dashboard: the "Publish directory" field there must be left blank (it otherwise overrides `netlify.toml` and can end up pointing at the repo root, which the plugin rejects).

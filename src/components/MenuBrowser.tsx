"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { menuCategories, sauces, type MenuCategory } from "@/data/fullMenu";
import { IconChevronRight } from "@/components/icons";
import { smoothScrollTo } from "@/lib/smoothScroll";

const SAUCES_ID = "sauces";
// Matches the sticky nav's height plus a little breathing room, so a
// scrolled-to heading doesn't end up tucked behind it. Mobile/tablet get
// extra clearance for the sticky category pill bar sitting under the main
// nav there (the desktop sidebar doesn't overlap content, so it doesn't
// need it). Used for both scrolling to a section AND deciding which nav
// item is "active" while scrolling — those two must stay in sync, or a
// click can land past the point the active-item check still credits to the
// previous section.
const SCROLL_OFFSET = 96;
function getScrollOffset() {
  return window.innerWidth >= 1024 ? SCROLL_OFFSET : SCROLL_OFFSET + 40;
}

// Every category uses a hand-drawn line icon, pre-recolored to match the
// heading text and trimmed to its content's bounding box (see
// `_process_icons2.mjs`/`_process_icons3.mjs`) since the source art ships as
// dark line-work on a near-white backdrop rather than an SVG we can style
// with `currentColor`. Trimming keeps every icon filling the same amount of
// its display box regardless of how much blank canvas the source shipped
// with. The icons themselves stay transparent, so they blend straight into
// the page background rather than sitting on a badge.
const categoryIconImages: Record<string, string> = {
  burgers: "/images/burgersicon-recolored.png",
  "turkish-bread": "/images/breadicon-recolored.png",
  wraps: "/images/wrapicon-recolored.png",
  sandwiches: "/images/sandwichicon-recolored.png",
  "hot-sandwiches": "/images/hotsandwichicon-recolored.png",
  "hot-snacks": "/images/hotsnacksicon-recolored.png",
  "homemade-meals": "/images/homemademealicon-recolored.png",
  "salad-special": "/images/saladspecialsicon-recolored.png",
  breakfast: "/images/breakfasticon-recolored.png",
  snacks: "/images/snacksicon-recolored.png",
  beverages: "/images/beveragesicon-recolored.png",
  catering: "/images/cateringicon-recolored.png",
  [SAUCES_ID]: "/images/saucesicon-recolored.png",
};

// The hot-sandwiches source art has more built-in breathing room around the
// glyph than the other icons, so even after bounding-box trimming it reads
// visibly smaller at the shared size — bumped up on its own here.
const categoryIconSizes: Record<string, string> = {
  "hot-sandwiches": "max-h-11 max-w-11",
};
const DEFAULT_ICON_SIZE = "max-h-9 max-w-9";

function CategoryHeading({ id, label }: { id: string; label: string }) {
  const imageSrc = categoryIconImages[id];
  return (
    <h2
      id={`category-${id}`}
      className="scroll-mt-32 flex items-center gap-3 font-display text-2xl text-primary lg:scroll-mt-24"
    >
      {imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          className={`w-auto shrink-0 object-contain ${categoryIconSizes[id] ?? DEFAULT_ICON_SIZE}`}
        />
      )}
      {label}
    </h2>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <section aria-labelledby={`category-${category.id}`}>
      <CategoryHeading id={category.id} label={category.label} />
      {category.note && (
        <p className="mt-1 text-sm italic text-muted">{category.note}</p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-1.5 border border-line bg-paper p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 break-words text-base font-semibold leading-snug text-primary">
                {item.name}
              </h3>
              {item.price && (
                <p className="shrink-0 whitespace-nowrap text-sm font-semibold text-accent-dark">
                  {item.price}
                </p>
              )}
            </div>
            {item.description && (
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            )}
            {item.variants && (
              <ul className="mt-0.5 flex flex-col gap-1">
                {item.variants.map((variant) => (
                  <li
                    key={variant.label}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <span className="min-w-0 break-words text-muted">
                      {variant.label}
                    </span>
                    <span className="shrink-0 whitespace-nowrap font-semibold text-accent-dark">
                      {variant.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {category.extras && (
        <div className="mt-4 border border-line bg-paper-soft p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Extras
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {category.extras.map((extra) => (
              <li
                key={extra.name}
                className="flex items-baseline justify-between gap-3 text-sm"
              >
                <span className="min-w-0 break-words text-primary">
                  {extra.name}
                  {extra.description && (
                    <span className="text-muted"> ({extra.description})</span>
                  )}
                </span>
                <span className="shrink-0 whitespace-nowrap font-semibold text-accent-dark">
                  {extra.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function SaucesSection() {
  return (
    <section aria-labelledby={`category-${SAUCES_ID}`}>
      <CategoryHeading id={SAUCES_ID} label="Sauces" />
      <p className="mt-1 text-sm italic text-muted">
        Available on request for sandwiches, wraps and rolls.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {sauces.map((sauce) => (
          <span
            key={sauce}
            className="border border-line bg-paper px-3 py-1.5 text-sm text-primary"
          >
            {sauce}
          </span>
        ))}
      </div>
    </section>
  );
}

const sectionIds = [...menuCategories.map((category) => category.id), SAUCES_ID];
const lastSectionId = sectionIds.at(-1)!;

export function MenuBrowser() {
  const [activeId, setActiveId] = useState<string>(sectionIds[0]);
  const sectionTops = useRef<{ id: string; top: number }[]>([]);
  const { scrollY } = useScroll();
  const pillListRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Drives the left/right swipe-hint arrows on the mobile/tablet pill bar —
  // hidden once there's nothing left to reveal in that direction.
  useEffect(() => {
    const el = pillListRef.current;
    if (!el) return;

    const updateEdges = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const nudgePillScroll = (direction: 1 | -1) => {
    pillListRef.current?.scrollBy({ left: direction * 160, behavior: "smooth" });
  };

  useEffect(() => {
    const measure = () => {
      sectionTops.current = sectionIds
        .map((id) => {
          const el = document.getElementById(`category-${id}`);
          return el ? { id, top: el.getBoundingClientRect().top + window.scrollY } : null;
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // The last section (Sauces) is short, so there isn't always enough page
    // height below it to naturally satisfy the usual threshold check once
    // scrolled to the very bottom — so that case is handled explicitly.
    const atBottom =
      latest + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      setActiveId((previous) => (previous === lastSectionId ? previous : lastSectionId));
      return;
    }

    const positions = sectionTops.current;
    if (positions.length === 0) return;

    const offset = getScrollOffset();
    let current = positions[0].id;
    for (const position of positions) {
      if (latest + offset >= position.top) current = position.id;
    }
    setActiveId((previous) => (previous === current ? previous : current));
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getScrollOffset() + 1;
    smoothScrollTo(top);
  };

  const navItems = [...menuCategories, { id: SAUCES_ID, label: "Sauces" }];

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      {/* Sticky on every breakpoint: a horizontally-scrolling pill bar under
          the main nav on mobile/tablet, a vertical list beside the content
          on desktop — so a heading is always one tap away while scrolling. */}
      <aside className="sticky top-[65px] z-30 -mx-6 border-b border-line bg-paper/95 px-6 py-3 backdrop-blur-sm lg:sticky lg:top-24 lg:z-auto lg:mx-0 lg:w-56 lg:shrink-0 lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <div className="relative lg:contents">
          <ul
            ref={pillListRef}
            className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeId === item.id}
                  className={`whitespace-nowrap border-l-2 px-3 py-2 text-left text-sm transition-colors lg:w-full ${
                    activeId === item.id
                      ? "border-accent font-semibold text-primary"
                      : "border-transparent text-muted hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Swipe hints: only relevant on the horizontally-scrolling
              mobile/tablet pill bar, so hidden once the vertical desktop
              layout kicks in and whenever there's nothing left to reveal. */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => nudgePillScroll(-1)}
              aria-label="Scroll categories left"
              className="absolute inset-y-0 left-0 flex items-center bg-gradient-to-r from-paper via-paper/90 to-transparent py-1 pr-5 pl-0.5 lg:hidden"
            >
              <IconChevronRight className="h-4 w-4 rotate-180 text-primary" />
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => nudgePillScroll(1)}
              aria-label="Scroll categories right"
              className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-paper via-paper/90 to-transparent py-1 pr-0.5 pl-5 lg:hidden"
            >
              <IconChevronRight className="h-4 w-4 text-primary" />
            </button>
          )}
        </div>
      </aside>

      <div className="flex-1 space-y-14">
        {menuCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <SaucesSection />
      </div>
    </div>
  );
}

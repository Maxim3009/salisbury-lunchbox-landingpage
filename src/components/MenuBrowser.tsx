"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { menuCategories, sauces, type MenuCategory } from "@/data/fullMenu";
import {
  IconBottle,
  IconBowl,
  IconBreadLoaf,
  IconBurger,
  IconCookie,
  IconCup,
  IconFlame,
  IconSalad,
  IconSandwich,
  IconSunrise,
  IconTray,
  IconWrap,
} from "@/components/icons";

const SAUCES_ID = "sauces";
// Matches the sticky nav's height plus a little breathing room, so a
// scrolled-to heading doesn't end up tucked behind it.
const SCROLL_OFFSET = 96;

const categoryIcons: Record<string, typeof IconBurger> = {
  burgers: IconBurger,
  "turkish-bread": IconBreadLoaf,
  wraps: IconWrap,
  sandwiches: IconSandwich,
  "hot-sandwiches": IconFlame,
  "hot-snacks": IconFlame,
  "homemade-meals": IconBowl,
  "salad-special": IconSalad,
  breakfast: IconSunrise,
  snacks: IconCookie,
  beverages: IconCup,
  catering: IconTray,
  [SAUCES_ID]: IconBottle,
};

function CategoryHeading({ id, label }: { id: string; label: string }) {
  const Icon = categoryIcons[id];
  return (
    <h2
      id={`category-${id}`}
      className="scroll-mt-32 flex items-center gap-2.5 font-display text-2xl text-primary lg:scroll-mt-24"
    >
      {Icon && <Icon className="h-6 w-6 shrink-0 text-primary" />}
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

    let current = positions[0].id;
    for (const position of positions) {
      if (latest + SCROLL_OFFSET >= position.top) current = position.id;
    }
    setActiveId((previous) => (previous === current ? previous : current));
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    if (!el) return;
    const offset = window.innerWidth >= 1024 ? SCROLL_OFFSET : SCROLL_OFFSET + 40;
    const top = el.getBoundingClientRect().top + window.scrollY - offset + 1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const navItems = [...menuCategories, { id: SAUCES_ID, label: "Sauces" }];

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      {/* Sticky on every breakpoint: a horizontally-scrolling pill bar under
          the main nav on mobile/tablet, a vertical list beside the content
          on desktop — so a heading is always one tap away while scrolling. */}
      <aside className="sticky top-[65px] z-30 -mx-6 border-b border-line bg-paper/95 px-6 py-3 backdrop-blur-sm lg:sticky lg:top-24 lg:z-auto lg:mx-0 lg:w-56 lg:shrink-0 lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
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

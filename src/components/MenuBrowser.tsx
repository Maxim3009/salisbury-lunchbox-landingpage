"use client";

import { useState } from "react";
import { menuCategories } from "@/data/fullMenu";

export function MenuBrowser() {
  const [activeId, setActiveId] = useState<string>("all");

  const categoriesToShow =
    activeId === "all"
      ? menuCategories
      : menuCategories.filter((category) => category.id === activeId);

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      <aside className="lg:sticky lg:top-24 lg:w-56 lg:shrink-0">
        <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
          <li>
            <button
              type="button"
              onClick={() => setActiveId("all")}
              aria-current={activeId === "all"}
              className={`whitespace-nowrap border-l-2 px-3 py-2 text-left text-sm transition-colors lg:w-full ${
                activeId === "all"
                  ? "border-accent font-semibold text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              All Items
            </button>
          </li>
          {menuCategories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setActiveId(category.id)}
                aria-current={activeId === category.id}
                className={`whitespace-nowrap border-l-2 px-3 py-2 text-left text-sm transition-colors lg:w-full ${
                  activeId === category.id
                    ? "border-accent font-semibold text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 space-y-14">
        {categoriesToShow.map((category) => (
          <section key={category.id} aria-labelledby={`category-${category.id}`}>
            <h2
              id={`category-${category.id}`}
              className="font-display text-2xl font-semibold text-ink"
            >
              {category.label}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-1.5 border border-line bg-paper p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold leading-snug text-ink">
                      {item.name}
                    </h3>
                    <p className="whitespace-nowrap font-display text-sm font-semibold text-accent-dark">
                      {item.price}
                    </p>
                  </div>
                  {item.description && (
                    <p className="text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { restaurant, navItems } from "@/data/restaurant";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-line bg-paper/95 backdrop-blur-sm"
          : "border-transparent bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          {restaurant.name}
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.comingSoon ? (
                  <span className="flex items-center gap-1.5 text-sm text-muted/70">
                    {item.label}
                    <span className="rounded-full border border-line px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted/70">
                      Soon
                    </span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center xl:flex">
          <a
            href={restaurant.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-primary"
          >
            <IconPhone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center text-ink xl:hidden"
        >
          {isMenuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 ease-out xl:hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Mobile" className="bg-paper px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.comingSoon ? (
                  <span className="flex items-center gap-2 text-base text-muted/70">
                    {item.label}
                    <span className="rounded-full border border-line px-1.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted/70">
                      Soon
                    </span>
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base text-ink-soft transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href={restaurant.phoneHref}
            className="mt-6 flex items-center gap-2 text-base font-medium text-ink"
          >
            <IconPhone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}

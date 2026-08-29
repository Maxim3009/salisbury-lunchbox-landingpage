"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { restaurant, navItems } from "@/data/restaurant";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";
import { useCurtainNavigate } from "@/components/CurtainTransition";

export function Navbar() {
  const pathname = usePathname();
  const curtainNavigate = useCurtainNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);

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

  // Scrollspy for the "Our Location" nav item — only relevant on "/", where
  // that section actually lives. The rootMargin shrinks the observed area
  // down from the sticky nav's height and to the upper half of the
  // viewport, so the section counts as "active" once it's scrolled into
  // that band rather than as soon as any sliver of it appears.
  useEffect(() => {
    if (pathname !== "/") return;
    const target = document.getElementById("location");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsLocationActive(entry.isIntersecting),
      { rootMargin: "-96px 0px -50% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (event: React.MouseEvent, href: string) => {
    // In-page hash links (e.g. "Our Location") only need this when we're
    // already on "/" — otherwise the browser's normal navigation-then-jump
    // to the hash on page load handles it.
    if (href.startsWith("/#")) {
      if (pathname !== "/") return;
      const id = href.slice(2);
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      setIsLocationActive(true);
      const offset = 96;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    // Clicking Home while already home just scrolls back to the top rather
    // than doing nothing.
    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Real page links (e.g. Home <-> Menu) get the curtain wipe transition.
    if (href === pathname) return;
    event.preventDefault();
    curtainNavigate(href);
  };

  const isNavItemActive = (href: string) => {
    if (pathname !== "/") return pathname === href;
    // On the home page, the location scrollspy takes priority over the
    // plain "/" match so only one item is ever underlined at a time.
    if (href === "/#location") return isLocationActive;
    return href === "/" && !isLocationActive;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-primary text-paper transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="flex h-18 w-full items-center justify-between gap-4 px-6 py-4 lg:px-10 xl:px-14">
        <Link href="/" className="flex shrink-0 cursor-default items-center gap-3 whitespace-nowrap">
          <Image
            src="/images/lunchboxLogo.png"
            alt=""
            width={113}
            height={100}
            className="h-14 w-auto shrink-0"
          />
          <span className="font-display text-xl tracking-tight">{restaurant.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-6 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.href);
              return (
                <li key={item.label}>
                  {item.comingSoon ? (
                    <span className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-paper/45">
                      {item.label}
                      <span className="rounded-full border border-paper/25 px-1.5 py-0.5 text-[0.65rem] font-medium normal-case tracking-normal text-paper/55">
                        Soon
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-paper ${
                        isActive
                          ? "text-paper underline decoration-2 underline-offset-8"
                          : "text-paper/75"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center xl:flex">
          <a
            href={restaurant.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-paper transition-colors hover:text-paper/75"
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
          className="flex h-10 w-10 items-center justify-center text-paper xl:hidden"
        >
          {isMenuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-paper/15 transition-[max-height] duration-300 ease-out xl:hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Mobile" className="bg-primary px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item.href);
              return (
                <li key={item.label}>
                  {item.comingSoon ? (
                    <span className="flex items-center gap-2 text-base font-semibold uppercase tracking-wider text-paper/45">
                      {item.label}
                      <span className="rounded-full border border-paper/25 px-1.5 py-0.5 text-[0.65rem] font-medium normal-case tracking-normal text-paper/55">
                        Soon
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        setIsMenuOpen(false);
                        handleNavClick(event, item.href);
                      }}
                      className={`text-base font-semibold uppercase tracking-wider transition-colors hover:text-paper ${
                        isActive ? "text-paper underline decoration-2 underline-offset-4" : "text-paper/75"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={restaurant.phoneHref}
            className="mt-6 flex items-center gap-2 text-base font-medium text-paper"
          >
            <IconPhone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}

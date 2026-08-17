import Link from "next/link";
import { restaurant, navItems } from "@/data/restaurant";
import { IconClock, IconMapPin, IconPhone } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr_2fr]">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              {restaurant.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Fresh, honest lunches made daily for the Asquith community.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.comingSoon ? (
                    <span className="text-sm text-muted/70">{item.label}</span>
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
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
              Visit
            </h2>
            <a
              href={restaurant.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-3 text-sm text-ink-soft transition-colors hover:text-primary"
            >
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <address className="not-italic leading-relaxed">
                {restaurant.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
              Get in touch
            </h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <a
                href={restaurant.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-primary" />
                {restaurant.phoneDisplay}
              </a>
              <div className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="leading-relaxed">
                  {restaurant.hours.map((entry) => (
                    <p key={entry.days}>
                      {entry.days}: {entry.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8 text-xs text-muted">
          &copy; {year} {restaurant.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

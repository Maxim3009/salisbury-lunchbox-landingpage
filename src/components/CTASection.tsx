import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { IconArrowRight, IconClock, IconMapPin, IconPhone } from "@/components/icons";

export function CTASection() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Ready When You Are
        </p>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
          Your next lunch is closer than you think.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-paper/75">
          Browse the menu, drop by the shop, or give us a call/message — however
          suits your day best.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-primary-dark"
          >
            View Our Menu
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/50"
          >
            <IconPhone className="h-4 w-4" />
            {restaurant.phoneDisplay}
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 border-t border-paper/15 pt-10 text-left sm:grid-cols-3">
          <div className="flex gap-3">
            <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper/60">
                Visit
              </p>
              <a
                href={restaurant.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block"
              >
                <address className="text-sm not-italic leading-relaxed text-paper/85 transition-colors hover:text-paper">
                  {restaurant.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper/60">
                Opening Hours
              </p>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-paper/85">
                {restaurant.hours.map((entry) => (
                  <p key={entry.days}>
                    {entry.days}
                    <br />
                    {entry.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-paper/60">
                Call Us
              </p>
              <a
                href={restaurant.phoneHref}
                className="mt-2 block text-sm text-paper/85 transition-colors hover:text-paper"
              >
                {restaurant.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

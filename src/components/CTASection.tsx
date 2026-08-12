import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { IconArrowRight, IconPhone } from "@/components/icons";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Ready When You Are
        </p>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl">
          Your next lunch is closer than you think.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-paper/75">
          Browse the menu, drop by the shop, or give us a call — however
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
      </div>
    </section>
  );
}

import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { IconArrowRight, IconMapPin, IconSandwich } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div
        className="pattern-lunchbox pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative motion-safe:animate-fade-up">
          <div
            className="absolute -inset-7 rounded-[3rem] bg-paper/70 blur-xl sm:-inset-10"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Salisbury&apos;s Favourite Lunch Stop
            </p>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Fresh Lunch,
              <br />
              <span className="mt-2 inline-block bg-ink px-4 py-1.5 text-paper">
                Made Daily.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
              The only thing you need to pack is an appetite. Leave the meal
              prep behind and let us handle the heavy lifting (and the
              washing up).
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
              >
                View Our Menu
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                <IconMapPin className="h-4 w-4" />
                Find Us
              </Link>
            </div>
          </div>
        </div>

        <div className="motion-safe:animate-fade-in motion-safe:[animation-delay:150ms] relative mx-auto w-full max-w-sm">
          <div className="relative rounded-full border-[6px] border-paper shadow-[0_20px_50px_-20px_rgba(30,51,80,0.35)]">
            <PlaceholderImage
              icon={IconSandwich}
              label="Photo of a customer enjoying a freshly made lunch"
              tone="mist"
              className="aspect-square w-full rounded-full border-none"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-paper bg-accent text-center shadow-[0_12px_30px_-12px_rgba(30,51,80,0.45)] sm:h-32 sm:w-32">
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
              10 min
            </p>
            <p className="text-[0.65rem] font-medium uppercase tracking-wide text-ink/80">
              Avg. order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

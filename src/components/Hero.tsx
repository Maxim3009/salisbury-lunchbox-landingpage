import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { BurgerPhoto } from "@/components/BurgerPhoto";
import { HeroDecorations } from "@/components/HeroDecorations";
import { IconArrowRight, IconMapPin, IconStar } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper text-primary">
      <HeroDecorations />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-24 pb-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative motion-safe:animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Salisbury&apos;s Favourite Lunch Stop
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fresh Lunch,
            <br />
            <span className="mt-2 inline-block bg-primary px-4 py-1.5 text-paper">
              Made Daily.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary">
            The only thing you need to pack is an appetite. Leave the meal
            prep behind and let us handle the heavy lifting (and the washing
            up).
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-primary-dark"
            >
              View Our Menu
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={restaurant.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/20 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
            >
              <IconMapPin className="h-4 w-4" />
              Find Us
            </a>
          </div>
        </div>

        <div className="motion-safe:animate-fade-in motion-safe:[animation-delay:150ms] relative mx-auto w-full max-w-sm">
          <BurgerPhoto />
          <div className="absolute -bottom-3 -right-3 flex h-28 w-28 flex-col items-center justify-center gap-0.5 rounded-full bg-paper text-center shadow-[0_12px_30px_-12px_rgba(30,51,80,0.45)] sm:h-32 sm:w-32">
            <div className="flex items-center gap-0.5">
              {[true, true, true, true, false].map((filled, index) => (
                <IconStar
                  key={index}
                  filled={filled}
                  className="h-4 w-4 text-[#FFC107] sm:h-5 sm:w-5"
                />
              ))}
            </div>
            <Image
              src="/images/GoogleReviews.png"
              alt="Google Reviews"
              width={290}
              height={129}
              className="mt-0.5 ml-1 h-9 w-auto sm:ml-1.5 sm:h-11"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

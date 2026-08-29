import Image from "next/image";
import { restaurant } from "@/data/restaurant";
import { IconClock, IconMapPin, IconPhone, IconStraightArrow } from "@/components/icons";

// No API key needed — Google's classic "q=" embed resolves the verified
// business listing directly (name, rating, address card) same as the
// authenticated Maps Embed API, without any billing/config to manage.
const mapQuery = encodeURIComponent(
  `Salisbury Lunch Box, ${restaurant.addressLines.join(", ")}`,
);
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export function VisitSection() {
  return (
    <section id="location" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Here&apos;s where you can find us!
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-primary sm:text-4xl lg:text-5xl">
            Our Location
          </h2>
        </div>

        <div className="mt-12">
          {/* Mobile/tablet: map, then photo, with a straight connecting
              arrow sitting cleanly in the gap between them. */}
          <div className="flex flex-col items-center gap-3 md:hidden">
            <div className="w-full overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(30,51,80,0.25)]">
              <iframe
                src={mapSrc}
                title={`Map showing ${restaurant.name} at ${restaurant.addressLines.join(", ")}`}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <IconStraightArrow className="h-8 w-14 shrink-0 rotate-90 text-accent" />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(30,51,80,0.25)]">
              <Image
                src="/images/Hero%20Image.PNG"
                alt="Outdoor seating right outside Salisbury Lunch Box's shopfront"
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Desktop: map | arrow | photo as genuine grid columns, so the
              straight connecting arrow sits clear of both images. */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
            <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(30,51,80,0.25)]">
              <iframe
                src={mapSrc}
                title={`Map showing ${restaurant.name} at ${restaurant.addressLines.join(", ")}`}
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <IconStraightArrow className="h-10 w-20 shrink-0 text-accent" />

            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(30,51,80,0.25)]">
              <Image
                src="/images/Hero%20Image.PNG"
                alt="Outdoor seating right outside Salisbury Lunch Box's shopfront"
                fill
                sizes="45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 border-t border-line pt-10 text-left sm:grid-cols-3">
          <div className="flex gap-3">
            <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Visit</p>
              <a href={restaurant.mapsHref} target="_blank" rel="noopener noreferrer" className="mt-2 block">
                <address className="text-sm not-italic leading-relaxed text-primary transition-colors hover:text-primary-dark">
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
            <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Opening Hours
              </p>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-primary">
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
            <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Call Us</p>
              <a
                href={restaurant.phoneHref}
                className="mt-2 block text-sm text-primary transition-colors hover:text-primary-dark"
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

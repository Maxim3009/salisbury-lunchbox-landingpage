import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";
import { MenuBrowser } from "@/components/MenuBrowser";
import { IconInfo, IconMessage, IconPhone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Salisbury Lunchbox menu — burgers, wraps, sandwiches, hot snacks, breakfast, beverages and catering.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Menu
        </h1>
        <a
          href={restaurant.phoneHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent-dark"
        >
          <IconPhone className="h-4 w-4" />
          Call to order
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 border border-line bg-paper-soft p-6 sm:grid-cols-2 lg:p-8">
        <div>
          <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
            <IconMessage className="h-4 w-4 text-accent-dark" />
            Text Message Order
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Text Sean on{" "}
            <a
              href={restaurant.phoneHref}
              className="font-semibold text-ink underline decoration-line underline-offset-2 hover:text-accent-dark"
            >
              {restaurant.phoneDisplay}
            </a>{" "}
            with:
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-ink-soft">
            <li>Your name, menu items and pick-up time.</li>
            <li>Please send your order at least 30 minutes before pick-up.</li>
          </ol>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
            <IconInfo className="h-4 w-4 text-accent-dark" />
            Good to Know
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-soft">
            <li>Prices are subject to change without notice.</li>
            <li>Total order must exceed $50.00 for delivery.</li>
            <li>Unless pre-organised, no delivery between 12:00 and 13:00.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <MenuBrowser />
      </div>
    </div>
  );
}

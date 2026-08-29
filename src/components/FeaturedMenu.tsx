import Link from "next/link";
import { StackInteractor } from "@/components/StackInteractor";
import { IconArrowRight } from "@/components/icons";

export function FeaturedMenu() {
  return (
    <section className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Salisbury&apos;s Favourites
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-primary sm:text-4xl">
              Featured lunch items
            </h2>
          </div>
          <Link
            href="/menu"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            See full menu
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12">
          <StackInteractor />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { GalleryCarousel } from "@/components/GalleryCarousel";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at what comes out of the Salisbury Lunch Box kitchen — burgers, rolls, wraps, sandwiches and more.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="border-b border-line pb-8">
        <h1 className="font-display text-4xl tracking-tight text-primary sm:text-5xl">
          Gallery
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          A taste of what comes out of our kitchen every day.
        </p>
      </div>

      <div className="mt-10">
        <GalleryCarousel />
      </div>
    </div>
  );
}

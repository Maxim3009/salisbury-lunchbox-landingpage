"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { galleryPhotos, type GalleryCorner } from "@/data/gallery";
import { IconArrowRight } from "@/components/icons";

const cornerClasses: Record<GalleryCorner, string> = {
  "top-left": "top-4 left-4 sm:top-6 sm:left-6 text-left",
  "top-right": "top-4 right-4 sm:top-6 sm:right-6 text-right",
  "bottom-left": "bottom-4 left-4 sm:bottom-6 sm:left-6 text-left",
  "bottom-right": "bottom-4 right-4 sm:bottom-6 sm:right-6 text-right",
};

export function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = galleryPhotos[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex(((index % galleryPhotos.length) + galleryPhotos.length) % galleryPhotos.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) goTo(activeIndex + 1);
    else if (info.offset.x > threshold) goTo(activeIndex - 1);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-soft px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          Previous
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-soft px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
        >
          Next
          <IconArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Sized to each photo's own intrinsic aspect ratio (rather than a fixed
          frame) so the card hugs the image exactly — a fixed frame either
          crops photos that don't match it (object-cover) or leaves a visible
          letterboxed gap around ones that don't fill it (object-contain). */}
      <div className="relative mt-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.image}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative cursor-grab overflow-hidden rounded-3xl bg-paper-soft shadow-[0_25px_50px_-12px_rgba(30,51,80,0.4)] active:cursor-grabbing"
          >
            <Image
              src={active.image}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="(min-width: 768px) 448px, 100vw"
              className="pointer-events-none block h-auto max-h-[70vh] w-full object-contain"
              priority={activeIndex === 0}
            />
            <span
              className={`pointer-events-none absolute max-w-[70%] font-display text-xl text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.7)] sm:text-2xl ${cornerClasses[active.corner]}`}
            >
              {active.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {galleryPhotos.map((photo, index) => (
          <button
            key={photo.image}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show ${photo.label}`}
            aria-current={index === activeIndex}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-accent-dark" : "bg-line hover:bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

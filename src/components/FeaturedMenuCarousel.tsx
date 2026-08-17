"use client";

import { useState } from "react";
import { motion, useReducedMotion, type PanInfo } from "motion/react";
import type { MenuItem } from "@/data/menu";
import { MenuCard } from "@/components/MenuCard";
import { IconArrowRight } from "@/components/icons";

/** Shortest signed distance from `index` to `activeIndex` on a looping track. */
function circularOffset(index: number, activeIndex: number, length: number) {
  let offset = index - activeIndex;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

function slideTransform(offset: number, reduceMotion: boolean) {
  const distance = Math.abs(offset);
  if (distance > 2) {
    return { x: `${offset * 62}%`, scale: 0.6, rotateY: 0, opacity: 0, zIndex: 0 };
  }
  const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : 0.7;
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.55 : 0.22;
  const rotateY = reduceMotion || distance === 0 ? 0 : offset > 0 ? -28 : 28;
  return { x: `${offset * 62}%`, scale, rotateY, opacity, zIndex: 10 - distance };
}

export function FeaturedMenuCarousel({ items }: { items: MenuItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const goTo = (index: number) => {
    setActiveIndex(((index % items.length) + items.length) % items.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 60;
    if (info.offset.x < -threshold) goTo(activeIndex + 1);
    else if (info.offset.x > threshold) goTo(activeIndex - 1);
  };

  return (
    <div>
      <div
        className="relative flex h-[480px] items-center justify-center overflow-hidden sm:h-[460px] lg:h-[440px]"
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="absolute inset-0 flex cursor-grab items-center justify-center active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, index) => {
            const offset = circularOffset(index, activeIndex, items.length);
            const isActive = offset === 0;
            const { x, scale, rotateY, opacity, zIndex } = slideTransform(offset, !!reduceMotion);

            return (
              <motion.div
                key={item.id}
                className="absolute w-64 sm:w-72 lg:w-80"
                style={{ zIndex }}
                animate={{ x, scale, rotateY, opacity }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 30 }
                }
                aria-hidden={!isActive}
              >
                <MenuCard item={item} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Show previous favourite"
          className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink/40"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${item.name}`}
              aria-current={index === activeIndex}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-ink" : "bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Show next favourite"
          className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink/40"
        >
          <IconArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

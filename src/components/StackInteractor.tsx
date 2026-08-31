"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { IconArrowRight } from "@/components/icons";

// Adapted from the "Connoisseur Stack Interactor" component — hovering a menu
// item crossfades in its photo. On mobile there's no hover, so it becomes a
// single-item-at-a-time carousel instead, swipeable or steppable via buttons.
type StackItem = {
  num: string;
  name: string;
  lines: [string, string];
  price: string;
  description: string;
  image: string;
};

const items: StackItem[] = [
  {
    num: "01",
    name: "Bacon & Egg Roll",
    lines: ["BACON &", "EGG ROLL"],
    price: "$8.90",
    description: "Bacon and egg on a fresh bread roll, with a sauce of your choosing.",
    image: "/images/BaconEggRoll.JPG",
  },
  {
    num: "02",
    name: "Charcoal Chicken Roll",
    lines: ["CHARCOAL", "CHICKEN ROLL"],
    price: "$11.90",
    description: "BBQ charcoal chicken, lettuce, onion, tomato and mayo.",
    image: "/images/BBQCharcoalChicken.JPG",
  },
  {
    num: "03",
    name: "Breakkie Wrap",
    lines: ["BREAKKIE", "WRAP"],
    price: "$11.90",
    description: "3 rashers of bacon, 2 eggs, cheese and tomato relish.",
    image: "/images/BreakkieWrap.JPG",
  },
  {
    num: "04",
    name: "Schnitzel Roll",
    lines: ["SCHNITZEL", "ROLL"],
    price: "$12.90",
    description: "Homemade schnitzel, lettuce and mayo.",
    image: "/images/SchnitzelRoll.JPG",
  },
  {
    num: "05",
    name: "Spicy BBQ Pork",
    lines: ["SPICY", "BBQ PORK"],
    price: "$15.90",
    description: "Spicy BBQ pork served with steamed rice.",
    image: "/images/SpicyBBQPork.JPG",
  },
];

export function StackInteractor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  const goTo = (index: number) => {
    setActiveIndex(((index % items.length) + items.length) % items.length);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) goTo(activeIndex + 1);
    else if (info.offset.x > threshold) goTo(activeIndex - 1);
  };

  return (
    <div className="overflow-x-hidden">
      {/* MOBILE / TABLET: one favourite at a time, swipeable + stepper buttons. */}
      <div className="mx-auto flex w-full max-w-[280px] flex-col items-center md:hidden">
        <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(30,51,80,0.4)]">
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
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="280px"
                className="pointer-events-none object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 text-center">
          <span className="text-sm font-bold text-accent-dark">{active.num}</span>
          <h3 className="font-display text-3xl uppercase tracking-tight text-primary">
            {active.lines[0]} {active.lines[1]}
          </h3>
          <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">{active.description}</p>
          <p className="mt-2 text-sm font-semibold text-accent-dark">{active.price}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Show previous favourite"
            className="flex h-10 w-10 items-center justify-center border border-line text-primary transition-colors hover:border-primary/40"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.num}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-accent-dark" : "bg-line hover:bg-secondary"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Show next favourite"
            className="flex h-10 w-10 items-center justify-center border border-line text-primary transition-colors hover:border-primary/40"
          >
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* DESKTOP: numbered list on the left, hover to swap the photo on the right. */}
      <div className="hidden md:flex md:items-center md:justify-between md:gap-10">
        <nav className="w-full md:w-1/2">
          <ul className="flex flex-col gap-6">
            {items.map((item, index) => (
              <li key={item.num} onMouseEnter={() => setActiveIndex(index)} className="cursor-pointer">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span
                    className={`mt-1 text-xl font-bold transition-all duration-500 sm:mt-2 sm:text-2xl ${
                      activeIndex === index ? "scale-110 text-accent-dark" : "text-secondary"
                    }`}
                  >
                    {item.num}
                  </span>

                  <div className="min-w-0">
                    <h3
                      className={`font-display text-3xl uppercase leading-[0.9] tracking-tight transition-all duration-700 sm:text-4xl lg:text-5xl ${
                        activeIndex === index
                          ? "translate-x-3 text-primary opacity-100"
                          : "translate-x-0 text-secondary opacity-70"
                      }`}
                    >
                      {item.lines[0]}
                      <br />
                      {item.lines[1]}
                    </h3>
                    <p
                      className={`mt-2 max-w-sm text-sm leading-relaxed text-muted transition-opacity duration-500 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                    <p
                      className={`mt-2 text-sm font-semibold transition-opacity duration-500 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      } text-accent-dark`}
                    >
                      {item.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative flex w-full justify-center md:w-1/2">
          <div className="absolute h-[120%] w-[120%] rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative z-10 aspect-square w-full max-w-[300px] overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(30,51,80,0.4)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

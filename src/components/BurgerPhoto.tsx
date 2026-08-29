"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// "Boop" per https://www.joshwcomeau.com/react/boop/ — a quick spring-driven
// jump, retriggered on hover and once on mount, skipped entirely under
// prefers-reduced-motion.
const BOOP_Y = -14;
const BOOP_TIMING = 150;
const BOOP_SPRING = { type: "spring" as const, stiffness: 300, damping: 10 };

export function BurgerPhoto() {
  const prefersReducedMotion = useReducedMotion();
  // Starts already "booped" so the very first animate cycle (initial 0 -> this
  // value) plays the same jump on mount that hovering later retriggers.
  const [isBooped, setIsBooped] = useState(true);

  const boop = useCallback(() => {
    setIsBooped(true);
  }, []);

  useEffect(() => {
    if (!isBooped) return;
    const timeoutId = window.setTimeout(() => setIsBooped(false), BOOP_TIMING);
    return () => window.clearTimeout(timeoutId);
  }, [isBooped]);

  return (
    <div
      onMouseEnter={boop}
      className="relative rounded-full border-[6px] border-accent/70"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: !prefersReducedMotion && isBooped ? BOOP_Y : 0 }}
          transition={BOOP_SPRING}
          className="absolute inset-0"
        >
          <Image
            src="/images/BurgerLOTfinal.png"
            alt="Burger LOT topped with bacon, egg and melted cheese."
            fill
            priority
            sizes="(min-width: 1024px) 24rem, 80vw"
            className="object-contain p-6"
          />
        </motion.div>
      </div>
    </div>
  );
}

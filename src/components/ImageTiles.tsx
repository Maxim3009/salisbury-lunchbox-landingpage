"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { IconCurvyArrow } from "@/components/icons";

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToHoverCapability(callback: () => void) {
  const query = window.matchMedia(HOVER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getHoverCapability() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getHoverCapabilityServerSnapshot() {
  return false;
}

// Adapted from https://21st.dev/@tonyzebastian/components/image-tiles —
// three photos fanned out in a staggered pile that settles on mount and
// reacts a little further on hover. Hovering a tile also reveals a
// hand-lettered label pointed at by a curvy arrow (reactscript.com/fancy-curvy-arrows/).
type TileKey = "left" | "middle" | "right";

type ImageTilesProps = {
  leftImage: string;
  leftAlt: string;
  leftLabel: string;
  middleImage: string;
  middleAlt: string;
  middleLabel: string;
  rightImage: string;
  rightAlt: string;
  rightLabel: string;
  className?: string;
};

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.2 },
  },
};

const leftImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -8,
    x: -150,
    y: 10,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
  hover: {
    rotate: 1,
    x: -160,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const middleImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 6,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
  hover: {
    rotate: 0,
    x: 0,
    y: -10,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const rightImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -6,
    x: 200,
    y: 20,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
  hover: {
    rotate: 3,
    x: 200,
    y: 10,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const labelPop: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 18 } },
};

function TileLabel({ text, arrowClassName }: { text: string; arrowClassName: string }) {
  return (
    <motion.div
      variants={labelPop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="pointer-events-none absolute -top-20 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
    >
      <span className="font-marker text-3xl text-primary [text-shadow:0_2px_0_var(--color-paper)]">
        {text}
      </span>
      <IconCurvyArrow className={`h-10 w-10 text-primary ${arrowClassName}`} />
    </motion.div>
  );
}

export function ImageTiles({
  leftImage,
  leftAlt,
  leftLabel,
  middleImage,
  middleAlt,
  middleLabel,
  rightImage,
  rightAlt,
  rightLabel,
  className = "",
}: ImageTilesProps) {
  const [hovered, setHovered] = useState<TileKey | null>(null);
  // Touch devices can't hover, so the labels would otherwise never appear —
  // show them all the time there instead of gating on the "hovered" state.
  const hasHover = useSyncExternalStore(
    subscribeToHoverCapability,
    getHoverCapability,
    getHoverCapabilityServerSnapshot,
  );

  return (
    <motion.div
      className={`relative flex h-64 w-64 items-center justify-center ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute h-48 w-48 origin-bottom-right"
        variants={leftImageVariants}
        whileHover="hover"
        animate="animate"
        onHoverStart={() => setHovered("left")}
        onHoverEnd={() => setHovered(null)}
        style={{ zIndex: 30 }}
      >
        <AnimatePresence>
          {(!hasHover || hovered === "left") && (
            <TileLabel text={leftLabel} arrowClassName="-scale-x-100" />
          )}
        </AnimatePresence>
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-paper shadow-lg">
          <Image src={leftImage} alt={leftAlt} fill sizes="192px" className="rounded-xl object-cover p-2" />
        </div>
      </motion.div>

      <motion.div
        className="absolute h-48 w-48 origin-bottom-left"
        variants={middleImageVariants}
        whileHover="hover"
        animate="animate"
        onHoverStart={() => setHovered("middle")}
        onHoverEnd={() => setHovered(null)}
        style={{ zIndex: 20 }}
      >
        <AnimatePresence>
          {(!hasHover || hovered === "middle") && (
            <TileLabel text={middleLabel} arrowClassName="rotate-6" />
          )}
        </AnimatePresence>
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-paper shadow-lg">
          <Image src={middleImage} alt={middleAlt} fill sizes="192px" className="rounded-xl object-cover p-2" />
        </div>
      </motion.div>

      <motion.div
        className="absolute h-48 w-48 origin-bottom-right"
        variants={rightImageVariants}
        whileHover="hover"
        animate="animate"
        onHoverStart={() => setHovered("right")}
        onHoverEnd={() => setHovered(null)}
        style={{ zIndex: 10 }}
      >
        <AnimatePresence>
          {(!hasHover || hovered === "right") && <TileLabel text={rightLabel} arrowClassName="" />}
        </AnimatePresence>
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-paper shadow-lg">
          <Image src={rightImage} alt={rightAlt} fill sizes="192px" className="rounded-xl object-cover p-2" />
        </div>
      </motion.div>
    </motion.div>
  );
}

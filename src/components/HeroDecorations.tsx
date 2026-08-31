"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Every decoration lives inside the section's own top/bottom padding —
// above the eyebrow text, below the photo — so nothing ever overlaps
// content. Each one gets its own vertical offset (small on mobile, larger
// once the bigger lg padding gives more room) so they scatter unevenly
// instead of lining up in two flat rows.
const blueBig = "w-9 sm:w-12 md:w-16 lg:w-20 xl:w-24";
const blueSmall = "w-7 sm:w-9 md:w-12 lg:w-16 xl:w-20";
// Orange source art is the lowest-resolution sprite, so it's kept at a
// single fixed size instead of scaling up at wider breakpoints, where it
// would otherwise turn soft/blurry.
const orangeFixed = "w-10";

// A gentle, purely horizontal sway that starts as soon as the page loads —
// no scroll involved. The top row eases right, the bottom row eases left,
// then both drift back (yoyo), forever. Vertical position never changes,
// so nothing can ever drift into the text column or the photo.
const decorations = [
  {
    id: "top-b",
    src: "/images/patterns/lunchbox-2.png",
    width: 63,
    height: 56,
    className: `left-[16%] top-[30px] lg:top-[48px] ${orangeFixed} rotate-[9deg]`,
    drift: { x: 24, delay: 0.5 },
  },
  {
    id: "top-c",
    src: "/images/patterns/lunchbox-3.png",
    width: 102,
    height: 78,
    className: `left-[35%] top-[9px] lg:top-[6px] ${blueSmall} rotate-[-15deg]`,
    drift: { x: 28, delay: 1 },
  },
  {
    id: "top-d",
    src: "/images/patterns/lunchbox-2.png",
    width: 63,
    height: 56,
    className: `right-[29%] top-[33px] lg:top-[54px] ${orangeFixed} rotate-[12deg]`,
    drift: { x: 24, delay: 0.3 },
  },
  {
    id: "bottom-b",
    src: "/images/patterns/lunchbox-3.png",
    width: 102,
    height: 78,
    className: `left-[21%] bottom-[23px] lg:bottom-[6px] ${blueBig} rotate-[-10deg]`,
    drift: { x: -26, delay: 0.9 },
  },
  {
    id: "bottom-c",
    src: "/images/patterns/lunchbox-2.png",
    width: 63,
    height: 56,
    className: `left-[41%] bottom-[3px] lg:bottom-[2px] ${orangeFixed} rotate-[-6deg]`,
    drift: { x: -22, delay: 1.3 },
  },
  {
    id: "bottom-d",
    src: "/images/patterns/lunchbox-1.png",
    width: 120,
    height: 97,
    className: `right-[23%] bottom-[18px] lg:bottom-[28px] ${blueSmall} rotate-[11deg]`,
    drift: { x: -24, delay: 0.6 },
  },
] as const;

export function HeroDecorations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate when the visitor hasn't asked for reduced motion —
      // otherwise every piece just stays put at its static CSS position.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-decoration]");

        items.forEach((el) => {
          const x = Number(el.dataset.driftX);
          const delay = Number(el.dataset.driftDelay);

          gsap.to(el, {
            x,
            duration: 7,
            delay,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="contents">
      {decorations.map(({ id, src, width, height, className, drift }) => (
        <Image
          key={id}
          data-decoration
          data-drift-x={drift.x}
          data-drift-delay={drift.delay}
          src={src}
          width={width}
          height={height}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute h-auto select-none ${className}`}
        />
      ))}
    </div>
  );
}

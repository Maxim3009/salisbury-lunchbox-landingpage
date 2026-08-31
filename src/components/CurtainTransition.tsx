"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "motion/react";

// A free-tier equivalent of Motion+'s useCurtains + clip-wipe examples
// (motion.dev/docs/react-use-curtains, motion.dev/examples/react-curtains-clip-wipe)
// — both are gated behind a paid Motion+ membership (and the `motion-plus`
// package is now deprecated), so this reimplements the same choreography
// with the already-installed `motion` package: instead of sliding a solid
// panel in via transform, the curtain stays pinned full-screen and a
// clip-path sweeps across to cover, then continues sweeping to reveal.
type CurtainContextValue = {
  navigate: (href: string) => void;
};

const CurtainContext = createContext<CurtainContextValue | null>(null);

export function useCurtainNavigate() {
  const ctx = useContext(CurtainContext);
  if (!ctx) throw new Error("useCurtainNavigate must be used within CurtainProvider");
  return ctx.navigate;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const WIPE_DURATION = 0.85;
// A big circle swept across the screen reads as a curved/bowed wipe edge,
// matching Motion's clip-wipe example (motion.dev/examples/react-curtains-clip-wipe)
// rather than a flat rectangular one — its edge bulges as it sweeps because
// only an arc of the circle is ever on-screen at once. The radius is fixed
// in vmax units, well over half the screen's diagonal, so it fully covers
// the viewport once centred.
const CLIP_RADIUS = "70vmax";
// The hidden positions push the circle's centre out by radius + margin, in
// the same vmax unit as the radius, so it's fully off-screen regardless of
// the viewport's aspect ratio (a plain percentage offset wouldn't be).
const CLIP_HIDDEN_LEFT = `circle(${CLIP_RADIUS} at -80vmax 50%)`;
const CLIP_FULL = `circle(${CLIP_RADIUS} at 50% 50%)`;
const CLIP_HIDDEN_RIGHT = `circle(${CLIP_RADIUS} at calc(100% + 80vmax) 50%)`;
// Same jump as the Hero photo's boop (joshwcomeau.com/react/boop): a single
// spring-driven hop, not a back-and-forth.
const BOOP_Y = -14;
const BOOP_SPRING = { type: "spring" as const, stiffness: 300, damping: 10 };

export function CurtainProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();
  const logoControls = useAnimation();
  const isBusyRef = useRef(false);
  const resolveRouteChangeRef = useRef<(() => void) | null>(null);

  // Resolves the "route has actually changed" wait inside navigate() once
  // the new page has mounted under the curtain.
  useEffect(() => {
    resolveRouteChangeRef.current?.();
    resolveRouteChangeRef.current = null;
  }, [pathname]);

  const navigate = async (href: string) => {
    if (isBusyRef.current || href === pathname) return;
    isBusyRef.current = true;

    await controls.start({ clipPath: CLIP_FULL, transition: { duration: WIPE_DURATION, ease: EASE } });

    // Fire-and-forget: the logo does the same single up-jump as the Hero
    // photo's boop while the curtain covers the screen, without blocking
    // the reveal below.
    void (async () => {
      await logoControls.start({ y: BOOP_Y, transition: BOOP_SPRING });
      await logoControls.start({ y: 0, transition: BOOP_SPRING });
    })();

    const routeChanged = new Promise<void>((resolve) => {
      resolveRouteChangeRef.current = resolve;
    });
    router.push(href);
    await routeChanged;

    await controls.start({ clipPath: CLIP_HIDDEN_RIGHT, transition: { duration: WIPE_DURATION, ease: EASE } });
    controls.set({ clipPath: CLIP_HIDDEN_LEFT });
    logoControls.set({ y: 0 });
    isBusyRef.current = false;
  };

  return (
    <CurtainContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        aria-hidden
        initial={{ clipPath: CLIP_HIDDEN_LEFT }}
        animate={controls}
        className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center bg-primary"
      >
        <motion.div animate={logoControls}>
          <Image src="/images/lunchboxLogo.png" alt="" width={160} height={142} className="h-24 w-auto sm:h-32" />
        </motion.div>
      </motion.div>
    </CurtainContext.Provider>
  );
}

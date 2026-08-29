"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "motion/react";

// A free-tier equivalent of Motion+'s useCurtains (motion.dev/docs/react-use-curtains) —
// that hook is gated behind a paid Motion+ membership (and the `motion-plus`
// package is now deprecated), so this reimplements the same choreography
// with the already-installed `motion` package: cover the screen, navigate,
// wait for the new route to actually mount, then wipe away to reveal it.
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

export function CurtainProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const controls = useAnimation();
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

    await controls.start({ x: "0%", transition: { duration: 0.5, ease: EASE } });

    const routeChanged = new Promise<void>((resolve) => {
      resolveRouteChangeRef.current = resolve;
    });
    router.push(href);
    await routeChanged;

    await controls.start({ x: "100%", transition: { duration: 0.5, ease: EASE } });
    controls.set({ x: "-100%" });
    isBusyRef.current = false;
  };

  return (
    <CurtainContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        aria-hidden
        initial={{ x: "-100%" }}
        animate={controls}
        className="pointer-events-none fixed inset-0 z-[200] bg-primary"
      />
    </CurtainContext.Provider>
  );
}

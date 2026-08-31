/**
 * Small, hand-picked line icons used across the site.
 * Kept minimal and dependency-free rather than pulling in a full icon library.
 */
import { useId } from "react";

type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconSandwich({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 11h18a1 1 0 0 1 1 1 6 6 0 0 1-6 6H8a6 6 0 0 1-6-6 1 1 0 0 1 1-1Z" />
      <path d="M4.5 11 8 4h8l3.5 7" />
      <path d="M9 14.5h6" />
    </svg>
  );
}

export function IconSalad({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 13a9 9 0 0 1 18 0" />
      <path d="M3 13h18l-1.4 6.2a2 2 0 0 1-2 1.8H6.4a2 2 0 0 1-2-1.8L3 13Z" />
      <path d="M12 13V7" />
      <path d="M9 7c0-2 1-3.5 1-3.5S11 5 12 7" />
    </svg>
  );
}

export function IconWrap({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M7 4c6 0 10 4 10 10a6 6 0 0 1-6 6c-4 0-7-3-7-7 0-5 3-9 3-9Z" />
      <path d="M8.5 10.5c2.5 0 5 1 6.5 3" />
      <path d="M7.5 14c2 0 4 .8 5.3 2.3" />
    </svg>
  );
}

export function IconBowl({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12h18a9 6.5 0 0 1-9 8 9 6.5 0 0 1-9-8Z" />
      <path d="M12 12V5" />
      <path d="M12 5c1.4 0 2.5-1 2.5-2" />
      <path d="M12 5c-1.4 0-2.5-1-2.5-2" />
    </svg>
  );
}

export function IconSoup({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 12h16v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2Z" />
      <path d="M2 12h20" />
      <path d="M8 6c0-1 .8-1.2.8-2.2" />
      <path d="M12 6c0-1 .8-1.2.8-2.2" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6.5 3.5h2.6l1.4 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.4v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z" />
      <path d="M5 19c0-5 2.5-8.5 6-10.5" />
    </svg>
  );
}

export function IconCarrot({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689l.005 -.005" />
      <path d="M9 13l-1.5 -1.5" />
      <path d="M16 14l-2 -2" />
      <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2" />
      <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4.5 12h15" />
      <path d="M13 6l6.5 6-6.5 6" />
    </svg>
  );
}

export function IconMessage({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5.5L6 20.2V17H6a2 2 0 0 1-2-2V6Z" />
    </svg>
  );
}

export function IconInfo({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function IconBurger({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 11c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M3 11h18" />
      <path d="M3.5 14.5h17" />
      <path d="M4 18a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1 3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
    </svg>
  );
}

export function IconBreadLoaf({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 13c0-5 4-9 9-9s9 4 9 9-4 6-9 6-9-1-9-6Z" />
      <path d="M8 8.5 6.5 11" />
      <path d="M12.5 7 11 10" />
      <path d="M17 8.5 15.5 11" />
    </svg>
  );
}

export function IconFlame({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3c1 3-3 4.5-3 8.5a3 3 0 0 0 6 0c0-1-.5-2-.5-2 1 1.5 1.5 3 1.5 4.5a5 5 0 0 1-10 0C6 8.5 9 7.5 9 5c0-.8.6-2 3-2Z" />
    </svg>
  );
}

export function IconSunrise({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 18h14" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <path d="M12 8v3" />
      <path d="m8.5 10.5 1.5 1.5" />
      <path d="m15.5 10.5-1.5 1.5" />
      <path d="M5.5 15h1.2" />
      <path d="M17.3 15h1.2" />
    </svg>
  );
}

export function IconCookie({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="9" cy="9.5" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9.5" r=".55" fill="currentColor" stroke="none" />
      <circle cx="10" cy="14" r=".55" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14.5" r=".55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCup({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M7 9h10l-1 10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 9Z" />
      <path d="M6 9h12" />
      <path d="M14 9V5a1 1 0 0 0-1-1h-1.5" />
    </svg>
  );
}

export function IconTray({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path d="M3 9h18l-1.6 9.2a2 2 0 0 1-2 1.8H6.6a2 2 0 0 1-2-1.8L3 9Z" />
    </svg>
  );
}

export function IconBottle({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M10 3h4v3l1.5 2.2V19a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8.2L10 6V3Z" />
      <path d="M9 12h6" />
    </svg>
  );
}

// Rating stars read better solid than as line icons, unlike the rest of this set.
const starPath = "M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z";

export function IconStar({ className, filled = true }: IconProps & { filled?: boolean }) {
  const uid = useId();
  const gradientId = `star-gradient-${uid}`;
  const clipId = `star-clip-${uid}`;

  if (!filled) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        aria-hidden
      >
        <path d={starPath} />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="4" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF6C8" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={starPath} />
        </clipPath>
      </defs>
      {/* Glossy fill: gradient body, a thin amber outline for definition, and
          a soft white highlight clipped to the star's silhouette for shine. */}
      <path d={starPath} fill={`url(#${gradientId})`} stroke="#B45309" strokeWidth={0.5} strokeLinejoin="round" />
      <ellipse
        cx="9.5"
        cy="8"
        rx="3.6"
        ry="2.1"
        fill="#FFFFFF"
        opacity={0.55}
        clipPath={`url(#${clipId})`}
        transform="rotate(-18 9.5 8)"
      />
    </svg>
  );
}

// A hand-drawn-feeling curvy pointer, used to connect a hover label to its image tile.
export function IconCurvyArrow({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M10 8Q48 4 26 46" />
      <path d="M26 46L36 39M26 46L27 34" />
    </svg>
  );
}

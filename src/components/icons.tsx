/**
 * Small, hand-picked line icons used across the site.
 * Kept minimal and dependency-free rather than pulling in a full icon library.
 */
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

// Rating stars read better solid than as line icons, unlike the rest of this set.
export function IconStar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
    </svg>
  );
}

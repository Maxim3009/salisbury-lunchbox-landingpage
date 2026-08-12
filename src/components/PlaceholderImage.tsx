import type { ComponentType } from "react";

type Tone = "mist" | "paper" | "primary" | "accent";

type PlaceholderImageProps = {
  /** Line icon shown as a stand-in for the real photo. */
  icon: ComponentType<{ className?: string }>;
  /** Accessible description of what the eventual photo will show. */
  label: string;
  tone?: Tone;
  className?: string;
};

const toneStyles: Record<Tone, string> = {
  mist: "bg-mist text-ink-soft",
  paper: "bg-paper-soft text-ink-soft",
  primary: "bg-mist text-primary-dark",
  accent: "bg-paper-soft text-accent-dark",
};

/**
 * Stand-in for real photography. Replace usages with `next/image` once
 * restaurant photos are available — the `label` prop maps directly to
 * the alt text the real <Image> should use.
 */
export function PlaceholderImage({
  icon: Icon,
  label,
  tone = "mist",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden border border-line ${toneStyles[tone]} ${className}`}
    >
      <div className="texture-dots absolute inset-0 opacity-[0.07]" />
      <Icon className="relative h-10 w-10 opacity-60 sm:h-12 sm:w-12" />
    </div>
  );
}

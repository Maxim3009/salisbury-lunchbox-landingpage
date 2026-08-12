import type { MenuItem } from "@/data/menu";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { IconBowl, IconSalad, IconSandwich, IconSoup, IconWrap } from "@/components/icons";

const iconByType = {
  sandwich: IconSandwich,
  salad: IconSalad,
  wrap: IconWrap,
  bowl: IconBowl,
  soup: IconSoup,
};

const toneByType: Record<MenuItem["icon"], "mist" | "paper" | "primary" | "accent"> = {
  sandwich: "accent",
  salad: "primary",
  wrap: "paper",
  bowl: "mist",
  soup: "paper",
};

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_12px_32px_-16px_rgba(30,51,80,0.25)]">
      <PlaceholderImage
        icon={iconByType[item.icon]}
        label={`Photo of ${item.name}`}
        tone={toneByType[item.icon]}
        className="aspect-[4/3] w-full transition-transform duration-500 [&>svg]:group-hover:scale-110 [&>svg]:transition-transform [&>svg]:duration-500"
      />
      <div className="flex flex-1 flex-col px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
          {item.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        <p className="mt-4 border-t border-line pt-4 font-display text-base font-semibold text-ink">
          {item.price}
        </p>
      </div>
    </article>
  );
}

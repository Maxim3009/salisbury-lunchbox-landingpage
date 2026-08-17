/**
 * Core restaurant details used across the site (name, contact info, hours).
 * Replace these placeholder values with the real shop details before launch.
 */
export const restaurant = {
  name: "Salisbury Lunchbox",
  shortName: "Lunchbox",
  tagline: "Fresh lunch, made for your day",
  phoneDisplay: "0420 740 558",
  phoneHref: "tel:0420740558",
  addressLines: ["12 Market Place", "Salisbury, Wiltshire, SP1 1AA"],
  todayHours: "Mon–Fri · 10:00am – 3:00pm",
};

export type NavItem = {
  label: string;
  href: string;
  /** Pages not built yet are shown as upcoming rather than linked. */
  comingSoon?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu", comingSoon: true },
  { label: "Location", href: "/location", comingSoon: true },
  { label: "Opening Hours", href: "/hours", comingSoon: true },
  { label: "Contact", href: "/contact", comingSoon: true },
  { label: "Gallery", href: "/gallery", comingSoon: true },
];

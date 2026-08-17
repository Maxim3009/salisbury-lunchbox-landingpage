/**
 * Core restaurant details used across the site (name, contact info, hours).
 * Replace these placeholder values with the real shop details before launch.
 */
const addressLines = ["Unit 14/31-37 Salisbury Rd", "Asquith NSW 2077"];

export const restaurant = {
  name: "Salisbury Lunchbox",
  shortName: "Lunchbox",
  tagline: "Fresh lunch, made for your day",
  phoneDisplay: "0420 740 558",
  phoneHref: "tel:0420740558",
  addressLines,
  /** Opens the shop's verified Google Maps listing directly. */
  mapsHref:
    "https://www.google.com/maps/place/Salisbury+Lunch+Box/@-33.6957195,151.1108173,118m/data=!3m2!1e3!5s0x6b0d5876aae1b083:0xe1db8aa193a58a94!4m14!1m7!3m6!1s0x6b0d5876ab72e735:0x899f9c84d86ae0dd!2s14+31%2F37+Salisbury+Rd,+Asquith+NSW+2077!3b1!8m2!3d-33.6954339!4d151.1109145!3m5!1s0x6b0d5874010a263d:0x42bf9d72177bab82!8m2!3d-33.6954883!4d151.1109969!16s%2Fg%2F1tfsb_9b?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  hours: [
    { days: "Monday – Friday", time: "6:30am – 2:00pm" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  /** Pages not built yet are shown as upcoming rather than linked. */
  comingSoon?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery", comingSoon: true },
];

export type MenuIcon = "sandwich" | "salad" | "wrap" | "bowl" | "soup";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  icon: MenuIcon;
  /** Path to the real product photo, once available (e.g. "/images/menu/chicken-sandwich.jpg"). */
  image?: string;
};

/**
 * Featured lunch items shown on the Home page.
 * Replace name / description / price / image for each item as the real menu is finalised.
 * The full Menu page will read from a larger version of this list.
 */
export const featuredMenuItems: MenuItem[] = [
  {
    id: "chicken-sandwich",
    name: "Roast Chicken Sandwich",
    description: "Slow-roasted chicken, herb mayo and crisp lettuce on toasted sourdough.",
    price: "£5.95",
    category: "Sandwiches",
    icon: "sandwich",
  },
  {
    id: "harvest-salad",
    name: "Harvest Salad Bowl",
    description: "Seasonal greens, roasted vegetables, feta and a citrus vinaigrette.",
    price: "£6.50",
    category: "Salads",
    icon: "salad",
  },
  {
    id: "falafel-wrap",
    name: "Falafel & Hummus Wrap",
    description: "Crisp falafel, house hummus and pickled slaw in a warm flatbread.",
    price: "£5.75",
    category: "Wraps",
    icon: "wrap",
  },
  {
    id: "teriyaki-rice-bowl",
    name: "Teriyaki Rice Bowl",
    description: "Grilled teriyaki chicken, steamed rice and charred greens.",
    price: "£6.95",
    category: "Rice Bowls",
    icon: "bowl",
  },
  {
    id: "soup-of-the-day",
    name: "Soup of the Day",
    description: "A daily-changing soup made fresh each morning, served with sourdough.",
    price: "£4.25",
    category: "Daily Special",
    icon: "soup",
  },
];

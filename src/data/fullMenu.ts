/**
 * Full menu, transcribed from the shop's physical menu boards.
 * A few prices in "sandwiches" and "saladSpecial" were hard to read clearly
 * in the source photos (glare/angle) — worth the owner double-checking
 * those against the physical menu before this goes live.
 */
export type MenuVariant = {
  label: string;
  price: string;
};

export type FullMenuItem = {
  id: string;
  name: string;
  description?: string;
  /** Used when the item has one flat price. */
  price?: string;
  /** Used instead of `price` when the item comes in a few sizes/options, each shown on its own line. */
  variants?: MenuVariant[];
};

export type MenuExtra = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Short instruction shown under the category heading, e.g. bread/wrap choice. */
  note?: string;
  /** Priced add-ons for this category, shown as a plain list rather than cards. */
  extras?: MenuExtra[];
  items: FullMenuItem[];
};

/** Shared add-ons for both cold and hot sandwiches/rolls. */
const sandwichExtras: MenuExtra[] = [
  { name: "Veggies (each)", price: "$0.80" },
  {
    name: "Full Salad",
    description: "Lettuce, Carrot, Beetroot, Tomato, Onion, Cucumber",
    price: "$2.80",
  },
  { name: "Coleslaw", price: "$1.00" },
  { name: "Avocado/Pineapple", price: "$1.00" },
  { name: "Extra Sausage", price: "$2.50" },
  {
    name: "Extra Meat",
    description: "Ham, Chicken, Tuna, Turkey, Salami",
    price: "$2.50",
  },
  { name: "Extra Bacon", price: "$1.50" },
  { name: "Tasty Cheese", price: "$0.90" },
  { name: "Mashed/Sliced Egg", price: "$1.50" },
  { name: "Upgrade to Turkish Bread/Wrap", price: "$2.50" },
  { name: "Toasting", price: "$0.20" },
  { name: "Sauce", price: "$0.50" },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    extras: [
      { name: "Cheese", price: "$0.90" },
      { name: "Bacon", price: "$1.50" },
      { name: "Egg", price: "$1.50" },
      { name: "Pineapple", price: "$1.00" },
      { name: "Extra Patty", price: "$3.50" },
    ],
    items: [
      {
        id: "plain-burger",
        name: "Plain Burger",
        description: "100% Homemade Beef, Tomato, Lettuce, Beetroot, Grilled Onion.",
        price: "$11.90",
      },
      {
        id: "burger-lot",
        name: "Burger LOT",
        description: "100% Homemade Beef, Cheese, Egg, Bacon, Pineapple.",
        price: "$13.90",
      },
      {
        id: "salisbury-burger",
        name: "Salisbury Burger",
        description: "Chicken Schnitzel, Cheese, Bacon, Egg, Lettuce, Tomato, Mayo.",
        price: "$14.90",
      },
      {
        id: "bulgogi-burger",
        name: "Bulgogi Burger",
        description: "Marinated Beef, Lettuce, Onion, Mayo.",
        price: "$12.90",
      },
      {
        id: "chicken-breast-burger",
        name: "Chicken Breast Burger",
        description: "Grilled Chicken, Lettuce, Cheese, Tomato, Beetroot, Mayo.",
        price: "$12.90",
      },
      {
        id: "schnitzel-burger",
        name: "Schnitzel Burger",
        description: "Chicken Schnitzel, Lettuce, Cheese, Tomato, Mayo.",
        price: "$12.90",
      },
    ],
  },
  {
    id: "turkish-bread",
    label: "Foccacia & Turkish Bread Specials",
    note: "Choose between foccacia or turkish bread.",
    items: [
      {
        id: "scandinavian",
        name: "Scandinavian",
        description: "Chicken, Avocado, Tomato, Cheese, Mayo.",
        price: "$13.00",
      },
      {
        id: "ham-delight",
        name: "Ham Delight",
        description: "Ham, Avocado, Tomato, Cheese, Lettuce, Mayo.",
        price: "$13.00",
      },
      {
        id: "turkey-delight",
        name: "Turkey Delight",
        description: "Turkey, Avocado, Cheese, Lettuce, Tomato, Cranberry Sauce.",
        price: "$14.00",
      },
      {
        id: "bulgogi-turkish",
        name: "Bulgogi",
        description: "Marinated Beef, Lettuce, Onion, Carrot, Mayo.",
        price: "$14.00",
      },
      {
        id: "chicken-parmigiana",
        name: "Chicken Parmigiana",
        description: "Chicken Schnitzel, Cheese, Lettuce, Tomato, Mayo.",
        price: "$14.00",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    note: "Choose between toasted or fresh wraps.",
    items: [
      {
        id: "wrap-1",
        name: "#1 Chicken Wrap",
        description: "Chicken, Lettuce, Avocado, Cheese, Tomato, Mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-2",
        name: "#2 Bulgogi Beef Wrap",
        description: "Bulgogi Beef, Lettuce, Carrot, Onion, Mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-3",
        name: "#3 BBQ Chicken Wrap",
        description: "BBQ Chicken, Lettuce, Onion, Tomato, Cheese, Mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-4",
        name: "#4 Schnitzel Wrap",
        description: "Chicken Schnitzel, Lettuce, Cheese, Tomato, Mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-5",
        name: "#5 Double Ham Wrap",
        description: "Ham, Full Salad, Cheese, Mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-6",
        name: "#6 Tuna Wrap",
        description: "Tuna, Full Salad, Mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-7",
        name: "#7 Turkey Wrap",
        description: "Turkey, Avocado, Full Salad, Cranberry Sauce.",
        price: "$14.90",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches & Rolls",
    note: "Price: sandwich / roll.",
    extras: sandwichExtras,
    items: [
      {
        id: "all-meat-base",
        name: "All Meat Base",
        description: "Ham, Chicken, Tuna, Turkey or Salami.",
        price: "$6.50 / $7.50",
      },
      {
        id: "chicken-coleslaw",
        name: "Chicken & Coleslaw",
        price: "$7.50 / $8.50",
      },
      {
        id: "chicken-lett-mayo",
        name: "Chicken, Lettuce & Mayo",
        price: "$7.50 / $8.50",
      },
      {
        id: "ham-cheese-tomato",
        name: "Ham, Cheese & Tomato",
        price: "$7.50 / $8.50",
      },
      {
        id: "blt",
        name: "BLT",
        description: "Bacon, Lettuce, Tomato.",
        price: "$7.80 / $8.50",
      },
      {
        id: "salad-sandwich",
        name: "Salad",
        description: "Beetroot, Lettuce, Onion, Carrot, Tomato.",
        price: "$7.50 / $8.50",
      },
      {
        id: "chicken-cheese-mayo",
        name: "Chicken, Cheese & Mayo",
        price: "$6.50 / $7.50",
      },
      {
        id: "egg-sandwich",
        name: "Mashed or Sliced Egg",
        price: "$6.00 / $7.00",
      },
      {
        id: "curried-egg",
        name: "Curried Egg",
        price: "$6.90 / $7.90",
      },
      {
        id: "cheese-sandwich",
        name: "Cheese",
        price: "$5.00 / $6.00",
      },
      {
        id: "ham-turkey-salami-salad",
        name: "Ham / Turkey / Salami Salad",
        price: "$8.90 / $10.90",
      },
      {
        id: "buttered-bread",
        name: "Buttered Bread",
        description: "Bread only.",
        price: "$1.30 / $2.50",
      },
    ],
  },
  {
    id: "hot-sandwiches",
    label: "Hot Sandwiches & Rolls",
    note: "Price: sandwich / roll.",
    extras: sandwichExtras,
    items: [
      {
        id: "bacon-egg",
        name: "Bacon & Egg",
        price: "$7.50 / $8.90",
      },
      {
        id: "chicken-schnitzel-sandwich",
        name: "Chicken Schnitzel",
        description: "Homemade Schnitzel, Lettuce & Mayo.",
        price: "$10.90 / $12.90",
      },
      {
        id: "bbq-charcoal-chicken-roll",
        name: "BBQ Charcoal Chicken Roll",
        description: "BBQ Charcoal Chicken, Lettuce, Onion, Tomato, Mayo.",
        price: "$11.90",
      },
      {
        id: "bulgogi-roll",
        name: "Bulgogi Roll",
        description: "Bulgogi Beef, Lettuce, Onion, Mayo.",
        price: "$12.90",
      },
      {
        id: "homemade-rissole-roll",
        name: "Homemade Rissole Roll",
        price: "$8.00",
      },
    ],
  },
  {
    id: "hot-snacks",
    label: "Hot Snacks",
    note: "Cooked on premise daily.",
    items: [
      {
        id: "homemade-schnitzel",
        name: "Piece of Homemade Schnitzel",
        price: "$9.00",
      },
      {
        id: "homemade-rissole",
        name: "Piece of Homemade Rissole",
        price: "$4.50",
      },
      {
        id: "homemade-sausage-roll",
        name: "Homemade Sausage Roll",
        price: "$4.90",
      },
      {
        id: "meat-pie",
        name: "Meat Pie",
        price: "$4.90",
      },
      {
        id: "piece-of-fish",
        name: "Piece of Fish",
        price: "$5.90",
      },
      {
        id: "chico-roll",
        name: "Chico Roll",
        price: "$4.50",
      },
      {
        id: "spring-roll",
        name: "Spring Roll",
        price: "$4.50",
      },
      {
        id: "chicken-dim-sim",
        name: "Chicken Dim Sim",
        price: "$3.50",
      },
      {
        id: "potato-scallop",
        name: "Potato Scallop",
        price: "$1.90",
      },
      {
        id: "hash-brown",
        name: "Hash Brown",
        price: "$1.90",
      },
      {
        id: "hot-chips-small",
        name: "Hot Chips (Small)",
        description: "Add Gravy for $1.00 extra",
        price: "$5.00",
      },
      {
        id: "hot-chips-large",
        name: "Hot Chips (Large)",
        description: "Add Gravy for $1.00 extra",
        price: "$8.00",
      },
    ],
  },
  {
    id: "homemade-meals",
    label: "Homemade Meals",
    items: [
      {
        id: "curry-katsu-rice",
        name: "Curry Kat-Su with Rice",
        price: "$15.90",
      },
      {
        id: "spicy-bbq-pork-rice",
        name: "Spicy BBQ Pork with Rice",
        price: "$15.90",
      },
      {
        id: "bulgogi-beef-rice",
        name: "Bulgogi (Beef) with Rice",
        price: "$15.90",
      },
      {
        id: "chicken-katsu",
        name: "Chicken Kat-Su",
        description: "Schnitzel, Salad, Chips and Rice.",
        price: "$17.90",
      },
    ],
  },
  {
    id: "salad-special",
    label: "Salad Specials",
    items: [
      {
        id: "bacon-full-salad",
        name: "Bacon with Full Salad",
        price: "$11.50",
      },
      {
        id: "chicken-full-salad",
        name: "Chicken with Full Salad",
        price: "$13.50",
      },
      {
        id: "ham-full-salad",
        name: "Ham with Full Salad",
        price: "$11.50",
      },
      {
        id: "sliced-egg-full-salad",
        name: "Sliced Egg with Full Salad",
        price: "$11.50",
      },
      {
        id: "schnitzel-chips-salad",
        name: "Schnitzel & Chips (or Salad)",
        price: "$14.90",
      },
      {
        id: "fish-chips-salad",
        name: "Fish & Chips (or Salad)",
        price: "$13.90",
      },
      {
        id: "fish-schnitzel-chips-salad",
        name: "Fish (or Schnitzel), Chips & Salad",
        price: "$15.90",
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      {
        id: "all-day-breakfast",
        name: "All Day Breakfast Special",
        description: "Bacon, Egg, Sausage, Chips, Salad & Bread.",
        price: "$15.90",
      },
      {
        id: "breakkie-wrap",
        name: "Breakkie Wrap",
        description: "3 Bacon, 2 Eggs, 2 Cheese & Tomato Relish.",
        price: "$11.90",
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      {
        id: "muffins",
        name: "Muffins",
        description: "Choc or Blueberry.",
        price: "$4.30",
      },
      {
        id: "choc-bar",
        name: "Choc Bar",
        price: "$2.90",
      },
      {
        id: "smith-chips",
        name: "Smith Chips",
        description: "Blue, Yellow, Green, Pink.",
        price: "$3.50",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      {
        id: "can-v",
        name: "V Energy",
        variants: [
          { label: "250ml (Green/Blue)", price: "$3.50" },
          { label: "500ml (Green/Sugar Free)", price: "$6.00" },
          { label: "350ml Green Bottle", price: "$5.00" },
        ],
      },
      {
        id: "mother",
        name: "Mother 500ml",
        description: "Red or Purple.",
        price: "$5.00",
      },
      { id: "red-bull", name: "Red Bull 500ml", price: "$6.50" },
      { id: "ginger-beer", name: "Ginger Beer", price: "$4.20" },
      { id: "monster", name: "Monster", description: "Assorted Flavours.", price: "$5.00" },
      { id: "iced-tea", name: "Iced Tea", description: "Peach or Green Tea.", price: "$4.30" },
      {
        id: "coke-600",
        name: "Coke 600ml",
        description: "Zero, Original or Vanilla.",
        price: "$4.50",
      },
      {
        id: "vitamin-juice",
        name: "Sam's Vitamin Juice 375ml",
        description: "Orange, Apple, Berry Apple, Green or Apple Guava.",
        price: "$4.80",
      },
      {
        id: "soft-drink-600",
        name: "Soft Drink 600ml",
        description: "Mountain Dew, Solo or Pepsi Max.",
        price: "$4.50",
      },
      {
        id: "milk",
        name: "Milk",
        variants: [
          { label: "2L", price: "$5.50" },
          { label: "1L", price: "$4.00" },
          { label: "600ml", price: "$3.00" },
        ],
      },
      {
        id: "oak",
        name: "Oak Flavoured Milk",
        description: "Chocolate or Strawberry.",
        price: "$4.80",
      },
      {
        id: "milkshake",
        name: "Milk Shake",
        description: "Choc, Strawberry, Caramel, Vanilla or Banana.",
        price: "$9.00",
      },
    ],
  },
  {
    id: "catering",
    label: "Catering Plates",
    items: [
      {
        id: "mixed-sandwiches",
        name: "Mixed Sandwiches Box",
        description: "Minimum order $50.",
        price: "$55.00 + GST",
      },
      {
        id: "mixed-rolls",
        name: "Mixed Rolls Box",
        description: "Minimum order $50.",
        price: "$80.00 + GST",
      },
      {
        id: "mixed-wraps",
        name: "Mixed Wraps Box",
        description: "Minimum order $50.",
        price: "$75.00 + GST",
      },
    ],
  },
];

/** Sauce choices available across sandwiches, wraps and rolls. */
export const sauces: string[] = [
  "BBQ",
  "Homemade Mayo",
  "Mustard",
  "Caesar",
  "Cranberry",
  "Sweet Chilli",
  "Hot Chilli",
  "Gravy",
  "Tomato",
  "Tartar",
];

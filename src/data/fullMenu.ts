/**
 * Full menu, transcribed from the shop's physical menu boards.
 * A few prices in "sandwiches" and "saladSpecial" were hard to read clearly
 * in the source photos (glare/angle) — worth the owner double-checking
 * those against the physical menu before this goes live.
 */
export type FullMenuItem = {
  id: string;
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: FullMenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    items: [
      {
        id: "plain-burger",
        name: "Plain Burger",
        description: "Tomato, lettuce and mayo.",
        price: "$11.90",
      },
      {
        id: "burger-lot",
        name: "Burger LOT",
        description: "Tomato, lettuce, beetroot and grilled onion.",
        price: "$13.90",
      },
      {
        id: "salisbury-burger",
        name: "Salisbury Burger",
        description: "Schnitzel, cheese, bacon, egg, lettuce, tomato, mayo.",
        price: "$14.90",
      },
      {
        id: "bulgogi-burger",
        name: "Bulgogi Burger",
        description: "Marinated beef, lettuce, onion, mayo.",
        price: "$12.90",
      },
      {
        id: "chicken-breast-burger",
        name: "Chicken Breast Burger",
        description: "Grilled chicken, lettuce, cheese, tomato, beetroot, mayo.",
        price: "$12.90",
      },
      {
        id: "schnitzel-burger",
        name: "Schnitzel Burger",
        description: "Schnitzel, lettuce, cheese, tomato, mayo.",
        price: "$12.90",
      },
    ],
  },
  {
    id: "turkish-bread",
    label: "Foccacia & Turkish Bread",
    items: [
      {
        id: "scandinavian",
        name: "Scandinavian",
        description: "Chicken, avocado, tomato, cheese, mayo.",
        price: "$13.00",
      },
      {
        id: "ham-delight",
        name: "Ham Delight",
        description: "Ham, avocado, tomato, cheese, lettuce, mayo.",
        price: "$14.00",
      },
      {
        id: "turkey-delight",
        name: "Turkey Delight",
        description: "Turkey, avocado, cheese, lettuce, tomato, cranberry sauce.",
        price: "$14.90",
      },
      {
        id: "bulgogi-turkish",
        name: "Bulgogi",
        description: "Marinated beef, lettuce, onion, carrot, mayo.",
        price: "$13.90",
      },
      {
        id: "chicken-parmigiana",
        name: "Chicken Parmigiana",
        description: "Schnitzel, cheese, lettuce, tomato, mayo.",
        price: "$13.90",
      },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    items: [
      {
        id: "wrap-1",
        name: "#1 Chicken Wrap",
        description: "Chicken, lettuce, avocado, cheese, tomato, mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-2",
        name: "#2 Bulgogi Beef Wrap",
        description: "Lettuce, carrot, onion, mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-3",
        name: "#3 BBQ Chicken Wrap",
        description: "Lettuce, onion, tomato, cheese, mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-4",
        name: "#4 Schnitzel Wrap",
        description: "Lettuce, cheese, tomato, mayo.",
        price: "$14.90",
      },
      {
        id: "wrap-5",
        name: "#5 Double Ham Wrap",
        description: "Full salad, cheese, mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-6",
        name: "#6 Tuna Wrap",
        description: "Full salad, mayo.",
        price: "$13.90",
      },
      {
        id: "wrap-7",
        name: "#7 Turkey Wrap",
        description: "Avocado, full salad, cranberry sauce.",
        price: "$14.90",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches & Rolls",
    items: [
      {
        id: "all-meat-base",
        name: "All Meat Base",
        description: "Ham, chicken, tuna, turkey or salami. Price: sandwich / roll.",
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
        price: "$7.80 / $8.50",
      },
      {
        id: "salad-sandwich",
        name: "Salad",
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
        name: "Ham, Turkey & Salami Salad",
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
    items: [
      {
        id: "bacon-egg",
        name: "Bacon & Egg",
        description: "Price: sandwich / roll.",
        price: "$7.50 / $8.90",
      },
      {
        id: "chicken-schnitzel-sandwich",
        name: "Chicken Schnitzel",
        description: "Homemade schnitzel, lettuce & mayo.",
        price: "$10.90 / $12.90",
      },
    ],
  },
  {
    id: "hot-snacks",
    label: "Hot Snacks",
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
        id: "bbq-charcoal-chicken",
        name: "BBQ Charcoal Chicken",
        description: "Lettuce, onion, tomato, mayo.",
        price: "$4.90",
      },
      {
        id: "bulgogi-snack",
        name: "Bulgogi",
        description: "Lettuce, onion, mayo.",
        price: "$5.90",
      },
      {
        id: "hot-roast-beef-gravy",
        name: "Hot Roast Beef & Gravy",
        price: "$4.50",
      },
      {
        id: "homemade-sausage-roll",
        name: "Homemade Sausage Roll",
        price: "$3.50",
      },
      {
        id: "meat-pie",
        name: "Meat Pie",
        price: "$2.90",
      },
      {
        id: "piece-of-fish",
        name: "Piece of Fish",
        price: "$1.90",
      },
      {
        id: "chico-roll",
        name: "Chico Roll",
        price: "$1.90",
      },
      {
        id: "spring-roll",
        name: "Spring Roll",
        price: "$6.00",
      },
      {
        id: "chicken-dim-sim",
        name: "Chicken Dim Sim",
        price: "$9.00",
      },
      {
        id: "hot-chips-small",
        name: "Hot Chips (Small)",
        description: "Add gravy for a little extra.",
        price: "$5.00",
      },
      {
        id: "hot-chips-large",
        name: "Hot Chips (Large)",
        description: "Add gravy for a little extra.",
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
        name: "Curry Katsu with Rice",
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
    ],
  },
  {
    id: "salad-special",
    label: "Salad Special",
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
        description: "Bacon, egg, sausage, chips, salad & bread.",
        price: "$15.90",
      },
      {
        id: "chicken-katsu",
        name: "Chicken Katsu",
        description: "Schnitzel, salad, chips and rice.",
        price: "$17.90",
      },
      {
        id: "breakkie-wrap",
        name: "Breakkie Wrap",
        description: "Bacon, eggs, cheese & tomato relish.",
        price: "$11.90",
      },
      {
        id: "muffins",
        name: "Muffins",
        description: "Choc or blueberry.",
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
        price: "$3.50",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    items: [
      { id: "can-v", name: "V Energy Can 250ml", price: "$3.50" },
      { id: "vitamin-water", name: "Vitamin Water 500ml", price: "$6.00" },
      { id: "green-bottle", name: "Green Bottle 350ml", price: "$5.00" },
      { id: "mother", name: "Mother 500ml", price: "$5.00" },
      { id: "red-bull", name: "Red Bull 500ml", price: "$6.50" },
      { id: "ginger-beer", name: "Ginger Beer", price: "$4.20" },
      { id: "monster", name: "Monster", description: "Assorted flavours.", price: "$5.00" },
      { id: "iced-tea", name: "Iced Tea", description: "Peach or green tea.", price: "$4.30" },
      {
        id: "coke-600",
        name: "Coke 600ml",
        description: "Zero, original or vanilla.",
        price: "$4.50",
      },
      {
        id: "vitamin-juice",
        name: "Sam's Vitamin Juice 375ml",
        description: "Orange, apple, berry apple, green apple or guava.",
        price: "$4.80",
      },
      {
        id: "soft-drink-600",
        name: "Soft Drink 600ml",
        description: "Mountain Dew, Solo or Pepsi Max.",
        price: "$4.50",
      },
      { id: "milk-2l", name: "Milk 2L", price: "$5.50" },
      { id: "milk-1l", name: "Milk 1L", price: "$4.00" },
      { id: "milk-600", name: "Milk 600ml", price: "$3.00" },
      {
        id: "oak",
        name: "Oak Flavoured Milk",
        description: "Chocolate or strawberry.",
        price: "$4.80",
      },
      {
        id: "milkshake",
        name: "Milk Shake",
        description: "Choc, strawberry, caramel, vanilla or banana.",
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

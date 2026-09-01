export type GalleryCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type GalleryPhoto = {
  image: string;
  alt: string;
  label: string;
  /** Which corner the caption sits in — picked per photo so it lands over
   * a clear patch of background rather than the food itself. */
  corner: GalleryCorner;
  /** Intrinsic pixel size — lets the carousel card match each photo's own
   * aspect ratio exactly instead of forcing a fixed frame (which either
   * crops the photo or leaves a visible letterboxed gap around it). */
  width: number;
  height: number;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    image: "/images/BaconEggRoll.JPG",
    alt: "Bacon and egg roll",
    label: "Bacon & Egg Roll",
    corner: "top-right",
    width: 325,
    height: 301,
  },
  {
    image: "/images/BBQCharcoalChicken.JPG",
    alt: "BBQ charcoal chicken roll",
    label: "Charcoal Chicken Roll",
    corner: "top-right",
    width: 230,
    height: 215,
  },
  {
    image: "/images/BreakkieWrap.JPG",
    alt: "Breakkie wrap",
    label: "Breakkie Wrap",
    corner: "top-left",
    width: 327,
    height: 301,
  },
  {
    image: "/images/SchnitzelRoll.JPG",
    alt: "Schnitzel roll",
    label: "Schnitzel Roll",
    corner: "top-left",
    width: 226,
    height: 214,
  },
  {
    image: "/images/SpicyBBQPork.JPG",
    alt: "Spicy BBQ pork with rice",
    label: "Spicy BBQ Pork",
    corner: "bottom-right",
    width: 320,
    height: 305,
  },
  {
    image: "/images/BulgogiRoll.JPG",
    alt: "Bulgogi roll",
    label: "Bulgogi Roll",
    corner: "top-left",
    width: 326,
    height: 304,
  },
  {
    image: "/images/BurgerLOT2.JPG",
    alt: "Burger LOT",
    label: "Burger LOT",
    corner: "top-left",
    width: 228,
    height: 213,
  },
  {
    image: "/images/ChickenBreastBurger.JPG",
    alt: "Chicken breast burger",
    label: "Chicken Breast Burger",
    corner: "top-left",
    width: 226,
    height: 216,
  },
  {
    image: "/images/ChickenKatsu.JPG",
    alt: "Chicken katsu with chips and salad",
    label: "Chicken Katsu",
    corner: "bottom-right",
    width: 228,
    height: 212,
  },
  {
    image: "/images/CurryKatsu.JPG",
    alt: "Curry katsu with rice",
    label: "Curry Katsu",
    corner: "bottom-right",
    width: 225,
    height: 212,
  },
  {
    image: "/images/FoccaciaAndTurkish.JPG",
    alt: "Foccacia and Turkish bread specials",
    label: "Foccacia & Turkish Bread",
    corner: "top-right",
    width: 375,
    height: 255,
  },
  {
    image: "/images/PlainBeefBurger.JPG",
    alt: "Plain beef burger",
    label: "Plain Beef Burger",
    corner: "top-left",
    width: 325,
    height: 304,
  },
  {
    image: "/images/SandwichPlate2.JPG",
    alt: "Sandwich platter",
    label: "Sandwich Platter",
    corner: "bottom-right",
    width: 379,
    height: 256,
  },
  {
    image: "/images/SandwichPlate3.JPG",
    alt: "Sandwich platter",
    label: "Sandwich Platter",
    corner: "top-right",
    width: 376,
    height: 257,
  },
  {
    image: "/images/TwoWraps.JPG",
    alt: "Two fresh wraps",
    label: "Fresh Wraps",
    corner: "top-left",
    width: 423,
    height: 564,
  },
  {
    image: "/images/WrapPlate2.JPG",
    alt: "Wrap platter",
    label: "Wrap Platter",
    corner: "top-right",
    width: 377,
    height: 253,
  },
];

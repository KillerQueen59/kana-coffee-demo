export interface MenuItem {
  name: string;
  price: number;
  badge?: string;
  note?: string;
  description?: string;
  /** Optional dish photo. None of the source items ship with one yet — the
   * detail card falls back to a category-colored pattern panel until real
   * photography is supplied. */
  photo?: string;
}

export interface MenuCategory {
  id: string;
  chipLabel: string;
  title: string;
  /** Accent color for this category's dot icon and its items' detail-card fallback panel. */
  dotColor: string;
  items: MenuItem[];
  footnote?: { strong: string; rest: string };
}

export const categories: MenuCategory[] = [
  {
    id: "cat-espresso",
    chipLabel: "Espresso",
    title: "Espresso Based",
    dotColor: "#8A3B1F",
    items: [
      { name: "AmeriKana", price: 35, badge: "WAJIB COBA!" },
      { name: "Espresso", price: 24 },
      { name: "Americano", price: 30, note: "H/C" },
      { name: "Latte", price: 35, note: "H/C" },
      { name: "Cappuccino", price: 35, note: "H/C" },
      { name: "Piccolo", price: 32 },
      { name: "Magic", price: 30 },
      { name: "Split Shot", price: 32 },
    ],
    footnote: { strong: "TAMBAHAN 10K", rest: "— Special Beans atau Exotic Beans" },
  },
  {
    id: "cat-manual",
    chipLabel: "Manual Brew",
    title: "Manual Brew",
    dotColor: "#5C3A28",
    items: [
      { name: "V60 Drip", price: 35 },
      { name: "V60 Japanese", price: 35 },
      { name: "Spesial Beans", price: 40 },
    ],
  },
  {
    id: "cat-milk",
    chipLabel: "Coffee Milk",
    title: "Coffee Milk Based",
    dotColor: "#8A3B1F",
    items: [
      { name: "KA/NA Coffee", price: 30, badge: "WAJIB COBA!" },
      { name: "KA/NA Macchiato", price: 35 },
      { name: "KA/NA Praline", price: 35 },
      { name: "Kyoto Latte", price: 35 },
      {
        name: "Black Floral",
        price: 35,
        description: "Kopi, elderflower, dan vanilla cream — manis floral yang halus.",
      },
      { name: "Earl Grey Macchiato", price: 32 },
    ],
  },
  {
    id: "cat-mocktail",
    chipLabel: "Non-Coffee & Mocktail",
    title: "Non-Coffee & Coffee Mocktail",
    dotColor: "#6B7A4F",
    items: [
      {
        name: "Strawberry Mojito",
        price: 32,
        badge: "WAJIB COBA!",
        description: "Strawberry segar makin rame sama soda, mint, dan lemon.",
      },
      {
        name: "Cloud Berry",
        price: 35,
        description: "Kopi ala mocktail rasa strawberry-vanilla, ditutup cotton candy.",
      },
      {
        name: "The Sunrise Fizz",
        price: 32,
        description: "Jus apel + grenadine + elderflower — fruity seimbang, tetap fancy.",
      },
      {
        name: "Raspberry Blossom",
        price: 32,
        description: "Teh ala mocktail dengan raspberry dan vanilla — seger, bikin rileks.",
      },
      { name: "Bloomy KA/NA", price: 32 },
      { name: "100% KA/NA Chocolate", price: 40 },
      { name: "Choco Dream", price: 35 },
    ],
  },
  {
    id: "cat-matcha",
    chipLabel: "Matcha & Tea",
    title: "Matcha & Tea",
    dotColor: "#6B7A4F",
    items: [
      { name: "Seremonial Matcha", price: 38, badge: "WAJIB COBA!" },
      {
        name: "Matcha Latte",
        price: 35,
        description: "Matcha rich + susu creamy — kuat tapi lembut di mulut.",
      },
      {
        name: "Matcha Coconut Clear",
        price: 35,
        description: "Matcha ketemu kelapa — earthy calm dengan vibes tropis.",
      },
      {
        name: "Strawberry Greentea",
        price: 35,
        description: "Teh hijau creamy foamy + manis-asam stroberi.",
      },
      {
        name: "Strawberry Milk",
        price: 30,
        description: "Susu stroberi creamy, manis, nyegerin — buat tim fruity.",
      },
      {
        name: "Ice Lychee Tea",
        price: 30,
        description: "Teh halus, twist yuzu citrusy dan lychee lembut.",
      },
      { name: "Artisan Tea", price: 28 },
    ],
  },
  {
    id: "cat-snacks",
    chipLabel: "Snacks",
    title: "Snacks",
    dotColor: "#5C3A28",
    items: [
      {
        name: "Bola Ubi Cokelat",
        price: 30,
        description: "Ubi ungu hangat dengan isian cokelat di tengah.",
      },
      {
        name: "Pisang GR",
        price: 32,
        description: "Pisang uli balur adonan manis, renyah di luar lembut di dalam.",
      },
      {
        name: "Nachos!",
        price: 32,
        description: "Tortilla chips + saus keju homemade + daging giling gurih.",
      },
      {
        name: "Churos!",
        price: 32,
        description: "Renyah di luar, empuk di dalam — makin asik dicelup saus coklat.",
      },
      {
        name: "KA/NA Platter",
        price: 40,
        description: "Tortilla, chicken pop, sosis, dan kentang goreng — satu porsi kenyang.",
      },
      {
        name: "French Fries Truffle Oil",
        price: 40,
        description: "Kentang crinkle + parmesan + truffle oil. Simple tapi fancy!",
      },
    ],
  },
  {
    id: "cat-main",
    chipLabel: "Main Course",
    title: "Main Course",
    dotColor: "#8A3B1F",
    items: [
      { name: "Butter Rice Chicken Katsu", price: 36, badge: "WAJIB COBA!" },
      { name: "Nasi Goreng Kemangi", price: 35, badge: "WAJIB COBA!" },
      { name: "Nasi Goreng Rawon Pedas", price: 38 },
      { name: "Nasi Goreng Yangzhou", price: 35 },
      { name: "Saikoro Sambal Matah", price: 38 },
      { name: "Saikoro Menthai Sauce", price: 38 },
      { name: "Saikoro Black Pepper Sauce", price: 36 },
      { name: "Spaghetti Aglio E Olio", price: 32 },
      { name: "Spaghetti CarboKana", price: 36 },
      { name: "Nasi Ayam KA/NA", price: 36 },
      { name: "Nasi Ayam Bumbu Rujak", price: 36 },
      { name: "Nasi Ayam Bumbu Hitam", price: 36 },
      { name: "Nasi Ayam Honey Garlic Sauce", price: 36 },
    ],
  },
];

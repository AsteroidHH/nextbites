export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description:
      "Crisp artisanal crust topped with vibrant San Marzano tomato sauce, fresh buffalo mozzarella, and fragrant garden basil.",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    servings: 2,
    tags: ["Vegetarian", "Baking", "Dinner"],
  },
  {
    id: "2",
    title: "Creamy Thai Green Curry",
    description:
      "A rich, aromatic coconut curry infused with lemongrass, kaffir lime leaves, tender chicken strips, and crisp bamboo shoots.",
    cuisine: "Thai",
    minutes: 30,
    difficulty: "Medium",
    servings: 4,
    tags: ["Spicy", "Curry", "Gluten-Free"],
  },
  {
    id: "3",
    title: "Zesty Avocado Sourdough Toast",
    description:
      "Toasted rustic sourdough slathered with citrus-infused smashed avocado, soft-poached farm eggs, and red chili flakes.",
    cuisine: "Contemporary",
    minutes: 15,
    difficulty: "Easy",
    servings: 1,
    tags: ["Breakfast", "Quick", "Healthy"],
  },
  {
    id: "4",
    title: "Rich Miso Ramen with Chashu",
    description:
      "Comforting tonkotsu-miso broth loaded with handmade noodles, tender pork belly chashu, ajitsuke tamago, and sweet corn.",
    cuisine: "Japanese",
    minutes: 45,
    difficulty: "Hard",
    servings: 2,
    tags: ["Noodles", "Comfort Food", "Soup"],
  },
  {
    id: "5",
    title: "Greek Lemon Herb Chicken Souvlaki",
    description:
      "Marinated grilled chicken skewers seasoned with garlic, mountain oregano, and extra virgin olive oil, paired with creamy tzatziki.",
    cuisine: "Mediterranean",
    minutes: 35,
    difficulty: "Medium",
    servings: 4,
    tags: ["High-Protein", "Grill", "Dinner"],
  },
  {
    id: "6",
    title: "Matcha Berry Superfood Bowl",
    description:
      "A chilled ceremonial green tea and banana blend crowned with toasted coconut flakes, organic chia seeds, and wild blueberries.",
    cuisine: "Fusion",
    minutes: 10,
    difficulty: "Easy",
    servings: 1,
    tags: ["Breakfast", "Vegan", "Raw"],
  },
];

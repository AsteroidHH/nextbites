export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  tags: string[];
  ingredients?: string[];
  instructions?: string[];
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
    ingredients: [
      "1 ball pizza dough (room temperature)",
      "1/2 cup San Marzano crushed tomatoes",
      "6 oz fresh mozzarella cheese, torn",
      "Fresh basil leaves",
      "2 tbsp extra virgin olive oil",
      "Pinch of sea salt and black pepper",
    ],
    instructions: [
      "Preheat your oven and pizza stone to 500°F (260°C).",
      "Stretch dough gently on a floured surface into a 12-inch circle.",
      "Spread crushed tomatoes evenly, leaving a 1/2-inch crust edge.",
      "Scatter torn mozzarella and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is blistered and cheese is melted.",
      "Garnish with fresh basil and serve immediately.",
    ],
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
    ingredients: [
      "1 lb chicken breast, thinly sliced",
      "3 tbsp authentic green curry paste",
      "1 can (14 oz) full-fat coconut milk",
      "1 cup chicken broth",
      "1 cup bamboo shoots, drained",
      "1 cup bell peppers, sliced",
      "1 tbsp fish sauce",
      "1 tbsp palm sugar or brown sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat 2 tablespoons of coconut milk in a heavy wok until oil separates.",
      "Stir in green curry paste and sauté until fragrant (about 2 minutes).",
      "Add chicken and cook until no longer pink outside.",
      "Pour in remaining coconut milk and broth; bring to a gentle simmer.",
      "Add bamboo shoots and bell peppers; cook for 8 minutes.",
      "Season with fish sauce and sugar. Stir in Thai basil before serving with jasmine rice.",
    ],
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
    ingredients: [
      "2 thick slices artisanal sourdough bread",
      "1 ripe Hass avocado",
      "1 tbsp fresh lemon juice",
      "2 pasture-raised eggs",
      "1/4 tsp red pepper flakes",
      "Flaky sea salt and cracked black pepper",
      "Microgreens or fresh herbs for garnish",
    ],
    instructions: [
      "Toast sourdough slices until golden and sturdy.",
      "Mash avocado with lemon juice, salt, and pepper in a small bowl.",
      "Poach eggs in simmering water with a splash of vinegar for 3-4 minutes.",
      "Spread avocado generously over toast slices.",
      "Top each slice with a warm poached egg, chili flakes, and microgreens.",
    ],
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
    ingredients: [
      "2 portions fresh ramen noodles",
      "4 cups rich dashi or pork broth",
      "3 tbsp red and white miso paste blend",
      "1 tbsp toasted sesame oil",
      "4 slices braised chashu pork belly",
      "2 ramen eggs (ajitsuke tamago), halved",
      "1/2 cup sweet corn kernels",
      "2 sheets roasted nori seaweed",
      "2 scallions, finely chopped",
    ],
    instructions: [
      "Whisk miso paste and sesame oil into hot broth until completely dissolved.",
      "Boil ramen noodles in a separate pot according to package instructions; drain well.",
      "Divide hot broth into two deep bowls and add noodles.",
      "Arrange chashu slices, egg halves, corn, and nori on top.",
      "Sprinkle with chopped scallions and serve piping hot.",
    ],
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
    ingredients: [
      "1.5 lbs chicken thigh or breast, cubed",
      "1/4 cup extra virgin olive oil",
      "Juice and zest of 1 large lemon",
      "3 garlic cloves, minced",
      "1 tbsp dried Greek oregano",
      "Warm pita bread",
      "1 cup tzatziki sauce",
      "Diced cucumber, tomatoes, and kalamata olives",
    ],
    instructions: [
      "Whisk olive oil, lemon juice, garlic, oregano, salt, and pepper in a bowl.",
      "Toss chicken cubes in marinade; let rest for 15-20 minutes.",
      "Thread chicken onto skewers.",
      "Grill or sear on a hot grill pan for 10-12 minutes, turning until charred and cooked through.",
      "Serve hot with warm pita bread, tzatziki, and chopped salad.",
    ],
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
    ingredients: [
      "1.5 frozen bananas",
      "1 tsp ceremonial grade matcha powder",
      "1/2 cup baby spinach",
      "1/2 cup unsweetened almond or oat milk",
      "1/4 cup fresh wild blueberries",
      "1 tbsp chia seeds",
      "2 tbsp toasted coconut flakes and granola",
    ],
    instructions: [
      "Blend frozen bananas, matcha powder, spinach, and plant milk until thick and creamy.",
      "Pour into a chilled serving bowl.",
      "Arrange blueberries, chia seeds, and toasted coconut neatly across the surface.",
      "Enjoy immediately with a spoon.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

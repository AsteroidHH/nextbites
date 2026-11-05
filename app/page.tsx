import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero section */}
      <section className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 mb-4">
          <span>✨</span>
          <span>Fresh Weekly Picks</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
          Discover & Cook{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
            Delicious Everyday Bites
          </span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
          Explore approachable, flavor-packed recipes created for weeknight dinners, quick
          lunches, and leisurely weekend treats.
        </p>
      </section>

      {/* Grid Header / Summary */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Featured Recipes
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Handcrafted dishes tested for maximum flavor
          </p>
        </div>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
          {recipes.length} recipes available
        </span>
      </div>

      {/* Responsive Recipe Grid */}
      <section
        aria-label="Recipe List"
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </div>
  );
}

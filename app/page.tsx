import { recipes } from "./data/recipes";
import RecipeSearch from "./components/RecipeSearch";

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

      {/* Interactive Search + Grid */}
      <RecipeSearch initialRecipes={recipes} />
    </div>
  );
}
